document.addEventListener('DOMContentLoaded', () => {
  // ── DOM refs ──────────────────────────────────────────────
  const homePage          = document.getElementById('homePage');
  const sheetPage         = document.getElementById('sheetPage');
  const companiesGrid     = document.getElementById('companiesGrid');
  const companySearchInput = document.getElementById('companySearchInput');
  const backBtn           = document.getElementById('backBtn');
  const sheetCompanyName  = document.getElementById('sheetCompanyName');
  const sheetCompanyProblems = document.getElementById('sheetCompanyProblems');
  const sheetCompanyLogo  = document.getElementById('sheetCompanyLogo');
  const questionsListEl   = document.getElementById('questionsList');
  const questionSearchInput = document.getElementById('questionSearchInput');
  const progressStats     = document.getElementById('progressStats');
  const progressFill      = document.getElementById('progressFill');
  const resetBtn          = document.getElementById('resetBtn');

  // Practice modal refs
  const btnAddProblem     = document.getElementById('btnAddProblem');
  const addProblemModal   = document.getElementById('add-problem-modal');
  const btnCancelModal    = document.getElementById('btnCancelModal');
  const btnSaveProblem    = document.getElementById('btnSaveProblem');
  const diffOpts          = document.querySelectorAll('.diff-opt');
  const customProblemNumber = document.getElementById('custom-problem-number');
  const customProblemName   = document.getElementById('custom-problem-name');
  const customProblemLink   = document.getElementById('custom-problem-link');

  // Export/Import refs
  const btnExportData     = document.getElementById('btnExportData');
  const btnImportData     = document.getElementById('btnImportData');
  const importFileInput   = document.getElementById('importFileInput');

  // Progress dashboard refs
  const dailyProgressCircle = document.getElementById('daily-progress-circle');
  const dailyPercentage   = document.getElementById('daily-percentage');
  const dailyFraction     = document.getElementById('daily-fraction');
  const dailyEasyCount    = document.getElementById('daily-easy-count');
  const dailyMediumCount  = document.getElementById('daily-medium-count');
  const dailyHardCount    = document.getElementById('daily-hard-count');

  // ── State ─────────────────────────────────────────────────
  let currentCompanyId    = null;
  let questionSearchQuery = '';
  let currentSort         = 'frequency';
  let currentPracticeDiff = 'Easy';

  // ── Storage helpers ───────────────────────────────────────
  const getSolved     = () => JSON.parse(localStorage.getItem('nl_solved_global') || '[]');
  const saveSolved    = (arr) => localStorage.setItem('nl_solved_global', JSON.stringify(arr));
  const getSolveCount = () => JSON.parse(localStorage.getItem('nl_solve_count') || '{}');
  const saveSolveCount= (obj) => localStorage.setItem('nl_solve_count', JSON.stringify(obj));
  const getPracticeQs = () => JSON.parse(localStorage.getItem('nl_practice_qs') || '[]');
  const savePracticeQs= (arr) => localStorage.setItem('nl_practice_qs', JSON.stringify(arr));

  function incrementCount(qId) {
    const countMap = getSolveCount();
    countMap[qId] = (countMap[qId] || 0) + 1;
    saveSolveCount(countMap);
    return countMap[qId];
  }

  function getQuestions(companyId) {
    if (companyId === 'practice') return getPracticeQs();
    return (typeof questionsData !== 'undefined' && questionsData[companyId]) || [];
  }

  function getLeetCodeUrl(q) {
    if (q.link && q.link !== '#') return q.link;
    const slug = q.title.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  }

  function getCompanyDomain(name) {
    const map = {
      'JP Morgan':     'jpmorgan.com',
      'DE Shaw':       'deshaw.com',
      'Goldman Sachs': 'goldmansachs.com',
      'Morgan Stanley':'morganstanley.com'
    };
    return map[name] || name.toLowerCase().replace(/\s+/g, '') + '.com';
  }

  // ── Routing ───────────────────────────────────────────────
  function goHome() {
    homePage.style.display = 'block';
    sheetPage.style.display = 'none';
    currentCompanyId = null;
    questionSearchInput.value = '';
    questionSearchQuery = '';
    companiesGrid.style.display = 'grid';
    const sr = document.getElementById('globalSearchResults');
    if (sr) sr.style.display = 'none';
    companySearchInput.value = '';
    renderCompanies();
    updatePracticeProgress();
  }

  function goSheet(companyId) {
    homePage.style.display = 'none';
    sheetPage.style.display = 'block';
    currentCompanyId = companyId;

    const company   = companiesData.find(c => c.id === companyId);
    const questions = getQuestions(companyId);

    if (company) {
      sheetCompanyName.textContent = company.name;
      const domain = getCompanyDomain(company.name);
      sheetCompanyLogo.style.background = '#fff';
      sheetCompanyLogo.style.border     = '1px solid #eee';
      sheetCompanyLogo.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128"
        onerror="this.outerHTML='<div class=fallback-icon>${company.icon}</div>'"
        style="width:100%;height:100%;object-fit:contain;border-radius:12px;padding:2px;">`;
      sheetCompanyProblems.textContent = `${questions.length} Problems`;
    }

    questionSearchInput.value = '';
    questionSearchQuery = '';
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) { sortSelect.value = 'frequency'; currentSort = 'frequency'; }

    updateProgress();
    renderQuestions();
  }

  backBtn.addEventListener('click', goHome);

  // ── Home tabs ─────────────────────────────────────────────
  const tabAllSheets = document.getElementById('tabAllSheets');
  const tabRevision  = document.getElementById('tabRevision');
  if (tabAllSheets) {
    tabAllSheets.addEventListener('click', () => {
      tabAllSheets.classList.add('active');
      tabRevision.classList.remove('active');
      renderCompanies();
    });
  }
  if (tabRevision) {
    tabRevision.addEventListener('click', () => {
      tabRevision.classList.add('active');
      tabAllSheets.classList.remove('active');
      renderCompanies(true);
    });
  }

  const sortSelectEl = document.getElementById('sortSelect');
  if (sortSelectEl) {
    sortSelectEl.addEventListener('change', (e) => { currentSort = e.target.value; renderQuestions(); });
  }

  // ── Company progress ──────────────────────────────────────
  function getCompanyProgress(companyId) {
    const globalSolved = getSolved();
    const questions    = getQuestions(companyId);
    const solvedCount  = globalSolved.filter(id => questions.some(q => q.id === id)).length;
    return { solved: solvedCount, total: questions.length };
  }

  // ── Render companies grid ─────────────────────────────────
  function renderCompanies(onlyRevision = false) {
    companiesGrid.innerHTML = '';

    let mapped = companiesData.map(c => {
      const { solved, total } = getCompanyProgress(c.id);
      return { ...c, solved, total };
    });

    if (onlyRevision) {
      mapped = mapped.filter(c => c.solved > 0);
    }

    mapped.sort((a, b) => {
      if (a.id === 'practice') return -1;
      if (b.id === 'practice') return 1;
      if (a.total > 0 && b.total === 0) return -1;
      if (b.total > 0 && a.total === 0) return 1;
      return b.total - a.total;
    });

    mapped.forEach(c => {
      const { solved, total } = c;
      const pct  = total > 0 ? Math.round((solved / total) * 100) : 0;
      const card = document.createElement('div');
      card.className = 'company-card';

      const domain  = getCompanyDomain(c.name);
      const logoHtml = c.id === 'practice'
        ? `<div class="fallback-icon">${c.icon}</div>`
        : `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=64"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
             style="width:100%;height:100%;object-fit:contain;border-radius:8px;padding:2px;">
           <div class="fallback-icon" style="display:none;">${c.icon}</div>`;

      card.innerHTML = `
        <div class="c-card-left">
          <div class="c-logo" style="position:relative;background:#fff;border:1px solid #eee;overflow:hidden;">${logoHtml}</div>
          <div class="c-info">
            <h3>${c.name}</h3>
            <p>${total} Problems${total > 0 ? ` &bull; ${solved} solved` : ''}</p>
          </div>
        </div>
        ${total > 0
          ? `<div class="card-progress-ring" title="${pct}% done">
               <svg width="36" height="36" viewBox="0 0 36 36">
                 <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border-color)" stroke-width="3"/>
                 <circle cx="18" cy="18" r="15" fill="none" stroke="var(--accent)" stroke-width="3"
                   stroke-dasharray="${Math.round(pct * 0.942)} 100"
                   stroke-dashoffset="25" stroke-linecap="round" transform="rotate(-90 18 18)"/>
               </svg>
               <span class="ring-pct">${pct}%</span>
             </div>`
          : '<svg class="star-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'}
      `;
      card.addEventListener('click', () => goSheet(c.id));
      companiesGrid.appendChild(card);
    });
  }

  // ── Global question search ────────────────────────────────
  function renderGlobalSearch(query) {
    const lq = query.toLowerCase();
    companiesGrid.style.display = 'none';
    const resultsEl = document.getElementById('globalSearchResults');
    resultsEl.style.display = 'flex';
    resultsEl.innerHTML = '';

    const seen = new Set();
    const allQs = [];
    companiesData.forEach(c => {
      getQuestions(c.id).forEach(q => {
        if (!seen.has(q.id)) {
          seen.add(q.id);
          allQs.push({ ...q, companyName: c.name });
        }
      });
    });

    const filtered = allQs
      .filter(q => q.title.toLowerCase().includes(lq) || q.id.toString().includes(lq))
      .slice(0, 50);

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted)">No questions found.</div>';
      return;
    }

    const globalSolved = getSolved();
    filtered.forEach(q => {
      const isSolved = globalSolved.includes(q.id);
      const row = document.createElement('div');
      row.className = 'question-row' + (isSolved ? ' solved-row' : '');
      row.innerHTML = `
        <div class="q-left">
          <a href="${getLeetCodeUrl(q)}" target="_blank" rel="noopener" class="q-title">
            <span class="q-num">${q.id}.</span> ${q.title}
            <span style="font-size:10px;color:var(--text-muted);margin-left:8px;">(${q.companyName})</span>
          </a>
        </div>
        <div class="q-right">
          <span class="q-diff diff-${q.difficulty.includes('Med') ? 'Med' : q.difficulty}">${q.difficulty}</span>
          <svg class="q-status ${isSolved ? 'solved' : ''}" data-id="${q.id}" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>`;
      row.querySelector('.q-status').addEventListener('click', e => {
        e.preventDefault();
        toggleSolveGlobal(q.id);
        renderGlobalSearch(query);
      });
      resultsEl.appendChild(row);
    });
  }

  companySearchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    if (val.length > 0) {
      renderGlobalSearch(val);
    } else {
      companiesGrid.style.display = 'grid';
      const sr = document.getElementById('globalSearchResults');
      if (sr) sr.style.display = 'none';
      renderCompanies();
    }
  });

  // ── Overall progress dashboard ────────────────────────────
  function updatePracticeProgress() {
    const globalSolved = getSolved();
    const uniqueQs = new Map();

    companiesData.forEach(c => {
      getQuestions(c.id).forEach(q => {
        if (!uniqueQs.has(q.id)) uniqueQs.set(q.id, q);
      });
    });

    let totalSolved = 0, easySolved = 0, easyTotal = 0;
    let medSolved = 0, medTotal = 0, hardSolved = 0, hardTotal = 0;

    uniqueQs.forEach((q, id) => {
      const isSolved = globalSolved.includes(id);
      if (isSolved) totalSolved++;
      const diff = q.difficulty || 'Easy';
      if (diff === 'Easy')          { easyTotal++;  if (isSolved) easySolved++; }
      else if (diff.includes('Med')){ medTotal++;   if (isSolved) medSolved++;  }
      else                          { hardTotal++;  if (isSolved) hardSolved++; }
    });

    const total = uniqueQs.size;
    dailyFraction.textContent     = `${totalSolved} / ${total}`;
    dailyEasyCount.textContent    = `${easySolved} / ${easyTotal}`;
    dailyMediumCount.textContent  = `${medSolved} / ${medTotal}`;
    dailyHardCount.textContent    = `${hardSolved} / ${hardTotal}`;

    const pct    = total > 0 ? Math.round((totalSolved / total) * 100) : 0;
    dailyPercentage.textContent   = pct + '%';
    const C      = 251.2;
    dailyProgressCircle.style.strokeDashoffset = C - (pct / 100) * C;
  }

  // ── Sheet page progress bar ───────────────────────────────
  function updateProgress() {
    const questions   = getQuestions(currentCompanyId);
    const globalSolved= getSolved();
    const total       = questions.length;
    const solvedCount = globalSolved.filter(id => questions.some(q => q.id === id)).length;
    const pct         = total === 0 ? 0 : ((solvedCount / total) * 100).toFixed(1);
    progressStats.textContent = `${solvedCount}/${total} (${pct}%)`;
    progressFill.style.width  = `${pct}%`;
  }

  // ── Toggle solved ─────────────────────────────────────────
  function toggleSolve(qId) {
    let solved   = getSolved();
    const countMap = getSolveCount();
    if (solved.includes(qId)) {
      solved = solved.filter(id => id !== qId);
    } else {
      solved.push(qId);
      countMap[qId] = (countMap[qId] || 0) + 1;
      saveSolveCount(countMap);
    }
    saveSolved(solved);
    updateProgress();
    updatePracticeProgress();

    // Update row in place
    const icon = questionsListEl.querySelector(`.q-status[data-id="${qId}"]`);
    if (icon) icon.classList.toggle('solved', solved.includes(qId));
    const row = icon && icon.closest('.question-row');
    if (row) {
      row.classList.toggle('solved-row', solved.includes(qId));
      const badge = row.querySelector('.q-solve-count');
      if (badge) { badge.textContent = `×${countMap[qId] || 0}`; badge.style.opacity = countMap[qId] > 0 ? '1' : '0'; }
    }
  }

  // For global search where currentCompanyId is null
  function toggleSolveGlobal(qId) {
    let solved   = getSolved();
    const countMap = getSolveCount();
    if (solved.includes(qId)) {
      solved = solved.filter(id => id !== qId);
    } else {
      solved.push(qId);
      countMap[qId] = (countMap[qId] || 0) + 1;
      saveSolveCount(countMap);
    }
    saveSolved(solved);
    updatePracticeProgress();
  }

  resetBtn.addEventListener('click', () => {
    if (!confirm('Reset all solved marks and counts for this company?')) return;
    const questions  = getQuestions(currentCompanyId);
    const companyIds = new Set(questions.map(q => q.id));
    // Reset solved state
    saveSolved(getSolved().filter(id => !companyIds.has(id)));
    // Reset counts to 0
    const countMap = getSolveCount();
    companyIds.forEach(id => { delete countMap[id]; });
    saveSolveCount(countMap);
    updateProgress();
    updatePracticeProgress();
    renderQuestions();
  });

  // ── Render question list ──────────────────────────────────
  function renderQuestions() {
    const allQuestions = getQuestions(currentCompanyId);
    const lq = questionSearchQuery.toLowerCase();

    let filtered = lq
      ? allQuestions.filter(q => q.title.toLowerCase().includes(lq) || q.id.toString().includes(lq))
      : [...allQuestions];

    if (currentSort === 'id') {
      filtered.sort((a, b) => a.id - b.id);
    } else if (currentSort === 'difficulty') {
      const dr = { 'Easy': 1, 'Med.': 2, 'Med': 2, 'Medium': 2, 'Hard': 3 };
      filtered.sort((a, b) => (dr[a.difficulty] || 0) - (dr[b.difficulty] || 0));
    }

    questionsListEl.innerHTML = '';

    if (filtered.length === 0) {
      questionsListEl.innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-muted)">No questions found.</div>';
      return;
    }

    const globalSolved = getSolved();
    const countMap     = getSolveCount();
    const isPractice   = currentCompanyId === 'practice';
    const diffClass    = { 'Easy': 'easy', 'Med.': 'Med', 'Med': 'Med', 'Medium': 'Med', 'Hard': 'Hard' };

    filtered.forEach(q => {
      const isSolved = globalSolved.includes(q.id);
      const count    = countMap[q.id] || 0;
      const bars     = q.bars || 5;
      const dc       = diffClass[q.difficulty] || 'Med';
      const barColor = q.difficulty === 'Easy' ? '' : q.difficulty === 'Hard' ? 'hard' : 'med';

      const row = document.createElement('div');
      row.className = 'question-row' + (isSolved ? ' solved-row' : '');

      const deleteBtn = isPractice
        ? `<svg class="q-trash" data-id="${q.id}" viewBox="0 0 24 24" width="16" height="16"
             stroke="var(--color-hard)" stroke-width="2" fill="none" title="Delete"
             style="cursor:pointer;opacity:0.6;flex-shrink:0;">
             <polyline points="3 6 5 6 21 6"/>
             <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
             <path d="M10 11v6M14 11v6"/>
           </svg>`
        : '';

      row.innerHTML = `
        <div class="q-left">
          <a href="${getLeetCodeUrl(q)}" target="_blank" rel="noopener" class="q-title">
            <span class="q-num">${q.id}.</span> ${q.title}
          </a>
        </div>
        <div class="q-right">
          <span class="q-acc">${q.acceptance || ''}</span>
          <button class="q-count-btn" data-id="${q.id}" title="Times practiced — click to increment">${count}</button>
          <span class="q-diff diff-${dc}">${q.difficulty}</span>
          <svg class="q-status ${isSolved ? 'solved' : ''}" data-id="${q.id}" viewBox="0 0 24 24" width="18" height="18"
            stroke="currentColor" stroke-width="2.5" fill="none" title="${isSolved ? 'Mark unsolved' : 'Mark solved'}">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <svg class="q-doc" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" title="Notes">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
          <div class="q-freq">
            ${[1,2,3,4,5,6].map(i => `<div class="f-bar ${i <= bars ? 'filled ' + barColor : ''}"></div>`).join('')}
          </div>
          ${deleteBtn}
        </div>`;
      questionsListEl.appendChild(row);
    });

    questionsListEl.querySelectorAll('.q-status').forEach(icon => {
      icon.addEventListener('click', e => { e.preventDefault(); toggleSolve(parseInt(e.currentTarget.dataset.id)); });
    });

    questionsListEl.querySelectorAll('.q-count-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const qId = parseInt(e.currentTarget.dataset.id);
        const newCount = incrementCount(qId);
        e.currentTarget.textContent = newCount;
        e.currentTarget.classList.add('bumped');
        setTimeout(() => e.currentTarget.classList.remove('bumped'), 300);
      });
    });

    questionsListEl.querySelectorAll('.q-trash').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const id = parseInt(e.currentTarget.dataset.id);
        if (!confirm('Remove this question from Practice?')) return;
        savePracticeQs(getPracticeQs().filter(q => q.id !== id));
        renderQuestions();
        updateProgress();
        updatePracticeProgress();
        renderCompanies();
      });
    });
  }

  questionSearchInput.addEventListener('input', e => {
    questionSearchQuery = e.target.value;
    renderQuestions();
  });

  // ── Add Problem Modal ─────────────────────────────────────
  btnAddProblem.addEventListener('click', () => { addProblemModal.style.display = 'flex'; });
  btnCancelModal.addEventListener('click', () => { addProblemModal.style.display = 'none'; });
  window.addEventListener('click', e => { if (e.target === addProblemModal) addProblemModal.style.display = 'none'; });

  diffOpts.forEach(btn => {
    btn.addEventListener('click', e => {
      diffOpts.forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      currentPracticeDiff = e.target.dataset.diff;
    });
  });

  btnSaveProblem.addEventListener('click', () => {
    const name = customProblemName.value.trim();
    if (!name) return alert('Problem Name is required');

    const practiceQs = getPracticeQs();
    if (practiceQs.some(q => q.title.toLowerCase() === name.toLowerCase())) {
      return alert('This problem is already in your Practice list.');
    }

    const num  = customProblemNumber.value.trim();
    const link = customProblemLink.value.trim() || '#';
    const newQ = {
      id:         num ? (parseInt(num) || Date.now()) : Date.now(),
      num:        num || (practiceQs.length + 1).toString(),
      title:      name,
      link:       link,
      difficulty: currentPracticeDiff,
      acceptance: '—',
      bars:       6
    };

    savePracticeQs([...practiceQs, newQ]);
    customProblemName.value = '';
    customProblemNumber.value = '';
    customProblemLink.value = '';
    addProblemModal.style.display = 'none';

    renderCompanies();
    updatePracticeProgress();
  });

  // ── Export / Import ───────────────────────────────────────
  if (btnExportData) {
    btnExportData.addEventListener('click', () => {
      const data = {
        nl_solved_global: getSolved(),
        nl_solve_count: getSolveCount(),
        nl_practice_qs: getPracticeQs()
      };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `my_dsa_sheet_backup_${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  if (btnImportData && importFileInput) {
    btnImportData.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (data.nl_solved_global) saveSolved(data.nl_solved_global);
          if (data.nl_solve_count) saveSolveCount(data.nl_solve_count);
          if (data.nl_practice_qs) savePracticeQs(data.nl_practice_qs);
          alert('Data imported successfully!');
          window.location.reload();
        } catch (err) {
          alert('Invalid backup file.');
        }
      };
      reader.readAsText(file);
    });
  }

  // ── Init ──────────────────────────────────────────────────
  goHome();
});

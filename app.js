document.addEventListener('DOMContentLoaded', () => {
  const homePage = document.getElementById('homePage');
  const sheetPage = document.getElementById('sheetPage');
  const navHome = document.getElementById('navHome');
  const navCompanySheet = document.getElementById('navCompanySheet');
  const companiesGrid = document.getElementById('companiesGrid');
  const companySearchInput = document.getElementById('companySearchInput');
  const backBtn = document.getElementById('backBtn');
  const sheetCompanyName = document.getElementById('sheetCompanyName');
  const sheetCompanyProblems = document.getElementById('sheetCompanyProblems');
  const sheetCompanyLogo = document.getElementById('sheetCompanyLogo');
  const questionsListEl = document.getElementById('questionsList');
  const questionSearchInput = document.getElementById('questionSearchInput');
  const progressStats = document.getElementById('progressStats');
  const progressFill = document.getElementById('progressFill');
  const resetBtn = document.getElementById('resetBtn');

  let currentCompanyId = null;
  let questionSearchQuery = '';
  let currentSort = 'frequency';

  // Practice DOM Elements
  const btnAddProblem = document.getElementById('btnAddProblem');
  const addProblemModal = document.getElementById('add-problem-modal');
  const btnCancelModal = document.getElementById('btnCancelModal');
  const btnSaveProblem = document.getElementById('btnSaveProblem');
  const diffOpts = document.querySelectorAll('.diff-opt');
  const customProblemNumber = document.getElementById('custom-problem-number');
  const customProblemName = document.getElementById('custom-problem-name');
  const customProblemLink = document.getElementById('custom-problem-link');
  
  // Progress DOM
  const dailyProgressCircle = document.getElementById('daily-progress-circle');
  const dailyPercentage = document.getElementById('daily-percentage');
  const dailyFraction = document.getElementById('daily-fraction');
  const dailyEasyCount = document.getElementById('daily-easy-count');
  const dailyMediumCount = document.getElementById('daily-medium-count');
  const dailyHardCount = document.getElementById('daily-hard-count');

  // Global solved state based on question ID
  function getSolved(companyId) {
    return JSON.parse(localStorage.getItem('nl_solved_global') || '[]');
  }
  function saveSolved(companyId, arr) {
    localStorage.setItem('nl_solved_global', JSON.stringify(arr));
  }

  // Get questions array for a given company id
  function getQuestions(companyId) {
    if (companyId === 'practice') {
      return JSON.parse(localStorage.getItem('nl_practice_qs') || '[]');
    }
    return questionsData[companyId] || [];
  }

  // Build LeetCode URL using question id (most reliable)
  function getLeetCodeUrl(q) {
    if (q.link) return q.link;
    const slug = q.title.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    return `https://leetcode.com/problems/${slug}/`;
  }

  // --- ROUTING ---
  function goHome() {
    homePage.style.display = 'block';
    sheetPage.style.display = 'none';
    currentCompanyId = null;
    questionSearchInput.value = '';
    questionSearchQuery = '';
    renderCompanies();
    updatePracticeProgress();
  }

  function goSheet(companyId) {
    homePage.style.display = 'none';
    sheetPage.style.display = 'block';
    currentCompanyId = companyId;

    const company = companiesData.find(c => c.id === companyId);
    const questions = getQuestions(companyId);

    if (company) {
      sheetCompanyName.textContent = company.name;
      const getDomain = (name) => {
        const map = {
          'JP Morgan': 'jpmorgan.com',
          'DE Shaw': 'deshaw.com',
          'Goldman Sachs': 'goldmansachs.com',
          'Morgan Stanley': 'morganstanley.com'
        };
        return map[name] || name.toLowerCase().replace(/\s+/g, '') + '.com';
      };
      const domain = getDomain(company.name);
      sheetCompanyLogo.style.background = '#fff';
      sheetCompanyLogo.style.border = '1px solid #eee';
      sheetCompanyLogo.innerHTML = `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=128" onerror="this.outerHTML='<div class=fallback-icon>${company.icon}</div>'" style="width:100%;height:100%;object-fit:contain;border-radius:12px;padding:2px;">`;
      sheetCompanyProblems.textContent = `${questions.length} Problems`;
    }

    questionSearchInput.value = '';
    questionSearchQuery = '';
    
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.value = 'frequency';
      currentSort = 'frequency';
    }

    updateProgress();
    renderQuestions();
  }

  backBtn.addEventListener('click', goHome);

  // Home Page Tabs
  const tabAllSheets = document.getElementById('tabAllSheets');
  const tabRevision = document.getElementById('tabRevision');

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
      renderCompanies(true); // Filter for revision (solved > 0)
    });
  }

  const sortSelectEl = document.getElementById('sortSelect');
  if (sortSelectEl) {
    sortSelectEl.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderQuestions();
    });
  }

  // --- HOME PAGE ---
  function getCompanyProgress(companyId) {
    const solved = getSolved(companyId);
    const total = getQuestions(companyId).length;
    return { solved: solved.length, total };
  }

  function renderCompanies(onlyRevision = false) {
    companiesGrid.innerHTML = '';
    const searchVal = (companySearchInput.value || '').toLowerCase();
    
    // Map data to include progress
    let mapped = companiesData.map(c => {
      const { solved, total } = getCompanyProgress(c.id);
      return { ...c, solved, total };
    });

    let filtered = mapped.filter(c => c.name.toLowerCase().includes(searchVal));

    if (onlyRevision) {
      filtered = filtered.filter(c => c.solved > 0);
    }

    // Sort so companies with questions are on top, ordered by total problems
    filtered.sort((a, b) => {
      if (a.total > 0 && b.total === 0) return -1;
      if (b.total > 0 && a.total === 0) return 1;
      return b.total - a.total;
    });

    const getDomain = (name) => {
      const map = {
        'JP Morgan': 'jpmorgan.com',
        'DE Shaw': 'deshaw.com',
        'Goldman Sachs': 'goldmansachs.com',
        'Morgan Stanley': 'morganstanley.com',
        'NextLeet': 'nextleet.com'
      };
      return map[name] || name.toLowerCase().replace(/\s+/g, '') + '.com';
    };

    filtered.forEach(c => {
      const { solved, total } = c;
      const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
      const card = document.createElement('div');
      card.className = 'company-card';
      
      const domain = getDomain(c.name);
      const logoHtml = c.id === 'practice' 
        ? `<div class="fallback-icon">${c.icon}</div>` 
        : `<img src="https://www.google.com/s2/favicons?domain=${domain}&sz=64" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width:100%;height:100%;object-fit:contain;border-radius:8px;padding:2px;">
           <div class="fallback-icon" style="display:none;">${c.icon}</div>`;

      card.innerHTML = `
        <div class="c-card-left">
          <div class="c-logo" style="position:relative;background:#fff;border:1px solid #eee;overflow:hidden;">${logoHtml}</div>
          <div class="c-info">
            <h3>${c.name}</h3>
            <p>${total} Problems${total > 0 ? ` &bull; ${solved} solved` : ''}</p>
          </div>
        </div>
        ${total > 0 ? `<div class="card-progress-ring" title="${pct}% done">
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border-color)" stroke-width="3"/>
            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--accent)" stroke-width="3"
              stroke-dasharray="${Math.round(pct * 0.942)} 100"
              stroke-dashoffset="25" stroke-linecap="round" transform="rotate(-90 18 18)"/>
          </svg>
          <span class="ring-pct">${pct}%</span>
        </div>` : '<svg class="star-icon" viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'}
      `;
      card.addEventListener('click', () => goSheet(c.id));
      companiesGrid.appendChild(card);
    });
  }

  function renderGlobalSearch(query) {
    const lq = query.toLowerCase();
    companiesGrid.style.display = 'none';
    const resultsEl = document.getElementById('globalSearchResults');
    resultsEl.style.display = 'flex';
    resultsEl.innerHTML = '';

    const allQs = [];
    const globalSolved = getSolved();

    // Collect all questions
    companiesData.forEach(c => {
      const qs = getQuestions(c.id);
      qs.forEach(q => {
        if (!allQs.some(existing => existing.id === q.id)) {
          allQs.push({ ...q, companyName: c.name });
        }
      });
    });

    const filtered = allQs.filter(q => 
      q.title.toLowerCase().includes(lq) || 
      q.id.toString().includes(lq)
    ).slice(0, 50); // Limit to 50 results for performance

    if (filtered.length === 0) {
      resultsEl.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted)">No questions found matching your search.</div>';
      return;
    }

    filtered.forEach(q => {
      const isSolved = globalSolved.includes(q.id);
      const row = document.createElement('div');
      row.className = 'question-row' + (isSolved ? ' solved-row' : '');
      row.innerHTML = `
        <div class="q-left">
          <a href="${getLeetCodeUrl(q)}" target="_blank" rel="noopener" class="q-title">
            <span class="q-num">${q.id}.</span> ${q.title}
            <span style="font-size:10px; color:var(--text-muted); margin-left:8px; opacity:0.7;">(${q.companyName})</span>
          </a>
        </div>
        <div class="q-right">
          <span class="q-diff diff-${q.difficulty.includes('Med') ? 'Med' : q.difficulty}">${q.difficulty}</span>
          <svg class="q-status ${isSolved ? 'solved' : ''}" data-id="${q.id}" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
      `;
      row.querySelector('.q-status').addEventListener('click', (e) => {
        e.preventDefault();
        toggleSolve(q.id);
        renderGlobalSearch(query); // re-render to update status
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
      document.getElementById('globalSearchResults').style.display = 'none';
      renderCompanies();
    }
  });

  // --- PRACTICE PROGRESS DASHBOARD ---
  function updatePracticeProgress() {
    const practiceQs = getQuestions('practice');
    const globalSolved = getSolved();
    
    // Use a Map to track unique questions by ID
    const uniqueQs = new Map();

    // Collect all unique questions from companies
    companiesData.forEach(c => {
      if (c.id === 'practice') return;
      const qs = questionsData[c.id] || [];
      qs.forEach(q => {
        if (!uniqueQs.has(q.id)) {
          uniqueQs.set(q.id, q);
        }
      });
    });

    // Collect unique questions from practice
    practiceQs.forEach(q => {
      if (!uniqueQs.has(q.id)) {
        uniqueQs.set(q.id, q);
      }
    });

    let totalSolvedCount = 0;
    let easySolved = 0, easyTotal = 0;
    let medSolved = 0, medTotal = 0;
    let hardSolved = 0, hardTotal = 0;

    uniqueQs.forEach((q, id) => {
      const isSolved = globalSolved.includes(id);
      if (isSolved) totalSolvedCount++;

      const diff = q.difficulty || 'Easy';
      if (diff === 'Easy') {
        easyTotal++;
        if (isSolved) easySolved++;
      } else if (diff.includes('Med')) {
        medTotal++;
        if (isSolved) medSolved++;
      } else {
        hardTotal++;
        if (isSolved) hardSolved++;
      }
    });

    const totalQuestions = uniqueQs.size;
    dailyFraction.textContent = `${totalSolvedCount} / ${totalQuestions}`;
    dailyEasyCount.textContent = `${easySolved} / ${easyTotal}`;
    dailyMediumCount.textContent = `${medSolved} / ${medTotal}`;
    dailyHardCount.textContent = `${hardSolved} / ${hardTotal}`;

    const pct = totalQuestions > 0 ? Math.round((totalSolvedCount / totalQuestions) * 100) : 0;
    dailyPercentage.textContent = pct + '%';
    
    const C = 251.2;
    const offset = C - (pct / 100) * C;
    dailyProgressCircle.style.strokeDashoffset = offset;
  }

  // --- SHEET PAGE ---
  function updateProgress() {
    const questions = getQuestions(currentCompanyId);
    const solved = getSolved(currentCompanyId);
    const total = questions.length;
    const solvedCount = solved.filter(id => questions.some(q => q.id === id)).length;
    const pct = total === 0 ? 0 : ((solvedCount / total) * 100).toFixed(1);
    progressStats.textContent = `${solvedCount}/${total} (${pct}%)`;
    progressFill.style.width = `${pct}%`;
  }

  function toggleSolve(qId) {
    let solved = getSolved(currentCompanyId);
    if (solved.includes(qId)) {
      solved = solved.filter(id => id !== qId);
    } else {
      solved.push(qId);
    }
    saveSolved(currentCompanyId, solved);
    updateProgress();
    updatePracticeProgress();
    // Just update the clicked row visually without full re-render
    const icon = questionsListEl.querySelector(`.q-status[data-id="${qId}"]`);
    if (icon) icon.classList.toggle('solved', solved.includes(qId));
    const row = icon && icon.closest('.question-row');
    if (row) row.classList.toggle('solved-row', solved.includes(qId));
  }

  resetBtn.addEventListener('click', () => {
    if (confirm('Reset progress for this company?')) {
      saveSolved(currentCompanyId, []);
      updateProgress();
      renderQuestions();
    }
  });

  function renderQuestions() {
    const allQuestions = getQuestions(currentCompanyId);
    const solved = getSolved(currentCompanyId);
    const lq = questionSearchQuery.toLowerCase();

    let filtered = lq
      ? allQuestions.filter(q => q.title.toLowerCase().includes(lq) || q.id.toString().includes(lq))
      : [...allQuestions];

    if (currentSort === 'id') {
      filtered.sort((a, b) => a.id - b.id);
    } else if (currentSort === 'difficulty') {
      const diffRank = { 'Easy': 1, 'Med.': 2, 'Hard': 3, 'Med': 2 };
      filtered.sort((a, b) => (diffRank[a.difficulty] || 0) - (diffRank[b.difficulty] || 0));
    }

    questionsListEl.innerHTML = '';

    if (filtered.length === 0) {
      questionsListEl.innerHTML = '<div style="padding:30px;text-align:center;color:var(--text-muted)">No questions found.</div>';
      return;
    }

    const diffClass = { 'Easy': 'easy', 'Med.': 'Med', 'Hard': 'Hard' };

    filtered.forEach(q => {
      const isSolved = solved.includes(q.id);
      const row = document.createElement('div');
      row.className = 'question-row' + (isSolved ? ' solved-row' : '');

      const bars = q.bars || 5;
      const dc = diffClass[q.difficulty] || 'Med';
      const barColor = q.difficulty === 'Easy' ? '' : q.difficulty === 'Hard' ? 'hard' : 'med';

      row.innerHTML = `
        <div class="q-left">
          <a href="${getLeetCodeUrl(q)}" target="_blank" rel="noopener" class="q-title">
            <span class="q-num">${q.id}.</span> ${q.title}
          </a>
        </div>
        <div class="q-right">
          <span class="q-acc">${q.acceptance}</span>
          <span class="q-diff diff-${dc}">${q.difficulty}</span>
          <svg class="q-status ${isSolved ? 'solved' : ''}" data-id="${q.id}" viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2.5" fill="none" title="${isSolved ? 'Mark unsolved' : 'Mark solved'}">
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
        </div>
      `;
      questionsListEl.appendChild(row);
    });

    questionsListEl.querySelectorAll('.q-status').forEach(icon => {
      icon.addEventListener('click', e => {
        e.preventDefault();
        toggleSolve(parseInt(e.currentTarget.dataset.id));
      });
    });
  }

  questionSearchInput.addEventListener('input', e => {
    questionSearchQuery = e.target.value;
    renderQuestions();
  });

  // --- MODAL LOGIC ---
  let currentPracticeDiff = 'Easy';

  btnAddProblem.addEventListener('click', () => {
    addProblemModal.style.display = 'flex';
  });
  btnCancelModal.addEventListener('click', () => {
    addProblemModal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === addProblemModal) addProblemModal.style.display = 'none';
  });

  diffOpts.forEach(btn => {
    btn.addEventListener('click', (e) => {
      diffOpts.forEach(b => b.classList.remove('selected'));
      e.target.classList.add('selected');
      currentPracticeDiff = e.target.dataset.diff;
    });
  });

  btnSaveProblem.addEventListener('click', () => {
    const name = customProblemName.value.trim();
    if (!name) return alert('Problem Name is required');
    
    let practiceQs = JSON.parse(localStorage.getItem('nl_practice_qs') || '[]');
    
    // Do not add repeated questions
    if (practiceQs.some(q => q.title.toLowerCase() === name.toLowerCase())) {
      return alert('This problem is already in your Practice list.');
    }

    const num = customProblemNumber.value.trim() || (practiceQs.length + 1).toString();
    const link = customProblemLink.value.trim() || '#';

    const newQ = {
      id: parseInt(num) || Date.now(),
      num: num,
      title: name,
      link: link,
      difficulty: currentPracticeDiff,
      acceptance: '100%',
      bars: 6
    };

    practiceQs.push(newQ);
    localStorage.setItem('nl_practice_qs', JSON.stringify(practiceQs));
    
    customProblemName.value = '';
    customProblemNumber.value = '';
    customProblemLink.value = '';
    addProblemModal.style.display = 'none';
    
    renderCompanies();
    updatePracticeProgress();
  });

  // Init
  goHome();
});

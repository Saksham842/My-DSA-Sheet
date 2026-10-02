// ==========================================================================
// NEXTLEET SYSTEM DESIGN CLONE JAVASCRIPT ENGINE
// ==========================================================================

(function() {
  const root = typeof window !== 'undefined' ? window : globalThis;

  // AI Providers configuration with official icons
  const AI_PROVIDERS = [
    {
      id: 'chatgpt',
      name: 'ChatGPT',
      url: (prompt) => `https://chat.openai.com/?hints=think&prompt=${prompt}`,
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 shrink-0"><path d="M21.55 10.004a5.416 5.416 0 00-.478-4.501c-1.217-2.09-3.662-3.166-6.05-2.66A5.59 5.59 0 0010.831 1C8.39.995 6.224 2.546 5.473 4.838A5.553 5.553 0 001.76 7.496a5.487 5.487 0 00.691 6.5 5.416 5.416 0 00.477 4.502c1.217 2.09 3.662 3.165 6.05 2.66A5.586 5.586 0 0013.168 23c2.443.006 4.61-1.546 5.361-3.84a5.553 5.553 0 003.715-2.66 5.488 5.488 0 00-.693-6.497v.001zm-8.381 11.558a4.199 4.199 0 01-2.675-.954c.034-.018.093-.05.132-.074l4.44-2.53a.71.71 0 00.364-.623v-6.176l1.877 1.069c.02.01.033.029.036.05v5.115c-.003 2.274-1.87 4.118-4.174 4.123zM4.192 17.78a4.059 4.059 0 01-.498-2.763c.032.02.09.055.131.078l4.44 2.53c.225.13.504.13.73 0l5.42-3.088v2.138a.068.068 0 01-.027.057L9.9 19.288c-1.999 1.136-4.552.46-5.707-1.51h-.001zM3.023 8.216A4.15 4.15 0 015.198 6.41l-.002.151v5.06a.711.711 0 00.364.624l5.42 3.087-1.876 1.07a.067.067 0 01-.063.005l-4.489-2.559c-1.995-1.14-2.679-3.658-1.53-5.63h.001zm15.417 3.54l-5.42-3.088L14.896 7.6a.067.067 0 01.063-.006l4.489 2.557c1.998 1.14 2.683 3.662 1.529 5.633a4.163 4.163 0 01-2.174 1.807V12.38a.71.71 0 00-.363-.623zm1.867-2.773a6.04 6.04 0 00-.132-.078l-4.44-2.53a.731.731 0 00-.729 0l-5.42 3.088V7.325a.068.068 0 01.027-.057L14.1 4.713c2-1.137 4.555-.46 5.707 1.513.487.833.664 1.809.499 2.757h.001zm-11.741 3.81l-1.877-1.068a.065.065 0 01-.036-.051V6.559c.001-2.277 1.873-4.122 4.181-4.12.976 0 1.92.338 2.671.954-.034.018-.092.05-.131.073l-4.44 2.53a.71.71 0 00-.365.623l-.003 6.173v.002zm1.02-2.168L12 9.25l2.414 1.375v2.75L12 14.75l-2.415-1.375v-2.75z"/></svg>`
    },
    {
      id: 'claude',
      name: 'Claude',
      url: (prompt) => `https://claude.ai/new?q=${prompt}`,
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 shrink-0"><path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.498-3.818h6.702l1.497 3.818h3.604L10.173 3.52zm-3.894 9.2 2.29-5.858 2.29 5.858H6.279z"/></svg>`
    },
    {
      id: 'grok',
      name: 'Grok',
      url: (prompt) => `https://grok.com/?q=${prompt}`,
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 shrink-0"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
    },
    {
      id: 'sarvam',
      name: 'Sarvam AI',
      url: (prompt) => `https://sarvam.ai/chat?message=${prompt}`,
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" class="w-4 h-4 shrink-0"><text x="2" y="18" font-size="18" font-weight="bold" font-family="serif">स</text></svg>`
    }
  ];

  // State
  let currentChapterSlug = null;
  let activeSectionSlug = null;
  let completedSet = new Set();
  let searchFilter = '';
  let intersectionObserver = null;

  // Storage
  function loadCompleted() {
    try {
      const data = JSON.parse(localStorage.getItem('nl_sd_completed') || '[]');
      completedSet = new Set(data);
    } catch (e) {
      completedSet = new Set();
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem('nl_sd_completed', JSON.stringify(Array.from(completedSet)));
    } catch (e) {
      console.error(e);
    }
  }

  function getLastVisited() {
    try {
      return JSON.parse(localStorage.getItem('nl_sd_last_visited') || 'null');
    } catch (e) {
      return null;
    }
  }

  function saveLastVisited(chapterSlug, sectionSlug) {
    try {
      localStorage.setItem('nl_sd_last_visited', JSON.stringify({ chapterSlug, sectionSlug }));
    } catch (e) {}
  }

  // Toast helper
  function showToast(message, iconSvg) {
    let toast = document.getElementById('sdToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sdToast';
      toast.className = 'sd-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = (iconSvg || `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`) + `<span>${message}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  // Calculate stats
  function calculateTotalProgress() {
    const chapters = root.systemDesignChapters || [];
    let totalSections = 0;
    chapters.forEach(ch => {
      totalSections += (ch.sections || []).length;
    });
    const completedCount = completedSet.size;
    const pct = totalSections > 0 ? Math.round((completedCount / totalSections) * 100) : 0;
    return { totalSections, completedCount, pct };
  }

  // Open AI Assistant
  function askAi(providerId, sectionSlug, headingText) {
    const sectionEl = document.getElementById(sectionSlug);
    let contextText = '';
    if (sectionEl) {
      contextText = sectionEl.innerText.replace(/\s+/g, ' ').trim().slice(0, 1000);
    }
    const prompt = encodeURIComponent(`Explain the system design concept in brief: ${headingText}\n\nKey context:\n${contextText}`);
    const provider = AI_PROVIDERS.find(p => p.id === providerId) || AI_PROVIDERS[0];
    window.open(provider.url(prompt), '_blank');
  }

  // Toggle complete for a section
  function toggleSectionComplete(chapterSlug, sectionSlug, e) {
    if (e) e.stopPropagation();
    const key = `${chapterSlug}:${sectionSlug}`;
    if (completedSet.has(key)) {
      completedSet.delete(key);
      showToast('Section marked as incomplete');
    } else {
      completedSet.add(key);
      showToast('Section completed! 🎉');
    }
    saveCompleted();
    updateUIProgress(chapterSlug);
  }

  // Toggle complete all sections in a chapter
  function toggleChapterAllComplete(chapterSlug, e) {
    if (e) e.stopPropagation();
    const ch = (root.systemDesignChapters || []).find(c => c.slug === chapterSlug);
    if (!ch) return;
    const sections = ch.sections || [];
    const allCompleted = sections.every(s => completedSet.has(`${chapterSlug}:${s.slug}`));

    sections.forEach(s => {
      const key = `${chapterSlug}:${s.slug}`;
      if (allCompleted) {
        completedSet.delete(key);
      } else {
        completedSet.add(key);
      }
    });

    saveCompleted();
    updateUIProgress(chapterSlug);
    showToast(allCompleted ? 'Chapter marked as incomplete' : 'All chapter sections completed! 🎉');
  }

  // Update progress in sidebar and badges
  function updateUIProgress(targetChapterSlug) {
    const { totalSections, completedCount, pct } = calculateTotalProgress();

    // Global badge in sidebar
    const globalBadge = document.getElementById('sdOverallBadge');
    if (globalBadge) {
      globalBadge.textContent = `${completedCount}/${totalSections} (${pct}%)`;
    }

    // Update chapter items in sidebar
    const chapters = root.systemDesignChapters || [];
    chapters.forEach(ch => {
      const chItem = document.getElementById(`sd-ch-item-${ch.slug}`);
      if (!chItem) return;
      const sections = ch.sections || [];
      const doneCount = sections.filter(s => completedSet.has(`${ch.slug}:${s.slug}`)).length;
      const chPct = sections.length > 0 ? Math.round((doneCount / sections.length) * 100) : 0;

      const counter = chItem.querySelector('.sd-ch-counter');
      if (counter) counter.textContent = `${doneCount}/${sections.length}`;

      const fill = chItem.querySelector('.sd-chapter-progress-fill');
      if (fill) fill.style.width = `${chPct}%`;

      const checkBtn = chItem.querySelector('.sd-ch-check-btn');
      if (checkBtn) {
        if (doneCount === sections.length && sections.length > 0) {
          checkBtn.classList.add('completed');
        } else {
          checkBtn.classList.remove('completed');
        }
      }

      // Update section links completed dots
      sections.forEach(s => {
        const secLink = document.getElementById(`sd-link-${s.slug}`);
        if (secLink) {
          if (completedSet.has(`${ch.slug}:${s.slug}`)) {
            secLink.classList.add('completed');
          } else {
            secLink.classList.remove('completed');
          }
        }
      });
    });

    // Update section card buttons if in current chapter
    if (targetChapterSlug && currentChapterSlug === targetChapterSlug) {
      const ch = (root.systemDesignChapters || []).find(c => c.slug === targetChapterSlug);
      if (ch) {
        (ch.sections || []).forEach(s => {
          const btn = document.getElementById(`sd-toggle-sec-${s.slug}`);
          if (btn) {
            const isDone = completedSet.has(`${targetChapterSlug}:${s.slug}`);
            btn.classList.toggle('completed', isDone);
            btn.innerHTML = isDone 
              ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed`
              : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Mark Done`;
          }
        });
      }
    }
  }

  // Render Sidebar
  function renderSidebar() {
    const listEl = document.getElementById('sdChaptersList');
    if (!listEl) return;
    const chapters = root.systemDesignChapters || [];

    const query = searchFilter.toLowerCase().trim();
    listEl.innerHTML = '';

    chapters.forEach(ch => {
      const sections = ch.sections || [];
      const matchesChapter = ch.title.toLowerCase().includes(query) || (ch.chapterNo + '').includes(query);
      const matchingSections = sections.filter(s => s.heading.toLowerCase().includes(query));

      if (query && !matchesChapter && matchingSections.length === 0) {
        return; // filter out
      }

      const doneCount = sections.filter(s => completedSet.has(`${ch.slug}:${s.slug}`)).length;
      const chPct = sections.length > 0 ? Math.round((doneCount / sections.length) * 100) : 0;
      const isAllDone = doneCount === sections.length && sections.length > 0;
      const isOpen = (ch.slug === currentChapterSlug) || (query.length > 0);

      const chItem = document.createElement('div');
      chItem.id = `sd-ch-item-${ch.slug}`;
      chItem.className = `sd-chapter-item ${ch.slug === currentChapterSlug ? 'active' : ''} ${isOpen ? 'open' : ''}`;

      chItem.innerHTML = `
        <div class="sd-chapter-trigger" data-slug="${ch.slug}">
          <div class="sd-chapter-left">
            <span class="sd-chapter-no">${ch.chapterNo}.</span>
            <span class="sd-chapter-title-text">${ch.title}</span>
          </div>
          <div class="sd-chapter-right">
            <span class="sd-ch-counter">${doneCount}/${sections.length}</span>
            <button class="sd-ch-check-btn ${isAllDone ? 'completed' : ''}" title="${isAllDone ? 'Mark chapter as incomplete' : 'Mark all chapter sections as complete'}" data-check-chapter="${ch.slug}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
            </button>
            <svg class="sd-chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>
        <div class="sd-chapter-progress-track">
          <div class="sd-chapter-progress-fill" style="width: ${chPct}%;"></div>
        </div>
        <div class="sd-sections-menu">
          ${sections.map(s => {
            const isSecDone = completedSet.has(`${ch.slug}:${s.slug}`);
            const isSecActive = s.slug === activeSectionSlug;
            return `
              <a class="sd-section-link ${isSecDone ? 'completed' : ''} ${isSecActive ? 'active' : ''}" id="sd-link-${s.slug}" data-ch-slug="${ch.slug}" data-sec-slug="${s.slug}">
                <span class="sd-sec-dot"></span>
                <span class="sd-sec-title">${s.heading}</span>
              </a>
            `;
          }).join('')}
        </div>
      `;

      // Trigger click to expand or switch chapter
      const trigger = chItem.querySelector('.sd-chapter-trigger');
      trigger.addEventListener('click', (e) => {
        if (e.target.closest('.sd-ch-check-btn')) return; // handled by check button
        if (ch.slug !== currentChapterSlug) {
          renderChapter(ch.slug);
        } else {
          chItem.classList.toggle('open');
        }
      });

      // Check all button
      const checkBtn = chItem.querySelector('.sd-ch-check-btn');
      checkBtn.addEventListener('click', (e) => {
        toggleChapterAllComplete(ch.slug, e);
      });

      // Section links click
      chItem.querySelectorAll('.sd-section-link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const chSlug = link.getAttribute('data-ch-slug');
          const secSlug = link.getAttribute('data-sec-slug');
          if (chSlug !== currentChapterSlug) {
            renderChapter(chSlug, secSlug);
          } else {
            scrollToSection(secSlug);
          }
        });
      });

      listEl.appendChild(chItem);
    });

    updateUIProgress();
  }

  // Smooth scroll to section in main
  function scrollToSection(secSlug) {
    const secEl = document.getElementById(secSlug);
    const mainEl = document.getElementById('sdMainArea');
    if (secEl && mainEl) {
      const topOffset = secEl.offsetTop - 70;
      mainEl.scrollTo({ top: topOffset, behavior: 'smooth' });
      setActiveSection(secSlug);
    }
  }

  // Highlight active section in sidebar
  function setActiveSection(secSlug) {
    activeSectionSlug = secSlug;
    document.querySelectorAll('.sd-section-link').forEach(l => {
      l.classList.remove('active');
    });
    const activeLink = document.getElementById(`sd-link-${secSlug}`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
    document.querySelectorAll('.sd-section-card').forEach(card => {
      card.classList.remove('in-view');
    });
    const activeCard = document.getElementById(`card-${secSlug}`);
    if (activeCard) {
      activeCard.classList.add('in-view');
    }
    saveLastVisited(currentChapterSlug, secSlug);
  }

  // Setup Intersection Observer for reading tracking
  function setupScrollObserver() {
    if (intersectionObserver) {
      intersectionObserver.disconnect();
    }

    const mainEl = document.getElementById('sdMainArea');
    if (!mainEl) return;

    intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const secSlug = entry.target.getAttribute('data-sec-slug');
          if (secSlug && secSlug !== activeSectionSlug) {
            setActiveSection(secSlug);
          }
        }
      });
    }, {
      root: mainEl,
      rootMargin: '-10% 0px -70% 0px',
      threshold: 0
    });

    document.querySelectorAll('.sd-section-card').forEach(card => {
      intersectionObserver.observe(card);
    });
  }

  // Render a Chapter in the Main Area
  function renderChapter(chapterSlug, targetSectionSlug) {
    const chapters = root.systemDesignChapters || [];
    const chapterData = (root.systemDesignData || {})[chapterSlug];
    if (!chapterData) {
      console.error('Chapter not found:', chapterSlug);
      return;
    }

    currentChapterSlug = chapterSlug;
    const currentIdx = chapters.findIndex(c => c.slug === chapterSlug);
    const prevChapter = currentIdx > 0 ? chapters[currentIdx - 1] : null;
    const nextChapter = currentIdx < chapters.length - 1 ? chapters[currentIdx + 1] : null;

    // Update URL hash
    window.location.hash = `system-design/${chapterSlug}`;

    // Update sidebar active chapter item
    document.querySelectorAll('.sd-chapter-item').forEach(el => {
      el.classList.remove('active');
    });
    const activeItem = document.getElementById(`sd-ch-item-${chapterSlug}`);
    if (activeItem) {
      activeItem.classList.add('active');
      activeItem.classList.add('open');
      activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    // Breadcrumbs
    const breadcrumbsEl = document.getElementById('sdBreadcrumbs');
    if (breadcrumbsEl) {
      breadcrumbsEl.innerHTML = `
        <a href="#home" id="sdBackHome">All Sheets</a>
        <span>/</span>
        <a href="#system-design">System Design</a>
        <span>/</span>
        <span class="active">Chapter ${chapterData.chapterNo}: ${chapterData.title}</span>
      `;
      const backHome = document.getElementById('sdBackHome');
      if (backHome) {
        backHome.addEventListener('click', (e) => {
          e.preventDefault();
          if (root.goHome) root.goHome();
        });
      }
    }

    const contentContainer = document.getElementById('sdContentContainer');
    if (!contentContainer) return;

    const sections = chapterData.sections || [];
    const estMinutes = Math.max(5, Math.round(sections.length * 2.5));

    let html = `
      <!-- Chapter Hero Banner -->
      <div class="sd-chapter-banner">
        <span class="sd-banner-ch-badge">Chapter ${chapterData.chapterNo}</span>
        <h1 class="sd-banner-title">${chapterData.title}</h1>
        <div class="sd-banner-meta-row">
          <div class="sd-banner-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"></path><path d="M6 6h10"></path><path d="M6 10h10"></path></svg>
            <span>${sections.length} Core Sections</span>
          </div>
          <div class="sd-banner-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span>~${estMinutes} min read</span>
          </div>
          <div class="sd-banner-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20"></path><path d="m17 5-5-3-5 3"></path><path d="m17 19-5 3-5-3"></path></svg>
            <span>Interactive Architecture Diagrams</span>
          </div>
        </div>
      </div>
    `;

    // Render Section Cards
    sections.forEach((s, idx) => {
      const isDone = completedSet.has(`${chapterSlug}:${s.slug}`);
      html += `
        <article class="sd-section-card" id="card-${s.slug}" data-sec-slug="${s.slug}">
          <div class="sd-sec-action-bar">
            <div class="sd-sec-badge">
              <span>Section ${idx + 1}</span>
            </div>
            <div class="sd-sec-actions-right">
              <!-- Mark Done Toggle -->
              <button class="sd-sec-toggle-complete-btn ${isDone ? 'completed' : ''}" id="sd-toggle-sec-${s.slug}" data-ch="${chapterSlug}" data-sec="${s.slug}">
                ${isDone 
                  ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> Completed` 
                  : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Mark Done`}
              </button>

              <!-- Ask AI Button & Popover -->
              <div class="sd-ask-ai-wrapper" style="position: relative;">
                <button type="button" class="sd-ask-ai-btn" data-popover-trigger="${s.slug}">
                  <svg class="sparkle" width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z"></path></svg>
                  <span>Ask AI</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div class="sd-ai-popover" id="popover-${s.slug}">
                  ${AI_PROVIDERS.map(ai => `
                    <button type="button" class="sd-ai-option" data-ai-id="${ai.id}" data-sec-slug="${s.slug}" data-heading="${escapeHtml(s.heading)}">
                      ${ai.icon}
                      <span>${ai.name}</span>
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Section Rich Body -->
          <div class="sd-section-body" id="${s.slug}">
            ${s.content || ''}
          </div>
        </article>
      `;
    });

    // Chapter Bottom Navigation
    html += `
      <div class="sd-chapter-nav-footer">
        ${prevChapter ? `
          <button class="sd-nav-btn" id="sdBtnPrevChapter" data-slug="${prevChapter.slug}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
            <span>Previous: Ch ${prevChapter.chapterNo}. ${prevChapter.title}</span>
          </button>
        ` : `<div></div>`}

        <button class="sd-nav-btn primary" id="sdBtnCompleteAllChapter" data-slug="${chapterSlug}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Mark Entire Chapter as Complete</span>
        </button>

        ${nextChapter ? `
          <button class="sd-nav-btn" id="sdBtnNextChapter" data-slug="${nextChapter.slug}">
            <span>Next: Ch ${nextChapter.chapterNo}. ${nextChapter.title}</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        ` : `<div></div>`}
      </div>
    `;

    contentContainer.innerHTML = html;

    // Attach Section Toggle Complete handlers
    contentContainer.querySelectorAll('.sd-sec-toggle-complete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const ch = btn.getAttribute('data-ch');
        const sec = btn.getAttribute('data-sec');
        toggleSectionComplete(ch, sec, e);
      });
    });

    // Attach Ask AI Popover triggers
    contentContainer.querySelectorAll('.sd-ask-ai-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const slug = btn.getAttribute('data-popover-trigger');
        const popover = document.getElementById(`popover-${slug}`);
        const wasOpen = popover && popover.classList.contains('open');

        // Close any open popovers
        document.querySelectorAll('.sd-ai-popover').forEach(p => p.classList.remove('open'));

        if (!wasOpen && popover) {
          popover.classList.add('open');
        }
      });
    });

    // Attach AI Option clicks
    contentContainer.querySelectorAll('.sd-ai-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const aiId = opt.getAttribute('data-ai-id');
        const secSlug = opt.getAttribute('data-sec-slug');
        const heading = opt.getAttribute('data-heading');
        const popover = opt.closest('.sd-ai-popover');
        if (popover) popover.classList.remove('open');
        askAi(aiId, secSlug, heading);
      });
    });

    // Bottom Navigation Clicks
    const prevBtn = document.getElementById('sdBtnPrevChapter');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        renderChapter(prevBtn.getAttribute('data-slug'));
        document.getElementById('sdMainArea').scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const nextBtn = document.getElementById('sdBtnNextChapter');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        renderChapter(nextBtn.getAttribute('data-slug'));
        document.getElementById('sdMainArea').scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    const completeAllBtn = document.getElementById('sdBtnCompleteAllChapter');
    if (completeAllBtn) {
      completeAllBtn.addEventListener('click', (e) => {
        toggleChapterAllComplete(chapterSlug, e);
      });
    }

    // Enhance code blocks with copy buttons
    enhanceCodeBlocks(contentContainer);

    // Enhance images with Lightbox
    enhanceImages(contentContainer);

    // Setup intersection observer
    setupScrollObserver();

    // Scroll to target section or top
    const mainArea = document.getElementById('sdMainArea');
    if (targetSectionSlug) {
      setTimeout(() => scrollToSection(targetSectionSlug), 100);
    } else {
      mainArea.scrollTop = 0;
      if (sections.length > 0) {
        setActiveSection(sections[0].slug);
      }
    }

    saveLastVisited(chapterSlug, targetSectionSlug || (sections[0] ? sections[0].slug : ''));
  }

  // Add Copy Button to all <pre> blocks
  function enhanceCodeBlocks(container) {
    container.querySelectorAll('pre').forEach(pre => {
      if (pre.parentElement && pre.parentElement.classList.contains('sd-code-wrap')) return;
      const wrap = document.createElement('div');
      wrap.className = 'sd-code-wrap';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const copyBtn = document.createElement('button');
      copyBtn.className = 'sd-copy-code-btn';
      copyBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> <span>Copy</span>`;
      copyBtn.addEventListener('click', () => {
        const text = pre.innerText;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span style="color:#22c55e">Copied!</span>`;
          setTimeout(() => {
            copyBtn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg> <span>Copy</span>`;
          }, 2000);
        });
      });
      wrap.appendChild(copyBtn);
    });
  }

  // Image Lightbox zoom on click
  function enhanceImages(container) {
    const lightboxModal = document.getElementById('sdLightboxModal');
    const lightboxImg = document.getElementById('sdLightboxImg');
    if (!lightboxModal || !lightboxImg) return;

    container.querySelectorAll('.sd-section-body img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'System Design Architecture Diagram';
        lightboxModal.classList.add('open');
      });
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Global Initialization
  function initSystemDesign() {
    loadCompleted();

    const mainArea = document.getElementById('sdMainArea');
    const progressBar = document.getElementById('sdReadingProgressBar');

    // Scroll progress bar
    if (mainArea && progressBar) {
      mainArea.addEventListener('scroll', () => {
        const maxScroll = mainArea.scrollHeight - mainArea.clientHeight;
        const progress = maxScroll > 0 ? (mainArea.scrollTop / maxScroll) : 0;
        progressBar.style.transform = `scaleX(${progress})`;
      });
    }

    // Close any popover when clicking anywhere outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sd-ask-ai-wrapper')) {
        document.querySelectorAll('.sd-ai-popover').forEach(p => p.classList.remove('open'));
      }
    });

    // Lightbox modal close listeners
    const lightboxModal = document.getElementById('sdLightboxModal');
    const lightboxClose = document.getElementById('sdLightboxClose');
    if (lightboxModal && lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('open');
      });
      lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
          lightboxModal.classList.remove('open');
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.classList.contains('open')) {
          lightboxModal.classList.remove('open');
        }
      });
    }

    // Sidebar search input
    const searchInput = document.getElementById('sdSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchFilter = e.target.value;
        renderSidebar();
      });
    }

    // Sidebar toggle button
    const toggleBtn = document.getElementById('sdSidebarToggle');
    const sidebar = document.getElementById('sdSidebar');
    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }

    // Load initial chapter
    const chapters = root.systemDesignChapters || [];
    if (chapters.length === 0) {
      console.warn('systemDesignChapters not loaded yet.');
      return;
    }

    const last = getLastVisited();
    const initialSlug = (last && last.chapterSlug && chapters.some(c => c.slug === last.chapterSlug))
      ? last.chapterSlug
      : chapters[0].slug;
    const initialSecSlug = last ? last.sectionSlug : null;

    renderSidebar();
    renderChapter(initialSlug, initialSecSlug);
  }

  // Public API
  root.systemDesignApp = {
    init: initSystemDesign,
    renderChapter: renderChapter,
    scrollToSection: scrollToSection,
    toggleSectionComplete: toggleSectionComplete,
    toggleChapterAllComplete: toggleChapterAllComplete,
    getCompleted: () => Array.from(completedSet),
    setCompleted: (arr) => {
      completedSet = new Set(arr);
      saveCompleted();
      updateUIProgress(currentChapterSlug);
    }
  };

  // If DOM is already loaded, init; otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      // Intentionally initialized when switching tabs or direct link
    });
  }
})();

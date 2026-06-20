// =============================================
//  AI QUIZ SYSTEM - App Engine
// =============================================

// ---------- State ----------
const STATE = {
  allQuestions: [],
  examQuestions: [],
  currentIndex: 0,
  userAnswers: [],   // null | 'A'|'B'|'C'|'D'
  flagged: [],       // boolean[]
  startTime: null,
  timerInterval: null,
  totalSeconds: 0,
  elapsedSeconds: 0,
  examMode: 40,      // 20 | 40 | 50
  phase: 'landing',  // 'landing' | 'quiz' | 'results'
  reviewFilter: 'all',
};

// ---------- DOM refs (populated after DOMContentLoaded) ----------
let DOM = {};

// ---------- Init ----------
document.addEventListener('DOMContentLoaded', () => {
  DOM = {
    loadingScreen: document.getElementById('loading-screen'),
    landingPage:   document.getElementById('landing-page'),
    quizPage:      document.getElementById('quiz-page'),
    resultsPage:   document.getElementById('results-page'),

    // Landing
    modeBtns:      document.querySelectorAll('.mode-btn'),
    startBtn:      document.getElementById('start-btn'),

    // Sidebar
    timerDisplay:  document.getElementById('timer-display'),
    progressFill:  document.getElementById('progress-fill'),
    progressText:  document.getElementById('progress-text'),
    questionsGrid: document.getElementById('questions-grid'),

    // Quiz main
    questionNumber: document.getElementById('question-number'),
    difficultyBadge:document.getElementById('difficulty-badge'),
    moduleBadge:    document.getElementById('module-badge'),
    flagBtn:        document.getElementById('flag-btn'),
    questionContent:document.getElementById('question-content'),
    optionsList:    document.getElementById('options-list'),
    prevBtn:        document.getElementById('prev-btn'),
    nextBtn:        document.getElementById('next-btn'),
    submitBtn:      document.getElementById('submit-btn'),

    // Results
    scoreValue:     document.getElementById('score-value'),
    scoreFill:      document.getElementById('score-fill'),
    resultCorrect:  document.getElementById('result-correct'),
    resultWrong:    document.getElementById('result-wrong'),
    resultSkipped:  document.getElementById('result-skipped'),
    resultTime:     document.getElementById('result-time'),
    modScores:      document.querySelectorAll('.mod-score'),
    modBars:        document.querySelectorAll('.mod-bar-fill'),
    reviewList:     document.getElementById('review-list'),
    filterBtns:     document.querySelectorAll('.filter-btn'),

    // Modal
    modalOverlay:   document.getElementById('modal-overlay'),
    modalConfirm:   document.getElementById('modal-confirm'),
    modalCancel:    document.getElementById('modal-cancel'),
  };

  // Load questions and initialise
  initQuestions();

  // Mode buttons
  DOM.modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.modeBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      STATE.examMode = parseInt(btn.dataset.count);
    });
  });

  // Start button
  DOM.startBtn.addEventListener('click', startExam);

  // Flag button
  DOM.flagBtn.addEventListener('click', toggleFlag);

  // Navigation
  DOM.prevBtn.addEventListener('click', () => navigateTo(STATE.currentIndex - 1));
  DOM.nextBtn.addEventListener('click', () => navigateTo(STATE.currentIndex + 1));

  // Submit
  DOM.submitBtn.addEventListener('click', showSubmitModal);
  DOM.modalConfirm.addEventListener('click', () => { closeModal(); finishExam(); });
  DOM.modalCancel.addEventListener('click', closeModal);

  // Mobile drawer trigger
  const menuTrigger = document.getElementById('menu-trigger');
  const closeDrawerBtn = document.getElementById('close-drawer-btn');
  const drawerBackdrop = document.getElementById('drawer-backdrop');

  if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
      document.getElementById('quiz-page').classList.add('drawer-open');
    });
  }
  if (closeDrawerBtn) {
    closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  }
  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileDrawer);
  }

  // Review filters
  DOM.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      STATE.reviewFilter = btn.dataset.filter;
      renderReviewList();
    });
  });

  // Retry & Home buttons (delegated in results)
  document.getElementById('btn-retry').addEventListener('click', resetExam);
  document.getElementById('btn-home').addEventListener('click', goHome);

  // Hide loading screen
  setTimeout(() => {
    DOM.loadingScreen.style.opacity = '0';
    setTimeout(() => { DOM.loadingScreen.style.display = 'none'; }, 500);
    showPage('landing');
  }, 800);
});

// ---------- Question Initialisation ----------
function initQuestions() {
  // Combine all module questions (loaded via separate script files)
  const all = [
    ...(typeof QUESTIONS_A !== 'undefined' ? QUESTIONS_A : []),
    ...(typeof QUESTIONS_B !== 'undefined' ? QUESTIONS_B : []),
    ...(typeof QUESTIONS_C !== 'undefined' ? QUESTIONS_C : []),
    ...(typeof QUESTIONS_D !== 'undefined' ? QUESTIONS_D : []),
    ...(typeof QUESTIONS_E !== 'undefined' ? QUESTIONS_E : []),
  ];
  STATE.allQuestions = all;
}

// ---------- Page Transitions ----------
function showPage(page) {
  ['landing', 'quiz', 'results'].forEach(p => {
    const el = document.getElementById(`${p}-page`);
    el.classList.remove('active', 'visible');
  });
  STATE.phase = page;
  const target = document.getElementById(`${page}-page`);
  target.classList.add('active');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => target.classList.add('visible'));
  });
}

// ---------- Start Exam ----------
function startExam() {
  STATE.examQuestions = selectQuestions(STATE.examMode);
  STATE.userAnswers = new Array(STATE.examMode).fill(null);
  STATE.flagged = new Array(STATE.examMode).fill(false);
  STATE.currentIndex = 0;
  STATE.elapsedSeconds = 0;

  // Time: 90 min for 50q, 70 for 40q, 35 for 20q
  const timeMap = { 20: 35 * 60, 40: 70 * 60, 50: 90 * 60 };
  STATE.totalSeconds = timeMap[STATE.examMode] || 90 * 60;

  buildSidebarGrid();
  showPage('quiz');
  renderQuestion(0);
  startTimer();
}

// Select questions with module-weighted distribution.
// Module A (Math) 25%, Module B (Programming) 25%, Module E (Calculus) 20%
// Module C (AI) 15%, Module D (Ethics) 15%.
// All questions are at Medium difficulty level.
function selectQuestions(n) {
  const moduleWeights = {
    Module_A: 0.25,
    Module_B: 0.25,
    Module_E: 0.20,
    Module_C: 0.15,
    Module_D: 0.15,
  };

  let selected = [];

  Object.entries(moduleWeights).forEach(([mod, weight]) => {
    const quota = Math.round(n * weight);
    const pool = shuffle(
      STATE.allQuestions.filter(q => q.module_id === mod)
    );
    selected = selected.concat(pool.slice(0, quota));
  });

  // Backfill if selected questions count is less than requested n (e.g. if a module script failed to load)
  if (selected.length < n && STATE.allQuestions.length > 0) {
    const selectedIds = new Set(selected.map(q => q.id));
    const remainingPool = shuffle(
      STATE.allQuestions.filter(q => !selectedIds.has(q.id))
    );
    const needed = n - selected.length;
    selected = selected.concat(remainingPool.slice(0, needed));
  }

  const examQs = shuffle(selected).slice(0, n).map(q => {
    // Clone the question object to avoid mutating original state
    const cloned = JSON.parse(JSON.stringify(q));
    const letters = ['A', 'B', 'C', 'D'];
    
    const correctIdx = letters.indexOf(cloned.correct_option);
    if (correctIdx !== -1 && cloned.options && cloned.options.length === 4) {
      // Find the correct answer string without the option prefix
      const correctText = cloned.options[correctIdx].replace(/^[A-D]\.\s*/, '');
      const cleanOptions = cloned.options.map(opt => opt.replace(/^[A-D]\.\s*/, ''));
      
      // Shuffle the clean options
      const shuffledClean = shuffle(cleanOptions);
      
      // Re-add prefixes
      cloned.options = shuffledClean.map((opt, i) => `${letters[i]}. ${opt}`);
      
      // Find new correct option index
      const newCorrectIdx = shuffledClean.indexOf(correctText);
      if (newCorrectIdx !== -1) {
        cloned.correct_option = letters[newCorrectIdx];
      }
    }
    return cloned;
  });

  return examQs;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- Timer ----------
function startTimer() {
  STATE.startTime = Date.now();
  let remaining = STATE.totalSeconds;

  function tick() {
    remaining--;
    STATE.elapsedSeconds++;

    const h = Math.floor(remaining / 3600);
    const m = Math.floor((remaining % 3600) / 60);
    const s = remaining % 60;

    const display = h > 0
      ? `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
      : `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;

    DOM.timerDisplay.textContent = display;
    DOM.timerDisplay.className = 'timer-display';

    if (remaining <= 300) DOM.timerDisplay.classList.add('warning');
    if (remaining <= 60)  DOM.timerDisplay.classList.add('danger');
    if (remaining <= 0)   { clearInterval(STATE.timerInterval); finishExam(); }
  }

  STATE.timerInterval = setInterval(tick, 1000);
  tick();
}

function stopTimer() {
  clearInterval(STATE.timerInterval);
}

// ---------- Render Question ----------
function renderQuestion(index) {
  const q = STATE.examQuestions[index];
  if (!q) return;
  STATE.currentIndex = index;

  // Header
  DOM.questionNumber.textContent = `Câu ${index + 1} / ${STATE.examMode}`;

  const diff = q.difficulty.toLowerCase();
  DOM.difficultyBadge.textContent = difficultyLabel(q.difficulty);
  DOM.difficultyBadge.className = `difficulty-badge ${diff}`;

  DOM.moduleBadge.textContent = moduleLabel(q.module_id);
  DOM.moduleBadge.className = `module-badge ${q.module_id}`;

  // Flag button
  DOM.flagBtn.className = STATE.flagged[index] ? 'btn-flag flagged' : 'btn-flag';
  DOM.flagBtn.innerHTML = STATE.flagged[index]
    ? 'Đã đánh dấu'
    : 'Đánh dấu';

  // Content with LaTeX
  DOM.questionContent.innerHTML = parseContent(q.content);
  renderMath(DOM.questionContent);

  // Options
  DOM.optionsList.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.options.forEach((opt, i) => {
    const letter = letters[i];
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    if (STATE.userAnswers[index] === letter) btn.classList.add('selected');

    const optText = opt.replace(/^[A-D]\.\s*/, '');
    btn.innerHTML = `
      <span class="option-letter">${letter}</span>
      <span class="option-text">${parseContent(optText)}</span>
    `;
    btn.addEventListener('click', () => selectAnswer(index, letter));
    DOM.optionsList.appendChild(btn);
  });

  renderMath(DOM.optionsList);

  // highlight.js for code blocks
  DOM.questionContent.querySelectorAll('pre code').forEach(block => {
    if (typeof hljs !== 'undefined') hljs.highlightElement(block);
  });

  // Progress
  const answered = STATE.userAnswers.filter(a => a !== null).length;
  DOM.progressFill.style.width = `${(answered / STATE.examMode) * 100}%`;
  DOM.progressText.textContent = `${answered} / ${STATE.examMode} câu`;

  // Nav buttons
  DOM.prevBtn.disabled = index === 0;
  DOM.nextBtn.textContent = index === STATE.examMode - 1 ? 'Xem lại' : 'Tiếp theo →';

  // Update sidebar dots
  updateSidebarDots();

  // Scroll to top
  DOM.questionContent.closest('.quiz-main').scrollTo({ top: 0, behavior: 'smooth' });
}

function parseContent(text) {
  if (!text) return '';
  // Escape but keep LaTeX delimiters
  return text
    .replace(/```python([\s\S]*?)```/g, (_, code) => `<pre><code class="language-python">${escapeHtml(code.trim())}</code></pre>`)
    .replace(/```([\s\S]*?)```/g, (_, code) => `<pre><code>${escapeHtml(code.trim())}</code></pre>`)
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function escapeHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function renderMath(el) {
  if (typeof renderMathInElement === 'undefined') return;
  try {
    renderMathInElement(el, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true },
      ],
      throwOnError: false,
    });
  } catch (e) { /* silent */ }
}

function difficultyLabel(d) {
  return { Easy: 'Dễ', Medium: 'Trung bình' }[d] || d;
}

function moduleLabel(m) {
  return { Module_A: 'Toán học', Module_B: 'Lập trình', Module_C: 'AI', Module_D: 'Đạo đức', Module_E: 'Tích phân' }[m] || m;
}

// ---------- Answer Selection ----------
function selectAnswer(index, letter) {
  STATE.userAnswers[index] = letter;

  // Update buttons
  DOM.optionsList.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', ['A','B','C','D'][i] === letter);
  });

  // Update progress & grid
  const answered = STATE.userAnswers.filter(a => a !== null).length;
  DOM.progressFill.style.width = `${(answered / STATE.examMode) * 100}%`;
  DOM.progressText.textContent = `${answered} / ${STATE.examMode} câu`;

  updateSidebarDots();
}

// ---------- Navigation ----------
function navigateTo(index) {
  if (index < 0 || index > STATE.examMode - 1) return;
  renderQuestion(index);
  closeMobileDrawer();
}

function closeMobileDrawer() {
  const quizPage = document.getElementById('quiz-page');
  if (quizPage) {
    quizPage.classList.remove('drawer-open');
  }
}

// ---------- Flag ----------
function toggleFlag() {
  STATE.flagged[STATE.currentIndex] = !STATE.flagged[STATE.currentIndex];
  DOM.flagBtn.className = STATE.flagged[STATE.currentIndex] ? 'btn-flag flagged' : 'btn-flag';
  DOM.flagBtn.innerHTML = STATE.flagged[STATE.currentIndex]
    ? 'Đã đánh dấu'
    : 'Đánh dấu';
  updateSidebarDots();
}

// ---------- Sidebar Grid ----------
function buildSidebarGrid() {
  DOM.questionsGrid.innerHTML = '';
  STATE.examQuestions.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'q-dot';
    dot.textContent = i + 1;
    dot.id = `dot-${i}`;
    dot.addEventListener('click', () => navigateTo(i));
    DOM.questionsGrid.appendChild(dot);
  });
}

function updateSidebarDots() {
  STATE.examQuestions.forEach((_, i) => {
    const dot = document.getElementById(`dot-${i}`);
    if (!dot) return;
    dot.className = 'q-dot';
    if (i === STATE.currentIndex) dot.classList.add('current');
    if (STATE.userAnswers[i] !== null) dot.classList.add('answered');
    if (STATE.flagged[i]) dot.classList.add('flagged');
  });
}

// ---------- Submit Modal ----------
function showSubmitModal() {
  const unanswered = STATE.userAnswers.filter(a => a === null).length;
  const modalText = document.getElementById('modal-text');
  if (unanswered > 0) {
    modalText.textContent = `Bạn còn ${unanswered} câu chưa trả lời. Bạn có chắc muốn nộp bài không?`;
  } else {
    modalText.textContent = 'Bạn đã trả lời tất cả các câu. Xác nhận nộp bài?';
  }
  DOM.modalOverlay.classList.add('show');
}

function closeModal() {
  DOM.modalOverlay.classList.remove('show');
}

// ---------- Finish Exam ----------
function finishExam() {
  stopTimer();
  showPage('results');
  renderResults();
}

// ---------- Results ----------
function renderResults() {
  const n = STATE.examQuestions.length;
  let correct = 0, wrong = 0, skipped = 0;

  STATE.examQuestions.forEach((q, i) => {
    const ans = STATE.userAnswers[i];
    if (ans === null) skipped++;
    else if (ans === q.correct_option) correct++;
    else wrong++;
  });

  const pct = Math.round((correct / n) * 100);
  const circumference = 2 * Math.PI * 54; // r=54

  // Animate score number
  animateNumber(DOM.scoreValue, 0, correct, 1200);

  // Animate SVG circle
  const fill = document.getElementById('score-fill');
  const colors = '#1d1d1f';
  fill.style.stroke = colors;
  fill.style.strokeDasharray = circumference;
  fill.style.strokeDashoffset = circumference;
  setTimeout(() => {
    fill.style.strokeDashoffset = circumference * (1 - correct / n);
  }, 200);

  DOM.resultCorrect.textContent = correct;
  DOM.resultWrong.textContent = wrong;
  DOM.resultSkipped.textContent = skipped;

  const elapsed = STATE.elapsedSeconds;
  const m = Math.floor(elapsed / 60);
  const s = elapsed % 60;
  DOM.resultTime.textContent = `${m}:${String(s).padStart(2,'0')}`;

  // Per-module breakdown
  const modules = ['Module_A', 'Module_B', 'Module_C', 'Module_D', 'Module_E'];
  modules.forEach((mod, mi) => {
    const modQs = STATE.examQuestions.map((q, i) => ({ q, i })).filter(x => x.q.module_id === mod);
    let modCorrect = 0;
    modQs.forEach(({ q, i }) => {
      if (STATE.userAnswers[i] === q.correct_option) modCorrect++;
    });
    const modPct = modQs.length > 0 ? Math.round((modCorrect / modQs.length) * 100) : 0;

    const scoreEl = document.getElementById(`mod-score-${String.fromCharCode(65 + mi)}`);
    const barEl = document.getElementById(`mod-bar-${String.fromCharCode(65 + mi)}`);
    if (scoreEl) scoreEl.textContent = `${modCorrect}/${modQs.length}`;
    if (barEl) {
      setTimeout(() => { barEl.style.width = `${modPct}%`; }, 300 + mi * 100);
    }
  });

  // Results title
  const titleEl = document.getElementById('results-title');
  if (titleEl) {
    if (pct >= 80) titleEl.textContent = 'Xuất sắc!';
    else if (pct >= 60) titleEl.textContent = 'Khá tốt!';
    else if (pct >= 40) titleEl.textContent = 'Cần cố gắng thêm!';
    else titleEl.textContent = 'Hãy ôn tập thêm!';
  }

  renderReviewList();
}

function animateNumber(el, from, to, duration) {
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(from + (to - from) * eased);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ---------- Review List ----------
function renderReviewList() {
  DOM.reviewList.innerHTML = '';

  const items = STATE.examQuestions.map((q, i) => {
    const ans = STATE.userAnswers[i];
    const status = ans === null ? 'skipped' : ans === q.correct_option ? 'correct' : 'wrong';
    return { q, i, ans, status };
  });

  const filtered = STATE.reviewFilter === 'all'
    ? items
    : items.filter(x => x.status === STATE.reviewFilter);

  if (filtered.length === 0) {
    DOM.reviewList.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 32px;">Không có câu nào trong bộ lọc này.</p>`;
    return;
  }

  filtered.forEach(({ q, i, ans, status }) => {
    const item = document.createElement('div');
    item.className = `review-item ${status}`;

    const statusIcon = { correct: '✓', wrong: '✗', skipped: '—' }[status];
    const shortContent = q.content.replace(/\$[^$]+\$/g, '[...]').replace(/```[\s\S]*?```/g, '[code]').substring(0, 80) + '...';

    const letters = ['A', 'B', 'C', 'D'];
    let optionsHtml = '';
    q.options.forEach((opt, idx) => {
      const letter = letters[idx];
      const optText = opt.replace(/^[A-D]\.\s*/, '');
      const isUserChoice = (ans === letter);
      const isCorrect = (q.correct_option === letter);

      let optClass = 'review-option';
      let badgeHtml = '';

      if (isUserChoice) {
        if (isCorrect) {
          optClass += ' user-correct';
          badgeHtml = '<span class="review-badge badge-user-correct">Bạn chọn đúng ✓</span>';
        } else {
          optClass += ' user-wrong';
          badgeHtml = '<span class="review-badge badge-user-wrong">Bạn đã chọn ✗</span>';
        }
      } else if (isCorrect) {
        optClass += ' correct-answer';
        badgeHtml = '<span class="review-badge badge-correct">Đáp án đúng ✓</span>';
      }

      optionsHtml += `
        <div class="${optClass}">
          <span class="review-opt-letter">${letter}</span>
          <span class="review-opt-text">${parseContent(optText)}</span>
          ${badgeHtml}
        </div>
      `;
    });

    item.innerHTML = `
      <div class="review-item-header" onclick="toggleReviewItem(this)">
        <span class="review-item-number">Câu ${i + 1}</span>
        <span class="review-item-question">${shortContent}</span>
        <span class="review-status-icon ${status}">${statusIcon}</span>
      </div>
      <div class="review-item-body">
        <div class="review-item-content">${parseContent(q.content)}</div>
        <div class="review-options-list">${optionsHtml}</div>
        ${q.explanation ? `<div class="review-explanation"><strong>Giải thích:</strong> ${parseContent(q.explanation)}</div>` : ''}
      </div>
    `;

    DOM.reviewList.appendChild(item);
  });

  // Re-render math in review
  DOM.reviewList.querySelectorAll('.review-item-content, .review-options-list, .review-explanation').forEach(el => {
    renderMath(el);
  });
}

window.toggleReviewItem = function(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
};

// ---------- Reset / Home ----------
function resetExam() {
  stopTimer();
  startExam();
}

function goHome() {
  stopTimer();
  showPage('landing');
}

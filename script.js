// ---------- 1. CAREER DATA ----------
const careers = {
  ux:    { name: "UI/UX Design", icon: "🎨", description: "Design apps and websites that are easy, clear and enjoyable to use." },
  web:   { name: "Web Development", icon: "💻", description: "Build websites and web apps that people can use on any device." },
  data:  { name: "Data Analytics", icon: "📊", description: "Turn numbers and information into insights that help people decide." },
  ai:    { name: "AI & Machine Learning", icon: "🤖", description: "Work on systems that learn from data to predict, classify or automate." },
  teach: { name: "Teaching & Community Support", icon: "🤝", description: "Help others learn, grow and find opportunities in their community." }
};

// ---------- 2. SKILLS TO CHECK (skill-gap checker) ----------
const skillLists = {
  ux: [
    "I can notice what is confusing in an app",
    "I can sketch ideas on paper",
    "I know basic colour and font choices",
    "I have tried Canva or Figma",
    "I can explain why I made a design choice",
    "I have asked people for feedback on something I made"
  ],
  web: [
    "I know what HTML is",
    "I know what CSS is",
    "I know basic JavaScript",
    "I have built a simple web page",
    "I have used GitHub",
    "I can search for fixes when my code breaks"
  ],
  data: [
    "I can find an average",
    "I can read a bar chart or line chart",
    "I have used a spreadsheet",
    "I can use formulas like SUM",
    "I can spot a pattern in numbers",
    "I can explain findings in simple words"
  ],
  ai: [
    "I can explain what AI is in simple words",
    "I know basic Python",
    "I am comfortable with basic maths",
    "I know what a dataset is",
    "I have heard about bias in AI",
    "I can break a problem into small steps"
  ],
  teach: [
    "I can explain a topic simply",
    "I can speak in front of a small group",
    "I listen patiently to others",
    "I can plan a short lesson",
    "I can make slides or posters",
    "I have helped someone learn something"
  ]
};

// ---------- 3. ROADMAPS (4 weeks per career) ----------
// t(text, linkLabel, url, needsComputer)
function t(text, label, url, pc) { return { text: text, label: label || "", url: url || "", pc: pc === true }; }

const roadmaps = {
  ux: [
    { title: "Week 1: Understand good design", goal: "Learn what makes an app easy to use.", tasks: [
      t("Read about the main laws of user experience.", "Laws of UX", "https://lawsofux.com/"),
      t("Complete one free design lesson.", "Canva Design School", "https://www.canva.com/designschool/"),
      t("Pick an app you use daily. Write 3 things you like and 3 things that confuse you.") ] },
    { title: "Week 2: Sketch and plan screens", goal: "Turn ideas into simple screen plans.", tasks: [
      t("Sketch 3 screens of a simple study-planner app on paper."),
      t("Create a free Figma account and explore the beginner learning material.", "Figma learn design", "https://www.figma.com/resources/learn-design/", true),
      t("Read two articles about usability.", "Nielsen Norman Group", "https://www.nngroup.com/articles/") ] },
    { title: "Week 3: Design your first app", goal: "Build a clickable 3-screen design.", tasks: [
      t("Design your 3 screens in Figma using clean spacing and readable text.", "", "", true),
      t("Learn basic layout and colour guidance.", "Material Design", "https://m3.material.io/"),
      t("Ask two friends to try your design. Note where they hesitate.") ] },
    { title: "Week 4: Improve and show your work", goal: "Use feedback and share your first project.", tasks: [
      t("Fix the problems your friends found."),
      t("Write a short case study: the problem, your process, the result."),
      t("Share your project in a free online portfolio.", "Behance", "https://www.behance.net/") ] }
  ],
  web: [
    { title: "Week 1: Learn HTML", goal: "Create the structure of a web page.", tasks: [
      t("Start the free HTML lessons.", "freeCodeCamp", "https://www.freecodecamp.org/learn"),
      t("Read the beginner guide to web development.", "MDN Learn", "https://developer.mozilla.org/en-US/docs/Learn_web_development"),
      t("Build an 'About me' page with a heading, a photo and a list.", "", "", true) ] },
    { title: "Week 2: Make it look good with CSS", goal: "Add colour, layout and mobile-friendly design.", tasks: [
      t("Learn the basics of CSS.", "web.dev Learn CSS", "https://web.dev/learn/css"),
      t("Style your 'About me' page with colours, fonts and spacing.", "", "", true),
      t("Open it on your phone and fix anything that looks wrong.") ] },
    { title: "Week 3: Add interaction with JavaScript", goal: "Make your page respond to clicks.", tasks: [
      t("Learn JavaScript basics.", "JavaScript.info", "https://javascript.info/"),
      t("Add a button that changes the text on your page.", "", "", true),
      t("Build a small counter or to-do list.", "", "", true) ] },
    { title: "Week 4: Publish your project", goal: "Put your work online for free.", tasks: [
      t("Learn how GitHub Pages hosts a website.", "GitHub Pages", "https://pages.github.com/"),
      t("Upload your project to GitHub and publish it.", "", "", true),
      t("Explore a free full learning path for what to learn next.", "The Odin Project", "https://www.theodinproject.com/") ] }
  ],
  data: [
    { title: "Week 1: Numbers and basic statistics", goal: "Understand averages and simple patterns.", tasks: [
      t("Learn the basics of statistics.", "Khan Academy Statistics", "https://www.khanacademy.org/math/statistics-probability"),
      t("Collect 10 data points from your own life, such as daily study hours."),
      t("Work out the average, highest and lowest value by hand.") ] },
    { title: "Week 2: Use spreadsheets", goal: "Organise and summarise data.", tasks: [
      t("Enter your data in a free online spreadsheet.", "Google Sheets", "https://docs.google.com/spreadsheets/"),
      t("Use formulas for SUM, AVERAGE, MAX and MIN.", "", "", true),
      t("Find a free practice dataset.", "Kaggle Datasets", "https://www.kaggle.com/datasets") ] },
    { title: "Week 3: Make charts", goal: "Show data visually.", tasks: [
      t("Make a bar chart and a line chart from your data.", "", "", true),
      t("Learn about data visualisation.", "Kaggle Learn", "https://www.kaggle.com/learn/data-visualization"),
      t("Try a free dashboard tool.", "Looker Studio", "https://lookerstudio.google.com/", true) ] },
    { title: "Week 4: Tell the story", goal: "Explain what the data means.", tasks: [
      t("Write 5 sentences about what your data shows."),
      t("Present your chart and findings to a friend."),
      t("Analyse one practice dataset and write a one-page summary.", "Kaggle Learn", "https://www.kaggle.com/learn", true) ] }
  ],
  ai: [
    { title: "Week 1: What is AI?", goal: "Understand the basic ideas in simple words.", tasks: [
      t("Take the free beginner-friendly AI course.", "Elements of AI", "https://www.elementsofai.com/"),
      t("Write your own definition of AI, machine learning and dataset."),
      t("List 3 AI tools you use or see every day.") ] },
    { title: "Week 2: Python basics", goal: "Learn the language most used in AI.", tasks: [
      t("Read the official getting-started guide.", "Python.org", "https://www.python.org/about/gettingstarted/"),
      t("Complete the free Python course.", "Kaggle Learn Python", "https://www.kaggle.com/learn/python", true),
      t("Write 3 tiny programs, for example a calculator, a greeting and a list sorter.", "", "", true) ] },
    { title: "Week 3: Your first machine learning ideas", goal: "See how a model learns from data.", tasks: [
      t("Start the free machine learning course.", "Kaggle Intro to ML", "https://www.kaggle.com/learn/intro-to-machine-learning", true),
      t("Read the beginner machine learning lessons.", "Google ML Crash Course", "https://developers.google.com/machine-learning/crash-course"),
      t("Explain in your own words what 'training a model' means.") ] },
    { title: "Week 4: Use AI responsibly", goal: "Learn fairness and plan a mini project.", tasks: [
      t("Learn why AI can be unfair or biased.", "Kaggle Intro to AI Ethics", "https://www.kaggle.com/learn/intro-to-ai-ethics"),
      t("Write down one way an AI tool could treat some students unfairly."),
      t("Plan a small project idea that helps students.") ] }
  ],
  teach: [
    { title: "Week 1: Understand how people learn", goal: "Notice what makes explanations clear.", tasks: [
      t("Watch two lessons and note what makes them easy to follow.", "Khan Academy", "https://www.khanacademy.org/"),
      t("Explore free teaching ideas and tools.", "Google Teacher Center", "https://teachingcenter.withgoogle.com/"),
      t("Explain one school topic to a family member in 2 minutes.") ] },
    { title: "Week 2: Plan a mini lesson", goal: "Create a short, clear lesson.", tasks: [
      t("Choose a topic and write one clear learning goal."),
      t("Make simple slides or a poster for it.", "Canva for Education", "https://www.canva.com/education/"),
      t("Write 3 questions to check understanding.") ] },
    { title: "Week 3: Practise teaching", goal: "Teach and collect feedback.", tasks: [
      t("Teach your 10-minute lesson to a friend or younger student."),
      t("Ask them what was clear and what was confusing."),
      t("Improve your lesson using their feedback.") ] },
    { title: "Week 4: Support your community", goal: "Use your skills to help others.", tasks: [
      t("Look for student volunteering options.", "National Service Scheme", "https://nss.gov.in/"),
      t("Offer a free study session to classmates or neighbours."),
      t("Write a short reflection: what worked, what you will do next.") ] }
  ]
};

// ---------- 4. QUIZ QUESTIONS ----------
const questions = [
  { text: "What would you enjoy doing in your free time?",
    options: [
      { label: "Sketching, designing or editing visuals", scores: { ux: 3, web: 1 } },
      { label: "Building or tinkering with apps and websites", scores: { web: 3, ai: 1 } },
      { label: "Solving puzzles or exploring numbers", scores: { data: 3, ai: 2 } },
      { label: "Helping friends understand something", scores: { teach: 3, ux: 1 } }
    ] },
  { text: "Which school subject do you like the most?",
    options: [
      { label: "Art or design", scores: { ux: 3 } },
      { label: "Computer science", scores: { web: 3, ai: 2 } },
      { label: "Maths or statistics", scores: { data: 3, ai: 2 } },
      { label: "Languages or social studies", scores: { teach: 3 } }
    ] },
  { text: "How do you prefer to solve a problem?",
    options: [
      { label: "Sketch ideas and test them with real people", scores: { ux: 3, teach: 1 } },
      { label: "Build something and fix it as I go", scores: { web: 3, ai: 1 } },
      { label: "Collect facts and compare them", scores: { data: 3, ai: 1 } },
      { label: "Talk it through with others", scores: { teach: 3, ux: 1 } }
    ] },
  { text: "Which describes your working style best?",
    options: [
      { label: "Creative and visual", scores: { ux: 3, web: 1 } },
      { label: "Logical and step by step", scores: { web: 3, ai: 2, data: 1 } },
      { label: "Detail-focused and analytical", scores: { data: 3, ai: 1 } },
      { label: "People-focused and supportive", scores: { teach: 3, ux: 1 } }
    ] },
  { text: "What would you be proudest of creating?",
    options: [
      { label: "An app that people love to use", scores: { ux: 3, web: 1 } },
      { label: "A website that goes live for everyone", scores: { web: 3 } },
      { label: "A report that guides an important decision", scores: { data: 3 } },
      { label: "A tool that predicts or automates something", scores: { ai: 3, data: 1 } },
      { label: "A class or workshop that helps others", scores: { teach: 3 } }
    ] },
  { text: "Which question sounds most interesting to you?",
    options: [
      { label: "Why do users find this screen confusing?", scores: { ux: 3 } },
      { label: "How does this button work behind the scenes?", scores: { web: 3 } },
      { label: "What does this data tell us?", scores: { data: 3, ai: 1 } },
      { label: "How can a computer learn to do this?", scores: { ai: 3 } },
      { label: "How can I explain this in a simple way?", scores: { teach: 3 } }
    ] },
  { text: "How do you feel about maths?",
    options: [
      { label: "I enjoy it", scores: { data: 3, ai: 3 } },
      { label: "It's okay when it is useful", scores: { web: 2, data: 1, ai: 1 } },
      { label: "I prefer words and pictures", scores: { ux: 2, teach: 2 } },
      { label: "I'm not sure yet", scores: { ux: 1, web: 1, teach: 1 } }
    ] },
  { text: "How do you like to work with people?",
    options: [
      { label: "Talking with learners or users all day", scores: { teach: 3, ux: 2 } },
      { label: "In a small team on a shared project", scores: { web: 2, ux: 1, data: 1, ai: 1 } },
      { label: "Mostly on my own, with deep focus", scores: { data: 2, ai: 2, web: 1 } },
      { label: "A mix of both", scores: { web: 1, ux: 1, data: 1, teach: 1 } }
    ] }
];

// ---------- 5. SAVED DATA (localStorage) ----------
const STORAGE_KEY = "skillspring_v2";
let state = newState();

function newState() {
  return { career: null, matches: null, done: {}, skills: {}, setup: {}, hours: 5, device: "phone", name: "" };
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const p = JSON.parse(saved);
      const fresh = newState();
      state.career = p.career || null;
      state.matches = p.matches || null;
      state.done = p.done || fresh.done;
      state.skills = p.skills || fresh.skills;
      state.setup = p.setup || fresh.setup;
      state.hours = p.hours || fresh.hours;
      state.device = p.device || fresh.device;
      state.name = p.name || "";
    }
  } catch (e) {
    console.log("Could not load saved data", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.log("Could not save data", e);
  }
}

// ---------- 6. PAGE ELEMENTS ----------
const quizSection = document.getElementById("quiz-section");
const resultSection = document.getElementById("result-section");
const setupSection = document.getElementById("setup-section");
const roadmapSection = document.getElementById("roadmap-section");
const summarySection = document.getElementById("summary-section");
const allSections = [quizSection, resultSection, setupSection, roadmapSection, summarySection];

const roadmapContent = document.getElementById("roadmap-content");
const setupContent = document.getElementById("setup-content");
const summaryContent = document.getElementById("summary-content");
const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const stepCounter = document.getElementById("step-counter");
const progressFill = document.getElementById("quiz-progress");
const backBtn = document.getElementById("back-btn");
const resultsList = document.getElementById("results-list");

let current = 0;
let answers = [];

function showOnly(section) {
  allSections.forEach(function (s) { s.classList.add("hidden"); });
  section.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// Makes user-typed text safe to put inside HTML
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ---------- 7. QUIZ ----------
function showQuestion() {
  const q = questions[current];
  stepCounter.textContent = "Question " + (current + 1) + " of " + questions.length;
  progressFill.style.width = (current / questions.length) * 100 + "%";
  questionText.textContent = q.text;
  backBtn.disabled = current === 0;
  optionsDiv.innerHTML = "";

  q.options.forEach(function (option, index) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    if (answers[current] === index) btn.classList.add("selected");
    btn.textContent = option.label;
    btn.onclick = function () { chooseOption(index); };
    optionsDiv.appendChild(btn);
  });
}

function chooseOption(index) {
  answers[current] = index;
  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    state.matches = calculateResults();
    saveState();
    showResults(state.matches);
  }
}

backBtn.onclick = function () {
  if (current > 0) {
    current--;
    showQuestion();
  }
};

function startQuiz() {
  current = 0;
  answers = [];
  showQuestion();
  showOnly(quizSection);
}

// ---------- 8. CALCULATE RESULTS ----------
function calculateResults() {
  const results = Object.keys(careers).map(function (key) {
    let score = 0;
    let maxScore = 0;
    const reasons = [];

    questions.forEach(function (q, i) {
      const chosen = q.options[answers[i]];
      const points = chosen.scores[key] || 0;
      score += points;
      const best = Math.max.apply(null, q.options.map(function (o) { return o.scores[key] || 0; }));
      maxScore += best;
      if (points >= 2) reasons.push(chosen.label);
    });

    return { key: key, percent: Math.round((score / maxScore) * 100), reasons: reasons };
  });

  results.sort(function (a, b) { return b.percent - a.percent; });
  return results.slice(0, 3);
}

// ---------- 9. SHOW RESULTS ----------
function showResults(top3) {
  resultsList.innerHTML = "";

  top3.forEach(function (result, index) {
    const career = careers[result.key];
    const reasons = result.reasons.slice(0, 3);
    let reasonsHtml = "";
    if (reasons.length > 0) {
      reasonsHtml = reasons.map(function (r) { return "<li>You chose: " + r + "</li>"; }).join("");
    } else {
      reasonsHtml = "<li>This career partly fits your mix of answers.</li>";
    }

    const card = document.createElement("div");
    card.className = "card career-card" + (index === 0 ? " top" : "");
    card.innerHTML =
      '<span class="rank-badge">' + (index === 0 ? "★ Best match" : "#" + (index + 1) + " match") + "</span>" +
      '<h3 class="career-title">' + career.icon + " " + career.name + "</h3>" +
      '<p class="career-desc">' + career.description + "</p>" +
      '<div class="match-row">' +
        '<div class="match-bar"><div class="match-fill" style="width:' + result.percent + '%"></div></div>' +
        '<span class="match-percent">' + result.percent + "%</span>" +
      "</div>" +
      '<p class="why-title">Why this was recommended</p>' +
      '<ul class="why-list">' + reasonsHtml + "</ul>";

    const startBtn = document.createElement("button");
    startBtn.className = "start-btn";
    startBtn.textContent = "Personalise my roadmap →";
    startBtn.onclick = function () {
      if (state.setup[result.key]) {
        showRoadmap(result.key);
      } else {
        openSetup(result.key);
      }
    };
    card.appendChild(startBtn);

    resultsList.appendChild(card);
  });

  showOnly(resultSection);
}

// ---------- 10. SETUP: SKILLS + HOURS + DEVICE ----------
let draft = { skills: [], hours: 5, device: "phone", name: "" };

function openSetup(key) {
  state.career = key;
  if (!state.done[key]) state.done[key] = [];
  saveState();

  draft.skills = (state.skills[key] || []).slice();
  draft.hours = state.hours;
  draft.device = state.device;
  draft.name = state.name;

  renderSetup(key);
  showOnly(setupSection);
}

function renderSetup(key) {
  const career = careers[key];
  const skills = skillLists[key];

  let skillsHtml = "";
  skills.forEach(function (skill, i) {
    skillsHtml +=
      '<div class="skill-item"><label>' +
      '<input type="checkbox" data-skill="' + i + '"' + (draft.skills.indexOf(i) !== -1 ? " checked" : "") + ">" +
      "<span>" + skill + "</span></label></div>";
  });

  function choiceBtn(attr, value, text, selected) {
    return '<button class="choice' + (selected ? " selected" : "") + '" data-' + attr + '="' + value + '">' + text + "</button>";
  }

  setupContent.innerHTML =
    '<div class="card setup-card">' +
      '<p class="label">Personalise your plan</p>' +
      "<h2>" + career.icon + " " + career.name + "</h2>" +
      '<p class="hint">Answer 3 quick things so your roadmap fits your time and your device.</p>' +
    "</div>" +

    '<div class="card setup-card">' +
      "<h3>1. Which skills do you already have?</h3>" +
      '<p class="hint">Tick honestly. This is a self-check, not a test.</p>' +
      skillsHtml +
      '<p class="readiness" id="readiness-text"></p>' +
    "</div>" +

    '<div class="card setup-card">' +
      "<h3>2. How many hours can you study each week?</h3>" +
      '<div class="choice-row">' +
        choiceBtn("hours", 2, "2 hours", draft.hours === 2) +
        choiceBtn("hours", 5, "5 hours", draft.hours === 5) +
        choiceBtn("hours", 10, "10 hours", draft.hours === 10) +
      "</div>" +
    "</div>" +

    '<div class="card setup-card">' +
      "<h3>3. Which device can you use?</h3>" +
      '<div class="choice-row">' +
        choiceBtn("device", "phone", "📱 Phone only", draft.device === "phone") +
        choiceBtn("device", "computer", "💻 Computer / laptop", draft.device === "computer") +
      "</div>" +
    "</div>" +

    '<div class="card setup-card">' +
      "<h3>4. Your name (optional)</h3>" +
      '<p class="hint">Used only on your printable plan. It stays on this device.</p>' +
      '<input type="text" id="name-input" class="text-input" maxlength="40" placeholder="e.g. Priya" value="' + escapeHtml(draft.name) + '">' +
    "</div>" +

    '<button id="create-plan-btn" class="big-btn">Create my plan →</button>' +
    '<div class="action-row no-print" style="margin-top:12px">' +
      '<button id="setup-back-btn" class="small-btn">← My matches</button>' +
    "</div>";

  // skill ticks
  setupContent.querySelectorAll("input[data-skill]").forEach(function (box) {
    box.onchange = function () {
      const i = Number(box.getAttribute("data-skill"));
      const pos = draft.skills.indexOf(i);
      if (box.checked && pos === -1) draft.skills.push(i);
      if (!box.checked && pos !== -1) draft.skills.splice(pos, 1);
      updateReadinessText(key);
    };
  });

  // hours and device buttons
  setupContent.querySelectorAll("button[data-hours]").forEach(function (btn) {
    btn.onclick = function () {
      draft.hours = Number(btn.getAttribute("data-hours"));
      setupContent.querySelectorAll("button[data-hours]").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected");
    };
  });
  setupContent.querySelectorAll("button[data-device]").forEach(function (btn) {
    btn.onclick = function () {
      draft.device = btn.getAttribute("data-device");
      setupContent.querySelectorAll("button[data-device]").forEach(function (b) { b.classList.remove("selected"); });
      btn.classList.add("selected");
    };
  });

  document.getElementById("create-plan-btn").onclick = function () {
    state.skills[key] = draft.skills.slice();
    state.hours = draft.hours;
    state.device = draft.device;
    state.name = document.getElementById("name-input").value.trim();
    state.setup[key] = true;
    saveState();
    showRoadmap(key);
  };

  document.getElementById("setup-back-btn").onclick = function () {
    if (state.matches) { showResults(state.matches); } else { startQuiz(); }
  };

  updateReadinessText(key);
}

function readinessPercent(key) {
  const total = skillLists[key].length;
  const have = (state.skills[key] || []).length;
  return Math.round((have / total) * 100);
}

function updateReadinessText(key) {
  const total = skillLists[key].length;
  const percent = Math.round((draft.skills.length / total) * 100);
  document.getElementById("readiness-text").textContent =
    "Your starting readiness: " + draft.skills.length + " of " + total + " skills (" + percent + "%)";
}

// ---------- 11. PERSONALISED TASKS ----------
// Returns the tasks to show for one week, based on the hours chosen.
function getWeekTasks(key, weekIndex) {
  const week = roadmaps[key][weekIndex];
  const limit = state.hours === 2 ? 2 : 3;
  const list = [];

  week.tasks.forEach(function (task, i) {
    if (i < limit) {
      list.push({ id: key + "-w" + weekIndex + "-t" + i, task: task, bonus: false });
    }
  });

  if (state.hours === 10) {
    list.push({
      id: key + "-w" + weekIndex + "-bonus",
      task: t("Extra practice: repeat the hardest task from this week, then explain it to a friend or family member."),
      bonus: true
    });
  }
  return list;
}

function getTotals(key) {
  let total = 0;
  let done = 0;
  roadmaps[key].forEach(function (week, w) {
    getWeekTasks(key, w).forEach(function (item) {
      total++;
      if (state.done[key].indexOf(item.id) !== -1) done++;
    });
  });
  return { total: total, done: done };
}

function deviceText() {
  return state.device === "phone" ? "📱 Phone only" : "💻 Computer / laptop";
}

function missingSkills(key) {
  const have = state.skills[key] || [];
  return skillLists[key].filter(function (skill, i) { return have.indexOf(i) === -1; });
}

// ---------- 12. ROADMAP ----------
function showRoadmap(key) {
  state.career = key;
  if (!state.done[key]) state.done[key] = [];
  saveState();

  const career = careers[key];
  const gaps = missingSkills(key);
  const greeting = state.name ? escapeHtml(state.name) + "'s " : "Your ";

  let focusHtml = "";
  if (gaps.length > 0) {
    focusHtml =
      '<div class="focus-box"><p><strong>Focus first (skills to build):</strong></p><ul>' +
      gaps.slice(0, 3).map(function (g) { return "<li>" + g.replace(/^I /, "") + "</li>"; }).join("") +
      "</ul></div>";
  } else {
    focusHtml = '<div class="focus-box"><p>You ticked every skill. Great start! Use the roadmap to go deeper.</p></div>';
  }

  let html =
    '<div class="card plan-header">' +
      '<p class="label">' + greeting + "4-week learning plan</p>" +
      "<h2>" + career.icon + " " + career.name + "</h2>" +
      '<div class="chips">' +
        '<span class="chip">⏱ ' + state.hours + " hours/week</span>" +
        '<span class="chip">' + deviceText() + "</span>" +
        '<span class="chip">Skill readiness: ' + readinessPercent(key) + "% (self-checked)</span>" +
      "</div>" +
      focusHtml +
      '<div class="match-row">' +
        '<div class="match-bar"><div class="match-fill" id="plan-fill"></div></div>' +
        '<span class="match-percent" id="plan-percent">0%</span>' +
      "</div>" +
      '<p id="plan-text"></p>' +
      '<p id="plan-celebrate" class="celebrate hidden">🎉 You finished your 4-week plan. Great work!</p>' +
    "</div>";

  if (state.device === "phone") {
    html +=
      '<div class="notice"><strong>Phone-only tip:</strong> tasks marked 💻 work best on a computer. ' +
      "Try a school computer lab, a library or a friend's computer for those. " +
      "You can still do the reading, planning and paper-based tasks on your phone.</div>";
  }

  roadmaps[key].forEach(function (week, w) {
    html += '<div class="card week-card"><h3>' + week.title + '</h3><p class="week-goal">' + week.goal + '</p><ul class="task-list">';

    getWeekTasks(key, w).forEach(function (item) {
      const isDone = state.done[key].indexOf(item.id) !== -1;
      const task = item.task;
      html +=
        '<li class="task' + (isDone ? " done" : "") + '">' +
          '<label><input type="checkbox" data-id="' + item.id + '"' + (isDone ? " checked" : "") + ">" +
          '<span><span class="task-text">' + task.text + "</span>" +
          (item.bonus ? '<span class="bonus-tag">Bonus</span>' : "") +
          (task.pc && state.device === "phone" ? '<span class="pc-tag">💻 Best on a computer</span>' : "") +
          "</span></label>" +
          (task.url ? '<a class="resource" href="' + task.url + '" target="_blank" rel="noopener">' + task.label + " ↗</a>" : "") +
        "</li>";
    });
    html += "</ul></div>";
  });

  roadmapContent.innerHTML = html;

  roadmapContent.querySelectorAll('input[type="checkbox"]').forEach(function (box) {
    box.onchange = function () { toggleTask(box); };
  });

  updatePlanProgress();
  showOnly(roadmapSection);
}

function toggleTask(box) {
  const key = state.career;
  const id = box.getAttribute("data-id");
  const list = state.done[key];
  const position = list.indexOf(id);

  if (box.checked && position === -1) list.push(id);
  if (!box.checked && position !== -1) list.splice(position, 1);

  box.closest(".task").classList.toggle("done", box.checked);
  saveState();
  updatePlanProgress();
}

function updatePlanProgress() {
  const totals = getTotals(state.career);
  const percent = Math.round((totals.done / totals.total) * 100);

  document.getElementById("plan-fill").style.width = percent + "%";
  document.getElementById("plan-percent").textContent = percent + "%";
  document.getElementById("plan-text").textContent = totals.done + " of " + totals.total + " tasks completed";
  document.getElementById("plan-celebrate").classList.toggle("hidden", totals.done !== totals.total);
}

// ---------- 13. PARENT / TEACHER ONE-PAGE PLAN ----------
function showSummary(key) {
  const career = careers[key];
  const have = state.skills[key] || [];
  const gaps = missingSkills(key);
  const totals = getTotals(key);
  const today = new Date().toLocaleDateString();

  let match = null;
  if (state.matches) {
    state.matches.forEach(function (m) { if (m.key === key) match = m; });
  }

  let html = '<div class="card summary">';
  html += "<h2>🌱 SkillSpring Learning Plan</h2>";
  html += '<p class="meta">Prepared for: <strong>' + (state.name ? escapeHtml(state.name) : "Student") + "</strong> &nbsp;|&nbsp; Date: " + today + "</p>";

  html += "<h3>Recommended career path</h3>";
  html += "<p><strong>" + career.icon + " " + career.name + "</strong>" + (match ? " (" + match.percent + "% match based on quiz answers)" : "") + "</p>";
  html += "<p>" + career.description + "</p>";
  if (match && match.reasons.length > 0) {
    html += "<p>Why it was suggested:</p><ul>" +
      match.reasons.slice(0, 3).map(function (r) { return "<li>" + r + "</li>"; }).join("") + "</ul>";
  }

  html += "<h3>Skills check (self-assessed)</h3>";
  html += "<p>Readiness: <strong>" + readinessPercent(key) + "%</strong> (" + have.length + " of " + skillLists[key].length + " skills)</p>";
  html += "<p><strong>Already has:</strong></p>";
  html += have.length > 0
    ? "<ul>" + have.map(function (i) { return "<li>" + skillLists[key][i].replace(/^I /, "") + "</li>"; }).join("") + "</ul>"
    : "<p>Just getting started. That is perfectly fine.</p>";
  html += "<p><strong>To build:</strong></p>";
  html += gaps.length > 0
    ? "<ul>" + gaps.map(function (g) { return "<li>" + g.replace(/^I /, "") + "</li>"; }).join("") + "</ul>"
    : "<p>All listed skills ticked.</p>";

  html += "<h3>Study plan</h3>";
  html += "<p>Study time: <strong>" + state.hours + " hours per week</strong> for 4 weeks &nbsp;|&nbsp; Device: <strong>" + deviceText() + "</strong></p>";
  html += "<p>Progress so far: " + totals.done + " of " + totals.total + " tasks completed.</p>";

  html += "<h3>4-week roadmap</h3>";
  roadmaps[key].forEach(function (week, w) {
    html += '<div class="sum-week"><p class="week-name">' + week.title + "</p>";
    html += '<p class="meta">' + week.goal + "</p><ul>";
    getWeekTasks(key, w).forEach(function (item) {
      const isDone = state.done[key].indexOf(item.id) !== -1;
      html += "<li>" + (isDone ? "☑ " : "☐ ") + item.task.text;
      if (item.task.url) {
        html += '<br><span class="sum-url">' + item.task.label + ": " + item.task.url + "</span>";
      }
      html += "</li>";
    });
    html += "</ul></div>";
  });

  html += "<h3>How a parent, teacher or mentor can help</h3><ul>" +
    "<li>Agree on a regular weekly study time and protect it.</li>" +
    "<li>Help find a computer or internet access if the plan needs it.</li>" +
    "<li>Ask the student to explain one thing they learned each week.</li>" +
    "<li>Encourage small steps. Exploring a career is not a final decision.</li>" +
    "</ul>";

  html += "<h3>Notes</h3><div class=\"notes-box\"></div>";
  html += '<p class="disclaimer">Created with SkillSpring. Suggestions come from simple rule-based matching of quiz answers, not from a trained AI model or a professional counsellor. Resource links lead to free third-party websites.</p>';
  html += "</div>";

  summaryContent.innerHTML = html;
  showOnly(summarySection);
}

// ---------- 14. BUTTONS ----------
document.getElementById("restart-btn").onclick = startQuiz;

document.getElementById("matches-btn").onclick = function () {
  if (state.matches) { showResults(state.matches); } else { startQuiz(); }
};

document.getElementById("settings-btn").onclick = function () { openSetup(state.career); };
document.getElementById("summary-btn").onclick = function () { showSummary(state.career); };
document.getElementById("print-btn").onclick = function () { window.print(); };
document.getElementById("summary-print-btn").onclick = function () { window.print(); };
document.getElementById("summary-back-btn").onclick = function () { showRoadmap(state.career); };

document.getElementById("reset-btn").onclick = function () {
  if (confirm("This will delete all your saved progress. Are you sure?")) {
    localStorage.removeItem(STORAGE_KEY);
    state = newState();
    startQuiz();
  }
};

// ---------- 15. START ----------
loadState();
if (state.career && roadmaps[state.career]) {
  if (state.setup[state.career]) {
    showRoadmap(state.career);
  } else {
    openSetup(state.career);
  }
} else {
  startQuiz();
}
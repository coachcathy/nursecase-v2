let selectedMode = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function setMode(mode) {
  selectedMode = mode;

  document.getElementById("studyModeBtn").classList.remove("selected");
  document.getElementById("quizModeBtn").classList.remove("selected");

  if (mode === "study") {
    document.getElementById("studyModeBtn").classList.add("selected");
  }

  if (mode === "quiz") {
    document.getElementById("quizModeBtn").classList.add("selected");
  }
}

function startQuiz() {
  const checkedTopics = [...document.querySelectorAll(".topic-check:checked")]
    .map(input => input.value);

  if (!selectedMode) {
    alert("Choose Study Mode or Quiz Mode first.");
    return;
  }

  if (checkedTopics.length === 0) {
    alert("Choose at least one topic.");
    return;
  }

selectedQuestions = questionBank.filter(q =>
  checkedTopics.includes(q.topic)
);

selectedQuestions = shuffleQuestions(selectedQuestions);

const questionCountValue = document.getElementById("questionCount").value;

if (questionCountValue !== "all") {
  selectedQuestions = selectedQuestions.slice(0, Number(questionCountValue));
}

  if (selectedQuestions.length === 0) {
    alert("No questions found for that topic yet.");
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const q = selectedQuestions[currentQuestionIndex];

  document.getElementById("progress").textContent =
    `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;

  const percent =
    ((currentQuestionIndex + 1) / selectedQuestions.length) * 100;

  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }

  document.getElementById("patientName").textContent = q.patient;

  document.getElementById("caseInfo").textContent =
    `${q.caseId} • ${q.topic} • ${q.subtopic || q.style}`;

  document.getElementById("questionText").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    choicesDiv.innerHTML += `
      <label class="choice" onclick="highlightChoice(this)">
        <input type="radio" name="answer" value="${choice}">
        <span>${choice}</span>
      </label>
    `;
  });

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("submitBtn").classList.remove("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
};

function submitAnswer() {
  const selected = document.querySelector('input[name="answer"]:checked');

  if (!selected) {
    alert("Choose an answer first.");
    return;
  }

  const q = selectedQuestions[currentQuestionIndex];
  const isCorrect = selected.value === q.answer;

  userAnswers[currentQuestionIndex] = selected.value;

  if (isCorrect) score++;

  if (selectedMode === "study") {
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("hidden");
    feedback.innerHTML = `
      <h3>${isCorrect ? "✅ Correct" : "❌ Not quite"}</h3>
      <p><strong>Correct answer:</strong> ${q.answer}</p>
      <p><strong>Rationale:</strong> ${q.rationale}</p>
    `;

    document.getElementById("submitBtn").classList.add("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
  } else {
    nextQuestion();
  }
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  const percent = Math.round((score / selectedQuestions.length) * 100);
  saveSessionResult(percent);

  document.getElementById("score").textContent =
    `You scored ${score} out of ${selectedQuestions.length} (${percent}%).`;
    document.getElementById("scoreMessage").textContent =
  percent >= 80
    ? "Strong work — you are building clinical judgment."
    : "Good practice session — review the missed questions and try again.";
    renderTopicBreakdown();

  const review = document.getElementById("review");
  review.innerHTML = "";

  selectedQuestions.forEach((q, index) => {
    const correct = userAnswers[index] === q.answer;

    review.innerHTML += `
  <div class="review-card" data-correct="${correct}">
      <div class="review-card">
        <h3>${correct ? "✅" : "❌"} Question ${index + 1}</h3>
        <p><strong>${q.patient}</strong> — ${q.topic}</p>
        <p>${q.question}</p>
        <p><strong>Your answer:</strong> ${userAnswers[index]}</p>
        <p><strong>Correct answer:</strong> ${q.answer}</p>
        <p><strong>Rationale:</strong> ${q.rationale}</p>
      </div>
    `;
  });
}

function toggleModule(moduleClass, isChecked) {
  const topicChecks = document.querySelectorAll(`.topic-check.${moduleClass}`);

  topicChecks.forEach(input => {
    input.checked = isChecked;
  });

  updateSelectionSummary();
}

function updateSelectionSummary() {
  const checkedTopics = [...document.querySelectorAll(".topic-check:checked")]
    .map(input => input.value);

  const selectedCount = questionBank.filter(q =>
    checkedTopics.includes(q.topic)
  ).length;

  const summary = document.getElementById("selectionSummary");

  if (checkedTopics.length === 0) {
    summary.textContent = "Select at least one topic to begin.";
    return;
  }

  summary.textContent = `${checkedTopics.length} topic(s) selected • ${selectedCount} question(s) available`;
}

document.querySelectorAll(".topic-check").forEach(input => {
  input.addEventListener("change", updateSelectionSummary);
});

function highlightChoice(selectedLabel) {
  document.querySelectorAll(".choice").forEach(label => {
    label.classList.remove("selected-choice");
  });

  selectedLabel.classList.add("selected-choice");
}

function reviewIncorrect() {
  const reviewCards = document.querySelectorAll(".review-card");

  reviewCards.forEach(card => {
    if (card.dataset.correct === "true") {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });
}

function goHome() {
  selectedQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");

  document.getElementById("review").innerHTML = "";
  document.getElementById("score").textContent = "";

  const progressBar = document.getElementById("progressBar");
  if (progressBar) {
    progressBar.style.width = "0%";
  }

  updateSelectionSummary();
}

function renderTopicBreakdown() {
  const breakdown = {};

  selectedQuestions.forEach((q, index) => {
    const topic = q.topic;

    if (!breakdown[topic]) {
      breakdown[topic] = { correct: 0, total: 0 };
    }

    breakdown[topic].total++;

    if (userAnswers[index] === q.answer) {
      breakdown[topic].correct++;
    }
  });

  const topicBreakdown = document.getElementById("topicBreakdown");
  topicBreakdown.innerHTML = "<h3>Topic Breakdown</h3>";

  Object.keys(breakdown).forEach(topic => {
    const item = breakdown[topic];
    const percent = Math.round((item.correct / item.total) * 100);

    topicBreakdown.innerHTML += `
      <div class="topic-score">
        <span>${topic}</span>
        <strong>${percent}%</strong>
      </div>
    `;
  });
}

function studyAgain() {
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document.getElementById("results").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("review").innerHTML = "";

  showQuestion();
}

function reviewAll() {
  const reviewCards = document.querySelectorAll(".review-card");

  reviewCards.forEach(card => {
    card.style.display = "block";
  });
}

function shuffleQuestions(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function saveSessionResult(percent) {
  const session = {
    date: new Date().toLocaleString(),
    mode: selectedMode,
    score,
    total: selectedQuestions.length,
    percent,
    topics: [...new Set(selectedQuestions.map(q => q.topic))]
  };

  const pastSessions = JSON.parse(localStorage.getItem("nursecaseSessions")) || [];
  pastSessions.unshift(session);

  localStorage.setItem("nursecaseSessions", JSON.stringify(pastSessions));
}

function renderRecentSession() {
  const sessions = JSON.parse(localStorage.getItem("nursecaseSessions")) || [];
  const recentSession = document.getElementById("recentSession");

  if (!recentSession) return;

  if (sessions.length === 0) {
    recentSession.innerHTML = `
      <h3>Welcome</h3>
      <p>No completed sessions yet.</p>
      <p>Choose a mode and section to begin studying.</p>
    `;
    return;
  }

  const last = sessions[0];

  recentSession.innerHTML = `
    <h3>Welcome back</h3>
    <p>Last session: ${last.percent}% • ${last.score}/${last.total}</p>
    <p>${last.topics.join(", ")}</p>
  `;
}

renderRecentSession();
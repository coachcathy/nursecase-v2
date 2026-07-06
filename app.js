let selectedMode = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

function setMode(mode) {
  selectedMode = mode;
  alert(mode === "study" ? "Study Mode selected" : "Quiz Mode selected");
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

  selectedQuestions = questionBank.filter(q => checkedTopics.includes(q.topic));

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

  document.getElementById("caseInfo").textContent =
    `${q.caseId} • ${q.patient} • ${q.topic} • ${q.style}`;

  document.getElementById("questionText").textContent = q.question;

  const choicesDiv = document.getElementById("choices");
  choicesDiv.innerHTML = "";

  q.choices.forEach(choice => {
    choicesDiv.innerHTML += `
      <label class="choice">
        <input type="radio" name="answer" value="${choice}">
        ${choice}
      </label>
    `;
  });

  document.getElementById("feedback").classList.add("hidden");
  document.getElementById("feedback").innerHTML = "";
  document.getElementById("submitBtn").classList.remove("hidden");
  document.getElementById("nextBtn").classList.add("hidden");
}

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

  document.getElementById("score").textContent =
    `You scored ${score} out of ${selectedQuestions.length} (${percent}%).`;

  const review = document.getElementById("review");
  review.innerHTML = "";

  selectedQuestions.forEach((q, index) => {
    const correct = userAnswers[index] === q.answer;

    review.innerHTML += `
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
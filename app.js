// FILE: app.js

let selectedMode = null;
let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];


// ==========================================
// QUESTION GROUP MAPPING
// ==========================================
// Most NurseCase checkboxes map directly to q.topic.
//
// The CVA module is different because its four large sections
// are separate question-bank arrays while the questions themselves
// share the topic "Perfusion: CVA".
//
// This mapping lets us select those banks without changing
// hundreds of individual questions.

const questionGroupMap = {
  "Neuro Anatomy & Stroke Foundation": () =>
    neuroAnatomyFoundationQuestions,

  "CVA / Stroke Foundation": () =>
    cvaStrokeFoundationQuestions,

  "Hydrocephalus & Increased ICP": () =>
    hydrocephalusIcpQuestions,

  "Stroke Priority & NGN Cases": () =>
    strokePriorityNgnQuestions
};


// ==========================================
// GET QUESTIONS FOR SELECTED TOPICS
// ==========================================

function getQuestionsForSelectedTopics(checkedTopics) {
  const results = [];

  checkedTopics.forEach(topic => {

    // Special grouped question banks such as CVA
    if (questionGroupMap[topic]) {
      results.push(...questionGroupMap[topic]());
      return;
    }

    // Existing NurseCase behavior
    results.push(
      ...questionBank.filter(q => q.topic === topic)
    );
  });

  // Remove duplicates
  const uniqueQuestions = [];
  const seen = new Set();

  results.forEach(q => {
    const key =
      q.id ||
      `${q.caseId || ""}-${q.question}`;

    if (!seen.has(key)) {
      seen.add(key);
      uniqueQuestions.push(q);
    }
  });

  return uniqueQuestions;
}


// ==========================================
// ANSWER COMPARISON
// ==========================================
// Handles both single-answer and SATA questions.

function answersMatch(userAnswer, correctAnswer) {

  // SATA
  if (Array.isArray(correctAnswer)) {

    if (!Array.isArray(userAnswer)) {
      return false;
    }

    if (userAnswer.length !== correctAnswer.length) {
      return false;
    }

    return userAnswer.every(answer =>
      correctAnswer.includes(answer)
    );
  }

  // Single-answer question
  return userAnswer === correctAnswer;
}


// ==========================================
// FORMAT ANSWERS
// ==========================================

function formatAnswer(answer) {

  if (Array.isArray(answer)) {
    return answer.join(", ");
  }

  if (
    answer === undefined ||
    answer === null ||
    answer === ""
  ) {
    return "No answer";
  }

  return answer;
}


// ==========================================
// SET MODE
// ==========================================

function setMode(mode) {
  selectedMode = mode;

  document
    .getElementById("studyModeBtn")
    .classList.remove("selected");

  document
    .getElementById("quizModeBtn")
    .classList.remove("selected");

  if (mode === "study") {
    document
      .getElementById("studyModeBtn")
      .classList.add("selected");
  }

  if (mode === "quiz") {
    document
      .getElementById("quizModeBtn")
      .classList.add("selected");
  }
}


// ==========================================
// START QUIZ
// ==========================================

function startQuiz() {

  const checkedTopics = [
    ...document.querySelectorAll(
      ".topic-check:checked"
    )
  ].map(input => input.value);

  if (!selectedMode) {
    alert(
      "Choose Study Mode or Quiz Mode first."
    );
    return;
  }

  if (checkedTopics.length === 0) {
    alert("Choose at least one topic.");
    return;
  }

  // Pull questions from standard topics
  // AND mapped CVA banks.
  selectedQuestions =
    getQuestionsForSelectedTopics(
      checkedTopics
    );

  selectedQuestions =
    shuffleQuestions(
      selectedQuestions
    );

  const questionCountValue =
    document.getElementById(
      "questionCount"
    ).value;

  if (questionCountValue !== "all") {

    selectedQuestions =
      selectedQuestions.slice(
        0,
        Number(questionCountValue)
      );
  }

  if (selectedQuestions.length === 0) {
    alert(
      "No questions found for that topic yet."
    );
    return;
  }

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document
    .getElementById("home")
    .classList.add("hidden");

  document
    .getElementById("results")
    .classList.add("hidden");

  document
    .getElementById("quiz")
    .classList.remove("hidden");

  showQuestion();
}


// ==========================================
// SHOW QUESTION
// ==========================================

function showQuestion() {

  const q =
    selectedQuestions[
      currentQuestionIndex
    ];

  if (!q) {
    showResults();
    return;
  }

  document.getElementById(
    "progress"
  ).textContent =
    `Question ${
      currentQuestionIndex + 1
    } of ${selectedQuestions.length}`;

  const percent =
    (
      (currentQuestionIndex + 1) /
      selectedQuestions.length
    ) * 100;

  const progressBar =
    document.getElementById(
      "progressBar"
    );

  if (progressBar) {
    progressBar.style.width =
      `${percent}%`;
  }

  document.getElementById(
    "patientName"
  ).textContent =
    q.patient || "";

  document.getElementById(
    "caseInfo"
  ).textContent =
    `${q.caseId || ""} • ${
      q.topic || ""
    } • ${
      q.subtopic ||
      q.style ||
      ""
    }`;

  const questionText =
    document.getElementById(
      "questionText"
    );

  if (Array.isArray(q.answer)) {

    questionText.innerHTML = `
      ${q.question}
      <br>
      <small class="sata-label">
        Select all that apply.
      </small>
    `;

  } else {

    questionText.textContent =
      q.question;
  }

  const choicesDiv =
    document.getElementById(
      "choices"
    );

  choicesDiv.innerHTML = "";

  const inputType =
    Array.isArray(q.answer)
      ? "checkbox"
      : "radio";

  shuffleQuestions(q.choices)
    .forEach(choice => {

      const label =
        document.createElement(
          "label"
        );

      label.className = "choice";

      const input =
        document.createElement(
          "input"
        );

      input.type = inputType;
      input.name = "answer";
      input.value = choice;

      const span =
        document.createElement(
          "span"
        );

      span.textContent = choice;

      label.appendChild(input);
      label.appendChild(span);

      label.addEventListener(
        "click",
        () => highlightChoice(label)
      );

      choicesDiv.appendChild(label);
    });

  const feedback =
    document.getElementById(
      "feedback"
    );

  feedback.classList.add("hidden");
  feedback.innerHTML = "";

  document
    .getElementById("submitBtn")
    .classList.remove("hidden");

  document
    .getElementById("nextBtn")
    .classList.add("hidden");
}


// ==========================================
// SUBMIT ANSWER
// ==========================================

function submitAnswer() {

  const selectedAnswers = [];

  document
    .querySelectorAll(
      'input[name="answer"]:checked'
    )
    .forEach(input => {

      selectedAnswers.push(
        input.value
      );
    });

  if (selectedAnswers.length === 0) {
    alert("Choose an answer first.");
    return;
  }

  const q =
    selectedQuestions[
      currentQuestionIndex
    ];

  const userAnswer =
    Array.isArray(q.answer)
      ? selectedAnswers
      : selectedAnswers[0];

  const isCorrect =
    answersMatch(
      userAnswer,
      q.answer
    );

  userAnswers[
    currentQuestionIndex
  ] = userAnswer;

  if (isCorrect) {
    score++;
  }

  // Highlight correct and incorrect answers
  document
    .querySelectorAll(".choice")
    .forEach(label => {

      const input =
        label.querySelector(
          "input"
        );

      const value =
        input.value;

      const isCorrectAnswer =
        Array.isArray(q.answer)
          ? q.answer.includes(value)
          : value === q.answer;

      const wasSelected =
        selectedAnswers.includes(
          value
        );

      if (isCorrectAnswer) {
        label.classList.add(
          "correct-choice"
        );
      }

      if (
        wasSelected &&
        !isCorrectAnswer
      ) {
        label.classList.add(
          "wrong-choice"
        );
      }

      input.disabled = true;
    });

  const correctAnswer =
    formatAnswer(q.answer);

  if (selectedMode === "study") {

    const feedback =
      document.getElementById(
        "feedback"
      );

    feedback.classList.remove(
      "hidden"
    );

    feedback.innerHTML = `
      <h3>
        ${
          isCorrect
            ? "✅ Correct"
            : "❌ Not quite"
        }
      </h3>

      <p>
        <strong>
          Correct answer:
        </strong>
        ${correctAnswer}
      </p>

      <p>
        <strong>
          Rationale:
        </strong>
        ${q.rationale || ""}
      </p>

      ${
        q.takeaway
          ? `
            <p>
              <strong>
                Takeaway:
              </strong>
              ${q.takeaway}
            </p>
          `
          : ""
      }
    `;

    document
      .getElementById("submitBtn")
      .classList.add("hidden");

    document
      .getElementById("nextBtn")
      .classList.remove("hidden");

  } else {

    nextQuestion();
  }
}


// ==========================================
// NEXT QUESTION
// ==========================================

function nextQuestion() {

  currentQuestionIndex++;

  if (
    currentQuestionIndex <
    selectedQuestions.length
  ) {

    showQuestion();

  } else {

    showResults();
  }
}


// ==========================================
// SHOW RESULTS
// ==========================================

function showResults() {

  document
    .getElementById("quiz")
    .classList.add("hidden");

  document
    .getElementById("results")
    .classList.remove("hidden");

  const percent =
    Math.round(
      (
        score /
        selectedQuestions.length
      ) * 100
    );

  saveSessionResult(percent);

  document.getElementById(
    "score"
  ).textContent =
    `You scored ${score} out of ${
      selectedQuestions.length
    } (${percent}%).`;

  document.getElementById(
    "scoreMessage"
  ).textContent =
    percent >= 80
      ? "Strong work — you are building clinical judgment."
      : "Good practice session — review the missed questions and try again.";

  renderTopicBreakdown();

  const review =
    document.getElementById(
      "review"
    );

  review.innerHTML = "";

  selectedQuestions.forEach(
    (q, index) => {

      const userAnswer =
        userAnswers[index];

      const correct =
        answersMatch(
          userAnswer,
          q.answer
        );

      const reviewCard =
        document.createElement(
          "div"
        );

      reviewCard.className =
        "review-card";

      reviewCard.dataset.correct =
        correct.toString();

      reviewCard.innerHTML = `
        <h3>
          ${
            correct
              ? "✅"
              : "❌"
          }
          Question ${index + 1}
        </h3>

        <p>
          <strong>
            ${q.patient || ""}
          </strong>
          —
          ${q.topic || ""}
        </p>

        <p>
          ${q.question}
        </p>

        <p>
          <strong>
            Your answer:
          </strong>
          ${formatAnswer(userAnswer)}
        </p>

        <p>
          <strong>
            Correct answer:
          </strong>
          ${formatAnswer(q.answer)}
        </p>

        <p>
          <strong>
            Rationale:
          </strong>
          ${q.rationale || ""}
        </p>

        ${
          q.takeaway
            ? `
              <p>
                <strong>
                  Takeaway:
                </strong>
                ${q.takeaway}
              </p>
            `
            : ""
        }
      `;

      review.appendChild(
        reviewCard
      );
    }
  );
}


// ==========================================
// MODULE SELECT ALL
// ==========================================

function toggleModule(
  moduleClass,
  isChecked
) {

  const topicChecks =
    document.querySelectorAll(
      `.topic-check.${moduleClass}`
    );

  topicChecks.forEach(input => {
    input.checked = isChecked;
  });

  updateSelectionSummary();
}


// ==========================================
// UPDATE SELECTION SUMMARY
// ==========================================

function updateSelectionSummary() {

  const checkedTopics = [
    ...document.querySelectorAll(
      ".topic-check:checked"
    )
  ].map(input => input.value);

  const selectedCount =
    getQuestionsForSelectedTopics(
      checkedTopics
    ).length;

  const summary =
    document.getElementById(
      "selectionSummary"
    );

  if (!summary) {
    return;
  }

  if (checkedTopics.length === 0) {

    summary.textContent =
      "Select at least one topic to begin.";

    return;
  }

  summary.textContent =
    `${checkedTopics.length} topic(s) selected • ${selectedCount} question(s) available`;
}


// ==========================================
// CHECKBOX CHANGE EVENTS
// ==========================================

document
  .querySelectorAll(".topic-check")
  .forEach(input => {

    input.addEventListener(
      "change",
      updateSelectionSummary
    );
  });


// ==========================================
// HIGHLIGHT CHOICE
// ==========================================

function highlightChoice(
  selectedLabel
) {

  const input =
    selectedLabel.querySelector(
      "input"
    );

  if (!input) {
    return;
  }

  // Radio buttons:
  // only one answer should look selected.
  if (input.type === "radio") {

    document
      .querySelectorAll(".choice")
      .forEach(label => {

        label.classList.remove(
          "selected-choice"
        );
      });

    selectedLabel.classList.add(
      "selected-choice"
    );

    return;
  }

  // Checkboxes:
  // allow multiple visual selections.
  setTimeout(() => {

    selectedLabel.classList.toggle(
      "selected-choice",
      input.checked
    );

  }, 0);
}


// ==========================================
// REVIEW INCORRECT
// ==========================================

function reviewIncorrect() {

  const reviewCards =
    document.querySelectorAll(
      ".review-card"
    );

  reviewCards.forEach(card => {

    if (
      card.dataset.correct ===
      "true"
    ) {

      card.style.display =
        "none";

    } else {

      card.style.display =
        "block";
    }
  });
}


// ==========================================
// REVIEW ALL
// ==========================================

function reviewAll() {

  const reviewCards =
    document.querySelectorAll(
      ".review-card"
    );

  reviewCards.forEach(card => {

    card.style.display =
      "block";
  });
}


// ==========================================
// GO HOME
// ==========================================

function goHome() {

  selectedQuestions = [];
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document
    .getElementById("results")
    .classList.add("hidden");

  document
    .getElementById("quiz")
    .classList.add("hidden");

  document
    .getElementById("home")
    .classList.remove("hidden");

  const review =
    document.getElementById(
      "review"
    );

  if (review) {
    review.innerHTML = "";
  }

  const scoreElement =
    document.getElementById(
      "score"
    );

  if (scoreElement) {
    scoreElement.textContent = "";
  }

  const progressBar =
    document.getElementById(
      "progressBar"
    );

  if (progressBar) {
    progressBar.style.width =
      "0%";
  }

  updateSelectionSummary();
}


// ==========================================
// TOPIC BREAKDOWN
// ==========================================

function renderTopicBreakdown() {

  const breakdown = {};

  selectedQuestions.forEach(
    (q, index) => {

      const topic =
        q.topic ||
        "Other";

      if (!breakdown[topic]) {

        breakdown[topic] = {
          correct: 0,
          total: 0
        };
      }

      breakdown[topic].total++;

      if (
        answersMatch(
          userAnswers[index],
          q.answer
        )
      ) {

        breakdown[topic]
          .correct++;
      }
    }
  );

  const topicBreakdown =
    document.getElementById(
      "topicBreakdown"
    );

  topicBreakdown.innerHTML =
    "<h3>Topic Breakdown</h3>";

  Object.keys(breakdown)
    .forEach(topic => {

      const item =
        breakdown[topic];

      const percent =
        Math.round(
          (
            item.correct /
            item.total
          ) * 100
        );

      topicBreakdown.innerHTML += `
        <div class="topic-score">
          <span>${topic}</span>
          <strong>
            ${percent}%
          </strong>
        </div>
      `;
    });
}


// ==========================================
// STUDY AGAIN
// ==========================================

function studyAgain() {

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];

  document
    .getElementById("results")
    .classList.add("hidden");

  document
    .getElementById("quiz")
    .classList.remove("hidden");

  const review =
    document.getElementById(
      "review"
    );

  if (review) {
    review.innerHTML = "";
  }

  selectedQuestions =
    shuffleQuestions(
      selectedQuestions
    );

  showQuestion();
}


// ==========================================
// SHUFFLE QUESTIONS
// ==========================================

function shuffleQuestions(array) {

  return [...array].sort(
    () => Math.random() - 0.5
  );
}


// ==========================================
// SAVE SESSION
// ==========================================

function saveSessionResult(
  percent
) {

  const session = {

    date:
      new Date()
        .toLocaleString(),

    mode:
      selectedMode,

    score,

    total:
      selectedQuestions.length,

    percent,

    topics: [
      ...new Set(
        selectedQuestions.map(
          q => q.topic
        )
      )
    ]
  };

  const pastSessions =
    JSON.parse(
      localStorage.getItem(
        "nursecaseSessions"
      )
    ) || [];

  pastSessions.unshift(
    session
  );

  localStorage.setItem(
    "nursecaseSessions",
    JSON.stringify(
      pastSessions
    )
  );
}


// ==========================================
// RECENT SESSION
// ==========================================

function renderRecentSession() {

  const sessions =
    JSON.parse(
      localStorage.getItem(
        "nursecaseSessions"
      )
    ) || [];

  const recentSession =
    document.getElementById(
      "recentSession"
    );

  if (!recentSession) {
    return;
  }

  if (sessions.length === 0) {

    recentSession.innerHTML = `
      <h3>Welcome</h3>

      <p>
        No completed sessions yet.
      </p>

      <p>
        Choose a mode and section
        to begin studying.
      </p>
    `;

    return;
  }

  const last =
    sessions[0];

  recentSession.innerHTML = `
    <h3>Welcome back</h3>

    <p>
      Last session:
      ${last.percent}% •
      ${last.score}/${last.total}
    </p>

    <p>
      ${last.topics.join(", ")}
    </p>
  `;
}


// ==========================================
// INITIALIZE
// ==========================================

renderRecentSession();
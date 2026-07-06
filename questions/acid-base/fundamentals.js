const fundamentalsQuestions = [
  {
    id: "FUND-001",
    caseId: "FUND-CASE-001",
    patient: "Jordan Miles",
    topic: "Fundamentals",
    subtopic: "pH Basics",
    style: "Recognition",
    difficulty: "Basic",
    question: "Jordan's ABG shows a pH of 7.30. Based on this value alone, what condition is present?",
    choices: ["Acidosis", "Alkalosis", "Normal pH", "Compensated alkalosis"],
    answer: "Acidosis",
    rationale: "Normal pH is 7.35–7.45. A pH below 7.35 indicates acidosis."
  },
  {
    id: "FUND-002",
    caseId: "FUND-CASE-001",
    patient: "Jordan Miles",
    topic: "Fundamentals",
    subtopic: "pH Basics",
    style: "Recognition",
    difficulty: "Basic",
    question: "Jordan's repeat ABG shows pH 7.50. How should the nurse interpret this pH?",
    choices: ["Acidosis", "Alkalosis", "Respiratory acidosis", "Metabolic acidosis"],
    answer: "Alkalosis",
    rationale: "A pH above 7.45 indicates alkalosis."
  },
  {
    id: "FUND-003",
    caseId: "FUND-CASE-002",
    patient: "Ms. Carter",
    topic: "Fundamentals",
    subtopic: "ABG Components",
    style: "Analyze Cues",
    difficulty: "Basic",
    question: "Ms. Carter's PaCO₂ is 52 mmHg. Which body system is primarily connected to this abnormal value?",
    choices: ["Lungs", "Kidneys", "Liver", "Pancreas"],
    answer: "Lungs",
    rationale: "PaCO₂ is the respiratory component of ABGs and is controlled by ventilation."
  },
  {
    id: "FUND-004",
    caseId: "FUND-CASE-002",
    patient: "Ms. Carter",
    topic: "Fundamentals",
    subtopic: "ABG Components",
    style: "Analyze Cues",
    difficulty: "Basic",
    question: "Ms. Carter's HCO₃⁻ is 18 mEq/L. Which body system is primarily connected to this abnormal value?",
    choices: ["Kidneys", "Lungs", "Heart", "Spleen"],
    answer: "Kidneys",
    rationale: "HCO₃⁻ is the metabolic component and is regulated by the kidneys."
  },
  {
    id: "FUND-005",
    caseId: "FUND-CASE-003",
    patient: "Mr. Allen",
    topic: "Fundamentals",
    subtopic: "Allen Test",
    style: "Safety",
    difficulty: "ATI",
    question: "Mr. Allen needs an ABG from the radial artery. The Allen test shows delayed return of color to the hand. What should the nurse do?",
    choices: [
      "Avoid radial puncture and use another site",
      "Proceed with the radial puncture",
      "Apply oxygen and repeat after the draw",
      "Draw venous blood instead"
    ],
    answer: "Avoid radial puncture and use another site",
    rationale: "A delayed or absent return of color means poor collateral circulation. The radial artery should not be punctured."
  }
];
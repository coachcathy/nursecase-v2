const abgInterpretationQuestions = [
  {
    id: "ABG-001",
    caseId: "ABG-CASE-001",
    patient: "Mr. Harris",
    topic: "ABG Interpretation",
    subtopic: "Respiratory Acidosis",
    style: "Recognition",
    difficulty: "Basic",
    question: "Mr. Harris has COPD and is increasingly drowsy. ABGs show pH 7.28, PaCO₂ 58, HCO₃⁻ 24. Which acid-base imbalance is most likely?",
    choices: [
      "Uncompensated Respiratory Acidosis",
      "Uncompensated Respiratory Alkalosis",
      "Uncompensated Metabolic Acidosis",
      "Fully Compensated Respiratory Acidosis"
    ],
    answer: "Uncompensated Respiratory Acidosis",
    rationale: "The pH is low, so this is acidosis. PaCO₂ is high, which matches respiratory acidosis. HCO₃⁻ is normal, so compensation has not started."
  },
  {
    id: "ABG-002",
    caseId: "ABG-CASE-002",
    patient: "Ms. Lane",
    topic: "ABG Interpretation",
    subtopic: "Respiratory Alkalosis",
    style: "Recognition",
    difficulty: "Basic",
    question: "Ms. Lane is having a panic attack and is breathing rapidly. ABGs show pH 7.48, PaCO₂ 28, HCO₃⁻ 23. Which imbalance is most likely?",
    choices: [
      "Respiratory Acidosis",
      "Respiratory Alkalosis",
      "Metabolic Acidosis",
      "Metabolic Alkalosis"
    ],
    answer: "Respiratory Alkalosis",
    rationale: "The pH is high, showing alkalosis. The PaCO₂ is low, meaning the patient is blowing off CO₂ through hyperventilation."
  },
  {
    id: "ABG-003",
    caseId: "ABG-CASE-003",
    patient: "Mr. Jones",
    topic: "ABG Interpretation",
    subtopic: "Metabolic Acidosis",
    style: "Recognition",
    difficulty: "Basic",
    question: "Mr. Jones has diabetic ketoacidosis. He has deep, rapid respirations. ABGs show pH 7.30, PaCO₂ 30, HCO₃⁻ 15. Which interpretation is correct?",
    choices: [
      "Uncompensated Respiratory Alkalosis",
      "Partially Compensated Metabolic Acidosis",
      "Fully Compensated Metabolic Acidosis",
      "Metabolic Alkalosis"
    ],
    answer: "Partially Compensated Metabolic Acidosis",
    rationale: "The pH is low. HCO₃⁻ is low, so the primary problem is metabolic acidosis. PaCO₂ is also low because the lungs are compensating by blowing off CO₂."
  }
];
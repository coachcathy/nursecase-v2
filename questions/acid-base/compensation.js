const compensationQuestions = [
  {
    id: "COMP-001",
    caseId: "COMP-CASE-001",
    patient: "Mr. Carlos Rivera",
    topic: "Compensation",
    subtopic: "Partially Compensated Respiratory Acidosis",
    style: "ABG Interpretation",
    difficulty: "ATI",
    question: "Mr. Rivera has pneumonia and worsening respiratory distress. ABGs show pH 7.32, PaCO₂ 55, HCO₃⁻ 30. Which interpretation is correct?",
    choices: [
      "Uncompensated respiratory acidosis",
      "Partially compensated respiratory acidosis",
      "Fully compensated respiratory acidosis",
      "Partially compensated metabolic alkalosis"
    ],
    answer: "Partially compensated respiratory acidosis",
    rationale: "The pH is low, so this is acidosis. PaCO₂ is high and matches respiratory acidosis. HCO₃⁻ is also high, showing the kidneys are trying to compensate. Since pH is still abnormal, it is partially compensated."
  },
  {
    id: "COMP-002",
    caseId: "COMP-CASE-002",
    patient: "Ms. Angela Price",
    topic: "Compensation",
    subtopic: "Partially Compensated Metabolic Acidosis",
    style: "ABG Interpretation",
    difficulty: "ATI",
    question: "Ms. Price has diabetic ketoacidosis. ABGs show pH 7.30, PaCO₂ 30, HCO₃⁻ 15. Which interpretation is correct?",
    choices: [
      "Partially compensated metabolic acidosis",
      "Uncompensated respiratory alkalosis",
      "Fully compensated metabolic acidosis",
      "Metabolic alkalosis"
    ],
    answer: "Partially compensated metabolic acidosis",
    rationale: "The pH is low, showing acidosis. HCO₃⁻ is low and matches metabolic acidosis. PaCO₂ is also low because the lungs are compensating by blowing off CO₂. Since pH is still abnormal, compensation is partial."
  },
  {
    id: "COMP-003",
    caseId: "COMP-CASE-003",
    patient: "Mr. Henry Collins",
    topic: "Compensation",
    subtopic: "Fully Compensated Respiratory Acidosis",
    style: "7.40 Rule",
    difficulty: "Advanced",
    question: "Mr. Collins has long-term COPD. ABGs show pH 7.37, PaCO₂ 55, HCO₃⁻ 32. Which interpretation is correct?",
    choices: [
      "Fully compensated respiratory acidosis",
      "Partially compensated respiratory acidosis",
      "Fully compensated metabolic alkalosis",
      "Normal ABG"
    ],
    answer: "Fully compensated respiratory acidosis",
    rationale: "The pH is normal but below 7.40, so it leans acidotic. PaCO₂ is high and matches acidosis, making the primary problem respiratory. HCO₃⁻ is high because the kidneys retained bicarbonate to compensate."
  },
  {
    id: "COMP-004",
    caseId: "COMP-CASE-004",
    patient: "Ms. Nina Walker",
    topic: "Compensation",
    subtopic: "Fully Compensated Respiratory Alkalosis",
    style: "7.40 Rule",
    difficulty: "Advanced",
    question: "Ms. Walker has been hyperventilating from anxiety. ABGs show pH 7.43, PaCO₂ 30, HCO₃⁻ 20. Which interpretation is correct?",
    choices: [
      "Fully compensated respiratory alkalosis",
      "Fully compensated metabolic acidosis",
      "Partially compensated respiratory alkalosis",
      "Normal ABG"
    ],
    answer: "Fully compensated respiratory alkalosis",
    rationale: "The pH is normal but above 7.40, so it leans alkalotic. PaCO₂ is low and matches alkalosis, making the primary problem respiratory. HCO₃⁻ is low because the kidneys excreted bicarbonate to compensate."
  },
  {
    id: "COMP-005",
    caseId: "COMP-CASE-005",
    patient: "Mr. Eli Turner",
    topic: "Compensation",
    subtopic: "Fully Compensated Metabolic Acidosis",
    style: "7.40 Rule",
    difficulty: "Advanced",
    question: "Mr. Turner has chronic kidney disease. ABGs show pH 7.38, PaCO₂ 30, HCO₃⁻ 17. Which interpretation is correct?",
    choices: [
      "Fully compensated metabolic acidosis",
      "Fully compensated respiratory alkalosis",
      "Partially compensated metabolic acidosis",
      "Uncompensated respiratory alkalosis"
    ],
    answer: "Fully compensated metabolic acidosis",
    rationale: "The pH is normal but below 7.40, so it leans acidotic. HCO₃⁻ is low and matches metabolic acidosis. PaCO₂ is low because the lungs are compensating by blowing off CO₂."
  }
];
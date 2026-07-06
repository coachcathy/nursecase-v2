const metabolicAcidosisQuestions = [
  {
    id: "MA-001",
    caseId: "MA-CASE-001",
    patient: "Mr. Daniel Jones",
    topic: "Metabolic Acidosis",
    subtopic: "DKA",
    style: "Recognition",
    difficulty: "ATI",
    question: "Mr. Jones has type 1 diabetes and arrives with fruity breath, dry mucous membranes, nausea, and deep rapid respirations. ABGs show pH 7.30, PaCO₂ 30, HCO₃⁻ 15. Which imbalance is most likely?",
    choices: [
      "Metabolic acidosis",
      "Metabolic alkalosis",
      "Respiratory acidosis",
      "Respiratory alkalosis"
    ],
    answer: "Metabolic acidosis",
    rationale: "Low pH indicates acidosis. Low HCO₃⁻ identifies the primary problem as metabolic. Kussmaul respirations are the lungs compensating by blowing off CO₂."
  },
  {
    id: "MA-002",
    caseId: "MA-CASE-001",
    patient: "Mr. Daniel Jones",
    topic: "Metabolic Acidosis",
    subtopic: "DKA Compensation",
    style: "Analyze Cues",
    difficulty: "ATI",
    question: "Which finding best represents respiratory compensation for Mr. Jones?",
    choices: [
      "Kussmaul respirations",
      "Shallow slow breathing",
      "Vomiting",
      "Decreased urine output only"
    ],
    answer: "Kussmaul respirations",
    rationale: "In metabolic acidosis, the lungs compensate by increasing the rate and depth of breathing to blow off CO₂."
  },
  {
    id: "MA-003",
    caseId: "MA-CASE-001",
    patient: "Mr. Daniel Jones",
    topic: "Metabolic Acidosis",
    subtopic: "Safety",
    style: "Safety",
    difficulty: "ATI",
    question: "Mr. Jones is acidotic. Which assessment is the priority because of the expected electrolyte shift?",
    choices: [
      "Cardiac rhythm",
      "Skin turgor only",
      "Bowel sounds",
      "Pupil size"
    ],
    answer: "Cardiac rhythm",
    rationale: "Acidosis can shift potassium out of cells, causing hyperkalemia and dangerous dysrhythmias."
  },
  {
    id: "MA-004",
    caseId: "MA-CASE-001",
    patient: "Mr. Daniel Jones",
    topic: "Metabolic Acidosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    question: "Which provider order would the nurse expect for metabolic acidosis related to DKA?",
    choices: [
      "Insulin and IV fluids",
      "Encourage hyperventilation only",
      "Potassium-wasting diuretic only",
      "Restrict all fluids"
    ],
    answer: "Insulin and IV fluids",
    rationale: "DKA treatment includes insulin to stop ketone production and IV fluids to restore circulating volume."
  },
  {
    id: "MA-005",
    caseId: "MA-CASE-001",
    patient: "Mr. Daniel Jones",
    topic: "Metabolic Acidosis",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    question: "Which finding shows Mr. Jones is improving?",
    choices: [
      "pH rises from 7.30 to 7.37",
      "HCO₃⁻ drops from 15 to 10",
      "Patient becomes less responsive",
      "QRS complexes widen"
    ],
    answer: "pH rises from 7.30 to 7.37",
    rationale: "A pH moving back into the normal range shows improvement in acidosis."
  }
];
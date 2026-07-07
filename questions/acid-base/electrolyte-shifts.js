const electrolyteShiftQuestions = [
  {
    id: "ES-001",
    caseId: "ES-CASE-001",
    patient: "Mr. Grant",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis and Potassium",
    style: "Recognition",
    difficulty: "ATI",
    question: "Mr. Grant has metabolic acidosis from diabetic ketoacidosis. His ECG shows tall peaked T waves. Which electrolyte imbalance is the nurse most concerned about?",
    choices: ["Hypokalemia", "Hyperkalemia", "Hypocalcemia", "Hypernatremia"],
    answer: "Hyperkalemia",
    rationale: "In acidosis, hydrogen ions shift into cells and potassium shifts out into the blood. This can cause hyperkalemia and dangerous dysrhythmias."
  },
  {
    id: "ES-002",
    caseId: "ES-CASE-001",
    patient: "Mr. Grant",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis Safety",
    style: "Priority",
    difficulty: "ATI",
    question: "Mr. Grant is acidotic and has a potassium of 6.4 mEq/L. What is the nurse's priority assessment?",
    choices: ["Cardiac rhythm", "Bowel sounds", "Skin turgor", "Pupil reaction"],
    answer: "Cardiac rhythm",
    rationale: "Hyperkalemia can cause life-threatening dysrhythmias. In acidosis, cardiovascular assessment is a priority."
  },
  {
    id: "ES-003",
    caseId: "ES-CASE-001",
    patient: "Mr. Grant",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis ECG",
    style: "Analyze Cues",
    difficulty: "ATI",
    question: "Which ECG finding would support worsening hyperkalemia in this acidotic patient?",
    choices: ["Tall peaked T waves", "U waves", "Flattened T waves", "Shortened PR only"],
    answer: "Tall peaked T waves",
    rationale: "Hyperkalemia commonly causes tall peaked T waves and may progress to widened QRS complexes and cardiac arrest."
  },
  {
    id: "ES-004",
    caseId: "ES-CASE-002",
    patient: "Ms. Bailey",
    topic: "Electrolyte Shifts",
    subtopic: "Alkalosis and Potassium",
    style: "Recognition",
    difficulty: "ATI",
    question: "Ms. Bailey has metabolic alkalosis after prolonged vomiting. She reports weakness and muscle cramps. Which electrolyte imbalance is expected?",
    choices: ["Hypokalemia", "Hyperkalemia", "Hypermagnesemia", "Hyperphosphatemia"],
    answer: "Hypokalemia",
    rationale: "In alkalosis, potassium shifts into cells, lowering serum potassium. Vomiting can also contribute to potassium and chloride loss."
  },
  {
    id: "ES-005",
    caseId: "ES-CASE-002",
    patient: "Ms. Bailey",
    topic: "Electrolyte Shifts",
    subtopic: "Alkalosis Safety",
    style: "Safety",
    difficulty: "ATI",
    question: "Which safety intervention is most appropriate for Ms. Bailey?",
    choices: ["Implement fall precautions", "Restrict all fluids", "Encourage independent ambulation", "Avoid electrolyte monitoring"],
    answer: "Implement fall precautions",
    rationale: "Alkalosis can cause hypokalemia, weakness, dizziness, and confusion, increasing fall risk."
  },
  {
    id: "ES-006",
    caseId: "ES-CASE-002",
    patient: "Ms. Bailey",
    topic: "Electrolyte Shifts",
    subtopic: "Alkalosis and Calcium",
    style: "Analyze Cues",
    difficulty: "ATI",
    question: "Ms. Bailey develops tingling around the mouth and carpal spasms. Which electrolyte change is most likely contributing?",
    choices: ["Decreased ionized calcium", "Increased ionized calcium", "Increased sodium", "Increased chloride"],
    answer: "Decreased ionized calcium",
    rationale: "Alkalosis increases calcium binding to albumin, which decreases ionized calcium and can cause tingling, cramps, tetany, Chvostek's sign, and Trousseau's sign."
  },
  {
    id: "ES-007",
    caseId: "ES-CASE-003",
    patient: "Mr. Powell",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis Manifestations",
    style: "Recognition",
    difficulty: "ATI",
    question: "Mr. Powell has severe acidosis. Which overall pattern of clinical findings would the nurse expect?",
    choices: [
      "Lethargy, hyporeflexia, weakness",
      "Tetany, twitching, hyperreflexia",
      "Extreme alertness and agitation only",
      "Increased ionized calcium causing tetany"
    ],
    answer: "Lethargy, hyporeflexia, weakness",
    rationale: "Acidosis is often associated with depressed CNS and neuromuscular activity: lethargy, confusion, hyporeflexia, weakness, and possible coma."
  },
  {
    id: "ES-008",
    caseId: "ES-CASE-003",
    patient: "Mr. Powell",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis Priority",
    style: "Priority",
    difficulty: "ATI",
    question: "A patient with acidosis becomes bradycardic and hypotensive with widened QRS complexes. What should the nurse do first?",
    choices: [
      "Report the cardiac changes immediately",
      "Encourage oral fluids",
      "Document as expected only",
      "Ambulate the patient"
    ],
    answer: "Report the cardiac changes immediately",
    rationale: "Bradycardia, hypotension, and widened QRS complexes may indicate life-threatening hyperkalemia and require immediate intervention."
  },
  {
    id: "ES-009",
    caseId: "ES-CASE-004",
    patient: "Ms. Sutton",
    topic: "Electrolyte Shifts",
    subtopic: "Alkalosis Manifestations",
    style: "Recognition",
    difficulty: "ATI",
    question: "Ms. Sutton has alkalosis. Which finding is most consistent with this imbalance?",
    choices: ["Muscle twitching and tetany", "Flaccid paralysis", "Kussmaul respirations", "Peaked T waves"],
    answer: "Muscle twitching and tetany",
    rationale: "Alkalosis is associated with neuromuscular irritability, including twitching, cramps, tetany, and paresthesias."
  },
  {
    id: "ES-010",
    caseId: "ES-CASE-004",
    patient: "Ms. Sutton",
    topic: "Electrolyte Shifts",
    subtopic: "Alkalosis Complications",
    style: "Safety",
    difficulty: "ATI",
    question: "Which complications are most important to monitor in alkalosis?",
    choices: [
      "Hypokalemia and hypocalcemia",
      "Hyperkalemia and hyperchloremia",
      "Hypernatremia and hypermagnesemia",
      "Hyperphosphatemia only"
    ],
    answer: "Hypokalemia and hypocalcemia",
    rationale: "Alkalosis commonly causes low potassium and decreased ionized calcium, leading to weakness, dysrhythmias, cramps, and tetany."
  },
  {
    id: "ES-011",
    caseId: "ES-CASE-005",
    patient: "Mr. Davis",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis vs Alkalosis",
    style: "Comparison",
    difficulty: "ATI",
    question: "The nurse compares acidosis and alkalosis. Which statement is correct?",
    choices: [
      "Acidosis is commonly associated with hyperkalemia; alkalosis is commonly associated with hypokalemia.",
      "Acidosis always causes hypokalemia.",
      "Alkalosis always causes hyperkalemia.",
      "Potassium is not affected by acid-base balance."
    ],
    answer: "Acidosis is commonly associated with hyperkalemia; alkalosis is commonly associated with hypokalemia.",
    rationale: "Acid-base changes affect potassium shifts. Acidosis tends to increase serum potassium, while alkalosis tends to lower serum potassium."
  },
  {
    id: "ES-012",
    caseId: "ES-CASE-005",
    patient: "Mr. Davis",
    topic: "Electrolyte Shifts",
    subtopic: "Acidosis vs Alkalosis",
    style: "Comparison",
    difficulty: "ATI",
    question: "Which patient is at greater risk for hyperkalemia-related dysrhythmias?",
    choices: [
      "A patient with DKA and acidosis",
      "A patient with prolonged vomiting and alkalosis",
      "A patient with anxiety-induced respiratory alkalosis",
      "A patient with NG suction and metabolic alkalosis"
    ],
    answer: "A patient with DKA and acidosis",
    rationale: "DKA causes metabolic acidosis, which can shift potassium out of cells and increase dysrhythmia risk."
  },
  {
    id: "ES-013",
    caseId: "ES-CASE-006",
    patient: "Ms. Morgan",
    topic: "Electrolyte Shifts",
    subtopic: "Vomiting and Alkalosis",
    style: "Recognition",
    difficulty: "ATI",
    question: "Ms. Morgan has been vomiting for 3 days. She has muscle cramps, weakness, and dizziness. Which acid-base and electrolyte pattern is most likely?",
    choices: [
      "Metabolic alkalosis with hypokalemia",
      "Metabolic acidosis with hyperkalemia",
      "Respiratory acidosis with hyperkalemia",
      "Respiratory alkalosis with hypernatremia"
    ],
    answer: "Metabolic alkalosis with hypokalemia",
    rationale: "Vomiting causes loss of gastric acid and chloride, leading to metabolic alkalosis. Potassium may also be depleted."
  },
  {
    id: "ES-014",
    caseId: "ES-CASE-006",
    patient: "Ms. Morgan",
    topic: "Electrolyte Shifts",
    subtopic: "Nursing Intervention",
    style: "Take Action",
    difficulty: "ATI",
    question: "Which intervention should the nurse anticipate for Ms. Morgan?",
    choices: [
      "IV fluids and electrolyte replacement as prescribed",
      "Sodium bicarbonate IV push",
      "Restrict all potassium intake",
      "Encourage hyperventilation"
    ],
    answer: "IV fluids and electrolyte replacement as prescribed",
    rationale: "Treatment for metabolic alkalosis from vomiting focuses on correcting fluid volume and replacing electrolytes such as potassium and chloride."
  },
  {
    id: "ES-015",
    caseId: "ES-CASE-007",
    patient: "Mr. Ellis",
    topic: "Electrolyte Shifts",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    question: "Mr. Ellis was treated for acidosis and hyperkalemia. Which finding best indicates improvement?",
    choices: [
      "Potassium decreases from 6.3 to 4.4 mEq/L",
      "QRS complexes widen further",
      "Patient becomes less responsive",
      "Heart rate drops to 38/min"
    ],
    answer: "Potassium decreases from 6.3 to 4.4 mEq/L",
    rationale: "A potassium level returning to normal and improved cardiac rhythm indicate improvement."
  }
];
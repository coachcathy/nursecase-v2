const neuroScenarioChallengeQuestions = [
  {
    id: "NSC-001",
    caseId: "NSC-CASE-001",
    patient: "Mr. Allen",
    topic: "Neuro Scenario Challenge",
    subtopic: "Parkinson's Disease",
    style: "Priority",
    difficulty: "ATI",
    question: "Mr. Allen has Parkinson's disease. He is due for carbidopa-levodopa at 0800 but tells the nurse he feels fine and wants to skip it. What is the best nursing response?",
    choices: [
      "This medication works best when taken on schedule",
      "Skipping doses is recommended when symptoms improve",
      "You only need this medication at bedtime",
      "This medication cures Parkinson's disease"
    ],
    answer: "This medication works best when taken on schedule",
    rationale: "Carbidopa-levodopa should be taken on schedule to prevent worsening mobility, rigidity, tremors, and symptom fluctuations."
  },
  {
    id: "NSC-002",
    caseId: "NSC-CASE-002",
    patient: "Ms. Brown",
    topic: "Neuro Scenario Challenge",
    subtopic: "Seizures",
    style: "Priority",
    difficulty: "ATI",
    question: "Ms. Brown is having a seizure. Her family member tries to put a spoon in her mouth. What should the nurse do?",
    choices: [
      "Stop the family member and explain nothing should be placed in the mouth",
      "Allow it to prevent tongue swallowing",
      "Use a tongue blade instead",
      "Restrain the patient's jaw"
    ],
    answer: "Stop the family member and explain nothing should be placed in the mouth",
    rationale: "Nothing should be placed in the mouth during a seizure because it can cause injury or airway obstruction."
  },
  {
    id: "NSC-003",
    caseId: "NSC-CASE-003",
    patient: "Ms. Evans",
    topic: "Neuro Scenario Challenge",
    subtopic: "Multiple Sclerosis",
    style: "Teaching",
    difficulty: "ATI",
    question: "Ms. Evans with MS says, 'I save all my chores for one day so I can rest the rest of the week.' What teaching is best?",
    choices: [
      "Spread activities throughout the week with planned rest periods",
      "Do all activities at once until exhausted",
      "Avoid all physical activity",
      "Only exercise during the hottest part of the day"
    ],
    answer: "Spread activities throughout the week with planned rest periods",
    rationale: "Energy conservation for MS includes pacing activities, planning rest, and avoiding exhaustion."
  },
  {
    id: "NSC-004",
    caseId: "NSC-CASE-004",
    patient: "Mr. King",
    topic: "Neuro Scenario Challenge",
    subtopic: "Seizures",
    style: "Evaluation",
    difficulty: "ATI",
    question: "After a tonic-clonic seizure, Mr. King is breathing normally but confused and sleepy. What is the best nursing action?",
    choices: [
      "Remain with him and continue monitoring",
      "Force him to walk immediately",
      "Give oral fluids right away",
      "Tell him to answer questions quickly"
    ],
    answer: "Remain with him and continue monitoring",
    rationale: "Postictal confusion and sleepiness are expected. The nurse should maintain safety, monitor airway and neurologic status, and allow rest."
  },
  {
    id: "NSC-005",
    caseId: "NSC-CASE-005",
    patient: "Mr. Grant",
    topic: "Neuro Scenario Challenge",
    subtopic: "Parkinson's Disease",
    style: "Analyze Cues",
    difficulty: "ATI",
    question: "Mr. Grant with Parkinson's disease has drooling, a wet voice, and coughing during meals. What does this most likely indicate?",
    choices: [
      "Dysphagia with aspiration risk",
      "Improved swallowing",
      "Seizure aura",
      "Multiple sclerosis remission"
    ],
    answer: "Dysphagia with aspiration risk",
    rationale: "Drooling, wet voice, and coughing during meals suggest impaired swallowing and aspiration risk."
  },
  {
    id: "NSC-006",
    caseId: "NSC-CASE-006",
    patient: "Ms. Carter",
    topic: "Neuro Scenario Challenge",
    subtopic: "Multiple Sclerosis",
    style: "Analyze Cues",
    difficulty: "ATI",
    question: "Ms. Carter with MS reports increased weakness, blurred vision, and numbness after sitting outside on a hot day. What is the best interpretation?",
    choices: [
      "Heat may temporarily worsen MS symptoms",
      "The symptoms prove Parkinson's disease",
      "The symptoms are unrelated to MS",
      "Hot temperatures improve MS symptoms"
    ],
    answer: "Heat may temporarily worsen MS symptoms",
    rationale: "Heat sensitivity is common in MS and can temporarily worsen neurologic symptoms."
  },
  {
    id: "NSC-007",
    caseId: "NSC-CASE-007",
    patient: "Mr. Davis",
    topic: "Neuro Scenario Challenge",
    subtopic: "Seizures",
    style: "Priority",
    difficulty: "ATI",
    question: "Mr. Davis has had two seizures back-to-back without regaining consciousness. What is the priority action?",
    choices: [
      "Call for emergency assistance",
      "Wait for him to wake up",
      "Offer oral medication",
      "Place something in his mouth"
    ],
    answer: "Call for emergency assistance",
    rationale: "Repeated seizures without recovery suggest status epilepticus, a medical emergency requiring rapid intervention."
  },
  {
    id: "NSC-008",
    caseId: "NSC-CASE-008",
    patient: "Ms. Hill",
    topic: "Neuro Scenario Challenge",
    subtopic: "Parkinson's Disease",
    style: "Safety",
    difficulty: "ATI",
    question: "Ms. Hill has Parkinson's disease and freezes when approaching doorways. Which intervention is most helpful?",
    choices: [
      "Use visual cues and deliberate stepping",
      "Tell her to hurry",
      "Keep lighting dim",
      "Avoid assistive devices"
    ],
    answer: "Use visual cues and deliberate stepping",
    rationale: "Visual cues and deliberate stepping can help patients with Parkinson's manage freezing episodes."
  },
  {
    id: "NSC-009",
    caseId: "NSC-CASE-009",
    patient: "Ms. Lane",
    topic: "Neuro Scenario Challenge",
    subtopic: "Multiple Sclerosis",
    style: "Priority",
    difficulty: "ATI",
    question: "Ms. Lane has MS and reports urinary urgency, burning, and cloudy urine. What should the nurse suspect?",
    choices: [
      "Urinary tract infection",
      "Expected finding with no concern",
      "Parkinsonian crisis",
      "Seizure activity"
    ],
    answer: "Urinary tract infection",
    rationale: "MS can cause bladder dysfunction, increasing risk for urinary retention and infection. Burning and cloudy urine suggest UTI."
  },
  {
    id: "NSC-010",
    caseId: "NSC-CASE-010",
    patient: "Mr. Lewis",
    topic: "Neuro Scenario Challenge",
    subtopic: "Seizures",
    style: "Teaching",
    difficulty: "ATI",
    question: "Mr. Lewis asks if he can swim alone since his seizures are controlled. What is the best response?",
    choices: [
      "Avoid swimming alone because seizure activity could occur unexpectedly",
      "Swimming alone is always safe",
      "Only swim alone at night",
      "Stop antiseizure medication before swimming"
    ],
    answer: "Avoid swimming alone because seizure activity could occur unexpectedly",
    rationale: "Patients with seizure disorders should avoid swimming alone due to drowning risk if a seizure occurs."
  },
  {
    id: "NSC-011",
    caseId: "NSC-CASE-011",
    patient: "Ms. Young",
    topic: "Neuro Scenario Challenge",
    subtopic: "Multiple Sclerosis",
    style: "Evaluation",
    difficulty: "ATI",
    question: "Which statement shows Ms. Young understands MS self-management?",
    choices: [
      "I will report new weakness or vision changes",
      "I should ignore new neurologic symptoms",
      "I should overheat when symptoms worsen",
      "I should stop medications when I feel better"
    ],
    answer: "I will report new weakness or vision changes",
    rationale: "New or worsening neurologic symptoms may indicate an MS exacerbation and should be reported."
  },
  {
    id: "NSC-012",
    caseId: "NSC-CASE-012",
    patient: "Mr. Scott",
    topic: "Neuro Scenario Challenge",
    subtopic: "Parkinson's Disease",
    style: "Teaching",
    difficulty: "Basic",
    question: "Mr. Scott has constipation related to Parkinson's disease. Which plan is best?",
    choices: [
      "Increase fluids, fiber, and activity as tolerated",
      "Avoid all fluids",
      "Stay in bed as much as possible",
      "Eat only low-fiber foods"
    ],
    answer: "Increase fluids, fiber, and activity as tolerated",
    rationale: "Constipation can occur with Parkinson's disease. Fluids, fiber, and activity can support bowel function."
  },
  {
    id: "NSC-013",
    caseId: "NSC-CASE-013",
    patient: "Ms. Cole",
    topic: "Neuro Scenario Challenge",
    subtopic: "Seizures",
    style: "SATA",
    difficulty: "ATI",
    question: "Which observations should the nurse document after a seizure? Select all that apply.",
    choices: [
      "Duration",
      "Type of movements",
      "Airway status",
      "Postictal behavior",
      "Favorite meal"
    ],
    answer: ["Duration", "Type of movements", "Airway status", "Postictal behavior"],
    rationale: "Seizure documentation should include timing, movements, level of consciousness, airway status, injuries, interventions, and postictal behavior."
  },
  {
    id: "NSC-014",
    caseId: "NSC-CASE-014",
    patient: "Mr. Brooks",
    topic: "Neuro Scenario Challenge",
    subtopic: "Parkinson's Disease",
    style: "SATA",
    difficulty: "ATI",
    question: "Which findings increase safety risks in Parkinson's disease? Select all that apply.",
    choices: [
      "Shuffling gait",
      "Dysphagia",
      "Freezing episodes",
      "Orthostatic dizziness",
      "Improved balance"
    ],
    answer: ["Shuffling gait", "Dysphagia", "Freezing episodes", "Orthostatic dizziness"],
    rationale: "Parkinson's disease increases risk for falls and aspiration due to gait changes, freezing, dysphagia, and possible orthostatic hypotension."
  },
  {
    id: "NSC-015",
    caseId: "NSC-CASE-015",
    patient: "Ms. Grant",
    topic: "Neuro Scenario Challenge",
    subtopic: "Multiple Sclerosis",
    style: "SATA",
    difficulty: "ATI",
    question: "Which findings can occur with multiple sclerosis? Select all that apply.",
    choices: [
      "Fatigue",
      "Blurred vision",
      "Numbness",
      "Bladder dysfunction",
      "Resting tremor as hallmark symptom"
    ],
    answer: ["Fatigue", "Blurred vision", "Numbness", "Bladder dysfunction"],
    rationale: "MS can cause fatigue, vision changes, numbness, weakness, bladder dysfunction, balance problems, and cognitive changes."
  }
];
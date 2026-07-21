const antihypertensiveMedicationQuestions = [
  {
    id: "PERF-MED-001",
    caseId: "PERF-MED-CASE-001",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Thiazide Diuretics",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is classified as a thiazide diuretic?",
    choices: [
      "Hydrochlorothiazide",
      "Furosemide",
      "Spironolactone",
      "Lisinopril"
    ],
    answer: "Hydrochlorothiazide",
    rationale:
      "Hydrochlorothiazide is a thiazide diuretic commonly used as first-line therapy for uncomplicated hypertension.",
    takeaway:
      "Hydrochlorothiazide is a thiazide diuretic used to reduce blood volume and blood pressure."
  },
  {
    id: "PERF-MED-002",
    caseId: "PERF-MED-CASE-002",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Thiazide Diuretics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which laboratory finding is most important for the nurse to monitor in a patient taking hydrochlorothiazide?",
    choices: [
      "Serum potassium",
      "Serum ammonia",
      "Troponin level",
      "Platelet aggregation"
    ],
    answer: "Serum potassium",
    rationale:
      "Thiazide diuretics increase potassium excretion and can cause hypokalemia.",
    takeaway:
      "Thiazide diuretics can lower potassium."
  },
  {
    id: "PERF-MED-003",
    caseId: "PERF-MED-CASE-003",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Thiazide Diuretics",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which adverse effects may occur with thiazide diuretics? Select all that apply.",
    choices: [
      "Hypokalemia",
      "Hyponatremia",
      "Hyperuricemia",
      "Hyperglycemia",
      "Hyperkalemia",
      "Decreased uric acid"
    ],
    answer: [
      "Hypokalemia",
      "Hyponatremia",
      "Hyperuricemia",
      "Hyperglycemia"
    ],
    rationale:
      "Thiazide diuretics can cause potassium and sodium loss, increase uric acid, and affect glucose control.",
    takeaway:
      "Monitor electrolytes, glucose, and gout symptoms with thiazides."
  },
  {
    id: "PERF-MED-004",
    caseId: "PERF-MED-CASE-004",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Loop Diuretics",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is a loop diuretic?",
    choices: [
      "Furosemide",
      "Losartan",
      "Amlodipine",
      "Metoprolol"
    ],
    answer: "Furosemide",
    rationale:
      "Furosemide is a potent loop diuretic used for fluid overload, heart failure, edema, and some cases of hypertension.",
    takeaway:
      "Furosemide is a high-ceiling loop diuretic."
  },
  {
    id: "PERF-MED-005",
    caseId: "PERF-MED-CASE-005",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Loop Diuretics",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient receiving high-dose IV furosemide reports ringing in the ears. What should the nurse do first?",
    choices: [
      "Hold the medication and notify the provider",
      "Document the finding as expected",
      "Administer the next dose early",
      "Encourage the patient to increase sodium intake"
    ],
    answer: "Hold the medication and notify the provider",
    rationale:
      "Tinnitus may indicate ototoxicity, a serious adverse effect associated with high doses or rapid IV administration of loop diuretics.",
    takeaway:
      "Tinnitus with loop diuretics requires prompt evaluation."
  },
  {
    id: "PERF-MED-006",
    caseId: "PERF-MED-CASE-006",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Diuretic Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "When should the nurse instruct a patient to take a once-daily diuretic?",
    choices: [
      "In the morning",
      "At bedtime",
      "At midnight",
      "Immediately after falling asleep"
    ],
    answer: "In the morning",
    rationale:
      "Morning administration reduces nocturia and the risk of sleep disruption and nighttime falls.",
    takeaway:
      "Take diuretics early in the day."
  },
  {
    id: "PERF-MED-007",
    caseId: "PERF-MED-CASE-007",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Hypokalemia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which findings may indicate hypokalemia in a patient taking a loop or thiazide diuretic? Select all that apply.",
    choices: [
      "Muscle weakness",
      "Irregular pulse",
      "Fatigue",
      "Dysrhythmias",
      "Peaked T waves",
      "Severe hyperreflexia"
    ],
    answer: [
      "Muscle weakness",
      "Irregular pulse",
      "Fatigue",
      "Dysrhythmias"
    ],
    rationale:
      "Hypokalemia can impair skeletal and cardiac muscle function, causing weakness, fatigue, and dysrhythmias.",
    takeaway:
      "Weakness and rhythm changes can signal potassium loss."
  },
  {
    id: "PERF-MED-008",
    caseId: "PERF-MED-CASE-008",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Potassium-Sparing Diuretics",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is a potassium-sparing diuretic?",
    choices: [
      "Spironolactone",
      "Hydrochlorothiazide",
      "Furosemide",
      "Bumetanide"
    ],
    answer: "Spironolactone",
    rationale:
      "Spironolactone blocks aldosterone and promotes sodium excretion while retaining potassium.",
    takeaway:
      "Spironolactone retains potassium."
  },
  {
    id: "PERF-MED-009",
    caseId: "PERF-MED-CASE-009",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Potassium-Sparing Diuretics",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement by a patient taking spironolactone requires further teaching?",
    choices: [
      "I will use a potassium-based salt substitute",
      "I will report muscle weakness or an irregular heartbeat",
      "I will have my potassium level monitored",
      "I will take the medication as prescribed"
    ],
    answer:
      "I will use a potassium-based salt substitute",
    rationale:
      "Spironolactone can cause hyperkalemia. Potassium supplements and potassium-containing salt substitutes should be avoided unless prescribed.",
    takeaway:
      "Avoid extra potassium with potassium-sparing diuretics."
  },
  {
    id: "PERF-MED-010",
    caseId: "PERF-MED-CASE-010",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Spironolactone",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which adverse effect is specifically associated with spironolactone?",
    choices: [
      "Gynecomastia",
      "Dry cough",
      "Orange urine",
      "Ototoxicity"
    ],
    answer: "Gynecomastia",
    rationale:
      "Spironolactone can cause endocrine effects such as gynecomastia because of its hormonal activity.",
    takeaway:
      "Spironolactone may cause breast enlargement in males."
  },
  {
    id: "PERF-MED-011",
    caseId: "PERF-MED-CASE-011",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ACE Inhibitors",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is an ACE inhibitor?",
    choices: [
      "Lisinopril",
      "Losartan",
      "Metoprolol",
      "Amlodipine"
    ],
    answer: "Lisinopril",
    rationale:
      "ACE inhibitors commonly end in '-pril.' Lisinopril blocks conversion of angiotensin I to angiotensin II.",
    takeaway:
      "ACE inhibitors usually end in '-pril.'"
  },
  {
    id: "PERF-MED-012",
    caseId: "PERF-MED-CASE-012",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ACE Inhibitors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient taking lisinopril reports a persistent dry cough. Which action should the nurse take?",
    choices: [
      "Notify the provider because the patient may need an ARB",
      "Tell the patient the cough means the drug is ineffective",
      "Recommend doubling the dose",
      "Advise the patient to stop all fluids"
    ],
    answer:
      "Notify the provider because the patient may need an ARB",
    rationale:
      "A persistent dry cough is a characteristic adverse effect of ACE inhibitors. The provider may prescribe an ARB instead.",
    takeaway:
      "Dry cough is a classic ACE inhibitor adverse effect."
  },
  {
    id: "PERF-MED-013",
    caseId: "PERF-MED-CASE-013",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ACE Inhibitor Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which finding in a patient taking lisinopril requires immediate intervention?",
    choices: [
      "Swelling of the lips and tongue",
      "Mild fatigue",
      "Occasional headache",
      "Increased urination in the morning"
    ],
    answer: "Swelling of the lips and tongue",
    rationale:
      "Lip and tongue swelling may indicate angioedema, which can obstruct the airway and is a medical emergency.",
    takeaway:
      "Angioedema from an ACE inhibitor threatens the airway."
  },
  {
    id: "PERF-MED-014",
    caseId: "PERF-MED-CASE-014",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ACE Inhibitors and ARBs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which adverse effects should the nurse monitor for in patients taking ACE inhibitors or ARBs? Select all that apply.",
    choices: [
      "Hyperkalemia",
      "Hypotension",
      "Renal dysfunction",
      "Dizziness",
      "Severe hypokalemia",
      "Increased blood pressure"
    ],
    answer: [
      "Hyperkalemia",
      "Hypotension",
      "Renal dysfunction",
      "Dizziness"
    ],
    rationale:
      "ACE inhibitors and ARBs can reduce blood pressure, increase potassium, and alter renal perfusion and kidney function.",
    takeaway:
      "Monitor blood pressure, potassium, and renal function with ACE inhibitors and ARBs."
  },
  {
    id: "PERF-MED-015",
    caseId: "PERF-MED-CASE-015",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ARBs",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is an angiotensin II receptor blocker?",
    choices: [
      "Losartan",
      "Lisinopril",
      "Verapamil",
      "Atenolol"
    ],
    answer: "Losartan",
    rationale:
      "ARBs commonly end in '-sartan.' Losartan blocks angiotensin II receptors.",
    takeaway:
      "ARBs usually end in '-sartan.'"
  },
  {
    id: "PERF-MED-016",
    caseId: "PERF-MED-CASE-016",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "ARBs",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Why might losartan be prescribed instead of lisinopril?",
    choices: [
      "Losartan is less likely to cause a persistent dry cough",
      "Losartan always increases potassium excretion",
      "Losartan is a loop diuretic",
      "Losartan increases heart rate"
    ],
    answer:
      "Losartan is less likely to cause a persistent dry cough",
    rationale:
      "ARBs provide similar RAAS blockade without the bradykinin-related dry cough often associated with ACE inhibitors.",
    takeaway:
      "ARBs are often used when ACE inhibitors cause cough."
  },
  {
    id: "PERF-MED-017",
    caseId: "PERF-MED-CASE-017",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Medication Combination Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication combination should the nurse question?",
    choices: [
      "Lisinopril and losartan",
      "Hydrochlorothiazide and amlodipine",
      "Metoprolol and a prescribed diuretic",
      "Losartan and a calcium-channel blocker"
    ],
    answer: "Lisinopril and losartan",
    rationale:
      "Combining an ACE inhibitor with an ARB increases the risk for hypotension, hyperkalemia, and renal injury without routine added benefit.",
    takeaway:
      "ACE inhibitors and ARBs are generally not used together."
  },
  {
    id: "PERF-MED-018",
    caseId: "PERF-MED-CASE-018",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Beta Blockers",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is a beta blocker?",
    choices: [
      "Metoprolol",
      "Amlodipine",
      "Losartan",
      "Spironolactone"
    ],
    answer: "Metoprolol",
    rationale:
      "Beta blockers commonly end in '-olol.' Metoprolol decreases heart rate, myocardial contractility, and renin release.",
    takeaway:
      "Beta blockers commonly end in '-olol.'"
  },
  {
    id: "PERF-MED-019",
    caseId: "PERF-MED-CASE-019",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Beta Blocker Administration",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Before administering metoprolol, the nurse notes a heart rate of 48 beats/min. What should the nurse do?",
    choices: [
      "Hold the medication and notify the provider",
      "Administer the medication with food",
      "Give twice the prescribed dose",
      "Encourage the patient to ambulate first"
    ],
    answer: "Hold the medication and notify the provider",
    rationale:
      "Beta blockers lower heart rate. Significant bradycardia requires holding the dose and notifying the provider according to prescribed parameters.",
    takeaway:
      "Check heart rate and blood pressure before beta blockers."
  },
  {
    id: "PERF-MED-020",
    caseId: "PERF-MED-CASE-020",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Beta Blocker Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement by a patient taking metoprolol indicates understanding?",
    choices: [
      "I should not stop this medication suddenly",
      "I can stop taking it when my blood pressure improves",
      "I do not need to check my pulse",
      "This medication will increase my heart rate"
    ],
    answer:
      "I should not stop this medication suddenly",
    rationale:
      "Abrupt withdrawal of a beta blocker can trigger rebound hypertension, angina, dysrhythmias, or myocardial infarction.",
    takeaway:
      "Beta blockers must be tapered, not abruptly stopped."
  },
  {
    id: "PERF-MED-021",
    caseId: "PERF-MED-CASE-021",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Beta Blockers and Diabetes",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Why should a patient with diabetes use caution while taking a beta blocker?",
    choices: [
      "Beta blockers can mask tachycardia associated with hypoglycemia",
      "Beta blockers always cause hyperglycemia",
      "Beta blockers increase insulin absorption",
      "Beta blockers prevent all symptoms of hypertension"
    ],
    answer:
      "Beta blockers can mask tachycardia associated with hypoglycemia",
    rationale:
      "Beta blockers can blunt adrenergic warning signs of hypoglycemia, particularly tachycardia.",
    takeaway:
      "Patients with diabetes should monitor glucose carefully while taking beta blockers."
  },
  {
    id: "PERF-MED-022",
    caseId: "PERF-MED-CASE-022",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Calcium-Channel Blockers",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is a calcium-channel blocker?",
    choices: [
      "Amlodipine",
      "Enalapril",
      "Atenolol",
      "Hydrochlorothiazide"
    ],
    answer: "Amlodipine",
    rationale:
      "Amlodipine is a dihydropyridine calcium-channel blocker that reduces blood pressure primarily through vasodilation.",
    takeaway:
      "Amlodipine is a vasodilating calcium-channel blocker."
  },
  {
    id: "PERF-MED-023",
    caseId: "PERF-MED-CASE-023",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Non-DHP Calcium-Channel Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which assessment is most important before administering verapamil?",
    choices: [
      "Heart rate and blood pressure",
      "Visual acuity",
      "Abdominal girth",
      "Pupil size"
    ],
    answer: "Heart rate and blood pressure",
    rationale:
      "Verapamil can decrease SA and AV node conduction, causing bradycardia, hypotension, or heart block.",
    takeaway:
      "Check pulse and blood pressure before verapamil or diltiazem."
  },
  {
    id: "PERF-MED-024",
    caseId: "PERF-MED-CASE-024",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Calcium-Channel Blocker Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which instruction should the nurse include for a patient taking verapamil?",
    choices: [
      "Avoid grapefruit unless the provider approves it",
      "Increase grapefruit intake to improve absorption",
      "Stop the medication abruptly if dizziness occurs",
      "Take potassium supplements routinely"
    ],
    answer:
      "Avoid grapefruit unless the provider approves it",
    rationale:
      "Grapefruit can inhibit metabolism of some calcium-channel blockers and increase medication levels and adverse effects.",
    takeaway:
      "Grapefruit may increase calcium-channel blocker toxicity."
  },
  {
    id: "PERF-MED-025",
    caseId: "PERF-MED-CASE-025",
    patient: randomPatient(),
    topic: "Antihypertensive Medications",
    subtopic: "Priority Evaluation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient taking lisinopril who has tongue swelling and difficulty breathing",
      "A patient taking hydrochlorothiazide who reports increased morning urination",
      "A patient taking amlodipine who reports a mild headache",
      "A patient taking metoprolol who asks how to check a pulse"
    ],
    answer:
      "A patient taking lisinopril who has tongue swelling and difficulty breathing",
    rationale:
      "Tongue swelling and breathing difficulty indicate angioedema and possible airway obstruction, making this the highest priority.",
    takeaway:
      "Airway-threatening angioedema is the priority antihypertensive adverse effect."
  }
];
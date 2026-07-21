const hypertensionQuestions = [
  {
    id: "PERF-HTN-001",
    caseId: "PERF-HTN-CASE-001",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Primary Hypertension",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes primary hypertension?",
    choices: [
      "It has no single identifiable underlying cause",
      "It is always caused by kidney disease",
      "It occurs only during pregnancy",
      "It resolves without treatment"
    ],
    answer: "It has no single identifiable underlying cause",
    rationale:
      "Primary, or essential, hypertension accounts for most hypertension cases and does not result from one identifiable disease process.",
    takeaway:
      "Primary hypertension is the most common type and has no single known cause."
  },
  {
    id: "PERF-HTN-002",
    caseId: "PERF-HTN-CASE-002",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Secondary Hypertension",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which condition is a common cause of secondary hypertension?",
    choices: [
      "Kidney disease",
      "Seasonal allergies",
      "Near-sightedness",
      "A healed ankle sprain"
    ],
    answer: "Kidney disease",
    rationale:
      "Secondary hypertension results from an identifiable cause. Kidney disease is one of the most common causes.",
    takeaway:
      "Secondary hypertension has a specific underlying cause."
  },
  {
    id: "PERF-HTN-003",
    caseId: "PERF-HTN-CASE-003",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Secondary Causes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which conditions or substances may contribute to secondary hypertension? Select all that apply.",
    choices: [
      "Kidney disease",
      "Pheochromocytoma",
      "Corticosteroid therapy",
      "Sympathomimetic drugs",
      "Cushing syndrome",
      "Seasonal pollen exposure"
    ],
    answer: [
      "Kidney disease",
      "Pheochromocytoma",
      "Corticosteroid therapy",
      "Sympathomimetic drugs",
      "Cushing syndrome"
    ],
    rationale:
      "Secondary hypertension may result from renal disease, endocrine disorders, and medications that increase fluid retention or sympathetic activity.",
    takeaway:
      "Think renal, endocrine, and medication causes when hypertension is secondary."
  },
  {
    id: "PERF-HTN-004",
    caseId: "PERF-HTN-CASE-004",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A patient has a blood pressure of 126/76 mm Hg. How should the nurse classify this reading using ACC/AHA categories?",
    choices: [
      "Elevated blood pressure",
      "Normal blood pressure",
      "Stage 1 hypertension",
      "Stage 2 hypertension"
    ],
    answer: "Elevated blood pressure",
    rationale:
      "Elevated blood pressure is a systolic reading of 120 to 129 mm Hg with a diastolic reading below 80 mm Hg.",
    takeaway:
      "Elevated BP is 120 to 129 systolic with diastolic below 80."
  },
  {
    id: "PERF-HTN-005",
    caseId: "PERF-HTN-CASE-005",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A patient has repeated blood-pressure readings of 136/86 mm Hg. How should the nurse classify this finding?",
    choices: [
      "Stage 1 hypertension",
      "Normal blood pressure",
      "Elevated blood pressure",
      "Hypertensive crisis"
    ],
    answer: "Stage 1 hypertension",
    rationale:
      "Stage 1 hypertension includes systolic pressure of 130 to 139 mm Hg or diastolic pressure of 80 to 89 mm Hg.",
    takeaway:
      "Stage 1 hypertension begins at 130 systolic or 80 diastolic."
  },
  {
    id: "PERF-HTN-006",
    caseId: "PERF-HTN-CASE-006",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A patient has repeated blood-pressure readings of 148/94 mm Hg. How should the nurse classify this finding?",
    choices: [
      "Stage 2 hypertension",
      "Elevated blood pressure",
      "Stage 1 hypertension",
      "Normal blood pressure"
    ],
    answer: "Stage 2 hypertension",
    rationale:
      "Stage 2 hypertension includes systolic pressure at or above 140 mm Hg or diastolic pressure at or above 90 mm Hg.",
    takeaway:
      "Stage 2 hypertension begins at 140 systolic or 90 diastolic."
  },
  {
    id: "PERF-HTN-007",
    caseId: "PERF-HTN-CASE-007",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Silent Disease",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with hypertension requires correction?",
    choices: [
      "I will know my blood pressure is high because I will always have symptoms",
      "I need regular blood-pressure monitoring",
      "Hypertension can damage organs even when I feel well",
      "I should continue treatment even when I have no symptoms"
    ],
    answer:
      "I will know my blood pressure is high because I will always have symptoms",
    rationale:
      "Hypertension is often asymptomatic, which is why it is commonly called the silent killer.",
    takeaway:
      "Absence of symptoms does not mean hypertension is controlled."
  },
  {
    id: "PERF-HTN-008",
    caseId: "PERF-HTN-CASE-008",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Target-Organ Damage",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications may result from long-term uncontrolled hypertension? Select all that apply.",
    choices: [
      "Stroke",
      "Myocardial infarction",
      "Kidney failure",
      "Peripheral vascular disease",
      "Heart failure",
      "Improved retinal circulation"
    ],
    answer: [
      "Stroke",
      "Myocardial infarction",
      "Kidney failure",
      "Peripheral vascular disease",
      "Heart failure"
    ],
    rationale:
      "Chronic hypertension damages blood vessels and increases the risk for cardiac, neurologic, renal, retinal, and peripheral vascular complications.",
    takeaway:
      "Uncontrolled hypertension damages the brain, heart, kidneys, eyes, and vessels."
  },
  {
    id: "PERF-HTN-009",
    caseId: "PERF-HTN-CASE-009",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Blood Pressure Technique",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which action is necessary for an accurate blood-pressure measurement?",
    choices: [
      "Use a cuff appropriate for the patient's arm size",
      "Measure the pressure immediately after exercise",
      "Allow the arm to hang below heart level",
      "Place the cuff over thick clothing"
    ],
    answer: "Use a cuff appropriate for the patient's arm size",
    rationale:
      "A cuff that is too small can falsely elevate the reading, while a cuff that is too large can produce a falsely low reading.",
    takeaway:
      "Correct cuff size is essential for an accurate blood-pressure reading."
  },
  {
    id: "PERF-HTN-010",
    caseId: "PERF-HTN-CASE-010",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Initial Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which action should the nurse take during the initial hypertension assessment?",
    choices: [
      "Measure blood pressure in both arms",
      "Measure blood pressure only in the dominant arm",
      "Avoid orthostatic measurements",
      "Use the smallest cuff available"
    ],
    answer: "Measure blood pressure in both arms",
    rationale:
      "Initial assessment should include blood-pressure measurements in both arms to identify significant differences.",
    takeaway:
      "Check both arms during the initial hypertension evaluation."
  },
  {
    id: "PERF-HTN-011",
    caseId: "PERF-HTN-CASE-011",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Orthostatic Hypotension",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which change is consistent with orthostatic hypotension?",
    choices: [
      "A decrease of at least 20 mm Hg systolic or 10 mm Hg diastolic after standing",
      "An increase of 5 mm Hg systolic after standing",
      "No change in blood pressure after standing",
      "A decrease of 2 mm Hg diastolic after standing"
    ],
    answer:
      "A decrease of at least 20 mm Hg systolic or 10 mm Hg diastolic after standing",
    rationale:
      "Orthostatic hypotension is identified by a significant drop in systolic or diastolic pressure with a position change.",
    takeaway:
      "Orthostatic hypotension is a drop of 20 systolic or 10 diastolic."
  },
  {
    id: "PERF-HTN-012",
    caseId: "PERF-HTN-CASE-012",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Orthostatic Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A patient becomes dizzy while standing for an orthostatic blood-pressure assessment. What should the nurse do first?",
    choices: [
      "Assist the patient back to a safe position",
      "Continue the measurement while the patient stands",
      "Ask the patient to walk",
      "Leave the patient standing for 10 minutes"
    ],
    answer: "Assist the patient back to a safe position",
    rationale:
      "The immediate priority is preventing a fall and restoring the patient to a safe seated or lying position.",
    takeaway:
      "Safety comes first when orthostatic symptoms occur."
  },
  {
    id: "PERF-HTN-013",
    caseId: "PERF-HTN-CASE-013",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "DASH Diet",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which meal best reflects the DASH eating plan?",
    choices: [
      "Grilled fish, brown rice, vegetables, and low-fat yogurt",
      "Fried chicken, french fries, and a milkshake",
      "Processed meat, chips, and soda",
      "Canned soup and salted crackers"
    ],
    answer:
      "Grilled fish, brown rice, vegetables, and low-fat yogurt",
    rationale:
      "The DASH plan emphasizes fruits, vegetables, whole grains, lean proteins, and low-fat dairy while limiting saturated fat and sodium.",
    takeaway:
      "DASH emphasizes plants, whole grains, lean protein, and low-fat dairy."
  },
  {
    id: "PERF-HTN-014",
    caseId: "PERF-HTN-CASE-014",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Sodium Restriction",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which dietary goal should the nurse reinforce for a patient with hypertension?",
    choices: [
      "Limit sodium intake to approximately 1,500 mg per day when recommended",
      "Increase intake of processed meats",
      "Add salt before tasting food",
      "Choose canned foods with the highest sodium content"
    ],
    answer:
      "Limit sodium intake to approximately 1,500 mg per day when recommended",
    rationale:
      "Lower sodium intake can reduce fluid retention and support blood-pressure control.",
    takeaway:
      "Reducing dietary sodium supports hypertension management."
  },
  {
    id: "PERF-HTN-015",
    caseId: "PERF-HTN-CASE-015",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Lifestyle Changes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which lifestyle changes support hypertension control? Select all that apply.",
    choices: [
      "Regular aerobic activity",
      "Weight reduction if overweight",
      "Smoking cessation",
      "Limiting alcohol",
      "Stress management",
      "Increasing sodium intake"
    ],
    answer: [
      "Regular aerobic activity",
      "Weight reduction if overweight",
      "Smoking cessation",
      "Limiting alcohol",
      "Stress management"
    ],
    rationale:
      "Exercise, weight management, tobacco cessation, alcohol limits, stress reduction, and a heart-healthy diet all support blood-pressure control.",
    takeaway:
      "Lifestyle modification is foundational even when medication is prescribed."
  },
  {
    id: "PERF-HTN-016",
    caseId: "PERF-HTN-CASE-016",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Exercise",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which exercise goal is appropriate for many adults with hypertension?",
    choices: [
      "About 150 minutes of moderate aerobic activity each week",
      "One hour of exercise once a month",
      "Avoid all resistance training",
      "Exercise only when blood pressure feels high"
    ],
    answer:
      "About 150 minutes of moderate aerobic activity each week",
    rationale:
      "Regular aerobic activity, along with strength training as appropriate, supports cardiovascular health and blood-pressure control.",
    takeaway:
      "Consistent weekly activity is more effective than occasional exercise."
  },
  {
    id: "PERF-HTN-017",
    caseId: "PERF-HTN-CASE-017",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Medication Adherence",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with hypertension requires further teaching?",
    choices: [
      "I can stop my medication once my blood pressure becomes normal",
      "I should take my medication as prescribed",
      "I should monitor for dizziness",
      "I should continue lifestyle changes while taking medication"
    ],
    answer:
      "I can stop my medication once my blood pressure becomes normal",
    rationale:
      "A normal blood pressure may reflect effective treatment. Antihypertensive medications should not be stopped without provider guidance.",
    takeaway:
      "Controlled blood pressure does not mean hypertension is cured."
  },
  {
    id: "PERF-HTN-018",
    caseId: "PERF-HTN-CASE-018",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Home Monitoring",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instruction should the nurse include about home blood-pressure monitoring?",
    choices: [
      "Measure at similar times using correct positioning and record the results",
      "Measure immediately after smoking or caffeine use",
      "Place the cuff over clothing",
      "Use any cuff size available"
    ],
    answer:
      "Measure at similar times using correct positioning and record the results",
    rationale:
      "Consistent technique and documentation help identify trends and support treatment decisions.",
    takeaway:
      "Accurate home monitoring depends on consistent technique."
  },
  {
    id: "PERF-HTN-019",
    caseId: "PERF-HTN-CASE-019",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Hypertensive Crisis Recognition",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has a blood pressure of 186/124 mm Hg with blurred vision and severe headache. How should the nurse interpret this finding?",
    choices: [
      "Possible hypertensive crisis",
      "Normal blood-pressure variation",
      "Mild dehydration only",
      "Expected response to aging"
    ],
    answer: "Possible hypertensive crisis",
    rationale:
      "A pressure at or above 180/120 mm Hg with symptoms suggesting target-organ involvement requires immediate evaluation.",
    takeaway:
      "BP at or above 180/120 with symptoms is an emergency."
  },
  {
    id: "PERF-HTN-020",
    caseId: "PERF-HTN-CASE-020",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Hypertensive Crisis Symptoms",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings may occur during a hypertensive crisis? Select all that apply.",
    choices: [
      "Severe headache",
      "Blurred vision",
      "Dyspnea",
      "Epistaxis",
      "Anxiety",
      "Guaranteed absence of symptoms"
    ],
    answer: [
      "Severe headache",
      "Blurred vision",
      "Dyspnea",
      "Epistaxis",
      "Anxiety"
    ],
    rationale:
      "Hypertensive crisis may cause neurologic, respiratory, visual, and vascular symptoms, though some patients may also be asymptomatic.",
    takeaway:
      "A hypertensive crisis can damage multiple organs rapidly."
  },
  {
    id: "PERF-HTN-021",
    caseId: "PERF-HTN-CASE-021",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Target-Organ Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessments help identify target-organ damage in a patient with severe hypertension? Select all that apply.",
    choices: [
      "Neurologic status",
      "Urine output and renal function",
      "Cardiac rhythm and chest symptoms",
      "Respiratory status",
      "Visual changes",
      "Hair texture"
    ],
    answer: [
      "Neurologic status",
      "Urine output and renal function",
      "Cardiac rhythm and chest symptoms",
      "Respiratory status",
      "Visual changes"
    ],
    rationale:
      "Hypertension can damage the brain, kidneys, heart, lungs, and retina. Assessment should focus on signs of acute dysfunction.",
    takeaway:
      "Severe hypertension requires a head-to-toe target-organ assessment."
  },
  {
    id: "PERF-HTN-022",
    caseId: "PERF-HTN-CASE-022",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with BP 190/126 mm Hg, confusion, and chest pressure",
      "A patient with BP 138/84 mm Hg requesting diet teaching",
      "A patient with controlled hypertension requesting a refill",
      "A patient with BP 126/78 mm Hg awaiting discharge"
    ],
    answer:
      "A patient with BP 190/126 mm Hg, confusion, and chest pressure",
    rationale:
      "Severely elevated blood pressure with neurologic and cardiac symptoms suggests target-organ damage and requires immediate intervention.",
    takeaway:
      "Symptoms plus severe blood-pressure elevation determine priority."
  },
  {
    id: "PERF-HTN-023",
    caseId: "PERF-HTN-CASE-023",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Gradual Reduction",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Why must blood pressure be reduced gradually during a hypertensive emergency?",
    choices: [
      "Rapid reduction can cause cerebral, cardiac, and renal hypoperfusion",
      "Rapid reduction always improves organ perfusion",
      "Gradual reduction prevents medication absorption",
      "The blood pressure must remain above 180/120 mm Hg"
    ],
    answer:
      "Rapid reduction can cause cerebral, cardiac, and renal hypoperfusion",
    rationale:
      "The body may have adapted to chronically high pressure. Lowering it too quickly can reduce perfusion to vital organs and cause ischemic injury.",
    takeaway:
      "Lower severe blood pressure carefully to protect organ perfusion."
  },
  {
    id: "PERF-HTN-024",
    caseId: "PERF-HTN-CASE-024",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Discharge Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include for a patient newly diagnosed with hypertension? Select all that apply.",
    choices: [
      "Take medications exactly as prescribed",
      "Monitor blood pressure regularly",
      "Follow recommended sodium restrictions",
      "Change positions slowly if dizziness occurs",
      "Stop medication when readings improve",
      "Keep follow-up appointments"
    ],
    answer: [
      "Take medications exactly as prescribed",
      "Monitor blood pressure regularly",
      "Follow recommended sodium restrictions",
      "Change positions slowly if dizziness occurs",
      "Keep follow-up appointments"
    ],
    rationale:
      "Hypertension management requires long-term medication adherence, home monitoring, lifestyle changes, side-effect precautions, and follow-up.",
    takeaway:
      "Hypertension control depends on consistent daily self-management."
  },
  {
    id: "PERF-HTN-025",
    caseId: "PERF-HTN-CASE-025",
    patient: randomPatient(),
    topic: "Hypertension",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which outcome best indicates that the hypertension plan of care is effective?",
    choices: [
      "Blood pressure remains within the prescribed goal without signs of organ damage",
      "The patient stops medication when symptoms resolve",
      "The patient develops worsening kidney function",
      "The patient experiences repeated dizziness and falls"
    ],
    answer:
      "Blood pressure remains within the prescribed goal without signs of organ damage",
    rationale:
      "Effective management controls blood pressure, reduces complications, promotes adherence, and avoids adverse medication effects.",
    takeaway:
      "The goal is controlled pressure with preserved organ perfusion."
  }
];
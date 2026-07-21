const hypertensiveCrisisQuestions = [
  {
    id: "PERF-HC-001",
    caseId: "PERF-HC-CASE-001",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Recognition",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which blood-pressure reading meets the threshold for a hypertensive crisis?",
    choices: [
      "182/122 mm Hg",
      "148/92 mm Hg",
      "136/84 mm Hg",
      "126/78 mm Hg"
    ],
    answer: "182/122 mm Hg",
    rationale:
      "A blood pressure of 180/120 mm Hg or greater meets the threshold for a hypertensive crisis and requires immediate assessment for target-organ damage.",
    takeaway:
      "Hypertensive crisis begins at 180/120 mm Hg."
  },
  {
    id: "PERF-HC-002",
    caseId: "PERF-HC-CASE-002",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Emergency Versus Urgency",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding most strongly suggests a hypertensive emergency rather than severe asymptomatic hypertension?",
    choices: [
      "BP 190/126 mm Hg with confusion and chest pain",
      "BP 184/122 mm Hg without symptoms",
      "BP 168/96 mm Hg with mild anxiety",
      "BP 146/88 mm Hg after exercise"
    ],
    answer:
      "BP 190/126 mm Hg with confusion and chest pain",
    rationale:
      "A hypertensive emergency includes severe blood-pressure elevation with evidence of acute target-organ damage, such as neurologic changes or cardiac ischemia.",
    takeaway:
      "Severe pressure plus target-organ damage equals hypertensive emergency."
  },
  {
    id: "PERF-HC-003",
    caseId: "PERF-HC-CASE-003",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Clinical Manifestations",
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
      "Dizziness",
      "Guaranteed bradycardia"
    ],
    answer: [
      "Severe headache",
      "Blurred vision",
      "Dyspnea",
      "Epistaxis",
      "Dizziness"
    ],
    rationale:
      "Hypertensive crisis can cause headache, visual changes, respiratory symptoms, dizziness, anxiety, and nosebleeds. Some patients may also be asymptomatic.",
    takeaway:
      "Assess neurologic, visual, respiratory, and cardiovascular symptoms."
  },
  {
    id: "PERF-HC-004",
    caseId: "PERF-HC-CASE-004",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Target-Organ Damage",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications may result from a hypertensive emergency? Select all that apply.",
    choices: [
      "Stroke",
      "Acute kidney injury",
      "Left ventricular heart failure",
      "Aortic dissection",
      "Hypertensive encephalopathy",
      "Improved coronary perfusion"
    ],
    answer: [
      "Stroke",
      "Acute kidney injury",
      "Left ventricular heart failure",
      "Aortic dissection",
      "Hypertensive encephalopathy"
    ],
    rationale:
      "Severely elevated pressure can damage the brain, heart, kidneys, aorta, and retina.",
    takeaway:
      "Hypertensive emergencies threaten multiple vital organs."
  },
  {
    id: "PERF-HC-005",
    caseId: "PERF-HC-CASE-005",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Priority Positioning",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A patient with BP 198/128 mm Hg reports dyspnea and severe headache. Which action should the nurse take first?",
    choices: [
      "Place the patient in semi-Fowler's position",
      "Encourage the patient to walk",
      "Place the patient flat with legs elevated",
      "Offer a high-sodium snack"
    ],
    answer:
      "Place the patient in semi-Fowler's position",
    rationale:
      "Semi-Fowler's positioning supports ventilation and reduces cardiopulmonary workload while emergency treatment is initiated.",
    takeaway:
      "Support breathing and reduce cardiac workload first."
  },
  {
    id: "PERF-HC-006",
    caseId: "PERF-HC-CASE-006",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Initial Interventions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions should the nurse anticipate for a patient experiencing a hypertensive emergency? Select all that apply.",
    choices: [
      "Supplemental oxygen",
      "Continuous cardiac monitoring",
      "Frequent neurologic assessments",
      "IV antihypertensive medication",
      "Frequent blood-pressure monitoring",
      "Rapid normalization of blood pressure within minutes"
    ],
    answer: [
      "Supplemental oxygen",
      "Continuous cardiac monitoring",
      "Frequent neurologic assessments",
      "IV antihypertensive medication",
      "Frequent blood-pressure monitoring"
    ],
    rationale:
      "Emergency care includes oxygen, IV therapy, continuous monitoring, neurologic checks, and frequent blood-pressure assessment. Blood pressure is lowered gradually.",
    takeaway:
      "Monitor continuously while lowering pressure carefully."
  },
  {
    id: "PERF-HC-007",
    caseId: "PERF-HC-CASE-007",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "IV Medications",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication may be administered intravenously during a hypertensive emergency?",
    choices: [
      "Nicardipine",
      "Oral hydrochlorothiazide only",
      "Subcutaneous insulin",
      "Oral calcium carbonate"
    ],
    answer: "Nicardipine",
    rationale:
      "Nicardipine is an IV calcium-channel blocker used to lower blood pressure during hypertensive emergencies.",
    takeaway:
      "Hypertensive emergencies usually require titratable IV medications."
  },
  {
    id: "PERF-HC-008",
    caseId: "PERF-HC-CASE-008",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Emergency Medications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which IV medications may be used to treat a hypertensive emergency? Select all that apply.",
    choices: [
      "Nitroprusside",
      "Labetalol",
      "Nicardipine",
      "Clevidipine",
      "Fenoldopam",
      "Oral multivitamin"
    ],
    answer: [
      "Nitroprusside",
      "Labetalol",
      "Nicardipine",
      "Clevidipine",
      "Fenoldopam"
    ],
    rationale:
      "Titrated IV antihypertensives such as nitroprusside, labetalol, nicardipine, clevidipine, and fenoldopam may be used depending on the clinical situation.",
    takeaway:
      "IV medications allow controlled, gradual pressure reduction."
  },
  {
    id: "PERF-HC-009",
    caseId: "PERF-HC-CASE-009",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "MAP Reduction",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which blood-pressure reduction goal is generally appropriate during the first hour of a hypertensive emergency?",
    choices: [
      "Reduce mean arterial pressure by approximately 20% to 25%",
      "Reduce systolic pressure to below 100 mm Hg immediately",
      "Normalize blood pressure within 10 minutes",
      "Avoid any reduction for the first 24 hours"
    ],
    answer:
      "Reduce mean arterial pressure by approximately 20% to 25%",
    rationale:
      "Initial reduction is controlled to avoid sudden loss of perfusion to organs that have adapted to high pressure.",
    takeaway:
      "The first-hour goal is controlled reduction, not normalization."
  },
  {
    id: "PERF-HC-010",
    caseId: "PERF-HC-CASE-010",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Blood Pressure Goal",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "After the initial controlled reduction, which blood-pressure goal is generally expected over the next several hours?",
    choices: [
      "Approximately 160/100 mm Hg",
      "Immediately below 90/60 mm Hg",
      "Above 200/120 mm Hg",
      "No change from the initial reading"
    ],
    answer:
      "Approximately 160/100 mm Hg",
    rationale:
      "After the initial mean arterial pressure reduction, pressure is generally lowered toward about 160/100 mm Hg over the next 2 to 6 hours.",
    takeaway:
      "Lower pressure in stages to protect vital-organ perfusion."
  },
  {
    id: "PERF-HC-011",
    caseId: "PERF-HC-CASE-011",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Gradual Reduction",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Why should blood pressure not be lowered too rapidly during a hypertensive emergency?",
    choices: [
      "Rapid reduction can cause cerebral, cardiac, and renal ischemia",
      "Rapid reduction always causes hypertension to worsen",
      "Rapid reduction prevents medication metabolism",
      "Rapid reduction causes permanent hyperkalemia"
    ],
    answer:
      "Rapid reduction can cause cerebral, cardiac, and renal ischemia",
    rationale:
      "Abrupt pressure reduction can decrease blood flow below the autoregulatory needs of the brain, heart, and kidneys.",
    takeaway:
      "Too-fast treatment can cause the very organ damage treatment is meant to prevent."
  },
  {
    id: "PERF-HC-012",
    caseId: "PERF-HC-CASE-012",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Neurologic Monitoring",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment is most important for detecting cerebral complications during treatment of a hypertensive emergency?",
    choices: [
      "Frequent neurologic checks",
      "Daily hair assessment",
      "Weekly hearing screening",
      "Abdominal skin-fold measurement"
    ],
    answer:
      "Frequent neurologic checks",
    rationale:
      "Changes in level of consciousness, pupils, speech, strength, or orientation may indicate encephalopathy, stroke, or cerebral hypoperfusion.",
    takeaway:
      "Neurologic changes can signal worsening target-organ injury."
  },
  {
    id: "PERF-HC-013",
    caseId: "PERF-HC-CASE-013",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Renal Monitoring",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding may indicate worsening renal perfusion during treatment of a hypertensive emergency?",
    choices: [
      "Decreasing urine output",
      "Improved orientation",
      "Reduced headache",
      "Stable oxygen saturation"
    ],
    answer:
      "Decreasing urine output",
    rationale:
      "Reduced urine output may indicate acute kidney injury or excessive reduction in renal perfusion.",
    takeaway:
      "Urine output is an important indicator of renal perfusion."
  },
  {
    id: "PERF-HC-014",
    caseId: "PERF-HC-CASE-014",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Cardiac Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings may indicate cardiac target-organ damage during a hypertensive emergency? Select all that apply.",
    choices: [
      "Chest pressure",
      "Pulmonary crackles",
      "New dysrhythmia",
      "Dyspnea",
      "Decreased oxygen saturation",
      "Improved exercise tolerance"
    ],
    answer: [
      "Chest pressure",
      "Pulmonary crackles",
      "New dysrhythmia",
      "Dyspnea",
      "Decreased oxygen saturation"
    ],
    rationale:
      "Severe hypertension can cause myocardial ischemia, dysrhythmias, and acute left ventricular failure with pulmonary edema.",
    takeaway:
      "Assess for ischemia and heart failure during hypertensive emergencies."
  },
  {
    id: "PERF-HC-015",
    caseId: "PERF-HC-CASE-015",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Priority Finding",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with BP 204/130 mm Hg, unilateral weakness, and slurred speech",
      "A patient with BP 146/90 mm Hg requesting medication education",
      "A patient with BP 132/82 mm Hg reporting mild fatigue",
      "A patient with controlled hypertension awaiting discharge"
    ],
    answer:
      "A patient with BP 204/130 mm Hg, unilateral weakness, and slurred speech",
    rationale:
      "Severe hypertension with focal neurologic deficits may indicate an acute stroke and requires immediate intervention.",
    takeaway:
      "Focal neurologic deficits with severe hypertension are an emergency."
  },
  {
    id: "PERF-HC-016",
    caseId: "PERF-HC-CASE-016",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Medication Titration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient receiving an IV antihypertensive infusion develops dizziness and a sudden decrease in blood pressure. What should the nurse do first?",
    choices: [
      "Reduce or stop the infusion according to protocol and assess the patient",
      "Increase the infusion rate",
      "Encourage the patient to stand",
      "Administer a diuretic immediately"
    ],
    answer:
      "Reduce or stop the infusion according to protocol and assess the patient",
    rationale:
      "A sudden blood-pressure drop may compromise organ perfusion. The infusion should be adjusted promptly while the patient is assessed.",
    takeaway:
      "Titrated IV therapy requires immediate response to hypotension."
  },
  {
    id: "PERF-HC-017",
    caseId: "PERF-HC-CASE-017",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Monitoring Frequency",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "How frequently should blood pressure generally be monitored during the initial treatment of a hypertensive emergency?",
    choices: [
      "Every 5 to 15 minutes",
      "Once every 24 hours",
      "Once per week",
      "Only when symptoms occur"
    ],
    answer:
      "Every 5 to 15 minutes",
    rationale:
      "Frequent measurements are needed to guide IV medication titration and prevent excessive pressure reduction.",
    takeaway:
      "Initial treatment requires very frequent blood-pressure monitoring."
  },
  {
    id: "PERF-HC-018",
    caseId: "PERF-HC-CASE-018",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Transition of Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "When should the nurse anticipate transitioning a patient from IV to oral antihypertensive medication?",
    choices: [
      "After the patient is stable and blood pressure is controlled",
      "Before any blood-pressure reduction occurs",
      "Only after all antihypertensive therapy is stopped",
      "Immediately upon arrival regardless of symptoms"
    ],
    answer:
      "After the patient is stable and blood pressure is controlled",
    rationale:
      "Once the immediate crisis has resolved and the patient is clinically stable, oral therapy is used for ongoing management.",
    takeaway:
      "IV therapy manages the emergency; oral therapy maintains long-term control."
  },
  {
    id: "PERF-HC-019",
    caseId: "PERF-HC-CASE-019",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Patient Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which patient statement indicates a need for further teaching after treatment for a hypertensive crisis?",
    choices: [
      "I can stop my medication when my blood pressure returns to normal",
      "I should monitor my blood pressure regularly",
      "I should keep follow-up appointments",
      "I should report severe headache or visual changes"
    ],
    answer:
      "I can stop my medication when my blood pressure returns to normal",
    rationale:
      "Normal readings usually indicate that treatment is working. Medication should not be stopped without provider guidance.",
    takeaway:
      "Long-term adherence helps prevent another crisis."
  },
  {
    id: "PERF-HC-020",
    caseId: "PERF-HC-CASE-020",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Discharge Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include after a hypertensive emergency? Select all that apply.",
    choices: [
      "Take medications exactly as prescribed",
      "Monitor blood pressure at home",
      "Follow sodium restrictions",
      "Report chest pain or neurologic changes immediately",
      "Keep follow-up appointments",
      "Stop medications if dizziness occurs without contacting the provider"
    ],
    answer: [
      "Take medications exactly as prescribed",
      "Monitor blood pressure at home",
      "Follow sodium restrictions",
      "Report chest pain or neurologic changes immediately",
      "Keep follow-up appointments"
    ],
    rationale:
      "Preventing recurrence requires adherence, home monitoring, lifestyle management, recognition of emergency symptoms, and follow-up care.",
    takeaway:
      "Prevention depends on medication, monitoring, lifestyle changes, and early reporting."
  },
  {
    id: "PERF-HC-021",
    caseId: "PERF-HC-CASE-021",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that treatment for a hypertensive emergency is effective?",
    choices: [
      "Blood pressure decreases gradually with stable neurologic status and adequate urine output",
      "Blood pressure falls immediately to 82/48 mm Hg",
      "The patient develops new confusion",
      "Urine output decreases significantly"
    ],
    answer:
      "Blood pressure decreases gradually with stable neurologic status and adequate urine output",
    rationale:
      "Effective treatment lowers blood pressure in a controlled manner while preserving cerebral, cardiac, and renal perfusion.",
    takeaway:
      "Successful treatment lowers pressure without causing organ hypoperfusion."
  },
  {
    id: "PERF-HC-022",
    caseId: "PERF-HC-CASE-022",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Complication Recognition",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient being treated for a hypertensive emergency suddenly becomes confused and has unequal pupils. What should the nurse do first?",
    choices: [
      "Notify the provider or rapid-response team immediately",
      "Document the finding and reassess in 4 hours",
      "Encourage oral fluids",
      "Allow the patient to sleep"
    ],
    answer:
      "Notify the provider or rapid-response team immediately",
    rationale:
      "Acute neurologic changes may indicate stroke, hemorrhage, encephalopathy, or cerebral hypoperfusion.",
    takeaway:
      "New neurologic changes require immediate escalation."
  },
  {
    id: "PERF-HC-023",
    caseId: "PERF-HC-CASE-023",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Pulmonary Edema",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with severe hypertension develops crackles, frothy sputum, and worsening dyspnea. Which complication should the nurse suspect?",
    choices: [
      "Acute left ventricular failure with pulmonary edema",
      "Chronic venous insufficiency",
      "Mild dehydration",
      "Raynaud phenomenon"
    ],
    answer:
      "Acute left ventricular failure with pulmonary edema",
    rationale:
      "Severe hypertension increases afterload and can cause acute left ventricular failure, leading to pulmonary congestion and edema.",
    takeaway:
      "Crackles and frothy sputum indicate acute pulmonary congestion."
  },
  {
    id: "PERF-HC-024",
    caseId: "PERF-HC-CASE-024",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Aortic Dissection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which symptom in a patient with severe hypertension may indicate an aortic dissection?",
    choices: [
      "Sudden severe tearing chest or back pain",
      "Gradual ankle swelling after standing",
      "Mild bilateral leg aching",
      "Occasional tension headache"
    ],
    answer:
      "Sudden severe tearing chest or back pain",
    rationale:
      "Aortic dissection classically causes sudden, severe, tearing pain in the chest, back, or between the shoulder blades.",
    takeaway:
      "Sudden tearing pain with severe hypertension is an emergency."
  },
  {
    id: "PERF-HC-025",
    caseId: "PERF-HC-CASE-025",
    patient: randomPatient(),
    topic: "Hypertensive Crisis",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient requires the most immediate intervention?",
    choices: [
      "A patient with BP 196/124 mm Hg, new confusion, and decreasing urine output",
      "A patient with BP 152/92 mm Hg and no symptoms",
      "A patient with BP 138/86 mm Hg requesting DASH-diet information",
      "A patient with BP 128/76 mm Hg preparing for discharge"
    ],
    answer:
      "A patient with BP 196/124 mm Hg, new confusion, and decreasing urine output",
    rationale:
      "Severe hypertension with neurologic and renal changes indicates acute target-organ damage and a hypertensive emergency.",
    takeaway:
      "Target-organ damage determines urgency."
  }
];
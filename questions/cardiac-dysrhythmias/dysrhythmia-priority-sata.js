const dysrhythmiaPrioritySataQuestions = [

{
    id: "DYS-PRI-001",
    caseId: "DYS-PRI-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor suddenly displays a wide-complex tachycardia. Which action should the nurse take first?",
    choices: [
        "Assess the client and determine whether a pulse is present.",
        "Administer amiodarone immediately.",
        "Prepare for defibrillation before entering the room.",
        "Measure the PR interval."
    ],
    answer:
        "Assess the client and determine whether a pulse is present.",
    rationale:
        "The PPT repeatedly emphasizes treating the patient, not the monitor. A wide-complex tachycardia may represent VT, and treatment depends on whether the client is responsive and has a pulse.",
    takeaway:
        "Wide fast rhythm? Go to the patient first."
},

{
    id: "DYS-PRI-002",
    caseId: "DYS-PRI-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Instability",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings indicate hemodynamic instability in a client with a dysrhythmia? Select all that apply.",
    choices: [
        "Hypotension",
        "Altered level of consciousness",
        "Syncope",
        "Chest pain",
        "Shortness of breath",
        "Stable blood pressure with no symptoms"
    ],
    answer: [
        "Hypotension",
        "Altered level of consciousness",
        "Syncope",
        "Chest pain",
        "Shortness of breath"
    ],
    rationale:
        "The lecture lists hypotension, syncope, dizziness, dyspnea, diaphoresis, and altered LOC among signs that a dysrhythmia is reducing cardiac output.",
    takeaway:
        "Instability = poor perfusion."
},

{
    id: "DYS-PRI-003",
    caseId: "DYS-PRI-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Shockable Rhythms",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythms are shockable? Select all that apply.",
    choices: [
        "Ventricular fibrillation",
        "Pulseless ventricular tachycardia",
        "Asystole",
        "Pulseless electrical activity",
        "Sinus bradycardia"
    ],
    answer: [
        "Ventricular fibrillation",
        "Pulseless ventricular tachycardia"
    ],
    rationale:
        "The lecture identifies V-fib and pulseless VT as shockable cardiac arrest rhythms.",
    takeaway:
        "Shockable = VF + pulseless VT."
},

{
    id: "DYS-PRI-004",
    caseId: "DYS-PRI-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Non-Shockable Rhythms",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythms are non-shockable? Select all that apply.",
    choices: [
        "Asystole",
        "Pulseless electrical activity",
        "Ventricular fibrillation",
        "Pulseless ventricular tachycardia"
    ],
    answer: [
        "Asystole",
        "Pulseless electrical activity"
    ],
    rationale:
        "Asystole and PEA are non-shockable rhythms and are treated with CPR, epinephrine, and correction of reversible causes.",
    takeaway:
        "Non-shockable = asystole + PEA."
},

{
    id: "DYS-PRI-005",
    caseId: "DYS-PRI-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Pulseless VT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive and pulseless. The monitor shows ventricular tachycardia. Which action is the priority?",
    choices: [
        "Begin CPR and prepare to defibrillate.",
        "Administer atropine.",
        "Perform vagal maneuvers.",
        "Prepare for synchronized cardioversion."
    ],
    answer:
        "Begin CPR and prepare to defibrillate.",
    rationale:
        "Pulseless VT is a shockable arrest rhythm requiring immediate CPR and defibrillation.",
    takeaway:
        "Pulseless VT = CPR + shock."
},

{
    id: "DYS-PRI-006",
    caseId: "DYS-PRI-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Ventricular Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with ventricular fibrillation and no pulse",
        "A client with occasional PACs after drinking coffee",
        "A client with sinus arrhythmia and no symptoms",
        "A client with controlled atrial fibrillation at 78/min"
    ],
    answer:
        "A client with ventricular fibrillation and no pulse",
    rationale:
        "V-fib produces no effective cardiac output and requires immediate resuscitation.",
    takeaway:
        "V-fib is an immediate lethal emergency."
},

{
    id: "DYS-PRI-007",
    caseId: "DYS-PRI-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Asystole",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is pulseless and the monitor shows asystole. Which intervention should the nurse anticipate?",
    choices: [
        "CPR, epinephrine, and treatment of reversible causes",
        "Immediate defibrillation",
        "Synchronized cardioversion",
        "Adenosine"
    ],
    answer:
        "CPR, epinephrine, and treatment of reversible causes",
    rationale:
        "Asystole is non-shockable and is managed with CPR, epinephrine, and identification of reversible causes.",
    takeaway:
        "Do not shock asystole."
},

{
    id: "DYS-PRI-008",
    caseId: "DYS-PRI-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "PEA",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive and pulseless, but the monitor shows an organized rhythm. Which interpretation is most appropriate?",
    choices: [
        "Pulseless electrical activity",
        "Normal sinus rhythm",
        "Atrial fibrillation",
        "Sinus tachycardia"
    ],
    answer:
        "Pulseless electrical activity",
    rationale:
        "PEA is organized electrical activity without a palpable pulse or effective mechanical output.",
    takeaway:
        "Electrical activity without a pulse = PEA."
},

{
    id: "DYS-PRI-009",
    caseId: "DYS-PRI-CASE-009",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Atrial Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation suddenly develops facial droop and slurred speech. Which action is the priority?",
    choices: [
        "Activate the stroke response immediately.",
        "Administer the next scheduled beta blocker.",
        "Reassess in 30 minutes.",
        "Encourage the client to rest."
    ],
    answer:
        "Activate the stroke response immediately.",
    rationale:
        "A-fib increases the risk for embolic stroke. FAST symptoms require immediate emergency action.",
    takeaway:
        "A-fib + FAST symptoms = stroke emergency."
},

{
    id: "DYS-PRI-010",
    caseId: "DYS-PRI-CASE-010",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings are most consistent with atrial fibrillation? Select all that apply.",
    choices: [
        "Irregularly irregular rhythm",
        "Absent identifiable P waves",
        "Unmeasurable PR interval",
        "Risk for embolic stroke",
        "Sawtooth flutter waves"
    ],
    answer: [
        "Irregularly irregular rhythm",
        "Absent identifiable P waves",
        "Unmeasurable PR interval",
        "Risk for embolic stroke"
    ],
    rationale:
        "These are the defining features emphasized for A-fib in the lecture.",
    takeaway:
        "A-fib = irregularly irregular + no P waves + stroke risk."
},

{
    id: "DYS-PRI-011",
    caseId: "DYS-PRI-CASE-011",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "SVT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has SVT at 188/min, BP 122/74 mm Hg, and no chest pain or altered mental status. Which intervention should the nurse anticipate first?",
    choices: [
        "Vagal maneuvers",
        "Immediate defibrillation",
        "Atropine",
        "Chest compressions"
    ],
    answer:
        "Vagal maneuvers",
    rationale:
        "The lecture identifies vagal maneuvers as the first intervention for stable SVT.",
    takeaway:
        "Stable SVT = vagal maneuvers first."
},

{
    id: "DYS-PRI-012",
    caseId: "DYS-PRI-CASE-012",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "SVT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with SVT has HR 210/min, BP 74/40 mm Hg, chest pain, and confusion. Which intervention should the nurse anticipate?",
    choices: [
        "Synchronized cardioversion",
        "Routine vagal maneuvers only",
        "Atropine",
        "No treatment because the QRS is narrow"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "The client is unstable, and the lecture identifies synchronized cardioversion for unstable SVT.",
    takeaway:
        "Unstable SVT = synchronized cardioversion."
},

{
    id: "DYS-PRI-013",
    caseId: "DYS-PRI-CASE-013",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Sinus Bradycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with sinus bradycardia requires intervention first?",
    choices: [
        "HR 40/min with hypotension and dizziness",
        "HR 52/min in a sleeping athlete with no symptoms",
        "HR 56/min with stable vital signs",
        "HR 58/min with no complaints"
    ],
    answer:
        "HR 40/min with hypotension and dizziness",
    rationale:
        "Symptoms and impaired perfusion make bradycardia clinically significant.",
    takeaway:
        "Treat symptomatic bradycardia, not the number alone."
},

{
    id: "DYS-PRI-014",
    caseId: "DYS-PRI-CASE-014",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Sinus Bradycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings support symptomatic bradycardia? Select all that apply.",
    choices: [
        "Dizziness",
        "Syncope",
        "Hypotension",
        "Chest pain",
        "Shortness of breath",
        "Altered level of consciousness"
    ],
    answer: [
        "Dizziness",
        "Syncope",
        "Hypotension",
        "Chest pain",
        "Shortness of breath",
        "Altered level of consciousness"
    ],
    rationale:
        "These are the instability findings highlighted in the lecture for symptomatic bradycardia.",
    takeaway:
        "Symptoms tell you when bradycardia matters."
},

{
    id: "DYS-PRI-015",
    caseId: "DYS-PRI-CASE-015",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Sinus Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has sinus tachycardia at 126/min after several episodes of vomiting. BP is 88/54 mm Hg and mucous membranes are dry. Which intervention is most appropriate?",
    choices: [
        "Treat the hypovolemia with prescribed IV fluids.",
        "Administer adenosine.",
        "Defibrillate immediately.",
        "Insert a permanent pacemaker."
    ],
    answer:
        "Treat the hypovolemia with prescribed IV fluids.",
    rationale:
        "Sinus tachycardia is generally treated by correcting the underlying cause. The findings point to hypovolemia.",
    takeaway:
        "Sinus tachycardia: fix the cause."
},

{
    id: "DYS-PRI-016",
    caseId: "DYS-PRI-CASE-016",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "PVCs",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which PVC finding is most concerning in a client with an acute myocardial infarction?",
    choices: [
        "Increasing frequency with couplets and runs of three PVCs",
        "One isolated PVC with stable vital signs",
        "A single PVC after caffeine intake",
        "Occasional asymptomatic unifocal PVCs"
    ],
    answer:
        "Increasing frequency with couplets and runs of three PVCs",
    rationale:
        "The lecture warns that frequent ventricular ectopy during acute MI can progress to VT or VF.",
    takeaway:
        "Worsening PVC patterns after MI can precede lethal rhythms."
},

{
    id: "DYS-PRI-017",
    caseId: "DYS-PRI-CASE-017",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "PVCs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which factors can increase ventricular irritability and contribute to PVCs? Select all that apply.",
    choices: [
        "Hypoxia",
        "Electrolyte imbalance",
        "Myocardial infarction",
        "Cardiomyopathy",
        "Stimulant use",
        "Recreational drug use"
    ],
    answer: [
        "Hypoxia",
        "Electrolyte imbalance",
        "Myocardial infarction",
        "Cardiomyopathy",
        "Stimulant use",
        "Recreational drug use"
    ],
    rationale:
        "These causes are specifically listed in the ventricular rhythm section.",
    takeaway:
        "PVCs often indicate ventricular irritability."
},

{
    id: "DYS-PRI-018",
    caseId: "DYS-PRI-CASE-018",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Torsades",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops a twisting wide-complex rhythm after receiving a QT-prolonging medication. Which medication should the nurse anticipate?",
    choices: [
        "Magnesium sulfate",
        "Atropine",
        "Adenosine",
        "Digoxin"
    ],
    answer:
        "Magnesium sulfate",
    rationale:
        "The lecture identifies magnesium sulfate as the drug of choice for torsades de pointes.",
    takeaway:
        "Twisting rhythm = magnesium."
},

{
    id: "DYS-PRI-019",
    caseId: "DYS-PRI-CASE-019",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Torsades",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions are appropriate for torsades de pointes? Select all that apply.",
    choices: [
        "Stop QT-prolonging medications.",
        "Administer magnesium sulfate.",
        "Correct potassium abnormalities.",
        "Correct magnesium abnormalities.",
        "Correct calcium abnormalities.",
        "Consider electrical cardioversion if unstable."
    ],
    answer: [
        "Stop QT-prolonging medications.",
        "Administer magnesium sulfate.",
        "Correct potassium abnormalities.",
        "Correct magnesium abnormalities.",
        "Correct calcium abnormalities.",
        "Consider electrical cardioversion if unstable."
    ],
    rationale:
        "These are the treatment priorities listed in the torsades section.",
    takeaway:
        "Torsades = remove trigger + magnesium + electrolytes + electricity if unstable."
},

{
    id: "DYS-PRI-020",
    caseId: "DYS-PRI-CASE-020",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The nurse is preparing scheduled digoxin. The client's apical pulse is 54/min. Which action should the nurse take?",
    choices: [
        "Hold the medication and notify the provider.",
        "Administer the medication as scheduled.",
        "Double the dose.",
        "Give atropine with the digoxin."
    ],
    answer:
        "Hold the medication and notify the provider.",
    rationale:
        "The lecture directs the nurse to hold digoxin when the heart rate is below 60 beats/min.",
    takeaway:
        "Digoxin + HR <60 = hold."
},

{
    id: "DYS-PRI-021",
    caseId: "DYS-PRI-CASE-021",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which findings may indicate digoxin toxicity? Select all that apply.",
    choices: [
        "Nausea",
        "Anorexia",
        "Yellow-green visual changes",
        "Bradycardia",
        "New dysrhythmias",
        "Hypokalemia"
    ],
    answer: [
        "Nausea",
        "Anorexia",
        "Yellow-green visual changes",
        "Bradycardia",
        "New dysrhythmias",
        "Hypokalemia"
    ],
    rationale:
        "The lecture lists GI symptoms, visual changes, bradycardia, dysrhythmias, and low potassium as key digoxin toxicity clues.",
    takeaway:
        "Digoxin toxicity = GI + vision + slow/abnormal rhythm + low K."
},

{
    id: "DYS-PRI-022",
    caseId: "DYS-PRI-CASE-022",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client receiving magnesium sulfate has absent deep tendon reflexes. Which action is the priority?",
    choices: [
        "Hold the magnesium and assess for toxicity.",
        "Administer another dose.",
        "Encourage ambulation.",
        "Administer adenosine."
    ],
    answer:
        "Hold the magnesium and assess for toxicity.",
    rationale:
        "Loss of deep tendon reflexes is a toxicity warning identified in the lecture.",
    takeaway:
        "Absent DTRs = magnesium toxicity warning."
},

{
    id: "DYS-PRI-023",
    caseId: "DYS-PRI-CASE-023",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The nurse is preparing metoprolol. HR is 56/min and systolic BP is 88 mm Hg. Which action is most appropriate?",
    choices: [
        "Hold the medication.",
        "Administer the medication.",
        "Double the dose.",
        "Administer diltiazem with it."
    ],
    answer:
        "Hold the medication.",
    rationale:
        "The lecture states to hold beta blockers for HR below 60 or SBP below 90.",
    takeaway:
        "BB: hold HR <60 or SBP <90."
},

{
    id: "DYS-PRI-024",
    caseId: "DYS-PRI-CASE-024",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication-rhythm pairings are correct? Select all that apply.",
    choices: [
        "Atropine — symptomatic bradycardia",
        "Adenosine — stable SVT",
        "Magnesium sulfate — torsades",
        "Amiodarone — VT/VF",
        "Epinephrine — cardiac arrest",
        "Warfarin — stroke prevention in A-fib"
    ],
    answer: [
        "Atropine — symptomatic bradycardia",
        "Adenosine — stable SVT",
        "Magnesium sulfate — torsades",
        "Amiodarone — VT/VF",
        "Epinephrine — cardiac arrest",
        "Warfarin — stroke prevention in A-fib"
    ],
    rationale:
        "These are the high-yield medication-rhythm associations emphasized in the PPT.",
    takeaway:
        "Match the right drug to the right rhythm."
},

{
    id: "DYS-PRI-025",
    caseId: "DYS-PRI-CASE-025",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Anticoagulant Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client taking warfarin requires the most immediate follow-up?",
    choices: [
        "Black tarry stool",
        "INR 2.4",
        "Use of a soft toothbrush",
        "Consistent intake of leafy green vegetables"
    ],
    answer:
        "Black tarry stool",
    rationale:
        "Black tarry stool can indicate gastrointestinal bleeding, a serious complication of anticoagulation.",
    takeaway:
        "Anticoagulant + bleeding = act."
},

{
    id: "DYS-PRI-026",
    caseId: "DYS-PRI-CASE-026",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Pacemaker",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with a permanent pacemaker has a programmed rate of 60/min but reports a pulse of 46/min. Which action is most appropriate?",
    choices: [
        "Notify the healthcare provider.",
        "Reassure the client that this is expected.",
        "Tell the client to exercise.",
        "Place a magnet over the device."
    ],
    answer:
        "Notify the healthcare provider.",
    rationale:
        "The lecture instructs patients to report a pulse below the pacemaker setting.",
    takeaway:
        "Pulse below pacer setting = report."
},

{
    id: "DYS-PRI-027",
    caseId: "DYS-PRI-CASE-027",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "ICD",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with an ICD reports receiving multiple shocks within several minutes. Which instruction is most appropriate?",
    choices: [
        "Call 911.",
        "Wait for the next routine appointment.",
        "Place a magnet over the device.",
        "Ignore the shocks if the client remains awake."
    ],
    answer:
        "Call 911.",
    rationale:
        "The lecture identifies multiple ICD shocks as an emergency.",
    takeaway:
        "Multiple ICD shocks = 911."
},

{
    id: "DYS-PRI-028",
    caseId: "DYS-PRI-CASE-028",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Artifact",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor shows what appears to be ventricular fibrillation, but the client is awake and speaking. Which action is the priority?",
    choices: [
        "Assess the electrodes and verify the tracing.",
        "Defibrillate immediately.",
        "Begin chest compressions.",
        "Administer epinephrine."
    ],
    answer:
        "Assess the electrodes and verify the tracing.",
    rationale:
        "Artifact can mimic lethal rhythms. The patient's clinical condition does not match ventricular fibrillation.",
    takeaway:
        "If monitor and patient disagree, assess the patient and equipment."
},

{
    id: "DYS-PRI-029",
    caseId: "DYS-PRI-CASE-029",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Priority Ranking",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be seen first?",
    choices: [
        "A client with VT at 180/min, BP 76/42 mm Hg, and chest pain",
        "A client with controlled A-fib at 82/min",
        "A client with occasional PACs after caffeine",
        "A client with sinus arrhythmia and no symptoms"
    ],
    answer:
        "A client with VT at 180/min, BP 76/42 mm Hg, and chest pain",
    rationale:
        "The client has a dangerous ventricular rhythm with hemodynamic instability.",
    takeaway:
        "Unstable VT outranks stable dysrhythmias."
},

{
    id: "DYS-PRI-030",
    caseId: "DYS-PRI-CASE-030",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Priority Ranking",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with A-fib who suddenly develops unilateral weakness",
        "A client with a pacemaker requesting discharge instructions",
        "A client with stable atrial flutter",
        "A client with occasional asymptomatic PVCs"
    ],
    answer:
        "A client with A-fib who suddenly develops unilateral weakness",
    rationale:
        "Unilateral weakness suggests embolic stroke, a major A-fib complication requiring immediate intervention.",
    takeaway:
        "Acute neurologic change is a priority."
},
{
    id: "DYS-PRI-031",
    caseId: "DYS-PRI-CASE-031",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Priority Ranking",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with SVT at 202/min, BP 80/46 mm Hg, and altered level of consciousness",
        "A client with sinus tachycardia at 108/min related to anxiety",
        "A client with chronic controlled A-fib and no symptoms",
        "A client with occasional PACs after drinking coffee"
    ],
    answer:
        "A client with SVT at 202/min, BP 80/46 mm Hg, and altered level of consciousness",
    rationale:
        "The client with SVT is hemodynamically unstable, as shown by hypotension and altered level of consciousness. This client requires immediate intervention.",
    takeaway:
        "Unstable tachycardia outranks stable rhythm changes."
},

{
    id: "DYS-PRI-032",
    caseId: "DYS-PRI-CASE-032",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Priority Ranking",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client requires the most immediate intervention?",
    choices: [
        "A client with sinus bradycardia at 38/min, BP 78/40 mm Hg, and confusion",
        "A client with sinus bradycardia at 54/min while sleeping",
        "A client with sinus arrhythmia and no symptoms",
        "A client with sinus tachycardia at 102/min after walking"
    ],
    answer:
        "A client with sinus bradycardia at 38/min, BP 78/40 mm Hg, and confusion",
    rationale:
        "Severe bradycardia with hypotension and altered mental status indicates reduced cardiac output and cerebral perfusion.",
    takeaway:
        "Bradycardia becomes urgent when perfusion drops."
},

{
    id: "DYS-PRI-033",
    caseId: "DYS-PRI-CASE-033",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Adenosine Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which nursing actions are appropriate when administering adenosine for stable SVT? Select all that apply.",
    choices: [
        "Administer the medication as a rapid IV push.",
        "Follow immediately with a rapid normal saline flush.",
        "Use an IV site close to the heart when possible.",
        "Prepare the client for a brief pause in cardiac activity.",
        "Have emergency equipment available.",
        "Infuse the medication slowly over 30 minutes."
    ],
    answer: [
        "Administer the medication as a rapid IV push.",
        "Follow immediately with a rapid normal saline flush.",
        "Use an IV site close to the heart when possible.",
        "Prepare the client for a brief pause in cardiac activity.",
        "Have emergency equipment available."
    ],
    rationale:
        "The lecture emphasizes rapid IV administration, an immediate flush, proximal IV access, warning the patient about brief asystole, and having emergency equipment available.",
    takeaway:
        "Adenosine must be given fast and with preparation."
},

{
    id: "DYS-PRI-034",
    caseId: "DYS-PRI-CASE-034",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Amiodarone Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which finding in a client taking amiodarone requires the most immediate follow-up?",
    choices: [
        "New dry cough and shortness of breath",
        "Request for medication information",
        "Mild fatigue after activity",
        "Stable heart rate of 76/min"
    ],
    answer:
        "New dry cough and shortness of breath",
    rationale:
        "The lecture identifies pulmonary toxicity as a serious complication of amiodarone, with dyspnea and dry cough as warning signs.",
    takeaway:
        "Amiodarone + respiratory symptoms = suspect pulmonary toxicity."
},

{
    id: "DYS-PRI-035",
    caseId: "DYS-PRI-CASE-035",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Amiodarone Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which assessments are appropriate for a client receiving long-term amiodarone? Select all that apply.",
    choices: [
        "Pulmonary function testing",
        "Thyroid studies",
        "Liver function tests",
        "Eye examinations",
        "ECG monitoring",
        "Routine INR only"
    ],
    answer: [
        "Pulmonary function testing",
        "Thyroid studies",
        "Liver function tests",
        "Eye examinations",
        "ECG monitoring"
    ],
    rationale:
        "The lecture uses the PTEL memory aid for amiodarone toxicity: pulmonary, thyroid, eyes, and liver, and also emphasizes ECG monitoring because the medication can prolong QT.",
    takeaway:
        "Amiodarone monitoring = lungs, thyroid, eyes, liver, ECG."
},

{
    id: "DYS-PRI-036",
    caseId: "DYS-PRI-CASE-036",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Anticoagulant Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statements by a client taking anticoagulation for A-fib indicate correct understanding? Select all that apply.",
    choices: [
        "I will report blood in my urine or stool.",
        "I will use a soft toothbrush.",
        "I will use an electric razor.",
        "I will tell my healthcare providers that I take an anticoagulant.",
        "I will report unusual bruising.",
        "I can ignore bleeding gums."
    ],
    answer: [
        "I will report blood in my urine or stool.",
        "I will use a soft toothbrush.",
        "I will use an electric razor.",
        "I will tell my healthcare providers that I take an anticoagulant.",
        "I will report unusual bruising."
    ],
    rationale:
        "The lecture emphasizes bleeding precautions and prompt reporting of abnormal bleeding for all anticoagulants.",
    takeaway:
        "Anticoagulant teaching = prevent and report bleeding."
},

{
    id: "DYS-PRI-037",
    caseId: "DYS-PRI-CASE-037",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Warfarin",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client with A-fib taking warfarin has an INR of 2.5 and no bleeding. How should the nurse interpret this result?",
    choices: [
        "The INR is within the therapeutic range identified in the lecture.",
        "The INR is critically low.",
        "The INR is critically high.",
        "Warfarin should be stopped immediately."
    ],
    answer:
        "The INR is within the therapeutic range identified in the lecture.",
    rationale:
        "The lecture identifies a therapeutic INR goal of 2 to 3 for warfarin therapy in atrial fibrillation.",
    takeaway:
        "Warfarin for A-fib: INR 2–3."
},

{
    id: "DYS-PRI-038",
    caseId: "DYS-PRI-CASE-038",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Device Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statements indicate correct pacemaker teaching? Select all that apply.",
    choices: [
        "I will carry my pacemaker identification card.",
        "I will check my pulse every day.",
        "I will report a pulse below my pacemaker setting.",
        "I will avoid strong magnets.",
        "I will follow lifting restrictions after implantation.",
        "I should keep a magnet over the device at home."
    ],
    answer: [
        "I will carry my pacemaker identification card.",
        "I will check my pulse every day.",
        "I will report a pulse below my pacemaker setting.",
        "I will avoid strong magnets.",
        "I will follow lifting restrictions after implantation."
    ],
    rationale:
        "These are the pacemaker safety instructions emphasized in the lecture.",
    takeaway:
        "Pacemaker safety = ID, pulse checks, magnet avoidance, activity precautions."
},

{
    id: "DYS-PRI-039",
    caseId: "DYS-PRI-CASE-039",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "ICD Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions are appropriate for a client with an ICD? Select all that apply.",
    choices: [
        "Report any shock.",
        "Call 911 for multiple shocks.",
        "Have family members learn CPR.",
        "Avoid strong magnets.",
        "Keep a cell phone on the opposite side of the device.",
        "Ignore repeated shocks if you remain conscious."
    ],
    answer: [
        "Report any shock.",
        "Call 911 for multiple shocks.",
        "Have family members learn CPR.",
        "Avoid strong magnets.",
        "Keep a cell phone on the opposite side of the device."
    ],
    rationale:
        "The lecture emphasizes shock reporting, emergency care for repeated shocks, CPR education, and electromagnetic safety.",
    takeaway:
        "ICD teaching centers on shocks and magnet safety."
},

{
    id: "DYS-PRI-040",
    caseId: "DYS-PRI-CASE-040",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Rhythm Identification",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which rhythm-characteristic pairings are correct? Select all that apply.",
    choices: [
        "A-fib — irregularly irregular with no P waves",
        "A-flutter — sawtooth waves",
        "SVT — rapid narrow-complex rhythm",
        "Junctional rhythm — inverted, absent, or retrograde P waves",
        "V-fib — chaotic waveform with no cardiac output",
        "Asystole — organized rhythm with a strong pulse"
    ],
    answer: [
        "A-fib — irregularly irregular with no P waves",
        "A-flutter — sawtooth waves",
        "SVT — rapid narrow-complex rhythm",
        "Junctional rhythm — inverted, absent, or retrograde P waves",
        "V-fib — chaotic waveform with no cardiac output"
    ],
    rationale:
        "These are defining ECG features emphasized throughout the lecture.",
    takeaway:
        "Know the signature feature of each rhythm."
},

{
    id: "DYS-PRI-041",
    caseId: "DYS-PRI-CASE-041",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Rhythm and Intervention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythm-intervention pairings are correct? Select all that apply.",
    choices: [
        "Symptomatic bradycardia — atropine",
        "Stable SVT — vagal maneuvers then adenosine",
        "Unstable SVT — synchronized cardioversion",
        "Torsades — magnesium sulfate",
        "Pulseless VT — CPR and defibrillation",
        "Asystole — defibrillation"
    ],
    answer: [
        "Symptomatic bradycardia — atropine",
        "Stable SVT — vagal maneuvers then adenosine",
        "Unstable SVT — synchronized cardioversion",
        "Torsades — magnesium sulfate",
        "Pulseless VT — CPR and defibrillation"
    ],
    rationale:
        "These treatment pairings reflect the intervention pathways taught in the lecture.",
    takeaway:
        "Know the first-line intervention for each major rhythm."
},

{
    id: "DYS-PRI-042",
    caseId: "DYS-PRI-CASE-042",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Cardiac Arrest Medications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication facts are correct during cardiac arrest? Select all that apply.",
    choices: [
        "Epinephrine is given in all cardiac arrest rhythms.",
        "Epinephrine may be repeated every 3 to 5 minutes.",
        "Amiodarone may be used for refractory VF or pulseless VT.",
        "The lecture identifies amiodarone 300 mg followed by 150 mg.",
        "Atropine is the drug of choice for VF.",
        "Adenosine is used for asystole."
    ],
    answer: [
        "Epinephrine is given in all cardiac arrest rhythms.",
        "Epinephrine may be repeated every 3 to 5 minutes.",
        "Amiodarone may be used for refractory VF or pulseless VT.",
        "The lecture identifies amiodarone 300 mg followed by 150 mg."
    ],
    rationale:
        "The lecture identifies epinephrine for all arrest rhythms and amiodarone for refractory VF/pulseless VT.",
    takeaway:
        "Arrest meds: epi broadly; amiodarone for refractory VF/pulseless VT."
},

{
    id: "DYS-PRI-043",
    caseId: "DYS-PRI-CASE-043",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Artifact",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The telemetry tracing suddenly appears chaotic, but the client is alert and talking. Which actions are appropriate? Select all that apply.",
    choices: [
        "Assess the client.",
        "Check electrode placement.",
        "Check lead connections.",
        "Evaluate for movement artifact.",
        "Compare the monitor findings with the client's pulse.",
        "Defibrillate immediately without assessment."
    ],
    answer: [
        "Assess the client.",
        "Check electrode placement.",
        "Check lead connections.",
        "Evaluate for movement artifact.",
        "Compare the monitor findings with the client's pulse."
    ],
    rationale:
        "The lecture warns that artifact can mimic lethal rhythms and emphasizes assessing the patient before treating the monitor.",
    takeaway:
        "Monitor looks bad but patient looks good? Verify before treating."
},

{
    id: "DYS-PRI-044",
    caseId: "DYS-PRI-CASE-044",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "CPR",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions support high-quality CPR? Select all that apply.",
    choices: [
        "Compression rate of 100 to 120/min",
        "Compression depth of at least 2 inches",
        "Allow full chest recoil",
        "Minimize interruptions",
        "Switch compressors every 2 minutes",
        "Pause frequently to check the rhythm"
    ],
    answer: [
        "Compression rate of 100 to 120/min",
        "Compression depth of at least 2 inches",
        "Allow full chest recoil",
        "Minimize interruptions",
        "Switch compressors every 2 minutes"
    ],
    rationale:
        "These are the high-quality CPR principles emphasized in the lecture.",
    takeaway:
        "Good CPR is fast, deep, full recoil, and uninterrupted."
},

{
    id: "DYS-PRI-045",
    caseId: "DYS-PRI-CASE-045",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Tachycardia Cause",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops sinus tachycardia at 132/min, temperature 103.1°F (39.5°C), and reports chills. Which intervention best addresses the dysrhythmia?",
    choices: [
        "Treat the fever and underlying cause.",
        "Administer adenosine.",
        "Prepare for defibrillation.",
        "Insert a pacemaker."
    ],
    answer:
        "Treat the fever and underlying cause.",
    rationale:
        "The lecture emphasizes treating the underlying cause of sinus tachycardia rather than treating the rhythm alone.",
    takeaway:
        "Sinus tachycardia is often a clue to another problem."
},

{
    id: "DYS-PRI-046",
    caseId: "DYS-PRI-CASE-046",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Atrial Flutter",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial flutter has HR 168/min, BP 82/46 mm Hg, dizziness, and chest pain. Which intervention should the nurse anticipate?",
    choices: [
        "Synchronized cardioversion",
        "No treatment because flutter waves are organized",
        "Atropine",
        "Permanent pacing"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "The client is unstable, and the lecture identifies synchronized cardioversion when atrial flutter causes hemodynamic instability.",
    takeaway:
        "Unstable atrial flutter = synchronized cardioversion."
},

{
    id: "DYS-PRI-047",
    caseId: "DYS-PRI-CASE-047",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Junctional Rhythm",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a junctional rhythm requires the most immediate follow-up?",
    choices: [
        "HR 42/min with hypotension, dizziness, and confusion",
        "HR 52/min with no symptoms",
        "HR 72/min with stable vital signs",
        "HR 80/min after heart surgery with no symptoms"
    ],
    answer:
        "HR 42/min with hypotension, dizziness, and confusion",
    rationale:
        "The unstable client shows signs of reduced cardiac output and requires immediate intervention.",
    takeaway:
        "Junctional rhythm is treated based on symptoms and perfusion."
},

{
    id: "DYS-PRI-048",
    caseId: "DYS-PRI-CASE-048",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Digoxin and Junctional Rhythm",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client taking digoxin develops a junctional rhythm, nausea, and visual halos. Which problem should the nurse suspect?",
    choices: [
        "Digoxin toxicity",
        "Expected medication effect",
        "Normal sinus variation",
        "Atrial flutter"
    ],
    answer:
        "Digoxin toxicity",
    rationale:
        "The lecture identifies junctional rhythms, nausea, and visual changes as findings associated with digoxin toxicity.",
    takeaway:
        "Junctional rhythm + GI/vision symptoms + digoxin = toxicity."
},

{
    id: "DYS-PRI-049",
    caseId: "DYS-PRI-CASE-049",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "PVC Progression",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with acute MI develops a PVC couplet followed by three consecutive wide premature complexes. Which interpretation is most appropriate?",
    choices: [
        "The client may be progressing into ventricular tachycardia.",
        "The rhythm is returning to normal sinus rhythm.",
        "The client is developing sinus arrhythmia.",
        "The PVCs indicate improved cardiac perfusion."
    ],
    answer:
        "The client may be progressing into ventricular tachycardia.",
    rationale:
        "The lecture defines three consecutive PVCs as a run of VT and warns that PVCs during acute MI may progress to VT or VF.",
    takeaway:
        "Three PVCs in a row = VT warning."
},

{
    id: "DYS-PRI-050",
    caseId: "DYS-PRI-CASE-050",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Comprehensive Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with A-fib who suddenly develops slurred speech and arm weakness",
        "A client with chronic controlled A-fib asking about apixaban",
        "A client with atrial flutter at 84/min and no symptoms",
        "A client with occasional PACs requesting caffeine teaching"
    ],
    answer:
        "A client with A-fib who suddenly develops slurred speech and arm weakness",
    rationale:
        "Slurred speech and arm weakness are FAST stroke findings and require immediate emergency intervention.",
    takeaway:
        "Acute stroke symptoms outrank routine rhythm care."
},

{
    id: "DYS-PRI-051",
    caseId: "DYS-PRI-CASE-051",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Comprehensive Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with a twisting polymorphic VT, BP 76/42 mm Hg, and altered LOC",
        "A client with occasional unifocal PVCs",
        "A client with sinus tachycardia at 108/min during anxiety",
        "A client with a stable junctional rhythm at 54/min"
    ],
    answer:
        "A client with a twisting polymorphic VT, BP 76/42 mm Hg, and altered LOC",
    rationale:
        "The rhythm is consistent with unstable torsades, a dangerous ventricular dysrhythmia requiring immediate intervention.",
    takeaway:
        "Unstable torsades is an emergency."
},

{
    id: "DYS-PRI-052",
    caseId: "DYS-PRI-CASE-052",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Comprehensive SATA",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings should prompt immediate intervention in a client with a dysrhythmia? Select all that apply.",
    choices: [
        "Hypotension",
        "Chest pain",
        "Syncope",
        "Altered level of consciousness",
        "Severe shortness of breath",
        "Stable vital signs with no symptoms"
    ],
    answer: [
        "Hypotension",
        "Chest pain",
        "Syncope",
        "Altered level of consciousness",
        "Severe shortness of breath"
    ],
    rationale:
        "These findings indicate reduced cardiac output and hemodynamic instability.",
    takeaway:
        "Symptoms of poor perfusion determine urgency."
},

{
    id: "DYS-PRI-053",
    caseId: "DYS-PRI-CASE-053",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Medication Reversal",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication-reversal pairings are correct? Select all that apply.",
    choices: [
        "Warfarin — vitamin K",
        "Dabigatran — idarucizumab",
        "Factor Xa inhibitors — andexanet alfa",
        "Digoxin toxicity — digoxin immune Fab",
        "Magnesium toxicity — calcium gluconate",
        "Adenosine — atropine"
    ],
    answer: [
        "Warfarin — vitamin K",
        "Dabigatran — idarucizumab",
        "Factor Xa inhibitors — andexanet alfa",
        "Digoxin toxicity — digoxin immune Fab",
        "Magnesium toxicity — calcium gluconate"
    ],
    rationale:
        "These reversal agents are specifically listed in the lecture.",
    takeaway:
        "Know the antidote or reversal agent for the high-yield cardiac drugs."
},

{
    id: "DYS-PRI-054",
    caseId: "DYS-PRI-CASE-054",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Rate-Control Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which findings should cause the nurse to question or hold a prescribed rate-control medication according to the lecture? Select all that apply.",
    choices: [
        "Heart rate 54/min before metoprolol",
        "Systolic BP 86 mm Hg before diltiazem",
        "Heart rate 58/min before verapamil",
        "Heart rate 82/min and BP 124/72 mm Hg",
        "Systolic BP 118 mm Hg"
    ],
    answer: [
        "Heart rate 54/min before metoprolol",
        "Systolic BP 86 mm Hg before diltiazem",
        "Heart rate 58/min before verapamil"
    ],
    rationale:
        "The lecture identifies HR below 60 and SBP below 90 as reasons to hold beta blockers or rate-controlling calcium channel blockers.",
    takeaway:
        "Rate-control meds: watch HR and BP."
},

{
    id: "DYS-PRI-055",
    caseId: "DYS-PRI-CASE-055",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Comprehensive Rhythm Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which high-yield statements from the dysrhythmia lecture are correct? Select all that apply.",
    choices: [
        "Wide QRS complexes suggest ventricular origin.",
        "A-fib carries a stroke risk.",
        "V-fib requires defibrillation.",
        "Asystole is not shockable.",
        "Torsades is treated with magnesium sulfate.",
        "The patient should be assessed before treating a monitor tracing."
    ],
    answer: [
        "Wide QRS complexes suggest ventricular origin.",
        "A-fib carries a stroke risk.",
        "V-fib requires defibrillation.",
        "Asystole is not shockable.",
        "Torsades is treated with magnesium sulfate.",
        "The patient should be assessed before treating a monitor tracing."
    ],
    rationale:
        "These are among the core high-yield concepts emphasized in the lecture.",
    takeaway:
        "These are the must-know dysrhythmia rules."
},

{
    id: "DYS-PRI-056",
    caseId: "DYS-PRI-CASE-056",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Patient First",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The cardiac monitor alarms and shows a new dysrhythmia. Which assessment gives the nurse the most useful information about whether immediate treatment is needed?",
    choices: [
        "Blood pressure, level of consciousness, pulse, oxygenation, and symptoms",
        "The client's meal preference",
        "The room temperature",
        "The color of the ECG paper"
    ],
    answer:
        "Blood pressure, level of consciousness, pulse, oxygenation, and symptoms",
    rationale:
        "The lecture emphasizes determining whether the rhythm is affecting cardiac output and perfusion.",
    takeaway:
        "Clinical stability determines treatment urgency."
},

{
    id: "DYS-PRI-057",
    caseId: "DYS-PRI-CASE-057",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "CPR and Defibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is in ventricular fibrillation. Which actions are appropriate? Select all that apply.",
    choices: [
        "Start CPR immediately.",
        "Prepare for rapid defibrillation.",
        "Resume CPR immediately after the shock.",
        "Administer epinephrine as indicated.",
        "Administer amiodarone if the rhythm persists.",
        "Delay compressions until all medications are prepared."
    ],
    answer: [
        "Start CPR immediately.",
        "Prepare for rapid defibrillation.",
        "Resume CPR immediately after the shock.",
        "Administer epinephrine as indicated.",
        "Administer amiodarone if the rhythm persists."
    ],
    rationale:
        "The lecture outlines immediate CPR, defibrillation, resumption of compressions, epinephrine, and amiodarone for persistent VF.",
    takeaway:
        "VF treatment is fast, repetitive, and focused on perfusion."
},

{
    id: "DYS-PRI-058",
    caseId: "DYS-PRI-CASE-058",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "PEA",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions are appropriate for pulseless electrical activity? Select all that apply.",
    choices: [
        "Begin CPR.",
        "Administer epinephrine.",
        "Search for reversible causes.",
        "Assess for H's and T's.",
        "Defibrillate immediately.",
        "Perform synchronized cardioversion."
    ],
    answer: [
        "Begin CPR.",
        "Administer epinephrine.",
        "Search for reversible causes.",
        "Assess for H's and T's."
    ],
    rationale:
        "PEA is non-shockable. Management focuses on CPR, epinephrine, and treatment of reversible causes.",
    takeaway:
        "PEA = CPR + epi + find the cause."
},

{
    id: "DYS-PRI-059",
    caseId: "DYS-PRI-CASE-059",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Asystole",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions are appropriate when asystole is confirmed? Select all that apply.",
    choices: [
        "Begin or continue high-quality CPR.",
        "Administer epinephrine as prescribed.",
        "Evaluate for reversible causes.",
        "Verify that the rhythm is not artifact or lead disconnection.",
        "Defibrillate repeatedly.",
        "Perform synchronized cardioversion."
    ],
    answer: [
        "Begin or continue high-quality CPR.",
        "Administer epinephrine as prescribed.",
        "Evaluate for reversible causes.",
        "Verify that the rhythm is not artifact or lead disconnection."
    ],
    rationale:
        "Asystole is non-shockable. The lecture emphasizes CPR, epinephrine, reversible causes, and assessing the patient and monitor before treatment.",
    takeaway:
        "Confirmed asystole: CPR + epi + cause, not shock."
},

{
    id: "DYS-PRI-060",
    caseId: "DYS-PRI-CASE-060",
    patient: randomPatient(),
    topic: "Dysrhythmia Priority and SATA",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is caring for four clients with dysrhythmias. Which client requires immediate intervention?",
    choices: [
        "A client with a wide-complex rhythm at 188/min who is unresponsive and pulseless",
        "A client with chronic A-fib at 82/min receiving anticoagulation",
        "A client with occasional PACs and stable vital signs",
        "A client with sinus bradycardia at 54/min who is sleeping and asymptomatic"
    ],
    answer:
        "A client with a wide-complex rhythm at 188/min who is unresponsive and pulseless",
    rationale:
        "The client is most consistent with pulseless VT, a shockable cardiac arrest rhythm requiring immediate CPR and defibrillation.",
    takeaway:
        "When in doubt: pulse, perfusion, and stability determine priority."
}

];
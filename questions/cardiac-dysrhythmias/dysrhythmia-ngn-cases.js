const dysrhythmiaNgnCaseQuestions = [

{
    id: "DYS-NGN-001",
    caseId: "DYS-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Atrial Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client reports palpitations and fatigue. The ECG shows an irregularly irregular rhythm with no identifiable P waves. Which rhythm should the nurse identify?",
    choices: [
        "Atrial fibrillation",
        "Atrial flutter",
        "Sinus tachycardia",
        "Ventricular tachycardia"
    ],
    answer:
        "Atrial fibrillation",
    rationale:
        "An irregularly irregular rhythm with absent identifiable P waves is characteristic of atrial fibrillation.",
    takeaway:
        "Irregularly irregular + no P waves = A-fib."
},

{
    id: "DYS-NGN-002",
    caseId: "DYS-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Atrial Fibrillation",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings in this client with atrial fibrillation should the nurse recognize as important clinical cues? Select all that apply.",
    choices: [
        "Irregularly irregular rhythm",
        "Absent identifiable P waves",
        "Palpitations",
        "Fatigue",
        "Risk for embolic stroke",
        "Regular R-R intervals"
    ],
    answer: [
        "Irregularly irregular rhythm",
        "Absent identifiable P waves",
        "Palpitations",
        "Fatigue",
        "Risk for embolic stroke"
    ],
    rationale:
        "A-fib produces chaotic atrial activity, an irregular ventricular response, and can decrease cardiac output. Blood pooling in the atria also increases thromboembolic risk.",
    takeaway:
        "Recognize both the rhythm and its major complication."
},

{
    id: "DYS-NGN-003",
    caseId: "DYS-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Atrial Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The client with atrial fibrillation suddenly develops facial drooping and slurred speech. Which action should the nurse take first?",
    choices: [
        "Activate the stroke response immediately.",
        "Reassess the client in 30 minutes.",
        "Administer the next scheduled rate-control medication.",
        "Encourage the client to rest."
    ],
    answer:
        "Activate the stroke response immediately.",
    rationale:
        "Facial drooping and speech difficulty are FAST stroke findings. A-fib increases the risk for embolic stroke.",
    takeaway:
        "A-fib + FAST symptoms = emergency."
},

{
    id: "DYS-NGN-004",
    caseId: "DYS-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Atrial Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The client is prescribed warfarin for atrial fibrillation. Which laboratory value should the nurse expect to monitor?",
    choices: [
        "INR",
        "Troponin",
        "BNP",
        "CK-MB"
    ],
    answer:
        "INR",
    rationale:
        "Warfarin therapy requires INR monitoring. The lecture identifies a therapeutic INR goal of 2 to 3 for atrial fibrillation.",
    takeaway:
        "Warfarin = monitor INR."
},

{
    id: "DYS-NGN-005",
    caseId: "DYS-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Atrial Fibrillation",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which discharge instructions should the nurse provide to this client taking warfarin? Select all that apply.",
    choices: [
        "Keep vitamin K intake consistent.",
        "Report unusual bruising.",
        "Report blood in the urine or stool.",
        "Use a soft toothbrush.",
        "Use an electric razor.",
        "Completely eliminate all vitamin K foods."
    ],
    answer: [
        "Keep vitamin K intake consistent.",
        "Report unusual bruising.",
        "Report blood in the urine or stool.",
        "Use a soft toothbrush.",
        "Use an electric razor."
    ],
    rationale:
        "Warfarin teaching includes consistent vitamin K intake and bleeding precautions.",
    takeaway:
        "Warfarin safety = INR + consistent vitamin K + bleeding precautions."
},

// ======================================================
// CASE 2 — STABLE → UNSTABLE SVT
// ======================================================

{
    id: "DYS-NGN-006",
    caseId: "DYS-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "SVT",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client reports sudden palpitations. HR is 190/min, BP 124/76 mm Hg, the client is alert, and the ECG shows a regular narrow-complex tachycardia. Which rhythm is most likely?",
    choices: [
        "Supraventricular tachycardia",
        "Ventricular fibrillation",
        "Sinus bradycardia",
        "Asystole"
    ],
    answer:
        "Supraventricular tachycardia",
    rationale:
        "SVT typically presents as a rapid, regular, narrow-complex rhythm.",
    takeaway:
        "Very fast + regular + narrow = think SVT."
},

{
    id: "DYS-NGN-007",
    caseId: "DYS-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "SVT",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The client remains alert with BP 124/76 mm Hg and no chest pain. Which intervention should the nurse anticipate first?",
    choices: [
        "Vagal maneuvers",
        "Defibrillation",
        "Atropine",
        "Chest compressions"
    ],
    answer:
        "Vagal maneuvers",
    rationale:
        "For stable SVT, vagal maneuvers are attempted before medication therapy.",
    takeaway:
        "Stable SVT = vagal maneuvers first."
},

{
    id: "DYS-NGN-008",
    caseId: "DYS-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "SVT",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Vagal maneuvers are unsuccessful. The client remains stable. Which medication should the nurse prepare?",
    choices: [
        "Adenosine",
        "Atropine",
        "Magnesium sulfate",
        "Warfarin"
    ],
    answer:
        "Adenosine",
    rationale:
        "Adenosine is used for stable SVT when vagal maneuvers are unsuccessful.",
    takeaway:
        "Stable SVT: vagal → adenosine."
},

{
    id: "DYS-NGN-009",
    caseId: "DYS-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Adenosine",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which actions should the nurse take when administering adenosine? Select all that apply.",
    choices: [
        "Administer as a rapid IV push.",
        "Follow immediately with a rapid saline flush.",
        "Use proximal IV access when possible.",
        "Warn the client about possible flushing and chest discomfort.",
        "Have emergency equipment available.",
        "Infuse slowly over 30 minutes."
    ],
    answer: [
        "Administer as a rapid IV push.",
        "Follow immediately with a rapid saline flush.",
        "Use proximal IV access when possible.",
        "Warn the client about possible flushing and chest discomfort.",
        "Have emergency equipment available."
    ],
    rationale:
        "Adenosine has an extremely short duration of action and must be administered rapidly. The client should be prepared for transient unpleasant effects.",
    takeaway:
        "Adenosine = fast push, fast flush."
},

{
    id: "DYS-NGN-010",
    caseId: "DYS-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "SVT",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Before treatment can be completed, the client's BP falls to 76/40 mm Hg and the client becomes confused and reports chest pain. Which intervention is now the priority?",
    choices: [
        "Synchronized cardioversion",
        "Continue vagal maneuvers",
        "Routine observation",
        "Administer warfarin"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "Hypotension, altered mental status, and chest pain indicate hemodynamic instability. Unstable SVT requires synchronized cardioversion.",
    takeaway:
        "When stable becomes unstable, the treatment changes."
},

// ======================================================
// CASE 3 — SYMPTOMATIC BRADYCARDIA
// ======================================================

{
    id: "DYS-NGN-011",
    caseId: "DYS-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Sinus Bradycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has HR 38/min, BP 78/42 mm Hg, dizziness, and confusion. The ECG shows a regular rhythm with a P wave before every QRS. Which problem should the nurse identify?",
    choices: [
        "Symptomatic sinus bradycardia",
        "Stable sinus bradycardia",
        "Atrial fibrillation",
        "SVT"
    ],
    answer:
        "Symptomatic sinus bradycardia",
    rationale:
        "The rhythm is sinus bradycardia, and hypotension, dizziness, and confusion indicate compromised perfusion.",
    takeaway:
        "Slow + symptoms = symptomatic bradycardia."
},

{
    id: "DYS-NGN-012",
    caseId: "DYS-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Sinus Bradycardia",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings indicate that the client's bradycardia is affecting cardiac output? Select all that apply.",
    choices: [
        "BP 78/42 mm Hg",
        "Dizziness",
        "Confusion",
        "HR 38/min",
        "Syncope",
        "Stable blood pressure with no symptoms"
    ],
    answer: [
        "BP 78/42 mm Hg",
        "Dizziness",
        "Confusion",
        "HR 38/min",
        "Syncope"
    ],
    rationale:
        "Symptomatic bradycardia causes inadequate perfusion, producing hypotension, neurologic changes, dizziness, or syncope.",
    takeaway:
        "Perfusion findings determine whether bradycardia needs treatment."
},

{
    id: "DYS-NGN-013",
    caseId: "DYS-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Sinus Bradycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication should the nurse expect to administer first for this symptomatic bradycardia?",
    choices: [
        "Atropine",
        "Adenosine",
        "Warfarin",
        "Magnesium sulfate"
    ],
    answer:
        "Atropine",
    rationale:
        "Atropine is the medication identified in the lecture for symptomatic bradycardia.",
    takeaway:
        "Symptomatic bradycardia = atropine."
},

{
    id: "DYS-NGN-014",
    caseId: "DYS-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Sinus Bradycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The client's condition does not improve after medication. Which intervention should the nurse anticipate next?",
    choices: [
        "Transcutaneous pacing",
        "Defibrillation",
        "Vagal maneuvers",
        "Adenosine"
    ],
    answer:
        "Transcutaneous pacing",
    rationale:
        "Pacing may be required when symptomatic bradycardia does not respond adequately to medication.",
    takeaway:
        "Bradycardia not responding to medication may need pacing."
},

{
    id: "DYS-NGN-015",
    caseId: "DYS-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Sinus Bradycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "After treatment, which finding best indicates that the intervention was effective?",
    choices: [
        "HR 68/min, BP 112/70 mm Hg, client alert and denies dizziness",
        "HR 40/min, BP 78/42 mm Hg, client remains confused",
        "HR 42/min with new chest pain",
        "Client becomes unresponsive"
    ],
    answer:
        "HR 68/min, BP 112/70 mm Hg, client alert and denies dizziness",
    rationale:
        "Improved heart rate, blood pressure, mental status, and symptoms demonstrate improved cardiac output.",
    takeaway:
        "Successful treatment restores perfusion, not just the heart rate."
},

// ======================================================
// CASE 4 — PVCs → VENTRICULAR TACHYCARDIA
// ======================================================

{
    id: "DYS-NGN-016",
    caseId: "DYS-NGN-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "PVCs",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client recovering from an acute myocardial infarction develops increasingly frequent premature wide QRS complexes. Which finding should concern the nurse most?",
    choices: [
        "PVC couplets followed by three consecutive PVCs",
        "One isolated PVC",
        "Occasional PACs",
        "Sinus arrhythmia"
    ],
    answer:
        "PVC couplets followed by three consecutive PVCs",
    rationale:
        "Increasing ventricular ectopy, couplets, and runs of three PVCs can indicate progression toward ventricular tachycardia.",
    takeaway:
        "Three consecutive PVCs = run of VT."
},

{
    id: "DYS-NGN-017",
    caseId: "DYS-NGN-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "PVCs",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which factors should the nurse investigate as possible causes of increased ventricular irritability? Select all that apply.",
    choices: [
        "Hypoxia",
        "Electrolyte imbalance",
        "Myocardial ischemia",
        "Stimulant use",
        "Recreational drug use",
        "Cardiomyopathy"
    ],
    answer: [
        "Hypoxia",
        "Electrolyte imbalance",
        "Myocardial ischemia",
        "Stimulant use",
        "Recreational drug use",
        "Cardiomyopathy"
    ],
    rationale:
        "The ventricular rhythm section identifies these as causes of PVCs and ventricular irritability.",
    takeaway:
        "When PVCs increase, look for the cause."
},

{
    id: "DYS-NGN-018",
    caseId: "DYS-NGN-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Tachycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor now shows a regular wide-complex tachycardia at 176/min. Which action should the nurse take first?",
    choices: [
        "Assess the client and determine whether a pulse is present.",
        "Immediately administer adenosine.",
        "Document the rhythm.",
        "Measure the PR interval."
    ],
    answer:
        "Assess the client and determine whether a pulse is present.",
    rationale:
        "Treatment of VT depends on whether the client has a pulse and whether the client is stable.",
    takeaway:
        "VT appears → check the patient and pulse."
},

{
    id: "DYS-NGN-019",
    caseId: "DYS-NGN-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Tachycardia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The client is unresponsive and has no pulse. Which intervention is the priority?",
    choices: [
        "Begin CPR and prepare for defibrillation.",
        "Perform synchronized cardioversion.",
        "Administer atropine.",
        "Perform vagal maneuvers."
    ],
    answer:
        "Begin CPR and prepare for defibrillation.",
    rationale:
        "Pulseless VT is a shockable cardiac arrest rhythm.",
    takeaway:
        "Pulseless VT = CPR + defibrillation."
},

{
    id: "DYS-NGN-020",
    caseId: "DYS-NGN-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Tachycardia",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which interventions may be used during resuscitation of this client with persistent pulseless VT? Select all that apply.",
    choices: [
        "High-quality CPR",
        "Defibrillation",
        "Epinephrine",
        "Amiodarone",
        "Assessment for reversible causes",
        "Routine synchronized cardioversion"
    ],
    answer: [
        "High-quality CPR",
        "Defibrillation",
        "Epinephrine",
        "Amiodarone",
        "Assessment for reversible causes"
    ],
    rationale:
        "Pulseless VT follows the shockable cardiac arrest pathway with CPR, defibrillation, epinephrine, antiarrhythmic therapy, and correction of reversible causes.",
    takeaway:
        "Pulseless VT follows the shockable arrest pathway."
},

// ======================================================
// CASE 5 — TORSADES DE POINTES
// ======================================================

{
    id: "DYS-NGN-021",
    caseId: "DYS-NGN-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Torsades de Pointes",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client receiving a QT-prolonging medication develops a polymorphic ventricular rhythm that appears to twist around the baseline. Which rhythm should the nurse identify?",
    choices: [
        "Torsades de pointes",
        "Atrial flutter",
        "Sinus tachycardia",
        "Junctional rhythm"
    ],
    answer:
        "Torsades de pointes",
    rationale:
        "Torsades is a form of polymorphic ventricular tachycardia characterized by QRS complexes that appear to twist around the baseline.",
    takeaway:
        "Twisting around the baseline = torsades."
},

{
    id: "DYS-NGN-022",
    caseId: "DYS-NGN-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Torsades de Pointes",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which factors should the nurse recognize as important when evaluating this client with torsades? Select all that apply.",
    choices: [
        "QT-prolonging medications",
        "Potassium abnormalities",
        "Magnesium abnormalities",
        "Calcium abnormalities",
        "Hemodynamic stability",
        "Presence or absence of a pulse"
    ],
    answer: [
        "QT-prolonging medications",
        "Potassium abnormalities",
        "Magnesium abnormalities",
        "Calcium abnormalities",
        "Hemodynamic stability",
        "Presence or absence of a pulse"
    ],
    rationale:
        "Torsades management includes identifying QT-prolonging triggers, correcting electrolytes, and determining whether the client is stable and has a pulse.",
    takeaway:
        "Torsades requires both rhythm treatment and cause correction."
},

{
    id: "DYS-NGN-023",
    caseId: "DYS-NGN-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Torsades de Pointes",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication should the nurse anticipate for torsades de pointes?",
    choices: [
        "Magnesium sulfate",
        "Atropine",
        "Adenosine",
        "Warfarin"
    ],
    answer:
        "Magnesium sulfate",
    rationale:
        "Magnesium sulfate is the medication emphasized for torsades de pointes.",
    takeaway:
        "Torsades = magnesium."
},

{
    id: "DYS-NGN-024",
    caseId: "DYS-NGN-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Torsades de Pointes",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which additional actions should the nurse anticipate for this client? Select all that apply.",
    choices: [
        "Stop QT-prolonging medications.",
        "Correct potassium abnormalities.",
        "Correct magnesium abnormalities.",
        "Correct calcium abnormalities.",
        "Prepare for electrical therapy if the client becomes unstable.",
        "Continue all medications known to prolong QT."
    ],
    answer: [
        "Stop QT-prolonging medications.",
        "Correct potassium abnormalities.",
        "Correct magnesium abnormalities.",
        "Correct calcium abnormalities.",
        "Prepare for electrical therapy if the client becomes unstable."
    ],
    rationale:
        "Treatment includes removal of QT-prolonging triggers, correction of electrolytes, magnesium, and electrical therapy when instability occurs.",
    takeaway:
        "Treat torsades and remove what caused it."
},

{
    id: "DYS-NGN-025",
    caseId: "DYS-NGN-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Magnesium Safety",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "During magnesium therapy, the nurse notes absent deep tendon reflexes. Which action should the nurse take?",
    choices: [
        "Hold the magnesium and assess for toxicity.",
        "Increase the magnesium dose.",
        "Administer adenosine.",
        "Encourage the client to ambulate."
    ],
    answer:
        "Hold the magnesium and assess for toxicity.",
    rationale:
        "Loss of deep tendon reflexes is an important warning sign of magnesium toxicity.",
    takeaway:
        "Absent DTRs = magnesium toxicity warning."
},

// ======================================================
// CASE 6 — V-FIB CARDIAC ARREST
// ======================================================

{
    id: "DYS-NGN-026",
    caseId: "DYS-NGN-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client suddenly becomes unresponsive. The monitor displays a chaotic waveform with no identifiable P waves or QRS complexes. The client has no pulse. Which rhythm should the nurse identify?",
    choices: [
        "Ventricular fibrillation",
        "Atrial fibrillation",
        "Asystole",
        "SVT"
    ],
    answer:
        "Ventricular fibrillation",
    rationale:
        "V-fib produces chaotic ventricular electrical activity with no effective cardiac output or pulse.",
    takeaway:
        "Chaotic rhythm + no pulse = V-fib."
},

{
    id: "DYS-NGN-027",
    caseId: "DYS-NGN-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which intervention is the priority for this client?",
    choices: [
        "Begin CPR and prepare for defibrillation.",
        "Administer atropine.",
        "Perform synchronized cardioversion.",
        "Obtain a 12-lead ECG before treatment."
    ],
    answer:
        "Begin CPR and prepare for defibrillation.",
    rationale:
        "V-fib is a shockable cardiac arrest rhythm requiring immediate high-quality CPR and defibrillation.",
    takeaway:
        "V-fib = CPR + shock."
},

{
    id: "DYS-NGN-028",
    caseId: "DYS-NGN-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Fibrillation",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions support high-quality CPR during this resuscitation? Select all that apply.",
    choices: [
        "Compress at 100 to 120/min.",
        "Compress at least 2 inches deep.",
        "Allow full chest recoil.",
        "Minimize interruptions.",
        "Switch compressors about every 2 minutes.",
        "Stop frequently for prolonged pulse checks."
    ],
    answer: [
        "Compress at 100 to 120/min.",
        "Compress at least 2 inches deep.",
        "Allow full chest recoil.",
        "Minimize interruptions.",
        "Switch compressors about every 2 minutes."
    ],
    rationale:
        "These actions are the high-quality CPR principles emphasized in the lecture.",
    takeaway:
        "Quality compressions are a treatment."
},

{
    id: "DYS-NGN-029",
    caseId: "DYS-NGN-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Cardiac Arrest Medications",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication should the nurse expect to administer repeatedly every 3 to 5 minutes during cardiac arrest?",
    choices: [
        "Epinephrine",
        "Atropine",
        "Adenosine",
        "Warfarin"
    ],
    answer:
        "Epinephrine",
    rationale:
        "The lecture identifies epinephrine as a cardiac arrest medication repeated every 3 to 5 minutes.",
    takeaway:
        "Arrest = remember epinephrine."
},

{
    id: "DYS-NGN-030",
    caseId: "DYS-NGN-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Ventricular Fibrillation",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Ventricular fibrillation persists despite defibrillation and epinephrine. Which medication should the nurse anticipate?",
    choices: [
        "Amiodarone",
        "Warfarin",
        "Digoxin",
        "Diltiazem"
    ],
    answer:
        "Amiodarone",
    rationale:
        "Amiodarone may be used for refractory ventricular fibrillation or pulseless ventricular tachycardia.",
    takeaway:
        "Persistent VF/pulseless VT = amiodarone."
},

// ======================================================
// CASE 7 — PEA VS ASYSTOLE
// ======================================================

{
    id: "DYS-NGN-031",
    caseId: "DYS-NGN-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Pulseless Electrical Activity",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive and has no palpable pulse. The cardiac monitor displays an organized electrical rhythm. Which condition should the nurse identify?",
    choices: [
        "Pulseless electrical activity",
        "Ventricular fibrillation",
        "Stable sinus rhythm",
        "Atrial flutter"
    ],
    answer:
        "Pulseless electrical activity",
    rationale:
        "PEA occurs when organized electrical activity is present without effective mechanical cardiac contraction or a palpable pulse.",
    takeaway:
        "Organized electricity + no pulse = PEA."
},

{
    id: "DYS-NGN-032",
    caseId: "DYS-NGN-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Pulseless Electrical Activity",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which interventions should the nurse anticipate for PEA? Select all that apply.",
    choices: [
        "High-quality CPR",
        "Epinephrine",
        "Search for reversible causes",
        "Evaluate the H's and T's",
        "Immediate defibrillation",
        "Synchronized cardioversion"
    ],
    answer: [
        "High-quality CPR",
        "Epinephrine",
        "Search for reversible causes",
        "Evaluate the H's and T's"
    ],
    rationale:
        "PEA is non-shockable. Treatment focuses on CPR, epinephrine, and correction of reversible causes.",
    takeaway:
        "PEA = CPR + epi + cause."
},

{
    id: "DYS-NGN-033",
    caseId: "DYS-NGN-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Asystole",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor later appears to show a flat line. Which action should the nurse take before concluding that the client is in asystole?",
    choices: [
        "Verify the client, electrodes, and lead connections.",
        "Defibrillate immediately.",
        "Administer adenosine.",
        "Perform synchronized cardioversion."
    ],
    answer:
        "Verify the client, electrodes, and lead connections.",
    rationale:
        "Artifact or lead disconnection can mimic a lethal rhythm. The nurse should verify the patient and equipment.",
    takeaway:
        "Confirm asystole before treating it."
},

{
    id: "DYS-NGN-034",
    caseId: "DYS-NGN-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Asystole",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Asystole is confirmed. Which intervention should the nurse anticipate?",
    choices: [
        "Continue CPR, administer epinephrine, and treat reversible causes.",
        "Defibrillate repeatedly.",
        "Administer adenosine.",
        "Perform synchronized cardioversion."
    ],
    answer:
        "Continue CPR, administer epinephrine, and treat reversible causes.",
    rationale:
        "Asystole is a non-shockable rhythm.",
    takeaway:
        "Asystole = no shock."
},

{
    id: "DYS-NGN-035",
    caseId: "DYS-NGN-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Arrest Rhythms",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which statements correctly compare cardiac arrest rhythms? Select all that apply.",
    choices: [
        "V-fib is shockable.",
        "Pulseless VT is shockable.",
        "PEA is non-shockable.",
        "Asystole is non-shockable.",
        "All four rhythms require assessment for reversible causes.",
        "Asystole should be defibrillated."
    ],
    answer: [
        "V-fib is shockable.",
        "Pulseless VT is shockable.",
        "PEA is non-shockable.",
        "Asystole is non-shockable.",
        "All four rhythms require assessment for reversible causes."
    ],
    rationale:
        "VF and pulseless VT are shockable; PEA and asystole are not.",
    takeaway:
        "Shock = VF/pVT. No shock = PEA/asystole."
},

// ======================================================
// CASE 8 — DIGOXIN TOXICITY
// ======================================================

{
    id: "DYS-NGN-036",
    caseId: "DYS-NGN-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Digoxin Toxicity",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client taking digoxin reports nausea, decreased appetite, and yellow-green visual halos. HR is 52/min. Which complication should the nurse suspect?",
    choices: [
        "Digoxin toxicity",
        "Expected therapeutic response",
        "Adenosine reaction",
        "Warfarin toxicity"
    ],
    answer:
        "Digoxin toxicity",
    rationale:
        "GI symptoms, visual disturbances, and bradycardia are classic warning findings emphasized for digoxin toxicity.",
    takeaway:
        "GI + vision + slow pulse = think digoxin."
},

{
    id: "DYS-NGN-037",
    caseId: "DYS-NGN-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Digoxin Toxicity",
    style: "NGN SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings support the nurse's concern for digoxin toxicity? Select all that apply.",
    choices: [
        "Nausea",
        "Loss of appetite",
        "Yellow-green visual changes",
        "HR 52/min",
        "New dysrhythmia",
        "Potassium 3.0 mEq/L"
    ],
    answer: [
        "Nausea",
        "Loss of appetite",
        "Yellow-green visual changes",
        "HR 52/min",
        "New dysrhythmia",
        "Potassium 3.0 mEq/L"
    ],
    rationale:
        "The lecture emphasizes GI symptoms, visual changes, bradycardia, dysrhythmias, and hypokalemia as important toxicity cues.",
    takeaway:
        "Low potassium increases concern with digoxin."
},

{
    id: "DYS-NGN-038",
    caseId: "DYS-NGN-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Digoxin Toxicity",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The client is due for the next dose of digoxin. Which action should the nurse take?",
    choices: [
        "Hold the medication and notify the provider.",
        "Administer the medication as scheduled.",
        "Double the medication dose.",
        "Give the medication with adenosine."
    ],
    answer:
        "Hold the medication and notify the provider.",
    rationale:
        "The client's HR is below 60/min and the assessment findings suggest toxicity.",
    takeaway:
        "Digoxin + HR <60/toxicity signs = hold."
},

{
    id: "DYS-NGN-039",
    caseId: "DYS-NGN-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Digoxin Toxicity",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication may be used for severe digoxin toxicity?",
    choices: [
        "Digoxin immune Fab",
        "Vitamin K",
        "Idarucizumab",
        "Andexanet alfa"
    ],
    answer:
        "Digoxin immune Fab",
    rationale:
        "Digoxin immune Fab is the reversal treatment identified for severe digoxin toxicity.",
    takeaway:
        "Severe digoxin toxicity = digoxin immune Fab."
},

{
    id: "DYS-NGN-040",
    caseId: "DYS-NGN-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia NGN Cases",
    subtopic: "Digoxin Toxicity",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding after treatment best indicates improvement?",
    choices: [
        "HR 72/min with resolution of nausea and visual changes",
        "HR 44/min with continued visual halos",
        "New ventricular dysrhythmias",
        "Increasing nausea and confusion"
    ],
    answer:
        "HR 72/min with resolution of nausea and visual changes",
    rationale:
        "Resolution of the bradycardia and toxicity symptoms indicates improvement.",
    takeaway:
        "Reassess both rhythm and symptoms after treatment."
}

];
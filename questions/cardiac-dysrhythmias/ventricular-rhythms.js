const ventricularRhythmQuestions = [

{
    id: "VENT-001",
    caseId: "VENT-CASE-001",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Premature Ventricular Contractions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with a premature ventricular contraction (PVC)?",
    choices: [
        "An early wide QRS complex with no preceding P wave",
        "An early beat with a different P wave and narrow QRS",
        "An irregularly irregular rhythm with absent P waves",
        "Sawtooth atrial waves"
    ],
    answer:
        "An early wide QRS complex with no preceding P wave",
    rationale:
        "PVCs originate in the ventricles. They occur early, usually have no preceding P wave, and produce a wide, abnormal QRS complex followed by a compensatory pause.",
    takeaway:
        "PVC = early + wide QRS + no P wave."
},

{
    id: "VENT-002",
    caseId: "VENT-CASE-002",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Premature Ventricular Contractions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG characteristics are associated with PVCs? Select all that apply.",
    choices: [
        "No preceding P wave",
        "Wide QRS complex",
        "Premature occurrence",
        "Compensatory pause",
        "Always narrow QRS",
        "Always preceded by a normal P wave"
    ],
    answer: [
        "No preceding P wave",
        "Wide QRS complex",
        "Premature occurrence",
        "Compensatory pause"
    ],
    rationale:
        "PVCs are premature ventricular beats with no preceding P wave, a wide abnormal QRS complex, and a compensatory pause.",
    takeaway:
        "PVCs are premature ventricular beats with wide QRS complexes."
},

{
    id: "VENT-003",
    caseId: "VENT-CASE-003",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What does the term unifocal PVC mean?",
    choices: [
        "PVCs originate from one ventricular focus",
        "PVCs originate from multiple ventricular foci",
        "Every other beat is a PVC",
        "Three PVCs occur in a row"
    ],
    answer:
        "PVCs originate from one ventricular focus",
    rationale:
        "Unifocal PVCs originate from a single ventricular pacemaker site and therefore usually have the same appearance.",
    takeaway:
        "Unifocal = one ventricular focus."
},

{
    id: "VENT-004",
    caseId: "VENT-CASE-004",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What does multifocal PVC mean?",
    choices: [
        "PVCs originate from multiple ventricular foci",
        "PVCs originate from one atrial focus",
        "Every second beat is normal",
        "The rhythm is always ventricular fibrillation"
    ],
    answer:
        "PVCs originate from multiple ventricular foci",
    rationale:
        "Multifocal PVCs arise from more than one ventricular pacemaker site and may have different shapes.",
    takeaway:
        "Multifocal = multiple ventricular foci."
},

{
    id: "VENT-005",
    caseId: "VENT-CASE-005",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which term describes two PVCs occurring consecutively?",
    choices: [
        "Couplet",
        "Bigeminy",
        "Trigeminy",
        "Atrial flutter"
    ],
    answer:
        "Couplet",
    rationale:
        "The lecture defines a couplet as two PVCs occurring in a row.",
    takeaway:
        "2 PVCs in a row = couplet."
},

{
    id: "VENT-006",
    caseId: "VENT-CASE-006",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which term describes a PVC occurring every other beat?",
    choices: [
        "Bigeminy",
        "Trigeminy",
        "Couplet",
        "Junctional rhythm"
    ],
    answer:
        "Bigeminy",
    rationale:
        "Bigeminy means every other beat is a PVC.",
    takeaway:
        "Bigeminy = PVC every other beat."
},

{
    id: "VENT-007",
    caseId: "VENT-CASE-007",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which term describes a PVC occurring every third beat?",
    choices: [
        "Trigeminy",
        "Bigeminy",
        "Couplet",
        "Atrial fibrillation"
    ],
    answer:
        "Trigeminy",
    rationale:
        "Trigeminy means every third beat is a PVC.",
    takeaway:
        "Trigeminy = PVC every third beat."
},

{
    id: "VENT-008",
    caseId: "VENT-CASE-008",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why are frequent PVCs especially concerning in a client with an acute myocardial infarction?",
    choices: [
        "They may trigger ventricular tachycardia or ventricular fibrillation",
        "They always convert to normal sinus rhythm",
        "They eliminate myocardial oxygen demand",
        "They prevent all ventricular contraction"
    ],
    answer:
        "They may trigger ventricular tachycardia or ventricular fibrillation",
    rationale:
        "The lecture specifically warns that PVCs occurring with acute MI can trigger more dangerous ventricular rhythms such as VT or VF.",
    takeaway:
        "PVCs + acute MI = increased risk for VT/VF."
},

{
    id: "VENT-009",
    caseId: "VENT-CASE-009",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Causes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which factors can contribute to PVCs? Select all that apply.",
    choices: [
        "Hypoxia",
        "Myocardial infarction",
        "Cardiomyopathy",
        "Electrolyte imbalance",
        "Excessive stimulant use",
        "Recreational drug use"
    ],
    answer: [
        "Hypoxia",
        "Myocardial infarction",
        "Cardiomyopathy",
        "Electrolyte imbalance",
        "Excessive stimulant use",
        "Recreational drug use"
    ],
    rationale:
        "The lecture lists hypoxia, MI, cardiomyopathy, electrolyte abnormalities, stimulant use, hypertension, and recreational drug use as causes of PVCs.",
    takeaway:
        "PVCs often signal ventricular irritability—look for the cause."
},

{
    id: "VENT-010",
    caseId: "VENT-CASE-010",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PVC Assessment",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has frequent PVCs on the monitor. Which assessment is especially important according to the lecture?",
    choices: [
        "Determine whether the premature beats are producing peripheral pulses",
        "Count only the P waves",
        "Ignore the rhythm if the client is awake",
        "Immediately prepare for permanent pacing"
    ],
    answer:
        "Determine whether the premature beats are producing peripheral pulses",
    rationale:
        "The lecture instructs the nurse to assess whether premature ventricular complexes actually perfuse to the extremities.",
    takeaway:
        "A PVC on the monitor does not guarantee a perfusing beat."
},

{
    id: "VENT-011",
    caseId: "VENT-CASE-011",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with ventricular tachycardia?",
    choices: [
        "Three or more consecutive wide ventricular complexes at a rapid rate",
        "One premature atrial beat",
        "Irregularly irregular rhythm without P waves",
        "Regular rhythm at 50 beats/min with inverted P waves"
    ],
    answer:
        "Three or more consecutive wide ventricular complexes at a rapid rate",
    rationale:
        "The lecture defines ventricular tachycardia as three or more PVCs in a row with wide QRS complexes and a rapid ventricular rate.",
    takeaway:
        "3+ PVCs in a row = VT."
},

{
    id: "VENT-012",
    caseId: "VENT-CASE-012",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG findings are associated with ventricular tachycardia? Select all that apply.",
    choices: [
        "Wide QRS complexes",
        "Usually no identifiable P waves",
        "Ventricular rate often greater than 150 beats/min",
        "Three or more PVCs in a row",
        "Always narrow QRS complexes",
        "Normal P wave before every QRS"
    ],
    answer: [
        "Wide QRS complexes",
        "Usually no identifiable P waves",
        "Ventricular rate often greater than 150 beats/min",
        "Three or more PVCs in a row"
    ],
    rationale:
        "VT is a rapid ventricular rhythm made up of three or more consecutive ventricular complexes, usually with wide QRS morphology and absent identifiable P waves.",
    takeaway:
        "VT = fast + wide + ventricular."
},

{
    id: "VENT-013",
    caseId: "VENT-CASE-013",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor displays ventricular tachycardia. What is the nurse's most important immediate assessment?",
    choices: [
        "Determine whether the client has a pulse",
        "Determine whether P waves are upright",
        "Ask when the client last ate",
        "Measure the PR interval first"
    ],
    answer:
        "Determine whether the client has a pulse",
    rationale:
        "The treatment of ventricular tachycardia depends critically on whether a pulse is present.",
    takeaway:
        "VT? First question: Is there a pulse?"
},

{
    id: "VENT-014",
    caseId: "VENT-CASE-014",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia With Pulse",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has ventricular tachycardia with a pulse. Which treatment options are identified in the lecture?",
    choices: [
        "Amiodarone, cardioversion, and correction of electrolyte abnormalities",
        "CPR and defibrillation only",
        "Atropine and pacing",
        "Adenosine only"
    ],
    answer:
        "Amiodarone, cardioversion, and correction of electrolyte abnormalities",
    rationale:
        "The lecture lists amiodarone, synchronized cardioversion, and electrolyte replacement for VT with a pulse.",
    takeaway:
        "VT with pulse: antiarrhythmic, cardioversion if needed, fix electrolytes."
},

{
    id: "VENT-015",
    caseId: "VENT-CASE-015",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia With Pulse",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has VT with a pulse, BP 74/42 mm Hg, chest pain, and altered level of consciousness. Which intervention should the nurse anticipate?",
    choices: [
        "Synchronized cardioversion",
        "Routine monitoring only",
        "Atropine",
        "No treatment because a pulse is present"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "A client with VT and a pulse who is hemodynamically unstable requires urgent synchronized cardioversion.",
    takeaway:
        "Unstable VT with pulse = synchronized cardioversion."
},

{
    id: "VENT-016",
    caseId: "VENT-CASE-016",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Pulseless Ventricular Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive and the monitor shows ventricular tachycardia. No pulse is present. Which intervention is the priority?",
    choices: [
        "Begin CPR and prepare for defibrillation",
        "Administer atropine",
        "Attempt vagal maneuvers",
        "Prepare for synchronized cardioversion only"
    ],
    answer:
        "Begin CPR and prepare for defibrillation",
    rationale:
        "Pulseless VT is a shockable cardiac arrest rhythm. The lecture emphasizes CPR followed by rapid defibrillation.",
    takeaway:
        "Pulseless VT = CPR + defibrillation."
},

{
    id: "VENT-017",
    caseId: "VENT-CASE-017",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Pulseless Ventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which epinephrine dose does the lecture identify for pulseless VT during cardiac arrest?",
    choices: [
        "1 mg IV every 3 to 5 minutes",
        "6 mg rapid IV push once",
        "0.5 mg IV every 30 minutes",
        "300 mg IV every minute"
    ],
    answer:
        "1 mg IV every 3 to 5 minutes",
    rationale:
        "The lecture identifies epinephrine 1 mg IV every 3 to 5 minutes during cardiac arrest.",
    takeaway:
        "Cardiac arrest epi = 1 mg every 3–5 min."
},

{
    id: "VENT-018",
    caseId: "VENT-CASE-018",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Pulseless Ventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which amiodarone dosing sequence does the lecture identify for pulseless VT?",
    choices: [
        "300 mg IV first dose, then 150 mg",
        "6 mg then 12 mg",
        "1 mg every 3 to 5 minutes",
        "2 g every 5 minutes"
    ],
    answer:
        "300 mg IV first dose, then 150 mg",
    rationale:
        "The lecture lists amiodarone 300 mg IV as the first dose, followed by 150 mg for refractory pulseless VT or VF.",
    takeaway:
        "Pulseless VT/VF amiodarone = 300 mg, then 150 mg."
},

{
    id: "VENT-019",
    caseId: "VENT-CASE-019",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG description is most consistent with ventricular fibrillation?",
    choices: [
        "Chaotic quivering waveform with no identifiable P waves or QRS complexes",
        "Regular rhythm with P waves before every QRS",
        "Sawtooth waves with a regular ventricular response",
        "Narrow-complex rhythm at 180 beats/min"
    ],
    answer:
        "Chaotic quivering waveform with no identifiable P waves or QRS complexes",
    rationale:
        "V-fib produces chaotic electrical activity without organized atrial or ventricular complexes and results in no effective cardiac output.",
    takeaway:
        "V-fib = chaotic quivering + no cardiac output."
},

{
    id: "VENT-020",
    caseId: "VENT-CASE-020",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is pulseless and the monitor shows ventricular fibrillation. Which intervention should occur immediately?",
    choices: [
        "Begin CPR and defibrillate as soon as possible",
        "Administer atropine and wait for a response",
        "Perform vagal maneuvers",
        "Prepare for synchronized cardioversion"
    ],
    answer:
        "Begin CPR and defibrillate as soon as possible",
    rationale:
        "Ventricular fibrillation is a lethal, shockable rhythm with no cardiac output. Immediate CPR and rapid defibrillation are essential.",
    takeaway:
        "V-fib = CPR + DEFIBRILLATE."
},

{
    id: "VENT-021",
    caseId: "VENT-CASE-021",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why is ventricular fibrillation immediately life-threatening?",
    choices: [
        "The ventricles quiver instead of producing effective cardiac output",
        "The atria contract too strongly",
        "The rhythm increases ventricular filling",
        "The SA node fires too slowly"
    ],
    answer:
        "The ventricles quiver instead of producing effective cardiac output",
    rationale:
        "In V-fib, chaotic ventricular electrical activity prevents coordinated contraction, resulting in no effective cardiac output.",
    takeaway:
        "V-fib means no pump, no pulse, no perfusion."
},

{
    id: "VENT-022",
    caseId: "VENT-CASE-022",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythms are identified as shockable in the lecture?",
    choices: [
        "Ventricular fibrillation and pulseless ventricular tachycardia",
        "Asystole and PEA",
        "Sinus bradycardia and junctional rhythm",
        "Atrial fibrillation and atrial flutter"
    ],
    answer:
        "Ventricular fibrillation and pulseless ventricular tachycardia",
    rationale:
        "The lecture identifies V-fib and pulseless VT as the two shockable cardiac arrest rhythms.",
    takeaway:
        "Shockable = VF + pulseless VT."
},

{
    id: "VENT-023",
    caseId: "VENT-CASE-023",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "What should the nurse do immediately after defibrillating a client in ventricular fibrillation?",
    choices: [
        "Resume CPR immediately",
        "Wait several minutes before restarting compressions",
        "Administer oral medications",
        "Check a complete set of vital signs before resuming CPR"
    ],
    answer:
        "Resume CPR immediately",
    rationale:
        "The lecture emphasizes resuming chest compressions immediately after the shock to minimize interruptions in perfusion.",
    takeaway:
        "Shock → immediately resume CPR."
},

{
    id: "VENT-024",
    caseId: "VENT-CASE-024",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG description is most characteristic of torsades de pointes?",
    choices: [
        "Wide polymorphic complexes that appear to twist around the baseline",
        "Regular narrow-complex rhythm with upright P waves",
        "Flat line with no electrical activity",
        "Sawtooth flutter waves"
    ],
    answer:
        "Wide polymorphic complexes that appear to twist around the baseline",
    rationale:
        "Torsades de pointes is a polymorphic ventricular tachycardia with QRS complexes that appear to twist around the baseline.",
    takeaway:
        "Torsades = twisting wide complexes."
},

{
    id: "VENT-025",
    caseId: "VENT-CASE-025",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication is identified in the lecture as the drug of choice for torsades de pointes?",
    choices: [
        "Magnesium sulfate",
        "Atropine",
        "Adenosine",
        "Digoxin"
    ],
    answer:
        "Magnesium sulfate",
    rationale:
        "The lecture specifically identifies magnesium sulfate as the drug of choice for torsades de pointes.",
    takeaway:
        "Torsades = magnesium."
},

{
    id: "VENT-026",
    caseId: "VENT-CASE-026",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which electrolyte abnormalities can contribute to torsades de pointes? Select all that apply.",
    choices: [
        "Hypokalemia",
        "Hypomagnesemia",
        "Hypocalcemia",
        "Hypernatremia only",
        "Normal magnesium level"
    ],
    answer: [
        "Hypokalemia",
        "Hypomagnesemia",
        "Hypocalcemia"
    ],
    rationale:
        "The lecture lists low potassium, magnesium, and calcium as reversible causes of torsades.",
    takeaway:
        "Torsades loves low K, low Mg, and low Ca."
},

{
    id: "VENT-027",
    caseId: "VENT-CASE-027",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications listed in the lecture can prolong the QT interval and increase the risk for torsades? Select all that apply.",
    choices: [
        "Amiodarone",
        "Erythromycin",
        "Haloperidol",
        "Levofloxacin",
        "Atropine"
    ],
    answer: [
        "Amiodarone",
        "Erythromycin",
        "Haloperidol",
        "Levofloxacin"
    ],
    rationale:
        "The lecture identifies these medications as QT-prolonging drugs that may contribute to torsades.",
    takeaway:
        "QT-prolonging meds can trigger torsades."
},

{
    id: "VENT-028",
    caseId: "VENT-CASE-028",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops torsades while receiving a QT-prolonging medication. Which actions should the nurse anticipate?",
    choices: [
        "Stop the offending medication, give magnesium, and correct electrolyte abnormalities",
        "Administer adenosine and continue the medication",
        "Give atropine and increase the medication dose",
        "Ignore the rhythm if a pulse is present"
    ],
    answer:
        "Stop the offending medication, give magnesium, and correct electrolyte abnormalities",
    rationale:
        "The lecture identifies stopping QT-prolonging drugs, administering magnesium sulfate, and correcting electrolyte abnormalities as key treatment steps.",
    takeaway:
        "Torsades treatment = stop trigger + magnesium + fix electrolytes."
},

{
    id: "VENT-029",
    caseId: "VENT-CASE-029",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Asystole",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with asystole?",
    choices: [
        "Flat line with no electrical activity",
        "Chaotic quivering ventricular activity",
        "Wide regular complexes at 180 beats/min",
        "Sawtooth flutter waves"
    ],
    answer:
        "Flat line with no electrical activity",
    rationale:
        "Asystole represents absence of detectable cardiac electrical activity and appears as a flat line.",
    takeaway:
        "Asystole = no electrical activity."
},

{
    id: "VENT-030",
    caseId: "VENT-CASE-030",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Asystole",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which treatment is appropriate for asystole according to the lecture?",
    choices: [
        "CPR, epinephrine, and treatment of reversible causes",
        "Immediate defibrillation",
        "Synchronized cardioversion",
        "Adenosine"
    ],
    answer:
        "CPR, epinephrine, and treatment of reversible causes",
    rationale:
        "Asystole is non-shockable. Treatment centers on CPR, epinephrine, and identifying and correcting reversible causes.",
    takeaway:
        "Asystole = CPR + epi + H's and T's. Do NOT shock."
},
{
    id: "VENT-031",
    caseId: "VENT-CASE-031",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Pulseless Electrical Activity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which description best defines pulseless electrical activity (PEA)?",
    choices: [
        "Organized electrical activity on the monitor without a palpable pulse",
        "A flat line with no electrical activity",
        "Chaotic ventricular activity with no organized complexes",
        "A regular narrow-complex rhythm with a strong pulse"
    ],
    answer:
        "Organized electrical activity on the monitor without a palpable pulse",
    rationale:
        "PEA occurs when electrical activity is present on the monitor, but the heart is not producing a pulse or effective cardiac output.",
    takeaway:
        "PEA = electrical activity without mechanical perfusion."
},

{
    id: "VENT-032",
    caseId: "VENT-CASE-032",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Pulseless Electrical Activity",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has organized electrical activity on the monitor but no palpable pulse. Which action is the priority?",
    choices: [
        "Begin CPR and administer epinephrine as prescribed",
        "Defibrillate immediately",
        "Administer adenosine",
        "Perform synchronized cardioversion"
    ],
    answer:
        "Begin CPR and administer epinephrine as prescribed",
    rationale:
        "PEA is a non-shockable cardiac arrest rhythm. Treatment includes CPR, epinephrine, and correction of reversible causes.",
    takeaway:
        "PEA = CPR + epi + treat the cause."
},

{
    id: "VENT-033",
    caseId: "VENT-CASE-033",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Shockable vs Non-Shockable",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which cardiac arrest rhythms are non-shockable? Select all that apply.",
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
        "The lecture identifies asystole and PEA as non-shockable rhythms. Ventricular fibrillation and pulseless VT are shockable.",
    takeaway:
        "Non-shockable = asystole + PEA."
},

{
    id: "VENT-034",
    caseId: "VENT-CASE-034",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Shockable vs Non-Shockable",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythm-treatment pairings are correct? Select all that apply.",
    choices: [
        "V-Fib — defibrillation",
        "Pulseless VT — defibrillation",
        "Asystole — CPR and epinephrine",
        "PEA — CPR and epinephrine",
        "Asystole — immediate defibrillation",
        "PEA — synchronized cardioversion"
    ],
    answer: [
        "V-Fib — defibrillation",
        "Pulseless VT — defibrillation",
        "Asystole — CPR and epinephrine",
        "PEA — CPR and epinephrine"
    ],
    rationale:
        "V-Fib and pulseless VT are shockable. Asystole and PEA are non-shockable and are managed with CPR, epinephrine, and treatment of reversible causes.",
    takeaway:
        "Know the shockable vs non-shockable split cold."
},

{
    id: "VENT-035",
    caseId: "VENT-CASE-035",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "H's and T's",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which reversible causes are included among the H's and T's in the lecture? Select all that apply.",
    choices: [
        "Hypovolemia",
        "Hypoxia",
        "Hypothermia",
        "Hypokalemia or hyperkalemia",
        "Toxins",
        "Cardiac tamponade",
        "Pulmonary embolism",
        "Myocardial infarction"
    ],
    answer: [
        "Hypovolemia",
        "Hypoxia",
        "Hypothermia",
        "Hypokalemia or hyperkalemia",
        "Toxins",
        "Cardiac tamponade",
        "Pulmonary embolism",
        "Myocardial infarction"
    ],
    rationale:
        "The lecture includes these reversible causes when discussing ventricular arrest rhythms and treatment.",
    takeaway:
        "In arrest, always search for reversible causes."
},

{
    id: "VENT-036",
    caseId: "VENT-CASE-036",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has a wide-complex rhythm at 180 beats/min and is awake with a palpable pulse. What should the nurse determine next?",
    choices: [
        "Whether the client is hemodynamically stable",
        "Whether the rhythm should automatically be defibrillated",
        "Whether the client needs atropine",
        "Whether the client has a normal P wave"
    ],
    answer:
        "Whether the client is hemodynamically stable",
    rationale:
        "VT with a pulse is treated based on stability. The nurse should assess for hypotension, chest pain, altered level of consciousness, and other signs of poor perfusion.",
    takeaway:
        "VT with pulse: next question is stable or unstable?"
},

{
    id: "VENT-037",
    caseId: "VENT-CASE-037",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings suggest that VT with a pulse is hemodynamically unstable? Select all that apply.",
    choices: [
        "Hypotension",
        "Chest pain",
        "Altered level of consciousness",
        "Syncope",
        "Shortness of breath",
        "Stable blood pressure with no symptoms"
    ],
    answer: [
        "Hypotension",
        "Chest pain",
        "Altered level of consciousness",
        "Syncope",
        "Shortness of breath"
    ],
    rationale:
        "These findings indicate reduced cardiac output and tissue perfusion and support urgent intervention.",
    takeaway:
        "Unstable VT = symptoms of poor perfusion."
},

{
    id: "VENT-038",
    caseId: "VENT-CASE-038",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Monomorphic vs Polymorphic VT",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes monomorphic ventricular tachycardia?",
    choices: [
        "The ventricular complexes have a similar shape because they arise from one focus",
        "The QRS complexes twist around the baseline",
        "The rhythm has normal P waves before each QRS",
        "The rhythm is always atrial in origin"
    ],
    answer:
        "The ventricular complexes have a similar shape because they arise from one focus",
    rationale:
        "The lecture describes monomorphic VT as originating from one ventricular pacemaker focus, producing similar-looking ventricular complexes.",
    takeaway:
        "Monomorphic = one ventricular focus, similar-looking complexes."
},

{
    id: "VENT-039",
    caseId: "VENT-CASE-039",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Polymorphic VT",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes polymorphic ventricular tachycardia?",
    choices: [
        "The ventricular complexes vary in shape because more than one ventricular focus may be involved",
        "The rhythm always has narrow QRS complexes",
        "The P waves are normal and regular",
        "It is another name for sinus tachycardia"
    ],
    answer:
        "The ventricular complexes vary in shape because more than one ventricular focus may be involved",
    rationale:
        "Polymorphic VT has changing QRS morphology and may arise from multiple ventricular foci. Torsades is a specific polymorphic form.",
    takeaway:
        "Polymorphic = changing ventricular morphology."
},

{
    id: "VENT-040",
    caseId: "VENT-CASE-040",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has a prolonged QT interval and then develops a twisting polymorphic ventricular rhythm. Which rhythm should the nurse identify?",
    choices: [
        "Torsades de pointes",
        "Atrial flutter",
        "Junctional tachycardia",
        "Normal sinus rhythm"
    ],
    answer:
        "Torsades de pointes",
    rationale:
        "Torsades is a polymorphic VT associated with a prolonged QT interval and a characteristic twisting appearance.",
    takeaway:
        "Prolonged QT + twisting polymorphic VT = torsades."
},

{
    id: "VENT-041",
    caseId: "VENT-CASE-041",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Torsades de Pointes",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with torsades becomes hypotensive and unresponsive but still has a pulse. Which intervention should the nurse anticipate according to the lecture?",
    choices: [
        "Electrical cardioversion",
        "No treatment until the rhythm ends",
        "Atropine",
        "Vagal maneuvers"
    ],
    answer:
        "Electrical cardioversion",
    rationale:
        "The lecture identifies electrical cardioversion for unstable torsades in addition to magnesium and correction of the underlying cause.",
    takeaway:
        "Unstable torsades may require electrical cardioversion."
},

{
    id: "VENT-042",
    caseId: "VENT-CASE-042",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "What is the most important reason to minimize interruptions in chest compressions during ventricular fibrillation?",
    choices: [
        "Continuous compressions help maintain coronary and cerebral perfusion",
        "Interruptions increase atrial contraction",
        "Interruptions make P waves easier to identify",
        "Continuous compressions convert every rhythm to sinus rhythm"
    ],
    answer:
        "Continuous compressions help maintain coronary and cerebral perfusion",
    rationale:
        "The lecture emphasizes minimizing interruptions in chest compressions during cardiac arrest to support perfusion until circulation is restored.",
    takeaway:
        "During arrest, keep blood moving."
},

{
    id: "VENT-043",
    caseId: "VENT-CASE-043",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Ventricular Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Clinical Judgment",
    question:
        "How often should compressors switch during CPR according to the lecture?",
    choices: [
        "Every 2 minutes",
        "Every 10 minutes",
        "Every 30 seconds",
        "Only when the rhythm converts"
    ],
    answer:
        "Every 2 minutes",
    rationale:
        "The lecture recommends switching compressors every 2 minutes to reduce fatigue and maintain high-quality compressions.",
    takeaway:
        "Switch compressors every 2 minutes."
},

{
    id: "VENT-044",
    caseId: "VENT-CASE-044",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Asystole",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor appears to show asystole. Which action should the nurse take before concluding that the rhythm is true asystole?",
    choices: [
        "Assess the client and verify the monitor leads and connections",
        "Defibrillate immediately",
        "Administer adenosine",
        "Prepare for synchronized cardioversion"
    ],
    answer:
        "Assess the client and verify the monitor leads and connections",
    rationale:
        "The lecture's golden rule is to treat the patient, not the monitor. Equipment problems or lead disconnection can mimic lethal rhythms.",
    takeaway:
        "Always verify the patient and monitor before treating a flat line."
},

{
    id: "VENT-045",
    caseId: "VENT-CASE-045",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "PEA",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Why is PEA considered a cardiac arrest rhythm even though organized electrical activity is visible?",
    choices: [
        "There is no effective mechanical contraction producing a pulse",
        "The electrical activity is always normal sinus rhythm",
        "The atria are contracting too forcefully",
        "The QRS is too narrow"
    ],
    answer:
        "There is no effective mechanical contraction producing a pulse",
    rationale:
        "PEA reflects a disconnect between electrical activity and mechanical pumping. Without a pulse, there is no effective cardiac output.",
    takeaway:
        "Electrical activity does not equal perfusion."
},

{
    id: "VENT-046",
    caseId: "VENT-CASE-046",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with VT at 190/min who is unresponsive and pulseless",
        "A client with occasional PVCs and stable vital signs",
        "A client with bigeminy and no symptoms",
        "A client with one isolated PVC after drinking coffee"
    ],
    answer:
        "A client with VT at 190/min who is unresponsive and pulseless",
    rationale:
        "Pulseless VT is a cardiac arrest rhythm requiring immediate CPR and defibrillation.",
    takeaway:
        "Pulseless VT is an immediate resuscitation emergency."
},

{
    id: "VENT-047",
    caseId: "VENT-CASE-047",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client requires the most immediate intervention?",
    choices: [
        "A client in ventricular fibrillation with no pulse",
        "A client with stable VT and a pulse",
        "A client with isolated PVCs",
        "A client with asymptomatic ventricular bigeminy"
    ],
    answer:
        "A client in ventricular fibrillation with no pulse",
    rationale:
        "V-fib results in no cardiac output and requires immediate CPR and defibrillation.",
    takeaway:
        "V-fib is always a lethal arrest rhythm until treated."
},

{
    id: "VENT-048",
    caseId: "VENT-CASE-048",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse observes a wide-complex tachycardia on the monitor. Which assessment takes priority?",
    choices: [
        "Check responsiveness and pulse",
        "Measure the PR interval",
        "Ask about caffeine intake first",
        "Count the P waves for a full minute before approaching the client"
    ],
    answer:
        "Check responsiveness and pulse",
    rationale:
        "A wide-complex tachycardia may represent VT. Immediate treatment depends on whether the client is responsive and whether a pulse is present.",
    takeaway:
        "Wide fast rhythm? Go to the patient and check the pulse."
},

{
    id: "VENT-049",
    caseId: "VENT-CASE-049",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which statements about ventricular dysrhythmias are correct? Select all that apply.",
    choices: [
        "A wide QRS can suggest ventricular origin.",
        "PVCs may progress to VT or VF in high-risk situations.",
        "Pulseless VT is shockable.",
        "V-fib is shockable.",
        "Asystole is non-shockable.",
        "PEA is non-shockable."
    ],
    answer: [
        "A wide QRS can suggest ventricular origin.",
        "PVCs may progress to VT or VF in high-risk situations.",
        "Pulseless VT is shockable.",
        "V-fib is shockable.",
        "Asystole is non-shockable.",
        "PEA is non-shockable."
    ],
    rationale:
        "These are core ventricular-rhythm concepts emphasized throughout the lecture.",
    takeaway:
        "Recognize the rhythm, check for a pulse, then know whether it is shockable."
},

{
    id: "VENT-050",
    caseId: "VENT-CASE-050",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client suddenly becomes unresponsive. The monitor shows a wide regular rhythm at 190 beats/min. No pulse is palpable. Which sequence best reflects the immediate treatment priority?",
    choices: [
        "Start CPR → prepare to defibrillate → continue cardiac arrest medications and reassessment",
        "Administer atropine → wait for heart rate increase → ambulate",
        "Perform vagal maneuvers → administer adenosine → discharge",
        "Synchronized cardioversion → hold CPR → reassess in 30 minutes"
    ],
    answer:
        "Start CPR → prepare to defibrillate → continue cardiac arrest medications and reassessment",
    rationale:
        "The client has pulseless VT, a shockable cardiac arrest rhythm. Immediate CPR and defibrillation are followed by ongoing ACLS interventions.",
    takeaway:
        "Pulseless VT: CPR + shock + ACLS."
},

{
    id: "VENT-051",
    caseId: "VENT-CASE-051",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive with no pulse. The monitor shows a chaotic quivering waveform with no identifiable QRS complexes. Which rhythm and intervention are correct?",
    choices: [
        "Ventricular fibrillation; begin CPR and defibrillate",
        "Asystole; synchronized cardioversion",
        "PEA; defibrillate immediately",
        "SVT; administer adenosine"
    ],
    answer:
        "Ventricular fibrillation; begin CPR and defibrillate",
    rationale:
        "Chaotic quivering electrical activity with no pulse is ventricular fibrillation, which requires immediate CPR and defibrillation.",
    takeaway:
        "V-fib = no organized complexes + no pulse + shock."
},

{
    id: "VENT-052",
    caseId: "VENT-CASE-052",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is unresponsive and pulseless. The monitor shows an organized rhythm at 72 beats/min. Which interpretation and intervention are most appropriate?",
    choices: [
        "PEA; begin CPR, give epinephrine, and search for reversible causes",
        "Normal sinus rhythm; no treatment needed",
        "V-fib; immediately defibrillate",
        "SVT; administer adenosine"
    ],
    answer:
        "PEA; begin CPR, give epinephrine, and search for reversible causes",
    rationale:
        "Organized electrical activity without a pulse defines PEA. It is non-shockable and requires CPR, epinephrine, and correction of reversible causes.",
    takeaway:
        "A normal-looking monitor does not matter if there is no pulse."
},

{
    id: "VENT-053",
    caseId: "VENT-CASE-053",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client taking a QT-prolonging medication develops a twisting wide-complex rhythm at 210 beats/min. Laboratory results show potassium 2.9 mEq/L and magnesium below the expected range. Which intervention should the nurse anticipate?",
    choices: [
        "Stop the QT-prolonging drug, administer magnesium sulfate, and correct electrolytes",
        "Administer atropine",
        "Administer digoxin",
        "Encourage ambulation"
    ],
    answer:
        "Stop the QT-prolonging drug, administer magnesium sulfate, and correct electrolytes",
    rationale:
        "The rhythm is consistent with torsades. The lecture emphasizes stopping QT-prolonging medications, giving magnesium, and correcting potassium, magnesium, and calcium abnormalities.",
    takeaway:
        "Torsades is often reversible if you fix the QT trigger and electrolytes."
},

{
    id: "VENT-054",
    caseId: "VENT-CASE-054",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with an acute MI develops increasingly frequent PVCs, including a couplet and then three consecutive wide premature complexes. Which change should concern the nurse most?",
    choices: [
        "The rhythm may be progressing into ventricular tachycardia",
        "The client is developing sinus arrhythmia",
        "The client is converting to normal sinus rhythm",
        "The PVCs indicate improved coronary perfusion"
    ],
    answer:
        "The rhythm may be progressing into ventricular tachycardia",
    rationale:
        "Three consecutive PVCs constitute a run of VT, and the lecture specifically warns that ventricular ectopy during acute MI can progress to lethal ventricular rhythms.",
    takeaway:
        "Increasing ventricular ectopy after MI can be a warning before VT/VF."
},

{
    id: "VENT-055",
    caseId: "VENT-CASE-055",
    patient: randomPatient(),
    topic: "Ventricular Rhythms",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is reviewing ventricular rhythms. Which associations are correct? Select all that apply.",
    choices: [
        "PVC — premature wide QRS",
        "V-Tach — three or more consecutive ventricular complexes",
        "V-Fib — chaotic rhythm with no cardiac output",
        "Torsades — twisting polymorphic VT",
        "Asystole — no electrical activity",
        "PEA — electrical activity without a pulse"
    ],
    answer: [
        "PVC — premature wide QRS",
        "V-Tach — three or more consecutive ventricular complexes",
        "V-Fib — chaotic rhythm with no cardiac output",
        "Torsades — twisting polymorphic VT",
        "Asystole — no electrical activity",
        "PEA — electrical activity without a pulse"
    ],
    rationale:
        "These pairings summarize the major ventricular dysrhythmias presented in the lecture.",
    takeaway:
        "Recognize each ventricular rhythm by its signature feature."
}

];
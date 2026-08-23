const dysrhythmiaPharmacologyQuestions = [

{
    id: "DYS-PHARM-001",
    caseId: "DYS-PHARM-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Atropine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which client is the best candidate for atropine according to the lecture?",
    choices: [
        "A client with symptomatic sinus bradycardia and hypotension",
        "A client with stable SVT",
        "A client with torsades de pointes",
        "A client with ventricular fibrillation"
    ],
    answer:
        "A client with symptomatic sinus bradycardia and hypotension",
    rationale:
        "The lecture identifies atropine as first-line therapy for symptomatic bradycardia.",
    takeaway:
        "Atropine = symptomatic bradycardia."
},

{
    id: "DYS-PHARM-002",
    caseId: "DYS-PHARM-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Atropine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "How does atropine increase the heart rate?",
    choices: [
        "It blocks vagal stimulation",
        "It increases potassium excretion",
        "It blocks calcium channels",
        "It directly defibrillates the ventricles"
    ],
    answer:
        "It blocks vagal stimulation",
    rationale:
        "Atropine is an anticholinergic medication that blocks vagal effects, allowing the heart rate to increase.",
    takeaway:
        "Atropine blocks the vagus nerve."
},

{
    id: "DYS-PHARM-003",
    caseId: "DYS-PHARM-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Atropine",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which adverse effects are associated with atropine? Select all that apply.",
    choices: [
        "Tachycardia",
        "Dry mouth",
        "Urinary retention",
        "Blurred vision",
        "Confusion",
        "Mydriasis"
    ],
    answer: [
        "Tachycardia",
        "Dry mouth",
        "Urinary retention",
        "Blurred vision",
        "Confusion",
        "Mydriasis"
    ],
    rationale:
        "The lecture lists tachycardia, dry mouth, urinary retention, blurred vision, confusion, and pupil dilation as atropine adverse effects.",
    takeaway:
        "Atropine has classic anticholinergic effects."
},

{
    id: "DYS-PHARM-004",
    caseId: "DYS-PHARM-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Atropine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with symptomatic bradycardia remains hypotensive after atropine. Which intervention should the nurse anticipate next?",
    choices: [
        "Prepare for pacing",
        "Administer adenosine",
        "Administer magnesium sulfate",
        "Begin anticoagulation"
    ],
    answer:
        "Prepare for pacing",
    rationale:
        "The lecture states that pacing may be needed if atropine fails to improve symptomatic bradycardia.",
    takeaway:
        "Failed atropine + unstable bradycardia = pacing."
},

{
    id: "DYS-PHARM-005",
    caseId: "DYS-PHARM-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which dysrhythmia is adenosine primarily used to treat according to the lecture?",
    choices: [
        "Supraventricular tachycardia",
        "Sinus bradycardia",
        "Ventricular fibrillation",
        "Torsades de pointes"
    ],
    answer:
        "Supraventricular tachycardia",
    rationale:
        "The lecture identifies adenosine as first-line drug therapy for SVT after vagal maneuvers.",
    takeaway:
        "Adenosine = SVT."
},

{
    id: "DYS-PHARM-006",
    caseId: "DYS-PHARM-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "What is the initial adenosine dose taught in the lecture for SVT?",
    choices: [
        "6 mg rapid IV push followed by a rapid saline flush",
        "1 mg IV every 3 to 5 minutes",
        "300 mg IV push",
        "2 g IV infusion"
    ],
    answer:
        "6 mg rapid IV push followed by a rapid saline flush",
    rationale:
        "The lecture teaches 6 mg rapid IV push followed immediately by a 20 mL saline flush.",
    takeaway:
        "Adenosine starts at 6 mg rapid IV push."
},

{
    id: "DYS-PHARM-007",
    caseId: "DYS-PHARM-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "If the initial adenosine dose does not terminate the SVT, which dose is given next according to the lecture?",
    choices: [
        "12 mg rapid IV push followed by a rapid flush",
        "24 mg slow IV infusion",
        "1 mg IV push",
        "150 mg IV push"
    ],
    answer:
        "12 mg rapid IV push followed by a rapid flush",
    rationale:
        "The lecture identifies 12 mg rapid IV push as the next dose if the initial 6 mg dose is ineffective.",
    takeaway:
        "Adenosine: 6 mg, then 12 mg."
},

{
    id: "DYS-PHARM-008",
    caseId: "DYS-PHARM-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Why must adenosine be given as a rapid IV push?",
    choices: [
        "It has an extremely short half-life",
        "It is absorbed only through rapid infusion",
        "It causes renal failure if administered slowly",
        "It must remain in the IV tubing for several minutes"
    ],
    answer:
        "It has an extremely short half-life",
    rationale:
        "The lecture notes that adenosine has a half-life of only about 6 to 10 seconds, requiring rapid administration.",
    takeaway:
        "Adenosine disappears fast—push it fast."
},

{
    id: "DYS-PHARM-009",
    caseId: "DYS-PHARM-CASE-009",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which statement should the nurse include before administering adenosine?",
    choices: [
        "You may briefly feel flushing or chest discomfort, and there may be a short pause in your heartbeat.",
        "The medication will gradually work over several hours.",
        "You should not feel any effects from this medication.",
        "This medication permanently stops the heart."
    ],
    answer:
        "You may briefly feel flushing or chest discomfort, and there may be a short pause in your heartbeat.",
    rationale:
        "The lecture emphasizes preparing the client for flushing, chest discomfort, and brief expected asystole.",
    takeaway:
        "Warn before adenosine: brief pause, flushing, chest discomfort."
},

{
    id: "DYS-PHARM-010",
    caseId: "DYS-PHARM-CASE-010",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Adenosine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which equipment should be immediately available when administering adenosine?",
    choices: [
        "Emergency resuscitation equipment",
        "Enteral feeding pump",
        "Sequential compression device",
        "Urinary catheter kit"
    ],
    answer:
        "Emergency resuscitation equipment",
    rationale:
        "The lecture instructs the nurse to have the crash cart available because transient asystole may occur.",
    takeaway:
        "Adenosine requires cardiac monitoring and emergency readiness."
},

{
    id: "DYS-PHARM-011",
    caseId: "DYS-PHARM-CASE-011",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Amiodarone",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which dysrhythmias are listed as uses for amiodarone in the lecture?",
    choices: [
        "Ventricular tachycardia, ventricular fibrillation, and atrial fibrillation/flutter",
        "Sinus bradycardia only",
        "Asystole only",
        "Stable sinus arrhythmia only"
    ],
    answer:
        "Ventricular tachycardia, ventricular fibrillation, and atrial fibrillation/flutter",
    rationale:
        "The lecture identifies amiodarone for VT/VF and for rhythm or rate control in atrial fibrillation and flutter.",
    takeaway:
        "Amiodarone is used for serious ventricular and atrial dysrhythmias."
},

{
    id: "DYS-PHARM-012",
    caseId: "DYS-PHARM-CASE-012",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Amiodarone",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which toxicities are included in the PTEL memory aid for amiodarone? Select all that apply.",
    choices: [
        "Pulmonary toxicity",
        "Thyroid dysfunction",
        "Eye changes",
        "Liver toxicity",
        "Renal stones"
    ],
    answer: [
        "Pulmonary toxicity",
        "Thyroid dysfunction",
        "Eye changes",
        "Liver toxicity"
    ],
    rationale:
        "PTEL stands for pulmonary, thyroid, eyes, and liver toxicities.",
    takeaway:
        "Amiodarone PTEL = Pulmonary, Thyroid, Eyes, Liver."
},

{
    id: "DYS-PHARM-013",
    caseId: "DYS-PHARM-CASE-013",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Amiodarone",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "A client taking amiodarone reports a new dry cough and increasing shortness of breath. Which complication should the nurse suspect?",
    choices: [
        "Pulmonary toxicity",
        "Expected medication response",
        "Digoxin toxicity",
        "Hypoglycemia"
    ],
    answer:
        "Pulmonary toxicity",
    rationale:
        "The lecture emphasizes pulmonary toxicity as a serious amiodarone complication and identifies dyspnea and dry cough as warning signs.",
    takeaway:
        "Amiodarone + dyspnea/dry cough = pulmonary toxicity."
},

{
    id: "DYS-PHARM-014",
    caseId: "DYS-PHARM-CASE-014",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Amiodarone",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which monitoring is identified in the lecture for a client receiving long-term amiodarone? Select all that apply.",
    choices: [
        "Pulmonary function testing",
        "Thyroid studies",
        "Liver function tests",
        "Eye examinations",
        "ECG monitoring"
    ],
    answer: [
        "Pulmonary function testing",
        "Thyroid studies",
        "Liver function tests",
        "Eye examinations",
        "ECG monitoring"
    ],
    rationale:
        "Because amiodarone can affect the lungs, thyroid, eyes, liver, and QT interval, the lecture emphasizes monitoring these systems.",
    takeaway:
        "Amiodarone requires multisystem monitoring."
},

{
    id: "DYS-PHARM-015",
    caseId: "DYS-PHARM-CASE-015",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which dysrhythmias are listed as indications for digoxin rate control?",
    choices: [
        "Atrial fibrillation and atrial flutter",
        "Ventricular fibrillation and asystole",
        "Pulseless VT and PEA",
        "Torsades and sinus arrhythmia"
    ],
    answer:
        "Atrial fibrillation and atrial flutter",
    rationale:
        "The lecture identifies digoxin as a rate-control medication for atrial fibrillation and atrial flutter.",
    takeaway:
        "Digoxin slows ventricular response in A-fib/A-flutter."
},

{
    id: "DYS-PHARM-016",
    caseId: "DYS-PHARM-CASE-016",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "What assessment must the nurse perform before administering digoxin?",
    choices: [
        "Check the apical pulse for one full minute",
        "Check pedal pulses for 10 seconds",
        "Measure respiratory rate only",
        "Check the client's temperature only"
    ],
    answer:
        "Check the apical pulse for one full minute",
    rationale:
        "The lecture emphasizes checking the apical pulse for one full minute before administering digoxin.",
    takeaway:
        "Digoxin = apical pulse for 1 full minute."
},

{
    id: "DYS-PHARM-017",
    caseId: "DYS-PHARM-CASE-017",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The client's apical pulse is 56 beats/min before a scheduled digoxin dose. What should the nurse do?",
    choices: [
        "Hold the medication and notify the provider",
        "Administer the medication as scheduled",
        "Double the dose",
        "Give atropine with the digoxin"
    ],
    answer:
        "Hold the medication and notify the provider",
    rationale:
        "The lecture directs the nurse to hold digoxin and notify the provider when the heart rate is below 60 beats/min.",
    takeaway:
        "Digoxin + HR <60 = HOLD."
},

{
    id: "DYS-PHARM-018",
    caseId: "DYS-PHARM-CASE-018",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin Toxicity",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which findings may indicate digoxin toxicity? Select all that apply.",
    choices: [
        "Nausea and vomiting",
        "Anorexia",
        "Fatigue",
        "Yellow-green visual changes",
        "Bradycardia",
        "New dysrhythmias"
    ],
    answer: [
        "Nausea and vomiting",
        "Anorexia",
        "Fatigue",
        "Yellow-green visual changes",
        "Bradycardia",
        "New dysrhythmias"
    ],
    rationale:
        "The lecture lists gastrointestinal symptoms, fatigue, visual changes, bradycardia, and dysrhythmias as signs of digoxin toxicity.",
    takeaway:
        "Digoxin toxicity = GI + vision + brady/dysrhythmias."
},

{
    id: "DYS-PHARM-019",
    caseId: "DYS-PHARM-CASE-019",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin Toxicity",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which electrolyte abnormality increases the risk for digoxin toxicity?",
    choices: [
        "Hypokalemia",
        "Hypernatremia",
        "Hypermagnesemia",
        "Hyperphosphatemia"
    ],
    answer:
        "Hypokalemia",
    rationale:
        "The lecture emphasizes that low potassium increases the risk of digoxin toxicity.",
    takeaway:
        "Low K = higher digoxin toxicity risk."
},

{
    id: "DYS-PHARM-020",
    caseId: "DYS-PHARM-CASE-020",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Digoxin Toxicity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication is identified as the antidote for severe digoxin toxicity?",
    choices: [
        "Digoxin immune Fab",
        "Vitamin K",
        "Calcium gluconate",
        "Idarucizumab"
    ],
    answer:
        "Digoxin immune Fab",
    rationale:
        "The lecture identifies digoxin immune Fab as the antidote for digoxin toxicity.",
    takeaway:
        "Digoxin antidote = Digoxin immune Fab."
},

{
    id: "DYS-PHARM-021",
    caseId: "DYS-PHARM-CASE-021",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Epinephrine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which cardiac arrest rhythms receive epinephrine according to the lecture?",
    choices: [
        "V-Fib, pulseless VT, asystole, and PEA",
        "Only V-Fib",
        "Only asystole",
        "Only atrial fibrillation"
    ],
    answer:
        "V-Fib, pulseless VT, asystole, and PEA",
    rationale:
        "The lecture states that epinephrine is used in all cardiac arrest rhythms.",
    takeaway:
        "Epi is used in all cardiac arrest rhythms."
},

{
    id: "DYS-PHARM-022",
    caseId: "DYS-PHARM-CASE-022",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Epinephrine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "What dose of epinephrine is taught for cardiac arrest?",
    choices: [
        "1 mg IV every 3 to 5 minutes",
        "6 mg rapid IV push",
        "300 mg IV once",
        "2 g IV over one hour"
    ],
    answer:
        "1 mg IV every 3 to 5 minutes",
    rationale:
        "The lecture identifies epinephrine 1 mg IV every 3 to 5 minutes during cardiac arrest.",
    takeaway:
        "Cardiac arrest epi = 1 mg q3–5 min."
},

{
    id: "DYS-PHARM-023",
    caseId: "DYS-PHARM-CASE-023",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Epinephrine",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which effects of epinephrine are described in the lecture? Select all that apply.",
    choices: [
        "Alpha-1 vasoconstriction",
        "Increased coronary perfusion",
        "Increased cerebral perfusion",
        "Beta-1 increase in heart rate and contractility",
        "Beta-2 bronchodilation",
        "Decreased heart rate"
    ],
    answer: [
        "Alpha-1 vasoconstriction",
        "Increased coronary perfusion",
        "Increased cerebral perfusion",
        "Beta-1 increase in heart rate and contractility",
        "Beta-2 bronchodilation"
    ],
    rationale:
        "The lecture explains the alpha-1, beta-1, and beta-2 actions of epinephrine.",
    takeaway:
        "Epi supports circulation through vasoconstriction and cardiac stimulation."
},

{
    id: "DYS-PHARM-024",
    caseId: "DYS-PHARM-CASE-024",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Epinephrine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which monitoring is most important while administering epinephrine during cardiac arrest?",
    choices: [
        "Continuous ECG monitoring",
        "Daily visual acuity testing",
        "Weekly INR monitoring",
        "Hourly thyroid testing"
    ],
    answer:
        "Continuous ECG monitoring",
    rationale:
        "The lecture specifically instructs continuous ECG monitoring with epinephrine.",
    takeaway:
        "Epinephrine requires continuous cardiac monitoring."
},

{
    id: "DYS-PHARM-025",
    caseId: "DYS-PHARM-CASE-025",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Magnesium Sulfate",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which dysrhythmia is magnesium sulfate the drug of choice for according to the lecture?",
    choices: [
        "Torsades de pointes",
        "Sinus bradycardia",
        "Atrial fibrillation",
        "Stable junctional rhythm"
    ],
    answer:
        "Torsades de pointes",
    rationale:
        "The lecture repeatedly emphasizes magnesium sulfate as the drug of choice for torsades de pointes.",
    takeaway:
        "Torsades = magnesium sulfate."
},

{
    id: "DYS-PHARM-026",
    caseId: "DYS-PHARM-CASE-026",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Magnesium Sulfate",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which findings can indicate magnesium toxicity? Select all that apply.",
    choices: [
        "Loss of deep tendon reflexes",
        "Respiratory depression",
        "Hypotension",
        "Flushing",
        "Hyperreflexia"
    ],
    answer: [
        "Loss of deep tendon reflexes",
        "Respiratory depression",
        "Hypotension",
        "Flushing"
    ],
    rationale:
        "The lecture identifies absent reflexes, respiratory depression, hypotension, and flushing as magnesium toxicity findings.",
    takeaway:
        "Absent DTRs are a major magnesium toxicity warning."
},

{
    id: "DYS-PHARM-027",
    caseId: "DYS-PHARM-CASE-027",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Magnesium Sulfate",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The nurse assesses absent deep tendon reflexes in a client receiving magnesium sulfate. Which action is most appropriate?",
    choices: [
        "Hold the medication and evaluate for toxicity",
        "Administer another dose immediately",
        "Encourage ambulation",
        "Administer adenosine"
    ],
    answer:
        "Hold the medication and evaluate for toxicity",
    rationale:
        "The lecture identifies loss of deep tendon reflexes as a sign of magnesium toxicity and instructs the nurse to hold the dose.",
    takeaway:
        "Absent DTRs = hold magnesium."
},

{
    id: "DYS-PHARM-028",
    caseId: "DYS-PHARM-CASE-028",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Magnesium Sulfate",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication is identified as the antidote for magnesium toxicity?",
    choices: [
        "Calcium gluconate",
        "Vitamin K",
        "Digoxin immune Fab",
        "Idarucizumab"
    ],
    answer:
        "Calcium gluconate",
    rationale:
        "The lecture identifies calcium gluconate as the antidote for magnesium toxicity.",
    takeaway:
        "Magnesium antidote = calcium gluconate."
},

{
    id: "DYS-PHARM-029",
    caseId: "DYS-PHARM-CASE-029",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which dysrhythmias may be treated with beta blockers for rate control according to the lecture?",
    choices: [
        "Atrial fibrillation, atrial flutter, SVT, and sinus tachycardia",
        "Ventricular fibrillation and asystole",
        "PEA only",
        "Torsades only"
    ],
    answer:
        "Atrial fibrillation, atrial flutter, SVT, and sinus tachycardia",
    rationale:
        "The lecture lists beta blockers as rate-control agents for A-fib, A-flutter, SVT, and sinus tachycardia.",
    takeaway:
        "Beta blockers slow rate in several supraventricular rhythms."
},

{
    id: "DYS-PHARM-030",
    caseId: "DYS-PHARM-CASE-030",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications are beta blockers listed in the lecture? Select all that apply.",
    choices: [
        "Metoprolol",
        "Atenolol",
        "Propranolol",
        "Diltiazem",
        "Verapamil"
    ],
    answer: [
        "Metoprolol",
        "Atenolol",
        "Propranolol"
    ],
    rationale:
        "The lecture identifies metoprolol, atenolol, and propranolol as beta blockers. Diltiazem and verapamil are calcium channel blockers.",
    takeaway:
        "Beta blockers commonly end in -olol."
},
{
    id: "DYS-PHARM-031",
    caseId: "DYS-PHARM-CASE-031",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which assessments should the nurse perform before administering a beta blocker?",
    choices: [
        "Heart rate and blood pressure",
        "Visual acuity and bowel sounds",
        "INR and platelet count only",
        "Respiratory rate only"
    ],
    answer:
        "Heart rate and blood pressure",
    rationale:
        "The lecture emphasizes monitoring heart rate and blood pressure before administering beta blockers.",
    takeaway:
        "Beta blocker = check HR and BP first."
},

{
    id: "DYS-PHARM-032",
    caseId: "DYS-PHARM-CASE-032",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client is scheduled to receive metoprolol. The heart rate is 54 beats/min and systolic blood pressure is 86 mm Hg. Which action is most appropriate according to the lecture?",
    choices: [
        "Hold the medication",
        "Administer the medication as scheduled",
        "Double the dose",
        "Administer adenosine with the medication"
    ],
    answer:
        "Hold the medication",
    rationale:
        "The lecture instructs the nurse to hold beta blockers when the heart rate is below 60 beats/min or the systolic blood pressure is below 90 mm Hg.",
    takeaway:
        "Beta blocker: hold for HR <60 or SBP <90."
},

{
    id: "DYS-PHARM-033",
    caseId: "DYS-PHARM-CASE-033",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client taking a beta blocker indicates a need for further teaching?",
    choices: [
        "I can stop this medication suddenly once my heart rate improves.",
        "I should rise slowly to reduce dizziness.",
        "I should monitor for symptoms such as shortness of breath.",
        "I should take the medication as prescribed."
    ],
    answer:
        "I can stop this medication suddenly once my heart rate improves.",
    rationale:
        "The lecture emphasizes that beta blockers should not be stopped abruptly because rebound tachycardia and severe hypertension can occur.",
    takeaway:
        "Never stop beta blockers abruptly."
},

{
    id: "DYS-PHARM-034",
    caseId: "DYS-PHARM-CASE-034",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which nursing considerations are associated with beta blockers? Select all that apply.",
    choices: [
        "Monitor heart rate.",
        "Monitor blood pressure.",
        "Do not stop abruptly.",
        "They may mask hypoglycemia.",
        "Nonselective beta blockers may be problematic in asthma or COPD.",
        "They always increase heart rate."
    ],
    answer: [
        "Monitor heart rate.",
        "Monitor blood pressure.",
        "Do not stop abruptly.",
        "They may mask hypoglycemia.",
        "Nonselective beta blockers may be problematic in asthma or COPD."
    ],
    rationale:
        "These are the key beta-blocker safety considerations emphasized in the lecture.",
    takeaway:
        "Beta blockers slow the heart, lower BP, and require careful monitoring."
},

{
    id: "DYS-PHARM-035",
    caseId: "DYS-PHARM-CASE-035",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which beta blocker listed in the lecture is nonselective and therefore more concerning in a client with asthma?",
    choices: [
        "Propranolol",
        "Metoprolol",
        "Atenolol",
        "Diltiazem"
    ],
    answer:
        "Propranolol",
    rationale:
        "The lecture identifies propranolol as a nonselective beta blocker that blocks both beta-1 and beta-2 receptors.",
    takeaway:
        "Propranolol is nonselective—watch respiratory disease."
},

{
    id: "DYS-PHARM-036",
    caseId: "DYS-PHARM-CASE-036",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Beta Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which beta blocker listed in the lecture is described as cardioselective?",
    choices: [
        "Metoprolol",
        "Propranolol",
        "Diltiazem",
        "Verapamil"
    ],
    answer:
        "Metoprolol",
    rationale:
        "The lecture identifies metoprolol as a cardioselective beta-1 blocker.",
    takeaway:
        "Metoprolol = cardioselective beta-1 blocker."
},

{
    id: "DYS-PHARM-037",
    caseId: "DYS-PHARM-CASE-037",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which calcium channel blockers are used for rate control according to the lecture?",
    choices: [
        "Diltiazem and verapamil",
        "Amlodipine and nifedipine",
        "Metoprolol and atenolol",
        "Atropine and adenosine"
    ],
    answer:
        "Diltiazem and verapamil",
    rationale:
        "The lecture identifies the non-dihydropyridine calcium channel blockers diltiazem and verapamil as rate-control medications.",
    takeaway:
        "Non-DHP CCBs = diltiazem and verapamil = rate control."
},

{
    id: "DYS-PHARM-038",
    caseId: "DYS-PHARM-CASE-038",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "How do diltiazem and verapamil affect the cardiovascular system according to the lecture?",
    choices: [
        "They decrease heart rate, contractility, and blood pressure.",
        "They increase heart rate and blood pressure.",
        "They produce only bronchodilation.",
        "They increase myocardial oxygen demand."
    ],
    answer:
        "They decrease heart rate, contractility, and blood pressure.",
    rationale:
        "The lecture describes non-dihydropyridine CCBs as medications that affect the heart by reducing HR, contractility, and BP.",
    takeaway:
        "Diltiazem/verapamil slow the heart."
},

{
    id: "DYS-PHARM-039",
    caseId: "DYS-PHARM-CASE-039",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which calcium channel blocker listed in the lecture primarily affects blood vessels rather than heart rate?",
    choices: [
        "Amlodipine",
        "Diltiazem",
        "Verapamil",
        "Adenosine"
    ],
    answer:
        "Amlodipine",
    rationale:
        "Amlodipine is a dihydropyridine calcium channel blocker that primarily causes peripheral vasodilation and blood-pressure reduction.",
    takeaway:
        "DHP CCBs = vessels/BP, not rate control."
},

{
    id: "DYS-PHARM-040",
    caseId: "DYS-PHARM-CASE-040",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications are dihydropyridine calcium channel blockers listed in the lecture? Select all that apply.",
    choices: [
        "Amlodipine",
        "Nifedipine",
        "Diltiazem",
        "Verapamil",
        "Metoprolol"
    ],
    answer: [
        "Amlodipine",
        "Nifedipine"
    ],
    rationale:
        "The lecture identifies amlodipine and nifedipine as dihydropyridine CCBs that primarily affect blood vessels.",
    takeaway:
        "Amlodipine/nifedipine = BP-only CCBs."
},

{
    id: "DYS-PHARM-041",
    caseId: "DYS-PHARM-CASE-041",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client is scheduled to receive diltiazem. HR is 56 beats/min and systolic BP is 88 mm Hg. Which action is most appropriate?",
    choices: [
        "Hold the medication",
        "Administer the medication",
        "Double the medication dose",
        "Give a beta blocker with the medication"
    ],
    answer:
        "Hold the medication",
    rationale:
        "The lecture instructs the nurse to hold rate-controlling CCBs when HR is below 60 beats/min or SBP is below 90 mm Hg.",
    takeaway:
        "Diltiazem/verapamil: hold for HR <60 or SBP <90."
},

{
    id: "DYS-PHARM-042",
    caseId: "DYS-PHARM-CASE-042",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which food or beverage should the nurse instruct a client taking certain calcium channel blockers to avoid according to the lecture?",
    choices: [
        "Grapefruit juice",
        "Milk",
        "Orange juice",
        "Water"
    ],
    answer:
        "Grapefruit juice",
    rationale:
        "The lecture instructs clients taking calcium channel blockers to avoid grapefruit juice because it can increase drug levels.",
    takeaway:
        "CCBs + grapefruit = avoid."
},

{
    id: "DYS-PHARM-043",
    caseId: "DYS-PHARM-CASE-043",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which adverse effect is especially associated with verapamil in the lecture?",
    choices: [
        "Constipation",
        "Pulmonary fibrosis",
        "Yellow-green vision",
        "Dry cough from lung toxicity"
    ],
    answer:
        "Constipation",
    rationale:
        "The lecture specifically highlights constipation as an adverse effect of verapamil.",
    takeaway:
        "Verapamil = watch for constipation."
},

{
    id: "DYS-PHARM-044",
    caseId: "DYS-PHARM-CASE-044",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Calcium Channel Blockers",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Why does the lecture caution against giving a beta blocker and a rate-controlling calcium channel blocker together?",
    choices: [
        "The combination can cause severe bradycardia and heart block",
        "The combination causes severe hyperglycemia",
        "The combination always causes ventricular fibrillation",
        "The drugs cancel each other out completely"
    ],
    answer:
        "The combination can cause severe bradycardia and heart block",
    rationale:
        "Both classes slow AV conduction and heart rate, so combining them can produce excessive bradycardia or heart block.",
    takeaway:
        "BB + non-DHP CCB = too much rate suppression."
},

{
    id: "DYS-PHARM-045",
    caseId: "DYS-PHARM-CASE-045",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Warfarin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "What INR goal does the lecture identify for warfarin therapy in atrial fibrillation?",
    choices: [
        "2 to 3",
        "0.5 to 1",
        "4 to 6",
        "6 to 8"
    ],
    answer:
        "2 to 3",
    rationale:
        "The lecture identifies a therapeutic INR range of 2 to 3 for warfarin used in A-fib.",
    takeaway:
        "Warfarin INR goal = 2–3."
},

{
    id: "DYS-PHARM-046",
    caseId: "DYS-PHARM-CASE-046",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Warfarin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "How long does the lecture state that warfarin may take to become therapeutic?",
    choices: [
        "3 to 5 days",
        "5 to 10 minutes",
        "30 seconds",
        "24 hours exactly"
    ],
    answer:
        "3 to 5 days",
    rationale:
        "The lecture notes that warfarin has a delayed onset and may take 3 to 5 days to work.",
    takeaway:
        "Warfarin has a slow onset."
},

{
    id: "DYS-PHARM-047",
    caseId: "DYS-PHARM-CASE-047",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Warfarin",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement about vitamin K foods should the nurse include when teaching a client taking warfarin?",
    choices: [
        "Keep vitamin K intake consistent.",
        "Completely eliminate all foods containing vitamin K.",
        "Double vitamin K intake whenever the INR rises.",
        "Vitamin K intake has no effect on warfarin."
    ],
    answer:
        "Keep vitamin K intake consistent.",
    rationale:
        "The lecture advises clients to avoid large fluctuations in vitamin K intake and keep intake consistent.",
    takeaway:
        "Warfarin + vitamin K = consistency, not total avoidance."
},

{
    id: "DYS-PHARM-048",
    caseId: "DYS-PHARM-CASE-048",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Warfarin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication reverses the effects of warfarin according to the lecture?",
    choices: [
        "Vitamin K",
        "Idarucizumab",
        "Andexanet alfa",
        "Calcium gluconate"
    ],
    answer:
        "Vitamin K",
    rationale:
        "The lecture identifies vitamin K as the reversal agent for warfarin.",
    takeaway:
        "Warfarin antidote = vitamin K."
},

{
    id: "DYS-PHARM-049",
    caseId: "DYS-PHARM-CASE-049",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "DOACs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications are DOACs listed in the lecture? Select all that apply.",
    choices: [
        "Apixaban",
        "Rivaroxaban",
        "Dabigatran",
        "Warfarin",
        "Metoprolol"
    ],
    answer: [
        "Apixaban",
        "Rivaroxaban",
        "Dabigatran"
    ],
    rationale:
        "The lecture identifies apixaban, rivaroxaban, and dabigatran as direct oral anticoagulants.",
    takeaway:
        "Common DOACs: apixaban, rivaroxaban, dabigatran."
},

{
    id: "DYS-PHARM-050",
    caseId: "DYS-PHARM-CASE-050",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "DOACs",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which advantage of DOACs over warfarin is emphasized in the lecture?",
    choices: [
        "Routine INR monitoring is not required.",
        "They have a slower onset.",
        "They require more food restrictions.",
        "They cannot be reversed."
    ],
    answer:
        "Routine INR monitoring is not required.",
    rationale:
        "The lecture emphasizes that DOACs do not require routine INR monitoring and have fewer food and drug interactions.",
    takeaway:
        "DOACs = no routine INR."
},

{
    id: "DYS-PHARM-051",
    caseId: "DYS-PHARM-CASE-051",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "DOACs",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which reversal agent is identified for dabigatran?",
    choices: [
        "Idarucizumab",
        "Vitamin K",
        "Calcium gluconate",
        "Digoxin immune Fab"
    ],
    answer:
        "Idarucizumab",
    rationale:
        "The lecture identifies idarucizumab as the reversal agent for dabigatran.",
    takeaway:
        "Dabigatran reversal = idarucizumab."
},

{
    id: "DYS-PHARM-052",
    caseId: "DYS-PHARM-CASE-052",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "DOACs",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which reversal agent is listed for factor Xa inhibitors such as apixaban or rivaroxaban?",
    choices: [
        "Andexanet alfa",
        "Vitamin K",
        "Idarucizumab",
        "Atropine"
    ],
    answer:
        "Andexanet alfa",
    rationale:
        "The lecture identifies andexanet alfa as a reversal agent for factor Xa inhibitors.",
    takeaway:
        "Xa inhibitor reversal = andexanet alfa."
},

{
    id: "DYS-PHARM-053",
    caseId: "DYS-PHARM-CASE-053",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Anticoagulant Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse include for any client taking an anticoagulant? Select all that apply.",
    choices: [
        "Report blood in urine or stool.",
        "Report unusual bruising.",
        "Use a soft toothbrush.",
        "Use an electric razor.",
        "Wear medical alert identification.",
        "Inform healthcare providers that you take an anticoagulant."
    ],
    answer: [
        "Report blood in urine or stool.",
        "Report unusual bruising.",
        "Use a soft toothbrush.",
        "Use an electric razor.",
        "Wear medical alert identification.",
        "Inform healthcare providers that you take an anticoagulant."
    ],
    rationale:
        "The lecture emphasizes bleeding precautions and communication with all healthcare providers for clients taking anticoagulants.",
    takeaway:
        "Anticoagulant safety = bleeding precautions + medical identification."
},

{
    id: "DYS-PHARM-054",
    caseId: "DYS-PHARM-CASE-054",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Anticoagulant Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client taking an anticoagulant requires immediate follow-up?",
    choices: [
        "Black tarry stool",
        "Request for medication education",
        "Normal blood pressure",
        "Use of a soft toothbrush"
    ],
    answer:
        "Black tarry stool",
    rationale:
        "Black tarry stool can indicate gastrointestinal bleeding, which is a serious complication of anticoagulation.",
    takeaway:
        "Anticoagulant + bleeding = act."
},

{
    id: "DYS-PHARM-055",
    caseId: "DYS-PHARM-CASE-055",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Medication Matching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication-rhythm pairings are correct according to the lecture? Select all that apply.",
    choices: [
        "Atropine — symptomatic bradycardia",
        "Adenosine — SVT",
        "Magnesium sulfate — torsades de pointes",
        "Amiodarone — VT/VF",
        "Digoxin — A-fib rate control",
        "Epinephrine — cardiac arrest"
    ],
    answer: [
        "Atropine — symptomatic bradycardia",
        "Adenosine — SVT",
        "Magnesium sulfate — torsades de pointes",
        "Amiodarone — VT/VF",
        "Digoxin — A-fib rate control",
        "Epinephrine — cardiac arrest"
    ],
    rationale:
        "These medication-rhythm associations are all emphasized as high-yield in the lecture.",
    takeaway:
        "Know the signature drug for each rhythm."
},

{
    id: "DYS-PHARM-056",
    caseId: "DYS-PHARM-CASE-056",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Medication Matching",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has symptomatic bradycardia, HR 40/min, BP 80/46 mm Hg, and dizziness. Which medication should the nurse expect first?",
    choices: [
        "Atropine",
        "Adenosine",
        "Magnesium sulfate",
        "Warfarin"
    ],
    answer:
        "Atropine",
    rationale:
        "Atropine is identified as first-line therapy for symptomatic bradycardia.",
    takeaway:
        "Slow + symptomatic = atropine."
},

{
    id: "DYS-PHARM-057",
    caseId: "DYS-PHARM-CASE-057",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Medication Matching",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A stable client has SVT at 190 beats/min that persists after vagal maneuvers. Which medication should the nurse prepare?",
    choices: [
        "Adenosine",
        "Atropine",
        "Vitamin K",
        "Digoxin immune Fab"
    ],
    answer:
        "Adenosine",
    rationale:
        "Stable SVT that does not respond to vagal maneuvers is treated with adenosine according to the lecture.",
    takeaway:
        "Stable SVT after vagal maneuvers = adenosine."
},

{
    id: "DYS-PHARM-058",
    caseId: "DYS-PHARM-CASE-058",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Medication Matching",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops torsades de pointes after receiving a QT-prolonging medication. Which medication should the nurse prepare?",
    choices: [
        "Magnesium sulfate",
        "Atropine",
        "Adenosine",
        "Warfarin"
    ],
    answer:
        "Magnesium sulfate",
    rationale:
        "Magnesium sulfate is the drug of choice for torsades de pointes.",
    takeaway:
        "Twisting rhythm = magnesium."
},

{
    id: "DYS-PHARM-059",
    caseId: "DYS-PHARM-CASE-059",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Medication Matching",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "During resuscitation for ventricular fibrillation, which medication should the nurse expect to administer repeatedly every 3 to 5 minutes?",
    choices: [
        "Epinephrine",
        "Adenosine",
        "Atropine",
        "Warfarin"
    ],
    answer:
        "Epinephrine",
    rationale:
        "The lecture identifies epinephrine 1 mg every 3 to 5 minutes during cardiac arrest.",
    takeaway:
        "Arrest medication repeated q3–5 min = epinephrine."
},

{
    id: "DYS-PHARM-060",
    caseId: "DYS-PHARM-CASE-060",
    patient: randomPatient(),
    topic: "Dysrhythmia Pharmacology",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation takes digoxin and warfarin. Assessment reveals apical pulse 54/min, nausea, yellow-green visual halos, potassium 3.0 mEq/L, and new bruising. Which findings require immediate follow-up?",
    choices: [
        "The client may have digoxin toxicity and anticoagulant-related bleeding risk",
        "All findings are expected therapeutic effects",
        "Only the heart rate matters",
        "The potassium level protects against digoxin toxicity"
    ],
    answer:
        "The client may have digoxin toxicity and anticoagulant-related bleeding risk",
    rationale:
        "Bradycardia, GI symptoms, visual changes, and hypokalemia support possible digoxin toxicity, while new bruising raises concern for bleeding with anticoagulation.",
    takeaway:
        "Medication safety questions may involve more than one drug at the same time."
}

];
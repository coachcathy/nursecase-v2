const ecgFundamentalsQuestions = [

{
    id: "ECG-FUND-001",
    caseId: "ECG-FUND-CASE-001",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "P Wave",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse identifies a P wave on a client's ECG tracing. What electrical event does the P wave represent?",
    choices: [
        "Atrial depolarization",
        "Ventricular depolarization",
        "Ventricular repolarization",
        "Atrial and ventricular repolarization"
    ],
    answer:
        "Atrial depolarization",
    rationale:
        "The P wave represents atrial depolarization, which occurs as the electrical impulse spreads through the atria.",
    takeaway:
        "P wave = atrial depolarization."
},

{
    id: "ECG-FUND-002",
    caseId: "ECG-FUND-CASE-002",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QRS Complex",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What electrical event is represented by the QRS complex?",
    choices: [
        "Ventricular depolarization",
        "Atrial depolarization",
        "Ventricular repolarization",
        "SA node automaticity"
    ],
    answer:
        "Ventricular depolarization",
    rationale:
        "The QRS complex represents ventricular depolarization as the electrical impulse travels through the ventricles.",
    takeaway:
        "QRS = ventricular depolarization."
},

{
    id: "ECG-FUND-003",
    caseId: "ECG-FUND-CASE-003",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "T Wave",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What does the T wave represent on an ECG tracing?",
    choices: [
        "Ventricular repolarization",
        "Ventricular depolarization",
        "Atrial depolarization",
        "AV nodal delay"
    ],
    answer:
        "Ventricular repolarization",
    rationale:
        "The T wave represents ventricular repolarization, when the ventricular cells electrically recover following depolarization.",
    takeaway:
        "T wave = ventricular repolarization."
},

{
    id: "ECG-FUND-004",
    caseId: "ECG-FUND-CASE-004",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Waveforms",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG waveform interpretations are correct? Select all that apply.",
    choices: [
        "P wave represents atrial depolarization.",
        "QRS complex represents ventricular depolarization.",
        "T wave represents ventricular repolarization.",
        "P wave represents ventricular contraction.",
        "T wave represents atrial depolarization."
    ],
    answer: [
        "P wave represents atrial depolarization.",
        "QRS complex represents ventricular depolarization.",
        "T wave represents ventricular repolarization."
    ],
    rationale:
        "The major ECG components are interpreted as P wave = atrial depolarization, QRS = ventricular depolarization, and T wave = ventricular repolarization.",
    takeaway:
        "P = atria depolarize; QRS = ventricles depolarize; T = ventricles repolarize."
},

{
    id: "ECG-FUND-005",
    caseId: "ECG-FUND-CASE-005",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "PR Interval",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What does the PR interval primarily reflect?",
    choices: [
        "Time required for the impulse to travel from the atria through the AV conduction system",
        "Time required for ventricular repolarization",
        "Time required for the ventricles to contract",
        "Time between two ventricular contractions"
    ],
    answer:
        "Time required for the impulse to travel from the atria through the AV conduction system",
    rationale:
        "The PR interval reflects conduction of the electrical impulse from the atria through the AV node and into the ventricular conduction system.",
    takeaway:
        "PR interval = atrial-to-ventricular conduction time."
},

{
    id: "ECG-FUND-006",
    caseId: "ECG-FUND-CASE-006",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "PR Interval",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which PR interval should the nurse recognize as normal?",
    choices: [
        "0.12 to 0.20 seconds",
        "0.02 to 0.06 seconds",
        "0.24 to 0.32 seconds",
        "0.40 to 0.60 seconds"
    ],
    answer:
        "0.12 to 0.20 seconds",
    rationale:
        "A normal PR interval measures 0.12 to 0.20 seconds.",
    takeaway:
        "Normal PR = 0.12–0.20 sec."
},

{
    id: "ECG-FUND-007",
    caseId: "ECG-FUND-CASE-007",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "PR Interval",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse measures a client's PR interval at 0.16 seconds. How should the nurse interpret this finding?",
    choices: [
        "The PR interval is within the expected range",
        "The PR interval is prolonged",
        "The PR interval is abnormally short",
        "The finding indicates ventricular tachycardia"
    ],
    answer:
        "The PR interval is within the expected range",
    rationale:
        "A PR interval of 0.16 seconds falls within the normal range of 0.12 to 0.20 seconds.",
    takeaway:
        "0.12–0.20 sec = normal PR."
},

{
    id: "ECG-FUND-008",
    caseId: "ECG-FUND-CASE-008",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "PR Interval",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse measures a PR interval of 0.24 seconds. Which interpretation is appropriate?",
    choices: [
        "The PR interval is prolonged",
        "The PR interval is normal",
        "The QRS complex is widened",
        "The QT interval is shortened"
    ],
    answer:
        "The PR interval is prolonged",
    rationale:
        "A PR interval greater than 0.20 seconds is longer than the expected range and indicates delayed atrioventricular conduction.",
    takeaway:
        "PR > 0.20 sec = prolonged conduction."
},

{
    id: "ECG-FUND-009",
    caseId: "ECG-FUND-CASE-009",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QRS Duration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which QRS duration should the nurse recognize as expected?",
    choices: [
        "Less than 0.12 seconds",
        "0.20 to 0.30 seconds",
        "0.30 to 0.40 seconds",
        "Greater than 0.50 seconds"
    ],
    answer:
        "Less than 0.12 seconds",
    rationale:
        "Normal ventricular depolarization produces a relatively narrow QRS complex, generally less than 0.12 seconds.",
    takeaway:
        "Normal QRS = less than 0.12 sec."
},

{
    id: "ECG-FUND-010",
    caseId: "ECG-FUND-CASE-010",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QRS Duration",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse notes that a client's QRS complexes measure 0.16 seconds. Which finding should the nurse recognize?",
    choices: [
        "The QRS complexes are widened",
        "The QRS complexes are within the expected range",
        "The PR interval is shortened",
        "The atrial rate is decreased"
    ],
    answer:
        "The QRS complexes are widened",
    rationale:
        "A QRS duration of 0.16 seconds exceeds the expected duration of less than 0.12 seconds and therefore represents a widened QRS complex.",
    takeaway:
        "QRS ≥ 0.12 sec should make you think abnormal ventricular conduction."
},

{
    id: "ECG-FUND-011",
    caseId: "ECG-FUND-CASE-011",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QT Interval",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What does the QT interval represent?",
    choices: [
        "Total time for ventricular depolarization and repolarization",
        "Time required only for atrial depolarization",
        "Delay of the impulse within the AV node only",
        "Time between two atrial contractions"
    ],
    answer:
        "Total time for ventricular depolarization and repolarization",
    rationale:
        "The QT interval reflects the total electrical activity associated with ventricular depolarization and subsequent repolarization.",
    takeaway:
        "QT = ventricular depolarization through ventricular repolarization."
},

{
    id: "ECG-FUND-012",
    caseId: "ECG-FUND-CASE-012",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ECG Paper",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "How much time does one small horizontal box on standard ECG paper represent?",
    choices: [
        "0.04 seconds",
        "0.20 seconds",
        "0.40 seconds",
        "1 second"
    ],
    answer:
        "0.04 seconds",
    rationale:
        "One small horizontal ECG box represents 0.04 seconds.",
    takeaway:
        "1 small box = 0.04 sec."
},

{
    id: "ECG-FUND-013",
    caseId: "ECG-FUND-CASE-013",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ECG Paper",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "How much time does one large horizontal box on standard ECG paper represent?",
    choices: [
        "0.20 seconds",
        "0.04 seconds",
        "0.12 seconds",
        "1 second"
    ],
    answer:
        "0.20 seconds",
    rationale:
        "A large box contains five small boxes. Because each small box represents 0.04 seconds, one large box represents 0.20 seconds.",
    takeaway:
        "5 small boxes = 1 large box = 0.20 sec."
},

{
    id: "ECG-FUND-014",
    caseId: "ECG-FUND-CASE-014",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ECG Paper",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "A PR interval measures four small boxes. What is the duration of the PR interval?",
    choices: [
        "0.16 seconds",
        "0.08 seconds",
        "0.20 seconds",
        "0.40 seconds"
    ],
    answer:
        "0.16 seconds",
    rationale:
        "Each small box represents 0.04 seconds. Four small boxes × 0.04 seconds = 0.16 seconds.",
    takeaway:
        "Number of small boxes × 0.04 = interval duration."
},

{
    id: "ECG-FUND-015",
    caseId: "ECG-FUND-CASE-015",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ECG Paper",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "A QRS complex measures three small boxes. What is its duration?",
    choices: [
        "0.12 seconds",
        "0.06 seconds",
        "0.20 seconds",
        "0.30 seconds"
    ],
    answer:
        "0.12 seconds",
    rationale:
        "Three small boxes × 0.04 seconds equals 0.12 seconds.",
    takeaway:
        "3 small boxes = 0.12 sec."
},

{
    id: "ECG-FUND-016",
    caseId: "ECG-FUND-CASE-016",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Heart Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse counts 8 QRS complexes on a 6-second ECG strip. What is the client's approximate heart rate?",
    choices: [
        "80 beats/min",
        "48 beats/min",
        "60 beats/min",
        "120 beats/min"
    ],
    answer:
        "80 beats/min",
    rationale:
        "Using the 6-second method, count the QRS complexes and multiply by 10. Eight × 10 = 80 beats/min.",
    takeaway:
        "6-second method: QRS complexes × 10."
},

{
    id: "ECG-FUND-017",
    caseId: "ECG-FUND-CASE-017",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Heart Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse counts 12 QRS complexes during a 6-second rhythm strip. What is the approximate ventricular rate?",
    choices: [
        "120 beats/min",
        "72 beats/min",
        "100 beats/min",
        "60 beats/min"
    ],
    answer:
        "120 beats/min",
    rationale:
        "Twelve QRS complexes multiplied by 10 equals an approximate ventricular rate of 120 beats/min.",
    takeaway:
        "12 QRS in 6 sec = 120 beats/min."
},

{
    id: "ECG-FUND-018",
    caseId: "ECG-FUND-CASE-018",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Heart Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are four large boxes between consecutive R waves in a regular rhythm. Using the 300 method, what is the approximate heart rate?",
    choices: [
        "75 beats/min",
        "60 beats/min",
        "100 beats/min",
        "150 beats/min"
    ],
    answer:
        "75 beats/min",
    rationale:
        "For a regular rhythm, divide 300 by the number of large boxes between R waves. 300 ÷ 4 = 75 beats/min.",
    takeaway:
        "Regular rhythm: 300 ÷ large boxes between R waves."
},

{
    id: "ECG-FUND-019",
    caseId: "ECG-FUND-CASE-019",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Heart Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are three large boxes between R waves. What is the approximate heart rate using the 300 method?",
    choices: [
        "100 beats/min",
        "75 beats/min",
        "60 beats/min",
        "150 beats/min"
    ],
    answer:
        "100 beats/min",
    rationale:
        "Divide 300 by three large boxes. The approximate heart rate is 100 beats/min.",
    takeaway:
        "300 ÷ 3 = 100."
},

{
    id: "ECG-FUND-020",
    caseId: "ECG-FUND-CASE-020",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Heart Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are two large boxes between R waves. What is the approximate heart rate?",
    choices: [
        "150 beats/min",
        "100 beats/min",
        "75 beats/min",
        "60 beats/min"
    ],
    answer:
        "150 beats/min",
    rationale:
        "Using the 300 method, 300 divided by two large boxes equals 150 beats/min.",
    takeaway:
        "300 ÷ 2 = 150."
},

{
    id: "ECG-FUND-021",
    caseId: "ECG-FUND-CASE-021",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Regularity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which measurement should the nurse compare to determine whether the ventricular rhythm is regular?",
    choices: [
        "R-R intervals",
        "P-wave height",
        "T-wave height",
        "QRS amplitude only"
    ],
    answer:
        "R-R intervals",
    rationale:
        "Ventricular regularity is evaluated by comparing the distance between consecutive R waves.",
    takeaway:
        "R-R = ventricular regularity."
},

{
    id: "ECG-FUND-022",
    caseId: "ECG-FUND-CASE-022",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Regularity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which measurement should the nurse compare when evaluating atrial rhythm regularity?",
    choices: [
        "P-P intervals",
        "R-R intervals",
        "QRS widths",
        "QT intervals only"
    ],
    answer:
        "P-P intervals",
    rationale:
        "The distance between consecutive P waves is compared to determine whether atrial depolarizations occur regularly.",
    takeaway:
        "P-P = atrial regularity; R-R = ventricular regularity."
},

{
    id: "ECG-FUND-023",
    caseId: "ECG-FUND-CASE-023",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Systematic Interpretation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which components should the nurse evaluate when systematically interpreting an ECG rhythm? Select all that apply.",
    choices: [
        "Heart rate",
        "Rhythm regularity",
        "P waves",
        "PR interval",
        "QRS duration",
        "Relationship between P waves and QRS complexes"
    ],
    answer: [
        "Heart rate",
        "Rhythm regularity",
        "P waves",
        "PR interval",
        "QRS duration",
        "Relationship between P waves and QRS complexes"
    ],
    rationale:
        "Systematic rhythm interpretation includes evaluating the rate, regularity, P waves, PR interval, QRS complexes, and the relationship between atrial and ventricular activity.",
    takeaway:
        "Don't guess the rhythm—analyze it systematically."
},

{
    id: "ECG-FUND-024",
    caseId: "ECG-FUND-CASE-024",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "P Waves",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "When analyzing P waves on a rhythm strip, which question is most appropriate for the nurse to ask?",
    choices: [
        "Is there a P wave before each QRS complex?",
        "Is every T wave followed by a P wave?",
        "Does each QRS occur before the P wave?",
        "Are all T waves absent?"
    ],
    answer:
        "Is there a P wave before each QRS complex?",
    rationale:
        "Evaluating whether a P wave precedes each QRS helps determine the relationship between atrial and ventricular depolarization.",
    takeaway:
        "Look for the P-to-QRS relationship."
},

{
    id: "ECG-FUND-025",
    caseId: "ECG-FUND-CASE-025",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Systematic Interpretation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm strip has a rate of 78 beats/min, equal R-R intervals, a P wave before every QRS, a PR interval of 0.16 seconds, and a QRS duration of 0.08 seconds. Which interpretation is most appropriate?",
    choices: [
        "The measurements are consistent with normal conduction",
        "The PR interval is prolonged",
        "The QRS complex is abnormally wide",
        "The ventricular rate is tachycardic"
    ],
    answer:
        "The measurements are consistent with normal conduction",
    rationale:
        "The rate is within 60 to 100 beats/min, the rhythm is regular, P waves precede the QRS complexes, the PR interval is within 0.12 to 0.20 seconds, and the QRS is less than 0.12 seconds.",
    takeaway:
        "Combine all measurements before identifying a rhythm."
},

{
    id: "ECG-FUND-026",
    caseId: "ECG-FUND-CASE-026",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Systematic Interpretation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
        "The monitor displays what appears to be a new dysrhythmia. Which action should the nurse take first?",
    choices: [
        "Assess the client and verify the rhythm",
        "Immediately administer amiodarone",
        "Immediately perform defibrillation",
        "Document the rhythm and reassess in 30 minutes"
    ],
    answer:
        "Assess the client and verify the rhythm",
    rationale:
        "The nurse should assess the client rather than treating the monitor alone. The apparent rhythm may represent artifact, and treatment decisions depend on the client's clinical condition.",
    takeaway:
        "Treat the patient, not the monitor."
},

{
    id: "ECG-FUND-027",
    caseId: "ECG-FUND-CASE-027",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Artifact",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
        "A client's telemetry suddenly displays a chaotic waveform. The client is awake, talking, and denies symptoms. What should the nurse do first?",
    choices: [
        "Assess the client and check the monitoring equipment",
        "Begin chest compressions",
        "Defibrillate immediately",
        "Administer epinephrine"
    ],
    answer:
        "Assess the client and check the monitoring equipment",
    rationale:
        "A chaotic tracing in an alert, asymptomatic client may be artifact. The nurse should assess the client and verify the monitoring equipment before initiating emergency treatment.",
    takeaway:
        "A scary monitor does not automatically mean a crashing patient."
},

{
    id: "ECG-FUND-028",
    caseId: "ECG-FUND-CASE-028",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Artifact",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse suspects artifact on a telemetry tracing. Which actions are appropriate? Select all that apply.",
    choices: [
        "Assess the client",
        "Check electrode placement",
        "Check lead connections",
        "Evaluate the client's symptoms",
        "Treat the monitor tracing without assessing the client"
    ],
    answer: [
        "Assess the client",
        "Check electrode placement",
        "Check lead connections",
        "Evaluate the client's symptoms"
    ],
    rationale:
        "When a rhythm changes, the nurse should assess the client and verify the monitoring system, including electrodes and lead connections. Clinical findings help determine whether the tracing represents a true dysrhythmia.",
    takeaway:
        "Patient + electrodes + leads + symptoms before assuming the rhythm is real."
},

{
    id: "ECG-FUND-029",
    caseId: "ECG-FUND-CASE-029",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Clinical Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
        "A client develops a new cardiac rhythm. Which assessment finding is most important when determining the significance of the rhythm?",
    choices: [
        "Evidence of impaired perfusion",
        "The client's room number",
        "The time of the client's last meal",
        "Whether the client prefers the head of the bed elevated"
    ],
    answer:
        "Evidence of impaired perfusion",
    rationale:
        "The clinical importance of a dysrhythmia depends heavily on how it affects cardiac output and tissue perfusion. The nurse should assess the client's symptoms and hemodynamic status.",
    takeaway:
        "Rhythm + patient response = clinical significance."
},

{
    id: "ECG-FUND-030",
    caseId: "ECG-FUND-CASE-030",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Clinical Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client develops a new dysrhythmia. Which findings can indicate decreased cardiac output or impaired perfusion? Select all that apply.",
    choices: [
        "Hypotension",
        "Altered level of consciousness",
        "Chest discomfort",
        "Shortness of breath",
        "Dizziness",
        "Warm skin with no symptoms and stable vital signs"
    ],
    answer: [
        "Hypotension",
        "Altered level of consciousness",
        "Chest discomfort",
        "Shortness of breath",
        "Dizziness"
    ],
    rationale:
        "Dysrhythmias can reduce cardiac output and produce manifestations of impaired perfusion such as hypotension, altered mental status, chest discomfort, dyspnea, and dizziness.",
    takeaway:
        "When a rhythm changes, immediately ask: Is the patient perfusing?"
},

{
    id: "ECG-FUND-031",
    caseId: "ECG-FUND-CASE-031",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse counts 7 QRS complexes on a 6-second ECG strip. What is the client's approximate ventricular rate?",
    choices: [
        "70 beats/min",
        "42 beats/min",
        "84 beats/min",
        "120 beats/min"
    ],
    answer:
        "70 beats/min",
    rationale:
        "Using the 6-second method, count the QRS complexes and multiply by 10. Seven × 10 = 70 beats/min.",
    takeaway:
        "6-second strip: QRS count × 10."
},

{
    id: "ECG-FUND-032",
    caseId: "ECG-FUND-CASE-032",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse counts 5 QRS complexes on a 6-second strip. What is the approximate heart rate?",
    choices: [
        "50 beats/min",
        "30 beats/min",
        "75 beats/min",
        "100 beats/min"
    ],
    answer:
        "50 beats/min",
    rationale:
        "Five QRS complexes multiplied by 10 equals approximately 50 beats/min.",
    takeaway:
        "5 complexes in 6 seconds = 50 beats/min."
},

{
    id: "ECG-FUND-033",
    caseId: "ECG-FUND-CASE-033",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are 5 large boxes between consecutive R waves in a regular rhythm. What is the approximate heart rate using the 300 method?",
    choices: [
        "60 beats/min",
        "50 beats/min",
        "75 beats/min",
        "100 beats/min"
    ],
    answer:
        "60 beats/min",
    rationale:
        "For a regular rhythm, divide 300 by the number of large boxes between R waves. 300 ÷ 5 = 60 beats/min.",
    takeaway:
        "300 ÷ 5 = 60."
},

{
    id: "ECG-FUND-034",
    caseId: "ECG-FUND-CASE-034",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Rate Calculation",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are 6 large boxes between R waves. What is the approximate ventricular rate?",
    choices: [
        "50 beats/min",
        "60 beats/min",
        "75 beats/min",
        "100 beats/min"
    ],
    answer:
        "50 beats/min",
    rationale:
        "Using the 300 method, 300 ÷ 6 = approximately 50 beats/min.",
    takeaway:
        "300 ÷ large boxes between R waves."
},

{
    id: "ECG-FUND-035",
    caseId: "ECG-FUND-CASE-035",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Small Box Method",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are 20 small boxes between two consecutive R waves. What is the approximate heart rate using the small-box method?",
    choices: [
        "75 beats/min",
        "60 beats/min",
        "100 beats/min",
        "150 beats/min"
    ],
    answer:
        "75 beats/min",
    rationale:
        "The small-box method uses 1,500 divided by the number of small boxes between R waves. 1,500 ÷ 20 = 75 beats/min.",
    takeaway:
        "Small-box method: 1,500 ÷ small boxes."
},

{
    id: "ECG-FUND-036",
    caseId: "ECG-FUND-CASE-036",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Small Box Method",
    style: "Calculation",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "There are 25 small boxes between R waves. What is the approximate heart rate?",
    choices: [
        "60 beats/min",
        "75 beats/min",
        "50 beats/min",
        "100 beats/min"
    ],
    answer:
        "60 beats/min",
    rationale:
        "1,500 divided by 25 small boxes equals 60 beats/min.",
    takeaway:
        "1,500 ÷ 25 = 60."
},

{
    id: "ECG-FUND-037",
    caseId: "ECG-FUND-CASE-037",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Rate Method Selection",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which heart-rate calculation method is most useful for obtaining a quick estimate when the rhythm is irregular?",
    choices: [
        "6-second strip method",
        "300 method only",
        "1,500 method only",
        "PR interval method"
    ],
    answer:
        "6-second strip method",
    rationale:
        "The 6-second strip method provides a quick estimate and is useful when the R-R intervals are irregular. The 300 and 1,500 methods are most accurate with regular rhythms.",
    takeaway:
        "Irregular rhythm? Think 6-second method."
},

{
    id: "ECG-FUND-038",
    caseId: "ECG-FUND-CASE-038",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "P Wave Morphology",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse notices that one P wave has a different shape from the other P waves on the ECG tracing. What does this finding suggest?",
    choices: [
        "The impulse may have originated from an ectopic atrial focus",
        "All impulses originated normally from the SA node",
        "The rhythm must be ventricular fibrillation",
        "The client has normal ventricular repolarization"
    ],
    answer:
        "The impulse may have originated from an ectopic atrial focus",
    rationale:
        "P waves with a consistent shape suggest a common SA-node origin. A P wave with a different morphology suggests an impulse arising from another atrial location.",
    takeaway:
        "Different P-wave shape = think ectopic atrial origin."
},

{
    id: "ECG-FUND-039",
    caseId: "ECG-FUND-CASE-039",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QRS Origin",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse observes a wide QRS complex measuring 0.16 seconds. Which origin should the nurse suspect?",
    choices: [
        "Ventricular origin",
        "Normal SA-node origin",
        "Normal atrial depolarization",
        "Normal AV nodal delay"
    ],
    answer:
        "Ventricular origin",
    rationale:
        "The lecture emphasizes that a widened QRS complex suggests abnormal ventricular conduction or a ventricular-origin impulse.",
    takeaway:
        "Wide QRS = think ventricular origin."
},

{
    id: "ECG-FUND-040",
    caseId: "ECG-FUND-CASE-040",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "T Wave",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "According to the lecture, abnormal T waves may be associated with which conditions? Select all that apply.",
    choices: [
        "Electrolyte imbalance",
        "Myocardial infarction",
        "Pericarditis",
        "Normal atrial depolarization",
        "Normal AV-node conduction"
    ],
    answer: [
        "Electrolyte imbalance",
        "Myocardial infarction",
        "Pericarditis"
    ],
    rationale:
        "The PPT identifies electrolyte abnormalities, myocardial infarction, and pericarditis as conditions associated with abnormal T-wave changes.",
    takeaway:
        "Abnormal T waves can signal electrolyte or ischemic/inflammatory problems."
},

{
    id: "ECG-FUND-041",
    caseId: "ECG-FUND-CASE-041",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "U Wave",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse identifies a prominent U wave on the ECG. Which electrolyte abnormality should the nurse associate with this finding?",
    choices: [
        "Hypokalemia",
        "Hyperkalemia",
        "Hypernatremia",
        "Hypercalcemia"
    ],
    answer:
        "Hypokalemia",
    rationale:
        "The lecture identifies an abnormal U wave as a finding associated with hypokalemia.",
    takeaway:
        "Prominent U wave = think low potassium."
},

{
    id: "ECG-FUND-042",
    caseId: "ECG-FUND-CASE-042",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "QT Interval",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Why should the nurse be concerned about a prolonged QT interval?",
    choices: [
        "It increases the risk for torsades de pointes",
        "It indicates normal atrial conduction",
        "It guarantees sinus bradycardia",
        "It indicates normal ventricular repolarization"
    ],
    answer:
        "It increases the risk for torsades de pointes",
    rationale:
        "A prolonged QT interval increases the risk for torsades de pointes, a potentially dangerous polymorphic ventricular tachycardia.",
    takeaway:
        "Long QT = torsades risk."
},

{
    id: "ECG-FUND-043",
    caseId: "ECG-FUND-CASE-043",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ST Segment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Where should the ST segment normally appear on an ECG tracing?",
    choices: [
        "At the isoelectric baseline",
        "Above the P wave",
        "Below every QRS complex",
        "At the peak of the T wave"
    ],
    answer:
        "At the isoelectric baseline",
    rationale:
        "The ST segment normally lies along the isoelectric line or baseline.",
    takeaway:
        "Normal ST segment = baseline."
},

{
    id: "ECG-FUND-044",
    caseId: "ECG-FUND-CASE-044",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ST Segment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "According to the lecture, ST-segment elevation may be associated with which conditions? Select all that apply.",
    choices: [
        "Myocardial infarction",
        "Pericarditis",
        "Hyperkalemia",
        "Normal sinus rhythm only",
        "Hypokalemia only"
    ],
    answer: [
        "Myocardial infarction",
        "Pericarditis",
        "Hyperkalemia"
    ],
    rationale:
        "The PPT lists myocardial infarction, pericarditis, and hyperkalemia as possible causes of ST elevation.",
    takeaway:
        "ST elevation can reflect myocardial injury, inflammation, or electrolyte disturbance."
},

{
    id: "ECG-FUND-045",
    caseId: "ECG-FUND-CASE-045",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "ST Segment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "According to the lecture, ST-segment depression may be associated with which conditions? Select all that apply.",
    choices: [
        "Hypokalemia",
        "Myocardial infarction",
        "Ventricular hypertrophy",
        "Normal sinus arrhythmia",
        "Normal atrial depolarization"
    ],
    answer: [
        "Hypokalemia",
        "Myocardial infarction",
        "Ventricular hypertrophy"
    ],
    rationale:
        "The lecture identifies hypokalemia, myocardial infarction, and ventricular hypertrophy as conditions associated with ST depression.",
    takeaway:
        "ST depression requires evaluation for ischemic, structural, or electrolyte causes."
},

{
    id: "ECG-FUND-046",
    caseId: "ECG-FUND-CASE-046",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Systematic Interpretation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse begins interpreting an ECG strip. Which assessment should be performed first in the systematic method taught in the lecture?",
    choices: [
        "Determine whether the rate is fast, slow, or normal",
        "Identify the QT interval",
        "Count the number of T waves",
        "Determine whether the client needs cardioversion"
    ],
    answer:
        "Determine whether the rate is fast, slow, or normal",
    rationale:
        "The lecture's systematic interpretation sequence begins by evaluating the heart rate before moving through rhythm, waveforms, and intervals.",
    takeaway:
        "Start ECG interpretation with rate."
},

{
    id: "ECG-FUND-047",
    caseId: "ECG-FUND-CASE-047",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Systematic Interpretation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which questions are part of the systematic ECG interpretation approach from the lecture? Select all that apply.",
    choices: [
        "Is the rate fast, slow, or normal?",
        "Is the rhythm regular?",
        "Are P waves present?",
        "Is there a P wave before every QRS?",
        "Is there a QRS after every P wave?",
        "What medication should be administered before examining the strip?"
    ],
    answer: [
        "Is the rate fast, slow, or normal?",
        "Is the rhythm regular?",
        "Are P waves present?",
        "Is there a P wave before every QRS?",
        "Is there a QRS after every P wave?"
    ],
    rationale:
        "The lecture emphasizes a stepwise assessment of rate, regularity, waveforms, intervals, and the relationship between atrial and ventricular activity.",
    takeaway:
        "Use the same ECG checklist every time."
},

{
    id: "ECG-FUND-048",
    caseId: "ECG-FUND-CASE-048",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Clinical Instability",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops a new dysrhythmia. Which finding is the strongest evidence that the rhythm is clinically significant?",
    choices: [
        "Blood pressure 82/48 mm Hg with dizziness",
        "The monitor alarm is sounding",
        "The rhythm appears different from the previous strip",
        "The client asks what the monitor is displaying"
    ],
    answer:
        "Blood pressure 82/48 mm Hg with dizziness",
    rationale:
        "Hypotension and dizziness indicate decreased cardiac output and impaired perfusion, making the dysrhythmia clinically significant.",
    takeaway:
        "Symptoms and perfusion determine urgency."
},

{
    id: "ECG-FUND-049",
    caseId: "ECG-FUND-CASE-049",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Clinical Instability",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings should the nurse recognize as signs of cardiac instability in a client with a dysrhythmia? Select all that apply.",
    choices: [
        "Hypotension",
        "Syncope",
        "Shortness of breath",
        "Diaphoresis",
        "Altered level of consciousness",
        "Stable blood pressure with no symptoms"
    ],
    answer: [
        "Hypotension",
        "Syncope",
        "Shortness of breath",
        "Diaphoresis",
        "Altered level of consciousness"
    ],
    rationale:
        "The lecture identifies hypotension, syncope, dizziness, shortness of breath, diaphoresis, and altered level of consciousness as signs of cardiac instability.",
    takeaway:
        "Unstable rhythm = impaired perfusion symptoms."
},

{
    id: "ECG-FUND-050",
    caseId: "ECG-FUND-CASE-050",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Dysrhythmia Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which description best defines a premature cardiac complex?",
    choices: [
        "An early complex arising before the next expected normal beat",
        "A rhythm with a heart rate below 60 beats/min",
        "A rhythm with a heart rate above 100 beats/min",
        "A rhythm that always produces cardiac arrest"
    ],
    answer:
        "An early complex arising before the next expected normal beat",
    rationale:
        "The lecture defines premature complexes as early beats originating from an ectopic focus before the next normal impulse is expected.",
    takeaway:
        "Premature = early."
},

{
    id: "ECG-FUND-051",
    caseId: "ECG-FUND-CASE-051",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Dysrhythmia Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which heart rate meets the lecture's definition of a bradydysrhythmia?",
    choices: [
        "54 beats/min",
        "72 beats/min",
        "92 beats/min",
        "118 beats/min"
    ],
    answer:
        "54 beats/min",
    rationale:
        "Bradydysrhythmias are characterized by heart rates below 60 beats/min and may decrease tissue perfusion.",
    takeaway:
        "Brady = under 60."
},

{
    id: "ECG-FUND-052",
    caseId: "ECG-FUND-CASE-052",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Dysrhythmia Classification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which heart rate meets the lecture's definition of a tachydysrhythmia?",
    choices: [
        "124 beats/min",
        "96 beats/min",
        "82 beats/min",
        "58 beats/min"
    ],
    answer:
        "124 beats/min",
    rationale:
        "Tachydysrhythmias are rhythms with rates greater than 100 beats/min.",
    takeaway:
        "Tachy = over 100."
},

{
    id: "ECG-FUND-053",
    caseId: "ECG-FUND-CASE-053",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Tachydysrhythmia Effects",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Why can a sustained tachydysrhythmia decrease cardiac output?",
    choices: [
        "It decreases ventricular filling time",
        "It increases the time available for ventricular filling",
        "It always increases stroke volume",
        "It eliminates myocardial oxygen demand"
    ],
    answer:
        "It decreases ventricular filling time",
    rationale:
        "Very rapid rates shorten diastole, reducing ventricular filling time while also increasing myocardial oxygen demand.",
    takeaway:
        "Too fast = less filling time + more oxygen demand."
},

{
    id: "ECG-FUND-054",
    caseId: "ECG-FUND-CASE-054",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Bradydysrhythmia Effects",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Why can a severe bradydysrhythmia cause dizziness and syncope?",
    choices: [
        "The slow rate may reduce cardiac output and cerebral perfusion",
        "The slow rate always causes ventricular fibrillation",
        "The slow rate increases cerebral blood flow excessively",
        "The slow rate causes immediate hyperkalemia"
    ],
    answer:
        "The slow rate may reduce cardiac output and cerebral perfusion",
    rationale:
        "When the heart rate becomes too slow, cardiac output may fall enough to impair cerebral perfusion, producing dizziness, syncope, and altered mental status.",
    takeaway:
        "Too slow can mean not enough perfusion."
},

{
    id: "ECG-FUND-055",
    caseId: "ECG-FUND-CASE-055",
    patient: randomPatient(),
    topic: "ECG Fundamentals",
    subtopic: "Comprehensive Interpretation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse sees a new abnormal ECG tracing while the client is moving in bed. The client is awake with BP 126/74 mm Hg, HR 78/min by palpation, SpO₂ 97%, and no symptoms. Which action is the priority?",
    choices: [
        "Assess the electrodes and verify the tracing before initiating treatment",
        "Immediately defibrillate the client",
        "Administer epinephrine",
        "Begin chest compressions"
    ],
    answer:
        "Assess the electrodes and verify the tracing before initiating treatment",
    rationale:
        "Movement can create artifact that mimics a lethal rhythm. The client's stable assessment does not match the monitor appearance, so the nurse should verify the tracing and equipment.",
    takeaway:
        "Always match the monitor to the patient."
}

];
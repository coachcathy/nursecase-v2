const cardiacConductionQuestions = [

{
    id: "CARD-CON-001",
    caseId: "CARD-CON-CASE-001",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Electrical Pathway",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which sequence correctly represents the normal electrical conduction pathway of the heart?",
    choices: [
        "SA node → AV node → Bundle of His → bundle branches → Purkinje fibers",
        "AV node → SA node → Purkinje fibers → Bundle of His",
        "SA node → Purkinje fibers → AV node → bundle branches",
        "Bundle branches → AV node → SA node → Purkinje fibers"
    ],
    answer:
        "SA node → AV node → Bundle of His → bundle branches → Purkinje fibers",
    rationale:
        "The normal conduction pathway begins at the SA node, travels to the AV node, then through the Bundle of His, right and left bundle branches, and finally the Purkinje fibers.",
    takeaway:
        "Memorize the pathway: SA → AV → His → bundle branches → Purkinje."
},

{
    id: "CARD-CON-002",
    caseId: "CARD-CON-CASE-002",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Automaticity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which electrophysiologic property allows cardiac cells to generate impulses spontaneously?",
    choices: [
        "Automaticity",
        "Excitability",
        "Conductivity",
        "Contractility"
    ],
    answer:
        "Automaticity",
    rationale:
        "Automaticity is the pacing function that allows cardiac cells, especially the SA node, to generate electrical impulses spontaneously.",
    takeaway:
        "Automaticity = spontaneous impulse generation."
},

{
    id: "CARD-CON-003",
    caseId: "CARD-CON-CASE-003",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Excitability",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which electrophysiologic property describes the ability of a cardiac cell to respond to an electrical stimulus?",
    choices: [
        "Excitability",
        "Automaticity",
        "Contractility",
        "Conductivity"
    ],
    answer:
        "Excitability",
    rationale:
        "Excitability is the response function of cardiac cells and allows them to depolarize when stimulated.",
    takeaway:
        "Excitability = response to a stimulus."
},

{
    id: "CARD-CON-004",
    caseId: "CARD-CON-CASE-004",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Conductivity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which property allows an electrical impulse to travel from one cardiac cell to another?",
    choices: [
        "Conductivity",
        "Contractility",
        "Automaticity",
        "Excitability"
    ],
    answer:
        "Conductivity",
    rationale:
        "Conductivity is the transmission function that allows an electrical stimulus to move from cell to cell through the conduction system.",
    takeaway:
        "Conductivity = transmission of the electrical impulse."
},

{
    id: "CARD-CON-005",
    caseId: "CARD-CON-CASE-005",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Contractility",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which electrophysiologic property directly produces pressure that pushes blood through the circulatory system?",
    choices: [
        "Contractility",
        "Automaticity",
        "Excitability",
        "Conductivity"
    ],
    answer:
        "Contractility",
    rationale:
        "Contractility is the mechanical function in which cardiac muscle cells shorten, creating pressure and moving blood forward.",
    takeaway:
        "Contractility = mechanical pumping action."
},

{
    id: "CARD-CON-006",
    caseId: "CARD-CON-CASE-006",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "SA Node",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which structure is the heart's primary pacemaker?",
    choices: [
        "Sinoatrial node",
        "Atrioventricular node",
        "Bundle of His",
        "Purkinje fibers"
    ],
    answer:
        "Sinoatrial node",
    rationale:
        "The SA node is the normal primary pacemaker because it has the highest intrinsic firing rate and greatest degree of automaticity.",
    takeaway:
        "SA node = primary pacemaker."
},

{
    id: "CARD-CON-007",
    caseId: "CARD-CON-CASE-007",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "SA Node",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the normal intrinsic firing rate of the SA node?",
    choices: [
        "60 to 100 beats/min",
        "40 to 60 beats/min",
        "20 to 40 beats/min",
        "100 to 150 beats/min"
    ],
    answer:
        "60 to 100 beats/min",
    rationale:
        "The SA node has an intrinsic rate of 60 to 100 beats/min, making it the dominant pacemaker under normal conditions.",
    takeaway:
        "SA node = 60–100 beats/min."
},

{
    id: "CARD-CON-008",
    caseId: "CARD-CON-CASE-008",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "SA Node Location",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Where is the SA node located?",
    choices: [
        "Upper right atrium near the superior vena cava",
        "Floor of the left atrium",
        "Interventricular septum",
        "Endocardial surface of the ventricles"
    ],
    answer:
        "Upper right atrium near the superior vena cava",
    rationale:
        "The SA node is located in the upper wall of the right atrium near the superior vena cava.",
    takeaway:
        "SA node location = upper right atrium."
},
{
    id: "CARD-CON-009",
    caseId: "CARD-CON-CASE-009",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "SA Node Automaticity",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse is reviewing the cardiac conduction system with a student. Why does the SA node normally control the heart rate?",
    choices: [
        "It has the greatest degree of automaticity",
        "It has the slowest intrinsic firing rate",
        "It delays impulses before ventricular contraction",
        "It is located within the ventricular conduction system"
    ],
    answer:
        "It has the greatest degree of automaticity",
    rationale:
        "The SA node has the greatest degree of automaticity and normally fires at 60 to 100 beats/min. Because it fires faster than the other potential pacemaker sites, it normally controls the heart's rhythm.",
    takeaway:
        "The fastest pacemaker normally wins. SA node = greatest automaticity."
},

{
    id: "CARD-CON-010",
    caseId: "CARD-CON-CASE-010",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "SA Node",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The SA node is functioning normally at 76 beats/min. Which response should the nurse expect from the heart's other pacemaker sites?",
    choices: [
        "They remain suppressed by the faster SA node",
        "The AV node begins pacing at 100 beats/min",
        "The Purkinje fibers begin pacing at 60 beats/min",
        "The Bundle of His fires simultaneously with the SA node"
    ],
    answer:
        "They remain suppressed by the faster SA node",
    rationale:
        "As long as the SA node is firing normally at 60 to 100 beats/min, the slower backup pacemaker sites do not normally take control.",
    takeaway:
        "A functioning SA node suppresses the slower backup pacemakers."
},

{
    id: "CARD-CON-011",
    caseId: "CARD-CON-CASE-011",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "AV Node",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the intrinsic firing rate of the AV node?",
    choices: [
        "40 to 60 beats/min",
        "60 to 100 beats/min",
        "20 to 40 beats/min",
        "100 to 150 beats/min"
    ],
    answer:
        "40 to 60 beats/min",
    rationale:
        "The AV node has an intrinsic firing rate of 40 to 60 beats/min and can function as a backup pacemaker if the SA node fails.",
    takeaway:
        "AV node = 40–60 beats/min."
},

{
    id: "CARD-CON-012",
    caseId: "CARD-CON-CASE-012",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "AV Node Function",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Why is the AV node described as the 'gatekeeper' of the cardiac conduction system?",
    choices: [
        "It controls and delays impulses traveling to the ventricles",
        "It normally initiates every heartbeat",
        "It directly causes ventricular repolarization",
        "It has the fastest intrinsic firing rate in the heart"
    ],
    answer:
        "It controls and delays impulses traveling to the ventricles",
    rationale:
        "The AV node acts as a gatekeeper by controlling conduction from the atria to the ventricles and delaying the impulse before it continues through the ventricular conduction system.",
    takeaway:
        "AV node = gatekeeper and delay station."
},

{
    id: "CARD-CON-013",
    caseId: "CARD-CON-CASE-013",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "AV Node Delay",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the primary purpose of the normal delay of an electrical impulse at the AV node?",
    choices: [
        "Allow the atria to contract and contribute to ventricular filling",
        "Allow the ventricles to repolarize before atrial contraction",
        "Increase the intrinsic firing rate of the ventricles",
        "Prevent the SA node from initiating another impulse"
    ],
    answer:
        "Allow the atria to contract and contribute to ventricular filling",
    rationale:
        "The AV node delays conduction so the atria have time to contract before the ventricles. This allows the atrial kick to contribute to ventricular filling.",
    takeaway:
        "AV delay → atrial kick → ventricular filling."
},

{
    id: "CARD-CON-014",
    caseId: "CARD-CON-CASE-014",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "AV Node Location",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Where is the AV node located?",
    choices: [
        "Floor of the right atrium between the tricuspid valve and coronary sinus",
        "Upper right atrium near the superior vena cava",
        "Endocardial surface of the ventricles",
        "Left ventricular free wall"
    ],
    answer:
        "Floor of the right atrium between the tricuspid valve and coronary sinus",
    rationale:
        "The AV node is located on the floor of the right atrium between the tricuspid valve and coronary sinus.",
    takeaway:
        "SA node = upper right atrium; AV node = floor of right atrium."
},

{
    id: "CARD-CON-015",
    caseId: "CARD-CON-CASE-015",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Backup Pacemaker",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "The SA node fails to initiate impulses. Which structure can take over as a backup pacemaker at an intrinsic rate of 40 to 60 beats/min?",
    choices: [
        "AV node",
        "Purkinje fibers",
        "Right bundle branch",
        "Left ventricle"
    ],
    answer:
        "AV node",
    rationale:
        "The AV node can take over when the SA node fails. Its intrinsic firing rate is 40 to 60 beats/min.",
    takeaway:
        "SA failure → AV junction may take over at 40–60 beats/min."
},

{
    id: "CARD-CON-016",
    caseId: "CARD-CON-CASE-016",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Bundle of His",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "After an impulse leaves the AV node, which structure normally receives the impulse next?",
    choices: [
        "Bundle of His",
        "Purkinje fibers",
        "SA node",
        "Left bundle branch"
    ],
    answer:
        "Bundle of His",
    rationale:
        "The normal pathway proceeds from the AV node to the Bundle of His before dividing into the right and left bundle branches.",
    takeaway:
        "AV node → Bundle of His → bundle branches."
},

{
    id: "CARD-CON-017",
    caseId: "CARD-CON-CASE-017",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Bundle of His",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What intrinsic rate is associated with the Bundle of His according to the cardiac conduction hierarchy?",
    choices: [
        "20 to 40 beats/min",
        "40 to 60 beats/min",
        "60 to 100 beats/min",
        "100 to 120 beats/min"
    ],
    answer:
        "20 to 40 beats/min",
    rationale:
        "The Bundle of His is part of the ventricular backup pacemaker system and has an intrinsic rate of approximately 20 to 40 beats/min.",
    takeaway:
        "Ventricular backup pacemakers = approximately 20–40 beats/min."
},

{
    id: "CARD-CON-018",
    caseId: "CARD-CON-CASE-018",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Bundle Branches",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the primary function of the right and left bundle branches?",
    choices: [
        "Conduct impulses to the right and left ventricles",
        "Generate the normal P wave",
        "Delay impulses to allow atrial contraction",
        "Initiate the normal heartbeat"
    ],
    answer:
        "Conduct impulses to the right and left ventricles",
    rationale:
        "The Bundle of His divides into right and left bundle branches, which conduct the electrical impulse toward the corresponding ventricles.",
    takeaway:
        "Bundle branches distribute the impulse to both ventricles."
},

{
    id: "CARD-CON-019",
    caseId: "CARD-CON-CASE-019",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Bundle Branches",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Why is simultaneous conduction through the right and left bundle branches important?",
    choices: [
        "It promotes coordinated ventricular contraction",
        "It causes the atria to contract simultaneously",
        "It slows conduction through the AV node",
        "It prevents the Purkinje fibers from firing"
    ],
    answer:
        "It promotes coordinated ventricular contraction",
    rationale:
        "Simultaneous activation of the right and left ventricular conduction pathways helps the ventricles contract in a coordinated manner.",
    takeaway:
        "Both bundle branches working together → coordinated ventricular contraction."
},

{
    id: "CARD-CON-020",
    caseId: "CARD-CON-CASE-020",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Purkinje Fibers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the primary function of the Purkinje fibers?",
    choices: [
        "Rapidly conduct impulses through the ventricular walls",
        "Delay impulses before they enter the ventricles",
        "Initiate atrial contraction",
        "Control impulses leaving the SA node"
    ],
    answer:
        "Rapidly conduct impulses through the ventricular walls",
    rationale:
        "Purkinje fibers rapidly distribute electrical impulses through the ventricular walls, triggering coordinated ventricular contraction.",
    takeaway:
        "Purkinje fibers = rapid ventricular conduction."
},

{
    id: "CARD-CON-021",
    caseId: "CARD-CON-CASE-021",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Purkinje Fibers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Where are the Purkinje fibers located?",
    choices: [
        "Endocardial surface of the ventricles",
        "Upper wall of the right atrium",
        "Floor of the right atrium",
        "Outside surface of the atria"
    ],
    answer:
        "Endocardial surface of the ventricles",
    rationale:
        "The Purkinje fibers are located along the endocardial surface of the ventricles and represent the terminal portion of the conduction pathway.",
    takeaway:
        "Purkinje fibers are located in the ventricles."
},

{
    id: "CARD-CON-022",
    caseId: "CARD-CON-CASE-022",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Pacemaker Hierarchy",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client's SA node and AV junction both fail to initiate an impulse. Which intrinsic heart rate should the nurse expect if a ventricular pacemaker takes control?",
    choices: [
        "20 to 40 beats/min",
        "40 to 60 beats/min",
        "60 to 100 beats/min",
        "100 to 150 beats/min"
    ],
    answer:
        "20 to 40 beats/min",
    rationale:
        "Ventricular pacemaker sites have the slowest intrinsic rate, approximately 20 to 40 beats/min. They serve as the final backup when higher pacemaker sites fail.",
    takeaway:
        "Pacemaker hierarchy: SA 60–100 → AV 40–60 → ventricles 20–40."
},

{
    id: "CARD-CON-023",
    caseId: "CARD-CON-CASE-023",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Pacemaker Hierarchy",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which intrinsic pacemaker rate should concern the nurse most for decreased cardiac output?",
    choices: [
        "Ventricular pacemaker firing at 28 beats/min",
        "AV node firing at 52 beats/min",
        "SA node firing at 72 beats/min",
        "SA node firing at 88 beats/min"
    ],
    answer:
        "Ventricular pacemaker firing at 28 beats/min",
    rationale:
        "A ventricular escape rate of 28 beats/min is extremely slow and may significantly decrease cardiac output and tissue perfusion.",
    takeaway:
        "The lower the backup pacemaker site, the slower the intrinsic rate."
},

{
    id: "CARD-CON-024",
    caseId: "CARD-CON-CASE-024",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Automaticity",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client experiencing myocardial ischemia develops impulses originating from cardiac cells outside the SA node. Which concept best explains this finding?",
    choices: [
        "Abnormal automaticity",
        "Increased contractility",
        "Normal AV delay",
        "Decreased conductivity"
    ],
    answer:
        "Abnormal automaticity",
    rationale:
        "Although the SA node normally demonstrates the greatest automaticity, ischemia, hypoxia, or drug toxicity can cause other cardiac cells to spontaneously generate impulses.",
    takeaway:
        "Ischemia, hypoxia, and drug toxicity can make other cardiac cells become pacemakers."
},

{
    id: "CARD-CON-025",
    caseId: "CARD-CON-CASE-025",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Automaticity",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions can cause cardiac cells outside the SA node to demonstrate automaticity? Select all that apply.",
    choices: [
        "Ischemia",
        "Hypoxia",
        "Drug toxicity",
        "Normal SA node firing at 80 beats/min",
        "Normal ventricular contraction"
    ],
    answer: [
        "Ischemia",
        "Hypoxia",
        "Drug toxicity"
    ],
    rationale:
        "The PPT identifies ischemia, hypoxia, and drug toxicity as conditions that can cause cardiac cells other than the SA node to demonstrate automaticity.",
    takeaway:
        "Think ectopic automaticity when cardiac tissue is irritated by ischemia, hypoxia, or drugs."
},

{
    id: "CARD-CON-026",
    caseId: "CARD-CON-CASE-026",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Pacemaker Hierarchy",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which intrinsic pacemaker rates should the nurse recognize as correct? Select all that apply.",
    choices: [
        "SA node: 60 to 100 beats/min",
        "AV node: 40 to 60 beats/min",
        "Ventricular pacemaker: 20 to 40 beats/min",
        "AV node: 100 to 120 beats/min",
        "Purkinje system: 60 to 100 beats/min"
    ],
    answer: [
        "SA node: 60 to 100 beats/min",
        "AV node: 40 to 60 beats/min",
        "Ventricular pacemaker: 20 to 40 beats/min"
    ],
    rationale:
        "The normal pacemaker hierarchy is SA node 60 to 100 beats/min, AV node 40 to 60 beats/min, and ventricular pacemaker sites approximately 20 to 40 beats/min.",
    takeaway:
        "Memorize 60–100, 40–60, 20–40."
},

{
    id: "CARD-CON-027",
    caseId: "CARD-CON-CASE-027",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Conduction Pathway",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Place the following structures in the order an electrical impulse normally travels through the heart.",
    choices: [
        "SA node → AV node → Bundle of His → right and left bundle branches → Purkinje fibers",
        "SA node → Bundle of His → AV node → Purkinje fibers → bundle branches",
        "AV node → SA node → Bundle of His → Purkinje fibers → bundle branches",
        "Purkinje fibers → bundle branches → Bundle of His → AV node → SA node"
    ],
    answer:
        "SA node → AV node → Bundle of His → right and left bundle branches → Purkinje fibers",
    rationale:
        "Normal conduction begins at the SA node and travels through the AV node, Bundle of His, right and left bundle branches, and finally the Purkinje fibers.",
    takeaway:
        "SA → AV → His → R/L branches → Purkinje."
},

{
    id: "CARD-CON-028",
    caseId: "CARD-CON-CASE-028",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Electrophysiology",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse is teaching a student about the electrophysiologic properties of cardiac cells. Which statements are correct? Select all that apply.",
    choices: [
        "Automaticity refers to spontaneous impulse generation.",
        "Excitability refers to the ability to respond to an impulse.",
        "Conductivity refers to transmitting a stimulus from cell to cell.",
        "Contractility refers to shortening of muscle cells to generate pressure.",
        "Automaticity refers to the mechanical pumping of blood."
    ],
    answer: [
        "Automaticity refers to spontaneous impulse generation.",
        "Excitability refers to the ability to respond to an impulse.",
        "Conductivity refers to transmitting a stimulus from cell to cell.",
        "Contractility refers to shortening of muscle cells to generate pressure."
    ],
    rationale:
        "Automaticity is spontaneous impulse generation, excitability is the response to stimulation, conductivity is transmission of the impulse, and contractility is mechanical shortening that creates pressure.",
    takeaway:
        "Automaticity = pace; excitability = respond; conductivity = transmit; contractility = pump."
},

{
    id: "CARD-CON-029",
    caseId: "CARD-CON-CASE-029",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Clinical Application",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client's cardiac rhythm changes and the heart rate decreases to 34 beats/min. The client becomes dizzy and hypotensive. Which physiologic consequence should the nurse recognize as the priority concern?",
    choices: [
        "Decreased cardiac output",
        "Increased ventricular filling time",
        "Increased atrial automaticity",
        "Increased myocardial oxygen delivery"
    ],
    answer:
        "Decreased cardiac output",
    rationale:
        "A severe decrease in heart rate can reduce cardiac output and tissue perfusion. Dizziness and hypotension are signs that the slower rhythm is affecting perfusion.",
    takeaway:
        "Never judge a rhythm by rate alone—look for signs of decreased cardiac output."
},

{
    id: "CARD-CON-030",
    caseId: "CARD-CON-CASE-030",
    patient: randomPatient(),
    topic: "Cardiac Conduction",
    subtopic: "Clinical Judgment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
        "The cardiac monitor suddenly displays an abnormal rhythm. What should the nurse do first?",
    choices: [
        "Assess the client",
        "Administer an antiarrhythmic medication",
        "Prepare for defibrillation",
        "Call the provider before entering the room"
    ],
    answer:
        "Assess the client",
    rationale:
        "The PPT emphasizes the golden rule of dysrhythmia care: assess and treat the patient, not simply the monitor. Artifact can mimic serious rhythms, so the nurse should first determine the client's clinical condition.",
    takeaway:
        "Golden Rule: Treat the PATIENT, not the MONITOR."
}

];
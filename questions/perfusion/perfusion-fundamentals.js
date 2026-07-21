const perfusionFundamentalsQuestions = [
  {
    id: "PERF-FND-001",
    caseId: "PERF-FND-CASE-001",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Definition of Perfusion",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes perfusion?",
    choices: [
      "The delivery of blood and oxygen needed to support cellular function",
      "The movement of air into and out of the lungs only",
      "The production of antibodies by white blood cells",
      "The removal of fluid through the kidneys"
    ],
    answer:
      "The delivery of blood and oxygen needed to support cellular function",
    rationale:
      "Perfusion is the delivery of blood to tissues so cells receive oxygen and nutrients needed for normal function.",
    takeaway:
      "Perfusion means adequate blood flow to support oxygenation and cellular function."
  },
  {
    id: "PERF-FND-002",
    caseId: "PERF-FND-CASE-002",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Central Perfusion",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which organs are included when the nurse assesses central perfusion?",
    choices: [
      "Brain, heart, and lungs",
      "Skin, fingers, and toes",
      "Stomach, bowel, and bladder",
      "Bones, joints, and muscles"
    ],
    answer: "Brain, heart, and lungs",
    rationale:
      "Central perfusion refers to blood flow supporting vital organs, particularly the brain, heart, and lungs.",
    takeaway:
      "The body protects perfusion to the brain, heart, and lungs first."
  },
  {
    id: "PERF-FND-003",
    caseId: "PERF-FND-CASE-003",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Tissue Perfusion",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment finding most directly reflects impaired peripheral tissue perfusion?",
    choices: [
      "Cool toes with delayed capillary refill",
      "Clear bilateral breath sounds",
      "Regular apical pulse",
      "Alert and oriented mental status"
    ],
    answer: "Cool toes with delayed capillary refill",
    rationale:
      "Coolness and delayed capillary refill indicate reduced blood flow to peripheral tissue.",
    takeaway:
      "Peripheral perfusion problems often appear first in the fingers and toes."
  },
  {
    id: "PERF-FND-004",
    caseId: "PERF-FND-CASE-004",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Peripheral Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessments should the nurse include when evaluating peripheral perfusion? Select all that apply.",
    choices: [
      "Pulse strength",
      "Skin color",
      "Skin temperature",
      "Capillary refill",
      "Sensation and movement",
      "Bowel sounds"
    ],
    answer: [
      "Pulse strength",
      "Skin color",
      "Skin temperature",
      "Capillary refill",
      "Sensation and movement"
    ],
    rationale:
      "Peripheral perfusion assessment includes pulses, color, temperature, capillary refill, sensation, movement, and pain.",
    takeaway:
      "Assess circulation, movement, sensation, temperature, color, and pain."
  },
  {
    id: "PERF-FND-005",
    caseId: "PERF-FND-CASE-005",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Ischemia",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement correctly describes ischemia?",
    choices: [
      "Blood flow is reduced, causing potentially reversible tissue hypoxia",
      "The tissue has undergone irreversible cellular death",
      "Blood flow and oxygen delivery are increased",
      "The tissue has developed a bacterial infection"
    ],
    answer:
      "Blood flow is reduced, causing potentially reversible tissue hypoxia",
    rationale:
      "Ischemia results from reduced blood flow and insufficient oxygen delivery. Tissue may recover if circulation is restored promptly.",
    takeaway:
      "Ischemia is impaired blood flow that may still be reversible."
  },
  {
    id: "PERF-FND-006",
    caseId: "PERF-FND-CASE-006",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Infarction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes infarction?",
    choices: [
      "Irreversible tissue death caused by loss of blood flow",
      "Temporary vasoconstriction without tissue injury",
      "Mild swelling caused by venous pooling",
      "Reversible tissue hypoxia"
    ],
    answer:
      "Irreversible tissue death caused by loss of blood flow",
    rationale:
      "Infarction occurs when blood flow is cut off long enough to cause necrosis and permanent tissue death.",
    takeaway:
      "Ischemia may be reversible; infarction means irreversible necrosis."
  },
  {
    id: "PERF-FND-007",
    caseId: "PERF-FND-CASE-007",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Ischemia Versus Infarction",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which clinical comparison between ischemia and infarction is correct?",
    choices: [
      "Angina represents ischemia, while myocardial infarction represents tissue death",
      "Angina represents infarction, while myocardial infarction is reversible",
      "Both angina and myocardial infarction always cause permanent tissue death",
      "Neither condition involves impaired blood flow"
    ],
    answer:
      "Angina represents ischemia, while myocardial infarction represents tissue death",
    rationale:
      "Angina results from temporary myocardial ischemia. A myocardial infarction involves irreversible myocardial necrosis.",
    takeaway:
      "Angina is reversible ischemia; myocardial infarction is irreversible injury."
  },
  {
    id: "PERF-FND-008",
    caseId: "PERF-FND-CASE-008",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Arterial Function",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What is the primary function of the arterial system?",
    choices: [
      "Deliver oxygenated blood from the left side of the heart to tissues",
      "Return blood from tissues to the right side of the heart",
      "Produce clotting factors",
      "Drain lymphatic fluid only"
    ],
    answer:
      "Deliver oxygenated blood from the left side of the heart to tissues",
    rationale:
      "Arteries deliver oxygenated blood and nutrients from the left side of the heart to body tissues.",
    takeaway:
      "Arterial circulation is the oxygen-delivery system."
  },
  {
    id: "PERF-FND-009",
    caseId: "PERF-FND-CASE-009",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Venous Function",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What is the primary function of the venous system?",
    choices: [
      "Return blood from tissues to the right side of the heart",
      "Deliver oxygenated blood from the heart to all tissues",
      "Generate the systolic blood pressure",
      "Control antibody formation"
    ],
    answer:
      "Return blood from tissues to the right side of the heart",
    rationale:
      "The venous system returns blood from the capillary beds to the right side of the heart.",
    takeaway:
      "Venous circulation is the blood-return system."
  },
  {
    id: "PERF-FND-010",
    caseId: "PERF-FND-CASE-010",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Arterial Versus Venous Disease",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement correctly compares arterial and venous disorders?",
    choices: [
      "Arterial disease impairs oxygen delivery, while venous disease impairs blood return",
      "Arterial disease causes blood pooling, while venous disease causes tissue ischemia only",
      "Both disorders primarily affect airflow",
      "Venous disease always causes absent arterial pulses"
    ],
    answer:
      "Arterial disease impairs oxygen delivery, while venous disease impairs blood return",
    rationale:
      "Arterial disease reduces oxygenated blood flow to tissue. Venous disease causes impaired return, pooling, stasis, and edema.",
    takeaway:
      "Arterial equals delivery; venous equals return."
  },
  {
    id: "PERF-FND-011",
    caseId: "PERF-FND-CASE-011",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Venous Return",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which factors help move venous blood toward the heart? Select all that apply.",
    choices: [
      "Competent venous valves",
      "Skeletal muscle contraction",
      "Patent veins",
      "Prolonged immobility",
      "Standing still for long periods"
    ],
    answer: [
      "Competent venous valves",
      "Skeletal muscle contraction",
      "Patent veins"
    ],
    rationale:
      "Venous return depends on open veins, functioning valves, and skeletal muscle contraction. Immobility promotes stasis.",
    takeaway:
      "Veins, valves, and muscles must work together for adequate venous return."
  },
  {
    id: "PERF-FND-012",
    caseId: "PERF-FND-CASE-012",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Gravity and Venous Return",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which intervention helps improve venous return in a patient with chronic venous insufficiency?",
    choices: [
      "Elevate the legs when resting",
      "Keep the legs dependent continuously",
      "Avoid all leg movement",
      "Apply direct heat to areas with reduced sensation"
    ],
    answer: "Elevate the legs when resting",
    rationale:
      "Elevation reduces hydrostatic pressure and promotes movement of venous blood back toward the heart.",
    takeaway:
      "Elevation helps venous disease but can worsen severe arterial ischemia."
  },
  {
    id: "PERF-FND-013",
    caseId: "PERF-FND-CASE-013",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Blood Pressure Formula",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which formula describes the major determinants of blood pressure?",
    choices: [
      "Blood pressure equals cardiac output multiplied by peripheral vascular resistance",
      "Blood pressure equals heart rate divided by respiratory rate",
      "Blood pressure equals stroke volume minus vascular resistance",
      "Blood pressure equals oxygen saturation multiplied by pulse pressure"
    ],
    answer:
      "Blood pressure equals cardiac output multiplied by peripheral vascular resistance",
    rationale:
      "Blood pressure is determined primarily by cardiac output and peripheral vascular resistance.",
    takeaway:
      "BP = cardiac output × peripheral vascular resistance."
  },
  {
    id: "PERF-FND-014",
    caseId: "PERF-FND-CASE-014",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Systolic Pressure",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What does systolic blood pressure represent?",
    choices: [
      "The pressure generated during left ventricular contraction",
      "The pressure during complete cardiac relaxation only",
      "The amount of oxygen dissolved in blood",
      "The pressure inside the venous valves"
    ],
    answer:
      "The pressure generated during left ventricular contraction",
    rationale:
      "Systolic pressure reflects the force generated when the left ventricle contracts.",
    takeaway:
      "Systolic pressure reflects ventricular contraction and arterial resistance."
  },
  {
    id: "PERF-FND-015",
    caseId: "PERF-FND-CASE-015",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Diastolic Pressure",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What does diastolic blood pressure represent?",
    choices: [
      "Pressure against arterial walls while the heart relaxes",
      "Pressure generated during ventricular contraction",
      "The amount of blood in the venous system",
      "The oxygen content of capillary blood"
    ],
    answer:
      "Pressure against arterial walls while the heart relaxes",
    rationale:
      "Diastolic pressure reflects arterial pressure during ventricular relaxation.",
    takeaway:
      "Diastolic pressure reflects resting vascular resistance."
  },
  {
    id: "PERF-FND-016",
    caseId: "PERF-FND-CASE-016",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "RAAS",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A decrease in renal blood flow activates the renin-angiotensin-aldosterone system. Which response should the nurse expect?",
    choices: [
      "Vasoconstriction with sodium and water retention",
      "Vasodilation with increased sodium excretion",
      "Decreased blood volume and decreased vascular resistance",
      "Increased urine output with reduced blood pressure"
    ],
    answer:
      "Vasoconstriction with sodium and water retention",
    rationale:
      "RAAS activation produces angiotensin II-mediated vasoconstriction and aldosterone-mediated sodium and water retention.",
    takeaway:
      "RAAS raises blood pressure through vasoconstriction and volume retention."
  },
  {
    id: "PERF-FND-017",
    caseId: "PERF-FND-CASE-017",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Baroreceptors",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Where are important arterial baroreceptors located?",
    choices: [
      "Carotid arteries and aortic arch",
      "Kidneys and bladder",
      "Liver and pancreas",
      "Femur and tibia"
    ],
    answer: "Carotid arteries and aortic arch",
    rationale:
      "Baroreceptors in the carotid sinus and aortic arch detect changes in arterial pressure and initiate autonomic responses.",
    takeaway:
      "Baroreceptors rapidly sense and respond to blood-pressure changes."
  },
  {
    id: "PERF-FND-018",
    caseId: "PERF-FND-CASE-018",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Aging and Perfusion",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which cardiovascular changes are expected with aging? Select all that apply.",
    choices: [
      "Stiffer large arteries",
      "Reduced baroreceptor sensitivity",
      "Increased risk for orthostatic hypotension",
      "Reduced cardiac reserve",
      "Improved maximum heart rate during exercise"
    ],
    answer: [
      "Stiffer large arteries",
      "Reduced baroreceptor sensitivity",
      "Increased risk for orthostatic hypotension",
      "Reduced cardiac reserve"
    ],
    rationale:
      "Aging causes arterial stiffness, reduced baroreceptor sensitivity, impaired ventricular relaxation, and decreased cardiac reserve.",
    takeaway:
      "Older adults may appear stable at rest but decompensate during stress or activity."
  },
  {
    id: "PERF-FND-019",
    caseId: "PERF-FND-CASE-019",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Orthostatic Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "An older adult becomes dizzy when standing from bed. What should the nurse do first?",
    choices: [
      "Assist the patient back to a safe sitting or lying position",
      "Encourage the patient to continue walking",
      "Leave the patient standing to adapt",
      "Administer a diuretic"
    ],
    answer:
      "Assist the patient back to a safe sitting or lying position",
    rationale:
      "Dizziness may indicate orthostatic hypotension. The immediate priority is preventing a fall and restoring a safe position.",
    takeaway:
      "Dizziness with position change means stop and protect the patient."
  },
  {
    id: "PERF-FND-020",
    caseId: "PERF-FND-CASE-020",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "CVD Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which cardiovascular risk factors are modifiable? Select all that apply.",
    choices: [
      "Smoking",
      "Sedentary lifestyle",
      "Obesity",
      "Chronic stress",
      "Age",
      "Family history"
    ],
    answer: [
      "Smoking",
      "Sedentary lifestyle",
      "Obesity",
      "Chronic stress"
    ],
    rationale:
      "Smoking, inactivity, obesity, diet, stress, hypertension, and diabetes can be modified or managed. Age and family history cannot be changed.",
    takeaway:
      "Focus prevention teaching on modifiable risk factors."
  },
  {
    id: "PERF-FND-021",
    caseId: "PERF-FND-CASE-021",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Smoking Cessation",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which sequence represents the five A's of smoking cessation counseling?",
    choices: [
      "Ask, advise, assess, assist, arrange",
      "Assess, avoid, assign, alert, arrange",
      "Ask, administer, analyze, assist, admit",
      "Advise, assess, avoid, authorize, arrange"
    ],
    answer: "Ask, advise, assess, assist, arrange",
    rationale:
      "The five A's are Ask about tobacco use, Advise quitting, Assess readiness, Assist with a plan, and Arrange follow-up.",
    takeaway:
      "Smoking cessation requires assessment, support, and follow-up."
  },
  {
    id: "PERF-FND-022",
    caseId: "PERF-FND-CASE-022",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Chest Pain",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient reports new substernal pressure and diaphoresis. How should the nurse interpret the symptom?",
    choices: [
      "Consider the discomfort ischemic until proven otherwise",
      "Assume the discomfort is gastrointestinal",
      "Wait for the pain to become severe",
      "Encourage the patient to walk"
    ],
    answer:
      "Consider the discomfort ischemic until proven otherwise",
    rationale:
      "New chest pressure, heaviness, indigestion, or discomfort may indicate myocardial ischemia and requires rapid assessment.",
    takeaway:
      "Treat new chest discomfort as possible cardiac ischemia until ruled out."
  },
  {
    id: "PERF-FND-023",
    caseId: "PERF-FND-CASE-023",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Chest Pain Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which questions should the nurse ask when assessing chest discomfort? Select all that apply.",
    choices: [
      "When did the discomfort begin?",
      "What provoked the discomfort?",
      "How would you describe the discomfort?",
      "Does the discomfort radiate?",
      "What is the severity?",
      "What is your favorite food?"
    ],
    answer: [
      "When did the discomfort begin?",
      "What provoked the discomfort?",
      "How would you describe the discomfort?",
      "Does the discomfort radiate?",
      "What is the severity?"
    ],
    rationale:
      "A complete assessment includes onset, provocation, quality, radiation, severity, timing, and associated manifestations.",
    takeaway:
      "Use a structured symptom assessment for all possible ischemic chest discomfort."
  },
  {
    id: "PERF-FND-024",
    caseId: "PERF-FND-CASE-024",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Priority Perfusion Finding",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a suddenly cold, pale foot and absent pedal pulse",
      "A patient with mild bilateral ankle edema after standing",
      "A patient requesting smoking-cessation information",
      "A patient scheduled for routine cholesterol testing"
    ],
    answer:
      "A patient with a suddenly cold, pale foot and absent pedal pulse",
    rationale:
      "Sudden pallor, coolness, and loss of pulse suggest acute arterial occlusion and threatened limb perfusion.",
    takeaway:
      "Sudden loss of distal perfusion is a vascular emergency."
  },
  {
    id: "PERF-FND-025",
    caseId: "PERF-FND-CASE-025",
    patient: randomPatient(),
    topic: "Perfusion Fundamentals",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates adequate peripheral perfusion?",
    choices: [
      "Warm extremities, palpable pulses, brisk capillary refill, and intact sensation",
      "Cool toes with delayed capillary refill",
      "Absent pedal pulses and numbness",
      "Pallor with inability to move the extremity"
    ],
    answer:
      "Warm extremities, palpable pulses, brisk capillary refill, and intact sensation",
    rationale:
      "Warm skin, normal color, palpable pulses, adequate refill, movement, and sensation indicate effective peripheral circulation.",
    takeaway:
      "Adequate perfusion preserves warmth, color, pulse, sensation, and movement."
  }
];
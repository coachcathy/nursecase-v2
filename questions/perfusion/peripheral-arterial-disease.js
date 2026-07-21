const peripheralArterialDiseaseQuestions = [
  {
    id: "PERF-PAD-001",
    caseId: "PERF-PAD-CASE-001",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Pathophysiology",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes peripheral arterial disease?",
    choices: [
      "A chronic reduction in arterial blood flow to the extremities",
      "A disorder causing excessive venous return to the heart",
      "An infection of the peripheral veins",
      "A condition caused only by defective venous valves"
    ],
    answer:
      "A chronic reduction in arterial blood flow to the extremities",
    rationale:
      "Peripheral arterial disease occurs when partial or complete arterial obstruction decreases oxygenated blood flow to the extremities.",
    takeaway:
      "PAD is an arterial oxygen-delivery problem."
  },
  {
    id: "PERF-PAD-002",
    caseId: "PERF-PAD-CASE-002",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Cause",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which disease process is the most common underlying cause of peripheral arterial disease?",
    choices: [
      "Atherosclerosis",
      "Pneumonia",
      "Venous valve failure",
      "Acute kidney infection"
    ],
    answer: "Atherosclerosis",
    rationale:
      "PAD is most often caused by systemic atherosclerosis that narrows or obstructs arteries supplying the extremities.",
    takeaway:
      "PAD is a manifestation of systemic atherosclerosis."
  },
  {
    id: "PERF-PAD-003",
    caseId: "PERF-PAD-CASE-003",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors increase a patient's risk for peripheral arterial disease? Select all that apply.",
    choices: [
      "Smoking",
      "Diabetes mellitus",
      "Hypertension",
      "Hyperlipidemia",
      "Sedentary lifestyle",
      "Low LDL cholesterol"
    ],
    answer: [
      "Smoking",
      "Diabetes mellitus",
      "Hypertension",
      "Hyperlipidemia",
      "Sedentary lifestyle"
    ],
    rationale:
      "PAD shares the major risk factors of atherosclerosis, including smoking, diabetes, hypertension, dyslipidemia, obesity, and inactivity.",
    takeaway:
      "Smoking is one of the most important modifiable PAD risk factors."
  },
  {
    id: "PERF-PAD-004",
    caseId: "PERF-PAD-CASE-004",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Intermittent Claudication",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which symptom is most characteristic of intermittent claudication?",
    choices: [
      "Leg pain during walking that is relieved by rest",
      "Leg swelling that improves with standing",
      "Constant calf pain relieved by massage",
      "Bilateral itching relieved by elevation"
    ],
    answer:
      "Leg pain during walking that is relieved by rest",
    rationale:
      "Intermittent claudication is reproducible cramping, aching, or burning muscle pain caused by activity and relieved by rest.",
    takeaway:
      "Claudication means exercise-induced ischemic pain relieved by rest."
  },
  {
    id: "PERF-PAD-005",
    caseId: "PERF-PAD-CASE-005",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Disease Progression",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient reports that calf pain now begins after walking one block instead of three blocks. How should the nurse interpret this change?",
    choices: [
      "The peripheral arterial disease may be progressing",
      "The patient's arterial circulation is improving",
      "The patient is developing chronic venous insufficiency",
      "The symptom is unrelated to perfusion"
    ],
    answer:
      "The peripheral arterial disease may be progressing",
    rationale:
      "As PAD worsens, claudication occurs after progressively shorter walking distances because less arterial flow is available during activity.",
    takeaway:
      "A shorter claudication distance suggests worsening disease."
  },
  {
    id: "PERF-PAD-006",
    caseId: "PERF-PAD-CASE-006",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Rest Pain",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with PAD reports burning foot pain that awakens them at night and improves when the leg is dangled over the side of the bed. What does this finding suggest?",
    choices: [
      "Advanced arterial insufficiency with rest pain",
      "Improving venous return",
      "Early uncomplicated hypertension",
      "Normal age-related circulation"
    ],
    answer:
      "Advanced arterial insufficiency with rest pain",
    rationale:
      "Rest pain indicates severe ischemia. Dependency may temporarily improve arterial flow through gravity.",
    takeaway:
      "Nighttime foot pain relieved by dependency indicates advanced PAD."
  },
  {
    id: "PERF-PAD-007",
    caseId: "PERF-PAD-CASE-007",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Physical Findings",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse expect in an extremity affected by PAD? Select all that apply.",
    choices: [
      "Cool skin",
      "Diminished pulses",
      "Hair loss on the lower leg",
      "Thickened toenails",
      "Pallor with elevation",
      "Warm edematous skin with strong pulses"
    ],
    answer: [
      "Cool skin",
      "Diminished pulses",
      "Hair loss on the lower leg",
      "Thickened toenails",
      "Pallor with elevation"
    ],
    rationale:
      "Reduced arterial perfusion causes coolness, weak or absent pulses, trophic skin changes, hair loss, thick nails, and elevation pallor.",
    takeaway:
      "PAD produces cool, pale, poorly nourished tissue with weak pulses."
  },
  {
    id: "PERF-PAD-008",
    caseId: "PERF-PAD-CASE-008",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Dependent Rubor",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which color change may occur when a severely ischemic leg is placed in a dependent position?",
    choices: [
      "Dependent rubor",
      "Generalized cyanosis",
      "Jaundice",
      "Ecchymosis"
    ],
    answer: "Dependent rubor",
    rationale:
      "A severely ischemic limb may become dusky red when dependent because dilated vessels fill with poorly oxygenated blood.",
    takeaway:
      "Elevation pallor and dependent rubor are classic arterial findings."
  },
  {
    id: "PERF-PAD-009",
    caseId: "PERF-PAD-CASE-009",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "PAD Stages",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has exercise-induced calf pain that stops with rest but no tissue loss. Which stage of chronic PAD is most consistent with this finding?",
    choices: [
      "Stage II",
      "Stage I",
      "Stage III",
      "Stage IV"
    ],
    answer: "Stage II",
    rationale:
      "Stage II PAD is characterized by intermittent claudication during activity.",
    takeaway:
      "Stage II equals claudication."
  },
  {
    id: "PERF-PAD-010",
    caseId: "PERF-PAD-CASE-010",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "PAD Stages",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is most consistent with Stage III PAD?",
    choices: [
      "Ischemic pain while resting",
      "No symptoms with absent pedal pulses",
      "Pain only during strenuous activity",
      "Gangrene of the toes"
    ],
    answer: "Ischemic pain while resting",
    rationale:
      "Stage III PAD involves rest pain caused by advanced arterial insufficiency.",
    takeaway:
      "Stage III equals rest pain."
  },
  {
    id: "PERF-PAD-011",
    caseId: "PERF-PAD-CASE-011",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "PAD Stages",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is characteristic of Stage IV PAD?",
    choices: [
      "Ulceration, necrosis, or gangrene",
      "No symptoms",
      "Mild edema only",
      "Pain relieved by leg elevation"
    ],
    answer:
      "Ulceration, necrosis, or gangrene",
    rationale:
      "Stage IV PAD involves tissue loss from severe, prolonged ischemia.",
    takeaway:
      "Stage IV equals tissue death."
  },
  {
    id: "PERF-PAD-012",
    caseId: "PERF-PAD-CASE-012",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Six Ps",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are included in the six Ps of acute arterial ischemia? Select all that apply.",
    choices: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis",
      "Poikilothermy",
      "Pitting edema"
    ],
    answer: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis",
      "Poikilothermy"
    ],
    rationale:
      "The six Ps are pain, pallor, pulselessness, paresthesia, paralysis, and poikilothermy.",
    takeaway:
      "The six Ps signal threatened arterial perfusion."
  },
  {
    id: "PERF-PAD-013",
    caseId: "PERF-PAD-CASE-013",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "The nurse cannot palpate a pedal pulse in a patient with PAD. What should the nurse do next?",
    choices: [
      "Assess the pulse using a Doppler device",
      "Massage the foot vigorously",
      "Apply a heating pad",
      "Elevate the leg above heart level"
    ],
    answer:
      "Assess the pulse using a Doppler device",
    rationale:
      "A Doppler device should be used when a pulse is not palpable. A newly absent pulse must be reported promptly.",
    takeaway:
      "Use Doppler for nonpalpable pulses and report acute changes."
  },
  {
    id: "PERF-PAD-014",
    caseId: "PERF-PAD-CASE-014",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "ABI",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "How is the ankle-brachial index calculated?",
    choices: [
      "Ankle systolic pressure divided by brachial systolic pressure",
      "Brachial systolic pressure divided by ankle systolic pressure",
      "Ankle diastolic pressure divided by heart rate",
      "Mean arterial pressure divided by pulse pressure"
    ],
    answer:
      "Ankle systolic pressure divided by brachial systolic pressure",
    rationale:
      "The ABI compares ankle systolic pressure with brachial systolic pressure to estimate lower-extremity arterial flow.",
    takeaway:
      "ABI = ankle systolic pressure ÷ brachial systolic pressure."
  },
  {
    id: "PERF-PAD-015",
    caseId: "PERF-PAD-CASE-015",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "ABI Interpretation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "A patient has an ankle systolic pressure of 84 mm Hg and a brachial systolic pressure of 120 mm Hg. What is the ankle-brachial index?",
    choices: [
      "0.70",
      "1.43",
      "0.36",
      "1.20"
    ],
    answer: "0.70",
    rationale:
      "The ABI is calculated as 84 divided by 120, which equals 0.70. This is consistent with mild-to-moderate PAD.",
    takeaway:
      "An ABI below 0.90 supports a diagnosis of PAD."
  },
  {
    id: "PERF-PAD-016",
    caseId: "PERF-PAD-CASE-016",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "ABI Interpretation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "How should the nurse interpret an ankle-brachial index of 0.35?",
    choices: [
      "Severe PAD with risk for rest pain and tissue loss",
      "Normal arterial perfusion",
      "Noncompressible arteries",
      "Normal venous return"
    ],
    answer:
      "Severe PAD with risk for rest pain and tissue loss",
    rationale:
      "An ABI of 0.40 or less indicates severe arterial disease and a high risk for ischemic tissue damage.",
    takeaway:
      "The lower the ABI, the more severe the PAD."
  },
  {
    id: "PERF-PAD-017",
    caseId: "PERF-PAD-CASE-017",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "ABI Preparation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which actions are appropriate before an ankle-brachial index test? Select all that apply.",
    choices: [
      "Have the patient rest supine before testing",
      "Avoid smoking before the test",
      "Avoid caffeine before the test",
      "Measure both legs separately",
      "Encourage vigorous exercise immediately before testing",
      "Keep the patient standing throughout the test"
    ],
    answer: [
      "Have the patient rest supine before testing",
      "Avoid smoking before the test",
      "Avoid caffeine before the test",
      "Measure both legs separately"
    ],
    rationale:
      "The patient should rest supine, avoid vasoconstricting substances, and have each leg assessed individually.",
    takeaway:
      "Proper preparation prevents falsely altered ABI results."
  },
  {
    id: "PERF-PAD-018",
    caseId: "PERF-PAD-CASE-018",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Exercise Therapy",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which exercise instruction should the nurse provide to a patient with intermittent claudication?",
    choices: [
      "Walk until moderate pain occurs, rest, and then resume walking",
      "Avoid walking to prevent all leg discomfort",
      "Exercise only while lying down",
      "Continue walking through severe unrelieved pain"
    ],
    answer:
      "Walk until moderate pain occurs, rest, and then resume walking",
    rationale:
      "A structured walk-rest-walk program promotes collateral circulation and can improve walking distance.",
    takeaway:
      "Controlled walking helps build collateral circulation."
  },
  {
    id: "PERF-PAD-019",
    caseId: "PERF-PAD-CASE-019",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Positioning",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which position is most appropriate for a patient with severe arterial rest pain?",
    choices: [
      "Allow the leg to remain dependent as prescribed for comfort",
      "Elevate the leg above heart level",
      "Place the leg in a tight compression wrap",
      "Cross the legs while sitting"
    ],
    answer:
      "Allow the leg to remain dependent as prescribed for comfort",
    rationale:
      "A dependent position may improve arterial flow through gravity. Elevation can further reduce blood flow to an ischemic limb.",
    takeaway:
      "Dependency may relieve arterial pain; elevation helps venous disease."
  },
  {
    id: "PERF-PAD-020",
    caseId: "PERF-PAD-CASE-020",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Foot Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which foot-care instructions should the nurse include for a patient with PAD? Select all that apply.",
    choices: [
      "Inspect the feet daily",
      "Wear well-fitting shoes",
      "Avoid walking barefoot",
      "Protect the feet from temperature extremes",
      "Use a heating pad on numb feet",
      "Cut corns with a razor"
    ],
    answer: [
      "Inspect the feet daily",
      "Wear well-fitting shoes",
      "Avoid walking barefoot",
      "Protect the feet from temperature extremes"
    ],
    rationale:
      "Reduced perfusion delays healing, so injury prevention and daily inspection are essential. Direct heat and self-treatment of corns can cause tissue damage.",
    takeaway:
      "Prevent even minor injury in an ischemic foot."
  },
  {
    id: "PERF-PAD-021",
    caseId: "PERF-PAD-CASE-021",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Vasoconstriction",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with PAD indicates a need for further teaching?",
    choices: [
      "I will use a heating pad directly on my feet when they feel cold",
      "I will stop smoking",
      "I will avoid restrictive clothing",
      "I will inspect my feet every day"
    ],
    answer:
      "I will use a heating pad directly on my feet when they feel cold",
    rationale:
      "Reduced sensation and perfusion increase the risk for burns. Direct heat should be avoided.",
    takeaway:
      "Use warm clothing, not direct heat, for ischemic extremities."
  },
  {
    id: "PERF-PAD-022",
    caseId: "PERF-PAD-CASE-022",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Medication Therapy",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medications may be included in the treatment plan for PAD? Select all that apply.",
    choices: [
      "Aspirin",
      "Clopidogrel",
      "Cilostazol",
      "A statin",
      "Antihypertensive therapy",
      "Routine thrombolytic therapy for stable chronic PAD"
    ],
    answer: [
      "Aspirin",
      "Clopidogrel",
      "Cilostazol",
      "A statin",
      "Antihypertensive therapy"
    ],
    rationale:
      "PAD treatment includes antiplatelet therapy, symptom management, lipid reduction, and control of cardiovascular risk factors.",
    takeaway:
      "PAD management targets both limb symptoms and systemic cardiovascular risk."
  },
  {
    id: "PERF-PAD-023",
    caseId: "PERF-PAD-CASE-023",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Post-Revascularization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "A patient who had a femoropopliteal bypass 6 hours ago reports sudden severe leg pain. The foot is cool and the pedal pulse is absent. What should the nurse do first?",
    choices: [
      "Notify the surgeon immediately",
      "Elevate the leg above the heart",
      "Apply a heating pad",
      "Reassess in 4 hours"
    ],
    answer:
      "Notify the surgeon immediately",
    rationale:
      "Sudden pain, coolness, and loss of pulse may indicate graft occlusion, which threatens the limb and requires immediate intervention.",
    takeaway:
      "Loss of perfusion after arterial bypass is an emergency."
  },
  {
    id: "PERF-PAD-024",
    caseId: "PERF-PAD-CASE-024",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Post-Procedure Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which assessments are priorities after an endovascular arterial procedure? Select all that apply.",
    choices: [
      "Puncture-site bleeding",
      "Distal pulses",
      "Extremity color and temperature",
      "Blood pressure and signs of shock",
      "Motor and sensory function",
      "Bowel movement frequency only"
    ],
    answer: [
      "Puncture-site bleeding",
      "Distal pulses",
      "Extremity color and temperature",
      "Blood pressure and signs of shock",
      "Motor and sensory function"
    ],
    rationale:
      "The nurse must monitor for hemorrhage, impaired distal perfusion, shock, and neurovascular compromise after arterial intervention.",
    takeaway:
      "After revascularization, assess both bleeding and distal circulation."
  },
  {
    id: "PERF-PAD-025",
    caseId: "PERF-PAD-CASE-025",
    patient: randomPatient(),
    topic: "Peripheral Arterial Disease",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with sudden foot pallor, severe pain, numbness, and an absent pulse",
      "A patient with chronic claudication after walking two blocks",
      "A patient asking for help with smoking cessation",
      "A patient with thickened toenails and stable weak pulses"
    ],
    answer:
      "A patient with sudden foot pallor, severe pain, numbness, and an absent pulse",
    rationale:
      "Sudden pain, pallor, paresthesia, and pulselessness suggest acute arterial occlusion and threatened limb viability.",
    takeaway:
      "Acute changes take priority over stable chronic PAD findings."
  }
];
const perfusionPrioritySataQuestions = [
  {
    id: "PERF-PS-001",
    caseId: "PERF-PS-CASE-001",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Acute Arterial Occlusion",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a suddenly cold, pale, pulseless leg",
      "A patient with chronic ankle edema requesting elevation",
      "A patient with controlled hypertension reporting a mild headache",
      "A patient taking warfarin who needs dietary teaching"
    ],
    answer:
      "A patient with a suddenly cold, pale, pulseless leg",
    rationale:
      "Sudden pallor, coldness, and loss of pulses indicate acute arterial occlusion. The extremity is at immediate risk for ischemic tissue damage and requires emergency intervention.",
    takeaway:
      "Acute loss of arterial circulation is a limb-threatening emergency."
  },

  {
    id: "PERF-PS-002",
    caseId: "PERF-PS-CASE-002",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient with a diagnosed deep vein thrombosis suddenly reports chest pain and shortness of breath. What should the nurse do first?",
    choices: [
      "Apply oxygen and assess respiratory status",
      "Massage the affected leg",
      "Encourage the patient to ambulate",
      "Place a heating pad on the calf"
    ],
    answer:
      "Apply oxygen and assess respiratory status",
    rationale:
      "Sudden chest pain and dyspnea in a patient with DVT suggest pulmonary embolism. Supporting oxygenation and rapidly assessing respiratory and hemodynamic status are immediate priorities.",
    takeaway:
      "Suspected pulmonary embolism requires immediate oxygenation and emergency assessment."
  },

  {
    id: "PERF-PS-003",
    caseId: "PERF-PS-CASE-003",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Hypertensive Emergency",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which finding in a patient with a blood pressure of 224/126 mm Hg most strongly suggests a hypertensive emergency?",
    choices: [
      "New confusion and blurred vision",
      "A history of hypertension",
      "Mild anxiety about hospitalization",
      "A missed medication dose"
    ],
    answer:
      "New confusion and blurred vision",
    rationale:
      "A hypertensive emergency involves severe hypertension with acute target-organ damage. Neurologic changes such as confusion and visual disturbance suggest cerebral or retinal injury.",
    takeaway:
      "Severe blood pressure plus acute organ dysfunction equals hypertensive emergency."
  },

  {
    id: "PERF-PS-004",
    caseId: "PERF-PS-CASE-004",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "DVT Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are consistent with a deep vein thrombosis? Select all that apply.",
    choices: [
      "Unilateral leg swelling",
      "Calf warmth",
      "Localized tenderness",
      "Redness of the affected extremity",
      "Sudden absence of pedal pulses",
      "Bilateral equal leg circumference"
    ],
    answer: [
      "Unilateral leg swelling",
      "Calf warmth",
      "Localized tenderness",
      "Redness of the affected extremity"
    ],
    rationale:
      "DVT commonly causes unilateral swelling, warmth, tenderness, and erythema. Sudden loss of pulses indicates arterial compromise rather than venous thrombosis.",
    takeaway:
      "DVT usually presents with unilateral warmth, swelling, redness, and tenderness."
  },

  {
    id: "PERF-PS-005",
    caseId: "PERF-PS-CASE-005",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Heparin Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which nursing actions are appropriate for a patient receiving an unfractionated heparin infusion? Select all that apply.",
    choices: [
      "Monitor the aPTT or anti-Xa level",
      "Assess for bleeding",
      "Monitor the platelet count",
      "Keep protamine sulfate available",
      "Administer intramuscular injections routinely",
      "Use a soft toothbrush"
    ],
    answer: [
      "Monitor the aPTT or anti-Xa level",
      "Assess for bleeding",
      "Monitor the platelet count",
      "Keep protamine sulfate available",
      "Use a soft toothbrush"
    ],
    rationale:
      "Heparin requires coagulation monitoring, bleeding precautions, and platelet monitoring for heparin-induced thrombocytopenia. Protamine sulfate reverses heparin. Intramuscular injections should be avoided because of bleeding risk.",
    takeaway:
      "Monitor coagulation, bleeding, and platelets during heparin therapy."
  },

  {
    id: "PERF-PS-006",
    caseId: "PERF-PS-CASE-006",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Warfarin Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which instructions should the nurse provide to a patient taking warfarin? Select all that apply.",
    choices: [
      "Keep vitamin K intake consistent",
      "Have the INR checked as prescribed",
      "Use an electric razor",
      "Report black, tarry stools",
      "Double the next dose after a missed dose",
      "Check with the provider before taking new medications"
    ],
    answer: [
      "Keep vitamin K intake consistent",
      "Have the INR checked as prescribed",
      "Use an electric razor",
      "Report black, tarry stools",
      "Check with the provider before taking new medications"
    ],
    rationale:
      "Warfarin requires consistent vitamin K intake, INR monitoring, bleeding precautions, and medication-interaction screening. A missed dose should not be doubled unless specifically directed.",
    takeaway:
      "Warfarin safety requires consistent diet, INR monitoring, and bleeding precautions."
  },

  {
    id: "PERF-PS-007",
    caseId: "PERF-PS-CASE-007",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "HIT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "A patient's platelet count decreases from 230,000/mm³ to 92,000/mm³ after several days of heparin therapy. What is the nurse's priority action?",
    choices: [
      "Stop the heparin and notify the provider",
      "Administer the next dose early",
      "Apply sequential compression devices to the affected leg",
      "Give vitamin K"
    ],
    answer:
      "Stop the heparin and notify the provider",
    rationale:
      "A substantial platelet decrease during heparin therapy suggests heparin-induced thrombocytopenia. All heparin products should be stopped and the provider notified because HIT increases thrombosis risk.",
    takeaway:
      "Suspected HIT requires immediate discontinuation of all heparin."
  },

  {
    id: "PERF-PS-008",
    caseId: "PERF-PS-CASE-008",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Peripheral Arterial Disease",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are expected in a patient with peripheral arterial disease? Select all that apply.",
    choices: [
      "Intermittent claudication",
      "Cool lower extremities",
      "Diminished pedal pulses",
      "Delayed capillary refill",
      "Dependent rubor",
      "Brown ankle discoloration with heavy edema"
    ],
    answer: [
      "Intermittent claudication",
      "Cool lower extremities",
      "Diminished pedal pulses",
      "Delayed capillary refill",
      "Dependent rubor"
    ],
    rationale:
      "PAD causes reduced arterial blood flow, resulting in claudication, coolness, weak pulses, delayed refill, pallor with elevation, and dependent rubor. Brown discoloration and marked edema are more consistent with venous disease.",
    takeaway:
      "PAD produces ischemic pain, cool skin, weak pulses, and delayed perfusion."
  },

   {
    id: "PERF-PS-009",
    caseId: "PERF-PS-CASE-009",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Venous Insufficiency",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment findings are consistent with chronic venous insufficiency? Select all that apply.",
    choices: [
      "Lower-leg edema",
      "Brown discoloration around the ankles",
      "Warm skin",
      "Pain relieved by leg elevation",
      "Varicose veins",
      "Absent pedal pulses"
    ],
    answer: [
      "Lower-leg edema",
      "Brown discoloration around the ankles",
      "Warm skin",
      "Pain relieved by leg elevation",
      "Varicose veins"
    ],
    rationale:
      "Venous insufficiency produces edema, warmth, hemosiderin staining, varicosities, and aching that improves with elevation. Pedal pulses are usually present.",
    takeaway:
      "Think warm, swollen, brown, and aching for venous insufficiency."
  },

  {
    id: "PERF-PS-010",
    caseId: "PERF-PS-CASE-010",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Pulmonary Embolism",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings suggest a pulmonary embolism? Select all that apply.",
    choices: [
      "Sudden shortness of breath",
      "Pleuritic chest pain",
      "Tachycardia",
      "Hemoptysis",
      "Low oxygen saturation",
      "Gradual bilateral ankle edema"
    ],
    answer: [
      "Sudden shortness of breath",
      "Pleuritic chest pain",
      "Tachycardia",
      "Hemoptysis",
      "Low oxygen saturation"
    ],
    rationale:
      "Pulmonary embolism typically presents with abrupt dyspnea, chest pain, tachycardia, hypoxemia, and sometimes hemoptysis.",
    takeaway:
      "Sudden respiratory symptoms in a DVT patient should make you suspect PE."
  },

  {
    id: "PERF-PS-011",
    caseId: "PERF-PS-CASE-011",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Acute Arterial Occlusion",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are part of the classic '6 Ps' of acute arterial occlusion? Select all that apply.",
    choices: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis",
      "Petechiae"
    ],
    answer: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis"
    ],
    rationale:
      "The classic six Ps are pain, pallor, pulselessness, paresthesia, paralysis, and poikilothermia.",
    takeaway:
      "Know the 6 Ps—they are tested frequently on ATI and NCLEX."
  },

  {
    id: "PERF-PS-012",
    caseId: "PERF-PS-CASE-012",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Compression Therapy",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which assessment must the nurse verify before applying compression therapy to a lower extremity?",
    choices: [
      "Adequate ankle-brachial index",
      "Blood glucose level",
      "Hemoglobin A1C",
      "Urine output"
    ],
    answer:
      "Adequate ankle-brachial index",
    rationale:
      "Compression therapy should only be applied after adequate arterial circulation has been confirmed with an ABI.",
    takeaway:
      "Always think ABI before compression."
  },

  {
    id: "PERF-PS-013",
    caseId: "PERF-PS-CASE-013",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Hypertension",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a blood pressure of 198/118 mm Hg and suddenly develops slurred speech. Which action should the nurse take first?",
    choices: [
      "Notify the provider immediately",
      "Recheck the blood pressure in one hour",
      "Encourage oral fluids",
      "Have the patient ambulate"
    ],
    answer:
      "Notify the provider immediately",
    rationale:
      "Neurologic deficits with severe hypertension suggest hypertensive emergency with possible stroke.",
    takeaway:
      "Organ damage plus severe hypertension equals emergency."
  },

  {
    id: "PERF-PS-014",
    caseId: "PERF-PS-CASE-014",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Warfarin",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient taking warfarin has an INR of 6.8 and reports black tarry stools. Which action should the nurse anticipate?",
    choices: [
      "Hold warfarin and notify the provider immediately",
      "Administer the next scheduled dose",
      "Encourage foods high in potassium",
      "Increase the daily warfarin dose"
    ],
    answer:
      "Hold warfarin and notify the provider immediately",
    rationale:
      "An elevated INR with signs of GI bleeding requires immediate intervention and possible reversal therapy.",
    takeaway:
      "High INR plus bleeding is an emergency."
  },

  {
    id: "PERF-PS-015",
    caseId: "PERF-PS-CASE-015",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Peripheral Arterial Disease",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instruction should the nurse give a patient with peripheral arterial disease?",
    choices: [
      "Stop smoking immediately",
      "Cross your legs when sitting",
      "Use heating pads on your feet",
      "Walk barefoot at home"
    ],
    answer:
      "Stop smoking immediately",
    rationale:
      "Smoking accelerates atherosclerosis and worsens peripheral arterial disease.",
    takeaway:
      "Smoking cessation is one of the most important interventions for PAD."
  },

  {
    id: "PERF-PS-016",
    caseId: "PERF-PS-CASE-016",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "DVT Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which nursing interventions help prevent deep vein thrombosis in hospitalized patients? Select all that apply.",
    choices: [
      "Early ambulation",
      "Sequential compression devices",
      "Leg exercises",
      "Adequate hydration",
      "Prescribed anticoagulants",
      "Massage the calves every shift"
    ],
    answer: [
      "Early ambulation",
      "Sequential compression devices",
      "Leg exercises",
      "Adequate hydration",
      "Prescribed anticoagulants"
    ],
    rationale:
      "Ambulation, SCDs, hydration, leg exercises, and prophylactic anticoagulation reduce venous stasis. Massaging the calves is contraindicated because it may dislodge a thrombus.",
    takeaway:
      "Prevent DVT by reducing venous stasis—not by massaging the legs."
  },

    {
    id: "PERF-PS-017",
    caseId: "PERF-PS-CASE-017",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Venous Ulcer Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions are appropriate for a patient with a venous leg ulcer? Select all that apply.",
    choices: [
      "Elevate the legs above heart level",
      "Apply prescribed compression after ABI is confirmed",
      "Encourage walking",
      "Inspect the skin daily",
      "Perform wound care as ordered",
      "Keep the legs dependent throughout the day"
    ],
    answer: [
      "Elevate the legs above heart level",
      "Apply prescribed compression after ABI is confirmed",
      "Encourage walking",
      "Inspect the skin daily",
      "Perform wound care as ordered"
    ],
    rationale:
      "Compression, elevation, exercise, and wound care reduce venous hypertension and promote healing. Keeping the legs dependent increases venous pooling.",
    takeaway:
      "Compression + elevation + walking = cornerstone of venous ulcer treatment."
  },

  {
    id: "PERF-PS-018",
    caseId: "PERF-PS-CASE-018",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A hospitalized patient suddenly becomes anxious, tachypneic, and reports sharp chest pain. What is the nurse's priority action?",
    choices: [
      "Apply oxygen and notify the rapid response team",
      "Encourage the patient to cough",
      "Ambulate the patient",
      "Elevate the legs"
    ],
    answer:
      "Apply oxygen and notify the rapid response team",
    rationale:
      "These findings suggest an acute pulmonary embolism. Supporting oxygenation and activating emergency response are immediate priorities.",
    takeaway:
      "PE = ABCs first."
  },

  {
    id: "PERF-PS-019",
    caseId: "PERF-PS-CASE-019",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Anticoagulants",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which findings should the nurse report immediately in a patient receiving anticoagulant therapy? Select all that apply.",
    choices: [
      "Black tarry stools",
      "Hematemesis",
      "Persistent nosebleeds",
      "New severe headache",
      "Large unexplained bruises",
      "Heart rate of 72 bpm"
    ],
    answer: [
      "Black tarry stools",
      "Hematemesis",
      "Persistent nosebleeds",
      "New severe headache",
      "Large unexplained bruises"
    ],
    rationale:
      "These findings may indicate significant bleeding or intracranial hemorrhage requiring immediate evaluation.",
    takeaway:
      "Any significant bleeding while anticoagulated is priority."
  },

  {
    id: "PERF-PS-020",
    caseId: "PERF-PS-CASE-020",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "PAD",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "Which patient requires immediate provider notification?",
    choices: [
      "A patient with intermittent claudication who now has rest pain",
      "A patient with mild bilateral ankle edema",
      "A patient wearing compression stockings",
      "A patient requesting smoking cessation information"
    ],
    answer:
      "A patient with intermittent claudication who now has rest pain",
    rationale:
      "Rest pain indicates worsening arterial insufficiency and critical limb ischemia.",
    takeaway:
      "PAD progressing to rest pain is an emergency warning sign."
  },

  {
    id: "PERF-PS-021",
    caseId: "PERF-PS-CASE-021",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Hypertension",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which lifestyle modifications help reduce hypertension? Select all that apply.",
    choices: [
      "Limit sodium intake",
      "Exercise regularly",
      "Stop smoking",
      "Maintain a healthy weight",
      "Limit alcohol intake",
      "Take NSAIDs daily"
    ],
    answer: [
      "Limit sodium intake",
      "Exercise regularly",
      "Stop smoking",
      "Maintain a healthy weight",
      "Limit alcohol intake"
    ],
    rationale:
      "Lifestyle modification is the first-line intervention for hypertension and reduces cardiovascular risk.",
    takeaway:
      "Healthy lifestyle changes significantly reduce blood pressure."
  },

  {
    id: "PERF-PS-022",
    caseId: "PERF-PS-CASE-022",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Acute Arterial Occlusion",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient reports sudden severe leg pain with numbness and inability to move the foot. Which action should the nurse perform first?",
    choices: [
      "Assess pulses and notify the provider immediately",
      "Elevate the extremity",
      "Apply compression stockings",
      "Massage the calf"
    ],
    answer:
      "Assess pulses and notify the provider immediately",
    rationale:
      "These findings indicate acute arterial occlusion requiring emergency vascular intervention.",
    takeaway:
      "Sudden pain + paralysis + pulselessness = vascular emergency."
  },

  {
    id: "PERF-PS-023",
    caseId: "PERF-PS-CASE-023",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "NGN Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient with a diagnosed DVT suddenly develops dyspnea, tachycardia, oxygen saturation of 86%, and pleuritic chest pain. Which intervention should the nurse implement first?",
    choices: [
      "Apply oxygen and activate the rapid response team",
      "Massage the affected calf",
      "Assist the patient to ambulate",
      "Elevate both legs"
    ],
    answer:
      "Apply oxygen and activate the rapid response team",
    rationale:
      "These findings strongly suggest pulmonary embolism. Stabilizing oxygenation and initiating emergency care are the priorities.",
    takeaway:
      "Suspected PE requires immediate oxygenation and emergency response."
  },

  {
    id: "PERF-PS-024",
    caseId: "PERF-PS-CASE-024",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "NGN Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a shallow ulcer near the medial ankle with edema, brown discoloration, palpable pedal pulses, and moderate drainage. Which intervention is most appropriate after confirming an adequate ABI?",
    choices: [
      "Apply compression therapy and elevate the legs",
      "Keep the leg dependent",
      "Massage the ulcer",
      "Apply direct heat to the leg"
    ],
    answer:
      "Apply compression therapy and elevate the legs",
    rationale:
      "These findings indicate a venous ulcer. Compression and elevation reduce venous hypertension and promote healing after adequate arterial circulation has been confirmed.",
    takeaway:
      "Venous ulcers are treated with compression and elevation."
  },

  {
    id: "PERF-PS-025",
    caseId: "PERF-PS-CASE-025",
    patient: randomPatient(),
    topic: "Perfusion Priority and SATA",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "Which perfusion conditions require immediate nursing intervention? Select all that apply.",
    choices: [
      "Sudden cold pulseless extremity",
      "Chest pain and dyspnea after a DVT",
      "Hypertensive crisis with neurologic deficits",
      "INR of 7.0 with active bleeding",
      "Rest pain in peripheral arterial disease",
      "Stable chronic varicose veins"
    ],
    answer: [
      "Sudden cold pulseless extremity",
      "Chest pain and dyspnea after a DVT",
      "Hypertensive crisis with neurologic deficits",
      "INR of 7.0 with active bleeding",
      "Rest pain in peripheral arterial disease"
    ],
    rationale:
      "These findings indicate limb-threatening ischemia, pulmonary embolism, hypertensive emergency, life-threatening anticoagulant complications, or critical limb ischemia—all requiring immediate intervention. Stable varicose veins are not an emergency.",
    takeaway:
      "Recognize the true perfusion emergencies: acute ischemia, PE, hypertensive emergency, severe anticoagulant bleeding, and critical PAD."
  }
];
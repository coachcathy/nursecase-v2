const acuteArterialOcclusionQuestions = [
  {
    id: "PERF-AAO-001",
    caseId: "PERF-AAO-CASE-001",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Definition",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes an acute arterial occlusion?",
    choices: [
      "A sudden interruption of arterial blood flow to an extremity",
      "A gradual failure of venous valves",
      "A chronic increase in lymphatic drainage",
      "A superficial inflammation of a vein"
    ],
    answer:
      "A sudden interruption of arterial blood flow to an extremity",
    rationale:
      "Acute arterial occlusion occurs when blood flow through an artery is suddenly blocked, placing the affected extremity at risk for ischemia and tissue death.",
    takeaway:
      "Acute arterial occlusion is a sudden limb-threatening loss of blood flow."
  },
  {
    id: "PERF-AAO-002",
    caseId: "PERF-AAO-CASE-002",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Causes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which conditions can cause an acute arterial occlusion? Select all that apply.",
    choices: [
      "Arterial embolus",
      "Arterial thrombosis",
      "Traumatic arterial injury",
      "Occluded vascular graft",
      "Aortic dissection",
      "Chronic venous valve incompetence"
    ],
    answer: [
      "Arterial embolus",
      "Arterial thrombosis",
      "Traumatic arterial injury",
      "Occluded vascular graft",
      "Aortic dissection"
    ],
    rationale:
      "Sudden arterial obstruction may result from an embolus, thrombosis, trauma, graft occlusion, or arterial dissection.",
    takeaway:
      "Think embolus, thrombosis, trauma, dissection, or failed graft."
  },
  {
    id: "PERF-AAO-003",
    caseId: "PERF-AAO-CASE-003",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Embolus",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which patient is at greatest risk for an arterial embolus?",
    choices: [
      "A patient with atrial fibrillation",
      "A patient with chronic venous insufficiency",
      "A patient with seasonal allergies",
      "A patient with uncomplicated cystitis"
    ],
    answer:
      "A patient with atrial fibrillation",
    rationale:
      "Atrial fibrillation promotes blood stasis in the atria, increasing the risk for clot formation and systemic arterial embolization.",
    takeaway:
      "Atrial fibrillation can send emboli into the systemic arterial circulation."
  },
  {
    id: "PERF-AAO-004",
    caseId: "PERF-AAO-CASE-004",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Six Ps",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are included in the six Ps of acute arterial occlusion? Select all that apply.",
    choices: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis",
      "Poikilothermia",
      "Pitting edema"
    ],
    answer: [
      "Pain",
      "Pallor",
      "Pulselessness",
      "Paresthesia",
      "Paralysis",
      "Poikilothermia"
    ],
    rationale:
      "The six Ps are pain, pallor, pulselessness, paresthesia, paralysis, and poikilothermia or coolness.",
    takeaway:
      "The six Ps indicate acute limb ischemia."
  },
  {
    id: "PERF-AAO-005",
    caseId: "PERF-AAO-CASE-005",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Pain",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient suddenly develops severe leg pain that is not relieved by rest. Which condition should the nurse suspect?",
    choices: [
      "Acute arterial occlusion",
      "Stable intermittent claudication",
      "Chronic venous insufficiency",
      "Uncomplicated varicose veins"
    ],
    answer:
      "Acute arterial occlusion",
    rationale:
      "Sudden severe pain that is not relieved by rest suggests an abrupt loss of arterial circulation rather than stable chronic PAD.",
    takeaway:
      "Sudden unrelieved extremity pain is an arterial emergency."
  },
  {
    id: "PERF-AAO-006",
    caseId: "PERF-AAO-CASE-006",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Pulselessness",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "The nurse cannot palpate a pedal pulse in a patient with sudden leg pain. What should the nurse do next?",
    choices: [
      "Assess the pulse with a Doppler device",
      "Massage the affected extremity",
      "Apply a compression stocking",
      "Elevate the leg above heart level"
    ],
    answer:
      "Assess the pulse with a Doppler device",
    rationale:
      "A Doppler device should be used to confirm whether blood flow is present when a peripheral pulse cannot be palpated.",
    takeaway:
      "Use Doppler to assess a nonpalpable pulse, but do not delay emergency escalation."
  },
  {
    id: "PERF-AAO-007",
    caseId: "PERF-AAO-CASE-007",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Neurovascular Changes",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding indicates worsening ischemia in a patient with an acute arterial occlusion?",
    choices: [
      "New inability to move the affected foot",
      "Mild dependent redness",
      "Chronic hair loss on the leg",
      "Stable intermittent claudication"
    ],
    answer:
      "New inability to move the affected foot",
    rationale:
      "Paralysis indicates severe nerve and muscle ischemia and suggests that limb viability is rapidly deteriorating.",
    takeaway:
      "Paralysis is a late and ominous sign of arterial ischemia."
  },
  {
    id: "PERF-AAO-008",
    caseId: "PERF-AAO-CASE-008",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Paresthesia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with acute arterial occlusion reports numbness and tingling in the affected foot. How should the nurse interpret this finding?",
    choices: [
      "Nerve tissue is becoming ischemic",
      "Venous return is improving",
      "The limb is developing increased perfusion",
      "The symptom is expected and nonurgent"
    ],
    answer:
      "Nerve tissue is becoming ischemic",
    rationale:
      "Paresthesia occurs when inadequate arterial blood flow impairs nerve function and may indicate progression toward irreversible damage.",
    takeaway:
      "Paresthesia signals worsening nerve ischemia."
  },
  {
    id: "PERF-AAO-009",
    caseId: "PERF-AAO-CASE-009",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Poikilothermia",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What does poikilothermia indicate in a patient with acute arterial occlusion?",
    choices: [
      "The extremity becomes cool because of reduced arterial blood flow",
      "The extremity becomes warmer because of venous congestion",
      "The patient has developed a systemic fever",
      "The patient has increased lymphatic circulation"
    ],
    answer:
      "The extremity becomes cool because of reduced arterial blood flow",
    rationale:
      "Poikilothermia means the limb takes on the temperature of the environment because warm arterial blood is no longer adequately reaching the tissue.",
    takeaway:
      "A cold extremity suggests severely impaired arterial flow."
  },
  {
    id: "PERF-AAO-010",
    caseId: "PERF-AAO-CASE-010",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Priority Action",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A patient develops sudden severe leg pain, pallor, numbness, and an absent pedal pulse. What should the nurse do first?",
    choices: [
      "Notify the provider or vascular surgery team immediately",
      "Elevate the leg above the heart",
      "Apply a compression wrap",
      "Reassess the patient in 1 hour"
    ],
    answer:
      "Notify the provider or vascular surgery team immediately",
    rationale:
      "These findings indicate acute limb ischemia. Immediate vascular intervention is required to restore blood flow and prevent tissue death.",
    takeaway:
      "Acute arterial occlusion requires immediate escalation."
  },
  {
    id: "PERF-AAO-011",
    caseId: "PERF-AAO-CASE-011",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Positioning",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which position is generally appropriate for an extremity with an acute arterial occlusion?",
    choices: [
      "Keep the extremity flat or slightly dependent",
      "Elevate the extremity above the heart",
      "Apply Trendelenburg position",
      "Cross the affected leg over the opposite leg"
    ],
    answer:
      "Keep the extremity flat or slightly dependent",
    rationale:
      "Elevation may further reduce arterial blood flow. The extremity is generally kept flat or slightly dependent unless otherwise prescribed.",
    takeaway:
      "Do not elevate an acutely ischemic limb."
  },
  {
    id: "PERF-AAO-012",
    caseId: "PERF-AAO-CASE-012",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Contraindicated Actions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which actions should the nurse avoid for a patient with acute arterial occlusion? Select all that apply.",
    choices: [
      "Massaging the extremity",
      "Applying direct heat",
      "Elevating the extremity above the heart",
      "Applying compression devices",
      "Performing frequent neurovascular checks",
      "Keeping the patient NPO"
    ],
    answer: [
      "Massaging the extremity",
      "Applying direct heat",
      "Elevating the extremity above the heart",
      "Applying compression devices"
    ],
    rationale:
      "Massage may dislodge clot material, heat may injure ischemic tissue, elevation reduces arterial flow, and compression further impairs circulation.",
    takeaway:
      "Avoid massage, heat, elevation, and compression in acute arterial ischemia."
  },
  {
    id: "PERF-AAO-013",
    caseId: "PERF-AAO-CASE-013",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Preoperative Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions should the nurse anticipate before emergency treatment of an acute arterial occlusion? Select all that apply.",
    choices: [
      "Keep the patient NPO",
      "Establish IV access",
      "Administer oxygen as prescribed",
      "Perform frequent neurovascular assessments",
      "Prepare the patient for possible surgery",
      "Encourage vigorous walking"
    ],
    answer: [
      "Keep the patient NPO",
      "Establish IV access",
      "Administer oxygen as prescribed",
      "Perform frequent neurovascular assessments",
      "Prepare the patient for possible surgery"
    ],
    rationale:
      "The patient may require urgent surgical or endovascular intervention. Supportive care includes NPO status, IV access, oxygen, and ongoing neurovascular assessment.",
    takeaway:
      "Prepare rapidly for revascularization."
  },
  {
    id: "PERF-AAO-014",
    caseId: "PERF-AAO-CASE-014",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Heparin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Why is IV unfractionated heparin often administered for an acute arterial occlusion?",
    choices: [
      "To prevent extension of the existing clot and formation of new clots",
      "To dissolve the clot immediately",
      "To increase platelet aggregation",
      "To cause arterial vasoconstriction"
    ],
    answer:
      "To prevent extension of the existing clot and formation of new clots",
    rationale:
      "Heparin is an anticoagulant. It does not directly dissolve the existing clot but helps prevent further thrombus formation.",
    takeaway:
      "Heparin prevents clot progression; it does not directly dissolve the clot."
  },
  {
    id: "PERF-AAO-015",
    caseId: "PERF-AAO-CASE-015",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Heparin Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which assessments are important for a patient receiving IV unfractionated heparin? Select all that apply.",
    choices: [
      "aPTT or anti-Xa level",
      "Signs of bleeding",
      "Platelet count",
      "Hemoglobin and hematocrit",
      "Neurovascular status",
      "Serum amylase only"
    ],
    answer: [
      "aPTT or anti-Xa level",
      "Signs of bleeding",
      "Platelet count",
      "Hemoglobin and hematocrit",
      "Neurovascular status"
    ],
    rationale:
      "Heparin therapy requires monitoring for therapeutic effect, bleeding, and heparin-induced thrombocytopenia while limb perfusion is continuously reassessed.",
    takeaway:
      "Monitor anticoagulation, bleeding, platelets, and limb perfusion."
  },
  {
    id: "PERF-AAO-016",
    caseId: "PERF-AAO-CASE-016",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Thrombolytic Therapy",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which patient finding would cause the nurse to question thrombolytic therapy?",
    choices: [
      "Recent intracranial hemorrhage",
      "Acute leg pain",
      "Absent pedal pulse",
      "Cool pale extremity"
    ],
    answer:
      "Recent intracranial hemorrhage",
    rationale:
      "Recent intracranial bleeding is a major contraindication to thrombolytic therapy because of the risk for life-threatening hemorrhage.",
    takeaway:
      "Thrombolytics can restore flow but carry major bleeding risk."
  },
  {
    id: "PERF-AAO-017",
    caseId: "PERF-AAO-CASE-017",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Embolectomy",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which procedure removes an embolus from an affected artery?",
    choices: [
      "Embolectomy",
      "Venous ablation",
      "Sclerotherapy",
      "Compression therapy"
    ],
    answer:
      "Embolectomy",
    rationale:
      "An embolectomy surgically removes an embolus to restore arterial blood flow.",
    takeaway:
      "Embolectomy removes an arterial embolus."
  },
  {
    id: "PERF-AAO-018",
    caseId: "PERF-AAO-CASE-018",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Revascularization",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which treatments may be used to restore blood flow in acute arterial occlusion? Select all that apply.",
    choices: [
      "Embolectomy",
      "Thrombectomy",
      "Catheter-directed thrombolysis",
      "Angioplasty",
      "Arterial bypass",
      "Compression stockings only"
    ],
    answer: [
      "Embolectomy",
      "Thrombectomy",
      "Catheter-directed thrombolysis",
      "Angioplasty",
      "Arterial bypass"
    ],
    rationale:
      "Treatment depends on the cause and severity and may involve surgical removal, thrombolysis, angioplasty, stenting, or bypass.",
    takeaway:
      "The treatment goal is rapid restoration of arterial flow."
  },
  {
    id: "PERF-AAO-019",
    caseId: "PERF-AAO-CASE-019",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Postoperative Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which assessments are priorities after arterial revascularization? Select all that apply.",
    choices: [
      "Distal pulses",
      "Skin color and temperature",
      "Capillary refill",
      "Sensation and movement",
      "Pain",
      "Bowel sounds only"
    ],
    answer: [
      "Distal pulses",
      "Skin color and temperature",
      "Capillary refill",
      "Sensation and movement",
      "Pain"
    ],
    rationale:
      "Frequent neurovascular assessment determines whether arterial blood flow has been restored and whether re-occlusion is occurring.",
    takeaway:
      "After revascularization, repeatedly assess circulation, sensation, movement, and pain."
  },
  {
    id: "PERF-AAO-020",
    caseId: "PERF-AAO-CASE-020",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Re-Occlusion",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "After an embolectomy, a patient's foot suddenly becomes pale and cool with an absent pulse. What should the nurse do first?",
    choices: [
      "Notify the surgeon immediately",
      "Elevate the foot above the heart",
      "Apply a heating pad",
      "Document the finding as expected"
    ],
    answer:
      "Notify the surgeon immediately",
    rationale:
      "A sudden loss of pulse and return of ischemic findings suggest re-occlusion and require immediate intervention.",
    takeaway:
      "Return of the six Ps after treatment suggests re-occlusion."
  },
  {
    id: "PERF-AAO-021",
    caseId: "PERF-AAO-CASE-021",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Compartment Syndrome",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding after arterial revascularization may indicate compartment syndrome?",
    choices: [
      "Severe pain out of proportion to the injury",
      "Mild incisional soreness relieved by medication",
      "Warm skin with a palpable pulse",
      "Improved sensation in the extremity"
    ],
    answer:
      "Severe pain out of proportion to the injury",
    rationale:
      "Reperfusion can cause swelling within a closed muscle compartment. Severe pain, especially with passive movement, may indicate compartment syndrome.",
    takeaway:
      "Severe disproportionate pain after reperfusion is an emergency."
  },
  {
    id: "PERF-AAO-022",
    caseId: "PERF-AAO-CASE-022",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Reperfusion Injury",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications may occur after blood flow is restored to a severely ischemic limb? Select all that apply.",
    choices: [
      "Hyperkalemia",
      "Metabolic acidosis",
      "Myoglobinuria",
      "Acute kidney injury",
      "Compartment syndrome",
      "Permanent hypokalemia"
    ],
    answer: [
      "Hyperkalemia",
      "Metabolic acidosis",
      "Myoglobinuria",
      "Acute kidney injury",
      "Compartment syndrome"
    ],
    rationale:
      "Reperfusion releases potassium, acids, myoglobin, and inflammatory substances from damaged tissue, which can cause dysrhythmias, kidney injury, and compartment syndrome.",
    takeaway:
      "Restoring flow can trigger systemic reperfusion complications."
  },
  {
    id: "PERF-AAO-023",
    caseId: "PERF-AAO-CASE-023",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Laboratory Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which laboratory values should the nurse monitor after reperfusion of an ischemic limb? Select all that apply.",
    choices: [
      "Serum potassium",
      "Creatinine",
      "Creatine kinase",
      "Arterial blood gases",
      "Urine myoglobin",
      "Thyroid-stimulating hormone only"
    ],
    answer: [
      "Serum potassium",
      "Creatinine",
      "Creatine kinase",
      "Arterial blood gases",
      "Urine myoglobin"
    ],
    rationale:
      "These tests help identify muscle breakdown, hyperkalemia, acidosis, myoglobin release, and kidney injury following reperfusion.",
    takeaway:
      "Monitor electrolytes, acid-base balance, muscle damage, and kidney function."
  },
  {
    id: "PERF-AAO-024",
    caseId: "PERF-AAO-CASE-024",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates successful treatment of an acute arterial occlusion?",
    choices: [
      "The extremity is warm with palpable pulses and improved movement",
      "The extremity remains cold and pulseless",
      "Numbness and paralysis are worsening",
      "Pain continues to increase"
    ],
    answer:
      "The extremity is warm with palpable pulses and improved movement",
    rationale:
      "Warmth, restored pulses, improved sensation, movement, and reduced ischemic pain indicate improved arterial perfusion.",
    takeaway:
      "Successful treatment restores warmth, pulse, sensation, and movement."
  },
  {
    id: "PERF-AAO-025",
    caseId: "PERF-AAO-CASE-025",
    patient: randomPatient(),
    topic: "Acute Arterial Occlusion",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with sudden leg pain, pallor, paralysis, and no Doppler pulse",
      "A patient with stable claudication after walking two blocks",
      "A patient with chronic venous edema at the end of the day",
      "A patient requesting information about smoking cessation"
    ],
    answer:
      "A patient with sudden leg pain, pallor, paralysis, and no Doppler pulse",
    rationale:
      "Sudden ischemic findings with paralysis and absent blood flow indicate a limb-threatening arterial emergency.",
    takeaway:
      "Acute loss of circulation and motor function requires immediate intervention."
  }
];
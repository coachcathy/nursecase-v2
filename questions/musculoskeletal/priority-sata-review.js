const musculoskeletalPrioritySataQuestions = [
  {
    id: "MSK-PS-001",
    caseId: "MSK-PS-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Compartment Syndrome",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a newly applied lower-leg cast reports severe pain that is not relieved by opioids and worsens when the toes are passively moved. What should the nurse do first?",
    choices: [
      "Perform an immediate neurovascular assessment and notify the provider",
      "Apply heat over the cast",
      "Encourage the patient to ambulate",
      "Administer another opioid dose and reassess in one hour"
    ],
    answer:
      "Perform an immediate neurovascular assessment and notify the provider",
    rationale:
      "Pain out of proportion and pain with passive stretch are early signs of compartment syndrome, which is a limb-threatening emergency.",
    takeaway:
      "Do not treat severe unrelieved fracture pain as routine pain until neurovascular compromise is excluded."
  },
  {
    id: "MSK-PS-002",
    caseId: "MSK-PS-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Fat Embolism Syndrome",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Twenty-four hours after a femur fracture, a patient develops dyspnea, confusion, tachycardia, and petechiae on the upper chest. What is the nurse's priority action?",
    choices: [
      "Apply oxygen and activate emergency response",
      "Massage the injured leg",
      "Encourage oral fluids",
      "Place the patient in Trendelenburg position"
    ],
    answer: "Apply oxygen and activate emergency response",
    rationale:
      "Respiratory distress, neurologic changes, and petechiae after a long-bone fracture suggest fat embolism syndrome. Oxygenation is the priority.",
    takeaway:
      "Fat embolism syndrome is a systemic emergency affecting lungs, brain, and skin."
  },
  {
    id: "MSK-PS-003",
    caseId: "MSK-PS-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Open Fracture",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient arrives with an open tibial fracture and visible contamination. Which action should the nurse take?",
    choices: [
      "Cover the wound with a sterile dressing and prepare for antibiotics",
      "Push the exposed bone beneath the skin",
      "Apply direct heat",
      "Allow the patient to bear weight"
    ],
    answer:
      "Cover the wound with a sterile dressing and prepare for antibiotics",
    rationale:
      "Open fractures require protection from further contamination, immobilization, antibiotics, tetanus assessment, and surgical irrigation and debridement.",
    takeaway:
      "Never push exposed bone back into an open fracture."
  },
  {
    id: "MSK-PS-004",
    caseId: "MSK-PS-CASE-004",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Traction",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which observation requires correction for a patient in skeletal traction?",
    choices: [
      "The traction weights are resting on the floor",
      "The patient is aligned with the traction pull",
      "The ropes move freely through the pulleys",
      "The knots remain away from the pulleys"
    ],
    answer: "The traction weights are resting on the floor",
    rationale:
      "Weights must hang freely to maintain the prescribed continuous traction force.",
    takeaway:
      "Traction is ineffective when the weights rest on the bed or floor."
  },
  {
    id: "MSK-PS-005",
    caseId: "MSK-PS-CASE-005",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Cast Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which findings should a patient with a cast report immediately? Select all that apply.",
    choices: [
      "Increasing pain not relieved by medication",
      "New numbness or tingling",
      "Cool or pale fingers or toes",
      "Inability to move the digits",
      "Mild temporary itching"
    ],
    answer: [
      "Increasing pain not relieved by medication",
      "New numbness or tingling",
      "Cool or pale fingers or toes",
      "Inability to move the digits"
    ],
    rationale:
      "These findings may indicate neurovascular compromise, excessive swelling, or compartment syndrome.",
    takeaway:
      "Pain, pallor, paresthesia, coolness, and motor loss are urgent cast warning signs."
  },
  {
    id: "MSK-PS-006",
    caseId: "MSK-PS-CASE-006",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Neurovascular Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings belong in a distal neurovascular assessment? Select all that apply.",
    choices: [
      "Pulse strength",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation",
      "Motor function",
      "Bowel sounds"
    ],
    answer: [
      "Pulse strength",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation",
      "Motor function"
    ],
    rationale:
      "Neurovascular assessment focuses on circulation, sensation, and movement distal to the injury.",
    takeaway:
      "Compare the injured limb with the unaffected limb whenever possible."
  },
  {
    id: "MSK-PS-007",
    caseId: "MSK-PS-CASE-007",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Opioid Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A postoperative orthopedic patient receiving morphine is difficult to arouse and has a respiratory rate of 7/min. What should the nurse do first?",
    choices: [
      "Stop opioid administration, support breathing, and prepare naloxone",
      "Administer another opioid dose",
      "Encourage the patient to sleep",
      "Offer oral fluids"
    ],
    answer:
      "Stop opioid administration, support breathing, and prepare naloxone",
    rationale:
      "Severe sedation and respiratory depression indicate opioid toxicity and require immediate intervention.",
    takeaway:
      "Breathing takes priority over pain control."
  },
  {
    id: "MSK-PS-008",
    caseId: "MSK-PS-CASE-008",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "PCA Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which statement by a family member of a patient using PCA requires correction?",
    choices: [
      "I will press the button if the patient falls asleep",
      "Only the patient should activate the PCA dose",
      "The nurse will monitor breathing and sedation",
      "The patient should report uncontrolled pain"
    ],
    answer: "I will press the button if the patient falls asleep",
    rationale:
      "PCA by proxy can cause oversedation and respiratory depression. Only the patient should press the button.",
    takeaway:
      "Never allow family members to activate PCA medication."
  },
  {
    id: "MSK-PS-009",
    caseId: "MSK-PS-CASE-009",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Osteomyelitis",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a previous open fracture reports worsening bone pain, fever, and purulent drainage. Which complication is most likely?",
    choices: [
      "Osteomyelitis",
      "Malunion",
      "Fat embolism syndrome",
      "Compartment syndrome"
    ],
    answer: "Osteomyelitis",
    rationale:
      "Persistent localized bone pain, fever, and purulent drainage following an open fracture suggest bone infection.",
    takeaway:
      "Open fractures can lead to deep infection and osteomyelitis."
  },
  {
    id: "MSK-PS-010",
    caseId: "MSK-PS-CASE-010",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Osteomyelitis Treatment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which teaching points are appropriate for a patient receiving treatment for osteomyelitis? Select all that apply.",
    choices: [
      "Complete all prescribed antibiotics",
      "Keep follow-up appointments",
      "Report recurrent fever or drainage",
      "Maintain adequate protein and calorie intake",
      "Stop antibiotics when pain improves"
    ],
    answer: [
      "Complete all prescribed antibiotics",
      "Keep follow-up appointments",
      "Report recurrent fever or drainage",
      "Maintain adequate protein and calorie intake"
    ],
    rationale:
      "Osteomyelitis often requires prolonged therapy, monitoring, nutrition, wound care, and surveillance for recurrence.",
    takeaway:
      "Improved symptoms do not mean the bone infection is fully eradicated."
  },
  {
    id: "MSK-PS-011",
    caseId: "MSK-PS-CASE-011",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "DVT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient immobilized after hip surgery has unilateral calf swelling, warmth, and pain. Which action should the nurse avoid?",
    choices: [
      "Massaging the affected calf",
      "Notifying the provider",
      "Maintaining prescribed activity restrictions",
      "Preparing for diagnostic evaluation"
    ],
    answer: "Massaging the affected calf",
    rationale:
      "Massage may dislodge a thrombus and cause pulmonary embolism.",
    takeaway:
      "Never massage a leg with suspected DVT."
  },
  {
    id: "MSK-PS-012",
    caseId: "MSK-PS-CASE-012",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient recovering from pelvic surgery suddenly develops chest pain, severe dyspnea, and SpO₂ 83%. What should the nurse do first?",
    choices: [
      "Apply oxygen and activate emergency response",
      "Encourage ambulation",
      "Offer oral fluids",
      "Massage the calf"
    ],
    answer: "Apply oxygen and activate emergency response",
    rationale:
      "Sudden hypoxemia, dyspnea, and chest pain suggest pulmonary embolism. Oxygenation and rapid emergency intervention are priorities.",
    takeaway:
      "Suspected PE is an airway, breathing, and circulation emergency."
  },
  {
    id: "MSK-PS-013",
    caseId: "MSK-PS-CASE-013",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "VTE Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions help prevent venous thromboembolism after orthopedic surgery? Select all that apply.",
    choices: [
      "Early mobility when permitted",
      "Prescribed anticoagulants",
      "Sequential compression devices when appropriate",
      "Adequate hydration if not contraindicated",
      "Placing pillows continuously behind the knees"
    ],
    answer: [
      "Early mobility when permitted",
      "Prescribed anticoagulants",
      "Sequential compression devices when appropriate",
      "Adequate hydration if not contraindicated"
    ],
    rationale:
      "These interventions reduce venous stasis. Continuous pressure behind the knees can impair venous return.",
    takeaway:
      "Prevent VTE by reducing stasis and following prophylaxis orders."
  },
  {
    id: "MSK-PS-014",
    caseId: "MSK-PS-CASE-014",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Crutch Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient using axillary crutches demonstrates correct understanding?",
    choices: [
      "I will support my weight through my hands",
      "I will rest my body weight on my armpits",
      "I should keep my elbows locked straight",
      "I can use the crutches even if the tips are worn"
    ],
    answer: "I will support my weight through my hands",
    rationale:
      "Weight through the axillae can compress the brachial plexus and blood vessels.",
    takeaway:
      "Hands bear the weight; armpits do not."
  },
  {
    id: "MSK-PS-015",
    caseId: "MSK-PS-CASE-015",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Walker Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which sequence is correct for a patient using a walker with one weak leg?",
    choices: [
      "Walker, weak leg, strong leg",
      "Strong leg, walker, weak leg",
      "Weak leg, strong leg, walker",
      "Both legs, then walker"
    ],
    answer: "Walker, weak leg, strong leg",
    rationale:
      "The walker advances first, followed by the weak leg, then the strong leg.",
    takeaway:
      "Walker first, weak leg second, strong leg last."
  },
  {
    id: "MSK-PS-016",
    caseId: "MSK-PS-CASE-016",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Cane Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A patient has weakness in the left leg. How should the patient use a cane?",
    choices: [
      "Hold the cane in the right hand and move it with the left leg",
      "Hold the cane in the left hand and move it with the right leg",
      "Hold the cane in either hand and move the strong leg first",
      "Use the cane only when climbing stairs"
    ],
    answer:
      "Hold the cane in the right hand and move it with the left leg",
    rationale:
      "The cane is held on the stronger side and moves with the weaker leg.",
    takeaway:
      "Cane on the strong side; cane and weak leg move together."
  },
  {
    id: "MSK-PS-017",
    caseId: "MSK-PS-CASE-017",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Stair Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statements about using crutches on stairs are correct? Select all that apply.",
    choices: [
      "The unaffected leg goes up first",
      "The crutches and affected leg go down first",
      "The affected leg goes up first",
      "Use the handrail when available and instructed",
      "Place body weight through the axillae"
    ],
    answer: [
      "The unaffected leg goes up first",
      "The crutches and affected leg go down first",
      "Use the handrail when available and instructed"
    ],
    rationale:
      "The memory aid is 'up with the good, down with the bad.' Weight remains through the hands rather than the axillae.",
    takeaway:
      "Up with the good; down with the bad."
  },
  {
    id: "MSK-PS-018",
    caseId: "MSK-PS-CASE-018",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "NSAID Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding requires immediate follow-up in a patient taking an NSAID for musculoskeletal pain?",
    choices: [
      "Black, tarry stools",
      "Mild thirst",
      "Temporary muscle soreness",
      "Increased appetite"
    ],
    answer: "Black, tarry stools",
    rationale:
      "Melena may indicate gastrointestinal bleeding, a serious complication of NSAID therapy.",
    takeaway:
      "NSAIDs increase GI bleeding and renal injury risk."
  },
  {
    id: "MSK-PS-019",
    caseId: "MSK-PS-CASE-019",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Anticoagulants",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should a patient taking an anticoagulant report? Select all that apply.",
    choices: [
      "Hematuria",
      "Black stools",
      "Unusual bruising",
      "Persistent nosebleed",
      "Mild hunger"
    ],
    answer: [
      "Hematuria",
      "Black stools",
      "Unusual bruising",
      "Persistent nosebleed"
    ],
    rationale:
      "These findings may indicate excessive anticoagulation or active bleeding.",
    takeaway:
      "Anticoagulant teaching focuses on bleeding precautions and prompt reporting."
  },
  {
    id: "MSK-PS-020",
    caseId: "MSK-PS-CASE-020",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Patient Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a femur fracture who has new confusion and dyspnea",
      "A patient with a cast requesting pain medication for pain rated 4 of 10",
      "A patient awaiting crutch teaching",
      "A patient with chronic osteomyelitis asking about diet"
    ],
    answer:
      "A patient with a femur fracture who has new confusion and dyspnea",
    rationale:
      "New respiratory and neurologic changes after a long-bone fracture suggest fat embolism syndrome.",
    takeaway:
      "Acute breathing and neurologic changes outrank routine pain and teaching needs."
  },
  {
    id: "MSK-PS-021",
    caseId: "MSK-PS-CASE-021",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "External Fixator",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing actions are appropriate for a patient with an external fixator? Select all that apply.",
    choices: [
      "Assess distal neurovascular status",
      "Perform prescribed pin-site care",
      "Monitor for redness and purulent drainage",
      "Maintain alignment",
      "Adjust loose pins independently"
    ],
    answer: [
      "Assess distal neurovascular status",
      "Perform prescribed pin-site care",
      "Monitor for redness and purulent drainage",
      "Maintain alignment"
    ],
    rationale:
      "External-fixator care includes circulation checks, infection prevention, and alignment. Nurses do not independently adjust pins or frames.",
    takeaway:
      "Do not manipulate external-fixator hardware without an order."
  },
  {
    id: "MSK-PS-022",
    caseId: "MSK-PS-CASE-022",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Immobility Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications can result from prolonged immobility after a fracture? Select all that apply.",
    choices: [
      "Atelectasis",
      "Constipation",
      "Pressure injury",
      "Venous thromboembolism",
      "Increased muscle strength"
    ],
    answer: [
      "Atelectasis",
      "Constipation",
      "Pressure injury",
      "Venous thromboembolism"
    ],
    rationale:
      "Immobility impairs lung expansion, bowel motility, skin integrity, circulation, and muscle strength.",
    takeaway:
      "Orthopedic care must prevent both fracture complications and immobility complications."
  },
  {
    id: "MSK-PS-023",
    caseId: "MSK-PS-CASE-023",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Healing",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors can delay fracture healing? Select all that apply.",
    choices: [
      "Smoking",
      "Poor nutrition",
      "Infection",
      "Poor circulation",
      "Stable alignment"
    ],
    answer: [
      "Smoking",
      "Poor nutrition",
      "Infection",
      "Poor circulation"
    ],
    rationale:
      "Healing depends on adequate blood supply, nutrition, stability, and freedom from infection.",
    takeaway:
      "Smoking decreases oxygen delivery and delays bone healing."
  },
  {
    id: "MSK-PS-024",
    caseId: "MSK-PS-CASE-024",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Complication Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best differentiates fat embolism syndrome from compartment syndrome?",
    choices: [
      "Petechial rash with hypoxemia",
      "Pain with passive stretch",
      "Tense localized swelling",
      "Distal paresthesia"
    ],
    answer: "Petechial rash with hypoxemia",
    rationale:
      "Fat embolism syndrome produces systemic respiratory, neurologic, and skin findings. Compartment syndrome produces localized limb ischemia.",
    takeaway:
      "Fat embolism is systemic; compartment syndrome is localized."
  },
  {
    id: "MSK-PS-025",
    caseId: "MSK-PS-CASE-025",
    patient: randomPatient(),
    topic: "Musculoskeletal Priority & SATA",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which outcome best shows that the musculoskeletal nursing plan has been effective?",
    choices: [
      "The patient maintains alignment, intact neurovascular status, adequate oxygenation, and safe mobility",
      "The patient develops increasing numbness",
      "The patient has repeated falls",
      "The patient stops antibiotics when pain improves"
    ],
    answer:
      "The patient maintains alignment, intact neurovascular status, adequate oxygenation, and safe mobility",
    rationale:
      "Effective care preserves alignment and perfusion, prevents infection and embolic complications, controls pain safely, and supports mobility.",
    takeaway:
      "The major goals are alignment, perfusion, oxygenation, infection prevention, and safe function."
  }
];
const musculoskeletalNgnCaseQuestions = [
  // =====================================================
  // CASE 1 — TIBIAL FRACTURE / COMPARTMENT SYNDROME
  // =====================================================
  {
    id: "MSK-NGN-001",
    caseId: "MSK-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Tibial Fracture",
    style: "Recognize Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 1,
    caseData:
      "A 24-year-old patient arrives after a motorcycle crash. The right lower leg is swollen and visibly deformed. The skin is intact. The patient reports severe pain rated 9/10. The right pedal pulse is palpable, and capillary refill is 2 seconds.",
    question:
      "Which findings support a suspected right tibial fracture? Select all that apply.",
    choices: [
      "Visible deformity",
      "Severe localized pain",
      "Swelling",
      "Capillary refill of 2 seconds",
      "Intact skin"
    ],
    answer: [
      "Visible deformity",
      "Severe localized pain",
      "Swelling"
    ],
    rationale:
      "Pain, swelling, deformity, bruising, tenderness, crepitus, and impaired function are common fracture findings. Intact skin indicates a closed fracture. A capillary refill of 2 seconds is currently an expected perfusion finding.",
    takeaway:
      "Pain, swelling, deformity, and loss of function are key fracture cues."
  },
  {
    id: "MSK-NGN-002",
    caseId: "MSK-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Initial Fracture Care",
    style: "Take Action",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    caseStage: 2,
    caseData:
      "The provider suspects a closed tibial fracture. The patient is awaiting imaging. The injured leg remains deformed and painful.",
    question:
      "Which nursing action should be performed before transporting the patient for imaging?",
    choices: [
      "Immobilize the leg in its current position",
      "Force the leg into anatomical alignment",
      "Encourage the patient to stand",
      "Massage the swollen area"
    ],
    answer: "Immobilize the leg in its current position",
    rationale:
      "A suspected fracture should be immobilized above and below the injury to prevent further soft-tissue, vascular, and nerve damage. The nurse should not attempt forceful reduction.",
    takeaway:
      "Immobilize first; do not force a fractured extremity into alignment."
  },
  {
    id: "MSK-NGN-003",
    caseId: "MSK-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Post-Casting Assessment",
    style: "Analyze Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 3,
    caseData:
      "The fracture is reduced and a cast is applied. Two hours later, the patient reports worsening pain rated 10/10 despite IV morphine. The toes are warm, and the pedal pulse remains palpable.",
    question:
      "Which finding is most concerning?",
    choices: [
      "Pain that remains severe despite opioid administration",
      "Warm toes",
      "Palpable pedal pulse",
      "Recent cast application"
    ],
    answer: "Pain that remains severe despite opioid administration",
    rationale:
      "Severe pain out of proportion to the injury or unrelieved by medication can be an early sign of compartment syndrome. A pulse may still be present early in the condition.",
    takeaway:
      "A present pulse does not rule out compartment syndrome."
  },
  {
    id: "MSK-NGN-004",
    caseId: "MSK-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Compartment Syndrome",
    style: "Prioritize Hypotheses",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 4,
    caseData:
      "The nurse reassesses the patient. The lower leg is tense and swollen. Pain increases when the nurse passively extends the toes. The patient reports tingling in the foot.",
    question:
      "Which complication is the nurse's priority hypothesis?",
    choices: [
      "Acute compartment syndrome",
      "Fat embolism syndrome",
      "Osteomyelitis",
      "Delayed union"
    ],
    answer: "Acute compartment syndrome",
    rationale:
      "Tense swelling, pain out of proportion, pain with passive stretch, and paresthesia strongly suggest acute compartment syndrome.",
    takeaway:
      "Pain with passive stretch is one of the strongest early compartment syndrome clues."
  },
  {
    id: "MSK-NGN-005",
    caseId: "MSK-NGN-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Emergency Intervention",
    style: "Take Action",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    caseStage: 5,
    caseData:
      "The nurse suspects acute compartment syndrome.",
    question:
      "Which actions should the nurse take? Select all that apply.",
    choices: [
      "Notify the provider immediately",
      "Prepare for possible fasciotomy",
      "Continue frequent neurovascular assessments",
      "Elevate the extremity far above the heart",
      "Delay intervention until the pulse disappears"
    ],
    answer: [
      "Notify the provider immediately",
      "Prepare for possible fasciotomy",
      "Continue frequent neurovascular assessments"
    ],
    rationale:
      "Compartment syndrome requires immediate escalation and pressure relief. Fasciotomy may be required. The extremity should not be elevated far above heart level because this can further reduce arterial perfusion. Pulselessness is a late finding.",
    takeaway:
      "Do not wait for a lost pulse before treating compartment syndrome."
  },

  // =====================================================
  // CASE 2 — FEMUR FRACTURE / FAT EMBOLISM SYNDROME
  // =====================================================
  {
    id: "MSK-NGN-006",
    caseId: "MSK-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Femur Fracture",
    style: "Recognize Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 1,
    caseData:
      "A 36-year-old patient is admitted after a high-speed motor-vehicle crash with a closed femur fracture. The leg is shortened and externally rotated. The patient is placed in temporary traction while awaiting surgery.",
    question:
      "Which complication is this patient at increased risk for because of the long-bone fracture?",
    choices: [
      "Fat embolism syndrome",
      "Celiac disease",
      "Hepatic encephalopathy",
      "Raynaud phenomenon"
    ],
    answer: "Fat embolism syndrome",
    rationale:
      "Fractures of the femur, pelvis, and other long bones increase the risk for fat droplets entering the circulation and causing fat embolism syndrome.",
    takeaway:
      "Long-bone fractures are the classic risk factor for fat embolism syndrome."
  },
  {
    id: "MSK-NGN-007",
    caseId: "MSK-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Traction Safety",
    style: "Take Action",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    caseStage: 2,
    caseData:
      "The patient is in traction. During assessment, the nurse notices that one traction weight is resting on the floor.",
    question:
      "What should the nurse do?",
    choices: [
      "Reposition the system so the weight hangs freely",
      "Remove all traction weights",
      "Add additional weight without an order",
      "Leave the weight on the floor until surgery"
    ],
    answer: "Reposition the system so the weight hangs freely",
    rationale:
      "Traction weights must hang freely to maintain the prescribed pulling force. A weight resting on the floor interrupts traction.",
    takeaway:
      "Traction weights must never rest on the bed or floor."
  },
  {
    id: "MSK-NGN-008",
    caseId: "MSK-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Acute Respiratory Change",
    style: "Analyze Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 3,
    caseData:
      "Twenty-four hours after admission, the patient becomes restless and confused. Vital signs: T 38.5°C (101.3°F), HR 124/min, RR 32/min, BP 108/64 mm Hg, SpO₂ 86% on room air.",
    question:
      "Which findings are most concerning for fat embolism syndrome? Select all that apply.",
    choices: [
      "Confusion",
      "Tachycardia",
      "Tachypnea",
      "Hypoxemia",
      "Mild postoperative pain"
    ],
    answer: [
      "Confusion",
      "Tachycardia",
      "Tachypnea",
      "Hypoxemia"
    ],
    rationale:
      "Fat embolism syndrome can produce respiratory distress, hypoxemia, neurologic changes, fever, and tachycardia.",
    takeaway:
      "Early fat embolism clues often involve breathing and mental-status changes."
  },
  {
    id: "MSK-NGN-009",
    caseId: "MSK-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Fat Embolism Syndrome",
    style: "Prioritize Hypotheses",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 4,
    caseData:
      "The nurse also observes a fine petechial rash over the patient's upper chest and axillae.",
    question:
      "Which diagnosis is most likely?",
    choices: [
      "Fat embolism syndrome",
      "Acute compartment syndrome",
      "Osteomyelitis",
      "Deep-vein thrombosis"
    ],
    answer: "Fat embolism syndrome",
    rationale:
      "The classic presentation includes respiratory distress, neurologic changes, and petechiae following a long-bone fracture.",
    takeaway:
      "The FES triad is respiratory distress, neurologic changes, and petechiae."
  },
  {
    id: "MSK-NGN-010",
    caseId: "MSK-NGN-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Emergency Oxygenation",
    style: "Take Action",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    caseStage: 5,
    caseData:
      "The patient's SpO₂ decreases to 82%, and the patient becomes increasingly lethargic.",
    question:
      "Which action should the nurse take first?",
    choices: [
      "Apply oxygen and activate emergency response",
      "Massage the fractured extremity",
      "Offer oral fluids",
      "Encourage the patient to ambulate"
    ],
    answer: "Apply oxygen and activate emergency response",
    rationale:
      "Severe hypoxemia is immediately life-threatening. Airway and breathing support take priority.",
    takeaway:
      "In suspected fat embolism syndrome, oxygenation is the first priority."
  },

  // =====================================================
  // CASE 3 — OPEN FRACTURE / OSTEOMYELITIS / SEPSIS
  // =====================================================
  {
    id: "MSK-NGN-011",
    caseId: "MSK-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Open Fracture",
    style: "Recognize Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 1,
    caseData:
      "A 52-year-old patient sustains a lower-leg injury in a farm accident. The tibia is fractured, and a deep wound communicates with the fracture site. Dirt and debris are visible.",
    question:
      "How should the nurse classify this injury?",
    choices: [
      "Open fracture",
      "Closed fracture",
      "Stress fracture",
      "Compression fracture"
    ],
    answer: "Open fracture",
    rationale:
      "An open fracture occurs when the fracture communicates with an external wound. Bone does not need to protrude through the skin.",
    takeaway:
      "Any fracture connected to an external wound is an open fracture."
  },
  {
    id: "MSK-NGN-012",
    caseId: "MSK-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Initial Open-Fracture Care",
    style: "Take Action",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    caseStage: 2,
    caseData:
      "The patient is hemodynamically stable. The injured leg remains contaminated and painful.",
    question:
      "Which interventions should the nurse anticipate? Select all that apply.",
    choices: [
      "Sterile dressing over the wound",
      "IV antibiotics",
      "Tetanus assessment",
      "Surgical irrigation and debridement",
      "Pushing exposed tissue back into the wound"
    ],
    answer: [
      "Sterile dressing over the wound",
      "IV antibiotics",
      "Tetanus assessment",
      "Surgical irrigation and debridement"
    ],
    rationale:
      "Open-fracture care includes protection from further contamination, antibiotics, tetanus prophylaxis when indicated, immobilization, and operative irrigation and debridement.",
    takeaway:
      "Open fractures require rapid infection prevention and surgical cleaning."
  },
  {
    id: "MSK-NGN-013",
    caseId: "MSK-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Delayed Infection",
    style: "Analyze Cues",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 3,
    caseData:
      "Six weeks later, the patient reports increasing tibial pain, fatigue, and intermittent fever. A small draining opening is present over the previous injury site. Laboratory results show elevated ESR and CRP.",
    question:
      "Which complication is most likely?",
    choices: [
      "Osteomyelitis",
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Malunion only"
    ],
    answer: "Osteomyelitis",
    rationale:
      "Persistent bone pain, fever, drainage, and elevated inflammatory markers after an open fracture suggest bone infection.",
    takeaway:
      "Open fracture plus chronic pain and drainage suggests osteomyelitis."
  },
  {
    id: "MSK-NGN-014",
    caseId: "MSK-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Osteomyelitis Diagnostics",
    style: "Generate Solutions",
    difficulty: "NGN",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    caseStage: 4,
    caseData:
      "The provider suspects chronic osteomyelitis.",
    question:
      "Which diagnostic test most directly identifies the causative organism?",
    choices: [
      "Bone biopsy and culture",
      "Serum sodium",
      "Electrocardiogram",
      "Pulmonary function test"
    ],
    answer: "Bone biopsy and culture",
    rationale:
      "Bone biopsy and culture provide the most definitive identification of the organism and guide targeted antibiotic therapy.",
    takeaway:
      "Bone culture determines which antimicrobial therapy is needed."
  },
  {
    id: "MSK-NGN-015",
    caseId: "MSK-NGN-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal NGN Cases",
    subtopic: "Sepsis Recognition",
    style: "Priority",
    difficulty: "NGN",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    caseStage: 5,
    caseData:
      "Before treatment begins, the patient becomes confused and restless. Vital signs: T 39.2°C (102.6°F), HR 132/min, RR 28/min, BP 82/46 mm Hg.",
    question:
      "Which action is the nurse's priority?",
    choices: [
      "Activate the sepsis response and notify the provider immediately",
      "Reassess the patient in one hour",
      "Encourage independent ambulation",
      "Hold prescribed antibiotics"
    ],
    answer:
      "Activate the sepsis response and notify the provider immediately",
    rationale:
      "Fever, tachycardia, tachypnea, hypotension, and altered mental status suggest sepsis with impaired tissue perfusion.",
    takeaway:
      "Infection plus hypotension and mental-status change is a sepsis emergency."
  }
];
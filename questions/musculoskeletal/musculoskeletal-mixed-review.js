const musculoskeletalMixedReviewQuestions = [
  {
    id: "MSK-MR-001",
    caseId: "MSK-MR-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Fracture Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A child falls from a bicycle. Imaging shows that one side of the radius is broken while the opposite side is bent. Which fracture is present?",
    choices: [
      "Greenstick fracture",
      "Comminuted fracture",
      "Impacted fracture",
      "Compression fracture"
    ],
    answer: "Greenstick fracture",
    rationale:
      "A greenstick fracture is an incomplete fracture in which one side of the bone breaks while the opposite side bends. It is common in children because their bones are more flexible.",
    takeaway:
      "A pediatric bone that bends and breaks incompletely suggests a greenstick fracture."
  },
  {
    id: "MSK-MR-002",
    caseId: "MSK-MR-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Open Fracture",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient arrives with an open tibial fracture. Which nursing action is most appropriate?",
    choices: [
      "Cover the wound with a sterile dressing",
      "Push the exposed bone beneath the skin",
      "Apply direct heat to the injury",
      "Encourage the patient to move the leg"
    ],
    answer: "Cover the wound with a sterile dressing",
    rationale:
      "An open fracture must be protected from additional contamination. The nurse should cover it with a sterile dressing, control bleeding, immobilize the limb, and prepare for antibiotics and surgery.",
    takeaway:
      "Protect an open fracture; never push exposed bone back into the wound."
  },
  {
    id: "MSK-MR-003",
    caseId: "MSK-MR-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Neurovascular Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a new leg cast reports numbness and increasing pain. What should the nurse do first?",
    choices: [
      "Perform a distal neurovascular assessment",
      "Explain that numbness is expected",
      "Apply a heating pad",
      "Encourage weight bearing"
    ],
    answer: "Perform a distal neurovascular assessment",
    rationale:
      "Numbness and increasing pain may indicate nerve compression, impaired perfusion, or compartment syndrome.",
    takeaway:
      "New pain or sensory changes after casting require immediate neurovascular assessment."
  },
  {
    id: "MSK-MR-004",
    caseId: "MSK-MR-CASE-004",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Compartment Syndrome",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is an early sign of compartment syndrome?",
    choices: [
      "Pain with passive stretching",
      "Absent pulse",
      "Paralysis",
      "Blackened tissue"
    ],
    answer: "Pain with passive stretching",
    rationale:
      "Pain out of proportion and pain with passive stretch are early signs. Pulselessness and paralysis are late signs.",
    takeaway:
      "Do not wait for pulselessness; pain with passive stretch is an early emergency clue."
  },
  {
    id: "MSK-MR-005",
    caseId: "MSK-MR-CASE-005",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Compartment Syndrome",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with suspected compartment syndrome has severe unrelieved pain and tense swelling. What action should the nurse anticipate?",
    choices: [
      "Emergency fasciotomy",
      "Routine physical therapy",
      "Application of direct heat",
      "Discharge with oral analgesics"
    ],
    answer: "Emergency fasciotomy",
    rationale:
      "A fasciotomy opens the fascia to relieve pressure and restore circulation before irreversible tissue damage occurs.",
    takeaway:
      "Acute compartment syndrome may require emergency fasciotomy."
  },
  {
    id: "MSK-MR-006",
    caseId: "MSK-MR-CASE-006",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Fat Embolism Syndrome",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a femur fracture develops confusion, hypoxemia, and petechiae on the chest. Which complication is most likely?",
    choices: [
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Osteomyelitis",
      "Malunion"
    ],
    answer: "Fat embolism syndrome",
    rationale:
      "Fat embolism syndrome commonly presents after long-bone fractures with respiratory distress, neurologic changes, and a petechial rash.",
    takeaway:
      "Long-bone fracture plus hypoxemia, confusion, and petechiae suggests fat embolism syndrome."
  },
  {
    id: "MSK-MR-007",
    caseId: "MSK-MR-CASE-007",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Fat Embolism Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with suspected fat embolism syndrome has SpO₂ 82%. What should the nurse do first?",
    choices: [
      "Apply oxygen and activate emergency response",
      "Massage the injured extremity",
      "Offer oral fluids",
      "Encourage ambulation"
    ],
    answer: "Apply oxygen and activate emergency response",
    rationale:
      "Fat embolism syndrome can rapidly cause respiratory failure. Supporting oxygenation is the priority.",
    takeaway:
      "With fat embolism syndrome, airway and breathing come first."
  },
  {
    id: "MSK-MR-008",
    caseId: "MSK-MR-CASE-008",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Traction",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which finding indicates that traction is not functioning correctly?",
    choices: [
      "The weights are resting on the floor",
      "The ropes move freely through the pulleys",
      "The patient is aligned with the direction of pull",
      "The weights hang freely"
    ],
    answer: "The weights are resting on the floor",
    rationale:
      "Weights must hang freely to maintain the prescribed traction force.",
    takeaway:
      "Traction is interrupted when weights rest on the bed or floor."
  },
  {
    id: "MSK-MR-009",
    caseId: "MSK-MR-CASE-009",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Buck's Traction",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient in Buck's traction reports tingling in the affected foot. What should the nurse do first?",
    choices: [
      "Perform a neurovascular assessment",
      "Remove the traction weights",
      "Encourage standing",
      "Apply heat under the traction boot"
    ],
    answer: "Perform a neurovascular assessment",
    rationale:
      "Tingling may indicate nerve compression or impaired circulation. Circulation, sensation, and movement should be assessed immediately.",
    takeaway:
      "New tingling in traction is a neurovascular warning sign."
  },
  {
    id: "MSK-MR-010",
    caseId: "MSK-MR-CASE-010",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "External Fixation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding in a patient with an external fixator requires immediate intervention?",
    choices: [
      "Absent distal pulse",
      "Small amount of dried drainage",
      "Mild discomfort during repositioning",
      "Visible external hardware"
    ],
    answer: "Absent distal pulse",
    rationale:
      "An absent distal pulse indicates possible arterial compromise and threatens the viability of the extremity.",
    takeaway:
      "Perfusion problems outrank routine pin-site findings."
  },
  {
    id: "MSK-MR-011",
    caseId: "MSK-MR-CASE-011",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Pin-Site Infection",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding suggests infection at an external-fixator pin site?",
    choices: [
      "Purulent drainage and spreading redness",
      "Small amount of dried serous drainage",
      "Mild tenderness immediately after insertion",
      "Visible metal at the pin site"
    ],
    answer: "Purulent drainage and spreading redness",
    rationale:
      "Purulent drainage, warmth, spreading erythema, increasing pain, and fever may indicate pin-site infection.",
    takeaway:
      "Purulence and spreading redness are not expected pin-site findings."
  },
  {
    id: "MSK-MR-012",
    caseId: "MSK-MR-CASE-012",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Cast Care",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with a cast requires correction?",
    choices: [
      "I can insert a pencil into the cast to scratch my skin",
      "I will keep the cast dry",
      "I will report numbness or increasing pain",
      "I will inspect the skin around the cast edges"
    ],
    answer: "I can insert a pencil into the cast to scratch my skin",
    rationale:
      "Objects inserted beneath a cast may cause skin injury, infection, or pressure damage.",
    takeaway:
      "Never place objects inside a cast."
  },
  {
    id: "MSK-MR-013",
    caseId: "MSK-MR-CASE-013",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Wet Cast",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "How should the nurse support a wet plaster cast?",
    choices: [
      "With the palms of the hands",
      "With the fingertips",
      "Against a sharp bedrail",
      "Under a heating pad"
    ],
    answer: "With the palms of the hands",
    rationale:
      "Palms distribute pressure evenly and prevent dents that could create pressure points beneath the cast.",
    takeaway:
      "Handle wet plaster with palms, not fingertips."
  },
  {
    id: "MSK-MR-014",
    caseId: "MSK-MR-CASE-014",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Osteomyelitis",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a previous open fracture develops persistent bone pain, fever, and a draining sinus tract. Which condition is most likely?",
    choices: [
      "Chronic osteomyelitis",
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Delayed union"
    ],
    answer: "Chronic osteomyelitis",
    rationale:
      "Chronic osteomyelitis may cause recurrent bone pain, intermittent fever, and persistent draining sinus tracts.",
    takeaway:
      "A chronic draining tract over bone strongly suggests chronic osteomyelitis."
  },
  {
    id: "MSK-MR-015",
    caseId: "MSK-MR-CASE-015",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Osteomyelitis Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which diagnostic test most definitively identifies the organism causing osteomyelitis?",
    choices: [
      "Bone biopsy and culture",
      "Serum calcium level",
      "Urinalysis",
      "Electrocardiogram"
    ],
    answer: "Bone biopsy and culture",
    rationale:
      "Bone culture identifies the organism and guides targeted antibiotic therapy.",
    takeaway:
      "Bone biopsy and culture provide the most definitive diagnosis."
  },
  {
    id: "MSK-MR-016",
    caseId: "MSK-MR-CASE-016",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Osteomyelitis Treatment",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient being treated for osteomyelitis shows correct understanding?",
    choices: [
      "I may need prolonged antibiotic therapy",
      "I can stop treatment when the pain improves",
      "One antibiotic dose is usually sufficient",
      "Follow-up laboratory testing is unnecessary"
    ],
    answer: "I may need prolonged antibiotic therapy",
    rationale:
      "Bone infections often require several weeks of antibiotics and sometimes surgical debridement.",
    takeaway:
      "Osteomyelitis treatment must be completed even after symptoms improve."
  },
  {
    id: "MSK-MR-017",
    caseId: "MSK-MR-CASE-017",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "DVT",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient immobilized after hip surgery develops a warm, swollen, painful calf. Which action should the nurse avoid?",
    choices: [
      "Massaging the calf",
      "Notifying the provider",
      "Maintaining activity restrictions",
      "Preparing for diagnostic testing"
    ],
    answer: "Massaging the calf",
    rationale:
      "Massaging a leg with a suspected DVT may dislodge the clot and cause a pulmonary embolism.",
    takeaway:
      "Never massage a leg with suspected DVT."
  },
  {
    id: "MSK-MR-018",
    caseId: "MSK-MR-CASE-018",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient recovering from orthopedic surgery develops sudden chest pain, dyspnea, and tachycardia. What should the nurse suspect?",
    choices: [
      "Pulmonary embolism",
      "Osteomyelitis",
      "Malunion",
      "Muscle spasm"
    ],
    answer: "Pulmonary embolism",
    rationale:
      "Sudden chest pain, dyspnea, tachycardia, hypoxemia, and anxiety are concerning for pulmonary embolism.",
    takeaway:
      "Sudden respiratory symptoms after immobility may indicate PE."
  },
  {
    id: "MSK-MR-019",
    caseId: "MSK-MR-CASE-019",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Opioids",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient receiving IV morphine is difficult to arouse and has a respiratory rate of 6/min. Which medication should the nurse anticipate?",
    choices: [
      "Naloxone",
      "Heparin",
      "Ketorolac",
      "Cyclobenzaprine"
    ],
    answer: "Naloxone",
    rationale:
      "Naloxone reverses opioid-induced respiratory and central nervous system depression.",
    takeaway:
      "Naloxone is used for opioid toxicity, but continued monitoring is required."
  },
  {
    id: "MSK-MR-020",
    caseId: "MSK-MR-CASE-020",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "PCA",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which action is appropriate for a patient using a PCA pump?",
    choices: [
      "Only the patient presses the dose button",
      "A family member presses the button while the patient sleeps",
      "The nurse presses the button each hour",
      "Respiratory assessment is unnecessary"
    ],
    answer: "Only the patient presses the dose button",
    rationale:
      "PCA by proxy increases the risk of oversedation and respiratory depression.",
    takeaway:
      "Only the patient should activate PCA medication."
  },
  {
    id: "MSK-MR-021",
    caseId: "MSK-MR-CASE-021",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "NSAIDs",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding should a patient taking an NSAID report immediately?",
    choices: [
      "Black, tarry stools",
      "Mild thirst",
      "Temporary muscle soreness",
      "Increased appetite"
    ],
    answer: "Black, tarry stools",
    rationale:
      "Black, tarry stools may indicate gastrointestinal bleeding caused by NSAID therapy.",
    takeaway:
      "NSAIDs increase GI bleeding and kidney injury risk."
  },
  {
    id: "MSK-MR-022",
    caseId: "MSK-MR-CASE-022",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Crutches",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient using axillary crutches shows correct understanding?",
    choices: [
      "I will support my weight through my hands",
      "I will rest my weight on my armpits",
      "I should lock my elbows straight",
      "I can use crutches with worn rubber tips"
    ],
    answer: "I will support my weight through my hands",
    rationale:
      "Supporting weight through the axillae can compress nerves and blood vessels.",
    takeaway:
      "Weight belongs on the handgrips, not the axillae."
  },
  {
    id: "MSK-MR-023",
    caseId: "MSK-MR-CASE-023",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Walker",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which sequence is correct for a patient using a walker with a weak right leg?",
    choices: [
      "Walker, right leg, left leg",
      "Left leg, walker, right leg",
      "Right leg, left leg, walker",
      "Both legs, then walker"
    ],
    answer: "Walker, right leg, left leg",
    rationale:
      "The walker moves first, followed by the weak leg, then the stronger leg.",
    takeaway:
      "Walker first, weak leg second, strong leg last."
  },
  {
    id: "MSK-MR-024",
    caseId: "MSK-MR-CASE-024",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "SATA",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings require immediate follow-up in a patient with a newly casted leg? Select all that apply.",
    choices: [
      "Pain not relieved by medication",
      "Cool toes",
      "Delayed capillary refill",
      "New numbness",
      "Inability to move the toes",
      "Mild itching"
    ],
    answer: [
      "Pain not relieved by medication",
      "Cool toes",
      "Delayed capillary refill",
      "New numbness",
      "Inability to move the toes"
    ],
    rationale:
      "These findings may indicate impaired perfusion, nerve compression, or compartment syndrome. Mild itching alone is common.",
    takeaway:
      "Pain, coolness, delayed refill, sensory loss, and motor loss are urgent findings."
  },
  {
    id: "MSK-MR-025",
    caseId: "MSK-MR-CASE-025",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a femur fracture who has new dyspnea and confusion",
      "A patient with a cast reporting pain rated 4 of 10",
      "A patient awaiting crutch teaching",
      "A patient requesting assistance with repositioning"
    ],
    answer:
      "A patient with a femur fracture who has new dyspnea and confusion",
    rationale:
      "New respiratory and neurologic changes after a long-bone fracture may indicate fat embolism syndrome and require immediate intervention.",
    takeaway:
      "Acute oxygenation and neurologic changes take priority."
  },
  {
    id: "MSK-MR-026",
    caseId: "MSK-MR-CASE-026",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
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
      "Healing depends on adequate perfusion, nutrition, stability, and infection control.",
    takeaway:
      "Smoking reduces perfusion and delays bone healing."
  },
  {
    id: "MSK-MR-027",
    caseId: "MSK-MR-CASE-027",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Immobility",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications are associated with prolonged immobility after a fracture? Select all that apply.",
    choices: [
      "Atelectasis",
      "Constipation",
      "Pressure injury",
      "Venous thromboembolism",
      "Improved muscle strength"
    ],
    answer: [
      "Atelectasis",
      "Constipation",
      "Pressure injury",
      "Venous thromboembolism"
    ],
    rationale:
      "Immobility increases respiratory, bowel, skin, circulatory, and muscle complications.",
    takeaway:
      "Orthopedic nursing care must also prevent complications of immobility."
  },
  {
    id: "MSK-MR-028",
    caseId: "MSK-MR-CASE-028",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Anticoagulants",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should a patient taking an anticoagulant report? Select all that apply.",
    choices: [
      "Blood in the urine",
      "Black stools",
      "Unusual bruising",
      "Persistent nosebleed",
      "Mild hunger"
    ],
    answer: [
      "Blood in the urine",
      "Black stools",
      "Unusual bruising",
      "Persistent nosebleed"
    ],
    rationale:
      "These findings may indicate excessive bleeding related to anticoagulant therapy.",
    takeaway:
      "Anticoagulant teaching focuses on bleeding precautions."
  },
  {
    id: "MSK-MR-029",
    caseId: "MSK-MR-CASE-029",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Fracture Healing",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates appropriate fracture healing?",
    choices: [
      "Progressive callus formation with maintained alignment",
      "Increasing deformity",
      "Persistent purulent drainage",
      "New loss of sensation"
    ],
    answer: "Progressive callus formation with maintained alignment",
    rationale:
      "Callus formation and maintained anatomical alignment are expected indicators of bone healing.",
    takeaway:
      "Healing should preserve alignment while new bone bridges the fracture."
  },
  {
    id: "MSK-MR-030",
    caseId: "MSK-MR-CASE-030",
    patient: randomPatient(),
    topic: "Musculoskeletal Mixed Review",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which outcome best indicates that the musculoskeletal plan of care is effective?",
    choices: [
      "The patient maintains alignment, intact neurovascular status, adequate oxygenation, and safe mobility",
      "The patient develops increasing paresthesia",
      "The patient has repeated falls",
      "The patient stops antibiotics early"
    ],
    answer:
      "The patient maintains alignment, intact neurovascular status, adequate oxygenation, and safe mobility",
    rationale:
      "Effective musculoskeletal care protects alignment, perfusion, nerve function, oxygenation, infection control, pain management, and mobility.",
    takeaway:
      "Major goals include alignment, circulation, oxygenation, infection prevention, and safe function."
  }
];
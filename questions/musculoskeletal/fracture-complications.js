const fractureComplicationsQuestions = [
  {
    id: "MSK-FC-001",
    caseId: "MSK-FC-CASE-001",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Compartment Syndrome",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a tibial fracture reports severe pain that is not relieved by opioids. The pain increases when the nurse passively moves the toes. Which complication is most likely?",
    choices: [
      "Compartment syndrome",
      "Fat embolism syndrome",
      "Osteomyelitis",
      "Venous insufficiency"
    ],
    answer: "Compartment syndrome",
    rationale:
      "Severe pain out of proportion to the injury and pain with passive stretch are early findings of compartment syndrome.",
    takeaway:
      "Pain out of proportion and pain with passive stretch are early signs of compartment syndrome."
  },
  {
    id: "MSK-FC-002",
    caseId: "MSK-FC-CASE-002",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Compartment Syndrome Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a newly casted leg develops severe pain, paresthesia, and tense swelling. What should the nurse do first?",
    choices: [
      "Notify the provider immediately and prepare for emergency intervention",
      "Apply a heating pad over the cast",
      "Encourage the patient to walk",
      "Place the extremity in a dependent position"
    ],
    answer:
      "Notify the provider immediately and prepare for emergency intervention",
    rationale:
      "Compartment syndrome is a limb-threatening emergency. Pressure must be relieved quickly, often through cast splitting or fasciotomy.",
    takeaway:
      "Suspected compartment syndrome requires immediate provider notification."
  },
  {
    id: "MSK-FC-003",
    caseId: "MSK-FC-CASE-003",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Compartment Syndrome Findings",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings may indicate compartment syndrome? Select all that apply.",
    choices: [
      "Pain out of proportion",
      "Pain with passive stretch",
      "Paresthesia",
      "Tense swelling",
      "Improved pain after elevation"
    ],
    answer: [
      "Pain out of proportion",
      "Pain with passive stretch",
      "Paresthesia",
      "Tense swelling"
    ],
    rationale:
      "Early findings include severe pain, pain with passive stretch, paresthesia, and tense swelling. Paralysis and pulselessness are late findings.",
    takeaway:
      "Do not wait for pulselessness; that is a late sign."
  },
  {
    id: "MSK-FC-004",
    caseId: "MSK-FC-CASE-004",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Late Compartment Syndrome",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is considered a late sign of compartment syndrome?",
    choices: [
      "Paralysis",
      "Pain with passive stretch",
      "Increasing pressure",
      "Paresthesia"
    ],
    answer: "Paralysis",
    rationale:
      "Paralysis and pulselessness are late signs that indicate advanced neurovascular compromise.",
    takeaway:
      "Paralysis and pulselessness suggest late, severe compartment syndrome."
  },
  {
    id: "MSK-FC-005",
    caseId: "MSK-FC-CASE-005",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Fasciotomy",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which procedure may be required to relieve pressure in acute compartment syndrome?",
    choices: [
      "Fasciotomy",
      "Arthrocentesis",
      "Paracentesis",
      "Thoracentesis"
    ],
    answer: "Fasciotomy",
    rationale:
      "A fasciotomy surgically opens the fascia to relieve pressure and restore tissue perfusion.",
    takeaway:
      "Fasciotomy is the emergency surgical treatment for compartment syndrome."
  },
  {
    id: "MSK-FC-006",
    caseId: "MSK-FC-CASE-006",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Fat Embolism Syndrome",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a femur fracture develops sudden dyspnea, confusion, and a petechial rash on the chest. Which complication is most likely?",
    choices: [
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Osteomyelitis",
      "Malunion"
    ],
    answer: "Fat embolism syndrome",
    rationale:
      "Fat embolism syndrome classically presents with respiratory distress, neurologic changes, and a petechial rash after a long-bone fracture.",
    takeaway:
      "Think respiratory distress, neuro changes, and petechiae after a long-bone fracture."
  },
  {
    id: "MSK-FC-007",
    caseId: "MSK-FC-CASE-007",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Fat Embolism Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a fractured femur suddenly develops hypoxemia and altered mental status. What should the nurse do first?",
    choices: [
      "Support oxygenation and call for emergency assistance",
      "Offer oral fluids",
      "Massage the affected leg",
      "Encourage ambulation"
    ],
    answer: "Support oxygenation and call for emergency assistance",
    rationale:
      "Fat embolism syndrome can cause acute respiratory failure. Airway and breathing are the priority.",
    takeaway:
      "With suspected fat embolism, oxygenation comes first."
  },
  {
    id: "MSK-FC-008",
    caseId: "MSK-FC-CASE-008",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Fat Embolism Findings",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are associated with fat embolism syndrome? Select all that apply.",
    choices: [
      "Hypoxemia",
      "Confusion",
      "Petechial rash",
      "Tachycardia",
      "Pain with passive stretch only"
    ],
    answer: [
      "Hypoxemia",
      "Confusion",
      "Petechial rash",
      "Tachycardia"
    ],
    rationale:
      "Fat embolism syndrome may cause respiratory distress, neurologic changes, petechiae, fever, and tachycardia.",
    takeaway:
      "Fat embolism affects the lungs, brain, and skin."
  },
  {
    id: "MSK-FC-009",
    caseId: "MSK-FC-CASE-009",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "FES Risk",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which patient is at greatest risk for fat embolism syndrome?",
    choices: [
      "A patient with a fractured femur",
      "A patient with a fractured finger",
      "A patient with a mild ankle sprain",
      "A patient with a superficial laceration"
    ],
    answer: "A patient with a fractured femur",
    rationale:
      "Fat embolism syndrome is most strongly associated with fractures of long bones and the pelvis.",
    takeaway:
      "Long-bone and pelvic fractures carry the highest fat embolism risk."
  },
  {
    id: "MSK-FC-010",
    caseId: "MSK-FC-CASE-010",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Osteomyelitis",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a history of an open tibial fracture develops persistent bone pain, fever, and purulent drainage. Which complication is most likely?",
    choices: [
      "Osteomyelitis",
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Nonunion only"
    ],
    answer: "Osteomyelitis",
    rationale:
      "Osteomyelitis is an infection of bone and may occur after open fractures, surgery, or bloodstream spread.",
    takeaway:
      "Open fractures place the patient at high risk for osteomyelitis."
  },
  {
    id: "MSK-FC-011",
    caseId: "MSK-FC-CASE-011",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Osteomyelitis Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which test provides the most definitive identification of the organism causing osteomyelitis?",
    choices: [
      "Bone biopsy and culture",
      "Serum sodium",
      "Urinalysis",
      "Electrocardiogram"
    ],
    answer: "Bone biopsy and culture",
    rationale:
      "Bone biopsy and culture identify the causative organism and guide antibiotic selection.",
    takeaway:
      "Bone culture guides targeted treatment for osteomyelitis."
  },
  {
    id: "MSK-FC-012",
    caseId: "MSK-FC-CASE-012",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Osteomyelitis Treatment",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement by a patient receiving treatment for osteomyelitis shows correct understanding?",
    choices: [
      "I may need prolonged antibiotic therapy",
      "I can stop antibiotics when the pain improves",
      "Bone infections usually require only one dose of medication",
      "Follow-up laboratory testing is unnecessary"
    ],
    answer: "I may need prolonged antibiotic therapy",
    rationale:
      "Osteomyelitis often requires several weeks of antimicrobial therapy and sometimes surgical debridement.",
    takeaway:
      "Osteomyelitis treatment is prolonged and must be completed fully."
  },
  {
    id: "MSK-FC-013",
    caseId: "MSK-FC-CASE-013",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "DVT",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient immobilized after a hip fracture develops unilateral calf swelling, warmth, and tenderness. Which complication is most likely?",
    choices: [
      "Deep-vein thrombosis",
      "Compartment syndrome",
      "Osteomyelitis",
      "Fat embolism syndrome"
    ],
    answer: "Deep-vein thrombosis",
    rationale:
      "Unilateral swelling, warmth, tenderness, and pain may indicate a DVT in an immobilized patient.",
    takeaway:
      "Immobility after fracture increases venous stasis and DVT risk."
  },
  {
    id: "MSK-FC-014",
    caseId: "MSK-FC-CASE-014",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "DVT Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a suspected DVT asks the nurse to massage the painful calf. What should the nurse do?",
    choices: [
      "Avoid massaging the calf and notify the provider",
      "Massage the calf firmly",
      "Encourage vigorous leg exercise",
      "Apply direct pressure over the vein"
    ],
    answer: "Avoid massaging the calf and notify the provider",
    rationale:
      "Massaging a leg with suspected DVT may dislodge the clot and cause pulmonary embolism.",
    takeaway:
      "Never massage a leg with suspected DVT."
  },
  {
    id: "MSK-FC-015",
    caseId: "MSK-FC-CASE-015",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient recovering from a pelvic fracture suddenly develops chest pain, dyspnea, and tachycardia. Which complication should the nurse suspect?",
    choices: [
      "Pulmonary embolism",
      "Osteomyelitis",
      "Malunion",
      "Compartment syndrome"
    ],
    answer: "Pulmonary embolism",
    rationale:
      "Sudden chest pain, dyspnea, tachycardia, anxiety, and hypoxemia are classic findings of pulmonary embolism.",
    takeaway:
      "Sudden respiratory symptoms after immobilization may indicate PE."
  },
  {
    id: "MSK-FC-016",
    caseId: "MSK-FC-CASE-016",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "PE Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a suspected pulmonary embolism has SpO₂ 84% and severe dyspnea. What should the nurse do first?",
    choices: [
      "Apply oxygen and activate emergency response",
      "Encourage the patient to walk",
      "Offer oral fluids",
      "Massage the affected leg"
    ],
    answer: "Apply oxygen and activate emergency response",
    rationale:
      "Pulmonary embolism can rapidly impair oxygenation and circulation. Airway and breathing are the priority.",
    takeaway:
      "For suspected PE, support oxygenation immediately."
  },
  {
    id: "MSK-FC-017",
    caseId: "MSK-FC-CASE-017",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "VTE Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions help prevent venous thromboembolism in a patient with a fracture? Select all that apply.",
    choices: [
      "Early mobility when permitted",
      "Prescribed anticoagulants",
      "Sequential compression devices when appropriate",
      "Hydration if not contraindicated",
      "Massaging a swollen calf"
    ],
    answer: [
      "Early mobility when permitted",
      "Prescribed anticoagulants",
      "Sequential compression devices when appropriate",
      "Hydration if not contraindicated"
    ],
    rationale:
      "Mobility, anticoagulation, compression devices, and hydration reduce venous stasis and clot risk.",
    takeaway:
      "Prevent VTE by reducing venous stasis."
  },
  {
    id: "MSK-FC-018",
    caseId: "MSK-FC-CASE-018",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Delayed Union",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fractured bone is healing more slowly than expected but continues to show progress. Which complication is present?",
    choices: [
      "Delayed union",
      "Nonunion",
      "Malunion",
      "Compartment syndrome"
    ],
    answer: "Delayed union",
    rationale:
      "Delayed union means healing is occurring, but more slowly than expected.",
    takeaway:
      "Delayed union means slow healing, not complete failure to heal."
  },
  {
    id: "MSK-FC-019",
    caseId: "MSK-FC-CASE-019",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Nonunion",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fracture fails to heal and the bone ends do not unite. Which complication is present?",
    choices: [
      "Nonunion",
      "Delayed union",
      "Malunion",
      "Fat embolism syndrome"
    ],
    answer: "Nonunion",
    rationale:
      "Nonunion occurs when the fracture fails to heal and the bone ends do not unite.",
    takeaway:
      "Nonunion means the fracture does not heal."
  },
  {
    id: "MSK-FC-020",
    caseId: "MSK-FC-CASE-020",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Malunion",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fractured bone heals in an incorrect anatomical position. Which complication is present?",
    choices: [
      "Malunion",
      "Nonunion",
      "Delayed union",
      "Osteomyelitis"
    ],
    answer: "Malunion",
    rationale:
      "Malunion occurs when the bone heals in an abnormal position, potentially causing deformity or loss of function.",
    takeaway:
      "Malunion means the bone heals, but in poor alignment."
  },
  {
    id: "MSK-FC-021",
    caseId: "MSK-FC-CASE-021",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Healing Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors may delay fracture healing? Select all that apply.",
    choices: [
      "Smoking",
      "Poor nutrition",
      "Infection",
      "Poor blood supply",
      "Proper immobilization"
    ],
    answer: [
      "Smoking",
      "Poor nutrition",
      "Infection",
      "Poor blood supply"
    ],
    rationale:
      "Smoking, malnutrition, infection, inadequate perfusion, instability, and chronic disease may interfere with bone healing.",
    takeaway:
      "Healing depends on alignment, stability, nutrition, perfusion, and infection control."
  },
  {
    id: "MSK-FC-022",
    caseId: "MSK-FC-CASE-022",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a femur fracture who is suddenly confused and short of breath",
      "A patient with delayed union asking about nutrition",
      "A patient with mild cast itching",
      "A patient with malunion awaiting physical therapy"
    ],
    answer:
      "A patient with a femur fracture who is suddenly confused and short of breath",
    rationale:
      "Sudden respiratory and neurologic changes after a long-bone fracture suggest fat embolism syndrome and require immediate action.",
    takeaway:
      "Acute oxygenation and neurologic changes take priority."
  },
  {
    id: "MSK-FC-023",
    caseId: "MSK-FC-CASE-023",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Complication Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best differentiates fat embolism syndrome from compartment syndrome?",
    choices: [
      "Petechial rash and hypoxemia",
      "Pain with passive stretch",
      "Tense swelling of one limb",
      "Paresthesia distal to a cast"
    ],
    answer: "Petechial rash and hypoxemia",
    rationale:
      "Fat embolism syndrome commonly causes respiratory distress, neurologic changes, and petechiae. Compartment syndrome causes localized neurovascular compromise.",
    takeaway:
      "FES is systemic; compartment syndrome is usually localized to the affected limb."
  },
  {
    id: "MSK-FC-024",
    caseId: "MSK-FC-CASE-024",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Open Fracture Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications are associated with open fractures? Select all that apply.",
    choices: [
      "Osteomyelitis",
      "Soft-tissue infection",
      "Tetanus exposure",
      "Blood loss",
      "Guaranteed rapid healing"
    ],
    answer: [
      "Osteomyelitis",
      "Soft-tissue infection",
      "Tetanus exposure",
      "Blood loss"
    ],
    rationale:
      "Open fractures increase risk for contamination, infection, tetanus, bleeding, and delayed healing.",
    takeaway:
      "Open fractures combine bone injury with contamination and soft-tissue damage."
  },
  {
    id: "MSK-FC-025",
    caseId: "MSK-FC-CASE-025",
    patient: randomPatient(),
    topic: "Fracture Complications",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that fracture-complication prevention has been effective?",
    choices: [
      "The patient maintains intact neurovascular status and adequate oxygenation",
      "The patient develops new paresthesia",
      "The patient has increasing calf swelling",
      "The patient becomes confused and hypoxemic"
    ],
    answer:
      "The patient maintains intact neurovascular status and adequate oxygenation",
    rationale:
      "Effective care prevents neurovascular compromise, infection, VTE, and respiratory complications.",
    takeaway:
      "Successful fracture care preserves circulation, nerve function, oxygenation, and tissue integrity."
  }
];
const fractureTypesQuestions = [
  {
    id: "MSK-FT-001",
    caseId: "MSK-FT-CASE-001",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Open Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has a fractured tibia with a wound that communicates with the fracture site. How should the nurse classify this injury?",
    choices: [
      "Open fracture",
      "Closed fracture",
      "Impacted fracture",
      "Incomplete fracture"
    ],
    answer: "Open fracture",
    rationale:
      "An open fracture involves a break in the skin or mucous membrane that communicates with the fractured bone. The bone does not have to be visibly protruding.",
    takeaway:
      "Open fracture means the fracture communicates with the outside environment and carries a high infection risk."
  },
  {
    id: "MSK-FT-002",
    caseId: "MSK-FT-CASE-002",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Closed Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has a broken radius, but the skin over the injury remains intact. Which fracture type is present?",
    choices: [
      "Closed fracture",
      "Open fracture",
      "Comminuted fracture",
      "Spiral fracture"
    ],
    answer: "Closed fracture",
    rationale:
      "A closed fracture does not break through the skin. Internal bleeding, swelling, and neurovascular injury can still occur.",
    takeaway:
      "Closed means the skin remains intact; it does not mean the injury is minor."
  },
  {
    id: "MSK-FT-003",
    caseId: "MSK-FT-CASE-003",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Open Fracture Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient arrives with an open lower-leg fracture contaminated with dirt. Which intervention should the nurse anticipate as a priority?",
    choices: [
      "IV antibiotics and surgical irrigation",
      "Immediate weight-bearing",
      "Heat applied directly to the wound",
      "Forceful bedside reduction"
    ],
    answer: "IV antibiotics and surgical irrigation",
    rationale:
      "Open fractures are contaminated injuries with a significant risk of deep infection and osteomyelitis. Antibiotics, tetanus prophylaxis, and operative irrigation and debridement are commonly required.",
    takeaway:
      "For an open fracture, infection prevention and rapid surgical management are major priorities."
  },
  {
    id: "MSK-FT-004",
    caseId: "MSK-FT-CASE-004",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Complete Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Imaging shows that a fracture line extends through the entire width of the bone. How should the nurse classify it?",
    choices: [
      "Complete fracture",
      "Incomplete fracture",
      "Greenstick fracture",
      "Stress fracture"
    ],
    answer: "Complete fracture",
    rationale:
      "A complete fracture extends through the entire bone, separating it into two or more fragments.",
    takeaway:
      "Complete fractures pass through the full width of the bone."
  },
  {
    id: "MSK-FT-005",
    caseId: "MSK-FT-CASE-005",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Incomplete Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fracture extends through only part of the bone and does not separate it completely. Which type is this?",
    choices: [
      "Incomplete fracture",
      "Complete fracture",
      "Comminuted fracture",
      "Impacted fracture"
    ],
    answer: "Incomplete fracture",
    rationale:
      "An incomplete fracture affects only part of the bone’s width. These injuries are common in children because pediatric bones are flexible.",
    takeaway:
      "Incomplete fractures do not extend through the entire bone."
  },
  {
    id: "MSK-FT-006",
    caseId: "MSK-FT-CASE-006",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Greenstick Fracture",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A child falls and sustains a fracture in which one side of the bone breaks while the other side bends. Which fracture pattern is present?",
    choices: [
      "Greenstick fracture",
      "Comminuted fracture",
      "Compression fracture",
      "Impacted fracture"
    ],
    answer: "Greenstick fracture",
    rationale:
      "A greenstick fracture is an incomplete pediatric fracture in which one side breaks and the opposite side bends.",
    takeaway:
      "Greenstick fractures are common in children because their bones are more flexible."
  },
  {
    id: "MSK-FT-007",
    caseId: "MSK-FT-CASE-007",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Buckle Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A child’s distal radius is compressed, causing the cortex to bulge without a complete break. Which fracture is most likely?",
    choices: [
      "Buckle fracture",
      "Spiral fracture",
      "Open fracture",
      "Displaced fracture"
    ],
    answer: "Buckle fracture",
    rationale:
      "A buckle or torus fracture occurs when compression causes the bone cortex to bulge. It is commonly seen in children.",
    takeaway:
      "Buckle fractures are compression injuries that cause a bulging cortex, usually in pediatric bones."
  },
  {
    id: "MSK-FT-008",
    caseId: "MSK-FT-CASE-008",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Spiral Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fracture line wraps around the shaft of a long bone after a twisting injury. Which fracture type is present?",
    choices: [
      "Spiral fracture",
      "Transverse fracture",
      "Compression fracture",
      "Impacted fracture"
    ],
    answer: "Spiral fracture",
    rationale:
      "Spiral fractures result from a twisting force and create a fracture line that circles the bone.",
    takeaway:
      "Spiral fractures occur from rotational or twisting forces."
  },
  {
    id: "MSK-FT-009",
    caseId: "MSK-FT-CASE-009",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Child Abuse",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A nonambulatory infant is found to have a spiral femur fracture. Which nursing action is most appropriate?",
    choices: [
      "Report the finding according to mandatory-reporting policy",
      "Assume the injury occurred during normal play",
      "Question the caregiver aggressively in front of the child",
      "Delay documentation until discharge"
    ],
    answer: "Report the finding according to mandatory-reporting policy",
    rationale:
      "A spiral fracture in a nonambulatory child may indicate inflicted trauma. The nurse must document objectively and follow mandatory-reporting requirements.",
    takeaway:
      "A spiral fracture in a nonambulatory child is a red flag for possible abuse."
  },
  {
    id: "MSK-FT-010",
    caseId: "MSK-FT-CASE-010",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Transverse Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "An x-ray shows a fracture line running straight across the bone at a right angle to the shaft. Which fracture type is present?",
    choices: [
      "Transverse fracture",
      "Oblique fracture",
      "Spiral fracture",
      "Compression fracture"
    ],
    answer: "Transverse fracture",
    rationale:
      "A transverse fracture runs perpendicular to the long axis of the bone, often after a direct force.",
    takeaway:
      "Transverse means the fracture line runs straight across the bone."
  },
  {
    id: "MSK-FT-011",
    caseId: "MSK-FT-CASE-011",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Oblique Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A fracture line runs diagonally across the shaft of the bone. Which fracture pattern is present?",
    choices: [
      "Oblique fracture",
      "Transverse fracture",
      "Impacted fracture",
      "Compression fracture"
    ],
    answer: "Oblique fracture",
    rationale:
      "An oblique fracture has a diagonal fracture line across the bone and may occur from an angled force.",
    takeaway:
      "Oblique fractures run diagonally across the bone."
  },
  {
    id: "MSK-FT-012",
    caseId: "MSK-FT-CASE-012",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Comminuted Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient’s femur is broken into several fragments following a high-speed crash. Which fracture type is present?",
    choices: [
      "Comminuted fracture",
      "Greenstick fracture",
      "Buckle fracture",
      "Stress fracture"
    ],
    answer: "Comminuted fracture",
    rationale:
      "A comminuted fracture breaks the bone into three or more fragments and commonly results from high-energy trauma.",
    takeaway:
      "Comminuted means the bone is broken into multiple pieces."
  },
  {
    id: "MSK-FT-013",
    caseId: "MSK-FT-CASE-013",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Impacted Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Imaging shows that one broken end of a bone has been driven into the other fragment. Which fracture type is present?",
    choices: [
      "Impacted fracture",
      "Displaced fracture",
      "Open fracture",
      "Spiral fracture"
    ],
    answer: "Impacted fracture",
    rationale:
      "An impacted fracture occurs when one bone fragment is driven into another, often due to an axial force.",
    takeaway:
      "Impacted fractures have bone fragments wedged into each other."
  },
  {
    id: "MSK-FT-014",
    caseId: "MSK-FT-CASE-014",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Compression Fracture",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "An older adult with osteoporosis develops sudden back pain after lifting a light object. Imaging reveals collapse of a vertebral body. Which fracture type is most likely?",
    choices: [
      "Compression fracture",
      "Spiral fracture",
      "Greenstick fracture",
      "Avulsion fracture"
    ],
    answer: "Compression fracture",
    rationale:
      "Compression fractures involve collapse of bone, commonly vertebrae, and are frequently associated with osteoporosis.",
    takeaway:
      "Vertebral collapse in an older adult with osteoporosis suggests a compression fracture."
  },
  {
    id: "MSK-FT-015",
    caseId: "MSK-FT-CASE-015",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Avulsion Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A tendon pulls away from its attachment site and removes a small piece of bone. Which injury is present?",
    choices: [
      "Avulsion fracture",
      "Impacted fracture",
      "Compression fracture",
      "Buckle fracture"
    ],
    answer: "Avulsion fracture",
    rationale:
      "An avulsion fracture occurs when a tendon or ligament pulls a fragment of bone away from its attachment site.",
    takeaway:
      "Avulsion fractures occur when a tendon or ligament pulls off a piece of bone."
  },
  {
    id: "MSK-FT-016",
    caseId: "MSK-FT-CASE-016",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Stress Fracture",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A distance runner reports gradually worsening foot pain without a single traumatic event. Imaging later identifies a small crack in the metatarsal. Which fracture is most likely?",
    choices: [
      "Stress fracture",
      "Open fracture",
      "Comminuted fracture",
      "Impacted fracture"
    ],
    answer: "Stress fracture",
    rationale:
      "Stress fractures result from repetitive loading and overuse rather than one acute traumatic event.",
    takeaway:
      "Gradual localized pain after repetitive activity suggests a stress fracture."
  },
  {
    id: "MSK-FT-017",
    caseId: "MSK-FT-CASE-017",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Pathologic Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with metastatic bone cancer fractures the humerus while turning in bed. Which fracture type is most likely?",
    choices: [
      "Pathologic fracture",
      "Stress fracture",
      "Greenstick fracture",
      "Transverse traumatic fracture"
    ],
    answer: "Pathologic fracture",
    rationale:
      "A pathologic fracture occurs through bone weakened by disease, such as cancer, osteoporosis, or infection.",
    takeaway:
      "Minimal trauma causing fracture in diseased bone suggests a pathologic fracture."
  },
  {
    id: "MSK-FT-018",
    caseId: "MSK-FT-CASE-018",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Displaced Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "The broken ends of a fractured bone are no longer aligned with each other. Which description is correct?",
    choices: [
      "Displaced fracture",
      "Nondisplaced fracture",
      "Incomplete fracture",
      "Buckle fracture"
    ],
    answer: "Displaced fracture",
    rationale:
      "A displaced fracture occurs when bone fragments move out of normal anatomical alignment.",
    takeaway:
      "Displaced fractures have lost normal alignment and usually require reduction."
  },
  {
    id: "MSK-FT-019",
    caseId: "MSK-FT-CASE-019",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Nondisplaced Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A bone is fractured, but the fragments remain in normal anatomical alignment. Which term describes this?",
    choices: [
      "Nondisplaced fracture",
      "Displaced fracture",
      "Open fracture",
      "Comminuted fracture"
    ],
    answer: "Nondisplaced fracture",
    rationale:
      "In a nondisplaced fracture, the bone is broken but remains properly aligned.",
    takeaway:
      "Nondisplaced fractures maintain normal bone alignment."
  },
  {
    id: "MSK-FT-020",
    caseId: "MSK-FT-CASE-020",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Epiphyseal Fracture",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A child has a fracture that crosses the growth plate. Which long-term complication should the nurse include in teaching?",
    choices: [
      "Unequal limb growth",
      "Permanent hyperglycemia",
      "Chronic liver failure",
      "Hearing impairment"
    ],
    answer: "Unequal limb growth",
    rationale:
      "Growth plate fractures can disrupt longitudinal bone growth, leading to limb-length discrepancy or angular deformity.",
    takeaway:
      "Pediatric growth plate injuries require long-term monitoring for altered growth."
  },
  {
    id: "MSK-FT-021",
    caseId: "MSK-FT-CASE-021",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient with a fracture should the nurse assess first?",
    choices: [
      "A patient with a displaced tibial fracture and absent pedal pulse",
      "A patient with a nondisplaced wrist fracture reporting pain rated 4 of 10",
      "A patient with a healing stress fracture requesting discharge teaching",
      "A patient with a closed finger fracture waiting for an ice pack"
    ],
    answer: "A patient with a displaced tibial fracture and absent pedal pulse",
    rationale:
      "An absent distal pulse suggests impaired arterial perfusion and possible limb-threatening neurovascular compromise.",
    takeaway:
      "Absent pulse, pallor, paralysis, paresthesia, or severe pain after fracture requires immediate action."
  },
  {
    id: "MSK-FT-022",
    caseId: "MSK-FT-CASE-022",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Fracture Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which fracture patterns are especially common in children because their bones are more flexible? Select all that apply.",
    choices: [
      "Greenstick fracture",
      "Buckle fracture",
      "Incomplete fracture",
      "Compression fracture from osteoporosis",
      "Pathologic fracture from metastatic cancer"
    ],
    answer: [
      "Greenstick fracture",
      "Buckle fracture",
      "Incomplete fracture"
    ],
    rationale:
      "Pediatric bone flexibility makes greenstick, buckle, and other incomplete fractures more common than in adults.",
    takeaway:
      "Flexible pediatric bones tend to bend, buckle, or break incompletely."
  },
  {
    id: "MSK-FT-023",
    caseId: "MSK-FT-CASE-023",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Open Fracture Findings",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing concerns are associated with an open fracture? Select all that apply.",
    choices: [
      "Osteomyelitis",
      "Tetanus exposure",
      "Soft-tissue contamination",
      "Blood loss",
      "Guaranteed preservation of distal circulation"
    ],
    answer: [
      "Osteomyelitis",
      "Tetanus exposure",
      "Soft-tissue contamination",
      "Blood loss"
    ],
    rationale:
      "Open fractures can cause contamination, deep infection, tetanus exposure, bleeding, and neurovascular injury.",
    takeaway:
      "Open fractures are emergencies because of contamination, infection risk, bleeding, and tissue damage."
  },
  {
    id: "MSK-FT-024",
    caseId: "MSK-FT-CASE-024",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Mechanism of Injury",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A football player’s planted leg twists while the upper body rotates in the opposite direction. Which fracture pattern would the nurse anticipate?",
    choices: [
      "Spiral fracture",
      "Transverse fracture",
      "Compression fracture",
      "Buckle fracture"
    ],
    answer: "Spiral fracture",
    rationale:
      "A twisting or rotational mechanism commonly produces a spiral fracture.",
    takeaway:
      "Match the mechanism to the pattern: twisting commonly causes a spiral fracture."
  },
  {
    id: "MSK-FT-025",
    caseId: "MSK-FT-CASE-025",
    patient: randomPatient(),
    topic: "Fracture Types",
    subtopic: "Patient Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with a nondisplaced fracture demonstrates correct understanding?",
    choices: [
      "Even though the bones are aligned, I still need to follow immobilization instructions",
      "Because the bone is aligned, I can bear full weight immediately",
      "I do not need to monitor swelling or circulation",
      "A nondisplaced fracture cannot become displaced"
    ],
    answer:
      "Even though the bones are aligned, I still need to follow immobilization instructions",
    rationale:
      "A nondisplaced fracture still requires protection and immobilization to maintain alignment and permit healing.",
    takeaway:
      "Nondisplaced does not mean harmless; proper immobilization and follow-up are still required."
  }
];
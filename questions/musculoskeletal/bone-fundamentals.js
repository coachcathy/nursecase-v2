const boneFundamentalsQuestions = [
  {
    id: "MSK-BF-001",
    caseId: "MSK-BF-CASE-001",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Pediatric Bone Structure",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A school-age child falls from playground equipment and sustains an incomplete fracture. Which characteristic of pediatric bones contributed to this injury pattern?",
    choices: [
      "Children's bones are more flexible and porous",
      "Children's bones contain no periosteum",
      "Children's bones are more brittle than adult bones",
      "Children's bones cannot bend before breaking"
    ],
    answer: "Children's bones are more flexible and porous",
    rationale:
      "Pediatric bones are more flexible and porous than adult bones. They may bend and fracture incompletely, producing patterns such as greenstick fractures.",
    takeaway:
      "Children's bones bend more easily, so incomplete and greenstick fractures are common."
  },
  {
    id: "MSK-BF-002",
    caseId: "MSK-BF-CASE-002",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Growth Plate Injury",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A child has a fracture involving the epiphyseal growth plate. Which concern is most important during follow-up care?",
    choices: [
      "Altered growth of the affected extremity",
      "Permanent hyperglycemia",
      "Development of asthma",
      "Immediate hearing loss"
    ],
    answer: "Altered growth of the affected extremity",
    rationale:
      "The epiphyseal plate is responsible for longitudinal bone growth. Injury can cause growth arrest, limb-length differences, or deformity.",
    takeaway:
      "A growth plate fracture can affect future bone growth and requires continued follow-up."
  },
  {
    id: "MSK-BF-003",
    caseId: "MSK-BF-CASE-003",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Fragility Fracture",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "An older adult fractures the wrist after a minor fall from standing height. Which description best fits this injury?",
    choices: [
      "Fragility fracture",
      "Pathologic dislocation",
      "High-energy traumatic fracture",
      "Congenital fracture"
    ],
    answer: "Fragility fracture",
    rationale:
      "A fragility fracture occurs after low-energy trauma that would not usually fracture healthy bone. It often indicates reduced bone density.",
    takeaway:
      "A fracture after a minor fall should raise concern for osteoporosis or weakened bone."
  },
  {
    id: "MSK-BF-004",
    caseId: "MSK-BF-CASE-004",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Fracture Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient arrives after a motor-vehicle crash with a visibly deformed lower leg. What should the nurse assess first in the affected extremity?",
    choices: [
      "Neurovascular status",
      "Daily calcium intake",
      "Previous dental history",
      "Usual sleep schedule"
    ],
    answer: "Neurovascular status",
    rationale:
      "The nurse must promptly assess circulation, movement, sensation, color, temperature, pulses, and capillary refill distal to the injury.",
    takeaway:
      "Fracture assessment always includes an immediate distal neurovascular check."
  },
  {
    id: "MSK-BF-005",
    caseId: "MSK-BF-CASE-005",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Neurovascular Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse include in a neurovascular assessment of an injured extremity? Select all that apply.",
    choices: [
      "Distal pulse",
      "Skin color and temperature",
      "Capillary refill",
      "Sensation and movement",
      "Bowel sounds"
    ],
    answer: [
      "Distal pulse",
      "Skin color and temperature",
      "Capillary refill",
      "Sensation and movement"
    ],
    rationale:
      "Neurovascular assessment includes circulation, color, temperature, capillary refill, pulses, sensation, and motor function distal to the injury.",
    takeaway:
      "Think circulation, movement, and sensation when checking an injured limb."
  },
  {
    id: "MSK-BF-006",
    caseId: "MSK-BF-CASE-006",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Immobilization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has a suspected forearm fracture after a fall. Which action should the nurse take before transporting the patient for imaging?",
    choices: [
      "Immobilize the extremity in its current position",
      "Force the arm back into normal alignment",
      "Ask the patient to repeatedly flex the wrist",
      "Massage the injured area"
    ],
    answer: "Immobilize the extremity in its current position",
    rationale:
      "A suspected fracture should be immobilized above and below the injury to prevent additional tissue, nerve, and vascular damage. The nurse should not force alignment.",
    takeaway:
      "Immobilize a suspected fracture; do not attempt reduction unless specifically trained and authorized."
  },
  {
    id: "MSK-BF-007",
    caseId: "MSK-BF-CASE-007",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Open Fracture",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient has a tibial fracture with bone visible through the skin. Which complication is the nurse most concerned about?",
    choices: [
      "Infection and osteomyelitis",
      "Hyperthyroidism",
      "Cataract formation",
      "Metabolic alkalosis"
    ],
    answer: "Infection and osteomyelitis",
    rationale:
      "An open fracture allows contamination of bone and soft tissue, creating a major risk for deep infection and osteomyelitis.",
    takeaway:
      "Open fracture means the skin is broken and infection prevention becomes a major priority."
  },
  {
    id: "MSK-BF-008",
    caseId: "MSK-BF-CASE-008",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Open Fracture Care",
    style: "Take Action",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient arrives with an open fracture of the lower leg. Which nursing action is appropriate?",
    choices: [
      "Cover the wound with a sterile dressing",
      "Push exposed bone back beneath the skin",
      "Clean deeply inside the wound at the bedside",
      "Allow the patient to bear weight on the leg"
    ],
    answer: "Cover the wound with a sterile dressing",
    rationale:
      "The nurse should protect the open wound with a sterile dressing, control bleeding, immobilize the extremity, and prepare for antibiotics and surgical irrigation.",
    takeaway:
      "Never push exposed bone back into the wound."
  },
  {
    id: "MSK-BF-009",
    caseId: "MSK-BF-CASE-009",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Bone Healing",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that a patient's fractured bone is healing appropriately?",
    choices: [
      "Progressive callus formation on imaging",
      "Increasing deformity at the fracture site",
      "New loss of distal sensation",
      "Persistent purulent drainage"
    ],
    answer: "Progressive callus formation on imaging",
    rationale:
      "Callus formation bridges the fracture fragments and is an expected part of bone healing. Increasing deformity, neurovascular loss, or drainage suggests complications.",
    takeaway:
      "Callus formation is an expected sign of fracture healing."
  },
  {
    id: "MSK-BF-010",
    caseId: "MSK-BF-CASE-010",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Delayed Healing",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which patient factor places a fractured bone at greatest risk for delayed healing?",
    choices: [
      "Continued cigarette smoking",
      "Adequate protein intake",
      "Following weight-bearing restrictions",
      "Maintaining proper alignment"
    ],
    answer: "Continued cigarette smoking",
    rationale:
      "Nicotine causes vasoconstriction and reduces tissue oxygenation, which can delay bone healing and increase the risk for nonunion.",
    takeaway:
      "Smoking decreases perfusion and slows fracture healing."
  },
  {
    id: "MSK-BF-011",
    caseId: "MSK-BF-CASE-011",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Fracture Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are consistent with a possible fracture? Select all that apply.",
    choices: [
      "Pain and tenderness",
      "Swelling",
      "Deformity",
      "Loss of function",
      "Improved movement without pain"
    ],
    answer: [
      "Pain and tenderness",
      "Swelling",
      "Deformity",
      "Loss of function"
    ],
    rationale:
      "Common fracture manifestations include pain, tenderness, swelling, deformity, crepitus, bruising, and loss of function.",
    takeaway:
      "Pain, swelling, deformity, and impaired function should raise concern for fracture."
  },
  {
    id: "MSK-BF-012",
    caseId: "MSK-BF-CASE-012",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Pain Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a newly casted leg reports rapidly increasing pain that is not relieved by prescribed opioids. What should the nurse do first?",
    choices: [
      "Perform an immediate neurovascular assessment",
      "Explain that severe pain is expected",
      "Apply a heating pad over the cast",
      "Encourage the patient to walk"
    ],
    answer: "Perform an immediate neurovascular assessment",
    rationale:
      "Escalating pain unrelieved by medication may indicate impaired perfusion or developing compartment syndrome. Immediate neurovascular assessment is required.",
    takeaway:
      "Pain out of proportion or unrelieved by opioids is an early warning sign of compartment syndrome."
  },
  {
    id: "MSK-BF-013",
    caseId: "MSK-BF-CASE-013",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Alignment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Why is proper alignment of a fractured bone important during healing?",
    choices: [
      "It promotes normal union and function",
      "It prevents all postoperative pain",
      "It eliminates the need for neurovascular checks",
      "It guarantees the patient will not need rehabilitation"
    ],
    answer: "It promotes normal union and function",
    rationale:
      "Correct alignment allows bone ends to heal in an appropriate position. Poor alignment can result in malunion and impaired function.",
    takeaway:
      "Poor alignment can lead to malunion, deformity, and reduced mobility."
  },
  {
    id: "MSK-BF-014",
    caseId: "MSK-BF-CASE-014",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Nutrition",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which meal selection best supports bone and tissue healing after a fracture?",
    choices: [
      "Grilled chicken, yogurt, spinach, and fruit",
      "Black coffee and gelatin",
      "Diet soda and crackers",
      "Candy and potato chips"
    ],
    answer: "Grilled chicken, yogurt, spinach, and fruit",
    rationale:
      "Bone healing requires adequate calories, protein, calcium, vitamin D, vitamin C, and other nutrients that support collagen and tissue repair.",
    takeaway:
      "Protein, calcium, vitamin D, and vitamin C support fracture healing."
  },
  {
    id: "MSK-BF-015",
    caseId: "MSK-BF-CASE-015",
    patient: randomPatient(),
    topic: "Bone Fundamentals",
    subtopic: "Patient Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "The nurse receives reports on four patients with fractures. Which patient should be assessed first?",
    choices: [
      "A patient with a cast who reports numb toes and increasing pain",
      "A patient requesting assistance choosing lunch",
      "A patient with mild bruising near an old fracture",
      "A patient waiting for routine discharge paperwork"
    ],
    answer: "A patient with a cast who reports numb toes and increasing pain",
    rationale:
      "Numbness and increasing pain may indicate neurovascular compromise or compartment syndrome. Delayed treatment can result in irreversible nerve and tissue damage.",
    takeaway:
      "New pain, pallor, numbness, weakness, or pulse changes after casting require immediate assessment."
  }
];
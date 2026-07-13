const mobilityAssistiveDeviceQuestions = [
  {
    id: "MSK-MOB-001",
    caseId: "MSK-MOB-CASE-001",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Weight-Bearing Status",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient is prescribed non-weight-bearing status for the left leg. Which action is correct?",
    choices: [
      "Keep all weight off the left leg",
      "Place the left foot flat for balance",
      "Bear half of the body weight on the left leg",
      "Walk without an assistive device if pain is mild"
    ],
    answer: "Keep all weight off the left leg",
    rationale:
      "Non-weight-bearing means the affected extremity must not support any body weight.",
    takeaway:
      "Non-weight-bearing means zero weight on the affected limb."
  },
  {
    id: "MSK-MOB-002",
    caseId: "MSK-MOB-CASE-002",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Toe-Touch Weight Bearing",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which action demonstrates correct toe-touch weight bearing?",
    choices: [
      "Touch the toes lightly to the floor for balance without supporting body weight",
      "Bear full body weight through the affected foot",
      "Keep the affected leg elevated at all times",
      "Place half of the body weight on the affected leg"
    ],
    answer:
      "Touch the toes lightly to the floor for balance without supporting body weight",
    rationale:
      "Toe-touch weight bearing allows the toes to contact the floor for balance while placing minimal or no meaningful weight through the limb.",
    takeaway:
      "Toe-touch weight bearing is for balance, not support."
  },
  {
    id: "MSK-MOB-003",
    caseId: "MSK-MOB-CASE-003",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Partial Weight Bearing",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What does partial weight bearing mean?",
    choices: [
      "Only the prescribed amount of weight may be placed on the affected limb",
      "No weight may be placed on the affected limb",
      "The patient may bear full weight as tolerated",
      "The patient must remain in bed"
    ],
    answer:
      "Only the prescribed amount of weight may be placed on the affected limb",
    rationale:
      "Partial weight bearing permits a limited amount of weight through the affected extremity, often expressed as a percentage or number of pounds.",
    takeaway:
      "Partial weight bearing must follow the exact prescribed limit."
  },
  {
    id: "MSK-MOB-004",
    caseId: "MSK-MOB-CASE-004",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Weight Bearing As Tolerated",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient prescribed weight bearing as tolerated shows correct understanding?",
    choices: [
      "I can place as much weight as I can tolerate without exceeding instructions",
      "I must keep all weight off the leg",
      "I should bear full weight even if severe pain occurs",
      "I no longer need an assistive device"
    ],
    answer:
      "I can place as much weight as I can tolerate without exceeding instructions",
    rationale:
      "Weight bearing as tolerated allows the patient to bear an amount of weight limited by pain, strength, balance, and provider instructions.",
    takeaway:
      "Weight bearing as tolerated does not automatically mean full weight bearing."
  },
  {
    id: "MSK-MOB-005",
    caseId: "MSK-MOB-CASE-005",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Crutch Fit",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which finding indicates that axillary crutches are fitted correctly?",
    choices: [
      "There are about two to three finger widths between the axilla and the crutch pad",
      "The crutch pad presses firmly into the axilla",
      "The elbows remain completely straight",
      "The handgrips are positioned above the shoulders"
    ],
    answer:
      "There are about two to three finger widths between the axilla and the crutch pad",
    rationale:
      "Proper crutch fit leaves space below the axilla and allows slight elbow flexion to prevent nerve and vessel compression.",
    takeaway:
      "Crutches should not press into the axilla."
  },
  {
    id: "MSK-MOB-006",
    caseId: "MSK-MOB-CASE-006",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Crutch Support",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Where should a patient place body weight while using axillary crutches?",
    choices: [
      "Through the hands on the handgrips",
      "Directly through the axillae",
      "Through the shoulders only",
      "Through the injured extremity"
    ],
    answer: "Through the hands on the handgrips",
    rationale:
      "Weight should be supported through the hands, not the axillae, to prevent brachial plexus injury.",
    takeaway:
      "Support weight with the hands, never the armpits."
  },
  {
    id: "MSK-MOB-007",
    caseId: "MSK-MOB-CASE-007",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Crutch Complication",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient using axillary crutches reports numbness and tingling in both hands. What should the nurse suspect?",
    choices: [
      "Improper crutch use causing nerve compression",
      "Expected muscle strengthening",
      "Improved circulation",
      "Normal adaptation to crutches"
    ],
    answer: "Improper crutch use causing nerve compression",
    rationale:
      "Pressure in the axilla can compress nerves and blood vessels. Crutch fit and technique should be reassessed immediately.",
    takeaway:
      "Hand numbness may indicate crutch-related nerve compression."
  },
  {
    id: "MSK-MOB-008",
    caseId: "MSK-MOB-CASE-008",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Tripod Position",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which position provides a stable base before a patient begins walking with crutches?",
    choices: [
      "Tripod position",
      "Supine position",
      "Trendelenburg position",
      "Prone position"
    ],
    answer: "Tripod position",
    rationale:
      "In the tripod position, the crutch tips are placed slightly forward and to the sides of the feet to create a broad base of support.",
    takeaway:
      "The tripod position improves stability before movement."
  },
  {
    id: "MSK-MOB-009",
    caseId: "MSK-MOB-CASE-009",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Three-Point Gait",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which gait is commonly used when one leg must remain non-weight-bearing?",
    choices: [
      "Three-point gait",
      "Four-point gait",
      "Two-point gait",
      "Swing-through gait only"
    ],
    answer: "Three-point gait",
    rationale:
      "With a three-point gait, both crutches and the affected leg advance together, followed by the unaffected leg.",
    takeaway:
      "Three-point gait is commonly used when one leg cannot bear weight."
  },
  {
    id: "MSK-MOB-010",
    caseId: "MSK-MOB-CASE-010",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Four-Point Gait",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which crutch gait provides the greatest stability by moving one crutch and the opposite foot separately?",
    choices: [
      "Four-point gait",
      "Three-point gait",
      "Swing-to gait",
      "Swing-through gait"
    ],
    answer: "Four-point gait",
    rationale:
      "The four-point gait provides maximum stability because three points of support remain on the ground during movement.",
    takeaway:
      "Four-point gait is slow but highly stable."
  },
  {
    id: "MSK-MOB-011",
    caseId: "MSK-MOB-CASE-011",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Two-Point Gait",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which gait pattern resembles normal walking and requires good balance and partial weight bearing on both legs?",
    choices: [
      "Two-point gait",
      "Three-point gait",
      "Four-point gait",
      "Swing-to gait"
    ],
    answer: "Two-point gait",
    rationale:
      "The two-point gait advances one crutch with the opposite foot and resembles a normal walking pattern.",
    takeaway:
      "Two-point gait requires coordination and partial weight bearing."
  },
  {
    id: "MSK-MOB-012",
    caseId: "MSK-MOB-CASE-012",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Stairs with Crutches",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instruction should the nurse give for climbing stairs with crutches?",
    choices: [
      "Lead with the unaffected leg when going up",
      "Lead with the affected leg when going up",
      "Move both legs and crutches at the same time",
      "Place weight through the axillae"
    ],
    answer: "Lead with the unaffected leg when going up",
    rationale:
      "The stronger, unaffected leg goes up first. The affected leg and crutches follow.",
    takeaway:
      "Up with the good."
  },
  {
    id: "MSK-MOB-013",
    caseId: "MSK-MOB-CASE-013",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Descending Stairs",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instruction should the nurse give for descending stairs with crutches?",
    choices: [
      "Move the crutches and affected leg down first",
      "Move the unaffected leg down first",
      "Jump down with both feet",
      "Place the crutches behind the body"
    ],
    answer: "Move the crutches and affected leg down first",
    rationale:
      "When going down stairs, the crutches and affected leg move first, followed by the unaffected leg.",
    takeaway:
      "Down with the bad."
  },
  {
    id: "MSK-MOB-014",
    caseId: "MSK-MOB-CASE-014",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Sitting with Crutches",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which action is correct when sitting in a chair while using crutches?",
    choices: [
      "Back up until the legs touch the chair and hold both crutches on the affected side",
      "Sit before feeling the chair behind the legs",
      "Keep one crutch under each axilla while lowering",
      "Place full weight through the injured leg"
    ],
    answer:
      "Back up until the legs touch the chair and hold both crutches on the affected side",
    rationale:
      "The patient should back up to the chair, hold both crutches in one hand on the affected side, reach for the chair, and lower slowly.",
    takeaway:
      "Feel the chair behind the legs before sitting."
  },
  {
    id: "MSK-MOB-015",
    caseId: "MSK-MOB-CASE-015",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Walker Use",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which sequence is correct when walking with a standard walker and one weak leg?",
    choices: [
      "Move the walker, then the weak leg, then the strong leg",
      "Move the strong leg, then the walker, then the weak leg",
      "Lift the walker while stepping with both legs together",
      "Pull the walker behind the body"
    ],
    answer: "Move the walker, then the weak leg, then the strong leg",
    rationale:
      "The walker moves first, followed by the weak leg, then the strong leg.",
    takeaway:
      "Walker first, weak leg second, strong leg last."
  },
  {
    id: "MSK-MOB-016",
    caseId: "MSK-MOB-CASE-016",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Walker Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which action by a patient using a walker requires correction?",
    choices: [
      "Pulling on the walker to stand from a chair",
      "Pushing from the chair armrests to stand",
      "Keeping the walker close to the body",
      "Wearing nonskid footwear"
    ],
    answer: "Pulling on the walker to stand from a chair",
    rationale:
      "Pulling on a walker can cause it to tip. The patient should push from the chair or bed before grasping the walker.",
    takeaway:
      "Do not pull on a walker when standing."
  },
  {
    id: "MSK-MOB-017",
    caseId: "MSK-MOB-CASE-017",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Cane Placement",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "On which side should a patient hold a cane when one leg is weak?",
    choices: [
      "The stronger side",
      "The weaker side",
      "Either side without difference",
      "Both hands"
    ],
    answer: "The stronger side",
    rationale:
      "The cane is held on the stronger side to widen the base of support and reduce weight on the weaker leg.",
    takeaway:
      "Hold the cane on the strong side."
  },
  {
    id: "MSK-MOB-018",
    caseId: "MSK-MOB-CASE-018",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Cane Sequence",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which sequence is correct when walking with a cane and a weak left leg?",
    choices: [
      "Move the cane and left leg together, then move the right leg",
      "Move the right leg first, then the cane",
      "Move the cane after both legs",
      "Hold the cane on the left side and move the right leg first"
    ],
    answer:
      "Move the cane and left leg together, then move the right leg",
    rationale:
      "The cane moves with the weaker leg, followed by the stronger leg.",
    takeaway:
      "Cane and weak leg move together."
  },
  {
    id: "MSK-MOB-019",
    caseId: "MSK-MOB-CASE-019",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Transfer Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Before transferring a patient from bed to chair, which action should the nurse take first?",
    choices: [
      "Assess the patient's strength, balance, and ability to follow instructions",
      "Pull the patient quickly to a standing position",
      "Place the chair several feet from the bed",
      "Ask the patient to stand without footwear"
    ],
    answer:
      "Assess the patient's strength, balance, and ability to follow instructions",
    rationale:
      "The nurse must determine the level of assistance and equipment required before beginning the transfer.",
    takeaway:
      "Assess before transferring."
  },
  {
    id: "MSK-MOB-020",
    caseId: "MSK-MOB-CASE-020",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Gait Belt",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which action is appropriate when using a gait belt?",
    choices: [
      "Secure it snugly around the waist over clothing",
      "Place it around the neck",
      "Use it over a fresh abdominal incision",
      "Lift the patient by pulling upward on the arms"
    ],
    answer: "Secure it snugly around the waist over clothing",
    rationale:
      "A gait belt provides a secure handhold during transfers and ambulation. It should not be placed over tubes, wounds, or painful areas.",
    takeaway:
      "Use a gait belt to guide and support, not to lift by force."
  },
  {
    id: "MSK-MOB-021",
    caseId: "MSK-MOB-CASE-021",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Fall Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which interventions reduce fall risk for a patient learning to use an assistive device? Select all that apply.",
    choices: [
      "Use nonskid footwear",
      "Clear clutter from walkways",
      "Ensure adequate lighting",
      "Keep the device within reach",
      "Encourage rushing to build confidence"
    ],
    answer: [
      "Use nonskid footwear",
      "Clear clutter from walkways",
      "Ensure adequate lighting",
      "Keep the device within reach"
    ],
    rationale:
      "Safe footwear, clear paths, adequate lighting, and access to the prescribed device reduce fall risk.",
    takeaway:
      "Environment and equipment placement are part of mobility safety."
  },
  {
    id: "MSK-MOB-022",
    caseId: "MSK-MOB-CASE-022",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Orthostatic Hypotension",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient becomes dizzy when standing for the first time after several days of bedrest. What should the nurse do first?",
    choices: [
      "Assist the patient to sit or lie down safely",
      "Encourage the patient to continue walking",
      "Leave the patient standing to adapt",
      "Remove the assistive device"
    ],
    answer: "Assist the patient to sit or lie down safely",
    rationale:
      "Dizziness may indicate orthostatic hypotension. The priority is preventing a fall and restoring a safe position.",
    takeaway:
      "Dizziness during ambulation means stop and protect the patient."
  },
  {
    id: "MSK-MOB-023",
    caseId: "MSK-MOB-CASE-023",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Rehabilitation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Why is early mobility encouraged after fracture repair when permitted?",
    choices: [
      "It reduces complications of immobility and supports functional recovery",
      "It guarantees that pain will stop",
      "It eliminates the need for physical therapy",
      "It prevents every possible blood clot"
    ],
    answer:
      "It reduces complications of immobility and supports functional recovery",
    rationale:
      "Early, safe mobility helps reduce atelectasis, constipation, pressure injury, muscle loss, and venous stasis while promoting independence.",
    takeaway:
      "Safe early mobility supports recovery and prevents immobility complications."
  },
  {
    id: "MSK-MOB-024",
    caseId: "MSK-MOB-CASE-024",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Patient Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient using crutches who reports new hand numbness and weakness",
      "A patient requesting help adjusting a walker basket",
      "A patient asking when physical therapy will arrive",
      "A patient practicing stair instructions with supervision"
    ],
    answer:
      "A patient using crutches who reports new hand numbness and weakness",
    rationale:
      "New numbness and weakness may indicate nerve compression from improper crutch fit or technique.",
    takeaway:
      "New neurologic symptoms during assistive-device use require immediate assessment."
  },
  {
    id: "MSK-MOB-025",
    caseId: "MSK-MOB-CASE-025",
    patient: randomPatient(),
    topic: "Mobility & Assistive Devices",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which outcome best indicates that assistive-device teaching has been effective?",
    choices: [
      "The patient uses the device with correct sequencing and no loss of balance",
      "The patient places weight through the axillae",
      "The patient ignores weight-bearing restrictions",
      "The patient pulls on the walker to stand"
    ],
    answer:
      "The patient uses the device with correct sequencing and no loss of balance",
    rationale:
      "Correct technique, adherence to weight-bearing restrictions, and safe balance demonstrate effective learning.",
    takeaway:
      "The goal is safe, independent mobility using correct technique."
  }
];
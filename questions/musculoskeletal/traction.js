const tractionQuestions = [
  {
    id: "MSK-TR-001",
    caseId: "MSK-TR-CASE-001",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Purpose",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What is the primary purpose of traction for a patient with a musculoskeletal injury?",
    choices: [
      "Maintain alignment and reduce muscle spasms",
      "Increase joint movement",
      "Promote uncontrolled weight bearing",
      "Replace all surgical treatment"
    ],
    answer: "Maintain alignment and reduce muscle spasms",
    rationale:
      "Traction applies a pulling force to maintain alignment, decrease muscle spasms, reduce pain, and prevent or correct deformity.",
    takeaway:
      "Traction supports alignment and reduces painful muscle spasms."
  },
  {
    id: "MSK-TR-002",
    caseId: "MSK-TR-CASE-002",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Continuous Traction",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing action is essential for maintaining effective continuous traction?",
    choices: [
      "Keep the weights hanging freely",
      "Rest the weights on the floor",
      "Remove the weights during repositioning",
      "Place the weights on the mattress"
    ],
    answer: "Keep the weights hanging freely",
    rationale:
      "Traction weights must hang freely to maintain the prescribed pulling force. If weights rest on the floor or bed, traction is interrupted.",
    takeaway:
      "Traction weights must hang freely at all times."
  },
  {
    id: "MSK-TR-003",
    caseId: "MSK-TR-CASE-003",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Weight Removal",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient in traction asks the nurse to remove the weights temporarily because of discomfort. What is the best response?",
    choices: [
      "The weights should not be removed unless specifically prescribed",
      "The weights can be removed whenever pain increases",
      "The weights should be removed during every bath",
      "The patient may remove the weights independently"
    ],
    answer: "The weights should not be removed unless specifically prescribed",
    rationale:
      "Removing traction weights can disrupt alignment and increase muscle spasms. Weights should be removed only with a provider's order or during an emergency.",
    takeaway:
      "Never remove traction weights without an order."
  },
  {
    id: "MSK-TR-004",
    caseId: "MSK-TR-CASE-004",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Body Alignment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment is most important when evaluating whether traction is functioning properly?",
    choices: [
      "The patient's body is in correct alignment",
      "The television is within reach",
      "The meal tray is positioned nearby",
      "The room temperature is comfortable"
    ],
    answer: "The patient's body is in correct alignment",
    rationale:
      "Proper body alignment ensures the traction force is directed correctly and reduces the risk of deformity or additional injury.",
    takeaway:
      "The patient's body must remain aligned with the direction of traction."
  },
  {
    id: "MSK-TR-005",
    caseId: "MSK-TR-CASE-005",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Countertraction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which force commonly provides countertraction in a traction system?",
    choices: [
      "The patient's body weight",
      "An ice pack",
      "A cast cover",
      "A heating pad"
    ],
    answer: "The patient's body weight",
    rationale:
      "Countertraction opposes the pulling force of traction. The patient's body weight and positioning often provide countertraction.",
    takeaway:
      "Traction requires an opposing force, often supplied by the patient's body weight."
  },
  {
    id: "MSK-TR-006",
    caseId: "MSK-TR-CASE-006",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Ropes and Pulleys",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding indicates that a traction system requires correction?",
    choices: [
      "A rope is resting outside the pulley groove",
      "Weights are hanging freely",
      "The ropes move smoothly",
      "The patient remains centered in bed"
    ],
    answer: "A rope is resting outside the pulley groove",
    rationale:
      "Ropes must remain correctly positioned in the pulley grooves and move freely. A displaced rope interrupts the prescribed traction force.",
    takeaway:
      "Ropes must stay centered in pulleys and remain free of knots or obstruction."
  },
  {
    id: "MSK-TR-007",
    caseId: "MSK-TR-CASE-007",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Skin Traction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes skin traction?",
    choices: [
      "The pulling force is applied through the skin",
      "Pins are surgically inserted into the bone",
      "Plates are placed inside the bone",
      "The fracture is stabilized only with a cast"
    ],
    answer: "The pulling force is applied through the skin",
    rationale:
      "Skin traction uses boots, straps, or adhesive materials applied to the skin to transmit a pulling force to the affected extremity.",
    takeaway:
      "Skin traction applies force through the skin and soft tissues."
  },
  {
    id: "MSK-TR-008",
    caseId: "MSK-TR-CASE-008",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Skin Traction Risk",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complication is especially important to monitor for in a patient receiving skin traction?",
    choices: [
      "Skin breakdown",
      "Hepatic failure",
      "Hyperthyroidism",
      "Cataracts"
    ],
    answer: "Skin breakdown",
    rationale:
      "Pressure, friction, moisture, and traction straps can cause skin irritation, pressure injury, or impaired circulation.",
    takeaway:
      "Skin integrity is a major priority with skin traction."
  },
  {
    id: "MSK-TR-009",
    caseId: "MSK-TR-CASE-009",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Buck's Traction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which type of traction uses a boot or wrapping on the lower extremity and is commonly used temporarily before hip surgery?",
    choices: [
      "Buck's traction",
      "Skeletal traction",
      "Halo traction",
      "Cervical tong traction"
    ],
    answer: "Buck's traction",
    rationale:
      "Buck's traction is a type of skin traction applied to the lower extremity. It may reduce muscle spasms and maintain temporary alignment before surgery.",
    takeaway:
      "Buck's traction is temporary skin traction commonly used for lower-extremity injuries."
  },
  {
    id: "MSK-TR-010",
    caseId: "MSK-TR-CASE-010",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Buck's Traction Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient in Buck's traction reports numbness in the foot. What should the nurse do first?",
    choices: [
      "Perform a neurovascular assessment",
      "Remove the weights immediately",
      "Encourage the patient to walk",
      "Apply heat beneath the traction boot"
    ],
    answer: "Perform a neurovascular assessment",
    rationale:
      "Numbness may indicate nerve compression or impaired circulation. The nurse should assess pulses, color, temperature, capillary refill, movement, and sensation.",
    takeaway:
      "New numbness in traction requires an immediate neurovascular check."
  },
  {
    id: "MSK-TR-011",
    caseId: "MSK-TR-CASE-011",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Skeletal Traction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which description is consistent with skeletal traction?",
    choices: [
      "Pins or wires are inserted directly into the bone",
      "Adhesive straps are applied only to the skin",
      "A fiberglass cast provides the pulling force",
      "The patient manually pulls on a trapeze"
    ],
    answer: "Pins or wires are inserted directly into the bone",
    rationale:
      "Skeletal traction applies force directly to the bone through surgically inserted pins, wires, or tongs.",
    takeaway:
      "Skeletal traction transmits force directly through bone."
  },
  {
    id: "MSK-TR-012",
    caseId: "MSK-TR-CASE-012",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Skeletal Traction Mobility",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient in skeletal traction demonstrates correct understanding?",
    choices: [
      "I should use the trapeze to assist with repositioning as instructed",
      "I should turn sharply onto the affected side",
      "I can adjust the traction frame myself",
      "I should remove the weights before moving"
    ],
    answer: "I should use the trapeze to assist with repositioning as instructed",
    rationale:
      "A trapeze can help the patient lift the upper body and reposition while maintaining alignment and traction.",
    takeaway:
      "Use approved mobility aids without disrupting traction alignment."
  },
  {
    id: "MSK-TR-013",
    caseId: "MSK-TR-CASE-013",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Pin Site Care",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing action is appropriate for skeletal-traction pin-site care?",
    choices: [
      "Follow the prescribed pin-care protocol",
      "Apply lotion around each pin",
      "Rotate the pins during care",
      "Cover purulent drainage with powder"
    ],
    answer: "Follow the prescribed pin-care protocol",
    rationale:
      "Pin-site care should follow facility and provider protocols. Pins should not be adjusted, rotated, or treated with unapproved products.",
    takeaway:
      "Perform prescribed pin care and never adjust traction pins."
  },
  {
    id: "MSK-TR-014",
    caseId: "MSK-TR-CASE-014",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Pin Site Infection",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding suggests infection at a skeletal-traction pin site?",
    choices: [
      "Purulent drainage and increasing erythema",
      "A small amount of dried serous drainage",
      "Visible metal hardware",
      "Mild tenderness immediately after insertion"
    ],
    answer: "Purulent drainage and increasing erythema",
    rationale:
      "Purulent drainage, spreading redness, warmth, swelling, fever, and increasing pain may indicate pin-site infection.",
    takeaway:
      "Purulent drainage and spreading redness at a pin site require prompt follow-up."
  },
  {
    id: "MSK-TR-015",
    caseId: "MSK-TR-CASE-015",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Neurovascular Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse include in a neurovascular assessment for a patient in traction? Select all that apply.",
    choices: [
      "Distal pulse",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation and movement",
      "Bowel sounds"
    ],
    answer: [
      "Distal pulse",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation and movement"
    ],
    rationale:
      "Neurovascular checks include circulation, capillary refill, color, temperature, pulse, sensation, and motor function distal to the injury.",
    takeaway:
      "Traction requires frequent checks of circulation, movement, and sensation."
  },
  {
    id: "MSK-TR-016",
    caseId: "MSK-TR-CASE-016",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Pressure Injury Prevention",
    style: "Take Action",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which intervention helps prevent pressure injuries in a patient who must remain in traction?",
    choices: [
      "Reposition within prescribed limits and inspect pressure areas",
      "Place the patient flat without movement for several days",
      "Massage reddened bony prominences",
      "Remove the traction system each shift"
    ],
    answer: "Reposition within prescribed limits and inspect pressure areas",
    rationale:
      "Immobility increases pressure injury risk. The nurse should inspect skin, use pressure-relieving surfaces, and reposition while maintaining traction alignment.",
    takeaway:
      "Protect skin without interrupting traction."
  },
  {
    id: "MSK-TR-017",
    caseId: "MSK-TR-CASE-017",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Immobility",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications are associated with prolonged immobility in traction? Select all that apply.",
    choices: [
      "Deep-vein thrombosis",
      "Constipation",
      "Pressure injury",
      "Atelectasis",
      "Improved muscle strength"
    ],
    answer: [
      "Deep-vein thrombosis",
      "Constipation",
      "Pressure injury",
      "Atelectasis"
    ],
    rationale:
      "Prolonged immobility increases the risk for venous stasis, constipation, skin breakdown, pulmonary complications, and muscle loss.",
    takeaway:
      "Traction patients need prevention for DVT, constipation, pressure injury, and respiratory complications."
  },
  {
    id: "MSK-TR-018",
    caseId: "MSK-TR-CASE-018",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Respiratory Care",
    style: "Take Action",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which intervention helps reduce pulmonary complications in a patient confined to traction?",
    choices: [
      "Encourage coughing, deep breathing, and incentive spirometry",
      "Maintain complete silence and bedrest",
      "Restrict all fluid intake",
      "Keep the head of bed flat at all times"
    ],
    answer: "Encourage coughing, deep breathing, and incentive spirometry",
    rationale:
      "Immobility can cause secretion retention and atelectasis. Pulmonary hygiene supports lung expansion and airway clearance.",
    takeaway:
      "Prevent atelectasis with pulmonary hygiene during prolonged immobility."
  },
  {
    id: "MSK-TR-019",
    caseId: "MSK-TR-CASE-019",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "DVT Prevention",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which intervention helps reduce the risk of venous thromboembolism in a patient in traction?",
    choices: [
      "Perform prescribed exercises and administer prophylaxis as ordered",
      "Place a pillow directly behind the knees continuously",
      "Massage a painful swollen calf",
      "Restrict movement of the unaffected limbs"
    ],
    answer: "Perform prescribed exercises and administer prophylaxis as ordered",
    rationale:
      "Exercises of unaffected joints, ankle pumps when allowed, hydration, compression devices, and prescribed anticoagulants help reduce venous stasis.",
    takeaway:
      "Prevent VTE by reducing venous stasis while maintaining traction."
  },
  {
    id: "MSK-TR-020",
    caseId: "MSK-TR-CASE-020",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Constipation Prevention",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which teaching helps reduce constipation for a patient receiving prolonged traction?",
    choices: [
      "Increase fluids and fiber if not contraindicated",
      "Avoid all fruits and vegetables",
      "Remain NPO until traction is discontinued",
      "Limit activity of the unaffected extremities"
    ],
    answer: "Increase fluids and fiber if not contraindicated",
    rationale:
      "Immobility and opioid use can slow bowel motility. Fluids, fiber, activity within limits, and prescribed bowel medications help prevent constipation.",
    takeaway:
      "Immobility and opioids increase constipation risk."
  },
  {
    id: "MSK-TR-021",
    caseId: "MSK-TR-CASE-021",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Pain",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient in traction develops severe pain that is not relieved by prescribed medication. What should the nurse do first?",
    choices: [
      "Assess alignment and neurovascular status",
      "Increase the traction weight independently",
      "Remove all traction equipment",
      "Tell the patient that severe pain is expected"
    ],
    answer: "Assess alignment and neurovascular status",
    rationale:
      "Unrelieved pain may indicate loss of alignment, muscle spasm, neurovascular compromise, or compartment syndrome.",
    takeaway:
      "Unexpected severe pain in traction requires immediate assessment."
  },
  {
    id: "MSK-TR-022",
    caseId: "MSK-TR-CASE-022",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Priority Finding",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient in traction should the nurse assess first?",
    choices: [
      "A patient with pale, cool toes and delayed capillary refill",
      "A patient requesting assistance with oral care",
      "A patient reporting mild itching under a traction boot",
      "A patient asking when lunch will arrive"
    ],
    answer: "A patient with pale, cool toes and delayed capillary refill",
    rationale:
      "Pallor, coolness, and delayed capillary refill indicate impaired circulation and possible limb-threatening neurovascular compromise.",
    takeaway:
      "Perfusion changes take priority in a patient receiving traction."
  },
  {
    id: "MSK-TR-023",
    caseId: "MSK-TR-CASE-023",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "System Check",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which findings indicate that a traction system is functioning correctly? Select all that apply.",
    choices: [
      "Weights hang freely",
      "Ropes move smoothly through pulleys",
      "The patient remains in proper alignment",
      "Knots do not touch the pulleys",
      "Weights rest on the floor"
    ],
    answer: [
      "Weights hang freely",
      "Ropes move smoothly through pulleys",
      "The patient remains in proper alignment",
      "Knots do not touch the pulleys"
    ],
    rationale:
      "Effective traction requires free-hanging weights, unobstructed ropes and pulleys, correct alignment, and intact countertraction.",
    takeaway:
      "Check weights, ropes, pulleys, knots, alignment, and countertraction."
  },
  {
    id: "MSK-TR-024",
    caseId: "MSK-TR-CASE-024",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Skin Traction Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing actions are appropriate for a patient in skin traction? Select all that apply.",
    choices: [
      "Inspect the skin under straps and boots",
      "Assess distal neurovascular status",
      "Keep linens wrinkle-free",
      "Maintain prescribed traction weights",
      "Apply powder beneath the traction boot"
    ],
    answer: [
      "Inspect the skin under straps and boots",
      "Assess distal neurovascular status",
      "Keep linens wrinkle-free",
      "Maintain prescribed traction weights"
    ],
    rationale:
      "Skin traction requires skin inspection, neurovascular checks, pressure injury prevention, and maintenance of the ordered traction force.",
    takeaway:
      "Skin traction care focuses on skin, circulation, alignment, and continuous force."
  },
  {
    id: "MSK-TR-025",
    caseId: "MSK-TR-CASE-025",
    patient: randomPatient(),
    topic: "Traction",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that traction therapy is effective?",
    choices: [
      "The extremity remains aligned with reduced muscle spasms and intact circulation",
      "The weights rest on the mattress",
      "The patient develops new numbness",
      "The pin site has purulent drainage"
    ],
    answer:
      "The extremity remains aligned with reduced muscle spasms and intact circulation",
    rationale:
      "Effective traction maintains alignment, reduces spasms and pain, and preserves distal neurovascular function.",
    takeaway:
      "Successful traction maintains alignment without compromising circulation or nerves."
  }
];
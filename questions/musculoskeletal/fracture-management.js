const fractureManagementQuestions = [
  {
    id: "MSK-FM-001",
    caseId: "MSK-FM-CASE-001",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Closed Reduction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A provider realigns a fractured bone without making a surgical incision. Which procedure has been performed?",
    choices: [
      "Closed reduction",
      "Open reduction",
      "Internal fixation",
      "External fixation"
    ],
    answer: "Closed reduction",
    rationale:
      "Closed reduction restores bone alignment through manipulation without surgically exposing the fracture.",
    takeaway:
      "Closed reduction realigns the bone without opening the skin."
  },
  {
    id: "MSK-FM-002",
    caseId: "MSK-FM-CASE-002",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Closed Reduction Care",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient returns after closed reduction and casting of a forearm fracture. Which assessment is the nurse's priority?",
    choices: [
      "Distal neurovascular status",
      "Dietary preferences",
      "Bowel sounds",
      "Sleep pattern"
    ],
    answer: "Distal neurovascular status",
    rationale:
      "Reduction and casting can impair circulation or nerve function. Pulses, capillary refill, color, temperature, movement, and sensation must be assessed.",
    takeaway:
      "Always perform neurovascular checks after reduction and immobilization."
  },
  {
    id: "MSK-FM-003",
    caseId: "MSK-FM-CASE-003",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Open Reduction",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A surgeon exposes a fracture through an incision and realigns the bone. Which procedure is this?",
    choices: [
      "Open reduction",
      "Closed reduction",
      "Skin traction",
      "Splinting"
    ],
    answer: "Open reduction",
    rationale:
      "Open reduction involves surgically exposing the fracture to restore alignment.",
    takeaway:
      "Open reduction requires surgery to directly visualize and align the fracture."
  },
  {
    id: "MSK-FM-004",
    caseId: "MSK-FM-CASE-004",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "ORIF",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient undergoes open reduction with plates and screws placed inside the body. Which procedure has been performed?",
    choices: [
      "Open reduction internal fixation",
      "Closed reduction",
      "External fixation",
      "Buck's traction"
    ],
    answer: "Open reduction internal fixation",
    rationale:
      "ORIF combines surgical exposure and realignment with internal hardware such as plates, screws, rods, or nails.",
    takeaway:
      "ORIF means surgical alignment plus hardware placed inside the body."
  },
  {
    id: "MSK-FM-005",
    caseId: "MSK-FM-CASE-005",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "ORIF Postoperative Care",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Six hours after ORIF of a tibial fracture, a patient reports severe increasing pain and numbness in the toes. What should the nurse do first?",
    choices: [
      "Perform an immediate neurovascular assessment",
      "Reassure the patient that severe pain is expected",
      "Apply direct heat to the leg",
      "Encourage the patient to ambulate"
    ],
    answer: "Perform an immediate neurovascular assessment",
    rationale:
      "Increasing pain and numbness may indicate compartment syndrome or impaired perfusion and require immediate assessment.",
    takeaway:
      "Escalating pain and sensory changes after fracture repair may signal limb-threatening compromise."
  },
  {
    id: "MSK-FM-006",
    caseId: "MSK-FM-CASE-006",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Internal Fixation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which devices may be used for internal fixation? Select all that apply.",
    choices: [
      "Plates",
      "Screws",
      "Intramedullary rods",
      "Pins placed inside the bone",
      "Weights hanging from a pulley"
    ],
    answer: [
      "Plates",
      "Screws",
      "Intramedullary rods",
      "Pins placed inside the bone"
    ],
    rationale:
      "Internal fixation uses devices placed within or directly on the bone. Hanging weights are associated with traction.",
    takeaway:
      "Internal fixation hardware remains inside the body to stabilize the fracture."
  },
  {
    id: "MSK-FM-007",
    caseId: "MSK-FM-CASE-007",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "External Fixation",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Pins are inserted through the skin into bone and connected to a rigid frame outside the body. Which treatment is being used?",
    choices: [
      "External fixation",
      "Internal fixation",
      "Closed reduction only",
      "Skin traction"
    ],
    answer: "External fixation",
    rationale:
      "External fixation stabilizes the fracture with pins or wires attached to an external frame.",
    takeaway:
      "External fixation uses bone pins connected to a frame outside the body."
  },
  {
    id: "MSK-FM-008",
    caseId: "MSK-FM-CASE-008",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "External Fixator Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding in a patient with an external fixator requires the most immediate follow-up?",
    choices: [
      "Absent distal pulse",
      "Small amount of dried drainage at a pin site",
      "Mild discomfort with repositioning",
      "Request for assistance with bathing"
    ],
    answer: "Absent distal pulse",
    rationale:
      "An absent distal pulse indicates possible arterial compromise and threatens limb viability.",
    takeaway:
      "Neurovascular compromise takes priority over routine pin-site findings."
  },
  {
    id: "MSK-FM-009",
    caseId: "MSK-FM-CASE-009",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Pin Site Infection",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding most strongly suggests infection at an external-fixator pin site?",
    choices: [
      "Purulent drainage with increasing redness",
      "Small amount of dried serous drainage",
      "Mild tenderness immediately after surgery",
      "Visible external hardware"
    ],
    answer: "Purulent drainage with increasing redness",
    rationale:
      "Purulent drainage, spreading redness, warmth, swelling, fever, or increasing pain may indicate pin-site infection.",
    takeaway:
      "Purulent drainage and spreading erythema are not expected pin-site findings."
  },
  {
    id: "MSK-FM-010",
    caseId: "MSK-FM-CASE-010",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Pin Site Care",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement by a patient with an external fixator shows correct understanding of home care?",
    choices: [
      "I will perform pin-site care exactly as instructed",
      "I should loosen the pins if they feel tight",
      "I can adjust the frame when repositioning",
      "I should apply lotion directly around each pin"
    ],
    answer: "I will perform pin-site care exactly as instructed",
    rationale:
      "Pin care must follow the prescribed protocol. The patient should not adjust pins or the frame.",
    takeaway:
      "External-fixator hardware should never be adjusted by the patient."
  },
  {
    id: "MSK-FM-011",
    caseId: "MSK-FM-CASE-011",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Splinting",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Why may a splint be used instead of a circumferential cast immediately after an acute fracture?",
    choices: [
      "A splint allows room for swelling",
      "A splint eliminates the need for neurovascular checks",
      "A splint permits unrestricted joint motion",
      "A splint permanently realigns every fracture"
    ],
    answer: "A splint allows room for swelling",
    rationale:
      "Splints are often used during the acute swelling phase because they are not circumferential and can reduce pressure-related complications.",
    takeaway:
      "Splints are useful early because they accommodate swelling."
  },
  {
    id: "MSK-FM-012",
    caseId: "MSK-FM-CASE-012",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Cast Purpose",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What is the primary purpose of a cast after fracture reduction?",
    choices: [
      "Maintain alignment and immobilize the bone",
      "Increase movement at the fracture site",
      "Eliminate all swelling",
      "Prevent the need for follow-up imaging"
    ],
    answer: "Maintain alignment and immobilize the bone",
    rationale:
      "A cast supports and immobilizes the injured area so the bone can heal in proper alignment.",
    takeaway:
      "The cast protects alignment while the fracture heals."
  },
  {
    id: "MSK-FM-013",
    caseId: "MSK-FM-CASE-013",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Wet Plaster Cast",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "How should the nurse handle a newly applied wet plaster cast?",
    choices: [
      "Support it with the palms of the hands",
      "Lift it using fingertips",
      "Cover it with plastic to speed drying",
      "Place it directly on a hard edge"
    ],
    answer: "Support it with the palms of the hands",
    rationale:
      "Palms distribute pressure and prevent dents. Fingertips can create pressure points that may injure tissue beneath the cast.",
    takeaway:
      "Handle wet plaster with open palms, not fingertips."
  },
  {
    id: "MSK-FM-014",
    caseId: "MSK-FM-CASE-014",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Cast Drying",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which instruction is appropriate while a plaster cast is drying?",
    choices: [
      "Keep the cast uncovered and allow air circulation",
      "Use a heating pad directly over the cast",
      "Cover the cast tightly with blankets",
      "Rest the cast on a sharp surface"
    ],
    answer: "Keep the cast uncovered and allow air circulation",
    rationale:
      "Plaster casts require time and air circulation to dry. Direct heat can cause burns and uneven drying.",
    takeaway:
      "Allow plaster to air dry; do not use direct heat."
  },
  {
    id: "MSK-FM-015",
    caseId: "MSK-FM-CASE-015",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Fiberglass Cast",
    style: "Comparison",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which characteristic distinguishes a fiberglass cast from a plaster cast?",
    choices: [
      "Fiberglass generally dries faster",
      "Fiberglass is always heavier",
      "Fiberglass cannot be used for fractures",
      "Fiberglass takes several days to harden"
    ],
    answer: "Fiberglass generally dries faster",
    rationale:
      "Fiberglass is lightweight, durable, and typically dries much faster than plaster.",
    takeaway:
      "Fiberglass casts are lighter and dry faster than plaster casts."
  },
  {
    id: "MSK-FM-016",
    caseId: "MSK-FM-CASE-016",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Cast Care",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with a cast requires correction?",
    choices: [
      "I can insert a ruler inside the cast to scratch itching skin",
      "I will keep the cast clean and dry",
      "I will report increasing pain or numbness",
      "I will inspect the skin around the cast edges"
    ],
    answer: "I can insert a ruler inside the cast to scratch itching skin",
    rationale:
      "Objects placed inside a cast can injure the skin and cause infection. Cool air may be used for itching if approved.",
    takeaway:
      "Never insert objects inside a cast."
  },
  {
    id: "MSK-FM-017",
    caseId: "MSK-FM-CASE-017",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Cast Complication",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a lower-leg cast reports a foul odor and increasing localized warmth beneath the cast. What should the nurse suspect?",
    choices: [
      "Infection or skin breakdown",
      "Expected cast drying",
      "Normal bone alignment",
      "Improved circulation"
    ],
    answer: "Infection or skin breakdown",
    rationale:
      "Foul odor, drainage, fever, increasing warmth, or a hot spot may indicate infection or tissue injury beneath the cast.",
    takeaway:
      "A foul odor or hot spot under a cast requires prompt evaluation."
  },
  {
    id: "MSK-FM-018",
    caseId: "MSK-FM-CASE-018",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Elevation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "During the first 24 to 48 hours after cast application, which intervention helps reduce swelling?",
    choices: [
      "Elevate the extremity as prescribed",
      "Keep the limb dependent at all times",
      "Apply direct heat",
      "Encourage full weight-bearing immediately"
    ],
    answer: "Elevate the extremity as prescribed",
    rationale:
      "Elevation helps reduce edema during the acute period, provided positioning does not compromise prescribed alignment.",
    takeaway:
      "Elevation during the early swelling phase can reduce pressure and discomfort."
  },
  {
    id: "MSK-FM-019",
    caseId: "MSK-FM-CASE-019",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Ice Application",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which action is appropriate when applying ice near a newly casted extremity?",
    choices: [
      "Use a protected ice pack without soaking the cast",
      "Place loose ice directly inside the cast",
      "Apply ice continuously for several hours",
      "Cover the cast with wet towels"
    ],
    answer: "Use a protected ice pack without soaking the cast",
    rationale:
      "Cold can reduce swelling, but moisture can damage some casts and skin. Ice should be protected and used according to policy.",
    takeaway:
      "Reduce swelling without getting the cast wet."
  },
  {
    id: "MSK-FM-020",
    caseId: "MSK-FM-CASE-020",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Weight Bearing",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with a lower-extremity cast shows correct understanding?",
    choices: [
      "I will follow the prescribed weight-bearing restriction",
      "I can walk on the cast once the pain improves",
      "I do not need crutch instruction",
      "I should test the cast by standing on it immediately"
    ],
    answer: "I will follow the prescribed weight-bearing restriction",
    rationale:
      "Weight-bearing status is determined by the provider and must be followed to prevent displacement, hardware failure, or impaired healing.",
    takeaway:
      "Pain relief does not mean the fracture is ready for full weight-bearing."
  },
  {
    id: "MSK-FM-021",
    caseId: "MSK-FM-CASE-021",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Postoperative Infection",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Three days after ORIF, which finding most strongly suggests a surgical-site infection?",
    choices: [
      "Purulent drainage and increasing incision redness",
      "Mild bruising near the incision",
      "Pain that improves with medication",
      "Small amount of swelling"
    ],
    answer: "Purulent drainage and increasing incision redness",
    rationale:
      "Purulent drainage, increasing erythema, warmth, swelling, fever, or worsening pain may indicate infection.",
    takeaway:
      "Worsening redness and purulent drainage after fixation require prompt follow-up."
  },
  {
    id: "MSK-FM-022",
    caseId: "MSK-FM-CASE-022",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Postoperative Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing actions are appropriate after fracture fixation surgery? Select all that apply.",
    choices: [
      "Assess distal pulses and sensation",
      "Monitor the incision or pin sites",
      "Administer prescribed pain medication",
      "Maintain ordered weight-bearing restrictions",
      "Encourage the patient to adjust hardware"
    ],
    answer: [
      "Assess distal pulses and sensation",
      "Monitor the incision or pin sites",
      "Administer prescribed pain medication",
      "Maintain ordered weight-bearing restrictions"
    ],
    rationale:
      "Postoperative care includes neurovascular assessment, infection monitoring, pain management, and protection of the repair.",
    takeaway:
      "After fixation, protect circulation, alignment, the surgical site, and mobility restrictions."
  },
  {
    id: "MSK-FM-023",
    caseId: "MSK-FM-CASE-023",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Patient Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the orthopedic nurse assess first?",
    choices: [
      "A patient two hours after casting who reports severe pain with passive toe movement",
      "A patient awaiting routine cast-care teaching",
      "A patient requesting a refill of water",
      "A patient with mild bruising after ORIF"
    ],
    answer:
      "A patient two hours after casting who reports severe pain with passive toe movement",
    rationale:
      "Pain with passive stretch is an early and concerning sign of compartment syndrome.",
    takeaway:
      "Pain with passive movement after casting is an emergency warning sign."
  },
  {
    id: "MSK-FM-024",
    caseId: "MSK-FM-CASE-024",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Cast Warning Signs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which findings should a patient with a cast report immediately? Select all that apply.",
    choices: [
      "Increasing pain not relieved by medication",
      "Numbness or tingling",
      "Cool or pale fingers or toes",
      "Inability to move digits",
      "Mild itching that resolves with cool air"
    ],
    answer: [
      "Increasing pain not relieved by medication",
      "Numbness or tingling",
      "Cool or pale fingers or toes",
      "Inability to move digits"
    ],
    rationale:
      "These findings can indicate neurovascular compromise, excessive swelling, or compartment syndrome.",
    takeaway:
      "Pain, pallor, paresthesia, weakness, coolness, and pulse changes require immediate evaluation."
  },
  {
    id: "MSK-FM-025",
    caseId: "MSK-FM-CASE-025",
    patient: randomPatient(),
    topic: "Fracture Management",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that fracture management is effective?",
    choices: [
      "The extremity remains aligned with intact distal circulation and sensation",
      "The patient develops increasing numbness",
      "The cast has a foul odor",
      "The patient bears weight against instructions"
    ],
    answer:
      "The extremity remains aligned with intact distal circulation and sensation",
    rationale:
      "Successful management maintains alignment while preserving circulation, sensation, movement, and tissue integrity.",
    takeaway:
      "Effective fracture care protects alignment and neurovascular function."
  }
];
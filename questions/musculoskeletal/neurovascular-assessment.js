const neurovascularAssessmentQuestions = [
  {
    id: "MSK-NV-001",
    caseId: "MSK-NV-CASE-001",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Assessment Components",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse assess when completing a neurovascular assessment of an injured extremity? Select all that apply.",
    choices: [
      "Distal pulse",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation",
      "Movement",
      "Bowel sounds"
    ],
    answer: [
      "Distal pulse",
      "Capillary refill",
      "Skin color and temperature",
      "Sensation",
      "Movement"
    ],
    rationale:
      "A neurovascular assessment evaluates distal circulation, sensation, and motor function. The nurse compares pulses, capillary refill, color, temperature, sensation, and movement bilaterally when possible.",
    takeaway:
      "Neurovascular checks focus on circulation, sensation, and movement distal to the injury."
  },
  {
    id: "MSK-NV-002",
    caseId: "MSK-NV-CASE-002",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Six Ps",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment framework helps the nurse recognize acute limb ischemia?",
    choices: [
      "The six Ps",
      "The five rights",
      "The Glasgow Coma Scale",
      "The Braden Scale"
    ],
    answer: "The six Ps",
    rationale:
      "The six Ps of acute ischemia are pain, pallor, pulselessness, paresthesia, paralysis, and poikilothermia.",
    takeaway:
      "Remember the six Ps when evaluating threatened limb perfusion."
  },
  {
    id: "MSK-NV-003",
    caseId: "MSK-NV-CASE-003",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Pain",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a cast reports severe pain that is increasing despite opioid administration. What should the nurse do first?",
    choices: [
      "Perform an immediate neurovascular assessment",
      "Document the pain as expected",
      "Apply direct heat over the cast",
      "Encourage weight bearing"
    ],
    answer: "Perform an immediate neurovascular assessment",
    rationale:
      "Increasing pain that is not relieved by medication can be an early sign of compartment syndrome or impaired perfusion.",
    takeaway:
      "Pain out of proportion requires immediate assessment."
  },
  {
    id: "MSK-NV-004",
    caseId: "MSK-NV-CASE-004",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Passive Stretch",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is especially concerning for early compartment syndrome?",
    choices: [
      "Pain with passive stretching of the digits",
      "Mild bruising around the injury",
      "Pain relieved by medication",
      "Warm skin with brisk capillary refill"
    ],
    answer: "Pain with passive stretching of the digits",
    rationale:
      "Pain with passive stretch is an early and highly concerning sign of rising pressure within a muscle compartment.",
    takeaway:
      "Pain with passive stretch is an emergency warning sign."
  },
  {
    id: "MSK-NV-005",
    caseId: "MSK-NV-CASE-005",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Pallor",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient’s injured foot appears pale compared with the unaffected foot. How should the nurse interpret this finding?",
    choices: [
      "Possible impaired arterial perfusion",
      "Expected healing",
      "Normal venous return",
      "Improved oxygen delivery"
    ],
    answer: "Possible impaired arterial perfusion",
    rationale:
      "Pallor can indicate reduced arterial blood flow and should be evaluated with pulses, capillary refill, temperature, sensation, and movement.",
    takeaway:
      "Pallor may indicate decreased blood flow to the extremity."
  },
  {
    id: "MSK-NV-006",
    caseId: "MSK-NV-CASE-006",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Pulselessness",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "The nurse cannot palpate a pedal pulse distal to a tibial fracture. What should the nurse do next?",
    choices: [
      "Use a Doppler and notify the provider of the finding",
      "Assume edema is causing the change",
      "Massage the foot",
      "Reassess at the end of the shift"
    ],
    answer: "Use a Doppler and notify the provider of the finding",
    rationale:
      "An absent pulse may indicate arterial compromise. The nurse should confirm with Doppler and promptly escalate the finding.",
    takeaway:
      "An absent distal pulse is a limb-threatening finding."
  },
  {
    id: "MSK-NV-007",
    caseId: "MSK-NV-CASE-007",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Paresthesia",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a newly applied cast reports tingling and numbness in the fingers. Which neurovascular finding is present?",
    choices: [
      "Paresthesia",
      "Paralysis",
      "Poikilothermia",
      "Pallor"
    ],
    answer: "Paresthesia",
    rationale:
      "Paresthesia includes numbness, tingling, or altered sensation and may indicate nerve compression or impaired perfusion.",
    takeaway:
      "New numbness or tingling after casting requires prompt assessment."
  },
  {
    id: "MSK-NV-008",
    caseId: "MSK-NV-CASE-008",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Paralysis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a lower-leg injury can no longer move the toes. How should the nurse interpret this finding?",
    choices: [
      "A late and serious sign of neurovascular compromise",
      "An expected effect of swelling",
      "A normal response to pain medication",
      "Evidence of improved alignment"
    ],
    answer: "A late and serious sign of neurovascular compromise",
    rationale:
      "Loss of motor function is a severe finding that may indicate advanced nerve or muscle ischemia.",
    takeaway:
      "Paralysis is a late sign and requires immediate action."
  },
  {
    id: "MSK-NV-009",
    caseId: "MSK-NV-CASE-009",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Poikilothermia",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "The injured foot is noticeably cooler than the unaffected foot. Which of the six Ps does this represent?",
    choices: [
      "Poikilothermia",
      "Paresthesia",
      "Paralysis",
      "Pulselessness"
    ],
    answer: "Poikilothermia",
    rationale:
      "Poikilothermia refers to coolness of the affected extremity caused by reduced arterial blood flow.",
    takeaway:
      "A cool extremity can signal impaired arterial perfusion."
  },
  {
    id: "MSK-NV-010",
    caseId: "MSK-NV-CASE-010",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Capillary Refill",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which capillary refill finding is most concerning in an injured extremity?",
    choices: [
      "Refill greater than 3 seconds",
      "Refill in 1 second",
      "Equal refill in both feet",
      "Brisk refill with warm skin"
    ],
    answer: "Refill greater than 3 seconds",
    rationale:
      "Delayed capillary refill may indicate reduced distal perfusion and should be compared with the unaffected limb.",
    takeaway:
      "Delayed capillary refill may indicate poor circulation."
  },
  {
    id: "MSK-NV-011",
    caseId: "MSK-NV-CASE-011",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Bilateral Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Why should the nurse compare the injured extremity with the unaffected extremity?",
    choices: [
      "To identify changes from the patient’s normal baseline",
      "To avoid documenting pulses",
      "To determine the patient’s pain tolerance",
      "To eliminate the need for repeated assessments"
    ],
    answer: "To identify changes from the patient’s normal baseline",
    rationale:
      "Comparing both extremities helps identify differences in color, temperature, pulse strength, sensation, movement, and swelling.",
    takeaway:
      "Use the unaffected limb as a comparison whenever possible."
  },
  {
    id: "MSK-NV-012",
    caseId: "MSK-NV-CASE-012",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Pulse Grading",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A distal pulse is weaker than the pulse in the unaffected extremity. What is the nurse’s best interpretation?",
    choices: [
      "The patient may have reduced arterial perfusion",
      "The finding proves venous insufficiency only",
      "The finding is expected after every fracture",
      "No further assessment is needed"
    ],
    answer: "The patient may have reduced arterial perfusion",
    rationale:
      "A newly diminished pulse compared with the opposite limb may reflect swelling, arterial compression, or vascular injury.",
    takeaway:
      "Compare pulse strength bilaterally and report a new decrease."
  },
  {
    id: "MSK-NV-013",
    caseId: "MSK-NV-CASE-013",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Motor Function",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which action best assesses motor function distal to a forearm fracture?",
    choices: [
      "Ask the patient to move the fingers",
      "Palpate the radial pulse only",
      "Measure the upper-arm circumference",
      "Assess bowel sounds"
    ],
    answer: "Ask the patient to move the fingers",
    rationale:
      "Movement of digits distal to the injury helps assess motor nerve function.",
    takeaway:
      "Motor assessment includes active movement of distal fingers or toes."
  },
  {
    id: "MSK-NV-014",
    caseId: "MSK-NV-CASE-014",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Sensory Function",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which action best assesses sensory function distal to a lower-leg fracture?",
    choices: [
      "Ask whether the patient can feel light touch on the toes",
      "Measure blood pressure in the arm",
      "Assess the gag reflex",
      "Check abdominal tenderness"
    ],
    answer: "Ask whether the patient can feel light touch on the toes",
    rationale:
      "Light-touch assessment helps identify altered sensation caused by nerve compression or ischemia.",
    takeaway:
      "Assess sensation distal to the injury and compare sides."
  },
  {
    id: "MSK-NV-015",
    caseId: "MSK-NV-CASE-015",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Cast Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with an arm cast has swollen fingers, delayed capillary refill, and increasing pain. What should the nurse do?",
    choices: [
      "Notify the provider immediately",
      "Reassess during the next shift",
      "Insert an object under the cast",
      "Encourage repetitive hand exercise despite pain"
    ],
    answer: "Notify the provider immediately",
    rationale:
      "These findings suggest impaired circulation or compartment syndrome and require urgent intervention.",
    takeaway:
      "Pain plus swelling and delayed refill requires immediate escalation."
  },
  {
    id: "MSK-NV-016",
    caseId: "MSK-NV-CASE-016",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Cast Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with a cast shows correct understanding of neurovascular warning signs?",
    choices: [
      "I will report increasing pain, numbness, coolness, or difficulty moving my fingers",
      "Numbness is expected and does not need to be reported",
      "I should wait until my next appointment if my fingers become pale",
      "I can insert objects into the cast to reduce pressure"
    ],
    answer:
      "I will report increasing pain, numbness, coolness, or difficulty moving my fingers",
    rationale:
      "These findings may indicate nerve compression, impaired perfusion, or compartment syndrome.",
    takeaway:
      "Teach patients to report neurovascular changes immediately."
  },
  {
    id: "MSK-NV-017",
    caseId: "MSK-NV-CASE-017",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Frequency",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "When should the nurse perform neurovascular assessments for a patient with a new fracture?",
    choices: [
      "At baseline and repeatedly according to the patient’s condition and orders",
      "Only at discharge",
      "Only if the patient asks",
      "Once after the cast is removed"
    ],
    answer:
      "At baseline and repeatedly according to the patient’s condition and orders",
    rationale:
      "Frequent reassessment identifies changes early, especially after injury, reduction, surgery, casting, or traction.",
    takeaway:
      "Neurovascular status is trended, not checked only once."
  },
  {
    id: "MSK-NV-018",
    caseId: "MSK-NV-CASE-018",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Documentation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which documentation is most complete after a neurovascular assessment?",
    choices: [
      "Right foot warm and pink; pedal pulse 2+; capillary refill 2 seconds; sensation intact; moves toes",
      "Foot looks okay",
      "Circulation normal",
      "Patient comfortable"
    ],
    answer:
      "Right foot warm and pink; pedal pulse 2+; capillary refill 2 seconds; sensation intact; moves toes",
    rationale:
      "Objective documentation should include color, temperature, pulse, capillary refill, sensation, movement, pain, and comparison findings.",
    takeaway:
      "Document specific objective neurovascular findings."
  },
  {
    id: "MSK-NV-019",
    caseId: "MSK-NV-CASE-019",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Elevation",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient is suspected of having acute compartment syndrome. Which action should the nurse avoid unless specifically directed?",
    choices: [
      "Elevating the extremity far above heart level",
      "Assessing pain and sensation",
      "Checking distal pulses",
      "Notifying the provider"
    ],
    answer: "Elevating the extremity far above heart level",
    rationale:
      "Excessive elevation may reduce arterial perfusion to an already compromised extremity. The limb is generally maintained near heart level while urgent treatment is arranged.",
    takeaway:
      "Do not sharply reduce arterial flow to a limb with suspected compartment syndrome."
  },
  {
    id: "MSK-NV-020",
    caseId: "MSK-NV-CASE-020",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a cast who has new numbness and cannot move the toes",
      "A patient requesting scheduled pain medication for pain rated 4 of 10",
      "A patient awaiting discharge instructions",
      "A patient with mild swelling that improves with elevation"
    ],
    answer:
      "A patient with a cast who has new numbness and cannot move the toes",
    rationale:
      "New sensory and motor loss may indicate severe neurovascular compromise and requires immediate assessment.",
    takeaway:
      "Loss of sensation or movement is an emergency."
  },
  {
    id: "MSK-NV-021",
    caseId: "MSK-NV-CASE-021",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Expected Findings",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding indicates adequate neurovascular status after fracture reduction?",
    choices: [
      "Warm digits with brisk capillary refill, intact sensation, and active movement",
      "Increasing pain with passive stretch",
      "Pale skin with an absent pulse",
      "New numbness and weakness"
    ],
    answer:
      "Warm digits with brisk capillary refill, intact sensation, and active movement",
    rationale:
      "Warm color, adequate refill, palpable pulses, normal sensation, and movement indicate preserved distal perfusion and nerve function.",
    takeaway:
      "Adequate neurovascular status means circulation, sensation, and movement remain intact."
  },
  {
    id: "MSK-NV-022",
    caseId: "MSK-NV-CASE-022",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Compartment Syndrome Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is more consistent with compartment syndrome than with routine postoperative pain?",
    choices: [
      "Pain that worsens with passive movement and is not relieved by opioids",
      "Incisional discomfort relieved by prescribed medication",
      "Mild swelling that decreases with elevation",
      "Bruising at the surgical site"
    ],
    answer:
      "Pain that worsens with passive movement and is not relieved by opioids",
    rationale:
      "Pain out of proportion and pain with passive stretch strongly suggest rising compartment pressure.",
    takeaway:
      "Compartment syndrome pain is severe, progressive, and poorly relieved."
  },
  {
    id: "MSK-NV-023",
    caseId: "MSK-NV-CASE-023",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "SATA Warning Signs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings require immediate follow-up after application of a lower-leg cast? Select all that apply.",
    choices: [
      "Increasing pain",
      "Cool toes",
      "Delayed capillary refill",
      "New tingling",
      "Inability to move toes",
      "Mild itching"
    ],
    answer: [
      "Increasing pain",
      "Cool toes",
      "Delayed capillary refill",
      "New tingling",
      "Inability to move toes"
    ],
    rationale:
      "These findings may indicate impaired perfusion, nerve compression, or compartment syndrome. Mild itching alone is common.",
    takeaway:
      "Pain, coolness, delayed refill, sensory loss, and motor loss are urgent."
  },
  {
    id: "MSK-NV-024",
    caseId: "MSK-NV-CASE-024",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Doppler Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "The nurse cannot palpate a distal pulse, but a pulse is detected with Doppler. What should the nurse do?",
    choices: [
      "Document the Doppler finding and continue close assessment while reporting the change as indicated",
      "Document the pulse as normal and stop reassessing",
      "Massage the extremity",
      "Remove all immobilization independently"
    ],
    answer:
      "Document the Doppler finding and continue close assessment while reporting the change as indicated",
    rationale:
      "A Doppler-detected pulse should be documented accurately. A new reduction in pulse strength still requires close monitoring and possible escalation.",
    takeaway:
      "A Doppler pulse is not the same as a strong palpable pulse; trend changes carefully."
  },
  {
    id: "MSK-NV-025",
    caseId: "MSK-NV-CASE-025",
    patient: randomPatient(),
    topic: "Neurovascular Assessment",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which outcome best shows that neurovascular care has been effective?",
    choices: [
      "The patient maintains palpable distal pulses, normal sensation, and active movement",
      "The patient develops increasing pain and tingling",
      "The extremity becomes pale and cool",
      "Capillary refill becomes progressively delayed"
    ],
    answer:
      "The patient maintains palpable distal pulses, normal sensation, and active movement",
    rationale:
      "Effective care preserves distal circulation, sensory function, and motor function.",
    takeaway:
      "The goal is intact circulation, sensation, and movement."
  }
];
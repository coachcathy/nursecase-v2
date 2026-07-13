const osteomyelitisQuestions = [
  {
    id: "MSK-OM-001",
    caseId: "MSK-OM-CASE-001",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Definition",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which description best explains osteomyelitis?",
    choices: [
      "An infection of bone and bone marrow",
      "An autoimmune inflammation of a joint",
      "A loss of bone density without infection",
      "A temporary muscle spasm"
    ],
    answer: "An infection of bone and bone marrow",
    rationale:
      "Osteomyelitis is an infection involving bone tissue and bone marrow. It may develop through direct contamination, bloodstream spread, or extension from nearby tissue.",
    takeaway:
      "Osteomyelitis is a serious bone infection that often requires prolonged treatment."
  },
  {
    id: "MSK-OM-002",
    caseId: "MSK-OM-CASE-002",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which conditions increase a patient's risk for osteomyelitis? Select all that apply.",
    choices: [
      "Open fracture",
      "Orthopedic surgery",
      "Diabetic foot ulcer",
      "Poor peripheral circulation",
      "Uncomplicated muscle strain"
    ],
    answer: [
      "Open fracture",
      "Orthopedic surgery",
      "Diabetic foot ulcer",
      "Poor peripheral circulation"
    ],
    rationale:
      "Osteomyelitis risk increases when bacteria can directly enter bone or when impaired circulation and chronic wounds reduce tissue defenses.",
    takeaway:
      "Open injuries, surgery, chronic wounds, diabetes, and poor circulation increase osteomyelitis risk."
  },
  {
    id: "MSK-OM-003",
    caseId: "MSK-OM-CASE-003",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Open Fracture",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with an open tibial fracture develops increasing bone pain, fever, and purulent drainage. Which complication should the nurse suspect?",
    choices: [
      "Osteomyelitis",
      "Fat embolism syndrome",
      "Compartment syndrome",
      "Malunion"
    ],
    answer: "Osteomyelitis",
    rationale:
      "An open fracture can introduce microorganisms directly into bone. Persistent localized pain, fever, and purulent drainage suggest infection.",
    takeaway:
      "Open fractures place the patient at high risk for deep bone infection."
  },
  {
    id: "MSK-OM-004",
    caseId: "MSK-OM-CASE-004",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings may occur with acute osteomyelitis? Select all that apply.",
    choices: [
      "Localized bone pain",
      "Fever",
      "Swelling and warmth",
      "Purulent drainage",
      "Improved function without discomfort"
    ],
    answer: [
      "Localized bone pain",
      "Fever",
      "Swelling and warmth",
      "Purulent drainage"
    ],
    rationale:
      "Osteomyelitis may cause severe localized pain, fever, swelling, warmth, redness, reduced function, and drainage if a wound or sinus tract is present.",
    takeaway:
      "Bone pain plus systemic or local infection findings should raise concern for osteomyelitis."
  },
  {
    id: "MSK-OM-005",
    caseId: "MSK-OM-CASE-005",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Laboratory Findings",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which laboratory findings support a diagnosis of osteomyelitis?",
    choices: [
      "Elevated WBC count, ESR, and CRP",
      "Decreased glucose and normal inflammatory markers",
      "Low hemoglobin only",
      "Elevated calcium only"
    ],
    answer: "Elevated WBC count, ESR, and CRP",
    rationale:
      "WBC count may increase with acute infection. ESR and CRP are inflammatory markers commonly used to identify and monitor the response to treatment.",
    takeaway:
      "ESR and CRP help track inflammation and treatment response."
  },
  {
    id: "MSK-OM-006",
    caseId: "MSK-OM-CASE-006",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Definitive Diagnosis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which diagnostic procedure most accurately identifies the organism causing osteomyelitis?",
    choices: [
      "Bone biopsy and culture",
      "Serum sodium level",
      "Urinalysis",
      "Electrocardiogram"
    ],
    answer: "Bone biopsy and culture",
    rationale:
      "A bone specimen obtained for culture identifies the causative organism and guides selection of targeted antimicrobial therapy.",
    takeaway:
      "Bone biopsy and culture provide the most definitive microbiologic diagnosis."
  },
  {
    id: "MSK-OM-007",
    caseId: "MSK-OM-CASE-007",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Culture Collection",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "When possible, when should cultures be obtained for a patient with suspected osteomyelitis?",
    choices: [
      "Before the first dose of antibiotics",
      "After several days of antibiotics",
      "Only after the fever resolves",
      "After discharge"
    ],
    answer: "Before the first dose of antibiotics",
    rationale:
      "Cultures are ideally collected before antimicrobial therapy begins so the organism can be accurately identified. Treatment should not be dangerously delayed in an unstable patient.",
    takeaway:
      "Obtain cultures before antibiotics when possible."
  },
  {
    id: "MSK-OM-008",
    caseId: "MSK-OM-CASE-008",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Imaging",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which imaging study is particularly useful for detecting early bone and soft-tissue changes associated with osteomyelitis?",
    choices: [
      "MRI",
      "Chest x-ray",
      "Electrocardiogram",
      "Abdominal ultrasound"
    ],
    answer: "MRI",
    rationale:
      "MRI is sensitive for detecting bone marrow edema, abscesses, and soft-tissue involvement. Plain x-rays may remain normal early in the infection.",
    takeaway:
      "MRI can detect osteomyelitis earlier than plain radiographs."
  },
  {
    id: "MSK-OM-009",
    caseId: "MSK-OM-CASE-009",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Antibiotic Therapy",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient receiving treatment for osteomyelitis demonstrates correct understanding?",
    choices: [
      "I may require several weeks of antibiotic therapy",
      "I can stop antibiotics as soon as the pain improves",
      "One dose of antibiotics should cure the infection",
      "Follow-up laboratory tests are unnecessary"
    ],
    answer: "I may require several weeks of antibiotic therapy",
    rationale:
      "Bone infections are difficult to eradicate because of limited blood supply and possible necrotic tissue. Prolonged antimicrobial therapy is often required.",
    takeaway:
      "Osteomyelitis treatment is often lengthy and must be completed fully."
  },
  {
    id: "MSK-OM-010",
    caseId: "MSK-OM-CASE-010",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Medication Adherence",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which patient statement requires further teaching?",
    choices: [
      "I will stop the antibiotic when my fever is gone",
      "I will complete the full prescribed treatment",
      "I will report worsening drainage or pain",
      "I will keep follow-up laboratory appointments"
    ],
    answer: "I will stop the antibiotic when my fever is gone",
    rationale:
      "Symptoms may improve before the infection is fully eradicated. Stopping antibiotics early can cause recurrence or chronic infection.",
    takeaway:
      "Symptom relief does not mean the bone infection is cured."
  },
  {
    id: "MSK-OM-011",
    caseId: "MSK-OM-CASE-011",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "IV Therapy",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient will receive long-term IV antibiotics through a central venous access device. Which teaching is most important?",
    choices: [
      "Report redness, drainage, fever, or tenderness at the access site",
      "Submerge the device in bathwater",
      "Disconnect the tubing whenever it becomes uncomfortable",
      "Touch the access hub without cleaning it"
    ],
    answer:
      "Report redness, drainage, fever, or tenderness at the access site",
    rationale:
      "Central-line infection can cause bloodstream infection. The patient should use aseptic technique and report signs of infection promptly.",
    takeaway:
      "Long-term IV treatment requires strict central-line infection prevention."
  },
  {
    id: "MSK-OM-012",
    caseId: "MSK-OM-CASE-012",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Debridement",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Why may surgical debridement be required for osteomyelitis?",
    choices: [
      "To remove infected or necrotic bone and tissue",
      "To increase pressure within the bone",
      "To eliminate the need for antibiotics",
      "To create additional scar tissue"
    ],
    answer: "To remove infected or necrotic bone and tissue",
    rationale:
      "Necrotic tissue has poor blood flow and can shelter microorganisms. Debridement removes infected or dead tissue and supports healing.",
    takeaway:
      "Antibiotics may not penetrate dead bone, so debridement may be necessary."
  },
  {
    id: "MSK-OM-013",
    caseId: "MSK-OM-CASE-013",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Sequestrum",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "What is a sequestrum in chronic osteomyelitis?",
    choices: [
      "A piece of dead bone separated from healthy tissue",
      "A new blood vessel supplying the bone",
      "A normal healing callus",
      "A temporary muscle contraction"
    ],
    answer: "A piece of dead bone separated from healthy tissue",
    rationale:
      "A sequestrum is devitalized bone that separates from viable bone and may act as a persistent source of infection.",
    takeaway:
      "Dead bone can maintain chronic infection until it is removed."
  },
  {
    id: "MSK-OM-014",
    caseId: "MSK-OM-CASE-014",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Chronic Infection",
    style: "Analyze Cues",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is most consistent with chronic osteomyelitis?",
    choices: [
      "A persistent draining sinus tract",
      "Sudden petechial rash",
      "Pain only with passive stretching",
      "Rapidly improving bone pain"
    ],
    answer: "A persistent draining sinus tract",
    rationale:
      "Chronic osteomyelitis may produce recurrent pain, intermittent fever, and a draining sinus tract over the infected bone.",
    takeaway:
      "Persistent drainage over bone may indicate chronic osteomyelitis."
  },
  {
    id: "MSK-OM-015",
    caseId: "MSK-OM-CASE-015",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Pain Management",
    style: "Take Action",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing intervention is appropriate for a patient with acute osteomyelitis and severe limb pain?",
    choices: [
      "Immobilize and support the affected extremity as prescribed",
      "Encourage forceful range-of-motion exercises",
      "Massage directly over the infected bone",
      "Apply unapproved heat continuously"
    ],
    answer:
      "Immobilize and support the affected extremity as prescribed",
    rationale:
      "Immobilization can reduce pain and prevent additional tissue injury during the acute phase. Mobility is advanced according to the treatment plan.",
    takeaway:
      "Support the infected limb and avoid unnecessary stress during acute inflammation."
  },
  {
    id: "MSK-OM-016",
    caseId: "MSK-OM-CASE-016",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Wound Care",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which action is most appropriate when caring for a draining osteomyelitis wound?",
    choices: [
      "Use prescribed aseptic wound-care technique",
      "Reuse old dressing supplies",
      "Touch the wound with bare hands",
      "Leave saturated dressings in place"
    ],
    answer: "Use prescribed aseptic wound-care technique",
    rationale:
      "Aseptic technique reduces additional contamination and protects both the patient and the healthcare worker from exposure.",
    takeaway:
      "Use careful infection-control technique for draining bone infections."
  },
  {
    id: "MSK-OM-017",
    caseId: "MSK-OM-CASE-017",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Nutrition",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which meal best supports healing in a patient with osteomyelitis?",
    choices: [
      "Chicken, yogurt, vegetables, and fruit",
      "Black coffee and crackers",
      "Candy and soda",
      "Gelatin and tea only"
    ],
    answer: "Chicken, yogurt, vegetables, and fruit",
    rationale:
      "Healing requires adequate calories, protein, vitamins, and minerals. Protein supports tissue repair, while vitamins and minerals support immune and bone function.",
    takeaway:
      "Adequate protein and calories support infection recovery and tissue repair."
  },
  {
    id: "MSK-OM-018",
    caseId: "MSK-OM-CASE-018",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Glucose Control",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Why is glucose control especially important for a patient with diabetes and osteomyelitis?",
    choices: [
      "Hyperglycemia impairs immune function and wound healing",
      "Hyperglycemia immediately increases bone density",
      "Glucose has no effect on infection",
      "Low glucose causes all bone infections"
    ],
    answer: "Hyperglycemia impairs immune function and wound healing",
    rationale:
      "Poor glycemic control reduces leukocyte effectiveness, delays healing, and increases the risk for persistent infection.",
    takeaway:
      "Good glucose control supports immune function and wound healing."
  },
  {
    id: "MSK-OM-019",
    caseId: "MSK-OM-CASE-019",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with osteomyelitis who has new confusion, hypotension, and fever",
      "A patient requesting assistance with meal selection",
      "A patient reporting chronic pain rated 3 of 10",
      "A patient waiting for discharge paperwork"
    ],
    answer:
      "A patient with osteomyelitis who has new confusion, hypotension, and fever",
    rationale:
      "Confusion, hypotension, and fever may indicate sepsis and impaired perfusion. This patient requires immediate assessment and escalation.",
    takeaway:
      "Watch for sepsis in patients with serious bone infection."
  },
  {
    id: "MSK-OM-020",
    caseId: "MSK-OM-CASE-020",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Sepsis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with osteomyelitis develops tachycardia, fever, hypotension, and altered mental status. What should the nurse do?",
    choices: [
      "Activate the sepsis response and notify the provider immediately",
      "Reassess at the next scheduled vital-sign check",
      "Encourage independent ambulation",
      "Hold all prescribed antibiotics"
    ],
    answer:
      "Activate the sepsis response and notify the provider immediately",
    rationale:
      "These findings suggest systemic infection with possible organ dysfunction. Rapid sepsis assessment and treatment are required.",
    takeaway:
      "Systemic deterioration in an infected patient is an emergency."
  },
  {
    id: "MSK-OM-021",
    caseId: "MSK-OM-CASE-021",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Treatment Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding best indicates that treatment for osteomyelitis is effective?",
    choices: [
      "Decreasing pain, drainage, CRP, and fever",
      "Increasing erythema and swelling",
      "New purulent drainage",
      "Progressively elevated inflammatory markers"
    ],
    answer: "Decreasing pain, drainage, CRP, and fever",
    rationale:
      "Clinical improvement and declining inflammatory markers indicate that the infection is responding to treatment.",
    takeaway:
      "Trend symptoms and inflammatory markers to evaluate treatment response."
  },
  {
    id: "MSK-OM-022",
    caseId: "MSK-OM-CASE-022",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Recurrence",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which symptom should a patient treated for osteomyelitis report after discharge?",
    choices: [
      "Return of bone pain, fever, or drainage",
      "Improved appetite",
      "Decreased redness",
      "Normal fatigue after activity"
    ],
    answer: "Return of bone pain, fever, or drainage",
    rationale:
      "Osteomyelitis may recur. New pain, fever, swelling, redness, or drainage requires prompt evaluation.",
    takeaway:
      "Recurrence can occur even after treatment, so new infection signs must be reported."
  },
  {
    id: "MSK-OM-023",
    caseId: "MSK-OM-CASE-023",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Home Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include in discharge teaching for osteomyelitis? Select all that apply.",
    choices: [
      "Complete all prescribed antibiotics",
      "Keep follow-up appointments",
      "Report fever or increased drainage",
      "Maintain adequate nutrition",
      "Stop treatment when pain improves"
    ],
    answer: [
      "Complete all prescribed antibiotics",
      "Keep follow-up appointments",
      "Report fever or increased drainage",
      "Maintain adequate nutrition"
    ],
    rationale:
      "Successful treatment requires medication adherence, monitoring, nutrition, wound care, and prompt reporting of recurrence.",
    takeaway:
      "Long-term follow-up is essential because osteomyelitis can recur."
  },
  {
    id: "MSK-OM-024",
    caseId: "MSK-OM-CASE-024",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which complications may result from untreated or chronic osteomyelitis? Select all that apply.",
    choices: [
      "Sepsis",
      "Chronic draining sinus tract",
      "Bone destruction",
      "Pathologic fracture",
      "Guaranteed spontaneous healing"
    ],
    answer: [
      "Sepsis",
      "Chronic draining sinus tract",
      "Bone destruction",
      "Pathologic fracture"
    ],
    rationale:
      "Persistent infection can destroy bone, spread systemically, produce chronic drainage, and weaken bone enough to fracture.",
    takeaway:
      "Untreated bone infection can become chronic, destructive, and systemic."
  },
  {
    id: "MSK-OM-025",
    caseId: "MSK-OM-CASE-025",
    patient: randomPatient(),
    topic: "Osteomyelitis",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which finding requires the most immediate follow-up in a patient receiving treatment for osteomyelitis?",
    choices: [
      "Blood pressure 82/48 mm Hg with new confusion",
      "Pain rated 4 of 10 before medication",
      "Request for assistance repositioning",
      "Decreased appetite at lunch"
    ],
    answer: "Blood pressure 82/48 mm Hg with new confusion",
    rationale:
      "Hypotension and altered mental status may indicate sepsis with impaired organ perfusion and require immediate intervention.",
    takeaway:
      "Infection plus hypotension or mental-status change means possible sepsis."
  }
];
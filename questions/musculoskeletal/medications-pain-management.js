const musculoskeletalMedicationQuestions = [
  {
    id: "MSK-MED-001",
    caseId: "MSK-MED-CASE-001",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Multimodal Pain Management",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a fractured femur receives acetaminophen, an NSAID, ice, positioning, and an opioid for breakthrough pain. Which pain-management approach is being used?",
    choices: [
      "Multimodal pain management",
      "Placebo therapy",
      "Opioid-only therapy",
      "Sedation without analgesia"
    ],
    answer: "Multimodal pain management",
    rationale:
      "Multimodal pain management combines medications and nonpharmacologic interventions that work through different mechanisms to improve pain control and reduce opioid requirements.",
    takeaway:
      "Using several pain-control methods can improve comfort while limiting opioid exposure."
  },
  {
    id: "MSK-MED-002",
    caseId: "MSK-MED-CASE-002",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Opioid Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient received IV morphine after fracture repair. Which assessment finding requires immediate intervention?",
    choices: [
      "Respiratory rate of 8/min",
      "Pain rated 4 of 10",
      "Mild nausea",
      "Drowsiness that resolves when spoken to"
    ],
    answer: "Respiratory rate of 8/min",
    rationale:
      "Opioids can cause life-threatening respiratory depression. A respiratory rate of 8/min requires immediate assessment and intervention.",
    takeaway:
      "After opioids, breathing takes priority."
  },
  {
    id: "MSK-MED-003",
    caseId: "MSK-MED-CASE-003",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Naloxone",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A postoperative orthopedic patient is difficult to arouse with respirations of 6/min after receiving an opioid. Which medication should the nurse anticipate?",
    choices: [
      "Naloxone",
      "Warfarin",
      "Ketorolac",
      "Cyclobenzaprine"
    ],
    answer: "Naloxone",
    rationale:
      "Naloxone is an opioid antagonist used to reverse opioid-induced respiratory and central nervous system depression.",
    takeaway:
      "Naloxone reverses opioid effects, but the patient must still be monitored for recurring respiratory depression."
  },
  {
    id: "MSK-MED-004",
    caseId: "MSK-MED-CASE-004",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "PCA Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which statement about patient-controlled analgesia is correct?",
    choices: [
      "Only the patient should press the PCA button",
      "Family members may press the button while the patient sleeps",
      "The nurse should press the button every hour",
      "The PCA eliminates the need to assess respiratory status"
    ],
    answer: "Only the patient should press the PCA button",
    rationale:
      "PCA by proxy can cause oversedation and respiratory depression. Only the patient should activate the dose button.",
    takeaway:
      "Never allow family or staff to press the PCA button for the patient."
  },
  {
    id: "MSK-MED-005",
    caseId: "MSK-MED-CASE-005",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "PCA Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment is most important for a patient using a morphine PCA?",
    choices: [
      "Respiratory rate, sedation level, and oxygenation",
      "Hair texture",
      "Visual acuity only",
      "Meal preference"
    ],
    answer: "Respiratory rate, sedation level, and oxygenation",
    rationale:
      "Opioid PCA therapy requires frequent assessment for respiratory depression and excessive sedation.",
    takeaway:
      "Sedation often appears before severe opioid-related respiratory depression."
  },
  {
    id: "MSK-MED-006",
    caseId: "MSK-MED-CASE-006",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Opioid Adverse Effects",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which adverse effects should the nurse monitor for in a patient receiving opioids? Select all that apply.",
    choices: [
      "Respiratory depression",
      "Constipation",
      "Nausea",
      "Sedation",
      "Increased bowel motility"
    ],
    answer: [
      "Respiratory depression",
      "Constipation",
      "Nausea",
      "Sedation"
    ],
    rationale:
      "Opioids commonly cause respiratory depression, sedation, nausea, constipation, urinary retention, and hypotension.",
    takeaway:
      "Opioids slow breathing and bowel function."
  },
  {
    id: "MSK-MED-007",
    caseId: "MSK-MED-CASE-007",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Constipation Prevention",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which teaching is most appropriate for a patient taking opioids after orthopedic surgery?",
    choices: [
      "Increase fluids, fiber, and activity as allowed",
      "Avoid all fluids",
      "Stop bowel medications when constipation begins",
      "Remain on strict bedrest even when activity is prescribed"
    ],
    answer: "Increase fluids, fiber, and activity as allowed",
    rationale:
      "Opioids and immobility reduce bowel motility. Fluids, fiber, mobility, and prescribed stool softeners or laxatives help prevent constipation.",
    takeaway:
      "Prevent opioid constipation before it becomes severe."
  },
  {
    id: "MSK-MED-008",
    caseId: "MSK-MED-CASE-008",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "NSAIDs",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which effect explains why NSAIDs are useful for musculoskeletal injuries?",
    choices: [
      "They reduce pain and inflammation",
      "They directly rebuild bone",
      "They eliminate all infection",
      "They dissolve blood clots"
    ],
    answer: "They reduce pain and inflammation",
    rationale:
      "NSAIDs decrease prostaglandin production, reducing inflammation, pain, and fever.",
    takeaway:
      "NSAIDs treat inflammatory pain but do not correct the underlying fracture."
  },
  {
    id: "MSK-MED-009",
    caseId: "MSK-MED-CASE-009",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "NSAID GI Risk",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding should a patient taking an NSAID report immediately?",
    choices: [
      "Black, tarry stools",
      "Mild thirst",
      "Temporary soreness after exercise",
      "Increased appetite"
    ],
    answer: "Black, tarry stools",
    rationale:
      "NSAIDs can cause gastric irritation, ulceration, and gastrointestinal bleeding. Melena may indicate upper GI bleeding.",
    takeaway:
      "NSAIDs increase GI bleeding risk."
  },
  {
    id: "MSK-MED-010",
    caseId: "MSK-MED-CASE-010",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "NSAID Kidney Risk",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which patient is at greatest risk for complications from NSAID therapy?",
    choices: [
      "An older adult with chronic kidney disease",
      "A young adult with no medical history",
      "A patient with a healed paper cut",
      "A patient with normal renal function and no bleeding history"
    ],
    answer: "An older adult with chronic kidney disease",
    rationale:
      "NSAIDs can reduce renal blood flow and worsen kidney function, especially in older adults, dehydrated patients, and those with kidney disease.",
    takeaway:
      "Use NSAIDs cautiously in patients with renal impairment."
  },
  {
    id: "MSK-MED-011",
    caseId: "MSK-MED-CASE-011",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Ketorolac",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which assessment is especially important for a patient receiving ketorolac after orthopedic surgery?",
    choices: [
      "Signs of bleeding and renal impairment",
      "Pupil reaction only",
      "Hearing acuity only",
      "Thyroid enlargement"
    ],
    answer: "Signs of bleeding and renal impairment",
    rationale:
      "Ketorolac is a potent NSAID associated with GI bleeding and renal toxicity and is generally used only for short-term therapy.",
    takeaway:
      "Ketorolac is effective but carries significant bleeding and kidney risks."
  },
  {
    id: "MSK-MED-012",
    caseId: "MSK-MED-CASE-012",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Acetaminophen",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient taking acetaminophen requires correction?",
    choices: [
      "I can take several products containing acetaminophen without checking the total dose",
      "I should check combination medications for acetaminophen",
      "I should follow the prescribed maximum daily amount",
      "I should tell my provider if I have liver disease"
    ],
    answer:
      "I can take several products containing acetaminophen without checking the total dose",
    rationale:
      "Acetaminophen is contained in many combination products. Excess total dosing can cause severe liver injury.",
    takeaway:
      "Always calculate total acetaminophen from every medication source."
  },
  {
    id: "MSK-MED-013",
    caseId: "MSK-MED-CASE-013",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Acetaminophen Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which patient history is most important before administering repeated doses of acetaminophen?",
    choices: [
      "Chronic liver disease and alcohol use",
      "Seasonal allergies",
      "Nearsightedness",
      "History of an ankle sprain"
    ],
    answer: "Chronic liver disease and alcohol use",
    rationale:
      "Acetaminophen is metabolized by the liver. Liver disease and heavy alcohol use increase the risk of hepatotoxicity.",
    takeaway:
      "Acetaminophen safety depends on total dose and liver function."
  },
  {
    id: "MSK-MED-014",
    caseId: "MSK-MED-CASE-014",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Muscle Relaxants",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "A patient is prescribed cyclobenzaprine for muscle spasms. Which instruction is most appropriate?",
    choices: [
      "Avoid driving until you know how the medication affects you",
      "Take the medication before operating heavy equipment",
      "Double the dose if spasms continue",
      "Combine it with alcohol to improve relaxation"
    ],
    answer: "Avoid driving until you know how the medication affects you",
    rationale:
      "Muscle relaxants commonly cause drowsiness, dizziness, and impaired coordination, increasing fall and injury risk.",
    takeaway:
      "Muscle relaxants can cause sedation and falls."
  },
  {
    id: "MSK-MED-015",
    caseId: "MSK-MED-CASE-015",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Muscle Relaxant Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which intervention is most appropriate for an older adult receiving a muscle relaxant?",
    choices: [
      "Implement fall precautions",
      "Encourage unassisted ambulation",
      "Administer alcohol with the medication",
      "Keep the bed in the highest position"
    ],
    answer: "Implement fall precautions",
    rationale:
      "Sedation, dizziness, and muscle weakness increase fall risk, especially in older adults.",
    takeaway:
      "Sedating medications require fall prevention."
  },
  {
    id: "MSK-MED-016",
    caseId: "MSK-MED-CASE-016",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Antibiotics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with an open fracture is prescribed IV antibiotics. What is the primary purpose of this therapy?",
    choices: [
      "Reduce the risk of deep infection and osteomyelitis",
      "Prevent all fracture pain",
      "Increase bone density immediately",
      "Eliminate the need for surgical irrigation"
    ],
    answer: "Reduce the risk of deep infection and osteomyelitis",
    rationale:
      "Open fractures expose bone and tissue to contamination. Early antibiotic therapy reduces infection risk but does not replace irrigation and debridement.",
    takeaway:
      "Open fractures require rapid infection prevention."
  },
  {
    id: "MSK-MED-017",
    caseId: "MSK-MED-CASE-017",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Antibiotic Allergy",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "During an IV antibiotic infusion, a patient develops wheezing, facial swelling, and hypotension. What should the nurse do first?",
    choices: [
      "Stop the infusion and initiate emergency response",
      "Slow the infusion slightly",
      "Reassess in one hour",
      "Offer oral fluids"
    ],
    answer: "Stop the infusion and initiate emergency response",
    rationale:
      "Wheezing, facial swelling, and hypotension indicate anaphylaxis. The medication should be stopped and emergency treatment initiated immediately.",
    takeaway:
      "Airway swelling and hypotension during an infusion mean anaphylaxis."
  },
  {
    id: "MSK-MED-018",
    caseId: "MSK-MED-CASE-018",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Anticoagulant Purpose",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Why may anticoagulants be prescribed after hip-fracture surgery?",
    choices: [
      "To reduce the risk of venous thromboembolism",
      "To improve bone alignment",
      "To treat muscle spasms",
      "To reverse opioid sedation"
    ],
    answer: "To reduce the risk of venous thromboembolism",
    rationale:
      "Orthopedic surgery and immobility increase venous stasis and clot risk. Anticoagulants help prevent DVT and pulmonary embolism.",
    takeaway:
      "Major orthopedic surgery carries a high VTE risk."
  },
  {
    id: "MSK-MED-019",
    caseId: "MSK-MED-CASE-019",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Anticoagulant Safety",
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
      "Anticoagulants increase bleeding risk. Hematuria, melena, unexplained bruising, and persistent bleeding require follow-up.",
    takeaway:
      "Anticoagulant teaching centers on bleeding precautions."
  },
  {
    id: "MSK-MED-020",
    caseId: "MSK-MED-CASE-020",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Heparin Safety",
    style: "Safety",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nursing action is appropriate for a patient receiving subcutaneous heparin for DVT prevention?",
    choices: [
      "Avoid massaging the injection site",
      "Massage the site firmly after injection",
      "Inject into bruised tissue",
      "Administer intramuscularly"
    ],
    answer: "Avoid massaging the injection site",
    rationale:
      "Massaging the injection site can increase bruising and bleeding. Subcutaneous heparin should be given using the prescribed technique.",
    takeaway:
      "Do not massage subcutaneous anticoagulant injection sites."
  },
  {
    id: "MSK-MED-021",
    caseId: "MSK-MED-CASE-021",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Nonpharmacologic Pain Management",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which nonpharmacologic interventions may support fracture pain management? Select all that apply.",
    choices: [
      "Immobilization",
      "Ice as prescribed",
      "Elevation when appropriate",
      "Repositioning while maintaining alignment",
      "Forceful movement of the fracture"
    ],
    answer: [
      "Immobilization",
      "Ice as prescribed",
      "Elevation when appropriate",
      "Repositioning while maintaining alignment"
    ],
    rationale:
      "Immobilization, cold therapy, elevation, and safe positioning can reduce swelling, muscle spasm, and pain.",
    takeaway:
      "Good positioning and swelling control can reduce medication needs."
  },
  {
    id: "MSK-MED-022",
    caseId: "MSK-MED-CASE-022",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Pain Reassessment",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "After administering IV pain medication, which action should the nurse take next?",
    choices: [
      "Reassess pain, sedation, and respiratory status within the appropriate time frame",
      "Wait until the end of the shift to reassess",
      "Document effectiveness without speaking to the patient",
      "Administer another dose immediately regardless of response"
    ],
    answer:
      "Reassess pain, sedation, and respiratory status within the appropriate time frame",
    rationale:
      "The nurse must evaluate both effectiveness and adverse effects after administering analgesics.",
    takeaway:
      "Pain medication administration is incomplete until reassessment occurs."
  },
  {
    id: "MSK-MED-023",
    caseId: "MSK-MED-CASE-023",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Unexpected Pain",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with a cast reports worsening pain despite repeated opioid doses. What should the nurse do?",
    choices: [
      "Assess for neurovascular compromise instead of simply administering more opioid",
      "Increase the opioid dose independently",
      "Tell the patient severe pain is expected",
      "Apply heat over the cast"
    ],
    answer:
      "Assess for neurovascular compromise instead of simply administering more opioid",
    rationale:
      "Pain unrelieved by medication may indicate compartment syndrome, impaired circulation, or loss of alignment.",
    takeaway:
      "Unrelieved pain may be a complication, not just inadequate medication."
  },
  {
    id: "MSK-MED-024",
    caseId: "MSK-MED-CASE-024",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Patient Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient receiving opioids who is difficult to arouse with shallow respirations",
      "A patient requesting an ice pack",
      "A patient asking when the next acetaminophen dose is due",
      "A patient reporting constipation for one day"
    ],
    answer:
      "A patient receiving opioids who is difficult to arouse with shallow respirations",
    rationale:
      "Decreased level of consciousness and shallow breathing suggest opioid toxicity and require immediate intervention.",
    takeaway:
      "Respiratory depression always outranks routine pain and comfort concerns."
  },
  {
    id: "MSK-MED-025",
    caseId: "MSK-MED-CASE-025",
    patient: randomPatient(),
    topic: "Musculoskeletal Medications",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which outcome best indicates effective and safe pain management after fracture repair?",
    choices: [
      "Pain is controlled enough for activity while respiratory status remains stable",
      "The patient is unresponsive but reports no pain",
      "The patient avoids all movement because of pain",
      "The respiratory rate decreases to 7/min"
    ],
    answer:
      "Pain is controlled enough for activity while respiratory status remains stable",
    rationale:
      "Effective pain control supports participation in breathing exercises, mobility, and rehabilitation without causing excessive sedation or respiratory depression.",
    takeaway:
      "The goal is functional pain control without dangerous adverse effects."
  }
];
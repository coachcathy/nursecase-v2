const dvtVteQuestions = [
  {
    id: "PERF-DVT-001",
    caseId: "PERF-DVT-CASE-001",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Virchow Triad",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which three factors make up Virchow's triad?",
    choices: [
      "Venous stasis, endothelial injury, and hypercoagulability",
      "Hypertension, tachycardia, and hypoxemia",
      "Infection, inflammation, and vasodilation",
      "Anemia, dehydration, and bradycardia"
    ],
    answer:
      "Venous stasis, endothelial injury, and hypercoagulability",
    rationale:
      "Virchow's triad identifies the three major conditions that promote venous thrombosis: slowed blood flow, vessel-wall injury, and an increased tendency to clot.",
    takeaway:
      "Virchow's triad explains why a venous thrombus forms."
  },
  {
    id: "PERF-DVT-002",
    caseId: "PERF-DVT-CASE-002",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors increase a patient's risk for deep vein thrombosis? Select all that apply.",
    choices: [
      "Recent surgery",
      "Prolonged immobility",
      "Active cancer",
      "Pregnancy",
      "Estrogen-containing oral contraceptives",
      "Frequent ambulation"
    ],
    answer: [
      "Recent surgery",
      "Prolonged immobility",
      "Active cancer",
      "Pregnancy",
      "Estrogen-containing oral contraceptives"
    ],
    rationale:
      "Surgery, immobility, malignancy, pregnancy, and estrogen exposure can contribute to one or more elements of Virchow's triad.",
    takeaway:
      "Assess every patient for stasis, vessel injury, and hypercoagulability."
  },
  {
    id: "PERF-DVT-003",
    caseId: "PERF-DVT-CASE-003",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are consistent with a lower-extremity DVT? Select all that apply.",
    choices: [
      "Unilateral leg swelling",
      "Warmth of the affected leg",
      "Localized tenderness",
      "Redness",
      "Increased calf circumference",
      "Bilateral cool feet with absent pulses"
    ],
    answer: [
      "Unilateral leg swelling",
      "Warmth of the affected leg",
      "Localized tenderness",
      "Redness",
      "Increased calf circumference"
    ],
    rationale:
      "A DVT commonly causes unilateral swelling, warmth, erythema, tenderness, and an increase in limb circumference. Some patients may have few or no symptoms.",
    takeaway:
      "DVT findings are usually unilateral and venous."
  },
  {
    id: "PERF-DVT-004",
    caseId: "PERF-DVT-CASE-004",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Assessment Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which action should the nurse avoid when assessing a patient for a possible DVT?",
    choices: [
      "Forcefully dorsiflexing the foot to elicit Homan's sign",
      "Comparing calf circumference bilaterally",
      "Assessing for unilateral warmth and swelling",
      "Reviewing the patient's risk factors"
    ],
    answer:
      "Forcefully dorsiflexing the foot to elicit Homan's sign",
    rationale:
      "Homan's sign is neither sensitive nor specific for DVT and is not recommended. Forceful manipulation may also cause discomfort and does not safely confirm or exclude a clot.",
    takeaway:
      "Do not rely on Homan's sign to diagnose DVT."
  },
  {
    id: "PERF-DVT-005",
    caseId: "PERF-DVT-CASE-005",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Priority Action",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A postoperative patient develops unilateral calf swelling, warmth, and tenderness. What should the nurse do first?",
    choices: [
      "Stop ambulation and notify the provider",
      "Massage the calf",
      "Apply a sequential compression device to the affected leg",
      "Encourage vigorous leg exercises"
    ],
    answer:
      "Stop ambulation and notify the provider",
    rationale:
      "The findings suggest a DVT. Activity and massage should be avoided until the patient is evaluated because the thrombus could embolize.",
    takeaway:
      "Suspected DVT requires protection from embolization and prompt evaluation."
  },
  {
    id: "PERF-DVT-006",
    caseId: "PERF-DVT-CASE-006",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Contraindicated Actions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which actions should the nurse avoid for a patient with a suspected acute DVT? Select all that apply.",
    choices: [
      "Massaging the affected leg",
      "Applying an SCD to the affected leg",
      "Encouraging unapproved ambulation",
      "Forcefully performing range-of-motion exercises",
      "Notifying the provider",
      "Preparing for diagnostic testing"
    ],
    answer: [
      "Massaging the affected leg",
      "Applying an SCD to the affected leg",
      "Encouraging unapproved ambulation",
      "Forcefully performing range-of-motion exercises"
    ],
    rationale:
      "Manipulation, compression, or unapproved activity may increase the risk of clot dislodgment. The nurse should notify the provider and prepare for evaluation.",
    takeaway:
      "Do not massage or compress a limb with a suspected acute DVT."
  },
  {
    id: "PERF-DVT-007",
    caseId: "PERF-DVT-CASE-007",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Diagnostic Testing",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which diagnostic test is commonly used to confirm a lower-extremity DVT?",
    choices: [
      "Duplex venous ultrasound",
      "Chest radiograph",
      "Electroencephalogram",
      "Spirometry"
    ],
    answer:
      "Duplex venous ultrasound",
    rationale:
      "Duplex ultrasonography evaluates venous blood flow and compressibility and is commonly used to diagnose a DVT.",
    takeaway:
      "Duplex ultrasound is a primary test for suspected DVT."
  },
  {
    id: "PERF-DVT-008",
    caseId: "PERF-DVT-CASE-008",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "D-Dimer",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "How should the nurse interpret an elevated D-dimer result in a patient with suspected VTE?",
    choices: [
      "It supports the possibility of clot formation but is not specific for VTE",
      "It confirms the exact location of the clot",
      "It rules out pulmonary embolism",
      "It proves the patient has arterial occlusion"
    ],
    answer:
      "It supports the possibility of clot formation but is not specific for VTE",
    rationale:
      "D-dimer reflects fibrin breakdown. It can be elevated with thrombosis but also with surgery, infection, trauma, pregnancy, and other conditions.",
    takeaway:
      "A positive D-dimer is nonspecific; a negative result can be more useful in low-risk patients."
  },
  {
    id: "PERF-DVT-009",
    caseId: "PERF-DVT-CASE-009",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Pulmonary Embolism",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are consistent with a pulmonary embolism? Select all that apply.",
    choices: [
      "Sudden dyspnea",
      "Tachypnea",
      "Tachycardia",
      "Pleuritic chest pain",
      "Hemoptysis",
      "Gradual bilateral ankle edema only"
    ],
    answer: [
      "Sudden dyspnea",
      "Tachypnea",
      "Tachycardia",
      "Pleuritic chest pain",
      "Hemoptysis"
    ],
    rationale:
      "A PE commonly presents with sudden respiratory distress, increased respiratory and heart rates, chest pain, anxiety, hypoxemia, and sometimes hemoptysis.",
    takeaway:
      "Sudden respiratory symptoms in a patient at risk for DVT suggest PE."
  },
  {
    id: "PERF-DVT-010",
    caseId: "PERF-DVT-CASE-010",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "PE Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A patient with a known DVT suddenly reports chest pain and shortness of breath. What should the nurse do first?",
    choices: [
      "Apply oxygen and activate rapid response",
      "Massage the affected leg",
      "Encourage the patient to ambulate",
      "Place the patient flat and offer fluids"
    ],
    answer:
      "Apply oxygen and activate rapid response",
    rationale:
      "The patient may be experiencing a PE. Supporting oxygenation and summoning emergency assistance are immediate priorities.",
    takeaway:
      "Suspected PE is an airway and breathing emergency."
  },
  {
    id: "PERF-DVT-011",
    caseId: "PERF-DVT-CASE-011",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "PE Interventions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions should the nurse anticipate for a patient with a suspected pulmonary embolism? Select all that apply.",
    choices: [
      "Place the patient in high-Fowler's position",
      "Administer supplemental oxygen",
      "Establish IV access",
      "Apply continuous pulse oximetry",
      "Initiate ECG monitoring",
      "Encourage the patient to walk"
    ],
    answer: [
      "Place the patient in high-Fowler's position",
      "Administer supplemental oxygen",
      "Establish IV access",
      "Apply continuous pulse oximetry",
      "Initiate ECG monitoring"
    ],
    rationale:
      "The nurse should support ventilation and oxygenation, obtain IV access, and continuously monitor cardiopulmonary status.",
    takeaway:
      "Position, oxygen, access, and continuous monitoring are PE priorities."
  },
  {
    id: "PERF-DVT-012",
    caseId: "PERF-DVT-CASE-012",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "PE Diagnostics",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which diagnostic test is commonly preferred to identify a pulmonary embolism in a hemodynamically stable patient?",
    choices: [
      "CT pulmonary angiography",
      "Abdominal ultrasound",
      "Bone scan",
      "Colonoscopy"
    ],
    answer:
      "CT pulmonary angiography",
    rationale:
      "CT pulmonary angiography visualizes the pulmonary arteries and is commonly used to diagnose PE when not contraindicated.",
    takeaway:
      "CT pulmonary angiography is a primary diagnostic study for PE."
  },
  {
    id: "PERF-DVT-013",
    caseId: "PERF-DVT-CASE-013",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "VQ Scan",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "A provider orders a ventilation-perfusion scan instead of CT pulmonary angiography. Which patient factor may explain this decision?",
    choices: [
      "Severe contrast allergy",
      "Stable blood pressure",
      "Mild leg tenderness",
      "Normal kidney function"
    ],
    answer:
      "Severe contrast allergy",
    rationale:
      "A V/Q scan may be used when iodinated contrast is contraindicated, such as with severe contrast allergy or significant renal dysfunction.",
    takeaway:
      "V/Q scanning is an alternative when CT contrast cannot be used."
  },
  {
    id: "PERF-DVT-014",
    caseId: "PERF-DVT-CASE-014",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Heparin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Why is IV unfractionated heparin administered to a patient with an acute DVT?",
    choices: [
      "To prevent clot extension and formation of additional clots",
      "To dissolve the existing clot immediately",
      "To increase platelet aggregation",
      "To promote venous stasis"
    ],
    answer:
      "To prevent clot extension and formation of additional clots",
    rationale:
      "Heparin inhibits further clot formation. The body's fibrinolytic system gradually breaks down the existing thrombus.",
    takeaway:
      "Heparin prevents clot progression; it does not directly dissolve the clot."
  },
  {
    id: "PERF-DVT-015",
    caseId: "PERF-DVT-CASE-015",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Heparin Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which assessments are important for a patient receiving IV unfractionated heparin? Select all that apply.",
    choices: [
      "aPTT or anti-Xa level",
      "Platelet count",
      "Hemoglobin and hematocrit",
      "Signs of bleeding",
      "Stool and urine for blood",
      "Serum calcium only"
    ],
    answer: [
      "aPTT or anti-Xa level",
      "Platelet count",
      "Hemoglobin and hematocrit",
      "Signs of bleeding",
      "Stool and urine for blood"
    ],
    rationale:
      "Heparin requires monitoring for therapeutic effect, bleeding, anemia, and heparin-induced thrombocytopenia.",
    takeaway:
      "Monitor coagulation, bleeding, blood counts, and platelets."
  },
  {
    id: "PERF-DVT-016",
    caseId: "PERF-DVT-CASE-016",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Heparin Antidote",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication reverses the anticoagulant effect of unfractionated heparin?",
    choices: [
      "Protamine sulfate",
      "Vitamin K",
      "Naloxone",
      "Acetylcysteine"
    ],
    answer:
      "Protamine sulfate",
    rationale:
      "Protamine sulfate binds to and neutralizes unfractionated heparin.",
    takeaway:
      "Heparin antidote: protamine sulfate."
  },
  {
    id: "PERF-DVT-017",
    caseId: "PERF-DVT-CASE-017",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "HIT",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient's platelet count decreases from 240,000/mm³ to 95,000/mm³ after several days of heparin therapy. What should the nurse do first?",
    choices: [
      "Stop the heparin and notify the provider",
      "Increase the heparin infusion",
      "Administer aspirin",
      "Apply compression to both legs"
    ],
    answer:
      "Stop the heparin and notify the provider",
    rationale:
      "A significant platelet decrease during heparin therapy may indicate heparin-induced thrombocytopenia, a prothrombotic emergency.",
    takeaway:
      "Suspect HIT with a major platelet decline and stop all heparin exposure."
  },
  {
    id: "PERF-DVT-018",
    caseId: "PERF-DVT-CASE-018",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Enoxaparin",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which actions are appropriate when administering subcutaneous enoxaparin? Select all that apply.",
    choices: [
      "Inject into the abdomen",
      "Rotate injection sites",
      "Leave the air bubble in a prefilled syringe",
      "Avoid aspirating",
      "Avoid rubbing the site after injection",
      "Inject into the deltoid muscle"
    ],
    answer: [
      "Inject into the abdomen",
      "Rotate injection sites",
      "Leave the air bubble in a prefilled syringe",
      "Avoid aspirating",
      "Avoid rubbing the site after injection"
    ],
    rationale:
      "Enoxaparin is administered subcutaneously in the abdomen. The air bubble is left in a prefilled syringe, and the nurse avoids aspiration and rubbing to reduce bruising.",
    takeaway:
      "Enoxaparin is given subcutaneously using careful bleeding precautions."
  },
  {
    id: "PERF-DVT-019",
    caseId: "PERF-DVT-CASE-019",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Warfarin",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement by a patient taking warfarin indicates correct understanding?",
    choices: [
      "I will keep my intake of vitamin K-containing foods consistent",
      "I will avoid all green vegetables permanently",
      "I can double my dose if I miss one",
      "I do not need laboratory monitoring"
    ],
    answer:
      "I will keep my intake of vitamin K-containing foods consistent",
    rationale:
      "Patients do not need to eliminate vitamin K foods, but intake should remain consistent to avoid altering warfarin's effect.",
    takeaway:
      "Warfarin teaching focuses on dietary consistency, not elimination."
  },
  {
    id: "PERF-DVT-020",
    caseId: "PERF-DVT-CASE-020",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Warfarin Monitoring",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which laboratory test is used to monitor warfarin therapy?",
    choices: [
      "PT/INR",
      "aPTT only",
      "Platelet aggregation time",
      "Serum sodium"
    ],
    answer:
      "PT/INR",
    rationale:
      "Warfarin is monitored using prothrombin time expressed as the international normalized ratio.",
    takeaway:
      "Warfarin is monitored with PT/INR."
  },
  {
    id: "PERF-DVT-021",
    caseId: "PERF-DVT-CASE-021",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Bleeding Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which instructions should the nurse include for a patient taking an anticoagulant? Select all that apply.",
    choices: [
      "Use a soft-bristled toothbrush",
      "Use an electric razor",
      "Report black or tarry stools",
      "Avoid aspirin unless prescribed",
      "Wear medical-alert identification",
      "Use a firm-bristled toothbrush"
    ],
    answer: [
      "Use a soft-bristled toothbrush",
      "Use an electric razor",
      "Report black or tarry stools",
      "Avoid aspirin unless prescribed",
      "Wear medical-alert identification"
    ],
    rationale:
      "Bleeding precautions reduce injury and help patients recognize and report evidence of internal or external bleeding.",
    takeaway:
      "Anticoagulant safety requires injury prevention and prompt bleeding recognition."
  },
  {
    id: "PERF-DVT-022",
    caseId: "PERF-DVT-CASE-022",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "VTE Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which interventions help prevent venous thromboembolism in a hospitalized patient? Select all that apply.",
    choices: [
      "Early ambulation",
      "Leg and ankle exercises",
      "Adequate hydration",
      "Sequential compression devices when appropriate",
      "Prescribed anticoagulant prophylaxis",
      "Prolonged bed rest"
    ],
    answer: [
      "Early ambulation",
      "Leg and ankle exercises",
      "Adequate hydration",
      "Sequential compression devices when appropriate",
      "Prescribed anticoagulant prophylaxis"
    ],
    rationale:
      "VTE prevention reduces venous stasis and clot formation through movement, hydration, mechanical compression, and medication when indicated.",
    takeaway:
      "Prevent VTE by reducing venous stasis."
  },
  {
    id: "PERF-DVT-023",
    caseId: "PERF-DVT-CASE-023",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "SCD Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "For which patient should the nurse question an order for sequential compression devices?",
    choices: [
      "A patient with a confirmed acute DVT in the affected leg",
      "A postoperative patient without signs of DVT",
      "A patient on bed rest after abdominal surgery",
      "A patient with temporary reduced mobility"
    ],
    answer:
      "A patient with a confirmed acute DVT in the affected leg",
    rationale:
      "SCDs are used for prevention but are generally avoided over an extremity with an active DVT because compression could contribute to embolization.",
    takeaway:
      "SCDs prevent DVT; they do not treat an active clot."
  },
  {
    id: "PERF-DVT-024",
    caseId: "PERF-DVT-CASE-024",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "NGN Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A postoperative patient has unilateral calf swelling and tenderness. Thirty minutes later, the patient develops sudden dyspnea, anxiety, a heart rate of 126/min, and oxygen saturation of 84%. Which action is the priority?",
    choices: [
      "Apply oxygen and activate the rapid-response system",
      "Measure the calf again",
      "Administer an oral analgesic",
      "Encourage incentive spirometry and reassess later"
    ],
    answer:
      "Apply oxygen and activate the rapid-response system",
    rationale:
      "The patient has progressed from suspected DVT to manifestations of PE. Severe hypoxemia and sudden respiratory distress require immediate emergency intervention.",
    takeaway:
      "Recognize DVT cues early and treat sudden hypoxemia as possible PE."
  },
  {
    id: "PERF-DVT-025",
    caseId: "PERF-DVT-CASE-025",
    patient: randomPatient(),
    topic: "DVT and VTE",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient receiving heparin who develops sudden dyspnea and chest pain",
      "A patient taking warfarin who asks about green vegetables",
      "A postoperative patient requesting assistance with ambulation",
      "A patient wearing compression stockings who reports mild itching"
    ],
    answer:
      "A patient receiving heparin who develops sudden dyspnea and chest pain",
    rationale:
      "Sudden chest pain and dyspnea may indicate a pulmonary embolism despite anticoagulant therapy and require immediate assessment and intervention.",
    takeaway:
      "Possible PE always takes priority over stable teaching and comfort needs."
  }
];
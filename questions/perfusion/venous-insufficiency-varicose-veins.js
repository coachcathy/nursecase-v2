const venousInsufficiencyQuestions = [
  {
    id: "PERF-VI-001",
    caseId: "PERF-VI-CASE-001",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Pathophysiology",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes chronic venous insufficiency?",
    choices: [
      "Failure of venous valves causes blood to pool in the legs",
      "Arterial plaque completely blocks blood flow",
      "Inflammation destroys peripheral nerves",
      "Lymphatic vessels fail to drain protein"
    ],
    answer:
      "Failure of venous valves causes blood to pool in the legs",
    rationale:
      "Damaged venous valves allow blood to reflux backward, increasing venous pressure and producing edema, skin changes, and ulceration.",
    takeaway:
      "Venous insufficiency = faulty valves + venous pooling."
  },

  {
    id: "PERF-VI-002",
    caseId: "PERF-VI-CASE-002",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion",
    question:
      "Which patients are at increased risk for chronic venous insufficiency? Select all that apply.",
    choices: [
      "Older adult",
      "Pregnancy",
      "Obesity",
      "Prolonged standing",
      "History of DVT",
      "Running marathons"
    ],
    answer: [
      "Older adult",
      "Pregnancy",
      "Obesity",
      "Prolonged standing",
      "History of DVT"
    ],
    rationale:
      "Valve damage and increased venous pressure are associated with age, pregnancy, obesity, prolonged standing, and previous DVT.",
    takeaway:
      "Anything increasing venous pressure raises CVI risk."
  },

  {
    id: "PERF-VI-003",
    caseId: "PERF-VI-CASE-003",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are expected in chronic venous insufficiency? Select all that apply.",
    choices: [
      "Brown discoloration around the ankles",
      "Dependent edema",
      "Aching pain improved by elevation",
      "Varicose veins",
      "Warm skin",
      "Absent pedal pulses"
    ],
    answer: [
      "Brown discoloration around the ankles",
      "Dependent edema",
      "Aching pain improved by elevation",
      "Varicose veins",
      "Warm skin"
    ],
    rationale:
      "Venous disease causes edema, aching, varicosities, hemosiderin staining, and warm skin. Pulses are usually present.",
    takeaway:
      "Venous disease = warm, swollen, brown legs."
  },

  {
    id: "PERF-VI-004",
    caseId: "PERF-VI-CASE-004",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding helps distinguish venous insufficiency from peripheral arterial disease?",
    choices: [
      "Pain improves when the legs are elevated",
      "Cool pale extremity",
      "Rest pain relieved by dependency",
      "Absent distal pulses"
    ],
    answer:
      "Pain improves when the legs are elevated",
    rationale:
      "Elevation decreases venous pressure and improves venous discomfort. Arterial disease usually worsens with elevation.",
    takeaway:
      "Venous pain improves with elevation."
  },

  {
    id: "PERF-VI-005",
    caseId: "PERF-VI-CASE-005",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Varicose Veins",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Varicose veins develop primarily because of:",
    choices: [
      "Failure of venous valves",
      "Complete arterial obstruction",
      "Autoimmune vasculitis",
      "Bacterial infection"
    ],
    answer:
      "Failure of venous valves",
    rationale:
      "Valve incompetence allows blood to reflux, stretching superficial veins.",
    takeaway:
      "Varicose veins are caused by valve failure."
  },

  {
    id: "PERF-VI-006",
    caseId: "PERF-VI-CASE-006",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Compression Therapy",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion",
    question:
      "When should compression stockings be applied?",
    choices: [
      "Before getting out of bed in the morning",
      "After standing all day",
      "Immediately after exercising",
      "Only while sleeping"
    ],
    answer:
      "Before getting out of bed in the morning",
    rationale:
      "Compression stockings are most effective before venous pooling occurs.",
    takeaway:
      "Compression stockings go on before swelling develops."
  },

  {
    id: "PERF-VI-007",
    caseId: "PERF-VI-CASE-007",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Compression Safety",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which patient should NOT receive compression stockings until further evaluation?",
    choices: [
      "A patient with severe peripheral arterial disease",
      "A patient with chronic venous insufficiency",
      "A patient with varicose veins",
      "A patient with dependent edema"
    ],
    answer:
      "A patient with severe peripheral arterial disease",
    rationale:
      "Compression can further decrease arterial blood flow in severe PAD.",
    takeaway:
      "Always evaluate arterial circulation before compression."
  },

  {
    id: "PERF-VI-008",
    caseId: "PERF-VI-CASE-008",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion",
    question:
      "Which teaching points should the nurse provide for venous insufficiency? Select all that apply.",
    choices: [
      "Elevate the legs above heart level",
      "Walk regularly",
      "Avoid prolonged standing",
      "Avoid crossing the legs",
      "Wear compression stockings",
      "Sleep in a recliner every night"
    ],
    answer: [
      "Elevate the legs above heart level",
      "Walk regularly",
      "Avoid prolonged standing",
      "Avoid crossing the legs",
      "Wear compression stockings"
    ],
    rationale:
      "Exercise, compression, and leg elevation improve venous return and reduce edema.",
    takeaway:
      "Move, elevate, and compress."
  },

  {
    id: "PERF-VI-009",
    caseId: "PERF-VI-CASE-009",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Venous Ulcers",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Where are venous ulcers most commonly located?",
    choices: [
      "Medial malleolus",
      "Tips of the toes",
      "Heel",
      "Lateral foot"
    ],
    answer:
      "Medial malleolus",
    rationale:
      "Venous ulcers typically develop around the medial ankle where venous pressure is highest.",
    takeaway:
      "Think medial ankle for venous ulcers."
  },

  {
    id: "PERF-VI-010",
    caseId: "PERF-VI-CASE-010",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Venous Ulcers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which ulcer characteristic is most consistent with venous insufficiency?",
    choices: [
      "Shallow ulcer with irregular borders and heavy drainage",
      "Round punched-out ulcer with minimal drainage",
      "Dry black eschar on the toe",
      "Pain relieved by hanging the leg down"
    ],
    answer:
      "Shallow ulcer with irregular borders and heavy drainage",
    rationale:
      "Venous ulcers are shallow, moist, irregular, and commonly produce moderate-to-heavy exudate.",
    takeaway:
      "Venous ulcers are wet, shallow, and irregular."
  },

  {
    id: "PERF-VI-011",
    caseId: "PERF-VI-CASE-011",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care",
    question:
      "Which patient requires immediate provider notification?",
    choices: [
      "A patient with venous insufficiency whose leg suddenly becomes red, hot, swollen, and painful",
      "A patient requesting new compression stockings",
      "A patient with mild ankle edema",
      "A patient asking about walking"
    ],
    answer:
      "A patient with venous insufficiency whose leg suddenly becomes red, hot, swollen, and painful",
    rationale:
      "These findings suggest an acute DVT requiring immediate evaluation.",
    takeaway:
      "Sudden unilateral swelling and pain may indicate DVT."
  },

  {
    id: "PERF-VI-012",
    caseId: "PERF-VI-CASE-012",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "NGN",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient with chronic venous insufficiency reports increased edema after working a 12-hour shift standing. Which intervention should the nurse prioritize?",
    choices: [
      "Elevate the legs above heart level and apply prescribed compression therapy",
      "Hang the legs off the bed",
      "Massage the swollen calf",
      "Apply a heating pad directly over the edema"
    ],
    answer:
      "Elevate the legs above heart level and apply prescribed compression therapy",
    rationale:
      "Elevation and compression reduce venous hypertension and improve venous return.",
    takeaway:
      "Elevation plus compression is first-line treatment for chronic venous insufficiency."
    },

    {
    id: "PERF-VI-013",
    caseId: "PERF-VI-CASE-013",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Skin Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which skin-care instructions should the nurse provide to a patient with chronic venous insufficiency? Select all that apply.",
    choices: [
      "Wash the legs gently with mild soap and lukewarm water",
      "Apply moisturizer to dry, intact skin",
      "Inspect the legs and feet every day",
      "Protect the legs from cuts and trauma",
      "Apply moisturizer between the toes",
      "Scratch itchy areas vigorously"
    ],
    answer: [
      "Wash the legs gently with mild soap and lukewarm water",
      "Apply moisturizer to dry, intact skin",
      "Inspect the legs and feet every day",
      "Protect the legs from cuts and trauma"
    ],
    rationale:
      "Chronic edema and poor tissue nutrition increase the risk of skin breakdown and infection. Gentle cleansing, moisturizing intact skin, daily inspection, and injury prevention help maintain skin integrity. Moisture should not be applied between the toes because excess moisture can promote fungal growth.",
    takeaway:
      "Protect, inspect, cleanse, and moisturize venous legs."
  },

  {
    id: "PERF-VI-014",
    caseId: "PERF-VI-CASE-014",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Hemosiderin Staining",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with chronic venous insufficiency has brown discoloration around the ankles. Which process causes this finding?",
    choices: [
      "Breakdown of red blood cells with deposition of hemosiderin in the tissues",
      "Loss of melanin caused by poor arterial circulation",
      "Accumulation of bilirubin caused by liver failure",
      "Destruction of peripheral nerves"
    ],
    answer:
      "Breakdown of red blood cells with deposition of hemosiderin in the tissues",
    rationale:
      "Elevated venous pressure allows red blood cells to leak into surrounding tissues. The cells break down and leave iron-containing hemosiderin deposits, producing brown discoloration.",
    takeaway:
      "Brown ankle staining in venous disease is caused by hemosiderin deposition."
  },

  {
    id: "PERF-VI-015",
    caseId: "PERF-VI-CASE-015",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Lipodermatosclerosis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "The nurse notes thick, firm, hardened skin around the lower calf and ankle of a patient with long-term venous insufficiency. How should the nurse document this finding?",
    choices: [
      "Lipodermatosclerosis",
      "Intermittent claudication",
      "Dependent rubor",
      "Arterial gangrene"
    ],
    answer:
      "Lipodermatosclerosis",
    rationale:
      "Lipodermatosclerosis is chronic inflammation and fibrosis of the skin and subcutaneous tissue caused by prolonged venous hypertension. The lower leg can become firm, indurated, and shaped like an inverted bottle.",
    takeaway:
      "Long-term venous hypertension can cause hardened, fibrotic lower-leg tissue."
  },

  {
    id: "PERF-VI-016",
    caseId: "PERF-VI-CASE-016",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "ABI and Compression",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Before applying high-strength compression therapy to a patient with a venous leg ulcer, which assessment is most important?",
    choices: [
      "Ankle-brachial index",
      "Glasgow Coma Scale score",
      "Bowel sounds",
      "Pupil response"
    ],
    answer:
      "Ankle-brachial index",
    rationale:
      "The ankle-brachial index helps determine whether adequate arterial circulation is present. Significant arterial insufficiency can make strong compression unsafe because compression may further reduce blood flow.",
    takeaway:
      "Check arterial circulation before applying strong compression."
  },

  {
    id: "PERF-VI-017",
    caseId: "PERF-VI-CASE-017",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Compression Wraps",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which action is appropriate when applying a prescribed compression wrap to a lower extremity?",
    choices: [
      "Apply the wrap from the foot upward toward the knee",
      "Begin at the knee and wrap downward toward the toes",
      "Apply the greatest pressure directly behind the knee",
      "Leave the toes completely covered so circulation cannot be assessed"
    ],
    answer:
      "Apply the wrap from the foot upward toward the knee",
    rationale:
      "Compression is generally applied distally to proximally to support venous return and prevent blood from pooling in the lower leg. The nurse should avoid wrinkles, excessive localized pressure, and obstruction behind the knee.",
    takeaway:
      "Compression wraps move from distal to proximal."
  },

  {
    id: "PERF-VI-018",
    caseId: "PERF-VI-CASE-018",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Compression Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "A patient reports numbness and severe foot pain shortly after a compression wrap is applied. The toes appear pale and cool. What should the nurse do first?",
    choices: [
      "Remove or loosen the wrap and assess circulation",
      "Elevate the leg higher and reassess in 4 hours",
      "Encourage the patient to walk",
      "Apply an additional compression layer"
    ],
    answer:
      "Remove or loosen the wrap and assess circulation",
    rationale:
      "Pain, numbness, pallor, and coolness can indicate impaired arterial circulation caused by excessive compression. The wrap should be removed or loosened immediately, circulation assessed, and the provider notified as indicated.",
    takeaway:
      "New neurovascular changes after compression require immediate action."
  },

  {
    id: "PERF-VI-019",
    caseId: "PERF-VI-CASE-019",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Exercise",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which exercise should the nurse recommend to improve venous return in a patient with chronic venous insufficiency?",
    choices: [
      "Regular walking with ankle flexion and calf-muscle activity",
      "Prolonged standing without moving",
      "Extended bed rest",
      "Heavy lifting while holding the breath"
    ],
    answer:
      "Regular walking with ankle flexion and calf-muscle activity",
    rationale:
      "Walking activates the calf-muscle pump, which helps move venous blood toward the heart. Prolonged standing and immobility increase venous stasis.",
    takeaway:
      "Walking activates the calf pump and improves venous return."
  },

  {
    id: "PERF-VI-020",
    caseId: "PERF-VI-CASE-020",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Lifestyle Modification",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which lifestyle modifications can reduce symptoms and complications of chronic venous insufficiency? Select all that apply.",
    choices: [
      "Achieve a healthy body weight",
      "Avoid prolonged sitting or standing",
      "Perform regular walking exercises",
      "Elevate the legs when resting",
      "Wear prescribed compression garments",
      "Cross the legs while sitting"
    ],
    answer: [
      "Achieve a healthy body weight",
      "Avoid prolonged sitting or standing",
      "Perform regular walking exercises",
      "Elevate the legs when resting",
      "Wear prescribed compression garments"
    ],
    rationale:
      "Weight management, frequent movement, exercise, elevation, and compression decrease venous pressure and improve venous return. Crossing the legs can interfere with circulation.",
    takeaway:
      "Weight control, movement, elevation, and compression reduce venous symptoms."
  },

  {
    id: "PERF-VI-021",
    caseId: "PERF-VI-CASE-021",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Varicose Vein Procedures",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which procedures can be used to treat symptomatic varicose veins? Select all that apply.",
    choices: [
      "Sclerotherapy",
      "Endovenous laser or radiofrequency ablation",
      "Ambulatory phlebectomy",
      "Vein ligation or stripping",
      "Coronary artery bypass grafting",
      "Hemodialysis"
    ],
    answer: [
      "Sclerotherapy",
      "Endovenous laser or radiofrequency ablation",
      "Ambulatory phlebectomy",
      "Vein ligation or stripping"
    ],
    rationale:
      "Varicose veins can be treated by injecting a sclerosing agent, closing the vein with thermal energy, removing superficial veins through small incisions, or surgically ligating and stripping the affected vein.",
    takeaway:
      "Varicose-vein treatments close or remove incompetent superficial veins."
  },

  {
    id: "PERF-VI-022",
    caseId: "PERF-VI-CASE-022",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Postprocedure Care",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which statement by a patient after sclerotherapy indicates correct understanding of discharge instructions?",
    choices: [
      "I will walk as directed and wear my prescribed compression stockings",
      "I will remain on complete bed rest for one week",
      "I will apply direct heat to the treatment sites",
      "I will massage any painful, swollen area vigorously"
    ],
    answer:
      "I will walk as directed and wear my prescribed compression stockings",
    rationale:
      "Walking promotes venous circulation, and compression supports the treated veins. Prolonged immobility, excessive heat, and vigorous massage can increase complications.",
    takeaway:
      "After vein procedures, walking and compression support recovery."
  },

  {
    id: "PERF-VI-023",
    caseId: "PERF-VI-CASE-023",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Arterial Versus Venous Ulcers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings support that a lower-leg ulcer is venous rather than arterial? Select all that apply.",
    choices: [
      "Ulcer is located near the medial ankle",
      "Wound is shallow with irregular borders",
      "Moderate or heavy drainage is present",
      "Surrounding skin has brown discoloration and edema",
      "Pedal pulses are usually present",
      "Wound is dry and punched out on the toes"
    ],
    answer: [
      "Ulcer is located near the medial ankle",
      "Wound is shallow with irregular borders",
      "Moderate or heavy drainage is present",
      "Surrounding skin has brown discoloration and edema",
      "Pedal pulses are usually present"
    ],
    rationale:
      "Venous ulcers are commonly located near the medial malleolus and are shallow, irregular, moist, and surrounded by edema and hemosiderin staining. Arterial ulcers are more often dry, punched out, and located on the toes or pressure points.",
    takeaway:
      "Venous ulcers are medial, moist, irregular, and associated with edema."
  },

  {
    id: "PERF-VI-024",
    caseId: "PERF-VI-CASE-024",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "NGN Venous Ulcer Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a shallow, draining ulcer near the medial ankle, bilateral lower-leg edema, warm skin, brown discoloration, and palpable pedal pulses. Which intervention should the nurse include in the plan of care after adequate arterial circulation is confirmed?",
    choices: [
      "Apply prescribed compression therapy and elevate the legs",
      "Keep the legs dependent at all times",
      "Apply direct heating pads to both legs",
      "Avoid walking to prevent additional drainage"
    ],
    answer:
      "Apply prescribed compression therapy and elevate the legs",
    rationale:
      "The findings are characteristic of a venous ulcer. Compression, elevation, wound care, and movement help reduce venous hypertension and edema after sufficient arterial circulation has been verified.",
    takeaway:
      "Venous ulcer treatment centers on compression, elevation, movement, and wound care."
  },

  {
    id: "PERF-VI-025",
    caseId: "PERF-VI-CASE-025",
    patient: randomPatient(),
    topic: "Venous Insufficiency and Varicose Veins",
    subtopic: "Comprehensive Discharge Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include when discharging a patient with chronic venous insufficiency and a healed venous ulcer? Select all that apply.",
    choices: [
      "Apply compression stockings before getting out of bed",
      "Elevate the legs above heart level several times each day",
      "Walk regularly and perform ankle-pumping exercises",
      "Inspect the legs and feet daily for skin breakdown",
      "Report sudden unilateral pain, redness, warmth, or swelling",
      "Stop using compression once the ulcer closes"
    ],
    answer: [
      "Apply compression stockings before getting out of bed",
      "Elevate the legs above heart level several times each day",
      "Walk regularly and perform ankle-pumping exercises",
      "Inspect the legs and feet daily for skin breakdown",
      "Report sudden unilateral pain, redness, warmth, or swelling"
    ],
    rationale:
      "Long-term compression, elevation, exercise, skin assessment, and early recognition of possible DVT help prevent ulcer recurrence and other complications. Compression therapy is often continued after healing because the underlying venous insufficiency remains.",
    takeaway:
      "A healed ulcer does not eliminate chronic venous disease or the need for prevention."
  }
];
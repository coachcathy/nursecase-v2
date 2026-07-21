const ngnPerfusionCaseQuestions = [
  {
    id: "PERF-NGN-001",
    caseId: "PERF-NGN-CASE-001",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Hypertensive Emergency",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient arrives with a blood pressure of 228/132 mm Hg, severe headache, blurred vision, confusion, and nausea. Which finding is the strongest indicator that the patient is experiencing a hypertensive emergency rather than hypertensive urgency?",
    choices: [
      "New confusion and blurred vision",
      "Blood pressure of 228/132 mm Hg",
      "History of hypertension",
      "Nausea after arriving at the hospital"
    ],
    answer:
      "New confusion and blurred vision",
    rationale:
      "A hypertensive emergency is defined by severe hypertension accompanied by acute target-organ damage. New neurologic and visual changes suggest cerebral or retinal injury and require immediate treatment.",
    takeaway:
      "Severe hypertension becomes an emergency when acute organ damage is present."
  },

  {
    id: "PERF-NGN-002",
    caseId: "PERF-NGN-CASE-001",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Hypertensive Emergency",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "The patient with a hypertensive emergency is prescribed an intravenous antihypertensive infusion. Which nursing action is most important during treatment?",
    choices: [
      "Monitor blood pressure frequently and assess neurologic status",
      "Lower the blood pressure to a normal level immediately",
      "Encourage the patient to ambulate every hour",
      "Administer all routine oral medications at the same time"
    ],
    answer:
      "Monitor blood pressure frequently and assess neurologic status",
    rationale:
      "IV antihypertensive therapy requires frequent blood-pressure and neurologic monitoring. Blood pressure should be reduced gradually because an excessively rapid decrease can reduce perfusion to the brain, heart, and kidneys.",
    takeaway:
      "Treat hypertensive emergencies carefully and monitor for reduced organ perfusion."
  },

  {
    id: "PERF-NGN-003",
    caseId: "PERF-NGN-CASE-002",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Deep Vein Thrombosis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A postoperative patient develops unilateral calf swelling, warmth, tenderness, and redness. Which hypothesis should the nurse prioritize?",
    choices: [
      "Deep vein thrombosis",
      "Chronic arterial insufficiency",
      "Raynaud phenomenon",
      "Stable varicose veins"
    ],
    answer:
      "Deep vein thrombosis",
    rationale:
      "Unilateral swelling, warmth, tenderness, and erythema in an immobile postoperative patient strongly suggest DVT. The patient is at risk for pulmonary embolism if the thrombus dislodges.",
    takeaway:
      "Unilateral warm swelling after surgery should be treated as possible DVT."
  },

  {
    id: "PERF-NGN-004",
    caseId: "PERF-NGN-CASE-002",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Deep Vein Thrombosis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which actions should the nurse take for the patient with a suspected deep vein thrombosis? Select all that apply.",
    choices: [
      "Notify the provider",
      "Limit unnecessary ambulation until evaluated",
      "Measure and compare both calf circumferences",
      "Anticipate venous duplex ultrasonography",
      "Massage the affected calf",
      "Apply sequential compression to the affected leg"
    ],
    answer: [
      "Notify the provider",
      "Limit unnecessary ambulation until evaluated",
      "Measure and compare both calf circumferences",
      "Anticipate venous duplex ultrasonography"
    ],
    rationale:
      "The nurse should report suspected DVT, reduce unnecessary movement until the patient is evaluated, compare extremities, and anticipate diagnostic imaging. The affected calf should not be massaged, and compression devices should not be placed over a suspected thrombus.",
    takeaway:
      "Protect a suspected DVT from manipulation and obtain prompt evaluation."
  },

  {
    id: "PERF-NGN-005",
    caseId: "PERF-NGN-CASE-003",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Pulmonary Embolism",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient being treated for DVT suddenly develops sharp chest pain, severe dyspnea, tachycardia, anxiety, and an oxygen saturation of 84%. Which action should the nurse take first?",
    choices: [
      "Apply oxygen and activate the rapid response team",
      "Massage the affected extremity",
      "Assist the patient to ambulate",
      "Place the patient in Trendelenburg position"
    ],
    answer:
      "Apply oxygen and activate the rapid response team",
    rationale:
      "The findings indicate a probable pulmonary embolism with significant hypoxemia. Supporting oxygenation and activating emergency assistance are the immediate priorities.",
    takeaway:
      "Suspected pulmonary embolism requires immediate ABC-focused intervention."
  },

  {
    id: "PERF-NGN-006",
    caseId: "PERF-NGN-CASE-003",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Pulmonary Embolism",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "Which findings support the nurse's suspicion of a pulmonary embolism? Select all that apply.",
    choices: [
      "Sudden dyspnea",
      "Pleuritic chest pain",
      "Tachycardia",
      "Hypoxemia",
      "Hemoptysis",
      "Gradual bilateral ankle swelling"
    ],
    answer: [
      "Sudden dyspnea",
      "Pleuritic chest pain",
      "Tachycardia",
      "Hypoxemia",
      "Hemoptysis"
    ],
    rationale:
      "Pulmonary embolism often causes sudden dyspnea, pleuritic chest pain, tachycardia, hypoxemia, anxiety, and sometimes hemoptysis. Gradual bilateral ankle swelling is not an acute PE manifestation.",
    takeaway:
      "Pulmonary embolism presents with sudden respiratory and cardiovascular deterioration."
  },

  {
    id: "PERF-NGN-007",
    caseId: "PERF-NGN-CASE-004",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Acute Arterial Occlusion",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient suddenly reports severe left-leg pain. The leg is pale, cool, numb, and pulseless, and the patient cannot move the foot. Which condition should the nurse suspect?",
    choices: [
      "Acute arterial occlusion",
      "Chronic venous insufficiency",
      "Deep vein thrombosis",
      "Varicose veins"
    ],
    answer:
      "Acute arterial occlusion",
    rationale:
      "Sudden pain, pallor, pulselessness, paresthesia, paralysis, and coolness are classic findings of acute arterial occlusion. This is a limb-threatening emergency.",
    takeaway:
      "The six Ps indicate acute arterial obstruction and threatened limb viability."
  },

  {
    id: "PERF-NGN-008",
    caseId: "PERF-NGN-CASE-004",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Acute Arterial Occlusion",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which actions should the nurse take for the patient with suspected acute arterial occlusion? Select all that apply.",
    choices: [
      "Notify the vascular provider immediately",
      "Keep the affected extremity in a neutral or slightly dependent position",
      "Assess motor function, sensation, color, temperature, and pulses",
      "Prepare to administer prescribed intravenous heparin",
      "Elevate the extremity above heart level",
      "Apply a compression wrap"
    ],
    answer: [
      "Notify the vascular provider immediately",
      "Keep the affected extremity in a neutral or slightly dependent position",
      "Assess motor function, sensation, color, temperature, and pulses",
      "Prepare to administer prescribed intravenous heparin"
    ],
    rationale:
      "Acute arterial occlusion requires immediate vascular evaluation, frequent neurovascular assessment, protection of arterial flow, and commonly anticoagulation. Elevation and compression may further reduce distal perfusion.",
    takeaway:
      "Preserve perfusion and obtain emergency vascular treatment for acute arterial occlusion."
  },

   {
    id: "PERF-NGN-009",
    caseId: "PERF-NGN-CASE-005",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Peripheral Arterial Disease",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient reports calf pain while walking that disappears after several minutes of rest. The affected foot is cool, pedal pulses are diminished, and capillary refill is delayed. Which condition should the nurse suspect?",
    choices: [
      "Peripheral arterial disease",
      "Chronic venous insufficiency",
      "Deep vein thrombosis",
      "Raynaud phenomenon"
    ],
    answer:
      "Peripheral arterial disease",
    rationale:
      "Intermittent claudication, cool skin, diminished pulses, and delayed capillary refill are classic findings of peripheral arterial disease caused by reduced arterial blood flow.",
    takeaway:
      "Exertional leg pain relieved by rest is intermittent claudication."
  },

  {
    id: "PERF-NGN-010",
    caseId: "PERF-NGN-CASE-005",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Peripheral Arterial Disease",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which interventions should the nurse include in the plan of care for the patient with peripheral arterial disease? Select all that apply.",
    choices: [
      "Encourage smoking cessation",
      "Promote a prescribed walking program",
      "Protect the feet from injury",
      "Administer prescribed antiplatelet medication",
      "Control blood glucose and lipid levels",
      "Apply high-strength compression stockings"
    ],
    answer: [
      "Encourage smoking cessation",
      "Promote a prescribed walking program",
      "Protect the feet from injury",
      "Administer prescribed antiplatelet medication",
      "Control blood glucose and lipid levels"
    ],
    rationale:
      "PAD care focuses on improving circulation, controlling atherosclerotic risk factors, preventing injury, and using prescribed medications. Strong compression can further impair arterial blood flow.",
    takeaway:
      "PAD management combines risk-factor control, exercise, medication, and foot protection."
  },

  {
    id: "PERF-NGN-011",
    caseId: "PERF-NGN-CASE-006",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Chronic Venous Insufficiency",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has bilateral lower-leg edema, aching that improves with elevation, warm skin, varicose veins, and brown discoloration around the ankles. Which condition should the nurse identify?",
    choices: [
      "Chronic venous insufficiency",
      "Peripheral arterial disease",
      "Acute arterial occlusion",
      "Raynaud phenomenon"
    ],
    answer:
      "Chronic venous insufficiency",
    rationale:
      "Warmth, edema, varicosities, hemosiderin staining, and discomfort relieved by elevation are characteristic of chronic venous insufficiency.",
    takeaway:
      "Venous disease is warm, swollen, brown, and relieved by elevation."
  },

  {
    id: "PERF-NGN-012",
    caseId: "PERF-NGN-CASE-006",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Chronic Venous Insufficiency",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which interventions should the nurse recommend for the patient with chronic venous insufficiency? Select all that apply.",
    choices: [
      "Elevate the legs when resting",
      "Wear prescribed compression stockings",
      "Walk regularly",
      "Avoid prolonged standing or sitting",
      "Inspect the skin daily",
      "Keep the legs dependent throughout the day"
    ],
    answer: [
      "Elevate the legs when resting",
      "Wear prescribed compression stockings",
      "Walk regularly",
      "Avoid prolonged standing or sitting",
      "Inspect the skin daily"
    ],
    rationale:
      "Elevation, compression, movement, avoidance of prolonged dependency, and skin inspection reduce venous pooling and help prevent ulcers.",
    takeaway:
      "Venous insufficiency improves with compression, elevation, movement, and skin care."
  },

  {
    id: "PERF-NGN-013",
    caseId: "PERF-NGN-CASE-007",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Arterial Ulcer",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a painful ulcer on the tip of the great toe. The wound is dry with punched-out borders, and the foot is cool with weak pedal pulses. Which type of ulcer should the nurse identify?",
    choices: [
      "Arterial ulcer",
      "Venous ulcer",
      "Pressure injury caused by immobility",
      "Neuropathic ulcer caused by normal circulation"
    ],
    answer:
      "Arterial ulcer",
    rationale:
      "Arterial ulcers are typically painful, dry, deep, and punched out. They occur distally and are associated with cool skin and diminished pulses.",
    takeaway:
      "Toe location, dry punched-out borders, and weak pulses indicate an arterial ulcer."
  },

  {
    id: "PERF-NGN-014",
    caseId: "PERF-NGN-CASE-007",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Arterial Ulcer",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which actions are appropriate for the patient with an arterial foot ulcer? Select all that apply.",
    choices: [
      "Protect the foot from trauma",
      "Avoid direct heat",
      "Keep the foot clean and dry",
      "Encourage smoking cessation",
      "Report increasing rest pain",
      "Apply high-strength compression"
    ],
    answer: [
      "Protect the foot from trauma",
      "Avoid direct heat",
      "Keep the foot clean and dry",
      "Encourage smoking cessation",
      "Report increasing rest pain"
    ],
    rationale:
      "Arterial ulcer care focuses on preventing injury, protecting poorly perfused tissue, avoiding burns, reducing atherosclerotic risk factors, and reporting signs of worsening ischemia. Compression may further impair arterial flow.",
    takeaway:
      "Protect ischemic tissue and never apply strong compression without adequate arterial flow."
  },

  {
    id: "PERF-NGN-015",
    caseId: "PERF-NGN-CASE-008",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Venous Ulcer",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a shallow, irregular ulcer near the medial ankle. The wound has moderate drainage, and the surrounding skin is warm, edematous, and brown. Which type of ulcer should the nurse identify?",
    choices: [
      "Venous ulcer",
      "Arterial ulcer",
      "Acute ischemic wound",
      "Raynaud-related ulcer"
    ],
    answer:
      "Venous ulcer",
    rationale:
      "Venous ulcers are usually shallow, irregular, draining, and located near the medial malleolus. They are often surrounded by edema and hemosiderin staining.",
    takeaway:
      "Medial ankle location, edema, brown skin, and drainage indicate a venous ulcer."
  },

  {
    id: "PERF-NGN-016",
    caseId: "PERF-NGN-CASE-008",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Venous Ulcer",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which interventions should the nurse implement for the patient with a venous ulcer after adequate arterial circulation is confirmed? Select all that apply.",
    choices: [
      "Apply prescribed compression therapy",
      "Elevate the leg",
      "Encourage walking",
      "Provide prescribed wound care",
      "Monitor the skin for infection",
      "Keep the leg dependent at all times"
    ],
    answer: [
      "Apply prescribed compression therapy",
      "Elevate the leg",
      "Encourage walking",
      "Provide prescribed wound care",
      "Monitor the skin for infection"
    ],
    rationale:
      "Compression, elevation, calf-muscle activity, wound care, and infection monitoring reduce venous hypertension and promote healing. Prolonged dependency worsens venous pooling.",
    takeaway:
      "Venous ulcers heal with compression, elevation, walking, and wound care."
  },

    {
    id: "PERF-NGN-017",
    caseId: "PERF-NGN-CASE-009",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Heparin-Induced Thrombocytopenia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient receiving unfractionated heparin has a platelet count decrease from 248,000/mm³ to 96,000/mm³. The patient also reports new pain and swelling in the opposite leg. Which complication should the nurse suspect?",
    choices: [
      "Heparin-induced thrombocytopenia",
      "Expected therapeutic response to heparin",
      "Vitamin K deficiency",
      "Chronic venous insufficiency"
    ],
    answer:
      "Heparin-induced thrombocytopenia",
    rationale:
      "A substantial platelet decrease during heparin therapy, especially with new thrombosis, suggests heparin-induced thrombocytopenia. HIT is an immune-mediated reaction that causes platelet activation and a high risk of arterial and venous thrombosis.",
    takeaway:
      "HIT causes falling platelets with paradoxical clot formation."
  },

  {
    id: "PERF-NGN-018",
    caseId: "PERF-NGN-CASE-009",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Heparin-Induced Thrombocytopenia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which actions should the nurse take for the patient with suspected heparin-induced thrombocytopenia? Select all that apply.",
    choices: [
      "Stop all heparin products",
      "Notify the provider immediately",
      "Anticipate a non-heparin anticoagulant",
      "Continue monitoring the platelet count",
      "Flush the intravenous catheter with heparin",
      "Administer low-molecular-weight heparin"
    ],
    answer: [
      "Stop all heparin products",
      "Notify the provider immediately",
      "Anticipate a non-heparin anticoagulant",
      "Continue monitoring the platelet count"
    ],
    rationale:
      "All forms of heparin, including heparin flushes and low-molecular-weight heparin, should be stopped when HIT is suspected. The provider should be notified, platelet trends monitored, and an alternative anticoagulant anticipated.",
    takeaway:
      "Suspected HIT means stop every source of heparin."
  },

  {
    id: "PERF-NGN-019",
    caseId: "PERF-NGN-CASE-010",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Warfarin-Associated Bleeding",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient taking warfarin reports weakness and black, tarry stools. The INR is 7.2 and the hemoglobin level has decreased. Which problem should the nurse prioritize?",
    choices: [
      "Active gastrointestinal bleeding",
      "Inadequate anticoagulation",
      "Chronic venous insufficiency",
      "Stable medication side effects"
    ],
    answer:
      "Active gastrointestinal bleeding",
    rationale:
      "Melena, a markedly elevated INR, weakness, and a falling hemoglobin level indicate significant gastrointestinal bleeding related to excessive anticoagulation.",
    takeaway:
      "High INR plus melena and falling hemoglobin indicates active bleeding."
  },

  {
    id: "PERF-NGN-020",
    caseId: "PERF-NGN-CASE-010",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Warfarin-Associated Bleeding",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which actions should the nurse anticipate for the patient with warfarin-associated gastrointestinal bleeding? Select all that apply.",
    choices: [
      "Hold warfarin",
      "Notify the provider",
      "Monitor vital signs and neurologic status",
      "Prepare to administer prescribed vitamin K",
      "Anticipate prothrombin complex concentrate for severe bleeding",
      "Administer the next dose of warfarin"
    ],
    answer: [
      "Hold warfarin",
      "Notify the provider",
      "Monitor vital signs and neurologic status",
      "Prepare to administer prescribed vitamin K",
      "Anticipate prothrombin complex concentrate for severe bleeding"
    ],
    rationale:
      "Warfarin should be held, the provider notified, and the patient closely monitored for hemodynamic and neurologic deterioration. Vitamin K reverses warfarin, and prothrombin complex concentrate may be used for rapid reversal during major bleeding.",
    takeaway:
      "Major warfarin bleeding requires the drug to be held and reversal therapy anticipated."
  },

  {
    id: "PERF-NGN-021",
    caseId: "PERF-NGN-CASE-011",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Raynaud Phenomenon",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient reports that the fingers become white, then blue, and finally red after exposure to cold. The episodes are painful and resolve after warming. Which condition should the nurse identify?",
    choices: [
      "Raynaud phenomenon",
      "Buerger disease",
      "Deep vein thrombosis",
      "Acute arterial embolism"
    ],
    answer:
      "Raynaud phenomenon",
    rationale:
      "Raynaud phenomenon causes episodic vasospasm of the small arteries, usually in the fingers or toes. The classic color sequence is white from ischemia, blue from deoxygenation, and red from reperfusion.",
    takeaway:
      "White-blue-red color changes triggered by cold suggest Raynaud phenomenon."
  },

  {
    id: "PERF-NGN-022",
    caseId: "PERF-NGN-CASE-011",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Raynaud Phenomenon",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which instructions should the nurse provide to the patient with Raynaud phenomenon? Select all that apply.",
    choices: [
      "Keep the hands and feet warm",
      "Avoid sudden temperature changes",
      "Stop smoking",
      "Limit caffeine if it triggers symptoms",
      "Use stress-reduction techniques",
      "Apply ice during an attack"
    ],
    answer: [
      "Keep the hands and feet warm",
      "Avoid sudden temperature changes",
      "Stop smoking",
      "Limit caffeine if it triggers symptoms",
      "Use stress-reduction techniques"
    ],
    rationale:
      "Cold, nicotine, caffeine, and stress can trigger vasospasm. Patients should protect the extremities from cold, avoid known triggers, and use stress-management techniques.",
    takeaway:
      "Raynaud management focuses on avoiding vasoconstriction and keeping extremities warm."
  },

  {
    id: "PERF-NGN-023",
    caseId: "PERF-NGN-CASE-012",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Buerger Disease",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
      "A young adult who uses tobacco has foot pain at rest, diminished distal pulses, cold sensitivity, and small ischemic ulcers on the toes. Which condition should the nurse suspect?",
    choices: [
      "Buerger disease",
      "Chronic venous insufficiency",
      "Varicose veins",
      "Primary hypertension"
    ],
    answer:
      "Buerger disease",
    rationale:
      "Buerger disease, or thromboangiitis obliterans, is strongly associated with tobacco use and causes inflammatory occlusion of small and medium arteries and veins. It can lead to ischemic pain, ulcers, and gangrene.",
    takeaway:
      "Tobacco use plus distal ischemia in a younger adult suggests Buerger disease."
  },

  {
    id: "PERF-NGN-024",
    caseId: "PERF-NGN-CASE-012",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Buerger Disease",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
      "Which interventions are most important for the patient with Buerger disease? Select all that apply.",
    choices: [
      "Stop all tobacco and nicotine use",
      "Protect the extremities from injury",
      "Avoid cold exposure",
      "Inspect the feet and hands daily",
      "Report signs of infection or worsening ischemia",
      "Continue nicotine replacement indefinitely"
    ],
    answer: [
      "Stop all tobacco and nicotine use",
      "Protect the extremities from injury",
      "Avoid cold exposure",
      "Inspect the feet and hands daily",
      "Report signs of infection or worsening ischemia"
    ],
    rationale:
      "Complete cessation of tobacco and nicotine is essential because continued exposure promotes disease progression. Extremities should be protected from trauma, cold, infection, and worsening ischemia.",
    takeaway:
      "The most important treatment for Buerger disease is complete nicotine cessation."
  },

  {
    id: "PERF-NGN-025",
    caseId: "PERF-NGN-CASE-013",
    patient: randomPatient(),
    topic: "NGN Perfusion Cases",
    subtopic: "Comprehensive Perfusion Prioritization",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "The nurse receives reports on four patients. Which patient should the nurse assess first?",
    choices: [
      "A patient receiving heparin who has sudden severe back pain, hypotension, and tachycardia",
      "A patient with chronic venous insufficiency who needs help applying compression stockings",
      "A patient with Raynaud phenomenon whose fingers became pale after holding a cold drink",
      "A patient with controlled hypertension requesting dietary teaching"
    ],
    answer:
      "A patient receiving heparin who has sudden severe back pain, hypotension, and tachycardia",
    rationale:
      "Sudden back pain, hypotension, and tachycardia in a patient receiving anticoagulation may indicate a retroperitoneal hemorrhage. This is a potentially life-threatening bleeding emergency requiring immediate assessment and intervention.",
    takeaway:
      "In an anticoagulated patient, sudden pain with shock signs may indicate internal hemorrhage."
  }
];
const perfusionMixedReviewQuestions = [

{
    id: "PERF-MIX-001",
    caseId: "PERF-MIX-CASE-001",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Hypertension",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which patient is experiencing a hypertensive emergency?",
    choices: [
        "BP 210/120 mm Hg with new confusion",
        "BP 188/108 mm Hg without symptoms",
        "BP 170/94 after exercise",
        "BP 162/88 during pain"
    ],
    answer:
        "BP 210/120 mm Hg with new confusion",
    rationale:
        "Hypertensive emergency requires severe hypertension with acute target-organ damage such as neurologic changes.",
    takeaway:
        "Organ damage—not just the BP—defines a hypertensive emergency."
},

{
    id: "PERF-MIX-002",
    caseId: "PERF-MIX-CASE-002",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "PAD",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is most concerning in a patient with peripheral arterial disease?",
    choices: [
        "Rest pain at night",
        "Hair loss on the legs",
        "Cool feet",
        "Delayed capillary refill"
    ],
    answer:
        "Rest pain at night",
    rationale:
        "Rest pain indicates severe arterial insufficiency and critical limb ischemia.",
    takeaway:
        "Intermittent claudication progresses to rest pain as PAD worsens."
},

{
    id: "PERF-MIX-003",
    caseId: "PERF-MIX-CASE-003",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "DVT",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which assessment findings support deep vein thrombosis? Select all that apply.",
    choices: [
        "Warm calf",
        "Unilateral swelling",
        "Tenderness",
        "Redness",
        "Strong pedal pulse",
        "Bilateral pitting edema"
    ],
    answer: [
        "Warm calf",
        "Unilateral swelling",
        "Tenderness",
        "Redness"
    ],
    rationale:
        "Classic DVT findings include warmth, unilateral swelling, redness, and tenderness.",
    takeaway:
        "Think unilateral warmth and swelling for DVT."
},

{
    id: "PERF-MIX-004",
    caseId: "PERF-MIX-CASE-004",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Pulmonary Embolism",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A patient with a known DVT suddenly develops dyspnea and chest pain. Which action should the nurse perform first?",
    choices: [
        "Apply oxygen",
        "Massage the calf",
        "Encourage coughing",
        "Obtain a weight"
    ],
    answer:
        "Apply oxygen",
    rationale:
        "Suspected pulmonary embolism requires immediate support of oxygenation.",
    takeaway:
        "ABCs always come first."
},

{
    id: "PERF-MIX-005",
    caseId: "PERF-MIX-CASE-005",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Heparin",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which laboratory value is most important while a patient receives an unfractionated heparin infusion?",
    choices: [
        "aPTT",
        "INR",
        "Potassium",
        "Hemoglobin A1C"
    ],
    answer:
        "aPTT",
    rationale:
        "aPTT is monitored to evaluate therapeutic anticoagulation with unfractionated heparin.",
    takeaway:
        "Heparin = aPTT."
},

{
    id: "PERF-MIX-006",
    caseId: "PERF-MIX-CASE-006",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Warfarin",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which laboratory value evaluates warfarin therapy?",
    choices: [
        "INR",
        "aPTT",
        "Troponin",
        "Platelet count"
    ],
    answer:
        "INR",
    rationale:
        "Warfarin therapy is monitored using the international normalized ratio (INR).",
    takeaway:
        "Warfarin = INR."
},

{
    id: "PERF-MIX-007",
    caseId: "PERF-MIX-CASE-007",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Acute Arterial Occlusion",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment finding indicates acute arterial occlusion?",
    choices: [
        "Sudden cold pulseless leg",
        "Warm swollen calf",
        "Brown ankle discoloration",
        "Gradual bilateral edema"
    ],
    answer:
        "Sudden cold pulseless leg",
    rationale:
        "Acute arterial occlusion produces sudden loss of perfusion and is a limb-threatening emergency.",
    takeaway:
        "Cold + pulseless + sudden = arterial emergency."
},

{
    id: "PERF-MIX-008",
    caseId: "PERF-MIX-CASE-008",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Venous Ulcers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are consistent with venous ulcers? Select all that apply.",
    choices: [
        "Medial malleolus",
        "Brown skin discoloration",
        "Moderate drainage",
        "Warm extremity",
        "Weak pedal pulses",
        "Pain relieved by elevation"
    ],
    answer: [
        "Medial malleolus",
        "Brown skin discoloration",
        "Moderate drainage",
        "Warm extremity",
        "Pain relieved by elevation"
    ],
    rationale:
        "Venous ulcers are warm, draining, and usually occur around the medial ankle with edema and hemosiderin staining.",
    takeaway:
        "Warm, wet, brown, and medial = venous ulcer."
},

{
    id: "PERF-MIX-009",
    caseId: "PERF-MIX-CASE-009",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Arterial Ulcers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are consistent with an arterial ulcer? Select all that apply.",
    choices: [
        "Punched-out wound edges",
        "Dry wound bed",
        "Ulcer on the toes",
        "Cool extremity",
        "Weak or absent pulses",
        "Heavy drainage"
    ],
    answer: [
        "Punched-out wound edges",
        "Dry wound bed",
        "Ulcer on the toes",
        "Cool extremity",
        "Weak or absent pulses"
    ],
    rationale:
        "Arterial ulcers are typically dry, painful, sharply defined, and located on distal areas such as the toes. Reduced blood flow causes cool skin and diminished pulses.",
    takeaway:
        "Dry, punched-out, distal, and pulseless indicates an arterial ulcer."
},

{
    id: "PERF-MIX-010",
    caseId: "PERF-MIX-CASE-010",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Compression Therapy",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which assessment should the nurse verify before applying compression therapy to a lower leg?",
    choices: [
        "Ankle-brachial index",
        "Serum sodium level",
        "Blood glucose level",
        "Respiratory rate"
    ],
    answer:
        "Ankle-brachial index",
    rationale:
        "The ankle-brachial index helps determine whether arterial blood flow is adequate for compression therapy. Compression can worsen ischemia when significant arterial disease is present.",
    takeaway:
        "Check arterial circulation before compression."
},

{
    id: "PERF-MIX-011",
    caseId: "PERF-MIX-CASE-011",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Chronic Venous Insufficiency",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse provide to a patient with chronic venous insufficiency? Select all that apply.",
    choices: [
        "Elevate the legs when resting",
        "Wear prescribed compression stockings",
        "Walk regularly",
        "Avoid prolonged standing",
        "Inspect the skin daily",
        "Keep the legs dependent while sleeping"
    ],
    answer: [
        "Elevate the legs when resting",
        "Wear prescribed compression stockings",
        "Walk regularly",
        "Avoid prolonged standing",
        "Inspect the skin daily"
    ],
    rationale:
        "Elevation, compression, walking, and avoiding prolonged dependency reduce venous pooling. Daily skin inspection helps detect breakdown early.",
    takeaway:
        "Venous disease improves with elevation, compression, movement, and skin care."
},

{
    id: "PERF-MIX-012",
    caseId: "PERF-MIX-CASE-012",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Peripheral Arterial Disease",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse include for a patient with peripheral arterial disease? Select all that apply.",
    choices: [
        "Stop smoking",
        "Follow a prescribed walking program",
        "Inspect the feet every day",
        "Wear well-fitting shoes",
        "Avoid direct heat on the feet",
        "Use tight elastic socks"
    ],
    answer: [
        "Stop smoking",
        "Follow a prescribed walking program",
        "Inspect the feet every day",
        "Wear well-fitting shoes",
        "Avoid direct heat on the feet"
    ],
    rationale:
        "Smoking cessation, exercise, foot protection, and avoiding thermal injury are important in PAD. Tight elastic garments can further restrict circulation.",
    takeaway:
        "Protect poorly perfused feet and reduce atherosclerotic risk."
},

{
    id: "PERF-MIX-013",
    caseId: "PERF-MIX-CASE-013",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Heparin-Induced Thrombocytopenia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological Therapies",
    question:
        "A patient's platelet count falls by more than 50% while receiving heparin. Which action should the nurse take first?",
    choices: [
        "Stop the heparin and notify the provider",
        "Administer the next dose early",
        "Apply sequential compression devices",
        "Encourage foods high in vitamin K"
    ],
    answer:
        "Stop the heparin and notify the provider",
    rationale:
        "A major platelet decrease during heparin therapy suggests heparin-induced thrombocytopenia. All heparin products should be stopped immediately.",
    takeaway:
        "Falling platelets on heparin may indicate HIT."
},

{
    id: "PERF-MIX-014",
    caseId: "PERF-MIX-CASE-014",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Anticoagulant Safety",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which safety measures are appropriate for a patient receiving anticoagulant therapy? Select all that apply.",
    choices: [
        "Use a soft-bristled toothbrush",
        "Use an electric razor",
        "Report black stools",
        "Avoid activities with a high risk of injury",
        "Check with the provider before taking NSAIDs",
        "Massage bruised areas"
    ],
    answer: [
        "Use a soft-bristled toothbrush",
        "Use an electric razor",
        "Report black stools",
        "Avoid activities with a high risk of injury",
        "Check with the provider before taking NSAIDs"
    ],
    rationale:
        "Bleeding precautions include minimizing trauma, avoiding medications that increase bleeding risk, and reporting signs of internal bleeding. Bruised areas should not be massaged.",
    takeaway:
        "Anticoagulant teaching focuses on preventing and recognizing bleeding."
},

{
    id: "PERF-MIX-015",
    caseId: "PERF-MIX-CASE-015",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Warfarin",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which statements by a patient taking warfarin indicate correct understanding? Select all that apply.",
    choices: [
        "I will keep my vitamin K intake consistent",
        "I will have my INR checked as ordered",
        "I will report unusual bleeding",
        "I will check before starting new medications",
        "I should avoid becoming pregnant while taking this medication",
        "I can double my dose if I miss one"
    ],
    answer: [
        "I will keep my vitamin K intake consistent",
        "I will have my INR checked as ordered",
        "I will report unusual bleeding",
        "I will check before starting new medications",
        "I should avoid becoming pregnant while taking this medication"
    ],
    rationale:
        "Warfarin requires consistent vitamin K intake, INR monitoring, bleeding precautions, medication-interaction awareness, and pregnancy avoidance. Missed doses should not be doubled unless specifically directed.",
    takeaway:
        "Warfarin safety depends on consistency, monitoring, and bleeding precautions."
},

{
    id: "PERF-MIX-016",
    caseId: "PERF-MIX-CASE-016",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Raynaud Phenomenon",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse provide to a patient with Raynaud phenomenon? Select all that apply.",
    choices: [
        "Keep the hands warm",
        "Avoid nicotine",
        "Reduce stress",
        "Avoid sudden temperature changes",
        "Limit caffeine if it triggers symptoms",
        "Place the hands in ice water during an attack"
    ],
    answer: [
        "Keep the hands warm",
        "Avoid nicotine",
        "Reduce stress",
        "Avoid sudden temperature changes",
        "Limit caffeine if it triggers symptoms"
    ],
    rationale:
        "Cold, stress, nicotine, and sometimes caffeine can trigger vasospasm. The patient should keep the extremities warm and avoid known triggers.",
    takeaway:
        "Prevent Raynaud attacks by avoiding vasoconstriction."
},

{
    id: "PERF-MIX-017",
    caseId: "PERF-MIX-CASE-017",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Buerger Disease",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which intervention is most important for a patient diagnosed with Buerger disease?",
    choices: [
        "Stop all tobacco and nicotine use",
        "Wear compression stockings daily",
        "Elevate the legs above the heart",
        "Apply heating pads to the feet"
    ],
    answer:
        "Stop all tobacco and nicotine use",
    rationale:
        "Buerger disease is strongly associated with tobacco and nicotine exposure. Complete cessation is essential to prevent progression, ischemic ulcers, gangrene, and possible amputation.",
    takeaway:
        "Complete nicotine cessation is the priority treatment for Buerger disease."
},

{
    id: "PERF-MIX-018",
    caseId: "PERF-MIX-CASE-018",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Antihypertensive Medications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which instructions should the nurse provide to a patient starting antihypertensive therapy? Select all that apply.",
    choices: [
        "Change positions slowly",
        "Monitor blood pressure as instructed",
        "Take the medication at the same time each day",
        "Do not stop the medication abruptly",
        "Report dizziness or fainting",
        "Double the next dose if one dose is missed"
    ],
    answer: [
        "Change positions slowly",
        "Monitor blood pressure as instructed",
        "Take the medication at the same time each day",
        "Do not stop the medication abruptly",
        "Report dizziness or fainting"
    ],
    rationale:
        "Antihypertensive medications can cause hypotension and orthostatic dizziness. Consistent dosing and blood-pressure monitoring are important, and medications should not be stopped abruptly. Missed doses should not be doubled unless specifically directed.",
    takeaway:
        "Antihypertensive safety includes adherence, monitoring, and fall prevention."
},

{
    id: "PERF-MIX-019",
    caseId: "PERF-MIX-CASE-019",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "ACE Inhibitors",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological Therapies",
    question:
        "A patient taking lisinopril develops swelling of the lips and tongue. Which action should the nurse take first?",
    choices: [
        "Stop the medication and obtain emergency assistance",
        "Offer the patient water",
        "Reassess the patient in 30 minutes",
        "Administer the next dose with food"
    ],
    answer:
        "Stop the medication and obtain emergency assistance",
    rationale:
        "Lip and tongue swelling suggests angioedema, a potentially life-threatening adverse effect of ACE inhibitors that can obstruct the airway.",
    takeaway:
        "ACE inhibitor plus facial swelling means possible airway emergency."
},

{
    id: "PERF-MIX-020",
    caseId: "PERF-MIX-CASE-020",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Beta Blockers",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological Therapies",
    question:
        "Which assessment should the nurse complete before administering metoprolol?",
    choices: [
        "Check blood pressure and apical pulse",
        "Check bowel sounds",
        "Measure abdominal girth",
        "Assess pupil size"
    ],
    answer:
        "Check blood pressure and apical pulse",
    rationale:
        "Beta blockers reduce heart rate and blood pressure. The nurse should assess both before administration and follow prescribed hold parameters.",
    takeaway:
        "Before a beta blocker, check pulse and blood pressure."
},

{
    id: "PERF-MIX-021",
    caseId: "PERF-MIX-CASE-021",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Hypertensive Crisis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A patient receiving an intravenous antihypertensive infusion for hypertensive emergency becomes confused and has a sudden decrease in blood pressure. Which action should the nurse take first?",
    choices: [
        "Reduce or stop the infusion according to protocol and notify the provider",
        "Assist the patient to ambulate",
        "Place the patient in a chair",
        "Administer the next oral antihypertensive dose"
    ],
    answer:
        "Reduce or stop the infusion according to protocol and notify the provider",
    rationale:
        "A rapid blood-pressure decrease can reduce cerebral perfusion and cause neurologic deterioration. The infusion should be adjusted immediately according to protocol while the provider is notified.",
    takeaway:
        "Blood pressure must be lowered gradually during hypertensive emergency."
},

{
    id: "PERF-MIX-022",
    caseId: "PERF-MIX-CASE-022",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Delegation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Management of Care",
    question:
        "Which task can the registered nurse delegate to an experienced assistive personnel?",
    choices: [
        "Measure and record bilateral calf circumferences",
        "Assess a patient for signs of pulmonary embolism",
        "Teach a patient how to take warfarin",
        "Evaluate pedal pulses in a patient with acute leg pain"
    ],
    answer:
        "Measure and record bilateral calf circumferences",
    rationale:
        "Assistive personnel may collect routine, objective data such as limb measurements. Assessment, teaching, and evaluation remain the responsibility of the registered nurse.",
    takeaway:
        "Delegate routine data collection, not assessment or teaching."
},

{
    id: "PERF-MIX-023",
    caseId: "PERF-MIX-CASE-023",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Postoperative Vascular Care",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which finding after lower-extremity vascular surgery requires immediate intervention?",
    choices: [
        "The operative foot is cool and the pedal pulse is absent",
        "The patient reports incisional pain rated 4 out of 10",
        "A small amount of drainage is present on the dressing",
        "The patient requests assistance repositioning"
    ],
    answer:
        "The operative foot is cool and the pedal pulse is absent",
    rationale:
        "A cool, pulseless extremity after vascular surgery may indicate graft occlusion or impaired arterial perfusion and requires immediate intervention.",
    takeaway:
        "Loss of pulse after vascular surgery is a limb-threatening emergency."
},

{
    id: "PERF-MIX-024",
    caseId: "PERF-MIX-CASE-024",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Comprehensive SATA",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings require immediate nursing follow-up? Select all that apply.",
    choices: [
        "Sudden dyspnea in a patient with DVT",
        "A cold pulseless foot",
        "New confusion with severe hypertension",
        "A platelet count decrease greater than 50% while receiving heparin",
        "Black tarry stools while taking warfarin",
        "Brown discoloration around the ankles in chronic venous insufficiency"
    ],
    answer: [
        "Sudden dyspnea in a patient with DVT",
        "A cold pulseless foot",
        "New confusion with severe hypertension",
        "A platelet count decrease greater than 50% while receiving heparin",
        "Black tarry stools while taking warfarin"
    ],
    rationale:
        "These findings suggest pulmonary embolism, acute arterial occlusion, hypertensive emergency, heparin-induced thrombocytopenia, or gastrointestinal bleeding. Chronic brown ankle discoloration is expected with venous insufficiency.",
    takeaway:
        "Prioritize acute respiratory compromise, ischemia, organ damage, thrombosis, and bleeding."
},

{
    id: "PERF-MIX-025",
    caseId: "PERF-MIX-CASE-025",
    patient: randomPatient(),
    topic: "Perfusion Mixed Review",
    subtopic: "Comprehensive Prioritization",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives reports on four patients. Which patient should be assessed first?",
    choices: [
        "A patient with sudden leg pain, pallor, numbness, and an absent pedal pulse",
        "A patient with chronic venous insufficiency and mild ankle edema",
        "A patient with controlled hypertension requesting discharge teaching",
        "A patient with stable varicose veins reporting aching after standing"
    ],
    answer:
        "A patient with sudden leg pain, pallor, numbness, and an absent pedal pulse",
    rationale:
        "Sudden pain, pallor, paresthesia, and pulselessness indicate acute arterial occlusion. This is a limb-threatening emergency requiring immediate assessment and vascular intervention.",
    takeaway:
        "Acute loss of arterial perfusion takes priority over stable chronic conditions."
}
];
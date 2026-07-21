const vascularUlcerQuestions = [
  {
    id: "PERF-VU-001",
    caseId: "PERF-VU-CASE-001",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Pathophysiology",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which condition is the primary cause of an arterial ulcer?",
    choices: [
      "Inadequate arterial blood flow to the tissue",
      "Incompetent venous valves causing blood pooling",
      "Excessive lymphatic drainage",
      "Increased capillary permeability caused by allergy"
    ],
    answer:
      "Inadequate arterial blood flow to the tissue",
    rationale:
      "Arterial ulcers develop when reduced arterial circulation deprives the tissue of oxygen and nutrients. This ischemia causes tissue breakdown, delayed healing, and possible necrosis.",
    takeaway:
      "Arterial ulcers result from tissue ischemia caused by poor arterial perfusion."
  },

  {
    id: "PERF-VU-002",
    caseId: "PERF-VU-CASE-002",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors increase a patient's risk for developing an arterial ulcer? Select all that apply.",
    choices: [
      "Cigarette smoking",
      "Diabetes mellitus",
      "Hypertension",
      "Hyperlipidemia",
      "Peripheral arterial disease",
      "Regular walking exercise"
    ],
    answer: [
      "Cigarette smoking",
      "Diabetes mellitus",
      "Hypertension",
      "Hyperlipidemia",
      "Peripheral arterial disease"
    ],
    rationale:
      "Smoking, diabetes, hypertension, hyperlipidemia, and peripheral arterial disease contribute to atherosclerosis and reduced arterial circulation. Regular walking can improve collateral circulation when prescribed appropriately.",
    takeaway:
      "Arterial-ulcer risk factors are the same major factors that contribute to atherosclerosis."
  },

  {
    id: "PERF-VU-003",
    caseId: "PERF-VU-CASE-003",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Location",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
      "Where should the nurse expect to find an arterial ulcer?",
    choices: [
      "On the toes, heels, or lateral ankle",
      "Near the medial malleolus",
      "Across the upper thigh",
      "In the antecubital space"
    ],
    answer:
      "On the toes, heels, or lateral ankle",
    rationale:
      "Arterial ulcers commonly occur on distal areas with limited blood supply, including the toes, heels, lateral ankle, and pressure points of the foot.",
    takeaway:
      "Arterial ulcers usually occur distally on the toes, heels, or lateral ankle."
  },

  {
    id: "PERF-VU-004",
    caseId: "PERF-VU-CASE-004",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Appearance",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which wound assessment finding is most consistent with an arterial ulcer?",
    choices: [
      "A deep, punched-out ulcer with a pale wound bed and minimal drainage",
      "A shallow, irregular ulcer with heavy drainage",
      "A moist ulcer surrounded by brown ankle discoloration",
      "A painless ulcer with significant lower-leg edema"
    ],
    answer:
      "A deep, punched-out ulcer with a pale wound bed and minimal drainage",
    rationale:
      "Arterial ulcers are often deep with clearly defined, punched-out borders. The wound bed may be pale, dry, or necrotic because of poor blood flow, and drainage is usually minimal.",
    takeaway:
      "Arterial ulcers are typically deep, dry, punched out, and poorly perfused."
  },

  {
    id: "PERF-VU-005",
    caseId: "PERF-VU-CASE-005",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse expect in a patient with an arterial ulcer? Select all that apply.",
    choices: [
      "Cool skin",
      "Diminished or absent pedal pulses",
      "Pain that worsens with leg elevation",
      "Pale or cyanotic extremity",
      "Delayed capillary refill",
      "Warm skin with dependent edema"
    ],
    answer: [
      "Cool skin",
      "Diminished or absent pedal pulses",
      "Pain that worsens with leg elevation",
      "Pale or cyanotic extremity",
      "Delayed capillary refill"
    ],
    rationale:
      "Arterial insufficiency causes coolness, pallor, delayed capillary refill, diminished pulses, and ischemic pain. Elevation can worsen symptoms because it further decreases arterial blood flow to the distal extremity.",
    takeaway:
      "Arterial disease causes coolness, pallor, weak pulses, and pain with elevation."
  },

  {
    id: "PERF-VU-006",
    caseId: "PERF-VU-CASE-006",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Pain",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient with an arterial foot ulcer reports severe pain when lying in bed. Which position is most likely to reduce the pain?",
    choices: [
      "Place the affected leg in a dependent position",
      "Elevate the affected leg above the heart",
      "Place the patient in Trendelenburg position",
      "Apply compression stockings and elevate the leg"
    ],
    answer:
      "Place the affected leg in a dependent position",
    rationale:
      "Placing the leg in a dependent position uses gravity to improve arterial blood flow to the foot. Elevation may worsen ischemic pain by further reducing distal perfusion.",
    takeaway:
      "Arterial pain often improves when the extremity is placed in a dependent position."
  },

  {
    id: "PERF-VU-007",
    caseId: "PERF-VU-CASE-007",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "The nurse assesses a patient with a chronic toe ulcer. Which finding requires immediate action?",
    choices: [
      "The foot is suddenly cold, pale, and pulseless",
      "The ulcer has a small amount of dry drainage",
      "The patient reports mild discomfort while walking",
      "The toenails are thickened"
    ],
    answer:
      "The foot is suddenly cold, pale, and pulseless",
    rationale:
      "A sudden cold, pale, pulseless extremity suggests acute arterial occlusion and threatened limb viability. This is an emergency requiring immediate provider notification and rapid intervention.",
    takeaway:
      "Sudden pallor, coldness, and loss of pulses indicate an arterial emergency."
  },

  {
    id: "PERF-VU-008",
    caseId: "PERF-VU-CASE-008",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions should the nurse include in the plan of care for a patient with an arterial ulcer? Select all that apply.",
    choices: [
      "Protect the extremity from injury",
      "Keep the feet clean and dry",
      "Avoid direct heat on the affected extremity",
      "Encourage smoking cessation",
      "Administer prescribed antiplatelet therapy",
      "Apply high-strength compression wraps"
    ],
    answer: [
      "Protect the extremity from injury",
      "Keep the feet clean and dry",
      "Avoid direct heat on the affected extremity",
      "Encourage smoking cessation",
      "Administer prescribed antiplatelet therapy"
    ],
    rationale:
      "Arterial-ulcer care focuses on preventing injury, protecting the skin, improving circulation, controlling atherosclerotic risk factors, and administering prescribed vascular medications. Direct heat can cause burns in poorly perfused tissue. High-strength compression may further reduce arterial blood flow and is generally contraindicated in significant arterial disease.",
    takeaway:
      "Protect ischemic tissue and improve arterial circulation; do not apply strong compression."
  },

   {
    id: "PERF-VU-009",
    caseId: "PERF-VU-CASE-009",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Pathophysiology",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which condition is the primary cause of a venous ulcer?",
    choices: [
      "Chronic venous hypertension caused by incompetent venous valves",
      "Complete arterial obstruction caused by atherosclerosis",
      "Acute nerve compression in the lower extremity",
      "Decreased lymphatic fluid production"
    ],
    answer:
      "Chronic venous hypertension caused by incompetent venous valves",
    rationale:
      "Venous ulcers develop when incompetent valves allow blood to pool in the lower extremities. Persistent venous hypertension causes edema, inflammation, tissue damage, and eventual ulcer formation.",
    takeaway:
      "Venous ulcers result from chronic venous hypertension and blood pooling."
  },

  {
    id: "PERF-VU-010",
    caseId: "PERF-VU-CASE-010",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Location",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
      "Where should the nurse expect to find a venous ulcer?",
    choices: [
      "Near the medial malleolus",
      "On the tips of the toes",
      "On the lateral edge of the foot",
      "Over the heel only"
    ],
    answer:
      "Near the medial malleolus",
    rationale:
      "Venous ulcers most commonly occur in the gaiter area of the lower leg, especially near the medial malleolus, where venous pressure is greatest.",
    takeaway:
      "Venous ulcers commonly occur near the medial ankle."
  },

  {
    id: "PERF-VU-011",
    caseId: "PERF-VU-CASE-011",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Appearance",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which wound assessment finding is most consistent with a venous ulcer?",
    choices: [
      "A shallow ulcer with irregular borders and moderate drainage",
      "A deep, dry ulcer with sharply defined punched-out borders",
      "A black, necrotic ulcer on the tip of a toe",
      "A pale ulcer with no surrounding edema"
    ],
    answer:
      "A shallow ulcer with irregular borders and moderate drainage",
    rationale:
      "Venous ulcers are typically shallow, irregularly shaped, moist, and associated with moderate to heavy drainage. Arterial ulcers are more likely to be deep, dry, pale, and punched out.",
    takeaway:
      "Venous ulcers are usually shallow, irregular, moist, and draining."
  },

  {
    id: "PERF-VU-012",
    caseId: "PERF-VU-CASE-012",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse expect in a patient with a venous ulcer? Select all that apply.",
    choices: [
      "Lower-leg edema",
      "Brown discoloration around the ankle",
      "Warm skin",
      "Palpable pedal pulses",
      "Aching that improves with elevation",
      "Cool, pale skin with absent pulses"
    ],
    answer: [
      "Lower-leg edema",
      "Brown discoloration around the ankle",
      "Warm skin",
      "Palpable pedal pulses",
      "Aching that improves with elevation"
    ],
    rationale:
      "Venous disease commonly causes edema, warmth, hemosiderin staining, aching, and intact pulses. Elevation decreases venous pressure and often relieves discomfort.",
    takeaway:
      "Venous ulcers are associated with warmth, edema, brown staining, and intact pulses."
  },

  {
    id: "PERF-VU-013",
    caseId: "PERF-VU-CASE-013",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Pain",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which intervention is most likely to relieve aching discomfort caused by a venous leg ulcer?",
    choices: [
      "Elevate the leg above heart level",
      "Place the leg in a dependent position",
      "Apply direct heat to the ulcer",
      "Keep the patient on complete bed rest"
    ],
    answer:
      "Elevate the leg above heart level",
    rationale:
      "Elevation decreases venous pressure and promotes venous return, reducing edema and aching. A dependent position increases venous pooling and may worsen symptoms.",
    takeaway:
      "Venous discomfort usually improves with leg elevation."
  },

  {
    id: "PERF-VU-014",
    caseId: "PERF-VU-CASE-014",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Versus Venous Ulcers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "The nurse assesses a patient with a lower-extremity ulcer. Which finding most strongly suggests an arterial rather than venous ulcer?",
    choices: [
      "The ulcer is located on a toe and has punched-out borders",
      "The ulcer is located near the medial ankle",
      "The wound has heavy drainage and irregular borders",
      "The surrounding skin is warm, edematous, and brown"
    ],
    answer:
      "The ulcer is located on a toe and has punched-out borders",
    rationale:
      "Arterial ulcers typically occur on distal areas such as the toes and have sharply defined, punched-out borders. Venous ulcers are more commonly found near the medial ankle and are shallow, irregular, and draining.",
    takeaway:
      "Toe location and punched-out borders indicate an arterial ulcer."
  },

  {
    id: "PERF-VU-015",
    caseId: "PERF-VU-CASE-015",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Versus Venous Ulcers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are characteristic of arterial ulcers? Select all that apply.",
    choices: [
      "Minimal drainage",
      "Punched-out borders",
      "Cool surrounding skin",
      "Diminished pedal pulses",
      "Pain that worsens with elevation",
      "Brown discoloration with lower-leg edema"
    ],
    answer: [
      "Minimal drainage",
      "Punched-out borders",
      "Cool surrounding skin",
      "Diminished pedal pulses",
      "Pain that worsens with elevation"
    ],
    rationale:
      "Arterial ulcers are caused by ischemia and are commonly dry, deep, punched out, painful, and associated with cool skin and weak pulses. Brown discoloration and edema are more typical of venous disease.",
    takeaway:
      "Arterial ulcers are dry, punched out, painful, cool, and associated with weak pulses."
  },

  {
    id: "PERF-VU-016",
    caseId: "PERF-VU-CASE-016",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Versus Venous Ulcers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings are characteristic of venous ulcers? Select all that apply.",
    choices: [
      "Shallow wound",
      "Irregular borders",
      "Moderate to heavy drainage",
      "Edema of the lower leg",
      "Brown hemosiderin staining",
      "Absent pedal pulses"
    ],
    answer: [
      "Shallow wound",
      "Irregular borders",
      "Moderate to heavy drainage",
      "Edema of the lower leg",
      "Brown hemosiderin staining"
    ],
    rationale:
      "Venous ulcers are usually shallow, irregular, moist, and draining. They are commonly associated with edema, warmth, and hemosiderin staining. Pedal pulses are usually present unless arterial disease is also present.",
    takeaway:
      "Venous ulcers are shallow, irregular, draining, swollen, and surrounded by brown discoloration."
  },

   {
    id: "PERF-VU-017",
    caseId: "PERF-VU-CASE-017",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "ABI Before Compression",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Before applying compression therapy to a patient with a lower-extremity ulcer, which assessment is most important?",
    choices: [
      "Ankle-brachial index",
      "Pupil response",
      "Bowel sounds",
      "Glasgow Coma Scale score"
    ],
    answer:
      "Ankle-brachial index",
    rationale:
      "The ankle-brachial index helps determine whether adequate arterial circulation is present. Significant arterial insufficiency can make compression unsafe because compression may further reduce blood flow.",
    takeaway:
      "Confirm adequate arterial perfusion before applying compression."
  },

  {
    id: "PERF-VU-018",
    caseId: "PERF-VU-CASE-018",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Compression Contraindication",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which patient should the nurse question a prescription for high-strength compression therapy?",
    choices: [
      "A patient with absent pedal pulses and a cool, pale foot",
      "A patient with a shallow medial ankle ulcer and edema",
      "A patient with brown ankle discoloration and palpable pulses",
      "A patient whose leg aching improves with elevation"
    ],
    answer:
      "A patient with absent pedal pulses and a cool, pale foot",
    rationale:
      "Absent pulses, pallor, and coolness suggest significant arterial insufficiency. Strong compression could further impair arterial flow and threaten tissue viability.",
    takeaway:
      "Do not apply strong compression when arterial circulation is severely impaired."
  },

  {
    id: "PERF-VU-019",
    caseId: "PERF-VU-CASE-019",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Venous Ulcer Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions should the nurse include in the plan of care for a patient with a venous leg ulcer? Select all that apply.",
    choices: [
      "Elevate the legs when resting",
      "Apply prescribed compression after arterial flow is confirmed",
      "Encourage regular walking",
      "Perform wound care as prescribed",
      "Inspect the skin daily",
      "Keep the legs dependent throughout the day"
    ],
    answer: [
      "Elevate the legs when resting",
      "Apply prescribed compression after arterial flow is confirmed",
      "Encourage regular walking",
      "Perform wound care as prescribed",
      "Inspect the skin daily"
    ],
    rationale:
      "Venous-ulcer care focuses on reducing venous hypertension and edema, promoting venous return, protecting the skin, and supporting wound healing. Keeping the legs dependent increases venous pooling.",
    takeaway:
      "Venous ulcers require compression, elevation, movement, skin care, and wound care."
  },

  {
    id: "PERF-VU-020",
    caseId: "PERF-VU-CASE-020",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Arterial Ulcer Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse provide to a patient with an arterial foot ulcer? Select all that apply.",
    choices: [
      "Stop smoking",
      "Inspect the feet every day",
      "Wear properly fitting shoes",
      "Avoid heating pads on the feet",
      "Manage blood glucose and blood pressure",
      "Walk barefoot inside the home"
    ],
    answer: [
      "Stop smoking",
      "Inspect the feet every day",
      "Wear properly fitting shoes",
      "Avoid heating pads on the feet",
      "Manage blood glucose and blood pressure"
    ],
    rationale:
      "Smoking cessation, daily inspection, protective footwear, avoidance of direct heat, and control of vascular risk factors reduce tissue injury and support arterial perfusion. Walking barefoot increases the risk of unnoticed trauma.",
    takeaway:
      "Protect ischemic feet and control modifiable vascular risk factors."
  },

  {
    id: "PERF-VU-021",
    caseId: "PERF-VU-CASE-021",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Wound Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
      "Which finding in a patient with a vascular ulcer requires prompt provider notification?",
    choices: [
      "Increasing redness, warmth, drainage, and fever",
      "Stable brown discoloration around the ankle",
      "Mild aching that improves with elevation",
      "A small amount of unchanged serous drainage"
    ],
    answer:
      "Increasing redness, warmth, drainage, and fever",
    rationale:
      "Increasing erythema, warmth, drainage, and fever suggest wound infection. Patients with impaired circulation can develop rapidly worsening infection and delayed healing.",
    takeaway:
      "New systemic and local signs of infection require prompt action."
  },

  {
    id: "PERF-VU-022",
    caseId: "PERF-VU-CASE-022",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with a toe ulcer whose foot is newly pale, cold, and pulseless",
      "A patient with a venous ulcer requesting assistance with leg elevation",
      "A patient with chronic brown ankle discoloration",
      "A patient with a healing ulcer requesting a dressing change"
    ],
    answer:
      "A patient with a toe ulcer whose foot is newly pale, cold, and pulseless",
    rationale:
      "A newly pale, cold, pulseless foot suggests acute arterial occlusion and threatened limb viability. This patient requires immediate assessment and emergency intervention.",
    takeaway:
      "Acute loss of arterial perfusion takes priority over chronic wound-care needs."
  },

  {
    id: "PERF-VU-023",
    caseId: "PERF-VU-CASE-023",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "Comprehensive Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statements accurately compare arterial and venous ulcers? Select all that apply.",
    choices: [
      "Arterial ulcers are commonly located on the toes or lateral ankle",
      "Venous ulcers are commonly located near the medial ankle",
      "Arterial ulcers often have minimal drainage",
      "Venous ulcers often have irregular borders and moderate drainage",
      "Arterial pain may improve when the leg is dependent",
      "Venous pain usually worsens with elevation"
    ],
    answer: [
      "Arterial ulcers are commonly located on the toes or lateral ankle",
      "Venous ulcers are commonly located near the medial ankle",
      "Arterial ulcers often have minimal drainage",
      "Venous ulcers often have irregular borders and moderate drainage",
      "Arterial pain may improve when the leg is dependent"
    ],
    rationale:
      "Arterial ulcers are distal, dry, painful, and associated with poor pulses. Venous ulcers are typically medial, moist, irregular, edematous, and often improve with elevation.",
    takeaway:
      "Location, drainage, pulse quality, skin temperature, and response to elevation distinguish ulcer types."
  },

  {
    id: "PERF-VU-024",
    caseId: "PERF-VU-CASE-024",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "NGN Arterial Ulcer Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient with peripheral arterial disease has a painful black ulcer on the great toe. The foot is cool, pedal pulses are absent, and capillary refill is delayed. Which action should the nurse take?",
    choices: [
      "Protect the foot, keep the leg dependent as prescribed, and notify the provider",
      "Apply high-strength compression and elevate the leg",
      "Massage the foot vigorously to increase circulation",
      "Apply a heating pad directly to the foot"
    ],
    answer:
      "Protect the foot, keep the leg dependent as prescribed, and notify the provider",
    rationale:
      "The findings indicate severe arterial insufficiency. The extremity should be protected from injury, circulation should not be further reduced by compression or elevation, and the provider should be notified for vascular evaluation.",
    takeaway:
      "Severe arterial ulcers require protection, perfusion support, and prompt vascular evaluation."
  },

  {
    id: "PERF-VU-025",
    caseId: "PERF-VU-CASE-025",
    patient: randomPatient(),
    topic: "Vascular Ulcers",
    subtopic: "NGN Venous Ulcer Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
      "A patient has a shallow, heavily draining ulcer near the medial ankle. The lower leg is warm and edematous with brown discoloration, and pedal pulses are palpable. Which intervention is most appropriate after adequate arterial circulation is confirmed?",
    choices: [
      "Apply prescribed compression, elevate the leg, and encourage walking",
      "Keep the leg dependent and avoid activity",
      "Apply direct heat and massage the ulcer",
      "Use high-strength compression without assessing arterial flow"
    ],
    answer:
      "Apply prescribed compression, elevate the leg, and encourage walking",
    rationale:
      "The findings are consistent with a venous ulcer. Compression, elevation, calf-muscle activity, and wound care reduce venous hypertension and promote healing after arterial circulation has been confirmed.",
    takeaway:
      "Venous ulcer care centers on compression, elevation, walking, and wound management."
  }
];
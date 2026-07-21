const buergerRaynaudQuestions = [
  {
    id: "PERF-BR-001",
    caseId: "PERF-BR-CASE-001",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Buerger Disease",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes Buerger disease?",
    choices: [
      "An inflammatory disorder that causes thrombosis in small and medium arteries and veins",
      "A disorder caused by failure of the venous valves",
      "A bacterial infection of the arterial wall",
      "A congenital absence of peripheral arteries"
    ],
    answer:
      "An inflammatory disorder that causes thrombosis in small and medium arteries and veins",
    rationale:
      "Buerger disease, also called thromboangiitis obliterans, is a nonatherosclerotic inflammatory disorder that causes segmental thrombosis and impaired circulation.",
    takeaway:
      "Buerger disease causes inflammatory vessel occlusion."
  },
  {
    id: "PERF-BR-002",
    caseId: "PERF-BR-CASE-002",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Buerger Disease Risk Factors",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which patient has the greatest risk for developing Buerger disease?",
    choices: [
      "A 35-year-old who smokes two packs of cigarettes daily",
      "A 70-year-old who follows a low-fat diet",
      "A 25-year-old who exercises regularly",
      "A 60-year-old with seasonal allergies"
    ],
    answer:
      "A 35-year-old who smokes two packs of cigarettes daily",
    rationale:
      "Buerger disease is strongly associated with tobacco and nicotine exposure and commonly affects younger adults who smoke.",
    takeaway:
      "Tobacco exposure is the major risk factor for Buerger disease."
  },
  {
    id: "PERF-BR-003",
    caseId: "PERF-BR-CASE-003",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Buerger Disease Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which findings should the nurse expect in a patient with Buerger disease? Select all that apply.",
    choices: [
      "Intermittent claudication of the feet or hands",
      "Rest pain in the fingers or toes",
      "Ischemic ulcers",
      "Diminished peripheral pulses",
      "Cold sensitivity",
      "Strong bounding distal pulses"
    ],
    answer: [
      "Intermittent claudication of the feet or hands",
      "Rest pain in the fingers or toes",
      "Ischemic ulcers",
      "Diminished peripheral pulses",
      "Cold sensitivity"
    ],
    rationale:
      "Vessel inflammation and thrombosis reduce distal circulation, producing claudication, rest pain, ulceration, weak pulses, and sensitivity to cold.",
    takeaway:
      "Buerger disease causes distal ischemic symptoms in the hands and feet."
  },
  {
    id: "PERF-BR-004",
    caseId: "PERF-BR-CASE-004",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Smoking Cessation",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instruction is the most important for a patient diagnosed with Buerger disease?",
    choices: [
      "Stop all tobacco and nicotine use completely",
      "Reduce smoking to five cigarettes per day",
      "Switch from cigarettes to nicotine vaping",
      "Use chewing tobacco instead of smoking"
    ],
    answer:
      "Stop all tobacco and nicotine use completely",
    rationale:
      "Complete elimination of tobacco and nicotine is essential. Continued exposure causes disease progression and may lead to gangrene and amputation.",
    takeaway:
      "Complete nicotine cessation is the only intervention proven to stop progression."
  },
  {
    id: "PERF-BR-005",
    caseId: "PERF-BR-CASE-005",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Nicotine Exposure",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which statement by a patient with Buerger disease requires further teaching?",
    choices: [
      "I can use a nicotine patch as long as I stop smoking cigarettes",
      "I should avoid secondhand smoke",
      "I need to inspect my hands and feet daily",
      "I should protect my extremities from cold temperatures"
    ],
    answer:
      "I can use a nicotine patch as long as I stop smoking cigarettes",
    rationale:
      "Nicotine in any form may cause vasoconstriction and contribute to disease progression. Nicotine replacement may be contraindicated unless specifically directed by the provider.",
    takeaway:
      "Avoid nicotine from cigarettes, vaping, chewing tobacco, and replacement products unless approved."
  },
  {
    id: "PERF-BR-006",
    caseId: "PERF-BR-CASE-006",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Extremity Protection",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include for a patient with Buerger disease? Select all that apply.",
    choices: [
      "Inspect the hands and feet daily",
      "Wear warm protective clothing",
      "Avoid tight shoes and restrictive clothing",
      "Treat minor injuries promptly",
      "Avoid direct heating pads",
      "Walk barefoot to improve circulation"
    ],
    answer: [
      "Inspect the hands and feet daily",
      "Wear warm protective clothing",
      "Avoid tight shoes and restrictive clothing",
      "Treat minor injuries promptly",
      "Avoid direct heating pads"
    ],
    rationale:
      "Patients should prevent injury and cold exposure because impaired circulation delays healing. Direct heat may cause burns to poorly perfused tissue.",
    takeaway:
      "Protect ischemic extremities from cold, pressure, burns, and injury."
  },
  {
    id: "PERF-BR-007",
    caseId: "PERF-BR-CASE-007",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding in a patient with Buerger disease requires immediate notification of the provider?",
    choices: [
      "A blackened toe with absent sensation",
      "Mild coldness of the fingertips",
      "Occasional fatigue after walking",
      "Dry skin on the lower legs"
    ],
    answer:
      "A blackened toe with absent sensation",
    rationale:
      "Black tissue and loss of sensation indicate severe ischemia, necrosis, or gangrene and may require urgent surgical evaluation.",
    takeaway:
      "Necrosis and gangrene are limb-threatening complications."
  },
  {
    id: "PERF-BR-008",
    caseId: "PERF-BR-CASE-008",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Buerger Disease Treatment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which interventions may be included in the care of a patient with Buerger disease? Select all that apply.",
    choices: [
      "Complete tobacco cessation",
      "Vasodilator therapy",
      "Pain management",
      "Wound care",
      "Protection from cold",
      "Routine compression of ischemic digits"
    ],
    answer: [
      "Complete tobacco cessation",
      "Vasodilator therapy",
      "Pain management",
      "Wound care",
      "Protection from cold"
    ],
    rationale:
      "Care focuses on stopping tobacco exposure, improving circulation, managing pain, treating wounds, and preventing additional vasoconstriction or injury.",
    takeaway:
      "Treatment protects circulation and prevents tissue loss."
  },
  {
    id: "PERF-BR-009",
    caseId: "PERF-BR-CASE-009",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Raynaud Phenomenon",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes Raynaud phenomenon?",
    choices: [
      "Episodic vasospasm of the small arteries of the fingers or toes",
      "Permanent obstruction of a major leg artery",
      "Failure of venous valves in the lower extremities",
      "Inflammation caused by a bacterial infection"
    ],
    answer:
      "Episodic vasospasm of the small arteries of the fingers or toes",
    rationale:
      "Raynaud phenomenon causes transient vasospasm of the digital arteries, usually triggered by cold exposure or emotional stress.",
    takeaway:
      "Raynaud phenomenon is reversible digital vasospasm."
  },
  {
    id: "PERF-BR-010",
    caseId: "PERF-BR-CASE-010",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Raynaud Triggers",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which factors can trigger a Raynaud episode? Select all that apply.",
    choices: [
      "Cold exposure",
      "Emotional stress",
      "Nicotine use",
      "Caffeine",
      "Vasoconstricting medications",
      "Warm water immersion"
    ],
    answer: [
      "Cold exposure",
      "Emotional stress",
      "Nicotine use",
      "Caffeine",
      "Vasoconstricting medications"
    ],
    rationale:
      "Cold, stress, nicotine, caffeine, and medications that constrict blood vessels can trigger digital vasospasm.",
    takeaway:
      "Avoid cold and substances that cause vasoconstriction."
  },
  {
    id: "PERF-BR-011",
    caseId: "PERF-BR-CASE-011",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Color Changes",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which sequence of color changes is classically associated with a Raynaud episode?",
    choices: [
      "White, blue, then red",
      "Red, yellow, then black",
      "Blue, green, then white",
      "Purple, orange, then pink"
    ],
    answer:
      "White, blue, then red",
    rationale:
      "Vasospasm initially causes pallor, reduced oxygen causes cyanosis, and reperfusion causes redness.",
    takeaway:
      "Raynaud color sequence: white, blue, red."
  },
  {
    id: "PERF-BR-012",
    caseId: "PERF-BR-CASE-012",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Raynaud Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which manifestations may occur during a Raynaud episode? Select all that apply.",
    choices: [
      "Digital pallor",
      "Cyanosis",
      "Numbness",
      "Tingling",
      "Burning pain during reperfusion",
      "Persistent generalized edema"
    ],
    answer: [
      "Digital pallor",
      "Cyanosis",
      "Numbness",
      "Tingling",
      "Burning pain during reperfusion"
    ],
    rationale:
      "Reduced digital blood flow causes pallor, cyanosis, numbness, and tingling. Reperfusion may cause redness, throbbing, or burning pain.",
    takeaway:
      "Raynaud episodes cause color, sensation, and pain changes."
  },
  {
    id: "PERF-BR-013",
    caseId: "PERF-BR-CASE-013",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Primary Raynaud",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
      "Which statement best describes primary Raynaud phenomenon?",
    choices: [
      "It occurs without an associated underlying disease",
      "It is always caused by systemic sclerosis",
      "It commonly causes severe tissue necrosis",
      "It results from an arterial embolus"
    ],
    answer:
      "It occurs without an associated underlying disease",
    rationale:
      "Primary Raynaud phenomenon occurs independently and is generally milder than secondary Raynaud phenomenon.",
    takeaway:
      "Primary Raynaud occurs alone and is usually less severe."
  },
  {
    id: "PERF-BR-014",
    caseId: "PERF-BR-CASE-014",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Secondary Raynaud",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which disorders may be associated with secondary Raynaud phenomenon? Select all that apply.",
    choices: [
      "Systemic sclerosis",
      "Systemic lupus erythematosus",
      "Rheumatoid arthritis",
      "Peripheral arterial disease",
      "Carpal tunnel syndrome",
      "Seasonal rhinitis only"
    ],
    answer: [
      "Systemic sclerosis",
      "Systemic lupus erythematosus",
      "Rheumatoid arthritis",
      "Peripheral arterial disease",
      "Carpal tunnel syndrome"
    ],
    rationale:
      "Secondary Raynaud may occur with autoimmune, vascular, occupational, neurologic, or connective-tissue disorders.",
    takeaway:
      "Secondary Raynaud is linked to another disease or exposure."
  },
  {
    id: "PERF-BR-015",
    caseId: "PERF-BR-CASE-015",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Immediate Care",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
      "A patient develops white, numb fingers after walking outside in cold weather. What should the nurse instruct the patient to do first?",
    choices: [
      "Move to a warm environment and gently warm the hands",
      "Place the hands directly against a heating element",
      "Immerse the hands in ice water",
      "Massage the fingers forcefully"
    ],
    answer:
      "Move to a warm environment and gently warm the hands",
    rationale:
      "The patient should stop the cold exposure and gently rewarm the extremities. Direct intense heat can cause burns.",
    takeaway:
      "Treat a Raynaud episode with gradual, gentle warming."
  },
  {
    id: "PERF-BR-016",
    caseId: "PERF-BR-CASE-016",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Cold Protection",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which action should a patient with Raynaud phenomenon take before removing food from a freezer?",
    choices: [
      "Wear insulated gloves",
      "Place the hands in cold water",
      "Smoke a cigarette to reduce stress",
      "Apply a tight wrist band"
    ],
    answer:
      "Wear insulated gloves",
    rationale:
      "Contact with cold objects can trigger vasospasm. Insulated gloves help protect the fingers from sudden temperature changes.",
    takeaway:
      "Cold protection includes gloves for outdoor and indoor exposures."
  },
  {
    id: "PERF-BR-017",
    caseId: "PERF-BR-CASE-017",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Lifestyle Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which instructions should the nurse include for a patient with Raynaud phenomenon? Select all that apply.",
    choices: [
      "Stop smoking",
      "Limit caffeine",
      "Manage emotional stress",
      "Wear layered clothing",
      "Avoid sudden temperature changes",
      "Use decongestants freely"
    ],
    answer: [
      "Stop smoking",
      "Limit caffeine",
      "Manage emotional stress",
      "Wear layered clothing",
      "Avoid sudden temperature changes"
    ],
    rationale:
      "Treatment focuses on avoiding vasoconstriction caused by nicotine, caffeine, stress, cold exposure, and certain medications.",
    takeaway:
      "Prevent Raynaud attacks by reducing vasoconstrictive triggers."
  },
  {
    id: "PERF-BR-018",
    caseId: "PERF-BR-CASE-018",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Medication Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which over-the-counter medication should a patient with Raynaud phenomenon discuss with the provider before using?",
    choices: [
      "Pseudoephedrine",
      "Acetaminophen",
      "Calcium carbonate",
      "Docusate sodium"
    ],
    answer:
      "Pseudoephedrine",
    rationale:
      "Pseudoephedrine is a sympathomimetic decongestant that causes vasoconstriction and may trigger or worsen Raynaud symptoms.",
    takeaway:
      "Decongestants can worsen vasospasm."
  },
  {
    id: "PERF-BR-019",
    caseId: "PERF-BR-CASE-019",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Calcium-Channel Blockers",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication may be prescribed to reduce the frequency and severity of Raynaud episodes?",
    choices: [
      "Nifedipine",
      "Pseudoephedrine",
      "Phenylephrine",
      "Epinephrine"
    ],
    answer:
      "Nifedipine",
    rationale:
      "Nifedipine is a calcium-channel blocker that promotes vasodilation and is commonly used when lifestyle measures are insufficient.",
    takeaway:
      "Calcium-channel blockers help reduce digital vasospasm."
  },
  {
    id: "PERF-BR-020",
    caseId: "PERF-BR-CASE-020",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Nifedipine Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which adverse effect should the nurse teach a patient to monitor for while taking nifedipine?",
    choices: [
      "Dizziness and hypotension",
      "Severe hypertension",
      "Hypoglycemia",
      "Hearing loss"
    ],
    answer:
      "Dizziness and hypotension",
    rationale:
      "Nifedipine causes vasodilation and may produce headache, flushing, dizziness, peripheral edema, and hypotension.",
    takeaway:
      "Teach patients taking vasodilators to change positions slowly."
  },
  {
    id: "PERF-BR-021",
    caseId: "PERF-BR-CASE-021",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Tissue Injury",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding in a patient with Raynaud phenomenon requires prompt evaluation?",
    choices: [
      "A nonhealing ulcer on a fingertip",
      "Temporary finger pallor in cold weather",
      "Mild tingling that resolves with warming",
      "Brief redness after reperfusion"
    ],
    answer:
      "A nonhealing ulcer on a fingertip",
    rationale:
      "Persistent ulceration may indicate severe secondary Raynaud phenomenon and inadequate tissue perfusion.",
    takeaway:
      "Ulcers suggest significant ischemia and possible secondary disease."
  },
  {
    id: "PERF-BR-022",
    caseId: "PERF-BR-CASE-022",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Occupational Exposure",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which occupational exposure may contribute to secondary Raynaud phenomenon?",
    choices: [
      "Frequent use of vibrating tools",
      "Working at a desk",
      "Reading printed books",
      "Using a standard telephone"
    ],
    answer:
      "Frequent use of vibrating tools",
    rationale:
      "Repeated exposure to vibration can damage blood vessels and nerves in the hands and contribute to secondary Raynaud phenomenon.",
    takeaway:
      "Vibration exposure is a recognized occupational trigger."
  },
  {
    id: "PERF-BR-023",
    caseId: "PERF-BR-CASE-023",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
      "Which finding is more characteristic of Buerger disease than primary Raynaud phenomenon?",
    choices: [
      "Progressive ischemic ulceration associated with tobacco use",
      "Brief finger pallor triggered by cold",
      "Symptoms that resolve completely with warming",
      "Episodic vasospasm without tissue injury"
    ],
    answer:
      "Progressive ischemic ulceration associated with tobacco use",
    rationale:
      "Buerger disease causes inflammatory thrombotic vessel obstruction and may progress to ulcers or gangrene. Primary Raynaud is typically episodic and reversible.",
    takeaway:
      "Buerger disease can cause progressive tissue loss; primary Raynaud usually does not."
  },
  {
    id: "PERF-BR-024",
    caseId: "PERF-BR-CASE-024",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Evaluation",
    style: "Evaluation",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
      "Which outcome best indicates that a patient's Raynaud management plan is effective?",
    choices: [
      "The patient reports fewer attacks and has intact skin on the fingers",
      "The patient develops a new fingertip ulcer",
      "The patient continues smoking during stressful events",
      "The patient experiences longer periods of numbness"
    ],
    answer:
      "The patient reports fewer attacks and has intact skin on the fingers",
    rationale:
      "Effective management reduces vasospastic episodes, prevents tissue injury, and maintains functional circulation.",
    takeaway:
      "Successful Raynaud management prevents attacks and protects tissue."
  },
  {
    id: "PERF-BR-025",
    caseId: "PERF-BR-CASE-025",
    patient: randomPatient(),
    topic: "Buerger Disease and Raynaud Phenomenon",
    subtopic: "Priority Comparison",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "Which patient should the nurse assess first?",
    choices: [
      "A patient with Buerger disease who has a black, numb toe",
      "A patient with Raynaud phenomenon whose fingers briefly turn white in the cold",
      "A patient asking how to reduce caffeine intake",
      "A patient requesting insulated gloves"
    ],
    answer:
      "A patient with Buerger disease who has a black, numb toe",
    rationale:
      "Black tissue and numbness suggest necrosis or gangrene caused by severe ischemia and require immediate evaluation.",
    takeaway:
      "Tissue necrosis takes priority over reversible vasospasm."
  }
];
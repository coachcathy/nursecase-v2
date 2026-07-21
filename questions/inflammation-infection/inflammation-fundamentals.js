const inflammationFundamentalsQuestions = [

{
    id: "INFLAM-FUND-001",
    caseId: "INFLAM-FUND-CASE-001",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammatory Response",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes the purpose of the inflammatory response?",
    choices: [
        "Protect tissue from injury and begin the healing process",
        "Destroy all white blood cells to prevent infection",
        "Decrease blood flow to injured tissue",
        "Suppress the immune system"
    ],
    answer:
        "Protect tissue from injury and begin the healing process",
    rationale:
        "Inflammation is the body's protective response to tissue injury or infection. It limits damage, removes harmful agents, and initiates tissue repair.",
    takeaway:
        "Inflammation protects, contains injury, and promotes healing."
},

{
    id: "INFLAM-FUND-002",
    caseId: "INFLAM-FUND-CASE-002",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Cardinal Signs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which are the classic signs of inflammation? Select all that apply.",
    choices: [
        "Redness",
        "Heat",
        "Swelling",
        "Pain",
        "Loss of function",
        "Bradycardia"
    ],
    answer: [
        "Redness",
        "Heat",
        "Swelling",
        "Pain",
        "Loss of function"
    ],
    rationale:
        "The five cardinal signs of inflammation are redness (rubor), heat (calor), swelling (tumor), pain (dolor), and loss of function (functio laesa).",
    takeaway:
        "Remember the five cardinal signs of inflammation."
},

{
    id: "INFLAM-FUND-003",
    caseId: "INFLAM-FUND-CASE-003",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Acute vs Chronic",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which characteristic is most consistent with acute inflammation?",
    choices: [
        "Rapid onset lasting hours to days",
        "Develops over months to years",
        "Scar formation without immune response",
        "Occurs only with autoimmune disorders"
    ],
    answer:
        "Rapid onset lasting hours to days",
    rationale:
        "Acute inflammation develops rapidly and usually resolves within days. Chronic inflammation persists for weeks, months, or years.",
    takeaway:
        "Acute = rapid onset; chronic = prolonged response."
},

{
    id: "INFLAM-FUND-004",
    caseId: "INFLAM-FUND-CASE-004",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "White Blood Cells",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding most strongly suggests an acute inflammatory response?",
    choices: [
        "Elevated white blood cell count",
        "Low platelet count",
        "Low hemoglobin",
        "Decreased serum sodium"
    ],
    answer:
        "Elevated white blood cell count",
    rationale:
        "Leukocytosis commonly occurs during acute inflammation and infection as the body produces additional white blood cells.",
    takeaway:
        "Inflammation commonly causes an elevated WBC count."
},

{
    id: "INFLAM-FUND-005",
    caseId: "INFLAM-FUND-CASE-005",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammatory Mediators",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which effects occur because of inflammatory mediators such as histamine? Select all that apply.",
    choices: [
        "Vasodilation",
        "Increased capillary permeability",
        "Redness",
        "Edema",
        "Improved clot breakdown",
        "Bradycardia"
    ],
    answer: [
        "Vasodilation",
        "Increased capillary permeability",
        "Redness",
        "Edema"
    ],
    rationale:
        "Histamine causes vasodilation and increased capillary permeability, leading to redness and edema at the injury site.",
    takeaway:
        "Histamine causes vasodilation and leaky capillaries."
},

{
    id: "INFLAM-FUND-006",
    caseId: "INFLAM-FUND-CASE-006",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Systemic Response",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is a common systemic manifestation of inflammation?",
    choices: [
        "Fever",
        "Hypothermia",
        "Bradycardia",
        "Hypoglycemia"
    ],
    answer:
        "Fever",
    rationale:
        "Pyrogens released during inflammation stimulate the hypothalamus, producing fever as part of the systemic inflammatory response.",
    takeaway:
        "Fever is a common systemic sign of inflammation."
},

{
    id: "INFLAM-FUND-007",
    caseId: "INFLAM-FUND-CASE-007",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Healing",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which factors promote normal wound healing? Select all that apply.",
    choices: [
        "Adequate nutrition",
        "Good blood supply",
        "Protein intake",
        "Controlled blood glucose",
        "Adequate oxygenation",
        "Smoking"
    ],
    answer: [
        "Adequate nutrition",
        "Good blood supply",
        "Protein intake",
        "Controlled blood glucose",
        "Adequate oxygenation"
    ],
    rationale:
        "Healing requires oxygen, nutrients, circulation, protein, and glucose control. Smoking delays healing by reducing tissue oxygenation.",
    takeaway:
        "Oxygen, nutrition, circulation, and protein are essential for healing."
},

{
    id: "INFLAM-FUND-008",
    caseId: "INFLAM-FUND-CASE-008",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which patient requires immediate nursing assessment?",
    choices: [
        "A patient with a temperature of 103.8°F, confusion, and hypotension",
        "A patient with localized redness around a paper cut",
        "A patient with mild swelling after an ankle sprain",
        "A patient with soreness one day after exercising"
    ],
    answer:
        "A patient with a temperature of 103.8°F, confusion, and hypotension",
    rationale:
        "High fever with altered mental status and hypotension suggests systemic infection or sepsis and requires immediate intervention.",
    takeaway:
        "Systemic signs of inflammation with hypotension are an emergency."
},

{
    id: "INFLAM-FUND-009",
    caseId: "INFLAM-FUND-CASE-009",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Acute Phase Proteins",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "A nurse reviews laboratory results for a client with suspected acute inflammation. Which finding supports the diagnosis?",
    choices: [
        "Elevated C-reactive protein (CRP)",
        "Decreased erythrocyte sedimentation rate (ESR)",
        "Low white blood cell count",
        "Low fibrinogen level"
    ],
    answer:
        "Elevated C-reactive protein (CRP)",
    rationale:
        "CRP is an acute-phase protein produced by the liver during inflammation. Elevated CRP is a sensitive indicator of acute inflammatory processes.",
    takeaway:
        "CRP rises quickly during acute inflammation."
},

{
    id: "INFLAM-FUND-010",
    caseId: "INFLAM-FUND-CASE-010",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammation vs Infection",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding most strongly suggests infection rather than inflammation alone?",
    choices: [
        "Purulent drainage from the wound",
        "Localized swelling",
        "Warmth at the injury site",
        "Redness around the incision"
    ],
    answer:
        "Purulent drainage from the wound",
    rationale:
        "Purulent drainage contains white blood cells, bacteria, and tissue debris, making it a strong indicator of infection rather than uncomplicated inflammation.",
    takeaway:
        "Purulent drainage is a hallmark of infection."
},

{
    id: "INFLAM-FUND-011",
    caseId: "INFLAM-FUND-CASE-011",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Healing Phases",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which phase of wound healing is characterized by new collagen formation and development of granulation tissue?",
    choices: [
        "Proliferative phase",
        "Hemostasis phase",
        "Inflammatory phase",
        "Maturation phase"
    ],
    answer:
        "Proliferative phase",
    rationale:
        "The proliferative phase includes fibroblast activity, collagen deposition, angiogenesis, and formation of healthy granulation tissue.",
    takeaway:
        "Granulation tissue forms during the proliferative phase."
},

{
    id: "INFLAM-FUND-012",
    caseId: "INFLAM-FUND-CASE-012",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse assesses four clients with inflammation. Which client should be seen first?",
    choices: [
        "A client with facial swelling and inspiratory stridor after a bee sting",
        "A client with mild redness after receiving a vaccine",
        "A client with warmth around a healing surgical incision",
        "A client with tenderness at an ankle sprain"
    ],
    answer:
        "A client with facial swelling and inspiratory stridor after a bee sting",
    rationale:
        "Airway compromise always takes priority. Facial swelling with stridor indicates a severe allergic reaction requiring immediate intervention.",
    takeaway:
        "Always prioritize airway compromise."
},

{
    id: "INFLAM-FUND-013",
    caseId: "INFLAM-FUND-CASE-013",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Nursing Interventions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which nursing interventions help reduce acute inflammation? Select all that apply.",
    choices: [
        "Elevate the affected extremity",
        "Apply ice during the first 24–48 hours",
        "Encourage rest",
        "Administer prescribed anti-inflammatory medications",
        "Massage directly over the injured tissue",
        "Encourage repetitive strenuous exercise"
    ],
    answer: [
        "Elevate the affected extremity",
        "Apply ice during the first 24–48 hours",
        "Encourage rest",
        "Administer prescribed anti-inflammatory medications"
    ],
    rationale:
        "Elevation, rest, cold therapy, and anti-inflammatory medications reduce swelling and pain. Massage and strenuous activity may worsen tissue injury early on.",
    takeaway:
        "RICE principles are key during acute inflammation."
},

{
    id: "INFLAM-FUND-014",
    caseId: "INFLAM-FUND-CASE-014",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammatory Markers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value is commonly monitored to evaluate trends in inflammation over time?",
    choices: [
        "Erythrocyte sedimentation rate (ESR)",
        "Serum potassium",
        "Hemoglobin A1C",
        "Platelet count"
    ],
    answer:
        "Erythrocyte sedimentation rate (ESR)",
    rationale:
        "ESR is a nonspecific marker of inflammation that is often used to monitor progression or response to treatment.",
    takeaway:
        "ESR is commonly trended during inflammatory diseases."
},

{
    id: "INFLAM-FUND-015",
    caseId: "INFLAM-FUND-CASE-015",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops increasing redness, warmth, swelling, severe pain, fever, and purulent drainage 48 hours after surgery. Which finding requires the nurse's highest priority response?",
    choices: [
        "Purulent drainage with fever",
        "Localized warmth",
        "Expected postoperative pain",
        "Mild swelling"
    ],
    answer:
        "Purulent drainage with fever",
    rationale:
        "Purulent drainage accompanied by fever strongly suggests a postoperative infection that requires immediate provider notification and further evaluation.",
    takeaway:
        "Postoperative fever with purulent drainage is never expected."
},

{
    id: "INFLAM-FUND-016",
    caseId: "INFLAM-FUND-CASE-016",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of ways to promote healing?",
    choices: [
        "I will eat foods rich in protein and stay hydrated.",
        "I'll stop taking antibiotics when I feel better.",
        "Smoking won't affect my wound healing.",
        "I'll avoid changing my dressing if it gets wet."
    ],
    answer:
        "I will eat foods rich in protein and stay hydrated.",
    rationale:
        "Adequate protein, hydration, nutrition, and following treatment recommendations promote optimal tissue healing.",
    takeaway:
        "Protein, hydration, and smoking cessation improve healing."
},

{
    id: "INFLAM-FUND-017",
    caseId: "INFLAM-FUND-CASE-017",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client twists an ankle while jogging. Which assessment finding is most consistent with the inflammatory response occurring within the first few hours?",
    choices: [
        "Warmth, swelling, redness, and pain",
        "Cool, pale skin with absent pulses",
        "Black eschar over the injured tissue",
        "Loss of sensation without swelling"
    ],
    answer:
        "Warmth, swelling, redness, and pain",
    rationale:
        "Acute inflammation causes vasodilation and increased capillary permeability, producing redness, warmth, edema, and pain.",
    takeaway:
        "The classic inflammatory response is redness, warmth, swelling, and pain."
},

{
    id: "INFLAM-FUND-018",
    caseId: "INFLAM-FUND-CASE-018",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which factors delay wound healing? Select all that apply.",
    choices: [
        "Smoking",
        "Poor nutrition",
        "Diabetes mellitus",
        "Poor circulation",
        "Advanced age",
        "Adequate hydration"
    ],
    answer: [
        "Smoking",
        "Poor nutrition",
        "Diabetes mellitus",
        "Poor circulation",
        "Advanced age"
    ],
    rationale:
        "Smoking decreases oxygen delivery, diabetes impairs immune function, poor nutrition limits tissue repair, poor circulation reduces oxygenation, and aging slows cellular regeneration.",
    takeaway:
        "Think O₂ + Nutrition + Circulation = Healing."
},

{
    id: "INFLAM-FUND-019",
    caseId: "INFLAM-FUND-CASE-019",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment finding suggests that a localized inflammatory response has become systemic?",
    choices: [
        "Hypotension and tachycardia",
        "Localized redness",
        "Mild tenderness",
        "Small amount of edema"
    ],
    answer:
        "Hypotension and tachycardia",
    rationale:
        "Hypotension and tachycardia indicate possible systemic inflammatory response or sepsis and require immediate intervention.",
    takeaway:
        "Systemic instability always outweighs localized findings."
},

{
    id: "INFLAM-FUND-020",
    caseId: "INFLAM-FUND-CASE-020",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Laboratory Values",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value would the nurse expect in a client experiencing bacterial inflammation?",
    choices: [
        "Elevated neutrophil count",
        "Decreased neutrophil count",
        "Low CRP",
        "Low ESR"
    ],
    answer:
        "Elevated neutrophil count",
    rationale:
        "Neutrophils are the primary white blood cells responding to acute bacterial inflammation and infection.",
    takeaway:
        "Neutrophils fight bacteria."
},

{
    id: "INFLAM-FUND-021",
    caseId: "INFLAM-FUND-CASE-021",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates understanding of cold therapy for an acute injury?",
    choices: [
        "I'll apply ice for about 20 minutes at a time.",
        "I'll place ice directly on my skin for an hour.",
        "Heat should be applied immediately after the injury.",
        "I'll massage the swollen area every hour."
    ],
    answer:
        "I'll apply ice for about 20 minutes at a time.",
    rationale:
        "Ice should be applied for approximately 15–20 minutes at a time with a barrier between the ice and skin to reduce swelling and pain.",
    takeaway:
        "Cold therapy = 15–20 minutes with skin protection."
},

{
    id: "INFLAM-FUND-022",
    caseId: "INFLAM-FUND-CASE-022",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings may occur with systemic inflammation? Select all that apply.",
    choices: [
        "Fever",
        "Fatigue",
        "Leukocytosis",
        "Loss of appetite",
        "Elevated CRP",
        "Bradycardia"
    ],
    answer: [
        "Fever",
        "Fatigue",
        "Leukocytosis",
        "Loss of appetite",
        "Elevated CRP"
    ],
    rationale:
        "Systemic inflammation commonly produces fever, malaise, anorexia, elevated WBC count, and increased inflammatory markers.",
    takeaway:
        "Systemic inflammation affects the whole body—not just the injured tissue."
},

{
    id: "INFLAM-FUND-023",
    caseId: "INFLAM-FUND-CASE-023",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "A client receiving IV antibiotics develops facial swelling, wheezing, and difficulty breathing. What is the nurse's priority action?",
    choices: [
        "Stop the infusion and activate emergency response.",
        "Slow the infusion rate.",
        "Document the reaction.",
        "Administer the next scheduled dose later."
    ],
    answer:
        "Stop the infusion and activate emergency response.",
    rationale:
        "Airway compromise caused by anaphylaxis is life-threatening. Stop the offending medication immediately and initiate emergency treatment.",
    takeaway:
        "Airway first—suspected anaphylaxis is an emergency."
},

{
    id: "INFLAM-FUND-024",
    caseId: "INFLAM-FUND-CASE-024",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Inflammation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which event occurs first during the inflammatory response?",
    choices: [
        "Release of inflammatory mediators causing vasodilation",
        "Scar tissue formation",
        "Collagen remodeling",
        "Granulation tissue formation"
    ],
    answer:
        "Release of inflammatory mediators causing vasodilation",
    rationale:
        "Histamine and other inflammatory mediators are released immediately after injury, causing vasodilation and increased vascular permeability.",
    takeaway:
        "Histamine is one of the earliest mediators of inflammation."
},

{
    id: "INFLAM-FUND-025",
    caseId: "INFLAM-FUND-CASE-025",
    patient: randomPatient(),
    topic: "Inflammation Fundamentals",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative client has a temperature of 102.8°F (39.3°C), heart rate of 124/min, blood pressure of 84/48 mm Hg, respiratory rate of 30/min, and purulent drainage from the incision. Which nursing action is the priority?",
    choices: [
        "Initiate the sepsis protocol and notify the provider immediately.",
        "Administer the scheduled pain medication.",
        "Apply a warm compress to the incision.",
        "Reassess the client in one hour."
    ],
    answer:
        "Initiate the sepsis protocol and notify the provider immediately.",
    rationale:
        "This client demonstrates signs of septic shock requiring immediate recognition, rapid intervention, cultures, antibiotics, fluid resuscitation, and provider notification.",
    takeaway:
        "Recognize sepsis early—hypotension plus infection is an emergency."
},

];
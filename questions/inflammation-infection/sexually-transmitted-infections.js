const sexuallyTransmittedInfectionQuestions = [

{
    id: "STI-001",
    caseId: "STI-CASE-001",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "General Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is commonly associated with a sexually transmitted infection (STI)?",
    choices: [
        "Genital discharge, dysuria, or genital lesions",
        "Productive cough with crackles",
        "Right lower quadrant rebound tenderness",
        "Generalized edema"
    ],
    answer:
        "Genital discharge, dysuria, or genital lesions",
    rationale:
        "Common manifestations of STIs include genital discharge, dysuria, ulcers, vesicles, warts, pelvic pain, and abnormal bleeding depending on the organism.",
    takeaway:
        "Think discharge, dysuria, lesions, or pelvic pain when assessing for STIs."
},

{
    id: "STI-002",
    caseId: "STI-CASE-002",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client has the greatest risk for acquiring a sexually transmitted infection?",
    choices: [
        "A client with multiple sexual partners who does not consistently use barrier protection",
        "A client in a long-term mutually monogamous relationship",
        "A client with seasonal allergies",
        "A client recovering from a sprained ankle"
    ],
    answer:
        "A client with multiple sexual partners who does not consistently use barrier protection",
    rationale:
        "Multiple partners and inconsistent condom use significantly increase the risk of STI transmission.",
    takeaway:
        "Barrier protection reduces STI transmission."
},

{
    id: "STI-003",
    caseId: "STI-CASE-003",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings may indicate a sexually transmitted infection? Select all that apply.",
    choices: [
        "Purulent genital discharge",
        "Painful urination",
        "Genital ulcers",
        "Pelvic pain",
        "Abnormal vaginal bleeding",
        "Bradycardia"
    ],
    answer: [
        "Purulent genital discharge",
        "Painful urination",
        "Genital ulcers",
        "Pelvic pain",
        "Abnormal vaginal bleeding"
    ],
    rationale:
        "Manifestations vary by organism but commonly include discharge, dysuria, ulcers, pelvic pain, and abnormal bleeding.",
    takeaway:
        "STIs present differently depending on the organism."
},

{
    id: "STI-004",
    caseId: "STI-CASE-004",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test is commonly used to identify gonorrhea and chlamydia?",
    choices: [
        "Nucleic acid amplification test (NAAT)",
        "Rapid strep test",
        "Chest x-ray",
        "Electrocardiogram"
    ],
    answer:
        "Nucleic acid amplification test (NAAT)",
    rationale:
        "NAAT is the preferred diagnostic test for gonorrhea and chlamydia because of its high sensitivity and specificity.",
    takeaway:
        "NAAT is the gold standard for gonorrhea and chlamydia testing."
},

{
    id: "STI-005",
    caseId: "STI-CASE-005",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with pelvic inflammatory disease who has BP 84/46 mm Hg, HR 132/min, fever, and confusion",
        "A client requesting STI education",
        "A client awaiting discharge prescriptions",
        "A client reporting mild dysuria"
    ],
    answer:
        "A client with pelvic inflammatory disease who has BP 84/46 mm Hg, HR 132/min, fever, and confusion",
    rationale:
        "These findings indicate possible septic shock requiring immediate intervention.",
    takeaway:
        "Always prioritize airway, breathing, circulation, and signs of shock."
},

{
    id: "STI-006",
    caseId: "STI-CASE-006",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of STI treatment?",
    choices: [
        "My sexual partner(s) should also be evaluated and treated if indicated.",
        "I'll stop taking antibiotics when my symptoms improve.",
        "I can resume sexual activity immediately after starting antibiotics.",
        "I'll save any leftover antibiotics for future use."
    ],
    answer:
        "My sexual partner(s) should also be evaluated and treated if indicated.",
    rationale:
        "Partner evaluation and treatment reduce reinfection and further transmission.",
    takeaway:
        "Treat the client and their partner(s) when appropriate."
},

{
    id: "STI-007",
    caseId: "STI-CASE-007",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Prevention",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which intervention is most effective in reducing the transmission of sexually transmitted infections?",
    choices: [
        "Consistent and correct use of condoms",
        "Limiting fluid intake",
        "Taking antibiotics before every sexual encounter",
        "Avoiding exercise"
    ],
    answer:
        "Consistent and correct use of condoms",
    rationale:
        "Correct condom use significantly reduces the transmission of many sexually transmitted infections.",
    takeaway:
        "Barrier protection is a key preventive measure."
},

{
    id: "STI-008",
    caseId: "STI-CASE-008",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which long-term complication is associated with untreated chlamydia or gonorrhea in females?",
    choices: [
        "Pelvic inflammatory disease leading to infertility",
        "Peptic ulcer disease",
        "Cholecystitis",
        "Osteoporosis"
    ],
    answer:
        "Pelvic inflammatory disease leading to infertility",
    rationale:
        "Untreated ascending infection can result in pelvic inflammatory disease, chronic pelvic pain, ectopic pregnancy, and infertility.",
    takeaway:
        "Prompt diagnosis and treatment prevent infertility."
},

{
    id: "STI-009",
    caseId: "STI-CASE-009",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Gonorrhea",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with gonorrhea?",
    choices: [
        "Purulent yellow-green urethral or cervical discharge with dysuria",
        "Painless chancre",
        "Clusters of painful vesicles",
        "Cauliflower-like genital warts"
    ],
    answer:
        "Purulent yellow-green urethral or cervical discharge with dysuria",
    rationale:
        "Gonorrhea commonly presents with purulent genital discharge, dysuria, and cervicitis or urethritis. Some clients may be asymptomatic.",
    takeaway:
        "Think purulent discharge and dysuria with gonorrhea."
},

{
    id: "STI-010",
    caseId: "STI-CASE-010",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Chlamydia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement about chlamydia is accurate?",
    choices: [
        "Many clients are asymptomatic, increasing the risk for delayed diagnosis.",
        "It always produces painful genital ulcers.",
        "It is caused by a fungal infection.",
        "It cannot cause infertility."
    ],
    answer:
        "Many clients are asymptomatic, increasing the risk for delayed diagnosis.",
    rationale:
        "Chlamydia is frequently asymptomatic, especially in females, allowing the infection to progress to pelvic inflammatory disease if untreated.",
    takeaway:
        "Chlamydia is often silent but can cause infertility."
},

{
    id: "STI-011",
    caseId: "STI-CASE-011",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client diagnosed with pelvic inflammatory disease develops BP 82/42 mm Hg, HR 136/min, RR 30/min, temperature 103.2°F (39.6°C), and confusion. What is the nurse's priority action?",
    choices: [
        "Initiate the sepsis protocol and notify the provider immediately.",
        "Administer oral pain medication.",
        "Provide discharge teaching.",
        "Encourage oral fluids."
    ],
    answer:
        "Initiate the sepsis protocol and notify the provider immediately.",
    rationale:
        "These findings indicate septic shock secondary to a severe pelvic infection and require immediate intervention.",
    takeaway:
        "Always recognize sepsis regardless of the infection source."
},

{
    id: "STI-012",
    caseId: "STI-CASE-012",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Herpes Simplex Virus",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are commonly associated with genital herpes? Select all that apply.",
    choices: [
        "Painful grouped vesicles",
        "Burning or tingling before lesions appear",
        "Painful ulcers after vesicles rupture",
        "Flu-like symptoms during the initial outbreak",
        "Recurrent outbreaks",
        "Painless chancre"
    ],
    answer: [
        "Painful grouped vesicles",
        "Burning or tingling before lesions appear",
        "Painful ulcers after vesicles rupture",
        "Flu-like symptoms during the initial outbreak",
        "Recurrent outbreaks"
    ],
    rationale:
        "HSV commonly presents with painful vesicles, prodromal tingling, ulcer formation, systemic symptoms during the first outbreak, and recurrent episodes.",
    takeaway:
        "HSV = painful, recurrent vesicular lesions."
},

{
    id: "STI-013",
    caseId: "STI-CASE-013",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Syphilis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is characteristic of primary syphilis?",
    choices: [
        "A painless chancre at the site of infection",
        "Painful vesicular lesions",
        "Purulent urethral discharge",
        "Cauliflower-like genital warts"
    ],
    answer:
        "A painless chancre at the site of infection",
    rationale:
        "Primary syphilis presents with a painless chancre that heals spontaneously if untreated.",
    takeaway:
        "Primary syphilis = painless chancre."
},

{
    id: "STI-014",
    caseId: "STI-CASE-014",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "HPV",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which intervention is most effective in reducing the risk of HPV-related cancers?",
    choices: [
        "Receiving the HPV vaccine before exposure",
        "Taking prophylactic antibiotics",
        "Avoiding dairy products",
        "Receiving yearly chest x-rays"
    ],
    answer:
        "Receiving the HPV vaccine before exposure",
    rationale:
        "HPV vaccination provides protection against the strains most commonly associated with cervical and other anogenital cancers.",
    takeaway:
        "HPV vaccination is cancer prevention."
},

{
    id: "STI-015",
    caseId: "STI-CASE-015",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with untreated pelvic inflammatory disease develops BP 80/40 mm Hg, HR 142/min, RR 34/min, lactate 5.8 mmol/L, minimal urine output, and increasing confusion. Which complication should the nurse recognize?",
    choices: [
        "Septic shock",
        "Localized cervicitis",
        "Stable infection",
        "Expected medication effects"
    ],
    answer:
        "Septic shock",
    rationale:
        "Hypotension, elevated lactate, oliguria, and altered mental status indicate septic shock requiring immediate intervention.",
    takeaway:
        "Severe PID can progress to life-threatening sepsis."
},

{
    id: "STI-016",
    caseId: "STI-CASE-016",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with pelvic inflammatory disease who has hypotension, fever, tachycardia, and altered mental status",
        "A client requesting STI education",
        "A client receiving routine discharge instructions",
        "A client with genital warts awaiting evaluation"
    ],
    answer:
        "A client with pelvic inflammatory disease who has hypotension, fever, tachycardia, and altered mental status",
    rationale:
        "Evidence of septic shock requires immediate assessment and intervention.",
    takeaway:
        "Shock always takes priority over stable clients."
},

{
    id: "STI-017",
    caseId: "STI-CASE-017",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Partner Notification",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of partner notification after being diagnosed with chlamydia?",
    choices: [
        "My recent sexual partner(s) should be notified, evaluated, and treated if indicated.",
        "My partner only needs treatment if symptoms develop.",
        "I can resume sexual activity as soon as I start antibiotics.",
        "I do not need to tell anyone because antibiotics will cure the infection."
    ],
    answer:
        "My recent sexual partner(s) should be notified, evaluated, and treated if indicated.",
    rationale:
        "Partner evaluation and treatment reduce reinfection and prevent further transmission of sexually transmitted infections.",
    takeaway:
        "Partner treatment helps stop reinfection."
},

{
    id: "STI-018",
    caseId: "STI-CASE-018",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Patient Education",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse include for a client receiving treatment for gonorrhea or chlamydia? Select all that apply.",
    choices: [
        "Complete the entire antibiotic regimen.",
        "Avoid sexual activity until treatment is completed and cleared by the provider.",
        "Notify recent sexual partner(s).",
        "Use condoms consistently during future sexual activity.",
        "Return for retesting if recommended.",
        "Stop antibiotics when symptoms improve."
    ],
    answer: [
        "Complete the entire antibiotic regimen.",
        "Avoid sexual activity until treatment is completed and cleared by the provider.",
        "Notify recent sexual partner(s).",
        "Use condoms consistently during future sexual activity.",
        "Return for retesting if recommended."
    ],
    rationale:
        "Treatment includes medication adherence, abstinence until treatment is complete, partner notification, safer sex practices, and follow-up testing when indicated.",
    takeaway:
        "Finish treatment, treat partners, and prevent reinfection."
},

{
    id: "STI-019",
    caseId: "STI-CASE-019",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Pelvic Inflammatory Disease",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with pelvic inflammatory disease (PID)?",
    choices: [
        "Lower abdominal pain with cervical motion tenderness and fever",
        "Painless genital wart",
        "Localized painless chancre",
        "Productive cough with pleuritic chest pain"
    ],
    answer:
        "Lower abdominal pain with cervical motion tenderness and fever",
    rationale:
        "PID commonly presents with lower abdominal pain, cervical motion tenderness, adnexal tenderness, fever, and abnormal vaginal discharge.",
    takeaway:
        "PID = pelvic pain + cervical motion tenderness + fever."
},

{
    id: "STI-020",
    caseId: "STI-CASE-020",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client requires immediate nursing intervention?",
    choices: [
        "A client with PID reporting severe abdominal pain, BP 82/40 mm Hg, HR 138/min, and confusion",
        "A client requesting information about HPV vaccination",
        "A client with genital herpes requesting pain medication",
        "A client waiting for STI test results"
    ],
    answer:
        "A client with PID reporting severe abdominal pain, BP 82/40 mm Hg, HR 138/min, and confusion",
    rationale:
        "Hypotension, tachycardia, severe pain, and altered mental status indicate possible septic shock requiring immediate intervention.",
    takeaway:
        "Prioritize clients showing signs of shock."
},

{
    id: "STI-021",
    caseId: "STI-CASE-021",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "HIV Prevention",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which intervention most effectively reduces the risk of acquiring HIV during sexual activity?",
    choices: [
        "Consistent and correct condom use",
        "Taking antibiotics after every sexual encounter",
        "Avoiding dairy products",
        "Annual chest x-rays"
    ],
    answer:
        "Consistent and correct condom use",
    rationale:
        "Consistent condom use significantly reduces transmission of HIV and many other sexually transmitted infections.",
    takeaway:
        "Barrier protection remains one of the best methods of STI prevention."
},

{
    id: "STI-022",
    caseId: "STI-CASE-022",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "HPV",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statements about human papillomavirus (HPV) are correct? Select all that apply.",
    choices: [
        "HPV can cause genital warts.",
        "Certain HPV strains increase the risk for cervical cancer.",
        "Vaccination can reduce the risk of HPV-related cancers.",
        "HPV infections are always symptomatic.",
        "Routine cervical cancer screening remains important.",
        "HPV is treated with antibiotics."
    ],
    answer: [
        "HPV can cause genital warts.",
        "Certain HPV strains increase the risk for cervical cancer.",
        "Vaccination can reduce the risk of HPV-related cancers.",
        "Routine cervical cancer screening remains important."
    ],
    rationale:
        "Many HPV infections are asymptomatic. Vaccination and cervical cancer screening are important preventive measures. Antibiotics do not treat viral infections.",
    takeaway:
        "HPV vaccination plus routine screening saves lives."
},

{
    id: "STI-023",
    caseId: "STI-CASE-023",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with severe pelvic inflammatory disease develops BP 78/38 mm Hg, HR 146/min, RR 36/min, temperature 103.7°F (39.8°C), lactate 6.2 mmol/L, and urine output of 15 mL/hr. Which complication should the nurse recognize?",
    choices: [
        "Septic shock",
        "Localized cervicitis",
        "Expected medication response",
        "Stable recovery"
    ],
    answer:
        "Septic shock",
    rationale:
        "Persistent hypotension, elevated lactate, oliguria, and tachycardia indicate septic shock with tissue hypoperfusion.",
    takeaway:
        "Recognize septic shock regardless of the infection source."
},

{
    id: "STI-024",
    caseId: "STI-CASE-024",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with PID whose BP is 80/38 mm Hg and who is becoming increasingly confused",
        "A client with genital herpes requesting topical medication",
        "A client asking questions about HPV vaccination",
        "A client awaiting discharge after STI treatment"
    ],
    answer:
        "A client with PID whose BP is 80/38 mm Hg and who is becoming increasingly confused",
    rationale:
        "Hypotension and altered mental status indicate poor tissue perfusion and possible septic shock requiring immediate intervention.",
    takeaway:
        "Perfusion problems always take priority."
},

{
    id: "STI-025",
    caseId: "STI-CASE-025",
    patient: randomPatient(),
    topic: "Sexually Transmitted Infections",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with severe pelvic inflammatory disease has BP 74/36 mm Hg, HR 150/min, RR 38/min, temperature 104°F (40°C), SpO₂ 90%, lactate 6.5 mmol/L, urine output 12 mL/hr, and increasing confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
        "Administer an oral analgesic and reassess in one hour.",
        "Provide discharge teaching about STI prevention.",
        "Encourage oral fluids and continue routine monitoring."
    ],
    answer:
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
    rationale:
        "The client demonstrates septic shock with profound hypotension, elevated lactate, altered mental status, and poor organ perfusion. Immediate implementation of the sepsis bundle is lifesaving.",
    takeaway:
        "Regardless of the infection source, septic shock requires immediate oxygenation, rapid IV fluids, broad-spectrum antibiotics, perfusion monitoring, and rapid escalation of care."
},

];
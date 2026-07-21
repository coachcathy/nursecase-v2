const skinSoftTissueInfectionsQuestions = [

{
    id: "SSTI-001",
    caseId: "SSTI-CASE-001",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Cellulitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with cellulitis?",
    choices: [
        "Localized redness, warmth, swelling, and tenderness",
        "Dry, flaky skin without redness",
        "Painless black eschar with no surrounding erythema",
        "Generalized itching without skin changes"
    ],
    answer:
        "Localized redness, warmth, swelling, and tenderness",
    rationale:
        "Cellulitis is a bacterial infection of the dermis and subcutaneous tissue characterized by erythema, warmth, edema, tenderness, and poorly defined borders.",
    takeaway:
        "Cellulitis presents with redness, warmth, swelling, and pain."
},

{
    id: "SSTI-002",
    caseId: "SSTI-CASE-002",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client is at the greatest risk for developing cellulitis?",
    choices: [
        "A client with diabetes mellitus and a foot ulcer",
        "A healthy young adult with intact skin",
        "A client wearing prescription glasses",
        "A client recovering from seasonal allergies"
    ],
    answer:
        "A client with diabetes mellitus and a foot ulcer",
    rationale:
        "Breaks in the skin, diabetes, peripheral vascular disease, and immunosuppression significantly increase the risk of cellulitis.",
    takeaway:
        "Skin breakdown plus diabetes greatly increases cellulitis risk."
},

{
    id: "SSTI-003",
    caseId: "SSTI-CASE-003",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are commonly associated with cellulitis? Select all that apply.",
    choices: [
        "Localized warmth",
        "Erythema",
        "Edema",
        "Tenderness",
        "Fever",
        "Painless blanching rash"
    ],
    answer: [
        "Localized warmth",
        "Erythema",
        "Edema",
        "Tenderness",
        "Fever"
    ],
    rationale:
        "Cellulitis commonly presents with localized erythema, warmth, edema, tenderness, and may be accompanied by systemic symptoms such as fever.",
    takeaway:
        "Warm, red, swollen, painful skin is classic cellulitis."
},

{
    id: "SSTI-004",
    caseId: "SSTI-CASE-004",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "MRSA",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "A client is admitted with a draining MRSA wound. Which isolation precaution is appropriate?",
    choices: [
        "Contact Precautions",
        "Droplet Precautions",
        "Airborne Precautions",
        "Protective Environment"
    ],
    answer:
        "Contact Precautions",
    rationale:
        "MRSA transmitted by direct or indirect contact requires Contact Precautions including gloves and gowns during direct care.",
    takeaway:
        "MRSA wounds require Contact Precautions."
},

{
    id: "SSTI-005",
    caseId: "SSTI-CASE-005",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a skin infection should the nurse assess first?",
    choices: [
        "A client with cellulitis who has BP 84/46 mm Hg, HR 132/min, temperature 103°F (39.4°C), and confusion",
        "A client requesting pain medication for an abscess",
        "A client asking about wound care instructions",
        "A client with localized redness awaiting antibiotics"
    ],
    answer:
        "A client with cellulitis who has BP 84/46 mm Hg, HR 132/min, temperature 103°F (39.4°C), and confusion",
    rationale:
        "Hypotension, fever, tachycardia, and altered mental status indicate sepsis requiring immediate intervention.",
    takeaway:
        "Always assess for sepsis in severe skin infections."
},

{
    id: "SSTI-006",
    caseId: "SSTI-CASE-006",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention is appropriate for a client with cellulitis of the lower extremity?",
    choices: [
        "Elevate the affected extremity above heart level.",
        "Apply ice continuously.",
        "Massage the affected area every shift.",
        "Restrict all oral fluids."
    ],
    answer:
        "Elevate the affected extremity above heart level.",
    rationale:
        "Elevation helps reduce edema and discomfort while promoting venous and lymphatic drainage.",
    takeaway:
        "Elevate infected extremities to reduce swelling."
},

{
    id: "SSTI-007",
    caseId: "SSTI-CASE-007",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of antibiotic therapy for cellulitis?",
    choices: [
        "I'll finish the entire antibiotic prescription even if the redness improves.",
        "I'll stop taking the medication when my pain is gone.",
        "I'll save extra antibiotics for future skin infections.",
        "I'll only take the medication when the wound drains."
    ],
    answer:
        "I'll finish the entire antibiotic prescription even if the redness improves.",
    rationale:
        "Completing the prescribed antibiotic regimen helps eradicate the infection and reduces recurrence and resistance.",
    takeaway:
        "Always complete the full antibiotic course."
},

{
    id: "SSTI-008",
    caseId: "SSTI-CASE-008",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication of cellulitis is the nurse's highest priority to recognize?",
    choices: [
        "Sepsis",
        "Dry skin",
        "Scar formation",
        "Pruritus"
    ],
    answer:
        "Sepsis",
    rationale:
        "Cellulitis can rapidly progress to bacteremia and septic shock if untreated, making early recognition essential.",
    takeaway:
        "The greatest danger of cellulitis is progression to sepsis."
},

{
    id: "SSTI-009",
    caseId: "SSTI-CASE-009",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates that treatment for cellulitis has been effective?",
    choices: [
        "Decreased redness, swelling, and tenderness",
        "Expanding erythema beyond the marked borders",
        "Increasing purulent drainage",
        "New onset fever and chills"
    ],
    answer:
        "Decreased redness, swelling, and tenderness",
    rationale:
        "Clinical improvement is demonstrated by decreasing erythema, edema, tenderness, and the absence of new systemic symptoms.",
    takeaway:
        "Mark wound borders to monitor improvement."
},

{
    id: "SSTI-010",
    caseId: "SSTI-CASE-010",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Necrotizing Fasciitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding should cause the nurse to suspect necrotizing fasciitis rather than uncomplicated cellulitis?",
    choices: [
        "Severe pain out of proportion to the visible wound",
        "Mild redness around a small abrasion",
        "Localized itching without drainage",
        "Dry scaling skin"
    ],
    answer:
        "Severe pain out of proportion to the visible wound",
    rationale:
        "Necrotizing fasciitis often presents with excruciating pain that is disproportionate to physical findings and rapidly progresses to tissue necrosis and systemic toxicity.",
    takeaway:
        "Pain out of proportion = suspect necrotizing fasciitis."
},

{
    id: "SSTI-011",
    caseId: "SSTI-CASE-011",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with a skin infection develops HR 138/min, BP 82/44 mm Hg, RR 32/min, temperature 103°F (39.4°C), and confusion. What is the nurse's priority action?",
    choices: [
        "Initiate the sepsis protocol and notify the provider immediately.",
        "Administer an oral analgesic.",
        "Apply warm compresses.",
        "Document the assessment findings."
    ],
    answer:
        "Initiate the sepsis protocol and notify the provider immediately.",
    rationale:
        "These findings indicate septic shock requiring immediate recognition and treatment.",
    takeaway:
        "Recognize sepsis early in severe skin infections."
},

{
    id: "SSTI-012",
    caseId: "SSTI-CASE-012",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "MRSA",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions are appropriate for a client with a draining MRSA wound? Select all that apply.",
    choices: [
        "Wear gloves when providing care.",
        "Wear a gown if clothing may contact drainage.",
        "Perform hand hygiene before and after care.",
        "Dedicate equipment to the client when possible.",
        "Dispose of contaminated dressings appropriately.",
        "Use only Standard Precautions."
    ],
    answer: [
        "Wear gloves when providing care.",
        "Wear a gown if clothing may contact drainage.",
        "Perform hand hygiene before and after care.",
        "Dedicate equipment to the client when possible.",
        "Dispose of contaminated dressings appropriately."
    ],
    rationale:
        "MRSA requires Contact Precautions with meticulous hand hygiene, gloves, gowns, dedicated equipment, and proper disposal of contaminated materials.",
    takeaway:
        "MRSA = Contact Precautions plus excellent hand hygiene."
},

{
    id: "SSTI-013",
    caseId: "SSTI-CASE-013",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Abscess",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of a skin abscess?",
    choices: [
        "A localized fluctuant collection of purulent drainage",
        "Diffuse redness without swelling",
        "Dry scaling plaques",
        "Painless bruising"
    ],
    answer:
        "A localized fluctuant collection of purulent drainage",
    rationale:
        "An abscess is a localized collection of pus that often feels fluctuant on palpation.",
    takeaway:
        "Abscess = localized pocket of pus."
},

{
    id: "SSTI-014",
    caseId: "SSTI-CASE-014",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates correct understanding of wound care for cellulitis?",
    choices: [
        "I'll wash my hands before and after touching the wound.",
        "I'll stop my antibiotics when the redness fades.",
        "I'll share towels with family members.",
        "I'll keep the wound uncovered at all times."
    ],
    answer:
        "I'll wash my hands before and after touching the wound.",
    rationale:
        "Good hand hygiene and proper wound care reduce transmission and promote healing.",
    takeaway:
        "Hand hygiene is essential for wound care."
},

{
    id: "SSTI-015",
    caseId: "SSTI-CASE-015",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with necrotizing fasciitis develops BP 78/40 mm Hg, HR 144/min, RR 36/min, lactate 6.0 mmol/L, minimal urine output, and increasing confusion. Which complication should the nurse recognize?",
    choices: [
        "Septic shock",
        "Localized cellulitis",
        "Mild dehydration",
        "Healing wound"
    ],
    answer:
        "Septic shock",
    rationale:
        "Necrotizing fasciitis can rapidly lead to overwhelming sepsis with profound hypotension, elevated lactate, and organ dysfunction.",
    takeaway:
        "Necrotizing fasciitis is a surgical and medical emergency."
},

{
    id: "SSTI-016",
    caseId: "SSTI-CASE-016",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with rapidly spreading cellulitis, hypotension, and altered mental status",
        "A client requesting dressing supplies",
        "A client with improving cellulitis receiving oral antibiotics",
        "A client asking about discharge instructions"
    ],
    answer:
        "A client with rapidly spreading cellulitis, hypotension, and altered mental status",
    rationale:
        "Rapid progression with signs of poor perfusion indicates septic shock requiring immediate intervention.",
    takeaway:
        "Rapidly spreading infection plus hypotension = emergency."
},

{
    id: "SSTI-017",
    caseId: "SSTI-CASE-017",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Wound Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding should the nurse report immediately for a client being treated for cellulitis?",
    choices: [
        "Redness extending beyond the previously marked borders",
        "Pain decreasing from 8/10 to 3/10",
        "Mild itching around the healing wound",
        "Temperature of 98.6°F (37°C)"
    ],
    answer:
        "Redness extending beyond the previously marked borders",
    rationale:
        "Expanding erythema despite treatment suggests worsening infection or ineffective therapy and requires prompt provider notification.",
    takeaway:
        "Always outline cellulitis borders to monitor progression."
},

{
    id: "SSTI-018",
    caseId: "SSTI-CASE-018",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching points should the nurse include to help prevent recurrent skin infections? Select all that apply.",
    choices: [
        "Inspect the skin daily.",
        "Keep wounds clean and covered.",
        "Practice regular hand hygiene.",
        "Control blood glucose if diabetic.",
        "Avoid sharing personal items such as towels or razors.",
        "Stop antibiotics when redness improves."
    ],
    answer: [
        "Inspect the skin daily.",
        "Keep wounds clean and covered.",
        "Practice regular hand hygiene.",
        "Control blood glucose if diabetic.",
        "Avoid sharing personal items such as towels or razors."
    ],
    rationale:
        "Skin inspection, proper wound care, hand hygiene, glycemic control, and avoiding shared personal items reduce recurrent skin infections.",
    takeaway:
        "Prevent infection through skin care and hygiene."
},

{
    id: "SSTI-019",
    caseId: "SSTI-CASE-019",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Abscess",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which intervention is commonly required for a large skin abscess?",
    choices: [
        "Incision and drainage",
        "Routine massage of the area",
        "Application of ice every hour",
        "Complete bedrest"
    ],
    answer:
        "Incision and drainage",
    rationale:
        "Large abscesses typically require incision and drainage in addition to antibiotic therapy because antibiotics alone often cannot penetrate the collection of pus.",
    takeaway:
        "Large abscesses usually require drainage."
},

{
    id: "SSTI-020",
    caseId: "SSTI-CASE-020",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a skin infection requires immediate nursing intervention?",
    choices: [
        "A client with severe pain, rapidly spreading purple discoloration, crepitus, BP 82/44 mm Hg, and confusion",
        "A client requesting dressing supplies",
        "A client with localized cellulitis receiving oral antibiotics",
        "A client asking about discharge instructions"
    ],
    answer:
        "A client with severe pain, rapidly spreading purple discoloration, crepitus, BP 82/44 mm Hg, and confusion",
    rationale:
        "Rapid tissue destruction, crepitus, hypotension, and altered mental status suggest necrotizing fasciitis with septic shock requiring emergency intervention.",
    takeaway:
        "Crepitus + pain out of proportion = surgical emergency."
},

{
    id: "SSTI-021",
    caseId: "SSTI-CASE-021",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "MRSA",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which client statement demonstrates understanding of preventing MRSA transmission at home?",
    choices: [
        "I'll avoid sharing towels, razors, and personal hygiene items.",
        "I'll stop antibiotics when the drainage stops.",
        "I'll leave my wound uncovered while sleeping.",
        "I'll only wash my hands after changing the dressing."
    ],
    answer:
        "I'll avoid sharing towels, razors, and personal hygiene items.",
    rationale:
        "MRSA spreads through direct contact and contaminated personal items. Hand hygiene and avoiding shared items reduce transmission.",
    takeaway:
        "MRSA prevention starts with hand hygiene and not sharing personal items."
},

{
    id: "SSTI-022",
    caseId: "SSTI-CASE-022",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client hospitalized with cellulitis? Select all that apply.",
    choices: [
        "Administer prescribed antibiotics promptly.",
        "Monitor the borders of erythema.",
        "Elevate the affected extremity.",
        "Assess for fever and increasing pain.",
        "Monitor for signs of sepsis.",
        "Massage the affected tissue every shift."
    ],
    answer: [
        "Administer prescribed antibiotics promptly.",
        "Monitor the borders of erythema.",
        "Elevate the affected extremity.",
        "Assess for fever and increasing pain.",
        "Monitor for signs of sepsis."
    ],
    rationale:
        "Treatment includes antibiotics, edema reduction, frequent assessment, and monitoring for progression to systemic infection.",
    takeaway:
        "Treat locally while watching closely for systemic infection."
},

{
    id: "SSTI-023",
    caseId: "SSTI-CASE-023",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with necrotizing fasciitis develops BP 76/38 mm Hg, HR 148/min, RR 38/min, lactate 6.5 mmol/L, minimal urine output, and worsening confusion. Which complication should the nurse recognize?",
    choices: [
        "Septic shock with multiple organ hypoperfusion",
        "Localized cellulitis",
        "Expected postoperative recovery",
        "Mild dehydration"
    ],
    answer:
        "Septic shock with multiple organ hypoperfusion",
    rationale:
        "Persistent hypotension, elevated lactate, oliguria, and altered mental status indicate severe septic shock with end-organ dysfunction.",
    takeaway:
        "Hypotension + lactate elevation + oliguria = septic shock."
},

{
    id: "SSTI-024",
    caseId: "SSTI-CASE-024",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with rapidly spreading cellulitis, HR 142/min, BP 80/40 mm Hg, and decreasing urine output",
        "A client awaiting discharge after incision and drainage",
        "A client with a healing abscess requesting supplies",
        "A client asking for dressing change education"
    ],
    answer:
        "A client with rapidly spreading cellulitis, HR 142/min, BP 80/40 mm Hg, and decreasing urine output",
    rationale:
        "Signs of septic shock and poor organ perfusion take priority over stable postoperative or education needs.",
    takeaway:
        "Perfusion always takes priority."
},

{
    id: "SSTI-025",
    caseId: "SSTI-CASE-025",
    patient: randomPatient(),
    topic: "Skin & Soft Tissue Infections",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with necrotizing fasciitis has BP 74/36 mm Hg, HR 150/min, RR 40/min, temperature 103.9°F (39.9°C), SpO₂ 89%, lactate 6.8 mmol/L, and increasing confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and prepare the client for emergent surgical debridement.",
        "Administer an oral analgesic and reassess in one hour.",
        "Apply warm compresses and elevate the extremity.",
        "Document the assessment before contacting the provider."
    ],
    answer:
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and prepare the client for emergent surgical debridement.",
    rationale:
        "Necrotizing fasciitis is a surgical emergency. Septic shock requires immediate resuscitation, broad-spectrum antibiotics, and urgent surgical debridement to remove necrotic tissue.",
    takeaway:
        "Necrotizing fasciitis = sepsis management + immediate surgery."
},

];
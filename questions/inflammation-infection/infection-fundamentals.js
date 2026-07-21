const infectionFundamentalsQuestions = [

{
    id: "INFECTION-001",
    caseId: "INFECTION-CASE-001",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Chain of Infection",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which statement best describes the chain of infection?",
    choices: [
        "A series of links that allow an infectious organism to spread from one host to another",
        "A laboratory method used to identify bacteria",
        "The body's immune response to inflammation",
        "The process of wound healing after surgery"
    ],
    answer:
        "A series of links that allow an infectious organism to spread from one host to another",
    rationale:
        "The chain of infection includes the infectious agent, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host.",
    takeaway:
        "Breaking any link in the chain helps prevent infection."
},

{
    id: "INFECTION-002",
    caseId: "INFECTION-CASE-002",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Standard Precautions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which intervention is included in Standard Precautions for every client?",
    choices: [
        "Perform hand hygiene before and after client contact.",
        "Wear an N95 respirator for every client.",
        "Place every client on airborne precautions.",
        "Wear sterile gloves for all assessments."
    ],
    answer:
        "Perform hand hygiene before and after client contact.",
    rationale:
        "Hand hygiene is the single most effective intervention to reduce healthcare-associated infections and is required for every client.",
    takeaway:
        "Hand hygiene is the foundation of infection prevention."
},

{
    id: "INFECTION-003",
    caseId: "INFECTION-CASE-003",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Signs of Infection",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are common manifestations of infection? Select all that apply.",
    choices: [
        "Fever",
        "Redness",
        "Swelling",
        "Purulent drainage",
        "Pain",
        "Bradycardia"
    ],
    answer: [
        "Fever",
        "Redness",
        "Swelling",
        "Purulent drainage",
        "Pain"
    ],
    rationale:
        "The classic manifestations of infection include redness, warmth, swelling, pain, fever, and purulent drainage.",
    takeaway:
        "Remember the classic signs of infection and inflammation."
},

{
    id: "INFECTION-004",
    caseId: "INFECTION-CASE-004",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding most strongly supports the presence of an acute bacterial infection?",
    choices: [
        "Elevated white blood cell count with neutrophilia",
        "Low platelet count",
        "Elevated troponin",
        "Low potassium"
    ],
    answer:
        "Elevated white blood cell count with neutrophilia",
    rationale:
        "Bacterial infections commonly produce leukocytosis with an increased neutrophil count.",
    takeaway:
        "Neutrophils fight bacterial infections."
},

{
    id: "INFECTION-005",
    caseId: "INFECTION-CASE-005",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with temperature 103.1°F (39.5°C), BP 82/48 mm Hg, and confusion",
        "A client requesting acetaminophen for a fever of 100.4°F (38°C)",
        "A client asking about discharge instructions",
        "A client reporting a sore throat"
    ],
    answer:
        "A client with temperature 103.1°F (39.5°C), BP 82/48 mm Hg, and confusion",
    rationale:
        "Hypotension, fever, and altered mental status suggest sepsis with poor perfusion requiring immediate intervention.",
    takeaway:
        "Suspected sepsis always takes priority."
},

{
    id: "INFECTION-006",
    caseId: "INFECTION-CASE-006",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Medical Asepsis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing action best demonstrates medical asepsis?",
    choices: [
        "Cleaning shared equipment between clients",
        "Using sterile gloves to obtain a blood pressure",
        "Wearing a surgical mask while charting",
        "Changing sterile dressings without hand hygiene"
    ],
    answer:
        "Cleaning shared equipment between clients",
    rationale:
        "Medical asepsis reduces the spread of microorganisms through proper cleaning, hand hygiene, and environmental control.",
    takeaway:
        "Medical asepsis = clean technique."
},

{
    id: "INFECTION-007",
    caseId: "INFECTION-CASE-007",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates correct understanding of antibiotic therapy?",
    choices: [
        "I will finish the entire prescription even if I feel better.",
        "I'll stop taking the antibiotic when my fever is gone.",
        "I'll save leftover antibiotics for future illnesses.",
        "I'll share my antibiotics with family members."
    ],
    answer:
        "I will finish the entire prescription even if I feel better.",
    rationale:
        "Completing the prescribed antibiotic course helps eradicate infection and reduce antibiotic resistance.",
    takeaway:
        "Always complete prescribed antibiotics."
},

{
    id: "INFECTION-008",
    caseId: "INFECTION-CASE-008",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's highest priority to recognize early in a client with a severe infection?",
    choices: [
        "Sepsis",
        "Constipation",
        "Hypertension",
        "Osteoporosis"
    ],
    answer:
        "Sepsis",
    rationale:
        "Sepsis is a life-threatening organ dysfunction caused by a dysregulated response to infection and requires rapid treatment.",
    takeaway:
        "Early recognition of sepsis saves lives."
},

{
    id: "INFECTION-009",
    caseId: "INFECTION-CASE-009",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Chain of Infection",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing intervention directly breaks the mode of transmission in the chain of infection?",
    choices: [
        "Performing proper hand hygiene",
        "Administering antibiotics",
        "Increasing dietary protein",
        "Providing supplemental oxygen"
    ],
    answer:
        "Performing proper hand hygiene",
    rationale:
        "Hand hygiene interrupts transmission of microorganisms between clients, healthcare workers, and the environment.",
    takeaway:
        "Hand hygiene breaks the chain of infection."
},

{
    id: "INFECTION-010",
    caseId: "INFECTION-CASE-010",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding most strongly suggests a localized wound infection?",
    choices: [
        "Warmth, redness, swelling, and purulent drainage",
        "Cool, pale skin around the incision",
        "Dry, well-approximated wound edges",
        "Slight bruising around the incision"
    ],
    answer:
        "Warmth, redness, swelling, and purulent drainage",
    rationale:
        "Localized infections commonly produce erythema, warmth, edema, pain, and purulent drainage.",
    takeaway:
        "Purulent drainage strongly suggests infection."
},

{
    id: "INFECTION-011",
    caseId: "INFECTION-CASE-011",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pneumonia has a temperature of 103°F (39.4°C), HR 132/min, RR 32/min, BP 84/46 mm Hg, and new confusion. What is the nurse's priority action?",
    choices: [
        "Activate the sepsis protocol and notify the provider immediately.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids.",
        "Document the assessment findings."
    ],
    answer:
        "Activate the sepsis protocol and notify the provider immediately.",
    rationale:
        "Hypotension, tachycardia, tachypnea, fever, and altered mental status are concerning for sepsis requiring immediate intervention.",
    takeaway:
        "Recognize sepsis early and intervene rapidly."
},

{
    id: "INFECTION-012",
    caseId: "INFECTION-CASE-012",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Transmission-Based Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which illnesses require Contact Precautions? Select all that apply.",
    choices: [
        "Clostridioides difficile",
        "MRSA wound infection",
        "Norovirus",
        "RSV",
        "Scabies",
        "Pulmonary tuberculosis"
    ],
    answer: [
        "Clostridioides difficile",
        "MRSA wound infection",
        "Norovirus",
        "RSV",
        "Scabies"
    ],
    rationale:
        "Contact precautions are used for organisms spread by direct or indirect contact. Tuberculosis requires airborne precautions.",
    takeaway:
        "Think skin, stool, and resistant organisms for Contact Precautions."
},

{
    id: "INFECTION-013",
    caseId: "INFECTION-CASE-013",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value indicates the nurse should closely monitor a client receiving chemotherapy for infection?",
    choices: [
        "Absolute neutrophil count (ANC) of 450/mm³",
        "Hemoglobin of 12.8 g/dL",
        "Platelet count of 210,000/mm³",
        "Sodium of 139 mEq/L"
    ],
    answer:
        "Absolute neutrophil count (ANC) of 450/mm³",
    rationale:
        "An ANC below 500/mm³ indicates severe neutropenia and an extremely high risk for infection.",
    takeaway:
        "ANC <500 = severe infection risk."
},

{
    id: "INFECTION-014",
    caseId: "INFECTION-CASE-014",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates the need for additional teaching about preventing infection?",
    choices: [
        "I'll stop washing my hands once my antibiotics start working.",
        "I'll cover my cough when I'm sick.",
        "I'll wash my hands before eating.",
        "I'll keep my vaccinations up to date."
    ],
    answer:
        "I'll stop washing my hands once my antibiotics start working.",
    rationale:
        "Hand hygiene remains essential regardless of antibiotic therapy and is the primary method of preventing transmission.",
    takeaway:
        "Antibiotics never replace hand hygiene."
},

{
    id: "INFECTION-015",
    caseId: "INFECTION-CASE-015",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has fever, chills, HR 128/min, RR 30/min, BP 86/48 mm Hg, lactate 4.3 mmol/L, and WBC 19,800/mm³. Which complication should the nurse suspect?",
    choices: [
        "Septic shock",
        "Hypoglycemia",
        "Pulmonary edema",
        "Acute appendicitis"
    ],
    answer:
        "Septic shock",
    rationale:
        "Persistent hypotension with elevated lactate despite infection strongly suggests septic shock.",
    takeaway:
        "Hypotension plus elevated lactate = septic shock until proven otherwise."
},

{
    id: "INFECTION-016",
    caseId: "INFECTION-CASE-016",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with BP 82/44 mm Hg, HR 136/min, fever, and increasing confusion",
        "A client requesting pain medication",
        "A client asking when antibiotics will be discontinued",
        "A client with redness around an IV site"
    ],
    answer:
        "A client with BP 82/44 mm Hg, HR 136/min, fever, and increasing confusion",
    rationale:
        "These findings indicate possible septic shock requiring immediate assessment and intervention.",
    takeaway:
        "Shock always takes priority over localized infection."
},

{
    id: "INFECTION-017",
    caseId: "INFECTION-CASE-017",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Chain of Infection",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing intervention eliminates the portal of entry in the chain of infection after inserting an IV catheter?",
    choices: [
        "Maintaining a clean, dry, intact dressing over the insertion site",
        "Encouraging increased oral fluids",
        "Monitoring intake and output",
        "Administering pain medication"
    ],
    answer:
        "Maintaining a clean, dry, intact dressing over the insertion site",
    rationale:
        "An intact dressing helps prevent microorganisms from entering through the IV insertion site, reducing infection risk.",
    takeaway:
        "Protect portals of entry with proper aseptic technique."
},

{
    id: "INFECTION-018",
    caseId: "INFECTION-CASE-018",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Transmission-Based Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which diseases require Droplet Precautions? Select all that apply.",
    choices: [
        "Influenza",
        "Pertussis",
        "Meningococcal meningitis",
        "COVID-19 (routine care)",
        "Mumps",
        "Tuberculosis"
    ],
    answer: [
        "Influenza",
        "Pertussis",
        "Meningococcal meningitis",
        "COVID-19 (routine care)",
        "Mumps"
    ],
    rationale:
        "Droplet Precautions are required for infections spread by large respiratory droplets. Tuberculosis requires Airborne Precautions.",
    takeaway:
        "Influenza, pertussis, meningitis, COVID-19, and mumps = Droplet."
},

{
    id: "INFECTION-019",
    caseId: "INFECTION-CASE-019",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Inflammatory Response",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which laboratory value is most consistent with improvement of a bacterial infection?",
    choices: [
        "White blood cell count returning to the normal range",
        "Increasing serum lactate",
        "Decreasing platelet count",
        "Increasing creatinine level"
    ],
    answer:
        "White blood cell count returning to the normal range",
    rationale:
        "As bacterial infections resolve, the white blood cell count generally trends toward normal.",
    takeaway:
        "Trend WBCs to monitor infection response."
},

{
    id: "INFECTION-020",
    caseId: "INFECTION-CASE-020",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which hospitalized client is at greatest risk for developing a healthcare-associated infection?",
    choices: [
        "A client with a central venous catheter and urinary catheter",
        "A client receiving oral acetaminophen",
        "A client recovering from a sprained ankle",
        "A client awaiting discharge after an uncomplicated procedure"
    ],
    answer:
        "A client with a central venous catheter and urinary catheter",
    rationale:
        "Indwelling invasive devices significantly increase the risk for healthcare-associated infections.",
    takeaway:
        "Every invasive device increases infection risk."
},

{
    id: "INFECTION-021",
    caseId: "INFECTION-CASE-021",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement demonstrates understanding of infection prevention at home?",
    choices: [
        "I'll wash my hands before caring for my wound.",
        "I'll reuse dirty dressings if they look clean.",
        "I'll stop taking antibiotics when I feel better.",
        "I'll leave my wound uncovered at all times."
    ],
    answer:
        "I'll wash my hands before caring for my wound.",
    rationale:
        "Proper hand hygiene before wound care is one of the most effective methods of preventing infection.",
    takeaway:
        "Clean hands before every dressing change."
},

{
    id: "INFECTION-022",
    caseId: "INFECTION-CASE-022",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions help reduce healthcare-associated infections? Select all that apply.",
    choices: [
        "Perform hand hygiene.",
        "Remove invasive devices as soon as possible.",
        "Use aseptic technique for invasive procedures.",
        "Disinfect shared equipment.",
        "Follow transmission-based precautions.",
        "Wear sterile gloves for every client interaction."
    ],
    answer: [
        "Perform hand hygiene.",
        "Remove invasive devices as soon as possible.",
        "Use aseptic technique for invasive procedures.",
        "Disinfect shared equipment.",
        "Follow transmission-based precautions."
    ],
    rationale:
        "Evidence-based infection prevention includes hand hygiene, aseptic technique, device removal when no longer needed, equipment disinfection, and appropriate isolation precautions.",
    takeaway:
        "Prevent HAIs with consistent infection-control practices."
},

{
    id: "INFECTION-023",
    caseId: "INFECTION-CASE-023",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has chills, temperature 102.8°F (39.3°C), HR 124/min, RR 28/min, BP 88/50 mm Hg, decreased urine output, and lactate 4.8 mmol/L. Which complication should the nurse suspect?",
    choices: [
        "Septic shock",
        "Hypoglycemia",
        "Acute heart failure",
        "Pulmonary embolism"
    ],
    answer:
        "Septic shock",
    rationale:
        "Persistent hypotension with elevated lactate and evidence of organ hypoperfusion is consistent with septic shock.",
    takeaway:
        "Hypotension, elevated lactate, and organ dysfunction indicate septic shock."
},

{
    id: "INFECTION-024",
    caseId: "INFECTION-CASE-024",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with suspected sepsis whose MAP is 58 mm Hg",
        "A client requesting discharge teaching",
        "A client with a healing surgical incision",
        "A client asking for a snack"
    ],
    answer:
        "A client with suspected sepsis whose MAP is 58 mm Hg",
    rationale:
        "A MAP below 65 mm Hg indicates inadequate tissue perfusion and requires immediate intervention.",
    takeaway:
        "MAP <65 mm Hg is a critical sign of poor perfusion."
},

{
    id: "INFECTION-025",
    caseId: "INFECTION-CASE-025",
    patient: randomPatient(),
    topic: "Infection Fundamentals",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A hospitalized client has a temperature of 103.3°F (39.6°C), HR 138/min, RR 34/min, BP 80/42 mm Hg, MAP 55 mm Hg, lactate 5.2 mmol/L, WBC 22,400/mm³, and decreased urine output. Which nursing intervention is the priority?",
    choices: [
        "Activate the sepsis protocol, obtain cultures as ordered, administer broad-spectrum antibiotics and IV fluids promptly, and notify the provider immediately.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids and ambulation.",
        "Document the findings and continue routine monitoring."
    ],
    answer:
        "Activate the sepsis protocol, obtain cultures as ordered, administer broad-spectrum antibiotics and IV fluids promptly, and notify the provider immediately.",
    rationale:
        "The client demonstrates septic shock with hypotension, elevated lactate, tachycardia, and evidence of organ hypoperfusion. Rapid sepsis management is essential to improve survival.",
    takeaway:
        "Early recognition and rapid treatment are the keys to surviving septic shock."
},

];
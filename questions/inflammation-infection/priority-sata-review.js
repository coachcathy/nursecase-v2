const prioritySataReviewQuestions = [

{
    id: "PRIORITY-001",
    caseId: "PRIORITY-CASE-001",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Sepsis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with BP 82/44 mm Hg, HR 136/min, temperature 103°F (39.4°C), and new confusion",
        "A client requesting pain medication for an incision",
        "A client asking when breakfast will arrive",
        "A client preparing for discharge"
    ],
    answer:
        "A client with BP 82/44 mm Hg, HR 136/min, temperature 103°F (39.4°C), and new confusion",
    rationale:
        "Hypotension, fever, tachycardia, and altered mental status indicate septic shock requiring immediate intervention.",
    takeaway:
        "Shock always takes priority."
},

{
    id: "PRIORITY-002",
    caseId: "PRIORITY-CASE-002",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Chain of Infection",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions help break the chain of infection? Select all that apply.",
    choices: [
        "Perform hand hygiene.",
        "Use appropriate PPE.",
        "Disinfect shared equipment.",
        "Remove invasive devices when no longer needed.",
        "Cover coughs and sneezes.",
        "Reuse contaminated gloves."
    ],
    answer: [
        "Perform hand hygiene.",
        "Use appropriate PPE.",
        "Disinfect shared equipment.",
        "Remove invasive devices when no longer needed.",
        "Cover coughs and sneezes."
    ],
    rationale:
        "Evidence-based infection prevention includes hand hygiene, PPE, environmental cleaning, respiratory hygiene, and minimizing invasive devices.",
    takeaway:
        "Breaking any link prevents infection."
},

{
    id: "PRIORITY-003",
    caseId: "PRIORITY-CASE-003",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Respiratory Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client requires immediate intervention?",
    choices: [
        "A client with pneumonia whose SpO₂ is 82% despite oxygen therapy",
        "A client with a productive cough requesting tissues",
        "A client with a temperature of 100.9°F (38.3°C)",
        "A client asking about discharge medications"
    ],
    answer:
        "A client with pneumonia whose SpO₂ is 82% despite oxygen therapy",
    rationale:
        "Persistent hypoxemia indicates worsening respiratory failure requiring immediate intervention.",
    takeaway:
        "Airway and breathing come first."
},

{
    id: "PRIORITY-004",
    caseId: "PRIORITY-CASE-004",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Tuberculosis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which interventions are appropriate for a client with active pulmonary tuberculosis? Select all that apply.",
    choices: [
        "Negative-pressure room",
        "Fit-tested N95 respirator",
        "Door remains closed",
        "Limit client transport",
        "Encourage medication adherence",
        "Standard precautions only"
    ],
    answer: [
        "Negative-pressure room",
        "Fit-tested N95 respirator",
        "Door remains closed",
        "Limit client transport",
        "Encourage medication adherence"
    ],
    rationale:
        "TB requires Airborne Precautions including a negative-pressure room, N95 respirator, closed door, and limiting transport.",
    takeaway:
        "Remember: TB = Airborne + N95 + Negative Pressure."
},

{
    id: "PRIORITY-005",
    caseId: "PRIORITY-CASE-005",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Urinary Tract Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a urinary tract infection should the nurse assess first?",
    choices: [
        "A client with BP 80/42 mm Hg, HR 138/min, fever, and confusion",
        "A client reporting urinary urgency",
        "A client requesting phenazopyridine",
        "A client asking when antibiotics will begin"
    ],
    answer:
        "A client with BP 80/42 mm Hg, HR 138/min, fever, and confusion",
    rationale:
        "These findings indicate uroseptic shock requiring immediate intervention.",
    takeaway:
        "UTIs can rapidly become life-threatening."
},

{
    id: "PRIORITY-006",
    caseId: "PRIORITY-CASE-006",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Isolation Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which diseases require Contact Precautions? Select all that apply.",
    choices: [
        "Clostridioides difficile",
        "MRSA wound infection",
        "Scabies",
        "RSV",
        "Norovirus",
        "Tuberculosis"
    ],
    answer: [
        "Clostridioides difficile",
        "MRSA wound infection",
        "Scabies",
        "RSV",
        "Norovirus"
    ],
    rationale:
        "These organisms spread primarily through direct or indirect contact. Tuberculosis requires Airborne Precautions.",
    takeaway:
        "Skin, stool, and resistant organisms usually require Contact Precautions."
},

{
    id: "PRIORITY-007",
    caseId: "PRIORITY-CASE-007",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Pediatric Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which pediatric client should the nurse assess first?",
    choices: [
        "A toddler with fever, mottled skin, delayed capillary refill, and lethargy",
        "A preschooler with otitis media",
        "A child requesting a popsicle",
        "A school-age child with a runny nose"
    ],
    answer:
        "A toddler with fever, mottled skin, delayed capillary refill, and lethargy",
    rationale:
        "These findings indicate pediatric septic shock with poor tissue perfusion.",
    takeaway:
        "Children compensate until they suddenly crash."
},

{
    id: "PRIORITY-008",
    caseId: "PRIORITY-CASE-008",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Sepsis Bundle",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which interventions are priorities when caring for a client with suspected septic shock? Select all that apply.",
    choices: [
        "Obtain cultures as ordered.",
        "Administer broad-spectrum antibiotics promptly.",
        "Begin rapid IV fluid resuscitation.",
        "Monitor lactate levels.",
        "Monitor urine output.",
        "Delay treatment until all laboratory results are available."
    ],
    answer: [
        "Obtain cultures as ordered.",
        "Administer broad-spectrum antibiotics promptly.",
        "Begin rapid IV fluid resuscitation.",
        "Monitor lactate levels.",
        "Monitor urine output."
    ],
    rationale:
        "The sepsis bundle emphasizes rapid cultures, antibiotics, IV fluids, lactate monitoring, and perfusion assessment.",
    takeaway:
        "Early recognition and rapid treatment improve survival."
},

{
    id: "PRIORITY-009",
    caseId: "PRIORITY-CASE-009",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Appendicitis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with suspected appendicitis should the nurse assess first?",
    choices: [
        "A client with sudden relief of abdominal pain followed by a rigid abdomen and BP 86/48 mm Hg",
        "A client with nausea and RLQ tenderness rated 6/10",
        "A client requesting pain medication",
        "A client waiting for abdominal CT results"
    ],
    answer:
        "A client with sudden relief of abdominal pain followed by a rigid abdomen and BP 86/48 mm Hg",
    rationale:
        "Sudden relief of pain followed by a rigid abdomen suggests appendiceal rupture with peritonitis and septic shock.",
    takeaway:
        "Sudden pain relief in appendicitis is a dangerous sign—not improvement."
},

{
    id: "PRIORITY-010",
    caseId: "PRIORITY-CASE-010",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Postoperative Infection",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings suggest a postoperative wound infection? Select all that apply.",
    choices: [
        "Purulent drainage",
        "Increasing redness around the incision",
        "Fever",
        "Increasing pain after initial improvement",
        "Warmth at the incision",
        "Well-approximated edges without drainage"
    ],
    answer: [
        "Purulent drainage",
        "Increasing redness around the incision",
        "Fever",
        "Increasing pain after initial improvement",
        "Warmth at the incision"
    ],
    rationale:
        "Classic signs of wound infection include erythema, warmth, purulent drainage, fever, and increasing pain after an initial period of improvement.",
    takeaway:
        "Increasing pain after improvement is a red flag for infection."
},

{
    id: "PRIORITY-011",
    caseId: "PRIORITY-CASE-011",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Airway",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is caring for four hospitalized clients. Which client should be assessed first?",
    choices: [
        "A client with epiglottitis who is drooling and developing inspiratory stridor",
        "A client with influenza requesting acetaminophen",
        "A client with cellulitis requesting dressing supplies",
        "A client with cystitis reporting urinary urgency"
    ],
    answer:
        "A client with epiglottitis who is drooling and developing inspiratory stridor",
    rationale:
        "Airway obstruction is immediately life-threatening. Stridor and drooling indicate impending airway compromise.",
    takeaway:
        "ABCs always outweigh every other priority."
},

{
    id: "PRIORITY-012",
    caseId: "PRIORITY-CASE-012",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Inflammatory Response",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are considered classic manifestations of inflammation? Select all that apply.",
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
        "The five classic signs of inflammation are redness (rubor), heat (calor), swelling (tumor), pain (dolor), and loss of function.",
    takeaway:
        "Remember the five cardinal signs of inflammation."
},

{
    id: "PRIORITY-013",
    caseId: "PRIORITY-CASE-013",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Shock Recognition",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A hospitalized client has BP 78/40 mm Hg, HR 144/min, RR 34/min, temperature 103.5°F (39.7°C), urine output 12 mL/hr, and lactate 5.8 mmol/L. Which condition should the nurse recognize?",
    choices: [
        "Septic shock",
        "Stable inflammatory response",
        "Mild dehydration",
        "Localized infection"
    ],
    answer:
        "Septic shock",
    rationale:
        "Persistent hypotension, elevated lactate, oliguria, and tachycardia indicate septic shock with tissue hypoperfusion.",
    takeaway:
        "Hypotension + elevated lactate = think septic shock until proven otherwise."
},

{
    id: "PRIORITY-014",
    caseId: "PRIORITY-CASE-014",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Isolation Precautions",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The emergency department receives four clients simultaneously. Which client should be isolated immediately?",
    choices: [
        "A client with suspected pulmonary tuberculosis and productive cough",
        "A client with cellulitis of the leg",
        "A client with osteoarthritis",
        "A client with chronic constipation"
    ],
    answer:
        "A client with suspected pulmonary tuberculosis and productive cough",
    rationale:
        "Suspected pulmonary TB requires immediate Airborne Precautions to prevent transmission.",
    takeaway:
        "Isolate first, assess second for suspected TB."
},

{
    id: "PRIORITY-015",
    caseId: "PRIORITY-CASE-015",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Clinical Judgment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment findings indicate possible progression to septic shock? Select all that apply.",
    choices: [
        "Altered mental status",
        "Hypotension",
        "Decreased urine output",
        "Elevated lactate",
        "Persistent tachycardia",
        "Warm, dry skin with normal vital signs"
    ],
    answer: [
        "Altered mental status",
        "Hypotension",
        "Decreased urine output",
        "Elevated lactate",
        "Persistent tachycardia"
    ],
    rationale:
        "Altered perfusion, hypotension, oliguria, elevated lactate, and tachycardia are hallmark findings of septic shock.",
    takeaway:
        "Recognize septic shock before organ failure becomes irreversible."
},

{
    id: "PRIORITY-016",
    caseId: "PRIORITY-CASE-016",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Clostridioides difficile",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "A client is admitted with suspected Clostridioides difficile infection. Which nursing action should be implemented first?",
    choices: [
        "Initiate Contact Precautions immediately.",
        "Administer the prescribed antibiotic.",
        "Collect a stool specimen.",
        "Encourage oral fluids."
    ],
    answer:
        "Initiate Contact Precautions immediately.",
    rationale:
        "The priority is preventing transmission. Contact Precautions should be initiated as soon as C. difficile is suspected, even before confirmation.",
    takeaway:
        "Prevent transmission first, then begin treatment."
},

{
    id: "PRIORITY-017",
    caseId: "PRIORITY-CASE-017",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Hand Hygiene",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "When caring for a client with Clostridioides difficile, which interventions are appropriate? Select all that apply.",
    choices: [
        "Wash hands with soap and water after leaving the room.",
        "Wear gloves when entering the room.",
        "Wear a gown during direct care.",
        "Use a sporicidal disinfectant on equipment.",
        "Dedicate equipment to the client when possible.",
        "Rely only on alcohol-based hand sanitizer."
    ],
    answer: [
        "Wash hands with soap and water after leaving the room.",
        "Wear gloves when entering the room.",
        "Wear a gown during direct care.",
        "Use a sporicidal disinfectant on equipment.",
        "Dedicate equipment to the client when possible."
    ],
    rationale:
        "Alcohol-based sanitizer does not reliably destroy C. difficile spores. Soap and water, Contact Precautions, dedicated equipment, and sporicidal cleaning are recommended.",
    takeaway:
        "C. diff = Contact Precautions + soap and water."
},

{
    id: "PRIORITY-018",
    caseId: "PRIORITY-CASE-018",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Pneumonia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment finding in a client with pneumonia requires immediate intervention?",
    choices: [
        "SpO₂ 84% on 4 L/min nasal cannula",
        "Temperature of 101°F (38.3°C)",
        "Productive cough with yellow sputum",
        "Crackles in the right lower lobe"
    ],
    answer:
        "SpO₂ 84% on 4 L/min nasal cannula",
    rationale:
        "Severe hypoxemia indicates impaired oxygenation and threatens airway and breathing.",
    takeaway:
        "Low oxygen saturation is always an immediate priority."
},

{
    id: "PRIORITY-019",
    caseId: "PRIORITY-CASE-019",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Sepsis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with an abdominal infection has HR 138/min, BP 82/40 mm Hg, RR 32/min, lactate 5.2 mmol/L, urine output 18 mL/hr, and increasing confusion. Which action is the priority?",
    choices: [
        "Initiate the sepsis bundle immediately and notify the provider.",
        "Administer an oral antipyretic.",
        "Encourage oral fluids.",
        "Repeat the vital signs in one hour."
    ],
    answer:
        "Initiate the sepsis bundle immediately and notify the provider.",
    rationale:
        "Persistent hypotension with elevated lactate and evidence of organ hypoperfusion meets criteria for septic shock requiring immediate intervention.",
    takeaway:
        "Recognize shock early and begin the sepsis bundle without delay."
},

{
    id: "PRIORITY-020",
    caseId: "PRIORITY-CASE-020",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Isolation Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which diseases require Droplet Precautions? Select all that apply.",
    choices: [
        "Influenza",
        "Meningococcal meningitis",
        "Pertussis",
        "Mumps",
        "Rubella",
        "Pulmonary tuberculosis"
    ],
    answer: [
        "Influenza",
        "Meningococcal meningitis",
        "Pertussis",
        "Mumps",
        "Rubella"
    ],
    rationale:
        "Influenza, meningococcal disease, pertussis, mumps, and rubella require Droplet Precautions. Tuberculosis requires Airborne Precautions.",
    takeaway:
        "TB is Airborne—most other respiratory infections are Droplet."
},

{
    id: "PRIORITY-021",
    caseId: "PRIORITY-CASE-021",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Shock",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with HR 142/min, BP 78/38 mm Hg, cool clammy skin, and decreased urine output",
        "A client requesting assistance to the bathroom",
        "A client reporting incisional pain rated 5/10",
        "A client asking about tomorrow's discharge"
    ],
    answer:
        "A client with HR 142/min, BP 78/38 mm Hg, cool clammy skin, and decreased urine output",
    rationale:
        "These findings indicate circulatory collapse with poor tissue perfusion and require immediate intervention.",
    takeaway:
        "Poor perfusion always takes priority."
},

{
    id: "PRIORITY-022",
    caseId: "PRIORITY-CASE-022",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Infection Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which interventions reduce healthcare-associated infections? Select all that apply.",
    choices: [
        "Perform hand hygiene before and after client contact.",
        "Use aseptic technique for invasive procedures.",
        "Remove invasive devices as soon as possible.",
        "Disinfect high-touch surfaces routinely.",
        "Educate clients about respiratory hygiene.",
        "Reuse single-use equipment when supplies are low."
    ],
    answer: [
        "Perform hand hygiene before and after client contact.",
        "Use aseptic technique for invasive procedures.",
        "Remove invasive devices as soon as possible.",
        "Disinfect high-touch surfaces routinely.",
        "Educate clients about respiratory hygiene."
    ],
    rationale:
        "These interventions are evidence-based practices that significantly reduce healthcare-associated infections.",
    takeaway:
        "HAI prevention centers on hand hygiene, asepsis, and limiting invasive devices."
},

{
    id: "PRIORITY-023",
    caseId: "PRIORITY-CASE-023",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A hospitalized client with sepsis develops BP 74/38 mm Hg despite IV fluids, HR 146/min, RR 36/min, lactate 6.1 mmol/L, and minimal urine output. Which condition should the nurse recognize?",
    choices: [
        "Progressive septic shock",
        "Localized infection",
        "Stable inflammatory response",
        "Expected recovery"
    ],
    answer:
        "Progressive septic shock",
    rationale:
        "Persistent hypotension despite fluids with worsening organ perfusion indicates progression of septic shock.",
    takeaway:
        "Refractory hypotension after fluids is a hallmark of septic shock."
},

{
    id: "PRIORITY-024",
    caseId: "PRIORITY-CASE-024",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Multiple Clients",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients at the beginning of the shift. Which client should be assessed first?",
    choices: [
        "A client with BP 82/40 mm Hg, HR 138/min, RR 34/min, and altered mental status",
        "A client with cellulitis reporting pain 6/10",
        "A client receiving IV antibiotics whose temperature is 100.8°F (38.2°C)",
        "A client requesting assistance with breakfast"
    ],
    answer:
        "A client with BP 82/40 mm Hg, HR 138/min, RR 34/min, and altered mental status",
    rationale:
        "Hypotension, tachycardia, tachypnea, and altered mental status indicate septic shock and poor tissue perfusion requiring immediate intervention.",
    takeaway:
        "ABCs and perfusion always take priority."
},

{
    id: "PRIORITY-025",
    caseId: "PRIORITY-CASE-025",
    patient: randomPatient(),
    topic: "Inflammation & Infection Priority Review",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with severe infection has BP 76/38 mm Hg, HR 148/min, RR 38/min, temperature 103.8°F (39.9°C), lactate 6.4 mmol/L, urine output 10 mL/hr, SpO₂ 89%, and increasing confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids and continue routine monitoring.",
        "Document the assessment findings before notifying the provider."
    ],
    answer:
        "Activate the rapid response team, initiate the sepsis bundle, administer oxygen, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
    rationale:
        "The client demonstrates septic shock with severe hypoperfusion and impending organ failure. Immediate implementation of the sepsis bundle and aggressive resuscitation are lifesaving.",
    takeaway:
        "Recognize septic shock early—oxygen, fluids, antibiotics, perfusion, and rapid escalation save lives."
},

];
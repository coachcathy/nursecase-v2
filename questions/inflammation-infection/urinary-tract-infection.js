const urinaryTractInfectionQuestions = [

{
    id: "UTI-001",
    caseId: "UTI-CASE-001",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with an uncomplicated lower urinary tract infection (cystitis)?",
    choices: [
        "Dysuria, urinary frequency, and urgency",
        "Productive cough with fever",
        "Right lower quadrant abdominal pain with rebound tenderness",
        "Generalized edema"
    ],
    answer:
        "Dysuria, urinary frequency, and urgency",
    rationale:
        "Classic manifestations of cystitis include dysuria, urinary urgency, urinary frequency, suprapubic discomfort, and cloudy urine.",
    takeaway:
        "Think dysuria, urgency, and frequency for cystitis."
},

{
    id: "UTI-002",
    caseId: "UTI-CASE-002",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client is at the greatest risk for developing a urinary tract infection?",
    choices: [
        "An older adult with an indwelling urinary catheter",
        "A healthy teenager with no medical history",
        "A client wearing corrective lenses",
        "A client recovering from a wrist fracture"
    ],
    answer:
        "An older adult with an indwelling urinary catheter",
    rationale:
        "Indwelling urinary catheters are one of the greatest risk factors for healthcare-associated urinary tract infections.",
    takeaway:
        "The best way to prevent CAUTIs is to avoid unnecessary catheters."
},

{
    id: "UTI-003",
    caseId: "UTI-CASE-003",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly associated with a urinary tract infection? Select all that apply.",
    choices: [
        "Dysuria",
        "Urinary urgency",
        "Urinary frequency",
        "Suprapubic pain",
        "Cloudy urine",
        "Bradycardia"
    ],
    answer: [
        "Dysuria",
        "Urinary urgency",
        "Urinary frequency",
        "Suprapubic pain",
        "Cloudy urine"
    ],
    rationale:
        "Typical symptoms of cystitis include dysuria, urgency, frequency, suprapubic discomfort, and cloudy or foul-smelling urine.",
    takeaway:
        "Lower UTIs primarily affect urination."
},

{
    id: "UTI-004",
    caseId: "UTI-CASE-004",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test is considered the gold standard for identifying the organism causing a urinary tract infection?",
    choices: [
        "Urine culture and sensitivity",
        "Urine specific gravity",
        "Serum creatinine",
        "Complete blood count"
    ],
    answer:
        "Urine culture and sensitivity",
    rationale:
        "A urine culture identifies the causative organism and determines which antibiotics are most effective.",
    takeaway:
        "Culture before antibiotics when possible."
},

{
    id: "UTI-005",
    caseId: "UTI-CASE-005",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with a UTI who has a temperature of 103°F (39.4°C), BP 84/48 mm Hg, and confusion",
        "A client requesting pain medication for dysuria",
        "A client asking about discharge instructions",
        "A client reporting urinary frequency"
    ],
    answer:
        "A client with a UTI who has a temperature of 103°F (39.4°C), BP 84/48 mm Hg, and confusion",
    rationale:
        "These findings suggest urosepsis with shock requiring immediate intervention.",
    takeaway:
        "UTIs can progress to life-threatening sepsis."
},

{
    id: "UTI-006",
    caseId: "UTI-CASE-006",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention is appropriate for a client with an uncomplicated urinary tract infection?",
    choices: [
        "Encourage increased fluid intake unless contraindicated.",
        "Restrict oral fluids.",
        "Maintain strict bedrest.",
        "Insert a urinary catheter."
    ],
    answer:
        "Encourage increased fluid intake unless contraindicated.",
    rationale:
        "Adequate hydration helps flush bacteria from the urinary tract and supports recovery.",
    takeaway:
        "Hydration is an important part of UTI treatment."
},

{
    id: "UTI-007",
    caseId: "UTI-CASE-007",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of antibiotic therapy for a urinary tract infection?",
    choices: [
        "I'll finish all of my antibiotics even if I feel better.",
        "I'll stop taking the medication when the burning stops.",
        "I'll save leftover antibiotics for another infection.",
        "I'll only take the medication when I have symptoms."
    ],
    answer:
        "I'll finish all of my antibiotics even if I feel better.",
    rationale:
        "Completing the prescribed antibiotic course reduces recurrence and antibiotic resistance.",
    takeaway:
        "Always complete prescribed antibiotics."
},

{
    id: "UTI-008",
    caseId: "UTI-CASE-008",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's highest priority to recognize in a client with a urinary tract infection?",
    choices: [
        "Pyelonephritis progressing to sepsis",
        "Constipation",
        "Hyperlipidemia",
        "Osteoarthritis"
    ],
    answer:
        "Pyelonephritis progressing to sepsis",
    rationale:
        "Untreated UTIs can ascend to the kidneys and progress to sepsis, particularly in older adults and immunocompromised clients.",
    takeaway:
        "Ascending infection can become life-threatening."
},

{
    id: "UTI-009",
    caseId: "UTI-CASE-009",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates that treatment for a urinary tract infection has been effective?",
    choices: [
        "Resolution of dysuria with decreased urinary frequency",
        "Increasing flank pain and fever",
        "New onset confusion",
        "Persistent cloudy urine with chills"
    ],
    answer:
        "Resolution of dysuria with decreased urinary frequency",
    rationale:
        "Improvement is indicated by decreased urinary symptoms, improved comfort, and absence of systemic manifestations.",
    takeaway:
        "Monitor improvement by trending urinary symptoms."
},

{
    id: "UTI-010",
    caseId: "UTI-CASE-010",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Pyelonephritis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding suggests that a urinary tract infection has progressed to pyelonephritis?",
    choices: [
        "Fever with flank pain and costovertebral angle tenderness",
        "Urinary urgency only",
        "Mild suprapubic discomfort",
        "Urinary frequency without fever"
    ],
    answer:
        "Fever with flank pain and costovertebral angle tenderness",
    rationale:
        "Pyelonephritis commonly presents with fever, chills, flank pain, nausea, vomiting, and costovertebral angle tenderness.",
    takeaway:
        "Flank pain + fever = suspect pyelonephritis."
},

{
    id: "UTI-011",
    caseId: "UTI-CASE-011",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pyelonephritis has a temperature of 103.2°F (39.6°C), HR 132/min, BP 86/44 mm Hg, and new confusion. What is the nurse's priority action?",
    choices: [
        "Notify the provider immediately and initiate the sepsis protocol.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids.",
        "Collect a clean-catch urine specimen before further assessment."
    ],
    answer:
        "Notify the provider immediately and initiate the sepsis protocol.",
    rationale:
        "Hypotension, fever, tachycardia, and altered mental status indicate possible urosepsis requiring immediate intervention.",
    takeaway:
        "Urosepsis is a medical emergency."
},

{
    id: "UTI-012",
    caseId: "UTI-CASE-012",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching points help reduce the risk of urinary tract infections? Select all that apply.",
    choices: [
        "Drink adequate fluids.",
        "Void after sexual intercourse.",
        "Wipe from front to back.",
        "Avoid delaying urination.",
        "Perform proper perineal hygiene.",
        "Limit daily fluid intake."
    ],
    answer: [
        "Drink adequate fluids.",
        "Void after sexual intercourse.",
        "Wipe from front to back.",
        "Avoid delaying urination.",
        "Perform proper perineal hygiene."
    ],
    rationale:
        "Adequate hydration, proper hygiene, frequent voiding, and voiding after intercourse reduce bacterial colonization of the urinary tract.",
    takeaway:
        "Hydration and proper hygiene help prevent UTIs."
},

{
    id: "UTI-013",
    caseId: "UTI-CASE-013",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates the need for additional teaching regarding urinary tract infection prevention?",
    choices: [
        "I'll wait as long as possible before emptying my bladder.",
        "I'll drink more water each day.",
        "I'll wipe from front to back.",
        "I'll complete all of my antibiotics."
    ],
    answer:
        "I'll wait as long as possible before emptying my bladder.",
    rationale:
        "Regular bladder emptying helps flush bacteria from the urinary tract and decreases infection risk.",
    takeaway:
        "Do not delay urination."
},

{
    id: "UTI-014",
    caseId: "UTI-CASE-014",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which urinalysis finding is most consistent with a bacterial urinary tract infection?",
    choices: [
        "Positive leukocyte esterase and nitrites",
        "High urine specific gravity only",
        "Large amounts of glucose only",
        "Ketones without white blood cells"
    ],
    answer:
        "Positive leukocyte esterase and nitrites",
    rationale:
        "Leukocyte esterase indicates white blood cells, while nitrites suggest the presence of nitrate-reducing bacteria such as E. coli.",
    takeaway:
        "Nitrites + leukocyte esterase strongly suggest bacterial UTI."
},

{
    id: "UTI-015",
    caseId: "UTI-CASE-015",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "An older adult with a urinary tract infection develops HR 128/min, BP 82/46 mm Hg, RR 30/min, temperature 103°F (39.4°C), lactate 4.6 mmol/L, and confusion. Which complication should the nurse suspect?",
    choices: [
        "Uroseptic shock",
        "Simple dehydration",
        "Acute cystitis",
        "Nephrolithiasis"
    ],
    answer:
        "Uroseptic shock",
    rationale:
        "Hypotension, elevated lactate, tachycardia, and altered mental status indicate progression to septic shock from a urinary source.",
    takeaway:
        "Older adults commonly develop sepsis from UTIs."
},

{
    id: "UTI-016",
    caseId: "UTI-CASE-016",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with pyelonephritis who has BP 84/46 mm Hg and increasing confusion",
        "A client requesting phenazopyridine for burning",
        "A client asking when breakfast will arrive",
        "A client with urinary frequency awaiting discharge"
    ],
    answer:
        "A client with pyelonephritis who has BP 84/46 mm Hg and increasing confusion",
    rationale:
        "These findings indicate septic shock and poor tissue perfusion requiring immediate intervention.",
    takeaway:
        "Shock always takes priority over uncomplicated urinary symptoms."
},

{
    id: "UTI-017",
    caseId: "UTI-CASE-017",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Catheter-Associated UTI",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing intervention is most effective in preventing a catheter-associated urinary tract infection (CAUTI)?",
    choices: [
        "Remove the urinary catheter as soon as it is no longer needed.",
        "Irrigate the catheter every shift.",
        "Disconnect the drainage bag daily for cleaning.",
        "Clamp the catheter every four hours."
    ],
    answer:
        "Remove the urinary catheter as soon as it is no longer needed.",
    rationale:
        "The greatest risk factor for CAUTI is prolonged catheterization. Removing the catheter as soon as clinically appropriate is the most effective prevention strategy.",
    takeaway:
        "The best CAUTI prevention is early catheter removal."
},

{
    id: "UTI-018",
    caseId: "UTI-CASE-018",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Catheter Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions help prevent catheter-associated urinary tract infections? Select all that apply.",
    choices: [
        "Keep the drainage bag below the level of the bladder.",
        "Maintain a closed drainage system.",
        "Perform routine perineal hygiene.",
        "Secure the catheter to prevent traction.",
        "Empty the drainage bag using a separate clean container.",
        "Disconnect the drainage tubing daily for cleaning."
    ],
    answer: [
        "Keep the drainage bag below the level of the bladder.",
        "Maintain a closed drainage system.",
        "Perform routine perineal hygiene.",
        "Secure the catheter to prevent traction.",
        "Empty the drainage bag using a separate clean container."
    ],
    rationale:
        "Evidence-based CAUTI prevention includes maintaining a closed system, preventing urine backflow, securing the catheter, performing routine hygiene, and using clean technique when emptying the drainage bag.",
    takeaway:
        "Closed system + dependent drainage + early removal = CAUTI prevention."
},

{
    id: "UTI-019",
    caseId: "UTI-CASE-019",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most concerning in an older adult with a urinary tract infection?",
    choices: [
        "New onset confusion",
        "Urinary urgency",
        "Mild dysuria",
        "Cloudy urine"
    ],
    answer:
        "New onset confusion",
    rationale:
        "Older adults frequently present with atypical symptoms such as acute confusion, which may indicate systemic infection or sepsis.",
    takeaway:
        "Acute confusion may be the first sign of infection in older adults."
},

{
    id: "UTI-020",
    caseId: "UTI-CASE-020",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a urinary tract infection requires immediate nursing intervention?",
    choices: [
        "A client with flank pain, temperature of 103°F (39.4°C), BP 82/44 mm Hg, and confusion",
        "A client reporting burning during urination",
        "A client requesting cranberry juice",
        "A client asking when antibiotics will begin"
    ],
    answer:
        "A client with flank pain, temperature of 103°F (39.4°C), BP 82/44 mm Hg, and confusion",
    rationale:
        "Flank pain, hypotension, fever, and altered mental status indicate pyelonephritis progressing to septic shock.",
    takeaway:
        "Recognize urosepsis before irreversible shock develops."
},

{
    id: "UTI-021",
    caseId: "UTI-CASE-021",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement demonstrates correct understanding of preventing recurrent urinary tract infections?",
    choices: [
        "I'll increase my fluid intake and avoid delaying urination.",
        "I'll decrease fluids to urinate less often.",
        "I'll stop taking antibiotics when I feel better.",
        "I'll clean the catheter tubing by disconnecting it daily."
    ],
    answer:
        "I'll increase my fluid intake and avoid delaying urination.",
    rationale:
        "Hydration and regular bladder emptying decrease bacterial colonization and reduce recurrence.",
    takeaway:
        "Hydration and frequent voiding help prevent recurrent UTIs."
},

{
    id: "UTI-022",
    caseId: "UTI-CASE-022",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client hospitalized with pyelonephritis? Select all that apply.",
    choices: [
        "Monitor temperature trends.",
        "Assess intake and output.",
        "Encourage fluids if not contraindicated.",
        "Administer prescribed antibiotics promptly.",
        "Monitor for signs of sepsis.",
        "Restrict oral fluids."
    ],
    answer: [
        "Monitor temperature trends.",
        "Assess intake and output.",
        "Encourage fluids if not contraindicated.",
        "Administer prescribed antibiotics promptly.",
        "Monitor for signs of sepsis."
    ],
    rationale:
        "Management focuses on hydration, antibiotic therapy, monitoring renal function, and early recognition of sepsis.",
    takeaway:
        "Pyelonephritis requires aggressive monitoring for sepsis."
},

{
    id: "UTI-023",
    caseId: "UTI-CASE-023",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pyelonephritis develops HR 136/min, RR 34/min, BP 80/42 mm Hg, lactate 5.1 mmol/L, decreased urine output, and confusion. Which complication should the nurse suspect?",
    choices: [
        "Uroseptic shock",
        "Simple dehydration",
        "Renal colic",
        "Uncomplicated cystitis"
    ],
    answer:
        "Uroseptic shock",
    rationale:
        "The client's hypotension, elevated lactate, oliguria, tachycardia, and altered mental status indicate septic shock from a urinary source.",
    takeaway:
        "Hypotension + lactate elevation + altered mental status = septic shock."
},

{
    id: "UTI-024",
    caseId: "UTI-CASE-024",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client whose urine output has fallen to 15 mL/hr with BP 84/40 mm Hg",
        "A client requesting phenazopyridine",
        "A client with mild urinary urgency",
        "A client asking for discharge paperwork"
    ],
    answer:
        "A client whose urine output has fallen to 15 mL/hr with BP 84/40 mm Hg",
    rationale:
        "Hypotension and oliguria indicate poor renal perfusion and possible septic shock requiring immediate intervention.",
    takeaway:
        "Decreasing urine output is an early indicator of organ hypoperfusion."
},

{
    id: "UTI-025",
    caseId: "UTI-CASE-025",
    patient: randomPatient(),
    topic: "Urinary Tract Infection",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "An older adult admitted with pyelonephritis has BP 78/42 mm Hg, HR 142/min, RR 36/min, temperature 103.4°F (39.7°C), lactate 5.4 mmol/L, SpO₂ 90%, and increasing confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the sepsis protocol, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
        "Administer phenazopyridine for dysuria.",
        "Encourage oral fluids and reassess in one hour.",
        "Document the assessment and continue routine monitoring."
    ],
    answer:
        "Activate the sepsis protocol, obtain cultures as ordered, begin rapid IV fluids and broad-spectrum antibiotics, and notify the provider immediately.",
    rationale:
        "The client demonstrates uroseptic shock with hypotension, elevated lactate, and organ hypoperfusion. Immediate sepsis management is lifesaving.",
    takeaway:
        "UTIs can rapidly progress to septic shock—early recognition and treatment save lives."
},

];
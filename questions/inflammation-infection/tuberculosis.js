const tuberculosisQuestions = [

{
    id: "TB-001",
    caseId: "TB-CASE-001",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of active pulmonary tuberculosis?",
    choices: [
        "Persistent cough lasting longer than 3 weeks with night sweats",
        "Sudden crushing chest pain",
        "Generalized edema",
        "Severe abdominal pain after meals"
    ],
    answer:
        "Persistent cough lasting longer than 3 weeks with night sweats",
    rationale:
        "Classic manifestations of active tuberculosis include a chronic cough, night sweats, weight loss, fatigue, low-grade fever, and hemoptysis.",
    takeaway:
        "Think TB when a cough lasts more than 3 weeks with constitutional symptoms."
},

{
    id: "TB-002",
    caseId: "TB-CASE-002",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Transmission",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "How is Mycobacterium tuberculosis most commonly transmitted?",
    choices: [
        "Airborne droplet nuclei",
        "Contaminated food",
        "Direct contact with blood",
        "Contaminated water"
    ],
    answer:
        "Airborne droplet nuclei",
    rationale:
        "Tuberculosis spreads through airborne droplet nuclei that remain suspended in the air when an infected individual coughs, sneezes, or speaks.",
    takeaway:
        "TB is an airborne disease."
},

{
    id: "TB-003",
    caseId: "TB-CASE-003",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are expected in active pulmonary tuberculosis? Select all that apply.",
    choices: [
        "Night sweats",
        "Weight loss",
        "Persistent cough",
        "Hemoptysis",
        "Fatigue",
        "Generalized edema"
    ],
    answer: [
        "Night sweats",
        "Weight loss",
        "Persistent cough",
        "Hemoptysis",
        "Fatigue"
    ],
    rationale:
        "Active TB commonly presents with chronic cough, hemoptysis, weight loss, fever, fatigue, and night sweats.",
    takeaway:
        "Night sweats + weight loss + chronic cough = think TB."
},

{
    id: "TB-004",
    caseId: "TB-CASE-004",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test confirms active pulmonary tuberculosis?",
    choices: [
        "Sputum culture for Mycobacterium tuberculosis",
        "Chest x-ray alone",
        "Complete blood count",
        "Pulse oximetry"
    ],
    answer:
        "Sputum culture for Mycobacterium tuberculosis",
    rationale:
        "Although chest x-rays and skin or blood tests support the diagnosis, sputum culture remains the gold standard for confirming active tuberculosis.",
    takeaway:
        "Sputum culture confirms active TB."
},

{
    id: "TB-005",
    caseId: "TB-CASE-005",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with suspected TB who is coughing blood and has SpO₂ of 87%",
        "A client requesting a blanket",
        "A client asking for discharge instructions",
        "A client with seasonal allergies"
    ],
    answer:
        "A client with suspected TB who is coughing blood and has SpO₂ of 87%",
    rationale:
        "Hypoxemia and hemoptysis indicate respiratory compromise requiring immediate assessment.",
    takeaway:
        "Airway and oxygenation always take priority."
},

{
    id: "TB-006",
    caseId: "TB-CASE-006",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Isolation Precautions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which isolation precautions are required for a client with suspected active pulmonary tuberculosis?",
    choices: [
        "Airborne precautions with a negative-pressure room",
        "Droplet precautions only",
        "Contact precautions only",
        "Standard precautions only"
    ],
    answer:
        "Airborne precautions with a negative-pressure room",
    rationale:
        "Clients with suspected or confirmed pulmonary TB require airborne isolation in a negative-pressure room and healthcare workers should wear a fit-tested N95 respirator.",
    takeaway:
        "TB = Airborne + Negative Pressure + N95."
},

{
    id: "TB-007",
    caseId: "TB-CASE-007",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client receiving tuberculosis treatment indicates correct understanding?",
    choices: [
        "I will continue taking my medications even after I begin feeling better.",
        "I'll stop my medications once my cough is gone.",
        "I'll only take my medications when I have symptoms.",
        "I'll discontinue treatment after one month."
    ],
    answer:
        "I will continue taking my medications even after I begin feeling better.",
    rationale:
        "TB treatment requires long-term adherence to prevent relapse and drug resistance.",
    takeaway:
        "TB medications must be completed exactly as prescribed."
},

{
    id: "TB-008",
    caseId: "TB-CASE-008",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's highest priority to recognize in a client with severe pulmonary tuberculosis?",
    choices: [
        "Respiratory failure",
        "Constipation",
        "Hyperglycemia",
        "Osteoarthritis"
    ],
    answer:
        "Respiratory failure",
    rationale:
        "Progressive pulmonary destruction can impair gas exchange and lead to respiratory failure.",
    takeaway:
        "The greatest immediate threat from pulmonary TB is impaired oxygenation."
},

{
    id: "TB-009",
    caseId: "TB-CASE-009",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates improvement in a client being treated for pulmonary tuberculosis?",
    choices: [
        "Decreased cough with weight gain",
        "Increasing hemoptysis",
        "Persistent night sweats",
        "Progressive fatigue and weight loss"
    ],
    answer:
        "Decreased cough with weight gain",
    rationale:
        "Clinical improvement is demonstrated by decreased cough, improved appetite, weight gain, and increased energy.",
    takeaway:
        "Weight gain and decreasing respiratory symptoms indicate recovery."
},

{
    id: "TB-010",
    caseId: "TB-CASE-010",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "A client has a positive tuberculin skin test but no symptoms and a normal chest x-ray. How should the nurse interpret these findings?",
    choices: [
        "The client likely has latent tuberculosis infection.",
        "The client has active pulmonary tuberculosis.",
        "The client does not have tuberculosis.",
        "The test is automatically considered a false positive."
    ],
    answer:
        "The client likely has latent tuberculosis infection.",
    rationale:
        "A positive TB skin test with no symptoms and a normal chest x-ray is consistent with latent tuberculosis infection.",
    takeaway:
        "Latent TB = positive test without active disease."
},

{
    id: "TB-011",
    caseId: "TB-CASE-011",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with suspected tuberculosis arrives in the emergency department. What is the nurse's priority action?",
    choices: [
        "Place the client in a negative-pressure room immediately.",
        "Collect a urine specimen.",
        "Administer oral fluids.",
        "Obtain the client's weight."
    ],
    answer:
        "Place the client in a negative-pressure room immediately.",
    rationale:
        "The priority is preventing airborne transmission by initiating Airborne Precautions immediately.",
    takeaway:
        "Isolate first, then continue assessment."
},

{
    id: "TB-012",
    caseId: "TB-CASE-012",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Medication Therapy",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which medications are considered first-line treatment for active tuberculosis? Select all that apply.",
    choices: [
        "Isoniazid (INH)",
        "Rifampin",
        "Pyrazinamide",
        "Ethambutol",
        "Vancomycin",
        "Azithromycin"
    ],
    answer: [
        "Isoniazid (INH)",
        "Rifampin",
        "Pyrazinamide",
        "Ethambutol"
    ],
    rationale:
        "The standard initial treatment regimen for active TB is RIPE therapy: Rifampin, Isoniazid, Pyrazinamide, and Ethambutol.",
    takeaway:
        "Remember RIPE: Rifampin, INH, Pyrazinamide, Ethambutol."
},

{
    id: "TB-013",
    caseId: "TB-CASE-013",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Medication Teaching",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client taking rifampin indicates understanding of medication teaching?",
    choices: [
        "My urine and tears may turn an orange-red color.",
        "I should stop taking this medication if my urine changes color.",
        "Orange-colored urine means my kidneys are failing.",
        "This medication should only be taken when I have symptoms."
    ],
    answer:
        "My urine and tears may turn an orange-red color.",
    rationale:
        "Rifampin commonly causes harmless orange-red discoloration of body fluids, and clients should be informed before beginning therapy.",
    takeaway:
        "Rifampin turns body fluids orange-red."
},

{
    id: "TB-014",
    caseId: "TB-CASE-014",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Medication Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value should the nurse monitor closely in a client receiving isoniazid (INH)?",
    choices: [
        "Liver function tests",
        "Serum calcium",
        "Platelet count",
        "Serum potassium"
    ],
    answer:
        "Liver function tests",
    rationale:
        "Isoniazid can cause hepatotoxicity. Liver enzymes should be monitored throughout treatment.",
    takeaway:
        "INH = monitor the liver."
},

{
    id: "TB-015",
    caseId: "TB-CASE-015",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with active tuberculosis develops SpO₂ 84%, RR 34/min, HR 126/min, BP 88/48 mm Hg, and increasing confusion. Which complication should the nurse suspect?",
    choices: [
        "Acute respiratory failure with possible sepsis",
        "Stable recovery",
        "Acute appendicitis",
        "Hypoglycemia"
    ],
    answer:
        "Acute respiratory failure with possible sepsis",
    rationale:
        "Severe hypoxemia with hypotension and altered mental status indicates life-threatening deterioration requiring immediate intervention.",
    takeaway:
        "TB can progress to respiratory failure and sepsis."
},

{
    id: "TB-016",
    caseId: "TB-CASE-016",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with active TB whose SpO₂ has fallen to 83% despite oxygen therapy",
        "A client requesting meal assistance",
        "A client asking about discharge medications",
        "A client with a positive TB skin test awaiting discharge"
    ],
    answer:
        "A client with active TB whose SpO₂ has fallen to 83% despite oxygen therapy",
    rationale:
        "Severe hypoxemia represents an immediate threat to life and takes priority over all other concerns.",
    takeaway:
        "Respiratory compromise always takes priority."
},

{
    id: "TB-017",
    caseId: "TB-CASE-017",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Airborne Precautions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which personal protective equipment should the nurse wear when entering the room of a client with suspected active pulmonary tuberculosis?",
    choices: [
        "Fit-tested N95 respirator",
        "Surgical mask",
        "Face shield only",
        "Sterile gloves only"
    ],
    answer:
        "Fit-tested N95 respirator",
    rationale:
        "Tuberculosis is transmitted through airborne droplet nuclei. Healthcare workers should wear a fit-tested N95 respirator while caring for clients with suspected or confirmed active TB.",
    takeaway:
        "TB = Airborne Precautions + N95 respirator."
},

{
    id: "TB-018",
    caseId: "TB-CASE-018",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Medication Therapy",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which teaching points should the nurse include for a client taking isoniazid (INH)? Select all that apply.",
    choices: [
        "Report numbness or tingling of the hands or feet.",
        "Avoid drinking alcohol.",
        "Take vitamin B6 (pyridoxine) if prescribed.",
        "Report yellowing of the skin or eyes.",
        "Stop the medication if symptoms improve.",
        "Keep all follow-up appointments for laboratory monitoring."
    ],
    answer: [
        "Report numbness or tingling of the hands or feet.",
        "Avoid drinking alcohol.",
        "Take vitamin B6 (pyridoxine) if prescribed.",
        "Report yellowing of the skin or eyes.",
        "Keep all follow-up appointments for laboratory monitoring."
    ],
    rationale:
        "INH may cause peripheral neuropathy and hepatotoxicity. Pyridoxine helps prevent neuropathy, alcohol increases liver toxicity, and routine laboratory monitoring is essential.",
    takeaway:
        "INH: Think liver + nerves + vitamin B6."
},

{
    id: "TB-019",
    caseId: "TB-CASE-019",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic finding is most consistent with active pulmonary tuberculosis?",
    choices: [
        "Positive sputum acid-fast bacilli (AFB) smear",
        "Negative chest x-ray",
        "Normal interferon-gamma release assay (IGRA)",
        "Normal white blood cell count"
    ],
    answer:
        "Positive sputum acid-fast bacilli (AFB) smear",
    rationale:
        "A positive AFB smear indicates the presence of acid-fast organisms and strongly supports active pulmonary tuberculosis while culture provides definitive confirmation.",
    takeaway:
        "AFB smear strongly suggests active TB."
},

{
    id: "TB-020",
    caseId: "TB-CASE-020",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with tuberculosis requires immediate nursing intervention?",
    choices: [
        "A client with increasing hemoptysis and SpO₂ of 85%",
        "A client reporting fatigue after walking",
        "A client asking about discharge medications",
        "A client requesting a snack"
    ],
    answer:
        "A client with increasing hemoptysis and SpO₂ of 85%",
    rationale:
        "Significant hemoptysis with hypoxemia indicates worsening respiratory compromise requiring immediate intervention.",
    takeaway:
        "Hemoptysis with hypoxia is an emergency."
},

{
    id: "TB-021",
    caseId: "TB-CASE-021",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates correct understanding of preventing tuberculosis transmission at home?",
    choices: [
        "I'll cover my mouth when coughing and follow public health instructions until I'm no longer infectious.",
        "I can stop isolation once my fever is gone.",
        "I only need to wear a mask when I feel sick.",
        "I can stop my medications once my cough improves."
    ],
    answer:
        "I'll cover my mouth when coughing and follow public health instructions until I'm no longer infectious.",
    rationale:
        "Respiratory hygiene, medication adherence, and following isolation guidance reduce transmission of tuberculosis.",
    takeaway:
        "Prevent spread through respiratory hygiene and treatment adherence."
},

{
    id: "TB-022",
    caseId: "TB-CASE-022",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions are appropriate when caring for a client with active pulmonary tuberculosis? Select all that apply.",
    choices: [
        "Place the client in a negative-pressure room.",
        "Wear a fit-tested N95 respirator.",
        "Keep the room door closed.",
        "Limit transport unless medically necessary.",
        "Encourage adherence to prescribed medications.",
        "Use only Standard Precautions."
    ],
    answer: [
        "Place the client in a negative-pressure room.",
        "Wear a fit-tested N95 respirator.",
        "Keep the room door closed.",
        "Limit transport unless medically necessary.",
        "Encourage adherence to prescribed medications."
    ],
    rationale:
        "Airborne Precautions include a negative-pressure room, N95 respirator, closed door, minimizing transport, and ensuring medication adherence.",
    takeaway:
        "Remember the complete Airborne Precautions bundle."
},

{
    id: "TB-023",
    caseId: "TB-CASE-023",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with active tuberculosis develops RR 36/min, SpO₂ 82%, BP 84/46 mm Hg, HR 138/min, and increasing confusion. Which complication should the nurse suspect?",
    choices: [
        "Acute respiratory failure with septic shock",
        "Stable improvement",
        "Pulmonary embolism only",
        "Mild dehydration"
    ],
    answer:
        "Acute respiratory failure with septic shock",
    rationale:
        "Severe hypoxemia, hypotension, tachycardia, and altered mental status indicate life-threatening respiratory failure with shock.",
    takeaway:
        "Hypoxia plus shock requires immediate intervention."
},

{
    id: "TB-024",
    caseId: "TB-CASE-024",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with active TB who is increasingly confused and whose respiratory rate has increased to 38/min",
        "A client awaiting discharge teaching",
        "A client requesting a meal tray",
        "A client with latent TB asking about medications"
    ],
    answer:
        "A client with active TB who is increasingly confused and whose respiratory rate has increased to 38/min",
    rationale:
        "Confusion and worsening tachypnea indicate deteriorating oxygenation and require immediate assessment.",
    takeaway:
        "Altered mental status is an early sign of severe hypoxia."
},

{
    id: "TB-025",
    caseId: "TB-CASE-025",
    patient: randomPatient(),
    topic: "Tuberculosis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with active pulmonary tuberculosis has SpO₂ 81% on supplemental oxygen, RR 40/min, HR 142/min, BP 80/44 mm Hg, lactate 5.3 mmol/L, and worsening confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the rapid response team, maintain Airborne Precautions, provide high-concentration oxygen, begin sepsis management as ordered, and notify the provider immediately.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids and ambulation.",
        "Document the findings and continue routine monitoring."
    ],
    answer:
        "Activate the rapid response team, maintain Airborne Precautions, provide high-concentration oxygen, begin sepsis management as ordered, and notify the provider immediately.",
    rationale:
        "The client is experiencing respiratory failure with septic shock. Immediate oxygenation, hemodynamic support, continued Airborne Precautions, and rapid treatment are lifesaving.",
    takeaway:
        "TB patients can deteriorate into respiratory failure and septic shock—ABCs and isolation remain priorities."
},

];
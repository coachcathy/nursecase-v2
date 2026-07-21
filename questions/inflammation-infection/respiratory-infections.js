const respiratoryInfectionsQuestions = [

{
    id: "RESPINF-001",
    caseId: "RESPINF-CASE-001",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Upper vs Lower Respiratory Infection",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with pneumonia rather than an upper respiratory infection?",
    choices: [
        "Crackles with decreased oxygen saturation",
        "Clear nasal drainage",
        "Sneezing with itchy eyes",
        "Mild sore throat without cough"
    ],
    answer:
        "Crackles with decreased oxygen saturation",
    rationale:
        "Pneumonia is a lower respiratory infection that commonly presents with crackles, hypoxemia, productive cough, fever, and dyspnea.",
    takeaway:
        "Crackles + hypoxia suggest a lower respiratory infection."
},

{
    id: "RESPINF-002",
    caseId: "RESPINF-CASE-002",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Pneumonia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is expected in a client with bacterial pneumonia?",
    choices: [
        "Productive cough with fever and crackles",
        "Painless hematuria",
        "Generalized edema",
        "Bradycardia with hypotension"
    ],
    answer:
        "Productive cough with fever and crackles",
    rationale:
        "Bacterial pneumonia commonly causes fever, productive cough, dyspnea, pleuritic chest pain, and adventitious lung sounds.",
    takeaway:
        "Think cough, crackles, fever, and dyspnea for pneumonia."
},

{
    id: "RESPINF-003",
    caseId: "RESPINF-CASE-003",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are common manifestations of pneumonia? Select all that apply.",
    choices: [
        "Fever",
        "Productive cough",
        "Dyspnea",
        "Crackles",
        "Pleuritic chest pain",
        "Bradycardia"
    ],
    answer: [
        "Fever",
        "Productive cough",
        "Dyspnea",
        "Crackles",
        "Pleuritic chest pain"
    ],
    rationale:
        "Pneumonia commonly presents with fever, productive cough, dyspnea, crackles, and pleuritic chest pain.",
    takeaway:
        "Pneumonia affects oxygenation first."
},

{
    id: "RESPINF-004",
    caseId: "RESPINF-CASE-004",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test best confirms pneumonia?",
    choices: [
        "Chest x-ray",
        "Electrocardiogram",
        "Colonoscopy",
        "CT of the abdomen"
    ],
    answer:
        "Chest x-ray",
    rationale:
        "A chest x-ray demonstrating infiltrates is the primary diagnostic test used to confirm pneumonia.",
    takeaway:
        "Chest x-ray confirms pneumonia."
},

{
    id: "RESPINF-005",
    caseId: "RESPINF-CASE-005",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with pneumonia whose SpO₂ is 84% on room air",
        "A client with a sore throat requesting water",
        "A client waiting for discharge instructions",
        "A client with mild sinus congestion"
    ],
    answer:
        "A client with pneumonia whose SpO₂ is 84% on room air",
    rationale:
        "Hypoxemia is an immediate threat to oxygenation and requires prompt assessment and intervention.",
    takeaway:
        "Airway and breathing always come first."
},

{
    id: "RESPINF-006",
    caseId: "RESPINF-CASE-006",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention helps mobilize secretions in a client with pneumonia?",
    choices: [
        "Encourage coughing, deep breathing, and incentive spirometry.",
        "Limit oral fluid intake.",
        "Maintain strict bedrest.",
        "Discourage position changes."
    ],
    answer:
        "Encourage coughing, deep breathing, and incentive spirometry.",
    rationale:
        "Pulmonary hygiene promotes secretion clearance, improves ventilation, and helps prevent complications.",
    takeaway:
        "Cough, deep breathe, and use the incentive spirometer."
},

{
    id: "RESPINF-007",
    caseId: "RESPINF-CASE-007",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client recovering from pneumonia indicates correct understanding of discharge teaching?",
    choices: [
        "I'll finish my antibiotics even if I feel better.",
        "I'll stop taking my antibiotics once my fever is gone.",
        "I'll smoke less until I'm completely recovered.",
        "I'll avoid coughing because it slows healing."
    ],
    answer:
        "I'll finish my antibiotics even if I feel better.",
    rationale:
        "Completing prescribed antibiotics helps eradicate infection and reduces recurrence and resistance.",
    takeaway:
        "Complete every prescribed antibiotic course."
},

{
    id: "RESPINF-008",
    caseId: "RESPINF-CASE-008",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's highest priority to recognize in a client hospitalized with pneumonia?",
    choices: [
        "Acute respiratory failure",
        "Constipation",
        "Hyperlipidemia",
        "Osteoarthritis"
    ],
    answer:
        "Acute respiratory failure",
    rationale:
        "Respiratory failure is a life-threatening complication of severe pneumonia requiring rapid intervention.",
    takeaway:
        "Protect oxygenation before anything else."
},

{
    id: "RESPINF-009",
    caseId: "RESPINF-CASE-009",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates that a client with pneumonia is improving?",
    choices: [
        "SpO₂ increasing from 88% to 95% on the same oxygen therapy",
        "Respiratory rate increasing from 22/min to 34/min",
        "New onset confusion",
        "Increasing crackles throughout both lungs"
    ],
    answer:
        "SpO₂ increasing from 88% to 95% on the same oxygen therapy",
    rationale:
        "Improving oxygen saturation with stable oxygen requirements indicates better gas exchange and recovery.",
    takeaway:
        "Improving oxygenation is one of the best indicators of recovery."
},

{
    id: "RESPINF-010",
    caseId: "RESPINF-CASE-010",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding requires immediate intervention in a client with pneumonia?",
    choices: [
        "New confusion with SpO₂ of 86%",
        "Temperature of 100.8°F (38.2°C)",
        "Productive cough with yellow sputum",
        "Mild pleuritic chest discomfort"
    ],
    answer:
        "New confusion with SpO₂ of 86%",
    rationale:
        "Hypoxemia causing altered mental status is an emergency and requires immediate intervention.",
    takeaway:
        "Confusion may be the first sign of severe hypoxia."
},

{
    id: "RESPINF-011",
    caseId: "RESPINF-CASE-011",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pneumonia has a respiratory rate of 34/min, SpO₂ of 85%, HR 128/min, and is using accessory muscles to breathe. What is the nurse's priority action?",
    choices: [
        "Apply oxygen and rapidly assess the airway and breathing.",
        "Administer oral fluids.",
        "Collect a sputum specimen.",
        "Provide discharge teaching."
    ],
    answer:
        "Apply oxygen and rapidly assess the airway and breathing.",
    rationale:
        "The priority is correcting hypoxemia while assessing airway and breathing using the ABC approach.",
    takeaway:
        "Treat hypoxia immediately."
},

{
    id: "RESPINF-012",
    caseId: "RESPINF-CASE-012",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which interventions help reduce the risk of respiratory infections? Select all that apply.",
    choices: [
        "Annual influenza vaccination",
        "Pneumococcal vaccination when indicated",
        "Frequent hand hygiene",
        "Smoking cessation",
        "Deep breathing and coughing after surgery",
        "Routine antibiotic use"
    ],
    answer: [
        "Annual influenza vaccination",
        "Pneumococcal vaccination when indicated",
        "Frequent hand hygiene",
        "Smoking cessation",
        "Deep breathing and coughing after surgery"
    ],
    rationale:
        "Vaccinations, smoking cessation, pulmonary hygiene, and hand hygiene decrease respiratory infection risk. Routine antibiotics are not recommended.",
    takeaway:
        "Vaccines and pulmonary hygiene prevent pneumonia."
},

{
    id: "RESPINF-013",
    caseId: "RESPINF-CASE-013",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates the need for additional teaching after treatment for pneumonia?",
    choices: [
        "I'll stop taking my antibiotics once I stop coughing.",
        "I'll drink plenty of fluids.",
        "I'll use my incentive spirometer as instructed.",
        "I'll call my provider if my breathing worsens."
    ],
    answer:
        "I'll stop taking my antibiotics once I stop coughing.",
    rationale:
        "Antibiotics should be completed even after symptoms improve to ensure complete eradication of the infection.",
    takeaway:
        "Never stop antibiotics early."
},

{
    id: "RESPINF-014",
    caseId: "RESPINF-CASE-014",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding is most consistent with an acute bacterial respiratory infection?",
    choices: [
        "Elevated WBC count with neutrophilia",
        "Elevated eosinophils",
        "Low platelet count",
        "Low serum calcium"
    ],
    answer:
        "Elevated WBC count with neutrophilia",
    rationale:
        "Neutrophils are the primary white blood cells that respond to bacterial infections.",
    takeaway:
        "Neutrophils fight bacteria."
},

{
    id: "RESPINF-015",
    caseId: "RESPINF-CASE-015",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with pneumonia develops BP 84/48 mm Hg, HR 132/min, RR 34/min, temperature 103°F (39.4°C), and lactate 4.5 mmol/L. Which complication should the nurse suspect?",
    choices: [
        "Septic shock",
        "Pulmonary embolism",
        "Stable pneumonia",
        "Asthma exacerbation"
    ],
    answer:
        "Septic shock",
    rationale:
        "Pneumonia is a common source of sepsis. Hypotension, elevated lactate, and tachycardia indicate septic shock.",
    takeaway:
        "Pneumonia is a common cause of sepsis."
},

{
    id: "RESPINF-016",
    caseId: "RESPINF-CASE-016",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with pneumonia whose SpO₂ has fallen to 82% despite oxygen therapy",
        "A client with a sore throat requesting acetaminophen",
        "A client asking about discharge paperwork",
        "A client with a dry cough for two days"
    ],
    answer:
        "A client with pneumonia whose SpO₂ has fallen to 82% despite oxygen therapy",
    rationale:
        "Persistent hypoxemia despite oxygen therapy indicates worsening respiratory failure requiring immediate intervention.",
    takeaway:
        "Worsening oxygenation always takes priority."
},

{
    id: "RESPINF-017",
    caseId: "RESPINF-CASE-017",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Pneumonia Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding most strongly indicates that pneumonia is interfering with gas exchange?",
    choices: [
        "SpO₂ of 87% with cyanosis around the lips",
        "Temperature of 101.8°F (38.8°C)",
        "Productive cough with yellow sputum",
        "Heart rate of 98/min"
    ],
    answer:
        "SpO₂ of 87% with cyanosis around the lips",
    rationale:
        "Hypoxemia and cyanosis indicate impaired gas exchange and require immediate intervention.",
    takeaway:
        "Low oxygen saturation and cyanosis indicate impaired oxygenation."
},

{
    id: "RESPINF-018",
    caseId: "RESPINF-CASE-018",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Isolation Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions help prevent transmission of respiratory infections? Select all that apply.",
    choices: [
        "Perform hand hygiene before and after client contact.",
        "Encourage respiratory hygiene and cough etiquette.",
        "Place a surgical mask on symptomatic clients during transport.",
        "Disinfect frequently touched equipment.",
        "Follow prescribed transmission-based precautions.",
        "Share stethoscopes between clients without cleaning."
    ],
    answer: [
        "Perform hand hygiene before and after client contact.",
        "Encourage respiratory hygiene and cough etiquette.",
        "Place a surgical mask on symptomatic clients during transport.",
        "Disinfect frequently touched equipment.",
        "Follow prescribed transmission-based precautions."
    ],
    rationale:
        "Standard infection-control measures reduce transmission of respiratory pathogens. Shared equipment should always be disinfected.",
    takeaway:
        "Hand hygiene and respiratory etiquette prevent spread."
},

{
    id: "RESPINF-019",
    caseId: "RESPINF-CASE-019",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "ABGs",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "A client with severe pneumonia has an ABG showing PaO₂ of 58 mm Hg. How should the nurse interpret this finding?",
    choices: [
        "The client has significant hypoxemia.",
        "The client has respiratory alkalosis.",
        "The client has metabolic acidosis.",
        "The client has normal oxygenation."
    ],
    answer:
        "The client has significant hypoxemia.",
    rationale:
        "A PaO₂ below 80 mm Hg indicates hypoxemia. A value of 58 mm Hg represents significant impairment in oxygenation.",
    takeaway:
        "PaO₂ <80 = hypoxemia."
},

{
    id: "RESPINF-020",
    caseId: "RESPINF-CASE-020",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which hospitalized client with pneumonia should the nurse assess first?",
    choices: [
        "A client who becomes restless and increasingly confused",
        "A client requesting pain medication",
        "A client with a temperature of 101°F (38.3°C)",
        "A client coughing up yellow sputum"
    ],
    answer:
        "A client who becomes restless and increasingly confused",
    rationale:
        "Restlessness and confusion are early signs of hypoxia and require immediate assessment.",
    takeaway:
        "Changes in mental status often signal worsening oxygenation."
},

{
    id: "RESPINF-021",
    caseId: "RESPINF-CASE-021",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client recovering from pneumonia indicates correct understanding of home care?",
    choices: [
        "I'll gradually increase my activity as my breathing improves.",
        "I'll remain on bedrest until my follow-up appointment.",
        "I'll stop coughing to let my lungs heal.",
        "I'll stop drinking fluids to decrease mucus production."
    ],
    answer:
        "I'll gradually increase my activity as my breathing improves.",
    rationale:
        "Gradually increasing activity promotes recovery while avoiding excessive fatigue. Hydration and coughing should continue.",
    takeaway:
        "Progressive activity supports recovery."
},

{
    id: "RESPINF-022",
    caseId: "RESPINF-CASE-022",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions improve oxygenation in a client with pneumonia? Select all that apply.",
    choices: [
        "Position the client in semi-Fowler's or high-Fowler's.",
        "Encourage coughing and deep breathing.",
        "Administer oxygen as prescribed.",
        "Use an incentive spirometer.",
        "Monitor pulse oximetry.",
        "Restrict fluid intake."
    ],
    answer: [
        "Position the client in semi-Fowler's or high-Fowler's.",
        "Encourage coughing and deep breathing.",
        "Administer oxygen as prescribed.",
        "Use an incentive spirometer.",
        "Monitor pulse oximetry."
    ],
    rationale:
        "These interventions improve ventilation, promote secretion clearance, and monitor oxygenation. Fluids should generally be encouraged unless contraindicated.",
    takeaway:
        "Positioning, oxygen, pulmonary hygiene, and monitoring improve oxygenation."
},

{
    id: "RESPINF-023",
    caseId: "RESPINF-CASE-023",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client hospitalized with pneumonia suddenly develops BP 78/40 mm Hg, HR 138/min, RR 36/min, SpO₂ 84% despite oxygen, and altered mental status. Which complication should the nurse suspect?",
    choices: [
        "Septic shock with respiratory failure",
        "Stable recovery",
        "Heartburn",
        "Simple dehydration"
    ],
    answer:
        "Septic shock with respiratory failure",
    rationale:
        "Profound hypotension, hypoxemia, tachycardia, and altered mental status indicate septic shock with worsening respiratory failure.",
    takeaway:
        "Severe pneumonia can rapidly progress to septic shock."
},

{
    id: "RESPINF-024",
    caseId: "RESPINF-CASE-024",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client whose respiratory rate increased from 22/min to 38/min over the last hour",
        "A client with a productive cough requesting tissues",
        "A client with a temperature of 100.6°F (38.1°C)",
        "A client asking about discharge medications"
    ],
    answer:
        "A client whose respiratory rate increased from 22/min to 38/min over the last hour",
    rationale:
        "Rapidly increasing respiratory rate is an early sign of respiratory deterioration and requires immediate assessment.",
    takeaway:
        "Trending respiratory rate is a sensitive indicator of decline."
},

{
    id: "RESPINF-025",
    caseId: "RESPINF-CASE-025",
    patient: randomPatient(),
    topic: "Respiratory Infections",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with severe pneumonia has SpO₂ 82% on 4 L/min nasal cannula, RR 38/min, HR 140/min, BP 82/46 mm Hg, lactate 5.0 mmol/L, and new confusion. Which nursing intervention is the priority?",
    choices: [
        "Activate the rapid response/sepsis protocol, provide high-priority oxygen support, obtain cultures as ordered, begin IV fluids and antibiotics promptly, and notify the provider immediately.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids and ambulation.",
        "Continue routine monitoring."
    ],
    answer:
        "Activate the rapid response/sepsis protocol, provide high-priority oxygen support, obtain cultures as ordered, begin IV fluids and antibiotics promptly, and notify the provider immediately.",
    rationale:
        "The client demonstrates septic shock with acute respiratory failure. Immediate oxygenation and sepsis treatment are lifesaving priorities.",
    takeaway:
        "Treat hypoxia and septic shock immediately using the ABCs and sepsis bundle."
},

];
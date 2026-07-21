const hepatitisQuestions = [

{
    id: "HEPATITIS-001",
    caseId: "HEPATITIS-CASE-001",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes hepatitis?",
    choices: [
        "Inflammation of the liver that impairs hepatic function",
        "Inflammation of the pancreas caused by digestive enzymes",
        "Inflammation of the gallbladder caused by gallstones",
        "Inflammation of the appendix caused by obstruction"
    ],
    answer:
        "Inflammation of the liver that impairs hepatic function",
    rationale:
        "Hepatitis is inflammation of the liver that may result from viral infections, toxins, medications, alcohol, or autoimmune disease.",
    takeaway:
        "Hepatitis = inflammation of the liver."
},

{
    id: "HEPATITIS-002",
    caseId: "HEPATITIS-CASE-002",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Transmission",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which type of hepatitis is most commonly transmitted through contaminated food or water?",
    choices: [
        "Hepatitis A",
        "Hepatitis B",
        "Hepatitis C",
        "Hepatitis D"
    ],
    answer:
        "Hepatitis A",
    rationale:
        "Hepatitis A spreads primarily by the fecal-oral route through contaminated food or water.",
    takeaway:
        "HAV = fecal-oral transmission."
},

{
    id: "HEPATITIS-003",
    caseId: "HEPATITIS-CASE-003",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly seen in viral hepatitis? Select all that apply.",
    choices: [
        "Jaundice",
        "Dark urine",
        "Fatigue",
        "Right upper quadrant discomfort",
        "Clay-colored stools",
        "Bradycardia"
    ],
    answer: [
        "Jaundice",
        "Dark urine",
        "Fatigue",
        "Right upper quadrant discomfort",
        "Clay-colored stools"
    ],
    rationale:
        "Common findings include jaundice, fatigue, anorexia, dark urine, pale stools, and RUQ discomfort.",
    takeaway:
        "Dark urine + clay stools + jaundice = hepatitis."
},

{
    id: "HEPATITIS-004",
    caseId: "HEPATITIS-CASE-004",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding is most consistent with acute viral hepatitis?",
    choices: [
        "Markedly elevated AST and ALT",
        "Low serum lipase",
        "Elevated troponin",
        "Low white blood cell count"
    ],
    answer:
        "Markedly elevated AST and ALT",
    rationale:
        "Liver inflammation causes hepatocyte injury resulting in elevated AST and ALT levels.",
    takeaway:
        "AST and ALT are key liver enzymes."
},

{
    id: "HEPATITIS-005",
    caseId: "HEPATITIS-CASE-005",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with hepatitis should the nurse assess first?",
    choices: [
        "A client who is increasingly confused with asterixis",
        "A client requesting antiemetic medication",
        "A client asking about the hepatitis vaccine",
        "A client reporting fatigue"
    ],
    answer:
        "A client who is increasingly confused with asterixis",
    rationale:
        "Confusion and asterixis may indicate acute liver failure with hepatic encephalopathy requiring immediate intervention.",
    takeaway:
        "Mental status changes are an emergency in hepatitis."
},

{
    id: "HEPATITIS-006",
    caseId: "HEPATITIS-CASE-006",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal is most appropriate for a client recovering from acute hepatitis?",
    choices: [
        "Grilled chicken, rice, fruit, and vegetables",
        "Pepperoni pizza",
        "Fried chicken with gravy",
        "Cheeseburger with fries"
    ],
    answer:
        "Grilled chicken, rice, fruit, and vegetables",
    rationale:
        "A balanced diet with adequate calories and protein supports liver healing while avoiding excessive fat and alcohol.",
    takeaway:
        "Choose nutritious, balanced meals during recovery."
},

{
    id: "HEPATITIS-007",
    caseId: "HEPATITIS-CASE-007",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of hepatitis discharge teaching?",
    choices: [
        "I will avoid alcohol until my provider says it is safe.",
        "Alcohol won't affect my liver recovery.",
        "I can stop resting once my jaundice appears.",
        "Acetaminophen is safe to take without limits."
    ],
    answer:
        "I will avoid alcohol until my provider says it is safe.",
    rationale:
        "Alcohol places additional stress on the liver and should be avoided during recovery.",
    takeaway:
        "Avoid alcohol with any liver disease."
},

{
    id: "HEPATITIS-008",
    caseId: "HEPATITIS-CASE-008",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's greatest concern in a client with acute hepatitis?",
    choices: [
        "Acute liver failure",
        "Appendicitis",
        "Pancreatitis",
        "Diverticulitis"
    ],
    answer:
        "Acute liver failure",
    rationale:
        "Although uncommon, acute liver failure is life-threatening and requires immediate recognition and intervention.",
    takeaway:
        "Monitor closely for liver failure."
},

{
    id: "HEPATITIS-009",
    caseId: "HEPATITIS-CASE-009",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of worsening liver dysfunction in a client with hepatitis?",
    choices: [
        "Increasing jaundice and dark urine",
        "Right lower quadrant pain",
        "Positive Murphy's sign",
        "Pain relieved by eating"
    ],
    answer:
        "Increasing jaundice and dark urine",
    rationale:
        "Progressive jaundice and dark urine indicate worsening bilirubin metabolism due to declining liver function.",
    takeaway:
        "Worsening jaundice suggests worsening hepatic injury."
},

{
    id: "HEPATITIS-010",
    caseId: "HEPATITIS-CASE-010",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value would concern the nurse most in a client with acute hepatitis?",
    choices: [
        "INR of 2.6",
        "ALT of 720 U/L",
        "AST of 640 U/L",
        "Total bilirubin of 3.5 mg/dL"
    ],
    answer:
        "INR of 2.6",
    rationale:
        "An elevated INR indicates impaired clotting factor production and worsening liver synthetic function, increasing the risk for bleeding.",
    takeaway:
        "INR reflects liver function better than AST or ALT."
},

{
    id: "HEPATITIS-011",
    caseId: "HEPATITIS-CASE-011",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with hepatitis develops increasing confusion, slurred speech, and difficulty staying awake. What is the nurse's priority action?",
    choices: [
        "Assess neurologic status and notify the provider immediately.",
        "Administer an antiemetic.",
        "Encourage oral fluids.",
        "Provide a high-fat meal."
    ],
    answer:
        "Assess neurologic status and notify the provider immediately.",
    rationale:
        "These findings suggest hepatic encephalopathy and possible acute liver failure requiring immediate intervention.",
    takeaway:
        "New confusion in hepatitis is an emergency."
},

{
    id: "HEPATITIS-012",
    caseId: "HEPATITIS-CASE-012",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Transmission",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which teaching points are appropriate for preventing transmission of hepatitis B? Select all that apply.",
    choices: [
        "Receive the hepatitis B vaccine.",
        "Use condoms during sexual activity.",
        "Avoid sharing razors.",
        "Avoid sharing needles.",
        "Practice proper hand hygiene.",
        "Avoid eating shellfish."
    ],
    answer: [
        "Receive the hepatitis B vaccine.",
        "Use condoms during sexual activity.",
        "Avoid sharing razors.",
        "Avoid sharing needles.",
        "Practice proper hand hygiene."
    ],
    rationale:
        "Hepatitis B is transmitted through blood and body fluids. Vaccination and avoiding blood exposure are effective prevention strategies.",
    takeaway:
        "HBV spreads through blood and body fluids."
},

{
    id: "HEPATITIS-013",
    caseId: "HEPATITIS-CASE-013",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates a need for further teaching about hepatitis?",
    choices: [
        "I'll continue drinking alcohol once my liver enzymes improve.",
        "I'll avoid sharing toothbrushes.",
        "I'll follow up for repeat liver function tests.",
        "I'll take medications only as prescribed."
    ],
    answer:
        "I'll continue drinking alcohol once my liver enzymes improve.",
    rationale:
        "Alcohol should be avoided because it can worsen liver injury and delay recovery.",
    takeaway:
        "Avoid alcohol with hepatitis."
},

{
    id: "HEPATITIS-014",
    caseId: "HEPATITIS-CASE-014",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding suggests progression to acute liver failure?",
    choices: [
        "Bleeding gums and prolonged INR",
        "Mild fatigue",
        "Decreased appetite",
        "Intermittent nausea"
    ],
    answer:
        "Bleeding gums and prolonged INR",
    rationale:
        "Failure of the liver to produce clotting factors results in coagulopathy and spontaneous bleeding.",
    takeaway:
        "Bleeding is a sign of declining liver function."
},

{
    id: "HEPATITIS-015",
    caseId: "HEPATITIS-CASE-015",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with hepatitis has increasing jaundice, ammonia of 118 mcg/dL, confusion, and asterixis. Which complication should the nurse suspect?",
    choices: [
        "Hepatic encephalopathy",
        "Acute appendicitis",
        "Pancreatitis",
        "Cholecystitis"
    ],
    answer:
        "Hepatic encephalopathy",
    rationale:
        "Elevated ammonia levels and altered mental status indicate hepatic encephalopathy resulting from liver dysfunction.",
    takeaway:
        "High ammonia causes neurologic changes."
},

{
    id: "HEPATITIS-016",
    caseId: "HEPATITIS-CASE-016",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with hepatitis. Which client should be assessed first?",
    choices: [
        "A client with confusion, BP 88/52 mm Hg, and increasing jaundice",
        "A client asking about hepatitis vaccines",
        "A client requesting antiemetic medication",
        "A client reporting fatigue"
    ],
    answer:
        "A client with confusion, BP 88/52 mm Hg, and increasing jaundice",
    rationale:
        "Altered mental status with hypotension suggests acute liver failure and requires immediate intervention.",
    takeaway:
        "Prioritize unstable clients with neurologic changes."
},

{
    id: "HEPATITIS-017",
    caseId: "HEPATITIS-CASE-017",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client with hepatitis reports increasing fatigue, anorexia, and right upper quadrant discomfort. Which assessment finding would the nurse expect next?",
    choices: [
        "Jaundice of the skin and sclera",
        "Left lower quadrant rebound tenderness",
        "Severe flank pain",
        "Pain relieved after eating"
    ],
    answer:
        "Jaundice of the skin and sclera",
    rationale:
        "As hepatocyte injury progresses, bilirubin accumulates, producing jaundice of the skin and sclera.",
    takeaway:
        "Progressive hepatitis commonly results in jaundice."
},

{
    id: "HEPATITIS-018",
    caseId: "HEPATITIS-CASE-018",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Transmission",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which interventions help prevent transmission of hepatitis A? Select all that apply.",
    choices: [
        "Wash hands after using the restroom.",
        "Drink clean, treated water.",
        "Receive the hepatitis A vaccine.",
        "Practice safe food handling.",
        "Wash fruits and vegetables.",
        "Avoid sharing razors."
    ],
    answer: [
        "Wash hands after using the restroom.",
        "Drink clean, treated water.",
        "Receive the hepatitis A vaccine.",
        "Practice safe food handling.",
        "Wash fruits and vegetables."
    ],
    rationale:
        "Hepatitis A spreads by the fecal-oral route. Hand hygiene, food safety, clean water, and vaccination reduce transmission. Sharing razors is associated with bloodborne hepatitis.",
    takeaway:
        "HAV prevention focuses on sanitation and vaccination."
},

{
    id: "HEPATITIS-019",
    caseId: "HEPATITIS-CASE-019",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory value best indicates that liver function is improving after acute hepatitis?",
    choices: [
        "AST and ALT are trending downward.",
        "Serum lipase is increasing.",
        "Troponin is decreasing.",
        "White blood cell count is elevated."
    ],
    answer:
        "AST and ALT are trending downward.",
    rationale:
        "A downward trend in liver enzymes indicates decreasing hepatocellular injury and improving liver function.",
    takeaway:
        "Trending labs are more important than a single value."
},

{
    id: "HEPATITIS-020",
    caseId: "HEPATITIS-CASE-020",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with hepatitis should the nurse assess first?",
    choices: [
        "A client with bleeding gums, INR 3.1, and BP 90/50 mm Hg",
        "A client requesting a meal tray",
        "A client asking about discharge instructions",
        "A client reporting mild nausea"
    ],
    answer:
        "A client with bleeding gums, INR 3.1, and BP 90/50 mm Hg",
    rationale:
        "Active bleeding with impaired coagulation and hypotension indicates severe liver dysfunction and possible hemorrhage requiring immediate intervention.",
    takeaway:
        "Bleeding plus hypotension is an emergency."
},

{
    id: "HEPATITIS-021",
    caseId: "HEPATITIS-CASE-021",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instruction should the nurse include when teaching a client with chronic hepatitis C?",
    choices: [
        "Do not share toothbrushes or razors with others.",
        "Avoid shaking hands with family members.",
        "Remain isolated until liver enzymes normalize.",
        "Avoid all contact with household members."
    ],
    answer:
        "Do not share toothbrushes or razors with others.",
    rationale:
        "Hepatitis C is transmitted through blood exposure. Personal items contaminated with blood should never be shared.",
    takeaway:
        "Prevent blood exposure to others."
},

{
    id: "HEPATITIS-022",
    caseId: "HEPATITIS-CASE-022",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client with acute viral hepatitis? Select all that apply.",
    choices: [
        "Monitor liver function tests.",
        "Encourage adequate rest.",
        "Assess for bleeding.",
        "Provide small frequent meals.",
        "Monitor mental status.",
        "Encourage alcohol intake to improve appetite."
    ],
    answer: [
        "Monitor liver function tests.",
        "Encourage adequate rest.",
        "Assess for bleeding.",
        "Provide small frequent meals.",
        "Monitor mental status."
    ],
    rationale:
        "Care includes supporting liver recovery, monitoring for complications, preventing bleeding, and assessing for hepatic encephalopathy.",
    takeaway:
        "Support the liver and monitor for complications."
},

{
    id: "HEPATITIS-023",
    caseId: "HEPATITIS-CASE-023",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with hepatitis develops increasing confusion, elevated ammonia, prolonged INR, and worsening jaundice. Which complication should the nurse suspect?",
    choices: [
        "Acute liver failure",
        "Acute pancreatitis",
        "Appendicitis",
        "Peptic ulcer disease"
    ],
    answer:
        "Acute liver failure",
    rationale:
        "Progressive neurologic changes, impaired coagulation, and worsening jaundice indicate acute liver failure requiring immediate intervention.",
    takeaway:
        "Watch for liver failure in worsening hepatitis."
},

{
    id: "HEPATITIS-024",
    caseId: "HEPATITIS-CASE-024",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with hepatitis. Which client should be seen first?",
    choices: [
        "A client with ammonia 142 mcg/dL who is difficult to arouse",
        "A client requesting an antiemetic",
        "A client asking when jaundice will improve",
        "A client with fatigue after walking"
    ],
    answer:
        "A client with ammonia 142 mcg/dL who is difficult to arouse",
    rationale:
        "Difficulty arousing the client suggests severe hepatic encephalopathy requiring immediate assessment and treatment.",
    takeaway:
        "Decreasing level of consciousness is a priority."
},

{
    id: "HEPATITIS-025",
    caseId: "HEPATITIS-CASE-025",
    patient: randomPatient(),
    topic: "Hepatitis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with hepatitis has AST 1,120 U/L, ALT 1,450 U/L, INR 3.0, ammonia 126 mcg/dL, increasing confusion, jaundice, and BP 92/54 mm Hg. Which nursing intervention is the priority?",
    choices: [
        "Assess airway and neurologic status, initiate supportive care, notify the provider immediately, and prepare for possible transfer to intensive care.",
        "Provide a high-fat meal.",
        "Encourage ambulation three times daily.",
        "Prepare the client for discharge."
    ],
    answer:
        "Assess airway and neurologic status, initiate supportive care, notify the provider immediately, and prepare for possible transfer to intensive care.",
    rationale:
        "The client demonstrates acute liver failure with hepatic encephalopathy, coagulopathy, and hemodynamic instability requiring immediate stabilization.",
    takeaway:
        "Acute liver failure is life-threatening—prioritize ABCs and rapid intervention."
},

];
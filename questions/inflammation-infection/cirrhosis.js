const cirrhosisQuestions = [

{
    id: "CIRRHOSIS-001",
    caseId: "CIRRHOSIS-CASE-001",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes cirrhosis?",
    choices: [
        "Progressive replacement of healthy liver tissue with scar tissue, resulting in impaired liver function",
        "Inflammation of the pancreas caused by digestive enzymes",
        "Acute infection of the gallbladder caused by gallstones",
        "Inflammation of the appendix causing peritonitis"
    ],
    answer:
        "Progressive replacement of healthy liver tissue with scar tissue, resulting in impaired liver function",
    rationale:
        "Cirrhosis is the end stage of chronic liver disease in which fibrosis and regenerative nodules replace normal liver tissue, reducing hepatic function.",
    takeaway:
        "Cirrhosis = irreversible scarring of the liver."
},

{
    id: "CIRRHOSIS-002",
    caseId: "CIRRHOSIS-CASE-002",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which conditions are common causes of cirrhosis?",
    choices: [
        "Chronic alcohol use and chronic hepatitis",
        "Asthma and COPD",
        "Appendicitis and pancreatitis",
        "GERD and peptic ulcer disease"
    ],
    answer:
        "Chronic alcohol use and chronic hepatitis",
    rationale:
        "The most common causes of cirrhosis include chronic alcohol use, hepatitis B, hepatitis C, and nonalcoholic fatty liver disease.",
    takeaway:
        "Alcohol and hepatitis are leading causes of cirrhosis."
},

{
    id: "CIRRHOSIS-003",
    caseId: "CIRRHOSIS-CASE-003",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly associated with cirrhosis? Select all that apply.",
    choices: [
        "Ascites",
        "Jaundice",
        "Spider angiomas",
        "Peripheral edema",
        "Fatigue",
        "Bradycardia"
    ],
    answer: [
        "Ascites",
        "Jaundice",
        "Spider angiomas",
        "Peripheral edema",
        "Fatigue"
    ],
    rationale:
        "Common manifestations include portal hypertension, ascites, edema, jaundice, fatigue, and spider angiomas.",
    takeaway:
        "Think liver failure: jaundice, edema, ascites."
},

{
    id: "CIRRHOSIS-004",
    caseId: "CIRRHOSIS-CASE-004",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding is commonly seen in advanced cirrhosis?",
    choices: [
        "Low serum albumin",
        "High hemoglobin",
        "Low bilirubin",
        "Elevated calcium"
    ],
    answer:
        "Low serum albumin",
    rationale:
        "As liver function declines, albumin synthesis decreases, leading to hypoalbuminemia and edema.",
    takeaway:
        "Low albumin contributes to ascites and edema."
},

{
    id: "CIRRHOSIS-005",
    caseId: "CIRRHOSIS-CASE-005",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with cirrhosis should the nurse assess first?",
    choices: [
        "A client vomiting bright red blood with BP 84/46 mm Hg",
        "A client requesting a low-sodium menu",
        "A client asking about discharge instructions",
        "A client with mild ankle edema"
    ],
    answer:
        "A client vomiting bright red blood with BP 84/46 mm Hg",
    rationale:
        "Massive hematemesis suggests bleeding esophageal varices, a life-threatening emergency requiring immediate intervention.",
    takeaway:
        "Variceal bleeding is a priority emergency."
},

{
    id: "CIRRHOSIS-006",
    caseId: "CIRRHOSIS-CASE-006",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal is most appropriate for a client with cirrhosis and ascites?",
    choices: [
        "Grilled chicken, steamed vegetables, and fresh fruit without added salt",
        "Ham sandwich with potato chips",
        "Pepperoni pizza",
        "Fried chicken with gravy"
    ],
    answer:
        "Grilled chicken, steamed vegetables, and fresh fruit without added salt",
    rationale:
        "A low-sodium diet helps decrease fluid retention and ascites.",
    takeaway:
        "Low sodium helps control ascites."
},

{
    id: "CIRRHOSIS-007",
    caseId: "CIRRHOSIS-CASE-007",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates understanding of cirrhosis management?",
    choices: [
        "I will completely avoid alcohol.",
        "Alcohol is safe if I only drink on weekends.",
        "Extra salt will help prevent muscle cramps.",
        "I should stop taking my prescribed medications once I feel better."
    ],
    answer:
        "I will completely avoid alcohol.",
    rationale:
        "Alcohol accelerates liver damage and should be avoided completely.",
    takeaway:
        "No alcohol with cirrhosis."
},

{
    id: "CIRRHOSIS-008",
    caseId: "CIRRHOSIS-CASE-008",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication of cirrhosis is caused by increased portal venous pressure?",
    choices: [
        "Esophageal varices",
        "Appendicitis",
        "Pancreatitis",
        "Peptic ulcer disease"
    ],
    answer:
        "Esophageal varices",
    rationale:
        "Portal hypertension causes enlarged collateral veins, including esophageal varices that may rupture and bleed.",
    takeaway:
        "Portal hypertension leads to varices."
},

{
    id: "CIRRHOSIS-009",
    caseId: "CIRRHOSIS-CASE-009",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most indicative of hepatic encephalopathy?",
    choices: [
        "Confusion and asterixis (flapping tremor)",
        "Right lower quadrant pain",
        "Severe constipation",
        "Positive Murphy's sign"
    ],
    answer:
        "Confusion and asterixis (flapping tremor)",
    rationale:
        "Hepatic encephalopathy results from the buildup of ammonia and other toxins, producing confusion, altered mental status, and asterixis.",
    takeaway:
        "Confusion + asterixis = hepatic encephalopathy."
},

{
    id: "CIRRHOSIS-010",
    caseId: "CIRRHOSIS-CASE-010",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding would the nurse expect in a client with hepatic encephalopathy?",
    choices: [
        "Elevated serum ammonia",
        "Low serum potassium",
        "Decreased AST",
        "Low INR"
    ],
    answer:
        "Elevated serum ammonia",
    rationale:
        "The diseased liver cannot adequately convert ammonia into urea, resulting in elevated serum ammonia levels.",
    takeaway:
        "High ammonia contributes to altered mental status."
},

{
    id: "CIRRHOSIS-011",
    caseId: "CIRRHOSIS-CASE-011",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis suddenly becomes confused and difficult to arouse. What is the nurse's priority action?",
    choices: [
        "Assess neurologic status and notify the provider immediately.",
        "Encourage the client to drink water.",
        "Assist the client to ambulate.",
        "Provide a high-protein meal."
    ],
    answer:
        "Assess neurologic status and notify the provider immediately.",
    rationale:
        "A sudden change in mental status suggests worsening hepatic encephalopathy and requires immediate evaluation and treatment.",
    takeaway:
        "Acute confusion in cirrhosis is an emergency."
},

{
    id: "CIRRHOSIS-012",
    caseId: "CIRRHOSIS-CASE-012",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client with cirrhosis and ascites? Select all that apply.",
    choices: [
        "Measure abdominal girth daily.",
        "Monitor daily weights.",
        "Restrict sodium as prescribed.",
        "Administer prescribed diuretics.",
        "Assess lung sounds.",
        "Encourage high-sodium foods."
    ],
    answer: [
        "Measure abdominal girth daily.",
        "Monitor daily weights.",
        "Restrict sodium as prescribed.",
        "Administer prescribed diuretics.",
        "Assess lung sounds."
    ],
    rationale:
        "Monitoring fluid status and treating fluid retention help manage ascites and reduce complications such as respiratory compromise.",
    takeaway:
        "Daily weights and abdominal girth monitor ascites."
},

{
    id: "CIRRHOSIS-013",
    caseId: "CIRRHOSIS-CASE-013",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Medications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which medication is commonly prescribed to reduce ammonia levels in hepatic encephalopathy?",
    choices: [
        "Lactulose",
        "Omeprazole",
        "Furosemide",
        "Acetaminophen"
    ],
    answer:
        "Lactulose",
    rationale:
        "Lactulose traps ammonia in the gastrointestinal tract and promotes its elimination through the stool.",
    takeaway:
        "Lactulose lowers ammonia."
},

{
    id: "CIRRHOSIS-014",
    caseId: "CIRRHOSIS-CASE-014",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates a need for further teaching?",
    choices: [
        "I'll take acetaminophen freely because it's safe for my liver.",
        "I'll avoid alcohol completely.",
        "I'll weigh myself every morning.",
        "I'll report black stools immediately."
    ],
    answer:
        "I'll take acetaminophen freely because it's safe for my liver.",
    rationale:
        "Acetaminophen can be hepatotoxic, especially in clients with liver disease, and should only be taken as directed by the provider.",
    takeaway:
        "Avoid unnecessary hepatotoxic medications."
},

{
    id: "CIRRHOSIS-015",
    caseId: "CIRRHOSIS-CASE-015",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis has increasing abdominal distention, dyspnea, weight gain, and shifting dullness on assessment. Which complication should the nurse suspect?",
    choices: [
        "Progressive ascites",
        "Acute appendicitis",
        "Pancreatitis",
        "Cholecystitis"
    ],
    answer:
        "Progressive ascites",
    rationale:
        "Portal hypertension and hypoalbuminemia lead to fluid accumulation within the peritoneal cavity, producing ascites.",
    takeaway:
        "Ascites causes abdominal distention and respiratory difficulty."
},

{
    id: "CIRRHOSIS-016",
    caseId: "CIRRHOSIS-CASE-016",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with cirrhosis. Which client should be assessed first?",
    choices: [
        "A client who is confused with an ammonia level of 168 mcg/dL",
        "A client requesting a low-sodium snack",
        "A client with mild bilateral ankle edema",
        "A client asking about discharge teaching"
    ],
    answer:
        "A client who is confused with an ammonia level of 168 mcg/dL",
    rationale:
        "Altered mental status and markedly elevated ammonia indicate worsening hepatic encephalopathy requiring immediate intervention.",
    takeaway:
        "Confusion in cirrhosis is a priority."
},

{
    id: "CIRRHOSIS-017",
    caseId: "CIRRHOSIS-CASE-017",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client with cirrhosis reports increasing fatigue, jaundice, and generalized itching. Which explanation is most appropriate?",
    choices: [
        "Bile salts are accumulating because the diseased liver cannot excrete bilirubin effectively.",
        "The kidneys are no longer producing urine.",
        "The pancreas is releasing excess digestive enzymes.",
        "The stomach is producing excessive acid."
    ],
    answer:
        "Bile salts are accumulating because the diseased liver cannot excrete bilirubin effectively.",
    rationale:
        "Impaired bile excretion causes bilirubin and bile salts to accumulate, leading to jaundice and pruritus.",
    takeaway:
        "Jaundice and itching result from bilirubin and bile salt buildup."
},

{
    id: "CIRRHOSIS-018",
    caseId: "CIRRHOSIS-CASE-018",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are consistent with portal hypertension? Select all that apply.",
    choices: [
        "Ascites",
        "Esophageal varices",
        "Splenomegaly",
        "Caput medusae",
        "Hemorrhoids",
        "Bradycardia"
    ],
    answer: [
        "Ascites",
        "Esophageal varices",
        "Splenomegaly",
        "Caput medusae",
        "Hemorrhoids"
    ],
    rationale:
        "Portal hypertension causes collateral venous circulation, splenic enlargement, hemorrhoids, ascites, and esophageal varices.",
    takeaway:
        "Portal hypertension affects multiple venous systems."
},

{
    id: "CIRRHOSIS-019",
    caseId: "CIRRHOSIS-CASE-019",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which coagulation laboratory value would the nurse expect in advanced cirrhosis?",
    choices: [
        "Elevated INR",
        "Decreased INR",
        "Elevated calcium",
        "Elevated hemoglobin"
    ],
    answer:
        "Elevated INR",
    rationale:
        "The liver produces clotting factors. Liver failure results in prolonged clotting times and an elevated INR.",
    takeaway:
        "Cirrhosis increases bleeding risk."
},

{
    id: "CIRRHOSIS-020",
    caseId: "CIRRHOSIS-CASE-020",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with cirrhosis should the nurse assess first?",
    choices: [
        "A client with black tarry stools, BP 88/50 mm Hg, and HR 124/min",
        "A client requesting pain medication",
        "A client with mild ankle edema",
        "A client asking about sodium restrictions"
    ],
    answer:
        "A client with black tarry stools, BP 88/50 mm Hg, and HR 124/min",
    rationale:
        "Melena with hypotension and tachycardia suggests active gastrointestinal bleeding and possible hemorrhagic shock.",
    takeaway:
        "Bleeding with unstable vital signs is an emergency."
},

{
    id: "CIRRHOSIS-021",
    caseId: "CIRRHOSIS-CASE-021",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal is most appropriate for a stable client with cirrhosis?",
    choices: [
        "Baked fish, brown rice, steamed vegetables, and fresh fruit",
        "Ham, bacon, and potato chips",
        "Pepperoni pizza and fries",
        "Fried chicken with gravy"
    ],
    answer:
        "Baked fish, brown rice, steamed vegetables, and fresh fruit",
    rationale:
        "Clients with cirrhosis generally benefit from nutritious meals that are low in sodium while maintaining adequate protein unless otherwise prescribed.",
    takeaway:
        "Choose balanced, low-sodium meals."
},

{
    id: "CIRRHOSIS-022",
    caseId: "CIRRHOSIS-CASE-022",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client with hepatic encephalopathy? Select all that apply.",
    choices: [
        "Administer lactulose as prescribed.",
        "Monitor neurologic status.",
        "Implement fall precautions.",
        "Monitor ammonia levels.",
        "Assess bowel movements.",
        "Encourage alcohol consumption."
    ],
    answer: [
        "Administer lactulose as prescribed.",
        "Monitor neurologic status.",
        "Implement fall precautions.",
        "Monitor ammonia levels.",
        "Assess bowel movements."
    ],
    rationale:
        "Treatment focuses on reducing ammonia levels, monitoring mental status, preventing injury, and ensuring lactulose is effective.",
    takeaway:
        "Lactulose works by increasing ammonia excretion through the stool."
},

{
    id: "CIRRHOSIS-023",
    caseId: "CIRRHOSIS-CASE-023",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis develops increasing lethargy, slurred speech, and asterixis. Which complication should the nurse suspect?",
    choices: [
        "Hepatic encephalopathy",
        "Acute pancreatitis",
        "Appendicitis",
        "Cholecystitis"
    ],
    answer:
        "Hepatic encephalopathy",
    rationale:
        "Accumulation of ammonia causes progressive neurologic dysfunction including lethargy, confusion, slurred speech, and asterixis.",
    takeaway:
        "Mental status changes in cirrhosis usually indicate rising ammonia."
},

{
    id: "CIRRHOSIS-024",
    caseId: "CIRRHOSIS-CASE-024",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four hospitalized clients with cirrhosis. Which client should be seen first?",
    choices: [
        "A client vomiting bright red blood with HR 136/min and BP 82/46 mm Hg",
        "A client requesting a dietitian consultation",
        "A client with mild abdominal distention",
        "A client asking about discharge medications"
    ],
    answer:
        "A client vomiting bright red blood with HR 136/min and BP 82/46 mm Hg",
    rationale:
        "Massive variceal bleeding can rapidly lead to hemorrhagic shock and requires immediate intervention.",
    takeaway:
        "Variceal hemorrhage is one of the deadliest cirrhosis complications."
},

{
    id: "CIRRHOSIS-025",
    caseId: "CIRRHOSIS-CASE-025",
    patient: randomPatient(),
    topic: "Cirrhosis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis has ammonia 152 mcg/dL, INR 2.8, albumin 2.1 g/dL, tense ascites, increasing confusion, and BP 90/54 mm Hg. Which nursing intervention is the priority?",
    choices: [
        "Stabilize the client, assess airway and neurologic status, administer prescribed lactulose, and notify the provider immediately.",
        "Encourage the client to eat a high-sodium meal.",
        "Prepare the client for discharge.",
        "Limit bowel movements to prevent dehydration."
    ],
    answer:
        "Stabilize the client, assess airway and neurologic status, administer prescribed lactulose, and notify the provider immediately.",
    rationale:
        "This client demonstrates decompensated cirrhosis with hepatic encephalopathy, impaired coagulation, hypotension, and severe ascites requiring immediate stabilization.",
    takeaway:
        "Decompensated cirrhosis requires rapid recognition of airway, bleeding, and neurologic complications."
},

];
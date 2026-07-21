const pancreatitisQuestions = [

{
    id: "PANCREATITIS-001",
    caseId: "PANCREATITIS-CASE-001",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes acute pancreatitis?",
    choices: [
        "The pancreas begins digesting itself after digestive enzymes become activated inside the gland.",
        "The gallbladder becomes infected after a fatty meal.",
        "The appendix ruptures because of bacterial infection.",
        "The stomach produces excessive hydrochloric acid."
    ],
    answer:
        "The pancreas begins digesting itself after digestive enzymes become activated inside the gland.",
    rationale:
        "Acute pancreatitis occurs when pancreatic enzymes activate prematurely, causing autodigestion, inflammation, edema, and tissue destruction.",
    takeaway:
        "Pancreatitis = pancreatic autodigestion."
},

{
    id: "PANCREATITIS-002",
    caseId: "PANCREATITIS-CASE-002",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which two conditions are the most common causes of acute pancreatitis?",
    choices: [
        "Gallstones and excessive alcohol use",
        "GERD and appendicitis",
        "Crohn's disease and IBS",
        "Diverticulitis and celiac disease"
    ],
    answer:
        "Gallstones and excessive alcohol use",
    rationale:
        "Gallstones and chronic alcohol use account for the majority of acute pancreatitis cases.",
    takeaway:
        "Remember: Gallstones and alcohol."
},

{
    id: "PANCREATITIS-003",
    caseId: "PANCREATITIS-CASE-003",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly associated with acute pancreatitis? Select all that apply.",
    choices: [
        "Severe epigastric pain radiating to the back",
        "Nausea and vomiting",
        "Abdominal tenderness",
        "Elevated temperature",
        "Pain worse after eating",
        "Right lower quadrant rebound tenderness"
    ],
    answer: [
        "Severe epigastric pain radiating to the back",
        "Nausea and vomiting",
        "Abdominal tenderness",
        "Elevated temperature",
        "Pain worse after eating"
    ],
    rationale:
        "Acute pancreatitis typically causes severe epigastric pain radiating to the back, nausea, vomiting, abdominal tenderness, fever, and pain that worsens after meals.",
    takeaway:
        "Back pain + epigastric pain = think pancreatitis."
},

{
    id: "PANCREATITIS-004",
    caseId: "PANCREATITIS-CASE-004",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding is most indicative of acute pancreatitis?",
    choices: [
        "Elevated serum lipase",
        "Low bilirubin",
        "Low white blood cell count",
        "Elevated troponin"
    ],
    answer:
        "Elevated serum lipase",
    rationale:
        "Lipase is the most sensitive and specific laboratory marker for acute pancreatitis and remains elevated longer than amylase.",
    takeaway:
        "Lipase is the best lab for pancreatitis."
},

{
    id: "PANCREATITIS-005",
    caseId: "PANCREATITIS-CASE-005",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with pancreatitis who has BP 84/48 mm Hg and HR 132/min",
        "A client requesting pain medication rated 6/10",
        "A client asking about a low-fat diet",
        "A client reporting mild nausea"
    ],
    answer:
        "A client with pancreatitis who has BP 84/48 mm Hg and HR 132/min",
    rationale:
        "Hypotension and tachycardia indicate shock or severe third-spacing, requiring immediate intervention.",
    takeaway:
        "Hemodynamic instability takes priority."
},

{
    id: "PANCREATITIS-006",
    caseId: "PANCREATITIS-CASE-006",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which intervention is most appropriate during the acute phase of pancreatitis?",
    choices: [
        "Maintain NPO status and administer IV fluids.",
        "Encourage a high-fat diet.",
        "Provide frequent oral feedings.",
        "Administer laxatives every 4 hours."
    ],
    answer:
        "Maintain NPO status and administer IV fluids.",
    rationale:
        "Resting the pancreas by keeping the client NPO and providing aggressive IV hydration are key components of treatment.",
    takeaway:
        "Rest the pancreas: NPO + IV fluids."
},

{
    id: "PANCREATITIS-007",
    caseId: "PANCREATITIS-CASE-007",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates understanding of pancreatitis discharge teaching?",
    choices: [
        "I will avoid alcohol completely.",
        "I can resume heavy alcohol use once I feel better.",
        "A high-fat diet will help my pancreas heal.",
        "Smoking improves pancreatic recovery."
    ],
    answer:
        "I will avoid alcohol completely.",
    rationale:
        "Alcohol is a major cause of recurrent pancreatitis and should be avoided permanently.",
    takeaway:
        "No alcohol after pancreatitis."
},

{
    id: "PANCREATITIS-008",
    caseId: "PANCREATITIS-CASE-008",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's greatest concern in severe acute pancreatitis?",
    choices: [
        "Hypovolemic shock",
        "GERD",
        "Constipation",
        "Hemorrhoids"
    ],
    answer:
        "Hypovolemic shock",
    rationale:
        "Severe pancreatitis causes massive fluid shifts into the retroperitoneal space, placing the client at risk for hypovolemic shock.",
    takeaway:
        "Third-spacing can rapidly lead to shock."
},

{
    id: "PANCREATITIS-009",
    caseId: "PANCREATITIS-CASE-009",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of acute pancreatitis?",
    choices: [
        "Severe epigastric pain that radiates to the back",
        "Right lower quadrant pain relieved by walking",
        "Left upper quadrant pain relieved after eating",
        "Diffuse abdominal pain relieved with antacids"
    ],
    answer:
        "Severe epigastric pain that radiates to the back",
    rationale:
        "The hallmark symptom of acute pancreatitis is severe epigastric pain that radiates to the back and is often relieved by leaning forward.",
    takeaway:
        "Think pancreatitis when severe epigastric pain shoots straight through to the back."
},

{
    id: "PANCREATITIS-010",
    caseId: "PANCREATITIS-CASE-010",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding would the nurse expect in a client with acute pancreatitis?",
    choices: [
        "Elevated serum amylase",
        "Low serum glucose",
        "Decreased lipase",
        "Low hematocrit"
    ],
    answer:
        "Elevated serum amylase",
    rationale:
        "Serum amylase rises rapidly after pancreatic injury, although lipase is more specific and remains elevated longer.",
    takeaway:
        "Both amylase and lipase increase, but lipase is more specific."
},

{
    id: "PANCREATITIS-011",
    caseId: "PANCREATITIS-CASE-011",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with acute pancreatitis suddenly develops shortness of breath, oxygen saturation of 86%, and restlessness. What is the nurse's priority action?",
    choices: [
        "Apply oxygen and notify the provider immediately.",
        "Administer oral pain medication.",
        "Offer clear liquids.",
        "Assist the client to ambulate."
    ],
    answer:
        "Apply oxygen and notify the provider immediately.",
    rationale:
        "Acute pancreatitis can progress to acute respiratory distress syndrome (ARDS). Airway and oxygenation are the priority.",
    takeaway:
        "Remember ABCs—respiratory compromise comes first."
},

{
    id: "PANCREATITIS-012",
    caseId: "PANCREATITIS-CASE-012",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate during the acute phase of pancreatitis? Select all that apply.",
    choices: [
        "Maintain NPO status",
        "Administer aggressive IV fluids",
        "Provide opioid analgesics as prescribed",
        "Monitor serum glucose",
        "Monitor intake and output",
        "Encourage a high-fat diet"
    ],
    answer: [
        "Maintain NPO status",
        "Administer aggressive IV fluids",
        "Provide opioid analgesics as prescribed",
        "Monitor serum glucose",
        "Monitor intake and output"
    ],
    rationale:
        "Treatment includes pancreatic rest, fluid resuscitation, pain control, glucose monitoring, and careful assessment of fluid balance.",
    takeaway:
        "Rest the pancreas while supporting circulation."
},

{
    id: "PANCREATITIS-013",
    caseId: "PANCREATITIS-CASE-013",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding may indicate hemorrhagic pancreatitis?",
    choices: [
        "Bluish discoloration around the umbilicus (Cullen's sign)",
        "Positive Murphy's sign",
        "McBurney's point tenderness",
        "Rebound tenderness in the RLQ"
    ],
    answer:
        "Bluish discoloration around the umbilicus (Cullen's sign)",
    rationale:
        "Cullen's sign and Grey Turner's sign are classic indicators of retroperitoneal hemorrhage associated with severe pancreatitis.",
    takeaway:
        "Cullen's and Grey Turner's signs indicate severe disease."
},

{
    id: "PANCREATITIS-014",
    caseId: "PANCREATITIS-CASE-014",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates the need for further teaching following pancreatitis?",
    choices: [
        "I'll continue drinking alcohol only on weekends.",
        "I'll eat smaller, low-fat meals.",
        "I'll avoid smoking.",
        "I'll take my prescribed pancreatic enzymes if ordered."
    ],
    answer:
        "I'll continue drinking alcohol only on weekends.",
    rationale:
        "Alcohol should be avoided completely because it significantly increases the risk of recurrent pancreatitis.",
    takeaway:
        "There is no safe amount of alcohol after alcohol-induced pancreatitis."
},

{
    id: "PANCREATITIS-015",
    caseId: "PANCREATITIS-CASE-015",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pancreatitis develops a blood glucose level of 286 mg/dL. Which explanation is most appropriate?",
    choices: [
        "Damage to pancreatic beta cells decreases insulin production.",
        "The kidneys are producing excess glucose.",
        "The liver has stopped producing glycogen.",
        "This is unrelated to pancreatitis."
    ],
    answer:
        "Damage to pancreatic beta cells decreases insulin production.",
    rationale:
        "Inflammation of the pancreas can impair insulin secretion, resulting in hyperglycemia.",
    takeaway:
        "Pancreatitis can temporarily or permanently affect endocrine function."
},

{
    id: "PANCREATITIS-016",
    caseId: "PANCREATITIS-CASE-016",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with pancreatitis. Which client should be assessed first?",
    choices: [
        "A client with RR 30/min, SpO₂ 88%, and increasing confusion",
        "A client requesting pain medication rated 7/10",
        "A client asking when oral fluids may be restarted",
        "A client reporting mild nausea"
    ],
    answer:
        "A client with RR 30/min, SpO₂ 88%, and increasing confusion",
    rationale:
        "Respiratory compromise and altered mental status indicate life-threatening deterioration requiring immediate intervention.",
    takeaway:
        "Airway and breathing always take priority."
},

{
    id: "PANCREATITIS-017",
    caseId: "PANCREATITIS-CASE-017",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client reports severe epigastric pain that improves when leaning forward. Which disorder does the nurse suspect?",
    choices: [
        "Acute pancreatitis",
        "Acute appendicitis",
        "Cholecystitis",
        "Peptic ulcer disease"
    ],
    answer:
        "Acute pancreatitis",
    rationale:
        "Pancreatic inflammation causes severe epigastric pain that frequently radiates to the back and is often relieved by sitting up and leaning forward.",
    takeaway:
        "Leaning forward helps relieve pancreatitis pain."
},

{
    id: "PANCREATITIS-018",
    caseId: "PANCREATITIS-CASE-018",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are consistent with severe acute pancreatitis? Select all that apply.",
    choices: [
        "Grey Turner's sign",
        "Cullen's sign",
        "Hypotension",
        "Tachycardia",
        "Decreased bowel sounds",
        "Bradycardia"
    ],
    answer: [
        "Grey Turner's sign",
        "Cullen's sign",
        "Hypotension",
        "Tachycardia",
        "Decreased bowel sounds"
    ],
    rationale:
        "Severe pancreatitis may produce retroperitoneal bleeding (Grey Turner's and Cullen's signs), hypovolemia with hypotension, tachycardia, and decreased bowel sounds due to ileus.",
    takeaway:
        "Bruising + shock = severe pancreatitis."
},

{
    id: "PANCREATITIS-019",
    caseId: "PANCREATITIS-CASE-019",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal selection is most appropriate after the acute phase of pancreatitis has resolved?",
    choices: [
        "Grilled chicken, brown rice, and steamed broccoli",
        "Cheeseburger with fries",
        "Fried shrimp and onion rings",
        "Pepperoni pizza with milkshake"
    ],
    answer:
        "Grilled chicken, brown rice, and steamed broccoli",
    rationale:
        "Clients recovering from pancreatitis should consume a low-fat, high-protein diet while avoiding greasy foods and alcohol.",
    takeaway:
        "Low-fat meals help prevent pancreatic stimulation."
},

{
    id: "PANCREATITIS-020",
    caseId: "PANCREATITIS-CASE-020",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with pancreatitis should the nurse assess first?",
    choices: [
        "A client with BP 82/44 mm Hg, HR 134/min, and cool clammy skin",
        "A client reporting nausea",
        "A client requesting pain medication",
        "A client asking when they may eat"
    ],
    answer:
        "A client with BP 82/44 mm Hg, HR 134/min, and cool clammy skin",
    rationale:
        "These findings indicate hypovolemic shock from third-spacing and require immediate intervention.",
    takeaway:
        "Shock always takes priority."
},

{
    id: "PANCREATITIS-021",
    caseId: "PANCREATITIS-CASE-021",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client with pancreatitis develops numbness around the mouth and muscle twitching. Which electrolyte imbalance does the nurse suspect?",
    choices: [
        "Hypocalcemia",
        "Hyperkalemia",
        "Hypernatremia",
        "Hypermagnesemia"
    ],
    answer:
        "Hypocalcemia",
    rationale:
        "Calcium binds with fatty acids released during pancreatitis, resulting in hypocalcemia, which may produce tetany and paresthesias.",
    takeaway:
        "Pancreatitis commonly causes hypocalcemia."
},

{
    id: "PANCREATITIS-022",
    caseId: "PANCREATITIS-CASE-022",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client with acute pancreatitis? Select all that apply.",
    choices: [
        "Monitor blood glucose",
        "Assess respiratory status frequently",
        "Administer prescribed IV opioids",
        "Maintain NPO status",
        "Monitor calcium levels",
        "Encourage alcohol consumption after discharge"
    ],
    answer: [
        "Monitor blood glucose",
        "Assess respiratory status frequently",
        "Administer prescribed IV opioids",
        "Maintain NPO status",
        "Monitor calcium levels"
    ],
    rationale:
        "Pancreatitis affects endocrine function, fluid balance, respiratory status, and calcium metabolism. Pain control and pancreatic rest are essential.",
    takeaway:
        "Monitor for systemic complications—not just abdominal pain."
},

{
    id: "PANCREATITIS-023",
    caseId: "PANCREATITIS-CASE-023",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with pancreatitis becomes increasingly restless, tachycardic, and hypotensive despite IV fluids. Which complication should the nurse suspect?",
    choices: [
        "Progression to hypovolemic shock",
        "Acute appendicitis",
        "Peptic ulcer disease",
        "Resolution of pancreatitis"
    ],
    answer:
        "Progression to hypovolemic shock",
    rationale:
        "Massive third-spacing and inflammation can rapidly progress to hypovolemic shock despite initial fluid replacement.",
    takeaway:
        "Watch closely for worsening perfusion."
},

{
    id: "PANCREATITIS-024",
    caseId: "PANCREATITIS-CASE-024",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with pancreatitis. Which client should be assessed first?",
    choices: [
        "A client with RR 34/min, SpO₂ 84%, and increasing work of breathing",
        "A client asking about diet progression",
        "A client with abdominal pain rated 5/10",
        "A client requesting assistance to the bathroom"
    ],
    answer:
        "A client with RR 34/min, SpO₂ 84%, and increasing work of breathing",
    rationale:
        "Acute respiratory compromise may indicate ARDS, a life-threatening complication of pancreatitis. Airway and breathing are the priority.",
    takeaway:
        "Respiratory failure is a major cause of mortality in severe pancreatitis."
},

{
    id: "PANCREATITIS-025",
    caseId: "PANCREATITIS-CASE-025",
    patient: randomPatient(),
    topic: "Pancreatitis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with acute pancreatitis has severe epigastric pain, lipase 2,300 U/L, calcium 7.1 mg/dL, BP 86/48 mm Hg, HR 132/min, and SpO₂ 89% on room air. Which nursing intervention is the priority?",
    choices: [
        "Administer oxygen, begin aggressive IV fluid resuscitation, provide prescribed analgesics, and notify the provider immediately.",
        "Advance the client to a regular diet.",
        "Encourage ambulation to relieve abdominal pain.",
        "Prepare the client for discharge."
    ],
    answer:
        "Administer oxygen, begin aggressive IV fluid resuscitation, provide prescribed analgesics, and notify the provider immediately.",
    rationale:
        "This client demonstrates severe pancreatitis with respiratory compromise, shock, and hypocalcemia. Immediate stabilization of airway, breathing, circulation, and pain is the priority.",
    takeaway:
        "Treat severe pancreatitis like a critical illness—support ABCs, circulation, and pancreatic rest."
},

];
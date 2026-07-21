const cholecystitisQuestions = [

{
    id: "CHOLE-001",
    caseId: "CHOLE-CASE-001",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes acute cholecystitis?",
    choices: [
        "Inflammation of the gallbladder usually caused by obstruction from gallstones",
        "Inflammation of the pancreas caused by alcohol abuse",
        "Autoimmune destruction of the liver",
        "Infection of the appendix causing peritonitis"
    ],
    answer:
        "Inflammation of the gallbladder usually caused by obstruction from gallstones",
    rationale:
        "Most cases of acute cholecystitis occur when gallstones obstruct the cystic duct, causing inflammation and possible infection.",
    takeaway:
        "Gallstones are the most common cause of cholecystitis."
},

{
    id: "CHOLE-002",
    caseId: "CHOLE-CASE-002",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of acute cholecystitis?",
    choices: [
        "Right upper quadrant pain after eating a fatty meal",
        "Left lower quadrant pain relieved by defecation",
        "Periumbilical pain migrating to the RLQ",
        "Epigastric burning relieved with antacids"
    ],
    answer:
        "Right upper quadrant pain after eating a fatty meal",
    rationale:
        "Gallbladder contraction after fatty meals increases pain when the cystic duct is obstructed.",
    takeaway:
        "RUQ pain after fatty foods = think gallbladder."
},

{
    id: "CHOLE-003",
    caseId: "CHOLE-CASE-003",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are commonly associated with acute cholecystitis? Select all that apply.",
    choices: [
        "Right upper quadrant tenderness",
        "Nausea and vomiting",
        "Fever",
        "Positive Murphy's sign",
        "Pain after fatty meals",
        "Black tarry stools"
    ],
    answer: [
        "Right upper quadrant tenderness",
        "Nausea and vomiting",
        "Fever",
        "Positive Murphy's sign",
        "Pain after fatty meals"
    ],
    rationale:
        "Classic manifestations include RUQ pain, Murphy's sign, nausea, vomiting, fever, and pain following fatty meals.",
    takeaway:
        "Murphy's sign is highly associated with cholecystitis."
},

{
    id: "CHOLE-004",
    caseId: "CHOLE-CASE-004",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic study is most commonly used first to evaluate suspected cholecystitis?",
    choices: [
        "Abdominal ultrasound",
        "MRI of the brain",
        "Chest CT",
        "Upper GI series"
    ],
    answer:
        "Abdominal ultrasound",
    rationale:
        "Ultrasound is the preferred initial imaging study because it identifies gallstones, inflammation, and gallbladder wall thickening.",
    takeaway:
        "Ultrasound is first-line for gallbladder disease."
},

{
    id: "CHOLE-005",
    caseId: "CHOLE-CASE-005",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with RUQ pain, fever, BP 86/48 mm Hg, and confusion",
        "A client asking about a low-fat diet",
        "A client with mild nausea after lunch",
        "A client requesting pain medication rated 4/10"
    ],
    answer:
        "A client with RUQ pain, fever, BP 86/48 mm Hg, and confusion",
    rationale:
        "Hypotension and altered mental status suggest sepsis or septic shock requiring immediate intervention.",
    takeaway:
        "Unstable vital signs always take priority."
},

{
    id: "CHOLE-006",
    caseId: "CHOLE-CASE-006",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal is most appropriate for a client recovering from cholecystitis?",
    choices: [
        "Grilled chicken, rice, and steamed vegetables",
        "Fried chicken with french fries",
        "Cheeseburger with onion rings",
        "Pepperoni pizza"
    ],
    answer:
        "Grilled chicken, rice, and steamed vegetables",
    rationale:
        "A low-fat diet decreases gallbladder stimulation and helps prevent symptom recurrence.",
    takeaway:
        "Low-fat meals reduce gallbladder workload."
},

{
    id: "CHOLE-007",
    caseId: "CHOLE-CASE-007",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates correct understanding of discharge teaching?",
    choices: [
        "I'll avoid high-fat foods until my provider says otherwise.",
        "I should eat fried foods to stimulate my gallbladder.",
        "I'll stop my antibiotics when I feel better.",
        "Fat intake doesn't affect gallbladder pain."
    ],
    answer:
        "I'll avoid high-fat foods until my provider says otherwise.",
    rationale:
        "Fatty foods stimulate gallbladder contraction and commonly worsen symptoms.",
    takeaway:
        "Low-fat diet is key after cholecystitis."
},

{
    id: "CHOLE-008",
    caseId: "CHOLE-CASE-008",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's greatest concern in untreated cholecystitis?",
    choices: [
        "Gallbladder perforation and sepsis",
        "Peptic ulcer disease",
        "Appendicitis",
        "Diverticulitis"
    ],
    answer:
        "Gallbladder perforation and sepsis",
    rationale:
        "Untreated inflammation may progress to necrosis, perforation, generalized peritonitis, and septic shock.",
    takeaway:
        "Perforation is the most serious complication."
},

{
    id: "CHOLE-009",
    caseId: "CHOLE-CASE-009",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse asks a client to inhale deeply while palpating the right upper quadrant. The client suddenly stops inhaling because of pain. This finding is known as:",
    choices: [
        "Murphy's sign",
        "McBurney's sign",
        "Grey Turner's sign",
        "Cullen's sign"
    ],
    answer:
        "Murphy's sign",
    rationale:
        "A positive Murphy's sign occurs when inspiration is interrupted because the inflamed gallbladder contacts the examiner's hand.",
    takeaway:
        "Murphy's sign is classic for acute cholecystitis."
},

{
    id: "CHOLE-010",
    caseId: "CHOLE-CASE-010",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding would the nurse expect in a client with acute cholecystitis?",
    choices: [
        "Elevated white blood cell count",
        "Decreased platelet count",
        "Low serum amylase",
        "Decreased bilirubin"
    ],
    answer:
        "Elevated white blood cell count",
    rationale:
        "Inflammation and infection commonly cause leukocytosis. Bilirubin may increase if bile duct obstruction is present.",
    takeaway:
        "Leukocytosis is common in acute cholecystitis."
},

{
    id: "CHOLE-011",
    caseId: "CHOLE-CASE-011",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cholecystitis suddenly develops severe abdominal pain, rigid abdomen, fever, and hypotension. What is the nurse's priority action?",
    choices: [
        "Notify the provider immediately.",
        "Administer oral pain medication.",
        "Encourage ambulation.",
        "Offer a high-fat meal."
    ],
    answer:
        "Notify the provider immediately.",
    rationale:
        "These findings suggest gallbladder perforation and possible peritonitis requiring emergency intervention.",
    takeaway:
        "Rigid abdomen plus hypotension is an emergency."
},

{
    id: "CHOLE-012",
    caseId: "CHOLE-CASE-012",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Preoperative Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions are appropriate before a cholecystectomy? Select all that apply.",
    choices: [
        "Maintain NPO status.",
        "Administer IV fluids.",
        "Administer prescribed antibiotics.",
        "Assess pain regularly.",
        "Encourage fried foods before surgery.",
        "Monitor vital signs."
    ],
    answer: [
        "Maintain NPO status.",
        "Administer IV fluids.",
        "Administer prescribed antibiotics.",
        "Assess pain regularly.",
        "Monitor vital signs."
    ],
    rationale:
        "Preoperative care includes NPO status, hydration, antibiotics if indicated, pain assessment, and monitoring for worsening infection.",
    takeaway:
        "Prepare the client while monitoring for complications."
},

{
    id: "CHOLE-013",
    caseId: "CHOLE-CASE-013",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates a need for further teaching after a laparoscopic cholecystectomy?",
    choices: [
        "I'll eat fried foods as soon as I get home.",
        "I'll gradually increase my activity.",
        "I'll report fever or increasing redness at the incision.",
        "I'll follow my provider's diet recommendations."
    ],
    answer:
        "I'll eat fried foods as soon as I get home.",
    rationale:
        "Clients should initially follow a low-fat diet until they tolerate foods without discomfort.",
    takeaway:
        "Avoid high-fat meals during recovery."
},

{
    id: "CHOLE-014",
    caseId: "CHOLE-CASE-014",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Postoperative Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention promotes recovery after a laparoscopic cholecystectomy?",
    choices: [
        "Encourage early ambulation.",
        "Maintain strict bed rest for 48 hours.",
        "Keep the client NPO for 72 hours.",
        "Apply a heating pad to the abdomen."
    ],
    answer:
        "Encourage early ambulation.",
    rationale:
        "Early ambulation promotes bowel function, reduces postoperative complications, and decreases VTE risk.",
    takeaway:
        "Ambulate early after surgery."
},

{
    id: "CHOLE-015",
    caseId: "CHOLE-CASE-015",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cholecystitis reports increasing RUQ pain, jaundice, dark urine, and clay-colored stools. Which complication should the nurse suspect?",
    choices: [
        "Common bile duct obstruction",
        "Acute appendicitis",
        "Peptic ulcer disease",
        "Celiac disease"
    ],
    answer:
        "Common bile duct obstruction",
    rationale:
        "Obstruction of bile flow causes jaundice, dark urine, pale stools, and worsening RUQ pain.",
    takeaway:
        "Jaundice + pale stools = biliary obstruction."
},

{
    id: "CHOLE-016",
    caseId: "CHOLE-CASE-016",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with RUQ pain, temperature 103°F (39.4°C), HR 128/min, and BP 84/46 mm Hg",
        "A client asking about low-fat foods",
        "A postoperative client requesting pain medication rated 5/10",
        "A client awaiting discharge after laparoscopic surgery"
    ],
    answer:
        "A client with RUQ pain, temperature 103°F (39.4°C), HR 128/min, and BP 84/46 mm Hg",
    rationale:
        "These findings indicate possible septic shock requiring immediate intervention.",
    takeaway:
        "Fever + hypotension + tachycardia = think sepsis."
},

{
    id: "CHOLE-017",
    caseId: "CHOLE-CASE-017",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client arrives in the emergency department with severe right upper quadrant pain after eating fried chicken. Which additional assessment finding supports acute cholecystitis?",
    choices: [
        "Pain radiating to the right shoulder",
        "Pain relieved after defecation",
        "Left lower quadrant tenderness",
        "Pain relieved by eating crackers"
    ],
    answer:
        "Pain radiating to the right shoulder",
    rationale:
        "Gallbladder inflammation frequently causes referred pain to the right shoulder or scapula due to diaphragmatic irritation.",
    takeaway:
        "RUQ pain radiating to the right shoulder is a classic finding."
},

{
    id: "CHOLE-018",
    caseId: "CHOLE-CASE-018",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Diet",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which foods should the nurse recommend limiting after treatment for cholecystitis? Select all that apply.",
    choices: [
        "Fried chicken",
        "Bacon",
        "Whole milk",
        "Pizza",
        "Grilled fish",
        "Fresh fruit"
    ],
    answer: [
        "Fried chicken",
        "Bacon",
        "Whole milk",
        "Pizza"
    ],
    rationale:
        "High-fat foods stimulate gallbladder contraction and commonly trigger symptoms. Lean proteins and fruits are generally well tolerated.",
    takeaway:
        "Avoid high-fat foods to reduce gallbladder stimulation."
},

{
    id: "CHOLE-019",
    caseId: "CHOLE-CASE-019",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding may indicate obstruction of the common bile duct in a client with cholecystitis?",
    choices: [
        "Elevated bilirubin",
        "Low sodium",
        "Low calcium",
        "Decreased hematocrit"
    ],
    answer:
        "Elevated bilirubin",
    rationale:
        "Obstruction of bile flow commonly causes elevated bilirubin levels and jaundice.",
    takeaway:
        "Elevated bilirubin suggests biliary obstruction."
},

{
    id: "CHOLE-020",
    caseId: "CHOLE-CASE-020",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with cholecystitis should the nurse assess first?",
    choices: [
        "A client with jaundice, fever, hypotension, and confusion",
        "A client reporting nausea after breakfast",
        "A client requesting pain medication rated 6/10",
        "A client asking about discharge instructions"
    ],
    answer:
        "A client with jaundice, fever, hypotension, and confusion",
    rationale:
        "These findings suggest ascending cholangitis or septic shock requiring immediate intervention.",
    takeaway:
        "Think sepsis when infection causes hypotension and altered mental status."
},

{
    id: "CHOLE-021",
    caseId: "CHOLE-CASE-021",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Postoperative Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "A client reports shoulder pain after a laparoscopic cholecystectomy. What is the nurse's best response?",
    choices: [
        "This is expected from retained carbon dioxide used during surgery.",
        "Your gallstones have returned.",
        "You are having a heart attack.",
        "Your incision is infected."
    ],
    answer:
        "This is expected from retained carbon dioxide used during surgery.",
    rationale:
        "Residual CO₂ used to inflate the abdomen commonly causes referred shoulder pain that resolves with ambulation and time.",
    takeaway:
        "Shoulder pain after laparoscopy is usually caused by retained CO₂."
},

{
    id: "CHOLE-022",
    caseId: "CHOLE-CASE-022",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings support acute cholecystitis? Select all that apply.",
    choices: [
        "Positive Murphy's sign",
        "Right upper quadrant tenderness",
        "Nausea and vomiting",
        "Fever",
        "Pain after fatty meals",
        "Rebound tenderness at McBurney's point"
    ],
    answer: [
        "Positive Murphy's sign",
        "Right upper quadrant tenderness",
        "Nausea and vomiting",
        "Fever",
        "Pain after fatty meals"
    ],
    rationale:
        "These are classic findings of acute gallbladder inflammation. McBurney's point is associated with appendicitis.",
    takeaway:
        "Know Murphy's sign versus McBurney's point."
},

{
    id: "CHOLE-023",
    caseId: "CHOLE-CASE-023",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative client develops increasing abdominal pain, fever, tachycardia, and abdominal rigidity after a cholecystectomy. Which complication should the nurse suspect?",
    choices: [
        "Bile leak with peritonitis",
        "Normal postoperative discomfort",
        "Constipation",
        "GERD"
    ],
    answer:
        "Bile leak with peritonitis",
    rationale:
        "A bile leak may cause chemical peritonitis, producing severe abdominal pain, fever, guarding, and signs of sepsis.",
    takeaway:
        "Rigidity after cholecystectomy is not expected."
},

{
    id: "CHOLE-024",
    caseId: "CHOLE-CASE-024",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four postoperative cholecystectomy clients. Which client should be seen first?",
    choices: [
        "A client with HR 130/min, BP 82/44 mm Hg, and severe abdominal pain",
        "A client requesting a clear liquid diet",
        "A client reporting shoulder discomfort rated 3/10",
        "A client asking when to return to work"
    ],
    answer:
        "A client with HR 130/min, BP 82/44 mm Hg, and severe abdominal pain",
    rationale:
        "Hypotension with tachycardia indicates possible hemorrhage or sepsis and requires immediate assessment.",
    takeaway:
        "ABCs and unstable vital signs always come first."
},

{
    id: "CHOLE-025",
    caseId: "CHOLE-CASE-025",
    patient: randomPatient(),
    topic: "Cholecystitis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with acute cholecystitis has fever, WBC 18,500/mm³, bilirubin 4.2 mg/dL, severe RUQ pain, hypotension, and confusion. Which nursing action is the priority?",
    choices: [
        "Initiate sepsis management, administer IV fluids and antibiotics as prescribed, and notify the provider immediately.",
        "Teach the client about a low-fat diet.",
        "Encourage oral fluids and discharge planning.",
        "Administer a laxative."
    ],
    answer:
        "Initiate sepsis management, administer IV fluids and antibiotics as prescribed, and notify the provider immediately.",
    rationale:
        "The client demonstrates biliary infection with systemic compromise requiring rapid recognition and treatment for sepsis.",
    takeaway:
        "Sepsis always takes priority over routine gallbladder management."
},

];
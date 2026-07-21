const celiacDiseaseQuestions = [

{
    id: "CELIAC-001",
    caseId: "CELIAC-CASE-001",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes celiac disease?",
    choices: [
        "An autoimmune disorder triggered by gluten that damages the small intestine",
        "An infection of the large intestine caused by bacteria",
        "An intolerance to lactose that causes diarrhea",
        "An inflammatory disorder affecting only the stomach"
    ],
    answer:
        "An autoimmune disorder triggered by gluten that damages the small intestine",
    rationale:
        "Celiac disease is an autoimmune disorder in which ingestion of gluten causes inflammation and villous atrophy of the small intestine, leading to malabsorption.",
    takeaway:
        "Gluten triggers autoimmune destruction of intestinal villi."
},

{
    id: "CELIAC-002",
    caseId: "CELIAC-CASE-002",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Risk Factors",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which food should the nurse instruct a client with celiac disease to avoid?",
    choices: [
        "Wheat bread",
        "Rice",
        "Corn tortillas",
        "Potatoes"
    ],
    answer:
        "Wheat bread",
    rationale:
        "Gluten is found in wheat, barley, and rye. Rice, corn, and potatoes are naturally gluten-free.",
    takeaway:
        "Avoid wheat, barley, and rye."
},

{
    id: "CELIAC-003",
    caseId: "CELIAC-CASE-003",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly associated with untreated celiac disease? Select all that apply.",
    choices: [
        "Chronic diarrhea",
        "Weight loss",
        "Abdominal bloating",
        "Fatigue",
        "Iron-deficiency anemia",
        "Hypertension"
    ],
    answer: [
        "Chronic diarrhea",
        "Weight loss",
        "Abdominal bloating",
        "Fatigue",
        "Iron-deficiency anemia"
    ],
    rationale:
        "Damage to the intestinal villi causes malabsorption, resulting in diarrhea, bloating, weight loss, fatigue, and nutritional deficiencies including iron-deficiency anemia.",
    takeaway:
        "Think malabsorption with celiac disease."
},

{
    id: "CELIAC-004",
    caseId: "CELIAC-CASE-004",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test confirms celiac disease?",
    choices: [
        "Small intestinal biopsy",
        "Abdominal ultrasound",
        "Barium enema",
        "Chest CT"
    ],
    answer:
        "Small intestinal biopsy",
    rationale:
        "Although serologic testing is useful, definitive diagnosis is confirmed with biopsy showing villous atrophy.",
    takeaway:
        "Biopsy confirms celiac disease."
},

{
    id: "CELIAC-005",
    caseId: "CELIAC-CASE-005",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with celiac disease should the nurse assess first?",
    choices: [
        "A client with severe diarrhea, dizziness, and BP 88/50 mm Hg",
        "A client requesting gluten-free menu options",
        "A client asking about vitamin supplements",
        "A client reporting mild abdominal bloating"
    ],
    answer:
        "A client with severe diarrhea, dizziness, and BP 88/50 mm Hg",
    rationale:
        "Hypotension from dehydration requires immediate assessment and intervention.",
    takeaway:
        "ABCs and circulation take priority over education."
},

{
    id: "CELIAC-006",
    caseId: "CELIAC-CASE-006",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Diet",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which lunch selection is appropriate for a client with celiac disease?",
    choices: [
        "Grilled chicken, rice, and steamed broccoli",
        "Turkey sandwich on whole wheat bread",
        "Barley soup with crackers",
        "Pasta with garlic bread"
    ],
    answer:
        "Grilled chicken, rice, and steamed broccoli",
    rationale:
        "Rice, vegetables, and unbreaded meats are naturally gluten-free.",
    takeaway:
        "Choose naturally gluten-free foods."
},

{
    id: "CELIAC-007",
    caseId: "CELIAC-CASE-007",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement indicates correct understanding of celiac disease?",
    choices: [
        "I'll read food labels carefully for hidden gluten.",
        "I can eat wheat occasionally if I feel well.",
        "Only bread contains gluten.",
        "I'll stop my diet once my symptoms improve."
    ],
    answer:
        "I'll read food labels carefully for hidden gluten.",
    rationale:
        "Gluten is present in many processed foods, making label reading essential.",
    takeaway:
        "A lifelong gluten-free diet is required."
},

{
    id: "CELIAC-008",
    caseId: "CELIAC-CASE-008",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Untreated celiac disease places the client at greatest risk for which complication?",
    choices: [
        "Malnutrition",
        "Appendicitis",
        "GERD",
        "Kidney stones"
    ],
    answer:
        "Malnutrition",
    rationale:
        "Continued villous damage causes chronic nutrient malabsorption leading to vitamin deficiencies, anemia, osteoporosis, and malnutrition.",
    takeaway:
        "The major complication is chronic malabsorption."
},

{
    id: "CELIAC-009",
    caseId: "CELIAC-CASE-009",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding is most commonly associated with untreated celiac disease?",
    choices: [
        "Iron-deficiency anemia",
        "Polycythemia",
        "Hypercalcemia",
        "Elevated platelet count"
    ],
    answer:
        "Iron-deficiency anemia",
    rationale:
        "Damage to the proximal small intestine decreases iron absorption, making iron-deficiency anemia a common finding.",
    takeaway:
        "Think anemia from malabsorption."
},

{
    id: "CELIAC-010",
    caseId: "CELIAC-CASE-010",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A child with newly diagnosed celiac disease is admitted with severe diarrhea, dry mucous membranes, and tachycardia. Which nursing action has the highest priority?",
    choices: [
        "Begin IV fluid replacement as prescribed.",
        "Teach the family about gluten-free foods.",
        "Obtain the child's daily weight.",
        "Consult the dietitian."
    ],
    answer:
        "Begin IV fluid replacement as prescribed.",
    rationale:
        "The priority is restoring circulating volume because severe diarrhea can quickly lead to dehydration and hypovolemia.",
    takeaway:
        "Treat dehydration before education."
},

{
    id: "CELIAC-011",
    caseId: "CELIAC-CASE-011",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Nutrition",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which foods are safe for a client with celiac disease? Select all that apply.",
    choices: [
        "Rice",
        "Corn",
        "Fresh fruits",
        "Plain baked potato",
        "Quinoa",
        "Barley"
    ],
    answer: [
        "Rice",
        "Corn",
        "Fresh fruits",
        "Plain baked potato",
        "Quinoa"
    ],
    rationale:
        "Rice, corn, potatoes, fruits, vegetables, and quinoa are naturally gluten-free. Barley contains gluten.",
    takeaway:
        "Naturally gluten-free foods are the safest choices."
},

{
    id: "CELIAC-012",
    caseId: "CELIAC-CASE-012",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates that the prescribed gluten-free diet is effective?",
    choices: [
        "Diarrhea has resolved and weight is increasing.",
        "The client reports increased abdominal pain.",
        "The client has persistent steatorrhea.",
        "The hemoglobin continues to decrease."
    ],
    answer:
        "Diarrhea has resolved and weight is increasing.",
    rationale:
        "Healing of the intestinal villi improves nutrient absorption, resulting in improved weight gain and resolution of diarrhea.",
    takeaway:
        "Clinical improvement shows the diet is working."
},

{
    id: "CELIAC-013",
    caseId: "CELIAC-CASE-013",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client requires further teaching?",
    choices: [
        "I can eat foods made with rye flour occasionally.",
        "I'll read medication labels for gluten.",
        "I'll avoid cross-contamination during food preparation.",
        "I'll continue this diet for life."
    ],
    answer:
        "I can eat foods made with rye flour occasionally.",
    rationale:
        "Rye contains gluten and should be completely avoided.",
    takeaway:
        "No wheat, barley, or rye."
},

{
    id: "CELIAC-014",
    caseId: "CELIAC-CASE-014",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Long-term untreated celiac disease increases the client's risk for which condition?",
    choices: [
        "Osteoporosis",
        "Acute pancreatitis",
        "Gallstones",
        "Appendicitis"
    ],
    answer:
        "Osteoporosis",
    rationale:
        "Calcium and vitamin D malabsorption increase the risk for osteopenia and osteoporosis.",
    takeaway:
        "Poor calcium absorption weakens bones."
},

{
    id: "CELIAC-015",
    caseId: "CELIAC-CASE-015",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with celiac disease reports persistent diarrhea despite following a gluten-free diet. Which nursing action is most appropriate?",
    choices: [
        "Assess for hidden dietary sources of gluten.",
        "Encourage increased wheat intake.",
        "Recommend stopping the gluten-free diet.",
        "Advise limiting fluid intake."
    ],
    answer:
        "Assess for hidden dietary sources of gluten.",
    rationale:
        "Cross-contamination and hidden gluten in processed foods, medications, or supplements are common causes of persistent symptoms.",
    takeaway:
        "Always assess for hidden gluten exposure."
},

{
    id: "CELIAC-016",
    caseId: "CELIAC-CASE-016",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with celiac disease. Which client should be assessed first?",
    choices: [
        "A client with BP 86/48 mm Hg, severe diarrhea, and dizziness",
        "A client asking whether oats are gluten-free",
        "A client requesting additional gluten-free snacks",
        "A client reporting mild bloating after lunch"
    ],
    answer:
        "A client with BP 86/48 mm Hg, severe diarrhea, and dizziness",
    rationale:
        "Hypotension and severe diarrhea indicate significant fluid volume deficit requiring immediate assessment.",
    takeaway:
        "Unstable circulation takes priority."
},

{
    id: "CELIAC-017",
    caseId: "CELIAC-CASE-017",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client reports chronic diarrhea, weight loss, abdominal bloating, and fatigue. Which disorder should the nurse suspect?",
    choices: [
        "Celiac disease",
        "Acute appendicitis",
        "Cholecystitis",
        "Pancreatitis"
    ],
    answer:
        "Celiac disease",
    rationale:
        "The combination of chronic diarrhea, weight loss, bloating, and fatigue is characteristic of malabsorption caused by celiac disease.",
    takeaway:
        "Chronic GI symptoms + weight loss = think celiac disease."
},

{
    id: "CELIAC-018",
    caseId: "CELIAC-CASE-018",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Patient Education",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which foods should a client with celiac disease avoid? Select all that apply.",
    choices: [
        "Wheat bread",
        "Barley soup",
        "Rye crackers",
        "Regular pasta",
        "White rice",
        "Corn tortillas"
    ],
    answer: [
        "Wheat bread",
        "Barley soup",
        "Rye crackers",
        "Regular pasta"
    ],
    rationale:
        "Gluten is found in wheat, barley, and rye. Rice and corn products are naturally gluten-free unless contaminated.",
    takeaway:
        "Remember WBR: Wheat, Barley, Rye."
},

{
    id: "CELIAC-019",
    caseId: "CELIAC-CASE-019",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client with untreated celiac disease reports numbness and tingling in the hands and feet. Which explanation is most appropriate?",
    choices: [
        "Vitamin deficiencies from malabsorption can cause neurologic symptoms.",
        "The client has developed appendicitis.",
        "Gluten directly damages peripheral nerves.",
        "These findings are expected with aging."
    ],
    answer:
        "Vitamin deficiencies from malabsorption can cause neurologic symptoms.",
    rationale:
        "Deficiencies of vitamin B12 and other nutrients secondary to malabsorption may lead to peripheral neuropathy.",
    takeaway:
        "Malabsorption affects multiple body systems."
},

{
    id: "CELIAC-020",
    caseId: "CELIAC-CASE-020",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with celiac disease requires immediate intervention?",
    choices: [
        "Blood pressure 82/46 mm Hg with persistent diarrhea",
        "Abdominal bloating after meals",
        "Weight loss of 3 pounds this month",
        "Complaints of fatigue"
    ],
    answer:
        "Blood pressure 82/46 mm Hg with persistent diarrhea",
    rationale:
        "Hypotension indicates significant fluid volume deficit requiring immediate treatment.",
    takeaway:
        "Treat dehydration before anything else."
},

{
    id: "CELIAC-021",
    caseId: "CELIAC-CASE-021",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which breakfast selection is most appropriate for a client with celiac disease?",
    choices: [
        "Scrambled eggs, fruit, and gluten-free oatmeal",
        "Bagel with cream cheese",
        "Wheat toast and cereal",
        "Pancakes made with wheat flour"
    ],
    answer:
        "Scrambled eggs, fruit, and gluten-free oatmeal",
    rationale:
        "Eggs, fruit, and certified gluten-free oats are appropriate for most clients with celiac disease.",
    takeaway:
        "Choose naturally gluten-free foods whenever possible."
},

{
    id: "CELIAC-022",
    caseId: "CELIAC-CASE-022",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings suggest that a client's celiac disease is improving? Select all that apply.",
    choices: [
        "Weight gain",
        "Resolution of diarrhea",
        "Improved hemoglobin level",
        "Increased energy",
        "Normal bowel movements",
        "Persistent steatorrhea"
    ],
    answer: [
        "Weight gain",
        "Resolution of diarrhea",
        "Improved hemoglobin level",
        "Increased energy",
        "Normal bowel movements"
    ],
    rationale:
        "Healing of intestinal villi improves nutrient absorption and resolves symptoms over time.",
    takeaway:
        "Improved absorption leads to improved nutrition."
},

{
    id: "CELIAC-023",
    caseId: "CELIAC-CASE-023",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client newly diagnosed with celiac disease asks if the gluten-free diet is temporary. Which response by the nurse is best?",
    choices: [
        "The gluten-free diet is lifelong because it prevents continued intestinal damage.",
        "You'll only need the diet until your symptoms resolve.",
        "You can resume eating gluten after six months.",
        "Only bread must be avoided."
    ],
    answer:
        "The gluten-free diet is lifelong because it prevents continued intestinal damage.",
    rationale:
        "There is no cure for celiac disease. Lifelong avoidance of gluten prevents recurrent intestinal injury.",
    takeaway:
        "Celiac disease requires lifelong dietary management."
},

{
    id: "CELIAC-024",
    caseId: "CELIAC-CASE-024",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse is caring for four clients with celiac disease. Which client should be seen first?",
    choices: [
        "A client with severe diarrhea, HR 126/min, and decreased urine output",
        "A client requesting a dietitian consult",
        "A client asking about gluten-free snacks",
        "A client with mild abdominal bloating"
    ],
    answer:
        "A client with severe diarrhea, HR 126/min, and decreased urine output",
    rationale:
        "Tachycardia and oliguria indicate worsening dehydration and decreased perfusion requiring immediate assessment.",
    takeaway:
        "Signs of hypovolemia always take priority."
},

{
    id: "CELIAC-025",
    caseId: "CELIAC-CASE-025",
    patient: randomPatient(),
    topic: "Celiac Disease",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with untreated celiac disease has chronic diarrhea, a BMI of 17 kg/m², Hgb of 9.2 g/dL, calcium of 7.9 mg/dL, and vitamin D deficiency. Which nursing intervention is the priority?",
    choices: [
        "Initiate a strict gluten-free diet and address fluid and nutritional deficiencies.",
        "Encourage the client to increase wheat intake gradually.",
        "Restrict fluid intake until diarrhea resolves.",
        "Recommend over-the-counter antidiarrheal medications only."
    ],
    answer:
        "Initiate a strict gluten-free diet and address fluid and nutritional deficiencies.",
    rationale:
        "The priority is eliminating the underlying cause of villous injury while correcting dehydration and nutritional deficiencies resulting from malabsorption.",
    takeaway:
        "Treat the cause (gluten) and the consequences (malnutrition and dehydration)."
},

];
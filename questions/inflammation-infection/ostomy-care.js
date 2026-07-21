const ostomyCareQuestions = [

{
    id: "OSTOMY-001",
    caseId: "OSTOMY-CASE-001",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Fundamentals",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes an ostomy?",
    choices: [
        "A surgically created opening that allows stool or urine to exit the body",
        "An opening created to drain stomach acid",
        "An incision used to remove the appendix",
        "A surgical repair of the rectum"
    ],
    answer:
        "A surgically created opening that allows stool or urine to exit the body",
    rationale:
        "An ostomy is a surgically created stoma that diverts stool or urine through an opening in the abdominal wall.",
    takeaway:
        "An ostomy creates a new pathway for elimination."
},

{
    id: "OSTOMY-002",
    caseId: "OSTOMY-CASE-002",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates a healthy new stoma?",
    choices: [
        "Moist, pink to beefy red appearance",
        "Dark purple and dry",
        "Black with no drainage",
        "Pale gray and cool"
    ],
    answer:
        "Moist, pink to beefy red appearance",
    rationale:
        "A healthy stoma should appear moist and pink to beefy red because of its rich blood supply.",
    takeaway:
        "Healthy stoma = moist, pink/red."
},

{
    id: "OSTOMY-003",
    caseId: "OSTOMY-CASE-003",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings should the nurse immediately report when assessing a client's stoma? Select all that apply.",
    choices: [
        "Black coloration",
        "Dark purple color",
        "Dry appearance",
        "Minimal bleeding when cleaned",
        "Absent output with severe abdominal pain",
        "Beefy red appearance"
    ],
    answer: [
        "Black coloration",
        "Dark purple color",
        "Dry appearance",
        "Absent output with severe abdominal pain"
    ],
    rationale:
        "Black, purple, or dry tissue suggests impaired circulation. Absent output with severe pain may indicate obstruction.",
    takeaway:
        "Color changes and absent output are emergencies."
},

{
    id: "OSTOMY-004",
    caseId: "OSTOMY-CASE-004",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Nursing Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "When should the ostomy pouch generally be emptied?",
    choices: [
        "When it is one-third to one-half full",
        "Only when completely full",
        "Once every 24 hours",
        "Only after meals"
    ],
    answer:
        "When it is one-third to one-half full",
    rationale:
        "Emptying the pouch before it becomes heavy helps prevent leakage and skin breakdown.",
    takeaway:
        "Do not allow the pouch to become overly full."
},

{
    id: "OSTOMY-005",
    caseId: "OSTOMY-CASE-005",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a new ostomy should the nurse assess first?",
    choices: [
        "A client whose stoma is dark purple and cool",
        "A client requesting dietary teaching",
        "A client with mild skin irritation",
        "A client asking when the pouch will be changed"
    ],
    answer:
        "A client whose stoma is dark purple and cool",
    rationale:
        "A purple, cool stoma suggests compromised blood flow and possible tissue necrosis requiring immediate assessment.",
    takeaway:
        "Circulation problems always take priority."
},

{
    id: "OSTOMY-006",
    caseId: "OSTOMY-CASE-006",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Skin Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention best protects the skin around a stoma?",
    choices: [
        "Cut the skin barrier to fit closely around the stoma.",
        "Leave a large opening around the stoma.",
        "Apply alcohol to the skin daily.",
        "Change the pouch only when leaking."
    ],
    answer:
        "Cut the skin barrier to fit closely around the stoma.",
    rationale:
        "A properly fitted barrier prevents stool from contacting the surrounding skin and causing irritation.",
    takeaway:
        "A snug skin barrier protects peristomal skin."
},

{
    id: "OSTOMY-007",
    caseId: "OSTOMY-CASE-007",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates understanding of ostomy care?",
    choices: [
        "I'll examine my stoma every time I change the pouch.",
        "My stoma should always be pale.",
        "I should scrub the stoma vigorously.",
        "I should only empty the pouch once a day."
    ],
    answer:
        "I'll examine my stoma every time I change the pouch.",
    rationale:
        "Routine assessment helps detect complications such as ischemia, infection, or skin breakdown early.",
    takeaway:
        "Inspect the stoma with every pouch change."
},

{
    id: "OSTOMY-008",
    caseId: "OSTOMY-CASE-008",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse most concerned about immediately after creation of a new ostomy?",
    choices: [
        "Stomal ischemia",
        "Constipation",
        "Heart failure",
        "Hyperthyroidism"
    ],
    answer:
        "Stomal ischemia",
    rationale:
        "Immediately after surgery, maintaining adequate blood flow to the stoma is the highest priority.",
    takeaway:
        "Always assess stoma perfusion first."
},

{
    id: "OSTOMY-009",
    caseId: "OSTOMY-CASE-009",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding requires immediate follow-up when assessing a client with a new ileostomy?",
    choices: [
        "No stoma output for 6 hours accompanied by abdominal cramping",
        "Small amount of serosanguineous drainage",
        "Pink, moist stoma",
        "Soft abdomen"
    ],
    answer:
        "No stoma output for 6 hours accompanied by abdominal cramping",
    rationale:
        "Absent output with cramping may indicate bowel obstruction and requires immediate provider notification.",
    takeaway:
        "No ostomy output plus pain = possible obstruction."
},

{
    id: "OSTOMY-010",
    caseId: "OSTOMY-CASE-010",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Types of Ostomies",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement correctly describes an ileostomy?",
    choices: [
        "It produces liquid to semi-liquid stool because it bypasses the colon.",
        "It produces fully formed stool immediately after surgery.",
        "It drains urine from the kidneys.",
        "It is created from the stomach."
    ],
    answer:
        "It produces liquid to semi-liquid stool because it bypasses the colon.",
    rationale:
        "The colon normally absorbs water. Because an ileostomy bypasses the colon, stool remains liquid to semi-liquid.",
    takeaway:
        "Ileostomy output is usually liquid."
},

{
    id: "OSTOMY-011",
    caseId: "OSTOMY-CASE-011",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with an ileostomy has had 2,400 mL of watery output during the past 24 hours. What is the nurse's priority action?",
    choices: [
        "Assess hydration status and notify the provider.",
        "Encourage the client to increase fiber intake.",
        "Change the ostomy appliance.",
        "Restrict oral fluids."
    ],
    answer:
        "Assess hydration status and notify the provider.",
    rationale:
        "High-output ileostomies place clients at significant risk for dehydration and electrolyte imbalances.",
    takeaway:
        "High ileostomy output = dehydration risk."
},

{
    id: "OSTOMY-012",
    caseId: "OSTOMY-CASE-012",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Patient Education",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse provide to a client with a new ostomy? Select all that apply.",
    choices: [
        "Empty the pouch when it is one-third to one-half full.",
        "Inspect the stoma during every pouch change.",
        "Measure the stoma regularly during the first several weeks.",
        "Drink adequate fluids unless restricted.",
        "Report black or purple discoloration of the stoma.",
        "Scrub the stoma vigorously with soap."
    ],
    answer: [
        "Empty the pouch when it is one-third to one-half full.",
        "Inspect the stoma during every pouch change.",
        "Measure the stoma regularly during the first several weeks.",
        "Drink adequate fluids unless restricted.",
        "Report black or purple discoloration of the stoma."
    ],
    rationale:
        "The stoma changes size during healing. Hydration, routine assessment, and prompt reporting of color changes help prevent complications.",
    takeaway:
        "Healthy ostomy care centers on assessment, hydration, and skin protection."
},

{
    id: "OSTOMY-013",
    caseId: "OSTOMY-CASE-013",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The skin surrounding a client's colostomy is red and weeping. What is the nurse's best action?",
    choices: [
        "Assess the fit of the skin barrier and correct any leakage.",
        "Clean the skin with alcohol.",
        "Leave the pouch off overnight.",
        "Apply adhesive tape directly to the skin."
    ],
    answer:
        "Assess the fit of the skin barrier and correct any leakage.",
    rationale:
        "Peristomal skin irritation is most commonly caused by leakage of stool beneath the barrier.",
    takeaway:
        "Leakage is the most common cause of skin breakdown."
},

{
    id: "OSTOMY-014",
    caseId: "OSTOMY-CASE-014",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which food is most likely to cause gas in a client with a colostomy?",
    choices: [
        "Broccoli",
        "Chicken",
        "Rice",
        "Yogurt"
    ],
    answer:
        "Broccoli",
    rationale:
        "Cruciferous vegetables such as broccoli, cabbage, and cauliflower commonly increase intestinal gas.",
    takeaway:
        "Certain vegetables commonly increase gas production."
},

{
    id: "OSTOMY-015",
    caseId: "OSTOMY-CASE-015",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative client has a new colostomy. The stoma was pink this morning but is now dusky purple and cool to the touch. Which complication should the nurse suspect?",
    choices: [
        "Stomal ischemia",
        "Normal postoperative swelling",
        "Expected bruising",
        "Peristomal dermatitis"
    ],
    answer:
        "Stomal ischemia",
    rationale:
        "A dusky, purple, or black stoma indicates impaired blood supply and requires immediate intervention.",
    takeaway:
        "Color changes indicate impaired perfusion until proven otherwise."
},

{
    id: "OSTOMY-016",
    caseId: "OSTOMY-CASE-016",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with ostomies. Which client should be assessed first?",
    choices: [
        "A client with a black stoma and severe abdominal pain",
        "A client requesting discharge instructions",
        "A client with mild peristomal redness",
        "A client asking for a pouch change"
    ],
    answer:
        "A client with a black stoma and severe abdominal pain",
    rationale:
        "A black stoma indicates necrosis due to loss of blood flow and requires immediate assessment.",
    takeaway:
        "Black stoma = emergency."
},

{
    id: "OSTOMY-017",
    caseId: "OSTOMY-CASE-017",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Types of Ostomies",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which characteristic is expected in a client with a descending colostomy?",
    choices: [
        "Semi-formed to formed stool",
        "Continuous liquid stool",
        "No stool output",
        "Urinary drainage"
    ],
    answer:
        "Semi-formed to formed stool",
    rationale:
        "Because most water absorption has occurred by the descending colon, stool is generally semi-formed to formed.",
    takeaway:
        "The farther down the colon, the more formed the stool."
},

{
    id: "OSTOMY-018",
    caseId: "OSTOMY-CASE-018",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complications can occur with an ostomy? Select all that apply.",
    choices: [
        "Stomal prolapse",
        "Stomal retraction",
        "Parastomal hernia",
        "Skin breakdown",
        "Stomal necrosis",
        "Pulmonary embolism"
    ],
    answer: [
        "Stomal prolapse",
        "Stomal retraction",
        "Parastomal hernia",
        "Skin breakdown",
        "Stomal necrosis"
    ],
    rationale:
        "Common ostomy complications include prolapse, retraction, hernias, skin irritation, and ischemia or necrosis.",
    takeaway:
        "Know the major mechanical and skin complications of ostomies."
},

{
    id: "OSTOMY-019",
    caseId: "OSTOMY-CASE-019",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Hydration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which client is at greatest risk for dehydration?",
    choices: [
        "A client with a new ileostomy",
        "A client with a sigmoid colostomy",
        "A client with a descending colostomy",
        "A client with a temporary loop colostomy"
    ],
    answer:
        "A client with a new ileostomy",
    rationale:
        "Because the colon is bypassed, ileostomy output is liquid and significant fluid and electrolyte losses can occur.",
    takeaway:
        "Ileostomies have the greatest dehydration risk."
},

{
    id: "OSTOMY-020",
    caseId: "OSTOMY-CASE-020",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with an ileostomy requires immediate intervention?",
    choices: [
        "Heart rate 122/min with dizziness and dry mucous membranes",
        "Soft brown stool in the pouch",
        "Pink, moist stoma",
        "Client asking how often to change the appliance"
    ],
    answer:
        "Heart rate 122/min with dizziness and dry mucous membranes",
    rationale:
        "These findings suggest significant dehydration from excessive ileostomy output and require immediate assessment and treatment.",
    takeaway:
        "Monitor closely for dehydration after an ileostomy."
},

{
    id: "OSTOMY-021",
    caseId: "OSTOMY-CASE-021",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates the need for additional teaching?",
    choices: [
        "I'll call my provider if my stoma becomes black.",
        "I'll stay hydrated, especially with an ileostomy.",
        "I'll use scissors to enlarge the pouch opening if stool leaks onto my skin.",
        "I'll empty my pouch before it becomes heavy."
    ],
    answer:
        "I'll use scissors to enlarge the pouch opening if stool leaks onto my skin.",
    rationale:
        "The barrier should fit closely around the stoma. Enlarging the opening allows stool to contact the skin, increasing the risk of skin breakdown.",
    takeaway:
        "The pouch opening should closely match the stoma size."
},

{
    id: "OSTOMY-022",
    caseId: "OSTOMY-CASE-022",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate when caring for a client with a new ostomy? Select all that apply.",
    choices: [
        "Measure the stoma with each pouch change during healing.",
        "Assess stoma color every shift.",
        "Monitor ostomy output.",
        "Encourage participation in pouch changes.",
        "Inspect the surrounding skin.",
        "Apply petroleum jelly beneath the barrier."
    ],
    answer: [
        "Measure the stoma with each pouch change during healing.",
        "Assess stoma color every shift.",
        "Monitor ostomy output.",
        "Encourage participation in pouch changes.",
        "Inspect the surrounding skin."
    ],
    rationale:
        "Routine assessment, measuring the shrinking stoma during healing, monitoring output, and encouraging independence are key aspects of nursing care.",
    takeaway:
        "Assessment and patient independence are priorities."
},

{
    id: "OSTOMY-023",
    caseId: "OSTOMY-CASE-023",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with a new ileostomy develops tachycardia, hypotension, dry mucous membranes, and decreased urine output. Which complication should the nurse suspect?",
    choices: [
        "Fluid volume deficit",
        "Pulmonary edema",
        "Acute myocardial infarction",
        "Appendicitis"
    ],
    answer:
        "Fluid volume deficit",
    rationale:
        "High-volume ileostomy output can rapidly cause dehydration and hypovolemia, resulting in tachycardia, hypotension, and oliguria.",
    takeaway:
        "Ileostomy output can quickly lead to hypovolemia."
},

{
    id: "OSTOMY-024",
    caseId: "OSTOMY-CASE-024",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with ostomies. Which client should be assessed first?",
    choices: [
        "A client with an ileostomy who has BP 86/48 mm Hg and minimal urine output",
        "A client requesting assistance changing a pouch",
        "A client with mild gas after eating broccoli",
        "A client asking about support groups"
    ],
    answer:
        "A client with an ileostomy who has BP 86/48 mm Hg and minimal urine output",
    rationale:
        "Hypotension and decreased urine output indicate significant fluid volume deficit requiring immediate intervention.",
    takeaway:
        "Signs of shock always take priority."
},

{
    id: "OSTOMY-025",
    caseId: "OSTOMY-CASE-025",
    patient: randomPatient(),
    topic: "Ostomy Care",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client underwent an ileostomy yesterday. Assessment reveals a dark purple stoma, severe abdominal pain, HR 128/min, BP 88/50 mm Hg, and no ostomy output for 8 hours. Which nursing intervention is the priority?",
    choices: [
        "Assess the stoma, notify the surgeon immediately, maintain IV access, and prepare for emergency intervention.",
        "Encourage oral fluids and ambulation.",
        "Apply a larger ostomy pouch.",
        "Teach the client how to irrigate the ostomy."
    ],
    answer:
        "Assess the stoma, notify the surgeon immediately, maintain IV access, and prepare for emergency intervention.",
    rationale:
        "The client demonstrates signs of stomal ischemia with possible bowel obstruction and hemodynamic instability. Immediate surgical evaluation is required.",
    takeaway:
        "A dark, nonfunctioning stoma with instability is a surgical emergency."
},

];
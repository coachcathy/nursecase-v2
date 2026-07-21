const conjunctivitisQuestions = [

{
    id: "CONJ-001",
    caseId: "CONJ-CASE-001",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What is conjunctivitis?",
    choices: [
        "Inflammation of the conjunctiva caused by bacteria, viruses, or allergens",
        "Inflammation of the middle ear",
        "Inflammation of the cornea only",
        "Inflammation of the optic nerve"
    ],
    answer:
        "Inflammation of the conjunctiva caused by bacteria, viruses, or allergens",
    rationale:
        "Conjunctivitis is inflammation of the conjunctiva and may be bacterial, viral, or allergic in origin.",
    takeaway:
        "Conjunctivitis is inflammation of the conjunctiva."
},

{
    id: "CONJ-002",
    caseId: "CONJ-CASE-002",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with bacterial conjunctivitis?",
    choices: [
        "Thick yellow-green purulent eye drainage",
        "Clear watery drainage only",
        "Unequal pupils",
        "Complete loss of vision"
    ],
    answer:
        "Thick yellow-green purulent eye drainage",
    rationale:
        "Bacterial conjunctivitis commonly produces thick purulent drainage, while viral conjunctivitis usually causes watery drainage.",
    takeaway:
        "Purulent drainage suggests bacterial conjunctivitis."
},

{
    id: "CONJ-003",
    caseId: "CONJ-CASE-003",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is most consistent with viral conjunctivitis?",
    choices: [
        "Watery eye drainage often associated with an upper respiratory infection",
        "Thick green drainage",
        "Severe ear pain",
        "Projectile vomiting"
    ],
    answer:
        "Watery eye drainage often associated with an upper respiratory infection",
    rationale:
        "Viral conjunctivitis commonly presents with watery drainage and often accompanies viral upper respiratory infections.",
    takeaway:
        "Watery drainage usually indicates viral conjunctivitis."
},

{
    id: "CONJ-004",
    caseId: "CONJ-CASE-004",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly seen with conjunctivitis? Select all that apply.",
    choices: [
        "Red conjunctiva",
        "Eye itching",
        "Eye drainage",
        "Crusting of the eyelids",
        "Excessive tearing",
        "Hematemesis"
    ],
    answer: [
        "Red conjunctiva",
        "Eye itching",
        "Eye drainage",
        "Crusting of the eyelids",
        "Excessive tearing"
    ],
    rationale:
        "Redness, itching, tearing, crusting, and discharge are common manifestations depending on the underlying cause.",
    takeaway:
        "Redness plus drainage is the hallmark of conjunctivitis."
},

{
    id: "CONJ-005",
    caseId: "CONJ-CASE-005",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Transmission",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing intervention is the highest priority for preventing the spread of infectious conjunctivitis?",
    choices: [
        "Perform meticulous hand hygiene.",
        "Encourage increased dairy intake.",
        "Apply ice packs every hour.",
        "Limit oral fluids."
    ],
    answer:
        "Perform meticulous hand hygiene.",
    rationale:
        "Conjunctivitis spreads easily through direct contact with contaminated secretions. Hand hygiene is the most effective preventive measure.",
    takeaway:
        "Hand hygiene is the best defense against spreading conjunctivitis."
},

{
    id: "CONJ-006",
    caseId: "CONJ-CASE-006",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Medication",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication does the nurse anticipate for bacterial conjunctivitis?",
    choices: [
        "Antibiotic ophthalmic drops",
        "Systemic corticosteroids",
        "Loop diuretics",
        "Bronchodilators"
    ],
    answer:
        "Antibiotic ophthalmic drops",
    rationale:
        "Topical antibiotic eye drops are commonly prescribed for bacterial conjunctivitis.",
    takeaway:
        "Bacterial conjunctivitis is commonly treated with antibiotic eye drops."
},

{
    id: "CONJ-007",
    caseId: "CONJ-CASE-007",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Eye Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "When cleaning drainage from a client's eye, which technique should the nurse use?",
    choices: [
        "Wipe from the inner canthus toward the outer canthus using a clean area of the cloth each time.",
        "Wipe from the outer canthus toward the inner canthus repeatedly.",
        "Scrub vigorously to remove crusting.",
        "Use the same portion of the washcloth for both eyes."
    ],
    answer:
        "Wipe from the inner canthus toward the outer canthus using a clean area of the cloth each time.",
    rationale:
        "Cleaning from the inner to outer canthus decreases contamination of the lacrimal duct and reduces spread of infection.",
    takeaway:
        "Always clean the eye from inner to outer canthus."
},

{
    id: "CONJ-008",
    caseId: "CONJ-CASE-008",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instruction should the nurse provide to parents of a child with bacterial conjunctivitis?",
    choices: [
        "Do not share towels, washcloths, or pillowcases.",
        "The child may return to school immediately.",
        "Stop the antibiotic drops once redness improves.",
        "Patch the affected eye continuously."
    ],
    answer:
        "Do not share towels, washcloths, or pillowcases.",
    rationale:
        "Conjunctivitis spreads easily by direct contact with contaminated objects and secretions.",
    takeaway:
        "Avoid sharing personal items to prevent transmission."
},

{
    id: "CONJ-009",
    caseId: "CONJ-CASE-009",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Differentiating Types",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding most strongly suggests viral rather than bacterial conjunctivitis?",
    choices: [
        "Watery drainage with recent upper respiratory infection",
        "Thick yellow-green purulent drainage",
        "Purulent drainage causing eyelids to stick together",
        "Marked improvement after antibiotic eye drops"
    ],
    answer:
        "Watery drainage with recent upper respiratory infection",
    rationale:
        "Viral conjunctivitis commonly presents with watery drainage and often occurs with a viral upper respiratory infection. Bacterial conjunctivitis usually produces thick purulent drainage.",
    takeaway:
        "Watery drainage = think viral; purulent drainage = think bacterial."
},

{
    id: "CONJ-010",
    caseId: "CONJ-CASE-010",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Medication Administration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which nursing action is appropriate when administering ophthalmic drops?",
    choices: [
        "Avoid touching the dropper tip to the eye or eyelashes.",
        "Place the drops directly onto the cornea.",
        "Use the same bottle for multiple patients.",
        "Touch the dropper tip to the eyelid to stabilize the hand."
    ],
    answer:
        "Avoid touching the dropper tip to the eye or eyelashes.",
    rationale:
        "Touching the dropper tip contaminates the medication and increases the risk of infection.",
    takeaway:
        "Maintain sterile technique with ophthalmic medications."
},

{
    id: "CONJ-011",
    caseId: "CONJ-CASE-011",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "School Attendance",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "According to the lecture, when may a child with bacterial conjunctivitis generally return to school?",
    choices: [
        "After completing 24 hours of prescribed antibiotic therapy",
        "Immediately after the first antibiotic dose",
        "Only after one week",
        "After all redness has resolved"
    ],
    answer:
        "After completing 24 hours of prescribed antibiotic therapy",
    rationale:
        "Children with bacterial conjunctivitis are generally excluded from school until they have completed approximately 24 hours of antibiotic therapy to reduce transmission.",
    takeaway:
        "24 hours of antibiotics is the common benchmark before returning to school."
},

{
    id: "CONJ-012",
    caseId: "CONJ-CASE-012",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Patient Education",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which discharge instructions should the nurse provide for infectious conjunctivitis? Select all that apply.",
    choices: [
        "Wash hands frequently.",
        "Do not share towels or washcloths.",
        "Complete all prescribed eye medications.",
        "Clean drainage from the inner to the outer canthus.",
        "Replace eye cosmetics after the infection resolves.",
        "Share eye drops with family members if they develop symptoms."
    ],
    answer: [
        "Wash hands frequently.",
        "Do not share towels or washcloths.",
        "Complete all prescribed eye medications.",
        "Clean drainage from the inner to the outer canthus.",
        "Replace eye cosmetics after the infection resolves."
    ],
    rationale:
        "Hand hygiene, avoiding shared personal items, proper eye cleaning, completing medications, and replacing contaminated cosmetics help prevent reinfection and spread.",
    takeaway:
        "Prevent transmission by practicing excellent hygiene."
},

{
    id: "CONJ-013",
    caseId: "CONJ-CASE-013",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with conjunctivitis should the nurse assess first?",
    choices: [
        "A client reporting severe eye pain, decreased vision, and photophobia",
        "A client with mild redness requesting discharge instructions",
        "A client waiting for antibiotic eye drops",
        "A client asking when they may return to work"
    ],
    answer:
        "A client reporting severe eye pain, decreased vision, and photophobia",
    rationale:
        "Severe pain and vision changes are not typical of uncomplicated conjunctivitis and require immediate evaluation for a more serious ocular condition.",
    takeaway:
        "Vision changes always take priority."
},

{
    id: "CONJ-014",
    caseId: "CONJ-CASE-014",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Nursing Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which intervention helps improve comfort in a client with conjunctivitis?",
    choices: [
        "Apply cool compresses as tolerated.",
        "Patch both eyes continuously.",
        "Rub the affected eye frequently.",
        "Apply heat directly for one hour every hour."
    ],
    answer:
        "Apply cool compresses as tolerated.",
    rationale:
        "Cool compresses help decrease irritation and discomfort associated with conjunctivitis.",
    takeaway:
        "Cool compresses provide symptomatic relief."
},

{
    id: "CONJ-015",
    caseId: "CONJ-CASE-015",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic study may be obtained for severe conjunctivitis?",
    choices: [
        "Culture of the eye drainage",
        "Electrocardiogram",
        "Arterial blood gas",
        "Lumbar puncture"
    ],
    answer:
        "Culture of the eye drainage",
    rationale:
        "Severe or persistent conjunctivitis may require culture to identify the causative organism and guide treatment.",
    takeaway:
        "Cultures are reserved for severe or atypical infections."
},

{
    id: "CONJ-016",
    caseId: "CONJ-CASE-016",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Infection Prevention",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing action should be performed first before administering eye medications to a client with bacterial conjunctivitis?",
    choices: [
        "Perform hand hygiene.",
        "Apply the eye drops.",
        "Patch the affected eye.",
        "Massage the eyelids."
    ],
    answer:
        "Perform hand hygiene.",
    rationale:
        "Hand hygiene is the first step in preventing transmission of conjunctivitis to other clients and healthcare workers.",
    takeaway:
        "Hand hygiene comes before every eye assessment or treatment."
},

{
    id: "CONJ-017",
    caseId: "CONJ-CASE-017",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Allergic Conjunctivitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is most consistent with allergic conjunctivitis?",
    choices: [
        "Bilateral itching with watery drainage",
        "Thick unilateral purulent drainage",
        "Severe eye pain with vision loss",
        "Unequal pupils with vomiting"
    ],
    answer:
        "Bilateral itching with watery drainage",
    rationale:
        "Allergic conjunctivitis commonly causes bilateral itching, redness, and watery drainage.",
    takeaway:
        "Intense itching and watery drainage suggest allergic conjunctivitis."
},

{
    id: "CONJ-018",
    caseId: "CONJ-CASE-018",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Medication Teaching",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which statement by a parent indicates correct understanding of antibiotic eye-drop administration?",
    choices: [
        "I will avoid touching the dropper tip to my child's eye or eyelashes.",
        "I will place the drops directly on the cornea.",
        "I will stop the drops when the redness improves.",
        "I will use the same drops for another child with similar symptoms."
    ],
    answer:
        "I will avoid touching the dropper tip to my child's eye or eyelashes.",
    rationale:
        "The dropper tip must remain uncontaminated, and the full prescribed treatment should be completed.",
    takeaway:
        "Do not contaminate or share ophthalmic medications."
},

{
    id: "CONJ-019",
    caseId: "CONJ-CASE-019",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a child diagnosed with conjunctivitis requires immediate provider notification?",
    choices: [
        "Sudden decrease in vision with severe eye pain",
        "Mild itching relieved by a cool compress",
        "Watery drainage associated with a cold",
        "Crusting of the eyelids after sleep"
    ],
    answer:
        "Sudden decrease in vision with severe eye pain",
    rationale:
        "Severe pain and acute vision changes are not expected with uncomplicated conjunctivitis and may indicate a serious ocular disorder.",
    takeaway:
        "Conjunctivitis should not cause severe pain or vision loss."
},

{
    id: "CONJ-020",
    caseId: "CONJ-CASE-020",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Transmission Prevention",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which actions help prevent the transmission of infectious conjunctivitis? Select all that apply.",
    choices: [
        "Perform frequent hand hygiene.",
        "Use separate towels and washcloths.",
        "Avoid touching or rubbing the eyes.",
        "Clean commonly touched surfaces.",
        "Discard or replace contaminated eye cosmetics.",
        "Share ophthalmic medications with household members."
    ],
    answer: [
        "Perform frequent hand hygiene.",
        "Use separate towels and washcloths.",
        "Avoid touching or rubbing the eyes.",
        "Clean commonly touched surfaces.",
        "Discard or replace contaminated eye cosmetics."
    ],
    rationale:
        "Infectious conjunctivitis spreads through contact with contaminated secretions, hands, objects, and personal items.",
    takeaway:
        "Break transmission by controlling contact with eye secretions."
},

{
    id: "CONJ-021",
    caseId: "CONJ-CASE-021",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Nursing Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "A child has dried drainage on both eyelids. Which nursing action is appropriate?",
    choices: [
        "Use a separate clean cloth for each eye and wipe from inner to outer canthus.",
        "Use the same cloth for both eyes.",
        "Scrub the eyelids vigorously.",
        "Wipe from the outer canthus toward the inner canthus."
    ],
    answer:
        "Use a separate clean cloth for each eye and wipe from inner to outer canthus.",
    rationale:
        "Separate materials reduce cross-contamination, and cleaning from inner to outer canthus moves drainage away from the lacrimal duct.",
    takeaway:
        "Use separate supplies for each eye."
},

{
    id: "CONJ-022",
    caseId: "CONJ-CASE-022",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Evaluation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding best indicates that treatment for bacterial conjunctivitis is effective?",
    choices: [
        "Decreased redness and purulent drainage",
        "Increasing eye pain and photophobia",
        "New decrease in visual acuity",
        "Spread of symptoms to the other eye"
    ],
    answer:
        "Decreased redness and purulent drainage",
    rationale:
        "Improvement is demonstrated by reduced inflammation, drainage, irritation, and eyelid crusting.",
    takeaway:
        "Less redness and drainage indicate improvement."
},

{
    id: "CONJ-023",
    caseId: "CONJ-CASE-023",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A child being treated for conjunctivitis develops severe eye pain, photophobia, blurred vision, and difficulty opening the affected eye. Which conclusion should the nurse make?",
    choices: [
        "The child requires urgent evaluation for a more serious eye disorder.",
        "These are expected findings during recovery.",
        "The antibiotic drops should be stopped permanently.",
        "The child only needs a warm washcloth."
    ],
    answer:
        "The child requires urgent evaluation for a more serious eye disorder.",
    rationale:
        "Severe pain, photophobia, and visual changes may indicate corneal involvement or another serious condition rather than uncomplicated conjunctivitis.",
    takeaway:
        "Unexpected pain or vision changes require urgent escalation."
},

{
    id: "CONJ-024",
    caseId: "CONJ-CASE-024",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client diagnosed with conjunctivitis who reports sudden vision loss and severe eye pain",
        "A client with watery drainage requesting tissues",
        "A client asking how to administer eye drops",
        "A client waiting for school-return documentation"
    ],
    answer:
        "A client diagnosed with conjunctivitis who reports sudden vision loss and severe eye pain",
    rationale:
        "Acute vision loss and severe eye pain may indicate an ocular emergency requiring immediate assessment.",
    takeaway:
        "Protecting vision takes priority over routine care and teaching."
},

{
    id: "CONJ-025",
    caseId: "CONJ-CASE-025",
    patient: randomPatient(),
    topic: "Conjunctivitis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A parent reports that a child with bacterial conjunctivitis now has severe eye pain, marked photophobia, blurred vision, and increasing eyelid swelling despite 48 hours of antibiotic drops. Which nursing action is the priority?",
    choices: [
        "Arrange immediate provider evaluation for possible ocular complication.",
        "Recommend continuing routine home care for another week.",
        "Tell the parent to stop all eye medications without further evaluation.",
        "Advise the child to return to school."
    ],
    answer:
        "Arrange immediate provider evaluation for possible ocular complication.",
    rationale:
        "Worsening symptoms, severe pain, photophobia, and blurred vision are not expected with uncomplicated conjunctivitis and require urgent evaluation.",
    takeaway:
        "Failure to improve with pain or vision changes requires urgent reassessment."
},

];
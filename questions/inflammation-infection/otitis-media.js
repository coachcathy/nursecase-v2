const otitisMediaQuestions = [

{
    id: "OM-001",
    caseId: "OM-CASE-001",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Why are infants and young children at increased risk for otitis media?",
    choices: [
        "Their Eustachian tubes are shorter and more horizontal.",
        "Their tympanic membranes are thicker than those of adults.",
        "Their external ear canals are longer and narrower.",
        "Their immune systems produce excessive antibodies."
    ],
    answer:
        "Their Eustachian tubes are shorter and more horizontal.",
    rationale:
        "Short, horizontal Eustachian tubes allow secretions and microorganisms to travel more easily from the nasopharynx into the middle ear.",
    takeaway:
        "Young children are prone to otitis media because of their short, horizontal Eustachian tubes."
},

{
    id: "OM-002",
    caseId: "OM-CASE-002",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with acute otitis media in an infant?",
    choices: [
        "Ear tugging, irritability, fever, and poor feeding",
        "Clay-colored stools and jaundice",
        "Painful urination and urinary frequency",
        "Projectile vomiting after feeding"
    ],
    answer:
        "Ear tugging, irritability, fever, and poor feeding",
    rationale:
        "Infants with acute otitis media often demonstrate ear pulling, irritability, fever, poor feeding, and disturbed sleep because they cannot verbalize ear pain.",
    takeaway:
        "Infants often show otitis media through behavior changes rather than verbal reports of pain."
},

{
    id: "OM-003",
    caseId: "OM-CASE-003",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Diagnostic Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which otoscopic finding supports a diagnosis of acute otitis media?",
    choices: [
        "A bulging, red tympanic membrane",
        "A pearly gray, mobile tympanic membrane",
        "A clear external ear canal",
        "A pale tympanic membrane without fluid"
    ],
    answer:
        "A bulging, red tympanic membrane",
    rationale:
        "Acute inflammation and fluid accumulation in the middle ear cause the tympanic membrane to appear erythematous and bulging.",
    takeaway:
        "Bulging and redness of the tympanic membrane strongly suggest acute otitis media."
},

{
    id: "OM-004",
    caseId: "OM-CASE-004",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Risk Factors",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which factors increase a child's risk for otitis media? Select all that apply.",
    choices: [
        "Exposure to secondhand smoke",
        "Bottle propping",
        "Attending daycare",
        "Feeding the infant in an upright position",
        "Frequent exposure to respiratory infections",
        "Avoiding tobacco smoke"
    ],
    answer: [
        "Exposure to secondhand smoke",
        "Bottle propping",
        "Attending daycare",
        "Frequent exposure to respiratory infections"
    ],
    rationale:
        "Secondhand smoke, bottle propping, daycare attendance, and repeated respiratory infections increase middle-ear infection risk.",
    takeaway:
        "Smoke exposure, bottle propping, and frequent respiratory exposure raise otitis media risk."
},

{
    id: "OM-005",
    caseId: "OM-CASE-005",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Feeding Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instruction should the nurse give a parent to reduce an infant's risk for otitis media?",
    choices: [
        "Hold the infant upright during bottle-feeding.",
        "Prop the bottle while the infant lies flat.",
        "Place the infant supine immediately after every feeding.",
        "Add cereal to the bottle before bedtime."
    ],
    answer:
        "Hold the infant upright during bottle-feeding.",
    rationale:
        "Upright feeding reduces the movement of milk and secretions through the Eustachian tubes into the middle ear.",
    takeaway:
        "Feed infants upright and never prop bottles."
},

{
    id: "OM-006",
    caseId: "OM-CASE-006",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Medication",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication does the nurse expect to be prescribed for a child with bacterial acute otitis media?",
    choices: [
        "Amoxicillin",
        "Lactulose",
        "Oseltamivir",
        "Rifampin"
    ],
    answer:
        "Amoxicillin",
    rationale:
        "Amoxicillin is a commonly prescribed first-line antibiotic for bacterial acute otitis media when antibiotic treatment is indicated.",
    takeaway:
        "Amoxicillin is commonly used to treat bacterial otitis media."
},

{
    id: "OM-007",
    caseId: "OM-CASE-007",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Medication Teaching",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which statement by a parent indicates correct understanding of antibiotic therapy for otitis media?",
    choices: [
        "I will give the medication for the full prescribed course.",
        "I will stop the medication when my child's fever is gone.",
        "I will save the remaining medication for the next ear infection.",
        "I will double the next dose if one dose is missed."
    ],
    answer:
        "I will give the medication for the full prescribed course.",
    rationale:
        "Completing the full antibiotic course helps eradicate the infection and reduces the risk of recurrence and antibiotic resistance.",
    takeaway:
        "Antibiotics must be completed even when symptoms improve."
},

{
    id: "OM-008",
    caseId: "OM-CASE-008",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Comfort Measures",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which interventions can help relieve discomfort in a child with otitis media? Select all that apply.",
    choices: [
        "Administer prescribed analgesics.",
        "Apply a warm compress to the affected ear.",
        "Encourage rest and fluids.",
        "Insert cotton swabs deeply into the ear canal.",
        "Place the child flat during feeding.",
        "Monitor the child's temperature."
    ],
    answer: [
        "Administer prescribed analgesics.",
        "Apply a warm compress to the affected ear.",
        "Encourage rest and fluids.",
        "Monitor the child's temperature."
    ],
    rationale:
        "Analgesics, warmth, rest, fluids, and temperature monitoring support comfort and recovery. Cotton swabs and flat feeding are unsafe.",
    takeaway:
        "Use pain control, warmth, hydration, and monitoring for otitis media."
},

{
    id: "OM-009",
    caseId: "OM-CASE-009",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Otitis Media With Effusion",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is most consistent with otitis media with effusion?",
    choices: [
        "Fluid in the middle ear without acute signs of infection",
        "Severe ear pain with a temperature of 103°F (39.4°C)",
        "Purulent drainage from the external ear canal",
        "Swelling and tenderness behind the ear"
    ],
    answer:
        "Fluid in the middle ear without acute signs of infection",
    rationale:
        "Otitis media with effusion involves middle-ear fluid without the acute fever, pain, and inflammation associated with acute otitis media.",
    takeaway:
        "Effusion means fluid is present without acute infection symptoms."
},

{
    id: "OM-010",
    caseId: "OM-CASE-010",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Delayed Antibiotic Therapy",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A parent receives a delayed antibiotic prescription for a child with mild unilateral otitis media. Which instruction should the nurse provide?",
    choices: [
        "Fill the prescription if symptoms do not improve within 2 to 3 days.",
        "Begin the antibiotic immediately regardless of symptoms.",
        "Discard the prescription after 12 hours.",
        "Give half the prescribed dose until the fever resolves."
    ],
    answer:
        "Fill the prescription if symptoms do not improve within 2 to 3 days.",
    rationale:
        "For selected children with mild symptoms, delayed prescribing allows time for spontaneous improvement while ensuring treatment is available if symptoms persist.",
    takeaway:
        "Delayed prescriptions are used when mild symptoms may improve without antibiotics."
},

{
    id: "OM-011",
    caseId: "OM-CASE-011",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Antibiotic Indications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which child with acute otitis media is most likely to require immediate antibiotic therapy?",
    choices: [
        "A 10-month-old with bilateral otitis media",
        "A 6-year-old with mild unilateral ear discomfort for 6 hours",
        "A 7-year-old with no fever and improving symptoms",
        "A 9-year-old with middle-ear fluid but no pain or fever"
    ],
    answer:
        "A 10-month-old with bilateral otitis media",
    rationale:
        "Children 6 to 23 months old with bilateral acute otitis media are more likely to require antibiotic treatment.",
    takeaway:
        "Young children with bilateral disease are treated more aggressively."
},

{
    id: "OM-012",
    caseId: "OM-CASE-012",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Antibiotic Indications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings support antibiotic treatment for acute otitis media? Select all that apply.",
    choices: [
        "Age younger than 6 months",
        "Ear drainage",
        "Temperature higher than 102.2°F (39°C)",
        "Moderate to severe ear pain",
        "Ear pain lasting at least 48 hours",
        "Mild unilateral discomfort improving after several hours"
    ],
    answer: [
        "Age younger than 6 months",
        "Ear drainage",
        "Temperature higher than 102.2°F (39°C)",
        "Moderate to severe ear pain",
        "Ear pain lasting at least 48 hours"
    ],
    rationale:
        "Antibiotics are recommended for infants younger than 6 months and for children with severe symptoms, prolonged pain, high fever, or ear drainage.",
    takeaway:
        "Age, severity, duration, fever, and drainage guide antibiotic use."
},

{
    id: "OM-013",
    caseId: "OM-CASE-013",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Tympanostomy Tubes",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Why might tympanostomy tubes be placed in a child with recurrent otitis media?",
    choices: [
        "To promote drainage and ventilate the middle ear",
        "To permanently close the Eustachian tube",
        "To improve blood flow to the external ear",
        "To prevent all future respiratory infections"
    ],
    answer:
        "To promote drainage and ventilate the middle ear",
    rationale:
        "Tympanostomy tubes allow ventilation and drainage of middle-ear fluid, reducing pressure and recurrence.",
    takeaway:
        "Tympanostomy tubes ventilate the middle ear and drain fluid."
},

{
    id: "OM-014",
    caseId: "OM-CASE-014",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Tympanostomy Tube Teaching",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a parent of a child with tympanostomy tubes indicates a need for further teaching?",
    choices: [
        "I will insert cotton swabs into the ear canal to keep the tubes clean.",
        "I will report persistent drainage or fever.",
        "I will follow the provider's instructions about water exposure.",
        "I will keep follow-up appointments to assess hearing."
    ],
    answer:
        "I will insert cotton swabs into the ear canal to keep the tubes clean.",
    rationale:
        "Cotton swabs can injure the ear canal or dislodge the tubes and should not be inserted into the ear.",
    takeaway:
        "Never place cotton swabs or objects inside the ear canal."
},

{
    id: "OM-015",
    caseId: "OM-CASE-015",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a child being treated for otitis media requires immediate provider notification?",
    choices: [
        "Swelling, redness, and tenderness behind the affected ear",
        "Mild ear discomfort that improves after analgesic administration",
        "Decreased appetite for one meal",
        "Temporary irritability before bedtime"
    ],
    answer:
        "Swelling, redness, and tenderness behind the affected ear",
    rationale:
        "Postauricular redness, swelling, and tenderness may indicate mastoiditis, a serious complication requiring prompt treatment.",
    takeaway:
        "Pain and swelling behind the ear may indicate mastoiditis."
},

{
    id: "OM-016",
    caseId: "OM-CASE-016",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Hearing",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which complication is associated with persistent middle-ear effusion in a young child?",
    choices: [
        "Temporary hearing loss and delayed speech development",
        "Acute kidney injury",
        "Hyperglycemia",
        "Intestinal obstruction"
    ],
    answer:
        "Temporary hearing loss and delayed speech development",
    rationale:
        "Persistent fluid interferes with sound conduction and may affect language development if hearing loss is prolonged.",
    takeaway:
        "Chronic middle-ear fluid can affect hearing and speech."
},

{
    id: "OM-017",
    caseId: "OM-CASE-017",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Parent Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a parent demonstrates correct understanding of preventing recurrent otitis media?",
    choices: [
        "I will avoid exposing my child to cigarette smoke.",
        "I will bottle-feed my child while lying flat.",
        "I will stop antibiotics once my child feels better.",
        "I will clean inside my child's ears with cotton swabs daily."
    ],
    answer:
        "I will avoid exposing my child to cigarette smoke.",
    rationale:
        "Secondhand smoke irritates the respiratory tract and increases the incidence of otitis media. Avoiding smoke exposure is an important preventive measure.",
    takeaway:
        "Eliminating smoke exposure helps reduce recurrent ear infections."
},

{
    id: "OM-018",
    caseId: "OM-CASE-018",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Nursing Interventions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which nursing interventions are appropriate for a child with acute otitis media? Select all that apply.",
    choices: [
        "Administer prescribed antibiotics.",
        "Encourage upright feeding.",
        "Administer analgesics as prescribed.",
        "Educate parents to complete the full antibiotic course.",
        "Avoid exposure to tobacco smoke.",
        "Bottle-prop during feedings."
    ],
    answer: [
        "Administer prescribed antibiotics.",
        "Encourage upright feeding.",
        "Administer analgesics as prescribed.",
        "Educate parents to complete the full antibiotic course.",
        "Avoid exposure to tobacco smoke."
    ],
    rationale:
        "Appropriate management includes antibiotics when indicated, pain control, upright feeding, avoidance of smoke exposure, and completing prescribed medications.",
    takeaway:
        "Treatment combines medication, comfort measures, and prevention."
},

{
    id: "OM-019",
    caseId: "OM-CASE-019",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which child should the nurse assess first?",
    choices: [
        "A child with otitis media who develops a temperature of 104°F (40°C), lethargy, and neck stiffness",
        "A child pulling at the affected ear while eating",
        "A child asking for another popsicle",
        "A child whose ear pain decreased after acetaminophen"
    ],
    answer:
        "A child with otitis media who develops a temperature of 104°F (40°C), lethargy, and neck stiffness",
    rationale:
        "These findings suggest possible meningitis or another serious complication requiring immediate evaluation.",
    takeaway:
        "Always recognize neurologic red flags as emergencies."
},

{
    id: "OM-020",
    caseId: "OM-CASE-020",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four pediatric clients. Which child should be assessed first?",
    choices: [
        "A child with otitis media who is difficult to arouse and has persistent vomiting",
        "A child waiting for discharge instructions after completing antibiotics",
        "A child with mild ear pain requesting juice",
        "A child returning for a routine hearing evaluation"
    ],
    answer:
        "A child with otitis media who is difficult to arouse and has persistent vomiting",
    rationale:
        "Altered level of consciousness and persistent vomiting may indicate intracranial complications and require immediate assessment.",
    takeaway:
        "Changes in neurologic status always take priority."
},

{
    id: "OM-021",
    caseId: "OM-CASE-021",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Health Promotion",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which intervention helps decrease the frequency of recurrent otitis media in young children?",
    choices: [
        "Reducing exposure to respiratory infections when possible",
        "Using cotton swabs daily",
        "Applying antibiotic ear drops every week",
        "Keeping the child in a supine position during bottle feedings"
    ],
    answer:
        "Reducing exposure to respiratory infections when possible",
    rationale:
        "Frequent upper respiratory infections increase the risk of otitis media. Reducing exposure when possible may decrease recurrence.",
    takeaway:
        "Many ear infections begin after upper respiratory infections."
},

{
    id: "OM-022",
    caseId: "OM-CASE-022",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Parent Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which discharge instructions should the nurse provide to parents of a child with acute otitis media? Select all that apply.",
    choices: [
        "Complete all prescribed antibiotics.",
        "Encourage adequate fluid intake.",
        "Return if symptoms worsen or fail to improve.",
        "Avoid bottle propping.",
        "Monitor for persistent fever or ear drainage.",
        "Insert cotton swabs into the ear canal daily."
    ],
    answer: [
        "Complete all prescribed antibiotics.",
        "Encourage adequate fluid intake.",
        "Return if symptoms worsen or fail to improve.",
        "Avoid bottle propping.",
        "Monitor for persistent fever or ear drainage."
    ],
    rationale:
        "Teaching focuses on medication adherence, hydration, prevention, and recognizing complications requiring medical evaluation.",
    takeaway:
        "Parents should know when treatment is working and when to seek further care."
},

{
    id: "OM-023",
    caseId: "OM-CASE-023",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 2-year-old receiving treatment for acute otitis media develops increasing lethargy, a temperature of 104°F (40°C), vomiting, and nuchal rigidity. Which complication should the nurse recognize?",
    choices: [
        "Possible meningitis requiring immediate intervention",
        "Expected progression of otitis media",
        "Normal medication side effects",
        "Mild dehydration"
    ],
    answer:
        "Possible meningitis requiring immediate intervention",
    rationale:
        "High fever, neck stiffness, vomiting, and altered mental status are findings consistent with meningitis, a rare but life-threatening complication.",
    takeaway:
        "Neurologic changes following an ear infection are emergencies."
},

{
    id: "OM-024",
    caseId: "OM-CASE-024",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four children. Which child should be assessed first?",
    choices: [
        "A child with otitis media who becomes confused and develops unequal pupils",
        "A child with mild ear pain requesting another blanket",
        "A child eating lunch after receiving amoxicillin",
        "A child awaiting discharge instructions"
    ],
    answer:
        "A child with otitis media who becomes confused and develops unequal pupils",
    rationale:
        "Neurologic deterioration suggests increased intracranial pressure or another life-threatening complication requiring immediate assessment.",
    takeaway:
        "Acute neurologic changes always take priority."
},

{
    id: "OM-025",
    caseId: "OM-CASE-025",
    patient: randomPatient(),
    topic: "Otitis Media",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 14-month-old with acute otitis media becomes difficult to arouse and develops a temperature of 104.2°F (40.1°C), projectile vomiting, neck stiffness, and a bulging fontanel. Which nursing intervention is the priority?",
    choices: [
        "Notify the provider immediately, initiate emergency interventions, maintain airway, obtain IV access, and prepare for rapid evaluation for meningitis.",
        "Administer the next dose of amoxicillin and reassess in four hours.",
        "Apply a warm compress to the affected ear.",
        "Provide discharge instructions to the parents."
    ],
    answer:
        "Notify the provider immediately, initiate emergency interventions, maintain airway, obtain IV access, and prepare for rapid evaluation for meningitis.",
    rationale:
        "These findings suggest meningitis, a life-threatening complication requiring immediate stabilization and treatment.",
    takeaway:
        "High fever with neurologic symptoms after otitis media is an emergency."
},

];
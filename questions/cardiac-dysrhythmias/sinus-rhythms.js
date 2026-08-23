const sinusRhythmQuestions = [

{
    id: "SINUS-001",
    caseId: "SINUS-CASE-001",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Normal Sinus Rhythm",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with normal sinus rhythm?",
    choices: [
        "Rate 60 to 100 beats/min, regular rhythm, one P wave before each QRS",
        "Rate 40 to 60 beats/min with absent P waves",
        "Irregular rhythm with no identifiable P waves",
        "Rate greater than 150 beats/min with wide QRS complexes"
    ],
    answer:
        "Rate 60 to 100 beats/min, regular rhythm, one P wave before each QRS",
    rationale:
        "Normal sinus rhythm originates from the SA node and has a rate of 60 to 100 beats/min, a regular rhythm, consistent P waves before each QRS, a normal PR interval, and a narrow QRS.",
    takeaway:
        "NSR = 60–100, regular, P before every QRS."
},

{
    id: "SINUS-002",
    caseId: "SINUS-CASE-002",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Normal Sinus Rhythm",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are expected with normal sinus rhythm? Select all that apply.",
    choices: [
        "Atrial and ventricular rate 60 to 100 beats/min",
        "Regular atrial and ventricular rhythm",
        "One P wave before every QRS",
        "PR interval 0.12 to 0.20 seconds",
        "Narrow QRS complex",
        "Absent P waves"
    ],
    answer: [
        "Atrial and ventricular rate 60 to 100 beats/min",
        "Regular atrial and ventricular rhythm",
        "One P wave before every QRS",
        "PR interval 0.12 to 0.20 seconds",
        "Narrow QRS complex"
    ],
    rationale:
        "Normal sinus rhythm has a normal rate, regular atrial and ventricular rhythm, consistent P waves before each QRS, normal PR interval, and narrow QRS complexes.",
    takeaway:
        "All sinus rhythms should have a P wave before each QRS."
},

{
    id: "SINUS-003",
    caseId: "SINUS-CASE-003",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Normal Sinus Rhythm",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm strip shows a rate of 76 beats/min, regular R-R intervals, upright P waves before each QRS, PR interval 0.16 seconds, and QRS duration 0.08 seconds. How should the nurse interpret this rhythm?",
    choices: [
        "Normal sinus rhythm",
        "Sinus bradycardia",
        "Sinus tachycardia",
        "Atrial fibrillation"
    ],
    answer:
        "Normal sinus rhythm",
    rationale:
        "The rate is within 60 to 100 beats/min, the rhythm is regular, the P waves are normal and precede each QRS, and both the PR and QRS durations are normal.",
    takeaway:
        "Use the full criteria, not just the rate, to identify NSR."
},

{
    id: "SINUS-004",
    caseId: "SINUS-CASE-004",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Arrhythmia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes sinus arrhythmia?",
    choices: [
        "The heart rate increases with inspiration and decreases with expiration",
        "The rhythm has no P waves",
        "The QRS complexes are wide and bizarre",
        "The ventricular rate is always greater than 150 beats/min"
    ],
    answer:
        "The heart rate increases with inspiration and decreases with expiration",
    rationale:
        "Sinus arrhythmia is associated with respiratory changes. The heart rate increases during inspiration and decreases during expiration.",
    takeaway:
        "Sinus arrhythmia varies with breathing."
},

{
    id: "SINUS-005",
    caseId: "SINUS-CASE-005",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Arrhythmia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A healthy young adult has an irregular rhythm that speeds up during inspiration and slows during expiration. P waves precede every QRS and the PR and QRS intervals are normal. Which rhythm should the nurse identify?",
    choices: [
        "Sinus arrhythmia",
        "Atrial fibrillation",
        "Premature ventricular contractions",
        "Junctional rhythm"
    ],
    answer:
        "Sinus arrhythmia",
    rationale:
        "Sinus arrhythmia retains all the characteristics of sinus rhythm except regularity. The rhythm varies with respiration and is generally benign.",
    takeaway:
        "Sinus arrhythmia = sinus features + respiratory irregularity."
},

{
    id: "SINUS-006",
    caseId: "SINUS-CASE-006",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Arrhythmia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "What treatment should the nurse anticipate for an asymptomatic client with respiratory sinus arrhythmia?",
    choices: [
        "No treatment is usually required",
        "Immediate synchronized cardioversion",
        "Adenosine rapid IV push",
        "Permanent pacemaker insertion"
    ],
    answer:
        "No treatment is usually required",
    rationale:
        "Respiratory sinus arrhythmia is generally benign and frequently occurs in healthy individuals. Treatment is not required when the client is asymptomatic.",
    takeaway:
        "Respiratory sinus arrhythmia is usually benign."
},

{
    id: "SINUS-007",
    caseId: "SINUS-CASE-007",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with sinus bradycardia?",
    choices: [
        "Rate below 60 beats/min with a regular rhythm and P wave before each QRS",
        "Rate above 100 beats/min with no P waves",
        "Rate 150 to 250 beats/min with hidden P waves",
        "Irregularly irregular rhythm with absent P waves"
    ],
    answer:
        "Rate below 60 beats/min with a regular rhythm and P wave before each QRS",
    rationale:
        "Sinus bradycardia originates from the SA node and has all the features of sinus rhythm except the heart rate is less than 60 beats/min.",
    takeaway:
        "Sinus bradycardia = normal sinus pattern, rate under 60."
},

{
    id: "SINUS-008",
    caseId: "SINUS-CASE-008",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions can contribute to sinus bradycardia? Select all that apply.",
    choices: [
        "Athletic conditioning",
        "Hypothermia",
        "Hypothyroidism",
        "Increased intracranial pressure",
        "Beta-blocker therapy",
        "Severe anxiety"
    ],
    answer: [
        "Athletic conditioning",
        "Hypothermia",
        "Hypothyroidism",
        "Increased intracranial pressure",
        "Beta-blocker therapy"
    ],
    rationale:
        "The lecture lists athletic conditioning, hypothermia, hypothyroidism, sleep apnea, increased intracranial pressure, vagal stimulation, beta blockers, and hypoxia as causes of sinus bradycardia.",
    takeaway:
        "Bradycardia can be physiologic, medication-related, or caused by decreased metabolic or neurologic states."
},
{
    id: "SINUS-009",
    caseId: "SINUS-CASE-009",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with sinus bradycardia should the nurse assess first?",
    choices: [
        "A client with HR 42/min, BP 82/46 mm Hg, dizziness, and altered level of consciousness",
        "A sleeping athlete with HR 48/min and no symptoms",
        "A client with HR 56/min who denies dizziness or chest pain",
        "A client with HR 58/min and stable vital signs"
    ],
    answer:
        "A client with HR 42/min, BP 82/46 mm Hg, dizziness, and altered level of consciousness",
    rationale:
        "Symptomatic bradycardia can reduce cardiac output and cerebral perfusion. Hypotension, dizziness, and altered level of consciousness indicate hemodynamic instability and require immediate intervention.",
    takeaway:
        "Treat sinus bradycardia based on symptoms and perfusion, not the heart rate alone."
},

{
    id: "SINUS-010",
    caseId: "SINUS-CASE-010",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication should the nurse anticipate administering first to a client with symptomatic sinus bradycardia?",
    choices: [
        "Atropine",
        "Adenosine",
        "Amiodarone",
        "Magnesium sulfate"
    ],
    answer:
        "Atropine",
    rationale:
        "The lecture identifies atropine as the first-line medication for symptomatic sinus bradycardia.",
    takeaway:
        "Symptomatic bradycardia = atropine first."
},

{
    id: "SINUS-011",
    caseId: "SINUS-CASE-011",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with sinus bradycardia has HR 46/min, BP 84/50 mm Hg, dizziness, and chest discomfort. Atropine is administered without improvement. Which intervention should the nurse anticipate next?",
    choices: [
        "Prepare for pacing",
        "Administer adenosine",
        "Begin anticoagulation",
        "Encourage ambulation"
    ],
    answer:
        "Prepare for pacing",
    rationale:
        "The lecture states that symptomatic bradycardia is treated with atropine and pacing may be required if atropine is ineffective.",
    takeaway:
        "Atropine fails in symptomatic bradycardia → prepare for pacing."
},

{
    id: "SINUS-012",
    caseId: "SINUS-CASE-012",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings indicate that sinus bradycardia is symptomatic? Select all that apply.",
    choices: [
        "Dizziness",
        "Syncope",
        "Chest pain",
        "Shortness of breath",
        "Hypotension",
        "Resting HR 56/min in an asymptomatic athlete"
    ],
    answer: [
        "Dizziness",
        "Syncope",
        "Chest pain",
        "Shortness of breath",
        "Hypotension"
    ],
    rationale:
        "The lecture identifies dizziness, syncope, chest pain, shortness of breath, hypotension, and altered level of consciousness as signs that bradycardia is affecting perfusion.",
    takeaway:
        "Symptoms determine whether bradycardia needs treatment."
},

{
    id: "SINUS-013",
    caseId: "SINUS-CASE-013",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which safety intervention is most appropriate for a client experiencing symptomatic sinus bradycardia with dizziness?",
    choices: [
        "Initiate fall precautions",
        "Encourage independent ambulation",
        "Restrict cardiac monitoring",
        "Place the client flat and unattended"
    ],
    answer:
        "Initiate fall precautions",
    rationale:
        "The lecture specifically identifies fall precautions as an important safety intervention for clients with symptomatic bradycardia because dizziness and syncope increase injury risk.",
    takeaway:
        "Symptomatic bradycardia = fall risk."
},

{
    id: "SINUS-014",
    caseId: "SINUS-CASE-014",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Bradycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client taking a beta blocker develops sinus bradycardia at 48 beats/min. Which nursing action is most appropriate?",
    choices: [
        "Assess the client for symptoms and review the medication as a possible cause",
        "Immediately defibrillate the client",
        "Administer adenosine",
        "Assume the rhythm is normal because P waves are present"
    ],
    answer:
        "Assess the client for symptoms and review the medication as a possible cause",
    rationale:
        "Beta blockers are listed as a cause of sinus bradycardia. The nurse should assess the client's perfusion and identify the underlying cause before determining the treatment.",
    takeaway:
        "With sinus bradycardia, always look for the cause."
},

{
    id: "SINUS-015",
    caseId: "SINUS-CASE-015",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with sinus tachycardia?",
    choices: [
        "Rate greater than 100 beats/min, regular rhythm, and P wave before every QRS",
        "Rate less than 60 beats/min with a regular rhythm",
        "Irregularly irregular rhythm with absent P waves",
        "Rate greater than 150 beats/min with wide QRS complexes"
    ],
    answer:
        "Rate greater than 100 beats/min, regular rhythm, and P wave before every QRS",
    rationale:
        "Sinus tachycardia originates from the SA node and retains normal sinus conduction features, but the rate is greater than 100 beats/min.",
    takeaway:
        "Sinus tachycardia = sinus rhythm pattern with rate >100."
},

{
    id: "SINUS-016",
    caseId: "SINUS-CASE-016",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions can cause sinus tachycardia? Select all that apply.",
    choices: [
        "Fever",
        "Anemia",
        "Hypovolemia",
        "Pain",
        "Anxiety",
        "Hyperthyroidism",
        "Athletic conditioning at rest"
    ],
    answer: [
        "Fever",
        "Anemia",
        "Hypovolemia",
        "Pain",
        "Anxiety",
        "Hyperthyroidism"
    ],
    rationale:
        "The lecture lists fever, anemia, hypovolemia, hypotension, pulmonary embolism, myocardial infarction, stimulants, stress, pain, anxiety, and hyperthyroidism as causes of sinus tachycardia.",
    takeaway:
        "Sinus tachycardia usually has a reason—find it."
},

{
    id: "SINUS-017",
    caseId: "SINUS-CASE-017",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has sinus tachycardia at 126 beats/min after several episodes of vomiting and diarrhea. BP is 88/54 mm Hg and mucous membranes are dry. Which intervention should the nurse anticipate?",
    choices: [
        "Administer IV fluids as prescribed",
        "Administer adenosine",
        "Prepare for immediate defibrillation",
        "Administer magnesium sulfate"
    ],
    answer:
        "Administer IV fluids as prescribed",
    rationale:
        "The findings suggest hypovolemia as the cause of the sinus tachycardia. The lecture emphasizes treating the underlying cause rather than treating the rhythm itself.",
    takeaway:
        "Hypovolemia causing sinus tachycardia → replace volume."
},

{
    id: "SINUS-018",
    caseId: "SINUS-CASE-018",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has sinus tachycardia related to severe anemia. Which treatment best addresses the cause identified in the lecture?",
    choices: [
        "Administer prescribed red blood cells",
        "Administer atropine",
        "Administer adenosine",
        "Prepare for transcutaneous pacing"
    ],
    answer:
        "Administer prescribed red blood cells",
    rationale:
        "The lecture specifically identifies red blood cell replacement as treatment when anemia is causing sinus tachycardia.",
    takeaway:
        "Anemia causing tachycardia → correct the anemia."
},

{
    id: "SINUS-019",
    caseId: "SINUS-CASE-019",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has sinus tachycardia at 118 beats/min and a temperature of 103°F (39.4°C). Which action best reflects appropriate treatment?",
    choices: [
        "Treat the fever and reassess the heart rate",
        "Administer adenosine immediately",
        "Defibrillate the client",
        "Insert a permanent pacemaker"
    ],
    answer:
        "Treat the fever and reassess the heart rate",
    rationale:
        "Sinus tachycardia is often a physiologic response to an underlying problem. In this case, fever is the likely cause and should be addressed.",
    takeaway:
        "Sinus tachycardia: treat WHY the rate is fast."
},

{
    id: "SINUS-020",
    caseId: "SINUS-CASE-020",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment findings can occur when sinus tachycardia becomes symptomatic? Select all that apply.",
    choices: [
        "Shortness of breath",
        "Dizziness",
        "Palpitations",
        "Chest pain",
        "Hypotension",
        "Increased ventricular filling time"
    ],
    answer: [
        "Shortness of breath",
        "Dizziness",
        "Palpitations",
        "Chest pain",
        "Hypotension"
    ],
    rationale:
        "The lecture identifies shortness of breath, dizziness or near syncope, palpitations, chest pain, and hypotension as symptoms associated with significant sinus tachycardia.",
    takeaway:
        "Fast rhythm becomes dangerous when perfusion starts to fall."
},

{
    id: "SINUS-021",
    caseId: "SINUS-CASE-021",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Why can significant sinus tachycardia decrease cardiac output?",
    choices: [
        "The rapid rate reduces ventricular filling time",
        "The rapid rate increases diastolic filling time",
        "The rapid rate eliminates myocardial oxygen demand",
        "The rapid rate prevents atrial depolarization"
    ],
    answer:
        "The rapid rate reduces ventricular filling time",
    rationale:
        "Tachycardia shortens diastole. This decreases ventricular filling time and can reduce stroke volume and cardiac output.",
    takeaway:
        "Too fast = less ventricular filling."
},

{
    id: "SINUS-022",
    caseId: "SINUS-CASE-022",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A postoperative client develops sinus tachycardia at 122 beats/min. Which assessment should the nurse prioritize when determining the cause?",
    choices: [
        "Pain, blood pressure, oxygen saturation, and signs of volume loss",
        "Hair color and eye color",
        "Preferred sleeping position",
        "Time of the client's last bowel movement only"
    ],
    answer:
        "Pain, blood pressure, oxygen saturation, and signs of volume loss",
    rationale:
        "The nurse should assess common causes of sinus tachycardia such as pain, hypovolemia, hypotension, hypoxia, and physiologic stress.",
    takeaway:
        "New sinus tachycardia is often an assessment clue."
},

{
    id: "SINUS-023",
    caseId: "SINUS-CASE-023",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Sinus Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has sinus tachycardia at 130 beats/min, BP 78/42 mm Hg, chest pain, diaphoresis, and altered mental status. Which finding is most concerning?",
    choices: [
        "Evidence of hemodynamic instability",
        "Presence of P waves",
        "The rhythm originates from the SA node",
        "The QRS complexes are narrow"
    ],
    answer:
        "Evidence of hemodynamic instability",
    rationale:
        "Hypotension, chest pain, diaphoresis, and altered mental status indicate impaired cardiac output and tissue perfusion. The nurse must prioritize the patient's instability.",
    takeaway:
        "A sinus rhythm can still be dangerous when the patient is unstable."
},

{
    id: "SINUS-024",
    caseId: "SINUS-CASE-024",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which characteristic differentiates sinus bradycardia from normal sinus rhythm?",
    choices: [
        "Heart rate less than 60 beats/min",
        "Absence of P waves",
        "Wide QRS complexes",
        "Irregularly irregular rhythm"
    ],
    answer:
        "Heart rate less than 60 beats/min",
    rationale:
        "Sinus bradycardia retains the normal sinus conduction pattern but has a heart rate below 60 beats/min.",
    takeaway:
        "Sinus bradycardia = NSR features, slower rate."
},

{
    id: "SINUS-025",
    caseId: "SINUS-CASE-025",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which characteristic differentiates sinus tachycardia from normal sinus rhythm?",
    choices: [
        "Heart rate greater than 100 beats/min",
        "Absence of QRS complexes",
        "No relationship between P waves and QRS complexes",
        "Wide bizarre ventricular complexes"
    ],
    answer:
        "Heart rate greater than 100 beats/min",
    rationale:
        "Sinus tachycardia has the same conduction characteristics as normal sinus rhythm but with a rate greater than 100 beats/min.",
    takeaway:
        "Sinus tachycardia = NSR features, faster rate."
},

{
    id: "SINUS-026",
    caseId: "SINUS-CASE-026",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which features are common to normal sinus rhythm, sinus bradycardia, and sinus tachycardia? Select all that apply.",
    choices: [
        "P wave before each QRS",
        "Normal PR interval",
        "Narrow QRS complex",
        "SA-node origin",
        "Regular rhythm",
        "Heart rate always 60 to 100 beats/min"
    ],
    answer: [
        "P wave before each QRS",
        "Normal PR interval",
        "Narrow QRS complex",
        "SA-node origin",
        "Regular rhythm"
    ],
    rationale:
        "These rhythms all originate from the SA node and retain normal sinus conduction characteristics. Their primary difference is the rate.",
    takeaway:
        "Sinus rhythms share the same conduction pattern; rate separates them."
},

{
    id: "SINUS-027",
    caseId: "SINUS-CASE-027",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with sinus bradycardia, HR 38/min, BP 80/44 mm Hg, and confusion",
        "A healthy athlete with sinus bradycardia at 52/min and no symptoms",
        "A client with sinus tachycardia at 108/min due to anxiety with stable vital signs",
        "A client with sinus arrhythmia and no symptoms"
    ],
    answer:
        "A client with sinus bradycardia, HR 38/min, BP 80/44 mm Hg, and confusion",
    rationale:
        "Severe symptomatic bradycardia with hypotension and altered mental status indicates critically reduced perfusion and requires immediate intervention.",
    takeaway:
        "Prioritize unstable perfusion, not the rhythm name."
},

{
    id: "SINUS-028",
    caseId: "SINUS-CASE-028",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with sinus tachycardia requires the most immediate assessment?",
    choices: [
        "A client with HR 138/min, BP 84/48 mm Hg, chest pain, and dyspnea",
        "A client with HR 112/min after walking in the hallway",
        "A client with HR 104/min who reports anxiety before a procedure",
        "A client with HR 108/min and temperature 100.8°F (38.2°C)"
    ],
    answer:
        "A client with HR 138/min, BP 84/48 mm Hg, chest pain, and dyspnea",
    rationale:
        "Hypotension, chest pain, and dyspnea indicate hemodynamic compromise and decreased cardiac output.",
    takeaway:
        "Rate matters less than stability."
},

{
    id: "SINUS-029",
    caseId: "SINUS-CASE-029",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has HR 48/min with a regular rhythm, P wave before every QRS, PR interval 0.16 seconds, and narrow QRS complexes. The client is awake, BP 124/70 mm Hg, and denies symptoms. Which nursing action is most appropriate?",
    choices: [
        "Continue monitoring and assess for the underlying cause",
        "Administer atropine immediately",
        "Begin chest compressions",
        "Prepare for defibrillation"
    ],
    answer:
        "Continue monitoring and assess for the underlying cause",
    rationale:
        "The client has asymptomatic sinus bradycardia with stable perfusion. The lecture states that asymptomatic sinus bradycardia may be normal and should be monitored while the cause is assessed.",
    takeaway:
        "Asymptomatic + stable sinus bradycardia often requires monitoring, not emergency treatment."
},

{
    id: "SINUS-030",
    caseId: "SINUS-CASE-030",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has a regular rhythm at 124 beats/min with a P wave before each QRS and normal PR and QRS intervals. The client reports severe abdominal pain rated 10/10. Which interpretation and action are most appropriate?",
    choices: [
        "Sinus tachycardia; treat the underlying pain and reassess the heart rate",
        "SVT; administer adenosine immediately",
        "Ventricular tachycardia; prepare for defibrillation",
        "Sinus bradycardia; administer atropine"
    ],
    answer:
        "Sinus tachycardia; treat the underlying pain and reassess the heart rate",
    rationale:
        "The rhythm meets the criteria for sinus tachycardia, and severe pain is a recognized cause. The appropriate approach is to treat the underlying cause and reassess.",
    takeaway:
        "Sinus tachycardia is often the body's response to another problem."
},

{
    id: "SINUS-031",
    caseId: "SINUS-CASE-031",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Patient Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessments should the nurse perform when evaluating a client with sinus tachycardia? Select all that apply.",
    choices: [
        "Heart rate and rhythm",
        "Blood pressure",
        "Level of consciousness",
        "Oxygen saturation",
        "Skin signs",
        "Ignore possible underlying causes"
    ],
    answer: [
        "Heart rate and rhythm",
        "Blood pressure",
        "Level of consciousness",
        "Oxygen saturation",
        "Skin signs"
    ],
    rationale:
        "The lecture directs the nurse to assess HR, BP, level of consciousness, oxygen saturation, and skin signs when evaluating sinus tachycardia.",
    takeaway:
        "Assess the whole patient when evaluating tachycardia."
},

{
    id: "SINUS-032",
    caseId: "SINUS-CASE-032",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Underlying Causes",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A hospitalized client suddenly develops sinus tachycardia. Which finding should the nurse investigate as a possible serious underlying cause?",
    choices: [
        "New shortness of breath and hypoxemia",
        "Recent conversation with a visitor",
        "Preference for a different meal",
        "Sleeping eight hours the previous night"
    ],
    answer:
        "New shortness of breath and hypoxemia",
    rationale:
        "The lecture identifies pulmonary embolism and myocardial infarction among possible causes of sinus tachycardia. New dyspnea and hypoxemia require prompt evaluation.",
    takeaway:
        "Do not dismiss new sinus tachycardia—it can be an early warning sign."
},

{
    id: "SINUS-033",
    caseId: "SINUS-CASE-033",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Underlying Causes",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops sinus tachycardia with HR 116/min shortly after receiving news that a procedure has been delayed. The client reports feeling anxious, BP is stable, and oxygen saturation is 98%. Which action is most appropriate?",
    choices: [
        "Address the anxiety and continue monitoring",
        "Administer adenosine immediately",
        "Defibrillate the client",
        "Prepare for transcutaneous pacing"
    ],
    answer:
        "Address the anxiety and continue monitoring",
    rationale:
        "Stress and anxiety are recognized causes of sinus tachycardia. Because the client remains stable, addressing the underlying trigger is appropriate.",
    takeaway:
        "Stable sinus tachycardia + obvious trigger = treat the trigger."
},

{
    id: "SINUS-034",
    caseId: "SINUS-CASE-034",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Medication Considerations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "When might beta blockers or calcium channel blockers be considered for sinus tachycardia according to the lecture?",
    choices: [
        "After the underlying cause has been addressed",
        "Before assessing the reason for the tachycardia",
        "For every client with a heart rate above 100 beats/min",
        "Only after defibrillation"
    ],
    answer:
        "After the underlying cause has been addressed",
    rationale:
        "The lecture emphasizes treating the underlying cause first. Rate-control medications may be used only after the cause has been addressed when appropriate.",
    takeaway:
        "For sinus tachycardia, cause first; rate-control drugs second."
},

{
    id: "SINUS-035",
    caseId: "SINUS-CASE-035",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse evaluates four rhythm strips. Which finding best supports that a rhythm originates from the SA node?",
    choices: [
        "Consistent P wave before every QRS complex",
        "Absent P waves with an irregularly irregular rhythm",
        "Inverted P waves occurring after the QRS",
        "Wide premature QRS complexes without P waves"
    ],
    answer:
        "Consistent P wave before every QRS complex",
    rationale:
        "All sinus rhythms originate from the SA node. A consistent P wave before every QRS is a defining feature of sinus conduction.",
    takeaway:
        "P before every QRS is the fingerprint of a sinus rhythm."
},

{
    id: "SINUS-036",
    caseId: "SINUS-CASE-036",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is comparing sinus rhythms. Which statements are correct? Select all that apply.",
    choices: [
        "Normal sinus rhythm has a rate of 60 to 100 beats/min.",
        "Sinus bradycardia has a rate below 60 beats/min.",
        "Sinus tachycardia has a rate above 100 beats/min.",
        "Sinus arrhythmia varies with respiration.",
        "All sinus rhythms normally originate from the SA node.",
        "All sinus rhythms require medication treatment."
    ],
    answer: [
        "Normal sinus rhythm has a rate of 60 to 100 beats/min.",
        "Sinus bradycardia has a rate below 60 beats/min.",
        "Sinus tachycardia has a rate above 100 beats/min.",
        "Sinus arrhythmia varies with respiration.",
        "All sinus rhythms normally originate from the SA node."
    ],
    rationale:
        "The sinus rhythm family includes NSR, sinus arrhythmia, sinus bradycardia, and sinus tachycardia. They originate from the SA node, but treatment depends on the clinical situation.",
    takeaway:
        "Know the rate, pattern, cause, symptoms, and treatment for each sinus rhythm."
},

{
    id: "SINUS-037",
    caseId: "SINUS-CASE-037",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse see first?",
    choices: [
        "A client with sinus tachycardia at 142/min, BP 76/40 mm Hg, and altered level of consciousness",
        "A healthy client with respiratory sinus arrhythmia",
        "A sleeping client with sinus bradycardia at 54/min and stable vital signs",
        "A client with sinus tachycardia at 105/min during mild anxiety"
    ],
    answer:
        "A client with sinus tachycardia at 142/min, BP 76/40 mm Hg, and altered level of consciousness",
    rationale:
        "Hypotension and altered level of consciousness indicate severe hemodynamic instability and inadequate tissue perfusion.",
    takeaway:
        "Always prioritize the unstable patient."
},

{
    id: "SINUS-038",
    caseId: "SINUS-CASE-038",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor shows sinus bradycardia at 40 beats/min. What should the nurse do first?",
    choices: [
        "Assess the client's symptoms, blood pressure, level of consciousness, and perfusion",
        "Administer atropine before assessing the client",
        "Immediately begin defibrillation",
        "Document the rhythm as asymptomatic"
    ],
    answer:
        "Assess the client's symptoms, blood pressure, level of consciousness, and perfusion",
    rationale:
        "Treatment of sinus bradycardia depends on whether the client is symptomatic. The nurse must first determine the client's hemodynamic status.",
    takeaway:
        "Assess first. The same rhythm can be benign or dangerous depending on the patient."
},

{
    id: "SINUS-039",
    caseId: "SINUS-CASE-039",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The monitor shows sinus tachycardia at 128 beats/min. What is the nurse's priority assessment?",
    choices: [
        "Determine the underlying cause and evaluate perfusion",
        "Prepare adenosine before assessing the client",
        "Assume the client has SVT",
        "Immediately prepare for defibrillation"
    ],
    answer:
        "Determine the underlying cause and evaluate perfusion",
    rationale:
        "Sinus tachycardia is typically a response to an underlying problem. Assessment should focus on identifying the cause and determining whether cardiac output is compromised.",
    takeaway:
        "Sinus tachycardia is often a symptom, not the primary problem."
},

{
    id: "SINUS-040",
    caseId: "SINUS-CASE-040",
    patient: randomPatient(),
    topic: "Sinus Rhythms",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has HR 44/min with a regular rhythm, P wave before each QRS, PR 0.18 seconds, and narrow QRS complexes. The client reports dizziness and has BP 78/42 mm Hg. Which conclusion and action are most appropriate?",
    choices: [
        "Symptomatic sinus bradycardia; administer prescribed atropine and prepare for pacing if ineffective",
        "Normal sinus rhythm; continue routine care",
        "SVT; administer adenosine",
        "Ventricular fibrillation; begin defibrillation"
    ],
    answer:
        "Symptomatic sinus bradycardia; administer prescribed atropine and prepare for pacing if ineffective",
    rationale:
        "The tracing meets sinus bradycardia criteria, while hypotension and dizziness indicate decreased perfusion. The lecture identifies atropine as first-line treatment, followed by pacing if atropine fails.",
    takeaway:
        "Identify the rhythm, assess stability, then choose the intervention."
}

];
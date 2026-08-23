const atrialRhythmQuestions = [

{
    id: "ATRIAL-001",
    caseId: "ATRIAL-CASE-001",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Premature Atrial Contractions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with a premature atrial contraction (PAC)?",
    choices: [
        "An early beat with a P wave that looks different from the other P waves",
        "A wide premature QRS complex with no preceding P wave",
        "An irregularly irregular rhythm with no identifiable P waves",
        "A sawtooth baseline with an atrial rate of 300 beats/min"
    ],
    answer:
        "An early beat with a P wave that looks different from the other P waves",
    rationale:
        "PACs originate from an ectopic atrial focus and occur earlier than expected. The P wave often has a different shape because the impulse does not originate from the SA node.",
    takeaway:
        "PAC = early atrial beat + abnormal-looking P wave."
},

{
    id: "ATRIAL-002",
    caseId: "ATRIAL-CASE-002",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Premature Atrial Contractions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions can contribute to premature atrial contractions? Select all that apply.",
    choices: [
        "Hypoxia",
        "Excessive caffeine intake",
        "Nicotine use",
        "Infection",
        "Digoxin toxicity",
        "Coronary artery disease",
        "Adequate oxygenation with no stimulants"
    ],
    answer: [
        "Hypoxia",
        "Excessive caffeine intake",
        "Nicotine use",
        "Infection",
        "Digoxin toxicity",
        "Coronary artery disease"
    ],
    rationale:
        "The lecture lists hypoxia, stimulants such as caffeine and nicotine, infection, digoxin toxicity, cocaine, and CAD as potential causes of PACs.",
    takeaway:
        "PACs often reflect atrial irritability—look for triggers."
},

{
    id: "ATRIAL-003",
    caseId: "ATRIAL-CASE-003",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Premature Atrial Contractions",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which intervention is most appropriate for a client with occasional asymptomatic PACs related to excessive caffeine intake?",
    choices: [
        "Reduce stimulant intake and monitor the rhythm",
        "Prepare for immediate defibrillation",
        "Administer atropine",
        "Begin chest compressions"
    ],
    answer:
        "Reduce stimulant intake and monitor the rhythm",
    rationale:
        "The lecture emphasizes eliminating the underlying cause of PACs. Reducing caffeine and other stimulants is appropriate when PACs are caused by irritability from stimulant use.",
    takeaway:
        "PAC treatment usually starts with removing the trigger."
},

{
    id: "ATRIAL-004",
    caseId: "ATRIAL-CASE-004",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Premature Atrial Contractions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse provide to a client experiencing frequent PACs? Select all that apply.",
    choices: [
        "Reduce caffeine intake.",
        "Avoid nicotine.",
        "Limit alcohol.",
        "Manage stress and anxiety.",
        "Take prescribed medications consistently.",
        "Ignore new dizziness or shortness of breath."
    ],
    answer: [
        "Reduce caffeine intake.",
        "Avoid nicotine.",
        "Limit alcohol.",
        "Manage stress and anxiety.",
        "Take prescribed medications consistently."
    ],
    rationale:
        "The lecture emphasizes reducing stimulants, limiting alcohol, managing stress, adhering to medications, and reporting symptoms such as palpitations, dizziness, or shortness of breath.",
    takeaway:
        "PAC teaching focuses on trigger reduction and symptom reporting."
},

{
    id: "ATRIAL-005",
    caseId: "ATRIAL-CASE-005",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most characteristic of atrial fibrillation?",
    choices: [
        "Irregularly irregular rhythm with absent P waves",
        "Regular rhythm with a P wave before every QRS",
        "Sawtooth flutter waves",
        "Wide QRS complexes at 200 beats/min"
    ],
    answer:
        "Irregularly irregular rhythm with absent P waves",
    rationale:
        "Atrial fibrillation is characterized by chaotic atrial activity, an irregularly irregular ventricular rhythm, absent identifiable P waves, and fibrillatory baseline activity.",
    takeaway:
        "A-fib = irregularly irregular + no P waves."
},

{
    id: "ATRIAL-006",
    caseId: "ATRIAL-CASE-006",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are expected with atrial fibrillation? Select all that apply.",
    choices: [
        "Irregularly irregular rhythm",
        "Absent P waves",
        "Unmeasurable PR interval",
        "Possible rapid ventricular response",
        "Increased risk for thromboembolic stroke",
        "Consistent P waves before every QRS"
    ],
    answer: [
        "Irregularly irregular rhythm",
        "Absent P waves",
        "Unmeasurable PR interval",
        "Possible rapid ventricular response",
        "Increased risk for thromboembolic stroke"
    ],
    rationale:
        "The PPT describes A-fib as irregularly irregular with absent P waves, an unmeasurable PR interval, variable ventricular response, and high thromboembolic risk.",
    takeaway:
        "A-fib affects rhythm, atrial contraction, and stroke risk."
},

{
    id: "ATRIAL-007",
    caseId: "ATRIAL-CASE-007",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why does atrial fibrillation increase the client's risk for embolic stroke?",
    choices: [
        "Ineffective atrial contraction allows blood to pool and form clots",
        "The ventricles stop contracting completely",
        "The SA node produces excessively strong atrial contractions",
        "The QRS complexes become too narrow to perfuse the brain"
    ],
    answer:
        "Ineffective atrial contraction allows blood to pool and form clots",
    rationale:
        "Loss of coordinated atrial contraction allows blood to pool, especially in the left atrial appendage, increasing the risk of thrombus formation and embolic stroke.",
    takeaway:
        "A-fib → blood stasis → clot → stroke risk."
},

{
    id: "ATRIAL-008",
    caseId: "ATRIAL-CASE-008",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation suddenly develops facial drooping, arm weakness, and slurred speech. What should the nurse do first?",
    choices: [
        "Activate the rapid response or stroke response immediately",
        "Reassess the client in 30 minutes",
        "Administer the next scheduled beta blocker",
        "Encourage the client to rest quietly"
    ],
    answer:
        "Activate the rapid response or stroke response immediately",
    rationale:
        "The findings are consistent with an acute stroke. The lecture emphasizes FAST recognition and immediate emergency response.",
    takeaway:
        "A-fib + FAST symptoms = stroke emergency."
},

{
    id: "ATRIAL-009",
    caseId: "ATRIAL-CASE-009",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which findings are included in the FAST stroke assessment taught for clients with atrial fibrillation? Select all that apply.",
    choices: [
        "Face drooping",
        "Arm weakness",
        "Speech difficulty",
        "Time to call 911",
        "Abdominal pain",
        "Leg edema"
    ],
    answer: [
        "Face drooping",
        "Arm weakness",
        "Speech difficulty",
        "Time to call 911"
    ],
    rationale:
        "FAST stands for Face drooping, Arm weakness, Speech difficulty, and Time to call emergency services.",
    takeaway:
        "FAST = Face, Arm, Speech, Time."
},

{
    id: "ATRIAL-010",
    caseId: "ATRIAL-CASE-010",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication may be used for ventricular rate control in a client with atrial fibrillation?",
    choices: [
        "Diltiazem",
        "Atropine",
        "Adenosine only",
        "Magnesium sulfate only"
    ],
    answer:
        "Diltiazem",
    rationale:
        "The lecture lists diltiazem, verapamil, beta blockers, and digoxin as medications used for rate control in atrial fibrillation.",
    takeaway:
        "A-fib rate control commonly uses BBs, non-DHP CCBs, or digoxin."
},

{
    id: "ATRIAL-011",
    caseId: "ATRIAL-CASE-011",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications are identified in the lecture as options for rate control in atrial fibrillation? Select all that apply.",
    choices: [
        "Digoxin",
        "Metoprolol",
        "Diltiazem",
        "Verapamil",
        "Magnesium sulfate",
        "Atropine"
    ],
    answer: [
        "Digoxin",
        "Metoprolol",
        "Diltiazem",
        "Verapamil"
    ],
    rationale:
        "The lecture identifies digoxin, beta blockers such as metoprolol, and non-dihydropyridine calcium channel blockers such as diltiazem and verapamil for ventricular rate control.",
    takeaway:
        "Rate control = digoxin, beta blocker, or non-DHP CCB."
},

{
    id: "ATRIAL-012",
    caseId: "ATRIAL-CASE-012",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "What is the primary purpose of anticoagulation therapy in atrial fibrillation?",
    choices: [
        "Reduce the risk of thromboembolic stroke",
        "Increase the heart rate",
        "Convert the rhythm immediately to normal sinus rhythm",
        "Increase ventricular contractility"
    ],
    answer:
        "Reduce the risk of thromboembolic stroke",
    rationale:
        "Anticoagulants reduce the risk of clot formation and embolic stroke associated with blood pooling in the atria.",
    takeaway:
        "Anticoagulation protects against A-fib's biggest complication: stroke."
},

{
    id: "ATRIAL-013",
    caseId: "ATRIAL-CASE-013",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which INR range does the lecture identify as therapeutic for a client receiving warfarin for atrial fibrillation?",
    choices: [
        "2 to 3",
        "0.5 to 1",
        "4 to 6",
        "6 to 8"
    ],
    answer:
        "2 to 3",
    rationale:
        "The lecture identifies an INR goal of 2 to 3 for warfarin therapy in atrial fibrillation.",
    takeaway:
        "Warfarin for A-fib: INR 2–3."
},

{
    id: "ATRIAL-014",
    caseId: "ATRIAL-CASE-014",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medications listed in the lecture are direct oral anticoagulants (DOACs)? Select all that apply.",
    choices: [
        "Dabigatran",
        "Rivaroxaban",
        "Apixaban",
        "Warfarin",
        "Metoprolol"
    ],
    answer: [
        "Dabigatran",
        "Rivaroxaban",
        "Apixaban"
    ],
    rationale:
        "The PPT identifies dabigatran, rivaroxaban, and apixaban as DOAC options. Warfarin is a vitamin K antagonist and metoprolol is a beta blocker.",
    takeaway:
        "DOACs include dabigatran, rivaroxaban, and apixaban."
},

{
    id: "ATRIAL-015",
    caseId: "ATRIAL-CASE-015",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client taking apixaban asks when the INR should be checked. Which response is most accurate based on the lecture?",
    choices: [
        "Routine INR monitoring is not required for DOAC therapy",
        "The INR should be checked every day",
        "The INR must remain between 4 and 6",
        "The INR is checked only before each meal"
    ],
    answer:
        "Routine INR monitoring is not required for DOAC therapy",
    rationale:
        "The lecture emphasizes that DOACs do not require routine INR monitoring, unlike warfarin.",
    takeaway:
        "Warfarin requires INR; DOACs do not."
},

{
    id: "ATRIAL-016",
    caseId: "ATRIAL-CASE-016",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation has HR 168/min, BP 78/44 mm Hg, chest pain, and altered level of consciousness. Which intervention should the nurse anticipate?",
    choices: [
        "Urgent synchronized cardioversion",
        "Routine follow-up next week",
        "No treatment because A-fib is common",
        "Transcutaneous pacing for bradycardia"
    ],
    answer:
        "Urgent synchronized cardioversion",
    rationale:
        "The lecture identifies urgent cardioversion as appropriate when atrial fibrillation causes hemodynamic instability.",
    takeaway:
        "Unstable A-fib = synchronized cardioversion."
},

{
    id: "ATRIAL-017",
    caseId: "ATRIAL-CASE-017",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why is it important to determine whether atrial fibrillation is new onset or chronic?",
    choices: [
        "Duration affects treatment decisions, especially cardioversion and anticoagulation",
        "Only chronic A-fib can cause stroke",
        "Only new-onset A-fib requires assessment",
        "The duration determines whether P waves will appear"
    ],
    answer:
        "Duration affects treatment decisions, especially cardioversion and anticoagulation",
    rationale:
        "The lecture emphasizes determining whether A-fib is new or chronic because this information guides the treatment plan, including anticoagulation and rhythm conversion decisions.",
    takeaway:
        "With A-fib, onset matters."
},

{
    id: "ATRIAL-018",
    caseId: "ATRIAL-CASE-018",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG pattern is most characteristic of atrial flutter?",
    choices: [
        "Sawtooth flutter waves",
        "Irregularly irregular baseline with no atrial activity",
        "Wide bizarre QRS complexes",
        "Flat line with no electrical activity"
    ],
    answer:
        "Sawtooth flutter waves",
    rationale:
        "Atrial flutter is characterized by rapid atrial depolarizations producing classic sawtooth flutter waves.",
    takeaway:
        "A-flutter = sawtooth."
},

{
    id: "ATRIAL-019",
    caseId: "ATRIAL-CASE-019",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What atrial rate is associated with atrial flutter according to the lecture?",
    choices: [
        "250 to 350 beats/min",
        "40 to 60 beats/min",
        "60 to 100 beats/min",
        "100 to 120 beats/min"
    ],
    answer:
        "250 to 350 beats/min",
    rationale:
        "The lecture identifies an atrial rate of approximately 250 to 350 beats/min in atrial flutter.",
    takeaway:
        "Atrial flutter atrial rate = 250–350."
},

{
    id: "ATRIAL-020",
    caseId: "ATRIAL-CASE-020",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Why is the ventricular rate usually slower than the atrial rate in atrial flutter?",
    choices: [
        "The AV node blocks some atrial impulses from reaching the ventricles",
        "The SA node eliminates most flutter waves",
        "The ventricles stop conducting all impulses",
        "The Purkinje fibers increase atrial conduction"
    ],
    answer:
        "The AV node blocks some atrial impulses from reaching the ventricles",
    rationale:
        "The AV node acts as a gatekeeper and allows only some of the very rapid atrial impulses to conduct to the ventricles.",
    takeaway:
        "In flutter, the AV node protects the ventricles from every atrial impulse."
},

{
    id: "ATRIAL-021",
    caseId: "ATRIAL-CASE-021",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions are listed as possible causes of atrial flutter? Select all that apply.",
    choices: [
        "Acute myocardial infarction",
        "Severe mitral valve disease",
        "Thyrotoxicosis",
        "COPD",
        "Digoxin toxicity",
        "Postoperative cardiac changes"
    ],
    answer: [
        "Acute myocardial infarction",
        "Severe mitral valve disease",
        "Thyrotoxicosis",
        "COPD",
        "Digoxin toxicity",
        "Postoperative cardiac changes"
    ],
    rationale:
        "The lecture lists MI, severe mitral valve disease, thyrotoxicosis, COPD, digoxin toxicity, and postoperative states as causes of atrial flutter.",
    takeaway:
        "Atrial flutter can reflect structural, ischemic, pulmonary, endocrine, medication, or postoperative causes."
},

{
    id: "ATRIAL-022",
    caseId: "ATRIAL-CASE-022",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication may be used for ventricular rate control in atrial flutter?",
    choices: [
        "Metoprolol",
        "Atropine",
        "Epinephrine for routine rate control",
        "Magnesium sulfate as the primary rate-control drug"
    ],
    answer:
        "Metoprolol",
    rationale:
        "The lecture lists beta blockers, calcium channel blockers, and digoxin as options for ventricular rate control in atrial flutter.",
    takeaway:
        "Flutter rate control is similar to A-fib rate control."
},

{
    id: "ATRIAL-023",
    caseId: "ATRIAL-CASE-023",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial flutter becomes hypotensive, dizzy, and reports chest pain. Which intervention should the nurse anticipate?",
    choices: [
        "Synchronized cardioversion",
        "No intervention because flutter is never unstable",
        "Immediate defibrillation without assessing the rhythm",
        "Atropine for tachycardia"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "The lecture identifies synchronized cardioversion when rate control fails or when the client becomes hemodynamically unstable.",
    takeaway:
        "Unstable atrial flutter = synchronized cardioversion."
},

{
    id: "ATRIAL-024",
    caseId: "ATRIAL-CASE-024",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which nursing actions are appropriate for a client with atrial flutter? Select all that apply.",
    choices: [
        "Monitor heart rate and rhythm continuously.",
        "Assess for hypotension and dizziness.",
        "Assess for chest pain and syncope.",
        "Monitor for conversion to atrial fibrillation or sinus rhythm.",
        "Consider stroke risk and anticoagulation.",
        "Ignore ventricular rate because only the atrial rate matters."
    ],
    answer: [
        "Monitor heart rate and rhythm continuously.",
        "Assess for hypotension and dizziness.",
        "Assess for chest pain and syncope.",
        "Monitor for conversion to atrial fibrillation or sinus rhythm.",
        "Consider stroke risk and anticoagulation."
    ],
    rationale:
        "The PPT emphasizes continuous monitoring, assessment for decreased cardiac output, observation for rhythm conversion, and anticoagulation because atrial flutter also carries thromboembolic risk.",
    takeaway:
        "Flutter requires rhythm monitoring, perfusion assessment, and stroke prevention."
},

{
    id: "ATRIAL-025",
    caseId: "ATRIAL-CASE-025",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The nurse is preparing to administer a rate-control medication to a client with atrial flutter. The client's heart rate is 54 beats/min. Which action is most appropriate according to the lecture?",
    choices: [
        "Hold the rate-control medication and notify the provider",
        "Administer the medication because flutter is always tachycardic",
        "Double the dose",
        "Administer adenosine instead"
    ],
    answer:
        "Hold the rate-control medication and notify the provider",
    rationale:
        "The lecture instructs the nurse to hold rate-control medications when the heart rate is below 60 beats/min and notify the provider.",
    takeaway:
        "Rate-control drug + HR <60 = hold and notify."
},
{
    id: "ATRIAL-026",
    caseId: "ATRIAL-CASE-026",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which ECG finding is most consistent with supraventricular tachycardia (SVT)?",
    choices: [
        "Rate 150 to 250 beats/min with narrow QRS complexes and P waves hidden in the T wave or QRS",
        "Rate below 60 beats/min with upright P waves",
        "Irregularly irregular rhythm with absent P waves",
        "Wide bizarre QRS complexes with no pulse"
    ],
    answer:
        "Rate 150 to 250 beats/min with narrow QRS complexes and P waves hidden in the T wave or QRS",
    rationale:
        "The lecture describes SVT as a rapid supraventricular rhythm with a rate of 150 to 250 or more beats/min, narrow QRS complexes, and P waves that may be hidden.",
    takeaway:
        "SVT = sudden, very fast, narrow-complex rhythm."
},

{
    id: "ATRIAL-027",
    caseId: "ATRIAL-CASE-027",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are associated with SVT? Select all that apply.",
    choices: [
        "Heart rate 150 to 250 beats/min",
        "Sudden onset and termination",
        "Narrow QRS complexes",
        "P waves may be hidden",
        "Dizziness or syncope",
        "Persistent wide QRS complexes as the defining feature"
    ],
    answer: [
        "Heart rate 150 to 250 beats/min",
        "Sudden onset and termination",
        "Narrow QRS complexes",
        "P waves may be hidden",
        "Dizziness or syncope"
    ],
    rationale:
        "The lecture identifies rapid rate, sudden onset/offset, narrow QRS complexes, hidden P waves, dizziness, syncope, hypotension, dyspnea, and palpitations as SVT features.",
    takeaway:
        "SVT is sudden, fast, narrow, and can reduce perfusion."
},

{
    id: "ATRIAL-028",
    caseId: "ATRIAL-CASE-028",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which factors can contribute to SVT according to the lecture? Select all that apply.",
    choices: [
        "Accessory pathways",
        "Stimulant use",
        "Stress or fatigue",
        "Hyperthyroidism",
        "Postoperative cardiac changes",
        "Normal resting sinus rhythm"
    ],
    answer: [
        "Accessory pathways",
        "Stimulant use",
        "Stress or fatigue",
        "Hyperthyroidism",
        "Postoperative cardiac changes"
    ],
    rationale:
        "The PPT lists accessory pathways, stimulants, stress, fatigue, hyperthyroidism, and postoperative cardiac changes as causes of SVT.",
    takeaway:
        "SVT often has a trigger or reentrant pathway."
},

{
    id: "ATRIAL-029",
    caseId: "ATRIAL-CASE-029",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has SVT at 188 beats/min. The client is awake, BP 118/72 mm Hg, and denies chest pain. Which intervention should the nurse anticipate first?",
    choices: [
        "Vagal maneuvers",
        "Immediate defibrillation",
        "Atropine",
        "Transcutaneous pacing"
    ],
    answer:
        "Vagal maneuvers",
    rationale:
        "For stable SVT, the lecture identifies vagal maneuvers as the initial intervention before adenosine.",
    takeaway:
        "Stable SVT: vagal maneuvers first."
},

{
    id: "ATRIAL-030",
    caseId: "ATRIAL-CASE-030",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A stable client with SVT does not respond to vagal maneuvers. Which medication should the nurse anticipate administering next?",
    choices: [
        "Adenosine",
        "Atropine",
        "Digoxin immune Fab",
        "Magnesium sulfate"
    ],
    answer:
        "Adenosine",
    rationale:
        "The lecture identifies adenosine as the first-line medication for stable SVT when vagal maneuvers are unsuccessful.",
    takeaway:
        "Stable SVT: vagal maneuvers → adenosine."
},

{
    id: "ATRIAL-031",
    caseId: "ATRIAL-CASE-031",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which prescription should the nurse recognize as the initial adenosine dose for SVT according to the lecture?",
    choices: [
        "6 mg rapid IV push followed by a 20 mL normal saline flush",
        "1 mg slow IV push",
        "300 mg IV push",
        "2 g IV over one hour"
    ],
    answer:
        "6 mg rapid IV push followed by a 20 mL normal saline flush",
    rationale:
        "The lecture teaches an initial adenosine dose of 6 mg given rapidly IV, immediately followed by a rapid saline flush.",
    takeaway:
        "Adenosine: 6 mg RAPID push + flush."
},

{
    id: "ATRIAL-032",
    caseId: "ATRIAL-CASE-032",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The first dose of adenosine does not terminate the client's SVT. Which dose does the lecture identify as the next dose?",
    choices: [
        "12 mg rapid IV push followed by a rapid flush",
        "24 mg slow IV infusion",
        "1 mg IV push",
        "150 mg IV push"
    ],
    answer:
        "12 mg rapid IV push followed by a rapid flush",
    rationale:
        "If the initial 6 mg dose does not terminate SVT, the lecture identifies a second dose of 12 mg rapid IV push followed by a saline flush.",
    takeaway:
        "Adenosine sequence: 6 mg → 12 mg."
},

{
    id: "ATRIAL-033",
    caseId: "ATRIAL-CASE-033",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Why must adenosine be administered rapidly?",
    choices: [
        "It has an extremely short half-life",
        "It causes severe hypertension if given slowly",
        "It must reach the kidneys before the heart",
        "It requires prolonged absorption from the bloodstream"
    ],
    answer:
        "It has an extremely short half-life",
    rationale:
        "The lecture emphasizes that adenosine has a half-life of only several seconds, so it must be given as a rapid IV push with an immediate flush.",
    takeaway:
        "Adenosine works fast and disappears fast."
},

{
    id: "ATRIAL-034",
    caseId: "ATRIAL-CASE-034",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which information should the nurse provide before administering adenosine?",
    choices: [
        "You may briefly feel flushing or chest discomfort, and a short pause in the heartbeat may occur.",
        "The medication will permanently stop your heart.",
        "You should expect the medication to work gradually over several hours.",
        "You will not experience any noticeable effects."
    ],
    answer:
        "You may briefly feel flushing or chest discomfort, and a short pause in the heartbeat may occur.",
    rationale:
        "The lecture instructs nurses to warn clients that transient asystole, flushing, and chest discomfort may occur briefly with adenosine.",
    takeaway:
        "Warn the patient before adenosine—the pause is brief and expected."
},

{
    id: "ATRIAL-035",
    caseId: "ATRIAL-CASE-035",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which equipment should be immediately available when administering adenosine for SVT?",
    choices: [
        "Emergency resuscitation equipment",
        "Sequential compression devices only",
        "Urinary catheterization supplies",
        "Enteral feeding equipment"
    ],
    answer:
        "Emergency resuscitation equipment",
    rationale:
        "Because adenosine can cause a brief period of asystole, the lecture recommends having emergency equipment available during administration.",
    takeaway:
        "Adenosine administration requires close monitoring and emergency readiness."
},

{
    id: "ATRIAL-036",
    caseId: "ATRIAL-CASE-036",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with SVT has HR 210/min, BP 72/40 mm Hg, chest pain, and altered level of consciousness. Which intervention should the nurse anticipate?",
    choices: [
        "Synchronized cardioversion",
        "Routine vagal maneuvers only",
        "No treatment because the QRS is narrow",
        "Permanent pacemaker placement"
    ],
    answer:
        "Synchronized cardioversion",
    rationale:
        "The lecture identifies cardioversion for unstable SVT. Hypotension, chest pain, and altered mental status indicate hemodynamic instability.",
    takeaway:
        "Unstable SVT = synchronized cardioversion."
},

{
    id: "ATRIAL-037",
    caseId: "ATRIAL-CASE-037",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why can SVT produce hypotension and dizziness?",
    choices: [
        "The rapid rate reduces ventricular filling time and cardiac output",
        "The rapid rate increases filling time excessively",
        "The rhythm always stops ventricular contraction",
        "The atria become permanently unable to depolarize"
    ],
    answer:
        "The rapid rate reduces ventricular filling time and cardiac output",
    rationale:
        "Very rapid rates shorten diastole, reducing ventricular filling and potentially lowering cardiac output and tissue perfusion.",
    takeaway:
        "Very fast rate → less filling → less output."
},

{
    id: "ATRIAL-038",
    caseId: "ATRIAL-CASE-038",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Rhythm Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding best differentiates atrial fibrillation from atrial flutter?",
    choices: [
        "Atrial fibrillation is irregularly irregular, while atrial flutter has characteristic sawtooth waves",
        "Atrial fibrillation always has wide QRS complexes",
        "Atrial flutter has normal P waves before every QRS",
        "Atrial fibrillation has an atrial rate of exactly 300 beats/min"
    ],
    answer:
        "Atrial fibrillation is irregularly irregular, while atrial flutter has characteristic sawtooth waves",
    rationale:
        "A-fib is characterized by chaotic atrial activity and an irregularly irregular rhythm, while atrial flutter produces organized sawtooth flutter waves.",
    takeaway:
        "A-fib = chaos; flutter = sawtooth."
},

{
    id: "ATRIAL-039",
    caseId: "ATRIAL-CASE-039",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Rhythm Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding best differentiates a PAC from a PVC?",
    choices: [
        "A PAC has an early abnormal P wave, while a PVC has a wide premature QRS without a preceding P wave",
        "A PAC always causes cardiac arrest",
        "A PVC has a normal P wave before every QRS",
        "A PAC always produces a wide QRS complex"
    ],
    answer:
        "A PAC has an early abnormal P wave, while a PVC has a wide premature QRS without a preceding P wave",
    rationale:
        "PACs originate in the atria and typically produce an abnormal premature P wave. PVCs originate in the ventricles and produce wide premature QRS complexes.",
    takeaway:
        "PAC = abnormal early P; PVC = wide early QRS."
},

{
    id: "ATRIAL-040",
    caseId: "ATRIAL-CASE-040",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with atrial fibrillation should the nurse assess first?",
    choices: [
        "A client with new unilateral weakness and difficulty speaking",
        "A client requesting information about apixaban",
        "A client with controlled ventricular rate of 78/min and no symptoms",
        "A client asking whether caffeine should be limited"
    ],
    answer:
        "A client with new unilateral weakness and difficulty speaking",
    rationale:
        "Unilateral weakness and speech difficulty suggest an acute embolic stroke, a major complication of atrial fibrillation requiring immediate response.",
    takeaway:
        "A-fib + neurologic deficit = stroke until proven otherwise."
},

{
    id: "ATRIAL-041",
    caseId: "ATRIAL-CASE-041",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Anticoagulation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which teaching points are appropriate for a client taking anticoagulation for atrial fibrillation? Select all that apply.",
    choices: [
        "Report unusual bruising.",
        "Report bleeding gums.",
        "Report nosebleeds.",
        "Tell healthcare providers that you take an anticoagulant.",
        "Stop the medication independently if bruising occurs.",
        "Use measures to reduce bleeding risk."
    ],
    answer: [
        "Report unusual bruising.",
        "Report bleeding gums.",
        "Report nosebleeds.",
        "Tell healthcare providers that you take an anticoagulant.",
        "Use measures to reduce bleeding risk."
    ],
    rationale:
        "The lecture emphasizes bleeding precautions and immediate reporting of abnormal bleeding while taking anticoagulants.",
    takeaway:
        "Anticoagulation teaching centers on bleeding safety."
},

{
    id: "ATRIAL-042",
    caseId: "ATRIAL-CASE-042",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with chronic atrial fibrillation has a ventricular rate of 82/min, BP 126/76 mm Hg, and no symptoms. Which treatment goal is being met?",
    choices: [
        "Ventricular rate control",
        "Immediate defibrillation",
        "Treatment of symptomatic bradycardia",
        "Correction of ventricular fibrillation"
    ],
    answer:
        "Ventricular rate control",
    rationale:
        "A controlled ventricular rate below 100 beats/min with stable perfusion suggests the rate-control goal is being achieved.",
    takeaway:
        "A-fib does not always need immediate conversion; rate control can be the goal."
},

{
    id: "ATRIAL-043",
    caseId: "ATRIAL-CASE-043",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation has a ventricular rate of 142/min. Which description best applies?",
    choices: [
        "Atrial fibrillation with rapid ventricular response",
        "Controlled atrial fibrillation",
        "Sinus bradycardia",
        "Normal sinus rhythm"
    ],
    answer:
        "Atrial fibrillation with rapid ventricular response",
    rationale:
        "The lecture describes atrial fibrillation with a ventricular rate greater than 100 beats/min as uncontrolled or rapid ventricular response.",
    takeaway:
        "A-fib + ventricular rate >100 = RVR."
},

{
    id: "ATRIAL-044",
    caseId: "ATRIAL-CASE-044",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with SVT at 200/min, BP 76/42 mm Hg, and chest pain",
        "A client with occasional PACs after drinking coffee",
        "A client with controlled A-fib at 78/min awaiting discharge teaching",
        "A client with atrial flutter at 86/min and no symptoms"
    ],
    answer:
        "A client with SVT at 200/min, BP 76/42 mm Hg, and chest pain",
    rationale:
        "The client has a rapid rhythm with hypotension and chest pain, indicating hemodynamic instability and inadequate perfusion.",
    takeaway:
        "Always prioritize the unstable patient."
},

{
    id: "ATRIAL-045",
    caseId: "ATRIAL-CASE-045",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client requires the most immediate intervention?",
    choices: [
        "A client with atrial fibrillation who suddenly becomes confused and develops facial droop",
        "A client with atrial flutter requesting medication education",
        "A client with occasional PACs and no symptoms",
        "A stable client after successful conversion of SVT"
    ],
    answer:
        "A client with atrial fibrillation who suddenly becomes confused and develops facial droop",
    rationale:
        "Acute neurologic changes in a client with A-fib strongly suggest embolic stroke and require immediate intervention.",
    takeaway:
        "Stroke recognition outranks routine rhythm management."
},

{
    id: "ATRIAL-046",
    caseId: "ATRIAL-CASE-046",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which rhythm-treatment pairings are correct according to the lecture? Select all that apply.",
    choices: [
        "Stable SVT — vagal maneuvers then adenosine",
        "Unstable SVT — synchronized cardioversion",
        "A-fib — rate control and stroke prevention",
        "A-flutter — rate control and possible synchronized cardioversion",
        "PACs — identify and eliminate triggers",
        "A-fib — atropine is always first-line"
    ],
    answer: [
        "Stable SVT — vagal maneuvers then adenosine",
        "Unstable SVT — synchronized cardioversion",
        "A-fib — rate control and stroke prevention",
        "A-flutter — rate control and possible synchronized cardioversion",
        "PACs — identify and eliminate triggers"
    ],
    rationale:
        "These pairings align with the lecture's treatment priorities for atrial dysrhythmias.",
    takeaway:
        "Know not only the rhythm, but the treatment pathway."
},

{
    id: "ATRIAL-047",
    caseId: "ATRIAL-CASE-047",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has an irregularly irregular rhythm, no identifiable P waves, ventricular rate 148/min, BP 86/50 mm Hg, dizziness, and chest discomfort. Which interpretation is most appropriate?",
    choices: [
        "Atrial fibrillation with rapid ventricular response and hemodynamic instability",
        "Stable normal sinus rhythm",
        "Asymptomatic PACs",
        "Sinus arrhythmia"
    ],
    answer:
        "Atrial fibrillation with rapid ventricular response and hemodynamic instability",
    rationale:
        "The ECG findings identify A-fib with RVR, while hypotension, dizziness, and chest discomfort indicate poor perfusion and instability.",
    takeaway:
        "Identify the rhythm, rate, and stability."
},

{
    id: "ATRIAL-048",
    caseId: "ATRIAL-CASE-048",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops sudden palpitations. ECG shows a regular narrow-complex rhythm at 190/min with P waves hidden in the QRS complexes. BP is 122/74 mm Hg and the client is alert. Which action should the nurse anticipate first?",
    choices: [
        "Attempt prescribed vagal maneuvers",
        "Begin defibrillation",
        "Administer atropine",
        "Begin chest compressions"
    ],
    answer:
        "Attempt prescribed vagal maneuvers",
    rationale:
        "The rhythm is consistent with stable SVT. The lecture identifies vagal maneuvers as the initial intervention.",
    takeaway:
        "Stable narrow-complex SVT → vagal maneuvers."
},

{
    id: "ATRIAL-049",
    caseId: "ATRIAL-CASE-049",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The same client's SVT persists after vagal maneuvers. The client remains stable. Which intervention should the nurse prepare for next?",
    choices: [
        "Adenosine 6 mg rapid IV push followed immediately by a saline flush",
        "Atropine 1 mg IV",
        "Magnesium sulfate",
        "Unsynchronized defibrillation"
    ],
    answer:
        "Adenosine 6 mg rapid IV push followed immediately by a saline flush",
    rationale:
        "For persistent stable SVT after vagal maneuvers, the lecture identifies adenosine 6 mg rapid IV push with a rapid flush as the next intervention.",
    takeaway:
        "Stable SVT pathway: vagal maneuvers → adenosine."
},

{
    id: "ATRIAL-050",
    caseId: "ATRIAL-CASE-050",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation is preparing for discharge on anticoagulation and rate-control therapy. Which client statement requires further teaching?",
    choices: [
        "If I notice blood in my urine, I can wait until my next appointment to mention it.",
        "I should report unusual bruising or bleeding.",
        "I need to take my medications as prescribed.",
        "I should seek emergency help if I develop facial drooping or speech difficulty."
    ],
    answer:
        "If I notice blood in my urine, I can wait until my next appointment to mention it.",
    rationale:
        "The lecture emphasizes immediately reporting abnormal bleeding while taking anticoagulants. Hematuria should not be ignored.",
    takeaway:
        "A-fib discharge teaching = medication adherence + bleeding safety + stroke recognition."
},

{
    id: "ATRIAL-051",
    caseId: "ATRIAL-CASE-051",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which medication listed in the lecture may be used for rhythm control in atrial fibrillation?",
    choices: [
        "Amiodarone",
        "Atropine",
        "Magnesium sulfate only",
        "Epinephrine"
    ],
    answer:
        "Amiodarone",
    rationale:
        "The lecture identifies amiodarone and dronedarone as antiarrhythmic medications used for rhythm control in atrial fibrillation.",
    takeaway:
        "A-fib rhythm control may include amiodarone."
},

{
    id: "ATRIAL-052",
    caseId: "ATRIAL-CASE-052",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation is scheduled for elective cardioversion. Which issue is especially important to verify before the procedure?",
    choices: [
        "Anticoagulation status",
        "Whether the client ate a low-fat breakfast",
        "Whether the client has sinus arrhythmia",
        "Whether the client has a urinary catheter"
    ],
    answer:
        "Anticoagulation status",
    rationale:
        "The lecture emphasizes anticoagulation before planned cardioversion because restoring coordinated atrial contraction can dislodge an existing thrombus and increase stroke risk.",
    takeaway:
        "Planned cardioversion in A-fib requires attention to anticoagulation."
},

{
    id: "ATRIAL-053",
    caseId: "ATRIAL-CASE-053",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions are listed in the lecture as risk factors or causes of atrial fibrillation? Select all that apply.",
    choices: [
        "Hypertension",
        "Coronary artery disease",
        "Cardiomyopathy",
        "Valvular heart disease",
        "Hyperthyroidism",
        "Obesity",
        "Chronic kidney disease"
    ],
    answer: [
        "Hypertension",
        "Coronary artery disease",
        "Cardiomyopathy",
        "Valvular heart disease",
        "Hyperthyroidism",
        "Obesity",
        "Chronic kidney disease"
    ],
    rationale:
        "The lecture lists hypertension, CAD, cardiomyopathy, valvular disease, hyperthyroidism, obesity, diabetes, CKD, age-related conduction changes, pericarditis, and postoperative cardiac procedures as causes or risk factors for A-fib.",
    takeaway:
        "A-fib commonly occurs with structural, metabolic, vascular, and age-related cardiac changes."
},

{
    id: "ATRIAL-054",
    caseId: "ATRIAL-CASE-054",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Fibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation develops sudden severe shortness of breath and pleuritic chest pain. Which complication should the nurse consider?",
    choices: [
        "Pulmonary embolism",
        "Sinus arrhythmia",
        "Expected effect of rate control",
        "Normal anticoagulation response"
    ],
    answer:
        "Pulmonary embolism",
    rationale:
        "The lecture notes that thrombus formation in atrial fibrillation can result in embolic complications, including pulmonary embolism and stroke.",
    takeaway:
        "A-fib can create emboli that travel beyond the brain."
},

{
    id: "ATRIAL-055",
    caseId: "ATRIAL-CASE-055",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The ECG shows repetitive sawtooth waves with an atrial rate of 300 beats/min. Which rhythm should the nurse identify?",
    choices: [
        "Atrial flutter",
        "Atrial fibrillation",
        "Sinus tachycardia",
        "Ventricular fibrillation"
    ],
    answer:
        "Atrial flutter",
    rationale:
        "Atrial flutter produces organized flutter waves with a characteristic sawtooth appearance and atrial rates around 250 to 350 beats/min.",
    takeaway:
        "Sawtooth + atrial rate 250–350 = atrial flutter."
},

{
    id: "ATRIAL-056",
    caseId: "ATRIAL-CASE-056",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial flutter has a ventricular rate of 160 beats/min, dizziness, and hypotension. Which interpretation is most appropriate?",
    choices: [
        "The rapid ventricular response is decreasing cardiac output",
        "The client is stable because flutter waves are organized",
        "The ventricular rate is unrelated to symptoms",
        "The AV node is completely blocking all impulses"
    ],
    answer:
        "The rapid ventricular response is decreasing cardiac output",
    rationale:
        "A rapid ventricular response reduces filling time and can produce hypotension, dizziness, syncope, and chest pain from decreased cardiac output.",
    takeaway:
        "In atrial flutter, ventricular response determines perfusion."
},

{
    id: "ATRIAL-057",
    caseId: "ATRIAL-CASE-057",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Atrial Flutter",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which procedure may be considered for recurrent or refractory atrial flutter according to the lecture?",
    choices: [
        "Radiofrequency ablation",
        "Permanent defibrillation of every rhythm",
        "Transcutaneous pacing only",
        "Routine chest compressions"
    ],
    answer:
        "Radiofrequency ablation",
    rationale:
        "The lecture identifies radiofrequency ablation as an option for recurrent or refractory atrial flutter by destroying the reentrant pathway.",
    takeaway:
        "Recurrent atrial flutter may be treated with ablation."
},

{
    id: "ATRIAL-058",
    caseId: "ATRIAL-CASE-058",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm begins suddenly at 184 beats/min and terminates abruptly several minutes later. The QRS complexes are narrow. Which rhythm is most consistent with these findings?",
    choices: [
        "Supraventricular tachycardia",
        "Sinus tachycardia",
        "Sinus bradycardia",
        "Ventricular fibrillation"
    ],
    answer:
        "Supraventricular tachycardia",
    rationale:
        "The lecture describes SVT as having sudden onset and offset, a rapid rate of about 150 to 250 beats/min, and narrow QRS complexes.",
    takeaway:
        "Sudden on/sudden off + narrow + very fast = SVT."
},

{
    id: "ATRIAL-059",
    caseId: "ATRIAL-CASE-059",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Supraventricular Tachycardia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which symptoms may occur with SVT according to the lecture? Select all that apply.",
    choices: [
        "Dizziness",
        "Lightheadedness",
        "Syncope",
        "Hypotension",
        "Shortness of breath",
        "Palpitations"
    ],
    answer: [
        "Dizziness",
        "Lightheadedness",
        "Syncope",
        "Hypotension",
        "Shortness of breath",
        "Palpitations"
    ],
    rationale:
        "The lecture lists dizziness, lightheadedness, syncopal episodes, hypotension, shortness of breath, and palpitations as common symptoms of SVT.",
    takeaway:
        "SVT symptoms reflect decreased filling and reduced perfusion."
},

{
    id: "ATRIAL-060",
    caseId: "ATRIAL-CASE-060",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which IV site is preferred when administering adenosine?",
    choices: [
        "A site as close to the heart as possible",
        "The most distal IV site available",
        "A subcutaneous injection site",
        "An intramuscular injection site"
    ],
    answer:
        "A site as close to the heart as possible",
    rationale:
        "Because adenosine has an extremely short half-life, the lecture recommends using an IV port close to the heart and immediately flushing the medication.",
    takeaway:
        "Adenosine: rapid push, rapid flush, proximal IV."
},

{
    id: "ATRIAL-061",
    caseId: "ATRIAL-CASE-061",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Adenosine",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "The nurse administers adenosine and briefly observes asystole on the monitor. The client then returns to a perfusing rhythm. How should the nurse interpret this finding?",
    choices: [
        "A brief pause can be an expected effect of adenosine",
        "The medication has permanently damaged the heart",
        "The client requires immediate permanent pacing",
        "The drug was administered too slowly"
    ],
    answer:
        "A brief pause can be an expected effect of adenosine",
    rationale:
        "The lecture specifically warns that a brief period of asystole can occur after adenosine and that the client should be prepared for this transient effect.",
    takeaway:
        "Brief asystole after adenosine can be expected."
},

{
    id: "ATRIAL-062",
    caseId: "ATRIAL-CASE-062",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Rhythm Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which features are characteristic of atrial dysrhythmias in this lecture? Select all that apply.",
    choices: [
        "They originate above the ventricles.",
        "P waves may be abnormal, absent, or replaced by flutter waves.",
        "QRS complexes are usually narrow.",
        "They can produce reduced cardiac output.",
        "Every atrial dysrhythmia requires defibrillation.",
        "Atrial fibrillation carries a stroke risk."
    ],
    answer: [
        "They originate above the ventricles.",
        "P waves may be abnormal, absent, or replaced by flutter waves.",
        "QRS complexes are usually narrow.",
        "They can produce reduced cardiac output.",
        "Atrial fibrillation carries a stroke risk."
    ],
    rationale:
        "The lecture summarizes atrial rhythms as supraventricular rhythms with abnormal atrial activity and usually narrow QRS complexes. Their clinical significance varies, and A-fib has a major thromboembolic risk.",
    takeaway:
        "Atrial rhythms change atrial activity; the QRS is usually narrow."
},

{
    id: "ATRIAL-063",
    caseId: "ATRIAL-CASE-063",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with atrial flutter at 170/min who has BP 74/40 mm Hg and syncope",
        "A client with occasional PACs related to caffeine",
        "A client with chronic controlled A-fib at 82/min",
        "A client after successful SVT conversion who is asymptomatic"
    ],
    answer:
        "A client with atrial flutter at 170/min who has BP 74/40 mm Hg and syncope",
    rationale:
        "Severe hypotension and syncope indicate hemodynamic instability and inadequate perfusion requiring immediate intervention.",
    takeaway:
        "The unstable patient always comes first."
},

{
    id: "ATRIAL-064",
    caseId: "ATRIAL-CASE-064",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client presents with palpitations. ECG shows an irregularly irregular rhythm, no identifiable P waves, and ventricular rate 136/min. The client is alert with BP 118/70 mm Hg. Which initial treatment goal should the nurse anticipate?",
    choices: [
        "Control the ventricular rate and evaluate stroke-prevention needs",
        "Begin chest compressions immediately",
        "Administer atropine for symptomatic bradycardia",
        "Defibrillate because all A-fib is lethal"
    ],
    answer:
        "Control the ventricular rate and evaluate stroke-prevention needs",
    rationale:
        "The rhythm is atrial fibrillation with rapid ventricular response. Because the client is currently stable, the lecture emphasizes rate control and anticoagulation/stroke prevention rather than emergency cardioversion.",
    takeaway:
        "Stable A-fib: rate control + stroke prevention."
},

{
    id: "ATRIAL-065",
    caseId: "ATRIAL-CASE-065",
    patient: randomPatient(),
    topic: "Atrial Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is reviewing four rhythm findings. Which rhythm-treatment pairing requires correction?",
    choices: [
        "Atrial fibrillation with stroke risk — administer atropine as the primary treatment",
        "Stable SVT — vagal maneuvers followed by adenosine if needed",
        "Unstable atrial flutter — synchronized cardioversion may be required",
        "PACs related to stimulants — reduce the underlying trigger"
    ],
    answer:
        "Atrial fibrillation with stroke risk — administer atropine as the primary treatment",
    rationale:
        "Atropine is used for symptomatic bradycardia, not as primary therapy for atrial fibrillation. A-fib management focuses on ventricular rate or rhythm control and thromboembolic prevention.",
    takeaway:
        "Match the medication to the rhythm: atropine is for symptomatic bradycardia."
},

];
const junctionalRhythmQuestions = [

{
    id: "JUNC-001",
    caseId: "JUNC-CASE-001",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Origin",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Where do junctional rhythms originate?",
    choices: [
        "AV node area",
        "SA node",
        "Purkinje fibers only",
        "Left ventricular myocardium"
    ],
    answer:
        "AV node area",
    rationale:
        "The lecture identifies junctional rhythms as originating from the AV node or AV junctional area.",
    takeaway:
        "Junctional rhythm = AV-node origin."
},

{
    id: "JUNC-002",
    caseId: "JUNC-CASE-002",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Intrinsic Rate",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the expected intrinsic rate of a junctional rhythm?",
    choices: [
        "40 to 60 beats/min",
        "60 to 100 beats/min",
        "20 to 40 beats/min",
        "150 to 250 beats/min"
    ],
    answer:
        "40 to 60 beats/min",
    rationale:
        "The AV junction has an intrinsic pacing rate of 40 to 60 beats/min.",
    takeaway:
        "Junctional rhythm = 40–60 beats/min."
},

{
    id: "JUNC-003",
    caseId: "JUNC-CASE-003",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "P Waves",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which P-wave finding is most characteristic of a junctional rhythm?",
    choices: [
        "P wave may be inverted, absent, or appear after the QRS",
        "Upright P wave before every QRS",
        "Sawtooth flutter waves",
        "No atrial activity with a chaotic baseline"
    ],
    answer:
        "P wave may be inverted, absent, or appear after the QRS",
    rationale:
        "Because the impulse originates near the AV node and can travel backward toward the atria, the P wave may be inverted, buried in the QRS, or occur after the QRS.",
    takeaway:
        "Junctional = retrograde P wave: inverted, absent, or after QRS."
},

{
    id: "JUNC-004",
    caseId: "JUNC-CASE-004",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Retrograde Conduction",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Why can the P wave appear inverted in a junctional rhythm?",
    choices: [
        "The impulse travels backward toward the atria",
        "The SA node fires faster than normal",
        "The ventricles repolarize before depolarization",
        "The QRS complex blocks all atrial activity"
    ],
    answer:
        "The impulse travels backward toward the atria",
    rationale:
        "Junctional impulses can travel retrograde from the AV junction toward the atria, creating an inverted P wave.",
    takeaway:
        "Retrograde conduction explains the abnormal P-wave position."
},

{
    id: "JUNC-005",
    caseId: "JUNC-CASE-005",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Recognition",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm strip shows a regular rate of 48 beats/min with narrow QRS complexes and no visible P waves. Which rhythm is most consistent with these findings?",
    choices: [
        "Junctional rhythm",
        "Normal sinus rhythm",
        "Sinus tachycardia",
        "Atrial flutter"
    ],
    answer:
        "Junctional rhythm",
    rationale:
        "A junctional rhythm commonly has a rate of 40 to 60 beats/min, narrow QRS complexes, and absent or retrograde P waves.",
    takeaway:
        "40–60 + narrow QRS + absent/inverted P = junctional."
},

{
    id: "JUNC-006",
    caseId: "JUNC-CASE-006",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Accelerated Junctional Rhythm",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "What rate is associated with accelerated junctional rhythm according to the lecture?",
    choices: [
        "60 to 100 beats/min",
        "40 to 60 beats/min",
        "20 to 40 beats/min",
        "150 to 250 beats/min"
    ],
    answer:
        "60 to 100 beats/min",
    rationale:
        "The PPT identifies accelerated junctional rhythm as a junctional rhythm with a rate of 60 to 100 beats/min.",
    takeaway:
        "Accelerated junctional = 60–100."
},

{
    id: "JUNC-007",
    caseId: "JUNC-CASE-007",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Junctional Tachycardia",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Physiological Integrity",
    question:
        "Which heart rate is most consistent with junctional tachycardia?",
    choices: [
        "Greater than 100 beats/min",
        "40 to 60 beats/min",
        "20 to 40 beats/min",
        "60 to 80 beats/min only"
    ],
    answer:
        "Greater than 100 beats/min",
    rationale:
        "Junctional tachycardia is defined in the lecture as a junctional rhythm with a rate above 100 beats/min.",
    takeaway:
        "Junctional tachycardia = >100."
},

{
    id: "JUNC-008",
    caseId: "JUNC-CASE-008",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which rate classifications for junctional rhythms are correct? Select all that apply.",
    choices: [
        "Junctional rhythm: 40 to 60 beats/min",
        "Accelerated junctional rhythm: 60 to 100 beats/min",
        "Junctional tachycardia: greater than 100 beats/min",
        "Junctional rhythm: 100 to 150 beats/min",
        "Accelerated junctional rhythm: 20 to 40 beats/min"
    ],
    answer: [
        "Junctional rhythm: 40 to 60 beats/min",
        "Accelerated junctional rhythm: 60 to 100 beats/min",
        "Junctional tachycardia: greater than 100 beats/min"
    ],
    rationale:
        "The lecture separates junctional rhythms by rate: 40–60, 60–100, and greater than 100 beats/min.",
    takeaway:
        "Junctional family is classified mainly by rate."
},

{
    id: "JUNC-009",
    caseId: "JUNC-CASE-009",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Causes",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which conditions are listed in the lecture as causes of junctional rhythms? Select all that apply.",
    choices: [
        "Digoxin toxicity",
        "Acute myocardial infarction",
        "Inferior wall myocardial infarction",
        "Heart surgery",
        "Normal respiratory variation"
    ],
    answer: [
        "Digoxin toxicity",
        "Acute myocardial infarction",
        "Inferior wall myocardial infarction",
        "Heart surgery"
    ],
    rationale:
        "The PPT lists digoxin toxicity, acute or inferior wall MI, and heart surgery as causes of junctional rhythms.",
    takeaway:
        "Think digoxin toxicity, MI, or heart surgery when junctional rhythms appear."
},

{
    id: "JUNC-010",
    caseId: "JUNC-CASE-010",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Digoxin Toxicity",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client taking digoxin develops a new junctional rhythm. Which cause should the nurse consider?",
    choices: [
        "Digoxin toxicity",
        "Expected therapeutic effect",
        "Normal sinus variation",
        "Hyperventilation"
    ],
    answer:
        "Digoxin toxicity",
    rationale:
        "Digoxin toxicity is specifically identified in the lecture as a cause of junctional rhythms.",
    takeaway:
        "New junctional rhythm in a digoxin patient = investigate toxicity."
},

{
    id: "JUNC-011",
    caseId: "JUNC-CASE-011",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "What is the general treatment approach for a stable junctional rhythm?",
    choices: [
        "Treat based on symptoms and underlying cause",
        "Defibrillate every client immediately",
        "Administer adenosine to every client",
        "Begin chest compressions regardless of pulse"
    ],
    answer:
        "Treat based on symptoms and underlying cause",
    rationale:
        "The lecture states that most junctional rhythms do not require treatment unless symptoms are present or an underlying cause such as medication toxicity needs correction.",
    takeaway:
        "Stable junctional rhythm often means monitor and treat the cause."
},

{
    id: "JUNC-012",
    caseId: "JUNC-CASE-012",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Medication Toxicity",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A junctional rhythm is caused by medication toxicity. Which action is most consistent with the lecture?",
    choices: [
        "Stop the offending medication and treat or reverse the toxicity",
        "Increase the medication dose",
        "Ignore the rhythm if the QRS is narrow",
        "Administer another medication from the same class"
    ],
    answer:
        "Stop the offending medication and treat or reverse the toxicity",
    rationale:
        "The lecture instructs that when medication toxicity causes a junctional rhythm, the offending drug should be stopped and the toxicity treated or reversed.",
    takeaway:
        "Medication-induced junctional rhythm = stop and reverse the cause."
},

{
    id: "JUNC-013",
    caseId: "JUNC-CASE-013",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Clinical Significance",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has a junctional rhythm at 52 beats/min, BP 124/72 mm Hg, is alert, and denies symptoms. Which nursing action is most appropriate?",
    choices: [
        "Continue monitoring and assess for the underlying cause",
        "Immediately prepare for defibrillation",
        "Administer epinephrine for cardiac arrest",
        "Begin chest compressions"
    ],
    answer:
        "Continue monitoring and assess for the underlying cause",
    rationale:
        "Most junctional rhythms do not require treatment if the client is stable and asymptomatic. The underlying cause should still be evaluated.",
    takeaway:
        "Stable + asymptomatic junctional rhythm = monitor and investigate cause."
},

{
    id: "JUNC-014",
    caseId: "JUNC-CASE-014",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Clinical Significance",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with a junctional rhythm should the nurse assess first?",
    choices: [
        "A client with HR 42/min, BP 80/44 mm Hg, dizziness, and confusion",
        "A client with HR 54/min and no symptoms",
        "A client with accelerated junctional rhythm at 72/min and stable vital signs",
        "A postoperative client with junctional rhythm and no symptoms"
    ],
    answer:
        "A client with HR 42/min, BP 80/44 mm Hg, dizziness, and confusion",
    rationale:
        "Hypotension, dizziness, and confusion indicate decreased cardiac output and impaired cerebral perfusion.",
    takeaway:
        "Treat the patient's perfusion, not just the rhythm label."
},

{
    id: "JUNC-015",
    caseId: "JUNC-CASE-015",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Recognition",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm strip shows a regular rate of 72 beats/min, narrow QRS complexes, and inverted P waves immediately before each QRS. Which rhythm should the nurse suspect?",
    choices: [
        "Accelerated junctional rhythm",
        "Normal sinus rhythm",
        "Sinus bradycardia",
        "Atrial fibrillation"
    ],
    answer:
        "Accelerated junctional rhythm",
    rationale:
        "A junctional rhythm with a rate between 60 and 100 beats/min is classified as accelerated junctional rhythm. Inverted P waves support AV-junction origin.",
    takeaway:
        "Junctional features + rate 60–100 = accelerated junctional."
},

{
    id: "JUNC-016",
    caseId: "JUNC-CASE-016",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Recognition",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A rhythm strip shows a regular narrow-complex rhythm at 118 beats/min with inverted P waves. Which rhythm is most consistent with these findings?",
    choices: [
        "Junctional tachycardia",
        "Normal sinus rhythm",
        "Sinus bradycardia",
        "Ventricular fibrillation"
    ],
    answer:
        "Junctional tachycardia",
    rationale:
        "A junctional rhythm with a rate greater than 100 beats/min is junctional tachycardia. Inverted P waves support junctional origin.",
    takeaway:
        "Junctional features + >100 = junctional tachycardia."
},

{
    id: "JUNC-017",
    caseId: "JUNC-CASE-017",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "P Wave Position",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which P-wave patterns may be seen with a junctional rhythm? Select all that apply.",
    choices: [
        "Inverted P wave before QRS",
        "P wave buried in the QRS",
        "P wave occurring after QRS",
        "Normal upright P wave before every QRS as the defining feature",
        "Sawtooth flutter waves"
    ],
    answer: [
        "Inverted P wave before QRS",
        "P wave buried in the QRS",
        "P wave occurring after QRS"
    ],
    rationale:
        "Retrograde atrial conduction can make the P wave inverted, hidden within the QRS, or visible after the QRS.",
    takeaway:
        "Junctional P waves can be before, inside, or after the QRS—but they are abnormal."
},

{
    id: "JUNC-018",
    caseId: "JUNC-CASE-018",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding best differentiates a junctional rhythm from sinus bradycardia?",
    choices: [
        "Abnormal or absent P waves",
        "Heart rate below 60 beats/min",
        "Regular rhythm",
        "Narrow QRS complexes"
    ],
    answer:
        "Abnormal or absent P waves",
    rationale:
        "Both rhythms may be slow and regular with narrow QRS complexes. Sinus bradycardia has normal P waves before every QRS, while junctional rhythms have inverted, absent, or retrograde P waves.",
    takeaway:
        "Look at the P wave to separate sinus bradycardia from junctional rhythm."
},

{
    id: "JUNC-019",
    caseId: "JUNC-CASE-019",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding best differentiates junctional tachycardia from sinus tachycardia?",
    choices: [
        "Junctional tachycardia has inverted, absent, or retrograde P waves",
        "Only sinus tachycardia can exceed 100 beats/min",
        "Junctional tachycardia always has wide QRS complexes",
        "Sinus tachycardia has no P waves"
    ],
    answer:
        "Junctional tachycardia has inverted, absent, or retrograde P waves",
    rationale:
        "Both rhythms can have rates above 100 beats/min and narrow QRS complexes. P-wave morphology and position help identify the pacemaker origin.",
    takeaway:
        "Rate can look similar—P-wave origin separates the rhythms."
},

{
    id: "JUNC-020",
    caseId: "JUNC-CASE-020",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client taking digoxin develops a regular rhythm at 46 beats/min with narrow QRS complexes and inverted P waves after each QRS. The client reports nausea and weakness. Which interpretation is most appropriate?",
    choices: [
        "Junctional rhythm with possible digoxin toxicity",
        "Normal sinus rhythm",
        "Atrial flutter",
        "Ventricular tachycardia"
    ],
    answer:
        "Junctional rhythm with possible digoxin toxicity",
    rationale:
        "The rate and retrograde P waves identify a junctional rhythm, while digoxin use with new symptoms and rhythm change raises concern for toxicity.",
    takeaway:
        "Junctional rhythm + digoxin symptoms = investigate toxicity."
},

{
    id: "JUNC-021",
    caseId: "JUNC-CASE-021",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative cardiac client develops an accelerated junctional rhythm at 76 beats/min. BP is 128/74 mm Hg, oxygen saturation is 98%, and the client denies symptoms. Which action is most appropriate?",
    choices: [
        "Continue monitoring and evaluate the postoperative cause",
        "Immediately defibrillate",
        "Administer atropine for symptomatic bradycardia",
        "Begin CPR"
    ],
    answer:
        "Continue monitoring and evaluate the postoperative cause",
    rationale:
        "Heart surgery is listed as a cause of junctional rhythms. The client remains hemodynamically stable, so monitoring and evaluation are appropriate.",
    takeaway:
        "Stable postoperative junctional rhythm may require observation rather than emergency treatment."
},

{
    id: "JUNC-022",
    caseId: "JUNC-CASE-022",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with junctional rhythm at 38/min, BP 76/40 mm Hg, and syncope",
        "A client with junctional rhythm at 52/min and no symptoms",
        "A client with accelerated junctional rhythm at 80/min and stable vital signs",
        "A client with junctional tachycardia at 104/min who denies symptoms"
    ],
    answer:
        "A client with junctional rhythm at 38/min, BP 76/40 mm Hg, and syncope",
    rationale:
        "The client has severe bradycardia with hypotension and syncope, indicating inadequate cardiac output and cerebral perfusion.",
    takeaway:
        "Instability determines priority."
},

{
    id: "JUNC-023",
    caseId: "JUNC-CASE-023",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which statements about junctional rhythms are correct? Select all that apply.",
    choices: [
        "They originate near the AV node.",
        "Normal junctional rate is 40 to 60 beats/min.",
        "P waves may be inverted, absent, or occur after QRS.",
        "Digoxin toxicity can cause junctional rhythms.",
        "Most stable junctional rhythms do not require immediate treatment.",
        "All junctional rhythms require defibrillation."
    ],
    answer: [
        "They originate near the AV node.",
        "Normal junctional rate is 40 to 60 beats/min.",
        "P waves may be inverted, absent, or occur after QRS.",
        "Digoxin toxicity can cause junctional rhythms.",
        "Most stable junctional rhythms do not require immediate treatment."
    ],
    rationale:
        "These are the major junctional rhythm concepts emphasized in the lecture.",
    takeaway:
        "Origin + rate + retrograde P waves + cause + symptoms determine junctional management."
},

{
    id: "JUNC-024",
    caseId: "JUNC-CASE-024",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client develops a regular rhythm at 55 beats/min. P waves are absent, QRS complexes are narrow, BP is 118/68 mm Hg, and the client denies symptoms. Which interpretation and action are most appropriate?",
    choices: [
        "Junctional rhythm; continue monitoring and assess for the underlying cause",
        "Sinus bradycardia; immediately administer atropine",
        "Ventricular tachycardia; prepare for defibrillation",
        "Atrial fibrillation; begin anticoagulation immediately"
    ],
    answer:
        "Junctional rhythm; continue monitoring and assess for the underlying cause",
    rationale:
        "The rate of 55 beats/min with absent P waves and narrow QRS complexes is consistent with junctional rhythm. The client is stable, so emergency treatment is not indicated.",
    takeaway:
        "Identify the rhythm first, then determine whether the patient is stable."
},

{
    id: "JUNC-025",
    caseId: "JUNC-CASE-025",
    patient: randomPatient(),
    topic: "Junctional Rhythms",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client has a regular narrow-complex rhythm at 110 beats/min with inverted P waves after each QRS. The client reports dizziness and has BP 88/50 mm Hg. Which conclusion is most appropriate?",
    choices: [
        "Junctional tachycardia with signs of decreased cardiac output",
        "Stable normal sinus rhythm",
        "Sinus arrhythmia",
        "Ventricular fibrillation"
    ],
    answer:
        "Junctional tachycardia with signs of decreased cardiac output",
    rationale:
        "The rate above 100 with retrograde P waves identifies junctional tachycardia. Hypotension and dizziness indicate impaired perfusion.",
    takeaway:
        "Junctional rhythm can become clinically important when perfusion falls."
}

];
const dysrhythmiaPatientTeachingQuestions = [

{
    id: "DYS-TEACH-001",
    caseId: "DYS-TEACH-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Atrial Fibrillation",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement should the nurse include when teaching a client with atrial fibrillation about stroke risk?",
    choices: [
        "Atrial fibrillation can allow blood to pool and form clots that may travel to the brain.",
        "Atrial fibrillation does not increase stroke risk.",
        "Only ventricular fibrillation causes stroke.",
        "Stroke risk disappears once the heart rate is below 100 beats/min."
    ],
    answer:
        "Atrial fibrillation can allow blood to pool and form clots that may travel to the brain.",
    rationale:
        "The lecture emphasizes that ineffective atrial contraction allows blood pooling and clot formation, increasing the risk for embolic stroke.",
    takeaway:
        "A-fib = clot risk = stroke risk."
},

{
    id: "DYS-TEACH-002",
    caseId: "DYS-TEACH-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "FAST Stroke Teaching",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which symptom should a client with atrial fibrillation recognize as a possible sign of stroke?",
    choices: [
        "Sudden facial drooping",
        "Mild hunger before lunch",
        "Occasional hiccups",
        "Dry skin"
    ],
    answer:
        "Sudden facial drooping",
    rationale:
        "The lecture teaches FAST stroke recognition, including facial drooping, arm weakness, speech difficulty, and time to call 911.",
    takeaway:
        "Face droop = stroke warning."
},

{
    id: "DYS-TEACH-003",
    caseId: "DYS-TEACH-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "FAST Stroke Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which findings are part of FAST stroke teaching? Select all that apply.",
    choices: [
        "Face drooping",
        "Arm weakness",
        "Speech difficulty",
        "Time to call 911",
        "Foot swelling",
        "Abdominal pain"
    ],
    answer: [
        "Face drooping",
        "Arm weakness",
        "Speech difficulty",
        "Time to call 911"
    ],
    rationale:
        "FAST stands for Face, Arm, Speech, and Time.",
    takeaway:
        "FAST = Face, Arm, Speech, Time."
},

{
    id: "DYS-TEACH-004",
    caseId: "DYS-TEACH-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Anticoagulants",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client taking warfarin indicates correct understanding?",
    choices: [
        "I should keep my intake of vitamin K-containing foods consistent.",
        "I should completely avoid every food containing vitamin K.",
        "I do not need blood tests while taking warfarin.",
        "I should stop warfarin if I notice one bruise."
    ],
    answer:
        "I should keep my intake of vitamin K-containing foods consistent.",
    rationale:
        "The lecture teaches consistency with vitamin K intake rather than complete avoidance.",
    takeaway:
        "Warfarin + vitamin K = keep intake consistent."
},

{
    id: "DYS-TEACH-005",
    caseId: "DYS-TEACH-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Warfarin",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which laboratory value should a client taking warfarin expect to have monitored regularly?",
    choices: [
        "INR",
        "Troponin only",
        "Serum magnesium only",
        "White blood cell count only"
    ],
    answer:
        "INR",
    rationale:
        "The lecture states that warfarin requires regular INR monitoring.",
    takeaway:
        "Warfarin requires INR monitoring."
},

{
    id: "DYS-TEACH-006",
    caseId: "DYS-TEACH-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "DOACs",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client taking apixaban indicates correct understanding?",
    choices: [
        "I do not need routine INR monitoring for this medication.",
        "My INR must stay between 2 and 3.",
        "I should stop this medication before every meal.",
        "This medication cannot cause bleeding."
    ],
    answer:
        "I do not need routine INR monitoring for this medication.",
    rationale:
        "The lecture emphasizes that DOACs such as apixaban do not require routine INR monitoring.",
    takeaway:
        "DOACs = no routine INR."
},

{
    id: "DYS-TEACH-007",
    caseId: "DYS-TEACH-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Anticoagulants",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which bleeding precautions should the nurse teach a client taking an anticoagulant? Select all that apply.",
    choices: [
        "Use a soft toothbrush.",
        "Use an electric razor.",
        "Report unusual bruising.",
        "Report blood in urine or stool.",
        "Wear medical alert identification.",
        "Use a straight razor for a closer shave."
    ],
    answer: [
        "Use a soft toothbrush.",
        "Use an electric razor.",
        "Report unusual bruising.",
        "Report blood in urine or stool.",
        "Wear medical alert identification."
    ],
    rationale:
        "The lecture emphasizes bleeding precautions and medical identification for clients taking anticoagulants.",
    takeaway:
        "Anticoagulant teaching = reduce bleeding risk."
},

{
    id: "DYS-TEACH-008",
    caseId: "DYS-TEACH-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Anticoagulants",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which client statement requires further teaching about anticoagulant therapy?",
    choices: [
        "If I notice blood in my urine, I will wait until my next appointment to mention it.",
        "I should tell all healthcare providers that I take an anticoagulant.",
        "I should report unusual bruising.",
        "I should use an electric razor."
    ],
    answer:
        "If I notice blood in my urine, I will wait until my next appointment to mention it.",
    rationale:
        "The lecture instructs clients to report bleeding promptly.",
    takeaway:
        "Bleeding on anticoagulants should be reported."
},

{
    id: "DYS-TEACH-009",
    caseId: "DYS-TEACH-CASE-009",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Pacemaker",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client with a permanent pacemaker indicates correct understanding?",
    choices: [
        "I will carry my pacemaker identification card.",
        "I should place strong magnets over the pacemaker if my pulse feels slow.",
        "I no longer need to check my pulse.",
        "I should lift heavy weights immediately after implantation."
    ],
    answer:
        "I will carry my pacemaker identification card.",
    rationale:
        "The lecture instructs clients to carry a pacemaker identification card and wear medical alert identification.",
    takeaway:
        "Pacemaker patients should carry device identification."
},

{
    id: "DYS-TEACH-010",
    caseId: "DYS-TEACH-CASE-010",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Pacemaker",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse include for a client with a permanent pacemaker? Select all that apply.",
    choices: [
        "Take your pulse daily.",
        "Report a pulse below the pacemaker setting.",
        "Avoid strong magnets.",
        "Carry a pacemaker ID card.",
        "Wear medical alert identification.",
        "Ignore changes in heart rate."
    ],
    answer: [
        "Take your pulse daily.",
        "Report a pulse below the pacemaker setting.",
        "Avoid strong magnets.",
        "Carry a pacemaker ID card.",
        "Wear medical alert identification."
    ],
    rationale:
        "These are the major home-care instructions emphasized in the lecture.",
    takeaway:
        "Pacemaker home care = pulse + ID + magnet safety."
},

{
    id: "DYS-TEACH-011",
    caseId: "DYS-TEACH-CASE-011",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Pacemaker Activity",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which activity restriction should the client follow after pacemaker implantation according to the lecture?",
    choices: [
        "Avoid lifting the affected arm above the head or lifting more than 10 lb for about 4 weeks.",
        "Remain on bed rest for 4 weeks.",
        "Begin weight training immediately.",
        "Avoid using the affected arm permanently."
    ],
    answer:
        "Avoid lifting the affected arm above the head or lifting more than 10 lb for about 4 weeks.",
    rationale:
        "The lecture identifies temporary arm and lifting restrictions after pacemaker implantation.",
    takeaway:
        "Protect the leads while the pacemaker site heals."
},

{
    id: "DYS-TEACH-012",
    caseId: "DYS-TEACH-CASE-012",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Pacemaker",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "A client with a pacemaker has a programmed rate of 60 beats/min and reports a home pulse of 48 beats/min. Which instruction is appropriate?",
    choices: [
        "Report the finding to the healthcare provider.",
        "This is expected; no action is needed.",
        "Exercise until the pulse reaches 60 beats/min.",
        "Place a magnet over the pacemaker."
    ],
    answer:
        "Report the finding to the healthcare provider.",
    rationale:
        "The lecture specifically instructs clients to report a pulse below the pacemaker setting.",
    takeaway:
        "Pulse below pacer setting = report it."
},

{
    id: "DYS-TEACH-013",
    caseId: "DYS-TEACH-CASE-013",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "ICD",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client with an ICD indicates correct understanding?",
    choices: [
        "I should report any shock delivered by the device.",
        "I only need to report a shock if I lose consciousness.",
        "I should ignore repeated shocks.",
        "I should place magnets near the device regularly."
    ],
    answer:
        "I should report any shock delivered by the device.",
    rationale:
        "The lecture instructs clients to report any ICD shock.",
    takeaway:
        "Any ICD shock should be reported."
},

{
    id: "DYS-TEACH-014",
    caseId: "DYS-TEACH-CASE-014",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "ICD",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "What should a client with an ICD do after receiving multiple shocks?",
    choices: [
        "Call 911.",
        "Wait until the next office visit.",
        "Turn the device off.",
        "Place a magnet over the device."
    ],
    answer:
        "Call 911.",
    rationale:
        "The lecture identifies multiple ICD shocks as an emergency requiring 911 activation.",
    takeaway:
        "Multiple shocks = emergency."
},

{
    id: "DYS-TEACH-015",
    caseId: "DYS-TEACH-CASE-015",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "ICD",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse include for a client with an ICD? Select all that apply.",
    choices: [
        "Family members should learn CPR.",
        "Avoid strong magnets.",
        "Keep the cell phone on the opposite side from the device.",
        "Report shocks.",
        "Call 911 for multiple shocks.",
        "Lean against antitheft devices for several minutes."
    ],
    answer: [
        "Family members should learn CPR.",
        "Avoid strong magnets.",
        "Keep the cell phone on the opposite side from the device.",
        "Report shocks.",
        "Call 911 for multiple shocks."
    ],
    rationale:
        "These are the ICD home-care and safety recommendations emphasized in the lecture.",
    takeaway:
        "ICD teaching = shock response + magnet safety + family CPR."
},

{
    id: "DYS-TEACH-016",
    caseId: "DYS-TEACH-CASE-016",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "ICD",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Why should family members of a client with an ICD learn CPR?",
    choices: [
        "The client remains at risk for serious ventricular dysrhythmias and cardiac arrest.",
        "The ICD prevents every cardiac emergency.",
        "CPR is required after every ICD shock.",
        "The device works only when another person performs CPR."
    ],
    answer:
        "The client remains at risk for serious ventricular dysrhythmias and cardiac arrest.",
    rationale:
        "The lecture specifically recommends family CPR training for ICD clients.",
    takeaway:
        "ICD reduces risk but does not eliminate arrest risk."
},

{
    id: "DYS-TEACH-017",
    caseId: "DYS-TEACH-CASE-017",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Medication Adherence",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement should the nurse emphasize to a client taking a beta blocker?",
    choices: [
        "Do not stop this medication abruptly.",
        "Stop the medication whenever your heart rate improves.",
        "Double the dose if you miss one.",
        "The medication has no effect on blood pressure."
    ],
    answer:
        "Do not stop this medication abruptly.",
    rationale:
        "The lecture warns that abrupt discontinuation may cause rebound tachycardia or hypertensive crisis.",
    takeaway:
        "Beta blockers must be tapered, not abruptly stopped."
},

{
    id: "DYS-TEACH-018",
    caseId: "DYS-TEACH-CASE-018",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Beta Blockers",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which safety instruction should the nurse provide to a client starting a beta blocker?",
    choices: [
        "Rise slowly because the medication can cause dizziness or orthostatic hypotension.",
        "Stand quickly to improve circulation.",
        "Avoid checking your heart rate.",
        "Stop the medication if you feel mildly tired."
    ],
    answer:
        "Rise slowly because the medication can cause dizziness or orthostatic hypotension.",
    rationale:
        "The lecture includes teaching to rise slowly because beta blockers can lower blood pressure and cause dizziness.",
    takeaway:
        "Beta blockers can cause orthostatic symptoms."
},

{
    id: "DYS-TEACH-019",
    caseId: "DYS-TEACH-CASE-019",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Calcium Channel Blockers",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which beverage should a client taking certain calcium channel blockers avoid according to the lecture?",
    choices: [
        "Grapefruit juice",
        "Water",
        "Milk",
        "Apple juice"
    ],
    answer:
        "Grapefruit juice",
    rationale:
        "The lecture advises avoiding grapefruit juice because it can increase calcium channel blocker drug levels.",
    takeaway:
        "CCB teaching = avoid grapefruit."
},

{
    id: "DYS-TEACH-020",
    caseId: "DYS-TEACH-CASE-020",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Digoxin",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which symptom should a client taking digoxin report immediately?",
    choices: [
        "Yellow-green visual changes",
        "Mild thirst",
        "Occasional hunger",
        "Dry skin"
    ],
    answer:
        "Yellow-green visual changes",
    rationale:
        "The lecture identifies visual changes such as halos or yellow-green vision as signs of digoxin toxicity.",
    takeaway:
        "Digoxin + visual halos = toxicity warning."
},

{
    id: "DYS-TEACH-021",
    caseId: "DYS-TEACH-CASE-021",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Digoxin",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which symptoms should a client taking digoxin report as possible toxicity? Select all that apply.",
    choices: [
        "Nausea",
        "Vomiting",
        "Loss of appetite",
        "Visual halos",
        "Unusual fatigue",
        "New slow heart rate"
    ],
    answer: [
        "Nausea",
        "Vomiting",
        "Loss of appetite",
        "Visual halos",
        "Unusual fatigue",
        "New slow heart rate"
    ],
    rationale:
        "These are the major digoxin toxicity findings listed in the lecture.",
    takeaway:
        "Digoxin toxicity = GI + fatigue + vision + bradycardia."
},

{
    id: "DYS-TEACH-022",
    caseId: "DYS-TEACH-CASE-022",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Adenosine",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "Which statement should the nurse make before administering adenosine?",
    choices: [
        "You may briefly feel flushing or chest discomfort and may notice a short pause in your heartbeat.",
        "This drug takes several hours to work.",
        "You should not feel anything when it is given.",
        "This medicine permanently stops your heart."
    ],
    answer:
        "You may briefly feel flushing or chest discomfort and may notice a short pause in your heartbeat.",
    rationale:
        "The lecture emphasizes warning the client about brief asystole, flushing, and chest discomfort.",
    takeaway:
        "Prepare the patient before adenosine."
},

{
    id: "DYS-TEACH-023",
    caseId: "DYS-TEACH-CASE-023",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Amiodarone",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which symptom should a client taking amiodarone report promptly?",
    choices: [
        "New dry cough and shortness of breath",
        "Mild hunger",
        "Occasional sneezing",
        "Transient dry lips"
    ],
    answer:
        "New dry cough and shortness of breath",
    rationale:
        "The lecture identifies dyspnea and dry cough as warning signs of pulmonary toxicity from amiodarone.",
    takeaway:
        "Amiodarone + dyspnea/dry cough = report immediately."
},

{
    id: "DYS-TEACH-024",
    caseId: "DYS-TEACH-CASE-024",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "PACs",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which lifestyle modification may help reduce premature atrial contractions?",
    choices: [
        "Reduce caffeine and nicotine intake",
        "Increase stimulant use",
        "Increase alcohol intake",
        "Stop all prescribed medications"
    ],
    answer:
        "Reduce caffeine and nicotine intake",
    rationale:
        "The lecture identifies caffeine and nicotine as common PAC triggers and recommends reducing them.",
    takeaway:
        "PAC teaching = reduce stimulants."
},

{
    id: "DYS-TEACH-025",
    caseId: "DYS-TEACH-CASE-025",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "PACs",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse provide to a client with recurrent PACs? Select all that apply.",
    choices: [
        "Reduce caffeine.",
        "Avoid nicotine.",
        "Limit alcohol.",
        "Manage stress.",
        "Report dizziness or shortness of breath.",
        "Increase stimulant use."
    ],
    answer: [
        "Reduce caffeine.",
        "Avoid nicotine.",
        "Limit alcohol.",
        "Manage stress.",
        "Report dizziness or shortness of breath."
    ],
    rationale:
        "The lecture emphasizes trigger reduction, stress management, and symptom reporting for PACs.",
    takeaway:
        "PAC prevention is largely trigger management."
},

{
    id: "DYS-TEACH-026",
    caseId: "DYS-TEACH-CASE-026",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Medication Adherence",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement is most important when teaching a client with atrial flutter about prescribed rate-control medications?",
    choices: [
        "Do not skip doses unless instructed by the healthcare provider.",
        "Take the medication only when palpitations occur.",
        "Double the next dose if one is missed.",
        "Stop therapy when the heart rate becomes normal."
    ],
    answer:
        "Do not skip doses unless instructed by the healthcare provider.",
    rationale:
        "The lecture emphasizes medication adherence for clients with atrial flutter.",
    takeaway:
        "Rate-control medications work best when taken consistently."
},

{
    id: "DYS-TEACH-027",
    caseId: "DYS-TEACH-CASE-027",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Symptom Reporting",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which symptoms should a client with a dysrhythmia be instructed to report promptly? Select all that apply.",
    choices: [
        "Palpitations",
        "Shortness of breath",
        "Chest pain",
        "Dizziness",
        "Syncope",
        "New neurologic changes"
    ],
    answer: [
        "Palpitations",
        "Shortness of breath",
        "Chest pain",
        "Dizziness",
        "Syncope",
        "New neurologic changes"
    ],
    rationale:
        "These symptoms can reflect decreased cardiac output, worsening dysrhythmia, or stroke and are emphasized throughout the lecture.",
    takeaway:
        "Teach patients the symptoms that mean perfusion may be compromised."
},

{
    id: "DYS-TEACH-028",
    caseId: "DYS-TEACH-CASE-028",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Comprehensive Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statements reflect correct dysrhythmia home-care teaching? Select all that apply.",
    choices: [
        "A-fib patients should know FAST stroke symptoms.",
        "Pacemaker patients should carry device identification.",
        "ICD patients should report shocks.",
        "Clients on anticoagulants should report bleeding.",
        "Beta blockers should not be stopped abruptly.",
        "Clients should ignore dizziness if the rhythm is known."
    ],
    answer: [
        "A-fib patients should know FAST stroke symptoms.",
        "Pacemaker patients should carry device identification.",
        "ICD patients should report shocks.",
        "Clients on anticoagulants should report bleeding.",
        "Beta blockers should not be stopped abruptly."
    ],
    rationale:
        "These are high-yield teaching principles emphasized in the lecture.",
    takeaway:
        "Home safety is part of dysrhythmia treatment."
},

{
    id: "DYS-TEACH-029",
    caseId: "DYS-TEACH-CASE-029",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with atrial fibrillation is discharged on apixaban and metoprolol. Which client statement requires immediate correction?",
    choices: [
        "If I develop slurred speech, I will wait to see if it goes away.",
        "I will report unusual bleeding.",
        "I will take my medications as prescribed.",
        "I will rise slowly if I feel dizzy."
    ],
    answer:
        "If I develop slurred speech, I will wait to see if it goes away.",
    rationale:
        "Slurred speech may indicate stroke and requires immediate emergency response.",
    takeaway:
        "Stroke symptoms are never a wait-and-see situation."
},

{
    id: "DYS-TEACH-030",
    caseId: "DYS-TEACH-CASE-030",
    patient: randomPatient(),
    topic: "Dysrhythmia Patient Teaching",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with a permanent pacemaker and chronic atrial fibrillation takes warfarin. Which discharge statement shows the best understanding of the overall plan of care?",
    choices: [
        "I will check my pulse, carry my pacemaker ID, keep my vitamin K intake consistent, and report any bleeding or stroke symptoms.",
        "I no longer need to monitor my pulse because I have a pacemaker.",
        "I should stop warfarin whenever I notice mild bruising.",
        "I can ignore facial drooping if my heart rate is normal."
    ],
    answer:
        "I will check my pulse, carry my pacemaker ID, keep my vitamin K intake consistent, and report any bleeding or stroke symptoms.",
    rationale:
        "This statement correctly combines pacemaker safety, anticoagulant teaching, and stroke recognition.",
    takeaway:
        "Good discharge teaching connects the device, medications, symptoms, and emergency plan."
}

];
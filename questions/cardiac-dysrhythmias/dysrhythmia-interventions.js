const dysrhythmiaInterventionQuestions = [

{
    id: "DYS-INT-001",
    caseId: "DYS-INT-CASE-001",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Basic Care and Comfort",
    question:
        "What chest compression rate should the nurse use during adult CPR according to the lecture?",
    choices: [
        "100 to 120 compressions/min",
        "60 to 80 compressions/min",
        "80 to 90 compressions/min",
        "140 to 160 compressions/min"
    ],
    answer:
        "100 to 120 compressions/min",
    rationale:
        "The lecture identifies the recommended adult chest compression rate as 100 to 120 compressions per minute.",
    takeaway:
        "CPR rate = 100–120/min."
},

{
    id: "DYS-INT-002",
    caseId: "DYS-INT-CASE-002",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Basic Care and Comfort",
    question:
        "What compression depth should the nurse use during adult CPR according to the lecture?",
    choices: [
        "At least 2 inches",
        "About 0.5 inch",
        "Exactly 1 inch",
        "At least 4 inches"
    ],
    answer:
        "At least 2 inches",
    rationale:
        "The lecture emphasizes chest compressions at least 2 inches deep for adult CPR.",
    takeaway:
        "Adult CPR depth = at least 2 inches."
},

{
    id: "DYS-INT-003",
    caseId: "DYS-INT-CASE-003",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "Application",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Basic Care and Comfort",
    question:
        "What compression-to-ventilation ratio should be used for adult CPR without an advanced airway?",
    choices: [
        "30:2",
        "15:1",
        "20:2",
        "10:1"
    ],
    answer:
        "30:2",
    rationale:
        "The lecture identifies a 30 compressions to 2 breaths ratio when an advanced airway is not in place.",
    takeaway:
        "No advanced airway = 30:2."
},

{
    id: "DYS-INT-004",
    caseId: "DYS-INT-CASE-004",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Clinical Judgment",
    question:
        "Which actions support high-quality CPR? Select all that apply.",
    choices: [
        "Compress at 100 to 120/min.",
        "Compress at least 2 inches deep.",
        "Allow full chest recoil.",
        "Minimize interruptions.",
        "Switch compressors every 2 minutes.",
        "Pause compressions frequently to recheck the monitor."
    ],
    answer: [
        "Compress at 100 to 120/min.",
        "Compress at least 2 inches deep.",
        "Allow full chest recoil.",
        "Minimize interruptions.",
        "Switch compressors every 2 minutes."
    ],
    rationale:
        "The lecture emphasizes adequate rate and depth, full recoil, minimal interruptions, and switching compressors every 2 minutes.",
    takeaway:
        "High-quality CPR = fast, deep, full recoil, few pauses."
},

{
    id: "DYS-INT-005",
    caseId: "DYS-INT-CASE-005",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client becomes unresponsive and pulseless. Which action should the nurse initiate first according to the CAB approach?",
    choices: [
        "Begin chest compressions",
        "Give two rescue breaths first",
        "Insert an advanced airway before compressions",
        "Obtain a complete history"
    ],
    answer:
        "Begin chest compressions",
    rationale:
        "The lecture teaches the CAB approach: Compressions, Airway, Breathing. Chest compressions are initiated first.",
    takeaway:
        "CAB = Compressions first."
},

{
    id: "DYS-INT-006",
    caseId: "DYS-INT-CASE-006",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "CPR",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Why should interruptions in chest compressions be kept under 10 seconds?",
    choices: [
        "To maintain coronary and cerebral perfusion",
        "To allow the atria to fully repolarize",
        "To increase the PR interval",
        "To prevent sinus tachycardia"
    ],
    answer:
        "To maintain coronary and cerebral perfusion",
    rationale:
        "Minimizing interruptions helps maintain blood flow to the heart and brain during cardiac arrest.",
    takeaway:
        "Every pause reduces perfusion."
},

{
    id: "DYS-INT-007",
    caseId: "DYS-INT-CASE-007",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Defibrillation",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Why is early defibrillation important in ventricular fibrillation?",
    choices: [
        "Earlier defibrillation improves the chance of survival",
        "Defibrillation prevents all future dysrhythmias",
        "Defibrillation replaces the need for CPR",
        "Defibrillation is used for all cardiac arrest rhythms"
    ],
    answer:
        "Earlier defibrillation improves the chance of survival",
    rationale:
        "The lecture emphasizes that earlier defibrillation is associated with greater survival in shockable cardiac arrest rhythms.",
    takeaway:
        "Shockable rhythm? Defibrillate early."
},

{
    id: "DYS-INT-008",
    caseId: "DYS-INT-CASE-008",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Defibrillation",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client in ventricular fibrillation has just been defibrillated. Which action should the nurse take next?",
    choices: [
        "Resume CPR immediately",
        "Wait for the monitor to stabilize before touching the client",
        "Administer oral medications",
        "Check a blood pressure before resuming compressions"
    ],
    answer:
        "Resume CPR immediately",
    rationale:
        "The lecture emphasizes immediate resumption of CPR after defibrillation to minimize interruptions in perfusion.",
    takeaway:
        "Shock → immediately resume CPR."
},

{
    id: "DYS-INT-009",
    caseId: "DYS-INT-CASE-009",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Temporary Pacemakers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes transcutaneous pacing?",
    choices: [
        "External pacing delivered through pads placed on the chest",
        "A permanent generator implanted under the skin",
        "A catheter placed directly into a coronary artery",
        "A medication used to increase heart rate"
    ],
    answer:
        "External pacing delivered through pads placed on the chest",
    rationale:
        "The lecture identifies transcutaneous pacing as an external temporary pacing method.",
    takeaway:
        "Transcutaneous = external temporary pacing."
},

{
    id: "DYS-INT-010",
    caseId: "DYS-INT-CASE-010",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Temporary Pacemakers",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "What should the nurse anticipate for a conscious client receiving transcutaneous pacing?",
    choices: [
        "Sedation or analgesia because the procedure can be painful",
        "No discomfort because electrical current is not felt",
        "Immediate discharge home",
        "Restriction of all oxygen therapy"
    ],
    answer:
        "Sedation or analgesia because the procedure can be painful",
    rationale:
        "The lecture specifically notes that transcutaneous pacing can be painful and that sedation should be considered.",
    takeaway:
        "Transcutaneous pacing hurts—manage comfort."
},

{
    id: "DYS-INT-011",
    caseId: "DYS-INT-CASE-011",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Temporary Pacemakers",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "How is a transvenous temporary pacemaker placed?",
    choices: [
        "A pacing catheter is inserted through a central vein",
        "Pads are placed externally on the chest",
        "A generator is implanted permanently under the skin",
        "A wire is placed through the radial artery"
    ],
    answer:
        "A pacing catheter is inserted through a central vein",
    rationale:
        "The lecture describes transvenous pacing as temporary pacing through a catheter introduced through a central venous route such as the subclavian or femoral vein.",
    takeaway:
        "Transvenous pacing = catheter-based temporary pacing."
},

{
    id: "DYS-INT-012",
    caseId: "DYS-INT-CASE-012",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Permanent Pacemaker",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Where is a permanent pacemaker generator typically implanted according to the lecture?",
    choices: [
        "Subclavicular area",
        "Abdominal midline",
        "Posterior thigh",
        "Lower back"
    ],
    answer:
        "Subclavicular area",
    rationale:
        "The lecture identifies the subclavicular area as the typical location for permanent pacemaker implantation.",
    takeaway:
        "Permanent pacemaker generator = upper chest/subclavicular area."
},

{
    id: "DYS-INT-013",
    caseId: "DYS-INT-CASE-013",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Permanent Pacemaker",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which postoperative complications should the nurse monitor for after permanent pacemaker insertion? Select all that apply.",
    choices: [
        "Bleeding",
        "Infection",
        "Incision abnormalities",
        "Changes in pacing function",
        "Expected severe hemorrhage",
        "Routine loss of consciousness"
    ],
    answer: [
        "Bleeding",
        "Infection",
        "Incision abnormalities",
        "Changes in pacing function"
    ],
    rationale:
        "The lecture emphasizes monitoring for bleeding and infection after pacemaker insertion, along with ongoing assessment of device function.",
    takeaway:
        "Pacemaker post-op: watch the site and the rhythm."
},

{
    id: "DYS-INT-014",
    caseId: "DYS-INT-CASE-014",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Pacemaker Teaching",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client with a permanent pacemaker shows correct understanding of discharge teaching?",
    choices: [
        "I should carry my pacemaker identification card.",
        "I should keep strong magnets directly over the device.",
        "I no longer need to check my pulse.",
        "I should lift heavy objects immediately after surgery."
    ],
    answer:
        "I should carry my pacemaker identification card.",
    rationale:
        "The lecture instructs clients with pacemakers to carry an identification card and wear medical alert identification.",
    takeaway:
        "Pacemaker patient = carry device ID."
},

{
    id: "DYS-INT-015",
    caseId: "DYS-INT-CASE-015",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Pacemaker Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching should the nurse include for a client with a permanent pacemaker? Select all that apply.",
    choices: [
        "Avoid strong electromagnetic fields and magnets.",
        "Carry a pacemaker identification card.",
        "Wear medical alert identification.",
        "Check your pulse daily.",
        "Report a pulse below the pacemaker setting.",
        "Ignore changes in heart rate."
    ],
    answer: [
        "Avoid strong electromagnetic fields and magnets.",
        "Carry a pacemaker identification card.",
        "Wear medical alert identification.",
        "Check your pulse daily.",
        "Report a pulse below the pacemaker setting."
    ],
    rationale:
        "These are key pacemaker safety and self-monitoring instructions identified in the lecture.",
    takeaway:
        "Pacemaker teaching = magnets, ID, daily pulse, report low rate."
},

{
    id: "DYS-INT-016",
    caseId: "DYS-INT-CASE-016",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Pacemaker Teaching",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which activity restriction is appropriate after permanent pacemaker placement according to the lecture?",
    choices: [
        "Avoid lifting the affected arm above the head or lifting more than 10 lb for about 4 weeks.",
        "Keep the affected arm completely immobile for 6 months.",
        "Begin heavy weightlifting immediately.",
        "Avoid walking for 4 weeks."
    ],
    answer:
        "Avoid lifting the affected arm above the head or lifting more than 10 lb for about 4 weeks.",
    rationale:
        "The lecture instructs clients to avoid raising the affected arm overhead and avoid lifting more than 10 lb for approximately 4 weeks.",
    takeaway:
        "Protect the pacemaker leads while they heal."
},

{
    id: "DYS-INT-017",
    caseId: "DYS-INT-CASE-017",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Pacemaker Teaching",
    style: "Clinical Judgment",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "A client with a permanent pacemaker reports a pulse of 48 beats/min. The programmed pacemaker rate is 60 beats/min. Which action is appropriate?",
    choices: [
        "Report the finding to the healthcare provider",
        "Reassure the client that this is expected",
        "Tell the client to exercise until the pulse rises",
        "Advise the client to place a magnet over the device"
    ],
    answer:
        "Report the finding to the healthcare provider",
    rationale:
        "The lecture instructs clients to report a pulse lower than the pacemaker's programmed setting.",
    takeaway:
        "Pulse below pacer setting = report it."
},

{
    id: "DYS-INT-018",
    caseId: "DYS-INT-CASE-018",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "What is the primary purpose of an implantable cardioverter-defibrillator (ICD)?",
    choices: [
        "Detect and treat dangerous ventricular tachyarrhythmias automatically",
        "Treat all sinus bradycardia permanently",
        "Measure blood glucose continuously",
        "Prevent atrial depolarization"
    ],
    answer:
        "Detect and treat dangerous ventricular tachyarrhythmias automatically",
    rationale:
        "The lecture describes the ICD as a device that detects VT or VF and delivers treatment automatically.",
    takeaway:
        "ICD = automatic detection and treatment of VT/VF."
},

{
    id: "DYS-INT-019",
    caseId: "DYS-INT-CASE-019",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which client is most likely to benefit from an ICD according to the lecture?",
    choices: [
        "A client at risk for recurrent sustained VT or VF",
        "A client with uncomplicated sinus arrhythmia",
        "A client with occasional PACs after caffeine",
        "A client with normal sinus rhythm and no cardiac history"
    ],
    answer:
        "A client at risk for recurrent sustained VT or VF",
    rationale:
        "The lecture identifies ICDs as devices used for dangerous ventricular tachyarrhythmias such as sustained VT and VF.",
    takeaway:
        "ICD is protection against lethal ventricular rhythms."
},

{
    id: "DYS-INT-020",
    caseId: "DYS-INT-CASE-020",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Wearable Cardioverter Defibrillator",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement best describes a wearable cardioverter-defibrillator (WCD)?",
    choices: [
        "An external vest worn continuously except during bathing",
        "A permanent implanted pacemaker",
        "A medication infusion pump",
        "A temporary transvenous pacemaker"
    ],
    answer:
        "An external vest worn continuously except during bathing",
    rationale:
        "The lecture identifies a WCD as an external vest designed to provide protection from dangerous ventricular rhythms.",
    takeaway:
        "WCD = wearable external shock protection."
},

{
    id: "DYS-INT-021",
    caseId: "DYS-INT-CASE-021",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD Teaching",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client with an ICD indicates correct understanding?",
    choices: [
        "I should report any shock from the ICD.",
        "I should ignore all shocks unless I lose consciousness.",
        "I can place magnets directly over the device.",
        "My family does not need to know CPR."
    ],
    answer:
        "I should report any shock from the ICD.",
    rationale:
        "The lecture instructs clients to report any ICD shock to their healthcare provider.",
    takeaway:
        "ICD shock = report it."
},

{
    id: "DYS-INT-022",
    caseId: "DYS-INT-CASE-022",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD Teaching",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "A client with an ICD reports receiving several shocks in a short period. Which instruction is most appropriate?",
    choices: [
        "Call 911",
        "Wait until the next routine appointment",
        "Remove the device",
        "Place a magnet over the ICD"
    ],
    answer:
        "Call 911",
    rationale:
        "The lecture states that multiple ICD shocks require emergency evaluation and the client should call 911.",
    takeaway:
        "Multiple ICD shocks = emergency."
},

{
    id: "DYS-INT-023",
    caseId: "DYS-INT-CASE-023",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which instructions should the nurse provide to a client with an ICD? Select all that apply.",
    choices: [
        "Report any shock.",
        "Call 911 for multiple shocks.",
        "Teach family members CPR.",
        "Avoid strong magnets.",
        "Keep the cell phone on the opposite side from the device.",
        "Spend prolonged periods leaning against antitheft devices."
    ],
    answer: [
        "Report any shock.",
        "Call 911 for multiple shocks.",
        "Teach family members CPR.",
        "Avoid strong magnets.",
        "Keep the cell phone on the opposite side from the device."
    ],
    rationale:
        "The lecture emphasizes shock reporting, emergency care for multiple shocks, family CPR training, and precautions around magnetic or electromagnetic interference.",
    takeaway:
        "ICD teaching focuses on shock response and electromagnetic safety."
},

{
    id: "DYS-INT-024",
    caseId: "DYS-INT-CASE-024",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "ICD Teaching",
    style: "Patient Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Why should family members of a client with an ICD learn CPR?",
    choices: [
        "The client remains at risk for life-threatening ventricular dysrhythmias",
        "The ICD prevents all cardiac arrests",
        "CPR is needed after every normal heartbeat",
        "The ICD only works during sleep"
    ],
    answer:
        "The client remains at risk for life-threatening ventricular dysrhythmias",
    rationale:
        "The lecture specifically recommends that family members learn CPR because these clients remain at risk for serious ventricular dysrhythmias.",
    takeaway:
        "An ICD reduces risk; it does not eliminate emergencies."
},

{
    id: "DYS-INT-025",
    caseId: "DYS-INT-CASE-025",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Device Comparison",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best differentiates a pacemaker from an ICD?",
    choices: [
        "A pacemaker primarily treats slow rhythms, while an ICD detects and treats dangerous ventricular tachyarrhythmias.",
        "Both devices are used only for atrial fibrillation.",
        "An ICD treats only sinus bradycardia.",
        "A pacemaker automatically defibrillates ventricular fibrillation."
    ],
    answer:
        "A pacemaker primarily treats slow rhythms, while an ICD detects and treats dangerous ventricular tachyarrhythmias.",
    rationale:
        "Pacemakers provide electrical impulses to maintain an adequate heart rate, while ICDs detect and treat dangerous VT or VF.",
    takeaway:
        "Pacemaker = pace slow; ICD = detect/shock lethal fast rhythms."
},

{
    id: "DYS-INT-026",
    caseId: "DYS-INT-CASE-026",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Device Comparison",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statements correctly compare temporary and permanent pacing? Select all that apply.",
    choices: [
        "Transcutaneous pacing is external.",
        "Transcutaneous pacing can be painful.",
        "Transvenous pacing uses a catheter.",
        "A permanent pacemaker is implanted under the skin.",
        "Temporary and permanent pacing are exactly the same procedure."
    ],
    answer: [
        "Transcutaneous pacing is external.",
        "Transcutaneous pacing can be painful.",
        "Transvenous pacing uses a catheter.",
        "A permanent pacemaker is implanted under the skin."
    ],
    rationale:
        "The lecture distinguishes external transcutaneous pacing, catheter-based transvenous pacing, and surgically implanted permanent pacing.",
    takeaway:
        "Know the route and purpose of each pacing method."
},

{
    id: "DYS-INT-027",
    caseId: "DYS-INT-CASE-027",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client should the nurse assess first?",
    choices: [
        "A client with an ICD who reports receiving three shocks in 10 minutes",
        "A client with a permanent pacemaker asking about an ID card",
        "A client with a WCD asking when it can be removed for bathing",
        "A stable client scheduled for pacemaker discharge teaching"
    ],
    answer:
        "A client with an ICD who reports receiving three shocks in 10 minutes",
    rationale:
        "Multiple ICD shocks may indicate recurrent life-threatening dysrhythmias and require emergency evaluation.",
    takeaway:
        "Multiple ICD shocks outrank routine teaching."
},

{
    id: "DYS-INT-028",
    caseId: "DYS-INT-CASE-028",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client receiving transcutaneous pacing is awake and reports severe pain with each pacing impulse. Which action is most appropriate?",
    choices: [
        "Administer prescribed sedation or analgesia while continuing necessary pacing",
        "Stop pacing immediately without evaluating the client's rhythm",
        "Tell the client the pain means the device is malfunctioning",
        "Remove the pacing pads"
    ],
    answer:
        "Administer prescribed sedation or analgesia while continuing necessary pacing",
    rationale:
        "Transcutaneous pacing is painful. Comfort measures are appropriate while maintaining pacing when clinically necessary.",
    takeaway:
        "Treat the pain without losing the lifesaving pacing therapy."
},

{
    id: "DYS-INT-029",
    caseId: "DYS-INT-CASE-029",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Comprehensive Review",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "Which intervention-teaching pairings are correct? Select all that apply.",
    choices: [
        "CPR — compress 100 to 120/min.",
        "Transcutaneous pacing — may require sedation.",
        "Permanent pacemaker — check pulse daily.",
        "ICD — report shocks.",
        "Multiple ICD shocks — call 911.",
        "Pacemaker — intentionally expose device to strong magnets."
    ],
    answer: [
        "CPR — compress 100 to 120/min.",
        "Transcutaneous pacing — may require sedation.",
        "Permanent pacemaker — check pulse daily.",
        "ICD — report shocks.",
        "Multiple ICD shocks — call 911."
    ],
    rationale:
        "These intervention and teaching points are emphasized in the lecture.",
    takeaway:
        "Know both the intervention and what the patient must do at home."
},

{
    id: "DYS-INT-030",
    caseId: "DYS-INT-CASE-030",
    patient: randomPatient(),
    topic: "Dysrhythmia Interventions",
    subtopic: "Comprehensive Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with symptomatic bradycardia remains hypotensive after atropine. The client is awake but increasingly dizzy. Which intervention should the nurse prepare for based on the lecture?",
    choices: [
        "Temporary pacing",
        "Defibrillation for ventricular fibrillation",
        "Adenosine for SVT",
        "No further intervention"
    ],
    answer:
        "Temporary pacing",
    rationale:
        "When symptomatic bradycardia does not respond adequately to atropine, temporary pacing may be required.",
    takeaway:
        "Symptomatic bradycardia + failed atropine = prepare to pace."
}

];
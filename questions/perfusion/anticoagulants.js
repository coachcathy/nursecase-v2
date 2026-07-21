const anticoagulantQuestions = [
  {
    id: "PERF-AC-001",
    caseId: "PERF-AC-CASE-001",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Unfractionated Heparin",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement best explains the therapeutic action of unfractionated heparin?",
    choices: [
      "It enhances antithrombin activity and reduces further clot formation",
      "It directly dissolves an existing blood clot",
      "It stimulates platelet aggregation",
      "It increases production of vitamin K-dependent clotting factors"
    ],
    answer:
      "It enhances antithrombin activity and reduces further clot formation",
    rationale:
      "Heparin enhances the action of antithrombin, which inhibits clotting factors such as thrombin and factor Xa. It prevents extension of an existing clot and formation of new clots, but it does not directly dissolve the clot.",
    takeaway:
      "Heparin prevents clot progression; it does not dissolve the existing thrombus."
  },
  {
    id: "PERF-AC-002",
    caseId: "PERF-AC-CASE-002",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Heparin Administration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Before beginning a weight-based IV heparin infusion, which action is most important for the nurse to complete?",
    choices: [
      "Verify the patient's current weight and independently double-check the dosage",
      "Mix the medication with an antibiotic in the same IV tubing",
      "Administer the medication by intramuscular injection",
      "Remove all bleeding precautions from the plan of care"
    ],
    answer:
      "Verify the patient's current weight and independently double-check the dosage",
    rationale:
      "IV heparin is commonly prescribed using weight-based bolus and infusion protocols. Because heparin is a high-alert medication, the patient's current weight, concentration, pump setting, and calculation should be carefully verified.",
    takeaway:
      "Heparin is a high-alert medication requiring accurate weight-based calculation."
  },
  {
    id: "PERF-AC-003",
    caseId: "PERF-AC-CASE-003",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Heparin Monitoring",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which assessments should the nurse perform for a patient receiving an IV unfractionated heparin infusion? Select all that apply.",
    choices: [
      "Monitor aPTT or anti-factor Xa results",
      "Assess the platelet count",
      "Monitor hemoglobin and hematocrit",
      "Assess urine and stool for blood",
      "Inspect IV and injection sites for bleeding",
      "Monitor the INR as the primary heparin test"
    ],
    answer: [
      "Monitor aPTT or anti-factor Xa results",
      "Assess the platelet count",
      "Monitor hemoglobin and hematocrit",
      "Assess urine and stool for blood",
      "Inspect IV and injection sites for bleeding"
    ],
    rationale:
      "Unfractionated heparin therapy requires assessment of anticoagulant effect and signs of bleeding. Platelets are monitored for heparin-induced thrombocytopenia. PT/INR is primarily used for warfarin, not heparin.",
    takeaway:
      "Monitor coagulation, blood counts, platelets, and clinical bleeding during heparin therapy."
  },
  {
    id: "PERF-AC-004",
    caseId: "PERF-AC-CASE-004",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Heparin Adjustment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient's aPTT is significantly above the facility's therapeutic range while receiving IV heparin. What should the nurse do first?",
    choices: [
      "Follow the heparin protocol by pausing or decreasing the infusion as prescribed",
      "Increase the heparin infusion rate",
      "Administer vitamin K immediately",
      "Encourage the patient to ambulate"
    ],
    answer:
      "Follow the heparin protocol by pausing or decreasing the infusion as prescribed",
    rationale:
      "A markedly elevated aPTT indicates excessive anticoagulation and increased bleeding risk. The nurse should follow the approved heparin titration protocol, assess for bleeding, and notify the provider when required.",
    takeaway:
      "Excessive heparin effect requires prompt protocol-based dose reduction or interruption."
  },
  {
    id: "PERF-AC-005",
    caseId: "PERF-AC-CASE-005",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Heparin Reversal",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient receiving IV heparin develops uncontrolled bleeding. Which medication should the nurse anticipate administering?",
    choices: [
      "Protamine sulfate",
      "Phytonadione",
      "Idarucizumab",
      "Andexanet alfa"
    ],
    answer:
      "Protamine sulfate",
    rationale:
      "Protamine sulfate binds to and neutralizes unfractionated heparin. The amount administered is based partly on the amount of heparin recently received.",
    takeaway:
      "The reversal agent for unfractionated heparin is protamine sulfate."
  },
  {
    id: "PERF-AC-006",
    caseId: "PERF-AC-CASE-006",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Heparin-Induced Thrombocytopenia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient's platelet count decreases from 248,000/mm³ to 102,000/mm³ after 6 days of heparin therapy. Which action should the nurse take first?",
    choices: [
      "Stop all heparin products and notify the provider",
      "Increase the heparin infusion rate",
      "Administer a platelet transfusion routinely",
      "Begin warfarin as the only immediate treatment"
    ],
    answer:
      "Stop all heparin products and notify the provider",
    rationale:
      "A platelet decrease of approximately 50% after heparin exposure suggests heparin-induced thrombocytopenia. All heparin products should be stopped, including heparin flushes, and a non-heparin anticoagulant may be prescribed.",
    takeaway:
      "HIT is a prothrombotic emergency requiring immediate discontinuation of all heparin."
  },
  {
    id: "PERF-AC-007",
    caseId: "PERF-AC-CASE-007",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "HIT Management",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which interventions should the nurse anticipate for a patient with suspected heparin-induced thrombocytopenia? Select all that apply.",
    choices: [
      "Discontinue the heparin infusion",
      "Stop heparin-containing IV flushes",
      "Assess for new thrombosis",
      "Prepare to administer a non-heparin anticoagulant",
      "Document heparin as a serious medication reaction",
      "Administer low-molecular-weight heparin instead"
    ],
    answer: [
      "Discontinue the heparin infusion",
      "Stop heparin-containing IV flushes",
      "Assess for new thrombosis",
      "Prepare to administer a non-heparin anticoagulant",
      "Document heparin as a serious medication reaction"
    ],
    rationale:
      "HIT requires discontinuation of every source of heparin and assessment for thrombosis. Alternative anticoagulants such as argatroban may be prescribed. Low-molecular-weight heparin is generally avoided because of possible cross-reactivity.",
    takeaway:
      "With HIT, stop every heparin source and prepare for alternative anticoagulation."
  },
  {
    id: "PERF-AC-008",
    caseId: "PERF-AC-CASE-008",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Enoxaparin Administration",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which actions are appropriate when administering a prefilled enoxaparin injection? Select all that apply.",
    choices: [
      "Administer the medication into the anterolateral or posterolateral abdomen",
      "Rotate injection sites",
      "Leave the air bubble in the prefilled syringe",
      "Avoid aspirating before injection",
      "Avoid rubbing the site after injection",
      "Administer the medication intramuscularly"
    ],
    answer: [
      "Administer the medication into the anterolateral or posterolateral abdomen",
      "Rotate injection sites",
      "Leave the air bubble in the prefilled syringe",
      "Avoid aspirating before injection",
      "Avoid rubbing the site after injection"
    ],
    rationale:
      "Enoxaparin is administered subcutaneously in the abdominal wall. The air bubble in a prefilled syringe is generally not expelled, and aspiration or rubbing can increase bruising and tissue trauma.",
    takeaway:
      "Give enoxaparin subcutaneously in the abdomen without aspiration or rubbing."
  },
  {
    id: "PERF-AC-009",
    caseId: "PERF-AC-CASE-009",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Enoxaparin Safety",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which patient receiving enoxaparin requires the closest monitoring for medication accumulation and bleeding?",
    choices: [
      "A patient with severe renal impairment",
      "A patient with seasonal allergies",
      "A patient with normal renal function",
      "A patient with a healed ankle sprain"
    ],
    answer:
      "A patient with severe renal impairment",
    rationale:
      "Enoxaparin is cleared primarily through the kidneys. Reduced renal function can increase medication exposure and bleeding risk, so dosage adjustment and closer monitoring may be needed.",
    takeaway:
      "Renal impairment increases the risk of enoxaparin accumulation."
  },
  {
    id: "PERF-AC-010",
    caseId: "PERF-AC-CASE-010",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Enoxaparin Reversal",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement about reversal of enoxaparin is accurate?",
    choices: [
      "Protamine sulfate can partially reverse its anticoagulant effect",
      "Vitamin K completely reverses its effect",
      "Idarucizumab is the specific reversal medication",
      "Enoxaparin has no possible reversal treatment"
    ],
    answer:
      "Protamine sulfate can partially reverse its anticoagulant effect",
    rationale:
      "Protamine sulfate can neutralize much of enoxaparin's activity, but anti-factor Xa activity may not be completely reversed.",
    takeaway:
      "Protamine provides only partial reversal of enoxaparin."
  },
  {
    id: "PERF-AC-011",
    caseId: "PERF-AC-CASE-011",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Mechanism",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "How does warfarin produce its anticoagulant effect?",
    choices: [
      "It reduces synthesis of vitamin K-dependent clotting factors",
      "It directly dissolves fibrin clots",
      "It activates platelets",
      "It neutralizes thrombin already circulating in the blood"
    ],
    answer:
      "It reduces synthesis of vitamin K-dependent clotting factors",
    rationale:
      "Warfarin interferes with vitamin K activity in the liver, reducing production of vitamin K-dependent clotting factors. Its effect is delayed because previously produced clotting factors must first decline.",
    takeaway:
      "Warfarin is a vitamin K antagonist with a delayed onset."
  },
  {
    id: "PERF-AC-012",
    caseId: "PERF-AC-CASE-012",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Monitoring",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient taking warfarin for treatment of a DVT has an INR of 2.6. How should the nurse interpret this result?",
    choices: [
      "The value is generally within the therapeutic range for DVT treatment",
      "The patient has no anticoagulant effect",
      "The value indicates definite life-threatening hemorrhage",
      "The result is used only to monitor heparin"
    ],
    answer:
      "The value is generally within the therapeutic range for DVT treatment",
    rationale:
      "For many indications such as DVT, PE, and nonvalvular atrial fibrillation, a common INR goal is 2.0 to 3.0. The prescribed goal can differ based on the patient's condition.",
    takeaway:
      "Warfarin is monitored using PT/INR, commonly with a goal of 2 to 3."
  },
  {
    id: "PERF-AC-013",
    caseId: "PERF-AC-CASE-013",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Bridging",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Why might a patient with an acute DVT receive both heparin and warfarin during the first several days of treatment?",
    choices: [
      "Heparin provides immediate anticoagulation while warfarin gradually becomes therapeutic",
      "Warfarin immediately dissolves the clot while heparin prevents pain",
      "The medications reverse one another",
      "Warfarin prevents heparin-induced thrombocytopenia"
    ],
    answer:
      "Heparin provides immediate anticoagulation while warfarin gradually becomes therapeutic",
    rationale:
      "Warfarin has a delayed therapeutic onset. A rapidly acting parenteral anticoagulant may be continued during initiation until warfarin has produced an adequate therapeutic effect.",
    takeaway:
      "Heparin may bridge the delay before warfarin becomes therapeutic."
  },
  {
    id: "PERF-AC-014",
    caseId: "PERF-AC-CASE-014",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Teaching",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which instructions should the nurse provide to a patient taking warfarin? Select all that apply.",
    choices: [
      "Keep vitamin K intake consistent from week to week",
      "Attend scheduled INR testing appointments",
      "Ask the provider before taking aspirin or NSAIDs",
      "Report black stools or blood in the urine",
      "Inform healthcare providers and dentists about warfarin use",
      "Eliminate every food containing vitamin K"
    ],
    answer: [
      "Keep vitamin K intake consistent from week to week",
      "Attend scheduled INR testing appointments",
      "Ask the provider before taking aspirin or NSAIDs",
      "Report black stools or blood in the urine",
      "Inform healthcare providers and dentists about warfarin use"
    ],
    rationale:
      "Patients should maintain consistent vitamin K intake, complete INR monitoring, avoid interacting medications unless approved, and report bleeding. Vitamin K foods do not need to be completely eliminated.",
    takeaway:
      "Warfarin safety depends on INR monitoring, dietary consistency, and interaction awareness."
  },
  {
    id: "PERF-AC-015",
    caseId: "PERF-AC-CASE-015",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Pregnancy",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement by a patient taking warfarin requires immediate follow-up?",
    choices: [
      "I recently learned that I am pregnant",
      "I use a soft-bristled toothbrush",
      "I take my medication at the same time each day",
      "I keep my intake of leafy vegetables consistent"
    ],
    answer:
      "I recently learned that I am pregnant",
    rationale:
      "Warfarin can cause fetal harm and is generally contraindicated during pregnancy, although rare exceptions may apply under specialist management. The provider should be notified immediately.",
    takeaway:
      "Pregnancy during warfarin therapy requires immediate provider notification."
  },
  {
    id: "PERF-AC-016",
    caseId: "PERF-AC-CASE-016",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Warfarin Reversal",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient taking warfarin has an INR of 8.4 and active gastrointestinal bleeding. Which treatments should the nurse anticipate?",
    choices: [
      "Hold warfarin and administer vitamin K with four-factor prothrombin complex concentrate as prescribed",
      "Administer an additional dose of warfarin",
      "Administer protamine sulfate only",
      "Encourage foods low in vitamin K and reassess next month"
    ],
    answer:
      "Hold warfarin and administer vitamin K with four-factor prothrombin complex concentrate as prescribed",
    rationale:
      "Major bleeding associated with excessive warfarin effect requires immediate discontinuation and rapid replacement of clotting factors, commonly with four-factor PCC, along with vitamin K for sustained reversal.",
    takeaway:
      "Major warfarin bleeding may require vitamin K plus rapid factor replacement."
  },
  {
    id: "PERF-AC-017",
    caseId: "PERF-AC-CASE-017",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Direct Oral Anticoagulants",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medications are classified as direct oral anticoagulants? Select all that apply.",
    choices: [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran",
      "Edoxaban",
      "Warfarin",
      "Unfractionated heparin"
    ],
    answer: [
      "Apixaban",
      "Rivaroxaban",
      "Dabigatran",
      "Edoxaban"
    ],
    rationale:
      "Apixaban, rivaroxaban, and edoxaban directly inhibit factor Xa. Dabigatran directly inhibits thrombin. Warfarin and heparin belong to different anticoagulant classes.",
    takeaway:
      "DOACs include direct factor Xa inhibitors and the direct thrombin inhibitor dabigatran."
  },
  {
    id: "PERF-AC-018",
    caseId: "PERF-AC-CASE-018",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "DOAC Teaching",
    style: "Teaching",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement by a patient taking apixaban indicates a need for further teaching?",
    choices: [
      "I can stop taking the medication when I feel better",
      "I will report unusual bleeding or bruising",
      "I will tell my dentist that I take an anticoagulant",
      "I will take the medication according to the prescribed schedule"
    ],
    answer:
      "I can stop taking the medication when I feel better",
    rationale:
      "Abruptly discontinuing an anticoagulant can increase the risk of thrombosis. Patients should not stop or change the medication without instructions from the prescriber.",
    takeaway:
      "Adherence is critical because missed or stopped DOAC therapy can quickly reduce protection."
  },
  {
    id: "PERF-AC-019",
    caseId: "PERF-AC-CASE-019",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "DOAC Monitoring",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which statement about laboratory monitoring for direct oral anticoagulants is accurate?",
    choices: [
      "Routine INR monitoring is generally not required, but renal function and bleeding should be assessed",
      "The INR must be checked before every dose",
      "The aPTT is used to adjust every apixaban dose",
      "No laboratory or clinical monitoring is ever needed"
    ],
    answer:
      "Routine INR monitoring is generally not required, but renal function and bleeding should be assessed",
    rationale:
      "DOACs do not usually require routine dose adjustment using INR. However, renal and hepatic function, blood counts, adherence, drug interactions, and bleeding remain important.",
    takeaway:
      "DOACs avoid routine INR testing but still require clinical and organ-function monitoring."
  },
  {
    id: "PERF-AC-020",
    caseId: "PERF-AC-CASE-020",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "DOAC Reversal",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication is the specific reversal agent for dabigatran?",
    choices: [
      "Idarucizumab",
      "Protamine sulfate",
      "Phytonadione",
      "Alteplase"
    ],
    answer:
      "Idarucizumab",
    rationale:
      "Idarucizumab binds dabigatran and is used when rapid reversal is needed for life-threatening bleeding or urgent procedures.",
    takeaway:
      "Dabigatran reversal agent: idarucizumab."
  },
  {
    id: "PERF-AC-021",
    caseId: "PERF-AC-CASE-021",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Factor Xa Reversal",
    style: "Recognition",
    difficulty: "ATI",
    bloom: "Remember",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which medication may be used to reverse life-threatening bleeding caused by apixaban or rivaroxaban?",
    choices: [
      "Andexanet alfa",
      "Idarucizumab",
      "Vitamin K",
      "Naloxone"
    ],
    answer:
      "Andexanet alfa",
    rationale:
      "Andexanet alfa is a reversal agent for anticoagulation caused by certain direct factor Xa inhibitors, including apixaban and rivaroxaban, when reversal is required for life-threatening or uncontrolled bleeding.",
    takeaway:
      "Factor Xa inhibitor reversal: andexanet alfa when clinically indicated."
  },
  {
    id: "PERF-AC-022",
    caseId: "PERF-AC-CASE-022",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Alteplase",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which findings can contraindicate or significantly increase the risk of alteplase therapy? Select all that apply.",
    choices: [
      "Active internal bleeding",
      "History of intracranial hemorrhage",
      "Recent major surgery",
      "Severe uncontrolled hypertension",
      "Suspected aortic dissection",
      "Stable chronic hypertension controlled with medication"
    ],
    answer: [
      "Active internal bleeding",
      "History of intracranial hemorrhage",
      "Recent major surgery",
      "Severe uncontrolled hypertension",
      "Suspected aortic dissection"
    ],
    rationale:
      "Alteplase breaks down fibrin and can cause severe bleeding. Active bleeding, intracranial hemorrhage history, recent major surgery, uncontrolled hypertension, and suspected dissection are major safety concerns.",
    takeaway:
      "Before thrombolytics, screen carefully for bleeding and vascular contraindications."
  },
  {
    id: "PERF-AC-023",
    caseId: "PERF-AC-CASE-023",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Alteplase Complications",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "A patient receiving alteplase suddenly reports a severe headache and begins vomiting. What should the nurse do first?",
    choices: [
      "Stop the infusion and notify the provider or rapid-response team immediately",
      "Administer aspirin",
      "Encourage the patient to ambulate",
      "Reassure the patient that this is an expected effect"
    ],
    answer:
      "Stop the infusion and notify the provider or rapid-response team immediately",
    rationale:
      "Sudden severe headache, vomiting, altered consciousness, or neurologic changes during thrombolytic therapy may indicate intracranial hemorrhage. The infusion should be stopped and emergency evaluation initiated.",
    takeaway:
      "Neurologic changes during thrombolytic therapy may signal intracranial bleeding."
  },
  {
    id: "PERF-AC-024",
    caseId: "PERF-AC-CASE-024",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "Bleeding Precautions",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
      "Which instructions should the nurse include for a patient receiving long-term anticoagulant therapy? Select all that apply.",
    choices: [
      "Use a soft-bristled toothbrush",
      "Use an electric razor",
      "Avoid contact sports and activities with a high fall risk",
      "Report prolonged nosebleeds",
      "Report black stools, red urine, or unusually heavy menstrual bleeding",
      "Take aspirin for headaches unless specifically prohibited"
    ],
    answer: [
      "Use a soft-bristled toothbrush",
      "Use an electric razor",
      "Avoid contact sports and activities with a high fall risk",
      "Report prolonged nosebleeds",
      "Report black stools, red urine, or unusually heavy menstrual bleeding"
    ],
    rationale:
      "Patients should minimize trauma and report evidence of internal or prolonged bleeding. Aspirin and NSAIDs can increase bleeding risk and should not be taken unless approved.",
    takeaway:
      "Anticoagulant teaching focuses on preventing trauma and recognizing bleeding early."
  },
  {
    id: "PERF-AC-025",
    caseId: "PERF-AC-CASE-025",
    patient: randomPatient(),
    topic: "Anticoagulants",
    subtopic: "NGN Priority Case",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safe and Effective Care Environment",
    question:
      "A patient receiving IV heparin for a pulmonary embolism reports new severe lower-back pain. The blood pressure decreases from 128/76 mm Hg to 88/54 mm Hg, the heart rate is 124/min, and the hemoglobin has decreased by 3 g/dL. Which action is the priority?",
    choices: [
      "Stop the heparin infusion and initiate emergency evaluation for internal bleeding",
      "Increase the heparin infusion because the patient remains at risk for embolism",
      "Assist the patient to ambulate to improve circulation",
      "Administer the next scheduled anticoagulant dose and reassess in 4 hours"
    ],
    answer:
      "Stop the heparin infusion and initiate emergency evaluation for internal bleeding",
    rationale:
      "Severe back pain, hypotension, tachycardia, and a significant decrease in hemoglobin suggest a retroperitoneal or other major internal hemorrhage. Heparin should be stopped, emergency assistance obtained, and reversal and resuscitation anticipated.",
    takeaway:
      "Back or abdominal pain with shock findings during anticoagulation can indicate major internal bleeding."
  }
];
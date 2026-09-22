const strokePriorityNgnQuestions = [

{
  id: "CVA-NGN-001",
  caseId: "CVA-NGN-CASE-01",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops right facial droop, right arm weakness, and difficulty speaking. Which finding is most important for the nurse to determine immediately after addressing ABCs?",
  choices: [
    "The exact last-known-well time",
    "The client's usual sleep schedule",
    "The client's preferred pharmacy",
    "The client's most recent meal"
  ],
  answer: "The exact last-known-well time",
  rationale: "Last-known-well time is essential because eligibility for time-sensitive stroke treatment depends partly on when the client was last known to be neurologically normal.",
  takeaway: "After ABCs, establish last-known-well immediately."
},

{
  id: "CVA-NGN-002",
  caseId: "CVA-NGN-CASE-01",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "The client's airway is patent, oxygenation is adequate, and last-known-well was 45 minutes ago. Which bedside test should the nurse prioritize because an abnormal result can mimic stroke symptoms?",
  choices: [
    "Blood glucose",
    "Serum cholesterol",
    "Hemoglobin A1c",
    "Urine specific gravity"
  ],
  answer: "Blood glucose",
  rationale: "Hypoglycemia can produce neurologic manifestations that mimic an acute stroke. Rapid glucose assessment is part of the initial stroke evaluation.",
  takeaway: "Check glucose early because hypoglycemia can mimic stroke."
},

{
  id: "CVA-NGN-003",
  caseId: "CVA-NGN-CASE-01",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client's glucose is normal. Assessment shows right face and arm weakness greater than leg weakness and expressive aphasia. Which vascular territory is most consistent with these findings?",
  choices: [
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Right posterior cerebral artery",
    "Vertebrobasilar circulation"
  ],
  answer: "Left middle cerebral artery",
  rationale: "Right-sided face and arm weakness indicates left cerebral involvement. MCA strokes commonly produce face and arm deficits greater than leg deficits, and dominant left MCA involvement can produce aphasia.",
  takeaway: "Right face/arm weakness + aphasia = think left MCA."
},

{
  id: "CVA-NGN-004",
  caseId: "CVA-NGN-CASE-01",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Diagnostics",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which diagnostic study should the nurse anticipate FIRST to differentiate ischemic from hemorrhagic stroke?",
  choices: [
    "Noncontrast head CT",
    "Electroencephalogram",
    "Skull x-ray",
    "Lumbar puncture"
  ],
  answer: "Noncontrast head CT",
  rationale: "A rapid noncontrast CT is used to identify intracranial hemorrhage and guide acute stroke treatment decisions.",
  takeaway: "Suspected stroke → rapid noncontrast CT."
},

{
  id: "CVA-NGN-005",
  caseId: "CVA-NGN-CASE-01",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client's noncontrast CT shows no hemorrhage and no obvious acute infarction. The client continues to have disabling right-sided weakness and aphasia. Which interpretation is most appropriate?",
  choices: [
    "Hyperacute ischemic stroke may still be present despite no obvious early CT changes.",
    "The normal CT completely rules out stroke.",
    "The client must have a hemorrhagic stroke.",
    "The neurologic symptoms are no longer urgent."
  ],
  answer: "Hyperacute ischemic stroke may still be present despite no obvious early CT changes.",
  rationale: "Hyperacute ischemic changes may not yet be visible on noncontrast CT. The initial CT is especially important for ruling out hemorrhage.",
  takeaway: "A normal early CT does not rule out ischemic stroke."
},

{
  id: "CVA-NGN-006",
  caseId: "CVA-NGN-CASE-02",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden left arm weakness and slurred speech that lasted 20 minutes and completely resolved before arrival. Which interpretation should the nurse make?",
  choices: [
    "The episode may represent a transient ischemic attack and requires urgent evaluation.",
    "The episode can be ignored because the symptoms resolved.",
    "The episode confirms a hemorrhagic stroke.",
    "The symptoms are expected with normal aging."
  ],
  answer: "The episode may represent a transient ischemic attack and requires urgent evaluation.",
  rationale: "A TIA produces temporary neurologic dysfunction. Resolution of symptoms does not eliminate concern because a TIA can be an important warning of future stroke.",
  takeaway: "Transient neurologic symptoms still require urgent evaluation."
},

{
  id: "CVA-NGN-007",
  caseId: "CVA-NGN-CASE-02",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which conditions may contribute to a transient ischemic attack according to the course content? Select all that apply.",
  choices: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Cerebral perfusion interruption",
    "Normal cerebral circulation",
    "Improved collateral blood flow"
  ],
  answer: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Cerebral perfusion interruption"
  ],
  rationale: "TIA may result from temporary cerebral perfusion interruption associated with vascular disease such as carotid stenosis or plaque and embolic sources such as atrial fibrillation.",
  takeaway: "TIA points to an underlying perfusion problem that needs evaluation."
},

{
  id: "CVA-NGN-008",
  caseId: "CVA-NGN-CASE-02",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which modifiable risk factor should receive major emphasis when teaching a client about stroke prevention?",
  choices: [
    "Hypertension",
    "Age",
    "Family history",
    "Biological sex"
  ],
  answer: "Hypertension",
  rationale: "The course identifies hypertension as the strongest modifiable risk factor for stroke.",
  takeaway: "Hypertension is a major modifiable stroke risk factor."
},

{
  id: "CVA-NGN-009",
  caseId: "CVA-NGN-CASE-03",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombotic Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client with hypertension, diabetes, and hyperlipidemia has experienced several TIAs. Today the client develops neurologic deficits that gradually worsen over several hours. Which type of ischemic stroke is most consistent with this pattern?",
  choices: [
    "Thrombotic stroke",
    "Embolic stroke",
    "Subarachnoid hemorrhage",
    "Intracerebral hemorrhage"
  ],
  answer: "Thrombotic stroke",
  rationale: "Thrombotic strokes develop from local vascular disease and may have a gradual or stepwise progression. Previous TIAs and vascular risk factors support this pattern.",
  takeaway: "Thrombotic stroke often has local plaque disease and gradual or stepwise progression."
},

{
  id: "CVA-NGN-010",
  caseId: "CVA-NGN-CASE-03",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Embolic Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client with atrial fibrillation suddenly develops severe neurologic deficits that are maximal at onset. Which mechanism should the nurse suspect?",
  choices: [
    "An embolus traveled to a cerebral artery.",
    "A local thrombus gradually enlarged over several days.",
    "CSF accumulated within the ventricles.",
    "A cerebral aneurysm slowly reduced CSF production."
  ],
  answer: "An embolus traveled to a cerebral artery.",
  rationale: "Embolic stroke typically has sudden onset with deficits that may be maximal immediately. Atrial fibrillation is an important cardiac source of emboli.",
  takeaway: "AFib + sudden maximal deficit = think embolic stroke."
},

{
  id: "CVA-NGN-011",
  caseId: "CVA-NGN-CASE-03",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which findings correctly distinguish thrombotic from embolic ischemic stroke? Select all that apply.",
  choices: [
    "Thrombotic stroke may progress gradually or stepwise.",
    "Embolic stroke is often sudden and maximal at onset.",
    "Previous TIAs may occur before thrombotic stroke.",
    "Atrial fibrillation is an important embolic source.",
    "Embolic stroke always develops gradually over several days.",
    "Thrombotic stroke is caused only by ruptured aneurysms."
  ],
  answer: [
    "Thrombotic stroke may progress gradually or stepwise.",
    "Embolic stroke is often sudden and maximal at onset.",
    "Previous TIAs may occur before thrombotic stroke.",
    "Atrial fibrillation is an important embolic source."
  ],
  rationale: "Thrombotic stroke is associated with local vascular disease and may evolve gradually. Embolic stroke typically occurs suddenly when material travels to and obstructs a cerebral vessel.",
  takeaway: "Gradual/stepwise suggests thrombotic; sudden/maximal suggests embolic."
},

{
  id: "CVA-NGN-012",
  caseId: "CVA-NGN-CASE-04",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracerebral Hemorrhage",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a history of severe uncontrolled hypertension develops headache, vomiting, rapidly worsening neurologic deficits, and decreased level of consciousness. CT shows hyperdense blood within the brain tissue. Which condition is most consistent with these findings?",
  choices: [
    "Intracerebral hemorrhage",
    "Transient ischemic attack",
    "Thrombotic ischemic stroke",
    "Stable hydrocephalus"
  ],
  answer: "Intracerebral hemorrhage",
  rationale: "Intracerebral hemorrhage involves bleeding into brain tissue. Severe hypertension is an important cause, and CT demonstrates acute blood as hyperdense or bright.",
  takeaway: "Severe HTN + neuro decline + bright intraparenchymal blood = ICH."
},

{
  id: "CVA-NGN-013",
  caseId: "CVA-NGN-CASE-04",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracerebral Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with intracerebral hemorrhage becomes increasingly difficult to arouse and begins vomiting. Which complication should the nurse prioritize?",
  choices: [
    "Increasing ICP from edema and mass effect",
    "Resolution of the hemorrhage",
    "Improved cerebral perfusion",
    "Transient expressive aphasia only"
  ],
  answer: "Increasing ICP from edema and mass effect",
  rationale: "Intracerebral bleeding can produce cerebral edema and mass effect, increasing ICP. Declining consciousness and vomiting are concerning signs of neurologic deterioration.",
  takeaway: "ICH can worsen through edema, mass effect, and rising ICP."
},

{
  id: "CVA-NGN-014",
  caseId: "CVA-NGN-CASE-05",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly reports the worst headache of their life and develops neck stiffness and photophobia. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic stroke",
    "Transient ischemic attack",
    "Chronic hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "SAH classically presents with sudden severe headache and may include neck stiffness and photophobia. A ruptured cerebral aneurysm is a common cause.",
  takeaway: "Worst headache + neck stiffness/photophobia = suspect SAH."
},

{
  id: "CVA-NGN-015",
  caseId: "CVA-NGN-CASE-05",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication should the nurse expect to administer on schedule to a client with subarachnoid hemorrhage to reduce complications associated with cerebral vasospasm?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Warfarin"
  ],
  answer: "Nimodipine",
  rationale: "The course identifies nimodipine as an important scheduled medication following SAH because cerebral vasospasm is a major delayed complication.",
  takeaway: "SAH → think scheduled nimodipine and vasospasm surveillance."
},

{
  id: "CVA-NGN-016",
  caseId: "CVA-NGN-CASE-05",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "During which period should the nurse remain especially alert for cerebral vasospasm after a subarachnoid hemorrhage according to the course?",
  choices: [
    "Days 3 through 14",
    "Only during the first 5 minutes",
    "Only after 6 months",
    "Only before the hemorrhage occurs"
  ],
  answer: "Days 3 through 14",
  rationale: "The course identifies cerebral vasospasm as an important delayed complication of SAH, particularly during days 3 through 14.",
  takeaway: "SAH vasospasm risk is especially important during days 3–14."
},

{
  id: "CVA-NGN-017",
  caseId: "CVA-NGN-CASE-05",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several days after a subarachnoid hemorrhage, a client develops a new focal neurologic deficit and worsening confusion. Which complication should the nurse suspect?",
  choices: [
    "Cerebral vasospasm",
    "Normal neurologic recovery",
    "Resolution of cerebral injury",
    "Improved cerebral blood flow"
  ],
  answer: "Cerebral vasospasm",
  rationale: "Delayed cerebral vasospasm following SAH can reduce cerebral blood flow and produce new neurologic deficits or worsening neurologic status.",
  takeaway: "New neuro deficits days after SAH should raise concern for vasospasm."
},

{
  id: "CVA-NGN-018",
  caseId: "CVA-NGN-CASE-06",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which finding must be established before thrombolytic therapy is considered for an acute ischemic stroke?",
  choices: [
    "Noncontrast CT shows no intracranial hemorrhage.",
    "The client has a confirmed intracranial hemorrhage.",
    "The client has active bleeding.",
    "The client's symptoms have been present for several days."
  ],
  answer: "Noncontrast CT shows no intracranial hemorrhage.",
  rationale: "Thrombolytic therapy is used for selected ischemic strokes. Intracranial hemorrhage must first be excluded because thrombolytics can worsen bleeding.",
  takeaway: "No thrombolytic until hemorrhage is excluded."
},

{
  id: "CVA-NGN-019",
  caseId: "CVA-NGN-CASE-06",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "According to the course criteria, which blood pressure must be achieved before thrombolytic treatment can proceed?",
  choices: [
    "Below 185/110 mmHg",
    "Below 220/140 mmHg",
    "Exactly 120/80 mmHg",
    "Below 90/60 mmHg"
  ],
  answer: "Below 185/110 mmHg",
  rationale: "The course identifies a blood pressure below 185/110 mmHg as a requirement before thrombolytic treatment.",
  takeaway: "Know the pre-thrombolytic BP threshold: <185/110 mmHg."
},

{
  id: "CVA-NGN-020",
  caseId: "CVA-NGN-CASE-06",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "According to the course content, which findings are important when evaluating a client for thrombolytic therapy? Select all that apply.",
  choices: [
    "Noncontrast CT shows no hemorrhage.",
    "Last-known-well is within the treatment window.",
    "Blood pressure is below the required threshold.",
    "There is no active bleeding.",
    "Coagulation studies are acceptable.",
    "The client has a confirmed intracranial hemorrhage."
  ],
  answer: [
    "Noncontrast CT shows no hemorrhage.",
    "Last-known-well is within the treatment window.",
    "Blood pressure is below the required threshold.",
    "There is no active bleeding.",
    "Coagulation studies are acceptable."
  ],
  rationale: "The course emphasizes time from last-known-well, exclusion of hemorrhage, blood pressure control, absence of active bleeding, and acceptable coagulation status when evaluating thrombolytic eligibility.",
  takeaway: "Thrombolytic safety depends on time, CT, BP, bleeding risk, and coagulation status."
},

{
  id: "CVA-NGN-021",
  caseId: "CVA-NGN-CASE-06",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving thrombolytic therapy suddenly reports a severe headache and begins vomiting. Which action should the nurse take FIRST?",
  choices: [
    "Stop the infusion and immediately report the neurologic change.",
    "Continue the infusion because headache is expected.",
    "Give the client food and fluids.",
    "Wait until the infusion is completed before reassessing."
  ],
  answer: "Stop the infusion and immediately report the neurologic change.",
  rationale: "A sudden severe headache, vomiting, acute hypertension, bleeding, or neurologic deterioration during thrombolytic therapy may indicate intracranial hemorrhage. The course directs the nurse to stop the infusion and escalate immediately.",
  takeaway: "New severe headache during thrombolytic therapy = stop and suspect bleeding."
},

{
  id: "CVA-NGN-022",
  caseId: "CVA-NGN-CASE-06",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings during thrombolytic therapy should cause the nurse to stop the infusion and suspect intracranial hemorrhage? Select all that apply.",
  choices: [
    "Sudden severe headache",
    "Sudden blood pressure spike",
    "Nausea and vomiting",
    "New neurologic decline",
    "Unexpected bleeding",
    "Improving motor strength"
  ],
  answer: [
    "Sudden severe headache",
    "Sudden blood pressure spike",
    "Nausea and vomiting",
    "New neurologic decline",
    "Unexpected bleeding"
  ],
  rationale: "The course identifies severe new headache, sudden BP elevation, nausea and vomiting, neurologic deterioration, and bleeding as warning signs requiring immediate discontinuation and evaluation for hemorrhage.",
  takeaway: "During thrombolysis, sudden deterioration means think bleeding."
},

{
  id: "CVA-NGN-023",
  caseId: "CVA-NGN-CASE-07",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops vertigo, diplopia, dysarthria, dysphagia, and severe gait instability. Hand grasps remain equal. Which interpretation is most appropriate?",
  choices: [
    "The client may have a vertebrobasilar stroke despite preserved hand strength.",
    "Equal hand grasps rule out stroke.",
    "The findings indicate only an inner-ear disorder.",
    "The findings are characteristic of an isolated ACA stroke."
  ],
  answer: "The client may have a vertebrobasilar stroke despite preserved hand strength.",
  rationale: "Posterior circulation strokes can produce brainstem and cerebellar findings without prominent unilateral weakness. Preserved strength does not rule out stroke.",
  takeaway: "Posterior strokes can be missed when clinicians look only for weakness."
},

{
  id: "CVA-NGN-024",
  caseId: "CVA-NGN-CASE-07",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client with suspected vertebrobasilar stroke develops increasing difficulty swallowing secretions. Which problem should the nurse address FIRST?",
  choices: [
    "Airway protection",
    "Long-term mobility planning",
    "Visual rehabilitation",
    "Discharge transportation"
  ],
  answer: "Airway protection",
  rationale: "Dysphagia can compromise airway protection and increase aspiration risk. ABC priorities remain the first consideration.",
  takeaway: "Posterior stroke + inability to manage secretions = airway priority."
},

{
  id: "CVA-NGN-025",
  caseId: "CVA-NGN-CASE-07",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client with vertebrobasilar stroke becomes less responsive and develops irregular respirations. Which interpretation should guide the nurse's response?",
  choices: [
    "Brainstem involvement may now be affecting vital respiratory centers.",
    "The stroke is resolving.",
    "The findings are expected with stable cerebellar injury.",
    "The client should be allowed to sleep without reassessment."
  ],
  answer: "Brainstem involvement may now be affecting vital respiratory centers.",
  rationale: "The vertebrobasilar circulation supplies the brainstem. Declining consciousness and abnormal respirations can indicate life-threatening involvement of vital centers.",
  takeaway: "Posterior circulation deterioration can become an ABC emergency."
},

{
  id: "CVA-NGN-026",
  caseId: "CVA-NGN-CASE-08",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large MCA stroke was alert earlier in the shift. The client now has worsening headache, repeated vomiting, and increasing drowsiness. Which complication should the nurse suspect?",
  choices: [
    "Cerebral edema with increasing intracranial pressure",
    "Normal neurologic recovery",
    "Resolution of the stroke",
    "Improved cerebral perfusion"
  ],
  answer: "Cerebral edema with increasing intracranial pressure",
  rationale: "Large strokes can produce cerebral edema. Worsening headache, vomiting, and declining consciousness are concerning for increasing ICP.",
  takeaway: "Large stroke + worsening neuro status = consider edema and ICP."
},

{
  id: "CVA-NGN-027",
  caseId: "CVA-NGN-CASE-08",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change in the client's condition is the earliest and most important indicator of worsening intracranial pressure?",
  choices: [
    "Declining level of consciousness",
    "Fixed dilated pupil",
    "Decerebrate posturing",
    "Cushing triad"
  ],
  answer: "Declining level of consciousness",
  rationale: "The course emphasizes declining level of consciousness as the earliest and most important indicator of increasing ICP.",
  takeaway: "Do not wait for late ICP signs—watch LOC."
},

{
  id: "CVA-NGN-028",
  caseId: "CVA-NGN-CASE-08",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which findings would indicate that the client's increased ICP has progressed to a late stage? Select all that apply.",
  choices: [
    "Fixed or dilated pupil",
    "Abnormal posturing",
    "Bradycardia",
    "Widening pulse pressure",
    "Irregular respirations",
    "Mild restlessness"
  ],
  answer: [
    "Fixed or dilated pupil",
    "Abnormal posturing",
    "Bradycardia",
    "Widening pulse pressure",
    "Irregular respirations"
  ],
  rationale: "Pupillary abnormalities, posturing, and Cushing triad are late findings of severe ICP elevation. Mild restlessness may occur earlier.",
  takeaway: "Late ICP signs mean severe neurologic deterioration."
},

{
  id: "CVA-NGN-029",
  caseId: "CVA-NGN-CASE-08",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client now has a right fixed dilated pupil and worsening left-sided weakness. Which complication is most consistent with this pattern?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can produce an ipsilateral fixed dilated pupil and contralateral motor weakness.",
  takeaway: "Blown pupil same side + weakness opposite side = uncal herniation."
},

{
  id: "CVA-NGN-030",
  caseId: "CVA-NGN-CASE-08",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client develops BP 204/64 mmHg, HR 42/min, and irregular respirations. Which conclusion should the nurse make?",
  choices: [
    "The client is demonstrating Cushing triad from severe increased ICP.",
    "The client is demonstrating improved cerebral perfusion.",
    "The client's cerebral edema has resolved.",
    "The findings indicate uncomplicated rehabilitation."
  ],
  answer: "The client is demonstrating Cushing triad from severe increased ICP.",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations constitutes Cushing triad, a late sign of severe increased ICP.",
  takeaway: "Cushing triad = late ICP emergency."
},

{
  id: "CVA-NGN-031",
  caseId: "CVA-NGN-CASE-09",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops progressive headache, vomiting, blurred vision, and declining consciousness. Imaging shows enlarged cerebral ventricles. Which condition is most consistent with these findings?",
  choices: [
    "Hydrocephalus",
    "Transient ischemic attack",
    "Isolated expressive aphasia",
    "Stable atrial fibrillation"
  ],
  answer: "Hydrocephalus",
  rationale: "Hydrocephalus involves excessive CSF accumulation with ventricular enlargement and can produce manifestations of increasing ICP.",
  takeaway: "Enlarged ventricles + ICP symptoms = hydrocephalus."
},

{
  id: "CVA-NGN-032",
  caseId: "CVA-NGN-CASE-09",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client with acute hydrocephalus has an external ventricular drain placed. Which assessment finding requires the most immediate follow-up?",
  choices: [
    "New decline in level of consciousness",
    "Chronic urinary incontinence",
    "Mild anxiety about hospitalization",
    "Request for assistance with bathing"
  ],
  answer: "New decline in level of consciousness",
  rationale: "A new decline in consciousness can indicate worsening ICP, ineffective CSF drainage, or another acute neurologic complication.",
  takeaway: "EVD present does not make new neurologic deterioration normal."
},

{
  id: "CVA-NGN-033",
  caseId: "CVA-NGN-CASE-09",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "The client with an EVD develops fever, redness at the insertion site, cloudy-appearing CSF, and increasing confusion. Which complication should the nurse prioritize?",
  choices: [
    "CSF drainage-system infection",
    "Normal response to CSF drainage",
    "Resolution of hydrocephalus",
    "Improved intracranial compliance"
  ],
  answer: "CSF drainage-system infection",
  rationale: "Fever, insertion-site redness, abnormal CSF appearance, and neurologic deterioration are concerning for infection associated with a CSF drainage device.",
  takeaway: "EVD infection may produce fever, local changes, abnormal CSF, and neuro decline."
},

{
  id: "CVA-NGN-034",
  caseId: "CVA-NGN-CASE-10",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with cerebral edema receives mannitol. Which assessment data are most important for the nurse to monitor?",
  choices: [
    "Renal function, serum osmolarity, electrolytes, intake and output, and neurologic status",
    "Visual acuity and hearing only",
    "Bowel sounds and stool color only",
    "Skin temperature only"
  ],
  answer: "Renal function, serum osmolarity, electrolytes, intake and output, and neurologic status",
  rationale: "Mannitol is an osmotic diuretic. The course emphasizes monitoring renal function, serum osmolarity, electrolytes, fluid balance, and neurologic response.",
  takeaway: "Mannitol requires kidney, osmolality, fluid, electrolyte, and neuro monitoring."
},

{
  id: "CVA-NGN-035",
  caseId: "CVA-NGN-CASE-10",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol develops worsening renal function and excessive serum osmolality. Which action should the nurse anticipate?",
  choices: [
    "Hold the medication and notify the provider according to the treatment plan.",
    "Increase the mannitol dose.",
    "Ignore the laboratory findings.",
    "Administer another dose immediately."
  ],
  answer: "Hold the medication and notify the provider according to the treatment plan.",
  rationale: "Renal dysfunction and excessive serum osmolality are concerning during mannitol therapy and require reassessment of continued treatment.",
  takeaway: "Mannitol safety depends on kidney function and serum osmolality."
},

{
  id: "CVA-NGN-036",
  caseId: "CVA-NGN-CASE-10",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops bilateral crackles and increasing oxygen requirements. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expected therapeutic response",
    "Resolution of cerebral edema",
    "Isolated receptive aphasia"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can expand intravascular volume. Lung sounds and volume status must be monitored because pulmonary edema can occur.",
  takeaway: "Hypertonic saline: monitor sodium, lungs, fluid status, and neuro status."
},

{
  id: "CVA-NGN-037",
  caseId: "CVA-NGN-CASE-11",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client has increased ICP. Which position is most appropriate unless contraindicated?",
  choices: [
    "Head of bed about 30 degrees with the head neutral and midline",
    "Flat with the neck sharply flexed",
    "Trendelenburg with the hips flexed",
    "Prone with the head rotated sharply"
  ],
  answer: "Head of bed about 30 degrees with the head neutral and midline",
  rationale: "Head elevation and neutral alignment promote cerebral venous drainage and help avoid additional increases in ICP.",
  takeaway: "ICP positioning = HOB about 30° + neutral midline head."
},

{
  id: "CVA-NGN-038",
  caseId: "CVA-NGN-CASE-11",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions are appropriate for a client with increased ICP? Select all that apply.",
  choices: [
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Prevent hypoxia.",
    "Prevent hypotension.",
    "Perform prolonged unnecessary suctioning."
  ],
  answer: [
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Prevent hypoxia.",
    "Prevent hypotension."
  ],
  rationale: "ICP care promotes cerebral venous drainage and prevents secondary brain injury. Neck and hip flexion, excessive stimulation, hypoxia, and hypotension can worsen the client's condition.",
  takeaway: "Protect venous drainage, oxygenation, and cerebral perfusion."
},

{
  id: "CVA-NGN-039",
  caseId: "CVA-NGN-CASE-11",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP requires suctioning because of retained secretions. Which nursing action is most appropriate?",
  choices: [
    "Hyperoxygenate before and after necessary suctioning.",
    "Suction repeatedly for prolonged periods.",
    "Flex the client's neck during suctioning.",
    "Lower the head of the bed into Trendelenburg."
  ],
  answer: "Hyperoxygenate before and after necessary suctioning.",
  rationale: "Suctioning can increase ICP and contribute to hypoxia. The course emphasizes hyperoxygenation before and after suctioning.",
  takeaway: "If suctioning is necessary, support oxygenation and minimize the ICP insult."
},

{
  id: "CVA-NGN-040",
  caseId: "CVA-NGN-CASE-12",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Priority",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with cerebral edema who has a new fixed pupil and decreasing consciousness",
    "A client with stable expressive aphasia after a left MCA stroke",
    "A client with chronic left-sided weakness after a right MCA stroke",
    "A client with a PCA stroke who has an unchanged visual field deficit"
  ],
  answer: "A client with cerebral edema who has a new fixed pupil and decreasing consciousness",
  rationale: "A new fixed pupil with declining consciousness is an ominous sign of severe increased ICP and possible brain herniation. The other clients have stable deficits.",
  takeaway: "New neurologic deterioration outranks stable stroke deficits."
},

{
  id: "CVA-NGN-041",
  caseId: "CVA-NGN-CASE-13",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops right facial droop, right arm weakness greater than right leg weakness, and difficulty producing words. Which cerebral artery is most likely affected?",
  choices: [
    "Left middle cerebral artery",
    "Right middle cerebral artery",
    "Left anterior cerebral artery",
    "Right posterior cerebral artery"
  ],
  answer: "Left middle cerebral artery",
  rationale: "The left MCA supplies areas responsible for language and motor function of the contralateral face and upper extremity. Right face and arm weakness with expressive aphasia strongly suggests a left MCA stroke.",
  takeaway: "Right face/arm weakness + aphasia = left MCA."
},

{
  id: "CVA-NGN-042",
  caseId: "CVA-NGN-CASE-13",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client understands the nurse's questions and follows commands but becomes frustrated because only a few words can be spoken. Which deficit is most consistent with this finding?",
  choices: [
    "Broca expressive aphasia",
    "Wernicke receptive aphasia",
    "Left-sided neglect",
    "Visual agnosia"
  ],
  answer: "Broca expressive aphasia",
  rationale: "Broca aphasia is characterized by impaired speech production with relatively preserved comprehension. Clients are often aware of the deficit and may become frustrated.",
  takeaway: "Broca = understands but cannot get the words out."
},

{
  id: "CVA-NGN-043",
  caseId: "CVA-NGN-CASE-13",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing intervention is most appropriate when communicating with this client?",
  choices: [
    "Ask simple questions and allow extra time for the client to respond.",
    "Speak loudly because the client cannot understand language.",
    "Complete every sentence for the client.",
    "Avoid communication until speech returns."
  ],
  answer: "Ask simple questions and allow extra time for the client to respond.",
  rationale: "A client with expressive aphasia may understand what is being said but have difficulty producing speech. Simple communication and adequate response time support the client's ability to communicate.",
  takeaway: "Expressive aphasia requires patience, simple questions, and time."
},

{
  id: "CVA-NGN-044",
  caseId: "CVA-NGN-CASE-14",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has left facial and arm weakness, ignores the left side of the body, and repeatedly attempts to get out of bed without assistance. Which vascular territory is most likely involved?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "A right MCA stroke can produce left-sided motor and sensory deficits, spatial-perceptual problems, and left-sided neglect.",
  takeaway: "Left weakness + neglect = think right MCA."
},

{
  id: "CVA-NGN-045",
  caseId: "CVA-NGN-CASE-14",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which nursing problem has the highest priority for this client?",
  choices: [
    "Risk for injury related to neglect and impaired awareness",
    "Impaired verbal communication related to expressive aphasia",
    "Risk for constipation related to language impairment",
    "Deficient knowledge related to auditory loss"
  ],
  answer: "Risk for injury related to neglect and impaired awareness",
  rationale: "Right-hemisphere strokes may cause neglect and impaired awareness of deficits. These findings significantly increase the client's risk for falls and other injuries.",
  takeaway: "Right-sided brain injury often creates major safety concerns."
},

{
  id: "CVA-NGN-046",
  caseId: "CVA-NGN-CASE-14",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are consistent with right-hemisphere involvement? Select all that apply.",
  choices: [
    "Left-sided weakness",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Poor awareness of deficits",
    "Right-sided weakness with expressive aphasia",
    "Difficulty recognizing the left side of the environment"
  ],
  answer: [
    "Left-sided weakness",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Poor awareness of deficits",
    "Difficulty recognizing the left side of the environment"
  ],
  rationale: "The right hemisphere controls the left side of the body and contributes to spatial awareness, attention, and insight. Right-hemisphere injury can therefore cause left-sided weakness and neglect.",
  takeaway: "Right hemisphere = left body + spatial awareness + neglect."
},

{
  id: "CVA-NGN-047",
  caseId: "CVA-NGN-CASE-15",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Anterior Cerebral Artery",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops left leg weakness that is much greater than arm weakness, urinary incontinence, and new personality changes. Which artery is most likely affected?",
  choices: [
    "Right anterior cerebral artery",
    "Left middle cerebral artery",
    "Right posterior cerebral artery",
    "Basilar artery"
  ],
  answer: "Right anterior cerebral artery",
  rationale: "ACA strokes characteristically affect the contralateral leg more than the arm and may produce behavioral or personality changes and urinary incontinence. Left leg findings indicate right-hemisphere involvement.",
  takeaway: "ACA = opposite leg > arm + frontal behavior changes."
},

{
  id: "CVA-NGN-048",
  caseId: "CVA-NGN-CASE-15",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Anterior Cerebral Artery",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which manifestations are associated with an anterior cerebral artery stroke? Select all that apply.",
  choices: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality or behavioral changes",
    "Apathy or disinhibition",
    "Possible urinary incontinence",
    "Memory changes",
    "Isolated contralateral face and arm weakness greater than leg weakness"
  ],
  answer: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality or behavioral changes",
    "Apathy or disinhibition",
    "Possible urinary incontinence",
    "Memory changes"
  ],
  rationale: "The ACA supplies medial frontal and parietal regions. Deficits can include contralateral leg-predominant weakness, frontal behavioral changes, memory changes, and urinary incontinence.",
  takeaway: "ACA strokes often affect the leg and frontal-lobe behaviors."
},

{
  id: "CVA-NGN-049",
  caseId: "CVA-NGN-CASE-16",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops a homonymous visual field deficit and difficulty recognizing familiar objects. Strength in all extremities remains intact. Which vascular territory should the nurse suspect?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior spinal artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. PCA stroke can cause visual field deficits and visual recognition problems while motor strength may remain intact.",
  takeaway: "PCA stroke can present primarily with visual deficits."
},

{
  id: "CVA-NGN-050",
  caseId: "CVA-NGN-CASE-16",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are associated with posterior cerebral artery stroke? Select all that apply.",
  choices: [
    "Visual field loss",
    "Visual agnosia",
    "Memory impairment",
    "Alexia without agraphia",
    "Preserved motor strength may occur",
    "Leg weakness is always greater than arm weakness"
  ],
  answer: [
    "Visual field loss",
    "Visual agnosia",
    "Memory impairment",
    "Alexia without agraphia",
    "Preserved motor strength may occur"
  ],
  rationale: "PCA strokes affect visual and memory-related areas and may cause visual field loss, visual agnosia, memory problems, and alexia without agraphia.",
  takeaway: "PCA = vision and memory deficits."
},

{
  id: "CVA-NGN-051",
  caseId: "CVA-NGN-CASE-17",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Wernicke Aphasia",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client speaks fluently using long sentences, but the words do not make sense. The client cannot correctly follow a simple verbal command and appears unaware that the speech is abnormal. Which deficit is most likely?",
  choices: [
    "Wernicke receptive aphasia",
    "Broca expressive aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Wernicke receptive aphasia",
  rationale: "Wernicke aphasia is characterized by fluent but meaningless speech and impaired language comprehension. Clients may be unaware that their speech does not make sense.",
  takeaway: "Wernicke = fluent speech without meaningful comprehension."
},

{
  id: "CVA-NGN-052",
  caseId: "CVA-NGN-CASE-17",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Wernicke Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing communication strategy is most appropriate for this client?",
  choices: [
    "Use short, simple statements and visual or gestural cues.",
    "Provide lengthy verbal explanations.",
    "Speak rapidly to improve comprehension.",
    "Assume fluent speech means the client understands instructions."
  ],
  answer: "Use short, simple statements and visual or gestural cues.",
  rationale: "Receptive aphasia impairs comprehension. Simple communication supported with visual and gestural cues can improve understanding.",
  takeaway: "Fluent speech does not mean comprehension is intact."
},

{
  id: "CVA-NGN-053",
  caseId: "CVA-NGN-CASE-18",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden neurologic deficits. Which sequence best reflects the priority stroke assessment process?",
  choices: [
    "ABCs → last-known-well → glucose and oxygenation → rapid neurologic assessment → noncontrast CT",
    "Noncontrast CT → dietary history → ABCs → glucose → last-known-well",
    "Medication teaching → NIHSS → discharge planning → CT → ABCs",
    "Last-known-well → oral medications → ambulation → glucose → CT"
  ],
  answer: "ABCs → last-known-well → glucose and oxygenation → rapid neurologic assessment → noncontrast CT",
  rationale: "The course prioritizes stabilization of ABCs, determining last-known-well, ruling out hypoglycemia and hypoxia, performing rapid neurologic assessment, and obtaining noncontrast head CT.",
  takeaway: "Know the acute stroke sequence."
},

{
  id: "CVA-NGN-054",
  caseId: "CVA-NGN-CASE-18",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which neurologic functions are assessed as part of the NIH Stroke Scale? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language and dysarthria",
    "Neglect",
    "Serum sodium"
  ],
  answer: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language and dysarthria",
    "Neglect"
  ],
  rationale: "The NIHSS evaluates multiple neurologic domains including consciousness, gaze, visual fields, facial palsy, motor function, sensory function, language, dysarthria, ataxia, and neglect.",
  takeaway: "NIHSS quantifies neurologic deficits and should be trended."
},

{
  id: "CVA-NGN-055",
  caseId: "CVA-NGN-CASE-18",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's NIHSS score increases significantly compared with the previous assessment. Which interpretation is most appropriate?",
  choices: [
    "The neurologic condition may be worsening and requires prompt reassessment and escalation.",
    "The client's neurologic function is improving.",
    "The change can be ignored if blood pressure is stable.",
    "The score is useful only at admission."
  ],
  answer: "The neurologic condition may be worsening and requires prompt reassessment and escalation.",
  rationale: "Serial NIHSS assessments help identify changes in neurologic status. A worsening score can indicate progression or a complication and requires prompt evaluation.",
  takeaway: "Trend the NIHSS; worsening scores matter."
},

{
  id: "CVA-NGN-056",
  caseId: "CVA-NGN-CASE-19",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Dysphagia",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "A client with an acute stroke asks for water. No swallowing evaluation has been completed. Which action should the nurse take?",
  choices: [
    "Keep the client NPO until swallowing safety is evaluated.",
    "Give water through a straw.",
    "Offer oral medications with applesauce.",
    "Allow small sips because the client is alert."
  ],
  answer: "Keep the client NPO until swallowing safety is evaluated.",
  rationale: "Stroke can impair swallowing and airway protection. Oral intake should be withheld until swallowing safety has been evaluated.",
  takeaway: "No food, fluids, or oral medications until swallowing is cleared."
},

{
  id: "CVA-NGN-057",
  caseId: "CVA-NGN-CASE-19",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Dysphagia",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Safety and Infection Control",
  question: "During swallowing assessment, the client coughs after swallowing and develops a wet, gurgling voice. Which interpretation is most appropriate?",
  choices: [
    "The client may be aspirating.",
    "The client has demonstrated safe swallowing.",
    "The findings indicate expressive aphasia.",
    "The findings confirm normal gag function."
  ],
  answer: "The client may be aspirating.",
  rationale: "Coughing and a wet or gurgling voice after swallowing are concerning for impaired swallowing and aspiration.",
  takeaway: "Coughing or wet voice after swallowing = stop and suspect aspiration."
},

{
  id: "CVA-NGN-058",
  caseId: "CVA-NGN-CASE-19",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Dysphagia",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A stroke client is drooling, coughing, and unable to manage oral secretions. Which nursing priority is most appropriate?",
  choices: [
    "Protect the airway.",
    "Begin gait training.",
    "Provide written communication exercises.",
    "Teach long-term blood pressure management."
  ],
  answer: "Protect the airway.",
  rationale: "Inability to manage secretions indicates impaired airway protection. Airway and breathing take priority over rehabilitation or long-term teaching.",
  takeaway: "Secretions + dysphagia = airway first."
},

{
  id: "CVA-NGN-059",
  caseId: "CVA-NGN-CASE-20",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Deterioration",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client treated for ischemic stroke suddenly develops severe headache, vomiting, worsening weakness, and decreasing consciousness. Which nursing conclusion has the highest priority?",
  choices: [
    "The client is experiencing acute neurologic deterioration and requires immediate evaluation.",
    "The findings represent expected recovery.",
    "The client should rest until the next scheduled assessment.",
    "The symptoms can be managed with oral fluids."
  ],
  answer: "The client is experiencing acute neurologic deterioration and requires immediate evaluation.",
  rationale: "New severe headache, vomiting, worsening focal deficits, and declining consciousness indicate significant neurologic deterioration and may reflect hemorrhage, cerebral edema, or increasing ICP.",
  takeaway: "New headache + vomiting + worsening neuro status = emergency."
},

{
  id: "CVA-NGN-060",
  caseId: "CVA-NGN-CASE-20",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Deterioration",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which changes in a client with acute stroke require immediate escalation? Select all that apply.",
  choices: [
    "New decrease in level of consciousness",
    "New or worsening weakness",
    "New severe headache",
    "Repeated vomiting",
    "New pupillary abnormality",
    "Stable aphasia unchanged from admission"
  ],
  answer: [
    "New decrease in level of consciousness",
    "New or worsening weakness",
    "New severe headache",
    "Repeated vomiting",
    "New pupillary abnormality"
  ],
  rationale: "New neurologic or ICP-related findings require immediate evaluation. Stable deficits already present at admission are important but do not represent new deterioration.",
  takeaway: "Always distinguish new deterioration from stable baseline deficits."
},

{
  id: "CVA-NGN-061",
  caseId: "CVA-NGN-CASE-21",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with a posterior circulation stroke who is newly unable to swallow secretions",
    "A client with a stable PCA stroke and unchanged visual field loss",
    "A client with a stable ACA stroke and left-leg weakness",
    "A client with expressive aphasia who is requesting a communication board"
  ],
  answer: "A client with a posterior circulation stroke who is newly unable to swallow secretions",
  rationale: "New inability to manage secretions threatens airway protection and creates an immediate aspiration risk. ABC concerns take priority.",
  takeaway: "Airway threats outrank stable neurologic deficits."
},

{
  id: "CVA-NGN-062",
  caseId: "CVA-NGN-CASE-21",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with an intracerebral hemorrhage who is becoming increasingly difficult to arouse",
    "A client with a stable right MCA stroke and left-sided neglect",
    "A client with a TIA whose symptoms resolved yesterday",
    "A client with a stable PCA stroke reporting difficulty reading"
  ],
  answer: "A client with an intracerebral hemorrhage who is becoming increasingly difficult to arouse",
  rationale: "Declining level of consciousness may indicate increasing ICP, expanding hemorrhage, or worsening cerebral perfusion and requires immediate evaluation.",
  takeaway: "Declining LOC is a major neurologic red flag."
},

{
  id: "CVA-NGN-063",
  caseId: "CVA-NGN-CASE-21",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client receiving thrombolytic therapy who develops a sudden severe headache",
    "A client with stable expressive aphasia",
    "A client awaiting discharge teaching after a TIA",
    "A client with chronic weakness requiring assistance with bathing"
  ],
  answer: "A client receiving thrombolytic therapy who develops a sudden severe headache",
  rationale: "A sudden severe headache during thrombolytic therapy may indicate intracranial hemorrhage and requires immediate intervention.",
  takeaway: "Thrombolytic + sudden severe headache = suspect hemorrhage."
},

{
  id: "CVA-NGN-064",
  caseId: "CVA-NGN-CASE-22",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden left-sided weakness and left neglect. Glucose is normal, oxygenation is adequate, and last-known-well was 1 hour ago. Which action should the nurse anticipate next?",
  choices: [
    "Rapid neurologic assessment and noncontrast head CT",
    "Routine outpatient follow-up",
    "Immediate oral feeding",
    "Delay imaging until symptoms resolve"
  ],
  answer: "Rapid neurologic assessment and noncontrast head CT",
  rationale: "After ABCs, last-known-well, glucose, and oxygenation are addressed, the client needs rapid neurologic assessment and noncontrast CT to determine whether hemorrhage is present and guide treatment.",
  takeaway: "Acute stroke evaluation must move rapidly toward neuro assessment and CT."
},

{
  id: "CVA-NGN-065",
  caseId: "CVA-NGN-CASE-22",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The CT shows no hemorrhage. Based on the client's left weakness and neglect, which hemisphere is most likely affected?",
  choices: [
    "Right hemisphere",
    "Left hemisphere",
    "Both hemispheres equally",
    "Neither cerebral hemisphere"
  ],
  answer: "Right hemisphere",
  rationale: "Motor pathways cross, so right-hemisphere injury produces left-sided motor deficits. The right hemisphere is also strongly associated with spatial awareness and neglect.",
  takeaway: "Left weakness + neglect = right hemisphere."
},

{
  id: "CVA-NGN-066",
  caseId: "CVA-NGN-CASE-22",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client repeatedly attempts to stand without assistance and does not recognize the left arm as impaired. Which nursing intervention has the highest priority?",
  choices: [
    "Implement strong fall and injury precautions.",
    "Encourage independent ambulation immediately.",
    "Place all needed objects on the neglected side without supervision.",
    "Avoid assisting the client so awareness improves."
  ],
  answer: "Implement strong fall and injury precautions.",
  rationale: "Neglect and poor awareness of deficits create a significant injury risk. Safety measures are a priority while the client undergoes further assessment and rehabilitation.",
  takeaway: "Neglect plus poor insight creates a major safety risk."
},

{
  id: "CVA-NGN-067",
  caseId: "CVA-NGN-CASE-23",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden dizziness, diplopia, dysarthria, and ataxia. The client has equal strength in both arms and legs. Which nursing judgment is most appropriate?",
  choices: [
    "Continue urgent stroke evaluation because posterior circulation stroke remains possible.",
    "Stop the stroke evaluation because strength is normal.",
    "Diagnose the client with a musculoskeletal disorder.",
    "Discharge the client because FAST findings are absent."
  ],
  answer: "Continue urgent stroke evaluation because posterior circulation stroke remains possible.",
  rationale: "Posterior circulation strokes may cause dizziness, diplopia, dysarthria, dysphagia, and ataxia without prominent weakness.",
  takeaway: "Normal strength does not exclude posterior stroke."
},

{
  id: "CVA-NGN-068",
  caseId: "CVA-NGN-CASE-23",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Thirty minutes later, the client develops dysphagia and begins choking on secretions. Which action should the nurse prioritize?",
  choices: [
    "Protect the airway and maintain NPO status.",
    "Give water to clear the secretions.",
    "Administer oral medications immediately.",
    "Begin ambulation exercises."
  ],
  answer: "Protect the airway and maintain NPO status.",
  rationale: "Dysphagia and choking indicate impaired airway protection and aspiration risk. Airway management takes priority, and oral intake should be withheld.",
  takeaway: "Posterior stroke can rapidly become an airway problem."
},

{
  id: "CVA-NGN-069",
  caseId: "CVA-NGN-CASE-23",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes increasingly drowsy and develops an irregular respiratory pattern. Which conclusion should the nurse make?",
  choices: [
    "The neurologic condition is worsening and brainstem function may be compromised.",
    "The client is experiencing expected fatigue.",
    "The stroke has resolved.",
    "The respiratory change is unrelated to the neurologic condition."
  ],
  answer: "The neurologic condition is worsening and brainstem function may be compromised.",
  rationale: "The vertebrobasilar circulation supplies the brainstem. Declining consciousness and irregular respirations indicate potentially life-threatening neurologic deterioration.",
  takeaway: "Posterior stroke + respiratory changes = brainstem emergency."
},

{
  id: "CVA-NGN-070",
  caseId: "CVA-NGN-CASE-24",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke develops increasing headache, vomiting, confusion, and decreasing responsiveness. Which nursing action best demonstrates appropriate clinical judgment?",
  choices: [
    "Recognize possible increasing ICP and immediately escalate the neurologic deterioration.",
    "Wait until a fixed pupil develops before reporting the changes.",
    "Assume the findings are expected after every stroke.",
    "Delay reassessment until the next shift."
  ],
  answer: "Recognize possible increasing ICP and immediately escalate the neurologic deterioration.",
  rationale: "Headache, vomiting, confusion, and declining responsiveness can indicate cerebral edema and increasing ICP. Intervention should occur before late signs develop.",
  takeaway: "Act on early deterioration—do not wait for herniation signs."
},

{
  id: "CVA-NGN-071",
  caseId: "CVA-NGN-CASE-24",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions should the nurse implement for this client with increasing ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck and hip flexion.",
    "Minimize unnecessary stimulation.",
    "Prevent hypoxia and hypotension.",
    "Perform frequent unnecessary suctioning."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck and hip flexion.",
    "Minimize unnecessary stimulation.",
    "Prevent hypoxia and hypotension."
  ],
  rationale: "These interventions promote cerebral venous drainage and reduce secondary brain injury. Unnecessary suctioning can increase ICP.",
  takeaway: "ICP care protects drainage, oxygenation, perfusion, and the brain."
},

{
  id: "CVA-NGN-072",
  caseId: "CVA-NGN-CASE-24",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's right pupil becomes fixed and dilated, and left-sided motor function worsens. Which complication should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Stable cerebral edema",
    "Resolved hydrocephalus"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can produce an ipsilateral fixed dilated pupil and contralateral weakness.",
  takeaway: "Right blown pupil + left weakness = right uncal herniation."
},

{
  id: "CVA-NGN-073",
  caseId: "CVA-NGN-CASE-24",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client now has BP 208/66 mmHg, HR 40/min, and irregular respirations. Which finding pattern is present?",
  choices: [
    "Cushing triad",
    "Normal compensatory response",
    "Resolution of ICP",
    "Isolated autonomic neuropathy"
  ],
  answer: "Cushing triad",
  rationale: "Hypertension with widened pulse pressure, bradycardia, and irregular respirations constitute Cushing triad, a late manifestation of severe increased ICP.",
  takeaway: "Cushing triad signals a late ICP emergency."
},

{
  id: "CVA-NGN-074",
  caseId: "CVA-NGN-CASE-25",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "SAH Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client is hospitalized after a subarachnoid hemorrhage. On day 6, the client develops new confusion and unilateral weakness. Which complication should the nurse suspect first?",
  choices: [
    "Cerebral vasospasm",
    "Normal recovery",
    "Resolved hemorrhage",
    "Chronic peripheral neuropathy"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies vasospasm as an important delayed complication of SAH, particularly during days 3 through 14. New neurologic deficits during this period require urgent evaluation.",
  takeaway: "New deficits during days 3–14 after SAH = suspect vasospasm."
},

{
  id: "CVA-NGN-075",
  caseId: "CVA-NGN-CASE-25",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "SAH Medications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication order should the nurse recognize as especially important for this client with subarachnoid hemorrhage?",
  choices: [
    "Scheduled nimodipine",
    "Alteplase infusion",
    "Tenecteplase injection",
    "Routine thrombolytic therapy"
  ],
  answer: "Scheduled nimodipine",
  rationale: "Nimodipine is emphasized in the course for clients with SAH because delayed cerebral vasospasm is a major complication.",
  takeaway: "SAH → nimodipine is a key scheduled medication."
},

{
  id: "CVA-NGN-076",
  caseId: "CVA-NGN-CASE-26",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with acute ischemic stroke is being evaluated for thrombolytic therapy. Last-known-well was 2 hours ago, CT shows no hemorrhage, and there is no active bleeding. The client's blood pressure is 198/116 mmHg. Which finding currently prevents proceeding with thrombolytic treatment according to the course criteria?",
  choices: [
    "Blood pressure of 198/116 mmHg",
    "Last-known-well of 2 hours",
    "CT showing no hemorrhage",
    "Absence of active bleeding"
  ],
  answer: "Blood pressure of 198/116 mmHg",
  rationale: "The course requires blood pressure to be below 185/110 mmHg before thrombolytic treatment. The current blood pressure exceeds that threshold.",
  takeaway: "Before thrombolysis, BP must meet the required threshold."
},

{
  id: "CVA-NGN-077",
  caseId: "CVA-NGN-CASE-26",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The client's blood pressure is lowered to the required range and thrombolytic therapy begins. Twenty minutes later, the client reports a sudden severe headache and begins vomiting. What should the nurse do?",
  choices: [
    "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
    "Continue the infusion and reassess after completion.",
    "Give the client oral fluids.",
    "Document the symptoms as expected effects."
  ],
  answer: "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
  rationale: "Sudden severe headache, vomiting, a blood pressure spike, bleeding, or neurologic deterioration during thrombolytic therapy may indicate intracranial hemorrhage.",
  takeaway: "Thrombolysis + sudden neuro change = stop and suspect hemorrhage."
},

{
  id: "CVA-NGN-078",
  caseId: "CVA-NGN-CASE-27",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus and an external ventricular drain develops worsening headache, vomiting, and decreasing responsiveness. Which nursing judgment is most appropriate?",
  choices: [
    "The client may have worsening hydrocephalus or ineffective CSF drainage and requires immediate evaluation.",
    "The findings confirm that the EVD is functioning normally.",
    "The client is experiencing normal fatigue.",
    "The neurologic findings can be reassessed tomorrow."
  ],
  answer: "The client may have worsening hydrocephalus or ineffective CSF drainage and requires immediate evaluation.",
  rationale: "Headache, vomiting, and declining consciousness are concerning for increasing ICP. In a client with an EVD, ineffective drainage must be considered.",
  takeaway: "EVD + returning ICP symptoms = evaluate immediately."
},

{
  id: "CVA-NGN-079",
  caseId: "CVA-NGN-CASE-27",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "The same client develops fever, redness around the drain insertion site, and cloudy CSF. Which complication should the nurse suspect?",
  choices: [
    "Infection",
    "Normal CSF drainage",
    "Resolution of hydrocephalus",
    "Improved cerebral perfusion"
  ],
  answer: "Infection",
  rationale: "Fever, insertion-site redness, and abnormal CSF appearance are concerning for infection associated with an external CSF drainage system.",
  takeaway: "EVD infection cues require prompt recognition."
},

{
  id: "CVA-NGN-080",
  caseId: "CVA-NGN-CASE-28",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client requires assessment FIRST?",
  choices: [
    "A client with increased ICP who has developed a new fixed pupil and irregular respirations",
    "A client with a right MCA stroke who has stable left-sided neglect",
    "A client with a PCA stroke who has an unchanged visual field deficit",
    "A client with Broca aphasia who is frustrated by difficulty speaking"
  ],
  answer: "A client with increased ICP who has developed a new fixed pupil and irregular respirations",
  rationale: "A new fixed pupil and irregular respirations are late, life-threatening signs of severe increased ICP and possible brain herniation. The other clients have stable deficits.",
  takeaway: "Late ICP/herniation signs are immediate priorities."
},

{
  id: "CVA-NGN-081",
  caseId: "CVA-NGN-CASE-29",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops right-sided weakness and difficulty speaking while eating breakfast. The spouse states, 'She was completely normal when she woke up at 0630.' Which information should the nurse document as the last-known-well time?",
  choices: [
    "0630",
    "The time the ambulance arrived",
    "The time the CT scan is completed",
    "The time the nurse performs the NIHSS"
  ],
  answer: "0630",
  rationale: "Last-known-well is the last time the client was known to be neurologically normal. This time is critical when evaluating eligibility for time-sensitive stroke treatment.",
  takeaway: "Last-known-well means last known normal, not when the stroke was discovered."
},

{
  id: "CVA-NGN-082",
  caseId: "CVA-NGN-CASE-29",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's bedside glucose is 42 mg/dL. Which action should the nurse prioritize?",
  choices: [
    "Treat the hypoglycemia and reassess the neurologic findings.",
    "Immediately administer a thrombolytic.",
    "Give the client oral food despite unknown swallowing ability.",
    "Assume the client has a completed ischemic stroke."
  ],
  answer: "Treat the hypoglycemia and reassess the neurologic findings.",
  rationale: "Hypoglycemia can mimic acute stroke manifestations. It should be corrected promptly while the client's neurologic status is reassessed.",
  takeaway: "Always rule out hypoglycemia during acute stroke evaluation."
},

{
  id: "CVA-NGN-083",
  caseId: "CVA-NGN-CASE-29",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After the client's glucose is corrected, right-sided weakness and aphasia remain unchanged. Which action should the nurse anticipate?",
  choices: [
    "Continue the rapid stroke evaluation and obtain noncontrast head CT.",
    "Cancel the stroke evaluation because hypoglycemia was present.",
    "Begin oral feeding immediately.",
    "Delay further evaluation until the next shift."
  ],
  answer: "Continue the rapid stroke evaluation and obtain noncontrast head CT.",
  rationale: "Persistent focal neurologic deficits after correction of hypoglycemia require continued acute stroke evaluation. Noncontrast CT is needed to assess for intracranial hemorrhage.",
  takeaway: "Correct the mimic, then reassess—persistent deficits still require stroke evaluation."
},

{
  id: "CVA-NGN-084",
  caseId: "CVA-NGN-CASE-30",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Territory",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops weakness of the right leg that is much greater than weakness of the right arm. The client also has urinary incontinence and new apathetic behavior. Which vascular territory is most likely affected?",
  choices: [
    "Left anterior cerebral artery",
    "Left middle cerebral artery",
    "Right posterior cerebral artery",
    "Vertebrobasilar circulation"
  ],
  answer: "Left anterior cerebral artery",
  rationale: "ACA stroke commonly causes contralateral leg-predominant weakness and may produce behavioral changes and urinary incontinence. Right-sided deficits indicate left cerebral involvement.",
  takeaway: "Right leg > arm weakness + frontal behavior changes = left ACA."
},

{
  id: "CVA-NGN-085",
  caseId: "CVA-NGN-CASE-30",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Territory",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings support an anterior cerebral artery stroke? Select all that apply.",
  choices: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality changes",
    "Apathy or disinhibition",
    "Possible urinary incontinence",
    "Memory impairment",
    "Contralateral face and arm weakness greater than leg weakness"
  ],
  answer: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality changes",
    "Apathy or disinhibition",
    "Possible urinary incontinence",
    "Memory impairment"
  ],
  rationale: "ACA territory involves medial frontal and parietal regions. Stroke in this territory can cause leg-predominant weakness, personality or behavioral changes, memory problems, and urinary incontinence.",
  takeaway: "ACA strokes combine leg-predominant deficits with frontal-lobe changes."
},

{
  id: "CVA-NGN-086",
  caseId: "CVA-NGN-CASE-31",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has normal extremity strength but suddenly develops a visual field deficit and difficulty recognizing familiar objects. Which stroke territory should the nurse suspect?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Vertebrobasilar artery affecting only motor pathways"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. PCA stroke can cause visual field abnormalities and visual recognition deficits without prominent weakness.",
  takeaway: "A stroke can present with vision problems even when strength is normal."
},

{
  id: "CVA-NGN-087",
  caseId: "CVA-NGN-CASE-31",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client can write a sentence correctly but cannot read the sentence that was just written. Which deficit is most consistent with the affected vascular territory?",
  choices: [
    "Alexia without agraphia",
    "Broca aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Alexia without agraphia",
  rationale: "The course associates posterior cerebral artery stroke with alexia without agraphia, in which the client cannot read despite preserved ability to write.",
  takeaway: "PCA stroke can produce alexia without agraphia."
},

{
  id: "CVA-NGN-088",
  caseId: "CVA-NGN-CASE-32",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe hypertension suddenly develops headache, vomiting, unilateral weakness, and decreasing consciousness. Which diagnostic finding would support an intracerebral hemorrhage?",
  choices: [
    "Hyperdense blood within the brain on noncontrast CT",
    "Normal CT with complete resolution of symptoms",
    "Isolated carotid stenosis without intracranial blood",
    "Normal neurologic examination"
  ],
  answer: "Hyperdense blood within the brain on noncontrast CT",
  rationale: "Acute blood appears hyperdense or bright on noncontrast CT. Intracerebral hemorrhage may cause headache, vomiting, focal deficits, and declining consciousness.",
  takeaway: "Acute hemorrhage appears bright on noncontrast CT."
},

{
  id: "CVA-NGN-089",
  caseId: "CVA-NGN-CASE-32",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The CT confirms an intracerebral hemorrhage. Which prescription should the nurse question immediately?",
  choices: [
    "Administer IV thrombolytic therapy.",
    "Perform frequent neurologic assessments.",
    "Monitor for increasing ICP.",
    "Maintain close blood pressure monitoring."
  ],
  answer: "Administer IV thrombolytic therapy.",
  rationale: "Thrombolytic therapy is contraindicated when intracranial hemorrhage is present because it can worsen bleeding.",
  takeaway: "Hemorrhagic stroke = no thrombolytics."
},

{
  id: "CVA-NGN-090",
  caseId: "CVA-NGN-CASE-32",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Two hours later, the client becomes more difficult to arouse and begins vomiting repeatedly. Which complication should the nurse suspect?",
  choices: [
    "Increasing ICP from cerebral edema and mass effect",
    "Resolution of the hemorrhage",
    "Improved cerebral perfusion",
    "Normal recovery from intracerebral hemorrhage"
  ],
  answer: "Increasing ICP from cerebral edema and mass effect",
  rationale: "Intracerebral hemorrhage can produce edema and mass effect. Declining consciousness and vomiting are concerning for increasing ICP and neurologic deterioration.",
  takeaway: "ICH can deteriorate because of edema, mass effect, and rising ICP."
},

{
  id: "CVA-NGN-091",
  caseId: "CVA-NGN-CASE-33",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports a sudden severe headache described as the worst headache ever experienced. The client also has neck stiffness and photophobia. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Stable hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "The course identifies sudden 'worst headache' with neck stiffness and photophobia as characteristic findings of subarachnoid hemorrhage.",
  takeaway: "Thunderclap-type severe headache + neck stiffness = suspect SAH."
},

{
  id: "CVA-NGN-092",
  caseId: "CVA-NGN-CASE-33",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication should the nurse expect to administer on schedule after subarachnoid hemorrhage?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Warfarin"
  ],
  answer: "Nimodipine",
  rationale: "The course emphasizes scheduled nimodipine after SAH because delayed cerebral vasospasm is a major complication.",
  takeaway: "SAH → scheduled nimodipine."
},

{
  id: "CVA-NGN-093",
  caseId: "CVA-NGN-CASE-33",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "On day 7 after the subarachnoid hemorrhage, the client develops new right-sided weakness and increasing confusion. Which complication should the nurse suspect?",
  choices: [
    "Cerebral vasospasm",
    "Normal neurologic recovery",
    "Resolution of the hemorrhage",
    "Expected medication effect"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies days 3 through 14 as an important period for cerebral vasospasm following SAH. New focal deficits or neurologic deterioration during this period are concerning.",
  takeaway: "Days 3–14 after SAH + new neuro deficit = think vasospasm."
},

{
  id: "CVA-NGN-094",
  caseId: "CVA-NGN-CASE-34",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client arrives 2 hours after last-known-well with disabling neurologic deficits. CT shows no hemorrhage. The client's blood pressure is 192/114 mmHg. Which finding requires intervention before thrombolytic therapy can be considered according to the course?",
  choices: [
    "Blood pressure of 192/114 mmHg",
    "Last-known-well of 2 hours",
    "Disabling neurologic deficits",
    "CT showing no hemorrhage"
  ],
  answer: "Blood pressure of 192/114 mmHg",
  rationale: "The course identifies a blood pressure below 185/110 mmHg as necessary before thrombolytic treatment.",
  takeaway: "Pre-thrombolytic BP must be below 185/110 mmHg."
},

{
  id: "CVA-NGN-095",
  caseId: "CVA-NGN-CASE-34",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings should the nurse recognize as concerns when screening a client for thrombolytic therapy according to the course? Select all that apply.",
  choices: [
    "Active bleeding",
    "Recent major surgery within the specified exclusion period",
    "Intracranial hemorrhage on CT",
    "Abnormal coagulation studies",
    "Blood pressure above the required threshold",
    "CT showing no hemorrhage"
  ],
  answer: [
    "Active bleeding",
    "Recent major surgery within the specified exclusion period",
    "Intracranial hemorrhage on CT",
    "Abnormal coagulation studies",
    "Blood pressure above the required threshold"
  ],
  rationale: "The course emphasizes screening for hemorrhage, active bleeding, recent surgery, abnormal coagulation studies, and uncontrolled blood pressure before thrombolytic therapy.",
  takeaway: "Thrombolytic screening is primarily about time and bleeding safety."
},

{
  id: "CVA-NGN-096",
  caseId: "CVA-NGN-CASE-34",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "During thrombolytic therapy, the client suddenly develops nausea, vomiting, severe headache, and worsening neurologic deficits. Which action should the nurse take FIRST?",
  choices: [
    "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
    "Continue the infusion because these are expected effects.",
    "Give oral fluids and reassess in 1 hour.",
    "Wait until the entire medication dose is administered."
  ],
  answer: "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
  rationale: "The course identifies severe headache, nausea and vomiting, sudden blood pressure changes, bleeding, and neurologic deterioration as warning signs of possible intracranial hemorrhage during thrombolytic therapy.",
  takeaway: "New deterioration during thrombolysis = stop and suspect hemorrhage."
},

{
  id: "CVA-NGN-097",
  caseId: "CVA-NGN-CASE-35",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema is initially restless. The nurse later notes increasing confusion and difficulty arousing the client. Which interpretation is most appropriate?",
  choices: [
    "The client's increased ICP may be worsening.",
    "The client's cerebral edema is resolving.",
    "The client is demonstrating normal sleep.",
    "The client's cerebral perfusion has improved."
  ],
  answer: "The client's increased ICP may be worsening.",
  rationale: "Progressive changes in level of consciousness are important early indicators of worsening ICP.",
  takeaway: "Trend LOC closely—progressive decline is a neurologic emergency."
},

{
  id: "CVA-NGN-098",
  caseId: "CVA-NGN-CASE-35",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which positioning intervention is most appropriate for this client?",
  choices: [
    "Elevate the head of the bed approximately 30 degrees and maintain neutral head alignment.",
    "Place the client flat with the neck flexed.",
    "Place the client in Trendelenburg position.",
    "Flex the hips sharply while keeping the head flat."
  ],
  answer: "Elevate the head of the bed approximately 30 degrees and maintain neutral head alignment.",
  rationale: "Head elevation and neutral alignment promote cerebral venous drainage and help limit additional increases in ICP.",
  takeaway: "ICP positioning = HOB about 30 degrees + head neutral and midline."
},

{
  id: "CVA-NGN-099",
  caseId: "CVA-NGN-CASE-35",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure becomes 212/70 mmHg, heart rate decreases to 44/min, and respirations become irregular. Which finding pattern should the nurse recognize?",
  choices: [
    "Cushing triad",
    "Improving intracranial compliance",
    "Resolution of cerebral edema",
    "Stable compensatory response"
  ],
  answer: "Cushing triad",
  rationale: "Hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of severe increased ICP.",
  takeaway: "Cushing triad is a late ICP emergency."
},

{
  id: "CVA-NGN-100",
  caseId: "CVA-NGN-CASE-35",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client then develops a left fixed dilated pupil and worsening right-sided weakness. Which complication should the nurse suspect?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Stable hydrocephalus",
    "Transient ischemic attack"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation may produce an ipsilateral fixed dilated pupil with contralateral weakness.",
  takeaway: "Left blown pupil + right weakness = left uncal herniation."
},

{
  id: "CVA-NGN-101",
  caseId: "CVA-NGN-CASE-36",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has worsening headache, vomiting, blurred vision, and progressive drowsiness. Which hypothesis should the nurse prioritize?",
  choices: [
    "CSF accumulation is contributing to increasing ICP.",
    "The hydrocephalus is resolving.",
    "The client has improved cerebral perfusion.",
    "The findings indicate uncomplicated fatigue."
  ],
  answer: "CSF accumulation is contributing to increasing ICP.",
  rationale: "Hydrocephalus causes excessive CSF accumulation. Headache, vomiting, visual changes, and decreasing consciousness can indicate worsening pressure.",
  takeaway: "Hydrocephalus can become an ICP emergency."
},

{
  id: "CVA-NGN-102",
  caseId: "CVA-NGN-CASE-36",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "An external ventricular drain is placed for the client. Which statement best describes its purpose?",
  choices: [
    "It provides temporary external drainage of cerebrospinal fluid.",
    "It dissolves cerebral blood clots.",
    "It permanently prevents all future strokes.",
    "It increases CSF production."
  ],
  answer: "It provides temporary external drainage of cerebrospinal fluid.",
  rationale: "An EVD provides temporary drainage of CSF and can be used to manage acute hydrocephalus.",
  takeaway: "EVD = temporary CSF drainage."
},

{
  id: "CVA-NGN-103",
  caseId: "CVA-NGN-CASE-36",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Two days later, the client develops fever, redness at the EVD insertion site, cloudy CSF, and increasing confusion. Which complication should the nurse suspect?",
  choices: [
    "Infection",
    "Normal EVD function",
    "Resolution of hydrocephalus",
    "Improved intracranial compliance"
  ],
  answer: "Infection",
  rationale: "Fever, insertion-site redness, abnormal CSF appearance, and neurologic changes are concerning for infection associated with an external CSF drainage device.",
  takeaway: "EVD + fever + cloudy CSF + neuro change = suspect infection."
},

{
  id: "CVA-NGN-104",
  caseId: "CVA-NGN-CASE-37",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol for cerebral edema has decreasing urine output and worsening renal function. Which action should the nurse anticipate?",
  choices: [
    "Hold the medication and notify the provider according to the treatment plan.",
    "Administer an additional dose immediately.",
    "Increase the dose because urine output is decreasing.",
    "Ignore the renal findings because mannitol does not affect fluid balance."
  ],
  answer: "Hold the medication and notify the provider according to the treatment plan.",
  rationale: "Renal function and fluid balance require close monitoring during mannitol therapy. Worsening renal function can make continued therapy unsafe.",
  takeaway: "Mannitol requires close kidney monitoring."
},

{
  id: "CVA-NGN-105",
  caseId: "CVA-NGN-CASE-37",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which data should the nurse monitor while a client receives mannitol for increased ICP? Select all that apply.",
  choices: [
    "Intake and output",
    "Renal function",
    "Serum osmolarity",
    "Electrolytes",
    "Neurologic status",
    "Favorite sleeping position"
  ],
  answer: [
    "Intake and output",
    "Renal function",
    "Serum osmolarity",
    "Electrolytes",
    "Neurologic status"
  ],
  rationale: "Mannitol therapy requires monitoring of fluid balance, kidney function, serum osmolarity, electrolytes, and the client's neurologic response.",
  takeaway: "Mannitol monitoring combines labs, fluid balance, and neuro status."
},

{
  id: "CVA-NGN-106",
  caseId: "CVA-NGN-CASE-38",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline for increased ICP develops dyspnea, bilateral crackles, and increasing oxygen requirements. Which complication should the nurse prioritize?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expressive aphasia",
    "Normal response to therapy",
    "Resolution of cerebral edema"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can expand intravascular volume. New respiratory findings such as crackles, dyspnea, and increasing oxygen needs are concerning for fluid overload and pulmonary edema.",
  takeaway: "Hypertonic saline requires close respiratory and volume-status monitoring."
},

{
  id: "CVA-NGN-107",
  caseId: "CVA-NGN-CASE-38",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which parameters should the nurse monitor during hypertonic saline therapy? Select all that apply.",
  choices: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema",
    "Visual acuity only"
  ],
  answer: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema"
  ],
  rationale: "The course emphasizes monitoring serum sodium, neurologic response, and fluid status during hypertonic saline therapy.",
  takeaway: "Hypertonic saline: watch sodium, lungs, volume, and neuro status."
},

{
  id: "CVA-NGN-108",
  caseId: "CVA-NGN-CASE-39",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Priority Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with a vertebrobasilar stroke who develops irregular respirations",
    "A client with a stable left MCA stroke and expressive aphasia",
    "A client with an ACA stroke who has unchanged leg weakness",
    "A client with a PCA stroke who has a stable visual field deficit"
  ],
  answer: "A client with a vertebrobasilar stroke who develops irregular respirations",
  rationale: "The vertebrobasilar circulation supplies the brainstem. New irregular respirations may indicate compromise of vital respiratory centers and require immediate assessment.",
  takeaway: "New breathing changes are an ABC priority."
},

{
  id: "CVA-NGN-109",
  caseId: "CVA-NGN-CASE-39",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Priority Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with an intracerebral hemorrhage who has a new decrease in consciousness",
    "A client with stable left-sided neglect",
    "A client with chronic urinary incontinence",
    "A client with stable expressive aphasia"
  ],
  answer: "A client with an intracerebral hemorrhage who has a new decrease in consciousness",
  rationale: "A new decline in consciousness may indicate worsening hemorrhage, edema, mass effect, or increased ICP and requires immediate evaluation.",
  takeaway: "New LOC changes outrank stable deficits."
},

{
  id: "CVA-NGN-110",
  caseId: "CVA-NGN-CASE-39",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Priority Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client receiving thrombolytic therapy who develops vomiting and worsening weakness",
    "A client with a resolved TIA awaiting discharge teaching",
    "A client with stable PCA-related visual loss",
    "A client with chronic post-stroke weakness awaiting physical therapy"
  ],
  answer: "A client receiving thrombolytic therapy who develops vomiting and worsening weakness",
  rationale: "Vomiting and neurologic deterioration during thrombolytic therapy may indicate intracranial hemorrhage and require immediate intervention.",
  takeaway: "Thrombolytic therapy + new deterioration = suspect bleeding."
},

{
  id: "CVA-NGN-111",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left facial weakness, left arm weakness greater than leg weakness, and left-sided neglect. Which vascular territory is most likely involved?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke commonly produces contralateral face and arm deficits greater than leg deficits. Right-hemisphere involvement can also cause left-sided neglect.",
  takeaway: "Left face/arm weakness + neglect = right MCA."
},

{
  id: "CVA-NGN-112",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client repeatedly attempts to get out of bed and does not recognize the left arm as impaired. Which intervention should the nurse prioritize?",
  choices: [
    "Implement fall and injury precautions.",
    "Encourage independent ambulation.",
    "Leave the client unattended to improve independence.",
    "Place obstacles on the client's neglected side."
  ],
  answer: "Implement fall and injury precautions.",
  rationale: "Neglect and poor awareness of deficits increase the risk of falls and injury. Safety measures are a priority.",
  takeaway: "Neglect creates a major safety risk."
},

{
  id: "CVA-NGN-113",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several hours later, the client develops worsening headache, vomiting, and increasing drowsiness. Which complication should the nurse suspect?",
  choices: [
    "Cerebral edema with increasing ICP",
    "Normal stroke recovery",
    "Resolved ischemia",
    "Improved cerebral perfusion"
  ],
  answer: "Cerebral edema with increasing ICP",
  rationale: "Large cerebral infarctions can produce edema. Worsening headache, vomiting, and declining consciousness are concerning for increasing ICP.",
  takeaway: "Worsening after a large stroke can signal cerebral edema and ICP."
},

{
  id: "CVA-NGN-114",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing intervention is most appropriate as the client's ICP increases?",
  choices: [
    "Maintain the head midline with the head of the bed approximately 30 degrees.",
    "Place the client flat with the neck flexed.",
    "Flex the hips sharply.",
    "Increase unnecessary environmental stimulation."
  ],
  answer: "Maintain the head midline with the head of the bed approximately 30 degrees.",
  rationale: "Neutral head alignment and moderate head elevation promote cerebral venous drainage and help prevent additional increases in ICP.",
  takeaway: "Positioning is a key component of ICP management."
},

{
  id: "CVA-NGN-115",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes difficult to arouse and develops a right fixed dilated pupil with worsening left-sided weakness. Which complication should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Stable hydrocephalus",
    "Transient ischemic attack"
  ],
  answer: "Right uncal herniation",
  rationale: "A fixed dilated pupil on the same side as the herniation with contralateral weakness is consistent with uncal herniation.",
  takeaway: "Right pupil + left weakness = right uncal herniation."
},

{
  id: "CVA-NGN-116",
  caseId: "CVA-NGN-CASE-40",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's vital signs are BP 216/68 mmHg, HR 38/min, with irregular respirations. Which interpretation is most appropriate?",
  choices: [
    "The client has late severe increased ICP with Cushing triad.",
    "The client is showing normal neurologic recovery.",
    "The client's cerebral edema has resolved.",
    "The findings indicate improved intracranial compliance."
  ],
  answer: "The client has late severe increased ICP with Cushing triad.",
  rationale: "Hypertension with widened pulse pressure, bradycardia, and irregular respirations are the components of Cushing triad and indicate severe ICP elevation.",
  takeaway: "Cushing triad is a late, life-threatening ICP finding."
},

{
  id: "CVA-NGN-117",
  caseId: "CVA-NGN-CASE-41",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should cause the nurse to activate or continue an urgent stroke evaluation even when unilateral weakness is absent? Select all that apply.",
  choices: [
    "Sudden diplopia",
    "Sudden dysarthria",
    "Sudden dysphagia",
    "Sudden severe ataxia",
    "Sudden vertigo with other neurologic findings",
    "Chronic unchanged knee pain"
  ],
  answer: [
    "Sudden diplopia",
    "Sudden dysarthria",
    "Sudden dysphagia",
    "Sudden severe ataxia",
    "Sudden vertigo with other neurologic findings"
  ],
  rationale: "Posterior circulation stroke may present with brainstem and cerebellar findings even when extremity strength remains intact.",
  takeaway: "Do not require unilateral weakness before considering stroke."
},

{
  id: "CVA-NGN-118",
  caseId: "CVA-NGN-CASE-41",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which findings represent acute neurologic deterioration requiring immediate escalation? Select all that apply.",
  choices: [
    "New decrease in level of consciousness",
    "New pupillary asymmetry",
    "New abnormal posturing",
    "New irregular respirations",
    "New severe headache with vomiting",
    "Stable weakness unchanged from admission"
  ],
  answer: [
    "New decrease in level of consciousness",
    "New pupillary asymmetry",
    "New abnormal posturing",
    "New irregular respirations",
    "New severe headache with vomiting"
  ],
  rationale: "New changes in consciousness, pupils, motor response, breathing, headache, or vomiting can indicate worsening cerebral perfusion, hemorrhage, increasing ICP, or herniation.",
  takeaway: "New neurologic change is more concerning than a stable baseline deficit."
},

{
  id: "CVA-NGN-119",
  caseId: "CVA-NGN-CASE-41",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with increased ICP who has developed periods of apnea",
    "A client with stable Broca aphasia",
    "A client with chronic left-sided neglect",
    "A client with an unchanged PCA-related visual deficit"
  ],
  answer: "A client with increased ICP who has developed periods of apnea",
  rationale: "Apnea is an immediate breathing emergency and may indicate severe brainstem compression or herniation. ABC priorities supersede stable neurologic deficits.",
  takeaway: "Apnea always moves to the front of the priority line."
},

{
  id: "CVA-NGN-120",
  caseId: "CVA-NGN-CASE-41",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client presents with sudden neurologic deficits. The nurse establishes airway and breathing, determines last-known-well, checks glucose, performs a rapid neurologic assessment, and obtains a noncontrast CT. The client later develops declining consciousness, a fixed pupil, abnormal posturing, and irregular respirations. Which statement best summarizes the nurse's clinical judgment?",
  choices: [
    "The client has progressed from an acute stroke presentation to severe neurologic deterioration with increased ICP and possible herniation.",
    "The client's findings represent normal stroke recovery.",
    "The client can be safely observed without further escalation.",
    "The late neurologic changes indicate that cerebral perfusion has improved."
  ],
  answer: "The client has progressed from an acute stroke presentation to severe neurologic deterioration with increased ICP and possible herniation.",
  rationale: "Initial stroke care focuses on rapid recognition, stabilization, last-known-well, glucose, neurologic assessment, and CT. Progressive decline in consciousness followed by pupillary abnormalities, posturing, and irregular respirations indicates severe increased ICP and possible herniation.",
  takeaway: "Connect the full progression: recognize stroke early, then recognize deterioration before herniation becomes irreversible."
},

{
  id: "CVA-NGN-121",
  caseId: "CVA-NGN-CASE-42",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden slurred speech, facial droop, and unilateral arm weakness. Which finding should the nurse address FIRST?",
  choices: [
    "Oxygen saturation of 84%",
    "Right arm weakness",
    "Slurred speech",
    "Facial asymmetry"
  ],
  answer: "Oxygen saturation of 84%",
  rationale: "Airway and breathing are assessed before focal neurologic deficits. Hypoxia can worsen cerebral injury and must be corrected immediately.",
  takeaway: "Stroke priorities still begin with ABCs."
},

{
  id: "CVA-NGN-122",
  caseId: "CVA-NGN-CASE-42",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After oxygenation is stabilized, which information is most important for the nurse to obtain next?",
  choices: [
    "The exact time the client was last known neurologically normal",
    "The client's usual bedtime",
    "The client's preferred diet",
    "The date of the client's last eye examination"
  ],
  answer: "The exact time the client was last known neurologically normal",
  rationale: "Last-known-well determines the timing of symptom onset for treatment decisions and is a critical part of acute stroke evaluation.",
  takeaway: "ABCs first, then establish last-known-well."
},

{
  id: "CVA-NGN-123",
  caseId: "CVA-NGN-CASE-42",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which bedside assessment should the nurse perform promptly because an abnormal result may produce stroke-like neurologic symptoms?",
  choices: [
    "Blood glucose",
    "Serum cholesterol",
    "Urine specific gravity",
    "Daily weight"
  ],
  answer: "Blood glucose",
  rationale: "Hypoglycemia can mimic acute stroke manifestations and should be rapidly identified during the initial assessment.",
  takeaway: "Check glucose early in every suspected stroke."
},

{
  id: "CVA-NGN-124",
  caseId: "CVA-NGN-CASE-42",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's glucose is normal and focal neurologic deficits persist. Which diagnostic study should the nurse anticipate first?",
  choices: [
    "Noncontrast head CT",
    "Lumbar puncture",
    "Electroencephalogram",
    "Skull x-ray"
  ],
  answer: "Noncontrast head CT",
  rationale: "Noncontrast CT is used rapidly during acute stroke evaluation to determine whether intracranial hemorrhage is present.",
  takeaway: "Persistent acute stroke symptoms require rapid brain imaging."
},

{
  id: "CVA-NGN-125",
  caseId: "CVA-NGN-CASE-43",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with atrial fibrillation was talking normally when suddenly the face drooped and the client became unable to move one arm. The deficits were severe immediately. Which stroke mechanism is most consistent with this presentation?",
  choices: [
    "Embolic ischemic stroke",
    "Thrombotic ischemic stroke",
    "Chronic hydrocephalus",
    "Slowly developing cerebral edema"
  ],
  answer: "Embolic ischemic stroke",
  rationale: "Embolic strokes often begin suddenly with deficits that are maximal at onset. Atrial fibrillation is an important cardiac source of emboli.",
  takeaway: "AFib + sudden maximal deficit = embolic pattern."
},

{
  id: "CVA-NGN-126",
  caseId: "CVA-NGN-CASE-43",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client with hypertension, diabetes, hyperlipidemia, and previous TIAs develops weakness that progresses gradually over several hours. Which stroke mechanism is most consistent with this presentation?",
  choices: [
    "Thrombotic ischemic stroke",
    "Embolic ischemic stroke",
    "Subarachnoid hemorrhage",
    "Acute hydrocephalus"
  ],
  answer: "Thrombotic ischemic stroke",
  rationale: "Thrombotic stroke is associated with local atherosclerotic disease and may develop gradually or in a stepwise pattern. Previous TIAs may occur.",
  takeaway: "Vascular disease + gradual progression = thrombotic pattern."
},

{
  id: "CVA-NGN-127",
  caseId: "CVA-NGN-CASE-43",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings support an embolic rather than thrombotic stroke pattern? Select all that apply.",
  choices: [
    "Sudden onset",
    "Deficits maximal at onset",
    "History of atrial fibrillation",
    "Embolus traveling from another location",
    "Gradual stepwise progression",
    "Long history of repeated TIAs followed by progressive symptoms"
  ],
  answer: [
    "Sudden onset",
    "Deficits maximal at onset",
    "History of atrial fibrillation",
    "Embolus traveling from another location"
  ],
  rationale: "Embolic strokes are associated with material traveling into the cerebral circulation and commonly present suddenly with maximal deficits. Atrial fibrillation is an important embolic source.",
  takeaway: "Embolic strokes tend to hit suddenly and hard."
},

{
  id: "CVA-NGN-128",
  caseId: "CVA-NGN-CASE-44",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has acute unilateral weakness and aphasia. The noncontrast CT does not show hemorrhage or an obvious infarction. Which interpretation is most appropriate?",
  choices: [
    "Hyperacute ischemic stroke may still be present.",
    "Stroke has been completely ruled out.",
    "The client definitely has a TIA.",
    "The neurologic symptoms are no longer urgent."
  ],
  answer: "Hyperacute ischemic stroke may still be present.",
  rationale: "Hyperacute ischemic changes may not yet be visible on noncontrast CT. The initial CT is especially important for identifying or excluding hemorrhage.",
  takeaway: "A normal early CT does not exclude ischemic stroke."
},

{
  id: "CVA-NGN-129",
  caseId: "CVA-NGN-CASE-44",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client's noncontrast CT demonstrates a bright hyperdense area within the brain. Which interpretation is most appropriate?",
  choices: [
    "Acute intracranial blood is present.",
    "The finding confirms a TIA.",
    "The finding represents normal CSF.",
    "The finding proves the stroke is thrombotic."
  ],
  answer: "Acute intracranial blood is present.",
  rationale: "Acute hemorrhage appears hyperdense or bright on noncontrast CT.",
  takeaway: "Bright blood on CT points toward hemorrhage."
},

{
  id: "CVA-NGN-130",
  caseId: "CVA-NGN-CASE-44",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Treatment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The CT confirms intracranial hemorrhage. Which treatment should the nurse recognize as contraindicated?",
  choices: [
    "Thrombolytic therapy",
    "Frequent neurologic assessment",
    "Monitoring for increasing ICP",
    "Close blood pressure monitoring"
  ],
  answer: "Thrombolytic therapy",
  rationale: "Thrombolytic medications can worsen intracranial bleeding and are not administered when hemorrhage is present.",
  takeaway: "Hemorrhage must be excluded before thrombolytic therapy."
},

{
  id: "CVA-NGN-131",
  caseId: "CVA-NGN-CASE-45",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has left face and arm weakness greater than leg weakness, left sensory loss, and severe left-sided neglect. Which artery is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke produces contralateral face and arm deficits greater than leg deficits. Nondominant right-hemisphere involvement may cause left-sided neglect.",
  takeaway: "Left face/arm deficits + neglect = right MCA."
},

{
  id: "CVA-NGN-132",
  caseId: "CVA-NGN-CASE-45",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client eats food only from the right side of the tray and repeatedly strikes the left arm against the bedrail. Which nursing problem should receive priority?",
  choices: [
    "Risk for injury related to left-sided neglect",
    "Impaired speech related to Broca aphasia",
    "Risk for constipation",
    "Deficient knowledge related to hearing loss"
  ],
  answer: "Risk for injury related to left-sided neglect",
  rationale: "Neglect causes impaired awareness of one side of the body and environment, creating a significant risk for injury.",
  takeaway: "Neglect is not simply a sensory problem—it is a safety problem."
},

{
  id: "CVA-NGN-133",
  caseId: "CVA-NGN-CASE-46",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has right face and arm weakness greater than leg weakness. The client follows commands and appears to understand questions but struggles to produce words. Which combination best describes the findings?",
  choices: [
    "Left MCA stroke with Broca aphasia",
    "Right MCA stroke with Wernicke aphasia",
    "Left ACA stroke with neglect",
    "Right PCA stroke with visual agnosia"
  ],
  answer: "Left MCA stroke with Broca aphasia",
  rationale: "A left MCA stroke can cause right-sided face and arm weakness and dominant-hemisphere language impairment. Preserved comprehension with impaired speech production is consistent with Broca aphasia.",
  takeaway: "Left MCA + understands but cannot speak = Broca aphasia."
},

{
  id: "CVA-NGN-134",
  caseId: "CVA-NGN-CASE-46",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing response is most appropriate when the client becomes frustrated while trying to communicate?",
  choices: [
    "Allow extra time and use simple questions that can be answered with short responses.",
    "Speak loudly and rapidly.",
    "Pretend to understand the client's words.",
    "Avoid asking the client questions."
  ],
  answer: "Allow extra time and use simple questions that can be answered with short responses.",
  rationale: "Clients with expressive aphasia may understand language but have difficulty producing speech. Patience and simple communication support successful interaction.",
  takeaway: "Do not rush a client with expressive aphasia."
},

{
  id: "CVA-NGN-135",
  caseId: "CVA-NGN-CASE-47",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client speaks easily and continuously, but the words are meaningless. When asked to raise one hand, the client does not follow the command and appears unaware of the communication problem. Which deficit is most likely?",
  choices: [
    "Wernicke aphasia",
    "Broca aphasia",
    "Left-sided neglect",
    "Cerebellar ataxia"
  ],
  answer: "Wernicke aphasia",
  rationale: "Wernicke aphasia produces impaired language comprehension with fluent but meaningless speech. Clients may have limited awareness of the deficit.",
  takeaway: "Wernicke = fluent speech, poor comprehension."
},

{
  id: "CVA-NGN-136",
  caseId: "CVA-NGN-CASE-47",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which communication approach is most appropriate for this client?",
  choices: [
    "Use short statements supported by gestures or visual cues.",
    "Provide long detailed verbal instructions.",
    "Assume the client understands because speech is fluent.",
    "Increase the volume of every instruction."
  ],
  answer: "Use short statements supported by gestures or visual cues.",
  rationale: "Because receptive language is impaired, simple communication with visual or gestural support can improve understanding.",
  takeaway: "With receptive aphasia, simplify and show rather than only tell."
},

{
  id: "CVA-NGN-137",
  caseId: "CVA-NGN-CASE-48",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden vertigo and double vision. Assessment reveals nystagmus, dysarthria, dysphagia, and severe gait instability. Which circulation should the nurse suspect?",
  choices: [
    "Vertebrobasilar circulation",
    "Anterior cerebral circulation",
    "Isolated middle cerebral circulation",
    "Peripheral venous circulation"
  ],
  answer: "Vertebrobasilar circulation",
  rationale: "The vertebrobasilar system supplies the brainstem and cerebellum. Stroke in this circulation may cause vertigo, nystagmus, diplopia, dysphagia, dysarthria, and ataxia.",
  takeaway: "Brainstem/cerebellar symptoms point toward posterior circulation."
},

{
  id: "CVA-NGN-138",
  caseId: "CVA-NGN-CASE-48",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's hand grasps are strong and equal. Which nursing judgment is most appropriate?",
  choices: [
    "Continue the urgent stroke evaluation because normal strength does not exclude posterior stroke.",
    "Stop the stroke evaluation because bilateral strength is intact.",
    "Discharge the client because FAST findings are negative.",
    "Assume the symptoms are caused by anxiety."
  ],
  answer: "Continue the urgent stroke evaluation because normal strength does not exclude posterior stroke.",
  rationale: "Posterior circulation strokes can produce serious brainstem and cerebellar deficits without prominent unilateral weakness.",
  takeaway: "Strength can be normal during a dangerous posterior stroke."
},

{
  id: "CVA-NGN-139",
  caseId: "CVA-NGN-CASE-48",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client suddenly becomes unable to swallow secretions and develops a gurgling sound with respirations. Which action has the highest priority?",
  choices: [
    "Protect the airway.",
    "Complete a detailed memory assessment.",
    "Begin gait training.",
    "Assess reading ability."
  ],
  answer: "Protect the airway.",
  rationale: "Inability to manage secretions indicates impaired airway protection. ABC priorities require immediate attention to the airway.",
  takeaway: "Dysphagia can turn a stroke into an airway emergency."
},

{
  id: "CVA-NGN-140",
  caseId: "CVA-NGN-CASE-48",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes less responsive and respirations become irregular. Which interpretation should guide the nurse's response?",
  choices: [
    "Brainstem function may be deteriorating.",
    "The client is entering normal sleep.",
    "The cerebellar findings are resolving.",
    "The client is ready for discharge."
  ],
  answer: "Brainstem function may be deteriorating.",
  rationale: "The brainstem contains vital respiratory centers. Declining consciousness with irregular respirations during a vertebrobasilar stroke is a life-threatening finding.",
  takeaway: "Posterior stroke + LOC or breathing changes = immediate escalation."
},

{
  id: "CVA-NGN-141",
  caseId: "CVA-NGN-CASE-49",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops enlarged ventricles, worsening headache, repeated vomiting, and declining consciousness. Which pathophysiologic process best explains these findings?",
  choices: [
    "Excess CSF is increasing intracranial pressure.",
    "CSF production has completely stopped.",
    "Cerebral blood volume has disappeared.",
    "The skull is expanding to compensate for the fluid."
  ],
  answer: "Excess CSF is increasing intracranial pressure.",
  rationale: "Hydrocephalus involves increased CSF and ventricular enlargement. Because the adult skull is fixed, increasing intracranial volume can raise ICP.",
  takeaway: "Hydrocephalus = excess CSF + enlarged ventricles + ICP risk."
},

{
  id: "CVA-NGN-142",
  caseId: "CVA-NGN-CASE-49",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Monro-Kellie Doctrine",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which statement best applies the Monro-Kellie doctrine to this client's condition?",
  choices: [
    "The skull is a fixed container, so increasing CSF requires compensation by another intracranial component or ICP rises.",
    "The adult skull expands whenever CSF increases.",
    "Brain tissue, blood, and CSF volumes can all increase indefinitely without affecting pressure.",
    "ICP falls whenever ventricular volume increases."
  ],
  answer: "The skull is a fixed container, so increasing CSF requires compensation by another intracranial component or ICP rises.",
  rationale: "The Monro-Kellie doctrine describes the skull as a fixed space containing brain tissue, blood, and CSF. If one component increases without adequate compensation, ICP rises.",
  takeaway: "Fixed skull + increasing volume = increasing pressure once compensation fails."
},

{
  id: "CVA-NGN-143",
  caseId: "CVA-NGN-CASE-49",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding in this client is the most important indicator requiring immediate escalation?",
  choices: [
    "Declining level of consciousness",
    "Mild headache",
    "Request for dim lighting",
    "Urinary frequency"
  ],
  answer: "Declining level of consciousness",
  rationale: "The course emphasizes declining LOC as the earliest and most important indicator of neurologic deterioration associated with increasing ICP.",
  takeaway: "When LOC drops, escalate."
},

{
  id: "CVA-NGN-144",
  caseId: "CVA-NGN-CASE-49",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Which intervention should the nurse anticipate for rapid temporary drainage of CSF in acute hydrocephalus?",
  choices: [
    "External ventricular drain",
    "Oral anticoagulant",
    "Thrombolytic infusion",
    "Carotid endarterectomy"
  ],
  answer: "External ventricular drain",
  rationale: "A ventriculostomy or external ventricular drain can provide acute CSF drainage in hydrocephalus.",
  takeaway: "Acute hydrocephalus may require an EVD."
},

{
  id: "CVA-NGN-145",
  caseId: "CVA-NGN-CASE-50",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "VP Shunt",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with a VP shunt develops severe headache, vomiting, and decreasing consciousness. Which complication should the nurse suspect?",
  choices: [
    "Shunt malfunction with increasing ICP",
    "Normal long-term shunt function",
    "Improved CSF drainage",
    "Resolution of hydrocephalus"
  ],
  answer: "Shunt malfunction with increasing ICP",
  rationale: "Return of headache, vomiting, and neurologic decline in a client with a CSF shunt may indicate malfunction and recurrent increased ICP.",
  takeaway: "Return of ICP symptoms after shunting = suspect malfunction."
},

{
  id: "CVA-NGN-146",
  caseId: "CVA-NGN-CASE-50",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "VP Shunt",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which findings should cause the nurse to suspect infection associated with a CSF shunt or drain? Select all that apply.",
  choices: [
    "Fever",
    "Altered level of consciousness",
    "Redness at the insertion or shunt site",
    "Cloudy CSF when externally visible",
    "Neurologic deterioration",
    "Improved alertness"
  ],
  answer: [
    "Fever",
    "Altered level of consciousness",
    "Redness at the insertion or shunt site",
    "Cloudy CSF when externally visible",
    "Neurologic deterioration"
  ],
  rationale: "The course identifies fever, altered LOC, site redness, abnormal CSF appearance, and neurologic decline as concerning findings for infection.",
  takeaway: "CSF device infection may show systemic, local, and neurologic signs."
},

{
  id: "CVA-NGN-147",
  caseId: "CVA-NGN-CASE-51",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are considered early manifestations of increasing ICP? Select all that apply.",
  choices: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache",
    "Cushing triad"
  ],
  answer: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache"
  ],
  rationale: "Early ICP manifestations include declining LOC, restlessness, irritability, confusion, headache, nausea, vomiting, and speech changes. Cushing triad is a late finding.",
  takeaway: "Recognize ICP before late signs appear."
},

{
  id: "CVA-NGN-148",
  caseId: "CVA-NGN-CASE-51",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings indicate late increased ICP and possible impending herniation? Select all that apply.",
  choices: [
    "Bradycardia",
    "Widened pulse pressure",
    "Irregular respirations",
    "Pupillary dilation",
    "Abnormal posturing",
    "New-onset seizures"
  ],
  answer: [
    "Bradycardia",
    "Widened pulse pressure",
    "Irregular respirations",
    "Pupillary dilation",
    "Abnormal posturing",
    "New-onset seizures"
  ],
  rationale: "Cushing triad, pupil changes, abnormal posturing, and new seizures are late findings of severe increased ICP and may indicate impending herniation.",
  takeaway: "Late ICP signs mean the brain is in immediate danger."
},

{
  id: "CVA-NGN-149",
  caseId: "CVA-NGN-CASE-51",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP changes from decorticate to decerebrate posturing. Which interpretation is most appropriate?",
  choices: [
    "Neurologic deterioration is progressing.",
    "The client's condition is improving.",
    "ICP has returned to normal.",
    "The change is unrelated to neurologic status."
  ],
  answer: "Neurologic deterioration is progressing.",
  rationale: "The course describes progression from decorticate to decerebrate posturing as a late manifestation of worsening neurologic injury associated with severe increased ICP.",
  takeaway: "Decorticate progressing to decerebrate indicates worsening neurologic status."
},

{
  id: "CVA-NGN-150",
  caseId: "CVA-NGN-CASE-52",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a fixed dilated right pupil and worsening left-sided weakness. Which herniation syndrome is most consistent with these findings?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Tonsillar herniation"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation may compress cranial nerve III, producing an ipsilateral fixed dilated pupil, along with contralateral weakness.",
  takeaway: "Uncal = unilateral blown pupil on the side of herniation."
},

{
  id: "CVA-NGN-151",
  caseId: "CVA-NGN-CASE-52",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe cerebral edema develops rapid loss of consciousness and bilateral abnormal posturing. Which herniation pattern should the nurse suspect?",
  choices: [
    "Central or transtentorial herniation",
    "Uncal herniation only",
    "Subfalcine herniation only",
    "Stable hydrocephalus"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "The course associates central or transtentorial herniation with rapid decline in consciousness and bilateral posturing.",
  takeaway: "Rapid LOC decline + bilateral posturing = central herniation pattern."
},

{
  id: "CVA-NGN-152",
  caseId: "CVA-NGN-CASE-52",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Imaging demonstrates a midline shift, and the client develops new weakness that is most pronounced in the leg opposite the lesion. Which herniation pattern is most consistent with these findings?",
  choices: [
    "Subfalcine herniation",
    "Uncal herniation",
    "Tonsillar herniation",
    "Central herniation"
  ],
  answer: "Subfalcine herniation",
  rationale: "The course associates subfalcine herniation with midline shift and contralateral leg weakness.",
  takeaway: "Subfalcine = midline shift + opposite leg weakness."
},

{
  id: "CVA-NGN-153",
  caseId: "CVA-NGN-CASE-52",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops progressively irregular respirations followed by periods of apnea. Which herniation syndrome is most concerning?",
  choices: [
    "Tonsillar herniation",
    "Subfalcine herniation",
    "Stable uncal compression",
    "Resolved central herniation"
  ],
  answer: "Tonsillar herniation",
  rationale: "Tonsillar herniation involves downward displacement through the foramen magnum and can compress vital respiratory centers, producing irregular respirations and apnea.",
  takeaway: "Tonsillar herniation threatens breathing and life."
},

{
  id: "CVA-NGN-154",
  caseId: "CVA-NGN-CASE-53",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Interventions",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing interventions help prevent further increases in ICP? Select all that apply.",
  choices: [
    "Maintain the head in a neutral midline position.",
    "Elevate the head of the bed approximately 30 degrees.",
    "Avoid excessive hip flexion.",
    "Avoid excessive neck flexion.",
    "Minimize unnecessary stimulation.",
    "Cluster every procedure together regardless of the client's response."
  ],
  answer: [
    "Maintain the head in a neutral midline position.",
    "Elevate the head of the bed approximately 30 degrees.",
    "Avoid excessive hip flexion.",
    "Avoid excessive neck flexion.",
    "Minimize unnecessary stimulation."
  ],
  rationale: "These measures promote venous drainage and reduce stimuli that can worsen ICP. Excessive clustering of care may increase stimulation and ICP.",
  takeaway: "Position, drainage, and stimulation control matter in ICP management."
},

{
  id: "CVA-NGN-155",
  caseId: "CVA-NGN-CASE-53",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Interventions",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with increased ICP has retained respiratory secretions and requires suctioning. Which action is most appropriate?",
  choices: [
    "Hyperoxygenate before and after necessary suctioning.",
    "Perform prolonged suctioning repeatedly.",
    "Lower the head of the bed before suctioning.",
    "Flex the client's neck during suctioning."
  ],
  answer: "Hyperoxygenate before and after necessary suctioning.",
  rationale: "Suctioning can increase ICP and contribute to hypoxia. The course recommends hyperoxygenation before and after suctioning.",
  takeaway: "Necessary suctioning should be brief and supported by oxygenation."
},

{
  id: "CVA-NGN-156",
  caseId: "CVA-NGN-CASE-53",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Brain Injury",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which conditions should the nurse work to prevent in a client with acute neurologic injury and increased ICP? Select all that apply.",
  choices: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Poor oxygenation",
    "Adequate cerebral perfusion"
  ],
  answer: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Poor oxygenation"
  ],
  rationale: "The course emphasizes prevention of secondary brain injury by avoiding hypoxia, hypotension, fever, and hyperglycemia while maintaining adequate monitoring and perfusion.",
  takeaway: "Protect the injured brain from secondary insults."
},

{
  id: "CVA-NGN-157",
  caseId: "CVA-NGN-CASE-54",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The provider prescribes mannitol for a client with cerebral edema and increased ICP. Which explanation best describes the therapeutic purpose of this medication?",
  choices: [
    "It acts as an osmotic diuretic to reduce cerebral edema and ICP.",
    "It increases cerebral edema to improve blood flow.",
    "It dissolves intracranial blood clots.",
    "It increases CSF production."
  ],
  answer: "It acts as an osmotic diuretic to reduce cerebral edema and ICP.",
  rationale: "Mannitol is an osmotic diuretic used to reduce cerebral edema and intracranial pressure.",
  takeaway: "Mannitol pulls fluid to reduce cerebral edema."
},

{
  id: "CVA-NGN-158",
  caseId: "CVA-NGN-CASE-54",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings require particular attention during mannitol therapy? Select all that apply.",
  choices: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Urine output",
    "Neurologic response",
    "Favorite food"
  ],
  answer: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Urine output",
    "Neurologic response"
  ],
  rationale: "Mannitol can cause dehydration, electrolyte abnormalities, and renal injury. Serum osmolarity, renal function, fluid balance, and neurologic response require monitoring.",
  takeaway: "Mannitol can help the brain while stressing fluid and renal balance."
},

{
  id: "CVA-NGN-159",
  caseId: "CVA-NGN-CASE-55",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline has improving neurologic status but develops new crackles and shortness of breath. Which action is most appropriate?",
  choices: [
    "Recognize possible fluid overload and promptly report the respiratory change.",
    "Ignore the finding because neurologic status improved.",
    "Encourage additional free-water intake immediately.",
    "Assume crackles are an expected neurologic finding."
  ],
  answer: "Recognize possible fluid overload and promptly report the respiratory change.",
  rationale: "Hypertonic saline can cause fluid overload and pulmonary edema. Lung sounds and respiratory status require close monitoring.",
  takeaway: "Improving ICP does not make pulmonary edema acceptable."
},

{
  id: "CVA-NGN-160",
  caseId: "CVA-NGN-CASE-56",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with increased ICP who has a new fixed dilated pupil and decreasing level of consciousness",
    "A client with a left MCA stroke who has stable expressive aphasia",
    "A client with a right ACA stroke who has unchanged left-leg weakness",
    "A client with a PCA stroke who has an unchanged visual field deficit"
  ],
  answer: "A client with increased ICP who has a new fixed dilated pupil and decreasing level of consciousness",
  rationale: "A new fixed pupil with declining consciousness suggests severe increased ICP and possible herniation. This is immediately life-threatening compared with stable stroke deficits.",
  takeaway: "New herniation signs outrank stable neurologic deficits."
},

{
  id: "CVA-NGN-161",
  caseId: "CVA-NGN-CASE-57",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Transient Ischemic Attack",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden right arm weakness and difficulty speaking that completely resolved before arriving at the hospital. Which interpretation should guide the nurse's care?",
  choices: [
    "The episode may represent a TIA and requires urgent evaluation.",
    "The client does not require evaluation because the symptoms resolved.",
    "The episode confirms a hemorrhagic stroke.",
    "The client can wait until symptoms return before seeking treatment."
  ],
  answer: "The episode may represent a TIA and requires urgent evaluation.",
  rationale: "A TIA causes temporary neurologic dysfunction, but resolution of symptoms does not make the event harmless. A TIA is an important warning sign for future stroke and requires urgent evaluation.",
  takeaway: "Resolved neurologic symptoms can still represent a serious TIA."
},

{
  id: "CVA-NGN-162",
  caseId: "CVA-NGN-CASE-57",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Transient Ischemic Attack",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which conditions should the nurse recognize as possible contributors to a TIA? Select all that apply.",
  choices: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary interruption of cerebral perfusion",
    "Permanent rupture of a cerebral vessel",
    "Normal cerebral circulation"
  ],
  answer: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary interruption of cerebral perfusion"
  ],
  rationale: "The course identifies carotid stenosis, plaque, and atrial fibrillation as important causes or contributors to transient cerebral ischemia.",
  takeaway: "TIA often points to an underlying vascular or embolic problem."
},

{
  id: "CVA-NGN-163",
  caseId: "CVA-NGN-CASE-57",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Transient Ischemic Attack",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which statement by a client who experienced a TIA requires immediate correction?",
  choices: [
    "Since my symptoms disappeared, I do not need any further evaluation.",
    "A TIA can be a warning sign for a future stroke.",
    "I should seek emergency care if neurologic symptoms occur again.",
    "My risk factors need to be evaluated."
  ],
  answer: "Since my symptoms disappeared, I do not need any further evaluation.",
  rationale: "A TIA requires urgent evaluation even when symptoms completely resolve because it can precede a completed stroke.",
  takeaway: "Never dismiss a TIA because the symptoms stopped."
},

{
  id: "CVA-NGN-164",
  caseId: "CVA-NGN-CASE-58",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "A client has hypertension, atrial fibrillation, diabetes mellitus, and a previous TIA. Which risk factor does the course identify as the strongest modifiable risk factor for stroke?",
  choices: [
    "Hypertension",
    "Atrial fibrillation",
    "Previous TIA",
    "Age"
  ],
  answer: "Hypertension",
  rationale: "The course identifies hypertension as the strongest modifiable risk factor for stroke.",
  takeaway: "Blood pressure control is central to stroke prevention."
},

{
  id: "CVA-NGN-165",
  caseId: "CVA-NGN-CASE-58",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Why does atrial fibrillation significantly increase the risk for an embolic stroke?",
  choices: [
    "Blood can become stagnant in the atria and form a clot that travels to the brain.",
    "Atrial fibrillation directly ruptures cerebral arteries.",
    "Atrial fibrillation permanently increases CSF production.",
    "Atrial fibrillation causes the cerebral ventricles to enlarge."
  ],
  answer: "Blood can become stagnant in the atria and form a clot that travels to the brain.",
  rationale: "Atrial fibrillation promotes blood stasis and thrombus formation. A clot can then embolize to the cerebral circulation and obstruct blood flow.",
  takeaway: "AFib creates an embolic stroke risk through clot formation."
},

{
  id: "CVA-NGN-166",
  caseId: "CVA-NGN-CASE-59",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A cerebral artery becomes completely occluded. Which sequence best describes the resulting brain injury?",
  choices: [
    "Reduced perfusion → ischemia → neuronal injury → infarction",
    "Increased CSF → vasodilation → improved perfusion → recovery",
    "Hemorrhage → increased oxygen delivery → neuronal recovery",
    "Ischemia → increased glucose delivery → tissue regeneration"
  ],
  answer: "Reduced perfusion → ischemia → neuronal injury → infarction",
  rationale: "Interruption of cerebral blood flow deprives neurons of oxygen and glucose. Persistent ischemia causes cellular injury and eventually irreversible infarction.",
  takeaway: "No blood flow means no oxygen or glucose, leading to infarction."
},

{
  id: "CVA-NGN-167",
  caseId: "CVA-NGN-CASE-59",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Why is rapid restoration of cerebral perfusion important during an ischemic stroke?",
  choices: [
    "Neurons require a continuous supply of oxygen and glucose and can die within minutes of severe ischemia.",
    "Brain tissue stores enough oxygen for several days.",
    "Neurons function normally without glucose.",
    "Delayed treatment prevents cerebral edema."
  ],
  answer: "Neurons require a continuous supply of oxygen and glucose and can die within minutes of severe ischemia.",
  rationale: "The brain depends on continuous oxygen and glucose delivery. Prolonged interruption of perfusion leads rapidly to irreversible neuronal injury.",
  takeaway: "Stroke treatment is time-sensitive because brain tissue is highly dependent on continuous perfusion."
},

{
  id: "CVA-NGN-168",
  caseId: "CVA-NGN-CASE-60",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Deterioration",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client admitted after a large ischemic stroke was alert 30 minutes ago but is now increasingly difficult to arouse. Which action should the nurse take?",
  choices: [
    "Immediately reassess and escalate the neurologic change.",
    "Allow the client to sleep for several hours.",
    "Document the finding as expected fatigue.",
    "Wait for the next scheduled neurologic assessment."
  ],
  answer: "Immediately reassess and escalate the neurologic change.",
  rationale: "Declining level of consciousness can be an early indicator of worsening cerebral perfusion, cerebral edema, or increasing ICP and requires prompt action.",
  takeaway: "A new LOC decline after stroke is never a routine finding."
},

{
  id: "CVA-NGN-169",
  caseId: "CVA-NGN-CASE-60",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Deterioration",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which additional findings would strengthen the nurse's concern for increasing ICP? Select all that apply.",
  choices: [
    "Worsening headache",
    "Repeated vomiting",
    "Increasing confusion",
    "New pupillary changes",
    "Abnormal posturing",
    "Improving alertness"
  ],
  answer: [
    "Worsening headache",
    "Repeated vomiting",
    "Increasing confusion",
    "New pupillary changes",
    "Abnormal posturing"
  ],
  rationale: "Headache, vomiting, confusion, declining LOC, pupil abnormalities, and posturing can indicate worsening intracranial pressure and neurologic deterioration.",
  takeaway: "Trend the whole neurologic picture, not just one finding."
},

{
  id: "CVA-NGN-170",
  caseId: "CVA-NGN-CASE-60",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Deterioration",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "While awaiting further intervention, which positioning action is most appropriate?",
  choices: [
    "Elevate the head of the bed about 30 degrees and keep the head midline.",
    "Place the client flat with the neck sharply flexed.",
    "Lower the head below the heart.",
    "Flex the client's hips to 90 degrees."
  ],
  answer: "Elevate the head of the bed about 30 degrees and keep the head midline.",
  rationale: "This position promotes cerebral venous drainage and helps avoid additional increases in ICP.",
  takeaway: "HOB 30 degrees + neutral head promotes venous drainage."
},

{
  id: "CVA-NGN-171",
  caseId: "CVA-NGN-CASE-61",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment finding is most concerning in a client being monitored for increased ICP?",
  choices: [
    "The client is progressively more difficult to arouse.",
    "The client reports a mild unchanged headache.",
    "The client requests the room lights be dimmed.",
    "The client reports being tired after physical therapy."
  ],
  answer: "The client is progressively more difficult to arouse.",
  rationale: "Declining level of consciousness is the earliest and most important indicator of neurologic deterioration associated with increasing ICP.",
  takeaway: "LOC is one of the most important trends in ICP assessment."
},

{
  id: "CVA-NGN-172",
  caseId: "CVA-NGN-CASE-61",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client's ICP remains at 24 mmHg. Which interpretation is most appropriate?",
  choices: [
    "The ICP is above the normal range and sustained elevation can be harmful.",
    "The ICP is within the expected normal range.",
    "The ICP is too low to support cerebral perfusion.",
    "The value proves that herniation has already occurred."
  ],
  answer: "The ICP is above the normal range and sustained elevation can be harmful.",
  rationale: "The course identifies normal ICP as approximately 10 to 15 mmHg and sustained ICP above 20 mmHg as harmful.",
  takeaway: "Normal ICP is about 10–15 mmHg; sustained values above 20 are concerning."
},

{
  id: "CVA-NGN-173",
  caseId: "CVA-NGN-CASE-61",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change indicates progression from early to late increased ICP?",
  choices: [
    "The client develops bradycardia, widened pulse pressure, and irregular respirations.",
    "The client develops mild irritability.",
    "The client reports a worsening headache.",
    "The client becomes mildly restless."
  ],
  answer: "The client develops bradycardia, widened pulse pressure, and irregular respirations.",
  rationale: "Bradycardia, widened pulse pressure, and irregular respirations form Cushing triad, a late sign of severe increased ICP.",
  takeaway: "Cushing triad means ICP has progressed to a late emergency."
},

{
  id: "CVA-NGN-174",
  caseId: "CVA-NGN-CASE-62",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol has increasing serum osmolarity, decreasing urine output, and worsening renal function. Which nursing judgment is most appropriate?",
  choices: [
    "The findings require prompt evaluation before additional mannitol is administered.",
    "The findings indicate the medication should automatically be doubled.",
    "Renal function is unrelated to mannitol therapy.",
    "The findings prove ICP has normalized."
  ],
  answer: "The findings require prompt evaluation before additional mannitol is administered.",
  rationale: "Mannitol requires monitoring of serum osmolarity, urine output, electrolytes, and renal function. Excessive osmolarity or renal dysfunction can make continued therapy unsafe.",
  takeaway: "Mannitol requires safe renal function and careful osmolarity monitoring."
},

{
  id: "CVA-NGN-175",
  caseId: "CVA-NGN-CASE-62",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which nursing actions are appropriate during mannitol therapy? Select all that apply.",
  choices: [
    "Maintain strict intake and output.",
    "Monitor renal function.",
    "Monitor serum osmolarity.",
    "Monitor electrolytes.",
    "Use the prescribed inline filter.",
    "Ignore decreasing urine output."
  ],
  answer: [
    "Maintain strict intake and output.",
    "Monitor renal function.",
    "Monitor serum osmolarity.",
    "Monitor electrolytes.",
    "Use the prescribed inline filter."
  ],
  rationale: "The course emphasizes strict fluid monitoring, renal assessment, serum osmolarity, electrolytes, and use of an inline filter with mannitol.",
  takeaway: "Mannitol safety requires close fluid, kidney, and laboratory monitoring."
},

{
  id: "CVA-NGN-176",
  caseId: "CVA-NGN-CASE-63",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline for increased ICP develops rapidly rising serum sodium. Which nursing action is most appropriate?",
  choices: [
    "Report the change and evaluate the therapy because rapid sodium shifts should be avoided.",
    "Increase the infusion rate without an order.",
    "Ignore the sodium because only ICP matters.",
    "Give additional hypertonic saline to correct the sodium."
  ],
  answer: "Report the change and evaluate the therapy because rapid sodium shifts should be avoided.",
  rationale: "Serial sodium monitoring is required during hypertonic saline therapy, and rapid sodium shifts should be avoided.",
  takeaway: "Hypertonic saline requires careful sodium trending."
},

{
  id: "CVA-NGN-177",
  caseId: "CVA-NGN-CASE-63",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings should the nurse monitor closely during 3% hypertonic saline therapy? Select all that apply.",
  choices: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status",
    "Hair texture"
  ],
  answer: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status"
  ],
  rationale: "Hypertonic saline can cause hypernatremia and fluid overload. Serial sodium levels, neurologic status, lung sounds, and volume status should be monitored.",
  takeaway: "With hypertonic saline, watch sodium and the lungs."
},

{
  id: "CVA-NGN-178",
  caseId: "CVA-NGN-CASE-64",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP suddenly develops a fixed dilated pupil. Which nursing interpretation is most appropriate?",
  choices: [
    "The finding may indicate brain herniation and requires immediate escalation.",
    "The finding is expected with uncomplicated recovery.",
    "The client should be reassessed at the end of the shift.",
    "The finding confirms that ICP has decreased."
  ],
  answer: "The finding may indicate brain herniation and requires immediate escalation.",
  rationale: "A new fixed dilated pupil is a late neurologic finding and may indicate cranial nerve compression from herniation.",
  takeaway: "A new blown pupil is a neurologic emergency."
},

{
  id: "CVA-NGN-179",
  caseId: "CVA-NGN-CASE-64",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which findings support severe increased ICP with possible herniation? Select all that apply.",
  choices: [
    "Fixed dilated pupil",
    "Rapid decline in consciousness",
    "Abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widened pulse pressure",
    "Improving orientation"
  ],
  answer: [
    "Fixed dilated pupil",
    "Rapid decline in consciousness",
    "Abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widened pulse pressure"
  ],
  rationale: "Pupil changes, rapid LOC decline, abnormal posturing, respiratory abnormalities, and Cushing triad are late signs associated with severe increased ICP and herniation.",
  takeaway: "Herniation produces multiple late neurologic warning signs."
},

{
  id: "CVA-NGN-180",
  caseId: "CVA-NGN-CASE-65",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with hydrocephalus who is newly difficult to arouse and has repeated vomiting",
    "A client with a stable left MCA stroke who has expressive aphasia",
    "A client with a stable PCA stroke who has visual field loss",
    "A client with a previous TIA who is waiting for discharge teaching"
  ],
  answer: "A client with hydrocephalus who is newly difficult to arouse and has repeated vomiting",
  rationale: "Declining consciousness and vomiting in hydrocephalus suggest increasing ICP and require immediate assessment and escalation.",
  takeaway: "New neurologic deterioration outranks stable deficits."
},

{
  id: "CVA-NGN-181",
  caseId: "CVA-NGN-CASE-65",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with a posterior circulation stroke who develops new dysphagia and choking",
    "A client with an ACA stroke and stable leg weakness",
    "A client with Broca aphasia who is frustrated",
    "A client with stable left-sided neglect"
  ],
  answer: "A client with a posterior circulation stroke who develops new dysphagia and choking",
  rationale: "New dysphagia and choking indicate an immediate airway and aspiration risk. ABC priorities take precedence over stable neurologic deficits.",
  takeaway: "Airway threats come before stable stroke deficits."
},

{
  id: "CVA-NGN-182",
  caseId: "CVA-NGN-CASE-65",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client receiving thrombolytic therapy who reports a sudden severe headache",
    "A client with stable right-sided weakness after an ischemic stroke",
    "A client with a resolved TIA awaiting testing",
    "A client with chronic visual impairment after a PCA stroke"
  ],
  answer: "A client receiving thrombolytic therapy who reports a sudden severe headache",
  rationale: "Sudden severe headache during thrombolytic therapy may indicate intracranial hemorrhage and requires immediate intervention.",
  takeaway: "Sudden headache during thrombolysis is a bleeding emergency until proven otherwise."
},

{
  id: "CVA-NGN-183",
  caseId: "CVA-NGN-CASE-66",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with right facial droop, right arm weakness, right sensory loss, and inability to produce meaningful speech. The client follows commands and nods appropriately. Which combination best localizes the stroke?",
  choices: [
    "Left MCA with Broca aphasia",
    "Right MCA with Wernicke aphasia",
    "Left PCA with neglect",
    "Right ACA with visual agnosia"
  ],
  answer: "Left MCA with Broca aphasia",
  rationale: "The left hemisphere controls the right side and is usually dominant for language. MCA involvement commonly affects the face and arm. Preserved comprehension with impaired speech production indicates Broca aphasia.",
  takeaway: "Right deficits + understands but cannot speak = left MCA/Broca."
},

{
  id: "CVA-NGN-184",
  caseId: "CVA-NGN-CASE-66",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Before giving the client's scheduled oral medications, which action should the nurse take?",
  choices: [
    "Verify swallowing safety.",
    "Crush all medications into water.",
    "Give the medications with a straw.",
    "Administer them immediately because the client follows commands."
  ],
  answer: "Verify swallowing safety.",
  rationale: "Stroke can impair swallowing even when the client is alert and follows commands. Oral intake should not be given until swallowing safety has been evaluated.",
  takeaway: "Alert does not automatically mean safe to swallow."
},

{
  id: "CVA-NGN-185",
  caseId: "CVA-NGN-CASE-66",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several hours later, the client becomes restless, develops worsening headache, and is increasingly confused. Which hypothesis should the nurse prioritize?",
  choices: [
    "Increasing ICP may be developing.",
    "The stroke has completely resolved.",
    "The client is demonstrating expected communication frustration only.",
    "The neurologic status is improving."
  ],
  answer: "Increasing ICP may be developing.",
  rationale: "Restlessness, worsening headache, confusion, and declining neurologic function are early findings associated with increasing ICP.",
  takeaway: "Early ICP deterioration can begin subtly."
},

{
  id: "CVA-NGN-186",
  caseId: "CVA-NGN-CASE-66",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure becomes 204/70 mmHg, heart rate is 42/min, and respirations are irregular. Which finding pattern is present?",
  choices: [
    "Cushing triad",
    "Early uncomplicated ischemia",
    "Normal stroke recovery",
    "Resolved increased ICP"
  ],
  answer: "Cushing triad",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of increased ICP.",
  takeaway: "Cushing triad = hypertension/wide pulse pressure + bradycardia + irregular breathing."
},

{
  id: "CVA-NGN-187",
  caseId: "CVA-NGN-CASE-66",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client develops a fixed dilated left pupil and worsening right-sided weakness. Which complication should the nurse suspect?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Stable cerebral edema",
    "Resolved stroke"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation can produce an ipsilateral fixed dilated pupil and contralateral motor weakness.",
  takeaway: "Left blown pupil + right weakness = left uncal herniation."
},

{
  id: "CVA-NGN-188",
  caseId: "CVA-NGN-CASE-67",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive SATA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are correctly matched with the affected vascular territory? Select all that apply.",
  choices: [
    "MCA — contralateral face and arm weakness greater than leg weakness",
    "ACA — contralateral leg weakness greater than arm weakness",
    "PCA — visual field deficits",
    "Vertebrobasilar — ataxia, dysphagia, and diplopia",
    "Right MCA — possible left-sided neglect",
    "PCA — always produces severe contralateral leg paralysis"
  ],
  answer: [
    "MCA — contralateral face and arm weakness greater than leg weakness",
    "ACA — contralateral leg weakness greater than arm weakness",
    "PCA — visual field deficits",
    "Vertebrobasilar — ataxia, dysphagia, and diplopia",
    "Right MCA — possible left-sided neglect"
  ],
  rationale: "MCA, ACA, PCA, and vertebrobasilar strokes have characteristic deficit patterns. PCA strokes often produce visual deficits and do not necessarily cause major motor weakness.",
  takeaway: "Learn stroke territories by the pattern of deficits they produce."
},

{
  id: "CVA-NGN-189",
  caseId: "CVA-NGN-CASE-67",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive SATA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse associate with left-hemisphere stroke? Select all that apply.",
  choices: [
    "Right-sided weakness",
    "Right-sided sensory loss",
    "Aphasia",
    "Language impairment",
    "Left-sided neglect",
    "Possible dominant-hemisphere communication deficits"
  ],
  answer: [
    "Right-sided weakness",
    "Right-sided sensory loss",
    "Aphasia",
    "Language impairment",
    "Possible dominant-hemisphere communication deficits"
  ],
  rationale: "The left hemisphere controls the right side of the body and is dominant for language in most people. Left-sided neglect is more characteristic of right-hemisphere injury.",
  takeaway: "Left brain = right body + language."
},

{
  id: "CVA-NGN-190",
  caseId: "CVA-NGN-CASE-67",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive SATA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse associate with right-hemisphere stroke? Select all that apply.",
  choices: [
    "Left-sided weakness",
    "Left-sided sensory loss",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Poor awareness of deficits",
    "Classic Broca aphasia"
  ],
  answer: [
    "Left-sided weakness",
    "Left-sided sensory loss",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Poor awareness of deficits"
  ],
  rationale: "The right hemisphere controls the left side and contributes to spatial awareness, attention, and insight. Right-hemisphere injury may therefore produce left neglect and impaired awareness.",
  takeaway: "Right brain = left body + spatial awareness and neglect."
},

{
  id: "CVA-NGN-191",
  caseId: "CVA-NGN-CASE-68",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client requires the most immediate nursing intervention?",
  choices: [
    "A client with severe increased ICP who develops irregular respirations and apnea",
    "A client with stable expressive aphasia",
    "A client with stable left-sided neglect",
    "A client with chronic visual field loss"
  ],
  answer: "A client with severe increased ICP who develops irregular respirations and apnea",
  rationale: "Irregular respirations progressing to apnea indicate severe brainstem compromise and an immediate threat to breathing.",
  takeaway: "Breathing failure from neurologic deterioration is the highest priority."
},

{
  id: "CVA-NGN-192",
  caseId: "CVA-NGN-CASE-68",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client requires the most immediate nursing intervention?",
  choices: [
    "A client with an EVD who develops fever, cloudy CSF, and decreasing consciousness",
    "A client with a stable PCA stroke and visual impairment",
    "A client with a previous TIA who needs risk-factor teaching",
    "A client with stable leg weakness after an ACA stroke"
  ],
  answer: "A client with an EVD who develops fever, cloudy CSF, and decreasing consciousness",
  rationale: "Fever, cloudy CSF, and neurologic deterioration suggest infection associated with the CSF drainage system and require prompt intervention.",
  takeaway: "EVD infection plus neurologic decline is urgent."
},

{
  id: "CVA-NGN-193",
  caseId: "CVA-NGN-CASE-68",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client requires the most immediate nursing intervention?",
  choices: [
    "A client with SAH on day 6 who develops new confusion and unilateral weakness",
    "A client with stable Broca aphasia",
    "A client with chronic post-stroke weakness",
    "A client with an unchanged visual field deficit"
  ],
  answer: "A client with SAH on day 6 who develops new confusion and unilateral weakness",
  rationale: "New neurologic deficits during days 3 through 14 after SAH are concerning for cerebral vasospasm and require urgent evaluation.",
  takeaway: "New deficits after SAH during the vasospasm window are urgent."
},

{
  id: "CVA-NGN-194",
  caseId: "CVA-NGN-CASE-69",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden severe headache, vomiting, neck stiffness, and photophobia. Which type of stroke should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Anterior cerebral artery ischemia"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "Sudden severe headache with meningeal irritation findings such as neck stiffness and photophobia is characteristic of SAH.",
  takeaway: "Worst headache + neck stiffness + photophobia = SAH pattern."
},

{
  id: "CVA-NGN-195",
  caseId: "CVA-NGN-CASE-69",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication should the nurse expect to be included in the client's treatment plan after the subarachnoid hemorrhage?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Routine thrombolytic infusion"
  ],
  answer: "Nimodipine",
  rationale: "The course emphasizes scheduled nimodipine in SAH management because cerebral vasospasm is an important delayed complication.",
  takeaway: "SAH treatment includes scheduled nimodipine."
},

{
  id: "CVA-NGN-196",
  caseId: "CVA-NGN-CASE-69",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "On day 8, the client becomes confused and develops new left arm weakness. Which hypothesis should the nurse prioritize?",
  choices: [
    "Delayed cerebral vasospasm",
    "Normal recovery from SAH",
    "Expected effect of improved cerebral perfusion",
    "Resolution of the neurologic injury"
  ],
  answer: "Delayed cerebral vasospasm",
  rationale: "Vasospasm commonly becomes a concern several days after SAH. New focal deficits or altered neurologic status during days 3 through 14 require urgent evaluation.",
  takeaway: "Delayed new deficits after SAH should trigger concern for vasospasm."
},

{
  id: "CVA-NGN-197",
  caseId: "CVA-NGN-CASE-70",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which findings require immediate escalation in a client with an acute neurologic disorder? Select all that apply.",
  choices: [
    "New decline in level of consciousness",
    "New fixed dilated pupil",
    "New irregular respirations",
    "New abnormal posturing",
    "New severe headache with vomiting",
    "Stable weakness unchanged from admission"
  ],
  answer: [
    "New decline in level of consciousness",
    "New fixed dilated pupil",
    "New irregular respirations",
    "New abnormal posturing",
    "New severe headache with vomiting"
  ],
  rationale: "These findings can indicate worsening cerebral perfusion, hemorrhage, increased ICP, or herniation. Stable baseline deficits remain important but do not represent new deterioration.",
  takeaway: "New neurologic deterioration requires immediate action."
},

{
  id: "CVA-NGN-198",
  caseId: "CVA-NGN-CASE-70",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which actions belong in the rapid initial assessment of a client with suspected acute stroke? Select all that apply.",
  choices: [
    "Assess airway, breathing, and circulation.",
    "Determine exact last-known-well.",
    "Check blood glucose.",
    "Assess oxygenation.",
    "Perform a rapid neurologic assessment.",
    "Obtain a noncontrast head CT."
  ],
  answer: [
    "Assess airway, breathing, and circulation.",
    "Determine exact last-known-well.",
    "Check blood glucose.",
    "Assess oxygenation.",
    "Perform a rapid neurologic assessment.",
    "Obtain a noncontrast head CT."
  ],
  rationale: "The course prioritizes ABCs, last-known-well, ruling out hypoglycemia and hypoxia, rapid neurologic assessment, and noncontrast CT.",
  takeaway: "Know the acute stroke sequence from stabilization through imaging."
},

{
  id: "CVA-NGN-199",
  caseId: "CVA-NGN-CASE-70",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are consistent with posterior circulation stroke and should not be dismissed simply because extremity strength is normal? Select all that apply.",
  choices: [
    "Diplopia",
    "Dysphagia",
    "Dysarthria",
    "Vertigo",
    "Ataxia",
    "Nystagmus"
  ],
  answer: [
    "Diplopia",
    "Dysphagia",
    "Dysarthria",
    "Vertigo",
    "Ataxia",
    "Nystagmus"
  ],
  rationale: "Vertebrobasilar strokes can affect the brainstem and cerebellum, producing cranial nerve, balance, coordination, and swallowing abnormalities without prominent limb weakness.",
  takeaway: "Posterior strokes may hide behind normal strength."
},

{
  id: "CVA-NGN-200",
  caseId: "CVA-NGN-CASE-70",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client progresses from sudden focal neurologic deficits to worsening headache, vomiting, declining consciousness, a fixed pupil, abnormal posturing, and irregular respirations. Which interpretation best connects the client's clinical course?",
  choices: [
    "The client has progressed from acute cerebral injury to severe increased ICP with possible brain herniation.",
    "The neurologic findings demonstrate normal recovery.",
    "The stroke has resolved because the original focal deficit is no longer the main concern.",
    "The findings indicate improved cerebral perfusion."
  ],
  answer: "The client has progressed from acute cerebral injury to severe increased ICP with possible brain herniation.",
  rationale: "Worsening headache, vomiting, declining consciousness, pupil changes, posturing, and respiratory abnormalities represent progression from neurologic injury to severe increased ICP and possible herniation.",
  takeaway: "Recognize the progression: stroke → edema/ICP → late signs → possible herniation."
},

{
  id: "CVA-NGN-201",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives in the emergency department with sudden left facial droop and left arm weakness. The spouse reports the client was normal at 1845 and symptoms were discovered at 1915. Which time should the nurse use as the client's last-known-well?",
  choices: [
    "1845",
    "1915",
    "The time of emergency department arrival",
    "The time the CT scan is completed"
  ],
  answer: "1845",
  rationale: "Last-known-well is the last time the client was known to be neurologically normal, not the time the symptoms were discovered.",
  takeaway: "Last-known-well = last known normal."
},

{
  id: "CVA-NGN-202",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's airway is patent, respirations are unlabored, oxygen saturation is 96%, and blood glucose is 108 mg/dL. Which action should the nurse anticipate next?",
  choices: [
    "Rapid neurologic assessment and noncontrast head CT",
    "Give the client water to assess swallowing",
    "Delay imaging until weakness improves",
    "Begin discharge teaching"
  ],
  answer: "Rapid neurologic assessment and noncontrast head CT",
  rationale: "After ABCs, last-known-well, glucose, and oxygenation are addressed, rapid neurologic assessment and noncontrast CT are priorities in acute stroke evaluation.",
  takeaway: "Stable ABCs → neuro assessment → noncontrast CT."
},

{
  id: "CVA-NGN-203",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Assessment reveals left face and arm weakness greater than leg weakness, left sensory loss, and left-sided neglect. Which artery is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke commonly causes contralateral face and arm deficits greater than leg deficits. Right-hemisphere involvement can also cause left-sided neglect.",
  takeaway: "Left face/arm weakness + neglect = right MCA."
},

{
  id: "CVA-NGN-204",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client repeatedly attempts to climb out of bed and does not recognize the left arm as weak. Which nursing action is the priority?",
  choices: [
    "Implement fall and injury precautions.",
    "Encourage independent ambulation.",
    "Leave the client alone to improve independence.",
    "Place needed objects only on the neglected side."
  ],
  answer: "Implement fall and injury precautions.",
  rationale: "Right-hemisphere stroke may cause neglect and poor awareness of deficits, greatly increasing the risk for falls and injury.",
  takeaway: "Neglect + poor insight = major safety risk."
},

{
  id: "CVA-NGN-205",
  caseId: "CVA-NGN-CASE-72",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with disabling ischemic stroke symptoms arrived 2 hours after last-known-well. Noncontrast CT shows no hemorrhage. Blood pressure is 178/102 mmHg, there is no active bleeding, and coagulation studies are acceptable. Which interpretation is most appropriate based on the course criteria?",
  choices: [
    "The available findings support continued evaluation for thrombolytic therapy.",
    "The blood pressure automatically excludes thrombolytic therapy.",
    "The CT finding excludes ischemic stroke.",
    "Thrombolytic therapy is contraindicated because symptoms began less than 4.5 hours ago."
  ],
  answer: "The available findings support continued evaluation for thrombolytic therapy.",
  rationale: "The course criteria include last-known-well within 4.5 hours, no hemorrhage on CT, blood pressure below 185/110 mmHg, no active bleeding, and acceptable coagulation studies.",
  takeaway: "Know the major thrombolytic safety checkpoints."
},

{
  id: "CVA-NGN-206",
  caseId: "CVA-NGN-CASE-72",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "During thrombolytic therapy, the client suddenly reports a severe headache and begins vomiting. Blood pressure rises sharply and neurologic deficits worsen. Which action should the nurse take?",
  choices: [
    "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
    "Continue the infusion because these are expected findings.",
    "Wait until the medication is completed before reassessing.",
    "Give oral fluids and reassess in 30 minutes."
  ],
  answer: "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
  rationale: "Severe new headache, sudden blood pressure elevation, nausea or vomiting, neurologic deterioration, and bleeding are warning signs of possible intracranial hemorrhage during thrombolytic therapy.",
  takeaway: "Thrombolytic + sudden deterioration = stop and suspect hemorrhage."
},

{
  id: "CVA-NGN-207",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops vertigo, nystagmus, diplopia, dysarthria, and severe gait instability. Hand grasps are equal and strong. Which interpretation is most appropriate?",
  choices: [
    "A vertebrobasilar stroke remains a major concern.",
    "Stroke is excluded because extremity strength is normal.",
    "The findings indicate an isolated frontal-lobe disorder.",
    "The client is demonstrating a typical TIA recovery pattern."
  ],
  answer: "A vertebrobasilar stroke remains a major concern.",
  rationale: "Posterior circulation stroke can cause brainstem and cerebellar findings such as vertigo, nystagmus, diplopia, dysarthria, and ataxia without prominent unilateral weakness.",
  takeaway: "Normal strength does not rule out posterior stroke."
},

{
  id: "CVA-NGN-208",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client begins coughing on secretions and is unable to swallow. Which nursing action has the highest priority?",
  choices: [
    "Protect the airway and maintain NPO status.",
    "Give small sips of water.",
    "Administer oral medications with applesauce.",
    "Begin ambulation to improve coordination."
  ],
  answer: "Protect the airway and maintain NPO status.",
  rationale: "Dysphagia and inability to manage secretions indicate impaired airway protection and aspiration risk.",
  takeaway: "Posterior stroke + dysphagia = airway priority."
},

{
  id: "CVA-NGN-209",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Thirty minutes later, the client becomes difficult to arouse and develops irregular respirations. Which nursing judgment is most appropriate?",
  choices: [
    "Brainstem function may be deteriorating and immediate escalation is required.",
    "The client should be allowed to sleep.",
    "The respiratory pattern is expected with cerebellar injury.",
    "The stroke is resolving because weakness is absent."
  ],
  answer: "Brainstem function may be deteriorating and immediate escalation is required.",
  rationale: "The vertebrobasilar circulation supplies the brainstem. Declining LOC and irregular respirations can indicate compromise of vital neurologic centers.",
  takeaway: "Posterior stroke + LOC/breathing changes = emergency."
},

{
  id: "CVA-NGN-210",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports the sudden onset of the worst headache ever experienced. Assessment reveals vomiting, neck stiffness, and photophobia. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Stable hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "A sudden severe headache with neck stiffness and photophobia is characteristic of subarachnoid hemorrhage.",
  takeaway: "Worst headache + meningeal signs = suspect SAH."
},

{
  id: "CVA-NGN-211",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication should the nurse expect to administer on schedule after the diagnosis is confirmed?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Routine thrombolytic therapy"
  ],
  answer: "Nimodipine",
  rationale: "The course emphasizes scheduled nimodipine after SAH because cerebral vasospasm is an important delayed complication.",
  takeaway: "SAH → scheduled nimodipine."
},

{
  id: "CVA-NGN-212",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "On day 5 after the hemorrhage, the client develops new confusion and right arm weakness. Which complication should the nurse suspect?",
  choices: [
    "Cerebral vasospasm",
    "Normal recovery",
    "Resolution of the hemorrhage",
    "Expected effect of nimodipine"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies days 3 through 14 after SAH as an important period for cerebral vasospasm. New neurologic deficits require urgent evaluation.",
  takeaway: "SAH days 3–14 + new deficit = suspect vasospasm."
},

{
  id: "CVA-NGN-213",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke becomes restless and irritable, then develops worsening headache, confusion, and increasing drowsiness. Which complication should the nurse suspect?",
  choices: [
    "Increasing intracranial pressure",
    "Resolution of cerebral edema",
    "Improved cerebral perfusion",
    "Normal emotional response to hospitalization"
  ],
  answer: "Increasing intracranial pressure",
  rationale: "Restlessness, irritability, headache, confusion, and declining LOC are early findings associated with increasing ICP.",
  takeaway: "Early ICP changes often begin with LOC and behavior."
},

{
  id: "CVA-NGN-214",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions should the nurse implement for this client with increasing ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Place the client flat with the head turned sharply to the side."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation."
  ],
  rationale: "These interventions promote cerebral venous drainage and reduce factors that can further increase ICP.",
  takeaway: "ICP nursing care focuses on drainage, alignment, and reducing stimulation."
},

{
  id: "CVA-NGN-215",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure increases to 210/64 mmHg, heart rate decreases to 40/min, and respirations become irregular. Which interpretation is most appropriate?",
  choices: [
    "The client is demonstrating Cushing triad, a late sign of severe increased ICP.",
    "The client's intracranial pressure is improving.",
    "The findings represent an uncomplicated ischemic stroke.",
    "The client's cerebral perfusion has normalized."
  ],
  answer: "The client is demonstrating Cushing triad, a late sign of severe increased ICP.",
  rationale: "Hypertension with widened pulse pressure, bradycardia, and irregular respirations constitute Cushing triad.",
  takeaway: "Cushing triad = late ICP emergency."
},

{
  id: "CVA-NGN-216",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's right pupil becomes fixed and dilated, and left-sided weakness worsens. Which complication should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Resolved cerebral edema"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation may produce an ipsilateral fixed dilated pupil from cranial nerve III compression and contralateral weakness.",
  takeaway: "Right blown pupil + left weakness = right uncal herniation."
},

{
  id: "CVA-NGN-217",
  caseId: "CVA-NGN-CASE-76",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has an external ventricular drain. The client develops worsening headache, vomiting, and decreasing level of consciousness. Which hypothesis should the nurse prioritize?",
  choices: [
    "CSF drainage may be ineffective and ICP may be increasing.",
    "The hydrocephalus has resolved.",
    "The findings indicate improved intracranial compliance.",
    "The client is experiencing normal fatigue."
  ],
  answer: "CSF drainage may be ineffective and ICP may be increasing.",
  rationale: "Return or worsening of headache, vomiting, and declining LOC in a client with an EVD may indicate inadequate CSF drainage and increasing ICP.",
  takeaway: "EVD + returning ICP symptoms = urgent reassessment."
},

{
  id: "CVA-NGN-218",
  caseId: "CVA-NGN-CASE-76",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client later develops fever, redness around the EVD site, cloudy CSF, and increasing confusion. Which complication should the nurse suspect?",
  choices: [
    "EVD-associated infection",
    "Normal CSF drainage",
    "Improved cerebral perfusion",
    "Resolution of hydrocephalus"
  ],
  answer: "EVD-associated infection",
  rationale: "Fever, insertion-site redness, cloudy CSF, and neurologic deterioration are concerning for infection.",
  takeaway: "EVD infection = fever + site changes + abnormal CSF + neuro decline."
},

{
  id: "CVA-NGN-219",
  caseId: "CVA-NGN-CASE-77",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client is receiving mannitol for increased ICP. Which findings should the nurse monitor closely? Select all that apply.",
  choices: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status",
    "Hair growth"
  ],
  answer: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status"
  ],
  rationale: "Mannitol can cause dehydration, electrolyte shifts, and renal injury. Fluid balance, renal function, serum osmolarity, electrolytes, and neurologic response require monitoring.",
  takeaway: "Mannitol requires kidney, fluid, laboratory, and neurologic monitoring."
},

{
  id: "CVA-NGN-220",
  caseId: "CVA-NGN-CASE-77",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Another client receiving 3% hypertonic saline develops new bilateral crackles, dyspnea, and increasing oxygen requirements. Which action should the nurse prioritize?",
  choices: [
    "Recognize possible fluid overload and pulmonary edema and promptly escalate the change.",
    "Increase the infusion rate.",
    "Ignore the respiratory findings because ICP treatment is the priority.",
    "Encourage additional fluid intake."
  ],
  answer: "Recognize possible fluid overload and pulmonary edema and promptly escalate the change.",
  rationale: "Hypertonic saline can cause intravascular volume expansion, fluid overload, and pulmonary edema. New respiratory deterioration requires prompt intervention.",
  takeaway: "Hypertonic saline + crackles/dyspnea = suspect fluid overload."
},

{
  id: "CVA-NGN-201",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives in the emergency department with sudden left facial droop and left arm weakness. The spouse reports the client was normal at 1845 and symptoms were discovered at 1915. Which time should the nurse use as the client's last-known-well?",
  choices: [
    "1845",
    "1915",
    "The time of emergency department arrival",
    "The time the CT scan is completed"
  ],
  answer: "1845",
  rationale: "Last-known-well is the last time the client was known to be neurologically normal, not the time the symptoms were discovered.",
  takeaway: "Last-known-well = last known normal."
},

{
  id: "CVA-NGN-202",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's airway is patent, respirations are unlabored, oxygen saturation is 96%, and blood glucose is 108 mg/dL. Which action should the nurse anticipate next?",
  choices: [
    "Rapid neurologic assessment and noncontrast head CT",
    "Give the client water to assess swallowing",
    "Delay imaging until weakness improves",
    "Begin discharge teaching"
  ],
  answer: "Rapid neurologic assessment and noncontrast head CT",
  rationale: "After ABCs, last-known-well, glucose, and oxygenation are addressed, rapid neurologic assessment and noncontrast CT are priorities in acute stroke evaluation.",
  takeaway: "Stable ABCs → neuro assessment → noncontrast CT."
},

{
  id: "CVA-NGN-203",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Assessment reveals left face and arm weakness greater than leg weakness, left sensory loss, and left-sided neglect. Which artery is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke commonly causes contralateral face and arm deficits greater than leg deficits. Right-hemisphere involvement can also cause left-sided neglect.",
  takeaway: "Left face/arm weakness + neglect = right MCA."
},

{
  id: "CVA-NGN-204",
  caseId: "CVA-NGN-CASE-71",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client repeatedly attempts to climb out of bed and does not recognize the left arm as weak. Which nursing action is the priority?",
  choices: [
    "Implement fall and injury precautions.",
    "Encourage independent ambulation.",
    "Leave the client alone to improve independence.",
    "Place needed objects only on the neglected side."
  ],
  answer: "Implement fall and injury precautions.",
  rationale: "Right-hemisphere stroke may cause neglect and poor awareness of deficits, greatly increasing the risk for falls and injury.",
  takeaway: "Neglect + poor insight = major safety risk."
},

{
  id: "CVA-NGN-205",
  caseId: "CVA-NGN-CASE-72",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with disabling ischemic stroke symptoms arrived 2 hours after last-known-well. Noncontrast CT shows no hemorrhage. Blood pressure is 178/102 mmHg, there is no active bleeding, and coagulation studies are acceptable. Which interpretation is most appropriate based on the course criteria?",
  choices: [
    "The available findings support continued evaluation for thrombolytic therapy.",
    "The blood pressure automatically excludes thrombolytic therapy.",
    "The CT finding excludes ischemic stroke.",
    "Thrombolytic therapy is contraindicated because symptoms began less than 4.5 hours ago."
  ],
  answer: "The available findings support continued evaluation for thrombolytic therapy.",
  rationale: "The course criteria include last-known-well within 4.5 hours, no hemorrhage on CT, blood pressure below 185/110 mmHg, no active bleeding, and acceptable coagulation studies.",
  takeaway: "Know the major thrombolytic safety checkpoints."
},

{
  id: "CVA-NGN-206",
  caseId: "CVA-NGN-CASE-72",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "During thrombolytic therapy, the client suddenly reports a severe headache and begins vomiting. Blood pressure rises sharply and neurologic deficits worsen. Which action should the nurse take?",
  choices: [
    "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
    "Continue the infusion because these are expected findings.",
    "Wait until the medication is completed before reassessing.",
    "Give oral fluids and reassess in 30 minutes."
  ],
  answer: "Stop the infusion and immediately escalate for possible intracranial hemorrhage.",
  rationale: "Severe new headache, sudden blood pressure elevation, nausea or vomiting, neurologic deterioration, and bleeding are warning signs of possible intracranial hemorrhage during thrombolytic therapy.",
  takeaway: "Thrombolytic + sudden deterioration = stop and suspect hemorrhage."
},

{
  id: "CVA-NGN-207",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops vertigo, nystagmus, diplopia, dysarthria, and severe gait instability. Hand grasps are equal and strong. Which interpretation is most appropriate?",
  choices: [
    "A vertebrobasilar stroke remains a major concern.",
    "Stroke is excluded because extremity strength is normal.",
    "The findings indicate an isolated frontal-lobe disorder.",
    "The client is demonstrating a typical TIA recovery pattern."
  ],
  answer: "A vertebrobasilar stroke remains a major concern.",
  rationale: "Posterior circulation stroke can cause brainstem and cerebellar findings such as vertigo, nystagmus, diplopia, dysarthria, and ataxia without prominent unilateral weakness.",
  takeaway: "Normal strength does not rule out posterior stroke."
},

{
  id: "CVA-NGN-208",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client begins coughing on secretions and is unable to swallow. Which nursing action has the highest priority?",
  choices: [
    "Protect the airway and maintain NPO status.",
    "Give small sips of water.",
    "Administer oral medications with applesauce.",
    "Begin ambulation to improve coordination."
  ],
  answer: "Protect the airway and maintain NPO status.",
  rationale: "Dysphagia and inability to manage secretions indicate impaired airway protection and aspiration risk.",
  takeaway: "Posterior stroke + dysphagia = airway priority."
},

{
  id: "CVA-NGN-209",
  caseId: "CVA-NGN-CASE-73",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Thirty minutes later, the client becomes difficult to arouse and develops irregular respirations. Which nursing judgment is most appropriate?",
  choices: [
    "Brainstem function may be deteriorating and immediate escalation is required.",
    "The client should be allowed to sleep.",
    "The respiratory pattern is expected with cerebellar injury.",
    "The stroke is resolving because weakness is absent."
  ],
  answer: "Brainstem function may be deteriorating and immediate escalation is required.",
  rationale: "The vertebrobasilar circulation supplies the brainstem. Declining LOC and irregular respirations can indicate compromise of vital neurologic centers.",
  takeaway: "Posterior stroke + LOC/breathing changes = emergency."
},

{
  id: "CVA-NGN-210",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports the sudden onset of the worst headache ever experienced. Assessment reveals vomiting, neck stiffness, and photophobia. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Stable hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "A sudden severe headache with neck stiffness and photophobia is characteristic of subarachnoid hemorrhage.",
  takeaway: "Worst headache + meningeal signs = suspect SAH."
},

{
  id: "CVA-NGN-211",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which medication should the nurse expect to administer on schedule after the diagnosis is confirmed?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Routine thrombolytic therapy"
  ],
  answer: "Nimodipine",
  rationale: "The course emphasizes scheduled nimodipine after SAH because cerebral vasospasm is an important delayed complication.",
  takeaway: "SAH → scheduled nimodipine."
},

{
  id: "CVA-NGN-212",
  caseId: "CVA-NGN-CASE-74",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "On day 5 after the hemorrhage, the client develops new confusion and right arm weakness. Which complication should the nurse suspect?",
  choices: [
    "Cerebral vasospasm",
    "Normal recovery",
    "Resolution of the hemorrhage",
    "Expected effect of nimodipine"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies days 3 through 14 after SAH as an important period for cerebral vasospasm. New neurologic deficits require urgent evaluation.",
  takeaway: "SAH days 3–14 + new deficit = suspect vasospasm."
},

{
  id: "CVA-NGN-213",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke becomes restless and irritable, then develops worsening headache, confusion, and increasing drowsiness. Which complication should the nurse suspect?",
  choices: [
    "Increasing intracranial pressure",
    "Resolution of cerebral edema",
    "Improved cerebral perfusion",
    "Normal emotional response to hospitalization"
  ],
  answer: "Increasing intracranial pressure",
  rationale: "Restlessness, irritability, headache, confusion, and declining LOC are early findings associated with increasing ICP.",
  takeaway: "Early ICP changes often begin with LOC and behavior."
},

{
  id: "CVA-NGN-214",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions should the nurse implement for this client with increasing ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Place the client flat with the head turned sharply to the side."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head neutral and midline.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation."
  ],
  rationale: "These interventions promote cerebral venous drainage and reduce factors that can further increase ICP.",
  takeaway: "ICP nursing care focuses on drainage, alignment, and reducing stimulation."
},

{
  id: "CVA-NGN-215",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure increases to 210/64 mmHg, heart rate decreases to 40/min, and respirations become irregular. Which interpretation is most appropriate?",
  choices: [
    "The client is demonstrating Cushing triad, a late sign of severe increased ICP.",
    "The client's intracranial pressure is improving.",
    "The findings represent an uncomplicated ischemic stroke.",
    "The client's cerebral perfusion has normalized."
  ],
  answer: "The client is demonstrating Cushing triad, a late sign of severe increased ICP.",
  rationale: "Hypertension with widened pulse pressure, bradycardia, and irregular respirations constitute Cushing triad.",
  takeaway: "Cushing triad = late ICP emergency."
},

{
  id: "CVA-NGN-216",
  caseId: "CVA-NGN-CASE-75",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's right pupil becomes fixed and dilated, and left-sided weakness worsens. Which complication should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Resolved cerebral edema"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation may produce an ipsilateral fixed dilated pupil from cranial nerve III compression and contralateral weakness.",
  takeaway: "Right blown pupil + left weakness = right uncal herniation."
},

{
  id: "CVA-NGN-217",
  caseId: "CVA-NGN-CASE-76",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has an external ventricular drain. The client develops worsening headache, vomiting, and decreasing level of consciousness. Which hypothesis should the nurse prioritize?",
  choices: [
    "CSF drainage may be ineffective and ICP may be increasing.",
    "The hydrocephalus has resolved.",
    "The findings indicate improved intracranial compliance.",
    "The client is experiencing normal fatigue."
  ],
  answer: "CSF drainage may be ineffective and ICP may be increasing.",
  rationale: "Return or worsening of headache, vomiting, and declining LOC in a client with an EVD may indicate inadequate CSF drainage and increasing ICP.",
  takeaway: "EVD + returning ICP symptoms = urgent reassessment."
},

{
  id: "CVA-NGN-218",
  caseId: "CVA-NGN-CASE-76",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "The client later develops fever, redness around the EVD site, cloudy CSF, and increasing confusion. Which complication should the nurse suspect?",
  choices: [
    "EVD-associated infection",
    "Normal CSF drainage",
    "Improved cerebral perfusion",
    "Resolution of hydrocephalus"
  ],
  answer: "EVD-associated infection",
  rationale: "Fever, insertion-site redness, cloudy CSF, and neurologic deterioration are concerning for infection.",
  takeaway: "EVD infection = fever + site changes + abnormal CSF + neuro decline."
},

{
  id: "CVA-NGN-219",
  caseId: "CVA-NGN-CASE-77",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client is receiving mannitol for increased ICP. Which findings should the nurse monitor closely? Select all that apply.",
  choices: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status",
    "Hair growth"
  ],
  answer: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status"
  ],
  rationale: "Mannitol can cause dehydration, electrolyte shifts, and renal injury. Fluid balance, renal function, serum osmolarity, electrolytes, and neurologic response require monitoring.",
  takeaway: "Mannitol requires kidney, fluid, laboratory, and neurologic monitoring."
},

{
  id: "CVA-NGN-220",
  caseId: "CVA-NGN-CASE-77",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Another client receiving 3% hypertonic saline develops new bilateral crackles, dyspnea, and increasing oxygen requirements. Which action should the nurse prioritize?",
  choices: [
    "Recognize possible fluid overload and pulmonary edema and promptly escalate the change.",
    "Increase the infusion rate.",
    "Ignore the respiratory findings because ICP treatment is the priority.",
    "Encourage additional fluid intake."
  ],
  answer: "Recognize possible fluid overload and pulmonary edema and promptly escalate the change.",
  rationale: "Hypertonic saline can cause intravascular volume expansion, fluid overload, and pulmonary edema. New respiratory deterioration requires prompt intervention.",
  takeaway: "Hypertonic saline + crackles/dyspnea = suspect fluid overload."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-221 through CVA-NGN-240

{
  id: "CVA-NGN-221",
  caseId: "CVA-NGN-CASE-78",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives four clients in the emergency department. Which client should be assessed FIRST?",
  choices: [
    "A client with sudden facial droop and weakness who has an oxygen saturation of 82%",
    "A client with stable expressive aphasia after a left MCA stroke",
    "A client with a resolved TIA awaiting diagnostic testing",
    "A client with stable visual field loss after a PCA stroke"
  ],
  answer: "A client with sudden facial droop and weakness who has an oxygen saturation of 82%",
  rationale: "Airway and breathing take priority during acute stroke assessment. Severe hypoxemia can worsen cerebral injury and requires immediate intervention.",
  takeaway: "Even during a stroke, ABCs come first."
},

{
  id: "CVA-NGN-222",
  caseId: "CVA-NGN-CASE-78",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After the client's oxygenation is stabilized, which information should the nurse obtain immediately?",
  choices: [
    "The exact last-known-well time",
    "The client's usual breakfast",
    "The date of the client's last dental visit",
    "The client's preferred sleeping position"
  ],
  answer: "The exact last-known-well time",
  rationale: "Last-known-well is essential for determining the timing of stroke onset and eligibility for time-sensitive treatment.",
  takeaway: "After ABCs, establish last-known-well quickly."
},

{
  id: "CVA-NGN-223",
  caseId: "CVA-NGN-CASE-78",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Mimics",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "The client's bedside glucose is 38 mg/dL. Which action should the nurse prioritize?",
  choices: [
    "Treat the hypoglycemia and reassess the neurologic deficits.",
    "Administer thrombolytic therapy immediately.",
    "Assume the client has a completed ischemic stroke.",
    "Give the client solid food before evaluating swallowing."
  ],
  answer: "Treat the hypoglycemia and reassess the neurologic deficits.",
  rationale: "Hypoglycemia can cause stroke-like neurologic findings and should be corrected promptly. The neurologic examination should then be reassessed.",
  takeaway: "Low glucose can mimic stroke."
},

{
  id: "CVA-NGN-224",
  caseId: "CVA-NGN-CASE-78",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After glucose is corrected, the client's facial droop and unilateral weakness remain. Which action should the nurse anticipate?",
  choices: [
    "Continue acute stroke evaluation and obtain a noncontrast head CT.",
    "Cancel the stroke evaluation.",
    "Allow the client to eat and reassess later.",
    "Discharge the client because glucose is now normal."
  ],
  answer: "Continue acute stroke evaluation and obtain a noncontrast head CT.",
  rationale: "Persistent focal neurologic deficits after correction of hypoglycemia require continued stroke evaluation. Noncontrast CT is used to assess for intracranial hemorrhage.",
  takeaway: "Correct the mimic, then reassess persistent deficits."
},

{
  id: "CVA-NGN-225",
  caseId: "CVA-NGN-CASE-79",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are included in the neurologic domains evaluated by the NIH Stroke Scale? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language and dysarthria",
    "Neglect",
    "Serum potassium"
  ],
  answer: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language and dysarthria",
    "Neglect"
  ],
  rationale: "The NIHSS assesses multiple neurologic domains including LOC, gaze, visual fields, facial palsy, motor function, ataxia, sensory function, language, dysarthria, and neglect.",
  takeaway: "NIHSS measures the severity of multiple neurologic deficits."
},

{
  id: "CVA-NGN-226",
  caseId: "CVA-NGN-CASE-79",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client's NIHSS score was 7 on admission and is now 14. Which nursing interpretation is most appropriate?",
  choices: [
    "The neurologic condition has worsened and requires prompt reassessment and escalation.",
    "The client's neurologic condition has improved.",
    "The change is insignificant because the NIHSS is used only once.",
    "The score should be ignored if the client is awake."
  ],
  answer: "The neurologic condition has worsened and requires prompt reassessment and escalation.",
  rationale: "The NIHSS should be trended. A significant increase indicates worsening neurologic deficits and requires prompt evaluation.",
  takeaway: "An increasing NIHSS score signals neurologic deterioration."
},

{
  id: "CVA-NGN-227",
  caseId: "CVA-NGN-CASE-80",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops right facial weakness, right arm weakness greater than leg weakness, and fluent speech that does not make sense. The client cannot follow simple verbal commands. Which combination best describes the findings?",
  choices: [
    "Left MCA stroke with Wernicke aphasia",
    "Right MCA stroke with Broca aphasia",
    "Left ACA stroke with neglect",
    "Right PCA stroke with expressive aphasia"
  ],
  answer: "Left MCA stroke with Wernicke aphasia",
  rationale: "A left MCA stroke can cause right-sided face and arm deficits and dominant-hemisphere language impairment. Fluent meaningless speech with poor comprehension is characteristic of Wernicke aphasia.",
  takeaway: "Right-sided MCA deficits + fluent nonsense = left MCA/Wernicke."
},

{
  id: "CVA-NGN-228",
  caseId: "CVA-NGN-CASE-80",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing communication strategy is most appropriate for this client?",
  choices: [
    "Use short, simple statements with gestures or visual cues.",
    "Provide long and detailed verbal explanations.",
    "Assume the client understands because speech is fluent.",
    "Speak louder until the client follows commands."
  ],
  answer: "Use short, simple statements with gestures or visual cues.",
  rationale: "Wernicke aphasia impairs language comprehension. Simple statements supported with visual or gestural cues may improve understanding.",
  takeaway: "Fluent speech does not mean comprehension is intact."
},

{
  id: "CVA-NGN-229",
  caseId: "CVA-NGN-CASE-81",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Anterior Cerebral Artery",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops right leg weakness greater than arm weakness, urinary incontinence, and new disinhibited behavior. Which artery is most likely affected?",
  choices: [
    "Left anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Basilar artery"
  ],
  answer: "Left anterior cerebral artery",
  rationale: "ACA strokes commonly cause contralateral leg-predominant weakness and may cause personality or behavioral changes and urinary incontinence.",
  takeaway: "Right leg > arm weakness + behavior change = left ACA."
},

{
  id: "CVA-NGN-230",
  caseId: "CVA-NGN-CASE-81",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Anterior Cerebral Artery",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which additional findings may occur with an anterior cerebral artery stroke? Select all that apply.",
  choices: [
    "Apathy",
    "Personality changes",
    "Memory impairment",
    "Possible urinary incontinence",
    "Contralateral leg weakness greater than arm weakness",
    "Isolated visual field loss as the primary finding"
  ],
  answer: [
    "Apathy",
    "Personality changes",
    "Memory impairment",
    "Possible urinary incontinence",
    "Contralateral leg weakness greater than arm weakness"
  ],
  rationale: "The ACA supplies medial frontal and parietal regions and can produce leg-predominant motor deficits along with frontal behavioral, memory, and bladder changes.",
  takeaway: "ACA = leg + frontal-lobe pattern."
},

{
  id: "CVA-NGN-231",
  caseId: "CVA-NGN-CASE-82",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has normal strength but suddenly develops a visual field deficit, memory difficulty, and inability to recognize familiar objects. Which artery is most likely affected?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior spinal artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "PCA strokes affect occipital and inferior temporal regions and may cause visual field loss, visual recognition problems, and memory impairment.",
  takeaway: "PCA strokes may present with vision and memory problems instead of weakness."
},

{
  id: "CVA-NGN-232",
  caseId: "CVA-NGN-CASE-82",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client can write a sentence but cannot read the sentence afterward. Which deficit should the nurse recognize?",
  choices: [
    "Alexia without agraphia",
    "Broca aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Alexia without agraphia",
  rationale: "The course associates PCA stroke with alexia without agraphia, in which reading is impaired while writing ability remains preserved.",
  takeaway: "Can write but cannot read = alexia without agraphia."
},

{
  id: "CVA-NGN-233",
  caseId: "CVA-NGN-CASE-83",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracerebral Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe chronic hypertension develops sudden headache, vomiting, unilateral weakness, and decreasing consciousness. CT shows hyperdense blood within the brain tissue. Which diagnosis best matches these findings?",
  choices: [
    "Intracerebral hemorrhage",
    "Transient ischemic attack",
    "Thrombotic ischemic stroke",
    "Chronic hydrocephalus"
  ],
  answer: "Intracerebral hemorrhage",
  rationale: "ICH involves bleeding directly into brain tissue. Severe hypertension is an important cause, and manifestations can include headache, vomiting, focal deficits, and declining LOC.",
  takeaway: "Hypertension + intraparenchymal blood + neuro decline = ICH."
},

{
  id: "CVA-NGN-234",
  caseId: "CVA-NGN-CASE-83",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracerebral Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which prescription should the nurse question for this client?",
  choices: [
    "Administer thrombolytic therapy.",
    "Perform frequent neurologic assessments.",
    "Monitor for increased ICP.",
    "Closely monitor blood pressure."
  ],
  answer: "Administer thrombolytic therapy.",
  rationale: "Thrombolytics are contraindicated in hemorrhagic stroke because they can worsen intracranial bleeding.",
  takeaway: "ICH = no thrombolytics."
},

{
  id: "CVA-NGN-235",
  caseId: "CVA-NGN-CASE-83",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracerebral Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes increasingly difficult to arouse and begins vomiting repeatedly. Which complication should the nurse prioritize?",
  choices: [
    "Increasing ICP from edema and mass effect",
    "Normal recovery from ICH",
    "Improved cerebral perfusion",
    "Resolution of the hemorrhage"
  ],
  answer: "Increasing ICP from edema and mass effect",
  rationale: "Intracerebral hemorrhage can produce cerebral edema and mass effect. Declining consciousness and repeated vomiting are concerning for increasing ICP.",
  takeaway: "ICH can worsen through edema, mass effect, and rising ICP."
},

{
  id: "CVA-NGN-236",
  caseId: "CVA-NGN-CASE-84",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol for cerebral edema develops decreasing urine output and worsening renal function. Which action is most appropriate?",
  choices: [
    "Hold further administration and notify the provider according to the treatment plan.",
    "Increase the mannitol dose.",
    "Ignore the renal findings.",
    "Administer additional mannitol until urine output increases."
  ],
  answer: "Hold further administration and notify the provider according to the treatment plan.",
  rationale: "Mannitol requires adequate renal function. Worsening renal function or excessive serum osmolarity may require the medication to be held.",
  takeaway: "Mannitol safety depends on kidney function and osmolarity."
},

{
  id: "CVA-NGN-237",
  caseId: "CVA-NGN-CASE-84",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops crackles, dyspnea, and increasing oxygen requirements. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expected neurologic improvement",
    "Expressive aphasia",
    "Decreased intravascular volume"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can expand intravascular volume and cause fluid overload and pulmonary edema.",
  takeaway: "3% saline + crackles/dyspnea = think fluid overload."
},

{
  id: "CVA-NGN-238",
  caseId: "CVA-NGN-CASE-85",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops rapid loss of consciousness and bilateral abnormal posturing. Which herniation pattern should the nurse suspect?",
  choices: [
    "Central or transtentorial herniation",
    "Subfalcine herniation",
    "Stable uncal compression",
    "Resolved tonsillar herniation"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "Central or transtentorial herniation is associated with rapid deterioration in consciousness and bilateral abnormal posturing.",
  takeaway: "Rapid LOC decline + bilateral posturing = central herniation."
},

{
  id: "CVA-NGN-239",
  caseId: "CVA-NGN-CASE-85",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client develops a midline shift with new weakness that is most pronounced in the leg opposite the lesion. Which herniation pattern is most consistent with these findings?",
  choices: [
    "Subfalcine herniation",
    "Uncal herniation",
    "Tonsillar herniation",
    "Central herniation"
  ],
  answer: "Subfalcine herniation",
  rationale: "The course associates subfalcine herniation with midline shift and contralateral leg weakness.",
  takeaway: "Subfalcine = midline shift + opposite leg weakness."
},

{
  id: "CVA-NGN-240",
  caseId: "CVA-NGN-CASE-85",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops progressively irregular respirations followed by apnea. Which complication should the nurse suspect?",
  choices: [
    "Tonsillar herniation with brainstem compression",
    "Stable subfalcine herniation",
    "Resolved cerebral edema",
    "Improving intracranial compliance"
  ],
  answer: "Tonsillar herniation with brainstem compression",
  rationale: "Tonsillar herniation involves downward displacement through the foramen magnum and can compress vital respiratory centers, causing irregular respirations and apnea.",
  takeaway: "Tonsillar herniation can rapidly stop breathing."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-241 through CVA-NGN-260

{
  id: "CVA-NGN-241",
  caseId: "CVA-NGN-CASE-86",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left-sided weakness, left facial droop, and difficulty recognizing the left side of the environment. Which cerebral hemisphere is most likely affected?",
  choices: [
    "Right hemisphere",
    "Left hemisphere",
    "Both hemispheres equally",
    "Cerebellum only"
  ],
  answer: "Right hemisphere",
  rationale: "The right cerebral hemisphere controls the left side of the body and contributes to spatial awareness. Right-hemisphere injury can therefore produce left-sided weakness and neglect.",
  takeaway: "Left weakness + left neglect = think right hemisphere."
},

{
  id: "CVA-NGN-242",
  caseId: "CVA-NGN-CASE-86",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Safety",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safety and Infection Control",
  question: "The client eats only the food on the right half of the meal tray. Which nursing interpretation is most appropriate?",
  choices: [
    "The client is demonstrating left-sided neglect.",
    "The client has Broca aphasia.",
    "The client has Wernicke aphasia.",
    "The client has isolated dysarthria."
  ],
  answer: "The client is demonstrating left-sided neglect.",
  rationale: "Right-hemisphere injury can impair awareness of the left side of the body and environment. Ignoring food on the left side of the tray is a classic example of left-sided neglect.",
  takeaway: "Neglect affects awareness of one side of the environment."
},

{
  id: "CVA-NGN-243",
  caseId: "CVA-NGN-CASE-86",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which finding creates the greatest immediate safety concern for this client?",
  choices: [
    "The client attempts to walk without recognizing left-sided weakness.",
    "The client leaves food on the left side of the tray.",
    "The client prefers the television on the right side.",
    "The client requires extra time to complete grooming."
  ],
  answer: "The client attempts to walk without recognizing left-sided weakness.",
  rationale: "Neglect and impaired awareness of deficits can cause the client to attempt unsafe activities despite significant weakness, creating a major fall and injury risk.",
  takeaway: "Neglect plus poor awareness makes falls a major concern."
},

{
  id: "CVA-NGN-244",
  caseId: "CVA-NGN-CASE-87",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client arrives 90 minutes after the onset of disabling stroke symptoms. CT shows no hemorrhage. The nurse learns the client had major surgery 6 days ago. Which finding is most important to report before thrombolytic therapy is initiated?",
  choices: [
    "Major surgery 6 days ago",
    "Stroke symptoms began 90 minutes ago",
    "CT shows no hemorrhage",
    "The neurologic deficit is disabling"
  ],
  answer: "Major surgery 6 days ago",
  rationale: "The course identifies recent surgery within 14 days as an important thrombolytic safety consideration because of the risk for serious bleeding.",
  takeaway: "Recent surgery is a major thrombolytic safety concern."
},

{
  id: "CVA-NGN-245",
  caseId: "CVA-NGN-CASE-87",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings should the nurse identify as important safety concerns before thrombolytic therapy? Select all that apply.",
  choices: [
    "Active bleeding",
    "Recent major surgery",
    "Abnormal coagulation studies",
    "Intracranial hemorrhage on CT",
    "Blood pressure above the required treatment threshold",
    "A normal blood glucose level"
  ],
  answer: [
    "Active bleeding",
    "Recent major surgery",
    "Abnormal coagulation studies",
    "Intracranial hemorrhage on CT",
    "Blood pressure above the required treatment threshold"
  ],
  rationale: "Thrombolytic safety requires exclusion of intracranial hemorrhage and assessment of bleeding risk, recent surgery, coagulation status, and blood pressure.",
  takeaway: "Before thrombolysis, think bleeding risk, CT, coagulation, surgery, and BP."
},

{
  id: "CVA-NGN-246",
  caseId: "CVA-NGN-CASE-87",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client being evaluated for thrombolytic therapy has a blood pressure of 194/116 mmHg. Which interpretation is most appropriate based on the course criteria?",
  choices: [
    "The blood pressure must be addressed because it exceeds the required threshold before thrombolytic therapy.",
    "The blood pressure is acceptable for immediate thrombolytic administration.",
    "Blood pressure does not affect thrombolytic safety.",
    "The elevated blood pressure confirms hemorrhagic stroke."
  ],
  answer: "The blood pressure must be addressed because it exceeds the required threshold before thrombolytic therapy.",
  rationale: "The course identifies a blood pressure below 185/110 mmHg as a requirement before thrombolytic therapy.",
  takeaway: "Know the pre-thrombolytic BP threshold: below 185/110 mmHg."
},

{
  id: "CVA-NGN-247",
  caseId: "CVA-NGN-CASE-88",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Thirty minutes after thrombolytic therapy begins, the client develops a sudden severe headache, nausea, and new confusion. Which complication should the nurse suspect first?",
  choices: [
    "Intracranial hemorrhage",
    "Expected medication effect",
    "Improved cerebral perfusion",
    "Transient fatigue"
  ],
  answer: "Intracranial hemorrhage",
  rationale: "Sudden severe headache, nausea or vomiting, and neurologic deterioration during thrombolytic therapy are warning signs of possible intracranial bleeding.",
  takeaway: "New neuro symptoms during thrombolysis = suspect hemorrhage."
},

{
  id: "CVA-NGN-248",
  caseId: "CVA-NGN-CASE-88",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which action should the nurse take first after recognizing these findings?",
  choices: [
    "Stop the thrombolytic infusion and immediately notify the appropriate provider or stroke team.",
    "Increase the infusion rate.",
    "Wait for the scheduled neurologic assessment.",
    "Give oral fluids for the nausea."
  ],
  answer: "Stop the thrombolytic infusion and immediately notify the appropriate provider or stroke team.",
  rationale: "The course directs the nurse to stop thrombolytic therapy and immediately escalate when findings suggest intracranial hemorrhage.",
  takeaway: "Suspected bleeding during thrombolysis = stop and escalate."
},

{
  id: "CVA-NGN-249",
  caseId: "CVA-NGN-CASE-89",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with acute hydrocephalus develops worsening headache, vomiting, blurred vision, and increasing drowsiness. Which finding is most important when determining whether the condition is worsening?",
  choices: [
    "Increasing drowsiness",
    "Blurred vision",
    "Headache",
    "Vomiting"
  ],
  answer: "Increasing drowsiness",
  rationale: "Declining level of consciousness is emphasized as the earliest and most important sign of worsening neurologic status with rapidly increasing ICP.",
  takeaway: "With hydrocephalus, trend LOC closely."
},

{
  id: "CVA-NGN-250",
  caseId: "CVA-NGN-CASE-89",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "The provider plans an intervention to rapidly remove excess CSF. Which intervention should the nurse anticipate?",
  choices: [
    "External ventricular drain",
    "Thrombolytic infusion",
    "Carotid endarterectomy",
    "Anticoagulant infusion"
  ],
  answer: "External ventricular drain",
  rationale: "A ventriculostomy or EVD provides acute CSF drainage and can be used in rapidly progressing hydrocephalus.",
  takeaway: "EVD provides acute CSF drainage."
},

{
  id: "CVA-NGN-251",
  caseId: "CVA-NGN-CASE-89",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A different client requires long-term CSF diversion for hydrocephalus. Which intervention should the nurse expect?",
  choices: [
    "Ventriculoperitoneal shunt",
    "Continuous thrombolytic therapy",
    "Long-term mannitol infusion",
    "Carotid stent"
  ],
  answer: "Ventriculoperitoneal shunt",
  rationale: "A VP shunt is used for long-term diversion of CSF in clients who require ongoing management of hydrocephalus.",
  takeaway: "EVD is acute drainage; VP shunt provides long-term diversion."
},

{
  id: "CVA-NGN-252",
  caseId: "CVA-NGN-CASE-90",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Safety",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which findings in a client with an EVD should the nurse immediately report as possible evidence of infection? Select all that apply.",
  choices: [
    "Fever",
    "Redness at the insertion site",
    "Cloudy CSF",
    "Altered level of consciousness",
    "Neurologic deterioration",
    "Stable neurologic assessment"
  ],
  answer: [
    "Fever",
    "Redness at the insertion site",
    "Cloudy CSF",
    "Altered level of consciousness",
    "Neurologic deterioration"
  ],
  rationale: "Fever, insertion-site redness, cloudy CSF, altered LOC, and neurologic decline can indicate infection involving an EVD or CSF shunt.",
  takeaway: "EVD infection can present with local, systemic, and neurologic findings."
},

{
  id: "CVA-NGN-253",
  caseId: "CVA-NGN-CASE-90",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Safety",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safety and Infection Control",
  question: "Which principle is most important whenever the nurse handles an EVD or CSF shunt system?",
  choices: [
    "Use strict sterile technique.",
    "Disconnect the system routinely.",
    "Open the system frequently to inspect the tubing.",
    "Handle the system without infection precautions."
  ],
  answer: "Use strict sterile technique.",
  rationale: "The course emphasizes strict sterile technique for all EVD and shunt handling because infection can cause serious neurologic complications.",
  takeaway: "Protect every CSF device from infection."
},

{
  id: "CVA-NGN-254",
  caseId: "CVA-NGN-CASE-91",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Monro-Kellie Doctrine",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A large cerebral hemorrhage increases intracranial blood volume. According to the Monro-Kellie doctrine, what must occur initially to prevent a major rise in ICP?",
  choices: [
    "Another intracranial component must decrease in volume.",
    "The adult skull must expand.",
    "Brain tissue must increase in volume.",
    "CSF production must increase."
  ],
  answer: "Another intracranial component must decrease in volume.",
  rationale: "The skull is a fixed container containing brain tissue, blood, and CSF. When one component increases, compensation requires another component to decrease or ICP rises.",
  takeaway: "Inside the fixed skull, one volume rises only if another can compensate."
},

{
  id: "CVA-NGN-255",
  caseId: "CVA-NGN-CASE-91",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Monro-Kellie Doctrine",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Compensatory mechanisms can no longer offset the increasing intracranial volume. Which consequence should the nurse expect?",
  choices: [
    "Intracranial pressure will rise.",
    "The skull will expand.",
    "Cerebral edema will automatically resolve.",
    "The client will no longer be at risk for herniation."
  ],
  answer: "Intracranial pressure will rise.",
  rationale: "Once compensatory mechanisms are exhausted, additional intracranial volume causes ICP to increase and raises the risk for cerebral injury and herniation.",
  takeaway: "Failed compensation leads to rising ICP."
},

{
  id: "CVA-NGN-256",
  caseId: "CVA-NGN-CASE-92",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has an ICP reading of 13 mmHg and is neurologically unchanged. Which interpretation is most appropriate?",
  choices: [
    "The ICP is within the expected normal range.",
    "The ICP indicates severe intracranial hypertension.",
    "The client is experiencing Cushing triad.",
    "The value confirms brain herniation."
  ],
  answer: "The ICP is within the expected normal range.",
  rationale: "The course identifies normal ICP as approximately 10 to 15 mmHg.",
  takeaway: "Normal ICP is approximately 10–15 mmHg."
},

{
  id: "CVA-NGN-257",
  caseId: "CVA-NGN-CASE-92",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several hours later, the client's ICP remains at 23 mmHg. Which interpretation should guide nursing care?",
  choices: [
    "Sustained ICP above 20 mmHg is harmful and requires prompt attention.",
    "The value remains within the expected normal range.",
    "The ICP is too low.",
    "No intervention is necessary unless the ICP reaches 50 mmHg."
  ],
  answer: "Sustained ICP above 20 mmHg is harmful and requires prompt attention.",
  rationale: "The course identifies sustained ICP greater than 20 mmHg as harmful.",
  takeaway: "Sustained ICP >20 mmHg is concerning."
},

{
  id: "CVA-NGN-258",
  caseId: "CVA-NGN-CASE-93",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing actions help prevent secondary brain injury in a client with increased ICP? Select all that apply.",
  choices: [
    "Prevent hypoxia.",
    "Prevent hypotension.",
    "Treat or prevent fever.",
    "Monitor and manage hyperglycemia.",
    "Monitor oxygen saturation.",
    "Allow prolonged hypoxemia during procedures."
  ],
  answer: [
    "Prevent hypoxia.",
    "Prevent hypotension.",
    "Treat or prevent fever.",
    "Monitor and manage hyperglycemia.",
    "Monitor oxygen saturation."
  ],
  rationale: "The course emphasizes avoiding hypoxia, hypotension, fever, and hyperglycemia because these conditions can worsen secondary neurologic injury.",
  takeaway: "Protect the injured brain from additional physiologic stress."
},

{
  id: "CVA-NGN-259",
  caseId: "CVA-NGN-CASE-94",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four neurologic clients. Which client should be assessed FIRST?",
  choices: [
    "A client with a large stroke who develops a new fixed pupil and abnormal posturing",
    "A client with stable Broca aphasia who is frustrated",
    "A client with stable ACA stroke and leg weakness",
    "A client with a resolved TIA awaiting discharge teaching"
  ],
  answer: "A client with a large stroke who develops a new fixed pupil and abnormal posturing",
  rationale: "A fixed pupil and abnormal posturing are late signs of severe neurologic deterioration and may indicate impending or active brain herniation.",
  takeaway: "New herniation signs always demand immediate attention."
},

{
  id: "CVA-NGN-260",
  caseId: "CVA-NGN-CASE-94",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with vertebrobasilar stroke symptoms who is newly unable to manage secretions",
    "A client with a right MCA stroke and unchanged left-sided neglect",
    "A client with a PCA stroke and unchanged visual field loss",
    "A client with a previous TIA who needs education about hypertension"
  ],
  answer: "A client with vertebrobasilar stroke symptoms who is newly unable to manage secretions",
  rationale: "New inability to manage secretions indicates impaired airway protection. Airway compromise takes priority over stable neurologic deficits.",
  takeaway: "When stroke affects swallowing and secretions, think airway first."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-261 through CVA-NGN-280

{
  id: "CVA-NGN-261",
  caseId: "CVA-NGN-CASE-95",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden right-sided weakness and difficulty speaking. Which sequence of actions best reflects the priority stroke assessment?",
  choices: [
    "Assess ABCs → determine last-known-well → check glucose and oxygenation → perform rapid neurologic assessment → obtain noncontrast head CT",
    "Obtain CT → give oral fluids → determine last-known-well → assess ABCs",
    "Perform a swallowing evaluation → obtain CT → assess breathing → check glucose",
    "Determine rehabilitation needs → obtain laboratory studies → assess ABCs"
  ],
  answer: "Assess ABCs → determine last-known-well → check glucose and oxygenation → perform rapid neurologic assessment → obtain noncontrast head CT",
  rationale: "The course prioritizes ABC stabilization, exact last-known-well, exclusion of hypoglycemia and hypoxia, rapid neurologic assessment including NIHSS, and noncontrast head CT.",
  takeaway: "Know the acute stroke sequence from stabilization through imaging."
},

{
  id: "CVA-NGN-262",
  caseId: "CVA-NGN-CASE-95",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's NIHSS score increases significantly during reassessment. Which nursing action is most appropriate?",
  choices: [
    "Recognize neurologic deterioration and immediately escalate the change.",
    "Document the score and wait until the next shift.",
    "Assume the increase is caused by fatigue.",
    "Stop performing neurologic assessments."
  ],
  answer: "Recognize neurologic deterioration and immediately escalate the change.",
  rationale: "NIHSS scores should be trended. A worsening score indicates increasing neurologic deficits and requires prompt evaluation.",
  takeaway: "Trend NIHSS; worsening scores matter."
},

{
  id: "CVA-NGN-263",
  caseId: "CVA-NGN-CASE-95",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which neurologic functions should the nurse expect to assess as part of the NIHSS? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language",
    "Neglect",
    "Bowel sounds"
  ],
  answer: [
    "Level of consciousness",
    "Visual fields",
    "Facial movement",
    "Arm and leg motor function",
    "Language",
    "Neglect"
  ],
  rationale: "The NIHSS assesses LOC, gaze, visual fields, facial palsy, motor function, ataxia, sensation, language, dysarthria, and neglect.",
  takeaway: "NIHSS provides a structured assessment of stroke-related neurologic deficits."
},

{
  id: "CVA-NGN-264",
  caseId: "CVA-NGN-CASE-96",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has right-sided weakness, right sensory loss, and difficulty producing speech but follows commands appropriately. Which hemisphere and language area are most likely affected?",
  choices: [
    "Left hemisphere and Broca area",
    "Right hemisphere and Broca area",
    "Left hemisphere and cerebellum",
    "Right hemisphere and Wernicke area"
  ],
  answer: "Left hemisphere and Broca area",
  rationale: "The left hemisphere controls the right side of the body and is dominant for language in most people. Broca area injury causes impaired speech production with relatively preserved comprehension.",
  takeaway: "Right deficits + expressive aphasia = left hemisphere/Broca."
},

{
  id: "CVA-NGN-265",
  caseId: "CVA-NGN-CASE-96",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client has left-sided weakness, impaired spatial awareness, and ignores the left side of the body. Which hemisphere is most likely affected?",
  choices: [
    "Right hemisphere",
    "Left hemisphere",
    "Cerebellum only",
    "Brainstem only"
  ],
  answer: "Right hemisphere",
  rationale: "The right hemisphere controls the left side of the body and is important for spatial awareness. Right-hemisphere stroke can produce left-sided weakness and neglect.",
  takeaway: "Left neglect strongly suggests right-hemisphere injury."
},

{
  id: "CVA-NGN-266",
  caseId: "CVA-NGN-CASE-97",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops left facial weakness and left arm weakness that are much greater than the weakness in the left leg. The client also has left-sided neglect. Which vessel is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery",
    "Left anterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke produces contralateral face and arm deficits greater than leg deficits. A right MCA stroke may also produce left-sided neglect.",
  takeaway: "MCA = face/arm > leg; right MCA can cause left neglect."
},

{
  id: "CVA-NGN-267",
  caseId: "CVA-NGN-CASE-97",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops left leg weakness greater than arm weakness along with apathy and personality changes. Which vessel is most likely affected?",
  choices: [
    "Right anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Basilar artery"
  ],
  answer: "Right anterior cerebral artery",
  rationale: "ACA stroke commonly produces contralateral leg-predominant weakness and frontal-lobe behavioral changes.",
  takeaway: "ACA = opposite leg weakness + behavior/personality changes."
},

{
  id: "CVA-NGN-268",
  caseId: "CVA-NGN-CASE-97",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has a new visual field deficit and memory impairment but no significant extremity weakness. Which vascular territory is most consistent with these findings?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior spinal artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. PCA stroke can produce visual field abnormalities and memory deficits.",
  takeaway: "PCA = think vision and memory."
},

{
  id: "CVA-NGN-269",
  caseId: "CVA-NGN-CASE-97",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Vessel Territories",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden vertigo, diplopia, dysphagia, dysarthria, nystagmus, and severe ataxia. Which vascular territory is most likely affected?",
  choices: [
    "Vertebrobasilar circulation",
    "Anterior cerebral circulation",
    "Middle cerebral circulation",
    "Isolated frontal circulation"
  ],
  answer: "Vertebrobasilar circulation",
  rationale: "The vertebrobasilar system supplies the brainstem and cerebellum. Deficits can include vertigo, diplopia, dysphagia, dysarthria, nystagmus, and ataxia.",
  takeaway: "Posterior circulation = brainstem and cerebellar findings."
},

{
  id: "CVA-NGN-270",
  caseId: "CVA-NGN-CASE-98",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe hypertension suddenly develops headache, vomiting, right-sided weakness, and decreasing level of consciousness. CT reveals hyperdense blood within the left basal ganglia. Which type of stroke should the nurse recognize?",
  choices: [
    "Intracerebral hemorrhage",
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack"
  ],
  answer: "Intracerebral hemorrhage",
  rationale: "ICH involves bleeding directly into brain tissue and is strongly associated with severe or sustained hypertension. The basal ganglia are a common location.",
  takeaway: "Hypertension + blood within brain tissue = think ICH."
},

{
  id: "CVA-NGN-271",
  caseId: "CVA-NGN-CASE-98",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes increasingly difficult to arouse and develops repeated vomiting. Which complication should the nurse suspect?",
  choices: [
    "Increasing ICP from cerebral edema and mass effect",
    "Resolution of the hemorrhage",
    "Improved cerebral perfusion",
    "Normal post-stroke fatigue"
  ],
  answer: "Increasing ICP from cerebral edema and mass effect",
  rationale: "Intracerebral blood can cause edema and mass effect. Declining LOC and vomiting are concerning for rising ICP.",
  takeaway: "Hemorrhage can worsen through edema, mass effect, and ICP."
},

{
  id: "CVA-NGN-272",
  caseId: "CVA-NGN-CASE-98",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which prescription should the nurse question immediately for this client?",
  choices: [
    "Administer thrombolytic therapy.",
    "Perform frequent neurologic assessments.",
    "Monitor blood pressure closely.",
    "Monitor for signs of increasing ICP."
  ],
  answer: "Administer thrombolytic therapy.",
  rationale: "Thrombolytic therapy is contraindicated when intracranial hemorrhage is present because it can worsen bleeding.",
  takeaway: "Hemorrhagic stroke = no thrombolytics."
},

{
  id: "CVA-NGN-273",
  caseId: "CVA-NGN-CASE-99",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly reports the worst headache of their life and develops neck stiffness, photophobia, and vomiting. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Anterior cerebral artery ischemia",
    "Transient ischemic attack",
    "Chronic hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "SAH commonly presents with sudden severe headache and meningeal irritation manifested by neck stiffness and photophobia.",
  takeaway: "Thunderclap-type severe headache + meningeal signs = SAH."
},

{
  id: "CVA-NGN-274",
  caseId: "CVA-NGN-CASE-99",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The client is prescribed scheduled nimodipine. Which complication is this medication intended to address in the treatment plan?",
  choices: [
    "Cerebral vasospasm",
    "Acute thrombus dissolution",
    "CSF overproduction",
    "Atrial fibrillation"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies nimodipine as an important scheduled medication following SAH because vasospasm can cause delayed cerebral ischemia.",
  takeaway: "SAH + nimodipine = vasospasm prevention strategy."
},

{
  id: "CVA-NGN-275",
  caseId: "CVA-NGN-CASE-99",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Seven days after the SAH, the client develops new confusion, facial droop, and unilateral arm weakness. Which complication should the nurse prioritize?",
  choices: [
    "Cerebral vasospasm",
    "Expected recovery from SAH",
    "Resolution of cerebral injury",
    "Normal medication response"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies days 3 through 14 following SAH as the period when vasospasm is a major concern. New neurologic deficits require immediate evaluation.",
  takeaway: "SAH day 3–14 + new neuro deficit = suspect vasospasm."
},

{
  id: "CVA-NGN-276",
  caseId: "CVA-NGN-CASE-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe cerebral edema develops a fixed dilated left pupil and worsening right-sided weakness. Which herniation syndrome is most consistent with these findings?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Subfalcine herniation",
    "Tonsillar herniation"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III, producing an ipsilateral fixed dilated pupil, while compression of motor pathways can produce contralateral weakness.",
  takeaway: "Uncal herniation = same-side blown pupil + opposite-side weakness."
},

{
  id: "CVA-NGN-277",
  caseId: "CVA-NGN-CASE-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client develops rapid loss of consciousness with bilateral abnormal posturing. Which herniation pattern should the nurse suspect?",
  choices: [
    "Central or transtentorial herniation",
    "Subfalcine herniation",
    "Isolated uncal herniation",
    "Stable hydrocephalus"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "Central or transtentorial herniation is associated with rapid deterioration in LOC and bilateral abnormal posturing.",
  takeaway: "Central herniation = rapid LOC decline + bilateral posturing."
},

{
  id: "CVA-NGN-278",
  caseId: "CVA-NGN-CASE-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops a midline shift and new weakness that is most pronounced in the leg opposite the cerebral lesion. Which herniation pattern is most consistent with these findings?",
  choices: [
    "Subfalcine herniation",
    "Tonsillar herniation",
    "Uncal herniation",
    "Central herniation"
  ],
  answer: "Subfalcine herniation",
  rationale: "The course associates subfalcine herniation with midline shift and contralateral leg weakness.",
  takeaway: "Subfalcine herniation = midline shift + opposite leg weakness."
},

{
  id: "CVA-NGN-279",
  caseId: "CVA-NGN-CASE-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client develops downward displacement of brain tissue through the foramen magnum. Which assessment change is most concerning?",
  choices: [
    "Irregular respirations progressing to apnea",
    "Mild expressive aphasia",
    "Stable visual field loss",
    "Unchanged unilateral leg weakness"
  ],
  answer: "Irregular respirations progressing to apnea",
  rationale: "Tonsillar herniation can compress the medulla and vital respiratory centers, producing irregular respirations and eventually apnea.",
  takeaway: "Tonsillar herniation directly threatens breathing."
},

{
  id: "CVA-NGN-280",
  caseId: "CVA-NGN-CASE-101",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with increased ICP who develops a new fixed pupil, decerebrate posturing, and irregular respirations",
    "A client with a left MCA stroke who has unchanged expressive aphasia",
    "A client with a right ACA stroke who has unchanged left-leg weakness",
    "A client with a PCA stroke who has an unchanged visual field deficit"
  ],
  answer: "A client with increased ICP who develops a new fixed pupil, decerebrate posturing, and irregular respirations",
  rationale: "A fixed pupil, decerebrate posturing, and irregular respirations are late signs of severe increased ICP and possible herniation. This client has an immediate threat to neurologic and respiratory function.",
  takeaway: "Late ICP and herniation signs outrank stable focal deficits."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-281 through CVA-NGN-300

{
  id: "CVA-NGN-281",
  caseId: "CVA-NGN-CASE-102",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client awakens at 0630 with right facial droop and right arm weakness. The spouse reports the client was neurologically normal when going to bed at 2230. Which time should the nurse document as the last-known-well?",
  choices: [
    "2230",
    "0630",
    "The time EMS arrived",
    "The time the client reaches the emergency department"
  ],
  answer: "2230",
  rationale: "Last-known-well is the last time the client was known to be neurologically normal. Because the symptoms were discovered on awakening, the last-known-well was 2230.",
  takeaway: "For wake-up symptoms, use the last time the client was known normal."
},

{
  id: "CVA-NGN-282",
  caseId: "CVA-NGN-CASE-102",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's oxygen saturation is 97%, airway is patent, and glucose is 104 mg/dL. Which action should the nurse anticipate next?",
  choices: [
    "Perform a rapid neurologic assessment and obtain a noncontrast head CT.",
    "Give the client breakfast.",
    "Wait several hours to determine whether symptoms resolve.",
    "Begin discharge teaching."
  ],
  answer: "Perform a rapid neurologic assessment and obtain a noncontrast head CT.",
  rationale: "Once ABCs, oxygenation, glucose, and last-known-well are addressed, rapid neurologic assessment and noncontrast head CT are priorities.",
  takeaway: "Stroke evaluation moves rapidly from stabilization to neurologic assessment and imaging."
},

{
  id: "CVA-NGN-283",
  caseId: "CVA-NGN-CASE-102",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The noncontrast head CT does not show hemorrhage or a clearly established infarction. The client continues to have focal neurologic deficits. Which interpretation is most appropriate?",
  choices: [
    "Hyperacute ischemic stroke may still be present.",
    "Stroke has been completely excluded.",
    "The client definitely experienced a TIA.",
    "The neurologic symptoms are no longer urgent."
  ],
  answer: "Hyperacute ischemic stroke may still be present.",
  rationale: "Early ischemic stroke may not yet produce obvious changes on noncontrast CT. A major purpose of the initial scan is to identify or exclude hemorrhage.",
  takeaway: "A normal-looking early CT does not rule out ischemic stroke."
},

{
  id: "CVA-NGN-284",
  caseId: "CVA-NGN-CASE-103",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client experienced sudden left arm weakness and slurred speech for 25 minutes. All symptoms resolved before arrival. Which nursing interpretation is most appropriate?",
  choices: [
    "The episode is consistent with a TIA and still requires urgent evaluation.",
    "The episode is harmless because the symptoms resolved.",
    "The client has no future stroke risk.",
    "No neurologic assessment is necessary unless symptoms return."
  ],
  answer: "The episode is consistent with a TIA and still requires urgent evaluation.",
  rationale: "TIA produces temporary neurologic dysfunction. Even when symptoms resolve, urgent evaluation is required because the episode can indicate significant cerebrovascular disease and future stroke risk.",
  takeaway: "Temporary does not mean harmless."
},

{
  id: "CVA-NGN-285",
  caseId: "CVA-NGN-CASE-103",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which conditions should the nurse recognize as possible causes or contributors to a TIA? Select all that apply.",
  choices: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary reduction in cerebral perfusion",
    "Normal cerebral circulation",
    "Improved collateral blood flow"
  ],
  answer: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary reduction in cerebral perfusion"
  ],
  rationale: "The course identifies carotid stenosis, plaque, atrial fibrillation, and temporary interruption of cerebral perfusion as important contributors to TIA.",
  takeaway: "TIA should trigger investigation for the source of cerebral ischemia."
},

{
  id: "CVA-NGN-286",
  caseId: "CVA-NGN-CASE-104",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with atrial fibrillation suddenly develops severe left-sided weakness and facial droop while talking with the nurse. The deficits are maximal immediately. Which stroke mechanism is most likely?",
  choices: [
    "Embolic ischemic stroke",
    "Thrombotic ischemic stroke",
    "Chronic hydrocephalus",
    "Slowly progressive increased ICP"
  ],
  answer: "Embolic ischemic stroke",
  rationale: "Embolic strokes commonly have sudden onset with deficits maximal at onset. Atrial fibrillation is an important cardiac source of cerebral emboli.",
  takeaway: "AFib + sudden maximal deficit = embolic pattern."
},

{
  id: "CVA-NGN-287",
  caseId: "CVA-NGN-CASE-104",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client with hypertension, diabetes, hyperlipidemia, and previous TIAs develops neurologic deficits that worsen gradually over several hours. Which mechanism is most consistent with this pattern?",
  choices: [
    "Thrombotic ischemic stroke",
    "Embolic ischemic stroke",
    "Subarachnoid hemorrhage",
    "Acute hydrocephalus"
  ],
  answer: "Thrombotic ischemic stroke",
  rationale: "Thrombotic strokes arise from local vascular disease and may develop gradually or in a stepwise pattern. A history of vascular risk factors and TIAs supports this pattern.",
  takeaway: "Gradual/stepwise deficits + vascular disease = thrombotic pattern."
},

{
  id: "CVA-NGN-288",
  caseId: "CVA-NGN-CASE-105",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Swallowing Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "A client with a new stroke asks for water. The client is alert and able to answer questions but has facial weakness and dysarthria. Which action should the nurse take?",
  choices: [
    "Keep the client NPO until swallowing safety is evaluated.",
    "Give a full glass of water because the client is alert.",
    "Use a straw to make swallowing easier.",
    "Give oral medications immediately."
  ],
  answer: "Keep the client NPO until swallowing safety is evaluated.",
  rationale: "Stroke can impair swallowing and airway protection. Alertness alone does not establish that oral intake is safe.",
  takeaway: "No oral intake until swallowing safety is established."
},

{
  id: "CVA-NGN-289",
  caseId: "CVA-NGN-CASE-105",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Swallowing Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client begins coughing and develops a wet, gurgling voice while attempting to swallow. Which problem should the nurse prioritize?",
  choices: [
    "Aspiration and impaired airway protection",
    "Impaired visual processing",
    "Urinary incontinence",
    "Altered body image"
  ],
  answer: "Aspiration and impaired airway protection",
  rationale: "Coughing and a wet or gurgling voice during swallowing suggest impaired swallowing and possible aspiration, making airway protection the priority.",
  takeaway: "Coughing or gurgling with swallowing = aspiration concern."
},

{
  id: "CVA-NGN-290",
  caseId: "CVA-NGN-CASE-106",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops enlarged cerebral ventricles, headache, vomiting, blurred vision, and decreasing consciousness. Which condition best explains these findings?",
  choices: [
    "Hydrocephalus with increasing ICP",
    "Stable expressive aphasia",
    "Isolated peripheral neuropathy",
    "Resolved cerebral ischemia"
  ],
  answer: "Hydrocephalus with increasing ICP",
  rationale: "Hydrocephalus involves increased CSF and ventricular enlargement. Rapid progression can produce headache, vomiting, visual changes, declining LOC, and increased ICP.",
  takeaway: "Enlarged ventricles + neurologic decline = hydrocephalus/ICP concern."
},

{
  id: "CVA-NGN-291",
  caseId: "CVA-NGN-CASE-106",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment change in this client requires the most immediate escalation?",
  choices: [
    "The client becomes increasingly difficult to arouse.",
    "The client reports a headache.",
    "The client reports blurred vision.",
    "The client reports nausea."
  ],
  answer: "The client becomes increasingly difficult to arouse.",
  rationale: "Declining level of consciousness is emphasized as the earliest and most important indicator of neurologic deterioration associated with rapidly increasing ICP.",
  takeaway: "LOC decline is the key warning sign."
},

{
  id: "CVA-NGN-292",
  caseId: "CVA-NGN-CASE-107",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A cerebral hemorrhage increases intracranial blood volume. CSF and venous blood are initially displaced to maintain normal pressure. What happens when these compensatory mechanisms are exhausted?",
  choices: [
    "ICP rises rapidly.",
    "The skull expands.",
    "Brain tissue disappears.",
    "CSF production permanently stops."
  ],
  answer: "ICP rises rapidly.",
  rationale: "According to the Monro-Kellie principle, compensation can initially accommodate changes in intracranial volume. Once compensation is exhausted, additional volume causes ICP to rise.",
  takeaway: "Compensation can delay—but not prevent—ICP elevation."
},

{
  id: "CVA-NGN-293",
  caseId: "CVA-NGN-CASE-107",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse recognize as early manifestations of increasing ICP? Select all that apply.",
  choices: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache",
    "Cushing triad"
  ],
  answer: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache"
  ],
  rationale: "Early ICP findings include declining LOC, restlessness, irritability, confusion, worsening headache, nausea, vomiting, and speech changes. Cushing triad is a late finding.",
  takeaway: "Early ICP deterioration often appears before dramatic vital-sign changes."
},

{
  id: "CVA-NGN-294",
  caseId: "CVA-NGN-CASE-107",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings indicate late neurologic deterioration from severe increased ICP? Select all that apply.",
  choices: [
    "Widened pulse pressure",
    "Bradycardia",
    "Irregular respirations",
    "Pupillary dilation",
    "Abnormal posturing",
    "New-onset seizures"
  ],
  answer: [
    "Widened pulse pressure",
    "Bradycardia",
    "Irregular respirations",
    "Pupillary dilation",
    "Abnormal posturing",
    "New-onset seizures"
  ],
  rationale: "Cushing triad, pupillary changes, abnormal posturing, and new seizures are late manifestations of severe increased ICP and possible impending herniation.",
  takeaway: "Late ICP signs signal a neurologic emergency."
},

{
  id: "CVA-NGN-295",
  caseId: "CVA-NGN-CASE-108",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "The nurse finds a client with increased ICP lying with the neck sharply flexed and the hips flexed. Which action should the nurse take?",
  choices: [
    "Reposition the client with the head midline, neck neutral, and head of bed approximately 30 degrees.",
    "Increase the hip flexion.",
    "Lower the head of the bed completely.",
    "Turn the head sharply to one side."
  ],
  answer: "Reposition the client with the head midline, neck neutral, and head of bed approximately 30 degrees.",
  rationale: "Head elevation and neutral alignment promote cerebral venous drainage. Excessive neck or hip flexion can impair venous return and contribute to increased ICP.",
  takeaway: "Keep the head elevated, neutral, and midline."
},

{
  id: "CVA-NGN-296",
  caseId: "CVA-NGN-CASE-108",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with increased ICP requires endotracheal suctioning for retained secretions. Which intervention should the nurse include?",
  choices: [
    "Hyperoxygenate before and after suctioning.",
    "Perform prolonged suctioning whenever possible.",
    "Lower the head of the bed during suctioning.",
    "Flex the client's neck to improve access."
  ],
  answer: "Hyperoxygenate before and after suctioning.",
  rationale: "Suctioning can increase ICP and cause hypoxia. The course recommends hyperoxygenation before and after necessary suctioning.",
  takeaway: "Prevent hypoxia when suctioning a client with increased ICP."
},

{
  id: "CVA-NGN-297",
  caseId: "CVA-NGN-CASE-109",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol for cerebral edema has increasing serum osmolarity, decreasing urine output, and worsening renal function. Which action should the nurse anticipate?",
  choices: [
    "Hold further mannitol and report the findings according to the treatment plan.",
    "Increase the mannitol dose.",
    "Ignore the laboratory findings if the client remains awake.",
    "Give another dose immediately to increase urine output."
  ],
  answer: "Hold further mannitol and report the findings according to the treatment plan.",
  rationale: "The course identifies elevated serum osmolarity and renal dysfunction as reasons to hold mannitol and reassess therapy.",
  takeaway: "Mannitol requires adequate renal function and safe serum osmolarity."
},

{
  id: "CVA-NGN-298",
  caseId: "CVA-NGN-CASE-109",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which assessments are important for a client receiving 3% hypertonic saline for increased ICP? Select all that apply.",
  choices: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status",
    "Hair and nail growth"
  ],
  answer: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status"
  ],
  rationale: "Hypertonic saline requires monitoring of sodium, neurologic response, and fluid status because complications include hypernatremia, fluid overload, and pulmonary edema.",
  takeaway: "With 3% saline, monitor sodium, neuro status, and fluid overload."
},

{
  id: "CVA-NGN-299",
  caseId: "CVA-NGN-CASE-110",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with severe increased ICP who develops irregular respirations and a newly dilated pupil",
    "A client with stable right-sided weakness and expressive aphasia",
    "A client with stable visual field loss after a PCA stroke",
    "A client with a resolved TIA awaiting risk-factor education"
  ],
  answer: "A client with severe increased ICP who develops irregular respirations and a newly dilated pupil",
  rationale: "Irregular respirations and a new pupil change are late findings of severe increased ICP and possible herniation, creating an immediate threat to life.",
  takeaway: "New herniation signs take priority over stable deficits."
},

{
  id: "CVA-NGN-300",
  caseId: "CVA-NGN-CASE-110",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client initially presents with acute unilateral weakness and aphasia. Several hours later, the client develops worsening headache, repeated vomiting, declining consciousness, a fixed dilated pupil, abnormal posturing, and irregular respirations. Which interpretation best explains the progression?",
  choices: [
    "The original cerebral injury has progressed to severe increased ICP with possible brain herniation.",
    "The client is demonstrating normal stroke recovery.",
    "The focal neurologic deficits have resolved, so the stroke is improving.",
    "The findings indicate improved cerebral perfusion."
  ],
  answer: "The original cerebral injury has progressed to severe increased ICP with possible brain herniation.",
  rationale: "Headache, vomiting, declining LOC, pupil changes, abnormal posturing, and irregular respirations indicate progressive intracranial hypertension and possible herniation.",
  takeaway: "Recognize the dangerous progression: cerebral injury → edema → increased ICP → herniation."
},

{
  id: "CVA-NGN-301",
  caseId: "CVA-NGN-CASE-111",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops right facial droop, right arm weakness, and difficulty speaking while eating dinner. The client is awake and breathing normally. Which information should the nurse obtain immediately after confirming ABC stability?",
  choices: [
    "The exact time the client was last known neurologically normal",
    "The client's usual bedtime",
    "The client's most recent bowel movement",
    "The client's preferred pharmacy"
  ],
  answer: "The exact time the client was last known neurologically normal",
  rationale: "After ABC stability is confirmed, determining the exact last-known-well time is a priority because acute stroke treatments are time sensitive.",
  takeaway: "Stable ABCs → establish last-known-well immediately."
},

{
  id: "CVA-NGN-302",
  caseId: "CVA-NGN-CASE-111",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's bedside glucose is 112 mg/dL and oxygen saturation is 97%. Which action should the nurse anticipate next?",
  choices: [
    "Perform a rapid neurologic assessment and prepare for noncontrast head CT.",
    "Give oral aspirin before imaging.",
    "Offer water to evaluate swallowing.",
    "Wait to see whether the deficits resolve."
  ],
  answer: "Perform a rapid neurologic assessment and prepare for noncontrast head CT.",
  rationale: "Once hypoglycemia and hypoxia are excluded, rapid neurologic assessment and noncontrast CT are priorities in the acute stroke evaluation.",
  takeaway: "Stroke evaluation moves quickly from ABCs and glucose to neuro assessment and CT."
},

{
  id: "CVA-NGN-303",
  caseId: "CVA-NGN-CASE-111",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Assessment reveals right face and arm weakness greater than right leg weakness. The client understands commands but struggles to produce words. Which location best explains the findings?",
  choices: [
    "Left middle cerebral artery territory involving Broca area",
    "Right middle cerebral artery territory involving Wernicke area",
    "Right anterior cerebral artery territory",
    "Posterior cerebral artery territory"
  ],
  answer: "Left middle cerebral artery territory involving Broca area",
  rationale: "A left MCA stroke can cause right-sided face and arm weakness greater than leg weakness. Difficulty producing speech with preserved comprehension is consistent with Broca expressive aphasia.",
  takeaway: "Right face/arm deficits + expressive aphasia = left MCA/Broca."
},

{
  id: "CVA-NGN-304",
  caseId: "CVA-NGN-CASE-112",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client speaks fluently, but the words are inappropriate and do not make sense. The client cannot follow a simple verbal command and appears unaware of the communication problem. Which deficit should the nurse identify?",
  choices: [
    "Wernicke aphasia",
    "Broca aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Wernicke aphasia",
  rationale: "Wernicke aphasia is a receptive language disorder characterized by impaired comprehension with fluent but meaningless speech. Clients may be unaware of the deficit.",
  takeaway: "Fluent nonsense + poor comprehension = Wernicke aphasia."
},

{
  id: "CVA-NGN-305",
  caseId: "CVA-NGN-CASE-112",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing communication technique is most appropriate for this client?",
  choices: [
    "Use short, simple statements supported by gestures and visual cues.",
    "Provide long explanations using complex sentences.",
    "Speak loudly because the client cannot understand.",
    "Assume fluent speech means the client understands instructions."
  ],
  answer: "Use short, simple statements supported by gestures and visual cues.",
  rationale: "Wernicke aphasia affects comprehension. Simple language and visual or gestural cues can support communication.",
  takeaway: "With receptive aphasia, simplify and support communication visually."
},

{
  id: "CVA-NGN-306",
  caseId: "CVA-NGN-CASE-113",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden dizziness, diplopia, dysarthria, severe gait instability, and nystagmus. Both hand grasps are strong and equal. Which nursing conclusion is most appropriate?",
  choices: [
    "The findings remain highly concerning for a posterior circulation stroke.",
    "Stroke is excluded because there is no unilateral weakness.",
    "The findings indicate only a peripheral musculoskeletal problem.",
    "The client can safely be discharged because strength is normal."
  ],
  answer: "The findings remain highly concerning for a posterior circulation stroke.",
  rationale: "Vertebrobasilar strokes can produce brainstem and cerebellar deficits without prominent unilateral weakness.",
  takeaway: "Posterior strokes can hide behind normal extremity strength."
},

{
  id: "CVA-NGN-307",
  caseId: "CVA-NGN-CASE-113",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client develops dysphagia and begins coughing on oral secretions. Which action should the nurse take first?",
  choices: [
    "Maintain NPO status and protect the airway.",
    "Give small amounts of water.",
    "Administer oral medications with food.",
    "Encourage the client to drink through a straw."
  ],
  answer: "Maintain NPO status and protect the airway.",
  rationale: "Dysphagia and inability to safely manage secretions indicate impaired airway protection and aspiration risk.",
  takeaway: "Stroke + dysphagia = NPO and airway protection."
},

{
  id: "CVA-NGN-308",
  caseId: "CVA-NGN-CASE-113",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client suddenly becomes difficult to arouse and respirations become irregular. Which interpretation should guide the nurse's response?",
  choices: [
    "The client may have worsening brainstem involvement and requires immediate escalation.",
    "The client is experiencing expected fatigue.",
    "The findings indicate improving cerebral perfusion.",
    "The client should be allowed to sleep without interruption."
  ],
  answer: "The client may have worsening brainstem involvement and requires immediate escalation.",
  rationale: "The brainstem controls vital functions including respiration. Declining LOC and irregular respirations indicate potentially life-threatening deterioration.",
  takeaway: "Posterior stroke + LOC and respiratory changes = emergency."
},

{
  id: "CVA-NGN-309",
  caseId: "CVA-NGN-CASE-114",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large cerebral infarction becomes restless, confused, and increasingly drowsy. The client also reports a worsening headache. Which complication should the nurse suspect?",
  choices: [
    "Increasing intracranial pressure",
    "Improving cerebral perfusion",
    "Resolution of cerebral edema",
    "Expected rehabilitation fatigue"
  ],
  answer: "Increasing intracranial pressure",
  rationale: "Declining LOC, restlessness, confusion, and worsening headache are early manifestations of increasing ICP.",
  takeaway: "Subtle LOC and behavior changes can be the first warning of rising ICP."
},

{
  id: "CVA-NGN-310",
  caseId: "CVA-NGN-CASE-114",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure is 208/62 mmHg, heart rate is 42/min, and respirations are irregular. Which finding pattern should the nurse recognize?",
  choices: [
    "Cushing triad",
    "Expected ischemic stroke recovery",
    "Early TIA manifestations",
    "Improved intracranial compliance"
  ],
  answer: "Cushing triad",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of severe increased ICP.",
  takeaway: "Hypertension + widened pulse pressure + bradycardia + irregular breathing = Cushing triad."
},

{
  id: "CVA-NGN-311",
  caseId: "CVA-NGN-CASE-114",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's left pupil becomes fixed and dilated, and right-sided weakness worsens. Which complication is most likely?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Subfalcine herniation",
    "Resolved cerebral edema"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation may cause an ipsilateral fixed dilated pupil from cranial nerve III compression and contralateral motor weakness.",
  takeaway: "Same-side blown pupil + opposite weakness = uncal herniation."
},

{
  id: "CVA-NGN-312",
  caseId: "CVA-NGN-CASE-115",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Interventions",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions are appropriate for a client with increased ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head and neck in neutral alignment.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Avoid clustering multiple stimulating activities together.",
    "Position the neck in extreme flexion."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Keep the head and neck in neutral alignment.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Avoid clustering multiple stimulating activities together."
  ],
  rationale: "These measures promote cerebral venous drainage and reduce factors that can further increase ICP.",
  takeaway: "Position for drainage and minimize activities that raise ICP."
},

{
  id: "CVA-NGN-313",
  caseId: "CVA-NGN-CASE-115",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Interventions",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with increased ICP requires suctioning because of retained airway secretions. Which intervention should the nurse include?",
  choices: [
    "Hyperoxygenate before and after suctioning.",
    "Perform prolonged suctioning repeatedly.",
    "Lower the head of the bed flat.",
    "Flex the client's neck during suctioning."
  ],
  answer: "Hyperoxygenate before and after suctioning.",
  rationale: "Necessary suctioning can increase ICP and contribute to hypoxia. Hyperoxygenation before and after suctioning helps reduce secondary brain injury.",
  takeaway: "Necessary suctioning requires protection against hypoxia."
},

{
  id: "CVA-NGN-314",
  caseId: "CVA-NGN-CASE-116",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client is receiving mannitol for cerebral edema. Which parameters should the nurse monitor closely? Select all that apply.",
  choices: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status",
    "Hair growth"
  ],
  answer: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status"
  ],
  rationale: "Mannitol can cause dehydration, electrolyte abnormalities, and renal injury. Serum osmolarity, renal function, electrolytes, fluid balance, and neurologic response require monitoring.",
  takeaway: "Mannitol requires close renal, fluid, laboratory, and neurologic monitoring."
},

{
  id: "CVA-NGN-315",
  caseId: "CVA-NGN-CASE-116",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The client's serum osmolarity is increasingly elevated and renal function is worsening. Which action should the nurse anticipate?",
  choices: [
    "Hold mannitol and report the findings according to the treatment plan.",
    "Increase the mannitol dose.",
    "Administer an additional dose immediately.",
    "Ignore the findings if the client's blood pressure is normal."
  ],
  answer: "Hold mannitol and report the findings according to the treatment plan.",
  rationale: "The course identifies elevated serum osmolarity and renal dysfunction as reasons to hold mannitol and reassess treatment.",
  takeaway: "Mannitol can become unsafe when osmolarity or renal dysfunction worsens."
},

{
  id: "CVA-NGN-316",
  caseId: "CVA-NGN-CASE-117",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops dyspnea, bilateral crackles, and increasing oxygen requirements. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload and pulmonary edema",
    "Expected therapeutic response",
    "Dehydration from osmotic diuresis",
    "Improved cerebral perfusion"
  ],
  answer: "Fluid overload and pulmonary edema",
  rationale: "Hypertonic saline can expand intravascular volume and cause fluid overload and pulmonary edema.",
  takeaway: "3% saline + respiratory deterioration = assess for fluid overload."
},

{
  id: "CVA-NGN-317",
  caseId: "CVA-NGN-CASE-117",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which assessments should the nurse prioritize during hypertonic saline therapy? Select all that apply.",
  choices: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Respiratory status",
    "Signs of fluid overload",
    "Rapid intentional changes in serum sodium"
  ],
  answer: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Respiratory status",
    "Signs of fluid overload"
  ],
  rationale: "Hypertonic saline therapy requires close monitoring of sodium, neurologic status, and cardiopulmonary fluid status. Rapid sodium shifts should be avoided.",
  takeaway: "Monitor sodium, neuro status, lungs, and fluid balance with hypertonic saline."
},

{
  id: "CVA-NGN-318",
  caseId: "CVA-NGN-CASE-118",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "A client with an EVD develops fever, redness at the insertion site, cloudy CSF, and increasing confusion. Which complication should the nurse suspect?",
  choices: [
    "EVD-associated infection",
    "Expected response to CSF drainage",
    "Resolution of hydrocephalus",
    "Improved intracranial compliance"
  ],
  answer: "EVD-associated infection",
  rationale: "Fever, insertion-site redness, cloudy CSF, and neurologic deterioration are concerning for infection associated with the ventricular drainage system.",
  takeaway: "EVD infection can produce local, CSF, systemic, and neurologic changes."
},

{
  id: "CVA-NGN-319",
  caseId: "CVA-NGN-CASE-118",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with an EVD becomes increasingly drowsy and develops worsening headache and vomiting. Which problem should the nurse prioritize?",
  choices: [
    "Possible ineffective CSF drainage with increasing ICP",
    "Normal adaptation to the EVD",
    "Expected fatigue from hospitalization",
    "Resolution of hydrocephalus"
  ],
  answer: "Possible ineffective CSF drainage with increasing ICP",
  rationale: "Worsening headache, vomiting, and declining LOC in a client with an EVD can indicate inadequate CSF drainage and recurrent or worsening intracranial hypertension.",
  takeaway: "EVD + returning ICP symptoms = urgent reassessment."
},

{
  id: "CVA-NGN-320",
  caseId: "CVA-NGN-CASE-119",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client requires immediate assessment?",
  choices: [
    "A client with a large stroke who develops a fixed dilated pupil, decerebrate posturing, and irregular respirations",
    "A client with stable expressive aphasia who is frustrated by difficulty speaking",
    "A client with stable left-sided neglect who requires assistance with meals",
    "A client with a previous TIA who needs education about stroke risk factors"
  ],
  answer: "A client with a large stroke who develops a fixed dilated pupil, decerebrate posturing, and irregular respirations",
  rationale: "A fixed dilated pupil, decerebrate posturing, and irregular respirations are late signs of severe increased ICP and possible brain herniation. This represents an immediate life-threatening neurologic emergency.",
  takeaway: "Herniation signs take priority over stable stroke deficits."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-321 through CVA-NGN-340

{
  id: "CVA-NGN-321",
  caseId: "CVA-NGN-CASE-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden left-sided weakness and slurred speech. The client is difficult to arouse, has snoring respirations, and an oxygen saturation of 86%. Which action should the nurse take FIRST?",
  choices: [
    "Support the airway and improve oxygenation.",
    "Determine the exact last-known-well time.",
    "Perform the NIH Stroke Scale.",
    "Prepare the client for noncontrast head CT."
  ],
  answer: "Support the airway and improve oxygenation.",
  rationale: "Airway and breathing take priority over the remainder of the stroke evaluation. Hypoxia can worsen secondary neurologic injury.",
  takeaway: "ABCs remain first even when stroke is suspected."
},

{
  id: "CVA-NGN-322",
  caseId: "CVA-NGN-CASE-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After the client's airway and oxygenation are stabilized, which information is most important to obtain immediately?",
  choices: [
    "Exact last-known-well time",
    "Usual sleep schedule",
    "Last bowel movement",
    "Usual daily fluid intake"
  ],
  answer: "Exact last-known-well time",
  rationale: "The exact last-known-well time is essential because acute stroke treatments are time sensitive.",
  takeaway: "After ABC stabilization, establish last-known-well."
},

{
  id: "CVA-NGN-323",
  caseId: "CVA-NGN-CASE-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Mimics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's bedside glucose is 44 mg/dL. Which action should the nurse take?",
  choices: [
    "Treat the hypoglycemia and reassess the neurologic findings.",
    "Immediately administer thrombolytic therapy.",
    "Assume the client has a completed stroke.",
    "Delay treatment until CT is completed."
  ],
  answer: "Treat the hypoglycemia and reassess the neurologic findings.",
  rationale: "Hypoglycemia can produce stroke-like neurologic deficits. It should be corrected promptly and the neurologic findings reassessed.",
  takeaway: "Always check glucose because hypoglycemia can mimic stroke."
},

{
  id: "CVA-NGN-324",
  caseId: "CVA-NGN-CASE-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After correction of the client's glucose, the left-sided weakness and dysarthria remain. Which action should the nurse anticipate next?",
  choices: [
    "Continue the acute stroke evaluation and obtain a noncontrast head CT.",
    "Discontinue the stroke evaluation.",
    "Allow the client to eat before further testing.",
    "Wait until the next shift to reassess."
  ],
  answer: "Continue the acute stroke evaluation and obtain a noncontrast head CT.",
  rationale: "Persistent focal neurologic deficits after correction of hypoglycemia require continued stroke evaluation. Noncontrast CT is used to assess for intracranial hemorrhage.",
  takeaway: "Persistent deficits after correcting a mimic require continued stroke evaluation."
},

{
  id: "CVA-NGN-325",
  caseId: "CVA-NGN-CASE-121",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic vs Hemorrhagic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's noncontrast CT shows a bright hyperdense collection of blood within the brain tissue. Which stroke type should the nurse suspect?",
  choices: [
    "Intracerebral hemorrhage",
    "Thrombotic ischemic stroke",
    "Embolic ischemic stroke",
    "Transient ischemic attack"
  ],
  answer: "Intracerebral hemorrhage",
  rationale: "Acute intracranial blood appears hyperdense or bright on noncontrast CT. Blood located within the brain tissue is consistent with intracerebral hemorrhage.",
  takeaway: "Bright blood on CT = hemorrhage."
},

{
  id: "CVA-NGN-326",
  caseId: "CVA-NGN-CASE-121",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which treatment should the nurse recognize as contraindicated for this client?",
  choices: [
    "Thrombolytic therapy",
    "Frequent neurologic assessments",
    "Monitoring for increased ICP",
    "Close blood pressure monitoring"
  ],
  answer: "Thrombolytic therapy",
  rationale: "Thrombolytic medications are contraindicated when intracranial hemorrhage is present because they can worsen bleeding.",
  takeaway: "Hemorrhage on CT rules out thrombolytic therapy."
},

{
  id: "CVA-NGN-327",
  caseId: "CVA-NGN-CASE-121",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several hours later, the client develops worsening headache, repeated vomiting, and decreasing level of consciousness. Which complication should the nurse suspect?",
  choices: [
    "Increasing ICP caused by edema and mass effect",
    "Resolution of the hemorrhage",
    "Improved cerebral perfusion",
    "Expected post-stroke fatigue"
  ],
  answer: "Increasing ICP caused by edema and mass effect",
  rationale: "Intracerebral hemorrhage can cause cerebral edema and mass effect. Worsening headache, vomiting, and declining LOC are concerning for increasing ICP.",
  takeaway: "Hemorrhage can progress to edema, mass effect, and rising ICP."
},

{
  id: "CVA-NGN-328",
  caseId: "CVA-NGN-CASE-122",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with disabling ischemic stroke symptoms has a last-known-well 2 hours ago. CT shows no hemorrhage. Blood pressure is 182/106 mmHg, there is no active bleeding, and coagulation studies are acceptable. Which interpretation is most appropriate based on the course criteria?",
  choices: [
    "The findings support continued evaluation for thrombolytic therapy.",
    "The blood pressure automatically excludes thrombolytic therapy.",
    "The client is outside the treatment window.",
    "The absence of hemorrhage means treatment is unnecessary."
  ],
  answer: "The findings support continued evaluation for thrombolytic therapy.",
  rationale: "The course criteria include last-known-well within 4.5 hours, no hemorrhage on CT, blood pressure below 185/110 mmHg, no active bleeding, and acceptable coagulation studies.",
  takeaway: "Evaluate the complete thrombolytic eligibility picture."
},

{
  id: "CVA-NGN-329",
  caseId: "CVA-NGN-CASE-122",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Another client being evaluated for thrombolytic therapy has a blood pressure of 188/114 mmHg. Which finding requires intervention before thrombolytic therapy can proceed based on the course criteria?",
  choices: [
    "Blood pressure of 188/114 mmHg",
    "Last-known-well 2 hours ago",
    "No hemorrhage on CT",
    "Normal coagulation studies"
  ],
  answer: "Blood pressure of 188/114 mmHg",
  rationale: "The course requires blood pressure below 185/110 mmHg before thrombolytic therapy.",
  takeaway: "Pre-thrombolytic BP must be below 185/110 mmHg."
},

{
  id: "CVA-NGN-330",
  caseId: "CVA-NGN-CASE-122",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Complications",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings during thrombolytic therapy should cause the nurse to suspect intracranial hemorrhage and immediately escalate care? Select all that apply.",
  choices: [
    "Sudden severe headache",
    "Sudden blood pressure increase",
    "Nausea or vomiting",
    "New neurologic deterioration",
    "Unexpected bleeding",
    "Improved extremity strength"
  ],
  answer: [
    "Sudden severe headache",
    "Sudden blood pressure increase",
    "Nausea or vomiting",
    "New neurologic deterioration",
    "Unexpected bleeding"
  ],
  rationale: "Severe headache, sudden BP elevation, nausea or vomiting, neurologic decline, and bleeding are warning signs of possible hemorrhage during thrombolytic therapy.",
  takeaway: "Know the red flags for bleeding during thrombolysis."
},

{
  id: "CVA-NGN-331",
  caseId: "CVA-NGN-CASE-123",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops an extremely severe headache, vomiting, photophobia, and neck stiffness. Which condition is most consistent with these findings?",
  choices: [
    "Subarachnoid hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Stable hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "SAH commonly presents with sudden severe headache accompanied by meningeal irritation such as neck stiffness and photophobia.",
  takeaway: "Sudden worst headache + neck stiffness/photophobia = SAH."
},

{
  id: "CVA-NGN-332",
  caseId: "CVA-NGN-CASE-123",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which scheduled medication should the nurse expect as part of the client's treatment plan?",
  choices: [
    "Nimodipine",
    "Alteplase",
    "Tenecteplase",
    "Routine thrombolytic therapy"
  ],
  answer: "Nimodipine",
  rationale: "The course identifies nimodipine as an important scheduled medication following SAH because cerebral vasospasm is a major delayed complication.",
  takeaway: "SAH → think nimodipine and vasospasm."
},

{
  id: "CVA-NGN-333",
  caseId: "CVA-NGN-CASE-123",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "On day 9 after the SAH, the client develops new confusion and unilateral weakness. Which complication should the nurse suspect first?",
  choices: [
    "Cerebral vasospasm",
    "Normal neurologic recovery",
    "Resolution of the hemorrhage",
    "Expected effect of nimodipine"
  ],
  answer: "Cerebral vasospasm",
  rationale: "The course identifies days 3 through 14 after SAH as the period of greatest concern for cerebral vasospasm. New neurologic deficits require urgent evaluation.",
  takeaway: "New deficits during days 3–14 after SAH = suspect vasospasm."
},

{
  id: "CVA-NGN-334",
  caseId: "CVA-NGN-CASE-124",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has enlarged ventricles and develops worsening headache, vomiting, blurred vision, and progressive drowsiness. Which problem should the nurse recognize?",
  choices: [
    "Rapidly worsening hydrocephalus with increasing ICP",
    "Stable expressive aphasia",
    "Isolated visual processing impairment",
    "Normal neurologic recovery"
  ],
  answer: "Rapidly worsening hydrocephalus with increasing ICP",
  rationale: "Hydrocephalus results from excess CSF and ventricular enlargement. Rapid progression can cause headache, vomiting, visual changes, declining LOC, and increasing ICP.",
  takeaway: "Hydrocephalus can rapidly become an ICP emergency."
},

{
  id: "CVA-NGN-335",
  caseId: "CVA-NGN-CASE-124",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment finding is the most important indicator that this client's neurologic condition is worsening?",
  choices: [
    "Progressive decline in level of consciousness",
    "Headache",
    "Blurred vision",
    "Nausea"
  ],
  answer: "Progressive decline in level of consciousness",
  rationale: "Declining LOC is emphasized as the earliest and most important sign of worsening neurologic status with rapidly increasing ICP.",
  takeaway: "Trend LOC closely in hydrocephalus and increased ICP."
},

{
  id: "CVA-NGN-336",
  caseId: "CVA-NGN-CASE-124",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "The provider wants immediate temporary drainage of excess CSF. Which intervention should the nurse anticipate?",
  choices: [
    "External ventricular drain",
    "Thrombolytic infusion",
    "Carotid endarterectomy",
    "Long-term anticoagulation"
  ],
  answer: "External ventricular drain",
  rationale: "An EVD or ventriculostomy can provide acute drainage of excess CSF and assist in management of acute hydrocephalus.",
  takeaway: "Acute CSF drainage = EVD."
},

{
  id: "CVA-NGN-337",
  caseId: "CVA-NGN-CASE-125",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a fixed dilated right pupil and worsening left-sided weakness. Which herniation syndrome should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Tonsillar herniation"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can cause an ipsilateral fixed dilated pupil from cranial nerve III compression and contralateral weakness.",
  takeaway: "Right blown pupil + left weakness = right uncal herniation."
},

{
  id: "CVA-NGN-338",
  caseId: "CVA-NGN-CASE-125",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client with severe increased ICP develops rapid loss of consciousness and bilateral abnormal posturing. Which herniation pattern is most consistent with these findings?",
  choices: [
    "Central or transtentorial herniation",
    "Subfalcine herniation",
    "Stable uncal compression",
    "Resolved cerebral edema"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "Central or transtentorial herniation is associated with rapid decline in consciousness and bilateral abnormal posturing.",
  takeaway: "Rapid LOC decline + bilateral posturing = central herniation."
},

{
  id: "CVA-NGN-339",
  caseId: "CVA-NGN-CASE-125",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe intracranial hypertension develops increasingly irregular respirations that progress to apnea. Which herniation syndrome is most concerning?",
  choices: [
    "Tonsillar herniation",
    "Subfalcine herniation",
    "Stable uncal herniation",
    "Resolved transtentorial herniation"
  ],
  answer: "Tonsillar herniation",
  rationale: "Tonsillar herniation involves downward displacement through the foramen magnum and can compress vital medullary respiratory centers, resulting in apnea.",
  takeaway: "Tonsillar herniation threatens the respiratory centers."
},

{
  id: "CVA-NGN-340",
  caseId: "CVA-NGN-CASE-126",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with a recent large stroke who has a new fixed pupil, decreasing LOC, bradycardia, and irregular respirations",
    "A client with a left MCA stroke who has unchanged expressive aphasia",
    "A client with a right ACA stroke who has unchanged left-leg weakness",
    "A client with a previous TIA who is waiting for discharge teaching"
  ],
  answer: "A client with a recent large stroke who has a new fixed pupil, decreasing LOC, bradycardia, and irregular respirations",
  rationale: "A new fixed pupil, declining consciousness, bradycardia, and irregular respirations indicate severe increased ICP and possible brain herniation. This client has the most immediate threat to life.",
  takeaway: "New signs of herniation require immediate intervention."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-341 through CVA-NGN-360

{
  id: "CVA-NGN-341",
  caseId: "CVA-NGN-CASE-127",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Health Promotion and Maintenance",
  question: "A client with a history of hypertension, atrial fibrillation, diabetes mellitus, and a previous TIA asks which condition represents the strongest modifiable risk factor for stroke. Which response is most appropriate?",
  choices: [
    "Hypertension",
    "Previous TIA",
    "Age",
    "Family history"
  ],
  answer: "Hypertension",
  rationale: "The course identifies hypertension as the strongest modifiable risk factor for stroke. Controlling blood pressure is an important component of stroke prevention.",
  takeaway: "Hypertension is the strongest modifiable stroke risk factor."
},

{
  id: "CVA-NGN-342",
  caseId: "CVA-NGN-CASE-127",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Embolic Stroke",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Why does atrial fibrillation significantly increase this client's risk for an ischemic stroke?",
  choices: [
    "A clot can form in the heart and travel to a cerebral artery.",
    "Atrial fibrillation directly causes cerebral arteries to rupture.",
    "Atrial fibrillation causes excessive CSF production.",
    "Atrial fibrillation directly increases intracranial pressure."
  ],
  answer: "A clot can form in the heart and travel to a cerebral artery.",
  rationale: "Atrial fibrillation is an important cardiac source of emboli. A clot can form within the heart and travel through the circulation until it obstructs a cerebral artery.",
  takeaway: "AFib is a major source of embolic stroke."
},

{
  id: "CVA-NGN-343",
  caseId: "CVA-NGN-CASE-127",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Embolic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client suddenly develops aphasia and right-sided weakness while speaking with the nurse. The deficits are severe immediately at onset. Which mechanism is most consistent with this presentation?",
  choices: [
    "Embolic ischemic stroke",
    "Thrombotic ischemic stroke",
    "Slowly progressive hydrocephalus",
    "Chronic increased ICP"
  ],
  answer: "Embolic ischemic stroke",
  rationale: "Embolic strokes typically have a sudden onset with neurologic deficits that are maximal at onset. Atrial fibrillation further supports an embolic source.",
  takeaway: "Sudden maximal deficit + AFib = embolic stroke pattern."
},

{
  id: "CVA-NGN-344",
  caseId: "CVA-NGN-CASE-128",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombotic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hypertension, diabetes, hyperlipidemia, and several previous TIAs develops left-sided weakness that worsens in a stepwise pattern over several hours. Which stroke mechanism is most consistent with these findings?",
  choices: [
    "Thrombotic ischemic stroke",
    "Embolic ischemic stroke",
    "Subarachnoid hemorrhage",
    "Acute hydrocephalus"
  ],
  answer: "Thrombotic ischemic stroke",
  rationale: "Thrombotic stroke results from local arterial obstruction and may produce gradual or stepwise neurologic deterioration. Previous TIAs and vascular risk factors support this mechanism.",
  takeaway: "Stepwise progression + vascular disease/TIAs = thrombotic pattern."
},

{
  id: "CVA-NGN-345",
  caseId: "CVA-NGN-CASE-128",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke Pathophysiology",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse explains that an obstructed cerebral artery decreases delivery of oxygen and glucose to neurons. Which sequence best describes what can occur if blood flow is not restored?",
  choices: [
    "Ischemia → cellular injury → infarction → permanent neurologic damage",
    "Infarction → improved perfusion → complete recovery",
    "Increased CSF → ischemia → improved oxygenation",
    "Hemorrhage → vasodilation → immediate tissue recovery"
  ],
  answer: "Ischemia → cellular injury → infarction → permanent neurologic damage",
  rationale: "Brain tissue requires a continuous supply of oxygen and glucose. Prolonged interruption of cerebral perfusion causes ischemic injury that can progress to infarction and permanent damage.",
  takeaway: "Time matters because ischemic neurons can progress to irreversible infarction."
},

{
  id: "CVA-NGN-346",
  caseId: "CVA-NGN-CASE-129",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has left facial weakness, severe left arm weakness, mild left leg weakness, and left-sided neglect. Which vascular territory is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA strokes commonly cause contralateral face and arm deficits greater than leg deficits. A right MCA stroke can also produce left-sided neglect.",
  takeaway: "Left face/arm > leg deficits + neglect = right MCA."
},

{
  id: "CVA-NGN-347",
  caseId: "CVA-NGN-CASE-129",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neglect",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which behavior by this client creates the greatest immediate safety concern?",
  choices: [
    "The client attempts to stand without recognizing the weak left leg.",
    "The client eats only food from the right side of the tray.",
    "The client looks toward the right side of the room.",
    "The client requires additional time for grooming."
  ],
  answer: "The client attempts to stand without recognizing the weak left leg.",
  rationale: "Neglect and impaired awareness of deficits can lead to unsafe attempts at mobility and a high risk for falls and injury.",
  takeaway: "Neglect becomes especially dangerous when the client does not recognize physical limitations."
},

{
  id: "CVA-NGN-348",
  caseId: "CVA-NGN-CASE-130",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops pronounced right leg weakness with minimal right arm weakness. Family members also report sudden apathy and personality changes. Which artery is most likely affected?",
  choices: [
    "Left anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Basilar artery"
  ],
  answer: "Left anterior cerebral artery",
  rationale: "The ACA supplies medial frontal and parietal regions. A left ACA stroke can cause right leg-predominant weakness and frontal behavioral changes.",
  takeaway: "ACA = contralateral leg > arm weakness plus frontal behavior changes."
},

{
  id: "CVA-NGN-349",
  caseId: "CVA-NGN-CASE-130",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are consistent with an anterior cerebral artery stroke? Select all that apply.",
  choices: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality or behavioral changes",
    "Apathy or disinhibition",
    "Memory impairment",
    "Possible urinary incontinence",
    "Isolated severe diplopia and dysphagia"
  ],
  answer: [
    "Contralateral leg weakness greater than arm weakness",
    "Personality or behavioral changes",
    "Apathy or disinhibition",
    "Memory impairment",
    "Possible urinary incontinence"
  ],
  rationale: "ACA stroke can affect the medial motor cortex and frontal structures, producing leg-predominant weakness, behavioral changes, memory impairment, and possible urinary incontinence.",
  takeaway: "ACA strokes combine leg-predominant deficits with frontal-lobe findings."
},

{
  id: "CVA-NGN-350",
  caseId: "CVA-NGN-CASE-131",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops a visual field deficit and difficulty recognizing familiar objects. Strength and speech production remain intact. Which vascular territory should the nurse suspect?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Vertebral artery affecting the medulla"
  ],
  answer: "Posterior cerebral artery",
  rationale: "PCA strokes affect the occipital and inferior temporal regions and can cause visual field defects and visual recognition problems.",
  takeaway: "Visual deficits without major weakness should raise concern for PCA involvement."
},

{
  id: "CVA-NGN-351",
  caseId: "CVA-NGN-CASE-131",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client can write a sentence correctly but cannot read the sentence afterward. Which finding should the nurse document?",
  choices: [
    "Alexia without agraphia",
    "Expressive aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Alexia without agraphia",
  rationale: "The course associates PCA stroke with alexia without agraphia, meaning the client cannot read despite retaining the ability to write.",
  takeaway: "Can write but cannot read = alexia without agraphia."
},

{
  id: "CVA-NGN-352",
  caseId: "CVA-NGN-CASE-132",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Progression",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema is initially restless and confused. Several hours later the client becomes difficult to arouse. Which interpretation is most appropriate?",
  choices: [
    "The client's neurologic condition is worsening and ICP may be increasing.",
    "The client is entering normal restorative sleep.",
    "The cerebral edema is resolving.",
    "The client's cerebral perfusion is improving."
  ],
  answer: "The client's neurologic condition is worsening and ICP may be increasing.",
  rationale: "Declining LOC is the earliest and most important indicator of worsening neurologic status associated with increased ICP.",
  takeaway: "A worsening level of consciousness requires immediate attention."
},

{
  id: "CVA-NGN-353",
  caseId: "CVA-NGN-CASE-132",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Progression",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's ICP remains at 25 mmHg. Which interpretation should guide the nurse's response?",
  choices: [
    "The ICP is above the harmful threshold and requires prompt intervention.",
    "The ICP is within the normal range.",
    "The ICP is lower than expected.",
    "The value is insignificant unless the client has a seizure."
  ],
  answer: "The ICP is above the harmful threshold and requires prompt intervention.",
  rationale: "The course identifies normal ICP as approximately 10 to 15 mmHg and sustained ICP greater than 20 mmHg as harmful.",
  takeaway: "Sustained ICP >20 mmHg is dangerous."
},

{
  id: "CVA-NGN-354",
  caseId: "CVA-NGN-CASE-132",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Progression",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure rises to 216/68 mmHg, heart rate decreases to 38/min, and respirations become irregular. Which conclusion is most appropriate?",
  choices: [
    "The client is demonstrating late increased ICP with Cushing triad.",
    "The client's neurologic status is improving.",
    "The client is experiencing a normal response to sleep.",
    "The findings indicate resolved cerebral edema."
  ],
  answer: "The client is demonstrating late increased ICP with Cushing triad.",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of severe intracranial hypertension.",
  takeaway: "Cushing triad is a late warning of severe ICP elevation."
},

{
  id: "CVA-NGN-355",
  caseId: "CVA-NGN-CASE-133",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a fixed dilated right pupil and worsening weakness of the left side. Which finding best explains this pattern?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Isolated cerebellar injury"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III on the same side, causing a fixed dilated pupil, while motor pathway compression produces contralateral weakness.",
  takeaway: "Uncal = ipsilateral blown pupil + contralateral weakness."
},

{
  id: "CVA-NGN-356",
  caseId: "CVA-NGN-CASE-133",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's neurologic status progresses from decorticate to decerebrate posturing. How should the nurse interpret this change?",
  choices: [
    "The neurologic injury is worsening.",
    "The client's condition is improving.",
    "The client is regaining motor control.",
    "The change is unrelated to intracranial pressure."
  ],
  answer: "The neurologic injury is worsening.",
  rationale: "The course identifies progression from decorticate to decerebrate posturing as a late sign of worsening neurologic deterioration.",
  takeaway: "Decorticate → decerebrate = worsening neurologic injury."
},

{
  id: "CVA-NGN-357",
  caseId: "CVA-NGN-CASE-134",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Brain Injury",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which conditions should the nurse actively prevent or correct to reduce secondary brain injury in a client with increased ICP? Select all that apply.",
  choices: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Poor oxygenation",
    "Neutral head alignment"
  ],
  answer: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Poor oxygenation"
  ],
  rationale: "The course emphasizes preventing hypoxia, hypotension, fever, and hyperglycemia because these physiologic stresses can worsen secondary neurologic injury.",
  takeaway: "Protect the injured brain from additional oxygen, perfusion, temperature, and glucose insults."
},

{
  id: "CVA-NGN-358",
  caseId: "CVA-NGN-CASE-134",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which positioning change should the nurse make for a client with increased ICP who is lying flat with the neck flexed toward the chest?",
  choices: [
    "Elevate the head of the bed about 30 degrees and place the head in neutral alignment.",
    "Keep the client flat and increase neck flexion.",
    "Lower the head below the level of the heart.",
    "Flex the hips to approximately 90 degrees."
  ],
  answer: "Elevate the head of the bed about 30 degrees and place the head in neutral alignment.",
  rationale: "HOB elevation and neutral head alignment promote cerebral venous drainage. Neck and hip flexion can impair venous return and contribute to increased ICP.",
  takeaway: "HOB 30° + head midline/neutral promotes venous drainage."
},

{
  id: "CVA-NGN-359",
  caseId: "CVA-NGN-CASE-135",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with an EVD who develops new drowsiness, vomiting, and worsening headache",
    "A client with stable Broca aphasia who is using a communication board",
    "A client with stable PCA stroke who has an unchanged visual field deficit",
    "A client with a previous TIA who is reviewing blood pressure management"
  ],
  answer: "A client with an EVD who develops new drowsiness, vomiting, and worsening headache",
  rationale: "New declining LOC, vomiting, and worsening headache can indicate ineffective CSF drainage and increasing ICP in a client with an EVD.",
  takeaway: "New ICP symptoms in an EVD client require urgent assessment."
},

{
  id: "CVA-NGN-360",
  caseId: "CVA-NGN-CASE-135",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke progresses from headache and confusion to declining consciousness, vomiting, severe hypertension with widened pulse pressure, bradycardia, a fixed dilated pupil, and irregular respirations. Which interpretation best explains the client's progression?",
  choices: [
    "Progressive cerebral edema has caused severe increased ICP with impending or active herniation.",
    "The client's stroke is resolving normally.",
    "The findings indicate improved cerebral perfusion.",
    "The client is experiencing an uncomplicated TIA."
  ],
  answer: "Progressive cerebral edema has caused severe increased ICP with impending or active herniation.",
  rationale: "The progression from early ICP manifestations to Cushing triad, pupil changes, and respiratory abnormalities indicates severe intracranial hypertension and possible brain herniation.",
  takeaway: "Recognize the progression: cerebral injury → edema → rising ICP → late signs → herniation."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-361 through CVA-NGN-380

{
  id: "CVA-NGN-361",
  caseId: "CVA-NGN-CASE-136",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left facial droop, left arm weakness, and difficulty walking. The client is alert with a patent airway and oxygen saturation of 98%. Which action is the nurse's priority?",
  choices: [
    "Determine the exact last-known-well time.",
    "Complete a swallowing evaluation.",
    "Provide oral fluids.",
    "Begin discharge teaching."
  ],
  answer: "Determine the exact last-known-well time.",
  rationale: "Once ABCs are stable, determining the exact last-known-well time is a priority because acute stroke treatment decisions are time sensitive.",
  takeaway: "Stable ABCs → determine last-known-well immediately."
},

{
  id: "CVA-NGN-362",
  caseId: "CVA-NGN-CASE-136",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's glucose is 41 mg/dL. Which action should the nurse take next?",
  choices: [
    "Treat the hypoglycemia and reassess the neurologic deficits.",
    "Assume the client has an ischemic stroke and administer thrombolytic therapy.",
    "Wait for the CT result before treating the glucose.",
    "Give the client oral food despite the facial weakness."
  ],
  answer: "Treat the hypoglycemia and reassess the neurologic deficits.",
  rationale: "Hypoglycemia can produce neurologic findings that mimic stroke. It should be corrected promptly and the neurologic examination repeated.",
  takeaway: "Rule out and correct hypoglycemia during acute stroke evaluation."
},

{
  id: "CVA-NGN-363",
  caseId: "CVA-NGN-CASE-136",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "After the glucose is corrected, the client's left-sided weakness and facial droop remain. Which action is most appropriate?",
  choices: [
    "Continue the stroke evaluation with rapid neurologic assessment and noncontrast head CT.",
    "Conclude that the symptoms were caused entirely by hypoglycemia.",
    "Delay further evaluation for several hours.",
    "Allow the client to eat and reassess tomorrow."
  ],
  answer: "Continue the stroke evaluation with rapid neurologic assessment and noncontrast head CT.",
  rationale: "Persistent focal neurologic deficits after correction of a possible mimic require continued acute stroke evaluation.",
  takeaway: "Persistent deficits mean the stroke workup continues."
},

{
  id: "CVA-NGN-364",
  caseId: "CVA-NGN-CASE-137",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has right facial weakness, right arm weakness greater than right leg weakness, and difficulty forming words. The client understands what the nurse says. Which vascular territory is most likely affected?",
  choices: [
    "Left middle cerebral artery",
    "Right middle cerebral artery",
    "Left anterior cerebral artery",
    "Right posterior cerebral artery"
  ],
  answer: "Left middle cerebral artery",
  rationale: "A left MCA stroke can produce right-sided face and arm weakness greater than leg weakness and expressive aphasia from involvement of the dominant frontal language area.",
  takeaway: "Right face/arm weakness + expressive aphasia = left MCA."
},

{
  id: "CVA-NGN-365",
  caseId: "CVA-NGN-CASE-137",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "The client becomes frustrated while attempting to answer questions. Which nursing intervention is most appropriate?",
  choices: [
    "Allow extra time for the client to respond and use simple communication methods.",
    "Finish every sentence for the client.",
    "Speak more loudly and rapidly.",
    "Avoid communicating until speech returns."
  ],
  answer: "Allow extra time for the client to respond and use simple communication methods.",
  rationale: "Clients with Broca aphasia may understand communication but have difficulty producing speech. Allowing time to respond reduces frustration and supports communication.",
  takeaway: "Broca aphasia: comprehension may be intact, so give the client time to communicate."
},

{
  id: "CVA-NGN-366",
  caseId: "CVA-NGN-CASE-138",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a right-sided cerebral stroke has left-sided weakness and repeatedly bumps the wheelchair into objects on the left. Which deficit best explains this behavior?",
  choices: [
    "Left-sided neglect",
    "Broca aphasia",
    "Wernicke aphasia",
    "Right-sided sensory loss"
  ],
  answer: "Left-sided neglect",
  rationale: "Right-hemisphere injury can impair awareness of the left side of the body and environment, producing left-sided neglect.",
  takeaway: "Right hemisphere injury can cause left neglect and major safety risks."
},

{
  id: "CVA-NGN-367",
  caseId: "CVA-NGN-CASE-138",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are consistent with right-hemisphere cerebral injury? Select all that apply.",
  choices: [
    "Left-sided weakness",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Difficulty recognizing faces",
    "Reduced insight into deficits",
    "Classic expressive aphasia"
  ],
  answer: [
    "Left-sided weakness",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Difficulty recognizing faces",
    "Reduced insight into deficits"
  ],
  rationale: "The right hemisphere contributes to spatial awareness, facial recognition, emotion, and insight while controlling the left side of the body.",
  takeaway: "Right hemisphere = left body + spatial awareness/neglect/insight."
},

{
  id: "CVA-NGN-368",
  caseId: "CVA-NGN-CASE-139",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should increase the nurse's suspicion for a vertebrobasilar stroke? Select all that apply.",
  choices: [
    "Diplopia",
    "Dysphagia",
    "Dysarthria",
    "Vertigo",
    "Ataxia",
    "Nystagmus"
  ],
  answer: [
    "Diplopia",
    "Dysphagia",
    "Dysarthria",
    "Vertigo",
    "Ataxia",
    "Nystagmus"
  ],
  rationale: "Vertebrobasilar strokes affect the brainstem and cerebellum and can cause diplopia, dysphagia, dysarthria, vertigo, nystagmus, and ataxia.",
  takeaway: "Posterior circulation strokes often present with brainstem and cerebellar symptoms."
},

{
  id: "CVA-NGN-369",
  caseId: "CVA-NGN-CASE-139",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change in the client with a suspected vertebrobasilar stroke requires the most immediate intervention?",
  choices: [
    "The client becomes unable to manage oral secretions.",
    "The client reports persistent dizziness.",
    "The client has an unsteady gait.",
    "The client reports double vision."
  ],
  answer: "The client becomes unable to manage oral secretions.",
  rationale: "Inability to manage secretions indicates impaired swallowing and airway protection. Airway compromise takes priority over other neurologic deficits.",
  takeaway: "Posterior stroke + inability to manage secretions = airway emergency."
},

{
  id: "CVA-NGN-370",
  caseId: "CVA-NGN-CASE-140",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports a sudden severe headache described as the worst headache ever experienced. The client also has vomiting, photophobia, and neck stiffness. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Transient ischemic attack",
    "Anterior cerebral artery ischemia",
    "Chronic hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "Sudden severe headache with neck stiffness and photophobia is characteristic of subarachnoid hemorrhage.",
  takeaway: "Worst headache + meningeal irritation = think SAH."
},

{
  id: "CVA-NGN-371",
  caseId: "CVA-NGN-CASE-140",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The client is prescribed nimodipine on a scheduled basis. Which complication is this medication intended to address?",
  choices: [
    "Cerebral vasospasm",
    "Acute intracranial clot dissolution",
    "Hydrocephalus caused by excess CSF production",
    "Atrial fibrillation"
  ],
  answer: "Cerebral vasospasm",
  rationale: "Nimodipine is included in the course treatment of SAH because cerebral vasospasm is an important delayed complication.",
  takeaway: "Nimodipine is linked to vasospasm management after SAH."
},

{
  id: "CVA-NGN-372",
  caseId: "CVA-NGN-CASE-140",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Six days after the hemorrhage, the client develops new confusion and unilateral weakness. Which complication should the nurse suspect?",
  choices: [
    "Cerebral vasospasm",
    "Normal recovery",
    "Expected medication effect",
    "Resolution of cerebral injury"
  ],
  answer: "Cerebral vasospasm",
  rationale: "Vasospasm is a major concern approximately 3 to 14 days after SAH. New neurologic deficits during this period require immediate evaluation.",
  takeaway: "SAH days 3–14 + new deficit = suspect vasospasm."
},

{
  id: "CVA-NGN-373",
  caseId: "CVA-NGN-CASE-141",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has worsening headache, repeated vomiting, blurred vision, and increasing drowsiness. Which finding should the nurse consider the most important indicator of neurologic deterioration?",
  choices: [
    "Increasing drowsiness",
    "Blurred vision",
    "Headache",
    "Vomiting"
  ],
  answer: "Increasing drowsiness",
  rationale: "Declining level of consciousness is the earliest and most important indicator of worsening neurologic status with rapidly increasing ICP.",
  takeaway: "LOC is the neurologic vital sign to trend closely."
},

{
  id: "CVA-NGN-374",
  caseId: "CVA-NGN-CASE-141",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Which intervention should the nurse anticipate when rapid temporary drainage of excess CSF is required?",
  choices: [
    "External ventricular drain",
    "Thrombolytic infusion",
    "Nimodipine infusion",
    "Carotid endarterectomy"
  ],
  answer: "External ventricular drain",
  rationale: "An EVD provides acute CSF drainage and can be used to manage rapidly progressing hydrocephalus.",
  takeaway: "EVD = acute CSF drainage."
},

{
  id: "CVA-NGN-375",
  caseId: "CVA-NGN-CASE-141",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Complications",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Safety and Infection Control",
  question: "Which findings in a client with an EVD should raise concern for infection? Select all that apply.",
  choices: [
    "Fever",
    "Cloudy CSF",
    "Redness at the insertion site",
    "Altered level of consciousness",
    "Neurologic deterioration",
    "Stable neurologic examination"
  ],
  answer: [
    "Fever",
    "Cloudy CSF",
    "Redness at the insertion site",
    "Altered level of consciousness",
    "Neurologic deterioration"
  ],
  rationale: "Fever, cloudy CSF, insertion-site redness, altered LOC, and neurologic deterioration can indicate infection involving an EVD or shunt.",
  takeaway: "Watch EVD clients for both infection signs and neurologic changes."
},

{
  id: "CVA-NGN-376",
  caseId: "CVA-NGN-CASE-142",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol for elevated ICP has decreasing urine output and worsening renal function. Which action should the nurse anticipate?",
  choices: [
    "Hold mannitol and report the findings according to the treatment plan.",
    "Increase the dose to stimulate urine output.",
    "Administer the next dose early.",
    "Ignore the findings because renal function does not affect mannitol therapy."
  ],
  answer: "Hold mannitol and report the findings according to the treatment plan.",
  rationale: "Renal dysfunction increases the risk associated with mannitol therapy. The course directs monitoring of renal function and holding therapy when renal dysfunction develops.",
  takeaway: "Mannitol requires adequate renal function."
},

{
  id: "CVA-NGN-377",
  caseId: "CVA-NGN-CASE-142",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops crackles, dyspnea, and an increasing oxygen requirement. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expected therapeutic response",
    "Improved cerebral perfusion",
    "Isolated expressive aphasia"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can cause intravascular volume expansion, fluid overload, and pulmonary edema.",
  takeaway: "Hypertonic saline requires close respiratory and fluid-status monitoring."
},

{
  id: "CVA-NGN-378",
  caseId: "CVA-NGN-CASE-143",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a new fixed dilated left pupil and worsening right-sided weakness. Which complication should the nurse suspect?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Subfalcine herniation",
    "Tonsillar herniation"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation can produce an ipsilateral fixed dilated pupil and contralateral weakness.",
  takeaway: "Same-side blown pupil + opposite weakness = uncal herniation."
},

{
  id: "CVA-NGN-379",
  caseId: "CVA-NGN-CASE-143",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's respirations become increasingly irregular and then stop. Which herniation pattern is most concerning?",
  choices: [
    "Tonsillar herniation",
    "Subfalcine herniation",
    "Stable uncal herniation",
    "Resolved cerebral edema"
  ],
  answer: "Tonsillar herniation",
  rationale: "Tonsillar herniation can compress the medulla and vital respiratory centers, producing irregular respirations that may progress to apnea.",
  takeaway: "Tonsillar herniation can rapidly cause respiratory arrest."
},

{
  id: "CVA-NGN-380",
  caseId: "CVA-NGN-CASE-144",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with a recent stroke who has become difficult to arouse and now has a fixed dilated pupil and irregular respirations",
    "A client with stable left-sided neglect who needs assistance with breakfast",
    "A client with stable expressive aphasia who is frustrated with communication",
    "A client with a previous TIA who needs teaching about hypertension"
  ],
  answer: "A client with a recent stroke who has become difficult to arouse and now has a fixed dilated pupil and irregular respirations",
  rationale: "Declining LOC, a fixed dilated pupil, and irregular respirations indicate severe increased ICP and possible brain herniation. This is an immediate life-threatening neurologic emergency.",
  takeaway: "Declining LOC + pupil change + abnormal breathing = immediate escalation."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-381 through CVA-NGN-400

{
  id: "CVA-NGN-381",
  caseId: "CVA-NGN-CASE-145",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Assessment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden right arm weakness and difficulty speaking. The spouse reports the symptoms began 45 minutes ago. The client's airway is patent, oxygen saturation is 98%, and glucose is 106 mg/dL. Which action should the nurse anticipate next?",
  choices: [
    "Perform a rapid neurologic assessment and prepare for noncontrast head CT.",
    "Give the client oral fluids.",
    "Wait to determine whether the symptoms resolve.",
    "Begin rehabilitation exercises."
  ],
  answer: "Perform a rapid neurologic assessment and prepare for noncontrast head CT.",
  rationale: "After ABCs, oxygenation, glucose, and last-known-well are addressed, rapid neurologic assessment and noncontrast CT are priorities.",
  takeaway: "Stable acute stroke client → rapid neuro assessment and CT."
},

{
  id: "CVA-NGN-382",
  caseId: "CVA-NGN-CASE-145",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The noncontrast head CT shows no hemorrhage and no obvious infarction. The neurologic deficits remain. Which interpretation is most appropriate?",
  choices: [
    "A hyperacute ischemic stroke may still be present.",
    "The CT completely excludes stroke.",
    "The client definitely experienced a TIA.",
    "The neurologic deficits are not clinically significant."
  ],
  answer: "A hyperacute ischemic stroke may still be present.",
  rationale: "Hyperacute ischemic changes may not yet be visible on noncontrast CT. The initial CT is especially important for identifying hemorrhage.",
  takeaway: "Early ischemic stroke can have a CT without obvious infarction."
},

{
  id: "CVA-NGN-383",
  caseId: "CVA-NGN-CASE-145",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The client has no active bleeding or recent surgery, coagulation studies are acceptable, and blood pressure is 180/104 mmHg. Which interpretation is most appropriate based on the course criteria?",
  choices: [
    "The findings support continued evaluation for thrombolytic therapy.",
    "The blood pressure automatically excludes thrombolytic therapy.",
    "The client is outside the treatment window.",
    "Thrombolytic therapy can be given even if hemorrhage later appears on CT."
  ],
  answer: "The findings support continued evaluation for thrombolytic therapy.",
  rationale: "The course criteria include no hemorrhage on CT, last-known-well within 4.5 hours, blood pressure below 185/110 mmHg, no active bleeding, and acceptable coagulation studies.",
  takeaway: "Thrombolytic eligibility requires assessment of time, CT, BP, bleeding, and coagulation."
},

{
  id: "CVA-NGN-384",
  caseId: "CVA-NGN-CASE-146",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "During thrombolytic therapy, the client suddenly reports a severe headache and begins vomiting. The neurologic examination also worsens. Which action should the nurse take first?",
  choices: [
    "Stop the thrombolytic infusion and immediately escalate care.",
    "Increase the infusion rate.",
    "Give oral fluids.",
    "Wait until the scheduled neurologic assessment."
  ],
  answer: "Stop the thrombolytic infusion and immediately escalate care.",
  rationale: "Severe headache, vomiting, and neurologic deterioration during thrombolytic therapy are warning signs of possible intracranial hemorrhage.",
  takeaway: "Possible hemorrhage during thrombolysis = stop therapy and escalate."
},

{
  id: "CVA-NGN-385",
  caseId: "CVA-NGN-CASE-146",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Complications",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings during thrombolytic therapy require immediate attention for possible bleeding? Select all that apply.",
  choices: [
    "Sudden severe headache",
    "Sudden blood pressure increase",
    "Nausea and vomiting",
    "New neurologic decline",
    "Unexpected bleeding",
    "Improved speech"
  ],
  answer: [
    "Sudden severe headache",
    "Sudden blood pressure increase",
    "Nausea and vomiting",
    "New neurologic decline",
    "Unexpected bleeding"
  ],
  rationale: "The course identifies severe headache, sudden BP elevation, nausea or vomiting, neurologic decline, and bleeding as warning signs requiring immediate action during thrombolytic therapy.",
  takeaway: "Know the warning signs of hemorrhage during thrombolytic treatment."
},

{
  id: "CVA-NGN-386",
  caseId: "CVA-NGN-CASE-147",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops right face and arm weakness greater than right leg weakness. The client understands questions but cannot produce complete sentences. Which combination best explains the findings?",
  choices: [
    "Left MCA stroke with Broca aphasia",
    "Right MCA stroke with Wernicke aphasia",
    "Left ACA stroke with neglect",
    "PCA stroke with cerebellar dysfunction"
  ],
  answer: "Left MCA stroke with Broca aphasia",
  rationale: "The left MCA supplies areas responsible for contralateral face and arm motor function and, in the dominant hemisphere, Broca language function.",
  takeaway: "Left MCA can combine right face/arm weakness with expressive aphasia."
},

{
  id: "CVA-NGN-387",
  caseId: "CVA-NGN-CASE-147",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aphasia",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client speaks rapidly and fluently but uses incorrect words and cannot understand the nurse's instructions. Which deficit should the nurse identify?",
  choices: [
    "Wernicke aphasia",
    "Broca aphasia",
    "Ataxia",
    "Neglect"
  ],
  answer: "Wernicke aphasia",
  rationale: "Wernicke aphasia causes impaired language comprehension with fluent but inappropriate or meaningless speech.",
  takeaway: "Fluent speech does not equal intact language comprehension."
},

{
  id: "CVA-NGN-388",
  caseId: "CVA-NGN-CASE-148",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops severe left leg weakness, mild left arm weakness, urinary incontinence, and sudden behavioral changes. Which vascular territory is most consistent with these findings?",
  choices: [
    "Right anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Vertebrobasilar circulation"
  ],
  answer: "Right anterior cerebral artery",
  rationale: "ACA strokes produce contralateral leg-predominant weakness and may cause frontal behavioral changes and urinary incontinence.",
  takeaway: "ACA = leg > arm weakness with frontal-lobe findings."
},

{
  id: "CVA-NGN-389",
  caseId: "CVA-NGN-CASE-148",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops a visual field defect, memory impairment, and difficulty recognizing visual objects. Extremity strength remains normal. Which artery should the nurse suspect?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior communicating artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. PCA stroke can cause visual field deficits, visual recognition problems, and memory impairment.",
  takeaway: "PCA strokes often affect vision and memory more than strength."
},

{
  id: "CVA-NGN-390",
  caseId: "CVA-NGN-CASE-149",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with vertigo, diplopia, dysarthria, and severe ataxia suddenly becomes unable to swallow secretions. Which problem should the nurse prioritize?",
  choices: [
    "Impaired airway protection",
    "Visual impairment",
    "Impaired mobility",
    "Communication difficulty"
  ],
  answer: "Impaired airway protection",
  rationale: "Dysphagia with inability to manage secretions creates an immediate aspiration and airway risk.",
  takeaway: "Airway takes priority when posterior stroke impairs swallowing."
},

{
  id: "CVA-NGN-391",
  caseId: "CVA-NGN-CASE-149",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The same client becomes less responsive and develops irregular respirations. Which interpretation is most appropriate?",
  choices: [
    "Worsening brainstem involvement may be affecting vital respiratory centers.",
    "The client is demonstrating normal fatigue.",
    "The cerebellar symptoms are resolving.",
    "The findings indicate improved cerebral circulation."
  ],
  answer: "Worsening brainstem involvement may be affecting vital respiratory centers.",
  rationale: "The vertebrobasilar circulation supplies the brainstem. Declining LOC and abnormal respirations suggest potentially life-threatening brainstem involvement.",
  takeaway: "Posterior stroke can threaten vital brainstem functions."
},

{
  id: "CVA-NGN-392",
  caseId: "CVA-NGN-CASE-150",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse recognize as early manifestations of increasing ICP? Select all that apply.",
  choices: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache",
    "Severe hypertension with bradycardia"
  ],
  answer: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache"
  ],
  rationale: "Early ICP manifestations include declining LOC, restlessness, irritability, confusion, worsening headache, nausea or vomiting, and speech changes. Severe hypertension with bradycardia is a late finding.",
  takeaway: "Early ICP changes are often neurologic and behavioral."
},

{
  id: "CVA-NGN-393",
  caseId: "CVA-NGN-CASE-150",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change should concern the nurse most in a client being monitored for increasing ICP?",
  choices: [
    "The client becomes progressively harder to arouse.",
    "The client reports a mild headache.",
    "The client asks to dim the lights.",
    "The client reports feeling tired."
  ],
  answer: "The client becomes progressively harder to arouse.",
  rationale: "Declining level of consciousness is the earliest and most important indicator of worsening neurologic status associated with increasing ICP.",
  takeaway: "A changing LOC is a major neurologic warning sign."
},

{
  id: "CVA-NGN-394",
  caseId: "CVA-NGN-CASE-151",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's blood pressure is 210/60 mmHg, heart rate is 40/min, and respirations are irregular. Which conclusion should the nurse make?",
  choices: [
    "The client is demonstrating Cushing triad from severe increased ICP.",
    "The client is demonstrating an early uncomplicated stroke finding.",
    "The client's cerebral perfusion is improving.",
    "The client has normal age-related vital signs."
  ],
  answer: "The client is demonstrating Cushing triad from severe increased ICP.",
  rationale: "Cushing triad consists of severe hypertension with widened pulse pressure, bradycardia, and irregular respirations and is a late sign of increased ICP.",
  takeaway: "Cushing triad = hypertension/widened pulse pressure + bradycardia + irregular respirations."
},

{
  id: "CVA-NGN-395",
  caseId: "CVA-NGN-CASE-151",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client's right pupil becomes fixed and dilated while left-sided weakness worsens. Which complication should the nurse suspect?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III on the same side, producing a fixed dilated pupil, while motor pathway compression causes contralateral weakness.",
  takeaway: "Ipsilateral blown pupil + contralateral weakness = uncal herniation."
},

{
  id: "CVA-NGN-396",
  caseId: "CVA-NGN-CASE-152",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions should the nurse include in the care of a client with increased ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Maintain the head in a neutral midline position.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation.",
    "Cluster multiple stimulating procedures together."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Maintain the head in a neutral midline position.",
    "Avoid excessive neck flexion.",
    "Avoid excessive hip flexion.",
    "Minimize unnecessary stimulation."
  ],
  rationale: "These interventions promote venous drainage and help prevent further increases in ICP. Excessive stimulation and clustering of care should be avoided.",
  takeaway: "Promote venous drainage and minimize ICP-provoking stimulation."
},

{
  id: "CVA-NGN-397",
  caseId: "CVA-NGN-CASE-152",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "The client requires suctioning because airway secretions cannot be cleared independently. Which action should the nurse include?",
  choices: [
    "Hyperoxygenate before and after suctioning.",
    "Suction continuously for an extended period.",
    "Lower the head of the bed and flex the neck.",
    "Perform repeated suction passes without allowing recovery."
  ],
  answer: "Hyperoxygenate before and after suctioning.",
  rationale: "Suctioning can cause hypoxia and transient increases in ICP. Hyperoxygenation before and after necessary suctioning helps reduce secondary injury.",
  takeaway: "When suctioning is necessary, protect oxygenation."
},

{
  id: "CVA-NGN-398",
  caseId: "CVA-NGN-CASE-153",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings or measurements are important when monitoring a client receiving mannitol? Select all that apply.",
  choices: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status",
    "Hair texture"
  ],
  answer: [
    "Serum osmolarity",
    "Renal function",
    "Electrolytes",
    "Intake and output",
    "Neurologic status"
  ],
  rationale: "Mannitol is an osmotic diuretic. Monitoring includes serum osmolarity, electrolytes, renal function, fluid balance, and neurologic response.",
  takeaway: "Mannitol requires close osmolarity, renal, electrolyte, fluid, and neurologic monitoring."
},

{
  id: "CVA-NGN-399",
  caseId: "CVA-NGN-CASE-153",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops new crackles, dyspnea, and increasing oxygen requirements. Which action is most appropriate?",
  choices: [
    "Recognize possible fluid overload or pulmonary edema and immediately report the change.",
    "Increase the infusion rate.",
    "Document the findings as an expected response.",
    "Encourage additional oral fluids."
  ],
  answer: "Recognize possible fluid overload or pulmonary edema and immediately report the change.",
  rationale: "Hypertonic saline can cause fluid overload and pulmonary edema. New respiratory deterioration requires prompt recognition and escalation.",
  takeaway: "Respiratory deterioration during hypertonic saline therapy is a red flag."
},

{
  id: "CVA-NGN-400",
  caseId: "CVA-NGN-CASE-154",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with increased ICP who develops a new fixed pupil, decerebrate posturing, and irregular respirations",
    "A client with an MCA stroke who has unchanged expressive aphasia",
    "A client with an ACA stroke who has unchanged leg weakness",
    "A client with a PCA stroke who has an unchanged visual field deficit"
  ],
  answer: "A client with increased ICP who develops a new fixed pupil, decerebrate posturing, and irregular respirations",
  rationale: "A fixed pupil, decerebrate posturing, and irregular respirations are late signs of severe intracranial hypertension and possible brain herniation. This client has an immediate threat to life.",
  takeaway: "Herniation signs require immediate assessment and intervention."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-401 through CVA-NGN-420

{
  id: "CVA-NGN-401",
  caseId: "CVA-NGN-CASE-155",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left facial droop and left arm weakness while talking with family. The nurse confirms a patent airway, normal respirations, and oxygen saturation of 97%. Which information should the nurse obtain next?",
  choices: [
    "The exact time the client was last known neurologically normal",
    "The client's usual bedtime",
    "The client's most recent meal",
    "The client's preferred rehabilitation facility"
  ],
  answer: "The exact time the client was last known neurologically normal",
  rationale: "After ABCs are stabilized, determining the exact last-known-well time is a priority because acute stroke treatment decisions are time sensitive.",
  takeaway: "Stable ABCs → establish last-known-well."
},

{
  id: "CVA-NGN-402",
  caseId: "CVA-NGN-CASE-155",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's last-known-well was 30 minutes ago. Which bedside test should the nurse prioritize while the acute stroke evaluation continues?",
  choices: [
    "Blood glucose",
    "Stool occult blood",
    "Urine specific gravity",
    "Visual acuity screening only"
  ],
  answer: "Blood glucose",
  rationale: "Hypoglycemia can mimic acute stroke and should be rapidly identified during the initial stroke assessment.",
  takeaway: "Check glucose early in every suspected acute stroke."
},

{
  id: "CVA-NGN-403",
  caseId: "CVA-NGN-CASE-155",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Assessment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which actions belong in the rapid assessment of a client with suspected acute stroke? Select all that apply.",
  choices: [
    "Assess airway, breathing, and circulation.",
    "Determine exact last-known-well.",
    "Check for hypoglycemia and hypoxia.",
    "Perform a rapid neurologic assessment including NIHSS.",
    "Prepare for noncontrast head CT.",
    "Delay evaluation until the neurologic deficits have been present for several hours."
  ],
  answer: [
    "Assess airway, breathing, and circulation.",
    "Determine exact last-known-well.",
    "Check for hypoglycemia and hypoxia.",
    "Perform a rapid neurologic assessment including NIHSS.",
    "Prepare for noncontrast head CT."
  ],
  rationale: "The course sequence emphasizes ABCs, last-known-well, assessment for hypoglycemia and hypoxia, rapid neurologic examination with NIHSS, and noncontrast head CT.",
  takeaway: "Stroke assessment is rapid, organized, and time sensitive."
},

{
  id: "CVA-NGN-404",
  caseId: "CVA-NGN-CASE-156",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which functions are assessed as part of the NIH Stroke Scale? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Motor function of the arms and legs",
    "Language and dysarthria",
    "Neglect"
  ],
  answer: [
    "Level of consciousness",
    "Gaze and visual fields",
    "Facial movement",
    "Motor function of the arms and legs",
    "Language and dysarthria",
    "Neglect"
  ],
  rationale: "The NIHSS evaluates multiple neurologic domains including LOC, gaze, visual fields, facial palsy, motor function, sensory function, language, dysarthria, and neglect.",
  takeaway: "NIHSS provides a structured assessment of stroke-related neurologic deficits."
},

{
  id: "CVA-NGN-405",
  caseId: "CVA-NGN-CASE-156",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client's NIHSS score increases from 6 to 13 during serial assessments. Which nursing interpretation is most appropriate?",
  choices: [
    "The client's neurologic condition has worsened and requires immediate escalation.",
    "The client's neurologic status has improved.",
    "The change is expected and requires no action.",
    "The score should only be compared at discharge."
  ],
  answer: "The client's neurologic condition has worsened and requires immediate escalation.",
  rationale: "NIHSS scores should be trended. A significant increase indicates worsening neurologic deficits and requires prompt reassessment and escalation.",
  takeaway: "Trend NIHSS—an increasing score signals deterioration."
},

{
  id: "CVA-NGN-406",
  caseId: "CVA-NGN-CASE-157",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has left face and arm weakness greater than leg weakness, left sensory loss, and severe left-sided neglect. Which vascular territory is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "A right MCA stroke can cause contralateral face and arm weakness and sensory loss along with neglect from nondominant hemisphere involvement.",
  takeaway: "Left face/arm deficits + neglect = right MCA."
},

{
  id: "CVA-NGN-407",
  caseId: "CVA-NGN-CASE-157",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neglect",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safety and Infection Control",
  question: "The client repeatedly attempts to get out of bed without recognizing the weak left side. Which nursing concern is the priority?",
  choices: [
    "Risk for injury related to neglect and impaired awareness",
    "Impaired verbal communication",
    "Altered urinary elimination",
    "Impaired visual acuity only"
  ],
  answer: "Risk for injury related to neglect and impaired awareness",
  rationale: "Right-hemisphere injury can impair awareness of deficits. A client who does not recognize weakness may attempt unsafe activities and is at high risk for falls and injury.",
  takeaway: "Neglect plus poor insight creates a major safety risk."
},

{
  id: "CVA-NGN-408",
  caseId: "CVA-NGN-CASE-158",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops right leg weakness greater than right arm weakness, urinary incontinence, and new disinhibited behavior. Which vascular territory should the nurse suspect?",
  choices: [
    "Left anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Vertebrobasilar circulation"
  ],
  answer: "Left anterior cerebral artery",
  rationale: "ACA stroke can produce contralateral leg-predominant weakness along with frontal-lobe behavioral changes and possible urinary incontinence.",
  takeaway: "ACA = opposite leg weakness plus frontal behavioral changes."
},

{
  id: "CVA-NGN-409",
  caseId: "CVA-NGN-CASE-159",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has a new visual field deficit and memory impairment but has normal extremity strength and clear speech. Which vascular territory is most consistent with these findings?",
  choices: [
    "Posterior cerebral artery",
    "Middle cerebral artery",
    "Anterior cerebral artery",
    "Anterior communicating artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "PCA stroke commonly affects occipital and inferior temporal structures, producing visual and memory deficits without necessarily causing major motor weakness.",
  takeaway: "Vision and memory deficits can point to the PCA."
},

{
  id: "CVA-NGN-410",
  caseId: "CVA-NGN-CASE-160",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden vertigo, diplopia, nystagmus, dysarthria, and severe gait ataxia. Arm and leg strength are equal bilaterally. Which conclusion is most appropriate?",
  choices: [
    "The findings are concerning for vertebrobasilar stroke despite preserved strength.",
    "Stroke is excluded because extremity strength is normal.",
    "The symptoms indicate only a visual problem.",
    "The findings are typical of an isolated ACA stroke."
  ],
  answer: "The findings are concerning for vertebrobasilar stroke despite preserved strength.",
  rationale: "Posterior circulation strokes may primarily affect brainstem and cerebellar functions and can occur without prominent unilateral motor weakness.",
  takeaway: "Normal strength does not rule out posterior circulation stroke."
},

{
  id: "CVA-NGN-411",
  caseId: "CVA-NGN-CASE-160",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client begins choking on secretions and cannot swallow. Which nursing action is the priority?",
  choices: [
    "Maintain NPO status and protect the airway.",
    "Give water to clear the secretions.",
    "Administer oral medications immediately.",
    "Encourage the client to use a straw."
  ],
  answer: "Maintain NPO status and protect the airway.",
  rationale: "Dysphagia and inability to manage secretions indicate impaired airway protection and high aspiration risk.",
  takeaway: "Posterior stroke with dysphagia requires immediate airway protection."
},

{
  id: "CVA-NGN-412",
  caseId: "CVA-NGN-CASE-161",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe hypertension develops headache, vomiting, unilateral weakness, and decreasing level of consciousness. CT shows hyperdense blood within the basal ganglia. Which condition should the nurse identify?",
  choices: [
    "Intracerebral hemorrhage",
    "Thrombotic ischemic stroke",
    "Transient ischemic attack",
    "Posterior cerebral artery ischemia"
  ],
  answer: "Intracerebral hemorrhage",
  rationale: "Intracerebral hemorrhage commonly occurs with severe or sustained hypertension and may involve the basal ganglia. Acute blood appears hyperdense on CT.",
  takeaway: "Severe HTN + hyperdense intraparenchymal blood = ICH."
},

{
  id: "CVA-NGN-413",
  caseId: "CVA-NGN-CASE-161",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client becomes increasingly difficult to arouse and begins vomiting repeatedly. Which complication should the nurse suspect?",
  choices: [
    "Increasing ICP from cerebral edema and mass effect",
    "Resolution of the hemorrhage",
    "Improving cerebral perfusion",
    "Expected recovery from stroke"
  ],
  answer: "Increasing ICP from cerebral edema and mass effect",
  rationale: "ICH can cause edema and mass effect. Declining LOC and repeated vomiting are concerning for rising intracranial pressure.",
  takeaway: "ICH can rapidly progress to increased ICP."
},

{
  id: "CVA-NGN-414",
  caseId: "CVA-NGN-CASE-162",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client's ICP is continuously measured at 14 mmHg. How should the nurse interpret this value?",
  choices: [
    "It is within the expected normal range.",
    "It represents severe intracranial hypertension.",
    "It confirms brain herniation.",
    "It requires immediate hyperosmolar therapy."
  ],
  answer: "It is within the expected normal range.",
  rationale: "The course identifies normal ICP as approximately 10 to 15 mmHg.",
  takeaway: "Normal ICP is approximately 10–15 mmHg."
},

{
  id: "CVA-NGN-415",
  caseId: "CVA-NGN-CASE-162",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Several hours later, the client's ICP remains at 24 mmHg. Which interpretation is most appropriate?",
  choices: [
    "The sustained ICP is harmful and requires prompt attention.",
    "The ICP remains within the expected normal range.",
    "The value indicates complete neurologic recovery.",
    "The value is only concerning if the client develops aphasia."
  ],
  answer: "The sustained ICP is harmful and requires prompt attention.",
  rationale: "The course identifies sustained ICP greater than 20 mmHg as harmful.",
  takeaway: "Sustained ICP >20 mmHg is dangerous."
},

{
  id: "CVA-NGN-416",
  caseId: "CVA-NGN-CASE-163",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Imaging demonstrates a midline shift beneath the falx. The client develops new weakness primarily affecting the opposite leg. Which herniation syndrome is most consistent with these findings?",
  choices: [
    "Subfalcine herniation",
    "Uncal herniation",
    "Tonsillar herniation",
    "Central transtentorial herniation"
  ],
  answer: "Subfalcine herniation",
  rationale: "Subfalcine herniation involves displacement beneath the falx and may cause contralateral leg weakness.",
  takeaway: "Midline shift + opposite leg weakness = subfalcine herniation."
},

{
  id: "CVA-NGN-417",
  caseId: "CVA-NGN-CASE-163",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Another client rapidly loses consciousness and develops bilateral abnormal posturing as intracranial pressure increases. Which herniation syndrome should the nurse suspect?",
  choices: [
    "Central or transtentorial herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus",
    "Isolated PCA injury"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "Central or transtentorial herniation is associated with rapid decline in consciousness and bilateral abnormal posturing.",
  takeaway: "Rapid LOC decline + bilateral posturing = central herniation."
},

{
  id: "CVA-NGN-418",
  caseId: "CVA-NGN-CASE-164",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol has increasing serum osmolarity, worsening renal function, and decreasing urine output. Which action should the nurse anticipate?",
  choices: [
    "Hold mannitol and report the findings according to the treatment plan.",
    "Increase the mannitol dose.",
    "Administer the next dose early.",
    "Ignore the findings because they are expected."
  ],
  answer: "Hold mannitol and report the findings according to the treatment plan.",
  rationale: "Elevated serum osmolarity and renal dysfunction increase the risk of complications from mannitol and are reasons to hold therapy according to the course guidance.",
  takeaway: "Mannitol requires safe osmolarity and adequate renal function."
},

{
  id: "CVA-NGN-419",
  caseId: "CVA-NGN-CASE-164",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which assessments are important for a client receiving 3% hypertonic saline for increased ICP? Select all that apply.",
  choices: [
    "Serial serum sodium",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status",
    "Monitoring for pulmonary edema"
  ],
  answer: [
    "Serial serum sodium",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Signs of fluid overload",
    "Respiratory status",
    "Monitoring for pulmonary edema"
  ],
  rationale: "Hypertonic saline requires close monitoring of sodium, neurologic response, and cardiopulmonary fluid status because complications include hypernatremia, fluid overload, and pulmonary edema.",
  takeaway: "3% saline requires sodium, neuro, respiratory, and fluid monitoring."
},

{
  id: "CVA-NGN-420",
  caseId: "CVA-NGN-CASE-165",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client requires immediate intervention?",
  choices: [
    "A client with severe increased ICP who develops apnea after increasingly irregular respirations",
    "A client with stable right-sided weakness and expressive aphasia",
    "A client with stable left-sided neglect who requires fall precautions",
    "A client recovering from a TIA who needs risk-factor education"
  ],
  answer: "A client with severe increased ICP who develops apnea after increasingly irregular respirations",
  rationale: "Progression from irregular respirations to apnea indicates life-threatening compression of respiratory centers and possible tonsillar herniation.",
  takeaway: "Apnea with severe ICP is an immediate life-threatening herniation emergency."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// We are at CVA-NGN-420.
// I recommend finishing this file at CVA-NGN-450.
// That leaves 30 questions after #420.
// This gives the NGN/Priority bank 450 questions and the full CVA module 760 questions.
// Continue inside the existing strokePriorityNgnQuestions array.
// CVA-NGN-421 through CVA-NGN-440

{
  id: "CVA-NGN-421",
  caseId: "CVA-NGN-CASE-166",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden right arm weakness and difficulty speaking that lasted 35 minutes and completely resolved before arrival. Which interpretation is most appropriate?",
  choices: [
    "The episode is consistent with a TIA and requires urgent evaluation.",
    "The symptoms are no longer important because they resolved.",
    "The client can safely wait several weeks for evaluation.",
    "The episode confirms permanent cerebral infarction."
  ],
  answer: "The episode is consistent with a TIA and requires urgent evaluation.",
  rationale: "A TIA causes temporary neurologic dysfunction. Resolution of symptoms does not eliminate the need for urgent evaluation because a TIA can indicate significant cerebrovascular disease and future stroke risk.",
  takeaway: "Resolved neurologic deficits can still represent an urgent TIA."
},

{
  id: "CVA-NGN-422",
  caseId: "CVA-NGN-CASE-166",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which conditions should the nurse recognize as possible contributors to this client's TIA? Select all that apply.",
  choices: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary interruption of cerebral perfusion",
    "Normal cerebral circulation",
    "Improved cerebral oxygen delivery"
  ],
  answer: [
    "Carotid stenosis",
    "Atherosclerotic plaque",
    "Atrial fibrillation",
    "Temporary interruption of cerebral perfusion"
  ],
  rationale: "The course identifies carotid stenosis, plaque, atrial fibrillation, and temporary interruption of cerebral blood flow as important causes or contributors to TIA.",
  takeaway: "TIA should trigger investigation for the source of temporary cerebral ischemia."
},

{
  id: "CVA-NGN-423",
  caseId: "CVA-NGN-CASE-167",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "A client with several stroke risk factors asks which modifiable condition is especially important to control. Which response should the nurse provide?",
  choices: [
    "Hypertension",
    "Age",
    "Family history",
    "Biological sex"
  ],
  answer: "Hypertension",
  rationale: "The course identifies hypertension as the strongest modifiable risk factor for stroke.",
  takeaway: "Blood pressure control is a major component of stroke prevention."
},

{
  id: "CVA-NGN-424",
  caseId: "CVA-NGN-CASE-167",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client with atrial fibrillation asks why the condition increases stroke risk. Which explanation is most accurate?",
  choices: [
    "A clot can form in the heart and travel to a cerebral artery.",
    "Atrial fibrillation directly causes the cerebral ventricles to enlarge.",
    "Atrial fibrillation always causes intracerebral hemorrhage.",
    "Atrial fibrillation directly increases CSF production."
  ],
  answer: "A clot can form in the heart and travel to a cerebral artery.",
  rationale: "Atrial fibrillation is an important cardiac source of emboli. A clot can form in the heart and travel to the cerebral circulation.",
  takeaway: "AFib is strongly associated with embolic stroke."
},

{
  id: "CVA-NGN-425",
  caseId: "CVA-NGN-CASE-168",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has right-sided weakness and sensory loss. The client understands questions and follows commands but becomes frustrated because only a few words can be spoken. Which finding best identifies the language deficit?",
  choices: [
    "Broca expressive aphasia",
    "Wernicke receptive aphasia",
    "Left-sided neglect",
    "Visual agnosia"
  ],
  answer: "Broca expressive aphasia",
  rationale: "Broca aphasia causes difficulty producing language while comprehension may remain relatively intact. Clients are often aware of the deficit and may become frustrated.",
  takeaway: "Understands but cannot speak effectively = Broca aphasia."
},

{
  id: "CVA-NGN-426",
  caseId: "CVA-NGN-CASE-168",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Based on the client's right-sided weakness and Broca aphasia, which cerebral hemisphere is most likely affected?",
  choices: [
    "Left hemisphere",
    "Right hemisphere",
    "Cerebellum only",
    "Brainstem only"
  ],
  answer: "Left hemisphere",
  rationale: "The left hemisphere controls the right side of the body and is dominant for language in most individuals. Left-sided cerebral injury can therefore cause right-sided deficits and aphasia.",
  takeaway: "Right body deficits + aphasia strongly suggest left-hemisphere injury."
},

{
  id: "CVA-NGN-427",
  caseId: "CVA-NGN-CASE-169",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has left-sided weakness, poor awareness of the left side, and difficulty judging spatial relationships. Which hemisphere is most likely affected?",
  choices: [
    "Right hemisphere",
    "Left hemisphere",
    "Cerebellum only",
    "Medulla only"
  ],
  answer: "Right hemisphere",
  rationale: "The right hemisphere controls the left side and contributes to spatial awareness and attention. Right-hemisphere injury commonly causes left-sided neglect.",
  takeaway: "Left weakness + neglect/spatial problems = right hemisphere."
},

{
  id: "CVA-NGN-428",
  caseId: "CVA-NGN-CASE-169",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neglect",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safety and Infection Control",
  question: "During lunch, the client eats all food from the right half of the plate but leaves the left half untouched. Which deficit best explains this behavior?",
  choices: [
    "Left-sided neglect",
    "Expressive aphasia",
    "Receptive aphasia",
    "Right-sided paralysis"
  ],
  answer: "Left-sided neglect",
  rationale: "A client with left-sided neglect may fail to attend to objects or body parts located on the left side.",
  takeaway: "Ignoring one side of the environment is a classic manifestation of neglect."
},

{
  id: "CVA-NGN-429",
  caseId: "CVA-NGN-CASE-170",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden vertigo and diplopia and demonstrates nystagmus, dysarthria, and severe ataxia. Which circulation should the nurse suspect?",
  choices: [
    "Vertebrobasilar circulation",
    "Anterior cerebral artery only",
    "Middle cerebral artery only",
    "Anterior communicating artery only"
  ],
  answer: "Vertebrobasilar circulation",
  rationale: "The vertebrobasilar circulation supplies the brainstem and cerebellum. Deficits may include vertigo, nystagmus, diplopia, dysarthria, dysphagia, and ataxia.",
  takeaway: "Multiple brainstem/cerebellar symptoms suggest posterior circulation stroke."
},

{
  id: "CVA-NGN-430",
  caseId: "CVA-NGN-CASE-170",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change in this client requires the most immediate response?",
  choices: [
    "The client develops dysphagia and cannot manage secretions.",
    "The client continues to report diplopia.",
    "The client remains unable to walk without assistance.",
    "The client continues to experience vertigo."
  ],
  answer: "The client develops dysphagia and cannot manage secretions.",
  rationale: "Inability to manage secretions indicates impaired airway protection and creates an immediate aspiration and respiratory risk.",
  takeaway: "Airway threats outrank other posterior stroke deficits."
},

{
  id: "CVA-NGN-431",
  caseId: "CVA-NGN-CASE-171",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke becomes increasingly restless and confused and reports worsening headache and nausea. Which complication should the nurse suspect?",
  choices: [
    "Increasing intracranial pressure",
    "Improving cerebral perfusion",
    "Resolution of cerebral edema",
    "Normal rehabilitation fatigue"
  ],
  answer: "Increasing intracranial pressure",
  rationale: "Restlessness, confusion, worsening headache, nausea, and changes in LOC are early manifestations of increasing ICP.",
  takeaway: "Recognize early ICP changes before late herniation signs develop."
},

{
  id: "CVA-NGN-432",
  caseId: "CVA-NGN-CASE-171",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which change is the strongest indicator that the client's neurologic condition is worsening?",
  choices: [
    "The client becomes increasingly difficult to arouse.",
    "The client continues to report headache.",
    "The client reports nausea.",
    "The client asks for the room lights to be dimmed."
  ],
  answer: "The client becomes increasingly difficult to arouse.",
  rationale: "Declining level of consciousness is the earliest and most important indicator of worsening neurologic function associated with increased ICP.",
  takeaway: "LOC decline is one of the most important neurologic warning signs."
},

{
  id: "CVA-NGN-433",
  caseId: "CVA-NGN-CASE-172",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP has a blood pressure of 218/64 mmHg, heart rate of 38/min, and irregular respirations. Which finding pattern is present?",
  choices: [
    "Cushing triad",
    "Early uncomplicated ICP elevation",
    "Expected response to mannitol",
    "Normal cerebral compensation"
  ],
  answer: "Cushing triad",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of severe increased ICP.",
  takeaway: "Cushing triad signals severe intracranial hypertension."
},

{
  id: "CVA-NGN-434",
  caseId: "CVA-NGN-CASE-172",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client develops a fixed dilated left pupil and worsening right-sided weakness. Which complication should the nurse suspect?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation can produce an ipsilateral fixed dilated pupil from cranial nerve III compression and contralateral weakness.",
  takeaway: "Left blown pupil + right weakness = left uncal herniation."
},

{
  id: "CVA-NGN-435",
  caseId: "CVA-NGN-CASE-173",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with enlarged cerebral ventricles develops headache, vomiting, blurred vision, and declining consciousness. Which condition best explains the findings?",
  choices: [
    "Hydrocephalus with increasing ICP",
    "Stable ischemic stroke recovery",
    "Isolated expressive aphasia",
    "Resolved cerebral edema"
  ],
  answer: "Hydrocephalus with increasing ICP",
  rationale: "Hydrocephalus involves increased CSF and ventricular enlargement, which can raise ICP and produce headache, vomiting, visual changes, and declining LOC.",
  takeaway: "Ventricular enlargement + LOC decline = hydrocephalus/ICP concern."
},

{
  id: "CVA-NGN-436",
  caseId: "CVA-NGN-CASE-173",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "The provider determines that immediate CSF drainage is required. Which intervention should the nurse anticipate?",
  choices: [
    "External ventricular drain",
    "Thrombolytic therapy",
    "Nimodipine for clot dissolution",
    "Oral anticoagulation"
  ],
  answer: "External ventricular drain",
  rationale: "An EVD or ventriculostomy provides acute drainage of CSF and can be used in rapidly progressing hydrocephalus.",
  takeaway: "Acute hydrocephalus requiring CSF drainage → EVD."
},

{
  id: "CVA-NGN-437",
  caseId: "CVA-NGN-CASE-174",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD Safety",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safety and Infection Control",
  question: "Which findings should the nurse recognize as possible evidence of infection in a client with an EVD? Select all that apply.",
  choices: [
    "Fever",
    "Cloudy CSF",
    "Redness at the insertion site",
    "Altered level of consciousness",
    "Neurologic deterioration",
    "Stable neurologic status without fever"
  ],
  answer: [
    "Fever",
    "Cloudy CSF",
    "Redness at the insertion site",
    "Altered level of consciousness",
    "Neurologic deterioration"
  ],
  rationale: "The course identifies fever, altered LOC, insertion-site redness, cloudy CSF, and neurologic decline as warning signs of drain or shunt infection.",
  takeaway: "EVD infection may present with local, systemic, CSF, and neurologic changes."
},

{
  id: "CVA-NGN-438",
  caseId: "CVA-NGN-CASE-175",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol develops decreasing urine output and worsening renal function. Which action should the nurse anticipate?",
  choices: [
    "Hold mannitol and report the findings according to the treatment plan.",
    "Increase the mannitol dose.",
    "Administer another dose immediately.",
    "Ignore the renal findings because they are unrelated to mannitol."
  ],
  answer: "Hold mannitol and report the findings according to the treatment plan.",
  rationale: "Mannitol can contribute to dehydration, electrolyte shifts, and renal injury. Renal dysfunction is a reason to hold therapy and reassess.",
  takeaway: "Renal deterioration is a red flag during mannitol therapy."
},

{
  id: "CVA-NGN-439",
  caseId: "CVA-NGN-CASE-175",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hyperosmolar Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops new crackles, dyspnea, and increasing oxygen requirements. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expected therapeutic response",
    "Resolution of increased ICP",
    "Isolated electrolyte improvement"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can cause intravascular volume expansion, fluid overload, and pulmonary edema.",
  takeaway: "Respiratory deterioration during 3% saline therapy requires immediate attention."
},

{
  id: "CVA-NGN-440",
  caseId: "CVA-NGN-CASE-176",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with a large stroke who develops a new fixed pupil, decreasing LOC, and irregular respirations",
    "A client with stable expressive aphasia who is using a communication board",
    "A client with stable left-sided neglect who needs assistance with grooming",
    "A client with a previous TIA who is receiving stroke-prevention teaching"
  ],
  answer: "A client with a large stroke who develops a new fixed pupil, decreasing LOC, and irregular respirations",
  rationale: "A fixed pupil, declining LOC, and irregular respirations indicate severe increased ICP and possible brain herniation, creating an immediate threat to life.",
  takeaway: "Herniation signs always require immediate escalation."
},

// FILE: questions/perfusion-cva/stroke-priority-ngn.js
// FINAL QUESTIONS: CVA-NGN-441 through CVA-NGN-450
// This completes strokePriorityNgnQuestions at 450 questions.

{
  id: "CVA-NGN-441",
  caseId: "CVA-NGN-CASE-177",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Acute Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client awakens at 0630 with right-sided weakness and difficulty speaking. The spouse reports the client was normal when they went to sleep at 2230. Which time should the nurse document as the last-known-well?",
  choices: [
    "2230",
    "0630",
    "The time the client arrived at the hospital",
    "The time the nurse completed the neurologic assessment"
  ],
  answer: "2230",
  rationale: "For a wake-up stroke, the last-known-well is the last time the client was known to be neurologically normal, not the time the deficits were discovered.",
  takeaway: "Wake-up stroke: use the last time the client was known normal."
},

{
  id: "CVA-NGN-442",
  caseId: "CVA-NGN-CASE-177",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The client's noncontrast head CT shows no hemorrhage and no obvious established infarction. The right-sided weakness and aphasia continue. Which interpretation is most appropriate?",
  choices: [
    "A hyperacute ischemic stroke may still be present.",
    "Stroke has been completely excluded.",
    "The client definitely experienced a TIA.",
    "The neurologic deficits are unrelated to cerebral perfusion."
  ],
  answer: "A hyperacute ischemic stroke may still be present.",
  rationale: "A noncontrast CT may not show obvious ischemic changes during the hyperacute phase. One major purpose of the initial CT is to identify or exclude intracranial hemorrhage.",
  takeaway: "An early CT without visible infarction does not rule out ischemic stroke."
},

{
  id: "CVA-NGN-443",
  caseId: "CVA-NGN-CASE-178",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Swallow Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with a new stroke asks for water. The client has facial weakness and dysarthria but has not yet completed a swallowing evaluation. Which action should the nurse take?",
  choices: [
    "Keep the client NPO until swallowing safety is evaluated.",
    "Give a small amount of water through a straw.",
    "Allow thin liquids but avoid solid food.",
    "Give oral medications with water before the evaluation."
  ],
  answer: "Keep the client NPO until swallowing safety is evaluated.",
  rationale: "Stroke can impair swallowing and airway protection. Oral food, fluids, and medications should be withheld until swallowing safety is established.",
  takeaway: "New stroke + unknown swallowing ability = NPO until evaluated."
},

{
  id: "CVA-NGN-444",
  caseId: "CVA-NGN-CASE-178",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Swallow Safety",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "During swallowing assessment, the client coughs repeatedly and develops a wet-sounding voice after swallowing. Which problem should the nurse suspect?",
  choices: [
    "Impaired swallowing with aspiration risk",
    "Improved airway protection",
    "Expressive aphasia",
    "Visual neglect"
  ],
  answer: "Impaired swallowing with aspiration risk",
  rationale: "Coughing and a wet voice after swallowing are concerning for impaired swallowing and possible aspiration.",
  takeaway: "Coughing or wet voice after swallowing = aspiration warning."
},

{
  id: "CVA-NGN-445",
  caseId: "CVA-NGN-CASE-179",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large cerebral infarction is being monitored for worsening cerebral edema and increased ICP. Which findings require immediate escalation? Select all that apply.",
  choices: [
    "Progressive decline in level of consciousness",
    "New pupil dilation",
    "Repeated vomiting",
    "New abnormal posturing",
    "Irregular respirations",
    "Stable expressive aphasia present since admission"
  ],
  answer: [
    "Progressive decline in level of consciousness",
    "New pupil dilation",
    "Repeated vomiting",
    "New abnormal posturing",
    "Irregular respirations"
  ],
  rationale: "Declining LOC, pupil changes, vomiting, abnormal posturing, and irregular respirations can indicate worsening intracranial hypertension and possible progression toward herniation.",
  takeaway: "New neurologic deterioration after stroke may signal edema, increased ICP, and herniation."
},

{
  id: "CVA-NGN-446",
  caseId: "CVA-NGN-CASE-179",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client's blood pressure rises to 224/66 mmHg, heart rate falls to 36/min, and respirations become irregular. Which interpretation should guide the nurse's response?",
  choices: [
    "These are late signs of severe increased ICP and possible impending herniation.",
    "These findings indicate improving cerebral perfusion.",
    "These are expected findings during uncomplicated stroke recovery.",
    "These findings indicate that cerebral edema has resolved."
  ],
  answer: "These are late signs of severe increased ICP and possible impending herniation.",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represent Cushing triad, a late and dangerous manifestation of increased ICP.",
  takeaway: "Cushing triad is a neurologic emergency."
},

{
  id: "CVA-NGN-447",
  caseId: "CVA-NGN-CASE-180",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a fixed dilated right pupil, worsening left-sided weakness, and decreasing consciousness. Which complication is most consistent with these findings?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III on the same side, causing an ipsilateral fixed dilated pupil, while compression of motor pathways produces contralateral weakness.",
  takeaway: "Ipsilateral blown pupil + contralateral weakness = uncal herniation."
},

{
  id: "CVA-NGN-448",
  caseId: "CVA-NGN-CASE-180",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The client progresses to irregular respirations followed by apnea. Which complication should the nurse recognize as immediately life threatening?",
  choices: [
    "Tonsillar herniation with compression of vital respiratory centers",
    "Stable subfalcine herniation",
    "Isolated frontal-lobe dysfunction",
    "Resolved intracranial hypertension"
  ],
  answer: "Tonsillar herniation with compression of vital respiratory centers",
  rationale: "Tonsillar herniation involves downward displacement through the foramen magnum and can compress the medulla, causing irregular respirations and apnea.",
  takeaway: "Irregular respirations progressing to apnea = possible tonsillar herniation."
},

{
  id: "CVA-NGN-449",
  caseId: "CVA-NGN-CASE-181",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Priority",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four neurologic clients. Which client should the nurse assess FIRST?",
  choices: [
    "A client with a recent stroke who has a new fixed pupil, decerebrate posturing, and irregular respirations",
    "A client with a right MCA stroke who continues to have unchanged left-sided neglect",
    "A client with a left MCA stroke who continues to have unchanged expressive aphasia",
    "A client with a previous TIA who needs education about blood pressure control"
  ],
  answer: "A client with a recent stroke who has a new fixed pupil, decerebrate posturing, and irregular respirations",
  rationale: "A fixed pupil, decerebrate posturing, and irregular respirations are late signs of severe increased ICP and possible brain herniation. This client has the greatest immediate threat to life.",
  takeaway: "New herniation signs outrank stable neurologic deficits."
},

{
  id: "CVA-NGN-450",
  caseId: "CVA-NGN-CASE-182",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Comprehensive Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client initially presents with sudden unilateral weakness and aphasia. Several hours later, the client develops worsening headache, vomiting, declining consciousness, severe hypertension with widened pulse pressure, bradycardia, a fixed dilated pupil, and irregular respirations. Which sequence best explains the client's deterioration?",
  choices: [
    "Stroke → cerebral edema → increased ICP → brain herniation",
    "Stroke → improved perfusion → decreased ICP → neurologic recovery",
    "Stroke → increased CSF absorption → decreased ICP → herniation",
    "TIA → complete recovery → cerebral edema resolution"
  ],
  answer: "Stroke → cerebral edema → increased ICP → brain herniation",
  rationale: "A large cerebral injury can produce edema. As intracranial compensation fails, ICP rises and can progress from declining LOC and vomiting to Cushing triad, pupil changes, abnormal posturing, respiratory abnormalities, and herniation.",
  takeaway: "Recognize the dangerous progression: stroke → edema → increased ICP → herniation."
}

];
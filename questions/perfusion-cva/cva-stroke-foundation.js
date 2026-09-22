const cvaStrokeFoundationQuestions = [

{
  id: "CVA-STROKE-001",
  caseId: "CVA-STROKE-001",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops an acute interruption of blood flow to an area of the brain. Which process should the nurse understand is occurring?",
  choices: [
    "Decreased cerebral perfusion causes ischemia that can progress to infarction.",
    "Increased cerebral perfusion causes neurons to stop using glucose.",
    "Cerebrospinal fluid immediately replaces the lost arterial blood supply.",
    "Neurons temporarily stop functioning but cannot sustain permanent injury."
  ],
  answer: "Decreased cerebral perfusion causes ischemia that can progress to infarction.",
  rationale: "Stroke results from interruption of cerebral perfusion. Without adequate oxygen and glucose, brain tissue becomes ischemic. If perfusion is not restored, neuronal death and infarction can occur.",
  takeaway: "Stroke = interrupted perfusion → ischemia → infarction."
},

{
  id: "CVA-STROKE-002",
  caseId: "CVA-STROKE-002",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Why is rapid recognition and treatment of an acute stroke a priority?",
  choices: [
    "Neurons can begin dying within minutes of interrupted oxygen and glucose delivery.",
    "The brain can store oxygen for several hours but cannot store sodium.",
    "Cerebral ischemia affects only sensory function during the first several hours.",
    "Permanent neurologic injury occurs only after cerebral edema resolves."
  ],
  answer: "Neurons can begin dying within minutes of interrupted oxygen and glucose delivery.",
  rationale: "The brain requires a continuous supply of oxygen and glucose. Minutes of ischemia can result in irreversible neuronal injury, making rapid recognition and intervention essential.",
  takeaway: "Time is brain."
},

{
  id: "CVA-STROKE-003",
  caseId: "CVA-STROKE-003",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client experiences cerebral ischemia followed by swelling of injured brain tissue. Which complication should the nurse recognize can result from this edema?",
  choices: [
    "Increased intracranial pressure",
    "Decreased intracranial volume",
    "Increased cerebrospinal fluid absorption",
    "Improved cerebral perfusion"
  ],
  answer: "Increased intracranial pressure",
  rationale: "Ischemic and reperfusion injury can cause cerebral edema. Because the skull is a fixed space, increasing brain tissue volume can increase intracranial pressure and contribute to secondary neurologic injury.",
  takeaway: "Stroke-related cerebral edema can increase ICP and worsen neurologic injury."
},

{
  id: "CVA-STROKE-004",
  caseId: "CVA-STROKE-004",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Deterioration",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client admitted after a stroke becomes increasingly difficult to arouse. Which interpretation by the nurse is most important?",
  choices: [
    "A declining level of consciousness may indicate worsening cerebral perfusion or increasing ICP.",
    "The finding is expected because clients normally sleep deeply after a stroke.",
    "The finding indicates that the client's motor deficits are improving.",
    "The change is significant only if unilateral weakness also disappears."
  ],
  answer: "A declining level of consciousness may indicate worsening cerebral perfusion or increasing ICP.",
  rationale: "Declining level of consciousness is an important early sign of neurologic deterioration and may indicate worsening cerebral perfusion, cerebral edema, or increasing intracranial pressure.",
  takeaway: "A declining LOC after stroke is a red flag—do not dismiss it as sleepiness."
},

{
  id: "CVA-STROKE-005",
  caseId: "CVA-STROKE-005",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which mechanism is responsible for an ischemic stroke?",
  choices: [
    "An arterial thrombus or embolus obstructs cerebral blood flow.",
    "A cerebral artery ruptures and releases blood into brain tissue.",
    "Excess cerebrospinal fluid compresses the cerebral ventricles.",
    "A venous obstruction increases blood flow to the cerebral cortex."
  ],
  answer: "An arterial thrombus or embolus obstructs cerebral blood flow.",
  rationale: "An ischemic stroke occurs when an artery supplying the brain is occluded, commonly by a thrombus or embolus, resulting in focal cerebral ischemia.",
  takeaway: "Ischemic stroke = blocked vessel."
},

{
  id: "CVA-STROKE-006",
  caseId: "CVA-STROKE-006",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse is teaching a student about the ischemic penumbra. Which statement demonstrates correct understanding?",
  choices: [
    "It is brain tissue surrounding the infarct that is ischemic but may still be salvageable with rapid reperfusion.",
    "It is brain tissue that has already undergone irreversible cell death.",
    "It is an area of hemorrhage surrounding a ruptured cerebral artery.",
    "It is cerebrospinal fluid that accumulates after an ischemic stroke."
  ],
  answer: "It is brain tissue surrounding the infarct that is ischemic but may still be salvageable with rapid reperfusion.",
  rationale: "The ischemic penumbra is hypoperfused tissue at risk for infarction but potentially salvageable if cerebral blood flow is restored quickly.",
  takeaway: "The goal of rapid reperfusion is to save the penumbra."
},

{
  id: "CVA-STROKE-007",
  caseId: "CVA-STROKE-007",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombotic Stroke",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client's neurologic deficits developed progressively rather than becoming maximal immediately at onset. Which ischemic stroke mechanism is more consistent with this pattern?",
  choices: [
    "Thrombotic stroke",
    "Embolic stroke",
    "Subarachnoid hemorrhage",
    "Intracerebral hemorrhage"
  ],
  answer: "Thrombotic stroke",
  rationale: "The course material describes thrombotic ischemic strokes as potentially having a more gradual onset as a thrombus develops and obstructs cerebral circulation.",
  takeaway: "Thrombotic stroke may have a more gradual onset."
},

{
  id: "CVA-STROKE-008",
  caseId: "CVA-STROKE-008",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Embolic Stroke",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client is speaking normally when suddenly the right arm becomes completely weak and speech becomes impaired. The neurologic deficit is maximal immediately. Which mechanism should the nurse suspect?",
  choices: [
    "Embolic ischemic stroke",
    "Gradually developing thrombotic stroke",
    "Chronic hydrocephalus",
    "Slowly increasing intracranial pressure"
  ],
  answer: "Embolic ischemic stroke",
  rationale: "An embolic stroke characteristically has a sudden onset with neurologic deficits that may be maximal at the beginning because an embolus abruptly blocks cerebral circulation.",
  takeaway: "Embolic stroke = sudden, maximal deficit at onset."
},

{
  id: "CVA-STROKE-009",
  caseId: "CVA-STROKE-009",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives in the emergency department with sudden unilateral weakness and difficulty speaking. Which information is most time-sensitive for the nurse to determine?",
  choices: [
    "The exact time the client was last known well",
    "The client's usual bedtime",
    "The client's last dental examination",
    "The client's preferred pharmacy"
  ],
  answer: "The exact time the client was last known well",
  rationale: "Last-known-well time is essential in acute stroke evaluation because it helps determine eligibility for time-sensitive reperfusion therapies.",
  takeaway: "Suspected stroke? Establish last-known-well immediately."
},

{
  id: "CVA-STROKE-010",
  caseId: "CVA-STROKE-010",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Initial Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden facial droop and unilateral weakness. Which action should the nurse prioritize while the stroke evaluation is initiated?",
  choices: [
    "Assess airway and oxygenation.",
    "Complete a detailed dietary history.",
    "Begin discharge teaching.",
    "Assess long-term rehabilitation needs."
  ],
  answer: "Assess airway and oxygenation.",
  rationale: "Airway and oxygenation remain immediate priorities in suspected stroke. The course emphasizes prioritizing airway and oxygenation while rapidly determining last-known-well and expediting diagnostic evaluation.",
  takeaway: "Stroke care still starts with ABCs."
},

{
  id: "CVA-STROKE-011",
  caseId: "CVA-STROKE-011",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client presents with sudden neurologic deficits. Which bedside assessment should the nurse perform rapidly because an abnormal result can mimic a stroke?",
  choices: [
    "Blood glucose",
    "Serum cholesterol",
    "Hemoglobin A1C",
    "Serum albumin"
  ],
  answer: "Blood glucose",
  rationale: "Hypoglycemia can produce acute neurologic manifestations that resemble stroke. Rapid assessment of blood glucose is therefore part of the initial evaluation of suspected stroke.",
  takeaway: "Check glucose early—hypoglycemia can mimic stroke."
},

{
  id: "CVA-STROKE-012",
  caseId: "CVA-STROKE-012",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Initial Stroke Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which sequence best reflects the priorities emphasized for a client presenting with an acute suspected stroke?",
  choices: [
    "ABCs → determine last-known-well → evaluate glucose/hypoxia → neurologic assessment → noncontrast head CT",
    "Complete health history → provide food → ambulate → obtain CT if symptoms continue",
    "Administer antiplatelet therapy → obtain CT → determine last-known-well → assess airway",
    "Begin rehabilitation assessment → obtain MRI → assess glucose → determine symptom onset"
  ],
  answer: "ABCs → determine last-known-well → evaluate glucose/hypoxia → neurologic assessment → noncontrast head CT",
  rationale: "Acute stroke evaluation prioritizes stabilization, establishing the time of onset or last-known-well, identifying reversible stroke mimics such as hypoglycemia or hypoxia, performing neurologic assessment, and rapidly obtaining brain imaging.",
  takeaway: "Stabilize, establish time, rule out mimics, assess neurologically, and get the CT."
},

{
  id: "CVA-STROKE-013",
  caseId: "CVA-STROKE-013",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "NIHSS",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "The nurse performs a standardized neurologic assessment on a client with suspected acute stroke. What is the primary purpose of the NIH Stroke Scale?",
  choices: [
    "To quantify the severity of neurologic deficits",
    "To determine the client's intracranial pressure directly",
    "To identify the exact cerebral artery using laboratory values",
    "To determine whether the stroke is hemorrhagic without imaging"
  ],
  answer: "To quantify the severity of neurologic deficits",
  rationale: "The NIH Stroke Scale provides a standardized method of assessing and quantifying neurologic deficits in a client with suspected or confirmed stroke.",
  takeaway: "NIHSS measures stroke-related neurologic deficit severity."
},

{
  id: "CVA-STROKE-014",
  caseId: "CVA-STROKE-014",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Diagnostics",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which diagnostic study should the nurse expect to be obtained rapidly for a client with suspected acute stroke?",
  choices: [
    "Noncontrast head CT",
    "Abdominal ultrasound",
    "Chest MRI",
    "Lumbar spine radiograph"
  ],
  answer: "Noncontrast head CT",
  rationale: "A noncontrast head CT is rapidly obtained during acute stroke evaluation, particularly to identify or exclude intracranial hemorrhage before reperfusion treatment decisions are made.",
  takeaway: "Acute stroke → noncontrast head CT."
},

{
  id: "CVA-STROKE-015",
  caseId: "CVA-STROKE-015",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Diagnostics",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has had ischemic stroke symptoms for 2 hours. The noncontrast CT does not yet show an obvious infarct. How should the nurse interpret this result?",
  choices: [
    "Early ischemic changes may not yet be visible on CT, so the scan is especially important for ruling out hemorrhage.",
    "The absence of visible infarction completely rules out ischemic stroke.",
    "The client must have a hemorrhagic stroke.",
    "The neurologic symptoms are most likely unrelated to cerebral perfusion."
  ],
  answer: "Early ischemic changes may not yet be visible on CT, so the scan is especially important for ruling out hemorrhage.",
  rationale: "In the hyperacute period, ischemic changes may not yet be apparent on noncontrast CT. A major immediate purpose of CT is to identify or exclude hemorrhage before reperfusion decisions.",
  takeaway: "A normal-looking early CT does not rule out ischemic stroke."
},

{
  id: "CVA-STROKE-016",
  caseId: "CVA-STROKE-016",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Diagnostics",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which finding on a noncontrast head CT is more consistent with acute intracranial hemorrhage?",
  choices: [
    "A bright hyperdense area",
    "A dark hypodense established infarct",
    "A completely symmetrical ventricular system",
    "Absence of visible ischemic changes during the hyperacute period"
  ],
  answer: "A bright hyperdense area",
  rationale: "Acute blood typically appears hyperdense, or bright, on noncontrast CT. Established ischemic infarction is more likely to appear hypodense, or darker.",
  takeaway: "CT: acute blood is bright; established infarction is darker."
},

{
  id: "CVA-STROKE-017",
  caseId: "CVA-STROKE-017",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Diagnostics",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Why must brain imaging be obtained before administering thrombolytic therapy to a client with suspected ischemic stroke?",
  choices: [
    "A hemorrhagic stroke must be excluded before thrombolytic treatment.",
    "The CT determines whether the client has adequate kidney function.",
    "Thrombolytic therapy is used only when the CT shows a large hemorrhage.",
    "The CT determines the client's exact last-known-well time."
  ],
  answer: "A hemorrhagic stroke must be excluded before thrombolytic treatment.",
  rationale: "Thrombolytic therapy is intended to restore perfusion in eligible ischemic stroke. Administering it when intracranial bleeding is present could worsen hemorrhage, so brain imaging is required to exclude bleeding.",
  takeaway: "No thrombolytic until hemorrhage has been excluded."
},

{
  id: "CVA-STROKE-018",
  caseId: "CVA-STROKE-018",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops room-spinning dizziness, diplopia, slurred speech, and severe gait instability. Strength is equal in all extremities. Which interpretation is most appropriate?",
  choices: [
    "The client may be experiencing a posterior circulation stroke despite preserved strength.",
    "Equal extremity strength rules out stroke.",
    "The symptoms are characteristic only of an anterior cerebral artery stroke.",
    "Stroke is unlikely unless facial droop and arm weakness are present."
  ],
  answer: "The client may be experiencing a posterior circulation stroke despite preserved strength.",
  rationale: "Posterior circulation strokes may present with dizziness, diplopia, dysarthria, dysphagia, and ataxia. Extremity strength can remain normal, which can cause these strokes to be missed.",
  takeaway: "Normal strength does NOT rule out posterior stroke."
},

{
  id: "CVA-STROKE-019",
  caseId: "CVA-STROKE-019",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should increase the nurse's suspicion for a vertebrobasilar stroke? Select all that apply.",
  choices: [
    "Dizziness",
    "Diplopia",
    "Dysarthria",
    "Dysphagia",
    "Dysmetria",
    "Isolated expressive aphasia"
  ],
  answer: [
    "Dizziness",
    "Diplopia",
    "Dysarthria",
    "Dysphagia",
    "Dysmetria"
  ],
  rationale: "The vertebrobasilar circulation supplies the brainstem and cerebellum. The course emphasizes the '5 D's': dizziness, diplopia, dysarthria, dysphagia, and dysmetria as important posterior circulation findings.",
  takeaway: "Vertebrobasilar stroke: remember the 5 D's."
},

{
  id: "CVA-STROKE-020",
  caseId: "CVA-STROKE-020",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly cannot see objects in the same side of the visual field of both eyes. Motor strength and speech remain intact. Which vascular territory should the nurse suspect?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior communicating artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital cortex. PCA stroke commonly produces contralateral homonymous visual field loss while motor strength may remain relatively preserved.",
  takeaway: "PCA = vision can be severely affected while strength remains normal."
},

{
  id: "CVA-STROKE-021",
  caseId: "CVA-STROKE-021",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "After a stroke, a client can clearly see a familiar object but cannot identify what the object is. Which deficit should the nurse document?",
  choices: [
    "Visual agnosia",
    "Expressive aphasia",
    "Dysmetria",
    "Left-sided neglect"
  ],
  answer: "Visual agnosia",
  rationale: "Visual agnosia is the inability to recognize an object despite being able to see it. It can occur with posterior cerebral artery involvement affecting visual association areas.",
  takeaway: "Visual agnosia = sees the object but cannot recognize it."
},

{
  id: "CVA-STROKE-022",
  caseId: "CVA-STROKE-022",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client can write a sentence correctly but is unable to read the sentence back. Which stroke finding does the nurse recognize?",
  choices: [
    "Alexia without agraphia",
    "Broca's aphasia",
    "Wernicke's aphasia",
    "Dysarthria"
  ],
  answer: "Alexia without agraphia",
  rationale: "Alexia without agraphia means the client cannot read but retains the ability to write. The course identifies this as a classic finding that can occur with left PCA involvement.",
  takeaway: "Can write but cannot read = alexia without agraphia."
},

{
  id: "CVA-STROKE-023",
  caseId: "CVA-STROKE-023",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops right leg weakness greater than arm weakness, urinary incontinence, and new behavioral changes. Which artery is most likely affected?",
  choices: [
    "Left anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Right vertebral artery"
  ],
  answer: "Left anterior cerebral artery",
  rationale: "ACA strokes can cause contralateral leg-predominant weakness, personality or behavioral changes, and urinary incontinence due to involvement of medial frontal and parietal regions.",
  takeaway: "ACA = leg weakness + frontal behavior changes + possible incontinence."
},

{
  id: "CVA-STROKE-024",
  caseId: "CVA-STROKE-024",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops left facial droop and left arm weakness greater than leg weakness. The client also ignores objects placed on the left side. Which vascular territory best explains the findings?",
  choices: [
    "Right middle cerebral artery",
    "Left middle cerebral artery",
    "Right anterior cerebral artery",
    "Left posterior cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "MCA stroke commonly causes contralateral face and arm deficits greater than leg deficits. Right-hemisphere involvement may additionally cause left-sided neglect.",
  takeaway: "Right MCA = left face/arm weakness + possible neglect."
},

{
  id: "CVA-STROKE-025",
  caseId: "CVA-STROKE-025",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops right face and arm weakness greater than leg weakness along with aphasia. Which vascular territory is most consistent with these findings?",
  choices: [
    "Left middle cerebral artery",
    "Right middle cerebral artery",
    "Left anterior cerebral artery",
    "Right posterior cerebral artery"
  ],
  answer: "Left middle cerebral artery",
  rationale: "A left MCA stroke produces right-sided face and arm deficits and may affect dominant-hemisphere language centers, resulting in aphasia.",
  takeaway: "Left MCA = right face/arm deficits + aphasia."
},

{
  id: "CVA-STROKE-026",
  caseId: "CVA-STROKE-026",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vessel Territories",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which vessel-to-deficit associations are consistent with the course material? Select all that apply.",
  choices: [
    "ACA — contralateral leg weakness",
    "MCA — contralateral face and arm weakness",
    "PCA — visual field loss",
    "Vertebrobasilar — ataxia and cranial nerve findings",
    "PCA — leg paralysis as the primary hallmark",
    "ACA — diplopia and dysphagia as the primary hallmark"
  ],
  answer: [
    "ACA — contralateral leg weakness",
    "MCA — contralateral face and arm weakness",
    "PCA — visual field loss",
    "Vertebrobasilar — ataxia and cranial nerve findings"
  ],
  rationale: "ACA strokes commonly produce leg-predominant deficits, MCA strokes face and arm deficits, PCA strokes visual abnormalities, and vertebrobasilar strokes brainstem and cerebellar findings.",
  takeaway: "ACA = leg; MCA = face/arm; PCA = vision; vertebrobasilar = brainstem/cerebellum."
},

{
  id: "CVA-STROKE-027",
  caseId: "CVA-STROKE-027",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Circulation Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse identify as requiring immediate stroke evaluation even though no unilateral weakness is present?",
  choices: [
    "A client with sudden diplopia, dysarthria, vertigo, and inability to walk straight",
    "A client with chronic bilateral knee pain while walking",
    "A client with gradually worsening near vision over several years",
    "A client who reports fatigue after working a night shift"
  ],
  answer: "A client with sudden diplopia, dysarthria, vertigo, and inability to walk straight",
  rationale: "Sudden diplopia, dysarthria, vertigo, and ataxia are concerning for posterior circulation stroke. Posterior strokes can occur without the classic unilateral weakness commonly associated with anterior circulation stroke.",
  takeaway: "Do not wait for weakness before recognizing a posterior stroke."
},

{
  id: "CVA-STROKE-028",
  caseId: "CVA-STROKE-028",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vertebrobasilar Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has weakness of the right side of the face but weakness of the left arm and leg. Which location should the nurse consider based on this crossed pattern?",
  choices: [
    "Brainstem involvement in the vertebrobasilar circulation",
    "Isolated occipital lobe involvement",
    "Anterior cerebral artery involvement only",
    "Isolated frontal cortex involvement"
  ],
  answer: "Brainstem involvement in the vertebrobasilar circulation",
  rationale: "The course identifies crossed findings—ipsilateral facial deficits with contralateral body deficits—as an important clue for brainstem and vertebrobasilar involvement.",
  takeaway: "Crossed face/body findings = think brainstem."
},

{
  id: "CVA-STROKE-029",
  caseId: "CVA-STROKE-029",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vertebrobasilar Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client with severe basilar artery ischemia is awake and appears to understand the nurse but cannot move the extremities or speak. Which severe complication should the nurse recognize?",
  choices: [
    "Locked-in syndrome",
    "Broca's aphasia",
    "Visual agnosia",
    "Left-sided neglect"
  ],
  answer: "Locked-in syndrome",
  rationale: "Severe pontine ischemia from basilar artery compromise can produce locked-in syndrome, in which consciousness may be preserved despite profound paralysis and inability to speak.",
  takeaway: "Severe basilar/pontine stroke can cause locked-in syndrome."
},

{
  id: "CVA-STROKE-030",
  caseId: "CVA-STROKE-030",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives 45 minutes after suddenly developing right facial droop, right arm weakness, and difficulty speaking. Airway is patent, oxygenation is adequate, and bedside glucose is normal. Which action should the nurse anticipate next as part of the rapid stroke evaluation?",
  choices: [
    "Expedite neurologic assessment and noncontrast head CT.",
    "Delay imaging until the neurologic deficits have been present for 6 hours.",
    "Administer thrombolytic therapy before obtaining brain imaging.",
    "Provide oral fluids and reassess the client in 1 hour."
  ],
  answer: "Expedite neurologic assessment and noncontrast head CT.",
  rationale: "Once immediate airway, oxygenation, and reversible mimic concerns are addressed, neurologic assessment and rapid noncontrast CT are critical to distinguish hemorrhagic from ischemic stroke and guide time-sensitive treatment decisions.",
  takeaway: "Suspected acute stroke moves rapidly toward neurologic assessment and CT."
},

{
  id: "CVA-STROKE-031",
  caseId: "CVA-STROKE-031",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The emergency nurse is evaluating a client with possible acute stroke. Which data should be obtained or assessed rapidly? Select all that apply.",
  choices: [
    "Airway and oxygenation",
    "Last-known-well time",
    "Blood glucose",
    "Neurologic deficits",
    "Rapid brain imaging",
    "The client's preferred rehabilitation facility"
  ],
  answer: [
    "Airway and oxygenation",
    "Last-known-well time",
    "Blood glucose",
    "Neurologic deficits",
    "Rapid brain imaging"
  ],
  rationale: "Acute stroke evaluation focuses on stabilization, last-known-well, exclusion of reversible mimics such as hypoglycemia or hypoxia, neurologic assessment, and rapid imaging. Rehabilitation planning occurs later.",
  takeaway: "Acute stroke priorities are stabilization, timing, mimics, neurologic assessment, and imaging."
},

{
  id: "CVA-STROKE-032",
  caseId: "CVA-STROKE-032",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is reassessing a hospitalized stroke client. Which change should be reported and escalated most rapidly?",
  choices: [
    "The client is more difficult to awaken than during the previous assessment.",
    "The client continues to have the same right arm weakness.",
    "The client remains frustrated by expressive aphasia.",
    "The client requires assistance when using the unaffected hand."
  ],
  answer: "The client is more difficult to awaken than during the previous assessment.",
  rationale: "A declining level of consciousness is an important indicator of neurologic deterioration and may reflect worsening cerebral perfusion, edema, or increased ICP.",
  takeaway: "A new decline in LOC is more concerning than stable focal deficits."
},

{
  id: "CVA-STROKE-033",
  caseId: "CVA-STROKE-033",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client reports sudden loss of the right visual field in both eyes. Strength is equal bilaterally, speech is clear, and the client can follow commands. Which hypothesis should the nurse prioritize?",
  choices: [
    "Left PCA stroke",
    "Right ACA stroke",
    "Left MCA stroke involving Broca's area",
    "Right MCA stroke involving the motor cortex"
  ],
  answer: "Left PCA stroke",
  rationale: "PCA strokes primarily affect visual processing. A left PCA lesion can produce a right homonymous visual field deficit while motor strength and language remain preserved.",
  takeaway: "Vision-only stroke presentations can still represent an acute CVA."
},

{
  id: "CVA-STROKE-034",
  caseId: "CVA-STROKE-034",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left facial and arm weakness, left-sided neglect, and a visual field deficit. Which stroke location best integrates the assessment findings?",
  choices: [
    "Right MCA territory",
    "Left ACA territory",
    "Left PCA territory",
    "Right ACA territory"
  ],
  answer: "Right MCA territory",
  rationale: "Left-sided motor deficits indicate right cerebral injury. Face and arm weakness and neglect strongly support right MCA involvement, which may also produce homonymous visual field abnormalities.",
  takeaway: "Right MCA can combine left face/arm weakness, neglect, and visual field loss."
},

{
  id: "CVA-STROKE-035",
  caseId: "CVA-STROKE-035",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops right leg weakness, urinary incontinence, and a marked personality change. Which hypothesis best explains the findings?",
  choices: [
    "Left ACA stroke",
    "Right MCA stroke",
    "Left PCA stroke",
    "Vertebrobasilar stroke"
  ],
  answer: "Left ACA stroke",
  rationale: "The ACA territory is associated with contralateral leg-predominant weakness, frontal behavioral or personality changes, and urinary incontinence.",
  takeaway: "Leg + behavior + bladder findings should point you toward ACA."
},

{
  id: "CVA-STROKE-036",
  caseId: "CVA-STROKE-036",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse evaluates a client with sudden vertigo, nystagmus, dysarthria, dysphagia, and severe gait instability. Which finding in the assessment is least useful for excluding stroke?",
  choices: [
    "Equal bilateral hand grasps",
    "Sudden symptom onset",
    "Severe gait instability",
    "Presence of dysphagia"
  ],
  answer: "Equal bilateral hand grasps",
  rationale: "Posterior circulation strokes may occur without significant extremity weakness. Equal hand grasps therefore do not exclude stroke when sudden brainstem and cerebellar symptoms are present.",
  takeaway: "Normal limb strength cannot safely rule out posterior circulation stroke."
},

{
  id: "CVA-STROKE-037",
  caseId: "CVA-STROKE-037",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the emergency nurse assess FIRST?",
  choices: [
    "A client with sudden dysphagia, diplopia, and worsening level of consciousness",
    "A client with stable right arm weakness following a stroke yesterday",
    "A client with chronic memory impairment following a previous PCA stroke",
    "A client with stable expressive aphasia who is requesting assistance"
  ],
  answer: "A client with sudden dysphagia, diplopia, and worsening level of consciousness",
  rationale: "The combination suggests acute posterior circulation or brainstem involvement, and worsening LOC indicates neurologic deterioration. Dysphagia also raises airway and aspiration concerns.",
  takeaway: "Acute brainstem signs + declining LOC = immediate priority."
},

{
  id: "CVA-STROKE-038",
  caseId: "CVA-STROKE-038",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Diagnostics",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which statements about noncontrast head CT in acute stroke are correct? Select all that apply.",
  choices: [
    "It is used rapidly during acute stroke evaluation.",
    "It helps identify intracranial hemorrhage.",
    "Hyperacute ischemic changes may not yet be visible.",
    "Acute blood can appear hyperdense or bright.",
    "An established infarct may appear hypodense or darker.",
    "A normal early CT completely excludes ischemic stroke."
  ],
  answer: [
    "It is used rapidly during acute stroke evaluation.",
    "It helps identify intracranial hemorrhage.",
    "Hyperacute ischemic changes may not yet be visible.",
    "Acute blood can appear hyperdense or bright.",
    "An established infarct may appear hypodense or darker."
  ],
  rationale: "Noncontrast CT is a key acute stroke study because it rapidly evaluates for hemorrhage. Early ischemic stroke may not yet produce visible CT changes, while acute blood is typically bright and established infarction may become darker.",
  takeaway: "CT rules out blood quickly; early ischemia can still hide."
},

{
  id: "CVA-STROKE-039",
  caseId: "CVA-STROKE-039",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client was last known well 1 hour ago and now has right facial droop, right arm paralysis, and aphasia. The airway is patent, oxygen saturation is adequate, and blood glucose is normal. Which action best supports preservation of potentially salvageable brain tissue?",
  choices: [
    "Expedite noncontrast head CT and evaluation for reperfusion therapy.",
    "Observe the client for several hours to determine whether the deficits resolve.",
    "Delay imaging until the infarct becomes visible on CT.",
    "Begin routine rehabilitation exercises before completing diagnostic evaluation."
  ],
  answer: "Expedite noncontrast head CT and evaluation for reperfusion therapy.",
  rationale: "Rapid reperfusion can preserve ischemic penumbra in eligible clients. Imaging must be expedited to exclude hemorrhage and support decisions regarding thrombolysis or thrombectomy.",
  takeaway: "Save the penumbra by moving quickly toward imaging and reperfusion decisions."
},

{
  id: "CVA-STROKE-040",
  caseId: "CVA-STROKE-040",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Recognition",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden neurologic deficits. Which assessment finding should most strongly cause the nurse to suspect neurologic deterioration rather than a stable focal stroke deficit?",
  choices: [
    "Progressive decrease in level of consciousness",
    "Persistent unilateral arm weakness",
    "Persistent expressive aphasia",
    "Stable visual field loss"
  ],
  answer: "Progressive decrease in level of consciousness",
  rationale: "Stable focal deficits may persist after stroke, but progressive decline in level of consciousness is a major warning sign of worsening cerebral perfusion, cerebral edema, or increasing intracranial pressure.",
  takeaway: "Stable deficit is different from deterioration; declining LOC means escalate."
},

{
  id: "CVA-STROKE-041",
  caseId: "CVA-STROKE-041",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client reports sudden right arm weakness and difficulty speaking that lasted 15 minutes and completely resolved before arriving at the hospital. Which condition should the nurse suspect?",
  choices: [
    "Transient ischemic attack",
    "Chronic hydrocephalus",
    "Intracerebral hemorrhage",
    "Increased intracranial pressure"
  ],
  answer: "Transient ischemic attack",
  rationale: "A transient ischemic attack causes temporary focal neurologic dysfunction from cerebral ischemia without persistent neurologic deficit. Symptoms may resolve before the client reaches the hospital.",
  takeaway: "Temporary stroke-like symptoms still require urgent evaluation."
},

{
  id: "CVA-STROKE-042",
  caseId: "CVA-STROKE-042",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client tells the nurse, 'My face drooped and my arm went numb this morning, but everything is normal now, so I don't need to worry.' Which response by the nurse is most appropriate?",
  choices: [
    "These symptoms may represent a TIA and require prompt evaluation because they can warn of a future stroke.",
    "Because the symptoms resolved, permanent cerebral injury is occurring now.",
    "You only need evaluation if the symptoms return and last longer than 24 hours.",
    "Temporary neurologic symptoms are usually caused by fatigue rather than cerebral ischemia."
  ],
  answer: "These symptoms may represent a TIA and require prompt evaluation because they can warn of a future stroke.",
  rationale: "A TIA is an important warning sign of cerebrovascular disease and future stroke risk. Resolution of symptoms does not make the event insignificant.",
  takeaway: "TIA = warning sign, not reassurance."
},

{
  id: "CVA-STROKE-043",
  caseId: "CVA-STROKE-043",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "TIA",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which statement by a client being discharged after evaluation for a TIA indicates correct understanding?",
  choices: [
    "If sudden neurologic symptoms occur again, I should seek emergency care immediately even if they begin improving.",
    "I should wait at least 24 hours before seeking care because most symptoms resolve.",
    "A TIA means I cannot have a future stroke.",
    "I only need emergency care if I lose consciousness."
  ],
  answer: "If sudden neurologic symptoms occur again, I should seek emergency care immediately even if they begin improving.",
  rationale: "Stroke-like symptoms require immediate emergency evaluation even when they begin to improve because a TIA can precede a completed stroke.",
  takeaway: "Never wait for stroke symptoms to become permanent before seeking help."
},

{
  id: "CVA-STROKE-044",
  caseId: "CVA-STROKE-044",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which mechanism causes a hemorrhagic stroke?",
  choices: [
    "A cerebral blood vessel ruptures and bleeding occurs within or around the brain.",
    "A thrombus gradually obstructs a cerebral artery without bleeding.",
    "An embolus temporarily blocks a peripheral artery.",
    "Cerebrospinal fluid production completely stops."
  ],
  answer: "A cerebral blood vessel ruptures and bleeding occurs within or around the brain.",
  rationale: "Hemorrhagic stroke occurs when a cerebral vessel ruptures, allowing blood to accumulate within brain tissue or surrounding spaces.",
  takeaway: "Hemorrhagic stroke = ruptured vessel and bleeding."
},

{
  id: "CVA-STROKE-045",
  caseId: "CVA-STROKE-045",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops a severe headache, vomiting, decreased level of consciousness, and a rapidly worsening neurologic examination. Which type of stroke should the nurse consider?",
  choices: [
    "Hemorrhagic stroke",
    "Stable TIA",
    "Chronic ischemic stroke",
    "Peripheral neuropathy"
  ],
  answer: "Hemorrhagic stroke",
  rationale: "Hemorrhagic strokes may present with severe headache, nausea or vomiting, altered level of consciousness, and rapidly progressive neurologic deterioration because bleeding can increase intracranial pressure.",
  takeaway: "Severe headache + vomiting + declining LOC should raise concern for intracranial bleeding."
},

{
  id: "CVA-STROKE-046",
  caseId: "CVA-STROKE-046",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subarachnoid Hemorrhage",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client suddenly reports, 'This is the worst headache of my life.' The client also develops vomiting and neck stiffness. Which condition should the nurse suspect?",
  choices: [
    "Subarachnoid hemorrhage",
    "Anterior cerebral artery ischemia",
    "Transient ischemic attack",
    "Chronic communicating hydrocephalus"
  ],
  answer: "Subarachnoid hemorrhage",
  rationale: "A sudden severe thunderclap headache described as the worst headache of the client's life is a classic presentation of subarachnoid hemorrhage. Vomiting and meningeal irritation such as neck stiffness may also occur.",
  takeaway: "Thunderclap 'worst headache of my life' = suspect subarachnoid hemorrhage."
},

{
  id: "CVA-STROKE-047",
  caseId: "CVA-STROKE-047",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemorrhagic Stroke",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with suspected stroke has a noncontrast CT showing acute intracranial bleeding. Which prescription should the nurse question?",
  choices: [
    "Administer thrombolytic therapy.",
    "Perform frequent neurologic assessments.",
    "Monitor blood pressure closely.",
    "Maintain airway and oxygenation."
  ],
  answer: "Administer thrombolytic therapy.",
  rationale: "Thrombolytic therapy is used in selected ischemic strokes and is contraindicated when intracranial hemorrhage is present because it can worsen bleeding.",
  takeaway: "Hemorrhage on CT = no thrombolytic therapy."
},

{
  id: "CVA-STROKE-048",
  caseId: "CVA-STROKE-048",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic vs Hemorrhagic",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Why can the nurse not reliably determine whether an acute stroke is ischemic or hemorrhagic based only on unilateral weakness and aphasia?",
  choices: [
    "Both ischemia and hemorrhage can produce focal neurologic deficits, so brain imaging is required.",
    "Only hemorrhagic strokes produce neurologic deficits.",
    "Only ischemic strokes affect cerebral blood vessels.",
    "The two types can be differentiated only by the client's age."
  ],
  answer: "Both ischemia and hemorrhage can produce focal neurologic deficits, so brain imaging is required.",
  rationale: "Both ischemic and hemorrhagic strokes can produce sudden focal neurologic deficits. Imaging is essential because treatment differs substantially between the two types.",
  takeaway: "Symptoms identify stroke; imaging helps identify the type."
},

{
  id: "CVA-STROKE-049",
  caseId: "CVA-STROKE-049",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "SATA",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which factors increase a client's risk for stroke? Select all that apply.",
  choices: [
    "Hypertension",
    "Atrial fibrillation",
    "Diabetes mellitus",
    "Smoking",
    "Hyperlipidemia",
    "Regular blood pressure control"
  ],
  answer: [
    "Hypertension",
    "Atrial fibrillation",
    "Diabetes mellitus",
    "Smoking",
    "Hyperlipidemia"
  ],
  rationale: "Major stroke risk factors include hypertension, atrial fibrillation, diabetes, tobacco use, and hyperlipidemia. Controlling blood pressure reduces rather than increases stroke risk.",
  takeaway: "Stroke prevention focuses heavily on controlling vascular risk factors."
},

{
  id: "CVA-STROKE-050",
  caseId: "CVA-STROKE-050",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Atrial Fibrillation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Why does atrial fibrillation increase the risk for an ischemic stroke?",
  choices: [
    "Blood can pool in the atria, form a thrombus, and embolize to the cerebral circulation.",
    "Atrial fibrillation directly causes cerebral arteries to rupture.",
    "Atrial fibrillation prevents cerebrospinal fluid absorption.",
    "Atrial fibrillation causes permanent cerebral vasodilation."
  ],
  answer: "Blood can pool in the atria, form a thrombus, and embolize to the cerebral circulation.",
  rationale: "Ineffective atrial contraction during atrial fibrillation can promote blood stasis and thrombus formation. A clot can then embolize to a cerebral artery and cause ischemic stroke.",
  takeaway: "AFib → atrial stasis → clot → embolic stroke."
},

{
  id: "CVA-STROKE-051",
  caseId: "CVA-STROKE-051",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Risk Factors",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Evaluate",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which modifiable condition is especially important for the nurse to address when teaching a client about reducing stroke risk?",
  choices: [
    "Hypertension",
    "Age",
    "Family history",
    "Biologic sex"
  ],
  answer: "Hypertension",
  rationale: "Hypertension is a major modifiable risk factor for both ischemic and hemorrhagic stroke. Blood pressure management is therefore a major component of stroke prevention.",
  takeaway: "Blood pressure control is one of the most important modifiable stroke-prevention measures."
},

{
  id: "CVA-STROKE-052",
  caseId: "CVA-STROKE-052",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Recognition",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which client statement indicates correct understanding of stroke warning signs?",
  choices: [
    "Sudden facial drooping, arm weakness, or speech difficulty requires immediate emergency evaluation.",
    "Stroke symptoms usually develop slowly over several days.",
    "I should wait to see whether weakness resolves before seeking care.",
    "A stroke always causes loss of consciousness."
  ],
  answer: "Sudden facial drooping, arm weakness, or speech difficulty requires immediate emergency evaluation.",
  rationale: "Sudden focal neurologic changes such as facial weakness, arm weakness, and speech difficulty are classic stroke warning signs and require immediate emergency evaluation.",
  takeaway: "Sudden neurologic deficit = emergency."
},

{
  id: "CVA-STROKE-053",
  caseId: "CVA-STROKE-053",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Swallowing",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with an acute stroke asks for water. The client has facial weakness and slurred speech. Which action should the nurse take?",
  choices: [
    "Keep the client NPO until swallowing ability has been evaluated.",
    "Give the client water through a straw.",
    "Offer thin liquids in small amounts.",
    "Allow the client to drink while lying flat."
  ],
  answer: "Keep the client NPO until swallowing ability has been evaluated.",
  rationale: "Stroke can impair swallowing and increase aspiration risk. Oral food, fluids, and medications should be withheld until swallowing safety has been evaluated.",
  takeaway: "Acute stroke + possible dysphagia = NPO until swallow screening."
},

{
  id: "CVA-STROKE-054",
  caseId: "CVA-STROKE-054",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Aspiration Prevention",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which complication is the nurse primarily attempting to prevent by performing a swallow screen before giving oral fluids to a client after a stroke?",
  choices: [
    "Aspiration pneumonia",
    "Deep vein thrombosis",
    "Urinary retention",
    "Cerebral vasospasm"
  ],
  answer: "Aspiration pneumonia",
  rationale: "Dysphagia after stroke can allow food, fluid, or secretions to enter the airway. Screening swallowing ability before oral intake helps reduce aspiration and subsequent pneumonia.",
  takeaway: "Swallow screening protects the lungs."
},

{
  id: "CVA-STROKE-055",
  caseId: "CVA-STROKE-055",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing interventions are appropriate during the early care of a client with an acute stroke? Select all that apply.",
  choices: [
    "Perform frequent neurologic assessments.",
    "Maintain airway and oxygenation.",
    "Evaluate swallowing before oral intake.",
    "Monitor for neurologic deterioration.",
    "Implement safety precautions based on identified deficits.",
    "Encourage immediate unassisted ambulation."
  ],
  answer: [
    "Perform frequent neurologic assessments.",
    "Maintain airway and oxygenation.",
    "Evaluate swallowing before oral intake.",
    "Monitor for neurologic deterioration.",
    "Implement safety precautions based on identified deficits."
  ],
  rationale: "Early stroke nursing care focuses on airway and oxygenation, ongoing neurologic assessment, aspiration prevention, recognition of deterioration, and protection from injury. Unassisted ambulation is unsafe when neurologic deficits are present.",
  takeaway: "Protect airway, brain, swallowing, and safety during acute stroke care."
},

{
  id: "CVA-STROKE-056",
  caseId: "CVA-STROKE-056",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Assessment",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which assessment is most useful for detecting neurologic deterioration in a hospitalized client after an acute stroke?",
  choices: [
    "Serial neurologic assessments compared with previous findings",
    "A single neurologic assessment at admission",
    "Daily body weight alone",
    "Weekly assessment of dietary preferences"
  ],
  answer: "Serial neurologic assessments compared with previous findings",
  rationale: "Repeated neurologic assessments allow the nurse to identify changes in level of consciousness, motor function, pupils, speech, and other findings that may indicate deterioration.",
  takeaway: "Trend the neuro exam—change from baseline matters."
},

{
  id: "CVA-STROKE-057",
  caseId: "CVA-STROKE-057",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Neurologic Deterioration",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which changes in a client with a recent stroke should cause the nurse to suspect neurologic deterioration? Select all that apply.",
  choices: [
    "Increasing difficulty arousing the client",
    "New or worsening weakness",
    "New pupillary changes",
    "New vomiting",
    "Worsening headache",
    "Stable expressive aphasia unchanged from admission"
  ],
  answer: [
    "Increasing difficulty arousing the client",
    "New or worsening weakness",
    "New pupillary changes",
    "New vomiting",
    "Worsening headache"
  ],
  rationale: "Changes in level of consciousness, motor function, pupils, headache, and vomiting may indicate worsening cerebral edema, hemorrhage, or increased intracranial pressure. A stable deficit unchanged from baseline is less concerning than a new change.",
  takeaway: "New or worsening neurologic findings matter more than stable deficits."
},

{
  id: "CVA-STROKE-058",
  caseId: "CVA-STROKE-058",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients after stroke. Which client should be assessed FIRST?",
  choices: [
    "A client who was alert 30 minutes ago and is now difficult to arouse",
    "A client with unchanged right arm weakness",
    "A client with stable expressive aphasia",
    "A client who needs assistance repositioning in bed"
  ],
  answer: "A client who was alert 30 minutes ago and is now difficult to arouse",
  rationale: "An acute decline in level of consciousness can indicate worsening cerebral edema, increased intracranial pressure, hemorrhage, or other neurologic deterioration and requires immediate evaluation.",
  takeaway: "A change in LOC is an emergency clue."
},

{
  id: "CVA-STROKE-059",
  caseId: "CVA-STROKE-059",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Ischemic Stroke Treatment",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "What is the primary therapeutic goal of administering an IV thrombolytic to an eligible client with acute ischemic stroke?",
  choices: [
    "Dissolve the obstructing clot and restore cerebral perfusion.",
    "Increase intracranial bleeding to reduce ischemia.",
    "Reduce cerebrospinal fluid production.",
    "Sedate the client until neurologic symptoms resolve."
  ],
  answer: "Dissolve the obstructing clot and restore cerebral perfusion.",
  rationale: "Thrombolytic therapy is intended to lyse the clot causing an eligible acute ischemic stroke and restore blood flow to threatened brain tissue.",
  takeaway: "Thrombolytic therapy aims to reopen the blocked vessel."
},

{
  id: "CVA-STROKE-060",
  caseId: "CVA-STROKE-060",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Before thrombolytic therapy is considered for an acute ischemic stroke, which information is essential?",
  choices: [
    "Last-known-well time and brain imaging showing no intracranial hemorrhage",
    "The client's preferred rehabilitation facility",
    "A documented history of stroke symptoms for at least 24 hours",
    "Confirmation that all neurologic symptoms have resolved"
  ],
  answer: "Last-known-well time and brain imaging showing no intracranial hemorrhage",
  rationale: "Thrombolytic eligibility depends on time-sensitive criteria and exclusion of intracranial hemorrhage. Last-known-well and rapid brain imaging are therefore essential.",
  takeaway: "Thrombolytic decision = TIME + CT + eligibility."
},

{
  id: "CVA-STROKE-061",
  caseId: "CVA-STROKE-061",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving thrombolytic therapy for ischemic stroke suddenly develops a severe headache, vomiting, and worsening neurologic deficits. What should the nurse suspect?",
  choices: [
    "Intracranial hemorrhage",
    "Expected reperfusion symptoms",
    "Improving cerebral perfusion",
    "Transient fatigue"
  ],
  answer: "Intracranial hemorrhage",
  rationale: "Sudden severe headache, vomiting, or neurologic deterioration during or after thrombolytic therapy can indicate intracranial bleeding and requires immediate intervention.",
  takeaway: "After thrombolytic therapy, sudden neuro worsening = suspect bleeding."
},

{
  id: "CVA-STROKE-062",
  caseId: "CVA-STROKE-062",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Thrombolytic Therapy",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which findings after thrombolytic administration should the nurse recognize as possible evidence of bleeding? Select all that apply.",
  choices: [
    "Sudden severe headache",
    "New vomiting",
    "Acute decline in level of consciousness",
    "New neurologic deficits",
    "Unexpected bleeding from invasive sites",
    "Stable weakness unchanged from the initial stroke"
  ],
  answer: [
    "Sudden severe headache",
    "New vomiting",
    "Acute decline in level of consciousness",
    "New neurologic deficits",
    "Unexpected bleeding from invasive sites"
  ],
  rationale: "Thrombolytic therapy increases bleeding risk. Sudden neurologic deterioration, severe headache, vomiting, decreased consciousness, or unexpected bleeding can indicate a serious hemorrhagic complication.",
  takeaway: "Monitor closely for both intracranial and systemic bleeding after thrombolysis."
},

{
  id: "CVA-STROKE-063",
  caseId: "CVA-STROKE-063",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mechanical Thrombectomy",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client has an acute ischemic stroke caused by a large-vessel occlusion. Which treatment may be used to physically remove the clot in an eligible client?",
  choices: [
    "Mechanical thrombectomy",
    "Ventriculoperitoneal shunt",
    "Lumbar puncture",
    "Craniotomy for hematoma evacuation in every case"
  ],
  answer: "Mechanical thrombectomy",
  rationale: "Mechanical thrombectomy is an endovascular procedure used in selected clients with large-vessel occlusion to remove the obstructing thrombus and restore cerebral blood flow.",
  takeaway: "Large-vessel occlusion may be treated with mechanical thrombectomy."
},

{
  id: "CVA-STROKE-064",
  caseId: "CVA-STROKE-064",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mechanical Thrombectomy",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "CT angiography identifies a large proximal cerebral artery occlusion in a client with a disabling acute ischemic stroke. Which treatment should the nurse anticipate may be considered?",
  choices: [
    "Endovascular mechanical thrombectomy",
    "Routine lumbar drainage",
    "Immediate ventriculoperitoneal shunt placement",
    "Treatment only with oral analgesics"
  ],
  answer: "Endovascular mechanical thrombectomy",
  rationale: "Mechanical thrombectomy is a reperfusion strategy for appropriately selected acute ischemic strokes involving large-vessel occlusion.",
  takeaway: "Large-vessel occlusion should trigger consideration of thrombectomy."
},

{
  id: "CVA-STROKE-065",
  caseId: "CVA-STROKE-065",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Reperfusion Therapy",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client presents with a disabling ischemic stroke caused by a large-vessel occlusion. Which statement best reflects the relationship between IV thrombolytic therapy and mechanical thrombectomy?",
  choices: [
    "Eligible clients may be evaluated for both therapies rather than assuming one automatically excludes the other.",
    "Receiving an IV thrombolytic always eliminates the possibility of thrombectomy.",
    "Mechanical thrombectomy is used only for hemorrhagic stroke.",
    "Both treatments must be delayed until neurologic deficits have been present for 24 hours."
  ],
  answer: "Eligible clients may be evaluated for both therapies rather than assuming one automatically excludes the other.",
  rationale: "Acute ischemic stroke treatment is individualized. A client with a large-vessel occlusion may be evaluated for mechanical thrombectomy while also being considered for IV thrombolytic therapy when otherwise eligible.",
  takeaway: "Large-vessel stroke may involve multiple reperfusion strategies."
},

{
  id: "CVA-STROKE-066",
  caseId: "CVA-STROKE-066",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Treatment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which action would create the greatest danger for a client whose stroke type has not yet been identified?",
  choices: [
    "Administering thrombolytic therapy before excluding intracranial hemorrhage",
    "Checking bedside blood glucose",
    "Obtaining the last-known-well time",
    "Performing a neurologic assessment"
  ],
  answer: "Administering thrombolytic therapy before excluding intracranial hemorrhage",
  rationale: "Thrombolytic therapy can worsen intracranial bleeding. Stroke type must be evaluated with imaging before thrombolysis is administered.",
  takeaway: "Never assume ischemic stroke before hemorrhage is excluded."
},

{
  id: "CVA-STROKE-067",
  caseId: "CVA-STROKE-067",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with acute left arm weakness and facial droop. Bedside glucose is 38 mg/dL. Which interpretation should guide the nurse's immediate actions?",
  choices: [
    "Severe hypoglycemia can mimic stroke and requires rapid correction while neurologic findings are reassessed.",
    "The glucose result confirms an ischemic stroke.",
    "The glucose level should be ignored until after thrombolytic therapy.",
    "Hypoglycemia causes only gastrointestinal symptoms and cannot explain neurologic deficits."
  ],
  answer: "Severe hypoglycemia can mimic stroke and requires rapid correction while neurologic findings are reassessed.",
  rationale: "Hypoglycemia can produce focal or generalized neurologic findings that mimic acute stroke. It must be identified and corrected rapidly during stroke evaluation.",
  takeaway: "Stroke symptoms + low glucose = treat the glucose and reassess."
},

{
  id: "CVA-STROKE-068",
  caseId: "CVA-STROKE-068",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client awakens at 6:30 AM with left-sided weakness. The client went to bed neurologically normal at 10:00 PM. Which time should the nurse initially identify as the last-known-well time?",
  choices: [
    "10:00 PM",
    "6:30 AM",
    "The time the client arrives at the hospital",
    "The time the CT scan begins"
  ],
  answer: "10:00 PM",
  rationale: "For a wake-up stroke, last-known-well refers to the last time the client was known to be neurologically normal, which in this case was when the client went to bed at 10:00 PM.",
  takeaway: "Wake-up stroke: last-known-well is when the client was last known normal, not when symptoms were discovered."
},

{
  id: "CVA-STROKE-069",
  caseId: "CVA-STROKE-069",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a recent stroke has a new prescription for oral medication. The client has not yet completed a swallow screen. Which action should the nurse take?",
  choices: [
    "Hold the oral medication until swallowing safety is evaluated and clarify an alternative route if needed.",
    "Crush the medication and mix it with water.",
    "Give the medication with a straw.",
    "Ask the client to swallow the medication quickly."
  ],
  answer: "Hold the oral medication until swallowing safety is evaluated and clarify an alternative route if needed.",
  rationale: "Clients with acute stroke may have dysphagia and aspiration risk. Oral medications should not be administered until swallowing safety has been established.",
  takeaway: "NPO after acute stroke applies to oral medications too."
},

{
  id: "CVA-STROKE-070",
  caseId: "CVA-STROKE-070",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives 50 minutes after sudden onset of right arm weakness and aphasia. Airway and oxygenation are stable, glucose is normal, and the exact last-known-well time is documented. Which action has the highest priority next?",
  choices: [
    "Rapid neurologic assessment and noncontrast head CT",
    "Provide food before additional testing",
    "Wait to determine whether the deficits resolve spontaneously",
    "Begin discharge teaching about stroke prevention"
  ],
  answer: "Rapid neurologic assessment and noncontrast head CT",
  rationale: "After immediate stabilization, glucose assessment, and determination of last-known-well, rapid neurologic assessment and brain imaging are required to distinguish stroke type and determine eligibility for time-sensitive treatment.",
  takeaway: "Acute stroke workflow must move quickly toward CT and treatment decisions."
},

{
  id: "CVA-STROKE-071",
  caseId: "CVA-STROKE-071",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings support immediate activation of an acute stroke evaluation? Select all that apply.",
  choices: [
    "Sudden unilateral facial weakness",
    "Sudden arm weakness",
    "Sudden speech difficulty",
    "Sudden visual field loss",
    "Sudden severe ataxia with diplopia",
    "Chronic unchanged weakness present for several years"
  ],
  answer: [
    "Sudden unilateral facial weakness",
    "Sudden arm weakness",
    "Sudden speech difficulty",
    "Sudden visual field loss",
    "Sudden severe ataxia with diplopia"
  ],
  rationale: "Acute stroke may produce sudden motor, language, visual, or posterior circulation deficits. The key feature is a sudden new neurologic change.",
  takeaway: "Stroke is broader than FAST—sudden vision and balance/brainstem findings matter too."
},

{
  id: "CVA-STROKE-072",
  caseId: "CVA-STROKE-072",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with an acute stroke begins coughing and develops a wet voice after taking a sip of water. Which action should the nurse take FIRST?",
  choices: [
    "Stop oral intake.",
    "Encourage another sip to determine whether coughing continues.",
    "Place the client flat in bed.",
    "Offer a larger amount of water."
  ],
  answer: "Stop oral intake.",
  rationale: "Coughing and a wet voice after swallowing suggest dysphagia and possible aspiration. Oral intake should be stopped immediately and swallowing safety evaluated.",
  takeaway: "Coughing or wet voice with swallowing = stop PO intake."
},

{
  id: "CVA-STROKE-073",
  caseId: "CVA-STROKE-073",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a known ischemic stroke suddenly reports a severe headache and begins vomiting. The nurse notes that the client's level of consciousness has decreased. Which hypothesis should the nurse prioritize?",
  choices: [
    "Acute neurologic deterioration with possible hemorrhage or increasing intracranial pressure",
    "Normal recovery from cerebral ischemia",
    "Expected fatigue following the neurologic examination",
    "Improved cerebral perfusion"
  ],
  answer: "Acute neurologic deterioration with possible hemorrhage or increasing intracranial pressure",
  rationale: "New severe headache, vomiting, and decreased consciousness are warning signs of acute neurologic deterioration and may indicate hemorrhagic transformation, cerebral edema, or increasing ICP.",
  takeaway: "New headache + vomiting + falling LOC after stroke = emergency deterioration."
},

{
  id: "CVA-STROKE-074",
  caseId: "CVA-STROKE-074",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding in a client with an acute stroke should the nurse recognize as the strongest indication of a possible airway protection problem?",
  choices: [
    "Inability to manage oral secretions",
    "Right arm weakness",
    "Expressive aphasia",
    "Visual field loss"
  ],
  answer: "Inability to manage oral secretions",
  rationale: "Difficulty managing secretions suggests impaired swallowing or protective airway reflexes and creates an immediate aspiration and airway risk.",
  takeaway: "When choosing priorities, airway protection outranks stable focal neurologic deficits."
},

{
  id: "CVA-STROKE-075",
  caseId: "CVA-STROKE-075",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is evaluating four findings in a client with suspected acute stroke: sudden aphasia, right arm weakness, blood glucose of 104 mg/dL, and last-known-well 40 minutes ago. Which interpretation is most appropriate?",
  choices: [
    "The findings support rapid continuation of the acute stroke pathway.",
    "The normal glucose rules out stroke.",
    "The client should be observed until symptoms have lasted at least 24 hours.",
    "Aphasia without loss of consciousness makes stroke unlikely."
  ],
  answer: "The findings support rapid continuation of the acute stroke pathway.",
  rationale: "Sudden focal neurologic deficits with normal glucose and a recent last-known-well time support continued rapid stroke evaluation, including neurologic assessment and brain imaging.",
  takeaway: "Normal glucose removes one mimic—it does not remove the stroke concern."
},

{
  id: "CVA-STROKE-076",
  caseId: "CVA-STROKE-076",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A nurse is monitoring a client after reperfusion treatment for ischemic stroke. Which assessments are priorities? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Neurologic deficits",
    "Blood pressure",
    "Signs of bleeding",
    "New severe headache or vomiting",
    "Favorite meal preferences"
  ],
  answer: [
    "Level of consciousness",
    "Neurologic deficits",
    "Blood pressure",
    "Signs of bleeding",
    "New severe headache or vomiting"
  ],
  rationale: "Following reperfusion treatment, the nurse monitors neurologic status, hemodynamic parameters, and evidence of bleeding. New headache, vomiting, or neurologic decline can indicate intracranial hemorrhage.",
  takeaway: "After reperfusion: watch the neuro exam, BP, and bleeding closely."
},

{
  id: "CVA-STROKE-077",
  caseId: "CVA-STROKE-077",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with suspected posterior circulation stroke has dizziness, diplopia, dysphagia, and severe ataxia. Which assessment finding would represent the most concerning progression?",
  choices: [
    "Development of irregular respirations",
    "Continued difficulty walking",
    "Persistent diplopia",
    "Continued dizziness"
  ],
  answer: "Development of irregular respirations",
  rationale: "Posterior circulation stroke can affect the brainstem. Development of an abnormal respiratory pattern suggests progression involving vital respiratory centers and is immediately life-threatening.",
  takeaway: "Posterior stroke becomes highest priority when brainstem vital functions deteriorate."
},

{
  id: "CVA-STROKE-078",
  caseId: "CVA-STROKE-078",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden left leg weakness greater than arm weakness, urinary incontinence, and impaired judgment. Which cue is most useful for distinguishing this pattern from an MCA stroke?",
  choices: [
    "Leg weakness is greater than arm weakness.",
    "The symptoms began suddenly.",
    "The client has unilateral weakness.",
    "The client requires neurologic assessment."
  ],
  answer: "Leg weakness is greater than arm weakness.",
  rationale: "ACA strokes characteristically produce contralateral lower-extremity deficits greater than upper-extremity deficits. MCA strokes more commonly produce face and arm deficits greater than leg deficits.",
  takeaway: "Body distribution helps identify the vascular territory."
},

{
  id: "CVA-STROKE-079",
  caseId: "CVA-STROKE-079",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a left MCA stroke has right arm weakness and expressive aphasia. Two hours later, the nurse finds the client increasingly somnolent and vomiting. Which finding should drive the nurse's priority decision?",
  choices: [
    "The new change in level of consciousness",
    "The existing right arm weakness",
    "The existing expressive aphasia",
    "The location of the original MCA stroke alone"
  ],
  answer: "The new change in level of consciousness",
  rationale: "The right arm weakness and aphasia are established focal deficits. New somnolence and vomiting indicate neurologic deterioration and possible increasing intracranial pressure or hemorrhagic complication.",
  takeaway: "Always distinguish baseline stroke deficits from NEW deterioration."
},

{
  id: "CVA-STROKE-080",
  caseId: "CVA-STROKE-080",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden neurologic deficits. The nurse determines the airway is stable, oxygenation is adequate, glucose is normal, and last-known-well was 55 minutes ago. The neurologic examination confirms a disabling focal deficit. Which action best reflects appropriate clinical judgment?",
  choices: [
    "Rapidly obtain noncontrast brain imaging so stroke type and reperfusion eligibility can be determined.",
    "Wait for the neurologic deficits to become permanent before obtaining imaging.",
    "Give oral aspirin immediately before determining whether intracranial bleeding is present.",
    "Delay further evaluation because the client is currently hemodynamically stable."
  ],
  answer: "Rapidly obtain noncontrast brain imaging so stroke type and reperfusion eligibility can be determined.",
  rationale: "After stabilization and initial evaluation, rapid brain imaging is essential to distinguish ischemic from hemorrhagic stroke and guide time-sensitive treatment decisions.",
  takeaway: "In acute stroke, stability does not mean wait—move quickly toward imaging and definitive treatment."
},

{
  id: "CVA-STROKE-081",
  caseId: "CVA-STROKE-081",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a recent stroke develops worsening headache, repeated vomiting, and increasing drowsiness. Which complication should the nurse suspect?",
  choices: [
    "Increasing intracranial pressure",
    "Improving cerebral perfusion",
    "Resolution of the ischemic penumbra",
    "Expected post-stroke fatigue"
  ],
  answer: "Increasing intracranial pressure",
  rationale: "Worsening headache, vomiting, and decreasing level of consciousness are concerning findings for increasing intracranial pressure and neurologic deterioration.",
  takeaway: "Headache + vomiting + decreasing LOC = suspect rising ICP."
},

{
  id: "CVA-STROKE-082",
  caseId: "CVA-STROKE-082",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which complication should the nurse be most concerned about in a client with post-stroke dysphagia?",
  choices: [
    "Aspiration",
    "Constipation",
    "Urinary frequency",
    "Visual field loss"
  ],
  answer: "Aspiration",
  rationale: "Dysphagia interferes with safe swallowing and can allow food, fluids, medications, or secretions to enter the airway.",
  takeaway: "Dysphagia = aspiration risk."
},

{
  id: "CVA-STROKE-083",
  caseId: "CVA-STROKE-083",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Complications",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which complications should the nurse monitor for after an acute stroke? Select all that apply.",
  choices: [
    "Aspiration pneumonia",
    "Cerebral edema",
    "Increased intracranial pressure",
    "Deep vein thrombosis",
    "Skin breakdown",
    "Improved swallowing without assessment"
  ],
  answer: [
    "Aspiration pneumonia",
    "Cerebral edema",
    "Increased intracranial pressure",
    "Deep vein thrombosis",
    "Skin breakdown"
  ],
  rationale: "Stroke can produce immobility, impaired swallowing, and cerebral edema. These problems increase the risk for aspiration, increased ICP, venous thromboembolism, and pressure injuries.",
  takeaway: "Stroke complications involve both the brain and the effects of immobility and dysphagia."
},

{
  id: "CVA-STROKE-084",
  caseId: "CVA-STROKE-084",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mobility",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client has significant hemiparesis after a stroke. Which complication is the nurse attempting to reduce by implementing mobility and venous thromboembolism prevention measures?",
  choices: [
    "Deep vein thrombosis",
    "Aphasia",
    "Visual agnosia",
    "Cerebral vasospasm"
  ],
  answer: "Deep vein thrombosis",
  rationale: "Reduced mobility after stroke increases venous stasis and the risk for deep vein thrombosis. Appropriate mobility and thrombosis-prevention measures help reduce this risk.",
  takeaway: "Post-stroke immobility increases DVT risk."
},

{
  id: "CVA-STROKE-085",
  caseId: "CVA-STROKE-085",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Safety",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "A client has left-sided neglect and left hemiparesis after a right-hemisphere stroke. Which nursing concern is the priority during mobility?",
  choices: [
    "The client may fail to recognize hazards on the affected side and fall.",
    "The client will automatically develop receptive aphasia.",
    "The client will be unable to recognize all visual information.",
    "The client cannot participate in rehabilitation."
  ],
  answer: "The client may fail to recognize hazards on the affected side and fall.",
  rationale: "Left-sided neglect can cause the client to ignore the affected side of the body and environment. Combined with weakness, this creates a significant safety and fall risk.",
  takeaway: "Neglect + weakness creates a major safety problem."
},

{
  id: "CVA-STROKE-086",
  caseId: "CVA-STROKE-086",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Communication",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "A client with expressive aphasia understands the nurse but becomes frustrated when trying to speak. Which nursing intervention is most appropriate?",
  choices: [
    "Allow extra time for responses and provide alternative methods of communication.",
    "Speak more loudly so the client can understand.",
    "Complete every sentence before the client attempts to answer.",
    "Ask only family members questions about the client's needs."
  ],
  answer: "Allow extra time for responses and provide alternative methods of communication.",
  rationale: "Expressive aphasia affects the ability to produce language rather than necessarily affecting comprehension. The nurse should provide time and alternative communication methods.",
  takeaway: "Expressive aphasia requires patience, not louder speech."
},

{
  id: "CVA-STROKE-087",
  caseId: "CVA-STROKE-087",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Communication",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which communication technique is most appropriate for a client with receptive aphasia?",
  choices: [
    "Use short, simple statements and visual cues.",
    "Give several complex instructions at once.",
    "Assume fluent speech means the client understands.",
    "Speak only with the client's family."
  ],
  answer: "Use short, simple statements and visual cues.",
  rationale: "Receptive aphasia impairs comprehension. Short statements, simple directions, and visual or nonverbal cues can support communication.",
  takeaway: "Receptive aphasia = simplify the message and use visual cues."
},

{
  id: "CVA-STROKE-088",
  caseId: "CVA-STROKE-088",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Rehabilitation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Basic Care and Comfort",
  question: "Which goal best reflects the purpose of rehabilitation following a stroke?",
  choices: [
    "Maximize functional independence and adaptation to remaining deficits.",
    "Guarantee complete reversal of all neurologic injury.",
    "Prevent the client from attempting activities independently.",
    "Eliminate the need for interdisciplinary care."
  ],
  answer: "Maximize functional independence and adaptation to remaining deficits.",
  rationale: "Stroke rehabilitation focuses on maximizing function, independence, safety, and adaptation based on the client's remaining abilities and deficits.",
  takeaway: "Rehabilitation focuses on function and independence."
},

{
  id: "CVA-STROKE-089",
  caseId: "CVA-STROKE-089",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Rehabilitation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "A client has difficulty swallowing after a stroke. Which interdisciplinary team member should the nurse expect to play an important role in evaluating this problem?",
  choices: [
    "Speech-language pathologist",
    "Radiology transporter",
    "Environmental services technician",
    "Hospital billing specialist"
  ],
  answer: "Speech-language pathologist",
  rationale: "Speech-language pathologists evaluate and treat swallowing and communication disorders that commonly occur after stroke.",
  takeaway: "Speech therapy addresses both communication and swallowing."
},

{
  id: "CVA-STROKE-090",
  caseId: "CVA-STROKE-090",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Rehabilitation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "Which interdisciplinary team member primarily helps a stroke client improve mobility, gait, balance, and strength?",
  choices: [
    "Physical therapist",
    "Speech-language pathologist",
    "Dietitian",
    "Pharmacist"
  ],
  answer: "Physical therapist",
  rationale: "Physical therapy focuses on mobility, strength, balance, gait, and physical function after neurologic injury.",
  takeaway: "PT = mobility, gait, strength, and balance."
},

{
  id: "CVA-STROKE-091",
  caseId: "CVA-STROKE-091",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Rehabilitation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "Which interdisciplinary team member helps a stroke client relearn activities such as dressing, grooming, and feeding?",
  choices: [
    "Occupational therapist",
    "Respiratory therapist",
    "Radiology technologist",
    "Laboratory technician"
  ],
  answer: "Occupational therapist",
  rationale: "Occupational therapy focuses on activities of daily living and strategies that help clients regain independence with self-care.",
  takeaway: "OT = activities of daily living and functional independence."
},

{
  id: "CVA-STROKE-092",
  caseId: "CVA-STROKE-092",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Rehabilitation",
  style: "SATA",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "Which disciplines may participate in the rehabilitation of a client following a stroke? Select all that apply.",
  choices: [
    "Nursing",
    "Physical therapy",
    "Occupational therapy",
    "Speech-language pathology",
    "Nutrition services",
    "Only the neurologist"
  ],
  answer: [
    "Nursing",
    "Physical therapy",
    "Occupational therapy",
    "Speech-language pathology",
    "Nutrition services"
  ],
  rationale: "Stroke rehabilitation is interdisciplinary. Nursing and rehabilitation specialists collaborate to address mobility, self-care, swallowing, communication, nutrition, safety, and other functional needs.",
  takeaway: "Stroke recovery requires an interdisciplinary team."
},

{
  id: "CVA-STROKE-093",
  caseId: "CVA-STROKE-093",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Prevention",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which statement by a client with hypertension who recently experienced a stroke indicates a need for further teaching?",
  choices: [
    "If I feel well, I can stop my blood pressure medication.",
    "Controlling my blood pressure can reduce my risk for another stroke.",
    "I should take prescribed medications consistently.",
    "I should continue follow-up care for my vascular risk factors."
  ],
  answer: "If I feel well, I can stop my blood pressure medication.",
  rationale: "Hypertension is an important modifiable stroke risk factor. Antihypertensive medications should be taken as prescribed even when the client feels well.",
  takeaway: "Stroke prevention requires ongoing blood pressure control."
},

{
  id: "CVA-STROKE-094",
  caseId: "CVA-STROKE-094",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Prevention",
  style: "SATA",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Health Promotion and Maintenance",
  question: "Which actions can help reduce a client's risk for another stroke? Select all that apply.",
  choices: [
    "Control hypertension.",
    "Manage diabetes.",
    "Stop smoking.",
    "Manage hyperlipidemia.",
    "Follow prescribed treatment for atrial fibrillation.",
    "Ignore temporary neurologic symptoms if they resolve."
  ],
  answer: [
    "Control hypertension.",
    "Manage diabetes.",
    "Stop smoking.",
    "Manage hyperlipidemia.",
    "Follow prescribed treatment for atrial fibrillation."
  ],
  rationale: "Secondary prevention targets modifiable vascular risk factors such as hypertension, diabetes, tobacco use, dyslipidemia, and atrial fibrillation. Recurrent transient neurologic symptoms require urgent evaluation.",
  takeaway: "Prevent another stroke by aggressively managing modifiable risk factors."
},

{
  id: "CVA-STROKE-095",
  caseId: "CVA-STROKE-095",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Prevention",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with atrial fibrillation asks why medication to reduce clot formation may be prescribed after an ischemic stroke. Which explanation is most appropriate?",
  choices: [
    "Atrial fibrillation can promote atrial thrombus formation that may embolize to the brain.",
    "Atrial fibrillation causes cerebrospinal fluid to accumulate in the ventricles.",
    "The medication permanently reverses all neurologic deficits.",
    "The medication prevents every possible type of intracranial hemorrhage."
  ],
  answer: "Atrial fibrillation can promote atrial thrombus formation that may embolize to the brain.",
  rationale: "Atrial fibrillation promotes blood stasis within the atria and increases the risk of thrombus formation. Embolization of a thrombus can cause an ischemic stroke.",
  takeaway: "AFib treatment helps address an important source of embolic stroke."
},

{
  id: "CVA-STROKE-096",
  caseId: "CVA-STROKE-096",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients. Which client should be assessed FIRST?",
  choices: [
    "A stroke client who has developed new unequal pupils and increasing drowsiness",
    "A stroke client with unchanged left arm weakness",
    "A stroke client practicing communication techniques for expressive aphasia",
    "A stroke client awaiting occupational therapy for dressing practice"
  ],
  answer: "A stroke client who has developed new unequal pupils and increasing drowsiness",
  rationale: "New pupillary abnormalities and decreasing level of consciousness indicate neurologic deterioration and may reflect increasing intracranial pressure or brain herniation.",
  takeaway: "New pupil change + falling LOC = neurologic emergency."
},

{
  id: "CVA-STROKE-097",
  caseId: "CVA-STROKE-097",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a recent stroke suddenly becomes less responsive. Which nursing action is the priority?",
  choices: [
    "Immediately reassess airway, breathing, circulation, and neurologic status.",
    "Document the finding and reassess at the next scheduled neurologic check.",
    "Ask the family whether the client normally sleeps deeply.",
    "Allow the client to rest because fatigue is expected after stroke."
  ],
  answer: "Immediately reassess airway, breathing, circulation, and neurologic status.",
  rationale: "A sudden decline in responsiveness represents an acute change. The nurse should immediately reassess ABCs and neurologic status and escalate the deterioration.",
  takeaway: "Acute LOC change requires immediate reassessment, not watchful waiting."
},

{
  id: "CVA-STROKE-098",
  caseId: "CVA-STROKE-098",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with an acute stroke has the following findings: left facial droop, left arm weakness, left-sided neglect, intact swallowing, and stable level of consciousness. Which nursing problem requires the greatest immediate attention during activity?",
  choices: [
    "Risk for injury related to weakness and neglect",
    "Impaired verbal communication",
    "Risk for aspiration related to documented dysphagia",
    "Decreased intracranial adaptive capacity related to declining consciousness"
  ],
  answer: "Risk for injury related to weakness and neglect",
  rationale: "The client has weakness and neglect, both of which increase fall and injury risk. Swallowing and level of consciousness are currently stable, and no communication deficit is described.",
  takeaway: "Prioritize the problems supported by the actual assessment cues."
},

{
  id: "CVA-STROKE-099",
  caseId: "CVA-STROKE-099",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a stroke has right-sided weakness and expressive aphasia. The nurse notes that the client understands instructions but becomes frustrated while attempting to speak. Which intervention best addresses the client's current communication deficit?",
  choices: [
    "Ask simple questions, allow adequate response time, and provide nonverbal communication options.",
    "Repeat instructions loudly until the client responds verbally.",
    "Assume the client cannot understand and direct all questions to the family.",
    "Ask multiple open-ended questions rapidly to stimulate speech."
  ],
  answer: "Ask simple questions, allow adequate response time, and provide nonverbal communication options.",
  rationale: "Expressive aphasia interferes with speech production while comprehension may remain intact. Communication should preserve the client's participation and allow adequate time for expression.",
  takeaway: "Aphasia does not mean the client has lost intelligence or understanding."
},

{
  id: "CVA-STROKE-100",
  caseId: "CVA-STROKE-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with an acute ischemic stroke initially had stable right-sided weakness. During reassessment, the nurse identifies worsening weakness, vomiting, severe headache, and decreasing level of consciousness. Which action is most appropriate?",
  choices: [
    "Treat the findings as acute neurologic deterioration and escalate care immediately.",
    "Document the findings as expected progression of the original deficit.",
    "Allow the client to sleep and repeat the neurologic assessment in 4 hours.",
    "Begin routine discharge planning."
  ],
  answer: "Treat the findings as acute neurologic deterioration and escalate care immediately.",
  rationale: "Worsening motor deficits combined with severe headache, vomiting, and decreased consciousness suggest a serious complication such as cerebral edema, increased intracranial pressure, or hemorrhage.",
  takeaway: "A worsening neuro exam after stroke is never routine."
},

{
  id: "CVA-STROKE-101",
  caseId: "CVA-STROKE-101",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment findings represent focal neurologic deficits that may occur with stroke? Select all that apply.",
  choices: [
    "Unilateral weakness",
    "Facial droop",
    "Aphasia",
    "Visual field loss",
    "Unilateral sensory loss",
    "Symmetrical muscle strength with no neurologic change"
  ],
  answer: [
    "Unilateral weakness",
    "Facial droop",
    "Aphasia",
    "Visual field loss",
    "Unilateral sensory loss"
  ],
  rationale: "Stroke can produce focal motor, sensory, language, and visual deficits depending on the affected cerebral territory.",
  takeaway: "Stroke deficits reflect the location of injured brain tissue."
},

{
  id: "CVA-STROKE-102",
  caseId: "CVA-STROKE-102",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse assesses a client with sudden right-sided weakness and aphasia. Which additional information would have the greatest immediate impact on time-sensitive treatment decisions?",
  choices: [
    "The time the client was last known neurologically normal",
    "The client's occupation",
    "The client's usual breakfast",
    "The client's preferred rehabilitation schedule"
  ],
  answer: "The time the client was last known neurologically normal",
  rationale: "Last-known-well time is critical for determining eligibility for time-sensitive reperfusion treatment.",
  takeaway: "When stroke begins matters because treatment is time dependent."
},

{
  id: "CVA-STROKE-103",
  caseId: "CVA-STROKE-103",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client develops sudden dizziness, dysarthria, dysphagia, diplopia, and dysmetria. Which finding should the nurse recognize as most useful for identifying the vascular system involved?",
  choices: [
    "The cluster of brainstem and cerebellar findings",
    "The client's age alone",
    "The absence of aphasia",
    "The client's resting heart rate"
  ],
  answer: "The cluster of brainstem and cerebellar findings",
  rationale: "The combination of the 5 D's strongly suggests vertebrobasilar or posterior circulation involvement because this circulation supplies the brainstem and cerebellum.",
  takeaway: "Pattern recognition is critical: the 5 D's point toward posterior circulation."
},

{
  id: "CVA-STROKE-104",
  caseId: "CVA-STROKE-104",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with suspected stroke has a normal early noncontrast CT but continues to have a disabling focal neurologic deficit. Which conclusion is most appropriate?",
  choices: [
    "An ischemic stroke may still be present because hyperacute ischemia may not yet be visible on CT.",
    "Stroke has been completely ruled out.",
    "The client must have a psychiatric disorder.",
    "A normal CT means the neurologic assessment can be discontinued."
  ],
  answer: "An ischemic stroke may still be present because hyperacute ischemia may not yet be visible on CT.",
  rationale: "Early ischemic changes may not be visible on noncontrast CT. The scan is especially useful initially for detecting hemorrhage, while the clinical neurologic findings remain important.",
  takeaway: "Early ischemic stroke can have a normal-appearing CT."
},

{
  id: "CVA-STROKE-105",
  caseId: "CVA-STROKE-105",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client presentation requires the most immediate intervention?",
  choices: [
    "A client with acute stroke who cannot manage secretions and has gurgling respirations",
    "A client with stable expressive aphasia",
    "A client with chronic left-sided weakness",
    "A client with a stable visual field deficit"
  ],
  answer: "A client with acute stroke who cannot manage secretions and has gurgling respirations",
  rationale: "Inability to manage secretions and gurgling respirations indicate an immediate airway threat. Airway and breathing take priority over stable focal neurologic deficits.",
  takeaway: "ABCs still determine the first priority in stroke."
},

{
  id: "CVA-STROKE-106",
  caseId: "CVA-STROKE-106",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has an acute right-hemisphere stroke. Which nursing concerns should be included in the plan of care? Select all that apply.",
  choices: [
    "Fall risk from left-sided weakness",
    "Injury risk related to left-sided neglect",
    "Need for frequent neurologic reassessment",
    "Possible impaired spatial awareness",
    "Need to evaluate swallowing before oral intake",
    "Assumption that the client has expressive aphasia"
  ],
  answer: [
    "Fall risk from left-sided weakness",
    "Injury risk related to left-sided neglect",
    "Need for frequent neurologic reassessment",
    "Possible impaired spatial awareness",
    "Need to evaluate swallowing before oral intake"
  ],
  rationale: "Right-hemisphere stroke may cause left-sided weakness, neglect, and impaired spatial awareness. All acute stroke clients require neurologic monitoring and evaluation of swallowing safety. Expressive aphasia is more strongly associated with dominant left-hemisphere injury.",
  takeaway: "Build the care plan from the location-specific deficits plus universal stroke safety priorities."
},

{
  id: "CVA-STROKE-107",
  caseId: "CVA-STROKE-107",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has acute right facial and arm weakness, understands spoken language, but cannot produce meaningful speech. Which three conclusions are most consistent with the assessment?",
  choices: [
    "Left hemisphere involvement, MCA territory, expressive aphasia",
    "Right hemisphere involvement, ACA territory, receptive aphasia",
    "Left hemisphere involvement, PCA territory, visual agnosia",
    "Right hemisphere involvement, vertebrobasilar territory, neglect"
  ],
  answer: "Left hemisphere involvement, MCA territory, expressive aphasia",
  rationale: "Right face and arm weakness indicates left cerebral involvement. Face and arm deficits suggest MCA territory, and preserved comprehension with impaired speech production indicates expressive aphasia.",
  takeaway: "Side → vessel → language: left hemisphere + MCA + Broca."
},

{
  id: "CVA-STROKE-108",
  caseId: "CVA-STROKE-108",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden left-sided weakness, ignores the left side of the body, and repeatedly attempts to stand without recognizing the weakness. Which nursing action best addresses the highest immediate risk?",
  choices: [
    "Implement fall and injury precautions and provide assistance with mobility.",
    "Encourage the client to walk independently to improve awareness.",
    "Place needed items outside the client's reach.",
    "Avoid discussing the affected side with the client."
  ],
  answer: "Implement fall and injury precautions and provide assistance with mobility.",
  rationale: "Left-sided weakness combined with neglect and poor awareness creates a major risk for falls and injury. Safety precautions and assisted mobility are priorities.",
  takeaway: "Right-brain stroke can combine weakness, neglect, and poor safety awareness."
},

{
  id: "CVA-STROKE-109",
  caseId: "CVA-STROKE-109",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with acute stroke symptoms. The nurse identifies these findings: airway patent, oxygen saturation 97%, glucose 102 mg/dL, last-known-well 35 minutes ago, and NIHSS showing a disabling deficit. Which finding most strongly supports continuing rapidly toward reperfusion evaluation?",
  choices: [
    "Recent last-known-well with a disabling neurologic deficit",
    "Normal oxygen saturation alone",
    "Normal glucose alone",
    "Patent airway alone"
  ],
  answer: "Recent last-known-well with a disabling neurologic deficit",
  rationale: "Stabilization and exclusion of common mimics are essential, but a recent last-known-well time combined with a disabling neurologic deficit makes rapid imaging and reperfusion evaluation especially time-sensitive.",
  takeaway: "Once stable, TIME + disabling deficit drives rapid reperfusion evaluation."
},

{
  id: "CVA-STROKE-110",
  caseId: "CVA-STROKE-110",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client requires immediate escalation of care?",
  choices: [
    "A client with a recent stroke who develops a new severe headache, vomiting, unequal pupils, and decreasing consciousness",
    "A client with a stable left visual field deficit after a PCA stroke",
    "A client with persistent right arm weakness after an MCA stroke",
    "A client with expressive aphasia who becomes frustrated during communication"
  ],
  answer: "A client with a recent stroke who develops a new severe headache, vomiting, unequal pupils, and decreasing consciousness",
  rationale: "This cluster indicates acute neurologic deterioration and possible increased intracranial pressure, hemorrhage, or impending herniation. Immediate intervention is required.",
  takeaway: "New headache + vomiting + pupil change + falling LOC = neurologic emergency."
},

{
  id: "CVA-STROKE-111",
  caseId: "CVA-STROKE-111",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse recognize as reasons to escalate care for a client after stroke? Select all that apply.",
  choices: [
    "New decrease in level of consciousness",
    "New pupillary asymmetry",
    "Worsening motor weakness",
    "New severe headache",
    "Repeated vomiting",
    "Stable aphasia unchanged from baseline"
  ],
  answer: [
    "New decrease in level of consciousness",
    "New pupillary asymmetry",
    "Worsening motor weakness",
    "New severe headache",
    "Repeated vomiting"
  ],
  rationale: "New or worsening neurologic findings can indicate cerebral edema, increasing ICP, hemorrhage, or extension of the stroke. Stable baseline deficits are monitored but are not equivalent to acute deterioration.",
  takeaway: "The word NEW changes the priority."
},

{
  id: "CVA-STROKE-112",
  caseId: "CVA-STROKE-112",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client reports that yesterday they had 10 minutes of left arm weakness and slurred speech that completely resolved. Today the client has no neurologic deficits. Which nursing interpretation is most appropriate?",
  choices: [
    "The episode may have been a TIA and represents an important warning sign requiring evaluation.",
    "The absence of current symptoms means no cerebrovascular event occurred.",
    "Neurologic symptoms lasting less than 24 hours never require evaluation.",
    "The client should seek care only if the next episode causes loss of consciousness."
  ],
  answer: "The episode may have been a TIA and represents an important warning sign requiring evaluation.",
  rationale: "Transient focal neurologic symptoms can represent a TIA. Even though symptoms resolve, the event can signal significant cerebrovascular disease and risk for subsequent stroke.",
  takeaway: "Resolved symptoms can still represent a cerebrovascular emergency warning."
},

{
  id: "CVA-STROKE-113",
  caseId: "CVA-STROKE-113",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops the '5 D's' of posterior circulation dysfunction. Which additional finding would most strongly indicate progression to a life-threatening brainstem problem?",
  choices: [
    "Irregular respirations",
    "Persistent diplopia",
    "Continued dizziness",
    "Continued dysmetria"
  ],
  answer: "Irregular respirations",
  rationale: "The brainstem contains vital respiratory centers. Irregular respirations indicate involvement of life-sustaining functions and represent a more urgent progression than stable focal posterior circulation deficits.",
  takeaway: "Brainstem symptoms become immediately life-threatening when breathing is affected."
},

{
  id: "CVA-STROKE-114",
  caseId: "CVA-STROKE-114",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has acute left leg weakness much greater than arm weakness, urinary incontinence, and behavioral changes. Which combination correctly identifies the likely hemisphere and vascular territory?",
  choices: [
    "Right hemisphere — anterior cerebral artery",
    "Left hemisphere — middle cerebral artery",
    "Right hemisphere — posterior cerebral artery",
    "Left hemisphere — vertebrobasilar circulation"
  ],
  answer: "Right hemisphere — anterior cerebral artery",
  rationale: "Left-sided motor deficits indicate right cerebral injury. Leg-predominant weakness, urinary incontinence, and frontal behavioral changes are characteristic of ACA involvement.",
  takeaway: "Opposite-side leg weakness + bladder/behavior changes = ACA."
},

{
  id: "CVA-STROKE-115",
  caseId: "CVA-STROKE-115",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden right face and arm weakness, fluent but meaningless speech, and inability to follow verbal commands. Which combination best explains the findings?",
  choices: [
    "Left MCA stroke with receptive aphasia",
    "Right MCA stroke with expressive aphasia",
    "Left ACA stroke with neglect",
    "Right PCA stroke with visual agnosia"
  ],
  answer: "Left MCA stroke with receptive aphasia",
  rationale: "Right-sided face and arm deficits indicate left hemisphere involvement and fit the MCA distribution. Fluent but meaningless speech with impaired comprehension indicates receptive, or Wernicke's, aphasia.",
  takeaway: "Right face/arm weakness + fluent nonsense = left MCA/Wernicke pattern."
},

{
  id: "CVA-STROKE-116",
  caseId: "CVA-STROKE-116",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden right homonymous visual field loss and difficulty recognizing familiar objects but has normal strength and clear speech. Which vascular territory is most likely involved?",
  choices: [
    "Left posterior cerebral artery",
    "Right anterior cerebral artery",
    "Left middle cerebral artery",
    "Right middle cerebral artery"
  ],
  answer: "Left posterior cerebral artery",
  rationale: "The PCA supplies the occipital cortex and visual association areas. Left PCA involvement can produce right visual field loss and impaired visual recognition while motor function remains preserved.",
  takeaway: "PCA stroke can be primarily visual rather than motor."
},

{
  id: "CVA-STROKE-117",
  caseId: "CVA-STROKE-117",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with suspected acute stroke. Which action should the nurse avoid until swallowing safety has been established?",
  choices: [
    "Giving oral medications",
    "Performing a neurologic assessment",
    "Checking blood glucose",
    "Obtaining vital signs"
  ],
  answer: "Giving oral medications",
  rationale: "Stroke may impair swallowing and airway protection. Oral food, fluids, and medications should be withheld until swallowing safety has been evaluated.",
  takeaway: "No PO means no oral medications until swallowing is cleared."
},

{
  id: "CVA-STROKE-118",
  caseId: "CVA-STROKE-118",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse suspects an acute stroke. Which actions belong in the rapid initial evaluation? Select all that apply.",
  choices: [
    "Assess airway and oxygenation.",
    "Determine last-known-well.",
    "Check blood glucose.",
    "Perform a focused neurologic assessment.",
    "Prepare for rapid noncontrast head CT.",
    "Delay evaluation until the family completes the entire medical history."
  ],
  answer: [
    "Assess airway and oxygenation.",
    "Determine last-known-well.",
    "Check blood glucose.",
    "Perform a focused neurologic assessment.",
    "Prepare for rapid noncontrast head CT."
  ],
  rationale: "The initial stroke pathway emphasizes stabilization, time of onset or last-known-well, assessment for stroke mimics such as hypoglycemia, neurologic evaluation, and rapid imaging.",
  takeaway: "ABCs → time → glucose/mimics → neuro assessment → CT."
},

{
  id: "CVA-STROKE-119",
  caseId: "CVA-STROKE-119",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has sudden stroke symptoms but the initial CT shows no hemorrhage and no obvious ischemic changes. Which nursing conclusion is most accurate?",
  choices: [
    "The clinical stroke evaluation must continue because early ischemia may not yet be visible.",
    "The client cannot be having a stroke.",
    "The neurologic symptoms can now be considered nonurgent.",
    "The client should be discharged because the CT is normal."
  ],
  answer: "The clinical stroke evaluation must continue because early ischemia may not yet be visible.",
  rationale: "Hyperacute ischemic stroke may not initially produce visible changes on noncontrast CT. A negative CT for hemorrhage does not eliminate the possibility of acute ischemia.",
  takeaway: "Do not let a normal early CT override a convincing acute neurologic presentation."
},

{
  id: "CVA-STROKE-120",
  caseId: "CVA-STROKE-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden left facial weakness, left arm paralysis, left-sided neglect, and a recent last-known-well time. Glucose is normal and the airway is stable. Which sequence best demonstrates the nurse's clinical judgment?",
  choices: [
    "Recognize acute right-hemisphere stroke findings → rapidly quantify neurologic deficits → obtain noncontrast CT → evaluate for time-sensitive reperfusion treatment",
    "Recognize left-sided weakness → provide oral fluids → observe for several hours → obtain CT if symptoms remain",
    "Assume hemorrhagic stroke → administer thrombolytic therapy → obtain CT afterward",
    "Recognize neglect → begin long-term rehabilitation planning → delay acute diagnostic evaluation"
  ],
  answer: "Recognize acute right-hemisphere stroke findings → rapidly quantify neurologic deficits → obtain noncontrast CT → evaluate for time-sensitive reperfusion treatment",
  rationale: "The client has acute focal neurologic findings consistent with right cerebral involvement. Once ABCs and glucose are addressed and last-known-well is established, rapid neurologic assessment and brain imaging guide reperfusion decisions.",
  takeaway: "Recognize → assess → image → treat. Stroke care is a race against time."
}

];
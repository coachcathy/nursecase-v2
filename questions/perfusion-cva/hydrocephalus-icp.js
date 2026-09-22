const hydrocephalusIcpQuestions = [

{
  id: "CVA-ICP-001",
  caseId: "CVA-ICP-001",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which pathophysiologic change occurs with hydrocephalus?",
  choices: [
    "Excess cerebrospinal fluid causes ventricular enlargement and can increase intracranial pressure.",
    "Decreased blood glucose causes the ventricles to collapse.",
    "Cerebral arteries rupture and permanently stop CSF production.",
    "Cerebral blood volume decreases until the skull expands."
  ],
  answer: "Excess cerebrospinal fluid causes ventricular enlargement and can increase intracranial pressure.",
  rationale: "Hydrocephalus occurs when cerebrospinal fluid accumulates, causing enlargement of the ventricles. Increasing CSF volume can contribute to increased intracranial pressure.",
  takeaway: "Hydrocephalus = increased CSF → enlarged ventricles → possible increased ICP."
},

{
  id: "CVA-ICP-002",
  caseId: "CVA-ICP-002",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus becomes increasingly difficult to arouse. Which action should the nurse take?",
  choices: [
    "Escalate care immediately because declining level of consciousness may indicate rapidly increasing ICP.",
    "Allow the client to sleep and reassess in 4 hours.",
    "Document the finding as an expected manifestation of hydrocephalus.",
    "Encourage oral fluids and reassess after hydration."
  ],
  answer: "Escalate care immediately because declining level of consciousness may indicate rapidly increasing ICP.",
  rationale: "Declining level of consciousness is the earliest and most important sign of rapid neurologic deterioration associated with hydrocephalus and increasing ICP.",
  takeaway: "Hydrocephalus + declining LOC = escalate immediately."
},

{
  id: "CVA-ICP-003",
  caseId: "CVA-ICP-003",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are consistent with rapidly progressing hydrocephalus? Select all that apply.",
  choices: [
    "Declining level of consciousness",
    "Vomiting",
    "Severe or worsening headache",
    "Papilledema",
    "Rapidly rising intracranial pressure",
    "Stable neurologic status"
  ],
  answer: [
    "Declining level of consciousness",
    "Vomiting",
    "Severe or worsening headache",
    "Papilledema",
    "Rapidly rising intracranial pressure"
  ],
  rationale: "Rapidly progressing hydrocephalus can cause declining consciousness, vomiting, worsening headache, papilledema, and rapidly increasing ICP.",
  takeaway: "Rapid hydrocephalus behaves like an increased-ICP emergency."
},

{
  id: "CVA-ICP-004",
  caseId: "CVA-ICP-004",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has gradually developed subtle headaches, irritability, behavioral changes, blurred vision, and urinary incontinence. Which condition should the nurse associate with this pattern?",
  choices: [
    "Slowly progressing hydrocephalus",
    "Acute embolic stroke",
    "Immediate brain herniation",
    "Acute thrombolytic complication"
  ],
  answer: "Slowly progressing hydrocephalus",
  rationale: "The course identifies subtle headache, irritability, behavioral changes, blurred vision, and urinary incontinence as findings that may occur with slower progression of hydrocephalus.",
  takeaway: "Chronic hydrocephalus may present gradually with behavior, vision, headache, and bladder changes."
},

{
  id: "CVA-ICP-005",
  caseId: "CVA-ICP-005",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding in a client with hydrocephalus requires the most immediate action?",
  choices: [
    "New decline in level of consciousness",
    "Urinary incontinence present for several weeks",
    "Intermittent mild headache",
    "Chronic behavioral changes"
  ],
  answer: "New decline in level of consciousness",
  rationale: "A new decline in consciousness is an important indicator of acute neurologic deterioration and rapidly increasing intracranial pressure.",
  takeaway: "Trend LOC closely—an acute decline is the priority."
},

{
  id: "CVA-ICP-006",
  caseId: "CVA-ICP-006",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus Management",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Which intervention may be used for acute cerebrospinal fluid drainage in a client with hydrocephalus?",
  choices: [
    "External ventricular drain",
    "Carotid endarterectomy",
    "Mechanical thrombectomy",
    "Chest tube"
  ],
  answer: "External ventricular drain",
  rationale: "An external ventricular drain, or ventriculostomy, may be used to drain CSF in acute hydrocephalus.",
  takeaway: "EVD = acute CSF drainage."
},

{
  id: "CVA-ICP-007",
  caseId: "CVA-ICP-007",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus Management",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Which intervention may provide long-term diversion of cerebrospinal fluid for a client with hydrocephalus?",
  choices: [
    "Ventriculoperitoneal shunt",
    "External defibrillator",
    "Mechanical thrombectomy",
    "Carotid stent"
  ],
  answer: "Ventriculoperitoneal shunt",
  rationale: "A ventriculoperitoneal shunt provides long-term diversion of CSF from the cerebral ventricles to the peritoneal cavity.",
  takeaway: "VP shunt = long-term CSF diversion."
},

{
  id: "CVA-ICP-008",
  caseId: "CVA-ICP-008",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus Management",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing actions are important when caring for a client with a CSF drain or shunt? Select all that apply.",
  choices: [
    "Use strict sterile technique when handling the system.",
    "Monitor for changes in neurologic status.",
    "Assess for fever.",
    "Assess the site for redness.",
    "Observe CSF for abnormal cloudiness when visible.",
    "Ignore new neurologic changes if the device remains in place."
  ],
  answer: [
    "Use strict sterile technique when handling the system.",
    "Monitor for changes in neurologic status.",
    "Assess for fever.",
    "Assess the site for redness.",
    "Observe CSF for abnormal cloudiness when visible."
  ],
  rationale: "CSF drainage systems and shunts carry infection and malfunction risks. Sterile technique and close assessment for infection and neurologic deterioration are essential.",
  takeaway: "With CSF devices, think infection + malfunction + neurologic monitoring."
},

{
  id: "CVA-ICP-009",
  caseId: "CVA-ICP-009",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Shunt Complications",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with a VP shunt develops fever, altered level of consciousness, and redness along the shunt site. Which complication should the nurse suspect?",
  choices: [
    "Shunt infection",
    "Improved CSF drainage",
    "Resolution of hydrocephalus",
    "Expected postoperative healing"
  ],
  answer: "Shunt infection",
  rationale: "Fever, altered LOC, redness at the shunt site, and abnormal CSF findings can indicate infection and require prompt evaluation.",
  takeaway: "Fever + neuro change + shunt-site redness = suspect infection."
},

{
  id: "CVA-ICP-010",
  caseId: "CVA-ICP-010",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Shunt Complications",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a VP shunt develops a new severe headache, vomiting, and decreasing level of consciousness. Which interpretation is the priority?",
  choices: [
    "The shunt may be malfunctioning and ICP may be increasing.",
    "The shunt is functioning normally.",
    "The findings indicate improved cerebral perfusion.",
    "The client is experiencing expected long-term adaptation."
  ],
  answer: "The shunt may be malfunctioning and ICP may be increasing.",
  rationale: "New neurologic deterioration in a client with a shunt can indicate shunt malfunction, recurrent CSF accumulation, and increasing ICP.",
  takeaway: "Shunt + new neuro decline = suspect malfunction and escalate."
},

{
  id: "CVA-ICP-011",
  caseId: "CVA-ICP-011",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Monro-Kellie Doctrine",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which statement best describes the Monro-Kellie concept?",
  choices: [
    "The skull is a fixed container holding brain tissue, blood, and cerebrospinal fluid.",
    "The adult skull expands whenever intracranial volume increases.",
    "Intracranial pressure is determined only by cerebrospinal fluid.",
    "Cerebral blood volume does not influence intracranial pressure."
  ],
  answer: "The skull is a fixed container holding brain tissue, blood, and cerebrospinal fluid.",
  rationale: "The Monro-Kellie doctrine describes the adult skull as a fixed space containing brain tissue, blood, and CSF. An increase in one component requires compensation by another or ICP rises.",
  takeaway: "Skull = sealed box containing brain + blood + CSF."
},

{
  id: "CVA-ICP-012",
  caseId: "CVA-ICP-012",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Monro-Kellie Doctrine",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Cerebral edema causes brain tissue volume to increase. According to the Monro-Kellie doctrine, what must occur to initially prevent intracranial pressure from rising?",
  choices: [
    "The volume of another intracranial component must decrease.",
    "The skull must expand.",
    "Brain tissue must immediately regenerate.",
    "Arterial pressure must increase."
  ],
  answer: "The volume of another intracranial component must decrease.",
  rationale: "Because the skull is a fixed container, increases in one intracranial component must initially be compensated by decreases in another component. When compensation fails, ICP rises.",
  takeaway: "If one intracranial volume goes up, something else must go down—or ICP rises."
},

{
  id: "CVA-ICP-013",
  caseId: "CVA-ICP-013",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracranial Pressure",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which intracranial pressure value is within the normal range identified in the course?",
  choices: [
    "12 mmHg",
    "25 mmHg",
    "30 mmHg",
    "40 mmHg"
  ],
  answer: "12 mmHg",
  rationale: "The course identifies normal ICP as approximately 10 to 15 mmHg. Sustained ICP above 20 mmHg is considered harmful.",
  takeaway: "Normal ICP: about 10–15 mmHg."
},

{
  id: "CVA-ICP-014",
  caseId: "CVA-ICP-014",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Intracranial Pressure",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "A client's intracranial pressure remains at 24 mmHg. How should the nurse interpret this finding?",
  choices: [
    "The ICP is elevated and sustained pressure at this level can cause injury.",
    "The ICP is within the expected normal range.",
    "The ICP indicates complete resolution of cerebral edema.",
    "The ICP is too low to affect cerebral perfusion."
  ],
  answer: "The ICP is elevated and sustained pressure at this level can cause injury.",
  rationale: "The course identifies sustained ICP greater than 20 mmHg as harmful and requiring intervention and close monitoring.",
  takeaway: "Sustained ICP >20 mmHg is harmful."
},

{
  id: "CVA-ICP-015",
  caseId: "CVA-ICP-015",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which conditions can contribute to increased intracranial pressure? Select all that apply.",
  choices: [
    "Stroke",
    "Traumatic brain injury",
    "Brain tumor or abscess",
    "Hydrocephalus",
    "Cerebral edema",
    "Uncomplicated healed skin abrasion"
  ],
  answer: [
    "Stroke",
    "Traumatic brain injury",
    "Brain tumor or abscess",
    "Hydrocephalus",
    "Cerebral edema"
  ],
  rationale: "The course identifies stroke, traumatic brain injury, tumors or abscesses, hydrocephalus, and cerebral edema as common causes of increased ICP.",
  takeaway: "Anything increasing brain, blood, or CSF volume can threaten ICP."
},

{
  id: "CVA-ICP-016",
  caseId: "CVA-ICP-016",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Early Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment finding is the earliest and most important indicator of increasing intracranial pressure?",
  choices: [
    "Declining level of consciousness",
    "Bradycardia",
    "Decerebrate posturing",
    "Fixed dilated pupil"
  ],
  answer: "Declining level of consciousness",
  rationale: "The course emphasizes declining level of consciousness as the earliest and most important indicator of increasing ICP.",
  takeaway: "Earliest ICP warning = declining LOC."
},

{
  id: "CVA-ICP-017",
  caseId: "CVA-ICP-017",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Early Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are considered early manifestations of increasing intracranial pressure? Select all that apply.",
  choices: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache",
    "Nausea and vomiting",
    "Decerebrate posturing"
  ],
  answer: [
    "Declining level of consciousness",
    "Restlessness",
    "Irritability",
    "Confusion",
    "Worsening headache",
    "Nausea and vomiting"
  ],
  rationale: "Early increased ICP can produce declining LOC, restlessness, irritability, confusion, worsening headache, nausea, vomiting, and speech changes. Decerebrate posturing is a late and ominous finding.",
  takeaway: "Mental-status change often comes before dramatic late ICP signs."
},

{
  id: "CVA-ICP-018",
  caseId: "CVA-ICP-018",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Late Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings indicate late increased intracranial pressure and possible impending herniation? Select all that apply.",
  choices: [
    "Cushing triad",
    "Irregular respirations",
    "Pupil dilation or other pupillary changes",
    "Abnormal posturing",
    "New-onset seizures",
    "Mild irritability alone"
  ],
  answer: [
    "Cushing triad",
    "Irregular respirations",
    "Pupil dilation or other pupillary changes",
    "Abnormal posturing",
    "New-onset seizures"
  ],
  rationale: "Cushing triad, irregular respirations, pupillary abnormalities, abnormal posturing, and new seizures are late findings associated with severe ICP elevation and possible herniation.",
  takeaway: "Late ICP signs = neurologic emergency."
},

{
  id: "CVA-ICP-019",
  caseId: "CVA-ICP-019",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which combination of findings represents Cushing triad?",
  choices: [
    "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations",
    "Hypotension, tachycardia, and rapid regular respirations",
    "Hypertension, tachycardia, and fever",
    "Bradycardia, hypotension, and shallow regular respirations"
  ],
  answer: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations",
  rationale: "Cushing triad is a late sign of severe increased ICP and consists of hypertension with widened pulse pressure, bradycardia, and irregular respirations.",
  takeaway: "Cushing triad = HTN/wide pulse pressure + bradycardia + irregular respirations."
},

{
  id: "CVA-ICP-020",
  caseId: "CVA-ICP-020",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema develops a blood pressure of 198/72 mmHg, heart rate of 44/min, and irregular respirations. Which interpretation is most appropriate?",
  choices: [
    "The client is demonstrating late increased ICP and may be approaching herniation.",
    "The client is demonstrating normal compensation for pain.",
    "The client is showing early uncomplicated dehydration.",
    "The findings indicate resolution of cerebral edema."
  ],
  answer: "The client is demonstrating late increased ICP and may be approaching herniation.",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late and dangerous sign of increasing ICP.",
  takeaway: "Cushing triad = emergency, not an early warning."
},

{
  id: "CVA-ICP-021",
  caseId: "CVA-ICP-021",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "How should the nurse position a client with increased intracranial pressure unless contraindicated?",
  choices: [
    "Elevate the head of the bed about 30 degrees and keep the head midline.",
    "Keep the client flat with the neck flexed.",
    "Place the client in Trendelenburg position.",
    "Flex the hips to 90 degrees."
  ],
  answer: "Elevate the head of the bed about 30 degrees and keep the head midline.",
  rationale: "Elevating the head of the bed approximately 30 degrees and maintaining neutral midline alignment promotes cerebral venous drainage and helps limit ICP.",
  takeaway: "ICP positioning = HOB about 30° + head neutral and midline."
},

{
  id: "CVA-ICP-022",
  caseId: "CVA-ICP-022",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which position should the nurse avoid in a client with increased intracranial pressure?",
  choices: [
    "Neck and hip flexion",
    "Head maintained in neutral alignment",
    "Head of bed elevated approximately 30 degrees",
    "Body positioned to promote venous drainage"
  ],
  answer: "Neck and hip flexion",
  rationale: "Neck and hip flexion can impair venous drainage from the brain and contribute to increased intracranial pressure.",
  takeaway: "Avoid anything that obstructs cerebral venous drainage."
},

{
  id: "CVA-ICP-023",
  caseId: "CVA-ICP-023",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "The nurse plans care for a client with increased ICP. Which approach is most appropriate?",
  choices: [
    "Space nursing activities and minimize unnecessary stimulation.",
    "Cluster every procedure into one prolonged period of intense stimulation.",
    "Perform frequent unnecessary suctioning.",
    "Keep lights and environmental stimulation continuously high."
  ],
  answer: "Space nursing activities and minimize unnecessary stimulation.",
  rationale: "The course recommends avoiding clustering care and minimizing stimulation because repeated or prolonged stimulation can contribute to increases in ICP.",
  takeaway: "With increased ICP, reduce stimulation and avoid excessive clustering."
},

{
  id: "CVA-ICP-024",
  caseId: "CVA-ICP-024",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with increased ICP requires suctioning. Which intervention should the nurse implement according to the course?",
  choices: [
    "Hyperoxygenate before and after suctioning.",
    "Suction repeatedly for prolonged periods.",
    "Lower the head of the bed before suctioning.",
    "Flex the client's neck during suctioning."
  ],
  answer: "Hyperoxygenate before and after suctioning.",
  rationale: "Suctioning can increase ICP and cause hypoxemia. The course emphasizes hyperoxygenating before and after suctioning.",
  takeaway: "ICP + suctioning = hyperoxygenate and minimize the insult."
},

{
  id: "CVA-ICP-025",
  caseId: "CVA-ICP-025",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing actions help reduce secondary brain injury in a client with increased ICP? Select all that apply.",
  choices: [
    "Avoid hypoxia.",
    "Avoid hypotension.",
    "Prevent fever.",
    "Monitor and manage hyperglycemia.",
    "Monitor oxygen saturation.",
    "Encourage prolonged neck flexion."
  ],
  answer: [
    "Avoid hypoxia.",
    "Avoid hypotension.",
    "Prevent fever.",
    "Monitor and manage hyperglycemia.",
    "Monitor oxygen saturation."
  ],
  rationale: "The course emphasizes preventing secondary injury by avoiding hypoxia, hypotension, fever, and hyperglycemia while continuously monitoring physiologic status.",
  takeaway: "Protect the injured brain from secondary insults."
},

{
  id: "CVA-ICP-026",
  caseId: "CVA-ICP-026",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Why is mannitol administered to a client with cerebral edema and increased ICP?",
  choices: [
    "It acts as an osmotic diuretic to help reduce cerebral edema and intracranial pressure.",
    "It increases cerebral edema to improve blood flow.",
    "It prevents all seizures by depressing cortical activity.",
    "It dissolves cerebral arterial thrombi."
  ],
  answer: "It acts as an osmotic diuretic to help reduce cerebral edema and intracranial pressure.",
  rationale: "Mannitol is an osmotic diuretic used to reduce cerebral edema and elevated intracranial pressure.",
  takeaway: "Mannitol pulls fluid osmotically to help reduce brain swelling."
},

{
  id: "CVA-ICP-027",
  caseId: "CVA-ICP-027",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which assessments are important for a client receiving mannitol for increased ICP? Select all that apply.",
  choices: [
    "Strict intake and output",
    "Serum osmolarity",
    "Electrolytes",
    "Renal function",
    "Neurologic status",
    "Ignore urine output because mannitol is not a diuretic"
  ],
  answer: [
    "Strict intake and output",
    "Serum osmolarity",
    "Electrolytes",
    "Renal function",
    "Neurologic status"
  ],
  rationale: "Mannitol is an osmotic diuretic. Nursing monitoring includes strict I&O, serum osmolarity, electrolytes, renal function, and neurologic response.",
  takeaway: "Mannitol monitoring = I&O + osmolality + electrolytes + kidneys + neuro."
},

{
  id: "CVA-ICP-028",
  caseId: "CVA-ICP-028",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which finding should cause the nurse to question or hold mannitol and notify the provider according to the treatment plan?",
  choices: [
    "Evidence of renal dysfunction or excessive serum osmolality",
    "Improving neurologic status",
    "Stable electrolyte levels",
    "Adequate urine output"
  ],
  answer: "Evidence of renal dysfunction or excessive serum osmolality",
  rationale: "The course emphasizes monitoring renal function and serum osmolality during mannitol therapy and holding therapy when excessive osmolality or renal dysfunction occurs.",
  takeaway: "Mannitol can injure the kidneys and excessively raise serum osmolality."
},

{
  id: "CVA-ICP-029",
  caseId: "CVA-ICP-029",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which equipment should the nurse expect to use when administering IV mannitol?",
  choices: [
    "An inline filter",
    "A chest drainage system",
    "A feeding tube",
    "A defibrillation pad"
  ],
  answer: "An inline filter",
  rationale: "The course specifically identifies use of an inline filter when administering mannitol.",
  takeaway: "Mannitol administration requires an inline filter."
},

{
  id: "CVA-ICP-030",
  caseId: "CVA-ICP-030",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "What is the therapeutic purpose of 3% hypertonic saline in a client with increased ICP?",
  choices: [
    "Reduce intracranial pressure and support cerebral perfusion.",
    "Increase cerebral edema.",
    "Dissolve an embolic clot.",
    "Cause intentional severe hyponatremia."
  ],
  answer: "Reduce intracranial pressure and support cerebral perfusion.",
  rationale: "Hypertonic saline is used for acute ICP reduction and may support cerebral perfusion pressure.",
  takeaway: "Hypertonic saline is another hyperosmolar strategy for elevated ICP."
},

{
  id: "CVA-ICP-031",
  caseId: "CVA-ICP-031",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which assessments are priorities for a client receiving 3% hypertonic saline? Select all that apply.",
  choices: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema",
    "Ignore electrolyte trends during therapy"
  ],
  answer: [
    "Serial serum sodium levels",
    "Frequent neurologic assessments",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema"
  ],
  rationale: "Hypertonic saline can cause hypernatremia and fluid overload. The course emphasizes serial sodium monitoring, frequent neurologic checks, and monitoring lung sounds and volume status.",
  takeaway: "Hypertonic saline: watch sodium, lungs, fluid status, and neuro status."
},

{
  id: "CVA-ICP-032",
  caseId: "CVA-ICP-032",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops new crackles and increasing respiratory distress. Which complication should the nurse suspect?",
  choices: [
    "Fluid overload with pulmonary edema",
    "Expected therapeutic response",
    "Improved intracranial compliance",
    "Isolated expressive aphasia"
  ],
  answer: "Fluid overload with pulmonary edema",
  rationale: "Hypertonic saline can expand intravascular volume and cause fluid overload or pulmonary edema. New respiratory findings require prompt evaluation.",
  takeaway: "Hypertonic saline can help the brain while overloading the lungs."
},

{
  id: "CVA-ICP-033",
  caseId: "CVA-ICP-033",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP suddenly develops a unilateral fixed dilated pupil. Which complication should the nurse suspect?",
  choices: [
    "Uncal herniation",
    "Slowly progressing hydrocephalus",
    "Stable ischemic penumbra",
    "Uncomplicated expressive aphasia"
  ],
  answer: "Uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III, producing an ipsilateral fixed or 'blown' pupil.",
  takeaway: "Uncal herniation = unilateral blown pupil."
},

{
  id: "CVA-ICP-034",
  caseId: "CVA-ICP-034",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Uncal Herniation",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops a fixed dilated right pupil and worsening left-sided weakness. Which herniation pattern best explains these findings?",
  choices: [
    "Right uncal herniation",
    "Left subfalcine herniation",
    "Tonsillar herniation",
    "Chronic hydrocephalus without herniation"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation commonly produces an ipsilateral blown pupil from cranial nerve III compression and contralateral weakness.",
  takeaway: "Uncal = pupil on the same side, weakness on the opposite side."
},

{
  id: "CVA-ICP-035",
  caseId: "CVA-ICP-035",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Central Herniation",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe cerebral edema has a rapidly declining level of consciousness and develops bilateral abnormal posturing. Which herniation syndrome should the nurse suspect?",
  choices: [
    "Central or transtentorial herniation",
    "Isolated subfalcine herniation",
    "Stable hydrocephalus",
    "Transient ischemic attack"
  ],
  answer: "Central or transtentorial herniation",
  rationale: "Central or transtentorial herniation is associated with rapid deterioration in consciousness and bilateral posturing as downward brain displacement progresses.",
  takeaway: "Rapid LOC decline + bilateral posturing = central herniation."
},

{
  id: "CVA-ICP-036",
  caseId: "CVA-ICP-036",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subfalcine Herniation",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Imaging shows a cerebral midline shift and the client develops new weakness of the opposite leg. Which herniation syndrome is most consistent with these findings?",
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
  id: "CVA-ICP-037",
  caseId: "CVA-ICP-037",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Tonsillar Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with critically increased ICP develops increasingly irregular respirations followed by periods of apnea. Which complication should the nurse suspect?",
  choices: [
    "Tonsillar herniation",
    "Stable ACA stroke",
    "Chronic expressive aphasia",
    "Slowly progressing hydrocephalus"
  ],
  answer: "Tonsillar herniation",
  rationale: "Tonsillar herniation involves downward displacement through the foramen magnum and can compress vital brainstem respiratory centers, producing irregular respirations and apnea.",
  takeaway: "Tonsillar herniation threatens breathing and can progress to apnea."
},

{
  id: "CVA-ICP-038",
  caseId: "CVA-ICP-038",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which herniation patterns are correctly matched with their findings? Select all that apply.",
  choices: [
    "Uncal — ipsilateral blown pupil",
    "Uncal — contralateral weakness",
    "Central — rapid LOC decline and bilateral posturing",
    "Subfalcine — midline shift and contralateral leg weakness",
    "Tonsillar — irregular respirations progressing toward apnea",
    "Tonsillar — isolated expressive aphasia"
  ],
  answer: [
    "Uncal — ipsilateral blown pupil",
    "Uncal — contralateral weakness",
    "Central — rapid LOC decline and bilateral posturing",
    "Subfalcine — midline shift and contralateral leg weakness",
    "Tonsillar — irregular respirations progressing toward apnea"
  ],
  rationale: "Each herniation syndrome produces a characteristic pattern based on the direction of brain displacement and structures compressed.",
  takeaway: "Know the pattern: uncal=pupil, central=LOC/posturing, subfalcine=leg, tonsillar=breathing."
},

{
  id: "CVA-ICP-039",
  caseId: "CVA-ICP-039",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP develops a new fixed dilated pupil and rapidly decreasing level of consciousness. Which interpretation should guide the nurse's response?",
  choices: [
    "Treat the findings as an impending herniation emergency.",
    "Reassess at the next routine neurologic check.",
    "Document the findings as expected effects of fatigue.",
    "Encourage the client to sleep."
  ],
  answer: "Treat the findings as an impending herniation emergency.",
  rationale: "A new fixed dilated pupil combined with rapidly decreasing consciousness is an ominous sign of severe ICP elevation and possible brain herniation.",
  takeaway: "Pupil change + falling LOC = herniation until proven otherwise."
},

{
  id: "CVA-ICP-040",
  caseId: "CVA-ICP-040",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema suddenly becomes unresponsive. Assessment reveals a right fixed dilated pupil, left-sided weakness, bradycardia, severe hypertension with widened pulse pressure, and irregular respirations. Which hypothesis should the nurse prioritize?",
  choices: [
    "Severe increased ICP with probable right uncal herniation",
    "Stable left MCA ischemic stroke",
    "Slowly progressing uncomplicated hydrocephalus",
    "Transient ischemic attack"
  ],
  answer: "Severe increased ICP with probable right uncal herniation",
  rationale: "A right fixed dilated pupil with contralateral weakness strongly suggests right uncal herniation. Cushing triad and declining consciousness indicate severe increased ICP and impending or active herniation.",
  takeaway: "Blown pupil + opposite weakness + Cushing triad = herniation emergency."
},

{
  id: "CVA-ICP-041",
  caseId: "CVA-ICP-041",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased intracranial pressure becomes restless and confused. Thirty minutes later, the client is difficult to arouse. Which interpretation is most appropriate?",
  choices: [
    "The client's neurologic status is worsening and requires immediate escalation.",
    "The client is experiencing an expected response to hospitalization.",
    "The client should be allowed to sleep before another assessment.",
    "The change indicates that intracranial pressure is decreasing."
  ],
  answer: "The client's neurologic status is worsening and requires immediate escalation.",
  rationale: "Progression from restlessness and confusion to decreased arousability represents worsening level of consciousness, an important indicator of increasing ICP and neurologic deterioration.",
  takeaway: "Trend LOC—progressive decline is an emergency."
},

{
  id: "CVA-ICP-042",
  caseId: "CVA-ICP-042",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Why can cerebral edema following a large stroke cause intracranial pressure to rise?",
  choices: [
    "Swollen brain tissue increases volume within the fixed space of the skull.",
    "Cerebral edema causes the adult skull to expand.",
    "Cerebral edema permanently eliminates cerebral blood flow.",
    "Swollen brain tissue decreases all intracranial volume."
  ],
  answer: "Swollen brain tissue increases volume within the fixed space of the skull.",
  rationale: "The skull is a fixed container. Cerebral edema increases brain tissue volume, and when compensatory mechanisms are exhausted, intracranial pressure rises.",
  takeaway: "Brain swelling inside a fixed skull increases ICP."
},

{
  id: "CVA-ICP-043",
  caseId: "CVA-ICP-043",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients. Which client should be assessed FIRST?",
  choices: [
    "A client with increased ICP who is newly difficult to arouse",
    "A client with hydrocephalus who has chronic urinary incontinence",
    "A client with stable left-sided weakness after stroke",
    "A client with expressive aphasia who is frustrated"
  ],
  answer: "A client with increased ICP who is newly difficult to arouse",
  rationale: "A new decline in level of consciousness is an early and significant sign of worsening ICP and neurologic deterioration.",
  takeaway: "New LOC changes outrank stable neurologic deficits."
},

{
  id: "CVA-ICP-044",
  caseId: "CVA-ICP-044",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings suggest that increased ICP is progressing from early to late deterioration? Select all that apply.",
  choices: [
    "Increasing difficulty arousing the client",
    "New pupillary abnormalities",
    "Abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widening pulse pressure",
    "Improving orientation"
  ],
  answer: [
    "Increasing difficulty arousing the client",
    "New pupillary abnormalities",
    "Abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widening pulse pressure"
  ],
  rationale: "Progressive decline in consciousness followed by pupillary changes, posturing, irregular respirations, and Cushing response indicates severe worsening of intracranial pressure.",
  takeaway: "Late ICP findings signal failure of compensation and possible herniation."
},

{
  id: "CVA-ICP-045",
  caseId: "CVA-ICP-045",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "The nurse finds a client with increased ICP lying with the head turned sharply to the side. What is the nurse's best action?",
  choices: [
    "Reposition the head into neutral midline alignment.",
    "Lower the head of the bed completely.",
    "Flex the client's neck further.",
    "Flex the client's hips to improve comfort."
  ],
  answer: "Reposition the head into neutral midline alignment.",
  rationale: "Neutral midline head alignment promotes cerebral venous drainage. Excessive neck rotation can interfere with venous return and contribute to increased ICP.",
  takeaway: "Keep the head neutral and midline to promote venous drainage."
},

{
  id: "CVA-ICP-046",
  caseId: "CVA-ICP-046",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing action should be avoided when caring for a client with increased intracranial pressure?",
  choices: [
    "Frequent unnecessary suctioning",
    "Maintaining neutral head alignment",
    "Monitoring neurologic status",
    "Elevating the head of the bed approximately 30 degrees"
  ],
  answer: "Frequent unnecessary suctioning",
  rationale: "Suctioning can temporarily increase ICP. It should be performed only when necessary, with measures such as oxygenation used to reduce secondary injury.",
  takeaway: "Avoid unnecessary procedures that can spike ICP."
},

{
  id: "CVA-ICP-047",
  caseId: "CVA-ICP-047",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which interventions are appropriate for a client with increased ICP? Select all that apply.",
  choices: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Maintain the head in neutral alignment.",
    "Avoid excessive neck and hip flexion.",
    "Minimize unnecessary stimulation.",
    "Monitor neurologic status frequently.",
    "Place the client routinely in Trendelenburg position."
  ],
  answer: [
    "Elevate the head of the bed approximately 30 degrees.",
    "Maintain the head in neutral alignment.",
    "Avoid excessive neck and hip flexion.",
    "Minimize unnecessary stimulation.",
    "Monitor neurologic status frequently."
  ],
  rationale: "ICP care focuses on promoting cerebral venous drainage, minimizing factors that increase pressure, and detecting neurologic deterioration early.",
  takeaway: "Position, protect, minimize stimulation, and trend the neuro exam."
},

{
  id: "CVA-ICP-048",
  caseId: "CVA-ICP-048",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Brain Injury",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP has an oxygen saturation of 84%. Which action should receive priority?",
  choices: [
    "Correct the hypoxemia.",
    "Complete a dietary assessment.",
    "Delay intervention until the next neurologic check.",
    "Encourage the client to ambulate."
  ],
  answer: "Correct the hypoxemia.",
  rationale: "Hypoxia can worsen secondary brain injury. Maintaining adequate oxygenation is a major priority in clients with neurologic injury and increased ICP.",
  takeaway: "The injured brain cannot tolerate hypoxia."
},

{
  id: "CVA-ICP-049",
  caseId: "CVA-ICP-049",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Brain Injury",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Why is hypotension particularly dangerous in a client with increased intracranial pressure?",
  choices: [
    "It can further reduce cerebral perfusion.",
    "It always decreases intracranial pressure to zero.",
    "It increases CSF absorption enough to cause dehydration.",
    "It prevents cerebral edema from forming."
  ],
  answer: "It can further reduce cerebral perfusion.",
  rationale: "Adequate systemic blood pressure is needed to maintain cerebral perfusion. When ICP is elevated, hypotension can further compromise blood flow to the brain.",
  takeaway: "High ICP plus low blood pressure threatens cerebral perfusion."
},

{
  id: "CVA-ICP-050",
  caseId: "CVA-ICP-050",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Secondary Brain Injury",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Clinical Judgment",
  question: "Which physiologic problems should the nurse work to prevent in a client with acute brain injury and increased ICP? Select all that apply.",
  choices: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Additional neurologic injury",
    "Adequate oxygenation"
  ],
  answer: [
    "Hypoxia",
    "Hypotension",
    "Fever",
    "Hyperglycemia",
    "Additional neurologic injury"
  ],
  rationale: "Hypoxia, hypotension, fever, and hyperglycemia can worsen secondary brain injury. Nursing care aims to prevent these additional insults.",
  takeaway: "Protect the brain from secondary injury after the initial event."
},

{
  id: "CVA-ICP-051",
  caseId: "CVA-ICP-051",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Monitoring",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which assessment trend provides the nurse with the most useful information about neurologic deterioration in a client with increased ICP?",
  choices: [
    "Serial level-of-consciousness and neurologic assessments",
    "One neurologic examination performed at admission",
    "Daily dietary intake alone",
    "Weekly body weight alone"
  ],
  answer: "Serial level-of-consciousness and neurologic assessments",
  rationale: "Serial neurologic assessments allow the nurse to identify subtle changes from baseline and recognize deterioration early.",
  takeaway: "A neuro trend is more useful than a single snapshot."
},

{
  id: "CVA-ICP-052",
  caseId: "CVA-ICP-052",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Monitoring",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "At 0800, a client opens the eyes spontaneously and follows commands. At 0900, the client opens the eyes only to voice and is confused. At 1000, the client responds only to painful stimulation. Which interpretation is most appropriate?",
  choices: [
    "The client has progressive neurologic deterioration requiring immediate escalation.",
    "The findings demonstrate improving intracranial compliance.",
    "The changes are expected variations in sleep.",
    "The client is showing resolution of increased ICP."
  ],
  answer: "The client has progressive neurologic deterioration requiring immediate escalation.",
  rationale: "The serial assessments show a clear progressive decline in level of consciousness. This pattern is concerning for worsening ICP and requires immediate action.",
  takeaway: "Trend changes over time—the direction of the neuro exam matters."
},

{
  id: "CVA-ICP-053",
  caseId: "CVA-ICP-053",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Pupillary Assessment",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client's pupils were previously equal and reactive. The nurse now finds the right pupil dilated and nonreactive. What is the priority interpretation?",
  choices: [
    "This new pupillary change may indicate worsening ICP and herniation.",
    "The finding is expected after uncomplicated stroke.",
    "The finding indicates improved cerebral perfusion.",
    "The change can be reassessed at the end of the shift."
  ],
  answer: "This new pupillary change may indicate worsening ICP and herniation.",
  rationale: "A new unilateral fixed dilated pupil is an ominous neurologic change and may indicate cranial nerve III compression from uncal herniation.",
  takeaway: "A new blown pupil is an emergency."
},

{
  id: "CVA-ICP-054",
  caseId: "CVA-ICP-054",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posturing",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client with severe increased ICP develops abnormal posturing. How should the nurse interpret this finding?",
  choices: [
    "It is a late sign of serious neurologic deterioration.",
    "It indicates normal motor recovery.",
    "It is an early sign of improved cerebral perfusion.",
    "It confirms that intracranial pressure has normalized."
  ],
  answer: "It is a late sign of serious neurologic deterioration.",
  rationale: "Abnormal posturing is associated with severe neurologic injury and is considered a late finding of increased ICP.",
  takeaway: "Posturing is a late and ominous neurologic sign."
},

{
  id: "CVA-ICP-055",
  caseId: "CVA-ICP-055",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema has a blood pressure of 210/68 mmHg, heart rate of 42/min, and irregular respirations. Which action should the nurse take?",
  choices: [
    "Recognize a late ICP emergency and escalate care immediately.",
    "Document the findings as expected and reassess in 4 hours.",
    "Encourage the client to ambulate.",
    "Lower the head of the bed and flex the neck."
  ],
  answer: "Recognize a late ICP emergency and escalate care immediately.",
  rationale: "Severe hypertension with widened pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late sign of dangerously elevated ICP.",
  takeaway: "Cushing triad means severe ICP elevation—act immediately."
},

{
  id: "CVA-ICP-056",
  caseId: "CVA-ICP-056",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has worsening headache, repeated vomiting, and progressive drowsiness. Which hypothesis should the nurse prioritize?",
  choices: [
    "CSF accumulation is contributing to increasing intracranial pressure.",
    "The hydrocephalus is resolving spontaneously.",
    "The client is experiencing normal fatigue.",
    "Cerebral perfusion has improved."
  ],
  answer: "CSF accumulation is contributing to increasing intracranial pressure.",
  rationale: "Headache, vomiting, and progressive decline in consciousness are concerning for increasing ICP related to CSF accumulation.",
  takeaway: "Hydrocephalus can become an ICP emergency."
},

{
  id: "CVA-ICP-057",
  caseId: "CVA-ICP-057",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "A client with an external ventricular drain develops fever and a new decline in neurologic status. Which complication should the nurse suspect?",
  choices: [
    "Possible infection",
    "Expected response to effective drainage",
    "Normal adaptation to the EVD",
    "Improved intracranial compliance"
  ],
  answer: "Possible infection",
  rationale: "Clients with external CSF drainage systems are at risk for infection. Fever accompanied by neurologic deterioration requires prompt evaluation.",
  takeaway: "EVD + fever + neuro change = suspect infection."
},

{
  id: "CVA-ICP-058",
  caseId: "CVA-ICP-058",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "VP Shunt",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a VP shunt reports worsening headache and develops vomiting and confusion. Which action is most appropriate?",
  choices: [
    "Evaluate promptly for shunt malfunction and increasing ICP.",
    "Reassure the client that these findings confirm normal shunt function.",
    "Encourage the client to wait several days before reporting symptoms.",
    "Increase environmental stimulation."
  ],
  answer: "Evaluate promptly for shunt malfunction and increasing ICP.",
  rationale: "Recurrence of headache, vomiting, or neurologic changes in a client with a VP shunt can indicate obstruction or malfunction with recurrent hydrocephalus and increased ICP.",
  takeaway: "Return of ICP symptoms after shunting suggests possible malfunction."
},

{
  id: "CVA-ICP-059",
  caseId: "CVA-ICP-059",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving mannitol has worsening renal function and rising serum osmolality. Which action should the nurse anticipate?",
  choices: [
    "Hold the medication and notify the provider according to the treatment plan.",
    "Increase the dose without notifying the provider.",
    "Ignore the laboratory results because they are unrelated to mannitol.",
    "Encourage the client to ambulate immediately."
  ],
  answer: "Hold the medication and notify the provider according to the treatment plan.",
  rationale: "Renal function and serum osmolality must be monitored during mannitol therapy. Worsening renal function or excessive osmolality can make continued therapy unsafe.",
  takeaway: "Mannitol requires close kidney and osmolality monitoring."
},

{
  id: "CVA-ICP-060",
  caseId: "CVA-ICP-060",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% saline has improving neurologic status but develops new bilateral crackles and increasing oxygen requirements. Which problem should the nurse prioritize?",
  choices: [
    "Fluid overload affecting respiratory status",
    "Expressive aphasia",
    "Improved intracranial pressure",
    "Chronic urinary incontinence"
  ],
  answer: "Fluid overload affecting respiratory status",
  rationale: "Hypertonic saline can expand intravascular volume and contribute to pulmonary edema. New crackles and increased oxygen requirements indicate a potentially serious respiratory complication.",
  takeaway: "Monitor both neurologic response and fluid overload during hypertonic saline therapy."
},

{
  id: "CVA-ICP-061",
  caseId: "CVA-ICP-061",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client finding is most concerning for impending brain herniation?",
  choices: [
    "Rapid decline in consciousness with a new fixed dilated pupil",
    "Stable expressive aphasia",
    "Chronic urinary incontinence",
    "Mild headache unchanged for several weeks"
  ],
  answer: "Rapid decline in consciousness with a new fixed dilated pupil",
  rationale: "Rapid deterioration in consciousness combined with a new fixed dilated pupil suggests severe increased ICP with brain displacement and possible herniation.",
  takeaway: "Rapid LOC decline + blown pupil = herniation emergency."
},

{
  id: "CVA-ICP-062",
  caseId: "CVA-ICP-062",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Uncal Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has a left fixed dilated pupil and worsening right-sided weakness. Which finding pattern does the nurse recognize?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Tonsillar herniation",
    "Subfalcine herniation"
  ],
  answer: "Left uncal herniation",
  rationale: "Uncal herniation typically produces an ipsilateral fixed dilated pupil and contralateral motor weakness.",
  takeaway: "Uncal: blown pupil same side, weakness opposite side."
},

{
  id: "CVA-ICP-063",
  caseId: "CVA-ICP-063",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Tonsillar Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding in a client with tonsillar herniation presents the most immediate threat to life?",
  choices: [
    "Apnea",
    "Headache",
    "Confusion",
    "Urinary incontinence"
  ],
  answer: "Apnea",
  rationale: "Tonsillar herniation can compress the medulla and vital respiratory centers. Apnea represents immediate failure of a life-sustaining function.",
  takeaway: "Tonsillar herniation can kill by compressing respiratory centers."
},

{
  id: "CVA-ICP-064",
  caseId: "CVA-ICP-064",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Central Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client progresses from confusion to unresponsiveness and then develops bilateral abnormal posturing. Which condition best explains the progression?",
  choices: [
    "Central herniation",
    "Stable hydrocephalus",
    "Transient ischemic attack",
    "Isolated expressive aphasia"
  ],
  answer: "Central herniation",
  rationale: "Central herniation can produce progressive deterioration in consciousness and bilateral abnormal posturing as downward displacement of brain structures occurs.",
  takeaway: "Central herniation = progressive LOC decline + bilateral posturing."
},

{
  id: "CVA-ICP-065",
  caseId: "CVA-ICP-065",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subfalcine Herniation",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which assessment finding is most consistent with subfalcine herniation?",
  choices: [
    "Contralateral leg weakness with midline shift",
    "Ipsilateral blown pupil with contralateral arm weakness",
    "Apnea caused by medullary compression",
    "Bilateral posturing with rapid decline in consciousness"
  ],
  answer: "Contralateral leg weakness with midline shift",
  rationale: "The course associates subfalcine herniation with cerebral midline shift and contralateral leg weakness.",
  takeaway: "Subfalcine = midline shift + opposite leg weakness."
},

{
  id: "CVA-ICP-066",
  caseId: "CVA-ICP-066",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has severe cerebral edema and increasing ICP. Which findings require immediate escalation? Select all that apply.",
  choices: [
    "New fixed dilated pupil",
    "Progressive decrease in consciousness",
    "New abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widened pulse pressure",
    "Stable orientation"
  ],
  answer: [
    "New fixed dilated pupil",
    "Progressive decrease in consciousness",
    "New abnormal posturing",
    "Irregular respirations",
    "Bradycardia with widened pulse pressure"
  ],
  rationale: "These findings indicate severe neurologic deterioration, late increased ICP, or possible herniation and require immediate escalation.",
  takeaway: "Late ICP findings are not observation findings—they are emergency findings."
},

{
  id: "CVA-ICP-067",
  caseId: "CVA-ICP-067",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four neurologic clients. Which client should be assessed FIRST?",
  choices: [
    "A client with cerebral edema who has developed irregular respirations",
    "A client with stable left-sided weakness",
    "A client with chronic hydrocephalus and urinary incontinence",
    "A client with expressive aphasia requesting a communication board"
  ],
  answer: "A client with cerebral edema who has developed irregular respirations",
  rationale: "Irregular respirations are a late sign of severe increased ICP and may indicate brainstem compromise and impending herniation.",
  takeaway: "Breathing changes in a neurologic client are an immediate priority."
},

{
  id: "CVA-ICP-068",
  caseId: "CVA-ICP-068",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP is positioned with the head of the bed at 30 degrees and the head midline. A family member asks why this position is important. Which explanation by the nurse is best?",
  choices: [
    "This position promotes venous drainage from the brain and helps limit increases in ICP.",
    "This position intentionally decreases oxygen delivery to the brain.",
    "This position increases cerebral blood volume to raise ICP.",
    "This position prevents all causes of cerebral edema."
  ],
  answer: "This position promotes venous drainage from the brain and helps limit increases in ICP.",
  rationale: "Head elevation and neutral alignment facilitate venous outflow from the brain, which can help prevent further increases in intracranial pressure.",
  takeaway: "Positioning is part of ICP management because venous drainage matters."
},

{
  id: "CVA-ICP-069",
  caseId: "CVA-ICP-069",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP requires airway suctioning because of retained secretions. Which nursing plan is most appropriate?",
  choices: [
    "Suction only when necessary and hyperoxygenate before and after the procedure.",
    "Perform prolonged suctioning every 15 minutes regardless of secretions.",
    "Place the client flat and flex the neck before suctioning.",
    "Avoid monitoring oxygenation during the procedure."
  ],
  answer: "Suction only when necessary and hyperoxygenate before and after the procedure.",
  rationale: "Suctioning can increase ICP and cause hypoxemia. It should be limited to situations in which it is necessary, with oxygenation supported before and after.",
  takeaway: "Necessary suctioning should be brief and supported with oxygenation."
},

{
  id: "CVA-ICP-070",
  caseId: "CVA-ICP-070",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke develops cerebral edema. The nurse notes increasing restlessness, worsening headache, and vomiting. Which action best demonstrates appropriate clinical judgment?",
  choices: [
    "Recognize these as possible early increased-ICP findings and escalate the change in neurologic status.",
    "Wait for Cushing triad before reporting the findings.",
    "Assume the symptoms are expected after every stroke.",
    "Delay neurologic assessment until the client develops a fixed pupil."
  ],
  answer: "Recognize these as possible early increased-ICP findings and escalate the change in neurologic status.",
  rationale: "Restlessness, headache, vomiting, and changes in consciousness can occur before late signs such as Cushing triad. Early recognition allows intervention before severe deterioration.",
  takeaway: "Do not wait for late ICP signs before acting."
},

{
  id: "CVA-ICP-071",
  caseId: "CVA-ICP-071",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding should the nurse recognize as a LATE rather than early manifestation of increased ICP?",
  choices: [
    "Bradycardia with widened pulse pressure",
    "Restlessness",
    "Irritability",
    "Worsening headache"
  ],
  answer: "Bradycardia with widened pulse pressure",
  rationale: "Bradycardia with widening pulse pressure is part of Cushing triad and represents late, severe ICP elevation. Restlessness, irritability, and worsening headache can occur earlier.",
  takeaway: "Cushing response is late—mental-status changes come earlier."
},

{
  id: "CVA-ICP-072",
  caseId: "CVA-ICP-072",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has an external ventricular drain. The nurse notes fever, cloudy-appearing CSF, redness at the insertion site, and increasing confusion. Which hypothesis has the highest priority?",
  choices: [
    "CSF drainage-system infection",
    "Successful treatment of hydrocephalus",
    "Normal postoperative recovery",
    "Improved cerebral perfusion"
  ],
  answer: "CSF drainage-system infection",
  rationale: "Fever, abnormal CSF appearance, insertion-site redness, and neurologic change are concerning for infection associated with the CSF drainage system.",
  takeaway: "EVD infection cues can be local, systemic, and neurologic."
},

{
  id: "CVA-ICP-073",
  caseId: "CVA-ICP-073",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP receives mannitol. Which finding best suggests that the therapy is producing the intended neurologic effect?",
  choices: [
    "Improvement in neurologic status with reduction of signs associated with increased ICP",
    "Development of a fixed dilated pupil",
    "Progression to abnormal posturing",
    "Development of Cushing triad"
  ],
  answer: "Improvement in neurologic status with reduction of signs associated with increased ICP",
  rationale: "Mannitol is administered to reduce cerebral edema and ICP. Improvement rather than progression of neurologic deterioration indicates the desired response.",
  takeaway: "The goal of mannitol is improved ICP-related neurologic status."
},

{
  id: "CVA-ICP-074",
  caseId: "CVA-ICP-074",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment data should the nurse trend when evaluating a client being treated for increased ICP? Select all that apply.",
  choices: [
    "Level of consciousness",
    "Pupillary response",
    "Motor response",
    "Respiratory pattern",
    "Blood pressure and heart rate",
    "Presence of new seizures"
  ],
  answer: [
    "Level of consciousness",
    "Pupillary response",
    "Motor response",
    "Respiratory pattern",
    "Blood pressure and heart rate",
    "Presence of new seizures"
  ],
  rationale: "Neurologic, respiratory, and hemodynamic trends help identify progression of increased ICP and possible herniation.",
  takeaway: "ICP assessment is a trend of LOC, pupils, motor response, breathing, and vital signs."
},

{
  id: "CVA-ICP-075",
  caseId: "CVA-ICP-075",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema is initially restless and confused. Several hours later, the client develops a fixed right pupil, left-sided weakness, bradycardia, hypertension with widened pulse pressure, and irregular respirations. Which sequence best describes what has occurred?",
  choices: [
    "Early increased ICP progressed to late increased ICP with probable uncal herniation.",
    "Hydrocephalus resolved and cerebral perfusion normalized.",
    "The client progressed from ischemic stroke to a TIA.",
    "The findings represent uncomplicated neurologic recovery."
  ],
  answer: "Early increased ICP progressed to late increased ICP with probable uncal herniation.",
  rationale: "Restlessness and confusion can occur early with increasing ICP. A unilateral fixed pupil with contralateral weakness suggests uncal herniation, while bradycardia, widened pulse pressure, and irregular respirations indicate late severe ICP elevation.",
  takeaway: "Recognize the progression: early LOC changes → late ICP signs → herniation."
},

{
  id: "CVA-ICP-076",
  caseId: "CVA-ICP-076",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse notices that a client with increased ICP has slid down in bed and now has the neck flexed and hips sharply bent. What should the nurse do FIRST?",
  choices: [
    "Reposition the client to restore neutral alignment and reduce neck and hip flexion.",
    "Leave the client in the position because flexion improves cerebral drainage.",
    "Lower the head of the bed below the level of the heart.",
    "Increase environmental stimulation to awaken the client."
  ],
  answer: "Reposition the client to restore neutral alignment and reduce neck and hip flexion.",
  rationale: "Neck and hip flexion can interfere with cerebral venous drainage and contribute to increased ICP. Proper alignment should be restored.",
  takeaway: "Poor positioning can worsen ICP."
},

{
  id: "CVA-ICP-077",
  caseId: "CVA-ICP-077",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse reviews four changes in a client with increased ICP. Which change most strongly indicates progression from compensated to severe neurologic deterioration?",
  choices: [
    "The client progresses from confusion to abnormal posturing and irregular respirations.",
    "The client reports the same mild headache as earlier.",
    "The client's neurologic examination remains unchanged.",
    "The client asks to reduce the room lighting."
  ],
  answer: "The client progresses from confusion to abnormal posturing and irregular respirations.",
  rationale: "Abnormal posturing and irregular respirations are late findings of severe increased ICP and indicate significant neurologic deterioration.",
  takeaway: "Posturing and respiratory changes indicate advanced ICP deterioration."
},

{
  id: "CVA-ICP-078",
  caseId: "CVA-ICP-078",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A nurse is caring for a client at risk for increased ICP after a large stroke. Which findings should be reported as evidence of neurologic deterioration? Select all that apply.",
  choices: [
    "Increasing confusion",
    "New vomiting",
    "Worsening headache",
    "New pupillary asymmetry",
    "Decreasing responsiveness",
    "Stable weakness unchanged from admission"
  ],
  answer: [
    "Increasing confusion",
    "New vomiting",
    "Worsening headache",
    "New pupillary asymmetry",
    "Decreasing responsiveness"
  ],
  rationale: "New mental-status changes, vomiting, headache, pupillary abnormalities, and decreasing responsiveness can indicate increasing ICP. Stable baseline weakness does not represent new deterioration.",
  takeaway: "Separate stable deficits from new neurologic changes."
},

{
  id: "CVA-ICP-079",
  caseId: "CVA-ICP-079",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP develops worsening hypoxemia and hypotension. Why is this combination especially dangerous?",
  choices: [
    "Both conditions can further reduce oxygen delivery and perfusion to injured brain tissue.",
    "Both conditions reliably decrease ICP without treatment.",
    "The combination improves cerebral autoregulation.",
    "The combination prevents secondary brain injury."
  ],
  answer: "Both conditions can further reduce oxygen delivery and perfusion to injured brain tissue.",
  rationale: "Hypoxemia reduces oxygen availability while hypotension reduces cerebral perfusion. Both can worsen secondary brain injury in a client whose intracranial pressure is already elevated.",
  takeaway: "Avoid the deadly combination of low oxygen and low perfusion in brain injury."
},

{
  id: "CVA-ICP-080",
  caseId: "CVA-ICP-080",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated ICP Care",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke develops worsening cerebral edema. The client progresses from restlessness to decreased consciousness, then develops a unilateral fixed pupil and irregular respirations. Which nursing conclusion is most appropriate?",
  choices: [
    "The client is progressing from early increased ICP toward brain herniation and requires immediate escalation.",
    "The findings represent normal stroke recovery.",
    "The client should be observed until Cushing triad is fully present before intervention.",
    "The findings indicate that cerebral edema is resolving."
  ],
  answer: "The client is progressing from early increased ICP toward brain herniation and requires immediate escalation.",
  rationale: "Restlessness and declining consciousness are important early signs of increased ICP. A fixed pupil and abnormal respirations are late, ominous findings suggesting brain displacement and herniation.",
  takeaway: "Recognize the progression early—do not wait for complete herniation signs."
},

{
  id: "CVA-ICP-081",
  caseId: "CVA-ICP-081",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Increased ICP",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP is restless and confused but has stable vital signs. Which finding would indicate the client's condition is becoming significantly worse?",
  choices: [
    "The client becomes increasingly difficult to arouse.",
    "The client reports a mild headache.",
    "The client asks for the room lights to be dimmed.",
    "The client remains oriented to person."
  ],
  answer: "The client becomes increasingly difficult to arouse.",
  rationale: "A progressive decline in level of consciousness is an important sign of worsening intracranial pressure and neurologic deterioration.",
  takeaway: "Declining LOC is one of the most important warning signs of worsening ICP."
},

{
  id: "CVA-ICP-082",
  caseId: "CVA-ICP-082",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Early vs Late ICP",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which assessment finding should the nurse recognize as an EARLY manifestation of increasing ICP?",
  choices: [
    "Restlessness and confusion",
    "Cushing triad",
    "Fixed dilated pupil",
    "Abnormal posturing"
  ],
  answer: "Restlessness and confusion",
  rationale: "Changes in level of consciousness such as restlessness, irritability, and confusion can occur early as intracranial pressure begins to rise. Cushing triad, fixed pupils, and posturing are late findings.",
  takeaway: "Early ICP changes are often subtle changes in mental status."
},

{
  id: "CVA-ICP-083",
  caseId: "CVA-ICP-083",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Early vs Late ICP",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which assessment finding should the nurse recognize as a LATE manifestation of increased ICP?",
  choices: [
    "Irregular respirations",
    "Mild restlessness",
    "Irritability",
    "Increasing headache"
  ],
  answer: "Irregular respirations",
  rationale: "Irregular respirations are a late finding of severe increased ICP and may indicate brainstem involvement. Restlessness, irritability, and worsening headache can occur earlier.",
  takeaway: "Respiratory-pattern changes are late and dangerous ICP findings."
},

{
  id: "CVA-ICP-084",
  caseId: "CVA-ICP-084",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Early vs Late ICP",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings should the nurse classify as LATE manifestations of increased ICP? Select all that apply.",
  choices: [
    "Bradycardia",
    "Widening pulse pressure",
    "Irregular respirations",
    "Pupillary changes",
    "Abnormal posturing",
    "Mild restlessness"
  ],
  answer: [
    "Bradycardia",
    "Widening pulse pressure",
    "Irregular respirations",
    "Pupillary changes",
    "Abnormal posturing"
  ],
  rationale: "Cushing response, pupillary abnormalities, irregular respirations, and abnormal posturing are late findings associated with severe ICP elevation. Mild restlessness can occur earlier.",
  takeaway: "Late ICP = Cushing changes + pupils + posturing + respiratory deterioration."
},

{
  id: "CVA-ICP-085",
  caseId: "CVA-ICP-085",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's vital signs change from BP 138/78 mmHg and HR 82/min to BP 196/62 mmHg and HR 46/min. The respiratory pattern has also become irregular. Which complication should the nurse suspect?",
  choices: [
    "Severe increased intracranial pressure",
    "Improving cerebral perfusion",
    "Resolution of cerebral edema",
    "Uncomplicated dehydration"
  ],
  answer: "Severe increased intracranial pressure",
  rationale: "Hypertension with widening pulse pressure, bradycardia, and irregular respirations represents Cushing triad, a late finding of severe increased ICP.",
  takeaway: "Cushing triad is a late warning of severe ICP elevation."
},

{
  id: "CVA-ICP-086",
  caseId: "CVA-ICP-086",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cushing Triad",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse identifies Cushing triad in a client with cerebral edema. Which action is the priority?",
  choices: [
    "Immediately escalate care for severe increased ICP and possible herniation.",
    "Reassess the client at the next scheduled neurologic check.",
    "Encourage oral fluids.",
    "Allow the client to sleep without interruption."
  ],
  answer: "Immediately escalate care for severe increased ICP and possible herniation.",
  rationale: "Cushing triad is a late and dangerous manifestation of increased ICP and can indicate impending brain herniation.",
  takeaway: "Cushing triad requires immediate escalation."
},

{
  id: "CVA-ICP-087",
  caseId: "CVA-ICP-087",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Reduction of Risk Potential",
  question: "Why should the nurse avoid excessive hip flexion in a client with increased ICP?",
  choices: [
    "It can interfere with venous return and contribute to increased intracranial pressure.",
    "It causes cerebrospinal fluid production to stop.",
    "It immediately causes cerebral hemorrhage.",
    "It lowers intracranial pressure too rapidly."
  ],
  answer: "It can interfere with venous return and contribute to increased intracranial pressure.",
  rationale: "Excessive neck or hip flexion can interfere with venous drainage and contribute to increased intracranial pressure.",
  takeaway: "Avoid positioning that interferes with venous drainage from the brain."
},

{
  id: "CVA-ICP-088",
  caseId: "CVA-ICP-088",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which room environment is most appropriate for a client with increased ICP?",
  choices: [
    "A quiet environment with unnecessary stimulation minimized",
    "Bright lights with frequent visitors",
    "Continuous television and conversation",
    "Frequent interruptions to prevent the client from sleeping"
  ],
  answer: "A quiet environment with unnecessary stimulation minimized",
  rationale: "Excessive stimulation can contribute to ICP elevations. Nursing care should minimize unnecessary environmental stimulation.",
  takeaway: "Reduce unnecessary stimulation when ICP is elevated."
},

{
  id: "CVA-ICP-089",
  caseId: "CVA-ICP-089",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ICP Nursing Care",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "The nurse has several interventions scheduled for a client with increased ICP. Which approach is most appropriate?",
  choices: [
    "Space interventions to allow periods of rest.",
    "Perform every intervention at the same time to maximize stimulation.",
    "Wake the client every few minutes for nonessential care.",
    "Perform unnecessary suctioning between procedures."
  ],
  answer: "Space interventions to allow periods of rest.",
  rationale: "The course emphasizes minimizing stimulation and avoiding excessive clustering of care because stimulation can contribute to increases in ICP.",
  takeaway: "Space care and allow recovery periods when ICP is elevated."
},

{
  id: "CVA-ICP-090",
  caseId: "CVA-ICP-090",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client develops hydrocephalus after a neurologic injury. Which assessment finding should cause the nurse the greatest concern?",
  choices: [
    "The client is becoming progressively less responsive.",
    "The client reports intermittent blurred vision.",
    "The client has urinary incontinence.",
    "The client reports mild irritability."
  ],
  answer: "The client is becoming progressively less responsive.",
  rationale: "A progressive decline in consciousness suggests worsening neurologic function and rapidly increasing ICP, requiring immediate evaluation.",
  takeaway: "With hydrocephalus, declining responsiveness is a high-priority warning."
},

{
  id: "CVA-ICP-091",
  caseId: "CVA-ICP-091",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hydrocephalus",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which manifestations may occur with hydrocephalus? Select all that apply.",
  choices: [
    "Headache",
    "Vomiting",
    "Changes in level of consciousness",
    "Blurred vision",
    "Behavioral changes",
    "Urinary incontinence"
  ],
  answer: [
    "Headache",
    "Vomiting",
    "Changes in level of consciousness",
    "Blurred vision",
    "Behavioral changes",
    "Urinary incontinence"
  ],
  rationale: "Hydrocephalus can present differently depending on how rapidly CSF accumulates. Findings described in the course include headache, vomiting, changes in consciousness, visual changes, behavioral changes, and urinary incontinence.",
  takeaway: "Hydrocephalus manifestations depend partly on how quickly pressure develops."
},

{
  id: "CVA-ICP-092",
  caseId: "CVA-ICP-092",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "EVD",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "What is the primary purpose of an external ventricular drain in acute hydrocephalus?",
  choices: [
    "Drain cerebrospinal fluid.",
    "Dissolve a cerebral thrombus.",
    "Restore cardiac rhythm.",
    "Prevent atrial fibrillation."
  ],
  answer: "Drain cerebrospinal fluid.",
  rationale: "An external ventricular drain provides temporary external drainage of CSF and can be used in acute hydrocephalus.",
  takeaway: "EVD = temporary external CSF drainage."
},

{
  id: "CVA-ICP-093",
  caseId: "CVA-ICP-093",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "CSF Drain Infection",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which findings should cause the nurse to suspect infection in a client with a CSF drainage device? Select all that apply.",
  choices: [
    "Fever",
    "Redness at the insertion or shunt site",
    "Cloudy CSF",
    "Altered level of consciousness",
    "New neurologic deterioration",
    "Stable neurologic status without fever"
  ],
  answer: [
    "Fever",
    "Redness at the insertion or shunt site",
    "Cloudy CSF",
    "Altered level of consciousness",
    "New neurologic deterioration"
  ],
  rationale: "Potential infection findings include fever, redness, abnormal CSF appearance, and neurologic deterioration.",
  takeaway: "CSF-device infection may show systemic, local, and neurologic cues."
},

{
  id: "CVA-ICP-094",
  caseId: "CVA-ICP-094",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "CSF Drain Infection",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Reduction of Risk Potential",
  question: "Which nursing action is most important for reducing infection risk when handling an external ventricular drainage system?",
  choices: [
    "Use strict sterile technique.",
    "Disconnect the system frequently.",
    "Open the drainage system during every neurologic assessment.",
    "Allow multiple visitors to handle the tubing."
  ],
  answer: "Use strict sterile technique.",
  rationale: "Strict sterile technique is essential when managing an external CSF drainage system because infection can lead to serious neurologic complications.",
  takeaway: "EVD care requires strict infection prevention."
},

{
  id: "CVA-ICP-095",
  caseId: "CVA-ICP-095",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client with cerebral edema receives IV mannitol. Which finding requires the nurse's attention before administering another dose?",
  choices: [
    "Worsening renal function",
    "Improving level of consciousness",
    "Stable electrolytes",
    "Adequate urine output"
  ],
  answer: "Worsening renal function",
  rationale: "Mannitol therapy requires monitoring of renal function because impaired renal clearance can increase the risk of complications.",
  takeaway: "Check kidney function during mannitol therapy."
},

{
  id: "CVA-ICP-096",
  caseId: "CVA-ICP-096",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Mannitol",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "The nurse is monitoring a client receiving mannitol. Which data should be followed closely? Select all that apply.",
  choices: [
    "Intake and output",
    "Renal function",
    "Serum osmolarity",
    "Electrolytes",
    "Neurologic status",
    "Favorite foods"
  ],
  answer: [
    "Intake and output",
    "Renal function",
    "Serum osmolarity",
    "Electrolytes",
    "Neurologic status"
  ],
  rationale: "The course emphasizes monitoring fluid balance, kidney function, serum osmolarity, electrolytes, and neurologic response during mannitol therapy.",
  takeaway: "Mannitol requires both laboratory and neurologic monitoring."
},

{
  id: "CVA-ICP-097",
  caseId: "CVA-ICP-097",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "A client receiving 3% hypertonic saline develops new dyspnea and bilateral crackles. Which action should the nurse prioritize?",
  choices: [
    "Recognize possible fluid overload and promptly evaluate the client's respiratory status.",
    "Increase the infusion rate.",
    "Document the findings as an expected response requiring no action.",
    "Encourage the client to drink additional fluids."
  ],
  answer: "Recognize possible fluid overload and promptly evaluate the client's respiratory status.",
  rationale: "Hypertonic saline can cause intravascular volume expansion and pulmonary edema. New dyspnea and crackles require prompt assessment.",
  takeaway: "Watch for pulmonary edema during hypertonic saline therapy."
},

{
  id: "CVA-ICP-098",
  caseId: "CVA-ICP-098",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hypertonic Saline",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Pharmacological and Parenteral Therapies",
  question: "Which parameters should the nurse monitor during hypertonic saline therapy for increased ICP? Select all that apply.",
  choices: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema",
    "Hair growth"
  ],
  answer: [
    "Serum sodium",
    "Neurologic status",
    "Lung sounds",
    "Volume status",
    "Signs of pulmonary edema"
  ],
  rationale: "Hypertonic saline therapy requires monitoring of serum sodium, neurologic response, and fluid status because hypernatremia and fluid overload can occur.",
  takeaway: "Hypertonic saline monitoring centers on sodium, neuro status, and fluid balance."
},

{
  id: "CVA-ICP-099",
  caseId: "CVA-ICP-099",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Herniation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which finding most strongly suggests that increased ICP has progressed to brain herniation?",
  choices: [
    "A new fixed dilated pupil with rapidly declining consciousness",
    "Mild intermittent headache",
    "Stable urinary incontinence",
    "Unchanged chronic weakness"
  ],
  answer: "A new fixed dilated pupil with rapidly declining consciousness",
  rationale: "A fixed dilated pupil and rapid decline in consciousness are ominous findings associated with severe brain displacement and herniation.",
  takeaway: "Herniation causes dramatic new neurologic deterioration."
},

{
  id: "CVA-ICP-100",
  caseId: "CVA-ICP-100",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Uncal Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's right pupil becomes fixed and dilated. The client then develops worsening weakness of the left arm and leg. Which complication is most consistent with these findings?",
  choices: [
    "Right uncal herniation",
    "Left uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Right uncal herniation",
  rationale: "Uncal herniation can compress cranial nerve III on the affected side, producing an ipsilateral blown pupil, while compression of motor pathways can cause contralateral weakness.",
  takeaway: "Right blown pupil + left weakness = right uncal herniation pattern."
},

{
  id: "CVA-ICP-101",
  caseId: "CVA-ICP-101",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Central Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe cerebral edema progresses from drowsiness to unresponsiveness and develops bilateral abnormal posturing. Which complication should the nurse suspect?",
  choices: [
    "Central herniation",
    "Subfalcine herniation",
    "Stable TIA",
    "Uncomplicated hydrocephalus"
  ],
  answer: "Central herniation",
  rationale: "Central herniation is associated with rapid deterioration in level of consciousness and bilateral abnormal posturing.",
  takeaway: "Central herniation produces progressive LOC decline and bilateral posturing."
},

{
  id: "CVA-ICP-102",
  caseId: "CVA-ICP-102",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Subfalcine Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client's CT demonstrates a significant midline shift. The nurse also identifies new left-leg weakness. Which herniation pattern should the nurse suspect?",
  choices: [
    "Subfalcine herniation",
    "Tonsillar herniation",
    "Uncal herniation",
    "Central herniation"
  ],
  answer: "Subfalcine herniation",
  rationale: "Subfalcine herniation is associated with midline shift and can produce contralateral leg weakness.",
  takeaway: "Subfalcine herniation often shows midline shift and opposite-leg weakness."
},

{
  id: "CVA-ICP-103",
  caseId: "CVA-ICP-103",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Tonsillar Herniation",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops irregular respirations that progress to apnea. Which herniation syndrome is most concerning?",
  choices: [
    "Tonsillar herniation",
    "Subfalcine herniation",
    "Stable uncal compression",
    "Chronic communicating hydrocephalus"
  ],
  answer: "Tonsillar herniation",
  rationale: "Tonsillar herniation can compress the medulla and vital respiratory centers, causing irregular respirations and progression to apnea.",
  takeaway: "Tonsillar herniation threatens the respiratory centers."
},

{
  id: "CVA-ICP-104",
  caseId: "CVA-ICP-104",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Herniation Syndromes",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which findings are correctly associated with brain herniation syndromes? Select all that apply.",
  choices: [
    "Uncal herniation — ipsilateral fixed dilated pupil",
    "Uncal herniation — contralateral weakness",
    "Central herniation — bilateral abnormal posturing",
    "Subfalcine herniation — contralateral leg weakness",
    "Tonsillar herniation — respiratory deterioration",
    "Tonsillar herniation — isolated expressive aphasia"
  ],
  answer: [
    "Uncal herniation — ipsilateral fixed dilated pupil",
    "Uncal herniation — contralateral weakness",
    "Central herniation — bilateral abnormal posturing",
    "Subfalcine herniation — contralateral leg weakness",
    "Tonsillar herniation — respiratory deterioration"
  ],
  rationale: "The course associates each herniation syndrome with characteristic neurologic findings based on the structures being compressed.",
  takeaway: "Match the herniation pattern to the structure being compressed."
},

{
  id: "CVA-ICP-105",
  caseId: "CVA-ICP-105",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Herniation Syndromes",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is caring for four clients with neurologic disorders. Which client requires immediate intervention?",
  choices: [
    "A client with a fixed dilated pupil and rapidly decreasing consciousness",
    "A client with chronic urinary incontinence from hydrocephalus",
    "A client with stable expressive aphasia after stroke",
    "A client with unchanged left-sided weakness"
  ],
  answer: "A client with a fixed dilated pupil and rapidly decreasing consciousness",
  rationale: "A fixed dilated pupil combined with rapidly decreasing consciousness strongly suggests severe increased ICP and possible brain herniation.",
  takeaway: "Herniation cues outrank stable neurologic deficits."
},

{
  id: "CVA-ICP-106",
  caseId: "CVA-ICP-106",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large ischemic stroke was alert 2 hours ago. The client is now confused, vomiting, and increasingly drowsy. Which hypothesis should the nurse prioritize?",
  choices: [
    "Cerebral edema may be causing increasing intracranial pressure.",
    "The stroke is resolving normally.",
    "The client is demonstrating uncomplicated fatigue.",
    "Cerebral perfusion has completely normalized."
  ],
  answer: "Cerebral edema may be causing increasing intracranial pressure.",
  rationale: "A large stroke can produce cerebral edema. New vomiting, confusion, and decreasing consciousness are concerning for increasing ICP.",
  takeaway: "A worsening neuro exam after stroke may signal cerebral edema and rising ICP."
},

{
  id: "CVA-ICP-107",
  caseId: "CVA-ICP-107",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse identifies worsening headache and restlessness in a client with cerebral edema. Which finding would indicate that the client's condition has progressed to a much later stage?",
  choices: [
    "Bradycardia, widened pulse pressure, and irregular respirations",
    "Continued mild headache",
    "Persistent irritability",
    "Intermittent nausea"
  ],
  answer: "Bradycardia, widened pulse pressure, and irregular respirations",
  rationale: "Cushing triad is a late finding of severe increased ICP. Headache, irritability, and nausea may appear earlier.",
  takeaway: "Know the progression from subtle early signs to late Cushing response."
},

{
  id: "CVA-ICP-108",
  caseId: "CVA-ICP-108",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus has a VP shunt. Which change should the nurse recognize as most concerning for shunt malfunction?",
  choices: [
    "Return of headache, vomiting, and declining consciousness",
    "Improved orientation",
    "Resolution of vomiting",
    "Improved visual symptoms"
  ],
  answer: "Return of headache, vomiting, and declining consciousness",
  rationale: "Recurrence of manifestations associated with increased ICP suggests that CSF may no longer be draining effectively through the shunt.",
  takeaway: "Shunt malfunction can cause hydrocephalus and ICP symptoms to return."
},

{
  id: "CVA-ICP-109",
  caseId: "CVA-ICP-109",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP has the following orders. Which intervention should the nurse question?",
  choices: [
    "Maintain the client flat with the neck flexed.",
    "Elevate the head of the bed approximately 30 degrees.",
    "Maintain neutral head alignment.",
    "Perform frequent neurologic assessments."
  ],
  answer: "Maintain the client flat with the neck flexed.",
  rationale: "Neck flexion and flat positioning can impair cerebral venous drainage and contribute to increased ICP. Head elevation and neutral alignment are preferred unless contraindicated.",
  takeaway: "Promote venous drainage; do not obstruct it."
},

{
  id: "CVA-ICP-110",
  caseId: "CVA-ICP-110",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which findings in a client with increased ICP represent an immediate neurologic emergency? Select all that apply.",
  choices: [
    "Fixed dilated pupil",
    "Rapidly decreasing level of consciousness",
    "Cushing triad",
    "Abnormal posturing",
    "Irregular respirations",
    "Stable mild headache"
  ],
  answer: [
    "Fixed dilated pupil",
    "Rapidly decreasing level of consciousness",
    "Cushing triad",
    "Abnormal posturing",
    "Irregular respirations"
  ],
  rationale: "These findings indicate severe neurologic deterioration and possible brain herniation. A stable mild headache is less urgent than these late findings.",
  takeaway: "Late ICP and herniation signs require immediate action."
},

{
  id: "CVA-ICP-111",
  caseId: "CVA-ICP-111",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP develops a temperature of 39.4°C (102.9°F). Why should the nurse address the fever promptly?",
  choices: [
    "Fever can contribute to secondary brain injury.",
    "Fever always causes CSF production to stop.",
    "Fever guarantees development of an embolic stroke.",
    "Fever prevents cerebral edema."
  ],
  answer: "Fever can contribute to secondary brain injury.",
  rationale: "The course emphasizes prevention and management of fever as part of protecting the neurologically injured client from secondary brain injury.",
  takeaway: "Prevent fever because the injured brain is vulnerable to secondary insults."
},

{
  id: "CVA-ICP-112",
  caseId: "CVA-ICP-112",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with cerebral edema has increased ICP. Which finding presents the greatest immediate threat to cerebral perfusion?",
  choices: [
    "Significant hypotension",
    "Mild headache",
    "Urinary incontinence",
    "Stable blurred vision"
  ],
  answer: "Significant hypotension",
  rationale: "When intracranial pressure is elevated, adequate systemic blood pressure is necessary to support cerebral perfusion. Hypotension can further compromise cerebral blood flow.",
  takeaway: "Avoid hypotension when ICP is high."
},

{
  id: "CVA-ICP-113",
  caseId: "CVA-ICP-113",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP requires suctioning for copious airway secretions. Which action best balances airway management with ICP precautions?",
  choices: [
    "Hyperoxygenate and suction only as necessary while monitoring the client's response.",
    "Avoid suctioning even if the airway becomes obstructed.",
    "Perform prolonged suctioning until no secretions remain.",
    "Place the client in Trendelenburg position before suctioning."
  ],
  answer: "Hyperoxygenate and suction only as necessary while monitoring the client's response.",
  rationale: "Airway maintenance remains essential, but suctioning can increase ICP. The course recommends hyperoxygenation and limiting suctioning to when it is necessary.",
  takeaway: "Protect the airway while minimizing ICP spikes."
},

{
  id: "CVA-ICP-114",
  caseId: "CVA-ICP-114",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP is receiving treatment. Which assessment finding provides the best evidence that the client's neurologic condition is improving?",
  choices: [
    "The client is more alert and follows commands consistently.",
    "The client develops a fixed pupil.",
    "The client begins posturing.",
    "The respiratory pattern becomes irregular."
  ],
  answer: "The client is more alert and follows commands consistently.",
  rationale: "Improvement in level of consciousness and ability to follow commands suggests improvement in neurologic function. Fixed pupils, posturing, and irregular respirations indicate deterioration.",
  takeaway: "Improving LOC is an important sign of neurologic improvement."
},

{
  id: "CVA-ICP-115",
  caseId: "CVA-ICP-115",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with severe increased ICP develops a left fixed dilated pupil, right-sided weakness, and decreasing consciousness. Which complication should the nurse suspect?",
  choices: [
    "Left uncal herniation",
    "Right uncal herniation",
    "Subfalcine herniation",
    "Stable hydrocephalus"
  ],
  answer: "Left uncal herniation",
  rationale: "An ipsilateral fixed dilated pupil with contralateral weakness is characteristic of uncal herniation on the side of the abnormal pupil.",
  takeaway: "Left blown pupil + right weakness = left uncal herniation."
},

{
  id: "CVA-ICP-116",
  caseId: "CVA-ICP-116",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with increased ICP progresses from confusion to unresponsiveness, bilateral posturing, and worsening respiratory abnormalities. Which interpretation is most appropriate?",
  choices: [
    "The client may be developing central herniation.",
    "The client's neurologic status is improving.",
    "The client is experiencing uncomplicated expressive aphasia.",
    "The findings are typical of stable chronic hydrocephalus."
  ],
  answer: "The client may be developing central herniation.",
  rationale: "Central herniation can produce progressive loss of consciousness, bilateral abnormal posturing, and worsening neurologic and respiratory function.",
  takeaway: "Central herniation produces progressive global neurologic deterioration."
},

{
  id: "CVA-ICP-117",
  caseId: "CVA-ICP-117",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which client should the nurse assess FIRST?",
  choices: [
    "A client with increased ICP who has developed periods of apnea",
    "A client with a VP shunt who has chronic urinary incontinence",
    "A client with stable post-stroke aphasia",
    "A client with unchanged hemiparesis"
  ],
  answer: "A client with increased ICP who has developed periods of apnea",
  rationale: "Apnea indicates failure of respiratory function and may occur with severe brainstem compression such as tonsillar herniation. Airway and breathing are immediate priorities.",
  takeaway: "Apnea is an immediate ABC emergency."
},

{
  id: "CVA-ICP-118",
  caseId: "CVA-ICP-118",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is planning care for a client with severe increased ICP. Which interventions are appropriate? Select all that apply.",
  choices: [
    "Maintain the head in neutral alignment.",
    "Elevate the head of the bed approximately 30 degrees.",
    "Minimize unnecessary stimulation.",
    "Avoid excessive neck and hip flexion.",
    "Prevent hypoxia and hypotension.",
    "Perform frequent unnecessary suctioning."
  ],
  answer: [
    "Maintain the head in neutral alignment.",
    "Elevate the head of the bed approximately 30 degrees.",
    "Minimize unnecessary stimulation.",
    "Avoid excessive neck and hip flexion.",
    "Prevent hypoxia and hypotension."
  ],
  rationale: "ICP management includes promoting venous drainage, minimizing stimulation, preventing secondary brain injury, and avoiding actions that can increase intracranial pressure.",
  takeaway: "ICP nursing care protects venous drainage, oxygenation, perfusion, and the neurologic exam."
},

{
  id: "CVA-ICP-119",
  caseId: "CVA-ICP-119",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with hydrocephalus and an EVD was alert earlier in the shift. The nurse now notes increasing drowsiness, vomiting, and worsening headache. Which action is most appropriate?",
  choices: [
    "Treat the change as acute neurologic deterioration and promptly evaluate the client and drainage system.",
    "Assume the client is tired and allow uninterrupted sleep.",
    "Wait for a fixed pupil before reporting the change.",
    "Encourage oral fluids and reassess tomorrow."
  ],
  answer: "Treat the change as acute neurologic deterioration and promptly evaluate the client and drainage system.",
  rationale: "New drowsiness, vomiting, and worsening headache are concerning for increased ICP. In a client with an EVD, the drainage system must also be considered as part of the evaluation.",
  takeaway: "EVD does not eliminate the risk of worsening hydrocephalus or ICP."
},

{
  id: "CVA-ICP-120",
  caseId: "CVA-ICP-120",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Case",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client with a large stroke develops cerebral edema. The nurse observes the following progression: restlessness → confusion → decreasing consciousness → unilateral fixed pupil → abnormal posturing → irregular respirations. Which conclusion best integrates these findings?",
  choices: [
    "The client is progressing from early increased ICP to late increased ICP and probable brain herniation.",
    "The client is demonstrating normal neurologic recovery after stroke.",
    "The client has progressed from stroke to an uncomplicated TIA.",
    "The findings indicate that cerebral edema has resolved."
  ],
  answer: "The client is progressing from early increased ICP to late increased ICP and probable brain herniation.",
  rationale: "Restlessness, confusion, and declining consciousness represent early progression of increased ICP. A fixed pupil, abnormal posturing, and irregular respirations are late and ominous findings consistent with severe ICP elevation and herniation.",
  takeaway: "Recognize the sequence: mental-status change → declining LOC → pupils/posturing/respirations → herniation."
}

];
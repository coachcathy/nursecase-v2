const neuroAnatomyFoundationQuestions = [

{
  id: "CVA-ANAT-001",
  caseId: "CVA-ANAT-001",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Lobes",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client is admitted after a cerebrovascular accident. The nurse notes impaired judgment, personality changes, and difficulty initiating voluntary movement. Which area of the brain is most likely affected?",
  choices: [
    "Frontal lobe",
    "Temporal lobe",
    "Occipital lobe",
    "Cerebellum"
  ],
  answer: "Frontal lobe",
  rationale: "The frontal lobe contains the motor cortex and is responsible for voluntary movement, personality, judgment, and problem solving. Damage to this area can therefore produce both motor and behavioral changes.",
  takeaway: "Frontal lobe = movement, judgment, personality, and expressive speech."
},

{
  id: "CVA-ANAT-002",
  caseId: "CVA-ANAT-002",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Lobes",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client can move all extremities but is unable to correctly interpret touch and has difficulty judging spatial relationships. Which cerebral lobe should the nurse suspect is affected?",
  choices: [
    "Frontal",
    "Parietal",
    "Temporal",
    "Occipital"
  ],
  answer: "Parietal",
  rationale: "The parietal lobe is responsible for interpreting sensation, spatial relationships, and integrating sensory information.",
  takeaway: "Parietal lobe = sensory interpretation and spatial awareness."
},

{
  id: "CVA-ANAT-003",
  caseId: "CVA-ANAT-003",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Lobes",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Following a stroke, a client has difficulty understanding spoken language and demonstrates impaired long-term memory. Which lobe is most likely involved?",
  choices: [
    "Frontal",
    "Parietal",
    "Temporal",
    "Occipital"
  ],
  answer: "Temporal",
  rationale: "The temporal lobe is involved in auditory processing, long-term memory, and receptive language through Wernicke's area.",
  takeaway: "Temporal lobe = hearing, memory, and receptive language."
},

{
  id: "CVA-ANAT-004",
  caseId: "CVA-ANAT-004",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Lobes",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops difficulty interpreting colors and shapes after a cerebrovascular accident. Which area was most likely damaged?",
  choices: [
    "Frontal lobe",
    "Parietal lobe",
    "Occipital lobe",
    "Brainstem"
  ],
  answer: "Occipital lobe",
  rationale: "The occipital lobe is the visual processing center and is responsible for perception and integration of visual information, including color and shapes.",
  takeaway: "Occipital lobe = vision."
},

{
  id: "CVA-ANAT-005",
  caseId: "CVA-ANAT-005",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Broca Aphasia",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client follows the nurse's commands correctly and nods appropriately to questions. When asked to state their name, the client becomes frustrated and is unable to form the words. Which finding does the nurse suspect?",
  choices: [
    "Wernicke's aphasia",
    "Broca's aphasia",
    "Left-sided neglect",
    "Visual agnosia"
  ],
  answer: "Broca's aphasia",
  rationale: "A client with Broca's aphasia understands language but has difficulty producing speech. The client often knows what they want to say and becomes frustrated because they cannot express it.",
  takeaway: "Broca = understands but cannot get the words out."
},

{
  id: "CVA-ANAT-006",
  caseId: "CVA-ANAT-006",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Wernicke Aphasia",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse asks a client who experienced a stroke to raise the right hand. The client responds with a long, fluent sentence that does not make sense and does not follow the command. Which deficit is most consistent with these findings?",
  choices: [
    "Broca's aphasia",
    "Wernicke's aphasia",
    "Dysarthria",
    "Left-sided neglect"
  ],
  answer: "Wernicke's aphasia",
  rationale: "Wernicke's aphasia is receptive aphasia. The client has difficulty understanding language but may speak fluently using meaningless words or sentences, sometimes called word salad.",
  takeaway: "Wernicke = fluent speech that may not make sense + impaired comprehension."
},

{
  id: "CVA-ANAT-007",
  caseId: "CVA-ANAT-007",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemisphere Function",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse assesses a client with a suspected left-hemisphere stroke. Which combination of findings should the nurse expect?",
  choices: [
    "Left-sided weakness and neglect",
    "Right-sided weakness and aphasia",
    "Right-sided weakness and left-sided neglect",
    "Left-sided weakness and aphasia"
  ],
  answer: "Right-sided weakness and aphasia",
  rationale: "The left hemisphere controls the right side of the body and is the dominant language hemisphere in most people. A left-sided stroke therefore commonly produces right-sided motor or sensory deficits along with aphasia.",
  takeaway: "LEFT stroke → RIGHT deficits + aphasia."
},

{
  id: "CVA-ANAT-008",
  caseId: "CVA-ANAT-008",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemisphere Function",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which assessment finding is most consistent with a right-hemisphere stroke?",
  choices: [
    "Right-sided weakness with expressive aphasia",
    "Left-sided weakness with left-sided neglect",
    "Right-sided sensory loss with receptive aphasia",
    "Bilateral weakness with expressive aphasia"
  ],
  answer: "Left-sided weakness with left-sided neglect",
  rationale: "The right hemisphere controls the left side of the body and plays an important role in spatial awareness. Damage commonly causes left-sided motor or sensory deficits and left-sided neglect.",
  takeaway: "RIGHT stroke → LEFT deficits + neglect."
},

{
  id: "CVA-ANAT-009",
  caseId: "CVA-ANAT-009",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebellum",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A client has normal strength but develops severe problems with balance, coordination, and fine motor movement. Which brain structure is most likely affected?",
  choices: [
    "Cerebellum",
    "Frontal lobe",
    "Temporal lobe",
    "Corpus callosum"
  ],
  answer: "Cerebellum",
  rationale: "The cerebellum coordinates muscle activity and is responsible for balance, equilibrium, and fine motor movement.",
  takeaway: "Cerebellum = coordination and balance."
},

{
  id: "CVA-ANAT-010",
  caseId: "CVA-ANAT-010",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brainstem",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse is caring for four clients with neurologic injuries. Which client should the nurse assess FIRST?",
  choices: [
    "A client with occipital damage who reports difficulty seeing colors",
    "A client with cerebellar damage who has an unsteady gait",
    "A client with brainstem damage who develops irregular respirations",
    "A client with frontal lobe damage who demonstrates poor judgment"
  ],
  answer: "A client with brainstem damage who develops irregular respirations",
  rationale: "The brainstem controls vital functions including breathing, heart rate, and blood pressure. A change in respirations represents an immediate threat to survival and takes priority.",
  takeaway: "Brainstem deterioration can threaten ABCs."
},

{
  id: "CVA-ANAT-011",
  caseId: "CVA-ANAT-011",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client suddenly develops right facial droop, right arm and leg weakness, loss of sensation on the right side, and difficulty producing speech. The client understands instructions and follows commands. Which location best explains these findings?",
  choices: [
    "Right PCA",
    "Left MCA",
    "Right ACA",
    "Vertebrobasilar system"
  ],
  answer: "Left MCA",
  rationale: "A left-hemisphere stroke produces right-sided motor and sensory deficits. The MCA supplies lateral frontal, temporal, and parietal regions and can affect language areas. Preserved comprehension with difficulty producing speech is consistent with Broca's expressive aphasia.",
  takeaway: "Right weakness + expressive aphasia strongly suggests a left MCA stroke."
},

{
  id: "CVA-ANAT-012",
  caseId: "CVA-ANAT-012",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops marked weakness of the right leg along with personality changes after a stroke. Which cerebral artery is most likely involved?",
  choices: [
    "Middle cerebral artery",
    "Anterior cerebral artery",
    "Posterior cerebral artery",
    "Basilar artery"
  ],
  answer: "Anterior cerebral artery",
  rationale: "The ACA supplies the medial frontal and parietal lobes. An ACA stroke is associated with contralateral leg weakness and may produce personality or behavioral changes.",
  takeaway: "ACA = contralateral LEG weakness + frontal/personality changes."
},

{
  id: "CVA-ANAT-013",
  caseId: "CVA-ANAT-013",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has a stroke involving the posterior cerebral artery. Which new finding would the nurse most expect?",
  choices: [
    "Severe contralateral leg weakness",
    "Expressive aphasia with facial weakness",
    "Visual field changes and memory impairment",
    "Severe dysphagia with ataxia"
  ],
  answer: "Visual field changes and memory impairment",
  rationale: "The PCA supplies the occipital and inferior temporal lobes. Damage therefore commonly causes visual field deficits and memory impairment.",
  takeaway: "PCA = think vision and memory."
},

{
  id: "CVA-ANAT-014",
  caseId: "CVA-ANAT-014",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vertebrobasilar Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client suddenly develops dizziness, an unsteady gait, difficulty swallowing, and double vision. Which circulation should the nurse suspect is compromised?",
  choices: [
    "Anterior cerebral",
    "Middle cerebral",
    "Posterior cerebral",
    "Vertebrobasilar"
  ],
  answer: "Vertebrobasilar",
  rationale: "The vertebrobasilar system supplies the brainstem, cerebellum, and posterior brain. Deficits can include dizziness, ataxia, dysphagia, and diplopia.",
  takeaway: "Dizziness + ataxia + dysphagia + diplopia = vertebrobasilar warning pattern."
},

{
  id: "CVA-ANAT-015",
  caseId: "CVA-ANAT-015",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Decussation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "The family asks why a stroke affecting the client's right cerebral hemisphere caused weakness on the left side of the body. Which explanation by the nurse is most accurate?",
  choices: [
    "The cerebral hemispheres control the same side of the body",
    "Motor pathways cross in the brainstem before reaching the spinal cord",
    "The cerebellum redirects motor signals to the opposite side",
    "Cerebrospinal fluid carries motor impulses across the brain"
  ],
  answer: "Motor pathways cross in the brainstem before reaching the spinal cord",
  rationale: "Motor pathways descend from the motor cortex and cross, or decussate, in the medulla before continuing down the opposite side of the spinal cord. This causes cerebral injuries to produce contralateral motor deficits.",
  takeaway: "Decussation explains why brain injuries commonly cause opposite-side deficits."
},

{
  id: "CVA-ANAT-016",
  caseId: "CVA-ANAT-016",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Localization",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has left-sided weakness and sensory loss following a stroke. Based on the principle of decussation, which location should the nurse suspect?",
  choices: [
    "Left cerebral hemisphere",
    "Right cerebral hemisphere",
    "Left peripheral nervous system only",
    "Bilateral occipital lobes"
  ],
  answer: "Right cerebral hemisphere",
  rationale: "Because motor and sensory pathways cross, injury to the right cerebral hemisphere generally produces motor and sensory deficits on the left side of the body.",
  takeaway: "Brain side and body deficit are usually opposite."
},

{
  id: "CVA-ANAT-017",
  caseId: "CVA-ANAT-017",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brain Protection",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse explains that cerebrospinal fluid provides which important protective function for the brain?",
  choices: [
    "Produces voluntary motor impulses",
    "Cushions and protects the brain",
    "Controls systemic blood pressure",
    "Prevents all substances from entering cerebral circulation"
  ],
  answer: "Cushions and protects the brain",
  rationale: "CSF is a clear fluid produced in the choroid plexus that flows through the ventricles and cushions and protects the brain.",
  takeaway: "CSF cushions the brain and circulates through the ventricular system."
},

{
  id: "CVA-ANAT-018",
  caseId: "CVA-ANAT-018",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Blood-Brain Barrier",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which statement best describes the purpose of the blood-brain barrier?",
  choices: [
    "It prevents all nutrients from entering brain tissue",
    "It protects the brain from harmful substances while allowing needed exchange",
    "It produces cerebrospinal fluid inside the ventricles",
    "It connects the two cerebral hemispheres"
  ],
  answer: "It protects the brain from harmful substances while allowing needed exchange",
  rationale: "Tight junctions within cerebral capillaries restrict harmful substances and pathogens while allowing nutrients to enter and waste products to leave.",
  takeaway: "BBB = selective protection of brain tissue."
},

{
  id: "CVA-ANAT-019",
  caseId: "CVA-ANAT-019",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Pathophysiology",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Why does interruption of cerebral blood flow require immediate intervention?",
  choices: [
    "Brain tissue stores large amounts of oxygen but very little glucose",
    "Neurons begin to die within minutes when oxygen and glucose delivery stops",
    "White matter immediately produces excess cerebrospinal fluid",
    "The meninges rapidly block cerebral circulation"
  ],
  answer: "Neurons begin to die within minutes when oxygen and glucose delivery stops",
  rationale: "The brain requires a constant supply of oxygen and glucose. When cerebral blood flow stops, ischemia develops and can progress to infarction and permanent neuronal damage within minutes.",
  takeaway: "Time is brain: ischemia can rapidly progress to permanent infarction."
},

{
  id: "CVA-ANAT-020",
  caseId: "CVA-ANAT-020",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Localization",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A 68-year-old client arrives with right-sided facial droop, inability to lift the right arm or leg against gravity, loss of right-sided sensation, and inability to speak. The client follows commands and nods appropriately. Which interpretation by the nurse is most accurate?",
  choices: [
    "Right-hemisphere PCA stroke with Wernicke's aphasia",
    "Left-hemisphere MCA stroke with Broca's aphasia",
    "Right-hemisphere ACA stroke with Broca's aphasia",
    "Left-hemisphere vertebrobasilar stroke with Wernicke's aphasia"
  ],
  answer: "Left-hemisphere MCA stroke with Broca's aphasia",
  rationale: "Right-sided weakness and sensory loss indicate left cerebral involvement because of pathway crossing. The MCA supplies lateral frontal, temporal, and parietal regions. The client's ability to understand commands with inability to produce speech is characteristic of Broca's expressive aphasia.",
  takeaway: "Localize the stroke by combining SIDE + VESSEL + LANGUAGE findings."
},

{
  id: "CVA-ANAT-021",
  caseId: "CVA-ANAT-021",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Corpus Callosum",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse is reviewing neurologic anatomy with a student. Which structure allows the right and left cerebral hemispheres to communicate with one another?",
  choices: [
    "Corpus callosum",
    "Medulla oblongata",
    "Cerebellum",
    "Choroid plexus"
  ],
  answer: "Corpus callosum",
  rationale: "The corpus callosum is a large bundle of nerve fibers that connects the right and left cerebral hemispheres and allows communication between them.",
  takeaway: "Corpus callosum = communication between the cerebral hemispheres."
},

{
  id: "CVA-ANAT-022",
  caseId: "CVA-ANAT-022",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Meninges",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse is explaining the protective layers surrounding the brain. Which sequence correctly identifies the meninges from outermost to innermost?",
  choices: [
    "Dura mater → arachnoid mater → pia mater",
    "Pia mater → dura mater → arachnoid mater",
    "Arachnoid mater → pia mater → dura mater",
    "Dura mater → pia mater → arachnoid mater"
  ],
  answer: "Dura mater → arachnoid mater → pia mater",
  rationale: "The three meningeal layers surrounding the brain are the dura mater, arachnoid mater, and pia mater, moving from the outermost layer inward.",
  takeaway: "DAP: Dura → Arachnoid → Pia."
},

{
  id: "CVA-ANAT-023",
  caseId: "CVA-ANAT-023",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Gray and White Matter",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which statement by a nursing student demonstrates correct understanding of gray and white matter?",
  choices: [
    "Gray matter primarily contains neuronal cell bodies, while white matter contains myelinated axons.",
    "White matter primarily contains neuronal cell bodies, while gray matter contains cerebrospinal fluid.",
    "Gray matter is found only in the spinal cord.",
    "White matter is responsible for producing cerebrospinal fluid."
  ],
  answer: "Gray matter primarily contains neuronal cell bodies, while white matter contains myelinated axons.",
  rationale: "Gray matter consists primarily of neuronal cell bodies, while white matter contains myelinated nerve fibers that transmit signals between areas of the nervous system.",
  takeaway: "Gray = cell bodies; white = myelinated communication pathways."
},

{
  id: "CVA-ANAT-024",
  caseId: "CVA-ANAT-024",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Circle of Willis",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "Why is the Circle of Willis clinically important when evaluating cerebral perfusion?",
  choices: [
    "It connects major cerebral arterial pathways and can provide alternate routes for blood flow.",
    "It produces cerebrospinal fluid for the ventricular system.",
    "It controls voluntary skeletal muscle movement.",
    "It prevents venous blood from entering cerebral circulation."
  ],
  answer: "It connects major cerebral arterial pathways and can provide alternate routes for blood flow.",
  rationale: "The Circle of Willis connects the major arterial systems supplying the brain. This arrangement can allow collateral circulation when blood flow through one pathway is impaired.",
  takeaway: "Circle of Willis = connected cerebral circulation and potential collateral flow."
},

{
  id: "CVA-ANAT-025",
  caseId: "CVA-ANAT-025",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Circulation",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Understand",
  nclexCategory: "Physiological Adaptation",
  question: "Which vessels provide the two major sources of arterial blood entering the cerebral circulation?",
  choices: [
    "Internal carotid arteries and vertebral arteries",
    "External carotid arteries and jugular veins",
    "Middle cerebral arteries and femoral arteries",
    "Anterior cerebral arteries and pulmonary arteries"
  ],
  answer: "Internal carotid arteries and vertebral arteries",
  rationale: "The brain receives arterial blood from the internal carotid circulation anteriorly and the vertebral arteries posteriorly. These systems contribute to the Circle of Willis.",
  takeaway: "Brain blood supply enters through the carotid and vertebral systems."
},

{
  id: "CVA-ANAT-026",
  caseId: "CVA-ANAT-026",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Middle Cerebral Artery",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has sudden weakness that is much more severe in the right face and arm than in the right leg. Which vascular territory should the nurse suspect?",
  choices: [
    "Left middle cerebral artery",
    "Left anterior cerebral artery",
    "Right posterior cerebral artery",
    "Vertebrobasilar circulation"
  ],
  answer: "Left middle cerebral artery",
  rationale: "The MCA supplies areas associated with the face and upper extremity. A left MCA stroke produces contralateral deficits, so right face and arm weakness points toward the left MCA territory.",
  takeaway: "MCA = FACE/ARM deficits greater than leg."
},

{
  id: "CVA-ANAT-027",
  caseId: "CVA-ANAT-027",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Anterior Cerebral Artery",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops left leg weakness that is significantly greater than left arm weakness. Which arterial territory should the nurse suspect?",
  choices: [
    "Right anterior cerebral artery",
    "Left middle cerebral artery",
    "Right posterior cerebral artery",
    "Left vertebral artery"
  ],
  answer: "Right anterior cerebral artery",
  rationale: "The ACA supplies medial portions of the frontal and parietal lobes associated especially with lower-extremity function. Because cerebral motor pathways cross, right ACA injury can produce left leg weakness.",
  takeaway: "ACA = LEG deficits greater than arm."
},

{
  id: "CVA-ANAT-028",
  caseId: "CVA-ANAT-028",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Posterior Cerebral Artery",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has normal extremity strength but suddenly develops a significant visual field deficit following a stroke. Which artery should the nurse suspect is involved?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior communicating artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital lobe, which is responsible for visual processing. A PCA stroke can therefore produce prominent visual field deficits despite preserved extremity strength.",
  takeaway: "PCA stroke may present primarily as a visual problem."
},

{
  id: "CVA-ANAT-029",
  caseId: "CVA-ANAT-029",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vertebrobasilar Circulation",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which client presentation should cause the nurse to be MOST concerned about compromise of the posterior circulation?",
  choices: [
    "Sudden diplopia, dysphagia, dizziness, and severe ataxia",
    "Right arm weakness with expressive aphasia",
    "Left leg weakness with personality changes",
    "Isolated difficulty identifying colors"
  ],
  answer: "Sudden diplopia, dysphagia, dizziness, and severe ataxia",
  rationale: "The vertebrobasilar circulation supplies the brainstem and cerebellum. Diplopia, dysphagia, dizziness, and ataxia are important posterior circulation findings.",
  takeaway: "Posterior circulation symptoms often involve balance, swallowing, vision, and brainstem function."
},

{
  id: "CVA-ANAT-030",
  caseId: "CVA-ANAT-030",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemisphere Function",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse suspects a left-hemisphere stroke. Which findings support this conclusion? Select all that apply.",
  choices: [
    "Right-sided weakness",
    "Right-sided sensory loss",
    "Expressive aphasia",
    "Receptive aphasia",
    "Left-sided neglect",
    "Language impairment"
  ],
  answer: [
    "Right-sided weakness",
    "Right-sided sensory loss",
    "Expressive aphasia",
    "Receptive aphasia",
    "Language impairment"
  ],
  rationale: "The left cerebral hemisphere controls the right side of the body and contains important language centers. A left-hemisphere stroke can therefore cause right-sided motor and sensory deficits and aphasia. Left-sided neglect is more characteristic of right-hemisphere injury.",
  takeaway: "Left brain = right body + language."
},

{
  id: "CVA-ANAT-031",
  caseId: "CVA-ANAT-031",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Hemisphere Function",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which findings should the nurse associate with a right-hemisphere stroke? Select all that apply.",
  choices: [
    "Left-sided weakness",
    "Left-sided sensory deficits",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Language impairment as the classic dominant finding",
    "Difficulty recognizing the affected side of the body"
  ],
  answer: [
    "Left-sided weakness",
    "Left-sided sensory deficits",
    "Left-sided neglect",
    "Impaired spatial awareness",
    "Difficulty recognizing the affected side of the body"
  ],
  rationale: "The right hemisphere controls the left side of the body and is strongly involved in spatial and perceptual function. Injury may cause left-sided weakness, sensory loss, neglect, and impaired spatial awareness.",
  takeaway: "Right brain = left body + spatial/perceptual problems."
},

{
  id: "CVA-ANAT-032",
  caseId: "CVA-ANAT-032",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Broca Aphasia",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "A client with Broca's aphasia becomes visibly frustrated when attempting to answer questions. Which nursing action is most appropriate?",
  choices: [
    "Allow the client extra time to respond and use simple communication methods.",
    "Finish every sentence for the client.",
    "Speak loudly because the client cannot understand language.",
    "Avoid asking the client questions."
  ],
  answer: "Allow the client extra time to respond and use simple communication methods.",
  rationale: "A client with Broca's aphasia can often understand what is being said but has difficulty expressing language. The nurse should allow time for communication rather than assuming impaired comprehension.",
  takeaway: "Broca patients may understand you—give them time to communicate."
},

{
  id: "CVA-ANAT-033",
  caseId: "CVA-ANAT-033",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Wernicke Aphasia",
  style: "Application",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Psychosocial Integrity",
  question: "Which nursing approach is most appropriate for a client with Wernicke's aphasia?",
  choices: [
    "Use short, simple statements and visual or nonverbal cues.",
    "Assume the client understands because speech is fluent.",
    "Ask several questions at once to evaluate comprehension.",
    "Speak only to family members because communication is impossible."
  ],
  answer: "Use short, simple statements and visual or nonverbal cues.",
  rationale: "Wernicke's aphasia affects language comprehension. Fluent speech does not mean the client understands what is being said. Simple communication and visual cues can improve understanding.",
  takeaway: "Wernicke = do not confuse fluent speech with comprehension."
},

{
  id: "CVA-ANAT-034",
  caseId: "CVA-ANAT-034",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse assesses a client with left facial weakness, left arm weakness greater than leg weakness, and severe left-sided neglect. Which location best explains the findings?",
  choices: [
    "Right MCA",
    "Left MCA",
    "Right ACA",
    "Left PCA"
  ],
  answer: "Right MCA",
  rationale: "A right-hemisphere stroke produces left-sided deficits and may cause neglect. The MCA territory commonly produces face and arm deficits greater than leg deficits.",
  takeaway: "Left neglect + left face/arm weakness = think right MCA."
},

{
  id: "CVA-ANAT-035",
  caseId: "CVA-ANAT-035",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client develops right leg weakness greater than right arm weakness and noticeable behavioral changes. Which stroke location best fits this pattern?",
  choices: [
    "Left ACA",
    "Right MCA",
    "Left PCA",
    "Right vertebrobasilar circulation"
  ],
  answer: "Left ACA",
  rationale: "The ACA supplies medial frontal and parietal regions. A left ACA stroke can produce right lower-extremity weakness and frontal-lobe behavioral changes.",
  takeaway: "Leg-dominant weakness + behavior change = ACA pattern."
},

{
  id: "CVA-ANAT-036",
  caseId: "CVA-ANAT-036",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client has sudden right-sided visual field loss and difficulty with memory but no major extremity weakness. Which vessel is most likely involved?",
  choices: [
    "Left posterior cerebral artery",
    "Right anterior cerebral artery",
    "Left middle cerebral artery",
    "Right middle cerebral artery"
  ],
  answer: "Left posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. Because visual pathways are organized contralaterally, a left PCA lesion can produce a right visual field deficit along with memory changes.",
  takeaway: "Visual field loss + memory changes = PCA territory."
},

{
  id: "CVA-ANAT-037",
  caseId: "CVA-ANAT-037",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Localization",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives report on four clients with recent strokes. Which client should be assessed FIRST?",
  choices: [
    "A client with an MCA stroke who has stable expressive aphasia",
    "A client with an ACA stroke who has persistent leg weakness",
    "A client with a PCA stroke who has a stable visual field deficit",
    "A client with posterior circulation findings who develops new difficulty swallowing and irregular respirations"
  ],
  answer: "A client with posterior circulation findings who develops new difficulty swallowing and irregular respirations",
  rationale: "New dysphagia and irregular respirations raise concern for brainstem involvement. Because the brainstem controls vital respiratory and cardiovascular functions, this client has the greatest immediate threat to airway and breathing.",
  takeaway: "New brainstem findings can become an ABC emergency."
},

{
  id: "CVA-ANAT-038",
  caseId: "CVA-ANAT-038",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has a suspected left MCA stroke. Which findings should the nurse anticipate? Select all that apply.",
  choices: [
    "Right facial weakness",
    "Right arm weakness",
    "Aphasia",
    "Right-sided sensory changes",
    "Left-sided neglect as the expected dominant finding",
    "Face and arm deficits that may be greater than leg deficits"
  ],
  answer: [
    "Right facial weakness",
    "Right arm weakness",
    "Aphasia",
    "Right-sided sensory changes",
    "Face and arm deficits that may be greater than leg deficits"
  ],
  rationale: "The left MCA supplies lateral areas involved in face and upper-extremity motor and sensory function as well as important language areas. Deficits occur primarily on the opposite side of the body.",
  takeaway: "Left MCA = right face/arm deficits + possible aphasia."
},

{
  id: "CVA-ANAT-039",
  caseId: "CVA-ANAT-039",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which assessment patterns are correctly matched with the involved vascular territory? Select all that apply.",
  choices: [
    "ACA — contralateral leg weakness",
    "MCA — contralateral face and arm weakness",
    "PCA — visual field deficits",
    "Vertebrobasilar — dizziness, ataxia, dysphagia, and diplopia",
    "ACA — isolated visual field loss",
    "PCA — expressive aphasia as the primary expected finding"
  ],
  answer: [
    "ACA — contralateral leg weakness",
    "MCA — contralateral face and arm weakness",
    "PCA — visual field deficits",
    "Vertebrobasilar — dizziness, ataxia, dysphagia, and diplopia"
  ],
  rationale: "The vascular territories produce recognizable patterns: ACA commonly affects the contralateral leg, MCA commonly affects the contralateral face and arm, PCA commonly causes visual deficits, and vertebrobasilar compromise can produce brainstem and cerebellar findings.",
  takeaway: "ACA = leg; MCA = face/arm; PCA = vision; vertebrobasilar = brainstem/cerebellar findings."
},

{
  id: "CVA-ANAT-040",
  caseId: "CVA-ANAT-040",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Stroke Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden right facial droop, right arm weakness greater than right leg weakness, and speech that is slow and difficult to produce. The client follows commands correctly. Which conclusion should the nurse make?",
  choices: [
    "The findings are most consistent with a left MCA stroke affecting Broca's area.",
    "The findings are most consistent with a right ACA stroke affecting Wernicke's area.",
    "The findings are most consistent with a left PCA stroke affecting the occipital lobe.",
    "The findings are most consistent with vertebrobasilar compromise affecting the cerebellum."
  ],
  answer: "The findings are most consistent with a left MCA stroke affecting Broca's area.",
  rationale: "Right-sided deficits indicate left cerebral injury. Face and arm weakness greater than leg weakness supports MCA involvement. Preserved comprehension with difficulty producing speech supports Broca's expressive aphasia.",
  takeaway: "Use all the cues together: opposite side + body distribution + language pattern = stroke localization."
},

{
  id: "CVA-ANAT-041",
  caseId: "CVA-ANAT-041",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Frontal Lobe",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The family of a client recovering from a stroke tells the nurse, 'This is not how they acted before the stroke. They are impulsive and make unsafe decisions.' Which area of the brain should the nurse associate with these changes?",
  choices: [
    "Frontal lobe",
    "Occipital lobe",
    "Temporal lobe",
    "Cerebellum"
  ],
  answer: "Frontal lobe",
  rationale: "The frontal lobe is involved in judgment, personality, problem solving, and behavior. Injury can therefore result in personality changes, impulsivity, and impaired judgment.",
  takeaway: "Behavior + judgment + personality changes point toward the frontal lobe."
},

{
  id: "CVA-ANAT-042",
  caseId: "CVA-ANAT-042",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Parietal Lobe",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client can feel the nurse touching the hand but cannot correctly identify where the sensation occurred or interpret its meaning. Which cerebral lobe is most likely affected?",
  choices: [
    "Parietal lobe",
    "Occipital lobe",
    "Frontal lobe",
    "Temporal lobe"
  ],
  answer: "Parietal lobe",
  rationale: "The parietal lobe is responsible for interpreting sensory information and spatial relationships. A client may receive sensory input but have difficulty correctly interpreting it when this area is damaged.",
  takeaway: "Parietal damage interferes with interpretation of sensory and spatial information."
},

{
  id: "CVA-ANAT-043",
  caseId: "CVA-ANAT-043",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Temporal Lobe",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Following a stroke, a client hears the nurse speaking but has difficulty interpreting spoken language and also demonstrates problems with long-term memory. Which lobe is most likely involved?",
  choices: [
    "Temporal lobe",
    "Frontal lobe",
    "Parietal lobe",
    "Occipital lobe"
  ],
  answer: "Temporal lobe",
  rationale: "The temporal lobe is involved in auditory processing, memory, and receptive language. Damage may interfere with understanding spoken language and memory function.",
  takeaway: "Temporal = hearing, memory, and receptive language."
},

{
  id: "CVA-ANAT-044",
  caseId: "CVA-ANAT-044",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Occipital Lobe",
  style: "Clinical Scenario",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client recovering from a stroke can move all extremities and speak normally but reports difficulty interpreting objects within the visual field. Which lobe should the nurse suspect is affected?",
  choices: [
    "Occipital lobe",
    "Frontal lobe",
    "Parietal lobe",
    "Temporal lobe"
  ],
  answer: "Occipital lobe",
  rationale: "The occipital lobe is responsible for visual processing and interpretation. Damage may produce visual disturbances even when motor and language functions remain intact.",
  takeaway: "Isolated visual processing problems should make you think occipital lobe."
},

{
  id: "CVA-ANAT-045",
  caseId: "CVA-ANAT-045",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Broca vs Wernicke",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which assessment finding best differentiates Broca's aphasia from Wernicke's aphasia?",
  choices: [
    "The client's ability to understand spoken language",
    "The presence of unilateral weakness",
    "The client's blood pressure",
    "The presence of a visual field deficit"
  ],
  answer: "The client's ability to understand spoken language",
  rationale: "Broca's aphasia primarily affects speech production while comprehension is relatively preserved. Wernicke's aphasia primarily affects comprehension and may produce fluent but meaningless speech.",
  takeaway: "Ask: Can the client understand? That helps separate Broca from Wernicke."
},

{
  id: "CVA-ANAT-046",
  caseId: "CVA-ANAT-046",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Broca vs Wernicke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "The nurse asks a client, 'Close your eyes.' The client immediately closes the eyes. When asked to explain why they are hospitalized, the client struggles to produce words and becomes frustrated. How should the nurse interpret these findings?",
  choices: [
    "The client demonstrates expressive aphasia.",
    "The client demonstrates receptive aphasia.",
    "The client demonstrates left-sided neglect.",
    "The client demonstrates a visual processing deficit."
  ],
  answer: "The client demonstrates expressive aphasia.",
  rationale: "The client understands and follows the command, demonstrating preserved comprehension, but has difficulty producing speech. This pattern is consistent with Broca's expressive aphasia.",
  takeaway: "Understands command + cannot produce words = Broca/expressive aphasia."
},

{
  id: "CVA-ANAT-047",
  caseId: "CVA-ANAT-047",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Broca vs Wernicke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "A client speaks rapidly and fluently, but the words do not form meaningful sentences. When the nurse asks the client to squeeze the nurse's hand, the client continues talking and does not follow the instruction. Which finding is most likely?",
  choices: [
    "Wernicke's aphasia",
    "Broca's aphasia",
    "Cerebellar dysfunction",
    "Occipital lobe dysfunction"
  ],
  answer: "Wernicke's aphasia",
  rationale: "Wernicke's aphasia causes impaired comprehension with fluent but often meaningless speech. Failure to follow a simple verbal command supports impaired receptive language.",
  takeaway: "Fluent nonsense + poor comprehension = Wernicke."
},

{
  id: "CVA-ANAT-048",
  caseId: "CVA-ANAT-048",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "A client with a right-hemisphere stroke has left-sided neglect. Which nursing intervention is most important for immediate safety?",
  choices: [
    "Assess the environment for hazards the client may fail to recognize on the left side.",
    "Encourage the client to complete all activities without assistance.",
    "Place all necessary items permanently on the client's left side.",
    "Avoid reminding the client about the affected side."
  ],
  answer: "Assess the environment for hazards the client may fail to recognize on the left side.",
  rationale: "A client with left-sided neglect may not recognize people, objects, or hazards on the affected side. Environmental safety is therefore an important nursing priority.",
  takeaway: "Neglect creates a safety risk because the client may not recognize one side of the environment."
},

{
  id: "CVA-ANAT-049",
  caseId: "CVA-ANAT-049",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Right Hemisphere",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "During lunch, the nurse notices that a client eats all the food from the right half of the plate but leaves the left half untouched. The client also has left arm weakness. Which interpretation is most appropriate?",
  choices: [
    "The findings are consistent with a right-hemisphere stroke and left-sided neglect.",
    "The findings are consistent with a left-hemisphere stroke and expressive aphasia.",
    "The findings indicate an isolated occipital injury.",
    "The findings indicate an isolated cerebellar injury."
  ],
  answer: "The findings are consistent with a right-hemisphere stroke and left-sided neglect.",
  rationale: "Right-hemisphere injury can produce left-sided motor deficits and impaired awareness of the left side of the body or environment.",
  takeaway: "Ignoring the left half of the environment is a classic clue for right-hemisphere injury."
},

{
  id: "CVA-ANAT-050",
  caseId: "CVA-ANAT-050",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Left Hemisphere",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Which client presentation most strongly suggests injury to the dominant left cerebral hemisphere?",
  choices: [
    "Right hemiparesis with difficulty speaking",
    "Left hemiparesis with left-sided neglect",
    "Ataxia with diplopia and dysphagia",
    "Visual field loss without language impairment"
  ],
  answer: "Right hemiparesis with difficulty speaking",
  rationale: "The left cerebral hemisphere controls the right side of the body and contains the major language centers in most individuals. Right-sided weakness combined with language impairment strongly supports left-hemisphere involvement.",
  takeaway: "Right weakness + language problem = left hemisphere until proven otherwise."
},

{
  id: "CVA-ANAT-051",
  caseId: "CVA-ANAT-051",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "MCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left facial droop, left arm paralysis, mild left leg weakness, and impaired awareness of the left side. Which cerebral vessel is most likely affected?",
  choices: [
    "Right middle cerebral artery",
    "Left anterior cerebral artery",
    "Right posterior cerebral artery",
    "Left middle cerebral artery"
  ],
  answer: "Right middle cerebral artery",
  rationale: "Left-sided deficits indicate right cerebral injury. The MCA supplies regions controlling the face and upper extremity, and right MCA injury can also produce left-sided neglect.",
  takeaway: "Face/arm > leg + neglect = right MCA pattern."
},

{
  id: "CVA-ANAT-052",
  caseId: "CVA-ANAT-052",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "ACA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client presents with profound weakness of the left leg, only mild weakness of the left arm, and new behavioral changes. Which artery is most likely involved?",
  choices: [
    "Right anterior cerebral artery",
    "Right middle cerebral artery",
    "Left posterior cerebral artery",
    "Left middle cerebral artery"
  ],
  answer: "Right anterior cerebral artery",
  rationale: "The ACA supplies medial frontal and parietal regions associated particularly with lower-extremity function. Right ACA involvement can therefore cause left leg-dominant weakness and frontal behavioral changes.",
  takeaway: "ACA stroke often produces opposite-side leg weakness greater than arm weakness."
},

{
  id: "CVA-ANAT-053",
  caseId: "CVA-ANAT-053",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "PCA Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The nurse assesses a client who suddenly developed visual field loss and difficulty recalling recent information. Extremity strength is intact. Which vascular territory best matches these findings?",
  choices: [
    "Posterior cerebral artery",
    "Anterior cerebral artery",
    "Middle cerebral artery",
    "Anterior communicating artery"
  ],
  answer: "Posterior cerebral artery",
  rationale: "The PCA supplies the occipital and inferior temporal regions. Visual field abnormalities and memory impairment are therefore important findings associated with PCA strokes.",
  takeaway: "Vision + memory with relatively preserved motor function = think PCA."
},

{
  id: "CVA-ANAT-054",
  caseId: "CVA-ANAT-054",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Vertebrobasilar Stroke",
  style: "Clinical Scenario",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which cluster of symptoms should make the nurse suspect involvement of the vertebrobasilar circulation rather than an anterior circulation stroke?",
  choices: [
    "Vertigo, diplopia, dysphagia, and ataxia",
    "Expressive aphasia and right arm weakness",
    "Left-sided neglect and left facial weakness",
    "Right leg weakness and personality changes"
  ],
  answer: "Vertigo, diplopia, dysphagia, and ataxia",
  rationale: "The vertebrobasilar circulation supplies the brainstem, cerebellum, and posterior structures. Dysfunction can produce dizziness or vertigo, double vision, swallowing difficulty, and impaired coordination.",
  takeaway: "Posterior circulation = the 'D's plus balance problems: dizziness, diplopia, dysphagia."
},

{
  id: "CVA-ANAT-055",
  caseId: "CVA-ANAT-055",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebellum",
  style: "Priority",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Safe and Effective Care Environment",
  question: "A client with cerebellar involvement attempts to get out of bed without assistance. Which nursing concern is the priority?",
  choices: [
    "Risk for falls related to impaired balance and coordination",
    "Risk for aphasia related to impaired language production",
    "Risk for visual loss related to occipital dysfunction",
    "Risk for neglect related to dominant hemisphere dysfunction"
  ],
  answer: "Risk for falls related to impaired balance and coordination",
  rationale: "The cerebellum coordinates balance and movement. Cerebellar injury can cause severe gait instability and ataxia, creating a significant fall risk.",
  takeaway: "Cerebellar dysfunction = protect the client from falls."
},

{
  id: "CVA-ANAT-056",
  caseId: "CVA-ANAT-056",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Brainstem",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Which neurologic change requires the nurse's most immediate response?",
  choices: [
    "New irregular respiratory pattern",
    "Difficulty recalling a family member's name",
    "Loss of part of the visual field",
    "Inability to accurately judge distance"
  ],
  answer: "New irregular respiratory pattern",
  rationale: "The brainstem controls vital functions including respiration. An abnormal respiratory pattern may indicate compromise of a life-sustaining neurologic center and requires immediate assessment and intervention.",
  takeaway: "When neurologic findings threaten breathing, ABCs override localization."
},

{
  id: "CVA-ANAT-057",
  caseId: "CVA-ANAT-057",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Localization",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "The nurse assesses a client with a right MCA stroke. Which findings are consistent with this location? Select all that apply.",
  choices: [
    "Left facial weakness",
    "Left arm weakness",
    "Left-sided sensory changes",
    "Left-sided neglect",
    "Expressive aphasia as the expected dominant finding",
    "Face and arm deficits greater than leg deficits"
  ],
  answer: [
    "Left facial weakness",
    "Left arm weakness",
    "Left-sided sensory changes",
    "Left-sided neglect",
    "Face and arm deficits greater than leg deficits"
  ],
  rationale: "A right MCA stroke affects the left side of the body and may cause neglect because of right-hemisphere spatial dysfunction. MCA motor and sensory deficits commonly affect the face and arm more than the leg.",
  takeaway: "Right MCA = left face/arm deficits + possible left neglect."
},

{
  id: "CVA-ANAT-058",
  caseId: "CVA-ANAT-058",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Localization",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has a left MCA stroke. Which findings should the nurse recognize as consistent with this diagnosis? Select all that apply.",
  choices: [
    "Right facial weakness",
    "Right arm weakness",
    "Right-sided sensory impairment",
    "Aphasia",
    "Left-sided neglect as the characteristic finding",
    "Face and arm involvement greater than leg involvement"
  ],
  answer: [
    "Right facial weakness",
    "Right arm weakness",
    "Right-sided sensory impairment",
    "Aphasia",
    "Face and arm involvement greater than leg involvement"
  ],
  rationale: "A left MCA stroke produces contralateral right-sided deficits, particularly involving the face and arm. Because major language areas are generally located in the left hemisphere, aphasia may also occur.",
  takeaway: "Left MCA = right face/arm deficits + language problems."
},

{
  id: "CVA-ANAT-059",
  caseId: "CVA-ANAT-059",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client suddenly develops left leg paralysis, mild left arm weakness, and changes in judgment and behavior. The nurse notes no aphasia or major visual deficit. Which interpretation best integrates these findings?",
  choices: [
    "The client most likely has a right ACA stroke.",
    "The client most likely has a left MCA stroke.",
    "The client most likely has a right PCA stroke.",
    "The client most likely has a left vertebrobasilar stroke."
  ],
  answer: "The client most likely has a right ACA stroke.",
  rationale: "The left-sided motor deficit indicates right cerebral injury. Leg weakness greater than arm weakness points toward ACA territory, while behavioral changes are consistent with involvement of the medial frontal region supplied by the ACA.",
  takeaway: "Side + leg dominance + frontal behavior changes = ACA localization."
},

{
  id: "CVA-ANAT-060",
  caseId: "CVA-ANAT-060",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Localization",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client arrives with sudden dizziness, double vision, difficulty swallowing, slurred speech, and inability to walk without assistance. Which conclusion should the nurse make from this cluster of cues?",
  choices: [
    "The findings suggest vertebrobasilar involvement affecting posterior circulation structures.",
    "The findings suggest an isolated left ACA stroke.",
    "The findings suggest an isolated right MCA stroke.",
    "The findings suggest an isolated frontal lobe lesion."
  ],
  answer: "The findings suggest vertebrobasilar involvement affecting posterior circulation structures.",
  rationale: "The vertebrobasilar circulation supplies the brainstem and cerebellum. The combination of dizziness, diplopia, dysphagia, dysarthria, and severe gait or coordination problems is consistent with posterior circulation involvement.",
  takeaway: "Multiple brainstem/cerebellar cues together should trigger recognition of a posterior circulation stroke."
},

{
  id: "CVA-ANAT-061",
  caseId: "CVA-ANAT-061",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Anatomy",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse receives four new neurologic assessments. Which finding requires the highest priority response?",
  choices: [
    "A client with frontal lobe involvement who is impulsive",
    "A client with occipital involvement who reports visual changes",
    "A client with cerebellar involvement who has an unsteady gait",
    "A client with brainstem involvement who has difficulty swallowing secretions"
  ],
  answer: "A client with brainstem involvement who has difficulty swallowing secretions",
  rationale: "Difficulty managing secretions indicates a potential airway and aspiration threat. Brainstem involvement can affect swallowing and other vital functions, making this the priority assessment.",
  takeaway: "Localization matters, but ABC threats determine priority."
},

{
  id: "CVA-ANAT-062",
  caseId: "CVA-ANAT-062",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Stroke Anatomy",
  style: "Application",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "A client has right-sided weakness but no language impairment. Which additional finding would most strongly support right-hemisphere involvement instead of left-hemisphere involvement?",
  choices: [
    "Left-sided neglect",
    "Expressive aphasia",
    "Receptive aphasia",
    "Difficulty producing meaningful speech"
  ],
  answer: "Left-sided neglect",
  rationale: "Left-sided neglect is associated with right-hemisphere injury. Aphasia is more strongly associated with injury to the dominant left hemisphere.",
  takeaway: "Neglect points toward the right hemisphere; aphasia points toward the left."
},

{
  id: "CVA-ANAT-063",
  caseId: "CVA-ANAT-063",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "The nurse is evaluating a client with acute neurologic changes. Assessment findings include right arm paralysis, right facial droop, intact ability to follow verbal commands, and severe difficulty producing speech. Which three cues are most useful for localizing the neurologic injury?",
  choices: [
    "Right arm paralysis, right facial droop, and impaired speech production",
    "Age, blood pressure, and right facial droop",
    "Ability to follow commands, age, and blood pressure",
    "Right arm paralysis, temperature, and heart rate"
  ],
  answer: "Right arm paralysis, right facial droop, and impaired speech production",
  rationale: "The distribution of motor deficits and the type of language impairment are high-value localization cues. Right face and arm deficits indicate left cerebral involvement, while difficulty producing speech with preserved comprehension supports Broca's area involvement.",
  takeaway: "For localization, prioritize neurologic patterns over unrelated vital-sign or demographic data."
},

{
  id: "CVA-ANAT-064",
  caseId: "CVA-ANAT-064",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has fluent but meaningless speech, cannot follow simple verbal commands, and has right-sided weakness. Which interpretation best explains the findings?",
  choices: [
    "Left-hemisphere involvement with receptive aphasia",
    "Right-hemisphere involvement with expressive aphasia",
    "Cerebellar involvement with receptive aphasia",
    "Occipital involvement with expressive aphasia"
  ],
  answer: "Left-hemisphere involvement with receptive aphasia",
  rationale: "Right-sided weakness indicates left cerebral injury. Fluent but meaningless speech with impaired comprehension is characteristic of Wernicke's receptive aphasia, which is associated with the dominant left hemisphere.",
  takeaway: "Right weakness + fluent nonsense + poor comprehension = left hemisphere/Wernicke pattern."
},

{
  id: "CVA-ANAT-065",
  caseId: "CVA-ANAT-065",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Clinical Judgment",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client has severe left-sided neglect after a stroke. Which observation best demonstrates this deficit?",
  choices: [
    "The client shaves only the right side of the face.",
    "The client understands questions but cannot produce words.",
    "The client speaks fluently using words that do not make sense.",
    "The client reports double vision when looking forward."
  ],
  answer: "The client shaves only the right side of the face.",
  rationale: "A client with left-sided neglect may fail to recognize or attend to the left side of the body or environment. Performing grooming only on the right side demonstrates this perceptual deficit.",
  takeaway: "Neglect means the client may behave as though the affected side does not exist."
},

{
  id: "CVA-ANAT-066",
  caseId: "CVA-ANAT-066",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Perfusion",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Apply",
  nclexCategory: "Physiological Adaptation",
  question: "A cerebral artery becomes completely obstructed. Which sequence best describes what can occur in the affected brain tissue?",
  choices: [
    "Reduced blood flow → ischemia → neuronal injury → infarction",
    "Increased blood flow → edema → improved oxygenation → recovery",
    "CSF production → vasodilation → increased glucose storage → infarction",
    "Venous dilation → increased oxygen delivery → neuronal regeneration"
  ],
  answer: "Reduced blood flow → ischemia → neuronal injury → infarction",
  rationale: "When cerebral blood flow is interrupted, brain tissue becomes ischemic because oxygen and glucose delivery decrease. Persistent ischemia causes neuronal injury and can progress to infarction.",
  takeaway: "Loss of cerebral perfusion progresses from ischemia toward irreversible infarction."
},

{
  id: "CVA-ANAT-067",
  caseId: "CVA-ANAT-067",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Cerebral Perfusion",
  style: "Application",
  difficulty: "Moderate",
  bloom: "Analyze",
  nclexCategory: "Physiological Adaptation",
  question: "Why can even a brief interruption in cerebral circulation produce significant neurologic injury?",
  choices: [
    "Brain cells require a continuous supply of oxygen and glucose.",
    "Brain cells store enough oxygen but cannot store sodium.",
    "Cerebral arteries normally contain no collateral connections.",
    "The meninges prevent glucose from reaching the brain."
  ],
  answer: "Brain cells require a continuous supply of oxygen and glucose.",
  rationale: "Neurons have high metabolic demands and depend on continuous cerebral blood flow for oxygen and glucose. Interruption of that supply can rapidly impair cellular function and cause injury.",
  takeaway: "The brain cannot tolerate prolonged interruption of oxygen and glucose delivery."
},

{
  id: "CVA-ANAT-068",
  caseId: "CVA-ANAT-068",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "SATA",
  difficulty: "Hard",
  bloom: "Analyze",
  nclexCategory: "Clinical Judgment",
  question: "Which anatomy-to-function relationships should the nurse use when interpreting neurologic findings? Select all that apply.",
  choices: [
    "Frontal lobe — judgment and voluntary movement",
    "Parietal lobe — sensory interpretation and spatial awareness",
    "Temporal lobe — auditory processing and memory",
    "Occipital lobe — visual processing",
    "Cerebellum — balance and coordination",
    "Brainstem — visual color interpretation only"
  ],
  answer: [
    "Frontal lobe — judgment and voluntary movement",
    "Parietal lobe — sensory interpretation and spatial awareness",
    "Temporal lobe — auditory processing and memory",
    "Occipital lobe — visual processing",
    "Cerebellum — balance and coordination"
  ],
  rationale: "Each region contributes characteristic functions that help the nurse localize neurologic injury. The brainstem is responsible for critical functions such as breathing and cardiovascular regulation rather than visual color interpretation only.",
  takeaway: "Knowing normal brain function allows you to work backward from the deficit to the injury."
},

{
  id: "CVA-ANAT-069",
  caseId: "CVA-ANAT-069",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "Priority",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "Four clients arrive with sudden neurologic deficits. Which presentation should the nurse recognize as having the greatest immediate potential to compromise vital functions?",
  choices: [
    "Right arm weakness and expressive aphasia",
    "Left leg weakness and personality changes",
    "Visual field loss and memory difficulty",
    "Dysphagia, severe ataxia, and abnormal respirations"
  ],
  answer: "Dysphagia, severe ataxia, and abnormal respirations",
  rationale: "This cluster suggests posterior circulation and possible brainstem involvement. Abnormal respirations represent a direct threat to breathing, making this presentation the highest priority.",
  takeaway: "A stroke pattern involving brainstem vital functions takes priority over stable focal deficits."
},

{
  id: "CVA-ANAT-070",
  caseId: "CVA-ANAT-070",
  patient: randomPatient(),
  topic: "Perfusion: CVA",
  subtopic: "Integrated Review",
  style: "NGN",
  difficulty: "Hard",
  bloom: "Evaluate",
  nclexCategory: "Clinical Judgment",
  question: "A client presents with sudden right facial weakness, right arm weakness greater than right leg weakness, right-sided sensory loss, and inability to understand spoken instructions. Speech is fluent but meaningless. Which conclusion best explains the complete assessment?",
  choices: [
    "Left MCA involvement with Wernicke's aphasia",
    "Right MCA involvement with Broca's aphasia",
    "Left ACA involvement with cerebellar dysfunction",
    "Right PCA involvement with expressive aphasia"
  ],
  answer: "Left MCA involvement with Wernicke's aphasia",
  rationale: "Right-sided deficits indicate left cerebral involvement. Face and arm findings greater than leg findings are consistent with MCA territory. Fluent but meaningless speech with impaired comprehension indicates Wernicke's receptive aphasia.",
  takeaway: "For difficult stroke questions, solve in order: body side → artery territory → language pattern."
}

];
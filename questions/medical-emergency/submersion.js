// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencySubmersionQuestions = 
[
  {
    "id": "MED-SUBME-001",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A rescued drowning victim is unresponsive and not breathing normally. What is the priority?",
    "choices": [
      "Attempt to drain water from the lungs",
      "Provide rescue breaths and initiate CPR as indicated",
      "Perform abdominal thrusts routinely",
      "Delay care until body temperature is measured"
    ],
    "answer": "Provide rescue breaths and initiate CPR as indicated",
    "rationale": "Hypoxia is the immediate threat after drowning; ventilation and resuscitation take priority over attempts to expel water."
  },
  {
    "id": "MED-SUBME-002",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient rescued from a lake becomes increasingly hypoxic with crackles several hours later. What complication is the nurse most concerned about?",
    "choices": [
      "ARDS from lung injury",
      "Appendicitis",
      "Hyperthyroidism",
      "Isolated hypoglycemia"
    ],
    "answer": "ARDS from lung injury",
    "rationale": "Submersion can damage alveoli and surfactant, causing pulmonary edema and ARDS."
  },
  {
    "id": "MED-SUBME-003",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which circumstance most strongly supports cervical spine precautions after submersion?",
    "choices": [
      "The patient swam in fresh water",
      "The patient dove headfirst and struck a submerged object",
      "The water was cold",
      "The patient has a cough"
    ],
    "answer": "The patient dove headfirst and struck a submerged object",
    "rationale": "A diving impact or other evidence of trauma raises concern for cervical spinal injury."
  },
  {
    "id": "MED-SUBME-004",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A rescued patient is cold and has a slow pulse. Which action is appropriate?",
    "choices": [
      "Handle gently while assessing airway and initiating appropriate rewarming",
      "Vigorously massage the limbs",
      "Force the patient to walk",
      "Withhold oxygen"
    ],
    "answer": "Handle gently while assessing airway and initiating appropriate rewarming",
    "rationale": "Hypothermia may coexist with submersion; gentle handling, oxygenation and appropriate rewarming are indicated."
  },
  {
    "id": "MED-SUBME-005",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "The family asks whether saltwater drowning is harmless because the water is not absorbed like freshwater. Which response is best?",
    "choices": [
      "Saltwater causes no lung injury",
      "Both fresh and salt water can impair surfactant and cause pulmonary edema",
      "Only fresh water causes hypoxia",
      "Neither requires respiratory monitoring"
    ],
    "answer": "Both fresh and salt water can impair surfactant and cause pulmonary edema",
    "rationale": "Both fresh and salt water submersion can produce clinically significant lung injury."
  },
  {
    "id": "MED-SUBMERSION-006",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A child is pulled from a pool and is unresponsive with abnormal breathing. What is the priority?",
    "choices": [
      "Offer oral fluids",
      "Check for fever first",
      "Delay until chest radiography",
      "Initiate resuscitation with attention to ventilation and oxygenation"
    ],
    "answer": "Initiate resuscitation with attention to ventilation and oxygenation",
    "rationale": "Drowning primarily causes hypoxia; airway support and rescue breaths are crucial."
  },
  {
    "id": "MED-SUBMERSION-007",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which factor is most strongly associated with poor neurologic outcome after drowning?",
    "choices": [
      "Color of swimwear",
      "Freshwater versus saltwater alone",
      "Prolonged hypoxia",
      "Time of day"
    ],
    "answer": "Prolonged hypoxia",
    "rationale": "Duration and severity of oxygen deprivation drive neurologic injury."
  },
  {
    "id": "MED-SUBMERSION-008",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A rescued swimmer is coughing and has SpO2 88 percent. What should the nurse do first?",
    "choices": [
      "Provide oxygen and assess respiratory status",
      "Induce vomiting",
      "Discharge immediately",
      "Restrict all breathing assistance"
    ],
    "answer": "Provide oxygen and assess respiratory status",
    "rationale": "Hypoxemia after submersion requires prompt oxygenation assessment and support."
  },
  {
    "id": "MED-SUBMERSION-009",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A submersion survivor develops crackles and increased work of breathing. What complication is suspected?",
    "choices": [
      "Otitis externa",
      "Pulmonary edema or acute lung injury",
      "Appendicitis",
      "Simple dehydration only"
    ],
    "answer": "Pulmonary edema or acute lung injury",
    "rationale": "Aspiration and alveolar injury can impair gas exchange after drowning."
  },
  {
    "id": "MED-SUBMERSION-010",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient rescued from cold water is shivering and confused. Which additional issue requires evaluation?",
    "choices": [
      "Hypothermia",
      "Isolated anemia",
      "Sunburn",
      "Hyperthyroidism only"
    ],
    "answer": "Hypothermia",
    "rationale": "Cold immersion may cause dangerous hypothermia alongside hypoxia."
  },
  {
    "id": "MED-SUBMERSION-011",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which assessment finding suggests deteriorating respiratory function after drowning?",
    "choices": [
      "Increasing oxygen requirement",
      "Clear breath sounds with stable vitals",
      "Normal work of breathing",
      "Improving oxygen saturation"
    ],
    "answer": "Increasing oxygen requirement",
    "rationale": "Escalating oxygen need suggests worsening lung injury."
  },
  {
    "id": "MED-SUBMERSION-012",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A conscious drowning survivor has neck pain after diving. What precaution is appropriate?",
    "choices": [
      "Maintain cervical spine precautions while assessing airway",
      "Ignore mechanism of injury",
      "Encourage neck rotation",
      "Force neck extension"
    ],
    "answer": "Maintain cervical spine precautions while assessing airway",
    "rationale": "Diving injuries can involve cervical trauma; protect the spine without delaying airway management."
  },
  {
    "id": "MED-SUBMERSION-013",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which statement about freshwater and saltwater drowning is most accurate clinically?",
    "choices": [
      "Immediate treatment focuses on oxygenation regardless of water type",
      "Saltwater drowning requires routine diuretics",
      "Only freshwater can cause hypoxia",
      "Freshwater drowning never injures lungs"
    ],
    "answer": "Immediate treatment focuses on oxygenation regardless of water type",
    "rationale": "Both types cause respiratory impairment and are managed by restoring oxygenation."
  },
  {
    "id": "MED-SUBMERSION-014",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A rescued child is alert but has persistent cough and abnormal lung sounds. What is appropriate?",
    "choices": [
      "Ignore respiratory findings",
      "Immediate oral feeding",
      "Automatic discharge because awake",
      "Medical evaluation and observation based on symptoms"
    ],
    "answer": "Medical evaluation and observation based on symptoms",
    "rationale": "Persistent symptoms after submersion can indicate evolving pulmonary injury."
  },
  {
    "id": "MED-SUBMERSION-015",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "What is the main physiologic cause of cardiac arrest in drowning?",
    "choices": [
      "Dehydration alone",
      "Severe hypoxemia",
      "Primary coronary plaque rupture in every case",
      "Primary excess potassium in every case"
    ],
    "answer": "Severe hypoxemia",
    "rationale": "Respiratory impairment causes progressive hypoxia and can lead to arrest."
  },
  {
    "id": "MED-SUBMERSION-016",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient after submersion is obtunded and vomiting. What is the priority?",
    "choices": [
      "Administer oral medication",
      "Encourage ambulation",
      "Protect the airway and prepare suction and ventilation support",
      "Give a large meal"
    ],
    "answer": "Protect the airway and prepare suction and ventilation support",
    "rationale": "Reduced consciousness and emesis increase aspiration risk."
  },
  {
    "id": "MED-SUBMERSION-017",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which monitoring is most relevant for a symptomatic submersion survivor?",
    "choices": [
      "Skin allergy testing",
      "Daily weight alone",
      "Pulse oximetry and repeated respiratory assessment",
      "Routine vision testing only"
    ],
    "answer": "Pulse oximetry and repeated respiratory assessment",
    "rationale": "Respiratory deterioration can develop after aspiration-related lung injury."
  },
  {
    "id": "MED-SUBMERSION-018",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient after drowning has severe hypoxemia despite supplemental oxygen. What should be anticipated?",
    "choices": [
      "Discontinuation of monitoring",
      "Escalated ventilatory support as clinically indicated",
      "Immediate discharge",
      "Routine oral fluids only"
    ],
    "answer": "Escalated ventilatory support as clinically indicated",
    "rationale": "Persistent hypoxemia may require positive-pressure ventilation or intubation."
  },
  {
    "id": "MED-SUBMERSION-019",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which symptom after submersion warrants urgent reassessment?",
    "choices": [
      "Mild hunger",
      "Normal speech and saturation",
      "Stable comfortable breathing",
      "New confusion and cyanosis"
    ],
    "answer": "New confusion and cyanosis",
    "rationale": "Neurologic changes and cyanosis suggest inadequate oxygenation."
  },
  {
    "id": "MED-SUBMERSION-020",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A family asks whether a patient can develop breathing problems after being rescued. What is the best answer?",
    "choices": [
      "Delayed symptoms never occur",
      "All complications appear within seconds",
      "Respiratory symptoms can evolve and require evaluation",
      "All patients require antibiotics"
    ],
    "answer": "Respiratory symptoms can evolve and require evaluation",
    "rationale": "Lung injury can evolve, so symptomatic patients need appropriate monitoring."
  },
  {
    "id": "MED-SUBMERSION-021",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which is an appropriate early question for rescuers?",
    "choices": [
      "Was music playing?",
      "Who owns the pool?",
      "What was the pool paint color?",
      "How long was the patient submerged?"
    ],
    "answer": "How long was the patient submerged?",
    "rationale": "Submersion duration helps estimate hypoxic exposure and risk."
  },
  {
    "id": "MED-SUBMERSION-022",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A drowning survivor has wheezing and low oxygen saturation. What does this suggest?",
    "choices": [
      "Normal expected finding",
      "No need for assessment",
      "Purely psychological distress",
      "Possible aspiration-related airway and lung injury"
    ],
    "answer": "Possible aspiration-related airway and lung injury",
    "rationale": "Wheezing and hypoxemia require respiratory evaluation after submersion."
  },
  {
    "id": "MED-SUBMERSION-023",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "What is the nurse's highest priority when receiving an unconscious drowning victim?",
    "choices": [
      "Airway, breathing, and circulation assessment",
      "Routine bathing",
      "Detailed dietary history",
      "Complete admission paperwork"
    ],
    "answer": "Airway, breathing, and circulation assessment",
    "rationale": "Immediate life threats take priority over secondary history."
  },
  {
    "id": "MED-SUBMERSION-024",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient rescued from water after a seizure has persistent hypoxia. What should the nurse address first?",
    "choices": [
      "Oxygenation while assessing the precipitating seizure",
      "Assume the seizure explains all symptoms",
      "Offer water orally",
      "Schedule an outpatient visit only"
    ],
    "answer": "Oxygenation while assessing the precipitating seizure",
    "rationale": "Both respiratory injury and the precipitating event matter, but oxygenation is immediate."
  },
  {
    "id": "MED-SUBMERSION-025",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient has severe respiratory distress after aspiration of water. Which team response is appropriate?",
    "choices": [
      "Encourage walking",
      "Delay for routine rounds",
      "Activate emergency support and prepare advanced airway equipment",
      "Give a sedative without assessment"
    ],
    "answer": "Activate emergency support and prepare advanced airway equipment",
    "rationale": "Severe distress may require rapid escalation and ventilatory support."
  },
  {
    "id": "MED-SUBMERSION-026",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which outcome measure is most useful immediately after initial drowning resuscitation?",
    "choices": [
      "Improved appetite",
      "Skin temperature alone",
      "Adequate ventilation and oxygen saturation",
      "Weight gain"
    ],
    "answer": "Adequate ventilation and oxygen saturation",
    "rationale": "Restoring effective gas exchange is central to early drowning care."
  },
  {
    "id": "MED-SUBMERSION-027",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A drowning survivor has hypoxemia and bilateral infiltrates. Which complication should be considered?",
    "choices": [
      "Migraine",
      "Renal colic",
      "Acute respiratory distress syndrome",
      "Simple sinusitis"
    ],
    "answer": "Acute respiratory distress syndrome",
    "rationale": "Severe submersion lung injury can progress to ARDS."
  },
  {
    "id": "MED-SUBMERSION-028",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which statement about prophylactic antibiotics after drowning is most appropriate?",
    "choices": [
      "They are not routinely indicated without evidence of infection",
      "All survivors require broad-spectrum antibiotics",
      "They replace airway management",
      "They prevent all lung injury"
    ],
    "answer": "They are not routinely indicated without evidence of infection",
    "rationale": "Routine antibiotics do not treat aspiration-induced chemical lung injury."
  },
  {
    "id": "MED-SUBMERSION-029",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "A patient rescued from a lake is hypothermic and bradycardic. What is important during care?",
    "choices": [
      "Rub the extremities forcefully",
      "Assume bradycardia is always benign",
      "Handle gently and monitor rhythm while rewarming",
      "Encourage vigorous exercise"
    ],
    "answer": "Handle gently and monitor rhythm while rewarming",
    "rationale": "Hypothermia predisposes to dysrhythmias and requires controlled handling and rewarming."
  },
  {
    "id": "MED-SUBMERSION-030",
    "topic": "Submersion Injuries",
    "subtopic": "Submersion Injuries",
    "question": "Which family education point is most important after evaluation of a mild submersion event?",
    "choices": [
      "Return immediately for cough, breathing difficulty, or altered behavior",
      "Ignore new wheezing",
      "Give sedatives to promote sleep",
      "Restrict all activity for a year"
    ],
    "answer": "Return immediately for cough, breathing difficulty, or altered behavior",
    "rationale": "New respiratory or neurologic symptoms require prompt reassessment."
  }
];

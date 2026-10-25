// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencyShockQuestions = 
[
  {
    "id": "MED-SHOCK-001",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A postoperative client has HR 122/min, BP 118/76 mmHg, new restlessness, and urine output 15 mL/hr. Which action is the priority?",
    "choices": [
      "Reassess in four hours because BP is normal",
      "Recognize possible compensatory shock and immediately escalate assessment",
      "Administer a sedative for anxiety",
      "Restrict oral fluids"
    ],
    "answer": "Recognize possible compensatory shock and immediately escalate assessment",
    "rationale": "Tachycardia, restlessness, and oliguria can indicate compensatory shock before hypotension develops."
  },
  {
    "id": "MED-SHOCK-002",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client with massive gastrointestinal bleeding has cool clammy skin and weak pulses. Which prescription should the nurse anticipate?",
    "choices": [
      "Rapid isotonic IV fluids and blood products as indicated",
      "Routine diuresis",
      "Fluid restriction",
      "An antihistamine alone"
    ],
    "answer": "Rapid isotonic IV fluids and blood products as indicated",
    "rationale": "Hypovolemic shock requires restoration of circulating volume and control of bleeding."
  },
  {
    "id": "MED-SHOCK-003",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client develops wheezing, facial swelling, and hypotension after an antibiotic. Which medication is the priority?",
    "choices": [
      "Diphenhydramine by mouth",
      "Intramuscular epinephrine",
      "Oral prednisone",
      "Atropine"
    ],
    "answer": "Intramuscular epinephrine",
    "rationale": "IM epinephrine is first-line treatment for anaphylaxis and must not be delayed for antihistamines."
  },
  {
    "id": "MED-SHOCK-004",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "After a cervical spinal cord injury, a client is hypotensive with HR 48/min and warm skin. Which shock type is most likely?",
    "choices": [
      "Hypovolemic",
      "Cardiogenic",
      "Neurogenic distributive",
      "Obstructive"
    ],
    "answer": "Neurogenic distributive",
    "rationale": "Loss of sympathetic tone in neurogenic shock causes vasodilation with characteristic bradycardia."
  },
  {
    "id": "MED-SHOCK-005",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client with chest pain has hypotension, jugular venous distention, and crackles. Which intervention requires particular caution?",
    "choices": [
      "Continuous cardiac monitoring",
      "Assessing oxygenation",
      "Giving a large rapid fluid bolus without reassessment",
      "Preparing ordered vasoactive support"
    ],
    "answer": "Giving a large rapid fluid bolus without reassessment",
    "rationale": "Cardiogenic shock involves pump failure and pulmonary congestion; indiscriminate large fluid boluses can worsen edema."
  },
  {
    "id": "MED-SHOCK-006",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A trauma client is tachycardic and restless but normotensive. Which stage of shock best fits?",
    "choices": [
      "Recovery",
      "Refractory",
      "Compensatory",
      "Progressive with irreversible injury"
    ],
    "answer": "Compensatory",
    "rationale": "Sympathetic compensation may maintain blood pressure despite impaired tissue perfusion."
  },
  {
    "id": "MED-SHOCK-007",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which assessment most strongly suggests worsening renal perfusion during shock?",
    "choices": [
      "Urine output falls to 12 mL/hr",
      "Patient reports thirst alone",
      "Urine output reaches 50 mL/hr",
      "Temperature is 37 C"
    ],
    "answer": "Urine output falls to 12 mL/hr",
    "rationale": "Oliguria signals reduced renal blood flow and requires prompt reassessment."
  },
  {
    "id": "MED-SHOCK-008",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A septic client remains at MAP 58 after ordered fluid resuscitation. Which infusion is commonly anticipated?",
    "choices": [
      "Furosemide",
      "Nitroglycerin",
      "Norepinephrine",
      "Insulin"
    ],
    "answer": "Norepinephrine",
    "rationale": "Norepinephrine is a first-line vasopressor when septic shock remains hypotensive after appropriate fluids."
  },
  {
    "id": "MED-SHOCK-009",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient with sudden dyspnea, hypotension, and unilateral absent breath sounds after trauma requires which priority?",
    "choices": [
      "Immediate evaluation for tension pneumothorax decompression",
      "Routine incentive spirometry",
      "Oral antibiotics",
      "Ambulation"
    ],
    "answer": "Immediate evaluation for tension pneumothorax decompression",
    "rationale": "Tension pneumothorax is an obstructive shock emergency requiring prompt decompression."
  },
  {
    "id": "MED-SHOCK-010",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient with suspected tamponade has hypotension, distended neck veins, and muffled heart sounds. Which procedure addresses the cause?",
    "choices": [
      "Dialysis",
      "Gastric lavage",
      "Urgent pericardial drainage",
      "Bronchoscopy"
    ],
    "answer": "Urgent pericardial drainage",
    "rationale": "Tamponade impairs ventricular filling and may require emergent pericardiocentesis."
  },
  {
    "id": "MED-SHOCK-011",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which trend best suggests improving perfusion after shock treatment?",
    "choices": [
      "Increasing confusion",
      "Declining urine output",
      "Falling serum lactate",
      "Rising serum lactate"
    ],
    "answer": "Falling serum lactate",
    "rationale": "Lactate trending downward can reflect improving tissue oxygen delivery and clearance."
  },
  {
    "id": "MED-SHOCK-012",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "An older adult with sepsis becomes newly confused. Which interpretation is most appropriate?",
    "choices": [
      "Possible early tissue hypoperfusion",
      "Definitive stroke without evaluation",
      "Medication nonadherence only",
      "Expected aging"
    ],
    "answer": "Possible early tissue hypoperfusion",
    "rationale": "Altered mental status can be an early indicator of inadequate cerebral perfusion."
  },
  {
    "id": "MED-SHOCK-013",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client with acute myocardial infarction has pulmonary crackles, cool extremities, and hypotension. Which shock mechanism is likely?",
    "choices": [
      "Loss of vascular tone from spinal injury",
      "Severe fluid loss only",
      "Mechanical venous obstruction",
      "Failure of the cardiac pump"
    ],
    "answer": "Failure of the cardiac pump",
    "rationale": "Cardiogenic shock results from impaired contractility and forward cardiac output."
  },
  {
    "id": "MED-SHOCK-014",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which finding helps distinguish neurogenic shock from typical hypovolemic shock?",
    "choices": [
      "Tachycardia with cool clammy skin",
      "Marked dehydration",
      "Bradycardia with warm skin",
      "Hematemesis"
    ],
    "answer": "Bradycardia with warm skin",
    "rationale": "Neurogenic shock can cause bradycardia and vasodilation from loss of sympathetic tone."
  },
  {
    "id": "MED-SHOCK-015",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client with anaphylaxis has stridor and hypotension. Which intervention must not be delayed?",
    "choices": [
      "Topical corticosteroid",
      "Oral hydration",
      "Oral antihistamine",
      "Intramuscular epinephrine"
    ],
    "answer": "Intramuscular epinephrine",
    "rationale": "IM epinephrine is the first-line treatment for anaphylaxis with airway and circulatory compromise."
  },
  {
    "id": "MED-SHOCK-016",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient with hemorrhagic shock is receiving blood. Which additional action addresses the underlying problem?",
    "choices": [
      "Encourage exercise",
      "Locate and control the bleeding source",
      "Restrict oxygen",
      "Give diuretics immediately"
    ],
    "answer": "Locate and control the bleeding source",
    "rationale": "Hemorrhage control is essential alongside resuscitation."
  },
  {
    "id": "MED-SHOCK-017",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Why may blood pressure appear normal in early shock?",
    "choices": [
      "Compensatory vasoconstriction maintains pressure temporarily",
      "Kidneys increase filtration",
      "Lactate must be normal",
      "All organs are adequately perfused"
    ],
    "answer": "Compensatory vasoconstriction maintains pressure temporarily",
    "rationale": "Compensatory mechanisms can mask declining tissue perfusion."
  },
  {
    "id": "MED-SHOCK-018",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which shock stage features failing compensation and increasing organ injury?",
    "choices": [
      "Initial",
      "Compensatory only",
      "Resolved",
      "Progressive"
    ],
    "answer": "Progressive",
    "rationale": "Progressive shock involves worsening hypoperfusion despite compensatory responses."
  },
  {
    "id": "MED-SHOCK-019",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient with refractory shock develops multiple-organ dysfunction. What does refractory imply?",
    "choices": [
      "Mild fluid deficit",
      "Early fully compensated shock",
      "Severe prolonged hypoperfusion with poor reversibility",
      "Isolated anxiety"
    ],
    "answer": "Severe prolonged hypoperfusion with poor reversibility",
    "rationale": "Refractory shock involves widespread cellular injury and often irreversible organ dysfunction."
  },
  {
    "id": "MED-SHOCK-020",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client with cardiogenic shock is ordered a large rapid fluid bolus despite pulmonary edema. What should the nurse do?",
    "choices": [
      "Give it without reassessment",
      "Stop cardiac monitoring",
      "Clarify the order and assess fluid tolerance",
      "Encourage unrestricted oral intake"
    ],
    "answer": "Clarify the order and assess fluid tolerance",
    "rationale": "Excess fluids may worsen pulmonary congestion in pump failure."
  },
  {
    "id": "MED-SHOCK-021",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which measure is a commonly used minimum MAP target in resuscitation?",
    "choices": [
      "100 mmHg for every patient",
      "30 mmHg",
      "45 mmHg",
      "65 mmHg"
    ],
    "answer": "65 mmHg",
    "rationale": "A MAP of at least 65 mmHg is a common initial goal, individualized to the patient."
  },
  {
    "id": "MED-SHOCK-022",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A septic patient has fever, warm flushed skin, and hypotension. Which mechanism explains early findings?",
    "choices": [
      "Primary failure of cardiac valves only",
      "Sudden massive blood loss",
      "Mechanical cardiac obstruction",
      "Peripheral vasodilation lowers systemic vascular resistance"
    ],
    "answer": "Peripheral vasodilation lowers systemic vascular resistance",
    "rationale": "Distributive shock is characterized by vasodilation and reduced systemic vascular resistance."
  },
  {
    "id": "MED-SHOCK-023",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient with massive pulmonary embolism collapses. Which shock category applies?",
    "choices": [
      "Anaphylactic",
      "Hypovolemic",
      "Obstructive",
      "Neurogenic"
    ],
    "answer": "Obstructive",
    "rationale": "A large pulmonary embolus obstructs pulmonary circulation and reduces cardiac output."
  },
  {
    "id": "MED-SHOCK-024",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A client in shock has cool mottled extremities and delayed capillary refill. What is the best interpretation?",
    "choices": [
      "Adequate cardiac output is confirmed",
      "The client is overhydrated",
      "Peripheral perfusion is impaired",
      "No reassessment is needed"
    ],
    "answer": "Peripheral perfusion is impaired",
    "rationale": "Poor skin perfusion can reflect systemic circulatory compromise."
  },
  {
    "id": "MED-SHOCK-025",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which hormone system increases sodium and water retention during compensated shock?",
    "choices": [
      "Calcitonin release",
      "Renin-angiotensin-aldosterone system",
      "Melatonin pathway",
      "Thyroid axis only"
    ],
    "answer": "Renin-angiotensin-aldosterone system",
    "rationale": "RAAS activation helps preserve circulating volume and blood pressure."
  },
  {
    "id": "MED-SHOCK-026",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which medication primarily increases contractility in selected cardiogenic shock cases?",
    "choices": [
      "Activated charcoal",
      "Acetaminophen",
      "Naloxone",
      "Dobutamine"
    ],
    "answer": "Dobutamine",
    "rationale": "Dobutamine is an inotrope that can improve cardiac contractility when indicated."
  },
  {
    "id": "MED-SHOCK-027",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient receiving norepinephrine develops a pale painful IV site. What is the priority?",
    "choices": [
      "Apply a tourniquet",
      "Assess for extravasation and follow protocol immediately",
      "Ignore until shift change",
      "Increase infusion rate"
    ],
    "answer": "Assess for extravasation and follow protocol immediately",
    "rationale": "Vasopressor extravasation can cause tissue ischemia and requires immediate action."
  },
  {
    "id": "MED-SHOCK-028",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "After resuscitation a 70 kg adult produces 40 mL urine in one hour. How should the nurse interpret this?",
    "choices": [
      "Indicates fluid overload",
      "Proves sepsis has resolved",
      "Meets the common minimum urine output goal",
      "Definite anuria"
    ],
    "answer": "Meets the common minimum urine output goal",
    "rationale": "A common perfusion target is at least 0.5 mL/kg/hr, about 35 mL/hr for 70 kg."
  },
  {
    "id": "MED-SHOCK-029",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "Which patient requires immediate evaluation for shock despite a normal BP?",
    "choices": [
      "A patient sleeping with normal urine output",
      "A postoperative client with HR 130, confusion, and cool skin",
      "A patient with stable chronic hypertension",
      "A comfortable patient with normal mentation"
    ],
    "answer": "A postoperative client with HR 130, confusion, and cool skin",
    "rationale": "Tachycardia and altered mentation can signal shock before hypotension appears."
  },
  {
    "id": "MED-SHOCK-030",
    "topic": "Shock",
    "subtopic": "Shock",
    "question": "A patient in shock has rising lactate and decreasing urine output despite treatment. What is the best next step?",
    "choices": [
      "Delay reassessment until morning",
      "Document improvement",
      "Offer oral fluids only",
      "Escalate care and reassess perfusion and treatment response"
    ],
    "answer": "Escalate care and reassess perfusion and treatment response",
    "rationale": "Worsening perfusion markers require prompt team reassessment and intervention."
  }
];

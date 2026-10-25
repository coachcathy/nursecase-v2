// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencyEnvironmentalQuestions = 
[
  {
    "id": "MED-ENVIR-001",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "An outdoor worker is confused, has a core temperature of 105°F (40.6°C), and is tachycardic. Which intervention is most urgent?",
    "choices": [
      "Begin rapid cooling while supporting ABCs",
      "Give acetaminophen and wait",
      "Offer hot tea",
      "Apply warm blankets"
    ],
    "answer": "Begin rapid cooling while supporting ABCs",
    "rationale": "Heat stroke is an emergency requiring rapid cooling and airway/circulatory support; antipyretics are not effective."
  },
  {
    "id": "MED-ENVIR-002",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which finding most strongly distinguishes heat stroke from uncomplicated heat exhaustion?",
    "choices": [
      "Mild thirst",
      "Altered mental status",
      "Sweating",
      "Muscle fatigue"
    ],
    "answer": "Altered mental status",
    "rationale": "Central nervous system dysfunction is a key indicator of heat stroke; sweating may still be present."
  },
  {
    "id": "MED-ENVIR-003",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A client has frostbitten fingers and may have to walk through freezing conditions again. What should the nurse avoid?",
    "choices": [
      "Removing constricting jewelry",
      "Protecting the area from trauma",
      "Thawing the fingers if refreezing is likely",
      "Arranging transport"
    ],
    "answer": "Thawing the fingers if refreezing is likely",
    "rationale": "Thawing followed by refreezing worsens tissue damage; protect the part until definitive rewarming is feasible."
  },
  {
    "id": "MED-ENVIR-004",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A hiker is bitten by a rattlesnake. Which actions are appropriate? Select all that apply.",
    "choices": [
      "Remove rings from the affected limb",
      "Keep the person calm and obtain emergency care",
      "Apply a tight tourniquet",
      "Cut the wound to remove venom",
      "Contact Poison Control"
    ],
    "answer": [
      "Remove rings from the affected limb",
      "Keep the person calm and obtain emergency care",
      "Contact Poison Control"
    ],
    "rationale": "Remove constrictive items, limit exertion, seek emergency care and consult Poison Control; incision and tourniquets are unsafe."
  },
  {
    "id": "MED-ENVIR-005",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Several people are struck by lightning. Which victim should rescuers assess first?",
    "choices": [
      "A walking person with a small skin mark",
      "An unresponsive person in cardiac arrest",
      "A person with mild ankle pain",
      "A person asking for water"
    ],
    "answer": "An unresponsive person in cardiac arrest",
    "rationale": "In lightning mass-casualty events, reverse triage prioritizes victims in cardiac or respiratory arrest who may respond to prompt resuscitation."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-006",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A runner is confused with a core temperature of 40.5 C after exertion. What is the priority?",
    "choices": [
      "Begin rapid active cooling and emergency stabilization",
      "Wait for sweating to stop",
      "Offer only oral fluids",
      "Apply warm blankets"
    ],
    "answer": "Begin rapid active cooling and emergency stabilization",
    "rationale": "Heat stroke is defined by severe hyperthermia with CNS dysfunction and requires immediate cooling."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-007",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A worker is dizzy and sweating heavily but alert after outdoor labor. Which condition is most likely?",
    "choices": [
      "Severe frostbite",
      "Refractory shock",
      "Carbon monoxide poisoning",
      "Heat exhaustion"
    ],
    "answer": "Heat exhaustion",
    "rationale": "Heat exhaustion causes volume depletion and symptoms without the defining CNS dysfunction of heat stroke."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-008",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which finding differentiates heat stroke from uncomplicated heat exhaustion?",
    "choices": [
      "Altered mental status",
      "Thirst alone",
      "Mild muscle cramps",
      "Sweating alone"
    ],
    "answer": "Altered mental status",
    "rationale": "CNS dysfunction is a key distinguishing feature of heat stroke."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-009",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient with heat stroke continues to sweat. What should the nurse conclude?",
    "choices": [
      "No cooling is needed",
      "Heat stroke remains possible despite sweating",
      "The temperature is necessarily normal",
      "Sweating excludes heat stroke"
    ],
    "answer": "Heat stroke remains possible despite sweating",
    "rationale": "Exertional heat stroke may present with sweating."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-010",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which intervention is preferred for exertional heat stroke when feasible?",
    "choices": [
      "Rapid cold-water immersion",
      "Delaying cooling for imaging",
      "Warm-water immersion",
      "Routine antipyretics alone"
    ],
    "answer": "Rapid cold-water immersion",
    "rationale": "Rapid active cooling is the most important intervention for exertional heat stroke."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-011",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A hiker has a core temperature of 33 C and shivering. What condition is present?",
    "choices": [
      "Fever",
      "Heat stroke",
      "Hypothermia",
      "Normal temperature"
    ],
    "answer": "Hypothermia",
    "rationale": "Core temperature below 35 C meets the definition of hypothermia."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-012",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A severely hypothermic patient has a weak pulse. Which approach is appropriate?",
    "choices": [
      "Give ice water",
      "Declare death solely due to low temperature",
      "Force the patient to run",
      "Check carefully for signs of life and initiate appropriate resuscitation and rewarming"
    ],
    "answer": "Check carefully for signs of life and initiate appropriate resuscitation and rewarming",
    "rationale": "Severe hypothermia slows vital signs and requires careful assessment and controlled rewarming."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-013",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Why should severely hypothermic patients be handled gently?",
    "choices": [
      "Movement always raises blood glucose",
      "Movement can precipitate dysrhythmias",
      "It eliminates need for monitoring",
      "It prevents all infection"
    ],
    "answer": "Movement can precipitate dysrhythmias",
    "rationale": "The hypothermic myocardium is irritable and susceptible to arrhythmia."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-014",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient has pale numb fingers after freezing exposure. What is the priority if refreezing can be prevented?",
    "choices": [
      "Break any blisters",
      "Rub the fingers vigorously",
      "Apply direct high heat",
      "Rapid rewarming in controlled warm water"
    ],
    "answer": "Rapid rewarming in controlled warm water",
    "rationale": "Controlled rewarming is used for frostbite when refreezing risk has been removed."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-015",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which action is contraindicated in frostbite care?",
    "choices": [
      "Rubbing frozen tissue",
      "Preventing refreezing",
      "Protecting the area",
      "Assessing circulation"
    ],
    "answer": "Rubbing frozen tissue",
    "rationale": "Rubbing increases tissue damage in frostbite."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-016",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A snakebite patient has swelling and progressive pain. Which action is appropriate?",
    "choices": [
      "Immobilize the limb and seek emergency evaluation",
      "Cut and suction the wound",
      "Apply a tight tourniquet",
      "Apply ice directly"
    ],
    "answer": "Immobilize the limb and seek emergency evaluation",
    "rationale": "Supportive immobilization and rapid medical assessment are preferred; tourniquets and cutting are harmful."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-017",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which action should be avoided after suspected venomous snakebite?",
    "choices": [
      "Removing constricting jewelry",
      "Attempting to suck out venom",
      "Transporting for medical care",
      "Monitoring swelling"
    ],
    "answer": "Attempting to suck out venom",
    "rationale": "Venom suction is ineffective and can worsen injury."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-018",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient has progressive swelling after a pit viper bite. Which treatment may be indicated?",
    "choices": [
      "Routine aspirin only",
      "Forced exercise",
      "Antivenom guided by clinical severity",
      "Immediate limb incision"
    ],
    "answer": "Antivenom guided by clinical severity",
    "rationale": "Antivenom is used for significant envenomation with progressive effects."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-019",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient bitten by a black widow spider develops painful muscle spasms. What is a priority?",
    "choices": [
      "Encourage vigorous exercise",
      "Ignore the bite",
      "Assess pain, vital signs, and systemic symptoms",
      "Apply a tourniquet"
    ],
    "answer": "Assess pain, vital signs, and systemic symptoms",
    "rationale": "Black widow venom can cause systemic neuromuscular symptoms needing supportive care."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-020",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A suspected brown recluse bite develops tissue necrosis. What should the nurse avoid?",
    "choices": [
      "Monitoring the wound",
      "Providing wound care",
      "Applying heat directly to the lesion",
      "Assessing for infection"
    ],
    "answer": "Applying heat directly to the lesion",
    "rationale": "Heat may worsen local injury; wound assessment and supportive care are important."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-021",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A lightning-strike victim is unresponsive and not breathing. What should rescuers do?",
    "choices": [
      "Give oral fluids first",
      "Avoid touching because electricity remains stored",
      "Start resuscitation immediately when safe",
      "Wait until skin burns are treated"
    ],
    "answer": "Start resuscitation immediately when safe",
    "rationale": "Lightning victims do not retain electrical charge; cardiac and respiratory arrest need immediate resuscitation."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-022",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "During a lightning mass casualty, who may receive priority attention?",
    "choices": [
      "An apparently lifeless victim who may respond to resuscitation",
      "The patient able to walk",
      "Only the patient with minor burns",
      "The loudest patient"
    ],
    "answer": "An apparently lifeless victim who may respond to resuscitation",
    "rationale": "Lightning incidents use reverse triage because prompt resuscitation may be lifesaving."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-023",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient with heat exhaustion is alert and able to swallow. What intervention is appropriate?",
    "choices": [
      "Give alcohol",
      "Move to a cool environment and replace fluids as tolerated",
      "Continue exercise",
      "Apply heated blankets"
    ],
    "answer": "Move to a cool environment and replace fluids as tolerated",
    "rationale": "Cooling, rest, and fluid replacement treat heat exhaustion."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-024",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A hypothermic patient is wet from cold-water exposure. Which first action supports rewarming?",
    "choices": [
      "Remove wet clothing and insulate from further heat loss",
      "Rub extremities",
      "Give sedating medication",
      "Place in front of an open flame"
    ],
    "answer": "Remove wet clothing and insulate from further heat loss",
    "rationale": "Removing wet garments and preventing ongoing heat loss are early measures."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-025",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which sign suggests severe hypothermia rather than mild hypothermia?",
    "choices": [
      "Normal orientation with shivering",
      "Markedly reduced consciousness",
      "Mild cold discomfort",
      "Normal heart rate after warming"
    ],
    "answer": "Markedly reduced consciousness",
    "rationale": "Severe hypothermia can cause profound CNS and cardiovascular depression."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-026",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient with frostbite develops blisters after thawing. What should the nurse do?",
    "choices": [
      "Puncture all blisters at home",
      "Protect tissue and follow specialized wound-care guidance",
      "Massage until red",
      "Apply ice repeatedly"
    ],
    "answer": "Protect tissue and follow specialized wound-care guidance",
    "rationale": "Blister management is individualized; protect injured tissue from further trauma."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-027",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "Which complication should be monitored in severe heat stroke?",
    "choices": [
      "Near-sightedness",
      "Rhabdomyolysis and organ injury",
      "Isolated dental pain",
      "Simple hay fever"
    ],
    "answer": "Rhabdomyolysis and organ injury",
    "rationale": "Heat stroke can cause muscle breakdown, renal injury, and multi-organ dysfunction."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-028",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient with severe heat illness has a seizure. Which intervention takes priority?",
    "choices": [
      "Protect airway and continue emergency cooling",
      "Encourage walking",
      "Delay treatment for routine paperwork",
      "Give oral fluids during seizure"
    ],
    "answer": "Protect airway and continue emergency cooling",
    "rationale": "Seizure management, airway protection, and rapid cooling are time-critical."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-029",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A cold-exposed patient is confused and has slow respirations. What is the best action?",
    "choices": [
      "Offer alcohol for warmth",
      "Activate emergency care and assess airway and core temperature",
      "Leave outdoors to acclimate",
      "Force vigorous exercise"
    ],
    "answer": "Activate emergency care and assess airway and core temperature",
    "rationale": "Hypothermia with altered consciousness is a medical emergency."
  },
  {
    "id": "MED-ENVIRONMENTALEMERGENCIES-030",
    "topic": "Environmental Emergencies",
    "subtopic": "Environmental Emergencies",
    "question": "A patient arrives after a venomous bite with hypotension and airway swelling. What is the priority?",
    "choices": [
      "Schedule routine follow-up",
      "Immediate airway and circulatory stabilization",
      "Photograph the wound before assessment",
      "Offer a meal"
    ],
    "answer": "Immediate airway and circulatory stabilization",
    "rationale": "Systemic envenomation can threaten airway and perfusion and requires urgent stabilization."
  }
];

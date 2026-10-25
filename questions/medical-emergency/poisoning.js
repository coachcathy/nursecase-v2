// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencyPoisoningQuestions = 
[
  {
    "id": "MED-POISO-001",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A client with suspected acetaminophen overdose reports feeling better 36 hours after ingestion but has rising liver enzymes. Which medication should the nurse anticipate?",
    "choices": [
      "N-acetylcysteine",
      "Flumazenil",
      "Atropine",
      "Naloxone"
    ],
    "answer": "N-acetylcysteine",
    "rationale": "N-acetylcysteine replenishes glutathione and is the antidote for acetaminophen toxicity; improvement in symptoms can be misleading."
  },
  {
    "id": "MED-POISO-002",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A client who took an unknown number of aspirin tablets has tinnitus, rapid breathing and an abnormal acid-base status. Which pattern is characteristic?",
    "choices": [
      "Respiratory alkalosis with metabolic acidosis",
      "Pure respiratory acidosis only",
      "Pure metabolic alkalosis only",
      "Normal acid-base status in all cases"
    ],
    "answer": "Respiratory alkalosis with metabolic acidosis",
    "rationale": "Salicylate toxicity classically causes a mixed respiratory alkalosis and metabolic acidosis."
  },
  {
    "id": "MED-POISO-003",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A client with tricyclic antidepressant overdose has a widening QRS complex. Which therapy should the nurse prepare for?",
    "choices": [
      "IV sodium bicarbonate",
      "Oral iron",
      "Flumazenil",
      "Activated vitamin K"
    ],
    "answer": "IV sodium bicarbonate",
    "rationale": "Sodium bicarbonate treats cardiac sodium-channel blockade and QRS widening in TCA toxicity."
  },
  {
    "id": "MED-POISO-004",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A client is found with pinpoint pupils, slow respirations, and decreased responsiveness. Which antidote is indicated?",
    "choices": [
      "Naloxone",
      "N-acetylcysteine",
      "Glucagon",
      "Atropine"
    ],
    "answer": "Naloxone",
    "rationale": "Respiratory depression with miosis suggests opioid toxicity; naloxone reverses opioid effects while ventilation is supported."
  },
  {
    "id": "MED-POISO-005",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which actions are appropriate when managing a suspected poisoning? Select all that apply.",
    "choices": [
      "Assess and protect the airway",
      "Contact Poison Control",
      "Identify the substance, amount and time of exposure",
      "Induce vomiting with syrup of ipecac",
      "Obtain ECG and relevant laboratory studies"
    ],
    "answer": [
      "Assess and protect the airway",
      "Contact Poison Control",
      "Identify the substance, amount and time of exposure",
      "Obtain ECG and relevant laboratory studies"
    ],
    "rationale": "Initial poisoning care focuses on ABCs, exposure history, expert consultation and monitoring; ipecac is not recommended."
  },
  {
    "id": "MED-POISONING-006",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with suspected opioid overdose has pinpoint pupils and respirations of 5/min. What is the priority?",
    "choices": [
      "Induce vomiting",
      "Delay treatment for toxicology results",
      "Offer oral fluids",
      "Support ventilation and administer naloxone as indicated"
    ],
    "answer": "Support ventilation and administer naloxone as indicated",
    "rationale": "Respiratory depression is the immediate threat in opioid toxicity; ventilation and naloxone are key."
  },
  {
    "id": "MED-POISONING-007",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with acetaminophen overdose arrives eight hours after ingestion. Which antidote should the nurse anticipate?",
    "choices": [
      "Flumazenil",
      "N-acetylcysteine",
      "Atropine",
      "Vitamin K"
    ],
    "answer": "N-acetylcysteine",
    "rationale": "N-acetylcysteine replenishes glutathione and reduces acetaminophen liver injury."
  },
  {
    "id": "MED-POISONING-008",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which laboratory study guides risk assessment after a single acute acetaminophen ingestion at a known time?",
    "choices": [
      "Timed serum acetaminophen concentration",
      "Urine ketones only",
      "Troponin alone",
      "Serum sodium alone"
    ],
    "answer": "Timed serum acetaminophen concentration",
    "rationale": "A properly timed acetaminophen level is interpreted using the treatment nomogram when applicable."
  },
  {
    "id": "MED-POISONING-009",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient has tinnitus, tachypnea, and vomiting after aspirin overdose. Which toxicity is likely?",
    "choices": [
      "Opioid toxicity",
      "Beta-blocker toxicity",
      "Salicylate toxicity",
      "Carbon monoxide toxicity"
    ],
    "answer": "Salicylate toxicity",
    "rationale": "Tinnitus and hyperventilation are classic manifestations of salicylate poisoning."
  },
  {
    "id": "MED-POISONING-010",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which acid-base pattern is characteristic of significant salicylate poisoning?",
    "choices": [
      "No acid-base changes",
      "Pure respiratory acidosis only",
      "Respiratory alkalosis with metabolic acidosis",
      "Pure metabolic alkalosis only"
    ],
    "answer": "Respiratory alkalosis with metabolic acidosis",
    "rationale": "Salicylates stimulate respiration and disrupt metabolism, producing a mixed disorder."
  },
  {
    "id": "MED-POISONING-011",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which treatment promotes salicylate elimination in selected cases?",
    "choices": [
      "Insulin alone",
      "Oral activated charcoal days later",
      "Routine calcium supplementation",
      "IV sodium bicarbonate to alkalinize serum and urine"
    ],
    "answer": "IV sodium bicarbonate to alkalinize serum and urine",
    "rationale": "Alkalinization reduces salicylate entry into tissues and enhances renal elimination."
  },
  {
    "id": "MED-POISONING-012",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with tricyclic antidepressant overdose has QRS widening and hypotension. Which therapy is anticipated?",
    "choices": [
      "Naloxone alone",
      "IV sodium bicarbonate",
      "Protamine",
      "N-acetylcysteine"
    ],
    "answer": "IV sodium bicarbonate",
    "rationale": "Sodium bicarbonate treats cardiac sodium-channel blockade in TCA toxicity."
  },
  {
    "id": "MED-POISONING-013",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with beta-blocker overdose is bradycardic and hypotensive. Which medication may be used as part of treatment?",
    "choices": [
      "N-acetylcysteine",
      "Glucagon",
      "Vitamin K",
      "Atropine as the sole definitive therapy"
    ],
    "answer": "Glucagon",
    "rationale": "Glucagon may improve cardiac function in beta-blocker toxicity, alongside other supportive and advanced therapies."
  },
  {
    "id": "MED-POISONING-014",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which issue is most concerning in sedative-hypnotic overdose?",
    "choices": [
      "Isolated rash",
      "Hyperactive bowel sounds alone",
      "Mild thirst",
      "Airway and respiratory depression"
    ],
    "answer": "Airway and respiratory depression",
    "rationale": "CNS depressants can impair protective reflexes and breathing."
  },
  {
    "id": "MED-POISONING-015",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Why is flumazenil not routinely given for every benzodiazepine overdose?",
    "choices": [
      "It treats acetaminophen toxicity",
      "It can precipitate seizures in susceptible patients",
      "It has no pharmacologic activity",
      "It reverses all sedatives"
    ],
    "answer": "It can precipitate seizures in susceptible patients",
    "rationale": "Flumazenil can trigger seizures, especially with dependence or mixed ingestions."
  },
  {
    "id": "MED-POISONING-016",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A poisoned patient is somnolent with gurgling respirations. What should the nurse do first?",
    "choices": [
      "Administer oral charcoal immediately",
      "Obtain a detailed social history",
      "Provide a snack",
      "Assess and protect the airway with suction and ventilatory support"
    ],
    "answer": "Assess and protect the airway with suction and ventilatory support",
    "rationale": "Airway protection precedes decontamination when consciousness is impaired."
  },
  {
    "id": "MED-POISONING-017",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which condition is a major contraindication to activated charcoal without airway protection?",
    "choices": [
      "Alertness and cooperation",
      "Stable vital signs",
      "Absent protective airway reflexes",
      "Known ingestion time"
    ],
    "answer": "Absent protective airway reflexes",
    "rationale": "Charcoal can be aspirated in patients unable to protect their airway."
  },
  {
    "id": "MED-POISONING-018",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A family asks whether to induce vomiting after a household chemical ingestion. What is the best response?",
    "choices": [
      "Give salt water to cause emesis",
      "Neutralize with household acid",
      "Do not induce vomiting; contact poison control or emergency services",
      "Induce vomiting immediately"
    ],
    "answer": "Do not induce vomiting; contact poison control or emergency services",
    "rationale": "Induced vomiting can worsen injury and aspiration risk."
  },
  {
    "id": "MED-POISONING-019",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient exposed to an unknown toxin has severe agitation, hyperthermia, and dilated pupils. What is the best approach?",
    "choices": [
      "Wait for a complete drug screen",
      "Diagnose solely from pupil size",
      "Assess a toxidrome and stabilize airway, circulation, and temperature",
      "Administer activated charcoal automatically"
    ],
    "answer": "Assess a toxidrome and stabilize airway, circulation, and temperature",
    "rationale": "Toxidrome recognition combines vital signs, pupils, and mental status; stabilization comes first."
  },
  {
    "id": "MED-POISONING-020",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with anticholinergic toxicity is likely to have which finding?",
    "choices": [
      "Pinpoint pupils and bradypnea",
      "Dry skin, urinary retention, and mydriasis",
      "Profuse salivation and diarrhea",
      "Severe hypothermia with sweating"
    ],
    "answer": "Dry skin, urinary retention, and mydriasis",
    "rationale": "Anticholinergic toxicity causes dry mucosa, dilated pupils, urinary retention, and delirium."
  },
  {
    "id": "MED-POISONING-021",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with cholinergic poisoning has bronchorrhea, bradycardia, and pinpoint pupils. Which medication may be indicated?",
    "choices": [
      "Glucagon",
      "Naloxone",
      "Atropine",
      "N-acetylcysteine"
    ],
    "answer": "Atropine",
    "rationale": "Atropine counters muscarinic effects such as bronchorrhea in cholinergic poisoning."
  },
  {
    "id": "MED-POISONING-022",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with suspected carbon monoxide exposure has headache and confusion. Which intervention is priority?",
    "choices": [
      "Rely on normal pulse oximetry to exclude exposure",
      "Administer high-concentration oxygen and remove from exposure",
      "Give activated charcoal",
      "Encourage exercise"
    ],
    "answer": "Administer high-concentration oxygen and remove from exposure",
    "rationale": "Carbon monoxide poisoning requires prompt oxygen; standard pulse oximetry may appear normal."
  },
  {
    "id": "MED-POISONING-023",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Why is a standard pulse oximeter unreliable in carbon monoxide poisoning?",
    "choices": [
      "It cannot reliably distinguish oxyhemoglobin from carboxyhemoglobin",
      "It directly measures CO level",
      "It always reads zero",
      "It measures serum lactate only"
    ],
    "answer": "It cannot reliably distinguish oxyhemoglobin from carboxyhemoglobin",
    "rationale": "Co-oximetry is needed to quantify carboxyhemoglobin."
  },
  {
    "id": "MED-POISONING-024",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with alcohol intoxication is unconscious and hypoglycemic. What is the priority?",
    "choices": [
      "Delay for alcohol level",
      "Give oral juice despite absent gag reflex",
      "Withhold glucose until thiamine is available",
      "Treat hypoglycemia promptly while protecting the airway"
    ],
    "answer": "Treat hypoglycemia promptly while protecting the airway",
    "rationale": "Life-threatening hypoglycemia must be corrected promptly; thiamine can be given concurrently when indicated."
  },
  {
    "id": "MED-POISONING-025",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A malnourished patient with heavy alcohol use is at risk for which deficiency?",
    "choices": [
      "Thiamine deficiency",
      "Excess vitamin K",
      "Hypercalcemia from alcohol alone",
      "Excess vitamin C"
    ],
    "answer": "Thiamine deficiency",
    "rationale": "Chronic heavy alcohol use and malnutrition can predispose to thiamine deficiency and Wernicke encephalopathy."
  },
  {
    "id": "MED-POISONING-026",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which first step is appropriate after a pesticide splash on skin?",
    "choices": [
      "Apply a neutralizing chemical",
      "Give oral charcoal before assessment",
      "Bring contaminated clothes into the waiting room",
      "Protect staff and remove contaminated clothing while irrigating exposed skin"
    ],
    "answer": "Protect staff and remove contaminated clothing while irrigating exposed skin",
    "rationale": "Decontamination limits ongoing dermal exposure and protects responders."
  },
  {
    "id": "MED-POISONING-027",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient with suspected poisoning has ventricular dysrhythmia. What is the immediate nursing priority?",
    "choices": [
      "Routine outpatient follow-up",
      "Diet counseling first",
      "Cardiac monitoring and emergency stabilization",
      "Delay until drug identity is confirmed"
    ],
    "answer": "Cardiac monitoring and emergency stabilization",
    "rationale": "Potentially fatal dysrhythmias require immediate stabilization regardless of the specific toxin."
  },
  {
    "id": "MED-POISONING-028",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "Which resource should be contacted for case-specific advice about an unknown ingestion?",
    "choices": [
      "A nutrition label website",
      "Only a routine pharmacy refill line",
      "Poison Control Center",
      "A fitness coach"
    ],
    "answer": "Poison Control Center",
    "rationale": "Poison control provides real-time toxicology guidance tailored to the exposure."
  },
  {
    "id": "MED-POISONING-029",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient ingests an extended-release medication. What does this imply?",
    "choices": [
      "No monitoring is needed",
      "Toxicity always ends in one hour",
      "Activated charcoal is always safe",
      "Symptoms and absorption may be delayed or prolonged"
    ],
    "answer": "Symptoms and absorption may be delayed or prolonged",
    "rationale": "Extended-release preparations can produce delayed or sustained toxicity."
  },
  {
    "id": "MED-POISONING-030",
    "topic": "Poisoning",
    "subtopic": "Poisoning",
    "question": "A patient is found with an unknown overdose and hypotension. What is the most appropriate initial plan?",
    "choices": [
      "Discharge if awake",
      "Wait for a full drug history",
      "Give oral antidotes blindly",
      "Assess ABCs, obtain vital signs and glucose, and activate appropriate help"
    ],
    "answer": "Assess ABCs, obtain vital signs and glucose, and activate appropriate help",
    "rationale": "Systematic stabilization and bedside glucose assessment are critical in undifferentiated poisoning."
  }
];

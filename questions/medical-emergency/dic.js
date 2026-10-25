// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencyDicQuestions = 
[
  {
    "id": "MED-DIC-001",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with sepsis develops oozing at IV sites and new petechiae. Which complication should the nurse suspect?",
    "choices": [
      "DIC",
      "Isolated iron deficiency",
      "Simple dehydration",
      "Stable thrombocytosis"
    ],
    "answer": "DIC",
    "rationale": "DIC consumes platelets and clotting factors while producing widespread microthrombi, causing bleeding and thrombosis."
  },
  {
    "id": "MED-DIC-002",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which laboratory pattern is most consistent with DIC?",
    "choices": [
      "High platelets, high fibrinogen, low D-dimer",
      "Low platelets, low fibrinogen, elevated D-dimer, prolonged PT/PTT",
      "Normal platelets and shortened PT",
      "High fibrinogen and normal coagulation tests"
    ],
    "answer": "Low platelets, low fibrinogen, elevated D-dimer, prolonged PT/PTT",
    "rationale": "Consumption of clotting factors and platelets leads to prolonged coagulation times, reduced fibrinogen and elevated fibrin degradation products."
  },
  {
    "id": "MED-DIC-003",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client has sepsis-associated DIC. Which action addresses the underlying cause?",
    "choices": [
      "Administer prescribed antibiotics promptly",
      "Apply warm compresses to bruises",
      "Delay infection treatment until platelets normalize",
      "Encourage ambulation"
    ],
    "answer": "Administer prescribed antibiotics promptly",
    "rationale": "Treating the precipitating condition such as sepsis is central to DIC management."
  },
  {
    "id": "MED-DIC-004",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which findings should the nurse monitor for in a client with DIC? Select all that apply.",
    "choices": [
      "Bleeding at venipuncture sites",
      "Altered level of consciousness",
      "Decreased urine output",
      "New mottling or cyanosis",
      "Improved urine output as a warning sign"
    ],
    "answer": [
      "Bleeding at venipuncture sites",
      "Altered level of consciousness",
      "Decreased urine output",
      "New mottling or cyanosis"
    ],
    "rationale": "DIC may cause hemorrhage and microvascular thrombosis with neurologic, renal and skin manifestations."
  },
  {
    "id": "MED-DIC-005",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with DIC has critically low fibrinogen and active bleeding. Which blood component may be ordered to replace fibrinogen?",
    "choices": [
      "Cryoprecipitate",
      "Packed red blood cells only",
      "Albumin",
      "Normal saline"
    ],
    "answer": "Cryoprecipitate",
    "rationale": "Cryoprecipitate provides concentrated fibrinogen when replacement is indicated."
  },
  {
    "id": "MED-DIC-006",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A septic client has oozing IV sites and new petechiae. Which complication is most concerning?",
    "choices": [
      "Disseminated intravascular coagulation",
      "Uncomplicated dehydration",
      "Simple allergic rash",
      "Stable anemia only"
    ],
    "answer": "Disseminated intravascular coagulation",
    "rationale": "DIC can cause simultaneous microvascular thrombosis and bleeding."
  },
  {
    "id": "MED-DIC-007",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which laboratory pattern supports acute DIC?",
    "choices": [
      "High platelets and normal clotting studies",
      "Low platelets, prolonged PT, elevated D-dimer, low fibrinogen",
      "Isolated high hemoglobin",
      "Normal D-dimer and high fibrinogen"
    ],
    "answer": "Low platelets, prolonged PT, elevated D-dimer, low fibrinogen",
    "rationale": "Consumptive coagulopathy produces low platelets and fibrinogen with elevated fibrin markers and prolonged coagulation times."
  },
  {
    "id": "MED-DIC-008",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "What is the central priority in treating DIC due to sepsis?",
    "choices": [
      "Delay antimicrobial treatment",
      "Treat the underlying infection and support perfusion",
      "Encourage ambulation first",
      "Give aspirin routinely"
    ],
    "answer": "Treat the underlying infection and support perfusion",
    "rationale": "Correcting the trigger is the foundation of DIC management."
  },
  {
    "id": "MED-DIC-009",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Why can a patient with DIC develop both bleeding and ischemic organ injury?",
    "choices": [
      "Widespread clot formation consumes platelets and clotting factors",
      "Platelet production rises excessively",
      "Only red cells are destroyed",
      "All coagulation stops completely"
    ],
    "answer": "Widespread clot formation consumes platelets and clotting factors",
    "rationale": "Consumption and microthrombi explain the paradox of thrombosis and hemorrhage."
  },
  {
    "id": "MED-DIC-010",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with DIC has active bleeding and very low fibrinogen. Which blood product may be ordered?",
    "choices": [
      "Packed red cells solely to raise fibrinogen",
      "Cryoprecipitate",
      "Normal saline as a fibrinogen replacement",
      "Albumin alone"
    ],
    "answer": "Cryoprecipitate",
    "rationale": "Cryoprecipitate provides fibrinogen when replacement is clinically indicated."
  },
  {
    "id": "MED-DIC-011",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A patient with DIC has active hemorrhage and prolonged coagulation times. Which product may replace depleted clotting factors?",
    "choices": [
      "Oral iron",
      "Fresh frozen plasma",
      "Dextrose solution",
      "Calcium carbonate"
    ],
    "answer": "Fresh frozen plasma",
    "rationale": "Plasma can replenish clotting factors in bleeding DIC."
  },
  {
    "id": "MED-DIC-012",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with DIC has platelets of 18,000/mm3 and bleeding gums. What action is most appropriate?",
    "choices": [
      "Give an IM injection",
      "Use a hard-bristle toothbrush",
      "Encourage contact sports",
      "Implement bleeding precautions and notify the care team"
    ],
    "answer": "Implement bleeding precautions and notify the care team",
    "rationale": "Severe thrombocytopenia and bleeding warrant protective measures and prompt treatment."
  },
  {
    "id": "MED-DIC-013",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which finding is an important sign of microvascular organ injury in DIC?",
    "choices": [
      "Normal mentation alone",
      "Decreasing urine output",
      "Improved skin warmth",
      "Increased appetite"
    ],
    "answer": "Decreasing urine output",
    "rationale": "Microthrombi may impair renal blood flow and contribute to acute kidney injury."
  },
  {
    "id": "MED-DIC-014",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which patient is at increased risk of DIC?",
    "choices": [
      "A patient with a healed sprain",
      "A patient with severe sepsis",
      "A patient with stable seasonal allergies",
      "A patient with uncomplicated myopia"
    ],
    "answer": "A patient with severe sepsis",
    "rationale": "Severe systemic inflammation from sepsis is a common precipitant."
  },
  {
    "id": "MED-DIC-015",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A postpartum patient develops massive bleeding and abnormal coagulation results. Which concern is most urgent?",
    "choices": [
      "Routine postpartum discomfort",
      "Obstetric-triggered DIC",
      "Expected lactation change",
      "Mild iron deficiency only"
    ],
    "answer": "Obstetric-triggered DIC",
    "rationale": "Obstetric catastrophes can trigger acute DIC and hemorrhage."
  },
  {
    "id": "MED-DIC-016",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which bedside observation is especially useful in monitoring bleeding from DIC?",
    "choices": [
      "Ask about food preference only",
      "Inspect hair color",
      "Check mucosa, wounds, and IV insertion sites",
      "Measure shoe size"
    ],
    "answer": "Check mucosa, wounds, and IV insertion sites",
    "rationale": "DIC may manifest as persistent oozing from puncture sites and mucosal bleeding."
  },
  {
    "id": "MED-DIC-017",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with DIC has new shortness of breath and low oxygen saturation. What is the priority?",
    "choices": [
      "Wait for next routine lab draw",
      "Encourage independent walking",
      "Assess airway and oxygenation immediately",
      "Provide a snack"
    ],
    "answer": "Assess airway and oxygenation immediately",
    "rationale": "Pulmonary injury and bleeding can compromise gas exchange."
  },
  {
    "id": "MED-DIC-018",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which laboratory result is expected when fibrin is broken down extensively in DIC?",
    "choices": [
      "Elevated D-dimer",
      "High albumin alone",
      "Low D-dimer",
      "Absent fibrin products"
    ],
    "answer": "Elevated D-dimer",
    "rationale": "D-dimer increases with formation and breakdown of cross-linked fibrin."
  },
  {
    "id": "MED-DIC-019",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "What is the purpose of serial platelet and coagulation studies in DIC?",
    "choices": [
      "Replace vital-sign monitoring",
      "Determine blood type alone",
      "Track consumption and response to treatment",
      "Measure hydration exclusively"
    ],
    "answer": "Track consumption and response to treatment",
    "rationale": "Trending labs helps assess evolving coagulopathy and treatment response."
  },
  {
    "id": "MED-DIC-020",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which intervention should the nurse avoid in an actively bleeding patient with DIC when alternatives exist?",
    "choices": [
      "Fall precautions",
      "Unnecessary intramuscular injections",
      "Pressure after venipuncture",
      "Gentle oral care"
    ],
    "answer": "Unnecessary intramuscular injections",
    "rationale": "IM injections can create avoidable bleeding and hematomas."
  },
  {
    "id": "MED-DIC-021",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A patient with DIC has falling hemoglobin and tachycardia. What complication should be evaluated?",
    "choices": [
      "Resolution of DIC",
      "Normal physiologic response",
      "Ongoing hemorrhage",
      "Improved perfusion"
    ],
    "answer": "Ongoing hemorrhage",
    "rationale": "Falling hemoglobin with instability may reflect serious blood loss."
  },
  {
    "id": "MED-DIC-022",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which statement about DIC is accurate?",
    "choices": [
      "It is always an isolated inherited disorder",
      "It only causes bleeding without clotting",
      "It is usually secondary to another severe condition",
      "It cannot occur in trauma"
    ],
    "answer": "It is usually secondary to another severe condition",
    "rationale": "DIC is typically triggered by sepsis, trauma, obstetric emergencies, or other major insults."
  },
  {
    "id": "MED-DIC-023",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A trauma patient with DIC develops cold digits and mottling. What mechanism may contribute?",
    "choices": [
      "Normal vasodilation only",
      "Microvascular thrombosis impairs tissue blood flow",
      "Isolated anxiety",
      "Excess dietary sodium"
    ],
    "answer": "Microvascular thrombosis impairs tissue blood flow",
    "rationale": "Diffuse microthrombi can reduce distal tissue perfusion."
  },
  {
    "id": "MED-DIC-024",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with DIC develops a severe headache and new weakness. What should the nurse do?",
    "choices": [
      "Reassure and wait",
      "Treat as a possible acute neurologic emergency",
      "Administer aspirin without an order",
      "Encourage sleep only"
    ],
    "answer": "Treat as a possible acute neurologic emergency",
    "rationale": "Bleeding or thrombosis can affect the brain and requires urgent assessment."
  },
  {
    "id": "MED-DIC-025",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client receiving plasma for DIC develops acute dyspnea. What is the nurse's priority?",
    "choices": [
      "Increase the infusion rate",
      "Stop transfusion and evaluate for a transfusion reaction",
      "Administer the next unit immediately",
      "Ignore mild symptoms"
    ],
    "answer": "Stop transfusion and evaluate for a transfusion reaction",
    "rationale": "New respiratory distress during transfusion requires stopping the product and urgent assessment."
  },
  {
    "id": "MED-DIC-026",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Why is a normal blood pressure not sufficient to exclude severe DIC?",
    "choices": [
      "DIC never affects circulation",
      "Only fever matters",
      "Platelet counts are irrelevant",
      "Coagulation abnormalities and microthrombi may precede hypotension"
    ],
    "answer": "Coagulation abnormalities and microthrombi may precede hypotension",
    "rationale": "DIC severity requires clinical and laboratory assessment, not BP alone."
  },
  {
    "id": "MED-DIC-027",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "Which nursing measure reduces bleeding risk during DIC care?",
    "choices": [
      "Use an electric razor and soft oral care",
      "Give repeated IM injections",
      "Perform rectal temperatures frequently",
      "Use a stiff toothbrush"
    ],
    "answer": "Use an electric razor and soft oral care",
    "rationale": "Minimizing trauma reduces preventable bleeding."
  },
  {
    "id": "MED-DIC-028",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A client with sepsis-associated DIC is hypotensive. Which treatment priorities should proceed together?",
    "choices": [
      "Delay antibiotics until platelets normalize",
      "Resuscitate perfusion and treat the infection",
      "Only apply a warm blanket",
      "Restrict all monitoring"
    ],
    "answer": "Resuscitate perfusion and treat the infection",
    "rationale": "Shock treatment and control of the DIC trigger are both time-sensitive."
  },
  {
    "id": "MED-DIC-029",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A patient has petechiae, low platelets, and elevated D-dimer. What additional test is especially relevant?",
    "choices": [
      "Serum vitamin D alone",
      "Fibrinogen level",
      "Hearing screen",
      "Vision acuity"
    ],
    "answer": "Fibrinogen level",
    "rationale": "Fibrinogen helps characterize consumptive coagulopathy."
  },
  {
    "id": "MED-DIC-030",
    "topic": "Disseminated Intravascular Coagulation (DIC)",
    "subtopic": "Disseminated Intravascular Coagulation (DIC)",
    "question": "A patient with DIC is bleeding from a central line insertion site. What is the immediate nursing action?",
    "choices": [
      "Apply direct pressure and notify the care team",
      "Massage the area",
      "Administer anticoagulant independently",
      "Remove all monitoring"
    ],
    "answer": "Apply direct pressure and notify the care team",
    "rationale": "Local pressure and urgent evaluation are appropriate for active puncture-site bleeding."
  }
];

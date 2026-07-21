const inflammationPrioritySataQuestions = [

{
    id: "INF-PRIORITY-001",
    caseId: "INF-PRIORITY-CASE-001",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should the nurse assess first?",
    choices: [
        "A client with pancreatitis who is restless, hypotensive, and tachycardic",
        "A client with celiac disease reporting abdominal bloating after eating",
        "A client with hepatitis reporting fatigue",
        "A client with an ostomy requesting assistance changing the pouch"
    ],
    answer:
        "A client with pancreatitis who is restless, hypotensive, and tachycardic",
    rationale:
        "Restlessness, hypotension, and tachycardia may indicate hypovolemia, shock, hemorrhage, or severe systemic complications of pancreatitis. This client requires immediate assessment.",
    takeaway:
        "Signs of shock take priority over expected or nonurgent findings."
},

{
    id: "INF-PRIORITY-002",
    caseId: "INF-PRIORITY-CASE-002",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Appendicitis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with suspected appendicitis requires immediate provider notification?",
    choices: [
        "Sudden relief of abdominal pain followed by generalized abdominal rigidity",
        "Right lower-quadrant pain with nausea",
        "Loss of appetite",
        "Low-grade fever"
    ],
    answer:
        "Sudden relief of abdominal pain followed by generalized abdominal rigidity",
    rationale:
        "Sudden pain relief followed by diffuse abdominal rigidity suggests appendix rupture with peritonitis, a surgical emergency.",
    takeaway:
        "Sudden pain relief in appendicitis may indicate rupture—not improvement."
},

{
    id: "INF-PRIORITY-003",
    caseId: "INF-PRIORITY-CASE-003",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Appendicitis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which interventions are appropriate for a client with suspected appendicitis? Select all that apply.",
    choices: [
        "Maintain the client NPO.",
        "Initiate prescribed IV fluids.",
        "Monitor for increasing abdominal rigidity.",
        "Administer prescribed analgesics.",
        "Apply a heating pad to the abdomen.",
        "Administer a laxative."
    ],
    answer: [
        "Maintain the client NPO.",
        "Initiate prescribed IV fluids.",
        "Monitor for increasing abdominal rigidity.",
        "Administer prescribed analgesics."
    ],
    rationale:
        "Clients with suspected appendicitis are kept NPO in preparation for surgery. IV fluids, pain control, and monitoring for perforation are appropriate. Heating pads and laxatives increase the risk of rupture.",
    takeaway:
        "Think: NPO, IV fluids, pain management, monitor for rupture."
},

{
    id: "INF-PRIORITY-004",
    caseId: "INF-PRIORITY-CASE-004",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pancreatitis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are associated with acute pancreatitis? Select all that apply.",
    choices: [
        "Severe epigastric pain radiating to the back",
        "Nausea and vomiting",
        "Elevated serum lipase",
        "Abdominal tenderness",
        "Pain relieved by lying flat",
        "Possible hypocalcemia"
    ],
    answer: [
        "Severe epigastric pain radiating to the back",
        "Nausea and vomiting",
        "Elevated serum lipase",
        "Abdominal tenderness",
        "Possible hypocalcemia"
    ],
    rationale:
        "Acute pancreatitis causes severe epigastric pain radiating to the back, nausea, vomiting, abdominal tenderness, elevated lipase, and hypocalcemia. Pain often improves when leaning forward, not lying flat.",
    takeaway:
        "Lipase + severe back-radiating pain = pancreatitis."
},

{
    id: "INF-PRIORITY-005",
    caseId: "INF-PRIORITY-CASE-005",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pancreatitis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which laboratory result in a client with acute pancreatitis requires the nurse's immediate attention?",
    choices: [
        "Calcium 6.8 mg/dL",
        "Lipase 450 units/L",
        "Glucose 168 mg/dL",
        "White blood cell count 13,000/mm³"
    ],
    answer:
        "Calcium 6.8 mg/dL",
    rationale:
        "Severe hypocalcemia can lead to tetany, seizures, and life-threatening cardiac dysrhythmias and requires immediate intervention.",
    takeaway:
        "Hypocalcemia is a high-priority complication of pancreatitis."
},

{
    id: "INF-PRIORITY-006",
    caseId: "INF-PRIORITY-CASE-006",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cholecystitis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with acute cholecystitis requires immediate provider notification?",
    choices: [
        "Increasing right upper-quadrant pain with fever, hypotension, and confusion",
        "Nausea after eating a high-fat meal",
        "Right shoulder discomfort",
        "Mild abdominal tenderness"
    ],
    answer:
        "Increasing right upper-quadrant pain with fever, hypotension, and confusion",
    rationale:
        "Fever, hypotension, confusion, and worsening abdominal pain may indicate sepsis, gallbladder perforation, or another serious complication requiring immediate intervention.",
    takeaway:
        "Hemodynamic instability and mental-status changes suggest a life-threatening complication."
},

{
    id: "INF-PRIORITY-007",
    caseId: "INF-PRIORITY-CASE-007",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cholecystitis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which interventions are appropriate for a client experiencing an acute episode of cholecystitis? Select all that apply.",
    choices: [
        "Maintain the client NPO as prescribed.",
        "Administer prescribed IV fluids.",
        "Administer analgesics and antiemetics as prescribed.",
        "Monitor for jaundice and increasing abdominal pain.",
        "Encourage a high-fat meal.",
        "Apply firm pressure over the right upper quadrant."
    ],
    answer: [
        "Maintain the client NPO as prescribed.",
        "Administer prescribed IV fluids.",
        "Administer analgesics and antiemetics as prescribed.",
        "Monitor for jaundice and increasing abdominal pain."
    ],
    rationale:
        "During an acute episode, bowel and gallbladder rest, hydration, symptom control, and monitoring for obstruction or worsening inflammation are appropriate. High-fat foods stimulate gallbladder contraction and can worsen pain.",
    takeaway:
        "Acute cholecystitis care includes NPO status, hydration, pain control, and complication monitoring."
},

{
    id: "INF-PRIORITY-008",
    caseId: "INF-PRIORITY-CASE-008",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cirrhosis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with cirrhosis should the nurse assess first?",
    choices: [
        "A client vomiting bright-red blood with a blood pressure of 82/48 mm Hg",
        "A client with increasing abdominal girth",
        "A client reporting generalized itching",
        "A client requesting assistance selecting a low-sodium meal"
    ],
    answer:
        "A client vomiting bright-red blood with a blood pressure of 82/48 mm Hg",
    rationale:
        "Hematemesis and hypotension may indicate ruptured esophageal varices and hemorrhagic shock. Airway protection, circulation support, and emergency treatment are priorities.",
    takeaway:
        "Variceal bleeding is a life-threatening emergency."
},

{
    id: "INF-PRIORITY-009",
    caseId: "INF-PRIORITY-CASE-009",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cirrhosis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which findings suggest hepatic encephalopathy in a client with cirrhosis? Select all that apply.",
    choices: [
        "Increasing confusion",
        "Asterixis",
        "Changes in level of consciousness",
        "Elevated serum ammonia",
        "Fruity or musty breath odor",
        "Improved orientation"
    ],
    answer: [
        "Increasing confusion",
        "Asterixis",
        "Changes in level of consciousness",
        "Elevated serum ammonia",
        "Fruity or musty breath odor"
    ],
    rationale:
        "Hepatic encephalopathy results from accumulation of toxins such as ammonia and may cause confusion, altered consciousness, asterixis, and fetor hepaticus.",
    takeaway:
        "Neurologic changes in cirrhosis may indicate rising ammonia and hepatic encephalopathy."
},

{
    id: "INF-PRIORITY-010",
    caseId: "INF-PRIORITY-CASE-010",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cirrhosis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Pharmacological and Parenteral Therapies",
    question:
        "A client with cirrhosis and hepatic encephalopathy is receiving lactulose. Which finding best indicates that the medication is effective?",
    choices: [
        "The client has two to three soft stools daily with improved orientation.",
        "The client has no bowel movements for 24 hours.",
        "The client's abdominal girth increases.",
        "The client develops dark, tarry stools."
    ],
    answer:
        "The client has two to three soft stools daily with improved orientation.",
    rationale:
        "Lactulose lowers ammonia by promoting its excretion through the stool. Improved mental status and regular soft stools indicate therapeutic effectiveness.",
    takeaway:
        "Lactulose is effective when ammonia-related neurologic symptoms improve and regular soft stools occur."
},

{
    id: "INF-PRIORITY-011",
    caseId: "INF-PRIORITY-CASE-011",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Hepatitis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which teaching points should the nurse include for a client with viral hepatitis? Select all that apply.",
    choices: [
        "Avoid alcohol.",
        "Ask the provider before taking over-the-counter medications.",
        "Use good hand hygiene.",
        "Avoid sharing razors or toothbrushes when blood exposure is possible.",
        "Balance activity with adequate rest.",
        "Take large doses of acetaminophen for abdominal discomfort."
    ],
    answer: [
        "Avoid alcohol.",
        "Ask the provider before taking over-the-counter medications.",
        "Use good hand hygiene.",
        "Avoid sharing razors or toothbrushes when blood exposure is possible.",
        "Balance activity with adequate rest."
    ],
    rationale:
        "Clients should reduce liver stress, prevent transmission, and conserve energy. Alcohol and potentially hepatotoxic medications such as excessive acetaminophen should be avoided.",
    takeaway:
        "Protect the liver and prevent transmission during hepatitis recovery."
},

{
    id: "INF-PRIORITY-012",
    caseId: "INF-PRIORITY-CASE-012",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Hepatitis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with acute hepatitis requires immediate intervention?",
    choices: [
        "New confusion, bleeding gums, and prolonged prothrombin time",
        "Fatigue after activity",
        "Decreased appetite",
        "Mild right upper-quadrant tenderness"
    ],
    answer:
        "New confusion, bleeding gums, and prolonged prothrombin time",
    rationale:
        "Neurologic changes and impaired clotting may indicate acute liver failure with hepatic encephalopathy and severe loss of hepatic synthetic function.",
    takeaway:
        "Mental-status changes and bleeding in hepatitis may signal acute liver failure."
},

{
    id: "INF-PRIORITY-013",
    caseId: "INF-PRIORITY-CASE-013",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Inflammatory Bowel Disease",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with ulcerative colitis requires immediate provider notification?",
    choices: [
        "Abdominal distention, fever, tachycardia, and decreased bowel sounds",
        "Several loose stools containing blood",
        "Intermittent abdominal cramping",
        "Fatigue associated with anemia"
    ],
    answer:
        "Abdominal distention, fever, tachycardia, and decreased bowel sounds",
    rationale:
        "These findings may indicate toxic megacolon, a life-threatening complication involving severe colonic dilation and risk for perforation.",
    takeaway:
        "Distention, systemic toxicity, and reduced bowel sounds may indicate toxic megacolon."
},

{
    id: "INF-PRIORITY-014",
    caseId: "INF-PRIORITY-CASE-014",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Inflammatory Bowel Disease",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings are commonly associated with inflammatory bowel disease? Select all that apply.",
    choices: [
        "Frequent diarrhea",
        "Abdominal cramping",
        "Weight loss",
        "Fatigue",
        "Blood in the stool",
        "Polyuria"
    ],
    answer: [
        "Frequent diarrhea",
        "Abdominal cramping",
        "Weight loss",
        "Fatigue",
        "Blood in the stool"
    ],
    rationale:
        "Inflammatory bowel disease commonly presents with diarrhea, abdominal pain, weight loss, fatigue, and bloody stools. Polyuria is not associated with IBD.",
    takeaway:
        "Chronic diarrhea, abdominal pain, and weight loss are hallmark findings of IBD."
},

{
    id: "INF-PRIORITY-015",
    caseId: "INF-PRIORITY-CASE-015",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Ostomy Care",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with a new colostomy requires immediate intervention?",
    choices: [
        "The stoma is dark purple and cool to the touch.",
        "The stoma is pink and moist.",
        "The client reports mild soreness around the incision.",
        "The pouch contains a small amount of gas."
    ],
    answer:
        "The stoma is dark purple and cool to the touch.",
    rationale:
        "A healthy stoma is pink to beefy red and moist. A dark, dusky, or cool stoma may indicate impaired perfusion or necrosis and requires immediate evaluation.",
    takeaway:
        "Think perfusion: a healthy stoma is pink, moist, and warm."
},

{
    id: "INF-PRIORITY-016",
    caseId: "INF-PRIORITY-CASE-016",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Ostomy Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Basic Care and Comfort",
    question:
        "Which nursing interventions are appropriate when caring for a client with a new ostomy? Select all that apply.",
    choices: [
        "Measure the stoma during the postoperative period.",
        "Cut the skin barrier to fit closely around the stoma.",
        "Assess the peristomal skin each pouch change.",
        "Empty the pouch when it is one-third to one-half full.",
        "Clean the stoma with warm water.",
        "Use alcohol to clean the stoma each shift."
    ],
    answer: [
        "Measure the stoma during the postoperative period.",
        "Cut the skin barrier to fit closely around the stoma.",
        "Assess the peristomal skin each pouch change.",
        "Empty the pouch when it is one-third to one-half full.",
        "Clean the stoma with warm water."
    ],
    rationale:
        "The stoma changes size after surgery. Proper pouch fit protects the skin. The pouch should be emptied before becoming heavy, and warm water is sufficient for routine cleaning.",
    takeaway:
        "Protect the peristomal skin with proper pouch fit and routine assessment."
},

{
    id: "INF-PRIORITY-017",
    caseId: "INF-PRIORITY-CASE-017",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Tuberculosis",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which newly admitted client should the nurse place in airborne isolation immediately?",
    choices: [
        "A client with a productive cough, night sweats, weight loss, and hemoptysis",
        "A client with cellulitis of the lower leg",
        "A client with acute cystitis",
        "A client with viral conjunctivitis"
    ],
    answer:
        "A client with a productive cough, night sweats, weight loss, and hemoptysis",
    rationale:
        "These findings strongly suggest pulmonary tuberculosis. Airborne isolation should begin immediately while diagnostic testing is completed.",
    takeaway:
        "Suspected TB requires immediate airborne precautions."
},

{
    id: "INF-PRIORITY-018",
    caseId: "INF-PRIORITY-CASE-018",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Tuberculosis",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which interventions are appropriate for a client with suspected pulmonary tuberculosis? Select all that apply.",
    choices: [
        "Place the client in a negative-pressure room.",
        "Wear a fit-tested N95 respirator.",
        "Keep the room door closed.",
        "Teach cough etiquette.",
        "Collect sputum specimens as ordered.",
        "Place the client on droplet precautions only."
    ],
    answer: [
        "Place the client in a negative-pressure room.",
        "Wear a fit-tested N95 respirator.",
        "Keep the room door closed.",
        "Teach cough etiquette.",
        "Collect sputum specimens as ordered."
    ],
    rationale:
        "Pulmonary TB requires airborne precautions, including a negative-pressure room and N95 respirators. Diagnostic sputum collection and cough etiquette are also important.",
    takeaway:
        "TB = Airborne isolation + N95 + negative-pressure room."
},

{
    id: "INF-PRIORITY-019",
    caseId: "INF-PRIORITY-CASE-019",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pneumonia",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with pneumonia should the nurse assess first?",
    choices: [
        "A client with an oxygen saturation of 84% on room air and increasing confusion",
        "A client with a productive cough requesting pain medication",
        "A client reporting fatigue while eating lunch",
        "A client awaiting discharge instructions"
    ],
    answer:
        "A client with an oxygen saturation of 84% on room air and increasing confusion",
    rationale:
        "Hypoxemia accompanied by altered mental status indicates inadequate oxygenation and requires immediate intervention following the ABC priority framework.",
    takeaway:
        "Airway and breathing always take priority."
},

{
    id: "INF-PRIORITY-020",
    caseId: "INF-PRIORITY-CASE-020",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pneumonia",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client hospitalized with pneumonia? Select all that apply.",
    choices: [
        "Encourage coughing and deep breathing.",
        "Monitor oxygen saturation.",
        "Encourage early ambulation as tolerated.",
        "Administer prescribed antibiotics.",
        "Encourage adequate fluid intake if not contraindicated.",
        "Restrict all oral fluids."
    ],
    answer: [
        "Encourage coughing and deep breathing.",
        "Monitor oxygen saturation.",
        "Encourage early ambulation as tolerated.",
        "Administer prescribed antibiotics.",
        "Encourage adequate fluid intake if not contraindicated."
    ],
    rationale:
        "Pneumonia management focuses on improving oxygenation, mobilizing secretions, treating infection, and preventing complications. Hydration helps thin respiratory secretions.",
    takeaway:
        "Treat infection, improve oxygenation, mobilize secretions."
},

{
    id: "INF-PRIORITY-021",
    caseId: "INF-PRIORITY-CASE-021",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Urinary Tract Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with a urinary tract infection requires immediate provider notification?",
    choices: [
        "Fever, flank pain, and new confusion",
        "Burning with urination",
        "Urinary frequency",
        "Cloudy urine"
    ],
    answer:
        "Fever, flank pain, and new confusion",
    rationale:
        "These findings may indicate pyelonephritis or urosepsis, particularly in older adults, and require prompt evaluation and treatment.",
    takeaway:
        "UTI plus systemic symptoms may indicate ascending infection or sepsis."
},

{
    id: "INF-PRIORITY-022",
    caseId: "INF-PRIORITY-CASE-022",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Urinary Tract Infection",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which discharge instructions should the nurse provide to a client recovering from a urinary tract infection? Select all that apply.",
    choices: [
        "Complete the entire course of antibiotics.",
        "Increase fluid intake if not contraindicated.",
        "Void after sexual intercourse.",
        "Wipe from front to back.",
        "Avoid delaying urination.",
        "Stop antibiotics when symptoms improve."
    ],
    answer: [
        "Complete the entire course of antibiotics.",
        "Increase fluid intake if not contraindicated.",
        "Void after sexual intercourse.",
        "Wipe from front to back.",
        "Avoid delaying urination."
    ],
    rationale:
        "Completing antibiotics, maintaining hydration, proper perineal hygiene, voiding after intercourse, and avoiding urinary retention help reduce recurrent UTIs.",
    takeaway:
        "Hydration, hygiene, and completing antibiotics prevent recurrence."
},

{
    id: "INF-PRIORITY-023",
    caseId: "INF-PRIORITY-CASE-023",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Skin and Soft Tissue Infection",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which finding in a client with cellulitis requires immediate intervention?",
    choices: [
        "Rapidly spreading redness with hypotension and fever",
        "Localized warmth around the wound",
        "Mild tenderness at the infection site",
        "Scant serous drainage"
    ],
    answer:
        "Rapidly spreading redness with hypotension and fever",
    rationale:
        "Rapid progression with hypotension and fever may indicate sepsis or necrotizing infection requiring immediate treatment.",
    takeaway:
        "Rapid progression plus unstable vital signs suggests systemic infection."
},

{
    id: "INF-PRIORITY-024",
    caseId: "INF-PRIORITY-CASE-024",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Mixed Priority Review",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with cirrhosis who becomes difficult to arouse and develops asterixis",
        "A client with hepatitis requesting assistance with breakfast",
        "A client with Crohn's disease reporting mild abdominal cramping",
        "A client with conjunctivitis asking about returning to work"
    ],
    answer:
        "A client with cirrhosis who becomes difficult to arouse and develops asterixis",
    rationale:
        "Altered mental status and asterixis indicate worsening hepatic encephalopathy requiring immediate intervention to prevent further neurologic deterioration.",
    takeaway:
        "Acute neurologic changes are always a priority."
},

{
    id: "INF-PRIORITY-025",
    caseId: "INF-PRIORITY-CASE-025",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is caring for four hospitalized clients with inflammatory and infectious disorders. Which client requires immediate assessment?",
    choices: [
        "A client with suspected tuberculosis who is coughing blood and has an oxygen saturation of 86%",
        "A client with bacterial conjunctivitis waiting for antibiotic eye drops",
        "A client with ulcerative colitis requesting pain medication",
        "A client with an established colostomy requesting assistance changing the pouch"
    ],
    answer:
        "A client with suspected tuberculosis who is coughing blood and has an oxygen saturation of 86%",
    rationale:
        "Airway, breathing, and oxygenation take priority. Hemoptysis with severe hypoxemia in a client with suspected tuberculosis requires immediate intervention and airborne isolation.",
    takeaway:
        "When prioritizing, always think ABCs first, then life-threatening complications."
},

];
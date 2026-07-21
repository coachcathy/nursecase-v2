const ngnInflammationInfectionCaseQuestions = [

{
    id: "NGN-INF-001",
    caseId: "NGN-INF-CASE-001",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Appendicitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "An 18-year-old client presents with periumbilical pain that has migrated to the right lower quadrant over the past 8 hours. The client reports nausea, loss of appetite, and pain that worsens with movement. Assessment reveals rebound tenderness, guarding, a temperature of 101.4°F (38.6°C), WBC 16,800/mm³, and positive McBurney point tenderness. Which nursing action is the priority?",
    choices: [
        "Keep the client NPO, initiate IV fluids, and notify the surgeon.",
        "Apply a heating pad to the abdomen.",
        "Administer a laxative to relieve constipation.",
        "Encourage the client to ambulate to decrease abdominal discomfort."
    ],
    answer:
        "Keep the client NPO, initiate IV fluids, and notify the surgeon.",
    rationale:
        "The client's assessment findings are classic for acute appendicitis requiring surgical evaluation. Maintaining NPO status, supporting circulation with IV fluids, and preparing for surgery are priority interventions. Heating pads and laxatives increase the risk of perforation.",
    takeaway:
        "Suspected appendicitis = NPO, IV fluids, pain control, surgical evaluation, and monitor closely for rupture."
},

{
    id: "NGN-INF-002",
    caseId: "NGN-INF-CASE-002",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Appendicitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Four hours after admission, the client suddenly reports complete relief of abdominal pain. Thirty minutes later the client develops diffuse abdominal tenderness, abdominal rigidity, tachycardia, and a temperature of 103°F (39.4°C). Which interpretation by the nurse is most accurate?",
    choices: [
        "The appendix has likely ruptured, causing peritonitis.",
        "The prescribed analgesic is working as expected.",
        "The inflammation is resolving without surgery.",
        "The client is experiencing medication side effects."
    ],
    answer:
        "The appendix has likely ruptured, causing peritonitis.",
    rationale:
        "Sudden pain relief followed by diffuse abdominal pain, rigidity, fever, and tachycardia is highly suggestive of appendiceal perforation with developing peritonitis, which requires immediate intervention.",
    takeaway:
        "Sudden pain relief followed by worsening assessment findings is a red flag for perforation."
},

{
    id: "NGN-INF-003",
    caseId: "NGN-INF-CASE-003",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Acute Pancreatitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 54-year-old client arrives in the emergency department with severe epigastric pain radiating to the back after drinking alcohol. The client is nauseated, vomiting, restless, and rates the pain 10/10. Assessment reveals BP 88/52 mm Hg, HR 126/min, RR 26/min, temperature 100.9°F (38.3°C), lipase 1,240 units/L, calcium 7.0 mg/dL, and glucose 212 mg/dL. Which nursing action is the priority?",
    choices: [
        "Initiate aggressive IV fluid resuscitation, maintain NPO status, administer prescribed pain medication, and notify the provider immediately.",
        "Offer clear liquids to prevent dehydration.",
        "Place the client in Trendelenburg position and encourage ambulation.",
        "Prepare the client for discharge after pain medication is administered."
    ],
    answer:
        "Initiate aggressive IV fluid resuscitation, maintain NPO status, administer prescribed pain medication, and notify the provider immediately.",
    rationale:
        "This client demonstrates severe acute pancreatitis with hypotension and tachycardia suggesting hypovolemia. Initial priorities include aggressive IV fluids, bowel rest (NPO), pain management, electrolyte monitoring, and rapid provider notification.",
    takeaway:
        "Severe pancreatitis priorities are IV fluids, NPO status, pain control, and monitoring for shock."
},

{
    id: "NGN-INF-004",
    caseId: "NGN-INF-CASE-004",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Acute Cholecystitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client presents with right upper-quadrant abdominal pain that began after eating fried chicken. The pain radiates to the right shoulder and is associated with nausea and vomiting. Assessment reveals a temperature of 101.8°F (38.8°C), positive Murphy sign, WBC 15,400/mm³, and mild jaundice. Which provider prescription should the nurse implement first?",
    choices: [
        "Maintain the client NPO, begin IV fluids, administer prescribed antibiotics and analgesics.",
        "Encourage a low-fat meal.",
        "Administer a laxative for abdominal discomfort.",
        "Prepare the client for discharge with dietary instructions only."
    ],
    answer:
        "Maintain the client NPO, begin IV fluids, administer prescribed antibiotics and analgesics.",
    rationale:
        "Acute cholecystitis is treated with bowel rest, IV hydration, antibiotics when indicated, and pain management. The client should remain NPO while further evaluation and possible surgery are planned.",
    takeaway:
        "Acute cholecystitis = NPO, IV fluids, antibiotics, and pain control."
},

{
    id: "NGN-INF-005",
    caseId: "NGN-INF-CASE-005",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Crohn's Disease",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 29-year-old client with Crohn's disease reports worsening right lower-quadrant abdominal pain, frequent nonbloody diarrhea, fatigue, and an 8-lb weight loss. Assessment reveals a temperature of 100.8°F (38.2°C), dry mucous membranes, and tenderness in the right lower quadrant. Laboratory results show hemoglobin 10.1 g/dL, albumin 2.8 g/dL, and potassium 3.1 mEq/L. Which nursing action is the priority?",
    choices: [
        "Initiate prescribed IV fluids, monitor electrolytes, and maintain bowel rest as ordered.",
        "Encourage a high-fiber diet immediately.",
        "Administer an antidiarrheal without further assessment.",
        "Encourage strenuous ambulation after meals."
    ],
    answer:
        "Initiate prescribed IV fluids, monitor electrolytes, and maintain bowel rest as ordered.",
    rationale:
        "The client shows dehydration, hypokalemia, malnutrition, and an active Crohn's flare. Fluid and electrolyte replacement and bowel rest are priorities before nutrition advancement.",
    takeaway:
        "During an acute Crohn's flare, stabilize hydration and electrolytes first."
},

{
    id: "NGN-INF-006",
    caseId: "NGN-INF-CASE-006",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Ulcerative Colitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with ulcerative colitis has had 12 bloody stools in the past 24 hours. The client now reports increasing abdominal pain and distention. Assessment reveals a temperature of 102.2°F (39°C), HR 122/min, BP 94/58 mm Hg, and hypoactive bowel sounds. Which complication should the nurse suspect?",
    choices: [
        "Toxic megacolon",
        "Expected disease progression",
        "Simple constipation",
        "Uncomplicated dehydration"
    ],
    answer:
        "Toxic megacolon",
    rationale:
        "Abdominal distention, systemic toxicity, tachycardia, fever, hypotension, and decreased bowel sounds suggest toxic megacolon, a life-threatening complication of ulcerative colitis.",
    takeaway:
        "Ulcerative colitis plus distention and systemic instability suggests toxic megacolon."
},

{
    id: "NGN-INF-007",
    caseId: "NGN-INF-CASE-007",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cirrhosis With Ascites",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis has increasing abdominal girth, bilateral lower-extremity edema, dyspnea when lying flat, sodium 128 mEq/L, albumin 2.4 g/dL, and a 6-lb weight gain in 3 days. Which nursing intervention is the priority?",
    choices: [
        "Position the client upright, monitor respiratory status, restrict sodium as prescribed, and prepare to administer ordered diuretics.",
        "Encourage unlimited oral fluids.",
        "Place the client flat in bed.",
        "Increase dietary sodium to improve albumin levels."
    ],
    answer:
        "Position the client upright, monitor respiratory status, restrict sodium as prescribed, and prepare to administer ordered diuretics.",
    rationale:
        "The client has significant fluid volume excess and ascites affecting breathing. Positioning, respiratory monitoring, sodium restriction, and prescribed diuretics are priority interventions.",
    takeaway:
        "Ascites with dyspnea requires immediate attention to breathing and fluid balance."
},

{
    id: "NGN-INF-008",
    caseId: "NGN-INF-CASE-008",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Esophageal Varices",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with cirrhosis suddenly vomits a large amount of bright-red blood. The client is pale and anxious with BP 78/44 mm Hg, HR 138/min, RR 30/min, and oxygen saturation 89%. Which nursing action is the priority?",
    choices: [
        "Maintain the airway, apply oxygen, establish large-bore IV access, and activate the emergency response.",
        "Administer oral fluids.",
        "Place the client in a flat supine position and leave the room.",
        "Delay intervention until laboratory results are available."
    ],
    answer:
        "Maintain the airway, apply oxygen, establish large-bore IV access, and activate the emergency response.",
    rationale:
        "The client is experiencing massive upper gastrointestinal bleeding with hemorrhagic shock. Airway, oxygenation, circulation, rapid IV access, and emergency intervention are priorities.",
    takeaway:
        "Variceal hemorrhage is an ABC emergency."
},

{
    id: "NGN-INF-009",
    caseId: "NGN-INF-CASE-009",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Acute Viral Hepatitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 42-year-old client diagnosed with acute hepatitis B reports increasing fatigue, nausea, and right upper-quadrant discomfort. Assessment reveals jaundice, dark urine, clay-colored stools, AST 1,320 U/L, ALT 1,540 U/L, total bilirubin 7.2 mg/dL, INR 2.1, and new confusion. Which nursing action is the priority?",
    choices: [
        "Notify the provider immediately, assess neurologic status, monitor bleeding precautions, and prepare for management of acute liver failure.",
        "Encourage a high-protein meal.",
        "Administer acetaminophen for discomfort.",
        "Prepare the client for discharge with routine follow-up."
    ],
    answer:
        "Notify the provider immediately, assess neurologic status, monitor bleeding precautions, and prepare for management of acute liver failure.",
    rationale:
        "Confusion with elevated INR and severe liver dysfunction suggests acute liver failure and hepatic encephalopathy. Immediate assessment and intervention are required.",
    takeaway:
        "Mental-status changes and coagulopathy in hepatitis are medical emergencies."
},

{
    id: "NGN-INF-010",
    caseId: "NGN-INF-CASE-010",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pulmonary Tuberculosis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 63-year-old client presents with a productive cough for six weeks, night sweats, weight loss, fatigue, intermittent hemoptysis, and an oxygen saturation of 91% on room air. Which nursing intervention should occur first?",
    choices: [
        "Place the client in a negative-pressure room and initiate airborne precautions with an N95 respirator.",
        "Place the client in a semi-private room.",
        "Begin droplet precautions only.",
        "Collect a urine specimen before further assessment."
    ],
    answer:
        "Place the client in a negative-pressure room and initiate airborne precautions with an N95 respirator.",
    rationale:
        "Pulmonary tuberculosis is suspected. Airborne isolation should begin immediately before additional diagnostic testing to reduce disease transmission.",
    takeaway:
        "Suspected TB = isolate first, diagnose second."
},

{
    id: "NGN-INF-011",
    caseId: "NGN-INF-CASE-011",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Community-Acquired Pneumonia",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 76-year-old client with pneumonia becomes increasingly confused. Assessment reveals BP 90/54 mm Hg, HR 122/min, RR 30/min, temperature 102.4°F (39.1°C), oxygen saturation 85% on room air, and coarse crackles throughout the right lung. Which nursing action is the priority?",
    choices: [
        "Apply supplemental oxygen, obtain the provider, monitor for sepsis, and prepare to administer prescribed IV antibiotics.",
        "Encourage oral fluids before assessment.",
        "Delay intervention until chest x-ray results return.",
        "Assist the client to the bathroom."
    ],
    answer:
        "Apply supplemental oxygen, obtain the provider, monitor for sepsis, and prepare to administer prescribed IV antibiotics.",
    rationale:
        "The client demonstrates severe hypoxemia and possible sepsis. Airway, breathing, oxygenation, and prompt antimicrobial therapy are priorities.",
    takeaway:
        "Hypoxemia and confusion in pneumonia may indicate sepsis."
},

{
    id: "NGN-INF-012",
    caseId: "NGN-INF-CASE-012",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pyelonephritis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client treated for a urinary tract infection returns with fever, chills, flank pain, nausea, and confusion. Assessment reveals BP 88/50 mm Hg, HR 126/min, temperature 103°F (39.4°C), and CVA tenderness. Which nursing action is the priority?",
    choices: [
        "Initiate the sepsis protocol, obtain cultures as ordered, administer IV fluids, and prepare to give prescribed antibiotics.",
        "Encourage cranberry juice before treatment.",
        "Recommend increased oral fluids and discharge.",
        "Delay treatment until urine culture results are finalized."
    ],
    answer:
        "Initiate the sepsis protocol, obtain cultures as ordered, administer IV fluids, and prepare to give prescribed antibiotics.",
    rationale:
        "The client demonstrates pyelonephritis with probable urosepsis. Early recognition and treatment of sepsis significantly improve outcomes.",
    takeaway:
        "UTI plus hypotension, fever, and confusion = think urosepsis."
},

{
    id: "NGN-INF-013",
    caseId: "NGN-INF-CASE-013",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Cellulitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 67-year-old client with diabetes is admitted with cellulitis of the left lower leg. Over the past 6 hours the area of redness has rapidly expanded beyond the marked borders. Assessment reveals BP 86/52 mm Hg, HR 132/min, RR 28/min, temperature 103.1°F (39.5°C), and increasing confusion. Which nursing action is the priority?",
    choices: [
        "Initiate the sepsis protocol, obtain cultures as ordered, administer IV fluids, and prepare to administer broad-spectrum IV antibiotics.",
        "Apply a warm compress and reassess in two hours.",
        "Elevate the leg and encourage ambulation.",
        "Administer oral acetaminophen and discharge the client."
    ],
    answer:
        "Initiate the sepsis protocol, obtain cultures as ordered, administer IV fluids, and prepare to administer broad-spectrum IV antibiotics.",
    rationale:
        "Rapid progression of cellulitis with hypotension, tachycardia, high fever, and altered mental status suggests sepsis. Immediate fluid resuscitation and antibiotic therapy are priorities.",
    takeaway:
        "Rapidly worsening cellulitis with unstable vital signs should trigger sepsis recognition."
},

{
    id: "NGN-INF-014",
    caseId: "NGN-INF-CASE-014",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "MRSA Wound Infection",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative client develops a surgical wound infection. The wound is draining purulent material, and the culture is positive for methicillin-resistant Staphylococcus aureus (MRSA). Which nursing intervention has the highest priority?",
    choices: [
        "Initiate contact precautions and ensure appropriate personal protective equipment is used.",
        "Leave the wound uncovered to allow air circulation.",
        "Discontinue all antibiotics until repeat cultures return.",
        "Encourage visitors to assist with dressing changes."
    ],
    answer:
        "Initiate contact precautions and ensure appropriate personal protective equipment is used.",
    rationale:
        "MRSA spreads primarily through direct contact. Contact precautions, proper PPE, and hand hygiene are essential to prevent transmission while appropriate antimicrobial therapy is initiated.",
    takeaway:
        "MRSA requires strict contact precautions."
},

{
    id: "NGN-INF-015",
    caseId: "NGN-INF-CASE-015",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Otitis Media",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 2-year-old receiving treatment for acute otitis media suddenly develops lethargy, projectile vomiting, a temperature of 104°F (40°C), and nuchal rigidity. Which nursing action is the priority?",
    choices: [
        "Notify the provider immediately, maintain the airway, establish IV access, and prepare for evaluation of meningitis.",
        "Administer the next scheduled dose of amoxicillin and reassess later.",
        "Apply a warm compress to the affected ear.",
        "Provide routine discharge teaching."
    ],
    answer:
        "Notify the provider immediately, maintain the airway, establish IV access, and prepare for evaluation of meningitis.",
    rationale:
        "High fever, vomiting, lethargy, and neck stiffness suggest meningitis, a rare but life-threatening complication of otitis media requiring emergency intervention.",
    takeaway:
        "Neurologic changes after an ear infection are an emergency."
},

{
    id: "NGN-INF-016",
    caseId: "NGN-INF-CASE-016",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Conjunctivitis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client treated for bacterial conjunctivitis reports severe eye pain, photophobia, blurred vision, and increasing eyelid swelling despite 48 hours of antibiotic therapy. Which nursing action is the priority?",
    choices: [
        "Arrange immediate ophthalmologic evaluation for possible corneal involvement or another serious ocular disorder.",
        "Continue the same treatment for another week.",
        "Stop all medications without notifying the provider.",
        "Recommend using over-the-counter lubricating drops only."
    ],
    answer:
        "Arrange immediate ophthalmologic evaluation for possible corneal involvement or another serious ocular disorder.",
    rationale:
        "Severe pain, photophobia, and vision changes are not expected with uncomplicated conjunctivitis and require urgent evaluation to prevent vision loss.",
    takeaway:
        "Conjunctivitis should not cause severe pain or vision changes."
},

{
    id: "NGN-INF-017",
    caseId: "NGN-INF-CASE-017",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Clostridioides difficile Infection",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client receiving broad-spectrum antibiotics develops profuse watery diarrhea, abdominal cramping, and a temperature of 101.8°F (38.8°C). Assessment reveals WBC 19,800/mm³ and a positive stool test for Clostridioides difficile. Which nursing intervention is the priority?",
    choices: [
        "Initiate contact enteric precautions, perform hand hygiene with soap and water, and administer prescribed oral vancomycin.",
        "Administer loperamide to stop the diarrhea.",
        "Discontinue all isolation precautions after the first dose of antibiotics.",
        "Encourage the client to share the bathroom with other clients."
    ],
    answer:
        "Initiate contact enteric precautions, perform hand hygiene with soap and water, and administer prescribed oral vancomycin.",
    rationale:
        "C. difficile requires contact enteric precautions. Alcohol-based hand sanitizer does not effectively destroy spores. Oral vancomycin or fidaxomicin is first-line therapy, and antidiarrheal medications should generally be avoided.",
    takeaway:
        "Think: Antibiotics + watery diarrhea = isolate immediately and use soap and water."
},

{
    id: "NGN-INF-018",
    caseId: "NGN-INF-CASE-018",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Sepsis",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client admitted with pneumonia becomes increasingly restless. Assessment reveals BP 82/46 mm Hg, HR 138/min, RR 32/min, temperature 103°F (39.4°C), oxygen saturation 88% on 2 L/min nasal cannula, and urine output of 15 mL/hr. Which nursing intervention is the priority?",
    choices: [
        "Initiate the sepsis bundle by obtaining cultures, administering broad-spectrum antibiotics as ordered, giving IV fluids, and applying supplemental oxygen.",
        "Administer acetaminophen and reassess in one hour.",
        "Encourage oral fluids and ambulation.",
        "Wait for repeat laboratory results before intervening."
    ],
    answer:
        "Initiate the sepsis bundle by obtaining cultures, administering broad-spectrum antibiotics as ordered, giving IV fluids, and applying supplemental oxygen.",
    rationale:
        "The client is exhibiting septic shock with hypotension, hypoxemia, oliguria, fever, and tachycardia. Early sepsis recognition and rapid implementation of the sepsis bundle are associated with improved survival.",
    takeaway:
        "Hypotension + infection + organ dysfunction = septic shock until proven otherwise."
},

{
    id: "NGN-INF-019",
    caseId: "NGN-INF-CASE-019",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Postoperative Wound Infection",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "On postoperative day 4, a client's abdominal incision is warm, erythematous, swollen, and draining thick yellow drainage. The client reports increasing pain and has a temperature of 101.9°F (38.8°C). Which nursing action should occur first?",
    choices: [
        "Assess the wound thoroughly, obtain a wound culture as ordered before antibiotics, and notify the provider.",
        "Reinforce the dressing and reassess tomorrow.",
        "Apply hydrogen peroxide directly into the wound every hour.",
        "Remove all staples without a provider prescription."
    ],
    answer:
        "Assess the wound thoroughly, obtain a wound culture as ordered before antibiotics, and notify the provider.",
    rationale:
        "Assessment and culture should occur before antibiotics are administered whenever possible to identify the causative organism and guide treatment.",
    takeaway:
        "Suspected wound infection: assess, culture first if ordered, then antibiotics."
},

{
    id: "NGN-INF-020",
    caseId: "NGN-INF-CASE-020",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Infection Prevention",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Safety and Infection Control",
    question:
        "A nurse is caring for multiple hospitalized clients. Which client should be evaluated first?",
    choices: [
        "A client receiving IV antibiotics who suddenly becomes confused, hypotensive, tachycardic, and febrile.",
        "A client with cellulitis requesting pain medication.",
        "A client with conjunctivitis requesting discharge instructions.",
        "A client with hepatitis asking about diet modifications."
    ],
    answer:
        "A client receiving IV antibiotics who suddenly becomes confused, hypotensive, tachycardic, and febrile.",
    rationale:
        "New-onset confusion, hypotension, tachycardia, and fever indicate possible septic shock, which is immediately life-threatening and requires rapid assessment and intervention.",
    takeaway:
        "For NCLEX priority questions, unstable clients showing signs of sepsis are seen first."
},

{
    id: "NGN-INF-021",
    caseId: "NGN-INF-CASE-021",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Appendicitis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is caring for a client with suspected acute appendicitis. Which provider prescriptions should the nurse anticipate implementing? Select all that apply.",
    choices: [
        "Maintain NPO status.",
        "Start isotonic IV fluids.",
        "Apply a heating pad to the abdomen.",
        "Administer prescribed broad-spectrum antibiotics.",
        "Prepare the client for appendectomy.",
        "Administer a laxative."
    ],
    answer: [0, 1, 3, 4],
    rationale:
        "Clients with suspected appendicitis should remain NPO, receive IV fluids and antibiotics, and be prepared for surgery. Heating pads and laxatives increase the risk of appendiceal rupture and are contraindicated.",
    takeaway:
        "Appendicitis priorities: NPO, IV fluids, antibiotics, surgery—avoid heat and laxatives."
},

{
    id: "NGN-INF-022",
    caseId: "NGN-INF-CASE-022",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Acute Pancreatitis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client is admitted with severe acute pancreatitis. Which assessment findings indicate the client's condition is worsening? Select all that apply.",
    choices: [
        "Blood pressure decreases to 84/48 mm Hg.",
        "Serum calcium decreases to 7.1 mg/dL.",
        "Heart rate increases to 128/min.",
        "Pain decreases after receiving analgesics.",
        "Urine output falls to 20 mL/hr.",
        "Oxygen saturation decreases to 88%."
    ],
    answer: [0, 1, 2, 4, 5],
    rationale:
        "Hypotension, hypocalcemia, tachycardia, oliguria, and hypoxemia indicate severe pancreatitis with systemic complications. Pain relief after analgesia is an expected therapeutic response.",
    takeaway:
        "Watch for shock, respiratory compromise, electrolyte abnormalities, and kidney hypoperfusion in pancreatitis."
},

{
    id: "NGN-INF-023",
    caseId: "NGN-INF-CASE-023",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Tuberculosis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safety and Infection Control",
    question:
        "The nurse is admitting a client with suspected pulmonary tuberculosis. Which interventions are appropriate? Select all that apply.",
    choices: [
        "Place the client in a negative-pressure room.",
        "Wear an N95 respirator before entering the room.",
        "Limit unnecessary transport outside the room.",
        "Require visitors to wear surgical masks only.",
        "Collect sputum specimens as ordered.",
        "Use standard precautions only."
    ],
    answer: [0, 1, 2, 4],
    rationale:
        "Suspected TB requires airborne isolation, an N95 respirator, limited transport, and sputum collection. Surgical masks alone do not adequately protect healthcare workers, and standard precautions alone are insufficient.",
    takeaway:
        "TB = Airborne precautions, negative-pressure room, and N95 respirator."
},

{
    id: "NGN-INF-024",
    caseId: "NGN-INF-CASE-024",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Sepsis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with an infection develops suspected sepsis. Which assessment findings support the nurse's concern? Select all that apply.",
    choices: [
        "Temperature 103°F (39.4°C).",
        "Blood pressure 82/44 mm Hg.",
        "Heart rate 132/min.",
        "Urine output 15 mL/hr.",
        "Increasing confusion.",
        "Warm, dry skin with stable vital signs."
    ],
    answer: [0, 1, 2, 3, 4],
    rationale:
        "Fever, hypotension, tachycardia, oliguria, and altered mental status are classic manifestations of severe sepsis or septic shock. Stable vital signs do not support worsening sepsis.",
    takeaway:
        "Recognize sepsis early by identifying organ dysfunction and hemodynamic instability."
},

{
    id: "NGN-INF-025",
    caseId: "NGN-INF-CASE-025",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Acute Hepatitis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Physiological Adaptation",
    question:
        "A nurse is caring for a client hospitalized with acute viral hepatitis. Which findings require immediate follow-up? Select all that apply.",
    choices: [
        "Increasing confusion and difficulty staying awake.",
        "INR increases from 1.1 to 2.6.",
        "Dark urine and jaundice.",
        "AST and ALT remain elevated.",
        "New bruising and bleeding from venipuncture sites.",
        "Client reports mild fatigue."
    ],
    answer: [0, 1, 4],
    rationale:
        "Confusion indicates possible hepatic encephalopathy. An elevated INR and spontaneous bleeding indicate worsening liver failure and impaired clotting. Dark urine, jaundice, elevated liver enzymes, and fatigue are expected findings in acute hepatitis and are monitored but are not immediately life-threatening.",
    takeaway:
        "Hepatitis becomes an emergency when liver function begins to fail—watch for encephalopathy and coagulopathy."
},

{
    id: "NGN-INF-026",
    caseId: "NGN-INF-CASE-026",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Pyelonephritis",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "A client is admitted with acute pyelonephritis. Which assessment findings support this diagnosis? Select all that apply.",
    choices: [
        "Costovertebral angle tenderness.",
        "Fever and chills.",
        "Dysuria.",
        "Flank pain.",
        "Urinary frequency.",
        "Bradycardia."
    ],
    answer: [0, 1, 2, 3, 4],
    rationale:
        "Pyelonephritis commonly presents with CVA tenderness, flank pain, fever, chills, dysuria, urgency, and frequency. Bradycardia is not a typical manifestation.",
    takeaway:
        "Differentiate pyelonephritis from cystitis by remembering flank pain, fever, and CVA tenderness."
},

{
    id: "NGN-INF-027",
    caseId: "NGN-INF-CASE-027",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "MRSA Infection",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safety and Infection Control",
    question:
        "The nurse is caring for a client with a confirmed MRSA wound infection. Which nursing interventions are appropriate? Select all that apply.",
    choices: [
        "Use gown and gloves when entering the room.",
        "Perform hand hygiene before and after care.",
        "Dedicate equipment to the client whenever possible.",
        "Place the client on airborne precautions.",
        "Clean high-touch surfaces regularly.",
        "Share blood pressure cuffs between clients after each use without disinfection."
    ],
    answer: [0, 1, 2, 4],
    rationale:
        "MRSA requires contact precautions, meticulous hand hygiene, dedicated equipment, and environmental cleaning. Airborne precautions are unnecessary, and shared equipment must be disinfected before reuse.",
    takeaway:
        "MRSA prevention focuses on contact precautions and equipment hygiene."
},

{
    id: "NGN-INF-028",
    caseId: "NGN-INF-CASE-028",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Clostridioides difficile",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safety and Infection Control",
    question:
        "A nurse is caring for a client with Clostridioides difficile infection. Which interventions should be included in the plan of care? Select all that apply.",
    choices: [
        "Wash hands with soap and water after client contact.",
        "Use dedicated equipment whenever possible.",
        "Wear gown and gloves upon room entry.",
        "Use alcohol-based hand sanitizer as the primary hand hygiene method.",
        "Clean the environment with a sporicidal disinfectant.",
        "Administer antidiarrheal medication routinely."
    ],
    answer: [0, 1, 2, 4],
    rationale:
        "Soap and water physically remove spores, while alcohol-based sanitizer does not reliably eliminate them. Contact precautions and sporicidal cleaning are essential. Antidiarrheal medications are generally avoided unless specifically prescribed.",
    takeaway:
        "C. difficile = soap and water, contact precautions, and bleach/sporicidal cleaning."
},

{
    id: "NGN-INF-029",
    caseId: "NGN-INF-CASE-029",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Inflammatory Bowel Disease",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Adaptation",
    question:
        "A nurse is assessing a client experiencing an acute flare of inflammatory bowel disease. Which assessment findings require immediate follow-up? Select all that apply.",
    choices: [
        "Heart rate 128/min.",
        "Blood pressure 84/46 mm Hg.",
        "Rigid, distended abdomen.",
        "Temperature 102.5°F (39.2°C).",
        "One loose stool after breakfast.",
        "Absent bowel sounds."
    ],
    answer: [0, 1, 2, 3, 5],
    rationale:
        "Hypotension, tachycardia, fever, abdominal rigidity/distention, and absent bowel sounds may indicate perforation, peritonitis, or toxic megacolon and require immediate intervention. A single loose stool is expected during an IBD flare and is not the highest priority.",
    takeaway:
        "IBD becomes an emergency when signs of perforation, toxic megacolon, or shock develop."
},

{
    id: "NGN-INF-030",
    caseId: "NGN-INF-CASE-030",
    patient: randomPatient(),
    topic: "Inflammation and Infection",
    subtopic: "Prioritization",
    style: "NGN Matrix",
    difficulty: "ATI",
    bloom: "Evaluate",
    nclexCategory: "Management of Care",
    question:
        "The nurse receives report on four clients. Which clients should the nurse assess first? Select all that apply.",
    choices: [
        "A client with suspected appendicitis whose abdominal pain suddenly stopped and is now rigid.",
        "A client with pneumonia whose oxygen saturation is 84% on room air.",
        "A client with cellulitis requesting another blanket because of chills.",
        "A client with cirrhosis actively vomiting bright-red blood.",
        "A client with conjunctivitis waiting for discharge instructions.",
        "A client with pyelonephritis who is confused and hypotensive."
    ],
    answer: [0, 1, 3, 5],
    rationale:
        "These clients demonstrate life-threatening conditions requiring immediate intervention: possible appendiceal rupture, severe hypoxemia, variceal hemorrhage, and septic shock. Chills with cellulitis require assessment but are lower priority than unstable ABCs, and discharge teaching is the lowest priority.",
    takeaway:
        "Always prioritize unstable ABCs, hemorrhage, perforation, and sepsis over stable clients."
}

];
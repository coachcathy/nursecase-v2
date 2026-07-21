const appendicitisQuestions = [

{
    id: "APPENDICITIS-001",
    caseId: "APPENDICITIS-CASE-001",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "A nurse is caring for a client diagnosed with acute appendicitis. Which explanation best describes the cause of the disease?",
    choices: [
        "Obstruction of the appendix leads to inflammation and infection.",
        "The appendix produces excessive stomach acid.",
        "The appendix becomes ischemic because of heart failure.",
        "An autoimmune process destroys the appendix."
    ],
    answer:
        "Obstruction of the appendix leads to inflammation and infection.",
    rationale:
        "Appendicitis usually begins with obstruction of the appendiceal lumen by fecal material, lymphoid hyperplasia, or a foreign body, leading to inflammation, bacterial growth, ischemia, and possible perforation.",
    takeaway:
        "Obstruction → inflammation → infection → possible perforation."
},

{
    id: "APPENDICITIS-002",
    caseId: "APPENDICITIS-CASE-002",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most characteristic of acute appendicitis?",
    choices: [
        "Pain that begins around the umbilicus and migrates to the right lower quadrant",
        "Left lower quadrant pain relieved by eating",
        "Epigastric pain radiating to the back",
        "Diffuse abdominal pain relieved by defecation"
    ],
    answer:
        "Pain that begins around the umbilicus and migrates to the right lower quadrant",
    rationale:
        "Classic appendicitis begins with vague periumbilical pain that localizes to McBurney's point in the right lower quadrant.",
    takeaway:
        "Periumbilical pain migrating to the RLQ is classic appendicitis."
},

{
    id: "APPENDICITIS-003",
    caseId: "APPENDICITIS-CASE-003",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Assessment",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment findings support a diagnosis of acute appendicitis? Select all that apply.",
    choices: [
        "Rebound tenderness",
        "Nausea and vomiting",
        "Low-grade fever",
        "Loss of appetite",
        "Right lower quadrant tenderness",
        "Painless jaundice"
    ],
    answer: [
        "Rebound tenderness",
        "Nausea and vomiting",
        "Low-grade fever",
        "Loss of appetite",
        "Right lower quadrant tenderness"
    ],
    rationale:
        "Appendicitis commonly presents with anorexia, nausea, vomiting, low-grade fever, RLQ tenderness, and rebound tenderness.",
    takeaway:
        "RLQ pain + anorexia + nausea = think appendicitis."
},

{
    id: "APPENDICITIS-004",
    caseId: "APPENDICITIS-CASE-004",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with suspected appendicitis suddenly reports complete relief of abdominal pain followed by generalized abdominal tenderness and fever. What is the nurse's priority action?",
    choices: [
        "Notify the provider immediately because perforation is suspected.",
        "Document the improvement in pain.",
        "Encourage ambulation.",
        "Administer a laxative."
    ],
    answer:
        "Notify the provider immediately because perforation is suspected.",
    rationale:
        "Sudden pain relief followed by diffuse abdominal pain often indicates rupture of the appendix with developing peritonitis, which is a surgical emergency.",
    takeaway:
        "Sudden relief of pain can indicate rupture—not recovery."
},

{
    id: "APPENDICITIS-005",
    caseId: "APPENDICITIS-CASE-005",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Nursing Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing intervention is appropriate for a client with suspected appendicitis before surgery?",
    choices: [
        "Maintain NPO status.",
        "Apply a heating pad to the abdomen.",
        "Administer a laxative.",
        "Encourage a high-fiber meal."
    ],
    answer:
        "Maintain NPO status.",
    rationale:
        "Clients with suspected appendicitis should remain NPO in anticipation of surgery. Heat and laxatives increase the risk of perforation.",
    takeaway:
        "Appendicitis: NPO, IV fluids, pain management, surgery."
},

{
    id: "APPENDICITIS-006",
    caseId: "APPENDICITIS-CASE-006",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic test best confirms acute appendicitis in most adults?",
    choices: [
        "CT scan of the abdomen",
        "Chest X-ray",
        "Upper GI series",
        "MRI of the brain"
    ],
    answer:
        "CT scan of the abdomen",
    rationale:
        "CT imaging is highly sensitive and specific for diagnosing appendicitis and identifying perforation or abscess formation.",
    takeaway:
        "CT abdomen is the preferred imaging study for appendicitis."
},

{
    id: "APPENDICITIS-007",
    caseId: "APPENDICITIS-CASE-007",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding would the nurse expect in a client with acute appendicitis?",
    choices: [
        "Elevated white blood cell count",
        "Low platelet count",
        "Decreased CRP",
        "Low hemoglobin"
    ],
    answer:
        "Elevated white blood cell count",
    rationale:
        "Leukocytosis is common due to the inflammatory and infectious process occurring in appendicitis.",
    takeaway:
        "Appendicitis commonly causes leukocytosis."
},

{
    id: "APPENDICITIS-008",
    caseId: "APPENDICITIS-CASE-008",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client awaiting an appendectomy indicates understanding of the plan of care?",
    choices: [
        "I should avoid eating or drinking until after surgery.",
        "I should use a heating pad to relieve my pain.",
        "Walking frequently will cure my appendicitis.",
        "I'll request a laxative if I'm constipated."
    ],
    answer:
        "I should avoid eating or drinking until after surgery.",
    rationale:
        "Remaining NPO helps prepare the client for surgery and reduces aspiration risk. Heating pads and laxatives increase perforation risk.",
    takeaway:
        "Never use heat or laxatives with suspected appendicitis."
},

{
    id: "APPENDICITIS-009",
    caseId: "APPENDICITIS-CASE-009",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment finding requires the nurse's immediate attention in a client with appendicitis?",
    choices: [
        "Rigid, board-like abdomen",
        "Loss of appetite",
        "Low-grade fever",
        "Nausea after eating"
    ],
    answer:
        "Rigid, board-like abdomen",
    rationale:
        "A rigid abdomen suggests peritonitis from appendiceal rupture and requires immediate surgical intervention.",
    takeaway:
        "Rigid abdomen = possible perforation and peritonitis."
},

{
    id: "APPENDICITIS-010",
    caseId: "APPENDICITIS-CASE-010",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Postoperative Care",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention is most appropriate after an uncomplicated laparoscopic appendectomy?",
    choices: [
        "Encourage early ambulation.",
        "Maintain strict bed rest for 48 hours.",
        "Keep the client NPO for 72 hours.",
        "Apply heat to the incision every hour."
    ],
    answer:
        "Encourage early ambulation.",
    rationale:
        "Early ambulation promotes bowel motility, decreases the risk of venous thromboembolism, and supports recovery after surgery.",
    takeaway:
        "Early ambulation is a priority after abdominal surgery."
},

{
    id: "APPENDICITIS-011",
    caseId: "APPENDICITIS-CASE-011",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which complication is the greatest concern if appendicitis is left untreated?",
    choices: [
        "Peritonitis",
        "Constipation",
        "Hemorrhoids",
        "GERD"
    ],
    answer:
        "Peritonitis",
    rationale:
        "Untreated appendicitis may lead to perforation and leakage of infected material into the abdominal cavity, causing life-threatening peritonitis.",
    takeaway:
        "The biggest danger of appendicitis is rupture leading to peritonitis."
},

{
    id: "APPENDICITIS-012",
    caseId: "APPENDICITIS-CASE-012",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Patient Education",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which discharge instructions should the nurse include after a laparoscopic appendectomy? Select all that apply.",
    choices: [
        "Report fever over 101°F (38.3°C).",
        "Walk several times each day.",
        "Keep the incision clean and dry.",
        "Avoid heavy lifting until cleared.",
        "Expect increasing redness and drainage.",
        "Complete prescribed antibiotics if ordered."
    ],
    answer: [
        "Report fever over 101°F (38.3°C).",
        "Walk several times each day.",
        "Keep the incision clean and dry.",
        "Avoid heavy lifting until cleared.",
        "Complete prescribed antibiotics if ordered."
    ],
    rationale:
        "Patients should monitor for infection, gradually increase activity, protect the incision, avoid heavy lifting, and complete prescribed medications.",
    takeaway:
        "Prevent infection and promote healing after appendectomy."
},

{
    id: "APPENDICITIS-013",
    caseId: "APPENDICITIS-CASE-013",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Clinical Manifestations",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "The nurse palpates the client's right lower quadrant and then quickly releases pressure, causing increased pain. This finding is known as:",
    choices: [
        "Rebound tenderness",
        "Murphy's sign",
        "Cullen's sign",
        "Grey Turner's sign"
    ],
    answer:
        "Rebound tenderness",
    rationale:
        "Rebound tenderness indicates peritoneal irritation and is commonly associated with appendicitis.",
    takeaway:
        "Rebound tenderness is a classic appendicitis finding."
},

{
    id: "APPENDICITIS-014",
    caseId: "APPENDICITIS-CASE-014",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with suspected appendicitis reports worsening abdominal pain with movement and coughing. Which nursing intervention is appropriate?",
    choices: [
        "Limit unnecessary movement and prepare for surgery.",
        "Encourage vigorous ambulation.",
        "Apply a heating pad to reduce pain.",
        "Administer a laxative."
    ],
    answer:
        "Limit unnecessary movement and prepare for surgery.",
    rationale:
        "Movement increases peritoneal irritation. The client should be prepared for surgery while avoiding interventions that increase rupture risk.",
    takeaway:
        "Minimize abdominal stress before appendectomy."
},

{
    id: "APPENDICITIS-015",
    caseId: "APPENDICITIS-CASE-015",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which provider prescription should the nurse question for a client with suspected appendicitis?",
    choices: [
        "Administer a cleansing enema.",
        "Start IV normal saline.",
        "Maintain NPO status.",
        "Obtain informed consent for surgery."
    ],
    answer:
        "Administer a cleansing enema.",
    rationale:
        "Enemas and laxatives increase intraluminal pressure and may cause appendiceal rupture.",
    takeaway:
        "Never give enemas or laxatives with suspected appendicitis."
},

{
    id: "APPENDICITIS-016",
    caseId: "APPENDICITIS-CASE-016",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Comprehensive Review",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which assessment finding most strongly indicates that a client with appendicitis has developed septic shock?",
    choices: [
        "Hypotension, tachycardia, fever, and altered mental status",
        "Localized RLQ tenderness",
        "Mild nausea after eating",
        "Pain rated 5/10"
    ],
    answer:
        "Hypotension, tachycardia, fever, and altered mental status",
    rationale:
        "These findings indicate systemic infection with poor tissue perfusion requiring immediate sepsis management.",
    takeaway:
        "Recognize septic shock early—hypotension plus infection is an emergency."
},

{
    id: "APPENDICITIS-017",
    caseId: "APPENDICITIS-CASE-017",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which client statement is most consistent with the early progression of appendicitis?",
    choices: [
        "My pain started near my belly button but has moved to the lower right side.",
        "The pain gets better after I have a bowel movement.",
        "The pain improves after eating.",
        "The pain radiates into my left shoulder."
    ],
    answer:
        "My pain started near my belly button but has moved to the lower right side.",
    rationale:
        "Appendicitis classically begins with vague periumbilical pain that localizes to the right lower quadrant as the parietal peritoneum becomes inflamed.",
    takeaway:
        "Migration of pain to the RLQ is a hallmark finding."
},

{
    id: "APPENDICITIS-018",
    caseId: "APPENDICITIS-CASE-018",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Preoperative Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "Which nursing interventions are appropriate before an appendectomy? Select all that apply.",
    choices: [
        "Maintain NPO status.",
        "Administer prescribed IV fluids.",
        "Monitor pain and abdominal assessment.",
        "Administer prescribed antibiotics.",
        "Apply a heating pad to the abdomen.",
        "Give a laxative for constipation."
    ],
    answer: [
        "Maintain NPO status.",
        "Administer prescribed IV fluids.",
        "Monitor pain and abdominal assessment.",
        "Administer prescribed antibiotics."
    ],
    rationale:
        "Preoperative care includes keeping the client NPO, maintaining hydration, monitoring for perforation, and administering antibiotics as prescribed. Heat and laxatives increase the risk of rupture.",
    takeaway:
        "NPO + IV fluids + antibiotics + assessment."
},

{
    id: "APPENDICITIS-019",
    caseId: "APPENDICITIS-CASE-019",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Laboratory Findings",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory result would most concern the nurse in a client with suspected perforated appendicitis?",
    choices: [
        "WBC 22,000/mm³",
        "Hemoglobin 13.8 g/dL",
        "Platelets 250,000/mm³",
        "Potassium 4.1 mEq/L"
    ],
    answer:
        "WBC 22,000/mm³",
    rationale:
        "A markedly elevated WBC count may indicate severe infection or perforation requiring urgent intervention.",
    takeaway:
        "Very high WBC counts suggest worsening infection."
},

{
    id: "APPENDICITIS-020",
    caseId: "APPENDICITIS-CASE-020",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A postoperative appendectomy client reports severe abdominal pain, has a temperature of 102.4°F (39.1°C), and develops abdominal rigidity. Which action should the nurse take first?",
    choices: [
        "Notify the provider immediately.",
        "Administer PRN pain medication.",
        "Assist the client to ambulate.",
        "Encourage oral fluids."
    ],
    answer:
        "Notify the provider immediately.",
    rationale:
        "These findings suggest postoperative peritonitis or intra-abdominal infection requiring immediate evaluation.",
    takeaway:
        "Rigidity after appendectomy is never expected."
},

{
    id: "APPENDICITIS-021",
    caseId: "APPENDICITIS-CASE-021",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates a need for additional teaching after discharge following an appendectomy?",
    choices: [
        "I'll lift my heavy furniture as soon as I get home.",
        "I'll call my provider if I develop a fever.",
        "I'll keep my incision clean and dry.",
        "I'll increase activity gradually."
    ],
    answer:
        "I'll lift my heavy furniture as soon as I get home.",
    rationale:
        "Heavy lifting increases the risk of wound dehiscence and hernia formation after abdominal surgery.",
    takeaway:
        "Avoid heavy lifting until cleared by the surgeon."
},

{
    id: "APPENDICITIS-022",
    caseId: "APPENDICITIS-CASE-022",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which findings suggest perforated appendicitis? Select all that apply.",
    choices: [
        "Rigid abdomen",
        "High fever",
        "Diffuse abdominal pain",
        "Hypotension",
        "Tachycardia",
        "Pain relieved after eating"
    ],
    answer: [
        "Rigid abdomen",
        "High fever",
        "Diffuse abdominal pain",
        "Hypotension",
        "Tachycardia"
    ],
    rationale:
        "Perforation often leads to peritonitis and sepsis with diffuse pain, rigidity, fever, tachycardia, and hypotension.",
    takeaway:
        "Think sepsis when appendicitis perforates."
},

{
    id: "APPENDICITIS-023",
    caseId: "APPENDICITIS-CASE-023",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "The nurse is assessing a client with suspected appendicitis. Which finding should be reported immediately because it suggests rupture?",
    choices: [
        "Sudden relief of abdominal pain followed by increasing generalized pain",
        "Loss of appetite",
        "Nausea after eating",
        "Right lower quadrant tenderness"
    ],
    answer:
        "Sudden relief of abdominal pain followed by increasing generalized pain",
    rationale:
        "Temporary relief followed by diffuse pain is a classic indication that the appendix has perforated.",
    takeaway:
        "Sudden pain relief can be a dangerous sign."
},

{
    id: "APPENDICITIS-024",
    caseId: "APPENDICITIS-CASE-024",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients. Which client should be assessed first?",
    choices: [
        "A client with suspected appendicitis who now has BP 84/46 mm Hg and HR 128/min",
        "A client awaiting an appendectomy with pain rated 7/10",
        "A postoperative client requesting water",
        "A client discharged yesterday asking about dressing changes"
    ],
    answer:
        "A client with suspected appendicitis who now has BP 84/46 mm Hg and HR 128/min",
    rationale:
        "Hypotension and tachycardia suggest septic shock or hemorrhage and require immediate intervention using ABCs.",
    takeaway:
        "Unstable vital signs always take priority."
},

{
    id: "APPENDICITIS-025",
    caseId: "APPENDICITIS-CASE-025",
    patient: randomPatient(),
    topic: "Appendicitis",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with appendicitis has worsening abdominal pain, fever, tachycardia, hypotension, and increasing abdominal distention. Which provider prescription should the nurse implement first?",
    choices: [
        "Begin rapid IV fluid resuscitation and broad-spectrum IV antibiotics.",
        "Advance the client to a regular diet.",
        "Administer a laxative.",
        "Apply a heating pad to the abdomen."
    ],
    answer:
        "Begin rapid IV fluid resuscitation and broad-spectrum IV antibiotics.",
    rationale:
        "The client demonstrates findings consistent with sepsis secondary to perforated appendicitis. Early fluid resuscitation and antibiotics are priorities while preparing for emergency surgery.",
    takeaway:
        "Perforated appendicitis + hypotension = treat as sepsis."
},

];
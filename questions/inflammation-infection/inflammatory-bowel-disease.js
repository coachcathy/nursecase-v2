const inflammatoryBowelDiseaseQuestions = [

{
    id: "IBD-001",
    caseId: "IBD-CASE-001",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Pathophysiology",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which statement best describes inflammatory bowel disease (IBD)?",
    choices: [
        "A group of chronic inflammatory disorders that includes Crohn's disease and ulcerative colitis",
        "A bacterial infection causing inflammation of the appendix",
        "A temporary intolerance to gluten",
        "An acute viral infection of the stomach"
    ],
    answer:
        "A group of chronic inflammatory disorders that includes Crohn's disease and ulcerative colitis",
    rationale:
        "Inflammatory bowel disease is a chronic immune-mediated disorder that primarily includes Crohn's disease and ulcerative colitis.",
    takeaway:
        "IBD includes Crohn's disease and ulcerative colitis."
},

{
    id: "IBD-002",
    caseId: "IBD-CASE-002",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Crohn's vs Ulcerative Colitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which characteristic is most consistent with Crohn's disease?",
    choices: [
        "Inflammation may occur anywhere from the mouth to the anus with skip lesions.",
        "Inflammation affects only the rectum.",
        "Disease is limited to the mucosal layer of the colon.",
        "Continuous inflammation occurs only in the sigmoid colon."
    ],
    answer:
        "Inflammation may occur anywhere from the mouth to the anus with skip lesions.",
    rationale:
        "Crohn's disease can affect any portion of the gastrointestinal tract and commonly produces patchy areas of inflammation known as skip lesions.",
    takeaway:
        "Crohn's = mouth to anus + skip lesions."
},

{
    id: "IBD-003",
    caseId: "IBD-CASE-003",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are commonly associated with inflammatory bowel disease? Select all that apply.",
    choices: [
        "Chronic diarrhea",
        "Abdominal pain",
        "Weight loss",
        "Fatigue",
        "Rectal bleeding",
        "Bradycardia"
    ],
    answer: [
        "Chronic diarrhea",
        "Abdominal pain",
        "Weight loss",
        "Fatigue",
        "Rectal bleeding"
    ],
    rationale:
        "IBD commonly presents with diarrhea, abdominal pain, fatigue, weight loss, and rectal bleeding, particularly with ulcerative colitis.",
    takeaway:
        "Chronic diarrhea and weight loss are hallmark findings."
},

{
    id: "IBD-004",
    caseId: "IBD-CASE-004",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which diagnostic procedure best confirms inflammatory bowel disease?",
    choices: [
        "Colonoscopy with biopsy",
        "Chest x-ray",
        "Electrocardiogram",
        "Urinalysis"
    ],
    answer:
        "Colonoscopy with biopsy",
    rationale:
        "Colonoscopy with biopsy allows direct visualization of intestinal inflammation and tissue confirmation of IBD.",
    takeaway:
        "Colonoscopy is the gold standard diagnostic test."
},

{
    id: "IBD-005",
    caseId: "IBD-CASE-005",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with inflammatory bowel disease should the nurse assess first?",
    choices: [
        "A client with BP 84/48 mm Hg after multiple bloody stools",
        "A client requesting pain medication",
        "A client asking about diet changes",
        "A client reporting mild abdominal cramping"
    ],
    answer:
        "A client with BP 84/48 mm Hg after multiple bloody stools",
    rationale:
        "Hypotension following significant bloody diarrhea suggests hypovolemia and possible hemorrhage requiring immediate intervention.",
    takeaway:
        "Hemodynamic instability always takes priority."
},

{
    id: "IBD-006",
    caseId: "IBD-CASE-006",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which meal is most appropriate during an acute flare of inflammatory bowel disease?",
    choices: [
        "Low-residue baked chicken, white rice, and applesauce",
        "Large spinach salad with raw vegetables",
        "Popcorn and mixed nuts",
        "Spicy chili with beans"
    ],
    answer:
        "Low-residue baked chicken, white rice, and applesauce",
    rationale:
        "A low-residue diet reduces bowel stimulation during acute exacerbations.",
    takeaway:
        "Low-residue foods decrease bowel irritation."
},

{
    id: "IBD-007",
    caseId: "IBD-CASE-007",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by the client indicates understanding of inflammatory bowel disease management?",
    choices: [
        "I'll take my medications even when my symptoms improve.",
        "I'll stop my medications once the diarrhea resolves.",
        "High-fiber foods should always be eaten during flares.",
        "Smoking helps control Crohn's disease."
    ],
    answer:
        "I'll take my medications even when my symptoms improve.",
    rationale:
        "Maintenance medications help prevent relapses and should be continued as prescribed.",
    takeaway:
        "IBD requires long-term disease management."
},

{
    id: "IBD-008",
    caseId: "IBD-CASE-008",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is most associated with ulcerative colitis?",
    choices: [
        "Toxic megacolon",
        "Acute pancreatitis",
        "Appendiceal rupture",
        "Gallbladder perforation"
    ],
    answer:
        "Toxic megacolon",
    rationale:
        "Ulcerative colitis can progress to toxic megacolon, a life-threatening dilation of the colon requiring emergency treatment.",
    takeaway:
        "Toxic megacolon is a life-threatening complication of ulcerative colitis."
},

{
    id: "IBD-009",
    caseId: "IBD-CASE-009",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Crohn's vs Ulcerative Colitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is most characteristic of ulcerative colitis?",
    choices: [
        "Continuous inflammation beginning in the rectum and extending through the colon",
        "Skip lesions throughout the small intestine",
        "Transmural inflammation affecting the entire GI tract",
        "Inflammation limited to the stomach"
    ],
    answer:
        "Continuous inflammation beginning in the rectum and extending through the colon",
    rationale:
        "Ulcerative colitis affects only the colon and rectum with continuous mucosal inflammation beginning in the rectum.",
    takeaway:
        "Ulcerative colitis = continuous colon involvement."
},

{
    id: "IBD-010",
    caseId: "IBD-CASE-010",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding suggests dehydration in a client experiencing an acute flare of inflammatory bowel disease?",
    choices: [
        "Tachycardia with dry mucous membranes",
        "Bounding peripheral pulses",
        "Warm, flushed skin",
        "Bradycardia with hypertension"
    ],
    answer:
        "Tachycardia with dry mucous membranes",
    rationale:
        "Frequent diarrhea causes fluid loss resulting in dehydration, tachycardia, dry mucous membranes, and poor skin turgor.",
    takeaway:
        "Frequent diarrhea increases dehydration risk."
},

{
    id: "IBD-011",
    caseId: "IBD-CASE-011",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with ulcerative colitis reports severe abdominal pain, fever, and abdominal distention. What is the nurse's priority action?",
    choices: [
        "Notify the provider immediately and prepare for further evaluation.",
        "Encourage the client to eat a high-fiber meal.",
        "Administer a laxative.",
        "Apply a heating pad to the abdomen."
    ],
    answer:
        "Notify the provider immediately and prepare for further evaluation.",
    rationale:
        "These findings may indicate toxic megacolon, a medical emergency requiring immediate evaluation.",
    takeaway:
        "Severe pain + fever + distention = suspect toxic megacolon."
},

{
    id: "IBD-012",
    caseId: "IBD-CASE-012",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Medications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which medications may be prescribed for inflammatory bowel disease? Select all that apply.",
    choices: [
        "Mesalamine",
        "Prednisone",
        "Infliximab",
        "Azathioprine",
        "Adalimumab",
        "Nitroglycerin"
    ],
    answer: [
        "Mesalamine",
        "Prednisone",
        "Infliximab",
        "Azathioprine",
        "Adalimumab"
    ],
    rationale:
        "Treatment commonly includes aminosalicylates, corticosteroids, biologics, and immunosuppressants depending on disease severity.",
    takeaway:
        "IBD therapy reduces inflammation and suppresses the immune response."
},

{
    id: "IBD-013",
    caseId: "IBD-CASE-013",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which food should the nurse recommend avoiding during an acute inflammatory bowel disease flare?",
    choices: [
        "Raw vegetables",
        "White rice",
        "Applesauce",
        "Skinless baked chicken"
    ],
    answer:
        "Raw vegetables",
    rationale:
        "High-fiber foods increase bowel stimulation and can worsen symptoms during an acute flare.",
    takeaway:
        "Avoid high-fiber foods during active disease."
},

{
    id: "IBD-014",
    caseId: "IBD-CASE-014",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is more commonly associated with Crohn's disease than ulcerative colitis?",
    choices: [
        "Fistula formation",
        "Toxic megacolon",
        "Massive rectal bleeding",
        "Disease limited to the rectum"
    ],
    answer:
        "Fistula formation",
    rationale:
        "Because Crohn's disease involves transmural inflammation, fistulas and abscesses are common complications.",
    takeaway:
        "Transmural disease leads to fistulas."
},

{
    id: "IBD-015",
    caseId: "IBD-CASE-015",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with Crohn's disease reports increasing abdominal pain, fever, and drainage from an opening near the anus. Which complication should the nurse suspect?",
    choices: [
        "Perianal fistula",
        "Appendicitis",
        "Peptic ulcer disease",
        "Acute hepatitis"
    ],
    answer:
        "Perianal fistula",
    rationale:
        "Crohn's disease commonly causes fistulas due to transmural inflammation extending through the bowel wall.",
    takeaway:
        "Perianal drainage is highly suggestive of a fistula."
},

{
    id: "IBD-016",
    caseId: "IBD-CASE-016",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with inflammatory bowel disease. Which client should be assessed first?",
    choices: [
        "A client with severe abdominal distention, fever, and absent bowel sounds",
        "A client requesting pain medication",
        "A client asking about diet",
        "A client with mild diarrhea"
    ],
    answer:
        "A client with severe abdominal distention, fever, and absent bowel sounds",
    rationale:
        "These findings suggest toxic megacolon or bowel perforation, both life-threatening emergencies.",
    takeaway:
        "Distention plus absent bowel sounds is an emergency."
},

{
    id: "IBD-017",
    caseId: "IBD-CASE-017",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "A client with Crohn's disease reports worsening diarrhea and abdominal pain. Which laboratory value would the nurse expect?",
    choices: [
        "Low hemoglobin",
        "Low troponin",
        "Elevated calcium",
        "Low potassium with metabolic alkalosis"
    ],
    answer:
        "Low hemoglobin",
    rationale:
        "Chronic intestinal inflammation and blood loss can result in iron-deficiency anemia and decreased hemoglobin levels.",
    takeaway:
        "Chronic IBD commonly leads to anemia."
},

{
    id: "IBD-018",
    caseId: "IBD-CASE-018",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complications are associated with Crohn's disease? Select all that apply.",
    choices: [
        "Fistulas",
        "Abscess formation",
        "Intestinal obstruction",
        "Malnutrition",
        "Vitamin B12 deficiency",
        "Acute appendicitis"
    ],
    answer: [
        "Fistulas",
        "Abscess formation",
        "Intestinal obstruction",
        "Malnutrition",
        "Vitamin B12 deficiency"
    ],
    rationale:
        "Transmural inflammation can produce fistulas, abscesses, strictures causing obstruction, malnutrition, and vitamin B12 deficiency when the terminal ileum is involved.",
    takeaway:
        "Crohn's disease affects the entire bowel wall and nutrient absorption."
},

{
    id: "IBD-019",
    caseId: "IBD-CASE-019",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a client with Crohn's disease indicates understanding of discharge teaching?",
    choices: [
        "I will avoid smoking because it can worsen my disease.",
        "Smoking helps decrease inflammation.",
        "I'll stop my medications once my diarrhea improves.",
        "I'll only follow my diet during hospitalizations."
    ],
    answer:
        "I will avoid smoking because it can worsen my disease.",
    rationale:
        "Smoking is associated with increased disease activity, complications, and relapses in Crohn's disease.",
    takeaway:
        "Smoking cessation is an important part of Crohn's disease management."
},

{
    id: "IBD-020",
    caseId: "IBD-CASE-020",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which client with ulcerative colitis should the nurse assess first?",
    choices: [
        "A client with sudden severe abdominal pain, rigid abdomen, and fever",
        "A client requesting breakfast",
        "A client reporting mild fatigue",
        "A client asking when they can go home"
    ],
    answer:
        "A client with sudden severe abdominal pain, rigid abdomen, and fever",
    rationale:
        "These findings may indicate bowel perforation or toxic megacolon, both life-threatening emergencies.",
    takeaway:
        "A rigid abdomen suggests an acute surgical abdomen."
},

{
    id: "IBD-021",
    caseId: "IBD-CASE-021",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Nutrition",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which dietary recommendation is appropriate for a client with inflammatory bowel disease who is in remission?",
    choices: [
        "Consume a balanced diet while avoiding foods that trigger symptoms.",
        "Continue a strict clear-liquid diet.",
        "Avoid all dairy products permanently.",
        "Eat only low-residue foods indefinitely."
    ],
    answer:
        "Consume a balanced diet while avoiding foods that trigger symptoms.",
    rationale:
        "Diet should be individualized. During remission, clients generally return to a balanced diet while avoiding personal trigger foods.",
    takeaway:
        "Diet recommendations differ during remission and acute flares."
},

{
    id: "IBD-022",
    caseId: "IBD-CASE-022",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a client experiencing an acute inflammatory bowel disease flare? Select all that apply.",
    choices: [
        "Monitor intake and output.",
        "Assess stool frequency and appearance.",
        "Monitor daily weight.",
        "Assess for dehydration.",
        "Provide prescribed medications.",
        "Encourage high-fiber snacks."
    ],
    answer: [
        "Monitor intake and output.",
        "Assess stool frequency and appearance.",
        "Monitor daily weight.",
        "Assess for dehydration.",
        "Provide prescribed medications."
    ],
    rationale:
        "Frequent diarrhea places clients at risk for dehydration, electrolyte imbalance, and weight loss. High-fiber foods are generally avoided during acute flares.",
    takeaway:
        "Monitor hydration closely during exacerbations."
},

{
    id: "IBD-023",
    caseId: "IBD-CASE-023",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with ulcerative colitis suddenly develops abdominal distention, fever, tachycardia, and absent bowel sounds. Which complication should the nurse suspect?",
    choices: [
        "Toxic megacolon",
        "Peptic ulcer disease",
        "Appendicitis",
        "Cholecystitis"
    ],
    answer:
        "Toxic megacolon",
    rationale:
        "Severe inflammation may cause paralysis and dilation of the colon, creating a life-threatening emergency known as toxic megacolon.",
    takeaway:
        "Toxic megacolon requires immediate medical intervention."
},

{
    id: "IBD-024",
    caseId: "IBD-CASE-024",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four clients with inflammatory bowel disease. Which client should be seen first?",
    choices: [
        "A client with HR 132/min, BP 82/48 mm Hg, and profuse bloody diarrhea",
        "A client asking for pain medication",
        "A client requesting dietary teaching",
        "A client reporting mild nausea"
    ],
    answer:
        "A client with HR 132/min, BP 82/48 mm Hg, and profuse bloody diarrhea",
    rationale:
        "Profuse bleeding with hypotension and tachycardia indicates possible hypovolemic shock requiring immediate intervention.",
    takeaway:
        "Prioritize signs of shock."
},

{
    id: "IBD-025",
    caseId: "IBD-CASE-025",
    patient: randomPatient(),
    topic: "Inflammatory Bowel Disease",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A client with ulcerative colitis has severe abdominal distention, temperature of 102.4°F (39.1°C), HR 126/min, absent bowel sounds, WBC 18,500/mm³, and increasing abdominal pain. Which nursing intervention is the priority?",
    choices: [
        "Keep the client NPO, notify the provider immediately, initiate IV fluids as prescribed, and prepare for emergency evaluation.",
        "Encourage ambulation to stimulate bowel function.",
        "Administer a laxative.",
        "Provide a high-fiber meal."
    ],
    answer:
        "Keep the client NPO, notify the provider immediately, initiate IV fluids as prescribed, and prepare for emergency evaluation.",
    rationale:
        "The client is demonstrating classic findings of toxic megacolon, a life-threatening emergency that requires bowel rest, aggressive supportive care, and immediate provider intervention.",
    takeaway:
        "Suspected toxic megacolon = NPO, IV support, and immediate intervention."
},

];
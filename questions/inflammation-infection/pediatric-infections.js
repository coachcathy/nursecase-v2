const pediatricInfectionsQuestions = [

{
    id: "PEDINF-001",
    caseId: "PEDINF-CASE-001",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Otitis Media",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most consistent with acute otitis media in a child?",
    choices: [
        "Ear pain with a bulging, erythematous tympanic membrane",
        "White patches on the tongue",
        "Barking cough with inspiratory stridor",
        "Blue lips after feeding"
    ],
    answer:
        "Ear pain with a bulging, erythematous tympanic membrane",
    rationale:
        "Acute otitis media commonly presents with ear pain, fever, irritability, and a bulging, erythematous tympanic membrane.",
    takeaway:
        "Bulging, red tympanic membrane = otitis media."
},

{
    id: "PEDINF-002",
    caseId: "PEDINF-CASE-002",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Hand-Foot-and-Mouth Disease",
    style: "Application",
    difficulty: "ATI",
    bloom: "Understand",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding is expected in a child with hand-foot-and-mouth disease?",
    choices: [
        "Painful oral ulcers with a vesicular rash on the hands and feet",
        "Generalized petechiae with bleeding gums",
        "Productive cough with hemoptysis",
        "Unilateral facial drooping"
    ],
    answer:
        "Painful oral ulcers with a vesicular rash on the hands and feet",
    rationale:
        "Hand-foot-and-mouth disease commonly causes painful oral lesions and a vesicular rash on the hands, feet, and sometimes buttocks.",
    takeaway:
        "HFMD = mouth ulcers + hand and foot rash."
},

{
    id: "PEDINF-003",
    caseId: "PEDINF-CASE-003",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Clinical Manifestations",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are common signs of infection in infants and young children? Select all that apply.",
    choices: [
        "Fever",
        "Poor feeding",
        "Irritability",
        "Lethargy",
        "Decreased urine output",
        "Bradycardia"
    ],
    answer: [
        "Fever",
        "Poor feeding",
        "Irritability",
        "Lethargy",
        "Decreased urine output"
    ],
    rationale:
        "Infants commonly present with nonspecific signs including fever, poor feeding, irritability, lethargy, and decreased urine output.",
    takeaway:
        "Poor feeding and lethargy are significant infection cues in infants."
},

{
    id: "PEDINF-004",
    caseId: "PEDINF-CASE-004",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Diagnostics",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Reduction of Risk Potential",
    question:
        "Which laboratory finding most strongly supports a bacterial infection in a child?",
    choices: [
        "Elevated white blood cell count with neutrophilia",
        "Low serum glucose",
        "Low platelet count",
        "Elevated troponin"
    ],
    answer:
        "Elevated white blood cell count with neutrophilia",
    rationale:
        "Bacterial infections typically cause leukocytosis with increased neutrophils.",
    takeaway:
        "Neutrophils increase with bacterial infections."
},

{
    id: "PEDINF-005",
    caseId: "PEDINF-CASE-005",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which pediatric client should the nurse assess first?",
    choices: [
        "A 2-year-old with fever, petechiae, and lethargy",
        "A child with mild ear pain",
        "A preschooler requesting juice",
        "A school-age child with a runny nose"
    ],
    answer:
        "A 2-year-old with fever, petechiae, and lethargy",
    rationale:
        "Fever with petechiae and lethargy may indicate meningococcal disease or sepsis requiring immediate intervention.",
    takeaway:
        "Petechiae plus fever is a pediatric emergency."
},

{
    id: "PEDINF-006",
    caseId: "PEDINF-CASE-006",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Treatment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention is appropriate for a child with hand-foot-and-mouth disease?",
    choices: [
        "Encourage cool fluids and provide pain management.",
        "Administer antibiotics immediately.",
        "Restrict all oral intake.",
        "Apply topical steroids to every lesion."
    ],
    answer:
        "Encourage cool fluids and provide pain management.",
    rationale:
        "Treatment is supportive and focuses on hydration and pain relief because the disease is viral.",
    takeaway:
        "HFMD treatment is supportive."
},

{
    id: "PEDINF-007",
    caseId: "PEDINF-CASE-007",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Patient Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a parent indicates understanding of antibiotic therapy?",
    choices: [
        "I'll give every dose until the prescription is finished.",
        "I'll stop the medicine when my child feels better.",
        "I'll save the remaining medicine for another illness.",
        "I'll share the medicine with my other child if needed."
    ],
    answer:
        "I'll give every dose until the prescription is finished.",
    rationale:
        "Completing the entire antibiotic course helps prevent recurrence and antibiotic resistance.",
    takeaway:
        "Finish every prescribed antibiotic."
},

{
    id: "PEDINF-008",
    caseId: "PEDINF-CASE-008",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Complications",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which complication is the nurse's highest priority to recognize in a child with a severe infection?",
    choices: [
        "Sepsis",
        "Constipation",
        "Hyperlipidemia",
        "Osteoporosis"
    ],
    answer:
        "Sepsis",
    rationale:
        "Children can deteriorate rapidly from infection to sepsis, making early recognition essential.",
    takeaway:
        "Recognize pediatric sepsis early."
},

{
    id: "PEDINF-009",
    caseId: "PEDINF-CASE-009",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Otitis Media",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which finding suggests that a child with acute otitis media is improving?",
    choices: [
        "Decreased ear pain and resolution of fever",
        "Increasing irritability and persistent fever",
        "Bulging tympanic membrane with purulent drainage",
        "Decreased oral intake and lethargy"
    ],
    answer:
        "Decreased ear pain and resolution of fever",
    rationale:
        "Improvement is indicated by reduced pain, decreased fever, and improved activity level.",
    takeaway:
        "Clinical improvement is more important than appearance alone."
},

{
    id: "PEDINF-010",
    caseId: "PEDINF-CASE-010",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Assessment",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding in an infant with infection requires immediate intervention?",
    choices: [
        "High-pitched cry with a bulging fontanel",
        "Mild rhinorrhea",
        "Temperature of 99.2°F (37.3°C)",
        "Occasional sneezing"
    ],
    answer:
        "High-pitched cry with a bulging fontanel",
    rationale:
        "A bulging fontanel and high-pitched cry may indicate increased intracranial pressure or meningitis and require immediate evaluation.",
    takeaway:
        "Bulging fontanel = pediatric emergency."
},

{
    id: "PEDINF-011",
    caseId: "PEDINF-CASE-011",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A child has a temperature of 104°F (40°C), HR 170/min, delayed capillary refill, and decreased urine output. What is the nurse's priority action?",
    choices: [
        "Assess for sepsis and notify the provider immediately.",
        "Offer the child juice.",
        "Apply a warm blanket.",
        "Document the assessment."
    ],
    answer:
        "Assess for sepsis and notify the provider immediately.",
    rationale:
        "Signs of poor perfusion with high fever suggest pediatric sepsis requiring rapid intervention.",
    takeaway:
        "Poor perfusion plus fever = suspect sepsis."
},

{
    id: "PEDINF-012",
    caseId: "PEDINF-CASE-012",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Vaccination",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which vaccines help reduce the incidence of serious childhood infections? Select all that apply.",
    choices: [
        "Haemophilus influenzae type b (Hib)",
        "Pneumococcal conjugate (PCV)",
        "Measles, mumps, rubella (MMR)",
        "Varicella",
        "DTaP",
        "Tetanus immune globulin"
    ],
    answer: [
        "Haemophilus influenzae type b (Hib)",
        "Pneumococcal conjugate (PCV)",
        "Measles, mumps, rubella (MMR)",
        "Varicella",
        "DTaP"
    ],
    rationale:
        "Routine childhood immunizations significantly reduce the incidence of severe bacterial and viral infections.",
    takeaway:
        "Vaccination is one of the best methods of infection prevention."
},

{
    id: "PEDINF-013",
    caseId: "PEDINF-CASE-013",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Parent Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which statement by a parent requires additional teaching?",
    choices: [
        "I'll give leftover antibiotics if my child develops another fever.",
        "I'll encourage fluids while my child is ill.",
        "I'll monitor my child's temperature.",
        "I'll keep immunizations up to date."
    ],
    answer:
        "I'll give leftover antibiotics if my child develops another fever.",
    rationale:
        "Antibiotics should never be reused or shared because the illness may not be bacterial and improper use contributes to resistance.",
    takeaway:
        "Never use leftover antibiotics."
},

{
    id: "PEDINF-014",
    caseId: "PEDINF-CASE-014",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Dehydration",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding indicates worsening dehydration in a child with gastroenteritis?",
    choices: [
        "Sunken eyes with delayed capillary refill",
        "Moist mucous membranes",
        "Strong peripheral pulses",
        "Normal urine output"
    ],
    answer:
        "Sunken eyes with delayed capillary refill",
    rationale:
        "Sunken eyes, poor perfusion, and delayed capillary refill are signs of moderate to severe dehydration.",
    takeaway:
        "Children dehydrate rapidly."
},

{
    id: "PEDINF-015",
    caseId: "PEDINF-CASE-015",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 3-year-old develops fever, lethargy, tachycardia, prolonged capillary refill, and cool extremities after several days of illness. Which complication should the nurse suspect?",
    choices: [
        "Pediatric sepsis",
        "Constipation",
        "Appendicitis",
        "Acute asthma exacerbation"
    ],
    answer:
        "Pediatric sepsis",
    rationale:
        "Poor perfusion with fever and lethargy are classic findings of pediatric sepsis requiring rapid treatment.",
    takeaway:
        "Children compensate until they suddenly deteriorate."
},

{
    id: "PEDINF-016",
    caseId: "PEDINF-CASE-016",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four pediatric clients. Which child should be assessed first?",
    choices: [
        "A toddler with fever, mottled skin, delayed capillary refill, and increasing lethargy",
        "A child requesting a popsicle",
        "A preschooler with mild ear pain",
        "A school-age child with a low-grade fever and sore throat"
    ],
    answer:
        "A toddler with fever, mottled skin, delayed capillary refill, and increasing lethargy",
    rationale:
        "Mottled skin, poor perfusion, and lethargy are signs of pediatric septic shock and require immediate intervention.",
    takeaway:
        "Poor perfusion always takes priority in children."
},

{
    id: "PEDINF-017",
    caseId: "PEDINF-CASE-017",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Meningitis",
    style: "Application",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which assessment finding is most concerning for bacterial meningitis in an infant?",
    choices: [
        "Bulging fontanel with poor feeding and a high-pitched cry",
        "Clear nasal drainage",
        "Dry cough and hoarse voice",
        "Mild diarrhea after eating"
    ],
    answer:
        "Bulging fontanel with poor feeding and a high-pitched cry",
    rationale:
        "Infants with meningitis often present with nonspecific findings such as poor feeding, lethargy, bulging fontanel, irritability, and a high-pitched cry.",
    takeaway:
        "Meningitis often presents differently in infants than in older children."
},

{
    id: "PEDINF-018",
    caseId: "PEDINF-CASE-018",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Complications",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Physiological Integrity",
    question:
        "Which findings are concerning for pediatric sepsis? Select all that apply.",
    choices: [
        "Tachycardia",
        "Delayed capillary refill",
        "Cool, mottled skin",
        "Altered mental status",
        "Decreased urine output",
        "Bounding pulses with warm skin"
    ],
    answer: [
        "Tachycardia",
        "Delayed capillary refill",
        "Cool, mottled skin",
        "Altered mental status",
        "Decreased urine output"
    ],
    rationale:
        "Poor perfusion, altered mental status, tachycardia, oliguria, and delayed capillary refill are concerning findings in pediatric sepsis.",
    takeaway:
        "Poor perfusion is a hallmark of pediatric septic shock."
},

{
    id: "PEDINF-019",
    caseId: "PEDINF-CASE-019",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Fever Management",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing intervention is most appropriate for a child with a temperature of 102.7°F (39.3°C)?",
    choices: [
        "Encourage fluids and administer prescribed antipyretics.",
        "Cover the child with several blankets.",
        "Administer aspirin.",
        "Restrict oral fluids."
    ],
    answer:
        "Encourage fluids and administer prescribed antipyretics.",
    rationale:
        "Children with fever should receive hydration and prescribed fever-reducing medications such as acetaminophen or ibuprofen (when appropriate). Aspirin should be avoided because of the risk of Reye syndrome.",
    takeaway:
        "Hydration and antipyretics are the mainstays of fever management."
},

{
    id: "PEDINF-020",
    caseId: "PEDINF-CASE-020",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Priority",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "Which pediatric client requires immediate assessment?",
    choices: [
        "A child with fever, stiff neck, and a petechial rash",
        "A child with mild nasal congestion",
        "A preschooler with a temperature of 100.2°F (37.9°C)",
        "A school-age child requesting a snack"
    ],
    answer:
        "A child with fever, stiff neck, and a petechial rash",
    rationale:
        "Fever, nuchal rigidity, and petechiae are concerning for meningococcal meningitis and require immediate intervention.",
    takeaway:
        "Petechial rash plus fever should always raise concern for meningococcal disease."
},

{
    id: "PEDINF-021",
    caseId: "PEDINF-CASE-021",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Parent Education",
    style: "Application",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Health Promotion and Maintenance",
    question:
        "Which parent statement indicates correct understanding of fever management at home?",
    choices: [
        "I'll encourage fluids and monitor my child's activity level.",
        "I'll give aspirin for every fever.",
        "I'll bundle my child in heavy blankets.",
        "I'll stop fluids until the fever resolves."
    ],
    answer:
        "I'll encourage fluids and monitor my child's activity level.",
    rationale:
        "Hydration and monitoring are important during illness. Aspirin should not be given to children because of the risk of Reye syndrome.",
    takeaway:
        "Avoid aspirin in children with viral illnesses."
},

{
    id: "PEDINF-022",
    caseId: "PEDINF-CASE-022",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Nursing Care",
    style: "SATA",
    difficulty: "ATI",
    bloom: "Apply",
    nclexCategory: "Physiological Integrity",
    question:
        "Which nursing interventions are appropriate for a child admitted with a serious infection? Select all that apply.",
    choices: [
        "Monitor vital signs frequently.",
        "Assess hydration status.",
        "Monitor intake and output.",
        "Administer prescribed antibiotics promptly.",
        "Assess neurologic status.",
        "Delay antibiotics until culture results return."
    ],
    answer: [
        "Monitor vital signs frequently.",
        "Assess hydration status.",
        "Monitor intake and output.",
        "Administer prescribed antibiotics promptly.",
        "Assess neurologic status."
    ],
    rationale:
        "Children can deteriorate quickly. Frequent assessment, hydration monitoring, prompt antibiotic administration after cultures when ordered, and neurologic assessment are essential.",
    takeaway:
        "Frequent reassessment is critical in pediatric infections."
},

{
    id: "PEDINF-023",
    caseId: "PEDINF-CASE-023",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Clinical Judgment",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 4-year-old has fever, tachycardia, hypotension, prolonged capillary refill, decreased urine output, and altered mental status. Which complication should the nurse suspect?",
    choices: [
        "Septic shock",
        "Asthma exacerbation",
        "Appendicitis",
        "Viral gastroenteritis"
    ],
    answer:
        "Septic shock",
    rationale:
        "Hypotension with poor perfusion and altered mental status indicates progression from sepsis to septic shock.",
    takeaway:
        "Hypotension in pediatric sepsis is a late and dangerous finding."
},

{
    id: "PEDINF-024",
    caseId: "PEDINF-CASE-024",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Priority Assessment",
    style: "Priority",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Safe and Effective Care Environment",
    question:
        "The nurse receives report on four pediatric clients. Which child should be assessed first?",
    choices: [
        "A child with BP 72/38 mm Hg, HR 176/min, cool extremities, and lethargy",
        "A child requesting a popsicle",
        "A child with mild otitis media",
        "A child with a low-grade fever after immunization"
    ],
    answer:
        "A child with BP 72/38 mm Hg, HR 176/min, cool extremities, and lethargy",
    rationale:
        "These findings indicate pediatric septic shock with poor tissue perfusion requiring immediate intervention.",
    takeaway:
        "Shock is always the highest priority."
},

{
    id: "PEDINF-025",
    caseId: "PEDINF-CASE-025",
    patient: randomPatient(),
    topic: "Pediatric Infections",
    subtopic: "Comprehensive Review",
    style: "NGN",
    difficulty: "ATI",
    bloom: "Analyze",
    nclexCategory: "Clinical Judgment",
    question:
        "A 2-year-old arrives in the emergency department with a temperature of 104.2°F (40.1°C), HR 182/min, RR 42/min, BP 70/36 mm Hg, capillary refill of 5 seconds, mottled skin, and decreased urine output. Which nursing intervention is the priority?",
    choices: [
        "Activate the pediatric sepsis protocol, obtain vascular access, begin rapid fluid resuscitation and antibiotics as prescribed, and notify the provider immediately.",
        "Administer an oral antipyretic and reassess in one hour.",
        "Offer clear liquids and monitor the child.",
        "Place the child in a warm bath."
    ],
    answer:
        "Activate the pediatric sepsis protocol, obtain vascular access, begin rapid fluid resuscitation and antibiotics as prescribed, and notify the provider immediately.",
    rationale:
        "The child is demonstrating septic shock with profound hypoperfusion. Rapid recognition and treatment are essential to improve outcomes.",
    takeaway:
        "Early pediatric sepsis recognition and immediate intervention save lives."
},

];
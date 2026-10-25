// NUR 114 | Medical Emergency Part 1 | Compatible with NurseCase text-answer grading
const medicalEmergencyPreparednessQuestions = 
[
  {
    "id": "MED-EMERG-001",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "After a mass-casualty incident, a walking client has superficial cuts and stable vital signs. Which triage category is most appropriate?",
    "choices": [
      "Red",
      "Yellow",
      "Green",
      "Black"
    ],
    "answer": "Green",
    "rationale": "Green identifies ambulatory patients with minor injuries who can safely wait."
  },
  {
    "id": "MED-EMERG-002",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A victim has uncontrolled external hemorrhage but is breathing and may survive with immediate intervention. Which tag is appropriate?",
    "choices": [
      "Red",
      "Yellow",
      "Green",
      "Black"
    ],
    "answer": "Red",
    "rationale": "Red indicates a life-threatening condition requiring immediate intervention under disaster triage principles."
  },
  {
    "id": "MED-EMERG-003",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "During a declared hospital disaster, who directs the overall hospital emergency response?",
    "choices": [
      "Public information officer",
      "Hospital incident commander",
      "Transport aide",
      "Unit secretary"
    ],
    "answer": "Hospital incident commander",
    "rationale": "The hospital incident commander has overall authority for activating and coordinating the hospital response."
  },
  {
    "id": "MED-EMERG-004",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A nurse is assigned as the triage officer. Which responsibility is appropriate?",
    "choices": [
      "Release press statements",
      "Reassess incoming victims and assign care areas",
      "Approve all hospital budgets",
      "Lead only postevent counseling"
    ],
    "answer": "Reassess incoming victims and assign care areas",
    "rationale": "The triage officer reevaluates incoming patients and directs them to care areas based on acuity."
  },
  {
    "id": "MED-EMERG-005",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which activities belong to the preparedness phase? Select all that apply.",
    "choices": [
      "Conducting disaster drills",
      "Building a family communication plan",
      "Assembling an emergency go-bag",
      "Treating victims during the active disaster",
      "Training staff on emergency roles"
    ],
    "answer": [
      "Conducting disaster drills",
      "Building a family communication plan",
      "Assembling an emergency go-bag",
      "Training staff on emergency roles"
    ],
    "rationale": "Preparedness consists of training, drills, planning and supply readiness; active treatment belongs to response."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-006",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A disaster nurse must choose care for many casualties with limited resources. Which principle guides decisions?",
    "choices": [
      "First come, first served",
      "Treat minor injuries first",
      "Always treat the youngest first",
      "Greatest good for the greatest number"
    ],
    "answer": "Greatest good for the greatest number",
    "rationale": "Mass casualty triage allocates limited resources to maximize overall survival."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-007",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A walking patient with a minor forearm abrasion arrives after an explosion. Which triage category is likely?",
    "choices": [
      "Green",
      "Red",
      "Immediate resuscitation",
      "Black"
    ],
    "answer": "Green",
    "rationale": "Walking wounded with minor injuries are generally categorized as green."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-008",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A patient with severe bleeding that can be controlled rapidly is found during mass casualty triage. Which category may apply?",
    "choices": [
      "Red",
      "Black",
      "Routine outpatient",
      "Green"
    ],
    "answer": "Red",
    "rationale": "Life-threatening but potentially treatable injuries are prioritized as red."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-009",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A patient has a closed fracture and stable breathing and circulation after a disaster. Which category is most likely?",
    "choices": [
      "Black",
      "Yellow",
      "Red",
      "No assessment needed"
    ],
    "answer": "Yellow",
    "rationale": "Serious but not immediately life-threatening injuries often fall in delayed or yellow triage."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-010",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which phase of disaster management involves identifying hazards and reducing future losses?",
    "choices": [
      "Mitigation",
      "Response",
      "Debriefing only",
      "Recovery"
    ],
    "answer": "Mitigation",
    "rationale": "Mitigation reduces the impact of hazards before a disaster occurs."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-011",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A hospital conducts annual evacuation drills and inventories emergency supplies. Which phase is illustrated?",
    "choices": [
      "Active response",
      "Preparedness",
      "Recovery",
      "Damage repair"
    ],
    "answer": "Preparedness",
    "rationale": "Training, planning, and supply readiness are preparedness activities."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-012",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "An earthquake has just occurred and the emergency department activates surge protocols. Which phase is underway?",
    "choices": [
      "Long-term recovery only",
      "Routine operations",
      "Response",
      "Mitigation only"
    ],
    "answer": "Response",
    "rationale": "Response comprises immediate actions during and after the event."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-013",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A hospital restores services and supports staff after a disaster. Which phase is illustrated?",
    "choices": [
      "Initial hazard identification",
      "Mitigation only",
      "Triage only",
      "Recovery"
    ],
    "answer": "Recovery",
    "rationale": "Recovery focuses on restoring systems and community functioning."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-014",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "What does HICS provide during a hospital disaster?",
    "choices": [
      "A system used only outside hospitals",
      "A replacement for clinical judgment",
      "Clear command roles and coordinated operations",
      "An informal volunteer-only structure"
    ],
    "answer": "Clear command roles and coordinated operations",
    "rationale": "The Hospital Incident Command System standardizes leadership and responsibilities."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-015",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Who is responsible for overall hospital incident leadership?",
    "choices": [
      "The nearest family member",
      "Incident Commander",
      "Every individual nurse independently",
      "A random volunteer"
    ],
    "answer": "Incident Commander",
    "rationale": "The Incident Commander directs the overall incident response structure."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-016",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which HICS role communicates verified information to the media and public?",
    "choices": [
      "Supply courier",
      "Bedside nurse alone",
      "Public Information Officer",
      "Triage Officer"
    ],
    "answer": "Public Information Officer",
    "rationale": "The PIO coordinates accurate public communications."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-017",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which role evaluates and categorizes incoming casualties?",
    "choices": [
      "Payroll clerk",
      "Triage Officer",
      "Food services manager",
      "Public Information Officer"
    ],
    "answer": "Triage Officer",
    "rationale": "The triage function rapidly sorts patients according to urgency and available resources."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-018",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A nurse receives conflicting orders from multiple people during a disaster. What system feature should resolve this?",
    "choices": [
      "Established chain of command",
      "Independent guessing",
      "Social media instructions",
      "Patient family vote"
    ],
    "answer": "Established chain of command",
    "rationale": "HICS uses defined reporting relationships to reduce confusion."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-019",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A hospital needs to track bed capacity, staffing, and supplies during a surge. Which function is essential?",
    "choices": [
      "Routine billing only",
      "Coordinated resource management",
      "Stopping documentation entirely",
      "Waiting until all patients arrive"
    ],
    "answer": "Coordinated resource management",
    "rationale": "Incident management depends on tracking and allocating resources."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-020",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A nurse is preparing a household go-bag. What duration of essential supplies is emphasized in the PPT?",
    "choices": [
      "One month of frozen meals only",
      "Three days",
      "One hour",
      "No personal supplies"
    ],
    "answer": "Three days",
    "rationale": "The lecture emphasizes a three-day emergency supply for household members."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-021",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which item belongs in a personal emergency go-bag?",
    "choices": [
      "Only decorative items",
      "No identification",
      "Water, medications, flashlight, and essential documents",
      "Only fresh perishable food"
    ],
    "answer": "Water, medications, flashlight, and essential documents",
    "rationale": "Emergency kits should support basic needs and communication during disruption."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-022",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A nurse wants to ensure availability for disaster duty. What personal preparation is most useful?",
    "choices": [
      "Assume all schools remain open",
      "Create a family communication and caregiving plan in advance",
      "Wait until a disaster begins",
      "Avoid discussing emergencies"
    ],
    "answer": "Create a family communication and caregiving plan in advance",
    "rationale": "Personal plans help staff respond while ensuring family needs are addressed."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-023",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which action should occur before a disaster to improve hospital readiness?",
    "choices": [
      "Participate in drills and review emergency roles",
      "Ignore hazard assessments",
      "Invent new roles during a crisis",
      "Avoid learning evacuation routes"
    ],
    "answer": "Participate in drills and review emergency roles",
    "rationale": "Preparedness training makes response more coordinated and effective."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-024",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "During mass casualty care, a patient's condition worsens after initial sorting. What should the triage nurse do?",
    "choices": [
      "Discharge automatically",
      "Keep the original tag regardless of change",
      "Wait for routine rounds",
      "Reassess and update triage priority"
    ],
    "answer": "Reassess and update triage priority",
    "rationale": "Triage is dynamic and must reflect changing patient conditions."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-025",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A patient is contaminated by an unknown hazardous substance. What is the first concern for responders?",
    "choices": [
      "Skipping decontamination protocols",
      "Moving contamination into clean treatment areas",
      "Immediate unprotected contact",
      "Scene safety and appropriate protective equipment"
    ],
    "answer": "Scene safety and appropriate protective equipment",
    "rationale": "Responder safety and contamination control prevent secondary exposures."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-026",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which communication practice supports incident command?",
    "choices": [
      "Bypass all supervisors",
      "Issue conflicting public statements",
      "Share unverified rumors",
      "Use designated reporting channels and concise verified updates"
    ],
    "answer": "Use designated reporting channels and concise verified updates",
    "rationale": "Reliable communication is essential to coordinated disaster operations."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-027",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A hospital disaster plan identifies an alternate care site and patient transport routes. Which principle is being addressed?",
    "choices": [
      "Financial billing only",
      "Surge and evacuation planning",
      "Routine nutrition counseling",
      "Individual outpatient scheduling"
    ],
    "answer": "Surge and evacuation planning",
    "rationale": "Alternative care sites and transport plans support safe continuity during disasters."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-028",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "Which patient should generally be reassessed first in a mass casualty receiving area?",
    "choices": [
      "A stable patient requesting water",
      "A patient with a minor bruise",
      "A patient with increasing respiratory distress",
      "A patient walking with a superficial cut"
    ],
    "answer": "A patient with increasing respiratory distress",
    "rationale": "New respiratory compromise is a time-critical threat and may change triage priority."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-029",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "A nurse notices a shortage of oxygen cylinders during an incident. What is the best action?",
    "choices": [
      "Keep the information private",
      "Stop all oxygen therapy independently",
      "Post unverified supply claims online",
      "Report through the incident command logistics pathway"
    ],
    "answer": "Report through the incident command logistics pathway",
    "rationale": "Resource shortages should be escalated through the designated incident management structure."
  },
  {
    "id": "MED-EMERGENCYPREPAREDNESS-030",
    "topic": "Emergency Preparedness",
    "subtopic": "Emergency Preparedness",
    "question": "After a mass casualty event, which nursing activity supports recovery?",
    "choices": [
      "Discard incident documentation",
      "Ignore staff support needs",
      "Avoid all review",
      "Participate in debriefing and identify process improvements"
    ],
    "answer": "Participate in debriefing and identify process improvements",
    "rationale": "Debriefing and staff support improve recovery and future preparedness."
  }
];

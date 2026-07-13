const adultFirstNames = [
  "James", "Michael", "Robert", "David", "Daniel",
  "William", "Anthony", "Christopher", "Emily", "Sarah",
  "Olivia", "Sophia", "Angela", "Rachel", "Lauren",
  "Patricia", "Hannah", "Grace", "Carla", "Nora"
];

const adultLastNames = [
  "Smith", "Johnson", "Brown", "Williams", "Jones",
  "Garcia", "Miller", "Davis", "Wilson", "Taylor",
  "Moore", "Anderson", "Thomas", "Jackson", "White"
];

function randomPatient() {
  const firstName =
    adultFirstNames[Math.floor(Math.random() * adultFirstNames.length)];

  const lastName =
    adultLastNames[Math.floor(Math.random() * adultLastNames.length)];

  return `${firstName} ${lastName}`;
}
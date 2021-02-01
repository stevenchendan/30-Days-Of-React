function determineGrade(score) {
  let result = "";
  switch (score) {
    case (score <= 100 && score >= 80):
      result = "A";
      break;
    case (score <= 89 && score >= 70):
      result = "B";
      break;
    case (score <= 69 && score >= 60):
      result = "C";
      break;
    case (score <= 59 && score >= 50):
      result = "D";
      break;
    case (score <= 49 && score >= 0):
      result = "F";
      break;
    default:
      retult = "Invalid";
      break;
  }
  return result;
}

console.log(determineGrade(Math.random(0, 100)));

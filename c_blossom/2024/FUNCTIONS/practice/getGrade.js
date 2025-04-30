/*
c. Create a function `getGrade` that takes a score as input and returns a letter grade (A, B, C,
D, or F) based on the following scale:
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: 0-59
*/

function getGrade(score) {
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(59));

function grade(score) {
  let studentGrade;

  studentGrade =
    score >= 90 && score <= 100
      ? "A"
      : score >= 80 && score <= 89
      ? "B"
      : score >= 70 && score <= 79
      ? "C"
      : score <= 69 && score >= 60
      ? "D"
      : "F";

  return studentGrade;
}

console.log(grade(89)); // F

// ============================================================
// SECTION 1: Student Profile & Variable Declarations (Correct)
// ============================================================
const studentName = "Alex";
const studentId = 101;
const isEnrolled = true;

console.log("Student: " + studentName);
console.log(typeof studentName);

// ============================================================
// SECTION 2: Scores & Grade Calculation (Calculations done, missing branches)
// ============================================================
const scores = [85, 90, 78, 92];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore += scores[i];
}

const average = totalScore / scores.length;
console.log("Average: " + average);

// Note: Section 3 Budget Tracking was not attempted by student

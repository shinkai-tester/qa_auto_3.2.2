function findTopScorer(students) {
  let maxScore = 0;
  let bestStudents = [];

  for (let student of students) {
    if (student.score > maxScore) {
      maxScore = student.score;
      bestStudents = [student];
    } else if (student.score === maxScore && maxScore !== 0) {
      bestStudents.push(student);
    }
  }

  if (maxScore > 0) {
    bestStudents.forEach((student) =>
      console.log(
        `Congratulations, ${student.name}! You have achieved the highest score with ${student.score} points. Keep up the excellent work!`
      )
    );
  } else {
    console.log("No top scorer identified this time.");
  }
}

module.exports = findTopScorer;

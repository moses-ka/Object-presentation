
const obj = { key: "value" };

console.dir(obj);

let school = {
  students: {
    "noor ahmadi": { scores: [68, 40] },
    "sara jamal": { scores: [30, 60] },
    "mohammed sameer": { scores: [80, 90] },
    "ahmed saman": { scores: [90, 87] },
    "ahmed jamal": { scores: [67, 55] },
    "namiq sam": { scores: [78, 61] },
    "feras ali": { scores: [71, 63] },
    "laila khan": { scores: [85, 92] },
    "ali reza": { scores: [94, 89] },
    "fatima abdullah": { scores: [77, 81] },
  },
  teacher: "jamana ali",
  subject: "math",

  addScore: function (studentName, score) {
    this.students[studentName].scores.push(score);
  },
  callAverage: function (studentName) {
    let studentScores = this.students[studentName].scores;
    let average = studentScores.reduce((a, b) => a + b, 0) / studentScores.length;
    average = Math.round(average);
    return average;
  },
   addStudent(name, scores) {
    school.students[name] = { scores };
  }
  
};


console.log(school.students['feras ali'].scores);
school.addScore('feras ali', 80);
console.log(school.students['feras ali'].scores);

console.log(school.callAverage('feras ali'));

school.addStudent('ali mousa', [89, 95,77]);

console.log(school.callAverage('ali mousa'));
// const cards = ["queen", "queen", "king", "king"];
// const cardsInPlay = [];

// const checkForMatch = () => {
//   if (cardsInPlay.length === 2) {
//     if (cardsInPlay[0] === cardsInPlay[1]) {
//       console.log("You found a match!");
//     } else {
//       console.log("Sorry, try again.");
//     }
//   } else console.log("Pick another card");
// };
// function flipCard(cardId) {
//   console.log("User flipped " + cards[cardId]);
//   cardsInPlay.push(cards[cardId]);
//   checkForMatch();
// }

// flipCard(0);
// flipCard(2);

/////////////   TEST     ///////

const school = {
  teachers: { Sue: "1A", Joe: ["2B", "3C", "4D"] },
  classes: {
    "1A": {
      students: [
        { name: "Apple", gender: "female" },
        { name: "Banana", gender: "male" }
      ]
    },
    "2B": {
      students: [
        { name: "Charlie", gender: "female" },
        { name: "Dennis", gender: "male" }
      ]
    },
    "3C": {
      students: [
        { name: "Zoey", gender: "female" },
        { name: "Yelle", gender: "male" }
      ]
    },
    "4D": {
      students: [
        { name: "Eee", gender: "female" },
        { name: "Fff", gender: "male" }
      ]
    }
  }
};

// Q1. Console log all students in Sue's class
for (let i = 0; i < school.classes["1A"].students.length; i++) {
  const sueClasses = school.classes["1A"];
  sueStudentsName = sueClasses.students[i].name;
  sueStudentsGender = sueClasses.students[i].gender;
  console.log(
    school.teachers.Sue + " " + sueStudentsName + " " + sueStudentsGender
  );
}
// Q2. Console log all students in Joe's classes
// const joeStudentsTwoB = school.classes["2B"].students;
// const joeStudentsThreeC = school.classes["3C"].students;
// console.log(joeStudentsTwoB);
// console.log(joeStudentsThreeC);
// for (let i = 0; i < school.teachers.Joe.length; i++) {
//   console.log("here", school.teachers.Joe.length,i)
//   for (let j = 0; j < joeStudentsTwoB.length; j++) {
//     console.log(
//       school.teachers.Joe[i] +
//         " " +
//         joeStudentsTwoB[j].name +
//         " " +
//         joeStudentsTwoB[j].gender
//     );
//   }
//   if ((j = joeStudentsTwoB.length - 1)) {
//     i = i + 1;
//   }
//   for (let k = 0; k < joeStudentsThreeC.length; k++) {
//     console.log(
//       school.teachers.Joe[i] +
//         " " +
//         joeStudentsThreeC[k].name +
//         " " +
//         joeStudentsThreeC[k].gender
//     );
//   }
// }
console.log("test 2222222222222")
for (let i = 0; i < school.teachers.Joe.length; i++) {

  const cla = school.teachers.Joe[i]; // this get each class of Joe
  console.log(cla)
  const studentsInClass = school.classes[cla].students;

  for (let j = 0; j < studentsInClass.length; j++) {
    const student = studentsInClass[j];
   // console.log(cla + " " + student.name + " " + student.gender);
  }
}

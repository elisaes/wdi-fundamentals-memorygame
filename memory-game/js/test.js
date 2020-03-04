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
  teachers: { Sue: "1A", Joe: ["2B", "3C"] },
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
    }
  }
};

// Q1. Console log all students in Sue's class


// Q2. Console log all students in Joe's classes

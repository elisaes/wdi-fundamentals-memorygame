const cards = ["queen", "king", "queen", "king"];
const cardsInPlay = [];
const cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("user flipped queen");
const cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king");
if (cardsInPlay.length === 2) {if (cardOne === cardTwo){console.log("match")} else (console.log("looser, pick another card"));} else (console.log("pick another card"));
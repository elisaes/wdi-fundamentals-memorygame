const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonts",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonts",
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = [];

const checkForMatch = () => {
  console.log(cardsInPlay);
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  } else alert("Pick another card");
};
function flipCard() {
  const cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit)
  checkForMatch();
}
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement("img");
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}
function resetCards() {
  for (let j = 0; j < cards.length; j ++) {
  const cardBack = document.getElementsByTagName("img")[j];
  cardBack.setAttribute("src","images/back.png");
  cardsInPlay = [];
      }
  console.log(cards);
  const resetSort = document.getElementById("reset");
  resetSort.addEventListener("click", resetCards);

}

createBoard();
resetCards();

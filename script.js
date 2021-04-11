const gameContainer = document.getElementById("game");

let cardsSelected = 0;
let flippedCard1 = null;
let flippedCard2 = null;


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    
    
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  
  if(event.target.classList.contains('selected')) return;
  //clicking a card should change bkrnd to be color of its card class

  

  
  if(cardsSelected < 2){//change at most 2 cards at once
    cardsSelected++;
    event.target.classList.add('selected'); //dont need document.querySelector; event has the HTML you want already "selected"
    //abv clicking a card should change bkrnd to be color of its card class

    if(cardsSelected === 1){
      flippedCard1 = event.target;

    }else{
      flippedCard2 = event.target;

    }
    console.log(cardsSelected);
  }

  
  if(cardsSelected === 2){
    
    console.log(flippedCard1.className, flippedCard2.className)
    if(flippedCard1.className !== flippedCard2.className){
      setTimeout(() => {
        cardsSelected = 0;
        flippedCard1.classList.remove('selected');
        flippedCard2.classList.remove('selected');
       
        flippedCard1 = null;
        flippedCard2 = null;

      }, 1000);
    }else{
      cardsSelected = 0;
      flippedCard1.removeEventListener("click", handleCardClick);
      flippedCard2.removeEventListener("click", handleCardClick);
      flippedCard1 = null;
      flippedCard2 = null;

    }
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);



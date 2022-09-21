//Creating of a random number
// var randomNumber1 = Math.random();
//Scaling of the Random randomNumber
var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //between 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src" , randomImageSource);


// ---- FOR DICE NUMBER TWO----//

var randomNumberTwo = Math.floor(Math.random() * 6) + 1 ;

var diceImageTwo = "dice" + randomNumberTwo + ".png";

var randomDiceImageSourceTwo = "images/" + diceImageTwo;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src" , randomDiceImageSourceTwo);


if(randomNumber1 === randomNumberTwo) {
  var heading = document.querySelector("h1").innerHTML = " 🚩Draw !";

}

else if (randomNumber1 > randomNumberTwo) {
  var heading = document.querySelector("h1").innerHTML = "🚩 Player 1 is the Winner!";

}

else {
  var heading = document.querySelector("h1").innerHTML = "🚩 Player 2 is the Winner!";
}

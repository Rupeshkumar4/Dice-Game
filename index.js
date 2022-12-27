var randomNumber1 = Math.floor(Math.random()*6)+1; // random number 1 to 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png

var randomSourceImages = "images/" + randomDiceImage //images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomSourceImages);

// ==========================================================================================================

var randomNumber2 = Math.floor(Math.random()*6)+1;


var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//  or
// var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// var randomSourceImages2 = "images/" +randomDiceImage2;

// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomSourceImages2);

// =======================================================================================================================

//winner condations......

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="🌝 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🌚";
}
else{
    document.querySelector("h1").innerHTML = "Draw!! 🌗";
}


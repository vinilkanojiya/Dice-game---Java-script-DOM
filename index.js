var dice = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

//code for player 1 tile
var randomNumber1  = Math.round(Math.random()*5);
var result1 = "./images/" + dice[randomNumber1];
document.querySelector(".img1").setAttribute("src", result1);

//code for player 2 tile
var randomNumber2  = Math.round(Math.random()*5);
var result2 = "./images/" + dice[randomNumber2];
document.querySelector(".img2").setAttribute("src", result2);

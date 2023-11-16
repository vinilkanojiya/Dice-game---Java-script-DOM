var dice = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

//code for player 1 tile
var randomNumber1  = Math.round(Math.random()*5);
var result1 = "./images/" + dice[randomNumber1];
document.querySelector(".img1").setAttribute("src", result1);

//code for player 2 tile
var randomNumber2  = Math.round(Math.random()*5);
var result2 = "./images/" + dice[randomNumber2];
document.querySelector(".img2").setAttribute("src", result2);
var win;

if(randomNumber1<randomNumber2)
{
    win = "Winner is Player 2";
}
else if (randomNumber1>randomNumber2) {

    win = "Winner is player 1";
}
else
{
    win = "It's TIE."
}

console.log(randomNumber1, randomNumber2, win);

document.getElementsByTagName("h1")[0].textContent = win; 
// same thing we can do with inner HTML but the text content only focuses on text inside the tag and inner HTML focuses on the whole code.

//WITHOUT ARRAY
/*
//code for player 1 tile
var randomNumber1  = Math.floor(Math.random()*6) + 1;
var result1 = "./images/dice"+ randomNumber1+".png" ;
document.querySelector(".img1").setAttribute("src", result1);

//code for player 2 tile
var randomNumber2  = Math.floor(Math.random()*6) + 1;
var result2 = "./images/dice" + randomNumber2+".png" ;
document.querySelector(".img2").setAttribute("src", result2);
var win;

if(randomNumber1<randomNumber2)
{
    win = "Winner is Player 2";
}
else if (randomNumber1>randomNumber2) {

    win = "Winner is player 1";
}
else
{
    win = "It's TIE."
}

console.log(randomNumber1, randomNumber2, win);

document.getElementsByTagName("h1")[0].textContent = win; 
// same thing we can do with innerhtml but the text content only focus on text of inside the tag and innerhtml focus on whole code.


*/

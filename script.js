var randomnumber1=Math.floor(Math.random()*6)+1;

var randomdice="dice"+randomnumber1+".png";

var randomimage="images/" + randomdice;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimage2="images/dice"+ randomnumber2 + ".png";

document.querySelectorAllimage2("img")[1].setAttribute("src",randomimage2);


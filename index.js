var randomNo1 = Math.floor(Math.random() * 6) + 1;
var randomImg = "dice" + randomNo1 + ".png";
var imageSource = "images/" + randomImg;
document.querySelectorAll("img")[0].setAttribute("src", imageSource);
var randomNo2 = Math.floor(Math.random() * 6) + 1;
var randomImg = "dice" + randomNo2 + ".png";
var imageSource = "images/" + randomImg;
document.querySelectorAll("img")[1].setAttribute("src", imageSource);
if (randomNo1 > randomNo2) {
  document.querySelector("h1").innerHTML = "player 1 wins";
} else if (randomNo2 > randomNo1) {
  document.querySelector("h1").innerHTML = "player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "draw ";
}

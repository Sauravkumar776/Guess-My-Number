"use strict";

let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high = 0;
// function hide(){
//     var x = document.getElementById("between");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//       } else {
//         x.style.display = "none";
//       }
// }
// document.querySelector(".number").textContent = secret;
document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No Number!";
    }
    else if (guess === secret) {
        document.querySelector(".message").textContent = "🎉 Correct Number";
        document.querySelector(".Score").textContent = score;
        document.querySelector(".number").textContent = "🎉🎉🎉" + secret;
        if (score > high) {
            high = score;
            document.querySelector(".highscore").textContent = score;
        }
        else {
            document.querySelector(".highscore").textContent = high;
        }
    } else if (guess > secret) {
        if (score > 1) {
            document.querySelector(".message").textContent = "☝ Too High";
            score--;
            document.querySelector(".Score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game";
            document.querySelector(".Score").textContent = 0;
        }
    }
    else {
        if (score > 1) {
            document.querySelector(".message").textContent = "👇 Too low";
            score--;
            document.querySelector(".Score").textContent = score;
        }
        else {
            document.querySelector(".message").textContent = "💥 You lost the game";
            document.querySelector(".Score").textContent = 0;
        }

    }
});
document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    document.querySelector(".Score").textContent = score;
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...🤔";
   
    document.querySelector(".number").textContent = "Missing Node. ❓"
    document.querySelector(".guess").textContent = " ";

});
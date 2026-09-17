let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")


let score = 0;
let score2 = 0;


function numberHome(){
    score += 1;
    homeScore.textContent = score
}

function number2Home(){
    score += 2;
    homeScore.textContent = score
}

function number3Home(){
    score += 3;
    homeScore.textContent = score
}

function number1Guest(){
    score2 += 1;
    guestScore.textContent = score2
}

function number2Guest(){
    score2 += 2;
    guestScore.textContent = score2
}

function number3Guest(){
    score2 += 3;
    guestScore.textContent = score2
}

function newGame(){
    score = 0;
    score2 = 0;
    homeScore.textContent = score;
    guestScore.textContent = score2
}


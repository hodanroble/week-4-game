var randomNum = "";
var totalScore = 0;
var wins = 0;
var lossess = 0;
var crystal1 = "";
var crystal2 = "";
var crystal3 = "";
var crystal4 = "";


function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min) + min);

};



$("currentScore").innerHTML = totalScore;

function game() {

    if (totalScore === randomNum) {
        wins++;
        alert('You win');
        $('#winner').html(wins);
        newGame();
    } else if (totalScore > randomNum) {
        lossess++;
        alert("you Lose");
        $('#loser').html(lossess);
        newGame();

    }
};

function newGame() {

    randomNum = getRandom(19, 120);
    crystal1 = getRandom(1, 12);
    crystal2 = getRandom(1, 12);
    crystal3 = getRandom(1, 12);
    crystal4 = getRandom(1, 12);
    totalScore = 0;

    $('#TotalRandom').html(randomNum);

    $('#currentScore').html(totalScore);

};

newGame();


$('#red').on('click', function () {


    crystal1 = getRandom(1, 12);
    totalScore = crystal1 + totalScore;
    $("#currentScore").html(totalScore);
    game();
    console.log(crystal1);
    console.log(totalScore);


});

$('#blue').on('click', function () {

    crystal2 = getRandom(1, 12);
    totalScore = crystal2 + totalScore;
    $('#currentScore').html(totalScore);
    game();
    console.log(crystal2);
    console.log(totalScore);

});

$('#green').on('click', function () {

    crystal3 = getRandom(1, 12);
    totalScore = crystal3 + totalScore;
    $('#currentScore').html(totalScore);
    game();
    console.log(crystal3);
    console.log(totalScore);

});

$('#yellow').on('click', function () {

    crystal4 = getRandom(1, 12);
    totalScore = crystal4 + totalScore;
    $('#currentScore').html(totalScore);
    game();
    console.log(crystal4);
    console.log(totalScore);

});
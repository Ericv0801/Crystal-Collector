$(document).ready(function () {

    //Global Variables
    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var targetNumber = [];
    var redCrystal = Math.floor(Math.random() * 12) + 1;
    var blueCrystal = Math.floor(Math.random() * 12) + 1;
    var greenCrystal = Math.floor(Math.random() * 12) + 1;
    var purpleCrystal = Math.floor(Math.random() * 12) + 1;



    targetNumber = Math.floor(Math.random() * 120) + 1



    $("#rNumber").text(targetNumber);
    $("#tScore").text(totalScore);
    $("#winsText").text(wins);
    $("#lossesText").text(losses);

    //resets the game if user wins/losses

    function resetGame() {

        targetNumber = Math.floor(Math.random() * 101) + 19;
        redCrystal = Math.floor(Math.random() * 12) + 1;
        blueCrystal = Math.floor(Math.random() * 12) + 1;
        greenCrystal = Math.floor(Math.random() * 12) + 1;
        purpleCrystal = Math.floor(Math.random() * 12) + 1;
        totalScore = 0;
        $("#rNumber").text(targetNumber);
        $("#tScore").text(totalScore);
        $("#targetNumber").text(targetNumber);

    console.log(totalScore)
    console.log(targetNumber)
    }
    //if user wins
    function win() {

        alert("You win!");
        wins++;
        $("#winsText").text(wins);
        resetGame();
    }
    //if user losses
    function lose() {
        alert("You lose!");
        losses++;
        $("#lossesText").text(losses);
        resetGame();
    }

    $("#redCrystal").on("click", function () {

        totalScore = totalScore + redCrystal

        $("#tScore").text(totalScore);

        if (totalScore === targetNumber) {
            win();
        }
        else if (totalScore > targetNumber) {

            lose();
        }
    });

    $("#blueCrystal").on("click", function () {
        totalScore = totalScore + blueCrystal

        $("#tScore").text(totalScore);

        if (totalScore === targetNumber) {
            win();
        }
        else if (totalScore > targetNumber) {

            lose();
        }


    });

    $("#greenCrystal").on("click", function () {
        totalScore = totalScore + greenCrystal

        $("#tScore").text(totalScore);

        if (totalScore === targetNumber) {
            win();
        }
        else if (totalScore > targetNumber) {

            lose();
        }


    });

    $("#purpleCrystal").on("click", function () {
        totalScore = totalScore + purpleCrystal

        $("#tScore").text(totalScore);

        if (totalScore === targetNumber) {
            win();
        }
        else if (totalScore > targetNumber) {

            lose();
        }


    });


});
$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    var totalScore = [];
    // Set intitial random number to reach:
    var winningNumber = Math.floor(Math.random() * 120) + 19;
    $("#randomnumber-box").html(winningNumber);
    $("#score-box").text("0");

    // // Create initial random number for each Stone:
    var whiteNumber = Math.floor(Math.random() * 12) + 1;
    var purpleNumber = Math.floor(Math.random() * 12) + 1;
    var yellowNumber = Math.floor(Math.random() * 12) + 1;
    var blueNumber = Math.floor(Math.random() * 12) + 1;

    function reset() {
        totalScore = [];
        $("#score-box").text("0");
        winningNumber = Math.floor(Math.random() * 120) + 19;
        $("#randomnumber-box").html(winningNumber);
        whiteNumber = Math.floor(Math.random() * 12) + 1;
        purpleNumber = Math.floor(Math.random() * 12) + 1;
        yellowNumber = Math.floor(Math.random() * 12) + 1;
        blueNumber = Math.floor(Math.random() * 12) + 1;
    };


    // Function to add numbers in totalScore array and will be used to .text to div="score-box"
    function myFunc(total, num) {
        return total + num;
    };

    // When white stone is clicked. Generate a number between 1 to 12. Add number to Total Score;
    $("#white").on("click", function () {
        // console.log("whiteNumber is: " + whiteNumber);
        totalScore.push(whiteNumber);
        // console.log("totalScore is: " + totalScore);
        $("#score-box").text(totalScore.reduce(myFunc, 0));
        checkGameStatus();
    });

    $("#purple").on("click", function () {
        totalScore.push(purpleNumber);
        $("#score-box").text(totalScore.reduce(myFunc, 0));
        checkGameStatus();
    });

    $("#yellow").on("click", function () {
        totalScore.push(yellowNumber);
        $("#score-box").text(totalScore.reduce(myFunc, 0));
        checkGameStatus();
    });

    $("#blue").on("click", function () {
        totalScore.push(blueNumber);
        $("#score-box").text(totalScore.reduce(myFunc, 0));
        checkGameStatus();
    });

    function checkGameStatus() {
        if (totalScore.reduce(myFunc, 0) === winningNumber) {
            wins++;
            $("#wins").html(wins);
            $("#message").text("YOU WIN! 💣");
            reset();
        } else if (totalScore.reduce(myFunc, 0) > winningNumber) {
            losses++;
            $("#losses").text(losses);
            $("#message").text("YOU LOST! 😢");
            reset();
        } else {
            console.log("keep on keepin' on");
        }
    };
});
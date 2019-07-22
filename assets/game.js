window.onload = function () {

    const question = $("#question");
    const questions = ["Where was the entire trilogy of the Lord of the Rings filmed?", "What is the name of the first movie in the trilogy?",
        "In The Fellowship of the Ring, Merry and Pippin are punished for taking some fireworks. What type of punishment do they receive?",
        "What is the name of Gandalf's horse?", "Who is Boromir's brother?"];
    const answers = [["Australia", "United Kingdom", "New Zealand", "Switzerland"], ["The Fellowship of the Ring", "The Hobbit", "The Two Towers", "Return of the King"],
    ["Trimming Hedges", "Cleaning Up After the Party", "Serving Food", "Washing Dishes"], ["Shadowfax", "Elrond", "Staliumon", "Rohan"], ["Gollum", "Faramir", "Aragorn", "Treebeard"]];
    const ring = $("#startbutton");
    const answerDiv = $("#answers");
    const actualAns = $("#actualAnswer");
    const mainTimer = $("#timer");
    const ansOne = $("#answer1");
    const ansTwo = $("#answer2");
    const ansThree = $("#answer3");
    const ansFour = $("#answer4");
    const correctDiv = $("#correct");
    const incorrectDiv = $("#incorrect");

    let counter = 15;
    let questCount = 1;
    let correct = 0;
    let incorrect = 0;

    answerDiv.hide();

    ring.on("click", function () {
        trivia()
        gameTimer();
        // ring.hide();
    });

    function trivia() {
        question.show();
        answerDiv.show();
        mainTimer.show();
        mainTimer.html("Time Remaining: " + counter);
        correctDiv.html("Total Correct: " + correct);
        incorrectDiv.html("Total Incorrect: " + incorrect);

        if (questCount === 1) {
            question.html(questions[0]);
            ansOne.html(answers[0][0]);
            ansTwo.html(answers[0][1]);
            ansThree.html(answers[0][2]);
            ansFour.html(answers[0][3]);
            answerDiv.on("click", function (e) {
                e.target.id === "answer3" ? (correct++ , actualAns.html("You were correct! The answer was 'New Zealand'")) : (incorrect++ , actualAns.html("Sorry! The correct answer was 'New Zealand'"));
                reset();
            })
        }
        else if (questCount === 2) {
            question.html(questions[1]);
            ansOne.html(answers[1][0]);
            ansTwo.html(answers[1][1]);
            ansThree.html(answers[1][2]);
            ansFour.html(answers[1][3]);
            answerDiv.on("click", function (e) {
                e.target.id === "answer1" ? (correct++ , actualAns.html("You were correct! The answer was 'The Fellowship of the Ring'")) : (incorrect++ , actualAns.html("Sorry! The correct answer was 'The Fellowship of the Ring'"));
                reset();
            })
        }
        else if (questCount === 3) {
            question.html(questions[2]);
            ansOne.html(answers[2][0]);
            ansTwo.html(answers[2][1]);
            ansThree.html(answers[2][2]);
            ansFour.html(answers[2][3]);
            answerDiv.on("click", function (e) {
                e.target.id === "answer4" ? (correct++ , actualAns.html("You were correct! The answer was 'Washing Dishes'")) : (incorrect++ , actualAns.html("Sorry! The correct answer was 'Washing Dishes'"));
                reset();
            })
        }
        else if (questCount === 4) {
            question.html(questions[3]);
            ansOne.html(answers[3][0]);
            ansTwo.html(answers[3][1]);
            ansThree.html(answers[3][2]);
            ansFour.html(answers[3][3]);
            answerDiv.on("click", function (e) {
                e.target.id === "answer1" ? (correct++ , actualAns.html("You were correct! The answer was 'Shadowfax'")) : (incorrect++ , actualAns.html("Sorry! The correct answer was 'Shadowfax'"));
                reset();
            })
        }
        else if (questCount === 5) {
            question.html(questions[4]);
            ansOne.html(answers[4][0]);
            ansTwo.html(answers[4][1]);
            ansThree.html(answers[4][2]);
            ansFour.html(answers[4][3]);
            answerDiv.on("click", function (e) {
                e.target.id === "answer2" ? (correct++ , actualAns.html("You were correct! The answer was 'Farimir'")) : (incorrect++ , actualAns.html("Sorry! The correct answer was 'Farimir'"));
            })
        };
    }

    function gameTimer() {
        setInterval(function () {
            counter--;
            mainTimer.html("Time Remaining: " + counter);
            if (counter === 0) {
                reset();
                incorrect++;
            }
        }, 1000);
    }

    function reset() {
        question.hide();
        mainTimer.hide();
        answerDiv.hide();
        setTimeout(function () {
            counter = 15;
            questCount++;
            clearInterval(gameTimer);
            trivia();
        }, 2000);
    }
}
window.onload = function () {

    var questions = ["Where was the entire trilogy of the Lord of the Rings filmed?", "What is the name of the first movie in the trilogy?",
        "In The Fellowship of the Ring, Merry and Pippin are punished for taking some fireworks. What type of punishment do they receive?",
        "What is the name of Gandalf's horse?", "Who is Boromir's brother?"];

    var answersOne = ["Australia", "United Kingdom", "New Zealand", "Switzerland"];
    var answersTwo = ["The Fellowship of the Ring", "The Hobbit", "The Two Towers", "Return of the King"];
    var answersThree = ["Trimming Hedges", "Cleaning Up After the Party", "Serving Food", "Washing Dishes"];
    var answersFour = ["Shadowfax", "Elrond", "Staliumon", "Rohan"];
    var answersFive = ["Gollum", "Faramir", "Aragorn", "Treebeard"];
    var breakCounter = 0;
    var correct = 0;
    var incorrect = 0;
    var counter = 0;
    var userClick = false;
    var questCounter = 1;
    var ring = document.getElementById("startbutton")

    function startGame() {

        ring.onclick = function () {
            
            ring.style.visibility = "hidden";

            window.clearInterval(gameTimer);
            
            questCounter = 1;
            correct = 0;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            incorrect = 0;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);

            questionOne();
            gameTimer();

            document.body.style.backgroundImage = "url('assets/images/backgroundpic.jpg')";
            document.getElementById("answers").style.visibility = "visible";
            var answer = document.getElementById("rules");
            answer.innerHTML = ("Answer to previoius: ")


        }
    }

    function questionOne() {
        
        //creating the  1st question
        var realQuestion = document.getElementById("question");
        console.log(realQuestion);

        realQuestion.innerHTML = ("Question 1: <br>" + questions[0]);

        var ansOne = document.getElementById("answer1");
        ansOne.innerHTML = answersOne[0];
        var ansTwo = document.getElementById("answer2");
        ansTwo.innerHTML = answersOne[1];
        var ansThree = document.getElementById("answer3");
        ansThree.innerHTML = answersOne[2];
        var ansFour = document.getElementById("answer4");
        ansFour.innerHTML = answersOne[3];

        //determining correct or incorrect guess
        ansOne.onclick = function () {

            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansTwo.onclick = function () {

            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansThree.onclick = function () {

            correct++;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            userClick = true;
            questCounter++;
        }
        ansFour.onclick = function () {

            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
    }

    function questionTwo() {
        //creating the  1st question
        var realQuestion = document.getElementById("question");
        console.log(realQuestion);

        realQuestion.innerHTML = ("Question 2: <br>" + questions[1]);

        var ansOne = document.getElementById("answer1");
        ansOne.innerHTML = answersTwo[0];
        var ansTwo = document.getElementById("answer2");
        ansTwo.innerHTML = answersTwo[1];
        var ansThree = document.getElementById("answer3");
        ansThree.innerHTML = answersTwo[2];
        var ansFour = document.getElementById("answer4");
        ansFour.innerHTML = answersTwo[3];

        //determining correct or incorrect guess
        ansOne.onclick = function () {
            correct++;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            userClick = true;
            questCounter++;
        }
        ansTwo.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansThree.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansFour.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
    }

    function questionThree() {
        //creating the  1st question
        var realQuestion = document.getElementById("question");
        console.log(realQuestion);

        realQuestion.innerHTML = ("Question 3: <br>" + questions[2]);

        var ansOne = document.getElementById("answer1");
        ansOne.innerHTML = answersThree[0];
        var ansTwo = document.getElementById("answer2");
        ansTwo.innerHTML = answersThree[1];
        var ansThree = document.getElementById("answer3");
        ansThree.innerHTML = answersThree[2];
        var ansFour = document.getElementById("answer4");
        ansFour.innerHTML = answersThree[3];

        //determining correct or incorrect guess
        ansOne.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansTwo.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansThree.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansFour.onclick = function () {
            correct++;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            userClick = true;
            questCounter++;
        }
    }

    function questionFour() {
        //creating the  1st question
        var realQuestion = document.getElementById("question");
        console.log(realQuestion);

        realQuestion.innerHTML = ("Question 4: <br>" + questions[3]);

        var ansOne = document.getElementById("answer1");
        ansOne.innerHTML = answersFour[0];
        var ansTwo = document.getElementById("answer2");
        ansTwo.innerHTML = answersFour[1];
        var ansThree = document.getElementById("answer3");
        ansThree.innerHTML = answersFour[2];
        var ansFour = document.getElementById("answer4");
        ansFour.innerHTML = answersFour[3];

        //determining correct or incorrect guess
        ansOne.onclick = function () {
            correct++;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            userClick = true;
            questCounter++;
        }
        ansTwo.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansThree.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansFour.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
    }

    function questionFive() {
        //creating the  1st question
        var realQuestion = document.getElementById("question");
        console.log(realQuestion);

        realQuestion.innerHTML = ("Question 5: <br>" + questions[4]);

        var ansOne = document.getElementById("answer1");
        ansOne.innerHTML = answersFive[0];
        var ansTwo = document.getElementById("answer2");
        ansTwo.innerHTML = answersFive[1];
        var ansThree = document.getElementById("answer3");
        ansThree.innerHTML = answersFive[2];
        var ansFour = document.getElementById("answer4");
        ansFour.innerHTML = answersFive[3];

        //determining correct or incorrect guess
        ansOne.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansTwo.onclick = function () {
            correct++;
            var correctAns = document.getElementById("correct");
            correctAns.innerHTML = ("Total Correct Answers: " + correct);
            userClick = true;
            questCounter++;
        }
        ansThree.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
        ansFour.onclick = function () {
            incorrect++;
            var incorrectAns = document.getElementById("incorrect");
            incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            userClick = true;
            questCounter++;
        }
    }

    function gameTimer() {
        counter = 16;
        var timer = setInterval(function () {
            counter--;
            var countdown = document.getElementById("timer");
            countdown.innerHTML = ("Time remaining: " + counter);
            console.log(countdown);

            if (userClick === true) {
                clearInterval(timer);
                breakTimer();
            }
            else if (counter === 0) {
                incorrect++;
                questCounter++;
                clearInterval(timer);
                breakTimer();
                var incorrectAns = document.getElementById("incorrect");
                incorrectAns.innerHTML = ("Total Incorrect Answers: " + incorrect);
            }
        }, 1000);
    }
    //this timer is not displayed but is the pause between questions
    //this was created as a separate function so it could be called on user click
    //without the need to run the entire gameTimer function
    function breakTimer() {
        userClick = false;
        breakCounter = 0;
        var timer = setInterval(function () {

            breakCounter++;
            console.log(breakCounter);
            if (breakCounter === 3) {
                nextQuestion();
                clearInterval(timer);
            }
            else if (questCounter === 2) {
                var answer = document.getElementById("rules");
                answer.innerHTML = ("Answer to previous: " + answersOne[2]);
                answer.style.visibility = "visible"

            }
            else if (questCounter === 3) {
                var answer = document.getElementById("rules");
                answer.innerHTML = ("Answer to previous: " + answersTwo[0]);
                answer.style.visibility = "visible"
            }
            else if (questCounter === 4) {
                var answer = document.getElementById("rules");
                answer.innerHTML = ("Answer to previous: " + answersThree[3]);
                answer.style.visibility = "visible"
            }
            else if (questCounter === 5) {
                var answer = document.getElementById("rules");
                answer.innerHTML = ("Answer to previous: " + answersFour[0]);
                answer.style.visibility = "visible"
            }
            else {
                var answer = document.getElementById("rules");
                answer.innerHTML = ("Answer to previous: " + answersFive[1]);
                answer.style.visibility = "visible";
            };

        }, 1000);
    }

    //queues up the next question
    function nextQuestion() {

        if (questCounter === 2) {
            questionTwo();
            console.log(questCounter);
            gameTimer();
        }
        else if (questCounter === 3) {
            questionThree();
            console.log(questCounter);
            gameTimer();
        }
        else if (questCounter === 4) {
            questionFour();
            console.log(questCounter);
            gameTimer();
        }
        else if (questCounter === 5) {
            questionFive();
            console.log(questCounter);
            gameTimer();
        }
        else {
            endGame();
        }
    }

    function endGame() {

        ring.style.visibility = "visible";

        if (correct >= 4) {
            document.getElementById("rules").style.fontSize = "25px";
            document.body.style.backgroundImage = "url('assets/images/winningpic.gif')";
            var score = document.getElementById("rules")
            score.innerHTML = ("You had " + correct + " out of 5 questions correct.  You saved the people of Middle Earth!")
            startGame();
        }
        else {
            document.getElementById("rules").style.fontSize = "25px";
            document.body.style.backgroundImage = "url('assets/images/losingpic.gif')";
            var score = document.getElementById("rules");
            score.innerHTML = ("You had " + correct + " out of 5 questions correct.  Middle Earth has been destroyed!")
            startGame();
        }
    }

    startGame();
}
// create variables
var questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
var correct = false;
var gameBoard = $('#gameBoard');
// $('.results').hide();
// $('#multipleChoice').hide();


//create quiz objects

var quiz = {

    "questions" : [
        {
            "questions" : "Which animals fingerprints have been mistaken for humans at crimes scenes?",
            "answer" : "Koalas",
            "multipleChoice" : [
                "Koalas", "Chimpanzees", "Iguanas", "Horse"
            ]
        },
        {
            "questions" : "In what part of a shrimp's body is its heart?",
            "answer" : "Its head",
            "multipleChoice" : [
                "Its chest", "Its head", "Its tail", "Its 3rd left leg"
            ]
        },
        {
            "questions" : "What's the longest amount of time that snails can sleep?",
            "answer" : "Three years",
            "multipleChoice" : [
                "3 Minutes", "3 Hours", "3 Months", "3 Years"
            ]
        },
        {
            "questions" : "How long does it take for sloths to fully digest their food?",
            "answer" : "2 weeks",
            "multipleChoice" : [
                "2 days", "2 weeks", "2 months", "2 decades"
            ]
        },
        {
            "questions" : "Can kangaroos fart?",
            "answer" : "No",
            "multipleChoice" : [
                "Yes", "No"
            ]
        }
        
    ]

}





// Start the game
function askQuestion(questionCount) {
    countdown = 13;
    $('#multipleChoice').show();
    if( questionCount < 10 ) {
        console.log(quiz.questions[questionCount].questions);
        $('#quizQuestion').text(quiz.questions[questionCount].questions);

        //Display choices
        $('#a').text(quiz.questions[questionCount].multipleChoice[0]);
        $('#b').text(quiz.questions[questionCount].multipleChoice[1]);
        $('#c').text(quiz.questions[questionCount].multipleChoice[2]);
        $('#d').text(quiz.questions[questionCount].multipleChoice[3]);
        $('#e').text(quiz.questions[questionCount].multipleChoice[4]);
    }

    else {
        clearInterval(counter);
        
    }
}

//Check if the user's answer is correct
function checkIfCorrect(guessed) {
    if( guessed === quiz.questions[questionCount].answer) {
        return true;
    }
    else {
        return false;
    }
}

//Button Listener
$('#startButton').on('click', function(){
    $('#startbutton').hide();
    questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswers = 0, countdown = 13;
for (var i = 0; i < quiz.questions.length; i++) {
    console.log(quiz.questions[i].questions);
    gameBoard.append("<h2>"+ quiz.questions[i].questions +"</h2>");
    for (j = 0; j < quiz.questions[i].multipleChoice.length;j++) {
        console.log(quiz.questions[i].multipleChoice[j]);
    }
    // gameBoard.append(card);
     alert (quiz.questions[i].questions);
}

});

// //Listener for answers
// $('.list-group-item').on('click', function(){

//     if (checkIfCorrect($(this).html()) === true) {
//         correctAnswers++;
//         console.log(" # of Correct Answers: " + correctAnswers);
//         questionCount++;
//         askQuestion(questionCount);
//     }

//     else if (checkIfCorrect($(this).html()) === false) {
//         incorrectAnswers++;
//         console.log(" # of Incorrect Answers: " + incorrectAnswers);
//         questionCount++;
//         askQuestion(questionCount);
//     }
// });

// // Timer function
// function countDownToNextQuestion() {
//     countdown--;

//     // Show the countdown in the #show-countdown tag.
//     $('#showCountDown').html('<h4>Time Remaining: ' + countdown + ' seconds</h4>');


// // Countdown hits zero
// if (countdown === 0) {

//     clearInterval(counter);
// unanswered++;
// console.log(" # of Unanswered: " + unsanswered);
// console.log('Time Up!')

// questionCount++;


// if ( questionCount == 10) {
    // clearInterval(counter);
//     results();
// }
// else {
//     askQuestion(questionCount);

//     countdown = 13;

//     counter = setInterval(countDownToNextQuestion,1000);

// }

// }

// }
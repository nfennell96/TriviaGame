// create variables
var questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
var correct = false;
$('.results').hide();
$('#multipleChoice').hide();


//create trivia objects

var trivia = {
    "questions" : [
        {
            "question" : "Which animals fingerprints have been mistaken for humans at crimes scenes?",
            "answer" : "Koalas",
            "multipleChoice" : [
                "Koalas", "Chimpanzees", "Iguanas", "Horse"
            ]
        },
        {
            "question" : "In what part of a shrimp's body is its heart?",
            "answer" : "Its head",
            "multipleChoice" : [
                "Its chest", "Its head", "Its tail", "Its 3rd left leg"
            ]
        },
        {
            "question" : "What's the longest aount of time that snails can sleep?",
            "answer" : "Three years",
            "multipleChoice" : [
                "3 Minutes", "3 Hours", "3 Months", "3 Years"
            ]
        },
        {
            "question" : "How long does it take for sloths to fully digest their food?",
            "answer" : "2 weeks",
            "multipleChoice" : [
                "2 days", "2 weeks", "2 months", "2 decades"
            ]
        },
        {
            "question" : "Can kangaroos fart?",
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
        console.log(trivia.questions[questionCount].question);
        $('#triviaQuestion').html(trivia.questions[questionCount].question);

        //Display choices
        $('#a').html(trivia.questions[questionCount].multipleChoice[0]);
        $('#b').html(trivia.questions[questionCount].multipleChoice[1]);
        $('#c').html(trivia.questions[questionCount].multipleChoice[2]);
        $('#d').html(trivia.questions[questionCount].multipleChoice[3]);
        $('#e').html(trivia.questions[questionCount].multipleChoice[4]);
    }

    else {
        clearInterval(counter);
        SpeechRecognitionResultList();
    }
}

//Check if the user's answer is correct
function checkIfCorrect(guessed) {
    if( guessed === trivia.questions[questionCount].answer) {
        return true;
    }
    else {
        return false;
    }
}

//Button Listener
$('.startButton').on('click', function(){
    $('.startbutton').hide();
    questionCount = 0, correctAnswers = 0, inccorectAnswers = 0, unanswers = 0, countdown = 13;

    StaticRange();

});

//Listener for answers
$('.list-group-item').on('click', function(){

    if (checkIfCorrect($(this).html()) === true) {
        correcyAnswers++;
        console.log(" # of Correct Answers: " + correctAnswers);
        questionCount++;
        askQuestion(questionCount);
    }

    else if (checkIfCorrect($(this).html()) === false) {
        incorrectAnswers++;
        console.log(" # of Incorrect Answers: " + incorrectAnswers);
        questionCount++;
        askQuestion(questionCount);
    }
});

// Timer function
function countDownToNextQuestion() {
    countdown--;

    // Show the countdown in the #show-countdown tag.
    $('#showCountDown').html('<h4>Time Remaining: ' + countdown + ' seconds</h4>');


// Countdown hits zero
if (countdown === 0) {

    clearInterval(counter);
unanswered++;
console.log(" # of Unanswered: " + unsanswered);
console.log('Time Up!')

questionCount++;


if ( questionCount == 10) {
    clearInterval(counter);
    results();
}
else {
    askQuestion(questionCount);

    countdown = 13;

    counter = setInterval(countDownToNextQuestion,1000);

}

}

}
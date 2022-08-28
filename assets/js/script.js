/* Linking to the DOM */
const question = document.getElementById("idiom");
const options = document.getElementsByClassName("option-text")
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const nextButton = document.getElementById("next-button")
console.log("linked")

/* Setting base values for mutable variables */
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

/* Setting fixed value variables */
const POINT_VALUE = 1;
const TOTAL_QUESTIONS = 12;

/* Example Qs */
let questionList = [
    {
        id : 1,
        idiom : "Der Koch war verliebt",
        literal_translation : "The cook was in love",
        meaning1 : "To get an extra portion",
        meaning2 : "The meal is too salty",
        meaning3 : "To find a hair in your meal",
        meaning4 : "The meal is already cold",
        correct_meaning : "The meal is too salty",
        english_equivalent: ""
    },
    {
        id : 2,
        idiom : "Am Essen war die Küchenfee dran",
        literal_translation : "It was the Kitchen Fairy's turn to cook",
        meaning1 : "To get a take-away",
        meaning2 : "",
        meaning3 : "",
        meaning4 : "The food was burnt",
        correct_meaning : "The food was burnt",
        english_equivalent: "",
    },
    {
        id : 3,
        idiom : "Nicht die hellster Glühbirne (im Shrank)",
        literal_translation : "Not the brightest lightbulb (in the cupboard)",
        meaning1 : "Someone who is overly critical of others",
        meaning2 : "Someone who is not considered very attractive",
        meaning3 : "Someone who is not very welcoming to others",
        meaning4 : "Someone who is not considered very smart",
        correct_meaning : "Someone who is not considered very smart",
        english_equivalent : "Not the sharpest tool in the shed",
    },
    {
        id : 4,
        idiom : "Das ist nur ein Katzensprung ",
        literal_translation : "That is only a cat's leap",
        meaning1 : "It is right around the corner",
        meaning2 : "",
        meaning3 : "",
        meaning4 : "",
        correct_meaning : "It is right around the corner",
        english_equivalent : "Only a stone's throw",
    }
]

/* Creating a function to start the game */
function startGame() {
    /* setting the counters to start at 0 and accessing question list */
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionList];
    /* call the getNewQuestion function */
    getNewQuestion();
}

function getNewQuestion() {
    /* if there are no remaining Qs available or we have reached the total number of Qs, end game */
    if (availableQuestions.length===0 || questionCounter > TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }
    /* +1 to the question counter */
    questionCounter++
    /* display question number x of y */
    progressText.innerText = `Question ${questionCounter} of ${TOTAL_QUESTIONS}`
    /* display progress bar as percentage out of total Qs */
    progressBarFull.style.width = `${(questionCounter/TOTAL_QUESTIONS) * 100}%`

    /* choose a random index for the next question */
    /* extra note: multiplies the available number of Qs by a number between 0 and 1, then rounds down */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    /* finds the question from the list of questions using index number */
    currentQuestion = availableQuestions[questionsIndex]
    /* displays the text for the new question */
    question.innerText = currentQuestion.question

    options.forEach(option => {
        /* display options for the question asked */
        const number = option.dataset['number']
        option.innerText = currentQuestion['option' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

options.forEach(option => {
    /* add event listener to detect user click on an option */
    option.addEventListener('click', event => {
        if(!acceptingAnswers) return

        /* stop accepting answers so user cannot click another answer */
        acceptingAnswers = false
        const selectedOption = event.target
        /* retrieve the number (1-4) for the chosen answer */
        const selectedAnswer = selectedOption.dataset['number']
        /* compare user answer to correct answer and apply class of 'correct' or 'incorrect'*/
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect'

        /* if the user answer is correct, increase score by 1 point */
        if (classToApply === 'correct') {
            increaseScore(POINT_VALUE)
        }
        /* apply appropriate class to the selected answer (red or green colour) */
        selectedOption.parentElement.classList.add(classToApply)

        /* when next button clicked, reset class of user answer and obtain new question */
        nextButton.addEventListener('click', event => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        })

    })
})
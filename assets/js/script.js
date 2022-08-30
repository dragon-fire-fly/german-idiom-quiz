/* Linking to the DOM */
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const nextButton = document.querySelector('#next-button');
console.log("linked")

/* Setting base values for mutable variables */
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let randomisedQuestions
let quizQuestions
let questionCounter = 0;
let availableQuestions =[];

/* Setting fixed value variables */
const POINT_VALUE = 1;
const TOTAL_QUESTIONS = 12;

/* Example Qs */
let questions = [
    {
        id : 1,
        question : "Der Koch war verliebt",
        literal_translation : "The cook was in love",
        option1 : "To get an extra portion",
        option2 : "The meal is too salty",
        option3 : "To find a hair in your meal",
        option4 : "The meal is already cold",
        answer : 2,
        english_equivalent: ""
    },
    {
        id : 2,
        question : "Am Essen war die Küchenfee dran",
        literal_translation : "It was the Kitchen Fairy's turn to cook",
        option1 : "To get a take-away",
        option2 : "",
        option3 : "",
        option4 : "The food was burnt",
        answer : 4,
        english_equivalent: "",
    },
    {
        id : 3,
        question : "Nicht die hellster Glühbirne (im Shrank)",
        literal_translation : "Not the brightest lightbulb (in the cupboard)",
        option1 : "Someone who is overly critical of others",
        option2 : "Someone who is not considered very attractive",
        option3 : "Someone who is not very welcoming to others",
        option4 : "Someone who is not considered very smart",
        answer: 4,
        english_equivalent : "Not the sharpest tool in the shed",
    },
    {
        id : 4,
        question : "Das ist nur ein Katzensprung ",
        literal_translation : "That is only a cat's leap",
        option1 : "It is right around the corner",
        option2 : "",
        option3 : "",
        option4 : "",
        answer : 1,
        english_equivalent : "Only a stone's throw",
    },
    {
        id : 5,
        question : "Jemanden die Schokoladeseite",
        literal_translation : "To show someone's chocolate side",
        option1 : "",
        option2 : "",
        option3 : "",
        option4 : "",
        answer : 1,
    },
]

/* Creating a function to start the game */
function startGame() {
    /* setting the counters to start at 0 and accessing question list */
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    questionList = []
    quizQuestions = []

    /* call function to shuffle the question list */
    randomisedQuestions = shuffle(availableQuestions)
    /* call function to select 12 random quiz questions */
    quizQuestions = selectQuizQuestions(randomisedQuestions)
    /* call the getNewQuestion function */
 /*    getNewQuestion(); */
    console.log(quizQuestions)
}

/* function randomise(questions) {
    for (let i=0; i < questions.length; i++) {
        questionList += questions[i].question;
    }
    for (let i=0; i < 5; i++){
        let index = Math.floor(Math.random() * questions.length);
        quizQuestions += questionList(index)
        console.log(quizQuestions)
    }
}

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) */

/* shuffle function takes the original question list and randomises the entries */
function shuffle(questionList) {
    let currentIndex = questionList.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [questionList[currentIndex], questionList[randomIndex]] = [
            questionList[randomIndex], questionList[currentIndex]];
    }
    return questionList;
}

/* adds the first 12 randomised quesions to a list called "quizQuestions*/
function selectQuizQuestions(randomisedQs){
    for (let i=0; i<12; i++){
        quizQuestions.push(randomisedQs[i])
    }
    return quizQuestions
}


function getNewQuestion() {
    /* if there are no remaining Qs available or we have reached the total number of Qs, end game */
    if (availableQuestions.length===0 || questionCounter > TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        
        return window.location.assign('end.html');
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
    /* if there is exactly one question remaining in list, change next button to end */
    if (availableQuestions.length===1 || questionCounter >= TOTAL_QUESTIONS) {
        nextButton.innerText = "End";
    }
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

        /* if the user answer is correct, call increase score function */
        if (classToApply === 'correct') {
            increaseScore(POINT_VALUE)
        }
        /* apply appropriate class to the selected answer (red or green colour) */
        selectedOption.classList.add(classToApply)

        /* when next button clicked, reset class of user answer and obtain new question */
        nextButton.addEventListener('click', event => {
            selectedOption.classList.remove(classToApply)
            getNewQuestion()
        })

    })
})

/* increase score by 1 point if correct */
function increaseScore(num) {
    score +=num
    scoreText.innerText = score
}

/* call the startGame function */
startGame()
/* Linking to the DOM */
const questionContainer = document.querySelector('#q-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const nextButton = document.querySelector('#next-button');
const translation = document.querySelector('#translation');
const translateButton = document.querySelector('#translate-button');
const quizEnd = document.querySelector('#quiz-end');
const reviewButton = document.querySelector('#review-btn')
const table = document.querySelector('#table')
const summaryTable = document.querySelector('#summary-table');
console.log("linked");

/* Setting base values for mutable variables */
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let randomisedQuestions;
let quizQuestions = [];
let questionCounter = 0;
let availableQuestions =[];

/* Setting fixed value variables */
const POINT_VALUE = 1;
const TOTAL_QUESTIONS = 8;

/* Example Qs */
let questions = [
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
        idiom : "Die Kirche im Dorf lassen",
        literal_translation : "To leave the church in the village",
        meaning1 : "To ask someone to get over something",
        meaning2 : "To feel adventurous",
        meaning3 : "To not get carried away",
        meaning4 : "To tease someone for having a lot of lugguage",
        correct_meaning : "To not get carried away",
    },
    {
        id : 3,
        idiom : "Nicht die hellster Glühbirne (im Shrank)",
        literal_translation : "Not the brightest lightbulb (in the cupboard)",
        meaning1 : "Someone who is overly critical of others",
        meaning2 : "Someone who is not considered very attractive",
        meaning3 : "Someone who is not very welcoming to others",
        meaning4 : "Someone who is not considered very smart",
        correct_meaning: "Someone who is not considered very smart",
        english_equivalent : "Not the sharpest tool in the shed",
    },
    {
        id : 4,
        idiom : "Schwein haben",
        literal_translation : "To have a pig",
        meaning1 : "To be in a bad mood",
        meaning2 : "To have a stroke of luck",
        meaning3 : "To have a feast",
        meaning4 : "To have a hangover",
        correct_meaning : "To have a stroke of luck",
    },
    {
        id : 5,
        idiom : "Einen Korb geben",
        literal_translation : "To give someone a basket",
        meaning1 : "To give someone a compliment",
        meaning2 : "To be rude to someone",
        meaning3 : "To be a good listener",
        meaning4 : "To decline an invitation",
        correct_meaning : "To decline an invitation",
    },
    {
        id : 6,
        idiom : "Eine Extrawurst verlangen",
        literal_translation : "To ask for an extra sausage",
        meaning1 : "To request an extra portion",
        meaning2 : "To fish for compliments",
        meaning3 : "To ask for special treatment",
        meaning4 : "To be the butt of a joke",
        correct_meaning : "To ask for special treatment",
    },
    {
        id : 7,
        idiom : "Tomaten auf den Augen haben",
        literal_translation : "To have tomatoes on one's eyes",
        meaning1 : "To look on the bright side of something",
        meaning2 : "To be oblivious to what’s going around you",
        meaning3 : "To be extremely angry",
        meaning4 : "To be embarrassed",
        correct_meaning : "To be oblivious to what’s going around you",
    },
    {
        id : 8,
        idiom : "Da haben wir den Salat",
        literal_translation : "There we have the salad",
        meaning1 : "There's the final product",
        meaning2 : "To think something is boring",
        meaning3 : "To be in a real mess",
        meaning4 : "To put all the pieces together",
        correct_meaning : "To be in a real mess",
        english_equivalent : "The fat's in the fire"
    },
];

/* create a function to start the game */
function startGame() {
    /* setting the counters to start at 0 and accessing question list */
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];

    /* call function to shuffle the question list */
    randomisedQuestions = shuffle(availableQuestions);
    /* call function to select 12 random quiz questions */
    quizQuestions = selectQuizQuestions(randomisedQuestions);
    /* call the getNewQuestion function */
    getNewQuestion(); 
    console.log(quizQuestions);
}

/* shuffle function takes the original question list and randomises the entries */
function shuffle(questionList) {
    let currentIndex = questionList.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a random element.
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
        quizQuestions.push(randomisedQs[i]);
    }
    return quizQuestions;
}

function getNewQuestion() {
    /* +1 to the question counter */
    questionCounter++;
    console.log("It added one to question counter")
    /* display question number x of y */
    progressText.innerText = `Question ${questionCounter} of ${TOTAL_QUESTIONS}`;
    /* display progress bar as percentage out of total Qs */
    progressBarFull.style.width = `${(questionCounter/TOTAL_QUESTIONS) * 100}%`;
    
    /* if there are no remaining Qs available or we have reached the total number of Qs, end game */
    if (questionCounter >= TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        nextButton.addEventListener('click', e => {
            // hide quiz
            endgame()
        });
    };
    
    /* finds the question from the list of questions using index number */
    currentQuestion = quizQuestions[questionCounter-1];
    /* displays the text for the new question */
    question.innerText = currentQuestion.idiom;
    /* displays the literal translation and event listener to display it */
    translateButton.addEventListener('click', e => {
        translation.classList.remove('hidden');
    });
    translation.innerText = currentQuestion.literal_translation;

    /* display options for the question asked */
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['meaning' + number];
    });

    acceptingAnswers = true;
    /* if there is exactly one question remaining in list, change next button to end */
    if (questionCounter >= TOTAL_QUESTIONS) {
        nextButton.innerText = "End";
    } 
}

options.forEach(option => {
    /* add event listener to detect user click on an option */
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        /* stop accepting answers so user cannot click another answer */
        acceptingAnswers = false;
        const selectedOption = e.target;
        console.log(selectedOption);
        /* retrieve the number (1-4) for the chosen answer */
        const selectedAnswer = selectedOption.id;
        console.log(selectedAnswer);
        /* compare user answer to correct answer and apply class of 'correct' or 'incorrect'*/
        let classToApply = selectedOption.innerText == currentQuestion.correct_meaning ? 'correct': 'incorrect';
        console.log(classToApply);

        /* if the user answer is correct, call increase score function */
        if (classToApply === 'correct') {
            increaseScore(POINT_VALUE);
        }
        /* apply appropriate class to the selected answer (red or green colour) */
        selectedOption.classList.add(classToApply);

        /* if the user answers incorrectly, also display the correct answer in green */
        if (classToApply === 'incorrect') {
            for (let i=0; i < 4; i++) {
                if (options[i].innerText === currentQuestion.correct_meaning){
                    options[i].classList.add('correct')
                }
            }
        }      
    });
});

/* next button event listener */
/* when next button clicked, reset class of user answer, hide translation and obtain new question */
nextButton.addEventListener('click', e => {
    nextQuestion();
});

/* next question function */
function nextQuestion() {
    for (let i=0; i < 4; i++) {
        options[i].classList.remove('correct');
        options[i].classList.remove('incorrect');
    }
    translation.classList.add('hidden');
    getNewQuestion();
    console.log("next button pressed");
}

/* increase score by 1 point if correct */
function increaseScore(num) {
    score +=num;
    scoreText.innerText = score;
};

/* call the startGame function */
startGame();

/* script for creating table of asked questions */
/* insert html table rows for each question */
function insertTable(askedQuestions) {
    let summaryTableHTML = '';
    for (let question of askedQuestions){
        summaryTableHTML += `<tr><td>${question.idiom}</td><td>${question.literal_translation}</td><td>${question.correct_meaning}</td></tr>`;
        summaryTable.innerHTML = summaryTableHTML;
    }
}
/* unhide table on user click */
function endgame(){
    questionContainer.classList.add('hidden');
    quizEnd.classList.remove('hidden');
    reviewButton.addEventListener('click', e=> {
        table.classList.remove('hidden')
    })
    insertTable(quizQuestions);
}
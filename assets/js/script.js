/* jshint esversion: 11 */
/* Linking to the DOM */
/* home page */
const homeContainer = document.querySelector('.home-container');
const startButton = document.querySelector('#start-btn');
const homeButton = document.querySelector('#home-btn')

/* How to play modal */
const howToPlayButton = document.querySelector('#how-to-play-btn')
const howToPlayModal = document.querySelector("#how-to-play")
const closeModal = document.querySelector('#close-modal')

/* Question page */
const mainContainer = document.querySelector('.main-container')
const questionContainer = document.querySelector('#q-container');
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const nextButton = document.querySelector('#next-button');
const endButton = document.querySelector('#end-button')
const translation = document.querySelector('#translation');
const translateButton = document.querySelector('#translate-button');

/* Quiz end page */
const quizEnd = document.querySelector('#quiz-end');
const quizScore = document.querySelector('#quiz-score')
const reviewButton = document.querySelector('#review-btn')
const table = document.querySelector('#table')
const summaryTable = document.querySelector('#summary-table');

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
const TOTAL_QUESTIONS = 4;

onLoad();

/* call the startGame function when start quiz button pressed */
/* hides start page and unhides quiz page */
function onLoad(){
    startButton.addEventListener('click', e => {
        console.log("start button pressed");
        homeContainer.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        startGame();
    })
    /* event listener for home button */
    homeButton.addEventListener('click', e => {
        window.location.reload();
        console.log("home button pressed");
    })
    /* event listener for how to play button */
    howToPlayButton.addEventListener('click', e => {
        /* shows how to play modal */
        howToPlayModal.classList.remove("hidden");
        console.log("how to play clicked");
    })
    closeModal.addEventListener('click', e => {
        howToPlayModal.classList.add("hidden");
    })
    window.addEventListener('click', e => {
        if (e.target == howToPlayModal) {
        howToPlayModal.classList.add("hidden");
    }
    })
}

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
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a random element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
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
    /* display question number x of y */
    progressText.innerText = `Question ${questionCounter} of ${TOTAL_QUESTIONS}`;
    /* display progress bar as percentage out of total Qs */
    progressBarFull.style.width = `${(questionCounter/TOTAL_QUESTIONS) * 100}%`;
    
    /* if there are no remaining Qs available or we have reached the total number of Qs, end game */
    if (questionCounter >= TOTAL_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        endButton.addEventListener('click', e => {
            // hide quiz
            endgame()
        });
    };
    
    /* finds the question from the list of questions using index number */
    currentQuestion = quizQuestions[questionCounter-1];
    /* displays the text for the new question */
    question.innerText = currentQuestion.idiom;
    /* displays the literal translation and event listener to display it */
    translation.classList.add('hidden');
    
    translateButton.addEventListener('click', e => {
        toggleTranslation()
        /* if (translation.classList.contains("hidden")) {
            translation.classList.remove('hidden');
        } else {
            translation.classList.add('hidden');
        } */
    });
    /* If moving the above to a new function, this one needs to stay here */
    translation.innerText = currentQuestion.literal_translation;

    /* shuffle possible answers */
    currentQuestion.Meanings = shuffle(currentQuestion.meanings)
    console.log(currentQuestion.meanings)
    /* display options for the question asked */
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion.meanings[number];
    });

    acceptingAnswers = true;
    /* if there is exactly one question remaining in list, hide next button and show end button */
    if (questionCounter >= TOTAL_QUESTIONS) {
        endButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } 
}

options.forEach(option => {
    /* add event listener to detect user click on an option */
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        /* stop accepting answers so user cannot click another answer */
        acceptingAnswers = false;
        const selectedOption = e.target;
        /* retrieve the number (1-4) for the chosen answer */
        /* const selectedAnswer = selectedOption.id;  remove?? No longer needed as not using data numbers*/
        /* compare user answer to correct answer and apply class of 'correct' or 'incorrect'*/
        let classToApply = selectedOption.innerText == currentQuestion.correct_meaning ? 'correct': 'incorrect';

        /* if the user answer is correct, call increase score function */
        if (classToApply === 'correct') {
            increaseScore(POINT_VALUE);
            selectedOption.innerText += " ✔️"
            currentQuestion.correct = true;
            console.log(currentQuestion.correct)
        }
        /* apply appropriate class to the selected answer (red or green colour) */
        selectedOption.classList.add(classToApply);

        /* if the user answers incorrectly, also display the correct answer in green */
        if (classToApply === 'incorrect') {
            selectedOption.innerText += " ❌"
            for (let i=0; i < 4; i++) {
                if (options[i].innerText === currentQuestion.correct_meaning){
                    options[i].classList.add('correct')
                    options[i].innerText += " ✔️"
                }
            }
        }
        /* display next button if not on the last question */
        if (questionCounter != TOTAL_QUESTIONS){
        nextButton.classList.remove('hidden')
    }
    });
});

/* next button event listener */
/* when next button clicked, reset class of user answer, hide translation and obtain new question */
nextButton.addEventListener('click', e => {
    nextQuestion();
});


function toggleTranslation(){
    if (translation.classList.contains("hidden")) {
        translation.classList.remove('hidden');
    } else {
        translation.classList.add('hidden');
    }
}
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

/* script for creating table of asked questions */
/* insert html table rows for each question */
function insertTable(askedQuestions) {
    let summaryTableHTML = '';
    for (let question of askedQuestions){
        summaryTableHTML += `
            <tr class="${question.correct}">
                <td>${question.idiom}</td>
                <td>${question.literal_translation}</td>
                <td>${question.correct_meaning}</td>
            </tr>
        `;
        summaryTable.innerHTML = summaryTableHTML;
    }
}
/* unhide table on user click */
function endgame(){
    questionContainer.classList.add('hidden');
    quizEnd.classList.remove('hidden');
    quizScore.innerText = `Your score is: ${score}`;
    reviewButton.addEventListener('click', e=> {
        table.classList.remove('hidden');
        reviewButton.classList.add('hidden');
    });
    insertTable(quizQuestions);
}
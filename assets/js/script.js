/* jshint esversion: 11 */

/* Linking to the DOM */

/* Main page containers */
const homeContainer = document.querySelector('.home-container');
const mainContainer = document.querySelector('.main-container');
const quizEnd = document.querySelector('#quiz-end');
const questionContainer = document.querySelector('#q-container');
const highScoreContainer = document.querySelector('.high-score-container');
const formContainer = document.querySelector('.form-container')

/* How to play modal */
const howToPlayButton = document.querySelector('#how-to-play-btn');
const howToPlayModal = document.querySelector("#how-to-play");
const closeModal = document.querySelector('#close-modal');

/* Buttons */
const startButton = document.querySelector('#start-btn');
const homeButton = document.querySelector('#home-btn');
const reviewButton = document.querySelector('#review-btn');
const nextButton = document.querySelector('#next-button');
const endButton = document.querySelector('#end-button');
const highScoreButton = document.querySelector('#high-score-btn');
const playAgainBtn = document.querySelector('#play-again-btn');

/* Question page */
const question = document.querySelector('#question');
const options = Array.from(document.querySelectorAll('.option-text'));
const translation = document.querySelector('#translation');
const translateButton = document.querySelector('#translate-button');

/* Progress bar */
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

/* Timer */
const timer = document.querySelector('#timer')
const endTimer = document.querySelector('#end-timer')
let timeTaken;

/* Quiz end page and summary table*/
const quizScore = document.querySelector('#quiz-score');
const table = document.querySelector('#table');
const summaryTable = document.querySelector('#summary-table');

/* High-scores */
const username = document.querySelector('#username');
const saveScoreBtn = document.querySelector('#save-score-btn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const mostRecentTime = localStorage.getItem("mostRecentTime")
const highScoreList = document.querySelector('#high-score-list');
/* return highscores or an empty string */
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const formSubmitted = document.querySelector('.form-submitted');
const highscoreData = document.querySelector('#highscore-data')

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
const MAX_HIGH_SCORES = 5;

/* Calls on-page load JS */
onLoad();

/* call the startGame function when start quiz button pressed */

/* hides start page and unhides quiz page */
function onLoad(){
    /* event listener for start button */
    startButton.addEventListener('click', e => {
        homeContainer.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        startGame();
        startTimer();
    })

    /* event listener for highscore button */
    highScoreButton.addEventListener('click', e => {
        homeContainer.classList.add('hidden');
        highScoreContainer.classList.remove('hidden');
        getHighscores();
    })

    /* event listener for home button */
    homeButton.addEventListener('click', e => {
        window.location.reload();
    })
    /* event listener for how to play button */
    howToPlayButton.addEventListener('click', e => {
        /* shows how to play modal */
        howToPlayModal.classList.remove("hidden");
    })
    /* closes how to play modal */
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

/* timer function */
function startTimer(){ 
    /* current UNIX time */
    var start = Date.now();
    /* set time interval to 1 second */
    timeInterval = setInterval(function(){countTimer(start)}, 1000);
}

function countTimer(start) {
    /* current UNIX time */
    now = Date.now();
    /* difference between current and starting UNIX time, in seconds */
    var delta = Math.floor((now - start)/1000);
    /* formatting the time as HH:MM:SS */
    var hour = Math.floor(delta /3600);
    var minute = Math.floor((delta - hour*3600)/60);
    var seconds = delta - (hour*3600 + minute*60);
    if(hour < 10)
        hour = "0"+hour;
    if(minute < 10)
        minute = "0"+minute;
    if(seconds < 10)
        seconds = "0"+seconds;
    /* update the timer to the number of seconds passed */
    timer.innerHTML = hour + ":" + minute + ":" + seconds;
    /* event listener to stop the timer and return the end time */
    endButton.addEventListener('click', e => {
        endTimer.innerText = "Your time is: " + hour + ":" + minute + ":" + seconds;
        stopTimer();
        timeTaken = hour + ":" + minute + ":" + seconds;
        /* saves end time to local storage */
        localStorage.setItem('mostRecentTime', timeTaken);
    })
}

function stopTimer() {
    clearInterval(timeInterval);
}

function scoring(){
    /* +1 to the question counter */
    questionCounter++;
    /* display question number x of y */
    progressText.innerHTML = `Question <br>${questionCounter} of ${TOTAL_QUESTIONS}`;
    /* display progress bar as percentage out of total Qs */
    progressBarFull.style.width = `${(questionCounter/TOTAL_QUESTIONS) * 100}%`;
    /* if there are no remaining Qs available or we have reached the total number of Qs, end game */
    if (questionCounter >= TOTAL_QUESTIONS) {
        endButton.addEventListener('click', e => {
            localStorage.setItem('mostRecentScore', score);
            // hide quiz
            endgame();
        });
    };
    /* if there is exactly one question remaining in list, hide next button and show end button */
    if (questionCounter >= TOTAL_QUESTIONS) {
        endButton.classList.remove('hidden');
        nextButton.classList.add('hidden');
    } 
}

function getNewQuestion() {
    /* call scoring() to update score and progress */
    scoring();
    /* finds the question from the list of questions using index number */
    currentQuestion = quizQuestions[questionCounter-1];
    /* displays the text for the new question */
    question.innerText = currentQuestion.idiom;
    /* displays the literal translation div for the current question inside the translation */
    translation.innerText = currentQuestion.literal_translation;
    /* shuffle possible answers */
    currentQuestion.meanings = shuffle(currentQuestion.meanings)
    /* display options for the question asked */
    options.forEach(option => {
        const number = option.dataset['number'];
        option.innerText = currentQuestion.meanings[number];
    });
    acceptingAnswers = true;
}
/* check which answer is chosen */
options.forEach(option => {
    /* add event listener to detect user click on an option */
    option.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        /* stop accepting answers so user cannot click another answer */
        acceptingAnswers = false;
        const selectedOption = e.target;
        /* retrieve the number (1-4) for the chosen answer */
        /* compare user answer to correct answer and apply class of 'correct' or 'incorrect'*/
        let classToApply = selectedOption.innerText == currentQuestion.correct_meaning ? 'correct': 'incorrect';

        /* if the user answer is correct, call increase score function */
        if (classToApply === 'correct') {
            increaseScore(POINT_VALUE);
            selectedOption.innerText += " ✔️"
            currentQuestion.correct = true;
        }
        /* if the user answers incorrectly, also display the correct answer in green */
        if (classToApply === 'incorrect') {
            selectedOption.innerText += " ❌"
            for (let i=0; i < 4; i++) {
                if (options[i].innerText === currentQuestion.correct_meaning){
                    options[i].classList.add('correct');
                    options[i].innerText += " ✔️";
                }
            }
        }
        /* apply appropriate class to the selected answer (red or green colour) */
        selectedOption.classList.add(classToApply);
        
        /* display next button if not on the last question */
        if (questionCounter != TOTAL_QUESTIONS){
        nextButton.classList.remove('hidden');
        }
    });
});

/* hides next button until answer chosen */
function hideNextButton() {
    nextButton.classList.add('hidden');
}



/* event listener for toggling translation */   
translateButton.addEventListener('click', e => {
    toggleTranslation()
});
/* Toggle the literal translation */
function toggleTranslation(){
    translation.classList.toggle("hidden");
}

/* next button event listener */
/* when next button clicked, reset class of user answer, hide translation and obtain new question */
nextButton.addEventListener('click', e => {
    nextQuestion();
    hideNextButton();
});

/* next question function */
function nextQuestion() {
    for (let i=0; i < 4; i++) {
        options[i].classList.remove('correct');
        options[i].classList.remove('incorrect');
    }
    translation.classList.add('hidden');
    getNewQuestion();
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

function endgame(){
    /* hides quiz page and shoes end page */
    questionContainer.classList.add('hidden');
    quizEnd.classList.remove('hidden');
    /* updates final score */
    quizScore.innerText = `Your score is: ${score}`;
    /* unhide table on user click */
    reviewButton.addEventListener('click', e=> {
        table.classList.remove('hidden');
        reviewButton.classList.add('hidden');
    });
    /* redirects user to start page if they click "play again" */
    playAgainBtn.addEventListener('click', e => {
        window.location.assign('/');
    } )
    /* calls the insert table function */
    insertTable(quizQuestions);
}


saveHighScore = e => {
    /* prevents redirection */
    e.preventDefault()
    /* assigns the locally saved variables to an object */
    const score = {
        score:mostRecentScore,
        name: username.value,
        time:mostRecentTime
    }
    /* adds score to end of array */
    highScores.push(score)
    /* sorts the array */
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    /* takes the first 5 scores */
    highScores.splice(5)
    /* saves the highScores in the local storage */
    localStorage.setItem('highScores', JSON.stringify(highScores))
}

/* function saveHighScore(){
    
    const score = {
        score: mostRecentScore,
        name: username.value,
        time: mostRecentTime
    }
    console.log("I'm saving the scores now")
    
    highScores.push(score)
    
    highScores.sort((a,b) => {
        return b.score - a.score
    })
    
    highScores.splice(5)
    
    localStorage.setItem('highScores', JSON.stringify(highScores))
} */
    
function getHighscores(){
    highScoreList.innerHTML = highScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score} - ${score.time} </li>`
    }).join('')
}


/* finalScore.innerText = mostRecentScore */

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})
saveScoreBtn.addEventListener('click', e => {
    formContainer.classList.add('hidden');
    formSubmitted.classList.remove('hidden');
})
    
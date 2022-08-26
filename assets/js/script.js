/* Linking to the DOM */
const question = document.getElementById("idiom");
const choices = document.getElementsByClassName("option")
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

/* Setting base values for mutable variables */
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions =[];

/* Setting fixed value variables */
const POINT_VALUE = 1;
const TOTAL_QUESTIONS = 12;

/* Creating a function to start the game */
function startGame() {
    /* setting the counters to start at 0 and accessing question list */
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionList]
    /* call the getNewQuestion function */
    getNewQuestion()
}






















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
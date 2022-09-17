# German Idiom Quiz
# Contents 
* [**Project Overview**](<#overview-of-project>) 
* [**User Experience (UX)**](<#user-experience-ux>)  
    * [User Stories](<#user-stories>)  
    * [Colour Scheme](<#colour-scheme>)  
    * [Typography](<#typography>)  
    * [Wireframes](<#wireframes>)  
* [**Features**](<#features>)  
    * [Existing Features](<#existing-features>)  
        * 
    * [Features Left to Implement](<#features-left-to-implement>)  
* [**Technologies Used**](<#technologies-used>)  
* [**Testing**](<#testing>)  
* [**Deployment**](<#deployment>)  
    * [Github Pages](<#deployment-with-github-pages>) 
    * [Forking a Repository](<#forking-someone-elses-repository>) 
    * [Creating a Local Clone](<#creating-a-local-clone-of-a-project>)  
* [**Credits**](<#credits>)  
    * [Content](<#content>)
    * [Media](<#media>)
    * [Acknowledgements](<#acknowledgements>)

# Overview of project
<!-- Am-i-responsive mock up -->

The German Idiom Quiz is an interactive quiz testing the user's knowledge of commonly used German phrases (or 'idioms').
The target audience for this quiz are language learners who speak English and are learning German.
The quiz asks the user to select the correct answer out of four possible options for the translation of a given German idiom.

The user has the option to see a literal English translation (which often does not provide many hints as to the meaning!) and to review the questions at the end of the quiz, providing an educational element to the quiz.

Link to live site:


[Back to Top](#contents)

# User Experience (UX)

## User Stories
As a user I would like to be able to quickly understand the purpose of the quiz and how to play.
As a user I would like to have my knowledge of German idioms tested.
As a user I would like to be able to review the asked questions so I can learn any phrases I did not already know.
As a user I would like to have different, randomised questions each time I play the quiz.
As a user I would like the navigation of the page to be clear and intuitive.
As a user I would like to know whether I have selected the correct answer.

## Colour Scheme

## Typography

## Wireframes

[Back to Top](#contents)

# Features
## Existing Features



<!-- stlye features -->




<!-- JS features -->

Functions:

onLoad()
- adds event listener for start button which hides start page and unhides quiz page and calls startGame()
- adds event listener for home button which reloads the page
- adds event listener for how to play button which opens the how to play modal
- adds event listener for the close button on the how to play modal
- adds event listener for a click outside the modal window
- both the close button and click outside event listeners close the how to play modal

startGame()
- calls the shuffle() function
- calls the selectQuizQuestions() function
- calls the getNewQuestion() function

shuffle()
- shuffles an array
- This method is used to shuffle both the list of questions from the large question bank and the 4 possible answers for each question
- returns the full shuffled question list to the startGame() function and the answers to the getNewQuestion() function

selectQuizQuestions()
- takes the first 12 questions from the shuffled list
- returns the 12 random Qs to the startGame() function

<!-- Need to seperate out the scoring functionality to a new function -->
scoring()
- increases the question counter each time a new quesiton is displayed
- updates the progress counter (question x of y)
- updates the progress bar
- if there are no questions remaining on the quizQuestions list, add an end button event listener, which when clicked calls the endGame() function

getNewQuestion()
- determines the currentQuestion and selects it from the list of 12 quizQuestions
- adds event listener for the literal translation toggle button and displays it
- updates the question text in the html file
- displays the 4 possible answers in the html file and adds event listeners to each
- once an answer is selected, detemrmines if it is correct or incorrect and calls the appropriate function
- if there is exactly one question remaining, hide the 'next' button and display the 'end' button instead. <!-- move to scoring function?? -->

nextQuestion()
- resets answers by removing 'correct' and/or 'incorrect' classes from answers
- hide literal translation
- calls the getNewQuestion() function


<!-- new function for determining correct answer -->
correctAnswer()
- applies the 'correct' class to the selected answer for CSS styling (green colour)
- increases the quiz score by 1 point
- adds a check mark to the correct answer for accessibility
- changes the value of the "correct" key in the question object to "true" to indicate the user answered correctly

incorrectAnswer()
- applies the 'incorrect' class to the selected answer for CSS styling (red colour)
- also applies the 'correct' class to the correct answer for CSS styling (green colour)
- adds a cross to the chosen answer and a tick to the correct answer for accessibility

increaseScore()
- increases the global variable "score" by the POINT_VALUE value (in this case 1, but this is changable if desired)
- updates the text for the score in the html

toggleTranslation()
- triggered if the user clicks the "see translation" button
- toggles the literal english translation of the question

endGame()
- tidies up the screen at the end of the game
- hides the container that displays the questions
- unhides the summary page with score displayed
- displays a button with an event listener for users to click if they wish to review their answers
- calls the insertTable() function

insertTable()
- generates a summary table of the questions asked
- takes the list of 12 random questions as an argument
- inserts as many rows of html as there are in the random question list (12, but this is changable, if desired)
- adds one <td></td> each for the idiom, literal translation and correct meaning
- the row is coloured depending on whether the user got the answer correct (green) or incorrect (red)
- the rows are then injected into the html table



<!-- pull the translation button function out of getNewQ -->



- question list with large bank of questions
- randomisation function which shuffles the question bank and selects 12 questions. This allows replayability of the quiz and ensures the same question is not asked more than once in the same play.
- question number and progress bar displayed so user knows how many questions will be asked and which question they are currently answering
- The user is able to view the literal translation of the German phrase in English, if they wish. This allows the user to set their own difficulty level for a given question.
- Under each question are 4 possible answers for the user to choose between. They can simply click the answer to select it. If tthe correct answer is selected, the answer button turns green. If the incorrect answer is selected, the chosen answer button turns red (and the button for the correct answer turns green).
- The score is updated by adding 1 for each correctly answered question, to a maximum of 12.
- At the end of the quiz, the user has the option to see a table of all questions asked in the quiz, their literal translations and their correct answers.







## Features Left to Implement
- How to play/rules
- Final score shown at the end of the quiz

- Timer function
- Scoreboard
- Reversed language (German to English) option

[Back to Top](#contents)

# Technologies used
- HTML5 for providing the core structure of the website pages
- CSS3 for styling the HTML documents
- JavaScript for providing the functionality and interactivity of the site
- [Gitpod](https://gitpod.io/) as a developer platform
- [Github](https://github.com/) as a code hosting platform
- [Git](https://git-scm.com/) for source code management
- [Balsamiq](https://balsamiq.com/) for creating wireframes at the start of the project to help guide HTML and CSS coding
- CSS grid for positioning elements and improved responsiveness within the style.css file
- `root` values in the style.css file for consistency and ease of alteration of colours and fonts

[Back to Top](#contents)

# Testing
## Validator tests
- HTML W3C
- CSS Jigsaw
- JS Linter (JSHint)

## Responsiveness testing

## Lighthouse testing

## Accessibility testing

## Browser compatibility

[Back to Top](#contents)

# Bugs
## Resolved

# Outstanding

[Back to Top](#contents)

# Deployment
## Deployment with GitHub Pages

## Forking someone else's repository

## Creating a local clone of a project

[Back to Top](#contents)

# Credits
## Content

A number of reference sources and tutorials were utilised for this project. The main quiz structure, progress bar and score tracking were based on the YouTube tutorial by [Brian Design](https://www.youtube.com/watch?v=f4fB9Xg2JEY) with reference to this [Web Dev Simplified](https://www.youtube.com/watch?v=riDzcEQbX6k) quiz tutorial.

This [Stack Overflow](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array) was helpful for learning how to shuffle a list of objects using JavaScript.

This YouTube video by [Dylan Israel](https://www.youtube.com/watch?v=ri5Nqe_IK50) helped to implement a table whose values are updated using JavaScript.

Some of the German Idioms used in the quiz were found in these [FluentU](https://www.fluentu.com/blog/german/common-german-idioms/) and [Chatterbug](https://blog.chatterbug.com/en/10-german-idioms-to-sound-more-german/) blog posts.

## Media

## Acknowledgements
I would like to thank my Mentor Tim Nelson for all his advice, encouragement and enthusiasm during the development of this quiz.
I would also like to thank my husband who contributed many of the idioms for the quiz.

[Back to Top](#contents)



<!--  resources:
https://colorswall.com/palette/50961 - germany palette 
https://img.wallpapersafari.com/desktop/1920/1080/61/86/eQLs4h.jpg - distressed german flag img

converted with https://convertio.co/jpg-webp/

 -->
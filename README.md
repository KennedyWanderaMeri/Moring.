# Moring.
# Rugby Quiz IQ
- It is a simple choice Quiz that tests your Rugby Union knowledge.
- it is built with plain HTML,CSS and javascript.
## Features
* Multiple-choice questions shown one at a time.
* Instant feedback: the correct answer is highlighted after you pick
* Score tracking across the whole quiz
* A Next button that appears after each answer
* A separate Feedback page where visitors can send a message (saved in the browser).
### Project Structure
├── index.html      # Quiz page
├── Feedback.html   # Feedback / contact form page
├── style.css       # Styling for both pages
└── script.js       # Quiz logic
#### License
© 2026 Rugby Quiz IQ. All rights reserved.
##### Technologies
- HTML
- CSS
- Javascript(ES6)
- Browser LocalStorage
###### Adding Your Own Questions
* Add a new object to the Questions array in script.js, following the format above. Keep exactly one answer set to correct: true
###### How it runs

## Feedback form
- The feedback page saves the email and message from each submission in the browser's localStorage under the key feedback. Nothing is sent to a server.
- To view saved messages, open DevTools (F12), go to Application → Local Storage, and select your page.
### script.js

Questions are stored in an array of objects. Each question has its text and a list of answers, and exactly one answer is marked correct: true:

javascript
{
  question: "How many points is a successful Penalty Kick worth?",
  answers: [
    { text: "2 points", correct: false },
    { text: "3 points", correct: true },
    { text: "5 points", correct: false },
    { text: "7 points", correct: false }
  ]
}
# Main functions:

* startQuiz() resets the question number and score to 0, then shows the first question.
* showQuestion() clears the old buttons, displays the current question and creates one button per answer.
* resetState() hides the Next button and removes the previous answer buttons.
* selectAnswer() checks the chosen answer, colors it green (correct) or red (wrong), reveals the correct one, disables all buttons and shows the Next button.
###### index.html

The page has a header with a link to the feedback page, and a quiz area.       
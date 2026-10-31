# Rugby Quiz

A rugby union trivia game built with vanilla JavaScript, HTML, and CSS. Answer multiple-choice questions, get instant feedback, and see your final score.

## Features

- Multiple-choice questions on rugby union rules, history, and positions
- Instant feedback: correct answers turn green, wrong ones turn red
- The right answer is revealed after every guess
- Score tracking with a final results screen
- "Play Again" button to restart without reloading the page
* Demonstration
![Rugby Quiz](<Screenshot 2026-10-31 202145.png>)
 ### Getting Started
1. Clone the repository:
   bash
   git clone https://github.com/your-username/your-repo-name.git
2. Open the project folder.
3. Open `index.html` in your browser. No installs or build steps needed.
### Project Structure
├── index.html      # Quiz page
├── Feedback.html   # Feedback / contact form page
├── style.css       # Styling for both pages
├── Home.html       # Rugby information
#### How to Add Your Own Questions
Questions live in the `questions` array at the top of `script.js`. Add a new object in this format, with exactly one answer marked `correct: true`:
{
    question: "Your question here?",
    answers: [
        { text: "Answer A", correct: false },
        { text: "Answer B", correct: true },
        { text: "Answer C", correct: false },
        { text: "Answer D", correct: false },
    ]
}
##### How It Works
- `startQuiz()` resets the score and shows the first question.
- `showQuestion()` builds a button for each answer.
- `selectAnswer()` checks the choice, updates the score, and locks the buttons.
- `showScore()` displays the final result when the questions run out.
###### Built With
- HTML
- CSS
- JavaScript (ES6)
- Browser LocalStorage
###### Ideas for Improvement
- Add more questions and shuffle their order
- Add a timer for each question
- Save high scores with `localStorage`

###### License
This project is open source and available under the copyright laws.
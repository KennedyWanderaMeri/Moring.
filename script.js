const questions =[
    { question: "How many players from each team participate in a standard packed scrum in Rugby Union?",
        answers: [
            { text: "8 players", correct: true},
            { text: "7 players", correct: false},
            { text: "15 players", correct: false},
            { text: "6 players", correct: false},]
    },
    {question: "Which nation won the inaugural Men's Rugby World Cup held in 1987?",
        answers: [
            { text: "England", correct: false},
            { text: "South Africa", correct: false},
            { text: "New zealand", correct: true},
            { text: "Kenya", correct: false},] 
    },
    { question: "In standard Rugby Union squad numbering, which position traditionally wears the No. 9 jersey?",
        answers: [
            { text: "fly half", correct: false},
            { text: "scrum half", correct: true},
            { text: "hooker", correct: false},
            { text: "Fullbuck", correct: false},] 
    },
    { question: "How many points is a successful Penalty Kick or Drop Goal worth in Rugby Union?",
        answers: [
            { text: "2 points", correct: false},
            { text: "3 points", correct: true},
            { text: "5 points", correct: false},
            { text: "7 points", correct: false}, ] }];
const questionElement = document.getElementById ("question");
const answerButtons = document.getElementById ("answer-buttons");
const nextButton = document.getElementById ("next-btn");
let currentQuestionIndex =0;
let score = 0;
function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "Next";
showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click", selectAnswer);} ); } 
function resetState(){ nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }}
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct=="true"
    if(iscorrect){ 
        selectedBtn.classList.add("correct");
        selectedBtn.style.background = "green";
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
        selectedBtn.style.background = "red";
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display= "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML= 'Play Again'
    nextButton.style.display="block"
}
function handleNextButton(){
    currentQuestionIndex++;
    if( currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }else{
        startQuiz();
    }})
startQuiz();
const questions = [
    {
        question:"which is the largest animal in the world",
        answers:[
            {text: "shark",correct:false},
            {text: "blue whale",correct:true},
            {text: "elephant",correct:false},
            {text: "giraffe",correct:false},
        ]
    },
    {
        question:"which is the fastest animal",
        answers:[
            {text: "cheetah",correct:false},
            {text: "falcon",correct:true},
            {text: "sword fish",correct:false},
            {text: "kangaroo",correct:false},
        ]
    },
    {
        question: "which is the slowest animal.",
        answers:[
            {text: "chicken",correct:false},
            {text: "sloth",correct:true},
            {text: "dragon",correct:false},
            {text: "snail",correct:false},
        ]
    },
    {
        question: "which is the largest land animal",
        answers:[
            {text: "hippo",correct:false},
            {text: "Elephant",correct:true},
            {text: "giraffe ",correct:false},
            {text: "rhino",correct:false},
        ]
    },
    {
        question: "which is the tallest land animal",
        answers:[
            {text: "hippo",correct:false},
            {text: "Elephant",correct:false},
            {text: "giraffe ",correct:true},
            {text: "rhino",correct:false},
        ]
    }
]

const questionEle  = document.getElementById("question")
const answerButton = document.getElementById("answer-button")
const nextButton = document.getElementById("next-btn")


let currentQuestionIndex = 0
let score = 0

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionEle.innerHTML = questionNo + ". "+ currentQuestion.question

    currentQuestion.answers.forEach(answer =>{
        const button  = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
if(answer.correct){
    button.dataset.correct = answer.correct
}
        button.addEventListener("click", selectAnswer)
    })
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
const selectedBtn = e.target
const isCorrect = selectedBtn.dataset.correct == 'true'
if(isCorrect){
    selectedBtn.classList.add("correct")
    score++
}else{
    selectedBtn.classList.add("incorrect") 
}
Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct  == 'true'){
        button.classList.add("correct")
    }
    button.disabled= "true"
})
nextButton.style.display = 'block'
}
function showScore(){
    resetState()
    questionEle.innerHTML = `you scored ${score} out of ${questions.length}`
    nextButton.innerHTML = "play again"
    nextButton.style.display = 'block'
}
function handleQuestions(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }else{
        showScore()
    }
}

nextButton.addEventListener("click", ()=>{
if(currentQuestionIndex < questions.length){
    handleQuestions();
}else{
    startQuiz()
}
})
startQuiz()
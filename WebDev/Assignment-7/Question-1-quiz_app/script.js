const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Where is Indian silicon valley?",
        options: ["Mumbai", "Bengaluru", "Delhi"],
        answer: "Bengaluru"
    },
    {
        question: "Which is a scripting language?",
        options: ["HTML", "CSS", "JavaScript"],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let rightCount = 0;
let wrongCount = 0;

const questionElement = document.getElementById("question");
const selectElement = document.getElementById("answer");
const rightCountElement = document.getElementById("rightCount");
const wrongCountElement = document.getElementById("wrongCount");
const finalResultElement = document.getElementById("finalResult");
const submitButton = document.querySelector(".submit");
const statusElement = document.querySelector(".status");

function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${question.question}`;
    selectElement.innerHTML = "";

    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.textContent = option;
        selectElement.appendChild(optionElement);
    }
}

function checkAnswer() {
    const selectedOption = selectElement.value;

    if (selectedOption === questions[currentQuestion].answer) {
        rightCount++;
        statusElement.textContent = "Status: Correct Answer";
    } else {
        wrongCount++;
        statusElement.textContent = "Status: Wrong Answer";
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showLeaderboard();
    }

    updateScore();
}

function updateScore() {
    rightCountElement.textContent = rightCount;
    wrongCountElement.textContent = wrongCount;
}

function showLeaderboard() {
    submitButton.disabled = true;
    finalResultElement.textContent = rightCount > 1 ? "Pass" : "Fail";

    const questionPanel = document.querySelector(".question-panel");
    questionPanel.style.display = "none";
    const leaderboardPanel = document.querySelector(".leaderboard-panel");
    leaderboardPanel.style.display = "flex";
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion();

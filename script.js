const quizData = [
    {
        question: 'How long is the Great Wall of China?',
        a: '12345.67 miles',
        b: '13170.58 miles',
        c: '26384.75 miles',
        d: '11542.21 miles',
        correct: 'b'
    }, {
        question: 'How much of the world did Great Britian own at its peak?',
        a: '15%',
        b: '20%',
        c: '25%',
        d: '30%',
        correct: 'c'
    }, {
        question: 'Who painted the Mona Lisa?',
        a: 'Leonardo da Vinci',
        b: 'Leonardo DiCaprio',
        c: 'Michelangelo',
        d: 'Vincent van Gogh',
        correct: 'a'
    }, {
        question: 'What is the biggest Box Office Movie?',
        a: 'Avatar',
        b: 'Avengers: Endgame',
        c: 'Titanic',
        d: 'Star Wars: Episode VII - The Force Awakens',
        correct: 'a'
    }, {
        question: 'How tall is Shaquille O\'Neal',
        a: '6\'10',
        b: '6\'11',
        c: '7',
        d: '7\'1',
        correct: 'c'
    }
]

const quiz = document.getElementById("quiz");

const answerElements = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    
    questionElement.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitButton.addEventListener("click", () => {
    // Check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score ++;
        }

        currentQuiz ++;
        if (currentQuiz < quizData.length) {
                loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly ${score} out of ${quizData.length} questions.</h2>`
        }
    }
});
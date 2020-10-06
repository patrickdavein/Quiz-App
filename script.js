

const quizData = [
    {
        question: 'Ctrl, Shift and Alt are called .......... keys',
        a: 'modifier',
        b: 'function',
        c: 'alphanumeric',
        d: 'adjustment',
        correct: 'a',
    },
    {
        question: 'MS-Word is an example of _____',
        a: 'An operating system',
        b: 'A processing device',
        c: 'Application software',
        d: 'An input device',
        correct: 'c',
    },
    {
        question: '_____are attempts by individuals to obtain confidential information from you by falsifying their identity',
        a: 'Phishing trips',
        b: 'Computer viruses',
        c: 'Phishing scams',
        d: 'Spyware scams',
        correct: 'c',
    },
    {
        question: 'Junk e-mail is also called ______',
        a: 'Spam',
        b: 'Spoof',
        c: 'Sniffer script',
        d: 'Spool',
        correct: 'a',
    },
    {
        question: 'By default, your documents print in ________ mode',
        a: 'Landscape',
        b: 'Portrait ',
        c: 'Page Setup',
        d: 'Print View',
        correct: 'b',
    },
    {
        question: 'The first computer was programmed using .......',
        a: 'Assembly language',
        b: 'Machine language',
        c: 'Spaghetti code',
        d: 'Source code',
        correct: 'b',
    },
    {
        question: 'A _______ is a software program used to view Web pages.',
        a: 'site',
        b: 'host',
        c: 'link',
        d: 'browser',
        correct: 'd',
    },
]



const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')


const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function getSelected () {
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}



function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    })
}




submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz]. correct) {
            score++
        }

        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = 
            `
                <h2>You answered correctly at ${score}/${quizData.length} questions. </h2>
                
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
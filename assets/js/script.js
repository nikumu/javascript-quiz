const questions = [
    {
        question: "Como você declara uma variável em JavaScript?",
        options: ["int var = 5;", "declare var = 5;", "let var = 5;"],
        correctAnswer: "let var = 5;"
    },
    {
        question: "Qual a diferença entre let e var?",
        options: ["let tem escopo de bloco.", "let tem escopo global.", "var tem escopo de bloco."],
        correctAnswer: "let tem escopo de bloco."
    },
    {
        question: "O que é uma função em JavaScript?",
        options: ["Um tipo de variável.", "Um operador matemático.", "Um bloco de código que executa uma tarefa específica. "],
        correctAnswer: "Um bloco de código que executa uma tarefa específica. "
    },
    {
        question: "O que é um array?",
        options: [" Uma função.", "Uma coleção de itens armazenados em uma única variável.", "Um objeto de data."],
        correctAnswer: "Uma coleção de itens armazenados em uma única variável."
    },
    {
        question: "Como você cria um array em JavaScript?",
        options: ["let arr = [];", "let arr = {};", "let arr = ();"],
        correctAnswer: "let arr = [];"
    },
    {
        question: "Como você acessa um elemento de um array?",
        options: ["arr.0", "arr{0}", "arr[0]"],
        correctAnswer: "arr[0]"
    },
    {
        question: "Como você cria um objeto em JavaScript?",
        options: ["let obj = [];", "let obj = {};", "let obj = ();"],
        correctAnswer: "let obj = {};"
    },
    {
        question: "Como você converte um objeto em JSON?",
        options: ["JSON.parse(obj)", "JSON.objectify(obj)", "JSON.stringify(obj)"],
        correctAnswer: "JSON.stringify(obj)"
    },
     {
        question: "Como você converte JSON em um objeto?",
        options: ["JSON.parse(jsonString)", "JSON.objectify(jsonString)", "JSON.stringify(jsonString)"],
        correctAnswer: "JSON.parse(jsonString)"
    },
    {
        question: "O que é escopo em JavaScript?",
        options: ["O contexto onde o código é compilado.", " O contexto onde os dados são armazenados.", "O contexto onde as variáveis e funções são visíveis. "],
        correctAnswer: "O contexto onde as variáveis e funções são visíveis. "
    },
    {
        question: "O que é uma Promise em JavaScript?",
        options: ["Um objeto que representa uma função.", "Um objeto que representa a conclusão ou falha de uma operação assíncrona.", "Um objeto que representa uma variável."],
        correctAnswer: "Um objeto que representa a conclusão ou falha de uma operação assíncrona."
    },
    {
        question: "O que é map em um array?",
        options: ["Aplica uma função a um acumulador e a cada elemento.", "Cria um novo array com os resultados de uma função aplicada a cada elemento.", "Cria um novo array com todos os elementos que passam em um teste."],
        correctAnswer: "Cria um novo array com os resultados de uma função aplicada a cada elemento."
    },
    {
        question: "Qual a diferença entre == e ===?",
        options: ["=== compara valor e tipo. ", "=== compara apenas valor.", "== compara valor e tipo."],
        correctAnswer: "=== compara valor e tipo. "
    },
    {
        question: "Como você obtém o comprimento de um array?",
        options: ["array.size()", "array.length ", "array.count"],
        correctAnswer: "array.length "
    },
    {
        question: "Como você converte um objeto em array?",
        options: ["Array.from(obj)", "obj.toArray()", "Object.values(obj)"],
        correctAnswer: "Object.values(obj)"
    },
    {
        question: "O que é hoisting?",
        options: ["O comportamento de ignorar declarações não utilizadas.", "O comportamento de mover declarações para o topo do escopo.", "O comportamento de mover declarações para o fim do escopo."],
        correctAnswer: "O comportamento de mover declarações para o topo do escopo."
    },
    {
        question: "Como você verifica o tipo de uma variável?",
        options: ["instanceof", "typedef", "typeof"],
        correctAnswer: "typeof"
    },
    {
        question: "Como você converte uma string em número?",
        options: ["ParseInt(string)", "Number(string)", "string.toNumber()"],
        correctAnswer: "Number(string)"
    },
    {
        question: "Como você importa um módulo?",
        options: ["import", "require", "catch"],
        correctAnswer: "import"
    },
    {
        question: "O que é forEach em um array?",
        options: ["Cria um novo array com todos os elementos que passam em um teste.", "Aplica uma função a um acumulador e a cada elemento.", "Executa uma função em cada elemento do array. "],
        correctAnswer: "Executa uma função em cada elemento do array. "
    },
    {
        question: "Como você seleciona um elemento no DOM?",
        options: ["document.querySelector", "document.getElementByClassName", "document.getElementsByTagName"],
        correctAnswer: "document.querySelector"
    },
    {
        question: "Como você cria uma Promise?",
        options: ["new Promise((resolve, reject) => { ... });", "new Promise(() => { resolve, reject });", "new Promise(resolve, reject => { ... });"],
        correctAnswer: "new Promise((resolve, reject) => { ... });"
    },
    {
        question: "O que é destruturação?",
        options: ["Permite extrair dados de arrays ou objetos em variáveis distintas. ", "Um método de conversão de dados.", "Uma técnica para manipular arrays."],
        correctAnswer: "Permite extrair dados de arrays ou objetos em variáveis distintas. "
    },
    {
        question: "O que é filter em um array?",
        options: ["Cria um novo array com os resultados de uma função aplicada a cada elemento.", "Cria um novo array com todos os elementos que passam em um teste. ", "Aplica uma função a um acumulador e a cada elemento."],
        correctAnswer: "Cria um novo array com todos os elementos que passam em um teste. "
    },
     {
        question: "Como você destrutura um array?",
        options: ["[a, b] = arr", "(a, b) = arr", "{a, b} = arr"],
        correctAnswer: "[a, b] = arr"
    },
    {
        question: "O que é uma função de callback?",
        options: ["Uma função que é chamada dentro de outra função.", "Uma função que é chamada após um evento específico.", "Uma função que retorna outra função."],
        correctAnswer: "Uma função que é chamada dentro de outra função."
    },
    {
        question: "Como você exporta um módulo?",
        options: ["module.exportAll", "module.export", "module.exports"],
        correctAnswer: "module.exports"
    },
    {
        question: "Como você destrutura um objeto?",
        options: ["{ chave: valor } = obj", "{ chave, valor } = obj", "{ chave } = obj"],
        correctAnswer: "{ chave } = obj"
    },
    {
        question: "O que é um módulo em JavaScript?",
        options: ["Um arquivo que contém código reutilizável.", "Uma estrutura de dados.", "Um tipo de variável."],
        correctAnswer: "Um arquivo que contém código reutilizável."
    },
    {
        question: "O que é async e await?",
        options: ["async define uma função assíncrona, await pausa a execução até que a Promise seja resolvida.", "async é um operador, await é uma função.", "async pausa a execução, await define uma função assíncrona."],
        correctAnswer: "async define uma função assíncrona, await pausa a execução até que a Promise seja resolvida."
    }
];

let currentQuestion = 0;
let score = 0;

const questionNumberElement = document.getElementById('question-number');
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const questionContainer = document.getElementById('question-container');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const resetButton = document.getElementById('reset-button');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionNumberElement.textContent = `Pergunta ${currentQuestion + 1}/${questions.length}`;
    questionElement.textContent = question.question;
    optionsElement.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('button');
        button.addEventListener('click', () => handleAnswerClick(option, button));
        optionsElement.appendChild(button);
    });
}

function handleAnswerClick(selectedAnswer, button) {
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
        const buttons = optionsElement.getElementsByTagName('button');
        for (let btn of buttons) {
            if (btn.textContent === questions[currentQuestion].correctAnswer) {
                btn.classList.add('correct');
                break;
            }
        }
    }

    const buttons = optionsElement.getElementsByTagName('button');
    for (let btn of buttons) {
        btn.disabled = true;
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    }, 1500);
}

function showScore() {
    questionContainer.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreElement.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    resetButton.classList.remove('hidden');
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    questionContainer.classList.remove('hidden');
    scoreContainer.classList.add('hidden');
    resetButton.classList.add('hidden');
    loadQuestion();
}

resetButton.addEventListener('click', resetQuiz);

loadQuestion();

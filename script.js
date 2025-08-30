// Dados do quiz
const perguntas = [
    {
        pergunta: "Qual foi a primeira dupla sertaneja a ganhar o Grammy Latino?",
        opcoes: ["Chitãozinho & Xororó", "Zezé Di Camargo & Luciano", "Jorge & Mateus", "João Paulo & Daniel"],
        respostaCorreta: "Chitãozinho & Xororó"
    },
    {
        pergunta: "Qual dessas músicas é um grande sucesso de Michel Teló?",
        opcoes: ["Ainda Tô Aí", "Ai Se Eu Te Pego", "Fui Fiel", "Me Apaixonei"],
        respostaCorreta: "Ai Se Eu Te Pego"
    },
    {
        pergunta: "Quem é a voz feminina mais conhecida no sertanejo, integrante da dupla Maiara & Maraisa?",
        opcoes: ["Maraisa", "Simone", "Paula Fernandes", "Sandy"],
        respostaCorreta: "Maraisa"
    },
    {
        pergunta: "Em que cidade nasceu a famosa dupla sertaneja Zezé Di Camargo & Luciano?",
        opcoes: ["Goiânia", "São Paulo", "Belo Horizonte", "Curitiba"],
        respostaCorreta: "Goiânia"
    },
    {
        pergunta: "Qual a música de Chitãozinho & Xororó que se tornou um verdadeiro clássico do sertanejo?",
        opcoes: ["Faz Parte do Meu Show", "Evidências", "Saudade de Minha Terra", "No Rancho Fundo"],
        respostaCorreta: "Evidências"
    }
];

// Variáveis de controle do quiz
let perguntaAtual = 0;
let acertos = 0;

// Função para mostrar a próxima pergunta
function mostrarPergunta() {
    const perguntaObj = perguntas[perguntaAtual];
    document.getElementById('pergunta').textContent = perguntaObj.pergunta;

    // Limpa opções anteriores
    const opcoesDiv = document.getElementById('opcoes');
    opcoesDiv.innerHTML = '';

    // Adiciona as opções
    perguntaObj.opcoes.forEach((opcao, index) => {
        const botaoOpcao = document.createElement('button');
        botaoOpcao.textContent = opcao;
        botaoOpcao.classList.add('btn');
        botaoOpcao.setAttribute('data-opcao', opcao);
        botaoOpcao.onclick = verificarResposta;
        opcoesDiv.appendChild(botaoOpcao);
    });
}

// Função para verificar a resposta
function verificarResposta(event) {
    const respostaSelecionada = event.target.textContent;
    const perguntaObj = perguntas[perguntaAtual];

    if (respostaSelecionada === perguntaObj.respostaCorreta) {
        acertos++;
    }

    // Move para a próxima pergunta
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

// Função para mostrar o resultado
function mostrarResultado() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('resultado').classList.remove('hidden');
    document.getElementById('acertos').textContent = acertos;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');
    mostrarPergunta();
}

// Inicializa o quiz
mostrarPergunta();

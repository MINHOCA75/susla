const perguntas = [
    {
        enunciado: "estou chegando em casa, e estou decidindo ir para academia ou estudar",
        alternativas: [
            { texto: "ir para academia", pontuacao: 1 },
            { texto: "estudar mais um pouco para vestinulares", pontuacao: 2 }
        ]
    },
    {
        enunciado: "estou na escola, é o professor me pergunda qual profissão quero seguir",
        alternativas: [
            { texto: "medicina veterinária", pontuacao: 2 },
            { texto: "nutrição", pontuacao: 1 }
        ]
    },
    {
        enunciado: "a professora me pergunta qual meio de ensino eu prefiro, logo respondo:",
        alternativas: [
            { texto: "aulas presenciais", pontuacao: 2 },
            { texto: "aulas por EAD", pontuacao: 1 }
        ]
    },
    {
        enunciado: "estou em uma entrevista de enprego, e o entravistador me pergunta se tenho alguma qualidade. Respondo:",
        alternativas: [
            { texto: "não possuo nenhuma qualidade", pontuacao: 1 },
            { texto: "sim! tenho diversas qualidades, uma delas é ser responsável e atencioso", pontuacao: 2 }
        ]
    },
    {
        enunciado: "minha amiga me pergunta qual tipo de livro eu gosto de ler. respondo:",
        alternativas: [
            { texto: "gosto de livros de romance e ação", pontuacao: 1 },
            { texto: "gosto de livros de terror e ficção", pontuacao: 2 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta



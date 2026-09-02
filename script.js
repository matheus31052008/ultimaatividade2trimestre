// Elementos do HTML que vamos modificar
const textoPergunta = document.getElementById("texto-pergunta");
const caixaBotoes = document.getElementById("caixa-botoes");

// Estrutura de dados com a árvore de perguntas e caminhos
const fases = {
    0: {
        texto: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", proxima: 1 },
            { texto: "Isso é maravilhoso!", proxima: 2 }
        ]
    },
    1: {
        texto: "Com medo do avanço da tecnologia, você decide criar um grupo de debate na faculdade para regulamentar as IAs. Qual será o foco principal do grupo?",
        alternativas: [
            { texto: "Proibir artes geradas por IA para proteger artistas.", proxima: 3 },
            { texto: "Garantir leis contra Fake News e deepfakes.", proxima: 4 }
        ]
    },
    2: {
        texto: "Empolgado, você decide programar sua própria ferramenta usando IA para ajudar no dia a dia das pessoas. Qual ferramenta você cria?",
        alternativas: [
            { texto: "Um assistente que cria cronogramas de estudo perfeitos.", proxima: 5 },
            { texto: "Um app que traduz conversas por voz em tempo real.", proxima: 6 }
        ]
    },
    // Finais da história baseados nas escolhas anteriores
    3: {
        texto: "Fim da jornada! Seu grupo ganha força nacional e os artistas locais criam um selo protetor. Você ajudou a manter o mercado humano forte.",
        alternativas: [{ texto: "Jogar Novamente", proxima: 0 }]
    },
    4: {
        texto: "Fim da jornada! Suas propostas viram lei, ajudando a internet a se tornar um ambiente mais limpo, seguro e confiável.",
        alternativas: [{ texto: "Jogar Novamente", proxima: 0 }]
    },
    5: {
        texto: "Fim da jornada! O app vira um sucesso global nas escolas e milhões de estudantes melhoram suas notas graças à sua IA.",
        alternativas: [{ texto: "Jogar Novamente", proxima: 0 }]
    },
    6: {
        texto: "Fim da jornada! Seu app de tradução une comunidades isoladas ao redor do mundo. Você usou a IA para conectar a humanidade.",
        alternativas: [{ texto: "Jogar Novamente", proxima: 0 }]
    }
};

// Função para renderizar a fase atual na tela
function iniciarFase(faseId) {
    const faseAtual = fases[faseId];
    textoPergunta.textContent = faseAtual.texto;
    
    // Limpa os botões anteriores
    caixaBotoes.innerHTML = "";
    
    // Cria novos botões para cada alternativa da fase
    faseAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => iniciarFase(alternativa.proxima));
        caixaBotoes.appendChild(botao);
    });
}

// Inicia o jogo na primeira pergunta (ID 0)
iniciarFase(0);

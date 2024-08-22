
document.addEventListener('DOMContentLoaded', () => {
    const home = document.getElementById('home');
    const narrative = document.getElementById('narrative');
    const endScreen = document.getElementById('end-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const narrativeText = document.getElementById('narrative-text');
    const choicesContainer = document.getElementById('choices-container');
    const optionsContainer = document.getElementById('options-container');

    const story = [
        // Passo 1
        {
            text: "João, proprietário da Academia FitPro, está considerando uma grande mudança. Recentemente, ele descobriu as últimas inovações tecnológicas no setor de fitness e está pensando em modernizar sua academia com equipamentos inteligentes, aplicativos de treinamento e realidade aumentada. Ele sabe que essa transformação pode colocar a FitPro na vanguarda do mercado, mas também envolve um investimento significativo e possíveis riscos.",
            choices: [
                { text: "Implantar as Novas Tecnologias", nextStep: 1 },
                { text: "Manter o Modelo Tradicional", nextStep: 2 },
            ]
        },
        // Passo 2
        {

            text: "João tomou a decisão ousada de modernizar a Academia FitPro com as mais recentes tecnologias do setor de fitness. Após meses de planejamento e investimento, a academia foi equipada com máquinas inteligentes que ajustam os treinos com base no desempenho dos usuários, e aplicativos de treinamento personalizados que oferecem feedback em tempo real. Além disso, a realidade aumentada foi incorporada para criar uma experiência de treino imersiva e inovadora e agora sua academia esta lotada.",
            choices: [
                { text: "A implementação de novas tecnologias foi um sucesso e tudo deu certo.", nextStep: 4 },
            ]
        },
        // Passo 3
        {
            text: "João decidiu manter o modelo tradicional da Academia FitPro e não investir nas novas tecnologias. Apesar das sugestões para modernizar a academia com equipamentos inteligentes e aplicativos de treinamento.",
            choices: [
                { text: "Manter o modelo tradicional fez com que sua acadêmia se tornasse obsoleta, então você faliu e teve que fechar a acadêmia.", nextStep: 7 },
          
            ]
        },
       
  
    ];

    let currentStep = 0;

    function startGame() {
        home.style.display = 'none';
        narrative.style.display = 'block';
        showStep(currentStep);
    }

    function showStep(step) {
        const currentStory = story[step];
        narrativeText.textContent = currentStory.text;
        choicesContainer.innerHTML = '';
        if (currentStory.choices) {
            currentStory.choices.forEach((choice) => {
                const button = document.createElement('button');
                button.textContent = choice.text;
                button.addEventListener('click', () => handleChoice(choice.nextStep));
                choicesContainer.appendChild(button);
            });
        }
    }

    function handleChoice(nextStep) {
        if (nextStep >= story.length) {
            showEndScreen();
        } else {
            currentStep = nextStep;
            showStep(currentStep);
        }
    }

    function showEndScreen() {
        narrative.style.display = 'none';
        endScreen.style.display = 'block';
    }

    function restartGame() {
        endScreen.style.display = 'none';
        home.style.display = 'block'; // Exibe a tela inicial
        currentStep = 0; // Reinicia o passo do jogo
    }

    startBtn.addEventListener('click', startGame);
    restartBtn.addEventListener('click', restartGame);
});

const registerListeners = (listeners) => {
    listeners.forEach(([element, event, handler]) => {
        element.addEventListener(event, handler);
    });
  };
  
//Fonction qui créée une liste de tableaux de listeners.
const createListeners = (exitQuiz, startQuiz, nextQuestion, restartQuiz, quitQuiz) => {
return [
    [exitBtn, 'click', exitQuiz],
    [continueBtn, 'click', startQuiz],
    [nextBtn, 'click', nextQuestion],
    [restartButton, 'click', restartQuiz],
    [quitButton, 'click', quitQuiz],
];
  };
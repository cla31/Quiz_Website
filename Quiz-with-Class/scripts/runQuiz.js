
const runQuiz = (questions, user)=> {
    // console.log("questions de runQuiz",questions);
    displayModal(modal)
    initializeVariables();
    initializeDomElements()
    openQuizUI(infoBox)

    // Initialisation
    shuffleArray(questions);
   
    // console.log("question 0", questions[0]);
    displayQuestions(questions[0], user)

    exitBtn.addEventListener('click', () => {
        OnExitModal();
    });
    continueBtn.addEventListener('click', () => {
        OnContinueQuiz(questions, user);
    });

    nextBtn.addEventListener('click', () => {
        OnNextQuestion(questions, user);
    });

    restartButton.addEventListener('click', () => {
        OnRestartQuiz(questions, user)
    });
    
    quitButton.addEventListener('click', () => {
        OnQuitQuizEnd();
    });
    
}
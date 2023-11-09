const startTimer = (timerDuration, questions, user) => {
    let timeLeft = timerDuration;
    //Intervalle
    timerId = setInterval(() => {
       //Si le temps est écoulé
        if (timeLeft <= -1) {
             //Arrêt de l'intervalle
            clearInterval(timerId);
            timerElement.textContent = "0 s";
            handleTimeout(questions, user);
        // Sinon décrémentation et affichage de la décrémentation
        } else {
            timerElement.textContent = `${timeLeft} s`;
            //Le temps restant est ici
            timeLeft--;
            timeLeftInTimer=timeLeft;
        }
    }, 1000);
}
// Lorsque le temps s'est écoulé pour une question donnée.
const handleTimeout = (questions, user) => {
    // Si l'utilisateur n'a pas sélectionné de réponse et
    // s'il n'y a plus de questions à afficher, entre dans le "else"
    if (!(user.userHasSelected) && (questionCount === 10)) {
        console.log("else de handle time out");
        console.log("questionCount du else de handle...",questionCount);
        showResultBox();
    } else {
        // Si les deux conditions ne sont pas remplies, entre dans le "if"
        alert("Temps écoulé, pas de points.");
        questionCount++;
        questionsDisplayed++;
        updateProgressBar();
        displayQuestions(questions[questionCount], user)
        console.log("If handleTimeout questionCount", questionCount);
        console.log("If handleTimeout questionDisplayed", questionsDisplayed);
        // Démarre une nouvelle minuterie.
        startTimer(timerDuration, questions, user);
    }
}


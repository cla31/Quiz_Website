
const quiz = (questions ) => {
    initializeDomElements()
    initializeVariables();


    infoBox.classList.add("info-box--active");
    document.getElementById('modal').style.display = 'block';

    //Exit button
    const exitQuiz = () => {
        document.getElementById('modal').style.display = 'none';
    }
    //Hide info
    const hideInfoBox = () => {
        infoBox.classList.remove("info-box--active");
    }

    //Continue button
    const startQuiz = () => {
        hideInfoBox();
        quizBox.classList.add("quiz-box--active");
        startTimer(timerDuration);

    }
     // Quit quizz button
    const quitQuiz = () => {
        window.location.reload();
    }

    //Replay button
    const restartQuiz = () => {
            quizBox.classList.add("quiz-box--active");
            resultBox.classList.remove("result-box--active");
            shuffleArray(questions);
            queCount = 0;
            totalScore = 0;
            questionsDisplayed = 0;
            progressBar.style.width = "0%";
            questions[queCount].userHasSelected = false;
            questions[queCount].display();
            startTimer(timerDuration);
        }

     //  nextQuestion(), handleTimeout()
    const updateProgressBar = () => {
        const progressPercentage = (questionsDisplayed / 10) * 100;
        progressBar.style.width = progressPercentage + "%";
    }
    
    //Next button
    const nextQuestion = () => {
        if (timerId) {
            clearInterval(timerId);
        }
    
        if (questions[queCount].userHasSelected) {
            queCount++;
            questionsDisplayed++;
    
            if (queCount < 10) {
                questions[queCount].display();
                startTimer(timerDuration);
            } else {
                showResultBox();
            }
    
            updateProgressBar();
        } else {
            alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
            startTimer(timeLeftInTimer);
        }
    
        questions[queCount].userHasSelected = false;
    };   
    
     // StartQuiz(), NextQuestion, restartQuiz()
     const startTimer = (timerDuration) => {
        let timeLeft = timerDuration;
        //Intervalle
        timerId = setInterval(() => {
           //Si le temps est écoulé
            if (timeLeft <= -1) {
                 //Arrêt de l'intervalle
                clearInterval(timerId);
                timerElement.textContent = "0 s";
                handleTimeout();
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
    const handleTimeout = () => {
        //Si l'utilisateur n'a pas séléctionné de réponse 
        if (!questions[queCount].userHasSelected) {
            questionsDisplayed++;
            alert("Temps écoulé, pas de points.");
            //On passe à la question suivante
            queCount++;
            updateProgressBar();
        }
        //S'il y a encore des questions à afficher, elle affiche la question suivante
        if (queCount < 10) {
            questions[queCount].display();
            //démarre une nouvelle minuterie.
            startTimer(timerDuration);
        } else {
            showResultBox();
        }
    }
    

     // Show result card (handleTimeout(), nextQuestion())
    const showResultBox = () => {
        infoBox.classList.remove("info-box--active");
        quizBox.classList.remove("quiz-box--active");
        resultBox.classList.add("result-box--active");
        // const scoreText = resultBox.querySelector(".result-box__score-text");
        let scoreMessage = '';

        if (totalScore > 5) {
            scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
        } else if (totalScore > 1) {
            scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
        } else {
            scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
            // startFireworks();     
        }
        //rajouter un aure else avec si t'as 10/10 => appel de fireworks, donc mettre un elseif à "and sorry..."

        scoreText.innerHTML = `<span>${scoreMessage}</span>`;
    }

 
    const listeners = createListeners(exitQuiz, startQuiz, nextQuestion, restartQuiz, quitQuiz);

    // Appel fonction registerListeners pour ajouter tous les écouteurs d'événements :
    registerListeners(listeners);

    // Initialisation
    shuffleArray(questions);
    questions[queCount].display();
    };
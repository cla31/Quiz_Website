
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
            questionCount = 0;
            totalScore = 0;
            questionsDisplayed = 0;
            progressBar.style.width = "0%";
            questions[questionCount].userHasSelected = false;
            questions[questionCount].display();
            startTimer(timerDuration);
        }

     //  nextQuestion(), handleTimeout()
    const updateProgressBar = () => {
        const progressPercentage = (questionsDisplayed / 10) * 100;
        progressBar.style.width = progressPercentage + "%";
    }
    
    //Next button
    const nextQuestion = () => {
        console.log("Next Questions questionCount",questionCount);
        console.log("Next Question questionDisplayed",questionsDisplayed);
        // console.log("question number",questions[questionCount].number);
        if (timerId) {
            clearInterval(timerId);
        }
    
        if (questions[questionCount].userHasSelected) {
            questionCount++;
            questionsDisplayed++;
            console.log("Next Questions questionCount",questionCount);
            console.log("Next Question questionDisplayed",questionsDisplayed);


            if (questionCount < 10) {
                questions[questionCount].display();
                startTimer(timerDuration);
            } else {
                showResultBox();
            }    
            updateProgressBar();
        } else {
            // console.log("If de Next Questions questionCount",questionCount);
            // console.log("If de Next Question questionDisplayed",questionsDisplayed);
            alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
            startTimer(timeLeftInTimer);
        }
    
        questions[questionCount].userHasSelected = false;
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
        // Si l'utilisateur n'a pas sélectionné de réponse et
        // s'il n'y a plus de questions à afficher, entre dans le "else"
        if (!(questions[questionCount].userHasSelected) && (questionCount === 10)) {
            console.log("else de handle time out");
            console.log("questionCount du else de handle...",questionCount);
            showResultBox();
        } else {
            // Si les deux conditions ne sont pas remplies, entre dans le "if"
            alert("Temps écoulé, pas de points.");
            questionCount++;
            questionsDisplayed++;
            updateProgressBar();
            questions[questionCount].display();
            console.log("If handleTimeout questionCount", questionCount);
            console.log("If handleTimeout questionDisplayed", questionsDisplayed);
            // Démarre une nouvelle minuterie.
            startTimer(timerDuration);
        }
    }
    
    

     // Show result card (handleTimeout(), nextQuestion())
    const showResultBox = () => {
        infoBox.classList.remove("info-box--active");
        quizBox.classList.remove("quiz-box--active");
        resultBox.classList.add("result-box--active");
        // const scoreText = resultBox.querySelector(".result-box__score-text");
        let scoreMessage = '';


        if (totalScore === 10) {
            startFireworks();
        } else {
            if (totalScore > 5) {
                scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
            } else if (totalScore > 2) {
                scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
            } else {
                scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
            }
        }        

        scoreText.innerHTML = `<span>${scoreMessage}</span>`;
    }

 
    const listeners = createListeners(exitQuiz, startQuiz, nextQuestion, restartQuiz, quitQuiz);

    // Appel fonction registerListeners pour ajouter tous les écouteurs d'événements :
    registerListeners(listeners);

    // Initialisation
    shuffleArray(questions);
    questions[questionCount].display();
    };
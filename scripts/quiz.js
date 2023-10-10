

const quiz = (questions) => {
    const infoBox = document.querySelector(".info-box");
    const continueBtn = infoBox.querySelector(".info-box__buttons .info-box__button--restart");
    const exitBtn = infoBox.querySelector(".info-box__buttons .info-box__button--quit");
    const quizBox = document.querySelector(".quiz-box");
    
    const nextBtn = document.querySelector("footer .quiz-box__next-button");
    const resultBox = document.querySelector(".result-box");
    const progressBar = document.querySelector(".quiz-box__progress");

    let queCount = 0;

    let questionsDisplayed = 0;
    
    let timerDuration = 5;
    let timerId;
    const timerElement = document.querySelector(".quiz-box__timer-sec");


    infoBox.classList.add("info-box--active");



    //Exit button
    const hideInfoBox = () => {
        infoBox.classList.remove("info-box--active");
    }

    //Continue button
    const startQuiz = () => {
        hideInfoBox();
        quizBox.classList.add("quiz-box--active");
        startTimer();

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
            startTimer();
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
                startTimer();
            } else {
                showResultBox();
            }
    
            updateProgressBar();
        } else {
            alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
            startTimer();
        }
    
        questions[queCount].userHasSelected = false;
    };

   
    
     // StartQuiz(), NextQuestion, restartQuiz()
     const startTimer = () => {
        let timeLeft = timerDuration;
        
        timerId = setInterval(() => {
            if (timeLeft <= -1) {
                clearInterval(timerId);
                timerElement.textContent = "0 s";
                handleTimeout();
            } else {
                timerElement.textContent = `${timeLeft} s`;
                timeLeft--;
            }
        }, 1000);
    }
    // StartTimer()
    const handleTimeout = () => {
        if (!questions[queCount].userHasSelected) {
            questionsDisplayed++;
            alert("Temps écoulé, pas de points.");
            queCount++;
            updateProgressBar();
        }

        if (queCount < 10) {
            questions[queCount].display();
            startTimer();
        } else {
            showResultBox();
        }
    }
    

     // Show result card (handleTimeout(), nextQuestion())
    const showResultBox = () => {
        infoBox.classList.remove("info-box--active");
        quizBox.classList.remove("quiz-box--active");
        resultBox.classList.add("result-box--active");
        const scoreText = resultBox.querySelector(".result-box__score-text");
        let scoreMessage = '';

        if (totalScore > 3) {
            scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
        } else if (totalScore > 1) {
            scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
        } else {
            scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
        }

        scoreText.innerHTML = `<span>${scoreMessage}</span>`;
    }

        // Gestion des événements
    exitBtn.addEventListener('click', () => hideInfoBox());
    continueBtn.addEventListener('click', () => startQuiz());

    nextBtn.addEventListener('click', () => nextQuestion());
    resultBox.querySelector(".result-box__buttons .result-box__button--restart").addEventListener('click', () => restartQuiz());
    resultBox.querySelector(".result-box__button--quit").addEventListener('click', () => quitQuiz());

       // Initialisation
    shuffleArray(questions);
    questions[queCount].display();
};

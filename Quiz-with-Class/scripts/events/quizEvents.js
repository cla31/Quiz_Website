
const OnExitModal = () => {
    document.getElementById('modal').style.display = 'none';
}


const OnContinueQuiz = (questions, user) => {
    infoBox.classList.remove("info-box--active");
    quizBox.classList.add("quiz-box--active");
    startTimer(timerDuration, questions, user);
}

const OnNextQuestion = (questions, user) => {
    // console.log("next question");
    console.log("question count",questionCount);
    console.log("nextQuestion début user.userHasSelected",user.userHasSelected);
    if (timerId) {
        clearInterval(timerId);
    }
    if (user.userHasSelected) {
        questionCount++;
        questionsDisplayed++;

        if (questionCount < 10) {
            // console.log("question inférieure à 10");
            // console.log("questionCount",questionCount);
            displayQuestions(questions[questionCount], user)
            startTimer(timerDuration, questions, user);
         
        } else {
            console.log("question supérieure à 10");
            showResultBox();
        }
        updateProgressBar();    
    }else{
        alert("Vous devez sélectionner une réponse avant de passer à la question suivante.");
        startTimer(timeLeftInTimer, questions, user);
    }
    user.userHasSelected = false;
    console.log("question count",questionCount);
    console.log("nextQuestion fin user.userHasSelected",user.userHasSelected);  
}

const OnRestartQuiz = (questions, user) => {
    quizBox.classList.add("quiz-box--active");
    resultBox.classList.remove("result-box--active");
    shuffleArray(questions);
    questionCount = 0;
    totalScore = 0;
    questionsDisplayed = 0;
    progressBar.style.width = "0%";
    user.userHasSelected = false;
    displayQuestions(questions[questionCount], user)   
    startTimer(timerDuration, questions, user);
}

const OnQuitQuizEnd = () => {
    window.location.reload();
}
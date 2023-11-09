const initializeDomElements = () => {
    infoBox = document.querySelector(".info-box");
    option_list = document.querySelector(".quiz-box__option");
    question_text = document.querySelector(".quiz-box__question-text");
    continueBtn= document.querySelector(".info-box__buttons .info-box__button--restart");
    exitBtn= document.querySelector(".info-box__buttons .info-box__button--quit");
    quizBox= document.querySelector(".quiz-box");
    nextBtn= document.querySelector("footer .quiz-box__next-button");
    resultBox= document.querySelector(".result-box");
    progressBar= document.querySelector(".quiz-box__progress");
    timerElement= document.querySelector(".quiz-box__timer-sec");
    restartButton = resultBox.querySelector(".result-box__buttons .result-box__button--restart");
    quitButton = resultBox.querySelector(".result-box__button--quit");
    scoreText = resultBox.querySelector(".result-box__score-text");
   
  }

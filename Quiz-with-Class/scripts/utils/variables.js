const pathJson ="./datas/questions.json";

const modal = document.getElementById("modal");
const startButton = document.querySelector(".start_btn");

const initializeVariables = () => {
    questionCount = 0;
    questionsDisplayed = 0;
    timerDuration = 2;
    timerId = undefined;
    timeLeftInTimer = undefined;
    totalScore = 0;  
  };



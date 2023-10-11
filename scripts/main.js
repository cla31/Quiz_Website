
const main = async (pathJson) => {
    try {
        displayModal();
        const fetchQuestions = await getQuestions(pathJson);
        const questions = fetchQuestions.map(data => {
            return new Question(data.number, data.question, data.options, data.solution);
            });
        const infoBox = document.querySelector(".info-box"); 
        const continueBtn = infoBox.querySelector(".info-box__buttons .info-box__button--restart");
        const exitBtn = infoBox.querySelector(".info-box__buttons .info-box__button--quit");
        const quizBox = document.querySelector(".quiz-box");    
        const nextBtn = document.querySelector("footer .quiz-box__next-button");
        const resultBox = document.querySelector(".result-box");
        const progressBar = document.querySelector(".quiz-box__progress");
        const timerElement = document.querySelector(".quiz-box__timer-sec");      
        quiz(questions,infoBox, continueBtn, exitBtn, quizBox, nextBtn, resultBox, progressBar, timerElement)
  
    } catch (erreur) {
        console.log(erreur);
    }
  };


const pathJson="./datas/questions.json"
let totalScore = 0;

const startButton = document.querySelector(".start_btn");
startButton.addEventListener('click', () => main(pathJson));


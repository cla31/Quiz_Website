
const main = async (pathJson) => {
    try {
        displayModal();
        const fetchQuestions = await getQuestions(pathJson);
        const questions = fetchQuestions.map(data => {
            return new Question(data.number, data.question, data.options, data.solution);
            });
            
        const elements = {
            infoBox: document.querySelector(".info-box"),
            continueBtn: document.querySelector(".info-box__buttons .info-box__button--restart"),
            exitBtn: document.querySelector(".info-box__buttons .info-box__button--quit"),
            quizBox: document.querySelector(".quiz-box"),
            nextBtn: document.querySelector("footer .quiz-box__next-button"),
            resultBox: document.querySelector(".result-box"),
            progressBar: document.querySelector(".quiz-box__progress"),
            timerElement: document.querySelector(".quiz-box__timer-sec"),
          };
          
        quiz(questions, elements)
  
    } catch (erreur) {
        console.log(erreur);
    }
  };


const pathJson="./datas/questions.json"
let totalScore = 0;

const startButton = document.querySelector(".start_btn");
startButton.addEventListener('click', () => main(pathJson));


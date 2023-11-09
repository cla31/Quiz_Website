
const main = async (pathJson) => {
    try {
        displayModal();
        const fetchQuestions = await getQuestions(pathJson);
        const questions = fetchQuestions.map(data => {
            return new Question(data.number, data.question, data.options, data.solution);
            });
        // startFireworks();               
        quiz(questions)
  
    } catch (erreur) {
        console.log(erreur);
    }
  };


const pathJson="./datas/questions.json"
const startButton = document.querySelector(".start_btn");
startButton.addEventListener('click', () => main(pathJson));


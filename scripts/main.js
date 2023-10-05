
const main = async (pathJson) => {
    try {
        const fetchQuestions = await getQuestions(pathJson);
        console.log("La liste des questions et réponses");
        console.log("liste des q et rep", fetchQuestions);
        const questions = fetchQuestions.map(data => {
            return new Question(data.number, data.question, data.options, data.solution);
            });
        console.log("Questions objets",questions);
        const solution = questions[0].getSolution();
        console.log("1ère solution",solution);
  
    } catch (erreur) {
        console.log(erreur);
    }
  };


  const pathJson="./datas/questions.json"
  let totalScore = 0;

  const startButton = document.querySelector(".start_btn");
  startButton.addEventListener('click', () => main(pathJson));

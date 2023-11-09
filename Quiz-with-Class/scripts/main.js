const main = async (pathJson) => {
    try {
        const fetchQuestions = await fetchQuestionsFromJson(pathJson);
        // console.log("fetchQuestions",fetchQuestions);
        const questions = fetchQuestions.map(data => {
            return new Question(data.number, data.question, data.options, data.solution);
            });
            // console.log("Objets questions",questions);
        const user = new User();          
        runQuiz(questions, user)
  
    } catch (erreur) {
        console.log(erreur);
    }
  };



startButton.addEventListener('click', () => main(pathJson));
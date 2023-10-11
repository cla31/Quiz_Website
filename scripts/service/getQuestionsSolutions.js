
const getQuestions = async (pathJson) => {
    try {
        const fetchQuestionsSolutions = await fetch(pathJson);
        const responseFetchQuestionsSolutions = await fetchQuestionsSolutions.json();
        return responseFetchQuestionsSolutions;
    } catch (erreur) {
        console.log(erreur);
    }
};


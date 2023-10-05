
const getQuestions = async (pathJson) => {
    try {
        const fetchQuestionsSolutions = await fetch(pathJson);
        const responseFetchQuestionsSolutions = await fetchQuestionsSolutions.json();
        console.log("response Fetch", responseFetchQuestionsSolutions);
        return responseFetchQuestionsSolutions;
    } catch (erreur) {
        console.log(erreur);
    }
};


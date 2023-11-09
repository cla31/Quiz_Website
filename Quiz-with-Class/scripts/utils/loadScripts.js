
const loadScripts = (scripts) => {
    scripts.forEach(function (src) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.head.appendChild(script);
    });
}

const scriptSources = [
    "./scripts/service/fetchQuestionsFromJson.js",
    "./scripts/factories/question.js",
    "./scripts/factories/user.js",
    "./scripts/utils/variables.js",
    "./scripts/domFunctions/initializeDomElements.js",
    "./scripts/domFunctions/displayModal.js",
    "./scripts/domFunctions/openQuizUI.js",
    "./scripts/events/quizEvents.js",
    "./scripts/domFunctions/displayQuestions.js",
    "./scripts/domFunctions/updateProgressBar.js",
    "./scripts/domFunctions/showResultBox.js",
    "./scripts/domFunctions/timer.js",
    "./scripts/utils/shuffleArray.js",
    "./scripts/runQuiz.js",
    "./scripts/main.js"
];

loadScripts(scriptSources);
  
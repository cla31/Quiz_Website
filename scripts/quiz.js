

const quiz = (questions) => {
    const infoBox = document.querySelector(".info-box");
    const continueBtn = infoBox.querySelector(".info-box__buttons .info-box__button--restart");
    const exitBtn = infoBox.querySelector(".info-box__buttons .info-box__button--quit");
    const quizBox = document.querySelector(".quiz-box");

    let queCount = 0;



    infoBox.classList.add("info-box--active");



    //Exit button
    function hideInfoBox() {
        infoBox.classList.remove("info-box--active");
    }

    //Continue button
    function startQuiz() {
        hideInfoBox();
        quizBox.classList.add("quiz-box--active");

    }

        // Gestion des événements
    exitBtn.addEventListener('click', () => hideInfoBox());
    continueBtn.addEventListener('click', () => startQuiz());

       // Initialisation
    shuffleArray(questions);
    questions[queCount].display();
};

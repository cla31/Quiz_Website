const showResultBox = () => {
    infoBox.classList.remove("info-box--active");
    quizBox.classList.remove("quiz-box--active");
    resultBox.classList.add("result-box--active");
    // const scoreText = resultBox.querySelector(".result-box__score-text");
    let scoreMessage = '';


    if (totalScore === 10) {
        console.log("Bravo!!!!");
    } else {
        if (totalScore > 5) {
            scoreMessage = `Congrats!, You got ${totalScore} out of 10`;
        } else if (totalScore > 2) {
            scoreMessage = `and nice 😎, You got ${totalScore} out of 10`;
        } else {
            scoreMessage = `and sorry 😐, You got only ${totalScore} out of 10`;
        }
    }        

    scoreText.innerHTML = `<span>${scoreMessage}</span>`;
}
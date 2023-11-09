const updateProgressBar = () => {
    const progressPercentage = (questionsDisplayed / 10) * 100;
    progressBar.style.width = progressPercentage + "%";
}
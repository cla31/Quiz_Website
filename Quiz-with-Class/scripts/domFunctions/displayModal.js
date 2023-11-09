const displayModal = (modal) => {
    modal.innerHTML = `
    <!-- <div class="info-box"> -->
    <div class="info-box"> 
        <div class="info-box__title"><span>Some Rules of this Quiz</span></div>
        <div class="info-box__list">
            <div class="info-box__item">1. You will have only <span>10 seconds</span> per each question.</div>
            <div class="info-box__item">2. Once you select your answer, it can't be undone.</div>
            <div class="info-box__item">3. You can't select any option once time goes off.</div>
            <div class="info-box__item">4. You can't exit from the Quiz while you're playing.</div>
            <div class="info-box__item">5. You'll get points on the basis of your correct answers.</div>
        </div>
        <div class="info-box__buttons">
            <button class="info-box__button--quit">Exit Quiz</button>
            <button class="info-box__button--restart">Continue</button>
        </div>
    </div>

    <!-- <div class="quiz-box"> -->
    <div class="quiz-box">
        <header class="quiz-box__header">
            <div class="quiz-box__title">Awesome Quiz Application</div>
            <div class="quiz-box__timer">
                <div class="quiz-box__time-left-text">Time Left</div>
                <div class="quiz-box__timer-sec"> </div>
            </div>
        </header>
        <section class="quiz-box__section">
            <div class="quiz-box__question-text">
                <!-- question from JavaScript -->
            </div>
            <div class="quiz-box__option-list">
                <div id="option_list" class="quiz-box__option">
                    <!-- options from JavaScript -->
                </div>
            </div>
        </section>

        <footer class="quiz-box__footer">
            <div class="quiz-box__progress-bar">
                <div class="quiz-box__progress"></div>
            </div>
            <button class="quiz-box__next-button">Next Que</button>
        </footer>
    </div>

    <!-- <div class="result-box "> -->
    <div class="result-box">
        <div class="result-box__icon">
            <i class="fas fa-crown"></i>
        </div>
        <div class="result-box__complete-text">You've completed the Quiz!</div>
        <div class="result-box__score-text">

        </div>
        <div class="result-box__buttons">
            <button class="result-box__button--restart">Replay Quiz</button>
            <button class="result-box__button--quit">Quit Quiz</button>
        </div>
    </div>`;
};

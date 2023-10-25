class Question {
    constructor(number, question, options, solution) {
        this.number = number;
        this.question = question;
        this.options = options;
        this.solution = solution;
        this.userScore = 0
        this.userHasSelected = false;
        this.option_list = document.querySelector(".quiz-box__option");
    }

     display() {
        // console.log("number de la question ds la classe",this.number);
        const que_text = document.querySelector(".quiz-box__question-text");
        que_text.innerHTML = `<span>${this.number}. ${this.question}</span>`;
        // console.log("this option list",this.option_list)
        // const option_list = document.querySelector(".quiz-box__option");
        this.option_list.innerHTML = ''; 
    
        this.options.forEach((option, index) => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("quiz-box__option-item");
            optionElement.innerHTML = `<span>${option}</span>`;
    
            optionElement.addEventListener("click", () => {
                this.optionSelected(index);
            });
    
            this.option_list.appendChild(optionElement);
        });
    }

    optionSelected(answerIndex) {
        // const option_list = document.querySelector(".quiz-box__option");
        let tickIconTag = '<div class="quiz-box__option--icon quiz-box__option--correct-icon"><i class="fas fa-check"></i></div>';
        let crossIconTag = '<div class="quiz-box__option--icon quiz-box__option--incorrect-icon"><i class="fas fa-times"></i></div>';
        if (this.userHasSelected) {
            alert("You have already selected an answer.");
            return;
        }

        const selectedOptionElement = this.option_list.children[answerIndex];
        const userAns = selectedOptionElement.textContent;
        let correctAns = this.getSolution();
        const totalOptions = this.options.length;
    
        if (userAns === correctAns) {
            this.userScore = 1; 
            selectedOptionElement.classList.add("quiz-box__option-item--correct"); 
            selectedOptionElement.insertAdjacentHTML("beforeend", tickIconTag); 
            // console.log("Your score is = " + this.userScore);
            totalScore += this.userScore;
            // console.log("Your total score is = " + totalScore); 

        }else{
            selectedOptionElement.classList.add("quiz-box__option-item--incorrect"); 
            selectedOptionElement.insertAdjacentHTML("beforeend", crossIconTag); 
    
            for(let i = 0; i < totalOptions; i++){
                if(this.option_list.children[i].textContent == correctAns){ 
                    this.option_list.children[i].classList.add("quiz-box__option-item--correct");
                    this.option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                }
            }
        }
        this.userHasSelected = true;

        for(let i=0; i < totalOptions; i++){
            this.option_list.children[i].classList.add("quiz-box__option-item--disabled"); 
        }
    }  

    getSolution() {
        if (this.solution >= 1 && this.solution <= this.options.length) {
            return this.options[this.solution - 1];
        } else {
            return "Solution non valide"; 
        }
    }

}
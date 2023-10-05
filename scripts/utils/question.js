class Question {
    constructor(number, question, options, solution) {
        this.number = number;
        this.question = question;
        this.options = options;
        this.solution = solution;
        this.userScore = 0
        this.userHasSelected = false;
    }

    getSolution() {
        if (this.solution >= 1 && this.solution <= this.options.length) {
            return this.options[this.solution - 1];
        } else {
            return "Solution non valide"; 
        }
    }

}
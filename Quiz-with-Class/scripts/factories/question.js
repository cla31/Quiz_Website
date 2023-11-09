class Question {
    constructor(number, question, options, solution) {
      this.number = number;
      this.question = question;
      this.options = options;   
      //stocke la réponse correcte.
      this.solution = solution;
    }
    
    // permet de récupérer l'option correcte d'une question 
    // en se basant sur la valeur de this.solution, 
    getSolution() {
      if (this.solution >= 1 && this.solution <= this.options.length) {
          return this.options[this.solution - 1];
      } else {
          return "Solution non valide"; 
      }
    }

  
  }
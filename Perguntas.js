class Pergunta {
    constructor(id_quiz, num, questao, alternativas, respostas) {
      this.id_quiz = id_quiz;
      this.num = num;
      this.questao = questao;
      this.alternativas = alternativas || [];
      this.respostas = respostas || [];
    }
  }
  
  export { Pergunta };
  
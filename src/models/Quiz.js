class Quiz {
  /**
   * @param {number} id
   * @param {number} id_criador
   * @param {Pergunta[]} perguntas
   * @param {number} tempolimite
   * @param {string} tema
   * @param {string} titulo
   * @param {string} idioma
   */
  constructor(id, id_criador, perguntas = [], tempolimite, tema, titulo, idioma) {
    this.id = id;
    this.id_criador = id_criador;
    this.perguntas = perguntas;
    this.idioma = idioma;
    this.tema = tema;
    this.titulo = titulo;
    this.tempolimite = tempolimite;
  }
}

export { Quiz };

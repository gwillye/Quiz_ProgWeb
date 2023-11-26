class Quiz {
  constructor(id, id_criador, perguntas, tempolimite, tema, titulo, idioma) {
    this.id = id;
    this.id_criador = id_criador;
    this.perguntas = perguntas || [];
    this.idioma = idioma;
    this.tema = tema;
    this.titulo = titulo;
    this.tempolimite = tempolimite;
  }
}

export { Quiz };

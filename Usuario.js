class Usuario extends Pessoa {
    constructor(id, nome, email, senha, nickname, telefone) {
      super(id, false, nome, email, senha, nickname, telefone);
    }
  }

export { Usuario };
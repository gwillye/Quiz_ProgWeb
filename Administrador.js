class Administrador extends Pessoa {
    constructor(id, nome, email, senha, nickname, telefone) {
      super(id, true, nome, email, senha, nickname, telefone);
    }
  }

export { Administrador };
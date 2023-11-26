class Administrador extends Pessoa {
  /**
   * @param {number} id
   * @param {string} nome
   * @param {string} email
   * @param {string} senha
   * @param {string} nickname
   * @param {string} telefone
   */
  constructor(id, nome, email, senha, nickname, telefone) {
    super(id, true, nome, email, senha, nickname, telefone);
  }
}

export { Administrador };

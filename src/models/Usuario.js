class Usuario extends Pessoa {
  /**
   * @param {number} id
   * @param {string} nome
   * @param {string} email
   * @param {string} senha
   * @param {string} nickname
   * @param {string} telefone
   */
  constructor(id, nome, email, senha, nickname, telefone) {
    super(id, false, nome, email, senha, nickname, telefone);
  }
}

export { Usuario };

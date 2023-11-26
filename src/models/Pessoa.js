class Pessoa {
  /**
   * @param {number} id
   * @param {boolean} adm
   * @param {string} nome
   * @param {string} email
   * @param {string} senha
   * @param {string} nickname
   * @param {string} telefone
   */
  constructor(id, adm, nome, email, senha, nickname, telefone) {
    this.id = id;
    this.adm = adm;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
    this.nickname = nickname;
    this.telefone = telefone;
  }
}

export { Pessoa };

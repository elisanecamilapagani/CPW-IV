export default class Lancamento {

  constructor(nome, telefone, email) {
    this.id = Math.random().toString(36).substr(2, 5);
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

}




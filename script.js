class Jogador {
    constructor(id, nome, pontos, status = true) {
      this.id = id;
      this.nome = nome;
      this.pontos = pontos;
      this.status = status;
    }

    getData(){
        console.log(`
            -----Dados do Jogador-----
            ID: ${this.id}
            Nome: ${this.nome}
            Pontos: ${this.pontos}
            Status: ${this.status ? Ativo : Inativo}
            --------------------------`)
    }
}
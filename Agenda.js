export class Agenda{
    #data;
    #descricao;
    #responsavel;
    constructor(data, descricao, reponsavel){
        this.#data = data;
        this.#descricao = descricao;
        this.#responsavel = reponsavel;
    }

    get data(){ return this.#data}
    reagendar(novaData){this.#data = novaData}
    get descricao(){return this.descricao}
}
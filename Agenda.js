export class Agenda{
    #data;
    #descricao;
    #responsavel;
    constructor(data, descricao, responsavel){
        this.#data = data;
        this.#descricao = descricao;
        this.#responsavel = responsavel;
    }

    getData(){ return this.#data};
    reagendar(novaData){this.#data = novaData};
    getDescricao(){return this.#descricao};
    getResponsável(){return this.#responsavel};

    obterDetalhes(){
        return{data: this.#data,
            descricao: this.#descricao,
            responsavel: this.#responsavel
        };
    }
}

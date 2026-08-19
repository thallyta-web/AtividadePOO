export class Funcionario{
     #salario;
    constructor(nome, idFuncional, salario) {
        if (this.constructor === Funcionario){
            throw new Error("Classe abstrata Funcionario é abstrata e por isso não pode ser instanciada");
            
        }
        this.nome = nome;
        this.idFuncional = idFuncional;
        this.#salario= salario;
    }

    getSalario(){return this.#salario} //erro consertado
    setSalario(novoSalario){this.#salario = novoSalario} //erro consertado

    descreverFuncao() {
        throw new Error("O metodo descreverFuncao() deve ser implementado pela subclasse");
    }
}
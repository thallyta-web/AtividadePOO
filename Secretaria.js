import {Funcionario} from './Funcionario.js';
export class Secretaria extends Funcionario{
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario);
        this.ramal = ramal;
        this.agendamento = [];
}
    descreverFuncao(){
        return "Secretaria"
    }
    criarAgendamento(data, descricao, reponsavel){
        this.agendamento.push(data, descricao, reponsavel);
    }
}
import {Funcionario} from './Funcionario.js';
export class Medico extends Funcionario{
    constructor(nome, idFuncional, salario, crm){
        super(nome, idFuncional, salario);
        this.crm = crm;
        this.especialidades = [];
}
    descreverFuncao(){
        return "Médico"
    }
    adicionarEspecialidade(especialidade){
        this.especialidades.push(especialidade);
    }
}
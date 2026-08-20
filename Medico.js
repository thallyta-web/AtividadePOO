import {Funcionario} from './Funcionario.js';
export class Medico extends Funcionario{
    constructor(nome, idFuncional, salario, crm){
        super(nome, idFuncional, salario);
        this.crm = crm;
        this.especialidades = [];
}
    descreverFuncao(){
        return "Médico - Responsável por diagnosticar e cuidar do paciente."
    }
    adicionarEspecialidade(especialidade){
        this.especialidades.push(especialidade);
    }
}

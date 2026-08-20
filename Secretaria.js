import {Funcionario} from './Funcionario.js';
import { Agenda } from './Agenda.js';
export class Secretaria extends Funcionario{
    constructor(nome, idFuncional, salario, ramal){
        super(nome, idFuncional, salario);
        this.ramal = ramal;
        this.agendamento = [];
}
    descreverFuncao(){
        return "Secretária - Responsável pelo atendimento, organização e gerenciamento de agendamentos.";
    }
    criarAgendamento(data, descricao, responsavel){
         const novaAgenda = new Agenda(
            data,
            descricao,
            responsavel
        );
            this.agendamento.push(novaAgenda);
        
            return novaAgenda;
        }
}

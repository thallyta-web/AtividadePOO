import {Funcionario} from './Funcionario.js';
import {Medico} from './Medico.js';
import {Secretaria} from './Secretaria.js';
import {Especialidade} from './Especialidade.js';
import {Agenda} from './Agenda.js';

//------TESTES------
//Teste 1 - Certo
/*const funcionario = new Funcionario("Marcos")
funcionario.descreverFuncao()*/

//teste 2 - Certo
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

console.log("Salário inicial do médico", medico.getSalario());
medico.setSalario(180000);
console.log("Novo salário após atualização:", medico.getSalario());*/

//Teste 3 - Certo
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);
const funcionario = [medico, secretaria];
funcionario.forEach(funcionario => {
    console.log(`${funcionario.nome}: ${funcionario.descreverFuncao()}`);
});*/

//Teste 4 - Certo
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

const oftamologista =  new Especialidade("Oftamologista", "OFT01", "Médico especialista em cuidado ocular.");
const cardiologista = new Especialidade("Cardiologista", "CAR01", "Médico especialista em cuidados com o coração.");

medico.adicionarEspecialidade(oftamologista);
medico.adicionarEspecialidade(cardiologista);

console.log(oftamologista);*/

//Teste 5
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

const agendamento*/

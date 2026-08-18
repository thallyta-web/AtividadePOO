class Funcionario {
    #salario;
    constructor(nome, idFuncional, salario) {
        if (this.constructor === Funcionario){
            throw new Error("Classe abstrata Funcionario é abstrata e por isso não pode ser instanciada");
            
        }
        this.nome = nome;
        this.idFuncional = idFuncional;
        this.#salario= salario;
    }

    get salario(){return this.#salario}
    set salario(novoSalario){this.#salario = novoSalario}

    descreverFuncao() {
        throw new Error("O metodo descreverFuncao() deve ser implementado pela subclasse");
    }
}

class Medico extends Funcionario{
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

class Secretaria extends Funcionario{
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

class Especialidade{
    constructor(nome, codigo, descricao){
        this.nome = nome;
        this.codigo = codigo;
        this.descricao = descricao;
    }

    obterDetalhes(){
        console.log(`${this.nome} (${this.codigo}) : ${this.descricao}`);
    }
}

class Agenda{
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

//------TESTES------
//Teste 1
/*const funcionario = new Funcionario("Marcos")
funcionario.descreverFuncao()*/

//teste 2
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

console.log("Salário inicial do médico", medico.getSalario());
medico.setSalario(180000);
console.log("Novo salário após atualização:", medico.getSalario());*/

//Teste 3
//const funcionario = [Medico, secretaria]

//Teste 4 - Certo
/*const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

const oftamologista =  new Especialidade("Oftamologista", "OFT01", "Médico especialista em cuidado ocular.");
const cardiologista = new Especialidade("Cardiologista", "CAR01", "Médico especialista em cuidados com o coração.");

medico.adicionarEspecialidade(oftamologista);
medico.adicionarEspecialidade(cardiologista);

console.log(oftamologista);*/

//Teste 5
const medico = new Medico("João", "001", 20000, "CRM12345");
const secretaria = new Secretaria("Ana", "002", 4000, 15);

const agendamento
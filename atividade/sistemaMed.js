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

    get salario(){ return this.#salario}
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


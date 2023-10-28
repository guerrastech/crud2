class Aluno{

    constructor(){
        this.nome = '';
        this.nascimento = '';
        this.cpf = '';
        this.mae = ''
        this.genero = '';
        this.matricula = '';
        this.telefone = '' ;
        this.listaAlunos = [];
    }

    salvarAluno(){''
       let aluno = this.lerAluno();

       if(this.validarCampos(aluno)){
        this.adicionarAluno(aluno);
       }
       
       this.listaTabela();
    }


    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
    }

    adicionarAluno(aluno){
        this.listaAlunos.push(aluno);

        for(let i = 0; i < this.listaAlunos.length; i++){
            let tr = tbody.insertRow();

            let td_nome = tr.insertCell();
            let td_nascimento = tr.insertCell();
            let td_cpf = tr.insertCell();
            let td_mae = tr.insertCell();
            let td_genero = tr.insertCell();
            let td_matricula = tr.insertCell();
            let td_telefone = tr.insertCell();

            td_nome.innerText = this.listaAlunos[i].nome;
            td_nascimento.innerText = this.listaAlunos[i].nascimento;
            td_cpf.innerText = this.listaAlunos[i].cpf;
            td_mae.innerText = this.listaAlunos[i].mae;
            td_genero.innerText = this.listaAlunos[i].genero;
            td_matricula.innerText = this.listaAlunos[i].matricula;
            td_telefone.innerText = this.listaAlunos[i].telefone;
        }
    }

    lerAluno(){
        let aluno = {}

        aluno.nomeAluno = document.getElementById('c-nome').value;
        aluno.nascimentoAluno = document.getElementById('c-nascimento').value;
        aluno.cpfAluno = document.getElementById('c-cpf').value;
        aluno.maeAluno = document.getElementById('c-mae').value;
        aluno.generoAluno = document.getElementById('c-genero').value;
        aluno.matriculaAluno = document.getElementById('c-matricula').value;
        aluno.telefoneAluno = document.getElementById('c-telefone').value;

        return aluno;
    }


    validarCampos(aluno){
        let msg = '';

        if (aluno.nomeAluno == '' || aluno.nascimentoAluno == '' || aluno.cpfAluno == '' || aluno.maeAluno == '' || aluno.generoAluno == ''|| aluno.matriculaAluno == '' || aluno.telefoneAluno == '') {
            msg += '- Voce precisa preencher todos os dados'
          }

          if(msg !== ''){
            alert(msg);
            return false;
          }

          return true;
    }

}

var aluno = new Aluno();
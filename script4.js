//CRUD

// Banco de Dados
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_aluno')) ?? []
const setLocalStorage = (dbAlun) => localStorage.setItem("db_aluno", JSON.stringify(dbAlun) )

// Excluir Alunos

const excluirAlun = (index) =>{
    const dbAlun = lerAlun()
    dbAlun.splice(index, 1)
    setLocalStorage(dbAlun)
}

//Atualizar Alunos

const atualizarAlun = (index, alun) => {
    const dbAlun = lerAlun()
    dbAlun[index] = alun
    setLocalStorage(dbAlun)

}
// Ler os Alunos

const lerAlun = () => getLocalStorage()

// Create
const cadastrarAlun = (alun) => {
    const dbAlun = getLocalStorage()  
    dbAlun.push(alun)
    setLocalStorage(dbAlun)
    
}

// acoes nos formulario de cadastro

const validarCampos = () => {
    return document.getElementById('infos-cadastro').reportValidity()
}

const limparCampos = () =>{
    const campos = document.querySelectorAll('.inputs-cadastro')
    campos.forEach(campo => campo.value = "")
}

const limparTabela = () => {
    const linhas = document.querySelectorAll('#table-alunos>tbody tr')
    linhas.forEach(linha => linha.parentNode.removeChild(linha))
}
// Tabela com os cadastros dos Alunos


const cadastrarAluno = () => {
    if(validarCampos()) {
        const alun = {
        nomeAluno : document.getElementById('c-nome').value,
        nascimentoAluno : document.getElementById('c-nascimento').value,
        cpfAluno : document.getElementById('c-cpf').value,
        maeAluno : document.getElementById('c-mae').value,
        generoAluno : document.getElementById('c-genero').value,
        matriculaAluno : document.getElementById('c-matricula').value,
        telefoneAluno : document.getElementById('c-telefone').value

        }
        const index = document.getElementById('c-nome').dataset.index

        if(index == 'new'){
            cadastrarAlun(alun)
            atualizarTabela()
        limparCampos()
        console.log('Cadastrando Aluno')
        }else{
            atualizarAlun(index, alun)
            atualizarTabela()
        }
    }
}


const criarLinha = (alun, index) => {
    const novaLinha = document.createElement('tr')
    novaLinha.innerHTML = 
    `<td>${alun.nomeAluno}</td>
    <td>${alun.nascimentoAluno}</td>  
    <td>${alun.cpfAluno}</td> 
    <td>${alun.maeAluno}</td> 
    <td>${alun.generoAluno}</td>
    <td>${alun.matriculaAluno}</td> 
    <td>${alun.telefoneAluno}</td> 
    <td><button type="button" class="button green" id= "edit-${index}">Editar</button></td>
    <td><button type="button" class="button red" id = "delete-${index}">Excluir</button></td>`

    document.querySelector('#table-alunos>tbody').appendChild(novaLinha)
}


const atualizarTabela = () =>{
    const dbAlun = lerAlun()
    limparTabela()
    dbAlun.forEach(criarLinha)

}

atualizarTabela()

const preecherDados = (alun) =>{
     document.getElementById('c-nome').value = alun.nomeAluno
     document.getElementById('c-nascimento').value = alun.nascimentoAluno
     document.getElementById('c-cpf').value = alun.cpfAluno
     document.getElementById('c-mae').value = alun.maeAluno
     document.getElementById('c-genero').value = alun.generoAluno
     document.getElementById('c-matricula').value = alun.matriculaAluno
     document.getElementById('c-telefone').value = alun.telefoneAluno
     document.getElementById('c-nome').dataset.index = alun.index

}




const editarAluno = (index) => {
    const alun = lerAlun()[index]
    alun.index = index
    preecherDados(alun)
    document.querySelector(".cabecalho-form>h1").textContent  = `Editando ${alun.nome}`
}


const editarDeletarAluno = (event) =>{
    if(event.target.type == 'button'){
        
        const[action, index] = event.target.id.split('-')

        if(action == 'edit'){
            editarAluno(index)
        }else{
            excluirAlun(index)
            atualizarTabela()
        }
    }
}

//Acoes do Usuário

document.getElementById('btnCadastrar').addEventListener('click', cadastrarAluno)

document.querySelector("#table-alunos>tbody").addEventListener('click', editarDeletarAluno)


function mostraCadastro(){

    var x = document.getElementById("");

    if (x.style.display === "none") { 
        x.style.display = "block";
        document.getElementById("container-alunos").style.display = 'none';
    } 
    else{
        x.style.display = "block";
        document.getElementById("container-alunos").style.display = 'none';
    }
}

function mostraAtualizar(){

    var x = document.getElementById("");

    if (x.style.display === "none") { 
        x.style.display = "block";
        document.getElementById("container").style.display = 'none';
    } 
    else{
        x.style.display = "block";
        document.getElementById("container").style.display = 'none';
    }
}


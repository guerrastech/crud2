const alunoCadastrando = document.querySelector('.container');
const tbody = document.querySelector('tbody');
const sNome = document.querySelector('#c-nome');
const sNascimento = document.querySelector('#c-nascimento');
const sCpf = document.querySelector('#c-cpf');
const sMae = document.querySelector('#c-mae');
const sGenero = document.querySelector('#c-genero');
const sMatricula = document.querySelector('#c-matricula');
const sTelefone = document.querySelector('#c-telefone');
const btnCadastrar = document.querySelector('#btnCadastrar');

let itens;
let id;


function excluirAluno(index) {
    itens.splice(index, 1);
    setItensBD();
    loadItens();
  }


function inserirAluno(item,index){
  const listaAlunos = document.getElementById("listaAlunos");

    const alunocad = document.createElement("tr");
    alunocad.innerHTML = 
    `<td>${aluno.nome}</td>
    <td>${aluno.nascimento}</td> 
    <td>${aluno.cpf}</td> 
    <td>${aluno.mae}</td> 
    <td>${aluno.genero}</td>
    <td>${aluno.matricula}</td> 
    <td>${aluno.telefone}</td> 
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="excluirAluno(${index})"><i class='bx bx-trash'></i></button>
    </td>`

    tbody.appendChild(tr);
}




btnCadastrar.onclick = e => {
  
    if (sNome.value == '' || sNascimento.value == '' || sCpf.value == '' || sMae.value == '' || sGenero.value == ''|| sMatricula.value == '' || sTelefone.value == '') {
      return;
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
      itens[id].nome = sNome.value;
      itens[id].nascimento = sNascimento.value;
      itens[id].cpf = sCpf.value;
      itens[id].mae = sMae.value;
      itens[id].genero = sGenero.value;
      itens[id].matricula = sMatricula.value;
      itens[id].telefone = sTelefone.value;
    } else {
      itens.push({
      'nome': sNome.value, 
      'nascimento': sNascimento.value, 
      'cpf': sCpf.value, 
      'mae': sMae.value, 
      'genero': sGenero.value, 
      'matricula': sMatricula.value, 
      'telefone': sTelefone.value });
    }
  
    setItensBD();
    alunoCadastrando.classList.remove('active');
    loadItens();
    id = undefined;
  }
  
  function loadItens() {
    itens = getItensBD();
    tbody.innerHTML = '';
    itens.forEach((item, index) => {
      inserirAluno(item, index);
    })
  
  }


const getItensBD = () => JSON.parse(localStorage.getItem('dbalun')) ?? [];
const setItensBD = () => localStorage.setItem('dbalun', JSON.stringify(itens));

loadItens()

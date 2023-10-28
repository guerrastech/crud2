// const alunos = [];
// let alunoParaEditar = null;

// function renderizarLista() {
//   const listaAlunos = document.getElementById("listaAlunos");
//   listaAlunos.innerHTML = "";

//   alunos.forEach((aluno, index) => {
//     const itemLista = document.createElement("li");
//     itemLista.textContent = `Nome: ${aluno.nome}, Data de Nascimento: ${aluno.nascimento}, CPF: ${aluno.cpf}, Nome da mãe: ${aluno.mae}, Matrícula: ${aluno.matricula}, Telefone: ${aluno.telefone}, Gênero: ${aluno.genero}`;

//     const btnExcluir = document.createElement("button");
//     btnExcluir.textContent = "Excluir";
//     btnExcluir.addEventListener("click", () => {
//       excluirAluno(index);
//     });

//     const btnEditar = document.createElement("button");
//     btnEditar.textContent = "Editar";
//     btnEditar.addEventListener("click", () => {
//       carregarParaEdicao(index);
//     });

//     itemLista.appendChild(btnExcluir);
//     itemLista.appendChild(btnEditar);
//     listaAlunos.appendChild(itemLista);
//   });
// }

// function salvarAluno() {
//   const nome = document.getElementById("nome").value;
//   const dataNascimento = document.getElementById("nascimento").value;
//   const CPF = document.getElementById("cpf").value;
//   const nomeMae = document.getElementById("mae").value;
//   const matricula = document.getElementById("matricula").value;
//   const telefone = document.getElementById("telefone").value;
//   const genero = document.querySelector('input[name="genero"]:checked').value;

//   if (alunoParaEditar !== null) {
//     alunos[alunoParaEditar] = {
//       nome: nome,
//       nascimento: dataNascimento,
//       cpf: CPF,
//       mae: nomeMae,
//       matricula: matricula,
//       telefone: telefone,
//       genero: genero,
//     };
//     alunoParaEditar = null;
//   } else {
//     alunos.push({
//       nome: nome,
//       nascimento: dataNascimento,
//       cpf: CPF,
//       mae: nomeMae,
//       matricula: matricula,
//       telefone: telefone,
//       genero: genero,
//     });
//   }

//   document.getElementById("nome").value = "";
//   document.getElementById("nascimento").value = "";
//   document.getElementById("cpf").value = "";
//   document.getElementById("mae").value = "";
//   document.getElementById("matricula").value = "";
//   document.getElementById("telefone").value = "";
//   document.getElementById("feminino").checked = false;
//   document.getElementById("masculino").checked = false;
//   renderizarLista();
// }

// function excluirAluno(index) {
//   alunos.splice(index, 1);
//   renderizarLista();
// }

// function carregarParaEdicao(index) {
//   alunoParaEditar = index;
//   document.getElementById("nome").value = alunos[index].nome;
//   document.getElementById("nascimento").value = alunos[index].nascimento;
//   document.getElementById("cpf").value = alunos[index].cpf;
//   document.getElementById("mae").value = alunos[index].mae;
//   document.getElementById("matricula").value = alunos[index].matricula;
//   document.getElementById("telefone").value = alunos[index].telefone;
// }

// document.getElementById("btnCadastrar").addEventListener("click", salvarAluno);

// renderizarLista();

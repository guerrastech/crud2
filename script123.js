function mostraCadastro(){

    var x = document.getElementById("cadastro");

    if (x.style.display === "none") { 
        x.style.display = "block";
        document.getElementById("atualizar").style.display = 'none';
        document.getElementById("excluir").style.display = 'none';
    } 
    else{
        x.style.display = "block";
        document.getElementById("atualizar").style.display = 'none';
        document.getElementById("excluir").style.display = 'none';
    }
}

function mostraAtualizar(){

    var x = document.getElementById("atualizar");

    if (x.style.display === "none") { 
        x.style.display = "block";
        document.getElementById("cadastro").style.display = 'none';
        document.getElementById("excluir").style.display = 'none';
    } 
    else{
        x.style.display = "block";
        document.getElementById("cadastro").style.display = 'none';
        document.getElementById("excluir").style.display = 'none';
    }
}


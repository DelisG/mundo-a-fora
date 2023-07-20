function enviarFormulario() {
    var nome = document.getElementById("nome").value;
    var mail = document.getElementById("mail").value;
    mensagem = (`Tudo certo, ${nome}, seu E-mail ${mail}, foi cadastrado com sucesso!`);
    document.getElementById("enviado").innerHTML = mensagem;
}
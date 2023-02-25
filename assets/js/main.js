function verificaEmail(){
    const email = document.getElementById('email');
    const tamEmail = email.value.length;

    if (tamEmail <= 0){
        alert("Digite um e-mail válido")
    }
}

function verificaSenha(){
    const senha = document.getElementById('password');
    const tamSenha = senha.value.length;

    if (tamSenha <= 0){
        alert("Digite uma senha válida")
    }
}
addEventListener ("submit", verificaEmail);addEventListener ("submit", verificaSenha);
function fnValidarMinimoDeCaracteres(minimo_de_caracteres , valor_do_campo){
    if(valor_do_campo.length < minimo_de_caracteres){
        return false;
    }else{
        return true;
    }
}

function fnValidarCampoObrigatorio(valor_do_campo){
    if(valor_do_campo.trim().length == 0){
        return false;
    }else{
        return true;
    }
}

function fnAdicionarMensagemDeErro(id_mensagem, mensagem){
    if(mensagem == "limpar"){
        document.getElementById(id_mensagem).style.display = "none";
        document.getElementById(id_mensagem).innerHTML = "";
        return;
    }

    document.getElementById(id_mensagem).style.display = "block";
    if(document.getElementById(id_mensagem).innerHTML == "")
        document.getElementById(id_mensagem).innerHTML = mensagem
    else{
        document.getElementById(id_mensagem).innerHTML += "<br>" + mensagem
    }
}

function fnValidarSenhaIgual(confirmar_senha, senha){
    if(confirmar_senha != senha){
        return false;
    }else{
        return true;
    }
}

function fnValidarSenhaMaiuscula(senha){
    let regex = /[A-Z]/;
    if(regex.test(senha)){
        return true;
    }else{
        return false;
    }
}

function fnValidarSenhaCaracterEspecial(senha){
    let regex = /[^a-zA-Z0-9]/;
    if(regex.test(senha)){
        return true;
    }else{
        return false;
    }
}

function fnValidarEmail(email){
    let regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;
    if(regex.test(email)){
        return true;
    }else{
        return false;
    }
}

module.exports = {
    fnValidarMinimoDeCaracteres,
    fnValidarCampoObrigatorio,
    fnValidarSenhaIgual,
    fnValidarSenhaMaiuscula,
    fnValidarSenhaCaracterEspecial,
    fnValidarEmail
}
document.getElementById("nome").addEventListener("blur", function() {
    fnAdicionarMensagemDeErro("alertNome", "limpar")
 
    let nomeValido = fnValidarMinimoDeCaracteres (5, this.value);
    if(nomeValido == false){
        fnAdicionarMensagemDeErro("alertNome", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 5 caracteres!")
        document.getElementById("alertNome").style.display = "block";
        document.getElementById("alertNome").classList.add("text-danger");
        this.focus();
    }
   
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertNome", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
   
    if(nomeValido == true && campoObrigatorio == true){
        document.getElementById("alertNome").classList.remove("text-danger");
        document.getElementById("alertNome").style.display = "block";
        document.getElementById("alertNome").classList.add("text-success");
        document.getElementById("alertNome").innerHTML = "<i class='bi bi-check-circle'></i> Nome válido!";
    }
})
 
document.getElementById("email").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("alertEmail", "limpar")
 
    let emailMinChar = fnValidarMinimoDeCaracteres(5, this.value);
    if(emailMinChar == false){
        fnAdicionarMensagemDeErro("alertEmail", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 5 caracteres!")
        document.getElementById("alertEmail").style.display = "block";
        document.getElementById("alertEmail").classList.add("text-danger");
        this.focus();
    }
   
    let emailValido = fnValidarEmail(this.value);
    if(emailValido == false){
        fnAdicionarMensagemDeErro("alertEmail", "<i class='bi bi-exclamation-triangle'></i> Email inválido!")
        document.getElementById("alertEmail").style.display = "block";
        document.getElementById("alertEmail").classList.add("text-danger");
        this.focus();
    }
   
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertEmail", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
   
    if(emailMinChar == true && emailValido == true && campoObrigatorio == true){
        document.getElementById("alertEmail").classList.remove("text-danger");
        document.getElementById("alertEmail").style.display = "block";
        document.getElementById("alertEmail").classList.add("text-success");
        document.getElementById("alertEmail").innerHTML = "<i class='bi bi-check-circle'></i> Email válido!";
    }
})
 
document.getElementById("senha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("alertSenha", "limpar")
 
    let senhaValida = fnValidarMinimoDeCaracteres(8, this.value);
    if(senhaValida == false){
        fnAdicionarMensagemDeErro("alertSenha", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 8 caracteres!")
        document.getElementById("alertSenha").style.display = "block";
        document.getElementById("alertSenha").classList.add("text-danger");
    }
 
    let letraMaiuscula = fnValidarSenhaMaiuscula(this.value);
    if(letraMaiuscula == false){
        fnAdicionarMensagemDeErro("alertSenha", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 1 letra maiúscula!")
        document.getElementById("alertSenha").style.display = "block";
        document.getElementById("alertSenha").classList.add("text-danger");
    }
 
    let caracterEspecial = fnValidarSenhaCaracterEspecial(this.value);
    if(caracterEspecial == false){
        fnAdicionarMensagemDeErro("alertSenha", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 1 caracter especial!")
        document.getElementById("alertSenha").style.display = "block";
        document.getElementById("alertSenha").classList.add("text-danger");
    }
 
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertSenha", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
 
    if(senhaValida == true && letraMaiuscula == true && caracterEspecial == true && campoObrigatorio == true){
        document.getElementById("alertSenha").classList.remove("text-danger");
        document.getElementById("alertSenha").style.display = "block";
        document.getElementById("alertSenha").classList.add("text-success");
        document.getElementById("alertSenha").innerHTML = "<i class='bi bi-check-circle'></i> Senha válida!";
    }
})
 
document.getElementById("confirmarSenha").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("alertConfirmarSenha", "limpar")
 
    let confirmarSenhaValida = fnValidarMinimoDeCaracteres(8, this.value);
    if(confirmarSenhaValida == false){
        fnAdicionarMensagemDeErro("alertConfirmarSenha", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 8 caracteres!")
        document.getElementById("alertConfirmarSenha").style.display = "block";
        document.getElementById("alertConfirmarSenha").classList.add("text-danger");
    }
 
    let senhaIgual = fnValidarSenhaIgual(this.value, document.getElementById("senha").value)
    if(senhaIgual == false){
        fnAdicionarMensagemDeErro("alertConfirmarSenha", "<i class='bi bi-exclamation-triangle'></i> As senhas não coincidem!")
        document.getElementById("alertConfirmarSenha").style.display = "block";
        document.getElementById("alertConfirmarSenha").classList.add("text-danger");
    }
   
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertConfirmarSenha", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
   
    if(confirmarSenhaValida == true && senhaIgual == true && campoObrigatorio == true){
        document.getElementById("alertConfirmarSenha").classList.remove("text-danger");
        document.getElementById("alertConfirmarSenha").style.display = "block";
        document.getElementById("alertConfirmarSenha").classList.add("text-success");
        document.getElementById("alertConfirmarSenha").innerHTML = "<i class='bi bi-check-circle'></i> Senha válida!";
    }
})
 
document.getElementById("cidade").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("alertCidade", "limpar")
 
    let cidadeValido = fnValidarMinimoDeCaracteres(2, this.value);
    if(cidadeValido == false){
        fnAdicionarMensagemDeErro("alertCidade", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 2 caracteres!")
        document.getElementById("alertCidade").style.display = "block";
        document.getElementById("alertCidade").classList.add("text-danger");
        this.focus();
    }
   
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertCidade", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
   
    if(cidadeValido == true && campoObrigatorio == true){
        document.getElementById("alertCidade").classList.remove("text-danger");
        document.getElementById("alertCidade").style.display = "block";
        document.getElementById("alertCidade").classList.add("text-success");
        document.getElementById("alertCidade").innerHTML = "<i class='bi bi-check-circle'></i> Cidade válida!";
    }
})
 
document.getElementById("estado").addEventListener("blur", function(){
    fnAdicionarMensagemDeErro("alertEstado", "limpar")
 
    let estadoValido = fnValidarMinimoDeCaracteres(2, this.value);
    if(estadoValido == false){
        fnAdicionarMensagemDeErro("alertEstado", "<i class='bi bi-exclamation-triangle'></i> Necessário ter no minímo 2 caracteres!")
        document.getElementById("alertEstado").style.display = "block";
        document.getElementById("alertEstado").classList.add("text-danger");
        this.focus();
    }
 
    let campoObrigatorio = fnValidarCampoObrigatorio(this.value)
    if(campoObrigatorio == false){
        fnAdicionarMensagemDeErro("alertEstado", "<i class='bi bi-exclamation-triangle'></i> Campo obrigatório!")
    }
   
    if(estadoValido == true && campoObrigatorio == true){
        document.getElementById("alertEstado").classList.remove("text-danger");
        document.getElementById("alertEstado").style.display = "block";
        document.getElementById("alertEstado").classList.add("text-success");
        document.getElementById("alertEstado").innerHTML = "<i class='bi bi-check-circle'></i> Estado válido!";
    }
})
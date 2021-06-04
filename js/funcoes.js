function exibirusuario() {

    var ustr = localStorage.getItem("ulogado");
    if (ustr == null) {
        window.location = "login.html";
    } else {
        var ujson = JSON.parse(ustr);

        document.getElementById("dados").innerHTML =
            "<h4>Usuário: " + ujson.nome + "<br>E-mail: " + ujson.email + "</h4>";

        document.getElementById("foto").innerHTML =
            "<img alt='Imagem do usuário' src=imagens/" + ujson.foto + ">";
    }
}

function logar() {
    var carta = {
        email: document.getElementById("txtemail").value,
        senha: document.getElementById("txtsenha").value
    };

    var envelope = {
        method: "POST",
        body: JSON.stringify(carta),
        headers: {
            "content-type": "application/json"
        }
    };

    //Deifnir conexão na página
    fetch("http://localhost:8080/login", envelope)
        //Ela vai retornar um objeto usuário
        .then(res => res.json())
        //mensagem ou ação caso ocorra sucesso na autenticação
        .then(res => { localStorage.setItem("ulogado", JSON.stringify(res)); window.location = "usuario.html"; })
        //caso o codigo apresente erro
        .catch(err => { window.alert("E-mail e/ou senha inválidos!!!") });
}
function filtrar() {

}

function preencherartistas() {
    fetch("http://localhost:8080/artistas")
        .then(res => res.json())
        .then(res => { for (contador = 0; contador < res.length; contador++) { document.getElementById("cmbartistas").innerHTML += "<option value='" + res[contador].id + "'>" + res[contador].nomeArtistico + "</option>"; } })
        .catch(err => { window.alert("Não existem artistas!"); window.location = "gravarartista.html"; });
}
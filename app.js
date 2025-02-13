// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');

    let nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);

    actualizarLista();

    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    // Generar los elementos de la lista
    amigos.forEach((amigo) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Verificar si hay integrantes en la lista
    if (amigos.length === 0) {
        alert("No hay integrantes en la lista. Por favor, añade al menos uno.");
        return;
    }
    
    let numRandomico = Math.floor(Math.random() * amigos.length);
    console.log(`El número random es: ${numRandomico}`);
    console.log(amigos[numRandomico]);

    const resultList = document.getElementById('resultado');

    const newItem = document.createElement('li');

    limpiarAmigos();

    newItem.textContent = `El seleccionado es: ${amigos[numRandomico]}`;
    
    resultList.appendChild(newItem);

}

function limpiarAmigos() {
    // Apuntar al elemento listaAmigos por ID y realizar la limpieza
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

}

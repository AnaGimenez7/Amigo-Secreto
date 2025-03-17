// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


//Funcion agregar un amigo a la lista de amigos
function agregarAmigo(){
 
 //capturar valor   
 const inputAmigo = document.getElementById("amigo");
 const nombreAmigo = inputAmigo.value.trim();

 //validacion
 if (nombreAmigo === "" ){ 
    alert ('Por favor, inserte un nombre.');
    return; 
 }
 //Actualizar array
    amigos.push(inputAmigo.value);
 //limpiar el campo
    amigo.value = "";
    
    actualizarListaAmigos();
}

//Funcion actualizar lista de amigos

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");

    //Limpiar el contenido actual de la lista
    listaAmigos.innerHTML = "";

    //Recorrer la lista con un ciclo for
    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Funcion sortear amigo

function sortearAmigo() {
    //validar que haya amigos disponibles
    if(amigos.length === 0 ){
        alert('No hay amigos disponibles para sortear');
        return;
    }

    //Generar un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    //Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    //Mostrar el resultado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}

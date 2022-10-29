//acceso a los nodos de html
const button = document.getElementById('button');
const letra = document.getElementById('letra');
const salida = document.getElementById('salida');
const ahorcado = document.querySelector('.ahorcado');
const victoria = document.querySelector('.victoria');
const hasFallado = document.querySelector('.perdio');

String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 

//un arreglo de palabras
const palabras = ['casa', 'perro', 'gato', 'conejo', 'elefante', 'pato'];

//palabra aleatorio del arreglo
const palabra = palabras[Math.floor(Math.random()*palabras.length)];

// guion bajo la palabra secreta
let palabraConGuiones = palabra.replace(/./g, "_ ");
salida.innerHTML = palabraConGuiones; 

let contadorFallos = 0;

//evento click evalua la palabra correcta y muestra el resultado
button.addEventListener('click', () => {
    const letraValor = letra.value;
    let haFallado = true;
    for(let i in palabra){
        if(letraValor == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2, letraValor);
            haFallado = false;
        }
    }

    if(haFallado){
        contadorFallos++;
        ahorcado.style.backgroundPosition = -(307*contadorFallos) + 'px 0';
        if(contadorFallos == 4){
            hasFallado.style.display = 'flex';
        }
    }else{
        if(palabraConGuiones.indexOf('_') < 0){
            victoria.style.display = 'flex';
        }
    }
    salida.innerHTML = palabraConGuiones; 
})
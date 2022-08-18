// function task(message) {
//   let n = 0;
//   while( n < 1000000000){
//     n++;
//   }
//   console.log(message);
// }

// console.log('iniciando la tarea');
// setTimeout(() => {
//   task('Archivo descargado');
// }, 2000);
// console.log('proceso finalizado');

function cuadrado(numero, callback){
  setTimeout(() => {
    callback(numero);
  }, Math.random() * 1000)
}

cuadrado(1, (valor) => {
  console.log(valor * valor);
  cuadrado(2, (valor) => {
    console.log(valor*valor);
    cuadrado(3, (valor) => {
      console.log(valor*valor);
      cuadrado(4, (valor) => {
        console.log(valor*valor);
        cuadrado(5, (valor) => {
          console.log(valor * valor)
        })
      })
    })
  })
});


// Promesas 
// retornabamos un valor o una función 

function miPromesa(numero) {
  if(typeof numero !== "number") {
    return Promise.reject('El argumento no es un numero');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero * numero);
    }, 2000);
  });
}

miPromesa(10)
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// funciones Asincronas

async function asincrona() {
  try {
    const resultado = await miPromesa(25);
    console.log(resultado);
  } catch (error) {
    console.log(error)
  }
}

const otraFuncion = async () => {
  try {
    const resultado = await miPromesa(30);
    console.log(resultado);
  } catch (error) {
    console.log(error)
  }
}

asincrona();
otraFuncion();

const charactersArea = document.querySelector('.grilla');

fetch('http://hp-api.herokuapp.com/api/characters')
.then((response) => response.json())
.then(data => printCharacters(data));

function printCharacters(character) {
  newData = character.slice(0, 20);
  console.log(character)
  insertCharacters(character);
}

function createCard (img, name) {
  return `
  <div class="hpCard">
    <div class="imgContainer">
    <img src=${img !== '' ? img : 'https://i.pinimg.com/550x/b8/09/fc/b809fcb455cdb9eb0bc61e871b5ecd4e.jpg'} alt="hp-character" />
    </div>
    <h5>${name}</h5>
  </div>
  `
}

function insertCharacters(arr) {
  charactersArea.innerHTML = arr.map((character) => createCard(character.image, character.name)).join('')
}



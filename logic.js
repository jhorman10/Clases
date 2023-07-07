// let arr1 = [1, 2, 3, 4];

// console.log(typeof arr1[0]);
// console.log(typeof arr1[0].toString());

// si a no viene toma el valor de 0
// if (condicion) { logica o valor de retoro o una accion}
// a y b sean numeros

// = , ==, ===,

// let valueincrement = 0;

// ++valueincrement;

// valueincrement++;

//ciclo for (donde inicio, hasta donde voy, cuanto incremento) { logica }

// for (let i = 0; i < arr1.length; i++) {
//   console.log(typeof arr1[i], `${arr1[i]}`);
// }

// 'fgfgfg ' + valueincrement + ' dfsdfdsf'

// `hdhdhdhdhdhhdhd

// sdfkdljfghlksdf

// ${}

// sjhdjfhdjf
// `;

// && , ||

//
// function sumarDosNumero(a = 0, b = 0) {
//   if (typeof a !== 'number' || typeof b !== 'number')
//     return console.error('a o b No es un numero'); // logica inversa
//   return a + b;
// }

// // resta ambos numeros sean mayores que 0

// function restaDosNumeros(a = 0, b = 0) {
//   if (a < 0 || b < 0) return console.error('a o b son menores a cero');
//   if (typeof a !== 'number' || typeof b !== 'number')
//     return console.error('a o b No es un numero');

//   return a - b;
// }

// function imprimirMensaje(){
//    console.log('Imprimir');
// }

// function restaDosNumeros2(a = 0, b = 0) {
//   if (a > 0 && b > 0) {
//     if (typeof a == 'number' && typeof b == 'number') {
//       return a - b;
//     } else {
//       return console.error('a o b No es un numero');
//     }
//   } else {
//     console.error('a o b son menores a cero');
//   }
// }

// array destructuring object destructuring

// let nArray = [3,4,5,6,7,8,9];

// let [ , , ,elementoCuatro] = nArray;

// let nObj = {
//     primero: 1,
//     segundo: 2,
//     tercero: 3
// }

// let { segundo } = nObj;

// console.log(sumarDosNumero(elementoCuatro,segundo));
// console.log('Resta: ',restaDosNumeros(elementoCuatro,segundo));
//imprimirMensaje();

// del arreglo estraigas el elemento #4
// del objeto la propiedad segundo
// los sumas y los restas con las funciones anteriores
// console con el resultado de la suma y otro para la resta

// console.log(restaDosNumeros(1, 'f'));

// document.getElementById('app').innerHTML = `

// <h2>Hola mundo 2</h2>

// <p>
// ${arr1[0].toString()}
// </p>
// `;
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// solucion del ejercicio

const btnCalcular = document.getElementById('btnCalcular')
let pResultado = document.getElementById('resultado')
let numero1 = document.getElementById('numero1');
let numero2 = document.getElementById('numero2');


function sumarDosNumero(a = 0, b = 0) {
  if (typeof a !== 'number' || typeof b !== 'number')
    return console.error('a o b No es un numero'); // logica inversa
  return a + b;
}

// resta ambos numeros sean mayores que 0

function restaDosNumeros(a = 0, b = 0) {
  if (a < 0 || b < 0) return console.error('a o b son menores a cero');
  if (typeof a !== 'number' || typeof b !== 'number')
    return console.error('a o b No es un numero');

  return a - b;
}

function calcular(){

  let nuevoNumero1 = Number(numero1.value);
  let nuevoNumero2 = Number(numero2.value);

  pResultado.innerText = restaDosNumeros(nuevoNumero1, nuevoNumero2);
  // nombreArr.push(nuevoNumero1);
  // aqui inhabilito boton
}

/**
 * vamos a agregar valores desde el formulario a un arreglo
 * 
 * 1. el formulario
 * 2. al hacer click en el boton agregar el formulario se debe limpiar
 * 3. ir visualizando el arreglo
 * 4. validar que el valor sea del mismo tipo del arreglo
 * 
 */
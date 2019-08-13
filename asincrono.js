// sincrona
function sumar(numero1, numero2) {
  return numero1 + numero2;
}

// callback
function sumarCallback(numero1, numero2, callback) {
  const total = numero1 + numero2;
  callback(null, total);
}

// function sumarPromesa(numero1, numero2) {
//   return new Promise((resolve, rejects) => {
//     if (numero1 === 0) return rejects(new Error('no se puede sumar, perdón'));
//     return resolve(numero1 + numero2);
//   });
// }

async function sumarPromesa(numero1, numero2) {
  return numero1 + numero2;
}

// total = sumar(5, 2); // sincrono
// sumarCallback(5, 2, (err, respuestaTotal) => console.log(`El total es: ${respuestaTotal}`)); // callbacks


async function iniciarAplicacion() {
  try {
    const data = await sumarPromesa(0, 2);
    console.log(`El total es: ${data}`);
  } catch (error) {
    console.log(`hubo un error: ${error} :(`);
  }
}

// function iniciarAplicacion() {
//   sumarPromesa(3, 2)
//     .then((data) => {
//       console.log(`El total es: ${data}`);
//     })
//     .catch((error) => {
//       console.log(`hubo un error: ${error} :(`);
//     });
// }

iniciarAplicacion();

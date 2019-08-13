const crearTabla = (numero) => (cantidad) => {
  for (let i = 1; i <= cantidad; i += 1) {
    console.log(`${i} * ${numero} = ${i * numero}`);
  }
};

const mostrarTablaMultiplicar = (numero, cantidad) => {
  for (let i = 1; i <= cantidad; i += 1) {
    console.log(`${i} * ${numero} = ${i * numero}`);
  }
};

mostrarTablaMultiplicar(5, 5);

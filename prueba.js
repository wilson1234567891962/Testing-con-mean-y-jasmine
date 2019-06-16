const saludar = nombre => `Hola ${nombre}`;

console.log(saludar('Platzi'));

const resultado = saludar('Platzi');
const esperado = 'Hola Platzi';

if (resultado === esperado) {
  console.log('Prueba exitosa');
} else {
  console.log('Prueba no exitosa');
}

function expect(actual) {
  return {
    toBe(expect) {
      if (actual !== expect) {
        throw new Error('Prueba no existosa');
      }
    }
  };
}


function it(title, callback) {
  try {
    callback();
    console.log('Prueba exitosa');
  } catch (error) {
    console.error('Prueba no exitosa');
  }
}
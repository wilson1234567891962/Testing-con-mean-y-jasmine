console.log(saludar('Platzi'));

const resultado = saludar('Platzi');
const esperado = 'Hola Platzi';

if (resultado === esperado) {
  console.log('Prueba exitosa');
} else {
  console.log('Prueba no exitosa');
}

it('La función saluda', () => {
  expect(saludar('Platzi')).toBe('Hola Platzi');
});
const { sumar } = require('./app');

if (sumar(2, 3) !== 5) {
  console.error('❌ Error: La prueba falló, 2 + 3 no es igual a 5');
  process.exit(1); 
}

console.log('✅ Prueba unitaria superada con éxito: 2 + 3 = 5');
process.exit(0);

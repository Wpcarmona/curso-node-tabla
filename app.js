const {crearArchivo, funcion2} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');

console.clear();

console.log(process.argv);



console.log('base: yargs', argv.base)



funcion2();
crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
.catch(err => console.log(err));

















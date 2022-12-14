const {crearArchivo} = require('./Helpers/Multiplicar');
const argv = require('./config/yargs.js');
console.clear();
console.log(argv);
crearArchivo(argv.b, argv.l)
.then( nombreArchivo => console.log (nombreArchivo, 'creado'))
.catch (err => console.log(err));
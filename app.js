// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 =  20
// 5 x 5 =  25
// 5 x 6 =  30
// 5 x 7 = 35 
// 5 x 8 =  40
// 5 x 9 =  45
// 5 x 10 =  50

const fs = require('fs')

console.clear();
console.log('=====================')
console.log('     Tabla del 3')
console.log('=====================')
const base = 3;
let salida = '';
for(let i = 1; i<=10;i++){
salida += `${base} x ${i} = ${base * i}\n`;

}
fs.writeFileSync(  'tabla-3.txt', salida);

console.log(`Tabla-${base}.txt creado.`);

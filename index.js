import { Calculadora1 } from './clases.js';
import { Calculadora2 } from './clases.js';

//1er apartado

let calc = new Calculadora1(5,5);//iniciando instancia de classe calculadora
let suma1 = calc.sumaDosNumeros(5,5);
let resta1 = calc.restaDosNumeros(5,5);
let multiplicacion1 = calc.multiplicar(5,5);
let division1 = calc.dividir(5,5);

//imprimo valores
console.log("Calculadora1 - Suma:", suma1());
console.log("Calculadora1 - Resta:", resta1());
console.log("Calculadora1 - Multiplicación:", multiplicacion1());
console.log("Calculadora1 - División:", division1());


//2do apartado
let calc2 = new Calculadora2(5,5);
let suma2 = calc2.sumaDosNumeros(5,5);
let resta2 = calc2.restaDosNumeros(5,5);
let multiplicacion2 = calc2.multiplicar(5,5);
let division2 = calc2.dividir(5,5);

//imprimo valores
console.log("Calculadora2 - Suma:", suma2());
console.log("Calculadora2 - Resta:", resta2());
console.log("Calculadora2 - Multiplicación:", multiplicacion2());
console.log("Calculadora2 - División:", division2());b

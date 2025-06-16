import { Calculadora2 } from './clases.js';

//2do apartado
let calc2 = new Calculadora2(5,5);
let suma2 = calc2.sumaDosNumeros();
let resta2 = calc2.restaDosNumeros();
let multiplicacion2 = calc2.multiplicar();
let division2 = calc2.dividir();

//imprimo valores
console.log("Calculadora2 - Suma:", suma2());
console.log("Calculadora2 - Resta:", resta2());
console.log("Calculadora2 - Multiplicación:", multiplicacion2());
console.log("Calculadora2 - División:", division2());

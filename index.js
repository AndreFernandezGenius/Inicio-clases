import { Restas,Sumas} from "./CLASES.JS";

//INSTANCIAS DE CLASSES
let instanciaSumas = new Sumas(); //instancia a clase Sumas, mediante a palabra chave 'new'
let instanciaRestas = new Restas(); //instancia a clase Restas, mediante a palabra chave 'new'

//MÉTODOS DE CLASSES
let sumaDeDousNumeros= instanciaSumas.sumaDousNumeros(2,3); //llama la funcion a instancia sumas
let sumaDeTresNumeros= instanciaSumas.sumaTresNumeros(2,3,4); //llama la funcion a instancia sumas
let restaDousNumeros= instanciaRestas.restaDousNumeros(2,3); //llama la funcion a instancia restas


//SAÍDAS POR CONSOLA 
console.log (sumaDeDousNumeros );
console.log (sumaDeTresNumeros );
console.log(restaDousNumeros);

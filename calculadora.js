//2do apartado
export class Calculadora2 {

  
  constructor(valor1,valor2) {
    this.valor1= valor1;
    this.valor2= valor2;
  }

  sumaDosNumeros() {
    return this.valor1+this.valor2;
  }

  restaDosNumeros() {
   return this.valor1-this.valor2;
  }

  multiplicar() {
      return this.valor1*this.valor2;
  }

  dividir() {
      return this.valor1/this.valor2;
  }
}





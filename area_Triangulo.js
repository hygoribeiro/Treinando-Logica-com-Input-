import entradaDAdos from "readline-sync";

console.log("vamos calcular a área de um triângulo? informe os valores abaixo.");

const base = entradaDAdos.question("informa o valor da base do triângulo: ");
const altura = entradaDAdos.question("informe o valor da altura do trinâgulo");

//calculo
const areaDoTriangulo = (base * altura) / 2;

console.log("a área do seu triangulo e de " + areaDoTriangulo);
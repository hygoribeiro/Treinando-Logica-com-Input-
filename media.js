let notas = [
    3,9,5,6
];

let totalDenota = notas.length;
let posicao1 = 0
let posicao2 = 1

while (totalDenota >=0){
    let somaDenotas = notas[posicao1 ]  + notas[posicao2];
    posicao1++
    posicao2++
    totalDenota -= 1
    console.log(somaDenotas)
}

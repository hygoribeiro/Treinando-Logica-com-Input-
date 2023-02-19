let numeros = [3,5,6,7,9,1,4,10];
let numerosInpar = 0;
let numerosPar = 0;
let contador = 0;
while(contador < numeros.length){
    if(numeros[contador] % 2 == 0){
        numerosPar++
    }else{
        numerosInpar++
    };
    contador++
};
console.log(`a quantidade de numeros par e: ${numerosPar}`)
console.log(`a quantidade de numeros inpar e: ${numerosInpar}`)
console.log(`total de numeros verificados foi: ${numeros.length}`)
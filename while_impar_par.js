const numeros = [
    1,2,3,4,5,6,7,8,9
];

let contador = 0;
let numeros_inpar = 0;
let numero_par= 0;

while(contador < numeros.length){
    if(numeros[contador] %2 == 0 ){
        numero_par++;
    }else{
        numeros_inpar++;
    };
    contador++
};
console.log(`nuemros de jogadores par e de: ${numero_par}`);
console.log(`nuemros de jogadores impar e de: ${numeros_inpar}`);
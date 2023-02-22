let mensalidade = 100;
let multa = 0.02;
let totalDeDias = 10;
let contador = 1;

do{
    let valorDaMulta = mensalidade * multa * contador;
    let novaMensalidade = mensalidade + valorDaMulta;

    console.log(`quantidade de dias ${contador} novo valor da mensalidade ${novaMensalidade}`);
    contador++
    
} while (contador < totalDeDias);
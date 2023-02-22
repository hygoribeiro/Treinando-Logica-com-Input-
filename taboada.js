import readline from "readline-sync";

let contador = 0;

for(let i = 0; i <= 100; i++){
    let numeroEscolido = readline.question("escola o numero quer vc quer ver a tabuada? ");
    let decimal = 0;

    while(contador <= 10){
        let multiplicacao = numeroEscolido * decimal;
        console.log(`${numeroEscolido} x ${decimal} = ${multiplicacao}`)
        decimal++
        contador++
    }

    let continuar = readline.question("desseja fazer outra multiplicação? (sim ou nao) ");

    if(continuar == "nao"){
        break
    }
    
    contador = 0;
}
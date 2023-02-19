//conversor de milhas 
import entradaDados from 'readline-sync';

console.log("conversor de milhas para quilometros")

const valueMilhas = entradaDados.question("digite o valor de milhas que deseja converter:");
const convercao =parseFloat( valueMilhas/ 0.62137) ;


console.log(`a conversao de ${valueMilhas} milhas e = ${convercao.toFixed(2)}`);
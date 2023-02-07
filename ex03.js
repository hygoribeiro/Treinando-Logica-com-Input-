import entradaDados from 'readline-sync';

console.log("Conversor de Celsius para Kelvim ");

const celsiusINput = entradaDados.question("informe o valor em Celsius que deseja converter:");

const celsuisParaKelvim = parseFloat(celsiusINput + 273) ;

console.log(`resultado da converção de ${celsiusINput}ºC e = ${celsuisParaKelvim} kelvim`);
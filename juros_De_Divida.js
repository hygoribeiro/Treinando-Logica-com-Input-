import entradaDAdos from "readline-sync";

while(true){
const valorDaDivida = entradaDAdos.question("informe o valo devido: ");

if(valorDaDivida === "0"){
    console.log("o Valor da Divida Deve Ser Maior que 0 !!!");
    break
}

const vencimento = entradaDAdos.question("infome quantos dias se passou des do dia do vencimento do boleto :");

console.log("Valor da Divida " + valorDaDivida);
console.log("Dias de Atraso: " + vencimento);

//calculo
function calculoDeJuros(){
    if(vencimento > 15){
        let jurosAcimaDe15 = (valorDaDivida * 10) /100;
        console.log("Taxa de Juros : 10%");
        console.log ("Valor Total com o Juros: " + (Number (jurosAcimaDe15)+ Number (valorDaDivida) ));
        
    
    }else if (vencimento <= 5){
        let jurosAbaixoDe15 = (valorDaDivida * 5) /100;
        console.log("Taxa de Juros : 5% " );
        console.log ("Valor Total com o Juros: " + ( Number(jurosAbaixoDe15) + Number (valorDaDivida)));
    }
};
calculoDeJuros()

break

}
import entradaDados from 'readline-sync';

//entrada de dados
let nome = entradaDados.question("digite seu nome: ");

let idade = entradaDados.question("qual e a sua idade?:")
//tratando dados
console.log(`ola ${nome} vc tem ${idade} correto?`)
    
let verdade = entradaDados.question("Sim ou Nao ?");

if(verdade === "sim"){
    console.log ("muito bem fico felis por ter acertado sua idade");
    
};

// verificando erro de sintax
while(verdade !== "sim" && verdade !== "nao"){
    
    console.log("comando innvalido repita o procedimento novamente")
     verdade =entradaDados.question("sim ou nao ?")
    if(verdade === "sim" || verdade === "nao"){
        verdade = verdade;
    };
    console.log ("muito bem fico felis por ter acertado sua idade");

};

//verificando idade correta
while(verdade === "nao"){
    if (verdade === "nao"){
        idade = entradaDados.question("intao repita sua idade ?");
        verdade = entradaDados.question(`sua idade e ${idade} sim ou nao ? `);
    };
    console.log ("muito bem fico felis por ter acertado sua idade");
};


let funcionarios =[
    {id: 1, nome: "Hygor", habilitado: false},
    {id: 2, nome: "Jessica", habilitado: false},
    {id: 3, nome: "Lucas", habilitado: false},
    {id: 4, nome: "Gabrielly", habilitado: false},
];
let contador = 0;
let possuiHabilitacao = false;
while(contador < funcionarios.length){
    let habilitados = funcionarios[contador];
    if(habilitados.habilitado == true){
        console.log (`esses são os funcinarios que possuem CNH ${habilitados.nome}`)
        possuiHabilitacao = true;
    }
    contador++
}
if(!possuiHabilitacao){
    console.log("não temos funcinarios com habilitação")
}



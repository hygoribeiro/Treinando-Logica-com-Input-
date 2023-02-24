const alunos = [
    {nome: "Hygor", nota1: 7, nota2: 9},
    {nome: "Maria", nota1: 7, nota2: 10},
    {nome: "Lorisvaldo", nota1: 4, nota2: 10},
    {nome: "Joaquina", nota1: 10, nota2:3},
];
let contador = 0;
const media = () => {
    let notas = alunos[contador];
    return(notas.nota1 + notas.nota2) /2;
}
const passou = () => {
    if(media() >= 7 ){
        console.log(`esse alunos forão aprovados ${alunos[contador].nome} com mdeia ${media()}`)
    }else{
        console.log("")
        console.log(`esses alunos forão reprovados ${alunos[contador].nome} com media ${media()}`)
    }

}

while(contador < alunos.length){
    passou()
    contador ++
}




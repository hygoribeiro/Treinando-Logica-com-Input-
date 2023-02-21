let alunos = [
    {id: 1, nome: "Hygor", media: 9},
    {id: 1, nome: "Luciano", media: 5},
    {id: 1, nome: "Ana", media: 6},
    {id: 1, nome: "Juliana", media: 4},
];
let contador = 0;

while(contador < alunos.length){

    let aluno = alunos[contador]

    contador++;

    if(aluno.media < 6){
        continue;
    }

    console.log(`os alunos aprovados são ${aluno.nome}`)
}
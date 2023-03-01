function mediaAluno(){
    return(this.nota1 + this.nota2) /2
}
let criarAluno = function (nome,n1,n2) {
    return{name: nome, nota1: n1, nota2: n2, media: mediaAluno
    }}


let alunos = [
    criarAluno("hygor", 10, 6),
    criarAluno("joão", 5, 9)
];
var turmas = alunos[0];

for(var turmas of alunos){
    
    
    console.log(turmas.name)
    console.log(turmas.media())
}
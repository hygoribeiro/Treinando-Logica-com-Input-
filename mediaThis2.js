function mediaAluno(){
    return(this.nota1 + this.nota2) /2
}
let criarAluno = function (nome,n1,n2) {
    this.name = nome;
    this.nota1 = n1;
    this.nota2 = n2;
    this.media = mediaAluno;
}

let alunos = [
    new criarAluno("hygor", 10, 6),
    new criarAluno("joão", 5, 9)
];
var turmas = alunos[0];

for(var turmas of alunos){
    
    console.log(turmas.name)
    console.log(turmas.media())
}
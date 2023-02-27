
function calcMedia (){
    return (this.notas[0] + this.notas[1]) /2;
};
let aluno1 = {
    nome: "Hygor",
    notas:[5,9],
    media: calcMedia
    }

let aluno2 = {
    nome: "Jessica",
    notas: [4,3],
    media: calcMedia,
};

console.log(aluno1.nome);
console.log(aluno1.media());

console.log(aluno2.nome);
console.log(aluno2.media());


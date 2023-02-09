import readline from 'readline-sync'

const notas = [5, 8, 3, 10];
const notasBonus = [9.6, 5.3];
//com a nota bonus o aluno pode escolher qual  bimestre que substituir pela a nota bonus ou se ele nao quer alterar os bimestres.
const escolhaUsuario = readline.question("vc quer alterar algum bimestre? sim/nao ");
if(escolhaUsuario === "sim"){
    trocaDeNotas()
}else{
    mediaSemAlteraçao()
}

function trocaDeNotas(){
        const escolhaUsuario = readline.question("qual nota vc quer alterar primerio bimestre = 1, segundo bimestre = 2 terceiro bimestre = 3, quarto bimestre = 4 ?");

        const trocandoPorBonus =readline.question(`qual nota bonus vc quer trocar 1= ${notasBonus[0]} ou 2= ${notasBonus[1]} ?`) ;

        const trocaConvertida = Number(escolhaUsuario);
        const conversaoBonus = Number(trocandoPorBonus);

        notas[trocaConvertida - 1] = notasBonus [conversaoBonus -1];

        mediaSemAlteraçao()
    }
function mediaSemAlteraçao(){
    const SomaDasNotas = (notas[0] + notas [1] + notas[2] + notas [3]);
    const mediaDasNotas = (SomaDasNotas / notas.length).toFixed(2);
    console.log("a media escolar desse aluno e de " +  mediaDasNotas);
        
}
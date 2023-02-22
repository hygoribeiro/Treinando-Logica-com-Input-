let cursos = [
    {name: "Ingles", preco: 2500, cargaHoraria: 160},
    {name: "Espanhol", preco: 1500, cargaHoraria: 110},
    {name: "Frances", preco: 3600, cargaHoraria: 200},
    {name: "Chines", preco:5500, cargaHoraria: 400},
    {name: "Alemão", preco: 3800, cargaHoraria: 230},
];
for(let curso of cursos){
    let valorHora = curso.preco / curso.cargaHoraria;

    console.log(`nome do curso ${curso.name}`);
    console.log(`carga Horaria do curso ${curso.cargaHoraria}`);
    console.log(`preco do curso ${curso.preco}`);

 if( valorHora < 15){
    console.log("Aula/Hora e inferior que 15$");
 }else{
    console.log("Aula/Hora e superior a 15$");
 }
 console.log("")
}
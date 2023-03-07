const formulario = document.querySelector('form');
const resultado = document.querySelector('#resultado');

formulario.addEventListener('submit', (enviar) => {
    enviar.preventDefault();

    let nome = document.querySelector('#name').value;
    let sobre = document.querySelector('#sobre').value;

    resultado.innerHTML = `<p>Nome: ${nome}</p> <p>Sobre nome: ${sobre}</p>`;
})
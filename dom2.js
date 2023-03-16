let diiv = document.getElementById("retorno")
let input = document.getElementById("input")
function clic(input){
   let h1 = document.getElementsByTagName("h1")[0];
 
   diiv.innerText = input.value
    console.log (h1)
}

function apagar(){
   
    diiv.style.display = "none"
     input.value = ""
    
}

function voltar(){
    diiv.style.display =""
    diiv.innerHTML=""
}
const nome ="Ana Campos";
let seguidores = 254;
const idade = 28;
let seguindo = false;

const botaoSeguir = document.querySelector(".follow-button");
console.log (botaoSeguir)
const botaoFoto = document.querySelector(".mostrar-foto");
const avatar = document.querySelector(".avatar-img");
const numeros = document.querySelector(".numero-seguidores");
numeros.textContent = seguidores

botaoSeguir.addEventListener("click", function(){
seguindo= !seguindo;

if(seguindo == true){
    botaoSeguir.textContent = "Seguindo";
    botaoSeguir.classList.add("ativo")
    seguidores ++;
}
else {
    botaoSeguir.textContent = "Seguir";
    botaoSeguir.classList.remove("ativo")
    seguidores --;
}

numeros.textContent = seguidores;
})
visivel = false;
botaoFoto.addEventListener("click", function(){
    visivel = !visivel;
   if(visivel == true){
    avatar.style.display="none"
   }
    else{
        avatar.style.display = "block";
    }
})
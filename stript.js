const nome ="Ana Campos";
let seguidores = "254";
const idade = 28;

const botaoSeguir = document.querySelector(".follow-button");
console.log (botaoSeguir)

botaoSeguir.addEventListener("click", function(){
botaoSeguir.textContent = "Seguindo";
botaoSeguir.classList.add("ativo")
})
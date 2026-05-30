

const board = document.querySelector("#container");
const botao = document.querySelector("#btnGrid");

for (let i = 0; i < 256 ; i++) {
    const novoQuadro = document.createElement("div");
    novoQuadro.classList.add("pixel");
    board.appendChild(novoQuadro);

    novoQuadro.addEventListener("mouseover", () => {
        novoQuadro.style.backgroundColor = "#3498db";
    });
};

btnGrid.addEventListener("click", () => {
    let tamanhoNovo = prompt("Porfavor escolha um tamanho desejado!"); 
})
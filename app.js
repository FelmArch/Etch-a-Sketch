

const board = document.querySelector("#container");

for (let i = 0; i < 256 ; i++) {
    const novoQuadro = document.createElement("div");
    novoQuadro.classList.add("pixel");
    board.appendChild(novoQuadro);
}
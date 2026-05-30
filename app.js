

const board = document.querySelector("#container");
const botaoTamanho = document.querySelector("#btnGrid");

for (let i = 0; i < 256 ; i++) {
    const novoQuadro = document.createElement("div");
    novoQuadro.classList.add("pixel");
    board.appendChild(novoQuadro);

    novoQuadro.addEventListener("mouseover", () => {
        novoQuadro.style.backgroundColor = "#3498db";
    });
};

botaoTamanho.addEventListener("click", () => {
    let tamanhoNovo = prompt("Porfavor escolha um tamanho desejado!"); 
    tamanhoNovo = parseInt(tamanhoNovo);
    
    if (tamanhoNovo > 100) {
        alert("Invalido! O máximo permitido é 100.")
    } else {
        board.innerHTML = "";

        for (let i = 0; i < tamanhoNovo * tamanhoNovo; i++) {
            const novoQuadro = document.createElement("div");
            novoQuadro.classList.add("pixel");
            board.appendChild(novoQuadro);

            novoQuadro.addEventListener("mouseover", () => {
                novoQuadro.style.backgroundColor = "#3498db";
            });
        }
    }
});
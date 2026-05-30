

const board = document.querySelector("#container");
const botaoTamanho = document.querySelector("#btnGrid");

for (let i = 0; i < 256 ; i++) {
    const novoQuadro = document.createElement("div");
    novoQuadro.classList.add("pixel");
    const tamanhoInicial = 800 / 16;
    novoQuadro.style.width = `${tamanhoInicial}px`;
    novoQuadro.style.height = `${tamanhoInicial}px`;
    novoQuadro.style.opacity = "0";
    board.appendChild(novoQuadro);

    novoQuadro.addEventListener("mouseover", () => {
        let opacidadeAtual = parseFloat(novoQuadro.style.opacity);
        if (opacidadeAtual < 1) {
            novoQuadro.style.opacity = (opacidadeAtual + 0.1).toString();
        }
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
            const tamanhoQuadrado = 800 / tamanhoNovo;
            novoQuadro.style.width = `${tamanhoQuadrado}px`;
            novoQuadro.style.height = `${tamanhoQuadrado}px`;
            novoQuadro.style.opacity = "0";
            board.appendChild(novoQuadro);

            novoQuadro.addEventListener("mouseover", () => {
                let opacidadeAtual = parseFloat(novoQuadro.style.opacity);
                if (opacidadeAtual < 1) {
                    novoQuadro.style.opacity = (opacidadeAtual + 0.1).toString();
                }
            });
        }
    }
});
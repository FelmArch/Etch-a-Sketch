

const board = document.querySelector("#container");
const botaoTamanho = document.querySelector("#btnGrid");
const botaoReset = document.querySelector("#btnReset");


function criarTabuleiro(tamanho) {
    const tamanhoQuadrado = 800 / tamanho;
    const totalQuadrados = tamanho * tamanho;

    for (let i = 0; i < totalQuadrados; i++) {
        const novoQuadro = document.createElement("div");
        novoQuadro.classList.add("pixel");
        novoQuadro.style.width = `${tamanhoQuadrado}px`;
        novoQuadro.style.height = `${tamanhoQuadrado}px`;
        novoQuadro.style.opacity = "0";
        board.appendChild(novoQuadro);
        
        novoQuadro.addEventListener("mouseover", () => {
            let opacidadeAtual = parseFloat(novoQuadro.style.opacity);
            if(opacidadeAtual < 1) {
                novoQuadro.style.opacity = (opacidadeAtual + 0.1).toString();
            }
        });
    }
}

criarTabuleiro(16);

botaoTamanho.addEventListener("click", () => {
    let tamanhoNovo = prompt("Porfavor escolha um tamanho desejado!"); 
    tamanhoNovo = parseInt(tamanhoNovo);
    
    if (tamanhoNovo > 100) {
        alert("Invalido! O máximo permitido é 100.")
    } else if (tamanhoNovo > 0) {
        board.innerHTML = "";
        criarTabuleiro(tamanhoNovo);
    }
});

botaoReset.addEventListener("click", () => {
    const todosOsPixel = document.querySelectorAll(".pixel");

    todosOsPixel.forEach(pixel => {
        pixel.style.opacity = "0"
    });
});
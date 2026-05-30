

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
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        novoQuadro.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
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
            board.appendChild(novoQuadro);

            novoQuadro.addEventListener("mouseover", () => {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                novoQuadro.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            });
        }
    }
});
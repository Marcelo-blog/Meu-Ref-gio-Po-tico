// Seleciona todos os botões de curtir da página
const botoes = document.querySelectorAll('.btn-curtir');

// Para cada botão, adicionamos uma "escuta" de clique
botoes.forEach(botao => {
    botao.addEventListener('click', function() {
        // Altera o texto do botão quando clicado
        if (this.innerText === "❤️ Curtir") {
            this.innerText = "❤️ Curtido!";
            this.style.backgroundColor = "#f40707"; // Fica vermelho
            this.style.color = "white";
        } else {
            this.innerText = "❤️ Curtir";
            this.style.backgroundColor = "transparent";
            this.style.color = "black";
        }
    });
});

const btnModo = document.getElementById('toggle-dark-mode');
const body = document.body;

btnModo.addEventListener('click', () => {
    // Liga/Desliga a classe dark-mode no body
    body.classList.toggle('dark-mode');

    // Troca o texto do botão para o leitor saber o que vai acontecer
    if (body.classList.contains('dark-mode')) {
        btnModo.innerText = "☀️ Modo Claro";
    } else {
        btnModo.innerText = "🌙 Modo Escuro";
    }
});

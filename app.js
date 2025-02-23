//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    window.adicionarAmigo = function () {
        const nome = inputNome.value.trim();
        if (nome && !amigos.includes(nome)) {
            amigos.push(nome);
            atualizarLista();
            inputNome.value = "";
        }
    };

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    window.sortearAmigo = function () {
        if (amigos.length < 2) {
            resultado.textContent = "Adicione pelo menos dois amigos para sortear.";
            return;
        }
        const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        resultado.textContent = `O amigo secreto sorteado é: ${sorteado}!`;
    };
});

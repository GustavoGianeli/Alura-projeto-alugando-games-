let nomeUsuario = prompt("Qual é o seu nome?");

alert(`Seja bem-vindo(a), ${nomeUsuario}! a nossa pequena locadora de jogos.`);

let totalAlugados =1; 


function alterarStatus(id){

    let botaoJogo = document.getElementById(`game-${id}`);
    let imagem = botaoJogo.querySelector(".dashboard__item__img");
    let botao = botaoJogo.querySelector(".dashboard__item__button");

    if (botao.classList.contains("dashboard__item__button--return")) {
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
        imagem.classList.remove("dashboard__item__img--rented");

        totalAlugados--;

    } else {
        if(totalAlugados >= 2){
            alert(` ${nomeUsuario}, você já alugou o número máximo de jogos permitidos (2).\nDevolva um deles para continuar.`);
            return;
        }

        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
        imagem.classList.add("dashboard__item__img--rented");
        totalAlugados++;

    }

}
async function populate() {

    const requestURL = './questions.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    const questoes = await response.json();

  alterarImagem(questoes);
  AlterarQuestao(questoes);

  }





//alterar a imagem
function alterarImagem(questoes) {
    let sla = document.querySelector("#img-question");
    sla.src=questoes.img;
}

function AlterarQuestao(questoes) {
  let sla = document.querySelector("#question");
  sla.value= questoes.question;
}


/* // vai se a função que vai sortia uma pergunta aleatoria
function Start() {
    
}
//iniciar pagina
window.addEventListener("load", (event) => {
    alterarImagem();
  }); */
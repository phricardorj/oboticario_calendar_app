export const getWeeksBetweenTwoDates = (start, end) => {
  const past = new Date(start);
  const now = new Date(end);
  const diff = Math.abs(now.getTime() - past.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.floor(days / 7);
};

export const getWeeksFromDateToToday = (date) => {
  const now = new Date();
  const past = new Date(date);
  const diff = Math.abs(now.getTime() - past.getTime());
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return Math.floor(days / 7);
};

export const getElement = (selector) => {
  return document.querySelector(selector);
};

export const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

export const modalOpen = (isOpen) => {
  modalCreate();
  const modal = document.querySelector(".modal"),
    modal_fundo = document.querySelector(".modal_fundo"),
    close = document.querySelector(".close");

  if (isOpen) {
    document.body.style.overflow = "hidden";
    modal.style.visibility = "visible";
    modal_fundo.style.visibility = "visible";
  } else {
    document.body.style.overflow = "visible";
    modal.style.visibility = "hidden";
    modal_fundo.style.visibility = "hidden";
  }

  close.addEventListener("click", () => modalOpen(false));
  modal_fundo.addEventListener("click", () => modalOpen(false));
};

/* 
  ATENÇÃO!! 
  recomenda-se que você não use o innerHTML, no entanto, 
  nesta aplicação usarei porque é uma página simples! Mas, cuidado!

  ATTENTION!!
  it is recommended that you do not use innerHTML, however,
  in this application I will use it because it is a simple page! But be careful!
  */

const modalCreate = () => {
  const n = document.querySelector("#modal"),
    e = document.createElement("div");
  (e.innerHTML =
    '<div class="modal_fundo">\n  <div class="close">❌ Fechar</div>\n</div>\n<div class="modal_container">\n  <div class="modal">\n    <div class="container">\n      <h1>Obrigado pelo seu acesso! 🎉</h1>\n      <p>\n        <strong\n          >Agradeço por todo feedback que recebi em minhas redes!</strong\n        >\n        Sério, isso muda meu dia haha!</p> <p>Constância é mais importante que\n        intensividade e independente da semana atual do Programa, não\n        desanime, certamente, seu resultado será incrível! Fechado? Então... Bons\n        estudos!\n      </p>\n      <p>\n        <i\n          >Nota: O Google Analytics encontra-se ativo nesta aplicação,\n          visando saber como vocês estão encontrando essa página on-line.\n          Combinado? A permanência nessa página, significa que você\n          concordou com essa informação.</i\n        >\n      </p>\n    </div>\n  </div>\n</div>'),
    n.appendChild(e);
};

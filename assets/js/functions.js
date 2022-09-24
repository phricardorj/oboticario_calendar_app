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
    return ('0' + n).slice(-2);
};

export const modalOpen = (isOpen) => {
    modalCreate();
    const modal = document.querySelector('.modal'),
        modal_fundo = document.querySelector('.modal_fundo'),
        close = document.querySelector('.close');

    if (isOpen) {
        document.body.style.overflow = 'hidden';
        modal.style.visibility = 'visible';
        modal_fundo.style.visibility = 'visible';
    } else {
        document.body.style.overflow = 'visible';
        modal.style.visibility = 'hidden';
        modal_fundo.style.visibility = 'hidden';
    }

    close.addEventListener('click', () => modalOpen(false));
    modal_fundo.addEventListener('click', () => modalOpen(false));
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
    const n = document.querySelector('#modal'),
        e = document.createElement('div');

    let formaturaWeeks = getWeeksFromDateToToday('2022-10-27');
    let idiomasWeeks = getWeeksFromDateToToday('2022-10-16');

    let content = `
    <h1>Parabéns! 🎉<br> Falta pouco para sua formatura, né?</h1>
    <p>NÃO ESQUEÇA <strong>de concluir 70% dos cursos na Alura para participar da Formatura e obter seu certificado!</strong></p>
    <p> Todos os alunos que concluírem o programa (aqueles que cumprirem no mínimo 70% da carga horária até o dia 16 de outubro) 
    receberão uma uma <strong>bolsa de 2 meses de estudos na plataforma de idiomas Alura Línguas</strong> (início em Jan/2023). <br><br>⚠️ Lembrando 
    que faltam apenas <strong>${idiomasWeeks} semanass</strong> para 16 de Outubro!
    </p>
    `;

    e.innerHTML = `<div class="modal_fundo"><div class="close">❌ Fechar</div></div><div class="modal_container"><div class="modal"><div class="container">${content}</div></div></div>`;
    n.appendChild(e);
};

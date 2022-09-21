import { data } from '../data.js';

const content = document.querySelector('.content');
const nav = document.querySelector('.nav');

(function drawHtml() {
  nav.innerHTML = data
    .map(
      (l) =>
        `<a href=#${l.id} class=${l.id === 'product' && 'bold'} >${l.title}</a>`
    )
    .join('');

  content.innerHTML = data
    .map(
      (tabContent) =>
        `<div class=${(tabContent.id, tabContent?.class)} id=${tabContent.id}>
        <h3>${tabContent.title}</h3>
        <p>${tabContent.details}</p>
        </div>`
    )
    .join('');
})();

nav.addEventListener('click', (e) => {
  [...nav.children].forEach((link) => link.classList.remove('bold'));
  e.target.classList.add('bold');

  const section = e.target.innerText.toLowerCase().split(' ');
  const targetSection = [...content.children].filter(
    (s) => s.id === section[0]
  );
  [...content.children].forEach((child) => child.classList.add('hide'));
  targetSection[0].classList.remove('hide');
});

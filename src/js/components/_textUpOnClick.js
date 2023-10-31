const servicesItems = [...document.querySelectorAll('.services__item')];
const servicesBtns = [...document.querySelectorAll('.services__btn')];

servicesBtns.forEach(card => {
  card.addEventListener('click', openServiceDesc);
});

function openServiceDesc() {
  this.closest('.services__item').classList.toggle('services__item--active');
}

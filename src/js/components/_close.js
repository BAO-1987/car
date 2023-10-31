// const container = document.querySelector('.portfolio-item');
// document.querySelector('.range').addEventListener('input', (e) => {
//   container.style.setProperty('--position', `${e.target.value}%`);
// })

const portfolioItems = document.querySelectorAll('.portfolio-item');
const rangeInputs = document.querySelectorAll('.range');

rangeInputs.forEach((rangeInput, index) => {
  rangeInput.addEventListener('input', (e) => {
    const container = portfolioItems[index];
    container.style.setProperty('--position', `${e.target.value}%`);
  });
});

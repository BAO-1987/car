const dialog = document.querySelector('dialog');
const closeDialogBtns = [...document.querySelectorAll('.modal__close')];

closeDialogBtns.forEach(close => {
  dialog?.close();
});

document.querySelector('.form')?.addEventListener('submit', e => {
  e.preventDefault();
  dialog.showModal();
});

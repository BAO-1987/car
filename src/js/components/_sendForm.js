const form = document.querySelector('.form');
const dialog = document.querySelector('.modal--success');
const dialogOrder = document.querySelector('.modal--contact');
const orderBtn = [...document.querySelectorAll('.order')];
const closeBtn = [...document.querySelectorAll('.close')];

form.addEventListener('submit', formSend);

async function formSend(e) {
  e.preventDefault();

  let formData = new FormData(form);

  const formPhpLink = form.getAttribute('action');

  let response = await fetch(formPhpLink, {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    if (dialogOrder.open) {
      dialogOrder.close();
    }

    dialog.showModal();

    form.reset();

    setTimeout(() => {
      dialog.close();
    }, 10000);
    return response;
  } else {
    return Promise.reject(response);
  }
}

orderBtn?.forEach(btn => {
  btn?.addEventListener('click', () => {
    dialogOrder.showModal();
  });
});

closeBtn.forEach(close => {
  close?.addEventListener('click', e => {
    e.target.closest('.modal').close();

    document.querySelector('.modal--video video').pause();
    document.querySelector('.modal--video video').currentTime = 0;
  });
});

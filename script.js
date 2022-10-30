
const form = document.querySelector('.form');
const card = document.querySelector('.card');
const contactFormBtn = document.getElementById('contact-form-btn');
const formClose = document.querySelector('.form__close');



contactFormBtn.addEventListener('click', () => {
  form.classList.toggle('active');
  card.classList.toggle('active-card');
});

formClose.addEventListener('click', () => {
  form.classList.toggle('active');
  card.classList.toggle('active-card');
});


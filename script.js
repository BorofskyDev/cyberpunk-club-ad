const labels = document.querySelectorAll('.form__control label');
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

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}
        </span>`
    )
    .join('');
});

import './style.css';

const tabs = document.querySelectorAll('.cat');
const cards = document.querySelectorAll('.product');
const plans = document.querySelectorAll('.plan');
const payButton = document.querySelector('.pay-btn');
const form = document.querySelector('#topupForm');
const toast = document.querySelector('#toast');

tabs.forEach((tab) => tab.addEventListener('click', () => {
  tabs.forEach((item) => item.classList.remove('active'));
  tab.classList.add('active');
  cards.forEach((card) => card.hidden = tab.dataset.category !== 'all' && card.dataset.category !== tab.dataset.category);
}));

plans.forEach((plan) => plan.addEventListener('click', () => {
  plans.forEach((item) => item.classList.remove('selected'));
  plan.classList.add('selected');
  payButton.innerHTML = `Перейти к оплате <b>${plan.dataset.price} ₽ →</b>`;
}));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
});

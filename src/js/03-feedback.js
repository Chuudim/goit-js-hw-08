import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('[name="email"]');
const messageField = form.querySelector('[name="message"]');

const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (savedState) {
  emailField.value = savedState.email;
  messageField.value = savedState.message;
}

const updateState = throttle(() => {
  const state = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

emailField.addEventListener('input', updateState);
messageField.addEventListener('input', updateState);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const state = {
    email: emailField.value,
    message: messageField.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
  console.log({ email: state.email, message: state.message });
  emailField.value = '';
  messageField.value = '';
  localStorage.removeItem('feedback-form-state'); // очищаємо локальне сховище
});

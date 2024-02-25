const loginBtn = document.querySelectorAll(
  '.header__navbar-item--login,.btn--login'
);
const registerBtn = document.querySelectorAll(
  '.header__navbar-item--register,.btn--register'
);

const loginForm = document.querySelector('.auth-form-login');
const registerForm = document.querySelector('.auth-form-register');

const modal = document.querySelector('.modal');
const backBtn = document.querySelectorAll('.auth-form__controls-back');
const modalContainer = document.querySelector('.modal__body');

const showLoginForm = () => {
  modal.classList.add('open');
  loginForm.classList.add('auth-form-login--active');
  registerForm.classList.remove('auth-form-register--active');
};

const showRegisterForm = () => {
  modal.classList.add('open');
  registerForm.classList.add('auth-form-register--active');
  loginForm.classList.remove('auth-form-login--active');
};

const closeAuthForm = () => {
  modal.classList.remove('open');
};

for (const btn of loginBtn) {
  btn.addEventListener('click', showLoginForm);
}

for (const btn of registerBtn) {
  btn.addEventListener('click', showRegisterForm);
}

modal.addEventListener('click', closeAuthForm);
for (const btn of backBtn) {
  btn.addEventListener('click', closeAuthForm);
}

modalContainer.addEventListener('click', (event) => event.stopPropagation());

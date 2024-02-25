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

// const loginBtns = document.querySelectorAll(
//     '.header__navbar-item--login, .btn--login'
//   );
//   const registerBtns = document.querySelectorAll(
//     '.header__navbar-item--register, .btn--register'
//   );
//   const backBtns = document.querySelectorAll('.auth-form__controls-back');
//   const modal = document.querySelector('.modal');
//   const modalContainer = document.querySelector('.modal__body');

//   const forms = document.querySelectorAll('.auth-form');

//   let registerForm; // Declare registerForm in a scope accessible to both the function and event listener
//   let loginForm; // Declare registerForm in a scope accessible to both the function and event listener

//   const showRegisterForm = () => {
//     modal.classList.add('open');
//     registerForm.classList.add('auth-form--active');
//     loginForm.classList.remove('auth-form--active');
//   };

//   const showLoginForm = () => {
//     modal.classList.add('open');
//     loginForm.classList.add('auth-form--active');
//     registerForm.classList.remove('auth-form--active');
//   };

//   const closeAuthForm = () => {
//     modal.classList.remove('open');
//   };

//   loginBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       loginForm = document.querySelector('.auth-form-login'); // Assign registerForm when the button is clicked
//       showLoginForm();
//     });
//   });
//   registerBtns.forEach((btn) => {
//     btn.addEventListener('click', () => {
//       registerForm = document.querySelector('.auth-form-register'); // Assign registerForm when the button is clicked
//       showRegisterForm();
//     });
//   });
//   backBtns.forEach((btn) => btn.addEventListener('click', closeAuthForm));

//   modal.addEventListener('click', closeAuthForm);
//   modalContainer.addEventListener('click', (event) => event.stopPropagation());

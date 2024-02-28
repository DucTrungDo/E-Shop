const likeBtns = document.querySelectorAll('.home-product-item__like');

function switchToLiked() {
  this.classList.toggle('home-product-item__like--liked');
}

for (const btn of likeBtns) {
  btn.addEventListener('click', switchToLiked);
}

// Handling nav menu in mobile
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeBtn = document.getElementById('closeBtn');

function toggleNavbar() {
  navbar.classList.toggle('header__navbar--show');
  hamburgerBtn.classList.toggle('header__hamburger--hidden');
  closeBtn.classList.toggle('header__hamburger--hidden');
}


// Animation of hero title
const spanHero = document.getElementById('typingPhrase');

function firstSpanHero() {
  spanHero.innerHTML = 'I am Nico';
  spanHero.parentElement.classList.remove('typing2');
  spanHero.parentElement.classList.add('typing');

  setTimeout(() => {
    secondSpanHero();
  }, 3000)
}

function secondSpanHero() {
  spanHero.innerHTML = 'I am a web developer';
  spanHero.parentElement.classList.remove('typing');
  spanHero.parentElement.classList.add('typing2');
  
  setTimeout(() => {
    firstSpanHero();
  }, 3500)
}

firstSpanHero();
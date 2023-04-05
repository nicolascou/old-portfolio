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
  spanHero.classList.remove('typing2');
  spanHero.classList.add('typing');

  setTimeout(() => {
    secondSpanHero();
  }, 3000)
}

function secondSpanHero() {
  spanHero.innerHTML = 'I am a web developer';
  spanHero.classList.remove('typing');
  spanHero.classList.add('typing2');
  
  setTimeout(() => {
    firstSpanHero();
  }, 3500)
}

firstSpanHero();


// Scroll fade In
const reveals = document.querySelectorAll(".fadein-animation");

function reveal() {
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("inview");
    } else {
      reveals[i].classList.remove("inview");
    }
  }
}

window.addEventListener("scroll", reveal());

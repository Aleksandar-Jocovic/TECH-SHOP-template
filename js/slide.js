// fade animation

const navSlide = () => {
  var burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    // toggle nav
    nav.classList.toggle('nav-active');
    // animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
      }
    });
    // burrger animation
    burger.classList.toggle('toggle');
  });
};
navSlide();


// automate slide index

/* function autoSlide() {
  var i;
  var slides = document.getElementsByClassName('allSlides');
  var dots = document.getElementsByClassName('dot');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';

  setTimeout(autoSlide, 8500);

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  dots[slideIndex - 1].className += ' active';
}
 */

//my carousel
var img = document.getElementsByClassName('img');
var indicator = document.getElementsByClassName('indicator');
let o = 0;
let y = 1;
let m = 3;
function plus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
    }
    /*     if (indicator[i].classList.contains('active-indicator')) {
          indicator[i].classList.remove('active-indicator');
        } */
  }

  for (let x = 0; x < indicator.length; x++) {
    if (indicator[x].classList.contains('active-indicator')) {
      indicator[x].classList.remove('active-indicator');
    }
  }

  function active() {
    if (o === img.length - 1) {
      o = 0;
      m = 3;
    } else {
      o++;
      m++
    }
    img[o].classList.add('active');
    //indicator[o - 1].classList.remove('active-indicator');
    indicator[o].classList.add('active-indicator');

  }
  active();
}

function minus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
    }
  }
  for (let x = 0; x < indicator.length; x++) {
    if (indicator[x].classList.contains('active-indicator')) {
      indicator[x].classList.remove('active-indicator');
    }
  }

  function active() {
    if (y === 0) {
      y = img.length - 1;
    } else {
      y--;
    }
    console.log(y)
    img[y].classList.add('active');
    indicator[y].classList.add('active-indicator');
  }
  active();
}






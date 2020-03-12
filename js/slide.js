// burger menu

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




//my carousel
var img = document.getElementsByClassName('img');
var indicator = document.getElementsByClassName('indicator');
var sliderBox = document.getElementsByClassName('slider-box');

let o = 0;
let y = 1;
let m = 3;
function plus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
    }
    if (sliderBox[i].classList.contains('slider-box-anim')) {
      sliderBox[i].classList.remove('slider-box-anim');
    }
    if (indicator[i].classList.contains('active-indicator')) {
      indicator[i].classList.remove('active-indicator');
    }
  }

  /*  for (let x = 0; x < indicator.length; x++) {
     if (indicator[x].classList.contains('active-indicator')) {
       indicator[x].classList.remove('active-indicator');
     }
   } */

  function active() {
    if (o === img.length - 1) {
      o = 0;
      m = 3;
    } else {
      o++;
      m++
    }
    img[o].classList.add('active');
    indicator[o].classList.add('active-indicator');
    sliderBox[o].classList.add('slider-box-anim');
  }
  active();
}

function minus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
    }
    if (sliderBox[i].classList.contains('slider-box-anim')) {
      sliderBox[i].classList.remove('slider-box-anim');
    }
    if (indicator[i].classList.contains('active-indicator')) {
      indicator[i].classList.remove('active-indicator');
    }
  }

  function active() {
    if (y === 0) {
      y = img.length - 1;
    } else {
      y--;
    }
    img[y].classList.add('active');
    indicator[y].classList.add('active-indicator');
    sliderBox[y].classList.add('slider-box-anim');
  }
  active();
}

// automate slide index


function automateCarousel() {
  if (o === img.length - 1) {
    o = 0;
    m = 3;
  } else {
    o++;
    m++
  }
}

function autoSlide() {
  plus();
  setTimeout(autoSlide, 7500);
}
autoSlide();

// top btn marged with slide for speed
var button = document.getElementById('back-to-top-btn');
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 200) {
    if (!button.classList.contains('btnIn')) {
      button.classList.remove('btnOut');
      button.classList.add('btnIn');
      button.style.display = 'block';
    }
  } else {
    if (button.classList.contains('btnIn')) {
      button.classList.remove('btnIn');
      button.classList.add('btnOut');
      setTimeout(function () {
        button.style.display = 'none';
      }, 250);
    }
  }
}

button.addEventListener('click', smoothScroll);

/* function backToTop() {
  window.scrollTo(0, 0);
} */

function smoothScroll() {
  var targetPosition = 0;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var duration = 450;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}

var nav = document.getElementById('nav');

function resize() {
  if (window.pageYOffset > 51) {
    if (!nav.classList.contains('smallNav')) {
      nav.classList.remove('bigNav');
      nav.classList.add('smallNav');
    }
  } else {
    if (nav.classList.contains('smallNav')) {
      nav.classList.remove('smallNav');
      nav.classList.add('bigNav');
    }
  }
}
var logo = document.getElementById('logoImgId');

function logoImgResize() {
  if (window.pageYOffset > 51) {
    if (!logo.classList.contains('logoImgSmall')) {
      logo.classList.remove('logoImg');
      logo.classList.add('logoImgSmall');
    }
  } else {
    if (logo.classList.contains('logoImgSmall')) {
      logo.classList.remove('logoImgSmall');
      logo.classList.add('logoImg');
    }
  }
}



//window.addEventListener('scroll', resize);


//window.addEventListener('scroll', logoResize);

/* var bato = document.getElementById('batoTarget');
var alpvc = document.getElementById('alpvcTarget');
function batoAlPvcResize() {
  if (window.pageYOffset > 49) {
    if (!bato.classList.contains('batoSmall') && !alpvc.classList.contains('alpvcSmall')) {
      bato.classList.remove('batoBig');
      bato.classList.add('batoSmall');
      alpvc.classList.remove('alpvcBig');
      alpvc.classList.add('alpvcSmall');
    }
  } else {
    if (bato.classList.contains('batoSmall') && alpvc.classList.contains('alpvcSmall')) {
      bato.classList.remove('batoSmall');
      bato.classList.add('batoBig');
      alpvc.classList.remove('alpvcSmall');
      alpvc.classList.add('alpvcBig');
    }
  }
}
//window.addEventListener('scroll', batoAlPvcResize);
var logo = document.getElementById('logo');

function logoResize() {
  if (window.pageYOffset > 50) {
    if (!logo.classList.contains('smallLogo')) {
      logo.classList.remove('bigLogo');
      logo.classList.add('smallLogo');
    }
  } else {
    if (logo.classList.contains('smallLogo')) {
      logo.classList.remove('smallLogo');
      logo.classList.add('bigLogo');
    }
  }
} */


function myFunction(x) {
  if (x.matches) { // If media query matches
    //window.addEventListener('scroll', logoResize);
    //window.addEventListener('scroll', batoAlPvcResize);
    logoImgResize()
    window.addEventListener('scroll', logoImgResize);
    window.addEventListener('scroll', resize);


  } else {

  }
}

var x = window.matchMedia("(min-width: 800px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
console.log('a');
/* var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('allSlides');
  var dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
} */

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
autoSlide(); */

/* var img = $('#draggable');
img.draggable(); */
//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa skinuto img dragable zbog owl slidera
/* function initMap () {
  // location of place 
  var uluru = {lat:-25.344, lng:131.036};
  // the map created at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker positioned at Uluru
    var marker = new google.maps.Marker({position:uluru, map:map});
    //fali jos jedan script pogledaj na developers.gooogle.com
} */

//jebeni api keyyy wtff

/// todo on click home

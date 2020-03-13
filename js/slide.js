
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

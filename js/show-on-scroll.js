var scroll = window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
var titleBorder = document.querySelectorAll('.title-border');
var imgA = document.querySelector('.imgA');
var imgB = document.querySelector('.imgB');
var imgC = document.querySelector('.imgC');

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('show-on-scroll-title');
    }/*  else {
      element.classList.remove('show-on-scroll-title');
    } */
  })

  //title border animation
  titleBorder.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('show-on-scroll-title-border');
    } else {
      element.classList.remove('show-on-scroll-title-border');
    }
  })

  if (isElementInViewport(imgA)) {
    imgA.classList.add('show-on-scroll-img');
  }
  if (isElementInViewport(imgB)) {
    imgB.classList.add('show-on-scroll-img');
  }
  if (isElementInViewport(imgC)) {
    imgC.classList.add('show-on-scroll-img');
  }

  scroll(loop);
}

loop();

function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 && rect.bottom >= 0 - rect.height / 2) ||
    (rect.bootom - rect.height / 2 >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 && rect.bottom - rect.height / 2 <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
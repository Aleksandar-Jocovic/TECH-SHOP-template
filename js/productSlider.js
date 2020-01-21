$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 4,
  autoplay: true,
  autoplayTimeout: 8000,
  responsive: {
    // breakpoint from 0 up
    0: {
      items: 1
    },
    // breakpoint from 480 up
    580: {
      items: 2
    },
    // breakpoint from 768 up
    868: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});

$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('header').addClass('navResize');
  } else {
    $('header').removeClass('navResize');
  }
});

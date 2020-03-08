$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  items: 6,
  autoplay: true,
  autoplayTimeout: 8000,
  navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
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
// nzm dal treba
$(document).on('scroll', function () {
  if ($(document).scrollTop() > 200) {
    $('header').addClass('navResize');
  } else {
    $('header').removeClass('navResize');
  }
});


// product galery ja msm 
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;

  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

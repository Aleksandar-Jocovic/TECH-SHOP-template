var img = document.getElementsByClassName('img');
let x = 0;
let y = 1;
function plus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
    }
  }

  function active() {
    if (x === img.length - 1) {
      x = 0;
    } else {
      x++;
    }
    img[x].classList.add('active');
  }
  active();
}

function minus() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].classList.contains('active')) {
      img[i].classList.remove('active')
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
  }
  active();
}






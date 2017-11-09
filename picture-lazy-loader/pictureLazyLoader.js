let imgs = document.querySelectorAll('img');
let n = 0;

lazyLoad();

document.addEventListener('scroll', throttle(lazyLoad));

function lazyLoad() {
    for(let i = n; i< imgs.length; i++) {
      let img = imgs[i];
      const round = img.getBoundingClientRect();
      const clientHeight = window.innerHeight;

      if (round.top < clientHeight) {
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        n = i + 1;
      } else {
        n = i;
        return;
      }
    }
}

function throttle(func, runTime = 500) {
  var pre = new Date();
  return function() {
    let now = new Date();
    if (now - pre > runTime) {
      func();
      pre = now;
    }
  }
}


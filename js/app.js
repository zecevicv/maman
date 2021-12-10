/* #Header
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header-hamburger');
const body = document.querySelector('body');

// Menu
if (hamburgerBtn) {
  hamburgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    header.classList.toggle('show-menu');
    body.classList.toggle('no-scroll');
  });
}

// Close on outside click
document.addEventListener('click', (e) => {
  if (document.querySelector('.header.show-menu') && !e.target.closest('.header')) {
    header.classList.remove('show-menu');
    body.classList.remove('no-scroll');
  }
});

/* #Banner
  ======================================================= */
if (document.querySelector('.banner')) {
  new Swiper(".banner .swiper", {
    loop: true,
    pagination: {
      el: ".banner .swiper-pagination",
    },
  });
}

/* #Numbers Animation
  ======================================================= */
gsap.registerPlugin(ScrollTrigger);

const numbers = document.querySelectorAll('.numbers .num');

let show = false;

ScrollTrigger.create({
  trigger: ".numbers",
  onEnter: () => {
    if (!show) {
      numbers.forEach((number) => {
        var zero = {
          val: 0
        };
        var num = number.innerHTML;
  
        gsap.to(zero, {
          val: num,
          duration: 3,
          scrollTrigger: numbers,
          onUpdate: function () {
            number.innerHTML = zero.val.toFixed(0);
          }
        });
      });
      show = true;
    }
  }
});
// Анимация скрытия меню
const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('#openMenuBtn');
const closeMenuBtn = document.querySelector('#closeMenuBtn');

const body = document.body;

openMenuBtn.addEventListener('click', () => {
  menu.classList.add('active');
  body.classList.add('lock');
})

closeMenuBtn.addEventListener('click', () => {
  menu.classList.remove('active');
  body.classList.remove('lock');
})

menu.querySelectorAll('#menu-link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    body.classList.remove('lock');
  })
})

// Плавный скролл до блоков
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
  breakpoints: {
    1220: {
      slidesPerView: 6
    },
    1080: {
      slidesPerView: 5
    },
    880: {
      slidesPerView: 4
    },
    650: {
      slidesPerView: 3
    },
    540: {
      slidesPerView: 2
    },
  }
});
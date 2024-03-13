const sunBtn = document.querySelector('#sun');
const moonBtn = document.querySelector('#moon');

const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

const btnToggle = () => {
  sunBtn.classList.toggle('display-none');
  moonBtn.classList.toggle('display-none');
}

const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add('dark');
    moonBtn.classList.add('display-none');
    return;
  }
  sunBtn.classList.add('display-none');
}

const themeSwitch = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    btnToggle();
    return;
  }
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  btnToggle();
}

sunBtn.addEventListener('click', () => {
  themeSwitch();
})

moonBtn.addEventListener('click', () => {
  themeSwitch();
})

themeCheck();
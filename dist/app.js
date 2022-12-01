'use strict';

// social icons logic
const social = document.querySelector('.social--wrapper');
const stickyOffset = social.offsetTop;

addEventListener('scroll', () => {
  handleStickSocial();

  getYoffset();
});

function handleStickSocial() {
  if (window.pageYOffset >= stickyOffset) {
    social.classList.add('sticky');
  } else {
    social.classList.remove('sticky');
  }
}

// menu logic
const btnMenuOpen = document.querySelector('#btnMenuOpen');
const btnMenuClose = document.querySelector('#btnMenuClose');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('#menu');
const links = document.querySelectorAll('.menuLink');

function handleOpenClose() {
  overlay.classList.toggle('hidden');
  menu.classList.toggle('nav--menu_active');
}

overlay.addEventListener('click', handleOpenClose);
btnMenuClose.addEventListener('click', handleOpenClose);
btnMenuOpen.addEventListener('click', handleOpenClose);

// esc handle
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('nav--menu_active'))
    handleOpenClose();
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', handleOpenClose);
}


////////////////////////
// 3. JS
const blogPost = document.querySelectorAll('[data-blog="article"]');

////////////////////////
// počet příspěvků
console.log(`Počet příspěvků: ${blogPost.length}`);

////////////////////////
//prumerna vyska prispevku
let totalHeight = 0;
const blogPostArray = [...blogPost];

blogPostArray.map((e) => {
  totalHeight += e.offsetHeight;
  // console.log(e.offsetHeight);
});
console.log(
  `Průměrná výška příspěvku: ${totalHeight / blogPostArray.length}px`
);

////////////////////////
// součet délek nadpisů
let totalChar = 0;

blogPostArray.map((post) => {
  const nadpis = post.querySelector('h2')
  totalChar+=Number(nadpis.innerHTML.length)
  // console.log(nadpis.innerHTML.length);
})
console.log(`Počet charakteru, nadpisů příspěvků: ${totalChar}`);


////////////////////////
//onClick return Name, Date, Time
blogPostArray.forEach((post) => {
  post.addEventListener('click', (post) => {
    findInfo(post.target);
  });
});

function findInfo(post) {
  const nazev = post.querySelector('h2');
  const datum = post.querySelector('[data-blog="datum"]');
  const cas = post.querySelector('[data-blog="cas"]');

  // return console.log(cas.innerText);
  return addInfo({
    Název: nazev.innerText,
    Datum: datum.innerText,
    Čas: Number(cas.innerText),
  });
}

function addInfo(obj) {
  return console.log(obj);
}

////////////////////////
//OffSet
function getYoffset(){
  console.log(`OffSet vuči viewportu: ${document.querySelector('.social--wrapper').getBoundingClientRect().top}`)
  console.log(`OffSet vuči dokumentu: ${window.scrollY + document.querySelector('.social--wrapper').getBoundingClientRect().top}`)
}

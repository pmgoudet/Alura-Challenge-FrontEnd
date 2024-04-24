// REMOVER A LINHA VERMELHA QUE ACUSA ERROS DA TEXT AREA
document.querySelector(".principal__code-area__text").spellcheck = false; 


// ATIVAR E DESATIVAR CHECKBOX QUE NÃO É CHECKBOX 
const menuBurger = document.querySelector('.header__usuario__menu-icon'); 
const checkbox = document.querySelector('.header__barra-checkbox');
const menuIcon = document.querySelector('.header__usuario__menu-icon');
const lupa = document.querySelector('.header__busca__icon');
const barraBusca = document.querySelector('.header__busca-lupa');
let box = false;
let boxLupa = false;

menuBurger.addEventListener('click', () => {
   if (box == false) {
      checkbox.style.display = "block";
      menuIcon.textContent = "close"
      box = true;
   } else {
      checkbox.style.display = "none";
      menuIcon.textContent = "menu"
      box = false;
   }
});

lupa.addEventListener('click', () => {
   if (boxLupa == false) {
      barraBusca.style.display = "block";
      boxLupa = true;
   } else {
      barraBusca.style.display = "none";
      boxLupa = false;
   }
});

window.addEventListener("scroll", () => {
   const scrollPosition = window.scrollY || document.documentElement.scrollTop;
   if (scrollPosition > 80) {
      checkbox.style.display = "none";
      menuIcon.textContent = "menu"
      box = false;
   }
});

// BOTÃO DA COR ESCOLHIDA NO FORM
const cor = document.querySelector('.projeto__form__color');
const borda = document.querySelector('.principal');

cor.addEventListener('input', () => {
   borda.style.backgroundColor = cor.value;
})

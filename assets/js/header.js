const button = document.querySelector('.grid-button');
const header_panel = document.querySelector('.main_block_header');
const menu_items = document.querySelectorAll('.burger_menu__item');

// Получаем правила ::before и ::after
const beforeRules = [];
const afterRules = [];

menu_items.forEach((item, i) => {
  beforeRules.push(CSSRulePlugin.getRule(`.burger_menu__item:nth-child(${i + 1})::before`));
  afterRules.push(CSSRulePlugin.getRule(`.burger_menu__item:nth-child(${i + 1})::after`));
});

// Скрываем всё изначально
gsap.set(menu_items, { x: "-100%", opacity: 0 });
beforeRules.forEach(rule => gsap.set(rule, { cssRule: { left: "-100vw" } }));
afterRules.forEach(rule => gsap.set(rule, { cssRule: { left: "-102vw" } }));

function openMenu() {
  header_panel.classList.add('opened');
  menu_items.forEach((item, i) => {
    let delay = gsap.utils.random(0, 0.6);
    let duration = gsap.utils.random(0.8, 1.3);
    let easeOptions = ["power4.out", "expo.out", "back.out(1.7)"];
    let ease = gsap.utils.random(easeOptions);

    gsap.to(item, {
      x: "0%",
      opacity: 1,
      duration,
      delay,
      ease
    });

    gsap.to(beforeRules[i], {
      cssRule: { left: "0px" },
      duration,
      delay,
      ease
    });

    gsap.to(afterRules[i], {
      cssRule: { left: "0px" },
      duration,
      delay,
      ease
    });
  });
}

function closeMenu() {
  header_panel.classList.remove('opened');
  menu_items.forEach((item, i) => {
    let delay = gsap.utils.random(0, 0.3);
    let duration = gsap.utils.random(0.3, 0.6);

    gsap.to(item, {
      x: "-100%",
      opacity: 0,
      duration,
      delay,
      ease: "power3.in"
    });

    gsap.to(beforeRules[i], {
      cssRule: { left: "-100vw" },
      duration,
      delay,
      ease: "power3.in"
    });

    gsap.to(afterRules[i], {
      cssRule: { left: "-102vw" },
      duration,
      delay,
      ease: "power3.in"
    });
  });
}

button.addEventListener('click', (e) => {
  e.stopPropagation(); // чтобы клик по кнопке не шел дальше в document
  if (header_panel.classList.contains('opened')) {
    closeMenu();
  } else {
    openMenu();
  }
});

// Отслеживаем клики по всему документу
document.addEventListener('click', (e) => {
  // Если клик вне меню и вне кнопки — закрываем меню
  if (!header_panel.contains(e.target) && !button.contains(e.target)) {
    if (header_panel.classList.contains('opened')) {
      closeMenu();
    }
  }
});


const burgerButton = document.querySelector('.mobile-flex-button-burger');
const mobileMenu = document.querySelector('.menu_content_mobile');

burgerButton.addEventListener('click', () => {
    mobileMenu.className = mobileMenu.className === 'menu_content_mobile' 
        ? 'menu_content_mobile opened' 
        : 'menu_content_mobile';
});

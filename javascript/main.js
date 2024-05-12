console.log("Hello, World!");
// Кнопка новигации
const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');


navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active');
    nav.classList.toggle('header__top-row--mobile');
    document.body.classList.toggle('no-scroll');
}

// Маски для телефона
// Запомни, что поиск по атрибуту происходит в квадратных скобках
mask('[data-tel-input]');

// Удаляем "+", если ничено не введено, чтобы отобразить подсказку внутри поля

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
    if (input.value == '+') input.value = '';
})
phoneInputs.forEach((input) => {
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
});

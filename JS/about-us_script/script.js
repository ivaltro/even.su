// Исходные данные по слайдеру
const sliderImages = document.querySelectorAll('.slider__img'),
sliderLine = document.querySelector('.slider__line'),
sliderDots = document.querySelectorAll('.slider__dot'),
sliderBtnNext = document.querySelector('.slider__btn-next'),
sliderBtnPrev = document.querySelector('.slider__btn-prev'),
sliderPanel = document.querySelector('.slider__background'),
sliderText = document.querySelectorAll('.mobile-block .text-block');

// Переменные
let sliderCount = 0, 
sliderWidth;
// sliderHeight,
// sliderDotsHeight;

//Кнопки листания слайдов вперёд и назад
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// window.addEventListener('resize', SliderBackgroundResize);

// Функции
// Задаёт нужную ширину картинки в SlideLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

// function SliderBackgroundResize() {
//     sliderDotsHeight = document.querySelector('.active-dot').offsetHeight;
//     sliderPanel.style.height = sliderDotsHeight + 'px';
// }
// SliderBackgroundResize();

//Перелистывать слайд вперед

function nextSlide() {
    sliderCount++;
    if (sliderCount >= sliderImages.length) sliderCount = 0;

    rollSlider();
    thisSlide(sliderCount);
    thisText(sliderCount);
}

//Перелистывать слайд назад

function prevSlide() {
    sliderCount--;
    if (sliderCount < 0) sliderCount = sliderImages.length -1;

    rollSlider();
    thisSlide(sliderCount);
    thisText(sliderCount);
}

//Задаёт шаг перемещения слайдов

function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//Указывает какой слайд по счёту активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}
function thisText(index) {
    sliderText.forEach(item => item.classList.remove('active-text'));
    sliderText[index].classList.add('active-text');
}

//Вешаем клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
        thisText(sliderCount);
    })
})
// Бургер

$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

// Кнопка наверх

const offset = 150;
const scrollUp = document.querySelector('.scroll-up');

const getTop = () => window.scrollY || document.documentElement.scrollTop;

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-up--active')
  } else {
    scrollUp.classList.remove('scroll-up--active')
  }
});

// Выпадающий список

document.addEventListener("DOMContentLoaded", function() {
  var selectText = document.querySelector(".select-text");
  var selectOptions = document.querySelector(".select-options");

  selectText.addEventListener("click", function() {
    selectOptions.style.display = (selectOptions.style.display === "block") ? "none" : "block";
  });

  selectOptions.addEventListener("click", function(e) {
    var selectedOption = e.target.closest("a");
    if (selectedOption) {
      var selectedText = selectedOption.textContent;
      selectText.innerHTML = selectedText + '<i class="fa fa-chevron-down"></i>';
      selectOptions.style.display = "none";
    }
  });

  window.addEventListener("click", function(e) {
    if (!selectText.contains(e.target)) {
      selectOptions.style.display = "none";
    }
  });
});
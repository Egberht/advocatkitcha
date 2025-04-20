// Валидация формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;

    if (name.length < 3) {
        alert('Имя должно быть не менее 3 символов!');
        e.preventDefault();
    }

    if (!email.includes('@')) {
        alert('Введите корректный email!');
        e.preventDefault();
    }
});

// Слайдер
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

// Функция для показа слайда по индексу
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Переход к следующему слайду
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Переход к предыдущему слайду
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Инициализация слайдера
showSlide(currentIndex);


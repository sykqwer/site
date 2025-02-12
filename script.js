// Плавная прокрутка к секциям
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки

        const targetId = this.getAttribute('href'); // Получаем ID целевой секции
        const targetSection = document.querySelector(targetId); // Находим секцию

        if (targetSection) {
            // Плавная прокрутка
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Добавляем класс active для текущей секции
            document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
        }
    });
});

// Инициализация первой секции как активной
window.onload = function () {
    document.getElementById('home').classList.add('active');

    // Добавляем класс visible для всех элементов в активной секции
    const homeSection = document.getElementById('home');
    if (homeSection) {
        const elementsToAnimate = homeSection.querySelectorAll('.fade-in');
        elementsToAnimate.forEach(element => element.classList.add('visible'));
    }
};

// Функция для обнаружения видимых элементов
function checkVisibility() {
    const sections = document.querySelectorAll('.section'); // Все секции

    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Получаем координаты секции относительно viewport
        const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0; // Проверяем видимость

        if (isVisible) {
            section.classList.add('active'); // Добавляем класс active
        } else {
            section.classList.remove('active'); // Удаляем класс active
        }

        // Добавляем/удаляем класс visible для анимации
        const elementsToAnimate = section.querySelectorAll('.fade-in');
        elementsToAnimate.forEach(element => {
            if (isVisible) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    });
}

// Вызываем checkVisibility при прокрутке и загрузке страницы
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

/* Общие стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
    color: #333;
    overflow-x: hidden; /* Отключаем горизонтальную прокрутку */
}

/* Навигационная панель */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
}

.nav-link {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s ease;
}

.nav-link:hover {
    color: #007bff; /* Синий цвет при наведении */
}

/* Секции */
.section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0; /* Начальная прозрачность */
    transition: opacity 0.5s ease;
}

.section.active {
    opacity: 1; /* Активные секции становятся видимыми */
}

/* Контент главной страницы */
#home .content {
    display: flex;
    flex-direction: row; /* По умолчанию изображение слева, текст справа */
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

/* Для мобильных устройств */
@media (max-width: 768px) {
    #home .content {
        flex-direction: column; /* Изображение и текст размещаются друг под другом */
        align-items: center;
    }

    .image-container img {
        max-width: 100%; /* Изображение адаптируется под экран */
        height: auto;
    }

    .text-container {
        text-align: center; /* Текст выравнивается по центру */
    }

    /* Кнопка скачивания */
    .download-button {
        display: block;
        width: 100%;
        padding: 15px;
        font-size: 18px;
    }
}

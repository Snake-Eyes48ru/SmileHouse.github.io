const newsArticles = [
    {
        title: "Новая услуга по профилактике зубов",
        date: "2023-10-01",
        content: "Мы рады сообщить о запуске новой услуги по профилактике зубов. Записывайтесь на прием!",
        imageUrl: "Images/Caries.jpg",
        button: "Записаться",
        buttonUrl: "#" // Ссылка для кнопки
    },
    {
        title: "Скидки на лечение кариеса",
        date: "2023-10-05",
        content: "Специальные предложения на лечение кариеса! Узнайте подробности на нашем сайте.",
        imageUrl: "Images/Caries2.jpg", // Пример неправильного пути
        button: "Смотреть", // Кнопка отсутствует
        buttonUrl: "#services" // Ссылка отсутствует
    },
    {
        title: "Секреты здоровых зубов",
        date: "2023-10-10",
        content: "Читайте наши советы по уходу за зубами и сохранению их здоровья.",
        imageUrl: "Images/Prevention.jpg",
        button: "Читать советы",
        buttonUrl: "#" // Ссылка для кнопки
    }
];

function loadNews() {
    const newsContainer = document.getElementById('home-container');
    if (newsContainer) {
        const loadPromises = newsArticles.map(article => {
            return new Promise((resolve) => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('news-article');

                // Проверяем наличие изображения и загружаем его
                const img = new Image();
                img.src = article.imageUrl;

                // Устанавливаем обработчик для проверки загрузки изображения
                img.onload = () => {
                    articleDiv.innerHTML = `
                        <img src="${article.imageUrl}" alt="${article.title}" class="news-image">
                        <h3>${article.title}</h3>
                        <p class="date">${article.date}</p>
                        <p>${article.content.substring(0, 100)}...</p> <!-- Показываем только часть контента -->
                        ${article.button && article.buttonUrl ? `<a href="${article.buttonUrl}" class="read-more">${article.button}</a>` : ''}
                    `;
                    resolve(articleDiv); // Разрешаем промис с добавленным элементом
                };

                img.onerror = () => {
                    // Если изображение не загружается, просто не добавляем его в DOM
                    articleDiv.innerHTML = `
                        <h3>${article.title}</h3>
                        <p class="date">${article.date}</p>
                        <p>${article.content.substring(0, 100)}...</p> <!-- Показываем только часть контента -->
                        ${article.button && article.buttonUrl ? `<a href="${article.buttonUrl}" class="read-more">${article.button}</a>` : ''}
                    `;
                    resolve(articleDiv); // Разрешаем промис с добавленным элементом
                };

                // Добавляем пустой контейнер для статьи
                newsContainer.appendChild(articleDiv);
            });
        });

        // После завершения всех промисов добавляем статьи в контейнер
        Promise.all(loadPromises).then(articles => {
            articles.forEach(articleDiv => {
                newsContainer.appendChild(articleDiv);
            });
        });
    }
}

// Вызываем функцию загрузки новостей при загрузке страницы
document.addEventListener('DOMContentLoaded', loadNews);

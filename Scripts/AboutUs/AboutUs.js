function loadAboutUsContent() {
    const aboutUsContainer = document.getElementById('about_us-container');

    // Массив сотрудников
    const teamMembers = [
        {
            name: "Иван Иванов",
            position: "Генеральный директор",
            description: "Иван имеет более 10 лет опыта в управлении бизнесом и стратегическом планировании.",
            image: "Images/employee1.jpg" // Заглушка для изображения
        },
        {
            name: "Мария Петрова",
            position: "Менеджер по продажам",
            description: "Мария отвечает за развитие клиентской базы и поддержание отношений с клиентами.",
            image: "https://via.placeholder.com/150"
        },
        {
            name: "Алексей Смирнов",
            position: "Технический директор",
            description: "Алексей руководит технической командой и отвечает за внедрение инновационных решений.",
            image: "https://via.placeholder.com/invalid-image" // Неправильный путь
        },
        {
            name: "Елена Кузнецова",
            position: "Маркетолог",
            description: "Елена разрабатывает и реализует маркетинговые стратегии для продвижения наших услуг.",
            image: "https://via.placeholder.com/150"
        }
    ];

    // Создание карточек для каждого сотрудника
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.className = 'team-card';

        // Проверка наличия изображения
        if (member.image) {
            const img = new Image();
            img.src = member.image;
            img.alt = member.name;
            img.className = 'team-card-img';

            // Проверка, загружается ли изображение
            img.onload = function() {
                card.appendChild(img); // Добавляем изображение в карточку, если оно загружено
                // Затем добавляем текстовое содержимое
                const content = `
                    <h3>${member.name}</h3>
                    <h4>${member.position}</h4>
                    <p>${member.description}</p>
                `;
                card.innerHTML += content; // Добавляем контент под изображением
                aboutUsContainer.appendChild(card);
            };

            img.onerror = function() {
                console.error(`Изображение для ${member.name} не удалось загрузить.`);
                // Если изображение не загружается, добавляем текстовое содержимое без изображения
                const content = `
                    <h3>${member.name}</h3>
                    <h4>${member.position}</h4>
                    <p>${member.description}</p>
                `;
                card.innerHTML += content; // Добавляем контент
                aboutUsContainer.appendChild(card);
            };
        } else {
            // Если изображения нет, сразу добавляем текстовое содержимое
            const content = `
                <h3>${member.name}</h3>
                <h4>${member.position}</h4>
                <p>${member.description}</p>
            `;
            card.innerHTML += content; // Добавляем контент
            aboutUsContainer.appendChild(card);
        }
    });
}

// Вызов функции для загрузки контента
loadAboutUsContent();

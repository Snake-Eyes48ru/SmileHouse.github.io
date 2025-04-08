import CardState from './CardState.js'; // Импортируем класс CardState

const services = [
    {
        title: "Профилактическая стоматология",
        oldPrice: 2000,
        discount: 20,
        description: "Профилактическая стоматология включает в себя регулярные осмотры и чистки зубов для предотвращения заболеваний.",
        imageUrl: "Images/Prevention.jpg" // Укажите путь к изображению
    },
    {
        title: "Лечение кариеса",
        oldPrice: 3000,
        discount: 90,
        description: "Лечение кариеса включает в себя диагностику и восстановление поврежденных зубов.",
        imageUrl: "Images/CariesTreatment.jpg"
    },
    {
        title: "Удаление зуба",
        oldPrice: 4000,
        discount: 0,
        description: "Удаление зуба проводится безболезненно и быстро.",
        imageUrl: ""
    },
    {
        title: "Супер пупер лечение зуба на 8 марта",
        oldPrice: 5000,
        discount: 40,
        description: "",
        imageUrl: ""
    },
];

// Функция для вычисления новой цены
function calculateNewPrice(oldPrice, discount) {
    if (discount > 0) {
        return oldPrice - (oldPrice * (discount / 100));
    }
    return oldPrice; // Если скидки нет, возвращаем старую цену
}

// Добавляем новую цену в каждый объект услуг
services.forEach(service => {
    service.newPrice = calculateNewPrice(service.oldPrice, service.discount);
});

function createServiceCard(service) {
    const card = document.createElement('div');
    card.classList.add('service-card');

    // Формируем HTML для цен
    let priceHTML = '';

    if (service.discount > 0) {
        priceHTML = `
            <span class="old-price">${service.oldPrice}₽</span>
            <span class="discount">-${service.discount}%</span>
            <span class="new-price">${service.newPrice}₽</span>
        `;
    } else {
        priceHTML = `
            <span class="new-price">${service.newPrice}₽</span>
        `;
    }

    card.innerHTML = `
        <img src="${service.imageUrl}" alt="${service.title}" class="service-image">
        <h3>${service.title}</h3>
        <p class="price">
            ${priceHTML}
        </p>
        <div class="description hidden">${service.description}</div>
    `;

    // Создаём экземпляр CardState для этой карточки
    new CardState(card);

    return card;
}

const serviceContainer = document.getElementById('service-container');
console.log('Контейнер для услуг:', serviceContainer); // не забыть удалить
services.forEach(service => {
    const serviceCard = createServiceCard(service);
    serviceContainer.appendChild(serviceCard);
});

document.querySelectorAll('.service-image').forEach(img => {
    img.onload = () => {
        img.style.display = 'block'; // Показываем изображение, если оно загрузилось
    };
    img.onerror = () => {
        img.style.display = 'none'; // Скрываем изображение, если оно не загрузилось
    };
});

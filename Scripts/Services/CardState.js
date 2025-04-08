class CardState {
    constructor(cardElement) {
        this.cardElement = cardElement;
        this.descriptionDiv = cardElement.querySelector('.description');
        this.initEvents();
    }

    initEvents() {
        // Отображение описания при наведении
        this.cardElement.addEventListener('mouseenter', () => {
            this.showDescription();
        });

        // Скрытие описания при уходе курсора
        this.cardElement.addEventListener('mouseleave', () => {
            this.hideDescription();
        });

        // Клик для мобильного устройства
        // this.cardElement.addEventListener('click', () => {
        //     this.toggleDescription();
        // });
    }

    showDescription() {
        this.descriptionDiv.classList.add('visible'); // Добавляем класс для отображения
    }

    hideDescription() {
        this.descriptionDiv.classList.remove('visible'); // Убираем класс для скрытия
    }

    // toggleDescription() {
    //     this.descriptionDiv.classList.toggle('visible'); // Переключаем класс
    // }
}

// Экспортируем класс для использования в других файлах
export default CardState;
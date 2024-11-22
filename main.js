// Функція для відкриття модального вікна
function openModal(productId) {
    // Отримуємо зображення товару з картки
    const productImage = document.querySelector(`#${productId} .product-image`).src;

    // Оновлюємо зображення у модальному вікні
    const modalImage = document.getElementById("modalImage");
    modalImage.src = productImage;

    // Відображаємо модальне вікно
    const modal = document.getElementById("buyModal");
    modal.style.display = "block";
}

// Функція закриття модального вікна
function closeModal() {
    const modal = document.getElementById("buyModal");
    modal.style.display = "none";
}

// Закриття модального вікна при кліку поза ним
window.onclick = function(event) {
    const modal = document.getElementById("buyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// Отримуємо елементи для модального вікна та кнопки закриття
var modal = document.querySelector('.modal');
var closeBtn = document.querySelector('.modal .close');

// Закриваємо вікно при натисканні на кнопку закриття
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Запобігаємо закриттю вікна при натисканні на саму модель (тіло вікна)
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        event.stopPropagation();
    }
});

// Перевірка чи модальне вікно не відкривається автоматично
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        // Переконайтеся, що функція openModal не викликається автоматично
    });
}
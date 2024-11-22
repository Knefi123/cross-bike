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

window.onclick = function(event) {
    const modal = document.getElementById("buyModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
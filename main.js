// Відкриття модального вікна
function openModal(productId) {
    const modal = document.getElementById("buyModal");
    const modalImage = document.getElementById("modalImage");
    const productImage = document.getElementById(productId).getElementsByTagName('img')[0];
    modalImage.src = productImage.src;  // Зміна зображення на модальному вікні
    modal.style.display = "block";  // Показати модальне вікно
}

// Закриття модального вікна
function closeModal() {
    const modal = document.getElementById("buyModal");
    modal.style.display = "none";  // Сховати модальне вікно
}
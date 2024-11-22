// Функція відкриття модального вікна
function openModal(productId) {
    if (window.innerWidth <= 768) { // Перевіряємо, чи пристрій є мобільним
        const productImage = document.querySelector(`#${productId} .product-image`).src;

        const modalImage = document.getElementById("modalImage");
        modalImage.src = productImage;

        const modal = document.getElementById("buyModal");
        modal.style.display = "block";
    }
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
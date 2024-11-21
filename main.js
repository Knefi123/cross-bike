// Відкриваємо модальне вікно
function openModal(productId) {
    const modal = document.getElementById("buyModal");
    const modalImage = document.getElementById("modalImage");

    // Отримуємо зображення товару з картки
    const productImage = document.querySelector(`#${productId} .product-image`).src;

    // Встановлюємо зображення товару в модальне вікно
    modalImage.src = productImage;

    // Відкриваємо модальне вікно
    modal.style.display = "block";
}

// Закриваємо модальне вікно
function closeModal() {
    const modal = document.getElementById("buyModal");
    modal.style.display = "none";
}

// Обробник форми покупки
document.getElementById("purchaseForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;

    if (name && email) {
        alert(`Покупка підтверджена! Лист на ім'я ${name} буде надіслано на емейл ${email}.`);
        closeModal();
    } else {
        alert("Будь ласка, введіть ваше ім'я та емейл!");
    }
});
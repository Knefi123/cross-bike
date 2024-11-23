// Open the modal with the product's image
function openModal(productId) {
    var modal = document.getElementById('buyModal');
    var modalImage = document.getElementById('modalImage');
    
    // Find the product's image
    var productImage = document.getElementById(productId).querySelector('.product-image');
    
    // Set the modal image source to the clicked product's image
    modalImage.src = productImage.src;

    // Show the modal
    modal.style.display = "block";
}

// Close the modal
function closeModal() {
    var modal = document.getElementById('buyModal');
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('buyModal');
    if (event.target == modal) {
        closeModal();
    }
}
let cartTotal = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        // Access the parent product element
        const product = this.parentElement;
        
        // Get product price
        const priceElement = product.getElementsByClassName('product-price')[0];
        const price = parseFloat(priceElement.textContent);
        
        // Update cart total
        cartTotal += price;
        document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
    });
});

// Clear cart functionality
document.getElementById('clear-cart').addEventListener('click', function() {
    cartTotal = 0;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);
});
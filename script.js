document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const products = document.getElementsByClassName("product");

        for (let product of products) {
            const text = product.textContent.toLowerCase();
            product.style.display = text.includes(filter) ? "block" : "none";
        }
    });
});
let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById("cart-items");
    cartDisplay.innerHTML = "";
    cart.forEach((item, index) => {
        cartDisplay.innerHTML += `<p>${item.name} - ${item.price} BDT 
                                  <button onclick="removeFromCart(${index})">Remove</button></p>`;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function checkout() {
    alert("Redirecting to checkout page!");
}
document.querySelectorAll(".dropdown").forEach(dropdown => {
    dropdown.addEventListener("mouseenter", () => {
        dropdown.querySelector(".dropdown-content").style.display = "block";
        dropdown.querySelector(".dropdown-content").style.opacity = "1";
        dropdown.querySelector(".dropdown-content").style.transform = "translateY(5px)";
    });

    dropdown.addEventListener("mouseleave", () => {
        dropdown.querySelector(".dropdown-content").style.display = "none";
    });
});

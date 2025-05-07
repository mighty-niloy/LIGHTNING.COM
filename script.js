document.addEventListener("DOMContentLoaded", () => {
    // Search Filter
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        const products = document.getElementsByClassName("product");
        
        for (let product of products) {
            const text = product.textContent.toLowerCase();
            product.style.display = text.includes(filter) ? "block" : "none";
        }
    });

    // Dropdown Hover
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const content = dropdown.querySelector(".dropdown-content");

        dropdown.addEventListener("mouseenter", () => {
            content.style.visibility = "visible";
            content.style.opacity = "1";
            content.style.transform = "translateY(5px)";
            content.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        });

        dropdown.addEventListener("mouseleave", () => {
            content.style.visibility = "hidden";
            content.style.opacity = "0";
            content.style.transform = "translateY(0px)";
        });
    });
});

let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
    alert(`${productName} added to cart!`);
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById("cart-items");
    cartDisplay.innerHTML = cart.length === 0 
        ? "<p>Your cart is empty</p>"
        : "";

    cart.forEach((item, index) => {
        cartDisplay.innerHTML += `
            <p>
                ${item.name} - ${item.price} BDT 
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function checkout() {
    if (cart.length > 0) {
        alert("Redirecting to checkout page!");
        // Replace with actual checkout logic
        window.location.href = "checkout.html";
    } else {
        alert("Your cart is empty. Add items to cart before checkout.");
    }
}

// Product data using modern JavaScript (ES6+)
const products = [
    { 
        id: 1, 
        name: "Premium Headphones", 
        price: 2500, 
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" 
    },
    { 
        id: 2, 
        name: "Smart Watch", 
        price: 4999, 
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400" 
    },
    { 
        id: 3, 
        name: "Mechanical Keyboard", 
        price: 3200, 
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400" 
    },
    { 
        id: 4, 
        name: "Wireless Mouse", 
        price: 899, 
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400" 
    }
];

let cart = [];

// Render products to the DOM
function renderProducts() {
    const productDisplay = document.getElementById('product-list');
    productDisplay.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `).join('');
}

// Add item to cart array
function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    updateCartUI();
}

// Update the Cart list and Total price
function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;

    const cartList = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty</li>";
    } else {
        cartList.innerHTML = cart.map((item) => `
            <li>
                ${item.name} 
                <span>₹${item.price}</span>
            </li>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerText = total;
}

// Handle checkout
function checkout() {
    if (cart.length === 0) {
        alert("Please add items to your cart first!");
    } else {
        alert(`Order successful! Total amount: ₹${document.getElementById('total-price').innerText}`);
        cart = [];
        updateCartUI();
    }
}

// Initialize the page
renderProducts();
updateCartUI();
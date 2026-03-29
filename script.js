/* ============================================
   IA#2 - script.js - I-ppliance
   Student: John-Mark Whittick | ID#: 1907528
   Module: CIT2011 | Assignment: IA#2 (Individual)
   ============================================ */

/* 2d. Logic: data storage and organization using arrays and objects */
var products = [
    { id: 1,  name: "Sharp Microwave",               category: "kitchen",       price: 18500,  image: "microwave.jpg" },
    { id: 2,  name: "Oster Blender",                 category: "kitchen",       price: 7500,   image: "blender.jpg" },
    { id: 3,  name: "Philips Air Fryer",             category: "kitchen",       price: 22000,  image: "airfryer.jpg" },
    { id: 4,  name: "Samsung Refrigerator",          category: "kitchen",       price: 120000, image: "fridge.jpg" },
    { id: 5,  name: "Breville Toaster Oven",         category: "kitchen",       price: 25000,  image: "toasteroven.jpg" },
    { id: 6,  name: "Instant Pot Cooker",            category: "kitchen",       price: 19500,  image: "instantpot.jpg" },
    { id: 7,  name: "Hamilton Beach Juicer",         category: "kitchen",       price: 9500,   image: "juicer.jpg" },
    { id: 8,  name: "LG Washing Machine",            category: "laundry",       price: 95000,  image: "washer.jpg" },
    { id: 9,  name: "Samsung Dryer",                 category: "laundry",       price: 85000,  image: "dryer.jpg" },
    { id: 10, name: "Black+Decker Iron",             category: "laundry",       price: 6500,   image: "iron.jpg" },
    { id: 11, name: "Whirlpool Washer",              category: "laundry",       price: 110000, image: "whirlpool.jpg" },
    { id: 12, name: "Dyson Vacuum Cleaner",          category: "cleaning",      price: 85000,  image: "vacuum.jpg" },
    { id: 13, name: "iRobot Roomba",                 category: "cleaning",      price: 120000, image: "roomba.jpg" },
    { id: 14, name: "Karcher Pressure Washer",       category: "cleaning",      price: 55000,  image: "pressurewasher.jpg" },
    { id: 15, name: "Black+Decker Dustbuster",       category: "cleaning",      price: 9500,   image: "dustbuster.jpg" },
    { id: 16, name: "Samsung 55 Smart TV",           category: "entertainment", price: 145000, image: "tv.jpg" },
    { id: 17, name: "JBL Speaker",                   category: "entertainment", price: 35000,  image: "jbl.jpg" },
    { id: 18, name: "LG 43 Smart TV",                category: "entertainment", price: 95000,  image: "lgtv.jpg" },
    { id: 19, name: "Sony Soundbar",                 category: "entertainment", price: 42000,  image: "soundbar.jpg" },
    { id: 20, name: "Nintendo Switch Console",       category: "entertainment", price: 78000,  image: "nintendo.jpg" },
    { id: 21, name: "PlayStation 5 Console",         category: "entertainment", price: 145000, image: "ps5.jpg" },
    { id: 22, name: "Anker Projector",               category: "entertainment", price: 65000,  image: "anker.jpg" },
    { id: 23, name: "DeWalt Power Drill",            category: "tools",         price: 18000,  image: "drill.jpg" },
    { id: 24, name: "Makita Circular Saw",           category: "tools",         price: 28000,  image: "saw.jpg" },
    { id: 25, name: "Stanley Toolbox Set",           category: "tools",         price: 15000,  image: "toolbox.jpg" },
    { id: 26, name: "IMALENT High Lumen Flashlight", category: "tools",         price: 2400,   image: "flashlight.jpg" },
    { id: 27, name: "Anker Solar Generator",         category: "tools",         price: 19500,  image: "solar.jpg" },
    { id: 28, name: "Ryobi Heat Gun",                category: "tools",         price: 11000,  image: "heatgun.jpg" }
];

/*2b. Event Handling: First Event Handling event listener for when the HTML document finishes loading */
document.addEventListener('DOMContentLoaded', function() {
    updateCartIcon();
    setupMobileNav();

    /* 2a. DOM Manipulationn QuerySelector to check which page is currently active */
    if (document.querySelector('#productgrid')) { displayProducts(products); }
    if (document.querySelector('#cart-container')) { displayCart(); }
    if (document.querySelector('#checkout-summary')) { displayCheckoutSummary(); }

    /* 2a. DOM Manipulation for getElement & 2b. Event Handling and attaching a click listener to the login button */
    var loginBtn = document.getElementById('loginbtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var userIn = document.getElementById('login-username').value.trim();
            var passIn = document.getElementById('login-password').value.trim();
            
            var savedUser = JSON.parse(localStorage.getItem('ippliance_user'));

            /* 2d. Logic control structure if/else for login verification */
            if (savedUser && savedUser.username === userIn && savedUser.password === passIn) {
                alert('Welcome back to I-ppliance!');
                window.location.href = 'index.html';
            } else {
                alert('Invalid credentials. Please make sure you have registered.');
            }
        });
    }

    var registerBtn = document.getElementById('registerbtn');
    if (registerBtn) {
        /* 2b. Event Handling: Second working event listener attached to the registration button */
        registerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var fname = document.getElementById('firstname').value.trim();
            var user  = document.getElementById('username').value.trim();
            var pass  = document.getElementById('reg-password').value.trim();
            var cpass = document.getElementById('reg-cpassword').value.trim(); 

            var isValid = true;

            /* 2c. Form Validation to check if fields match or are empty */
            /* 2a. DOM Manipulation to update CSS using JS to display error message */

            // First Name Check (Uses a fallback ID just in case your HTML differs slightly)
            var fnameErr = document.getElementById('user-fname-error') || document.getElementById('firstname-error');
            if (fname === '') {
                if(fnameErr) fnameErr.style.display = 'block';
                isValid = false;
            } else {
                if(fnameErr) fnameErr.style.display = 'none';
            }

            // Username Check
            var userErr = document.getElementById('username-error');
            if (user === '') {
                if(userErr) userErr.style.display = 'block';
                isValid = false;
            } else {
                if(userErr) userErr.style.display = 'none';
            }

            // Password Check
            var passErr = document.getElementById('user-password-error');
            if (pass === '') {
                if(passErr) passErr.style.display = 'block';
                isValid = false;
            } else {
                if(passErr) passErr.style.display = 'none';
            }

            // Confirm Password Match Check
            var cpassErr = document.getElementById('user-cpassword-error');
            if (pass !== cpass || cpass === '') {
                if(cpassErr) cpassErr.style.display = 'block';
                isValid = false;
            } else {
                if(cpassErr) cpassErr.style.display = 'none';
            }

            if (isValid) {
                var userData = { firstname: fname, username: user, password: pass };
                localStorage.setItem('ippliance_user', JSON.stringify(userData));
                
                alert('Registration successful, ' + fname + '! Redirecting to Login.');
                window.location.href = 'login.html';
            }
        });
    }

    var confirmOrderBtn = document.getElementById('confirm-order-btn');
    if (confirmOrderBtn) {
        confirmOrderBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var lastname = document.getElementById('lastname').value.trim();
            var email    = document.getElementById('email').value.trim();
            var phone    = document.getElementById('phone').value.trim();
            var address  = document.getElementById('address').value.trim();
            var parish   = document.getElementById('parish').value;

            var isValid = true;

            /* 2c. Form Validation / Input Handling  to check if a field is empty and updates the DOM with error messages */
            if (lastname === '') { document.getElementById('user-lname-error').style.display = 'block'; isValid = false; }
            else { document.getElementById('user-lname-error').style.display = 'none'; }

            /* 2c. Form Validation / Input Handling  for email format using .includes('@') */
            if (email === '' || !email.includes('@')) { document.getElementById('user-email-error').style.display = 'block'; isValid = false; }
            else { document.getElementById('user-email-error').style.display = 'none'; }

            if (phone === '') { document.getElementById('user-phone-error').style.display = 'block'; isValid = false; }
            else { document.getElementById('user-phone-error').style.display = 'none'; }

            if (address === '') { document.getElementById('user-address-error').style.display = 'block'; isValid = false; }
            else { document.getElementById('user-address-error').style.display = 'none'; }

            if (parish === '') { document.getElementById('user-parish-error').style.display = 'block'; isValid = false; }
            else { document.getElementById('user-parish-error').style.display = 'none'; }

            if (isValid) {
                alert('Thank you for your order! It is now being processed.');
                localStorage.removeItem('ippliance_cart'); 
                window.location.href = 'index.html';
            }
        });
    }

    /* 2a. DOM Manipulation for Using querySelectorAll & 2d. Basic Interactivity for looping through categories to filter products */
    var categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            var category = this.getAttribute('data-category');
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            var filtered = (category === 'all') ? products : products.filter(p => p.category === category);
            displayProducts(filtered);
        });
    });
});

function displayProducts(list) {
    /* 2a. DOM Manipulation querySelector to display products */
    var grid = document.querySelector('#productgrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    list.forEach(item => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p class="price">J$${item.price.toLocaleString()}</p>
                <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>`;
    });
}

function addToCart(id) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var product = products.find(p => p.id === id);
    var existing = cart.find(item => item.id === id);

    if (existing) { existing.quantity += 1; }
    else { cart.push({...product, quantity: 1}); }

    localStorage.setItem('ippliance_cart', JSON.stringify(cart));
    updateCartIcon();
    alert(product.name + ' added to cart!');
}

function displayCart() {
    var container = document.querySelector('#cart-container');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!container) return;

   if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 0;">
                <h3 style="margin-bottom: 20px;">Your cart is empty.</h3>
                <a href="index.html" class="btn" style="width: auto; display: inline-block; padding: 12px 30px;">Browse Products</a>
            </div>`;
        return;
    }

    let total = 0;
    let html = '<h2>Shopping Cart</h2>';
    cart.forEach(item => {
        /* 2d. Logic arithmetic calculations to display quantity for each item added to cart */
        total += item.price * item.quantity;
        
        /* 2a. DOM Manipulation for HTML elements added to view */
        html += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-img" style="width: 80px;">
                <div><h4>${item.name}</h4><p>J$${item.price.toLocaleString()} x ${item.quantity}</p></div>
                <button class="btn remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>`;
    });

    html += `
        <div class="cart-total">
            <h3>Total: J$${total.toLocaleString()}</h3>
            <button id="clear-cart-btn" class="btn" onclick="clearCart()">Clear Cart</button>
            <a href="checkout.html" class="btn checkout-link-btn">Checkout</a>
        </div>`;
    container.innerHTML = html;
}

function removeFromCart(id) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('ippliance_cart', JSON.stringify(cart));
    displayCart();
    updateCartIcon();
}

function clearCart() {
    localStorage.removeItem('ippliance_cart');
    displayCart();
    updateCartIcon();
}

function updateCartIcon() {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    /* 2d. Logic arithmetic calculation utilizing the array reduce method */
    var count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    var navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'cart.html' || link.textContent.toLowerCase().includes('cart')) {
            /* 2a. DOM Manipulation to update HTML using innerText to display cart count */
            if (count > 0) {
                link.innerText = 'Cart (' + count + ')';
            } else {
                link.innerText = 'Cart';
            }
        }
    });
}

function displayCheckoutSummary() {
    var container = document.querySelector('#checkout-summary');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!container) return;

    let total = 0;
    let html = '<h3>Order Summary</h3><ul style="list-style:none; padding:0;">';
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `<li>${item.name} (x${item.quantity}) - J$${(item.price * item.quantity).toLocaleString()}</li>`;
    });
    html += `</ul><hr><h4>Grand Total: J$${total.toLocaleString()}</h4>`;
    container.innerHTML = html;
}

function setupMobileNav() {
    var menuBtn = document.querySelector('.mobile-nav-button');
    var nav = document.querySelector('nav');
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', function() {
            /* 2a. DOM Manipulation to update CSS by toggling the 'active' class */
            nav.classList.toggle('active');
        });
    }
}

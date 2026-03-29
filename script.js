

/* 2d. Basic Interactivity / Logic & 3a. Integration
    Product data - THE WHAT: Changed image paths from ../Assets/ to Assets/ */
var products = [
    { id: 1,  name: "Sharp Microwave",             category: "kitchen",       price: 18500,  image: "microwave.jpg" },
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

/* 2b. Event Handling - DOMContentLoaded initializes the app */
document.addEventListener('DOMContentLoaded', function() {
    updateCartIcon();
    setupMobileNav();

    /* 2c. Form Validation - Login form */
    var loginBtn = document.getElementById('loginbtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            var username      = document.getElementById('login-username').value.trim();
            var password      = document.getElementById('login-password').value.trim();
            var usernameError = document.getElementById('username-error');
            var passwordError = document.getElementById('password-error');
            var isValid       = true;

            if (username === '') {
                usernameError.style.display = 'block';
                isValid = false;
            } else {
                usernameError.style.display = 'none';
            }

            if (password === '') {
                passwordError.style.display = 'block';
                isValid = false;
            } else {
                passwordError.style.display = 'none';
            }

            if (isValid) {
                alert('Welcome back, ' + username + '!');
                window.location.href = 'index.html';
            }
        });
    }

    /* 2c. Form Validation - Register form */
    var registerBtn = document.getElementById('registerbtn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function(event) {
            event.preventDefault(); 

            var fname     = document.getElementById('firstname').value.trim();
            var lname     = document.getElementById('lastname').value.trim();
            var email     = document.getElementById('email').value.trim();
            var dob       = document.getElementById('dob').value;
            var username  = document.getElementById('username').value.trim();
            var password  = document.getElementById('reg-password').value.trim();
            var cpassword = document.getElementById('reg-cpassword').value.trim();
            var isValid   = true;

            // Helper to toggle errors
            var checkField = function(val, id) {
                if (val === '') {
                    document.getElementById(id).style.display = 'block';
                    isValid = false;
                } else {
                    document.getElementById(id).style.display = 'none';
                }
            };

            checkField(fname, 'user-fname-error');
            checkField(lname, 'user-lname-error');
            checkField(dob, 'user-dob-error');
            checkField(username, 'username-error');
            checkField(password, 'user-password-error');

            if (email === '' || !email.includes('@')) {
                document.getElementById('user-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-email-error').style.display = 'none';
            }

            if (cpassword !== password || cpassword === '') {
                document.getElementById('user-cpassword-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-cpassword-error').style.display = 'none';
            }

            if (isValid) {
                alert('Registration successful! Welcome, ' + fname + '!');
                window.location.href = 'login.html';
            }
        });
    }

    /* 2c. Form Validation - Confirm order button 
       THE WHAT: Looking for 'confirm-btn' to match the HTML fix */
    var confirmBtn = document.getElementById('confirm-btn') || document.getElementById('confirm-order-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            confirmCheckout();
        });
    }

    /* Checkout button navigation */
    var cancelBtn = document.getElementById('cancel-btn');
    var clearBtn  = document.getElementById('clear-btn');
    var closeBtn  = document.getElementById('close-btn');

    if (cancelBtn) { cancelBtn.addEventListener('click', function(e) { e.preventDefault(); window.location.href = 'cart.html'; }); }
    if (clearBtn)  { clearBtn.addEventListener('click',  function(e) { e.preventDefault(); document.getElementById('checkout-form').reset(); }); }
    if (closeBtn)  { closeBtn.addEventListener('click',  function(e) { e.preventDefault(); window.location.href = 'index.html'; }); }

    /* Page-specific loaders */
    if (document.querySelector('#productgrid')) { displayProducts(products); }
    if (document.querySelector('#cart-container')) { displayCart(); }
    if (document.querySelector('#checkout-summary')) { displayCheckoutSummary(); }

    /* Category filtering */
    var categoryBtns = document.querySelectorAll('.category-btn');
    for (var i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener('click', function() {
            var category = this.getAttribute('data-category');
            for (var j = 0; j < categoryBtns.length; j++) {
                categoryBtns[j].classList.remove('active');
            }
            this.classList.add('active');

            if (category === 'all') {
                displayProducts(products);
            } else {
                var filtered = products.filter(p => p.category === category);
                displayProducts(filtered);
            }
        });
    }
});

/* 2a. DOM Manipulation - Render products */
function displayProducts(productsToDisplay) {
    var productGrid = document.querySelector('#productgrid');
    if (!productGrid) return;
    productGrid.innerHTML = '';

    productsToDisplay.forEach(product => {
        productGrid.innerHTML +=
            '<div class="product-card">' +
                '<img src="' + product.image + '" alt="' + product.name + '">' +
                '<h3>' + product.name + '</h3>' +
                '<p class="price">J$' + product.price.toLocaleString() + '</p>' +
                '<button class="btn add-to-cart-btn" data-id="' + product.id + '">Add to Cart</button>' +
            '</div>';
    });

    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            addToCart(parseInt(this.getAttribute('data-id')));
        });
    });
}

/* 2d. Cart Logic */
function addToCart(productId) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var product = products.find(p => p.id === productId);
    var existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('ippliance_cart', JSON.stringify(cart));
    alert(product.name + ' added to cart!');
    updateCartIcon();
}

/* 2a. DOM Manipulation - Render Cart */
function displayCart() {
    var cartContainer = document.querySelector('#cart-container');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<h3>Your cart is empty.</h3>';
        return;
    }

    var subtotal = 0;
    var cartHTML = cart.map(item => {
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return '<div class="cart-item">' +
                '<img src="' + item.image + '" alt="' + item.name + '" class="cart-img">' +
                '<div><h4>' + item.name + '</h4><p>J$' + item.price.toLocaleString() + ' x ' + item.quantity + '</p></div>' +
                '<p><strong>J$' + itemTotal.toLocaleString() + '</strong></p>' +
                '<button class="btn remove-btn" data-id="' + item.id + '">Remove</button>' +
            '</div>';
    }).join('');

    var tax = Math.round(subtotal * 0.15);
    var total = subtotal + tax;

    cartHTML += '<div class="cart-total">' +
            '<p>Subtotal: J$' + subtotal.toLocaleString() + '</p>' +
            '<p>GCT (15%): J$' + tax.toLocaleString() + '</p>' +
            '<h3>Total: J$' + total.toLocaleString() + '</h3>' +
            '<a href="checkout.html"><button class="btn checkout-link-btn">Proceed to Checkout</button></a>' +
            '<button class="btn" id="clear-cart-btn" style="margin-top:10px;">Clear Cart</button>' +
        '</div>';

    cartContainer.innerHTML = cartHTML;

    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            removeFromCart(parseInt(this.getAttribute('data-id')));
        });
    });

    var clearBtn = document.getElementById('clear-cart-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            localStorage.removeItem('ippliance_cart');
            displayCart();
            updateCartIcon();
        });
    }
}

/* 2a. Order Summary Loader */
function displayCheckoutSummary() {
    var summary = document.querySelector('#checkout-summary');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!summary || cart.length === 0) return;

    var subtotal = 0;
    var html = '<h3>Order Summary</h3>';
    cart.forEach(item => {
        var itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        html += '<p>' + item.name + ' x' + item.quantity + ' — J$' + itemTotal.toLocaleString() + '</p>';
    });

    var tax = Math.round(subtotal * 0.15);
    var total = subtotal + tax;
    html += '<hr><p>Subtotal: J$' + subtotal.toLocaleString() + '</p><p>GCT (15%): J$' + tax.toLocaleString() + '</p><h3>Total: J$' + total.toLocaleString() + '</h3>';
    summary.innerHTML = html;

    var amt = document.getElementById('amount');
    if (amt) amt.value = 'J$' + total.toLocaleString();
}

function removeFromCart(id) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var newCart = cart.filter(item => item.id !== id);
    localStorage.setItem('ippliance_cart', JSON.stringify(newCart));
    displayCart();
    updateCartIcon();
}

function updateCartIcon() {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var count = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.querySelectorAll('nav a').forEach(link => {
        if (link.textContent.toLowerCase().includes('cart')) {
            link.innerHTML = 'Cart (' + count + ')';
        }
    });
}

function setupMobileNav() {
    var btn = document.querySelector('.mobile-nav-button');
    var nav = document.querySelector('nav');
    if (btn && nav) btn.onclick = () => nav.classList.toggle('active');
}

/* 2c. Final Validation Logic - Matches Spans in checkout.html */
function confirmCheckout() {
    var fields = [
        { id: 'firstname', error: 'user-fname-error' },
        { id: 'lastname',  error: 'user-lname-error' },
        { id: 'email',     error: 'user-email-error' },
        { id: 'phone',     error: 'user-phone-error' },
        { id: 'address',   error: 'user-address-error' },
        { id: 'parish',    error: 'user-parish-error' }
    ];

    var isValid = true;
    fields.forEach(field => {
        var val = document.getElementById(field.id).value.trim();
        var err = document.getElementById(field.error);
        if (val === '' || val === 'Select Parish') {
            err.style.display = 'block';
            isValid = false;
        } else {
            err.style.display = 'none';
        }
    });

    if (isValid) {
        alert('Order confirmed! Thank you for shopping with I-ppliance.');
        localStorage.removeItem('ippliance_cart');
        window.location.href = 'index.html';
    }
}

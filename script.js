/* ============================================
   IA#2 - script.js - I-ppliance
   Student: John-Mark Whittick | ID#: 1907528
   Module: CIT2011 | Assignment: IA#2 Sem.2/AY.25/26
   ============================================ */

/* 2d. Basic Interactivity / Logic & 3a. Integration
    Product data stored as array of objects */
var products = [
    { id: 1,  name: "Sharp Microwave",               category: "kitchen",       price: 18500,  image: "../Assets/microwave.jpg" },
    { id: 2,  name: "Oster Blender",                 category: "kitchen",       price: 7500,   image: "../Assets/blender.jpg" },
    { id: 3,  name: "Philips Air Fryer",             category: "kitchen",       price: 22000,  image: "../Assets/airfryer.jpg" },
    { id: 4,  name: "Samsung Refrigerator",          category: "kitchen",       price: 120000, image: "../Assets/fridge.jpg" },
    { id: 5,  name: "Breville Toaster Oven",         category: "kitchen",       price: 25000,  image: "../Assets/toasteroven.jpg" },
    { id: 6,  name: "Instant Pot Cooker",            category: "kitchen",       price: 19500,  image: "../Assets/instantpot.jpg" },
    { id: 7,  name: "Hamilton Beach Juicer",         category: "kitchen",       price: 9500,   image: "../Assets/juicer.jpg" },
    { id: 8,  name: "LG Washing Machine",            category: "laundry",       price: 95000,  image: "../Assets/washer.jpg" },
    { id: 9,  name: "Samsung Dryer",                 category: "laundry",       price: 85000,  image: "../Assets/dryer.jpg" },
    { id: 10, name: "Black+Decker Iron",             category: "laundry",       price: 6500,   image: "../Assets/iron.jpg" },
    { id: 11, name: "Whirlpool Washer",              category: "laundry",       price: 110000, image: "../Assets/whirlpool.jpg" },
    { id: 12, name: "Dyson Vacuum Cleaner",          category: "cleaning",      price: 85000,  image: "../Assets/vacuum.jpg" },
    { id: 13, name: "iRobot Roomba",                 category: "cleaning",      price: 120000, image: "../Assets/roomba.jpg" },
    { id: 14, name: "Karcher Pressure Washer",       category: "cleaning",      price: 55000,  image: "../Assets/pressurewasher.jpg" },
    { id: 15, name: "Black+Decker Dustbuster",       category: "cleaning",      price: 9500,   image: "../Assets/dustbuster.jpg" },
    { id: 16, name: "Samsung 55 Smart TV",           category: "entertainment", price: 145000, image: "../Assets/tv.jpg" },
    { id: 17, name: "JBL Speaker",                   category: "entertainment", price: 35000,  image: "../Assets/jbl.jpg" },
    { id: 18, name: "LG 43 Smart TV",                category: "entertainment", price: 95000,  image: "../Assets/lgtv.jpg" },
    { id: 19, name: "Sony Soundbar",                 category: "entertainment", price: 42000,  image: "../Assets/soundbar.jpg" },
    { id: 20, name: "Nintendo Switch Console",       category: "entertainment", price: 78000,  image: "../Assets/nintendo.jpg" },
    { id: 21, name: "PlayStation 5 Console",         category: "entertainment", price: 145000, image: "../Assets/ps5.jpg" },
    { id: 22, name: "Anker Projector",               category: "entertainment", price: 65000,  image: "../Assets/anker.jpg" },
    { id: 23, name: "DeWalt Power Drill",            category: "tools",         price: 18000,  image: "../Assets/drill.jpg" },
    { id: 24, name: "Makita Circular Saw",           category: "tools",         price: 28000,  image: "../Assets/saw.jpg" },
    { id: 25, name: "Stanley Toolbox Set",           category: "tools",         price: 15000,  image: "../Assets/toolbox.jpg" },
    { id: 26, name: "IMALENT High Lumen Flashlight", category: "tools",         price: 2400,   image: "../Assets/flashlight.jpg" },
    { id: 27, name: "Anker Solar Generator",         category: "tools",         price: 19500,  image: "../Assets/solar.jpg" },
    { id: 28, name: "Ryobi Heat Gun",                category: "tools",         price: 11000,  image: "../Assets/heatgun.jpg" }
];


/* 2b. Event Handling - Listener 1: DOMContentLoaded initializes the app */
document.addEventListener('DOMContentLoaded', function() {

    updateCartIcon();
    setupMobileNav();

    /* 2c. Form Validation - Login form */
    var loginBtn = document.getElementById('loginbtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(event) {
            event.preventDefault(); /* Stops page from refreshing */

            var username      = document.getElementById('login-username').value.trim();
            var password      = document.getElementById('login-password').value.trim();
            var usernameError = document.getElementById('username-error');
            var passwordError = document.getElementById('password-error');
            var isValid       = true;

            /* 2d. Logic - Check empty fields */
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
            event.preventDefault(); /* Stops page from refreshing */

            var fname     = document.getElementById('firstname').value.trim();
            var lname     = document.getElementById('lastname').value.trim();
            var email     = document.getElementById('email').value.trim();
            var dob       = document.getElementById('dob').value;
            var username  = document.getElementById('username').value.trim();
            var password  = document.getElementById('reg-password').value.trim();
            var cpassword = document.getElementById('reg-cpassword').value.trim();
            var isValid   = true;

            /* 2d. Logic - Check each field */
            if (fname === '') {
                document.getElementById('user-fname-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-fname-error').style.display = 'none';
            }

            if (lname === '') {
                document.getElementById('user-lname-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-lname-error').style.display = 'none';
            }

            /* 2c. Email format validation */
            if (email === '' || !email.includes('@')) {
                document.getElementById('user-email-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-email-error').style.display = 'none';
            }

            if (dob === '') {
                document.getElementById('user-dob-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-dob-error').style.display = 'none';
            }

            if (username === '') {
                document.getElementById('username-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('username-error').style.display = 'none';
            }

            if (password === '') {
                document.getElementById('user-password-error').style.display = 'block';
                isValid = false;
            } else {
                document.getElementById('user-password-error').style.display = 'none';
            }

            /* 2d. Logic - Password match check */
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

    /* 2c. Form Validation - Confirm order button on checkout */
    var confirmBtn = document.getElementById('confirm-order-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function(event) {
            event.preventDefault(); /* Stops page from refreshing */
            confirmCheckout();
        });
    }

    /* 2b. Event Handling - Other checkout button listeners */
    var cancelBtn = document.getElementById('cancel-btn');
    var clearBtn  = document.getElementById('clear-btn');
    var closeBtn  = document.getElementById('close-btn');

    if (cancelBtn) { cancelBtn.addEventListener('click', function(event) { event.preventDefault(); window.location.href = 'cart.html'; }); }
    if (clearBtn)  { clearBtn.addEventListener('click',  function(event) { event.preventDefault(); document.getElementById('checkout-form').reset(); }); }
    if (closeBtn)  { closeBtn.addEventListener('click',  function(event) { event.preventDefault(); window.location.href = 'index.html'; }); }

    /* 2a. DOM Manipulation - Load products on index page */
    if (document.querySelector('#productgrid')) {
        displayProducts(products);
    }

    /* 2a. DOM Manipulation - Load cart on cart page */
    if (document.querySelector('#cart-container')) {
        displayCart();
    }

    /* 2a. DOM Manipulation - Load order summary on checkout page */
    if (document.querySelector('#checkout-summary')) {
        displayCheckoutSummary();
    }

    /* 2b. Event Handling - Listener 2: Category filter buttons */
    var categoryBtns = document.querySelectorAll('.category-btn');
    var i;
    for (i = 0; i < categoryBtns.length; i++) {
        categoryBtns[i].addEventListener('click', function() {
            var category = this.getAttribute('data-category');

            /* Remove active from all buttons then add to clicked one */
            var j;
            for (j = 0; j < categoryBtns.length; j++) {
                categoryBtns[j].classList.remove('active');
            }
            this.classList.add('active');

            /* 2d. Logic: If/Else controls which products to show */
            if (category === 'all') {
                displayProducts(products);
            } else {
                var filtered = [];
                var k;
                for (k = 0; k < products.length; k++) {
                    if (products[k].category === category) {
                        filtered.push(products[k]);
                    }
                }
                displayProducts(filtered);
            }
        });
    }

});


/* 2a. DOM Manipulation - Renders product cards into #productgrid */
function displayProducts(productsToDisplay) {
    var productGrid = document.querySelector('#productgrid');
    if (!productGrid) { return; }

    productGrid.innerHTML = '';

    var i;
    for (i = 0; i < productsToDisplay.length; i++) {
        var product = productsToDisplay[i];
        productGrid.innerHTML +=
            '<div class="product-card">' +
                '<img src="' + product.image + '" alt="' + product.name + '">' +
                '<h3>' + product.name + '</h3>' +
                '<p class="price">J$' + product.price.toLocaleString() + '</p>' +
                '<button class="btn add-to-cart-btn" data-id="' + product.id + '">Add to Cart</button>' +
            '</div>';
    }

    /* 2b. Event Handling - Add to cart button listeners */
    var addBtns = document.querySelectorAll('.add-to-cart-btn');
    var j;
    for (j = 0; j < addBtns.length; j++) {
        addBtns[j].addEventListener('click', function() {
            var id = parseInt(this.getAttribute('data-id'));
            addToCart(id);
        });
    }
}


/* 2d. Basic Interactivity / Logic - Adds item to cart in localStorage */
function addToCart(productId) {
    var cart         = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var product      = null;
    var existingItem = null;

    var i;
    for (i = 0; i < products.length; i++) {
        if (products[i].id === productId) { product = products[i]; }
    }

    for (i = 0; i < cart.length; i++) {
        if (cart[i].id === productId) { existingItem = cart[i]; }
    }

    /* 2d. Logic: If item exists increase quantity else add new */
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id:       product.id,
            name:     product.name,
            price:    product.price,
            image:    product.image,
            quantity: 1
        });
    }

    localStorage.setItem('ippliance_cart', JSON.stringify(cart));
    alert(product.name + ' added to cart!');
    updateCartIcon();
}


/* 2a. DOM Manipulation - Renders cart items into #cart-container */
function displayCart() {
    var cartContainer = document.querySelector('#cart-container');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];

    if (!cartContainer) { return; }

    if (cart.length === 0) {
        cartContainer.innerHTML = '<h3>Your cart is empty.</h3>';
        return;
    }

    var cartHTML = '';
    var subtotal = 0;
    var i;

    for (i = 0; i < cart.length; i++) {
        /* 2d. Arithmetic Calculation - Line total per item */
        var itemTotal = cart[i].price * cart[i].quantity;
        subtotal += itemTotal;

        cartHTML +=
            '<div class="cart-item">' +
                '<img src="' + cart[i].image + '" alt="' + cart[i].name + '" class="cart-img">' +
                '<div>' +
                    '<h4>' + cart[i].name + '</h4>' +
                    '<p>J$' + cart[i].price.toLocaleString() + ' x ' + cart[i].quantity + '</p>' +
                '</div>' +
                '<p><strong>J$' + itemTotal.toLocaleString() + '</strong></p>' +
                '<button class="btn remove-btn" data-id="' + cart[i].id + '">Remove</button>' +
            '</div>';
    }

    /* 2d. Arithmetic Calculation - Tax and total */
    var tax   = Math.round(subtotal * 0.15);
    var total = subtotal + tax;

    /* 2d. Logic - Arithmetic Calculation & button injection */
    cartHTML +=
        '<div class="cart-total">' +
            '<p>Subtotal: J$' + subtotal.toLocaleString() + '</p>' +
            '<p>GCT (15%): J$' + tax.toLocaleString() + '</p>' +
            '<h3>Total: J$' + total.toLocaleString() + '</h3>' +
            '<a href="checkout.html"><button class="btn checkout-link-btn">Proceed to Checkout</button></a>' +
            '<button class="btn" id="clear-cart-btn" style="margin-top:10px;">Clear Cart</button>' +
        '</div>';

    cartContainer.innerHTML = cartHTML;

    /* 2b. Event Handling - Remove button listeners */
    var removeBtns = document.querySelectorAll('.remove-btn');
    var j;
    for (j = 0; j < removeBtns.length; j++) {
        removeBtns[j].addEventListener('click', function() {
            var id = parseInt(this.getAttribute('data-id'));
            removeFromCart(id);
        });
    }

    /* 2b. Event Handling - Clear cart button listener */
    var clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            localStorage.removeItem('ippliance_cart');
            displayCart();
            updateCartIcon();
        });
    }
}


/* 2a. DOM Manipulation - Renders order summary on checkout page */
function displayCheckoutSummary() {
    var summary = document.querySelector('#checkout-summary');
    var cart    = JSON.parse(localStorage.getItem('ippliance_cart')) || [];

    if (!summary) { return; }

    if (cart.length === 0) {
        summary.innerHTML = '<p>No items in cart.</p>';
        return;
    }

    var summaryHTML = '<h3>Order Summary</h3>';
    var subtotal    = 0;
    var i;

    for (i = 0; i < cart.length; i++) {
        /* 2d. Arithmetic Calculation */
        var itemTotal = cart[i].price * cart[i].quantity;
        subtotal += itemTotal;
        summaryHTML += '<p>' + cart[i].name + ' x' + cart[i].quantity + ' — J$' + itemTotal.toLocaleString() + '</p>';
    }

    var tax   = Math.round(subtotal * 0.15);
    var total = subtotal + tax;

    summaryHTML += '<hr style="margin: 15px 0;">';
    summaryHTML += '<p>Subtotal: J$' + subtotal.toLocaleString() + '</p>';
    summaryHTML += '<p>GCT (15%): J$' + tax.toLocaleString() + '</p>';
    summaryHTML += '<h3>Total: J$' + total.toLocaleString() + '</h3>';

    summary.innerHTML = summaryHTML;

    /* Populate read-only amount field in form */
    var amountField = document.getElementById('amount');
    if (amountField) {
        amountField.value = 'J$' + total.toLocaleString();
    }
}


/* 3b. User Experience - Removes one item from cart */
function removeFromCart(productId) {
    var cart    = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var newCart = [];
    var i;
    for (i = 0; i < cart.length; i++) {
        if (cart[i].id !== productId) { newCart.push(cart[i]); }
    }
    localStorage.setItem('ippliance_cart', JSON.stringify(newCart));
    displayCart();
    updateCartIcon();
}


/* 3b. User Experience - Updates cart count badge in nav */
function updateCartIcon() {
    var cart  = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var total = 0;
    var i;
    for (i = 0; i < cart.length; i++) { total += cart[i].quantity; }

    var navLinks = document.querySelectorAll('nav a');
    var j;
    for (j = 0; j < navLinks.length; j++) {
        if (navLinks[j].textContent.toLowerCase().indexOf('cart') !== -1) {
            navLinks[j].innerHTML = 'Cart (' + total + ')';
        }
    }
}


/* 3b. User Experience - Mobile hamburger nav toggle */
function setupMobileNav() {
    var mobileBtn = document.querySelector('.mobile-nav-button');
    var navList   = document.querySelector('nav');
    if (mobileBtn && navList) {
        mobileBtn.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    }
}


/* 2c. Form Validation - Validates all checkout fields individually */
function confirmCheckout() {
    var firstname = document.getElementById('firstname').value.trim();
    var lastname  = document.getElementById('lastname').value.trim();
    var email     = document.getElementById('email').value.trim();
    var phone     = document.getElementById('phone').value.trim();
    var address   = document.getElementById('address').value.trim();
    var parish    = document.getElementById('parish').value;
    var isValid   = true;

    /* 2d. Logic - Show individual error messages per field */
    if (firstname === '') {
        document.getElementById('user-fname-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-fname-error').style.display = 'none';
    }

    if (lastname === '') {
        document.getElementById('user-lname-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-lname-error').style.display = 'none';
    }

    /* 2c. Email format validation */
    if (email === '' || !email.includes('@')) {
        document.getElementById('user-email-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-email-error').style.display = 'none';
    }

    if (phone === '') {
        document.getElementById('user-phone-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-phone-error').style.display = 'none';
    }

    if (address === '') {
        document.getElementById('user-address-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-address-error').style.display = 'none';
    }

    if (parish === '') {
        document.getElementById('user-parish-error').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('user-parish-error').style.display = 'none';
    }

    /* 2d. Logic: Only confirm if all fields valid */
    if (isValid) {
        alert('Order confirmed! Thank you for shopping with I-ppliance, ' + firstname + '.');
        localStorage.removeItem('ippliance_cart');
        window.location.href = 'index.html';
    }
}

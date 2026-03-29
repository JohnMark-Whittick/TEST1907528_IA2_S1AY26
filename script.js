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

/* 2b. Event Handling: DOMContentLoaded */
document.addEventListener('DOMContentLoaded', function() {
    updateCartIcon();
    setupMobileNav();

    if (document.querySelector('#productgrid')) { displayProducts(products); }
    if (document.querySelector('#cart-container')) { displayCart(); }
    if (document.querySelector('#checkout-summary')) { displayCheckoutSummary(); }

    /* Login Logic with Errors */
    var loginBtn = document.getElementById('loginbtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var userIn = document.getElementById('login-username').value.trim();
            var passIn = document.getElementById('login-password').value.trim();
            var userErr = document.getElementById('username-error');
            var passErr = document.getElementById('password-error');
            
            if (userIn === '') { userErr.innerText = 'Username required'; userErr.style.display='block'; return; }
            if (passIn === '') { passErr.innerText = 'Password required'; passErr.style.display='block'; return; }

            var savedUser = JSON.parse(localStorage.getItem('ippliance_user'));
            if (savedUser && savedUser.username === userIn && savedUser.password === passIn) {
                window.location.href = 'index.html';
            } else {
                userErr.innerText = 'Invalid credentials'; userErr.style.display='block';
                passErr.innerText = 'Invalid credentials'; passErr.style.display='block';
            }
        });
    }

    /* Registration Logic with Errors */
    var regBtn = document.getElementById('registerbtn');
    if (regBtn) {
        regBtn.addEventListener('click', function(e) {
            e.preventDefault();
            var fn = document.getElementById('firstname').value.trim();
            var ln = document.getElementById('lastname').value.trim();
            var em = document.getElementById('email').value.trim();
            var db = document.getElementById('dob').value.trim();
            var un = document.getElementById('username').value.trim();
            var pw = document.getElementById('reg-password').value.trim();
            var cp = document.getElementById('reg-cpassword').value.trim();

            var valid = true;
            if (fn==='') { document.getElementById('user-fname-error').style.display='block'; valid=false; }
            if (ln==='') { document.getElementById('user-lname-error').style.display='block'; valid=false; }
            if (em==='' || !em.includes('@')) { document.getElementById('user-email-error').style.display='block'; valid=false; }
            if (db==='') { document.getElementById('user-dob-error').style.display='block'; valid=false; }
            if (un==='') { document.getElementById('username-error').style.display='block'; valid=false; }
            if (pw==='') { document.getElementById('user-password-error').style.display='block'; valid=false; }
            if (pw!==cp || cp==='') { document.getElementById('user-cpassword-error').style.display='block'; valid=false; }

            if (valid) {
                localStorage.setItem('ippliance_user', JSON.stringify({firstname: fn, username: un, password: pw}));
                alert('Success!'); window.location.href = 'login.html';
            }
        });
    }

    /* Checkout Buttons */
    var confBtn = document.getElementById('confirm-order-btn');
    if (confBtn) {
        confBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Order Placed!'); localStorage.removeItem('ippliance_cart'); window.location.href='index.html';
        });
    }
    if (document.getElementById('cancel-btn')) document.getElementById('cancel-btn').onclick = () => window.location.href='cart.html';
    if (document.getElementById('close-btn')) document.getElementById('close-btn').onclick = () => window.location.href='index.html';
    if (document.getElementById('clear-btn')) document.getElementById('clear-btn').onclick = () => document.getElementById('checkout-form').reset();
});

/* CORE MATH FUNCTIONS */
function displayCart() {
    var container = document.querySelector('#cart-container');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!container) return;
    
    if (cart.length === 0) { 
        container.innerHTML = '<div style="text-align: center; padding: 40px;"><h3>Your cart is empty.</h3><br><a href="index.html" class="btn">Browse Products</a></div>'; 
        return; 
    }

    let subtotal = 0, totalQty = 0;
    let html = '<h2 style="margin-bottom: 20px;">Shopping Cart</h2>';

    cart.forEach(item => {
        let itemSub = item.price * item.quantity;
        subtotal += itemSub; totalQty += item.quantity;
        
        html += `<div class="cart-item">
                    <img src="${item.image}" class="cart-img" style="width: 80px; border-radius: 8px;">
                    <div style="flex: 1; margin-left: 20px; text-align: left;">
                        <h4 style="margin-bottom: 5px;">${item.name}</h4>
                        <p>J$${item.price.toLocaleString()} x ${item.quantity}</p>
                    </div>
                    <div style="text-align: right; margin-right: 20px;">
                        <p><strong>J$${itemSub.toLocaleString()}</strong></p>
                    </div>
                    <button class="btn remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                 </div>`;
    });

    /* 2d. Advanced Logic: Discount & Tax */
    let discount = (totalQty >= 3) ? (subtotal * 0.10) : 0;
    let tax = (subtotal - discount) * 0.15;
    let grand = (subtotal - discount) + tax;

    html += `<div class="summary" style="background:#f9f9f9; padding:25px; margin-top:20px; border-radius:12px; text-align: right;">
                <p style="margin-bottom: 8px;">Sub-total: J$${subtotal.toLocaleString()}</p>
                <p style="color:var(--error-red); margin-bottom: 8px;">Discount (10% for 3+): -J$${discount.toLocaleString()}</p>
                <p style="margin-bottom: 15px;">GCT (15%): J$${tax.toLocaleString()}</p>
                <hr style="border:none; border-top:1px solid #ddd; margin-bottom: 15px;">
                <h3 style="margin-bottom: 20px; font-size: 1.5rem;">Grand Total: J$${grand.toLocaleString()}</h3>
                <button id="clear-cart-btn" class="btn" style="background: var(--error-red);" onclick="clearCart()">Clear Cart</button>
                <a href="checkout.html" class="btn checkout-link-btn">Proceed to Checkout</a>
             </div>`;
             
    container.innerHTML = html;
}

function displayCheckoutSummary() {
    var container = document.querySelector('#checkout-summary');
    var amtInput = document.getElementById('amount');
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    if (!container) return;

    let subtotal = 0, totalQty = 0;
    cart.forEach(item => { subtotal += (item.price * item.quantity); totalQty += item.quantity; });

    let discount = (totalQty >= 3) ? (subtotal * 0.10) : 0;
    let tax = (subtotal - discount) * 0.15;
    let grand = (subtotal - discount) + tax;

    container.innerHTML = `<h4>Summary</h4><p>Subtotal: J$${subtotal.toLocaleString()}</p><p>Tax: J$${tax.toLocaleString()}</p><h3>Grand Total: J$${grand.toLocaleString()}</h3>`;
    if (amtInput) amtInput.value = "J$" + grand.toLocaleString();
}

/* UI Helpers */
function addToCart(id) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var p = products.find(x => x.id === id);
    var exist = cart.find(x => x.id === id);
    if (exist) exist.quantity++; else cart.push({...p, quantity: 1});
    localStorage.setItem('ippliance_cart', JSON.stringify(cart));
    updateCartIcon(); alert('Added!');
}
function removeFromCart(id) {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    localStorage.setItem('ippliance_cart', JSON.stringify(cart.filter(x => x.id !== id)));
    displayCart(); updateCartIcon();
}
function updateCartIcon() {
    var cart = JSON.parse(localStorage.getItem('ippliance_cart')) || [];
    var count = cart.reduce((s, i) => s + i.quantity, 0);
    document.querySelectorAll('nav a').forEach(a => { if(a.innerText.includes('Cart')) a.innerText = count > 0 ? `Cart (${count})` : 'Cart'; });
}
function setupMobileNav() {
    var b = document.querySelector('.mobile-nav-button');
    var n = document.querySelector('nav');
    if (b && n) b.onclick = () => n.classList.toggle('active');
}
function displayProducts(list) {
    var g = document.querySelector('#productgrid');
    if (!g) return;
    g.innerHTML = list.map(i => `<div class="product-card"><img src="${i.image}"><h3>${i.name}</h3><p>J$${i.price.toLocaleString()}</p><button class="btn" onclick="addToCart(${i.id})">Add to Cart</button></div>`).join('');
}

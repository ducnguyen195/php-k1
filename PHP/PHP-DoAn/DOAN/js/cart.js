function renderCart() {
    let addProduct = localStorage.getItem('addProduct');
    let productCart = JSON.parse(addProduct);
    let html = '';
    for (let i = 0; i < productCart.length; i++) {
        html += `
            <div class="d-flex mt-3" style="width:67.5em">
                <div class="carl__product col-md-4">
                <img src="./image/${productCart[i].img}" width="20%" alt="Ảnh">
                <strong> ${productCart[i].name}</strong>
                </div>
                <div class="cart__price col-md-8 d-flex">
                    <div class="cart__price-item" style="font-size: 18px; margin-left: -1em;"> <strong> ${productCart[i].price.toLocaleString()} VND</strong> </div>
                    <div class="cart__price-item ml-2">
                        <button onclick="handleQuantityMinus(${productCart[i].id})" id="minus"> - </button>
                        <input onchange="handleQuantityInput(${productCart[i].id})" id="input-cart" style="width: 25px; padding-left:8px; " type="text" value="${productCart[i].quantity}">
                        <button onclick="handleQuantityPlus(${productCart[i].id})" id="plus"> + </button>
                    </div>
                    <div   class="cart__price-item" style="font-size: 18px; margin-right: -1em; color: red;"> <strong id="is-price-${productCart[i].id}">  </strong> </div>
                    <div class="cart__price-item" style="margin-right: -2.5em; ">
                        <button onclick="handleRemove(${productCart[i].id})" style="background-color: rgba(237, 28, 36, 0.15);"> 
                            <ion-icon style="color: red;" name="trash-outline"></ion-icon> 
                        </button>
                    </div>
                </div>
            </div>
        `
    }
    $('#render-cart').html(html)
    var itemLocal = localStorage.getItem('addProduct')
    var items = JSON.parse(itemLocal)
    priceTotal(items)
    updateQuantity (items)
}
renderCart();
// Function total price
function priceTotal(prices) {
    let totalMoney = 0 ;
    let priceProducts = 0;
    var addProduct = localStorage.getItem('addProduct');
    var prices = JSON.parse(addProduct);
    for (let i = 0; i < prices.length; i++) {
        const e = prices[i];
        priceProducts = e.quantity * e.price;
        $('#is-price-'+ prices[i].id).text(priceProducts.toLocaleString() + ' ' + 'VND')
        totalMoney +=  priceProducts;
    }
    $('#total-money').text(totalMoney.toLocaleString() + ' ' + 'VND')
};
//Event remove product
function handleRemove (id) {
    var product = localStorage.getItem('addProduct')
    var addProducts = JSON.parse(product)
    for (let i = 0; i < addProducts.length; i++) { 
        if (addProducts[i].id == id) {
            addProducts.splice(i, 1);
        }
        localStorage.setItem('addProduct', JSON.stringify(addProducts));    
    }
    renderCart(addProducts);
};
// Function print quantity product
function updateQuantity (quantityProduct){
    let quantityUp = 0 ;
    var getProduct = localStorage.getItem('addProduct');
    var quantityProduct = JSON.parse(getProduct);
    for (let i = 0; i < quantityProduct.length; i++) {
        quantityUp += quantityProduct[i].quantity
    }
    $('#quantity-cart').text(quantityUp);
};
// Event update quantity product
function handleQuantityMinus(id){
    var addProduct = localStorage.getItem('addProduct');
    var product = JSON.parse(addProduct);
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].quantity--
        }
    }
    localStorage.setItem('addProduct',JSON.stringify(product));
    renderCart(product)
};
function handleQuantityPlus(id){
    var addProduct = localStorage.getItem('addProduct');
    var product = JSON.parse(addProduct);
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].quantity++
        }
    }
    localStorage.setItem('addProduct',JSON.stringify(product));
    renderCart(product)
};
function handleQuantityInput(id) {
    let upQuantity = $('#input-cart').val();
    var addProduct = localStorage.getItem('addProduct');
    var product = JSON.parse(addProduct);
    for (let i = 0; i < product.length; i++) {
        if (product[i].id == id) {
            product[i].quantity = upQuantity;
        }
    }
    localStorage.setItem('addProduct',JSON.stringify(product));
    renderCart(product)
};  

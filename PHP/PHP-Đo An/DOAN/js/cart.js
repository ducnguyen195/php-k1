function renderCart() {
    let addProduct = localStorage.getItem('addProduct');
    let productCart = JSON.parse(addProduct);
    let html = '';
    for (let i = 0; i < productCart.length; i++) {
        html += `
            <div class="d-flex mt-3">
                <div class="carl__product col-md-4">
                <img src="./image/${productCart[i].img}" width="20%" alt="Ảnh">
                <strong> ${productCart[i].name}</strong>
                </div>
                <div class="cart__price col-md-8 d-flex">
                    <div class="cart__price-item" style="font-size: 18px; margin-left: -1em;"> <strong> ${productCart[i].price.toLocaleString()} VND</strong> </div>
                    <div class="cart__price-item ml-2">
                        <button id="minus"> - </button>
                        <input style="width: 25px; padding-left:8px; " type="text" value="${productCart[i].quantity}">
                        <button id="plus"> + </button>
                    </div>
                    <div   class="cart__price-item" style="font-size: 18px; margin-right: -1em; color: red;"> <strong id="is-price">  </strong> </div>
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
}
renderCart();
// Function total price
function priceTotal(price) {
    let totalMoney = '';
    let priceProducts = '';
    var addProduct = localStorage.getItem('addProduct');
    var price = JSON.parse(addProduct);
    for (let i = 0; i < price.length; i++) {
        const e = price[i];
        priceProducts = e.quantity * e.price;
        totalMoney +=  e.quantity * e.price;
    }
    $('#is-price').text(priceProducts.toLocaleString() + 'VND')
    $('#total-money').text(totalMoney.toLocaleString() + 'VND')
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
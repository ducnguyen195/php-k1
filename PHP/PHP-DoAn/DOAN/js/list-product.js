//Render products//
function renderList (sortPrice = listProduct){
    let html = '';
    for (let i = 0; i < sortPrice.length; i++) {
        html += `
        <div class="list__products col-lg-4 col-md-4 col-sm-6 col-6 mt-3" >
            <div class="product-1">
                <a href="./product-detail.html?category=${listProduct[i].category}&id=${listProduct[i].id}"> <img src="./image/${sortPrice[i].img}" alt=""></a>
            </div>
            <div class="product-imfor">
                <p> ${sortPrice[i].price.toLocaleString()} VND </p>
                <div class="ion-star">
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                </div>
                <a class="padding-bottom: 10px;" href="./product-detail.html"> ${sortPrice[i].name} </a>
            </div>
            <div class="hover__product">
                <div class="hove__heart">
                    <button title=" Thêm vào danh sách yêu thích"> <ion-icon name="heart-outline"> </ion-icon> </button>
                </div>
                <div class=" hover__cart">
                    <button onclick="handleAdd(${sortPrice[i].id})"  title="Thêm vào giỏ hàng" > <ion-icon name="cart-outline"> </ion-icon> </button>
                </div>
            </div>
        </div>
        `
    }
$('#list-product').html(html);
let itemsLocal= localStorage.getItem('addProduct');
let item = JSON.parse(itemsLocal);
handleMiniCart(item);
};
renderList(listProduct);
// Event select
$('#searchSelect').on('change',function(){
    let sortMinMax  = $('#searchSelect').val();
    let sortPrice = listProduct;
    if (sortMinMax ==='') {
        
    }
    if (sortMinMax ==='min') {
        sortPrice = listProduct.sort( (a,b) => a.price - b.price); 
    }
    if (sortMinMax ==='max') {
        sortPrice = listProduct.sort( (a,b) => b.price - a.price);
    }
    renderList(sortPrice)
});

// Event search
$('#btn-search').click(function(){
    let searchProduct = listProduct;
    let input = $('#box-input').val();
    if(input.length === 0){
        alert ('Chưa nhập nội dung');
    } else if (input.length !== 0){
        searchProduct = listProduct.filter( e => e.name.toLowerCase().includes(input))
    } else{
        alert('Không có sản phẩm ');
    }
    renderList(searchProduct);
});
//Event add product in cart
function handleAdd (id) {
    const addProduct = JSON.parse(localStorage.getItem('addProduct')) || [];
    let products = listProduct.find(e => e.id === id);
    if(addProduct.length === 0) {
        addProduct.push(products)
    }else {
        let isCompare = false;
            let index = null;
            for (let i = 0; i < addProduct.length; i++) {
                if (addProduct[i].id == products.id) {
                    isCompare = true;
                    index = i;
                };
            };
            if (isCompare == true) {
                addProduct[index].quantity += 1;
            } else {
                addProduct.push(products)
            }
        }
        localStorage.setItem("addProduct", JSON.stringify(addProduct));
        handleMiniCart(addProduct);
}
// Render product in cart
function handleMiniCart(miniCartProduct) {
    let html = '';
    if (miniCartProduct.length == 0) {
        html +=`
            <h5 style="margin:3em; "><ion-icon name="sad-outline" style="margin-left:4em"></ion-icon> Chưa có sản phẩm nào </h5>
        `
    }
    for (let i = 0; i < miniCartProduct.length; i++) {
        html +=`
        <li class=" box__item" >
            <div class="item-thumb">
                <a href="./html/list-products.html" title="" class="">
                    <img alt="" src="./image/${miniCartProduct[i].img}" width="50%">
                </a>
            </div>
            <div class="item-title">
                <a href="./list-products.html"  > ${miniCartProduct[i].name}</a>
                <div class="item-quantity">
                    <span class="quantity__mini-cart" > ${miniCartProduct[i].quantity} </span>x
                    <span class="price__mini-cart" >  ${miniCartProduct[i].price.toLocaleString()} VND</span>
                </div>
            </div>
            <div class="item-action">
                <button onclick="handleRemove(${miniCartProduct[i].id})" id="render__mini-cart" class="btn-remove" href="">
                    <ion-icon style="color: red; height: 1em;" name="trash-outline"></ion-icon>
                </button>
            </div>
        </li>  
    `
    }
$('#render__mini-cart').html(html);
var itemsLocal= localStorage.getItem('addProduct');
var item = JSON.parse(itemsLocal);
updateTotalPrice(item)
updateQuantity (item)
}
//Total price
function updateTotalPrice(addProduct){
    let totalPrice = 0;
    for (let i = 0; i < addProduct.length; i++) {
        const e = addProduct[i];
        totalPrice += e.quantity * e.price;
    }
    $('#price').text(totalPrice.toLocaleString() + ' ' + 'VND');
};
//Event remove product
function handleRemove (id) {
    var product = localStorage.getItem('addProduct')
    var addProduct = JSON.parse(product)
    for (let i = 0; i < addProduct.length; i++) { 
        if (addProduct[i].id == id) {
            addProduct.splice(i, 1);
        }
        localStorage.setItem('addProduct', JSON.stringify(addProduct));    
    }
    handleMiniCart(addProduct);
};
// Function print quantity
function updateQuantity (quantityProduct){
    let quantityUp = 0 ;
    var getProduct = localStorage.getItem('addProduct');
    var quantityProduct = JSON.parse(getProduct);
    for (let i = 0; i < quantityProduct.length; i++) {
        quantityUp += quantityProduct[i].quantity
    }
    $('#quantity-cart').text(quantityUp);
}
//Function search price
function handleSearch (){
    let productSearch = listProduct;
    let minPrice = $('#min').val();
    let maxPrice = $('#max').val();
    if(minPrice){
        productSearch = listProduct.filter(item => item.price >=minPrice)
    };
    if(maxPrice){
        productSearch = listProduct.filter(item => item.price <=maxPrice)
    };
    renderList(productSearch);
}








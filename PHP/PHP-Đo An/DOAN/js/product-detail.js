//Event render product detail
function handleDetail (a) {
    var url = window.location.href;
        url = new URL(url);
    var a = url.searchParams.get('id');
    let html = '';
    for (let i = 0; i < listProduct.length ; i++) {
        if (listProduct[i].id == a) {
            html +=`
            <div  class="detail__img col-xl-6 d-flex">
                <div class="detail__img-sm">
                    <img src="./image/${listProduct[i].img}" width="100px" height="100px" alt=" Ảnh">
                </div>
                <div>
                    <div class="detail__img-lg">
                        <img src="./image/${listProduct[i].img}" width="400px" height=" 400px" alt=" Ảnh">
                    </div>
                    <div class="imfor__detail">
                        <p style="font-size: 20px; font-weight: 500;"> Thông tin sản phẩm : </p>
                        <ul class="list__imfor">
                            <li> Xuất xứ : Việt Nam </li>
                            <li> Đóng gói : Hộp 500g </li>
                            <li> HSD : 12  tháng</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content__detail col-xl-6 ">
                <div >
                    <h3> ${listProduct[i].name}</h3>
                    <div class="ion-star">
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <ion-icon name="star-outline"></ion-icon>
                        <p> (0 Đánh giá)</p>
                    </div>
                </div>
                <div class="content__detail-item" style="display: flex;">
                    <div class="detail__item-1">
                        <p> Được bán bởi:</p>
                        <strong> Calo Nuts</strong>
                    </div>
                    <button> Chat với Người bán</button>
                </div>
                <div class="detail__price">
                    <span> <p>Giá bán :</p> <strong> ${listProduct[i].price.toLocaleString() + 'VND'} </strong> <p> /500g</p></span>
                </div>
                <div  class="detail__quantity" style="display: flex;">
                    <p style="margin-top: 10px;"> Số lượng : </p>
                    <button  onclick="handleQuantityMinus(${listProduct[i].id})" class="minus"> - </button>
                    <input onchange="handleQUantityInput(${listProduct[i].id})" id="input-cart" type="text" value="${listProduct[i].quantity}">
                    <button onclick="handleQuantityPlus(${listProduct[i].id})" class="plus"> + </button>
                    <p style="margin-left: 10px; margin-top:10px"> (10 còn hàng)</p>
                </div>
                <div class="price__total">
                    <p >Tổng tiền :</p> <strong >  </strong>
                </div>
                <div class="detail__add">
                    <button onclick="handleAddProduct(${listProduct[i].id})" class="add__bag"><ion-icon name="bag-handle-outline"></ion-icon> Thêm vào giỏ hàng </button>
                    <button onclick="handleBuy(${listProduct[i].id})" class="add__cart"> <ion-icon name="cart-outline"></ion-icon> Mua ngay</button>
                </div>
                <div class="add__like">
                    <a style="text-decoration: none;" href=""> Thêm vào danh sách yêu thích </a>
                </div>      
            `
        }
        $('#detail-product').html(html);
    }
    let local = localStorage.getItem('addProduct');
    let items = JSON.parse(local);
    handleMiniCart(items)
};
handleDetail();

function handleAddProduct (id) {
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
let itemsLocal= localStorage.getItem('addProduct');
let items = JSON.parse(itemsLocal);
updateTotalPrice(items)
updateQuantity (items)
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
function updateQuantity (quantityProduct){
    let quantityUp = 0;
    var getProduct = localStorage.getItem('addProduct');
    var quantityProduct = JSON.parse(getProduct);
    for (let i = 0; i < quantityProduct.length; i++) {
        quantityUp += quantityProduct[i].quantity
    }
    $('#quantity-cart-item').text(quantityUp);
};
// Event update quantity product
function handleQuantityMinus(id){
    var addProduct = localStorage.getItem('addProduct');
    var product = JSON.parse(addProduct);
    let upQuantity = $('#input-cart').val();
        upQuantity = 1
    var product = JSON.parse(addProduct);
    for (let i = 0; i < product.length; i++) {
        if (product[i].id !== id && upQuantity > 1 ) {
            upQuantity --
        }
    }
    localStorage.setItem('addProduct',JSON.stringify(product));
    handleDetail(product)
};
function handleQuantityPlus(id){
    var addProduct = localStorage.getItem('addProduct');
    var product = JSON.parse(addProduct);
    let upQuantity = $('#input-cart').val();
    for (let i = 0; i < product.length; i++) {
        if (product[i].id !== id) {
            upQuantity ++
        }
    }
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
    handleDetail(product)
};  


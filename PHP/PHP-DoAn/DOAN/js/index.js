let product = [
    {
        id:1,
        name: 'Quả hồ đào Calo Nuts',
        price: 160000,
        img:'product1.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:2,
        name: 'Hạt hạnh nhân Calo Nuts',
        price: 150000,
        img:'product2.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:3,
        name: 'Hạt dẻ cười Calo Nuts',
        price: 150000,
        img:'product3.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:4,
        name: 'Hạt mắc ca Úc Calo Nuts',
        price: 200000,
        img:'product4.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:5,
        name: 'Ngũ cốc Granola',
        price: 160000,
        img:'product5.jpg',
        category: 'Thựcphẩm',
        quantity :1,
    },
    {
        id:6,
        name: 'Hạt điều Bình Phước Calo Nuts',
        price: 170000,
        img:'product6.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:7,
        name: 'Hạt chia Calo Nuts',
        price: 150000,
        img:'product7.jpg',
        category: 'Hạt',
        quantity :1,
    },
    {
        id:8,
        name: 'Hạt óc chó Calo Nuts',
        price: 160000,
        img:'product8.jpg',
        category: 'Hạt',
        quantity :1,
    },
];
function renderUI(searchProduct = product ){
    let html ='';
    for (let i = 0; i < searchProduct.length; i++) {
        html += `
        <div  class="list__products col-lg-3 col-md-3 col-sm-6 col-6 mt-3" style="padding: 5px 5px; border-radius: 5px;">
            <div class="product-1">
                <a  href="./html/product-detail.html?category=${searchProduct[i].category}&id=${searchProduct[i].id}"> <img src="./html/image/${searchProduct[i].img}" alt=""></a>
            </div>
            <div class="product-imfor">
                <p> ${searchProduct[i].price.toLocaleString()} VND</p>
                <div class="ion-star">
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                </div>
                <a href="./html/product-detail.html"> ${searchProduct[i].name} </a>
            </div>
            <div class="hover__product">
                <div class="hove__heart">
                    <button title=" Thêm vào danh sách yêu thích"> <ion-icon name="heart-outline"> </ion-icon> </button>
                </div>
                <div class=" hover__cart">
                    <button onclick="handleAdd(${searchProduct[i].id})" title="Thêm vào giỏ hàng"> <ion-icon name="cart-outline"> </ion-icon> </button>
                </div>
            </div>
        </div>
        `        
    }
$('#products').html(html);
var itemsLocal= localStorage.getItem('addProduct');
var item = JSON.parse(itemsLocal);
handleMiniCart(item)
};
renderUI(product);

$('#btn-search').click(function () {
    let searchProduct = product;
    let input = $('#box-input').val();
    if(input.trim().length === 0){
        alert ('Chưa nhập nội dung');
    } else if (input.length !== 0){
        searchProduct = listProduct.filter( e => e.name.toLocaleLowerCase().includes(input));

    }else if (input.length !== 0){
        searchProduct = listProduct.filter( e => e.category.toLocaleLowerCase().includes(input));
    } else {
        alert('Không có sản phẩm ');
    }
    renderUI(searchProduct);
});
//Event add product in cart
function handleAdd (id) {
    const addProduct = JSON.parse(localStorage.getItem('addProduct')) || [];
    let products = product.find(e => e.id === id);
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
                addProduct.push(products);
            }
        }
        localStorage.setItem("addProduct", JSON.stringify(addProduct));
        var itemsLocal= localStorage.getItem('addProduct');
        var item = JSON.parse(itemsLocal);
        handleMiniCart(item);
}
// Render product in cart
function handleMiniCart(miniCartProduct) {
    let html = '';
    if (miniCartProduct.length == 0) {
        html +=`
            <h5 style="margin:3em; "><ion-icon name="sad-outline" style="margin-left:4em"></ion-icon> Chưa có sản phẩm nào </h5>
        `
    };
    for (let i = 0; i < miniCartProduct.length; i++) {
        html +=`
            <li class=" box__item" >
                <div class="item-thumb">
                    <a href="./html/list-products.html" title="" class="">
                        <img alt="" src="html/image/${miniCartProduct[i].img}" width="50%">
                    </a>
                </div>
                <div class="item-title">
                    <a href="./html/list-products.html"  > ${miniCartProduct[i].name}</a>
                    <div class="item-quantity">
                        <span class="quantity__mini-cart" > ${miniCartProduct[i].quantity}</span>x
                        <span class="price__mini-cart" > ${miniCartProduct[i].price.toLocaleString()} VND</span>
                    </div>
                </div>
                <div class="item-action">
                    <button onclick="handleRemove(${miniCartProduct[i].id})" class="btn-remove" style="outline: none; border" href="">
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
    const product = localStorage.getItem('addProduct')
    const addProduct = JSON.parse(product)
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
    $('#quantity-cart').text(quantityUp);
}





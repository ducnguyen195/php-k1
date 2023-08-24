const products = [
    {
        id: 1,
        name: 'Áo Phông Masi Basic  ',
        price: 300000,
        img: 'image1.png',
        // category:'Áo',
    },
    {
        id: 2,
        name: 'Áo Cộc Tay Masi Basic ',
        price: 300000,
        img: 'image2.png',
        // category:'Áo',
    },
    {
        id: 3,
        name: 'Áo Khoắc Masi Basic ',
        price: 250000,
        img: 'image3.png',
        // category:'Áo',
    },
    {
        id: 4,
        name: 'Quần Dài Masi Basic ',
        price: 100000,
        img: 'image4.png',
        // category:'Quần',
    },
    {
        id: 5,
        name: 'Áo Ba Lỗ Masi Basic ',
        price: 500000,
        img: 'image1.png',
        // category:'Áo',
    },
    {
        id: 6,
        name: 'Quần Đỏ Masi Basic ',
        price: 100000,
        img: 'image2.png',
        // category:'Quần',
    },
    {
        id: 7,
        name: 'Áo Đen Masi Basic ',
        price: 200000,
        img: 'image3.png',
        // category:'Áo',
    },
    {
        id: 8,
        name: 'Quần Vàng Masi Basic ',
        price: 400000,
        img: 'image4.png',
        // category:'Quần',
    },
    ];
    
function renderUI(productSearch =products) {  
let html ='';
for (let i = 0; i < productSearch.length; i++) {
    html += `
        <div>
        <div class="img">
            <img src="../shop/asset/img/${productSearch[i].img}" alt="">
        </div>
        <div>
            <button class="block" style="background-color: var(--black-color);"> </button>
            <button class="block"></button>
            <button class="block" style="background-color: var(--blue-color);"> </button> 
        </div>
        <div>
                <span>
                <a  id="information-1" style="color: rgb(127, 157, 255) !important;"
                href="ttsp.html?id=1">MSP : ${products[i].id} <br> ${productSearch[i].name} </a></span><br>
                <span ><strong> ${productSearch[i].price.toLocaleString()} Đ </strong></span>
        </div>
        <button  id = "add-product" onclick ="handleAdd(${products[i].id})"onclick="renderAddProduct(${products[i].id})" style="width: auto;  margin-bottom: 10px" class="btn-add"> THÊM GIỎ HÀNG </button>
        </div>
    ` 
}
$('#products').html(html);
let listProducts =JSON.stringify(products)
localStorage.setItem('products', listProducts);
};
renderUI(products);
$('#btn-search').click( function(){
    let productName = $('#search-category').val();
    let productSearch = products;
    if(productName){
        productSearch = productSearch.filter(e => e.name.includes(productName));
    }
    renderUI(productSearch); 
});
let randomArr = Math.floor(Math.random() *10);
console.log(randomArr);
function handleAdd(id) {
    let product = products.find(e => e.id ===id);
    let data = JSON.stringify(product);
    localStorage.setItem('Add',data);
};
handleAdd();





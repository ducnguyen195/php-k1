let listProduct = [
    {
        id:1,
        name: 'Quả hồ đào Calo Nuts',
        price: '160.000',
        img:'product1.jpg',
        category: ' Hạt',
    },
    {
        id:2,
        name: 'Hạt hạnh nhân Calo Nuts',
        price: '150.000',
        img:'product2.jpg',
        category: ' Hạt',
    },
    {
        id:3,
        name: 'Hạt dẻ cười Calo Nuts',
        price: '150.000',
        img:'product3.jpg',
        category: ' Hạt',
    },
    {
        id:4,
        name: 'Hạt mắc ca Úc Calo Nuts',
        price: '200.000',
        img:'product4.jpg',
        category: ' Hạt',
    },
    {
        id:5,
        name: 'Hạt dẻ cười Calo Nuts',
        price: '160.000',
        img:'product5.jpg',
        category: ' Hạt',
    },
    {
        id:6,
        name: 'Hạt điều Bình Phước Calo Nuts',
        price: '170.000',
        img:'product6.jpg',
        category: ' Hạt',
    },
    {
        id:7,
        name: 'Hạt chia Calo Nuts',
        price: '150.000',
        img:'product7.jpg',
        category: ' Hạt',
    },
    {
        id:8,
        name: 'Hạt óc chó Calo Nuts',
        price: '160.000',
        img:'product8.jpg',
        category: ' Hạt',
    },
    {
        id:9,
        name: 'Thanh Long Tím',
        price: '20.000',
        img:'thanhlong.jpg',
        category: 'Trái Cây',
    },
    {
        id:10,
        name: 'Củ cải trắng',
        price: '10.000',
        img:'cucai.jpg',
        category: 'Rau củ',
    },
    {
        id:11,
        name: 'Carot baby Đà Lạt',
        price: '15.000',
        img:'carot.jpg',
        category: 'Trái Cây',
    },
    {
        id:12,
        name: 'Bún ngô',
        price: '50.000',
        img:'product9.png',
        category: 'Thực phẩm',
    },
    {
        id:13,
        name: 'Cải bắp tím ',
        price: '10.000',
        img:'rau1.jpg',
        category: 'Rau củ',
    },
    {
        id:14,
        name: 'Rau mùi tàu ',
        price: '5.000',
        img:'rau2.png',
        category: 'Rau củ',
    },
    {
        id:15,
        name: 'Rau mồng tơi ',
        price: '8.000',
        img:'rau3.png',
        category: 'Rau củ',
    },
    {
        id:16,
        name: 'Xoài cát ',
        price: '20.000',
        img:'xoai1.jpg',
        category: 'Trái cây',
    },
    {
        id:17,
        name: 'Xoài Úc ',
        price: '30.000',
        img:'xoai2.jpg',
        category: 'Trái cây',
    },
    {
        id:18,
        name: 'Xoài Thái',
        price: '50.000',
        img:'xoai3.jpg',
        category: 'Trái cây',
    },
    {
        id:19,
        name: 'Ngũ vị hương',
        price: '15.000',
        img:'giavi.png',
        category: 'Gia vị',
    },
    {
        id:20,
        name: 'Muối Tây Ninh',
        price: '20.000',
        img:'giavi1.webp',
        category: 'Gia vị',
    },
];
function renderList (sortPrice = listProduct){
    let html = '';
    for (let i = 0; i < sortPrice.length; i++) {
        html += `
        <div class="list__products col-md-4 mt-2" >
            <div class="product-1">
                <a href="./product-detail.html"> <img src="./image/${sortPrice[i].img}" alt=""></a>
            </div>
            <div class="product-imfor">
                <p> ${sortPrice[i].price} VND </p>
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
                    <button onclick="handleAdd(${listProduct[i].id})"  title="Thêm vào giỏ hàng" > <ion-icon name="cart-outline"> </ion-icon> </button>
                </div>
            </div>
        </div>
        `
    }
$('#list-product').html(html);
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







let product = [
    {
        id:1,
        name: 'Quả hồ đào Calo Nuts',
        price: '160.000',
        img:'product1.jpg',
        category:'Trái cây'
    },
    {
        id:2,
        name: 'Hạt hạnh nhân Calo Nuts',
        price: '150.000',
        img:'product2.jpg',
        category:'Trái cây'
    },
    {
        id:3,
        name: 'Hạt dẻ cười Calo Nuts',
        price: '150.000',
        img:'product3.jpg',
        category:'Trái cây'
    },
    {
        id:4,
        name: 'Hạt mắc ca Úc Calo Nuts',
        price: '200.000',
        img:'product4.jpg',
        category:'Trái cây'
    },
    {
        id:5,
        name: 'Ngũ cốc Granola',
        price: '160.000',
        img:'product5.jpg',
        category:'Trái cây'
    },
    {
        id:6,
        name: 'Hạt điều Bình Phước Calo Nuts',
        price: '170.000',
        img:'product6.jpg',
        category:'Trái cây'
    },
    {
        id:7,
        name: 'Hạt chia Calo Nuts',
        price: '150.000',
        img:'product7.jpg',
        category:'Trái cây'
    },
    {
        id:8,
        name: 'Hạt óc chó Calo Nuts',
        price: '160.000',
        img:'product8.jpg',
        category:'Trái cây'
    },
];
function renderUI(searchProduct ){
    let html ='';
    for (let i = 0; i < searchProduct.length; i++) {
        html += `
        <div  class="list__products col-md-3 col-sm-6 mt-3" style="padding: 5px 5px; border-radius: 5px;">
            <div class="product-1">
                <a href="./html/product-detail.html"> <img src="./html/image/${searchProduct[i].img}" alt=""></a>
            </div>
            <div class="product-imfor">
                <p> ${searchProduct[i].price} VND</p>
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
};
renderUI(product);
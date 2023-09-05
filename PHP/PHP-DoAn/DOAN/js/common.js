let listProduct = [ 
    {
        id:1,
        name: 'Quả hồ đào Calo Nuts',
        price: 160000,
        img:'product1.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:2,
        name: 'Hạt hạnh nhân Calo Nuts',
        price: 150000,
        img:'product2.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:3,
        name: 'Hạt dẻ cười Calo Nuts',
        price: 150000,
        img:'product3.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:4,
        name: 'Hạt mắc ca Úc Calo Nuts',
        price: 200000,
        img:'product4.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:5,
        name: 'Ngũ cốc Granola',
        price: 160000,
        img:'product5.jpg',
        quantity:1,
        category: 'Thựcphẩm',
    },
    {
        id:6,
        name: 'Hạt điều Bình Phước Calo Nuts',
        price: 170000,
        img:'product6.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:7,
        name: 'Hạt chia Calo Nuts',
        price: 150000,
        img:'product7.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:8,
        name: 'Hạt óc chó Calo Nuts',
        price: 160000,
        img:'product8.jpg',
        quantity:1,
        category: 'Hạt',
    },
    {
        id:9,
        name: 'Thanh Long Tím',
        price: 20000,
        img:'thanhlong.jpg',
        quantity:1,
        category: 'Tráicây',
    },
    {
        id:10,
        name: 'Củ cải trắng',
        price: 10000,
        img:'cucai.jpg',
        quantity:1,
        category: 'Raucủ',
    },
    {
        id:11,
        name: 'Carot baby Đà Lạt',
        price: 15000,
        img:'carot.jpg',
        quantity:1,
        category: 'Raucủ',
    },
    {
        id:12,
        name: 'Bún ngô',
        price: 50000,
        img:'product9.png',
        quantity:1,
        category: 'Thựcphẩm',
    },
    {
        id:13,
        name: 'Cải bắp tím ',
        price: 10000,
        img:'rau1.jpg',
        quantity:1,
        category: 'Raucủ',
    },
    {
        id:14,
        name: 'Rau mùi tàu ',
        price: 5000,
        img:'rau2.png',
        quantity:1,
        category: 'Raucủ',
    },
    {
        id:15,
        name: 'Rau mồng tơi ',
        price: 8000,
        img:'rau3.png',
        quantity:1,
        category: 'Raucủ',
    },
    {
        id:16,
        name: 'Xoài cát ',
        price: 20000,
        img:'xoai1.jpg',
        quantity:1,
        category: 'Tráicây',
    },
    {
        id:17,
        name: 'Xoài Úc ',
        price: 30000,
        img:'xoai2.jpg',
        quantity:1,
        category: 'Tráicây',
    },
    {
        id:18,
        name: 'Xoài Thái',
        price: 50000,
        img:'xoai3.jpg',
        quantity:1,
        category: 'Tráicây',
    },
    {
        id:19,
        name: 'Ngũ vị hương',
        price: 15000,
        img:'giavi.png',
        quantity:1,
        category: 'Giavị',
    },
    {
        id:20,
        name: 'Muối Tây Ninh',
        price: 20000,
        img:'giavi1.webp',
        quantity:1,
        category: 'Giavị',
    },
];
let allUser = localStorage.getItem('allUser')
if(allUser.length !==0){
    $('.title-login').html(`<div id="logout" class="title__item title-login "><a href="./index.html"> ĐĂNG XUẤT </a></div>`)
    $('.title-register').css('display', 'none')
}

$('#logout').click(function(){
    localStorage.removeItem('allUser')
    $('.title-register').css('display', 'block')
});

function navbarClick () {
    $('#navbarSupportedContent').css('display','block')
};















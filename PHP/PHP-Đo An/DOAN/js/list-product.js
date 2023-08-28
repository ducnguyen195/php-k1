
function renderList (sortPrice = listProduct){
    let html = '';
    for (let i = 0; i < sortPrice.length; i++) {
        html += `
        <div class="list__products col-lg-4 col-md-4 col-sm-6 col-6 mt-3" >
            <div class="product-1">
                <a href="./product-detail.html"> <img src="./image/${sortPrice[i].img}" alt=""></a>
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

$('#btn-search').click(function(){
    let searchProduct = listProduct;
    let input = $('#box-input').val();
    console.log(input);
    if(input.length === 0){
        alert ('Chưa nhập nội dung');
    } else if (input.length !== 0){
        searchProduct = listProduct.filter( e => e.name.toLowerCase().includes(input))
        console.log(searchProduct);
        
    }else if (searchProduct ===false){
        alert('Không có sản phẩm ');
        input = "";
    }
    renderList(searchProduct);
}); 







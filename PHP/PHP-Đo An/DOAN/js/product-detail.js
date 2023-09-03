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
                    <input onchange="handleQUantityInput(${listProduct[i].id})" id="input-cart" type="text" value="1">
                    <button onclick="handleQuantityPlus(${listProduct[i].id})" class="plus"> + </button>
                    <p style="margin-left: 10px; margin-top:10px"> (10 còn hàng)</p>
                </div>
                <div class="price__total">
                    <p >Tổng tiền :</p> <strong >  </strong>
                </div>
                <div class="detail__add">
                    <button class="add__bag"><ion-icon name="bag-handle-outline"></ion-icon> Thêm vào giỏ hàng </button>
                    <button class="add__cart"> <ion-icon name="cart-outline"></ion-icon> Mua ngay</button>
                </div>
                <div class="add__like">
                    <a style="text-decoration: none;" href=""> Thêm vào danh sách yêu thích </a>
                </div>      
            `
        }
        $('#detail-product').html(html);
    }
};
handleDetail();


//Event render product detail
function handleDetail (id) {
    console.log(id);
    let html = '';
    for (let i = 0; i < product.length ; i++) {
        if (product[i].id == id) {
            html +=`
                <div class="detail__img-sm">
                    <img src="./image/${product[i].img}" width="100px" height="100px" alt=" Ảnh">
                </div>
                <div>
                    <div class="detail__img-lg">
                        <img src="./image/${product[i].img}" width="400px" height=" 400px" alt=" Ảnh">
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
                    <h3> ${product[i].name}</h3>
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
                    <span> <p>Giá bán :</p> <strong> ${product[i].price.toLocaleString()} VND</strong> <p> /500g</p></span>
                </div>
            `
        }
        $('#detail-product').html(html);
    }
};
handleDetail();
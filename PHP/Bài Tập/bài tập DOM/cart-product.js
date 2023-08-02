let getData = () => {
    let value = localStorage.getItem("Add");
    if(value){
        return JSON.parse(value);
    }
    return [];
}

const listAddCart = getData();
    
    function renderAddProduct(listAddCart) { 
        let html = '';
        for (let i = 0; i < listAddCart.length; i++) {   
        console.log(listAddCart);  
    html +=`
    <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="./shop/asset/img/${data[i].img}" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${data[i].name}</a></div>
                            <div class="price">${data.price[i].toLocaleString()} Đ</div>
                        </div>
                    </div>

                    <div class="col right">
                        <div class="quantity">
                            <input type="number" class="quantity" step="1" value="1" />
                        </div>

                        <div class="remove">
                            <span class="close"><i class="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </li>

    `
    }
    $('.products-add').html(html);
}
renderAddProduct(listAddCart);





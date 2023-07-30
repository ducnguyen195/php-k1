function renderAddProduct(){
    let render ='';
    let ProductUser = localStorage.getItem('Add')
    console.log(ProductUser);
        let data =JSON.parse(ProductUser);
        console.log(data); 
    for (let i = 0; i < data.length; i++) {   
        console.log(data); 
    render +=`
    <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="../shop/asset/img/${data.img}" alt="" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${data.name}</a></div>
                            <div class="price">${data.price.toLocaleString()} Đ</div>
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
    $('.products-add').html(render);
    console.log();

}
renderAddProduct();




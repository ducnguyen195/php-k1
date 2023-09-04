function renderDetailPayment() {
    let itemLocal = localStorage.getItem('addProduct');
    let productLocal = JSON.parse(itemLocal);
    
    let html = '';
    for (let i = 0; i < productLocal.length; i++) {
        console.log(productLocal);
        html +=`
        <div style="display: flex; justify-content: space-between; ">
            <div>
                <div class="item__product mt-2" >
                    <p> ${productLocal[i].name} </p>
                </div>
                <div style="display: flex">
                    <p> ${productLocal[i].price.toLocaleString() + ' ' + 'VND'}  </p> 
                    <p id="quantity-payment" > ${'x' + ' ' + productLocal[i].quantity}</p>
                </div>
            </div>
            <div>
                <p id="total__price-${productLocal[i].id}"  class="price-item mt-4" > </p>
            </div>
        </div>
        `        
    }
    $('#payment-render').html(html);
    let itemLoca =localStorage.getItem('addProduct');
    let items = JSON.parse(itemLoca);
    totalPayment(items)
}
renderDetailPayment();
// Function price product
function totalPayment() {
    let totalProduct = 0;
    let totalPrice = 0;
    let itemLocal =localStorage.getItem('addProduct');
    let productss = JSON.parse(itemLocal);
    for (let i = 0; i < productss.length; i++) {
        const p = productss[i];
        totalProduct = p.quantity * p.price;
        $('#total__price-'+ productss[i].id).text(totalProduct.toLocaleString() + ' ' + 'VND')
        totalPrice += totalProduct    
    }
    $('#total__payment').text(totalPrice.toLocaleString() + ' ' + 'VND')
};
//

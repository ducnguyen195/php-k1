$('#email').on('keyup', function(){
        
        let email = $(this).val();//
        console.log(email);
});
$('#password').on('keyup', function () {
    let password = $(this).val();
    console.log(password)
});
$('.login').on('click', function () {
    alert( $('email').val(), $('password').val());
    $('.content__footer').append('<div class ="footer"> Div Append </div>')
    $('.content_footer').html('Login Success')
    $('.content_footer').addClass('error');
});
$(document).ready(function(listProduct = products){
     

   
})
let url =window.location.href;
    url =new URL(url);

let c =url.searchPrams.get('id')
console.log(c);

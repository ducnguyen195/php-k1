$('#btn-signup').click(function(){
    let user ={
        password :$('#password').val(),
        email : $('#email').val(),
    }
    let confirmPassword = $('#confirm-password').val();
    let regex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if(user.email.length === 0 || user.password.length === 0){
        swal("Lỗi", "Vui lòng nhập email và password", "warning");
    } else if(!regex.test(user.email.trim())){
        swal("Lỗi", "Định dạng Email của bạn k chính xác, vui lòng kiểm tra lại", "error");
    } else if(user.password.length < 6){
        swal("Lỗi", "Mật khẩu của bạn nhỏ hơn 6 ký tự, vui lòng kiểm tra lại ", "warning");
    } else if(confirmPassword.length ===0){
        swal("Lỗi", " Chưa nhập lại mật khẩu", "warning");
    } else if(confirmPassword !==user.password ){
        swal("Lỗi", "Nhập lại mật khẩu chưa đúng", "warning");
    } else{
        swal("Thành công", "Đăng ký thành công", "success");
        let data =JSON.stringify(user);
        localStorage.setItem('user', data)
        setTimeout(function(){
            window.location.replace('./login.html')
        }, 2000);
    }
});



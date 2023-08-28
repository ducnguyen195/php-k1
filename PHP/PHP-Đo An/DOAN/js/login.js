$('#btn-login').click(function(){
    let username = $('#email').val();
    let password = $('#password').val();
    let regex = new RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    let user = localStorage.getItem('user');
    let data = JSON.parse(user);
    if(username.length ===0 || password.length ===0){
        swal("Lỗi", "Vui lòng nhập email và password", "error");
    }  else if(!regex.test(username.trim())){
        swal("Lỗi", "Định dạng Email của bạn k chính xác, vui lòng kiểm tra lại", "error");
    } else if(password.length < 6){
        swal("Lỗi", "Mật khẩu của bạn nhỏ hơn 6 ký tự, vui lòng kiểm tra lại ", "warning");
    } else{
        if(username !== data.email || password !== data.password){
            swal("Lỗi", "Sai Email hoặc Mật khẩu", "warning");
        } else {
            swal("Thành công", " Dang nhap thanh cong", "success");
            setTimeout(function(){
                window.location.replace('../index.html')
            }, 2000);
            let allUser = [];
            allUser.push(data)
            allUser = JSON.stringify(allUser);
            localStorage.setItem('allUser', allUser);
        };
        
    };
});
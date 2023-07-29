$(document).ready(function(){
    $('#signup').click('submit', function (){
        let user = {
          password : $('#password').val(),
          username : $('#username').val(),
          }       
    
            let users = JSON.stringify(user);
            localStorage.setItem('user',users);
            window.location.href('login.html') 
            alert('Đăng Ký Thành Công');     
      });             

});

  $('#login').click(function() {
    let usernames = $('#username').val();
    let passwords =$('#password').val();
    let user = localStorage.getItem('user');
    let data =JSON.parse(user);
    if(usernames !== data.username || passwords !== data.password){
      alert('Sai mật khẩu hoặc tài khoản')
    }else if(usernames == data.username && passwords == data.password){
      window.location.replace('shop/index.html')
    }
  });

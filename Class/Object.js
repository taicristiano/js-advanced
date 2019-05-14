
var User = {
  userName: '',
  passWord: '',

  setInfo: function(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
  },

  checkLogin: function() {
    return (this.userName === 'admin' && this.passWord === 'admin');
  }
}

User.setInfo('admin','admin');

if (User.checkLogin()) {
  alert('Success');
} else {
  alert('Fail');
}


// Singleton Object
var User = new function() {
  this.userName = '';
  this.passWord = '';

  this.setInfo = function(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
  }

  this.checkLogin = function() {
    return (this.userName === 'admin' && this.passWord === 'admin');
  }
}
User.setInfo('admin', 'admin');
if (User.checkLogin()){
    alert('Đăng nhập thành công');
}
else{
    alert('Đăng nhập thất bại');
}

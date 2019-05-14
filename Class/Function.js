
function User() {
  this.userName = '';
  this.passWord = '';

  this.setInfo = function(userName, passWord) {
    this.userName = userName;
    this.passWord = passWord;
  }

  this.checkLogin = function() {
    return (this.userName === 'admin' && this.passWord === 'admin');
  }

  return this;
}


function User() {
  this.userName = '';
  this.passWord = '';

  return this;
}
User.prototype.setInfo = function (userName, passWord) {
  this.userName = userName;
  this.passWord = passWord;
}

User.prototype.checkLogin = function () {
  return (this.userName === 'admin' && this.passWord === 'admin');
}

var user = new User();
user.setInfo('admin', 'admin');

if (user.checkLogin()) {
  alert('Success');
} else {
  alert('Fail');
}

try {

} catch (e) {

} finally {

}


var domain = 'qa.freetuts.net'

try {
    if (domain !== 'freetuts.net'){
        throw new Error('Domain nay khong phai la trang chu');
    }
} catch (e){
    console.log(e.message);
} finally{
    console.log('End');
}


// class
function UserError() {
  this.throwLogin = function() {
    throw new Error('Invalid userName and passWord');
  };

  this.throwSession = function () {
    throw new Error('Your request is timeout');
  };

  return this;
}

var userName = 'tainhot';
var passWord = 'test';

try {
  if(userName != 'admin' || passWord != 'admin') {
    var userError = new UserError();
    userError.throwLogin();
  }
} catch (e) {
  console.log(e.message);
}

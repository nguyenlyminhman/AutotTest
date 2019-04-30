const USERNAME = '#username';
const PASSWORD = '#password';
const BTN_LOGIN = '[type="submit"]';

class LoginPage{
    get username () {
        return $(USERNAME);
    }

    get password(){
        return $(PASSWORD);
    }

    get login(){
        return $(BTN_LOGIN);
    }
}
module.exports = new LoginPage;
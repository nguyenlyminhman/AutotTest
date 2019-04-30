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

    loginToPage(username, password){
        this.username.setValue('tomsmith');
        this.password.setValue('SuperSecretPassword!');
        this.login.click();
    }
}
module.exports = new LoginPage;
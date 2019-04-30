const USERNAME = '#username';
const PASSWORD = '#password';
const BTN_LOGIN = '[type="submit"]';

class LoginPage{
    username (username) {
        $(USERNAME).setValue(username);
    }

    password(password){
        $(PASSWORD).setValue(password);
    }

    login(){
        $(BTN_LOGIN).click();
    }
}

module.exports = new LoginPage;
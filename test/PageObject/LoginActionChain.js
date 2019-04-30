let SecureAreaPage = require('./SecureAreaPage');
let Base = require('./Base');

const USERNAME = '#username';
const PASSWORD = '#password';
const BTN_LOGIN = '[type="submit"]';

class LoginPage extends Base{
    inputUsername(username) {
        $(USERNAME).setValue(username);
        return this;
    }

    inputPassword(password) {
        $(PASSWORD).setValue(password);
        return this;
    }

    clickOnLogin() {
        $(BTN_LOGIN).click();
        return SecureAreaPage;
    }
}

module.exports = new LoginPage;
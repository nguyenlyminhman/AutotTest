let SecureAreaPage = require('./SecureAreaPage');
let expect = require('chai').expect;
let Base = require('./Base');

const TITLE = 'h2';
const USERNAME = '#username';
const PASSWORD = '#password';
const BTN_LOGIN = '[type="submit"]';

class LoginPage extends Base{
    getTitle(){
        let rs = $(TITLE).getText();
        return rs;
    }

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

    verifyLoginTitle(){
        let actualTitle = this.getTitle();
        let expectTitle = 'Login Page'; //Error: Login Page@
        expect(actualTitle).to.equal(expectTitle, 'Error Login Title Page: ');
    }
}

module.exports = new LoginPage;
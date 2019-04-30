let loginObj = require('../PageObject/LoginActionChain');

describe('Page Object API Command', () => {
    it('Login API', () => {
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!'
        let url = 'https://the-internet.herokuapp.com/login';

        loginObj
            .openUrl(url)
            .inputUsername(username)
            .inputPassword(password)
            .clickOnLogin()
            .getSecureAreaText();

        browser.pause(3000);
    });
});
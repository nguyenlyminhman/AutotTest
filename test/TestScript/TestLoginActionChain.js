let loginObj = require('../PageObject/LoginActionChain');

describe('Page Object API Command', ()=>{
    it('Login API', ()=>{
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!'

        browser.url('https://the-internet.herokuapp.com/login');

        loginObj
        .inputUsername(username)
        .inputPassword(password)
        .clickOnLogin()
        .getSecureAreaText();

        browser.pause(3000);
    });
});
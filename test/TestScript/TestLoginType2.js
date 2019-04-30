let loginObj = require('../PageObject/PageObjectType2');

describe('Page Object API Command', ()=>{
    it('Login API', ()=>{
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!'

        browser.url('https://the-internet.herokuapp.com/login');

        let btnLoginSizeHeight = loginObj.login.getElementSize().height;
        console.log(btnLoginSizeHeight)

        loginObj.loginToPage(username, password);

        browser.pause(3000);
    });
});
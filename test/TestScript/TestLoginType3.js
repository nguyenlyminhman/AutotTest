let loginObj = require('../PageObject/PageObjectType3');

describe('Page Object API Command', ()=>{
    it('Login API', ()=>{
        let username = 'tomsmith';
        let password = 'SuperSecretPassword!'

        browser.url('https://the-internet.herokuapp.com/login');

        loginObj.username(username);
        loginObj.password(password);
        loginObj.login();

        browser.pause(3000);
    });
});
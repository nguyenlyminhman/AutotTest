let LoginObject = require('../PageObject/LoginPage');

describe('Page Object API Command', ()=>{
    it('Login API', ()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        LoginObject.username.setValue('tomsmith');
        LoginObject.password.setValue('SuperSecretPassword!');
        LoginObject.login.click();
        browser.pause(3000);
    });
});
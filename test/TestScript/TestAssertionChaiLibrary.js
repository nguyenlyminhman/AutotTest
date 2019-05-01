let loginObj = require('../PageObject/LoginActionChain');

let Data = require('../TestData/Login');

describe('Page Object API Command', () => {

    let url = 'https://the-internet.herokuapp.com/login';

    before('Data Preparation', ()=>{
        console.log('Before Suite');
        loginObj.openUrl(url)
    })

    it('Login Title API', () => {
        loginObj.verifyLoginTitle();
        browser.pause(3000);
    });

    it('Login API', ()=>{
        loginObj
            .inputUsername(Data.correctCredential.username)
            .inputPassword(Data.correctCredential.password)
            .clickOnLogin()
        browser.pause(3000);
    })
});
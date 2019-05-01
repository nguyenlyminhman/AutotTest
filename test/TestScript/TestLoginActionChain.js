let loginObj = require('../PageObject/LoginActionChain');
let Data = require('../TestData/Login');

describe('Page Object API Command', () => {

    let url = 'https://the-internet.herokuapp.com/login';

    before('Data Preparation', ()=>{
        console.log('Before Suite');
        loginObj.openUrl(url)
    })

    beforeEach('Refresh Page', ()=>{
        console.log('Before Each');
        browser.refresh();
    });

    afterEach('Clear Data', ()=>{
        console.log('After Each');
    });

    it('Login API Fail', () => {
        loginObj
            .inputUsername(Data.inCorrectCredential.username)
            .inputPassword(Data.inCorrectCredential.password)
            .clickOnLogin()
            .getSecureAreaText();
        browser.pause(3000);
    });
    
    it('Login API Pass', () => {
        loginObj
            .inputUsername(Data.correctCredential.username)
            .inputPassword(Data.correctCredential.password)
            .clickOnLogin()
            .getSecureAreaText();
        browser.pause(3000);
    });

    it('Test case 03', ()=>{
        console.log('Test case 02');
    })

    after('Done', ()=>{
        console.log('After')
    })
});
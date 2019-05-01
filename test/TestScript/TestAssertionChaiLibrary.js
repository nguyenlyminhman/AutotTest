let loginObj = require('../PageObject/LoginActionChain');
let expect = require('chai').expect;
let Data = require('../TestData/Login');

describe('Page Object API Command', () => {

    let url = 'https://the-internet.herokuapp.com/login';

    before('Data Preparation', ()=>{
        console.log('Before Suite');
        loginObj.openUrl(url)
    })

    it('Login API Fail', () => {
        let actualTitle = loginObj.getTitle();
        let expectTitle = 'Login Page'; //Error: Login Page@
        expect(actualTitle).to.equal(expectTitle, 'Error Login Title Page: ');
        browser.pause(3000);
    });

    it('Test case 02', ()=>{
        console.log('Test case 02');
    })

    after('Done', ()=>{
        console.log('After')
    })
});
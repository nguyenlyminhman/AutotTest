describe('Test Login Page', ()=>{
    it('Set login info', ()=>{
        
        browser.url('https://the-internet.herokuapp.com/login')
        
        const USERNAME = '#username';
        const PASS = '#password';
        const LOGIN_BTN = '[type="submit"]'

        browser.waitForEnabled(USERNAME, 1000);
        $(USERNAME).setValue('tomsmith');
        
        browser.waitForEnabled(PASS, 1000);
        $(PASS).setValue('SuperSecretPassword!');
        
        browser.waitForEnabled(LOGIN_BTN, 1000);
        $(LOGIN_BTN).click();

        browser.pause(3000);
    });
});
describe('API test command',()=>{
    const FORM = '#login';
    it('Test Form Attribute', ()=>{
        browser.url('https://the-internet.herokuapp.com/login');
        browser.waitForVisible(FORM);

        let att = $(FORM).getAttribute('method');
        console.log(att); //print POST

    });
})
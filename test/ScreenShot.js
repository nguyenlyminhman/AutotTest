describe('URL Creen Shot API', ()=>{
    it('Test Creen Shot', ()=>{
        browser.url('https://www.google.com');
        
        browser.saveScreenshot('./google.png');
    });
});
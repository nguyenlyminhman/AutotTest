describe('URL API Command', ()=>{
    it('Test Url and Title', ()=>{
        browser.url('https://www.google.com');
        let pageUrl = browser.getUrl();
        let pageTitle = browser.getTitle();

        console.log('Url: ', pageUrl);
        console.log('Title: ', pageTitle);
    });
});
describe('API Color command', ()=>{
    const ALERT = '[onclick="jsConfirm()"]';
    const RESULT = '#result'
    it('Get color element',()=>{
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        browser.waitForVisible(ALERT, 35000);
        //click on js alert.
        $(ALERT).click();
        browser.alertAccept();
        //handle result
        browser.waitForVisible(RESULT, 5000);
        let rs = $(RESULT).getCssProperty('color');
        console.log(rs)
    })
})
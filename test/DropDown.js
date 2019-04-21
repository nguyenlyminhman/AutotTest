describe('Test Command', ()=>{
    
    const DROPDOWN_MENU = '#dropdown'

    it('Test: select by visible text', ()=>{
        browser.url('https://the-internet.herokuapp.com/dropdown');

        browser.waitForVisible(DROPDOWN_MENU, 2000);
        $(DROPDOWN_MENU).selectByVisibleText('Option 1');
        browser.pause(2000);
    });

    it('Test: select by Index', ()=>{
        $(DROPDOWN_MENU).selectByIndex(1);
        browser.pause(2000);
    });

    it('Test: select by value', ()=>{
        $(DROPDOWN_MENU).selectByAttribute('value', '2')
        browser.pause(2000);
    });
});
describe('API Tab Command', ()=>{
    const EDIT = '=EDIT';
    it('Test Tab', ()=>{
        browser.url('https://webdriver.io/docs/api/browser/switchWindow.html');
        browser.waitForVisible(EDIT, 5000);
        $(EDIT).click();

        let allTabIds = browser.getTabIds();
        console.log('All tab id: ', allTabIds);

        let page_title_1 = browser.getTitle();
        console.log('Old title page: ', page_title_1);
        browser.switchTab(allTabIds[1]);
        browser.pause(5000);

        let page_title_2 = browser.getTitle();
        console.log('New title page: ', page_title_2);
        browser.switchTab(allTabIds[0]);
        browser.pause(5000);
    })
})
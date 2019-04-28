describe('Alert Command', () => {
    const JS_ALERT = '[onclick="jsConfirm()"]'
    it('Alert Ok', () => {
        browser.url('https://the-internet.herokuapp.com/javascript_alerts');
        browser.waitForVisible(JS_ALERT, 5000);
        $(JS_ALERT).click();
        browser.alertAccept();
        browser.pause(3000);
    });

    it('Alert Cancel', () => {
        $(JS_ALERT).click();
        browser.alertDismiss();
        browser.pause(3000);
    });

    it('Promt text', () => {
        $(JS_ALERT).click();
        let txt = browser.alertText();
        console.log(txt);
        browser.pause(3000);
    });
});
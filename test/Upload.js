let path = require('path');

describe('Upload API Command', ()=>{
    const CHOOSE_FILE = '#file-upload';
    const UPLOAD_BTN = '#file-submit';

    it('Test Upload', ()=>{
        browser.url('https://the-internet.herokuapp.com/upload');
        browser.waitForVisible(CHOOSE_FILE, 5000);
        browser.chooseFile(CHOOSE_FILE, path.join(__dirname, './testdemo.js'));

        $(UPLOAD_BTN).click();
        browser.pause(5000);

    })
});
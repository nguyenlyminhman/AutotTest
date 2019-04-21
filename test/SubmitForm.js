describe('Login Form', ()=>{
    it('Login form', ()=>{

        browser.url('https://the-internet.herokuapp.com/login');

        const USERNAME = '#username';
        const PASSWORD = '#password';
        const FORM = '#login';

        
        browser.waitForEnabled(USERNAME, 1000);
        $(USERNAME).setValue('tomsmith');

        browser.waitForEnabled(PASSWORD, 2000);
        $(PASSWORD).setValue('SuperSecretPassword!aa');

        $(FORM).submitForm();

        browser.pause(5000);
    });
});

/*
* WARNING: the "submit" command will be deprecated soon. 
* If you have further questions, reach out in the WebdriverIO Gitter support channel (https://gitter.im/webdriverio/webdriverio).Note: This command is not part of the W3C WebDriver spec and won't be supported in future versions of the driver. It is recommended to call the click command on the submit button or
* use the actions command to emulate a key press action.
*/
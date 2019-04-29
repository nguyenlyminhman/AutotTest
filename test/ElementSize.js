describe('API Command', () => {
    const FORM = '#login';
    const USERNAME = '#username';
    const LOGIN_BUTTON = '.radius';
    it('Get Form Size', () => {
        browser.url('https://the-internet.herokuapp.com/login');
        browser.waitForVisible(FORM, 15000);

        //get form size
        let formSize = $(FORM).getElementSize();
        console.log('Form Width:  ' + formSize.width);
        console.log('Form Height:  ' + formSize.height);

        //get text field size

    })

    it('Get TextField Size', () => {
        let USERNAME_SIZE = $(USERNAME).getElementSize();
        console.log('Username Width:  ' + USERNAME_SIZE.width);
        console.log('Username Height:  ' + USERNAME_SIZE.height);
    })

    it('Get Button Size', () => {
        let LOGIN_BUTTON_SIZE = $(LOGIN_BUTTON).getElementSize();
        console.log('Login Button Width:  ' + LOGIN_BUTTON_SIZE.width);
        console.log('Login Button Height:  ' + LOGIN_BUTTON_SIZE.height);
    })
});
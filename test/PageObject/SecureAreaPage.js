const LOGIN_OK_CONTENT = 'h2';

class SecureAreaPage{

    getSecureAreaText(){
        let secureText = $(LOGIN_OK_CONTENT).getText();
        console.log('H2 Text is', secureText);
    }
}

module.exports = new SecureAreaPage();
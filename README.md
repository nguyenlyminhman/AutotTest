# AutotTest

# Using webdriverio, mocha, chai to test

## Using WebDriver
Dowload WebDriver for Chrome:
http://chromedriver.chromium.org/downloads

1. Start WebDriver to get port number (9515 by default).
2. Add 9515 port number to test.conf.js file.
3. Run **npm test test.conf.js**

## Using SeleniumHub

Dowload SeleniumHub:
https://www.seleniumhq.org/download/

1. Access the folder that contain dowloaded file.
2. Start selenium hub: Type **java -jar dowloaded-file-name.jar -role hub** in cmd
3. Using web-browser to test at http://localhost:4444
4. Register node on the selenium hub: Type **java -jar dowloaded-file-name.jar -role node -hub http://localhost:4444/grid/register** in other cmd
5. Using web-browser to test at http://localhost:4444/grid/console
class Base{
    openUrl(url){
        browser.url(url); 
        return this;
    }
}
module.exports = Base;
exports.config = {
    specs:[
        './test/test.js'
    ],
    host:'localhost',
    port: 9515,
    path:'/',
    capabilities: [{
        browserName: 'chrome'
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace'
}

//https://webdriver.io/docs/configurationfile.html
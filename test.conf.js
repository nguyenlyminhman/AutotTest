exports.config = {
    specs:[
        './test/test_demo.js'
    ],
    host:'localhost',
    port: 9515,
    path:'/',
    capabilities: [{
        browserName: 'firefox'
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace'
}

//https://webdriver.io/docs/configurationfile.html
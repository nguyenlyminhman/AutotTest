exports.config = {
    specs:[
        './test/Tab.js'
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
        timeout: 600000
    },

    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'verbose'
}

//https://webdriver.io/docs/configurationfile.html
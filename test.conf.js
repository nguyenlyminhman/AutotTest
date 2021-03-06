exports.config = {
    maxInstances:10, //10 faster than 1
    specs:[
        './test/TestScript/TestAssertionChaiLibrary.js',
        //can add more test file in here.
        './test/TestScript/TestLoginActionChain.js'
    ],
    
    suites:{
        group_a:['./test/TestScript/TestAssertionChaiLibrary.js'], // npm test test.conf.js -- --suites=group_a
        group_b:['./test/TestScript/TestLoginActionChain.js'] // npm test test.conf.js -- --suites=group_b
    },

    host:'localhost',
    port: 4444,
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
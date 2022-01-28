let loginAccess = require('./Login.js');
let forgotPasswordAccess = require('./Forgot-Password');


describe('Skipper CMS', function () {
    //////////// Web-Setup ////////////////
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 3000000;
    });
    afterEach(function () {
        // browser.executeScript('window.sessionStorage.clear();');
        // browser.executeScript('window.localStorage.clear();');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('Skipper CMS', function () {
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = true; 
        //#Domain
        //browser.get('http://10.1.3.35:802/');
        browser.get('https://platform-dev.skipperhospitality.com/login');
        browser.driver.manage().window().maximize();
        //browser.manage().deleteAllCookies();
        expect(browser.getTitle()).toEqual('Skipper CMS');
        
    });


    //////////// Test-Suite ////////////////
      forgotPasswordAccess.forgotpassword();
      loginAccess.userlogin();
     







});
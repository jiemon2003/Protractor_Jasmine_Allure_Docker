//let langingAccess = require('./LandingPage');
let signupAccess = require('./signup.js');
let loginAccess = require('./Login.js');
let productAccess = require('./products.js');


describe('Agilibo', function () {
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

    it('Agilibo_Ifo_Landing_Page', function () {
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization = true; 
        //#Domain
        //browser.get('http://10.1.3.35:802/');
        browser.get('http://app.devagilibo.com/');
        browser.driver.manage().window().maximize();
        //browser.manage().deleteAllCookies();
        //expect(browser.getTitle()).toEqual('Agilibo | Agile Transformation | Archibo');
        
    });


    //////////// Test-Suite ////////////////

    //   langingAccess.landingpage();
    //   signupAccess.signup();
      loginAccess.userlogin();
      productAccess.products();







});
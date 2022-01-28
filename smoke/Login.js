const { element, browser, Key } = require("protractor");
const { protractor } = require("protractor/built/ptor");

let login = function () {

    this.userlogin = function () {


        it('Try to login without email and password', function () {
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.sleep(1000);
            var Errormsg = element(by.xpath("//div[contains(text(),'Email is required')]"));
            expect(Errormsg.getText()).toEqual("Email is required");  

        });

        it('Try to login without Email', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='password']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            var passfield = browser.element(by.xpath("//input[@id='password']"))
            passfield.click();
            passfield.sendKeys("Admin@321")
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.sleep(1000);
            var Errormsg = element(by.xpath("//div[contains(text(),'Email is required')]"));
            expect(Errormsg.getText()).toEqual("Email is required"); 
            passfield.clear();
           
        });


        it('Login Success', function () {
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).sendKeys("Jihan@skipperhospitality.com");
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(35000);
            var DashboadVerification = element(by.xpath("//span[contains(text(),'Dashboard')]"));
            expect(DashboadVerification.getText()).toEqual("Dashboard"); 
           
        });

        


    };
};



module.exports = new login();
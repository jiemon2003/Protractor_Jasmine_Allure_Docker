const { element, browser, Key } = require("protractor");
const { protractor } = require("protractor/built/ptor");

let forgotpass = function () {

    this.forgotpassword = function () {


        it('Forgot your password>Go to Login', function () {
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//a[contains(text(),'Forgot your password?')]")).click();
            browser.manage().timeouts().implicitlyWait(3000);
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/form[1]/div[2]/a[1]")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            var Errormsg = element(by.xpath("//button[contains(text(),'Sign in')]"));
            expect(Errormsg.getText()).toEqual("Sign in");  

        });

        // it('Forgot your password>Send Email', function () {
        //     browser.manage().timeouts().implicitlyWait(5000);
        //     element(by.xpath("//a[contains(text(),'Forgot your password?')]")).click();
        //     browser.manage().timeouts().implicitlyWait(3000);
        //     element(by.xpath("//input[@id='email']")).click();
        //     browser.manage().timeouts().implicitlyWait(1000);
        //     element(by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/div[1]/form[1]/div[2]/a[1]")).click();
        //     browser.manage().timeouts().implicitlyWait(1000);
        //     var Errormsg = element(by.xpath("//button[contains(text(),'Sign in')]"));
        //     expect(Errormsg.getText()).toEqual("Sign in");  

        // });

        

        


    };
};



module.exports = new forgotpass();
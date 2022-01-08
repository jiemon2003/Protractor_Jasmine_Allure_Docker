let signup = function () {

    this.signup = function () {

        it('User_SignUP', function () {
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//a[contains(text(),'Login / Sign up')]")).click();
            el = element(by.xpath("//p[contains(text(),'If you have no account, you can sign up by clickin')]")) 
            el.getText().then(function(text){expect(text).toContain("If you have no account, you can sign up by clicking")});
            element(by.xpath("//a[contains(text(),'Sign Up Now!')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//p[contains(text(),'If you already have an account then Sign In by cli')]")) 
            el.getText().then(function(text){expect(text).toContain("If you already have an account then Sign In by clicking")});
            element(by.xpath("//input[@id='first_name']")).sendKeys("Automation");
            element(by.xpath("//input[@id='last_name']")).sendKeys("Test");
            element(by.xpath("//input[@id='email']")).sendKeys("automation.test32@mailinator.com");
            element(by.xpath("//input[@id='company']")).sendKeys("Test Company");
            element(by.xpath("//input[@id='company_contact']")).sendKeys("490610344096");
            element(by.xpath("//span[contains(text(),'Next')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='password']")).sendKeys("Admin123");
            element(by.xpath("//input[@id='password_confirmation']")).sendKeys("Admin123");
            element(by.xpath("//span[contains(text(),'Next')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//span[contains(text(),'Finish')]")).click();
            browser.sleep(6000);
            //expect(browser.getTitle()).toEqual('Login - Agilibo');
           










               

           
        });

    };
};



module.exports = new signup();
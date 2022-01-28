const { element } = require("protractor");

let login = function () {

    this.userlogin = function () {


        it('Try to login without email and password', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//div[contains(text(),'Email is required')]")) 
            el.getText().then(function(text){expect(text).toContain("Email is required")});
           
        });

        it('Try to login without Email', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='password']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).sendKeys("Admin@321")
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//div[contains(text(),'Email is required')]")) 
            el.getText().then(function(text){expect(text).toContain("Email is required")});
           
        });

        it('Try to login without Password', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).sendKeys("jihan@skipperhospitality.com");
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//div[contains(text(),'Password is required')]")) 
            el.getText().then(function(text){expect(text).toContain("Password is required")});
           
        });

        it('Try to login with invalid Email', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).sendKeys("invalid@skipperhospitality.com");
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).sendKeys("Admin@321")
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//div[contains(text(),'Wrong email or password.')]")) 
            el.getText().then(function(text){expect(text).toContain("Wrong email or password.")});

          
           
        });

        it('Try to login with invalid Password', function () {
            
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).clear();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).sendKeys("Jihan@skipperhospitality.com");
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).clear();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).sendKeys("invalidpassword")
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//div[contains(text(),'Wrong email or password.')]")) 
            el.getText().then(function(text){expect(text).toContain("Wrong email or password.")});
           
        });

        it('Login Success', function () {
            
            element(by.xpath("//input[@id='email']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).clear();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='email']")).sendKeys("jihan@skipperhospitality.com");
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).click();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).clear();
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//input[@id='password']")).sendKeys("Admin@321")
            browser.manage().timeouts().implicitlyWait(1000);
            element(by.xpath("//button[contains(text(),'Sign in')]")).click();
            browser.manage().timeouts().implicitlyWait(35000);
            el = element(by.xpath("//span[contains(text(),'Dashboard')]")) 
            el.getText().then(function(text){expect(text).toContain("Dashboard5")});
           
        });

    };
};



module.exports = new login();
let login = function () {

    this.userlogin = function () {
        it('Login', function () {
            
            browser.manage().timeouts().implicitlyWait(5000);
            element(by.xpath("//a[contains(text(),'Login / Sign up')]")).click();
            browser.manage().timeouts().implicitlyWait(5000);
            el = element(by.xpath("//p[contains(text(),'Sign In to your account')]")) 
            el.getText().then(function(text){expect(text).toContain("Sign In to your account")});
            element(by.xpath("//input[@id='inputEmail']")).click();
            element(by.xpath("//input[@id='inputEmail']")).sendKeys("archibo.test1@gmail.com");
            element(by.xpath("//input[@id='inputPassword']")).click(); 
            element(by.xpath("//input[@id='inputPassword']")).sendKeys("OnlineService@321");
            element(by.xpath("//button[contains(text(),'Login')]")).click();
            browser.sleep(3000)
            //select-company
            element(by.xpath('//*[@id="content-wrapper"]/div/main/div[2]/div/div[2]/div/div[2]/div/a/div[2]/div/button')).click();
            browser.sleep(3000)
            // element(by.xpath("//header/ul[1]/li[1]/a[1]")).click();
            // el = element(by.xpath("//header/ul[1]/li[1]/a[1]")) 
            // el.getText().then(function(text){expect(text).toContain("Archibo IT Consultancy & Services")});





           





            


           
        });

    };
};



module.exports = new login();
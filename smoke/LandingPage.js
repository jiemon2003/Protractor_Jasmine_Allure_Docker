let landingpage = function () {

    this.landingpage = function () {
        it('Home', function () {

            browser.actions().mouseMove(element(by.xpath("//p[@id='comp-jdkoa2760label']"))).perform()
            browser.sleep(2000)
     
        });
        it('Features', function () {

            element(by.xpath("//p[@id='comp-jdkoa2761label']")).click();
            browser.sleep(2000)
     
        });
        it('Pricing', function () {

            element(by.xpath("//p[@id='comp-jdkoa2762label']")).click();
            browser.sleep(2000)
     
        });
        it('How To', function () {

            element(by.xpath("//p[@id='comp-jdkoa2763label']")).click();
            browser.sleep(2000)
     
        });
      
        it('Contact', function () {

            browser.actions().mouseMove(element(by.xpath("//p[@id='comp-jdkoa2765label']"))).perform()
            browser.sleep(2000)

     
        });

       

    };
};



module.exports = new landingpage();
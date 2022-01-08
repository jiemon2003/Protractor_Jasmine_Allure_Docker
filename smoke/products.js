let products = function () {

    this.products = function () {
        it('Products> Create Product', function () {

            browser.executeScript('window.scrollTo(0,450);');
            browser.sleep(1000)
            element(by.xpath("//body/div[@id='wrapper']/div[@id='sidebar']/ul[1]/li[6]/a[1]/span[1]")).click();
            browser.sleep(2000)
            //Product List
            element(by.xpath("//span[contains(text(),'Products List')]")).click();
            browser.sleep(3000)
            //create
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[1]/div[2]/a[1]")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@id='name']")).sendKeys("Product-01");
            element(by.xpath("//input[@id='description']")).sendKeys("Test Product Description");
            
            //Start-Date
            // element(by.xpath("//input[@id='start_date']")).click();
            // browser.executeScript("document.getElementById('datepicker').value='01/07/2021'");
           
            // browser.sleep(2000)
            // element(by.css("body.c-app.pace-done:nth-child(2) div.flatpickr-calendar.hasWeeks.animate.showTimeInput.open.arrowTop:nth-child(8) div.flatpickr-innerContainer div.flatpickr-rContainer div.flatpickr-days div.dayContainer > span.flatpickr-day.selected:nth-child(5)")).click();
            // browser.sleep(2000)
            // //End-Date
            // element(by.xpath("//input[@id='end_date']")).click();
            // browser.sleep(2000)
            // element(by.xpath("/html[1]/body[1]/div[5]/div[2]/div[2]/div[2]/div[1]/span[35]")).click();
            // browser.sleep(2000)
            //Active
            element(by.xpath("//label[contains(text(),'Active')]")).click();
            browser.sleep(1000)
            element(by.xpath("//label[contains(text(),'Active')]")).click();
            //Upload Image
            var path = require('path');
            var fileToUpload = 'img/sample.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            //Save
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[2]/form[1]/div[3]/input[1]")).click();
            browser.sleep(3000);



        });
        it('Products> Edit Product', function () {

            //Edit
            element(by.xpath("//tbody/tr[1]/td[10]/div[1]/a[2]")).click();
            browser.sleep(3000)
            element(by.xpath("//input[@id='name']")).clear();
            element(by.xpath("//input[@id='name']")).sendKeys("Product-01-Edited");
            element(by.xpath("//input[@id='description']")).clear();           
            element(by.xpath("//input[@id='description']")).sendKeys("Test Product Description");
            
            //Start-Date
            // element(by.xpath("//input[@id='start_date']")).click();
            // browser.executeScript("document.getElementById('datepicker').value='01/07/2021'");
           
            // browser.sleep(2000)
            // element(by.css("body.c-app.pace-done:nth-child(2) div.flatpickr-calendar.hasWeeks.animate.showTimeInput.open.arrowTop:nth-child(8) div.flatpickr-innerContainer div.flatpickr-rContainer div.flatpickr-days div.dayContainer > span.flatpickr-day.selected:nth-child(5)")).click();
            // browser.sleep(2000)
            // //End-Date
            // element(by.xpath("//input[@id='end_date']")).click();
            // browser.sleep(2000)
            // element(by.xpath("/html[1]/body[1]/div[5]/div[2]/div[2]/div[2]/div[1]/span[35]")).click();
            // browser.sleep(2000)
            //Active
            element(by.xpath("//label[contains(text(),'Active')]")).click();
            browser.sleep(1000)
            element(by.xpath("//label[contains(text(),'Active')]")).click();
            //Upload Image
            var path = require('path');
            var fileToUpload = 'img/sample.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            //Save
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[2]/form[1]/div[3]/input[1]")).click();
            browser.sleep(3000);



        });
        it('Products> Product List> Product backlogs list', function () {

            element(by.xpath("//tbody/tr[1]/td[9]/div[1]/a[1]")).click();
            browser.sleep(3000)





        });
        it('Products> Product List> Product backlog> Add', function () {

            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[1]/div[2]/div[1]/button[2]")).click();
            browser.sleep(3000)
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")).sendKeys("Product Backlog-01");
            browser.sleep(1000)
            element(by.xpath("//textarea[@id='acceptance_criteria']")).sendKeys("Tesat Acceptance Criteria");
            browser.sleep(1000)
            element(by.xpath("//textarea[@id='description']")).sendKeys("Test Description");
            browser.sleep(1000)
            //Upload Image
            var path = require('path');
            var fileToUpload = 'img/sample.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            //save
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[3]/span[1]/button[2]/span[1]")).click();
            browser.sleep(5000)
           




            




        });
        it('Products> Product List> Product backlog> Edit', function () {

            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/i[1]")).click();
            browser.sleep(3000)
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")).clear();
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/input[1]")).sendKeys("Product Backlog-01-Edited");
            browser.sleep(1000)
            element(by.xpath("//textarea[@id='acceptance_criteria']")).clear();
            element(by.xpath("//textarea[@id='acceptance_criteria']")).sendKeys("Tesat Acceptance Criteria");
            browser.sleep(1000)
            element(by.xpath("//textarea[@id='description']")).clear();
            element(by.xpath("//textarea[@id='description']")).sendKeys("Test Description-Edited");
            browser.sleep(1000)
            //Upload Image
            var path = require('path');
            var fileToUpload = 'img/sample.png',
                absolutePath = path.resolve(__dirname, fileToUpload);
            element(by.css('input[type="file"]')).sendKeys(absolutePath);
            //save
            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[3]/span[1]/button[2]/span[1]")).click();
            browser.sleep(3000)
           




            




        });
        it('Products> Product List> Product backlog> Delete> Cancel', function () {

            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(4000)
            browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
            browser.sleep(3000)

            
           




            




        });
        it('Products> Product List> Product backlog> Delete> Procced', function () {

            element(by.xpath("//body/div[@id='wrapper']/div[@id='content-wrapper']/div[1]/main[1]/div[2]/div[1]/div[3]/div[3]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/button[2]")).click();
            browser.sleep(4000)
            browser.actions().sendKeys(protractor.Key.ENTER).perform();
            browser.sleep(3000)

            
           




            




        });

    };
};



module.exports = new products();
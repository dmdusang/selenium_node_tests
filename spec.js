var assert = require('assert');
var selenium = require('selenium-webdriver');
var By = selenium.By;
var test = require('selenium-webdriver/testing');
var chrome = require('chromedriver');
const timeOut = 15000;
 
test.describe('Google Home', function() {
	this.timeout(timeOut);
	test.it('Check Main Div', function() {
	
	var driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();

 
	driver.get('http://www.google.com');
	driver.findElement(By.id('main'));

	//Use Promise in place of callback in order to keep code cleaner
	/*.then(function(links){
	console.log(links);
    assert.equal(links, links, "I don't exist");
    
    
    
		});*/
		driver.quit();
	});
});

var assert = require('assert');
var selenium = require('selenium-webdriver');
var By = selenium.By;
var test = require('selenium-webdriver/testing');
var chrome = require('chromedriver');
var User = require('./WordPressFramework/login');

const timeOut = 15000;
var driver;
var user;
 
test.describe('Log In Wordpress', function() {
	test.beforeEach(function(){
		console.log("start");
		this.timeout(timeOut);
		driver = new selenium.Builder().withCapabilities(selenium.Capabilities.chrome()).build();
		console.log(driver);
		user = new User("username", "password", driver, "https://wordpress.com/wp-login.php");
		console.log(user);
		user.visit();
	});
	test.afterEach(function(){
		driver.quit();
	});

	test.it('Wordpress', function(){
		user.visit();
	});

	test.it('Login', function() {

		user.setUsername().then(function(){
			user.setPassword();
			}).then(function(){
				user.login();
				});
		
	});
});
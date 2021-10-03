package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login_Page {
	public WebDriver driver;

	public Login_Page(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath = "//input[@id='username']")
	private WebElement username;

	@FindBy(xpath = "//input[@id='password']")
	private WebElement password;
	
	@FindBy(xpath="//input[@name='login']")
	private WebElement login;

	public WebElement getusename() {
		return username;

	}

	public WebElement getPassword() {
		return password;

	}
	
	public WebElement getLogin() {
		return login;
	}

}

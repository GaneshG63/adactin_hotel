package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Select_Hotel {
	
	public WebDriver driver;
	
	public Select_Hotel(WebDriver driver2) {
		
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="//input[@id='radiobutton_0']")
	private WebElement checkbox;
	
	
	@FindBy(xpath="//input[@type='submit']")
	private WebElement continu;
	
	public WebElement getCheckbox() {
		return checkbox;
	}
	
	public WebElement getcontinu() {
		return continu;

	}
	
}

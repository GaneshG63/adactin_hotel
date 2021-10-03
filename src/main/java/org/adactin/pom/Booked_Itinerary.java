package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Booked_Itinerary {
	
	public WebDriver driver;
	
	public Booked_Itinerary(WebDriver driver2) {
		
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="(//input[@type='checkbox'])[3]")
	private WebElement check;
	
	@FindBy(xpath="//input[@name='logout'] ")
	private WebElement logout;
	
	
	public WebElement getCheck() {
		return check;
	}
	
	public WebElement getLogout() {

		return logout;
	}
	

}


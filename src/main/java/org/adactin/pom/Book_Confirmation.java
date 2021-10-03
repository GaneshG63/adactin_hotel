package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Book_Confirmation {
	
	public WebDriver driver;
	
	public Book_Confirmation(WebDriver driver2) {
		
		this.driver=driver2;
		
		PageFactory.initElements(driver, this);
	}
	

	
	@FindBy(xpath="//input[@name='my_itinerary']")
	private WebElement itinerary;
	
	

	public WebElement getItinerary() {
		return itinerary;
	}

}

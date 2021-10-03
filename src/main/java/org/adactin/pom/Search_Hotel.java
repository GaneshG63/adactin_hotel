package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Hotel {
	public WebDriver driver;
	
	public Search_Hotel(WebDriver driver2) {
		
		this.driver=driver2;
		
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy(xpath="//select[@name='location']")
	private WebElement Location;
	
	@FindBy(xpath="//select[@name='hotels']")
	private WebElement Hotel;
	
	@FindBy(xpath="//select[@name='room_type']")
	private WebElement Room_type;
	
	@FindBy(xpath="//select[@id='room_nos']")
	private WebElement number_of_Rooms;
	
	@FindBy(xpath="//input[@name='datepick_in']")
	private WebElement datein;
	
	@FindBy(xpath="//input[@name='datepick_out']")
	private WebElement dateout;
	
	@FindBy(xpath="//select[@name='adult_room']")
	private WebElement adult_room;
	
	@FindBy(xpath="//select[@name='child_room']")
	private WebElement child_room;
	
	@FindBy(xpath="//input[@id='Submit']")
	private WebElement search;
	
	
	public WebElement getLocation() {
		return Location;
		
	}
	public WebElement getHotels() {
		return Hotel;
	}
	public WebElement getRoom_type() {
		return Room_type;
	}
	public WebElement getNumber_of_rooms() {
		return number_of_Rooms;
	}
	
	public WebElement getDatein() {
		return datein;
	}
	public WebElement getDateout() {
		return dateout;
	}
	public WebElement getAdult_room() {
		return adult_room;
	}
	
	public WebElement getChild_room() {
		return child_room;
	}
	public WebElement getSearch() {
		return search;
	}
	
}

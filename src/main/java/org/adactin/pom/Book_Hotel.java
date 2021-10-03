package org.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Book_Hotel {

	public WebDriver driver;
	
	public Book_Hotel(WebDriver driver2) {
		
		this.driver=driver2;
		PageFactory.initElements(driver, this);
	}
	@FindBy(xpath="//input[@id='first_name']")
	private WebElement firstname;
	
	@FindBy(xpath="//input[@id='last_name']")
	private WebElement lastname;
	
	@FindBy(xpath="//textarea[@id='address']")
	private WebElement address;
	
	@FindBy(xpath="//input[@name='cc_num']")
	private WebElement  cc_num;
	
	@FindBy(xpath="//select[@name='cc_type']")
	private WebElement credit_type;
	
	@FindBy(xpath="//select[@name='cc_exp_month']")
	private WebElement month;
	
	@FindBy(xpath="//select[@name='cc_exp_year']")
	private WebElement year;
	
	@FindBy(xpath="//input[@name='cc_cvv']")
	private WebElement cvv_num;
	
	
	@FindBy(xpath="//input[@name='book_now']")
	private WebElement booknow;
	
	public WebElement getFirstname() {
		return firstname;
	}
	public WebElement getLastname() {
		return lastname;
	}
	
	public WebElement getAddress() {
		return address;
	}
	public WebElement getCc_num() {
		return cc_num;
	}
	
	public WebElement getCredit_type() {
		return credit_type;
	}
	
	public WebElement getMonth() {
		return month;
	}
	
	public WebElement getYear() {
		return year;
	}
	public WebElement getCvv_num() {
		return cvv_num;
	}
		
	public WebElement book_now() {

		return booknow;
	}
}

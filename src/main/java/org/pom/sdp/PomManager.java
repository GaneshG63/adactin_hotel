package org.pom.sdp;

import org.adactin.pom.Book_Confirmation;

import org.adactin.pom.Book_Hotel;
import org.adactin.pom.Booked_Itinerary;
import org.adactin.pom.Login_Page;
import org.adactin.pom.Search_Hotel;
import org.adactin.pom.Select_Hotel;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class PomManager {
	public WebDriver driver;

	private Login_Page Lp;
	private Search_Hotel sh;
	private Select_Hotel s;
	private Book_Hotel bh;
	private Book_Confirmation bc;
	private Booked_Itinerary b;

	public PomManager(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver, this);
	}

	public PomManager() {

		// TODO Auto-generated constructor stub
	}

	public Login_Page login() {
		Lp = new Login_Page(driver);

		return Lp;
	}

	public Search_Hotel getSearch_Hotel() {

		sh = new Search_Hotel(driver);
		return sh;
	}

	public Select_Hotel getselect_hotel() {
		s = new Select_Hotel(driver);
		return s;
	}

	public Book_Hotel getbook_hotel() {
		bh = new Book_Hotel(driver);
		return bh;
	}

	public Book_Confirmation getbook_confirmation() {
		bc = new Book_Confirmation(driver);
		return bc;
	}

	public Booked_Itinerary booked_itinerary() {
		b = new Booked_Itinerary(driver);
		return b;
	}

}

package com.adactin.pomclass;

import org.helper.File_Reader_Manager;
import org.openqa.selenium.WebDriver;
import org.pom.sdp.PomManager;

import com.Adactin_Pjt.Baseclass;

public class Maven_Project extends Baseclass {
	public static WebDriver driver = browser("chrome");
	public static PomManager pom = new PomManager(driver);

	public static void main(String[] args) throws Throwable {

		geturl("https://adactinhotelapp.com/");

		String username = File_Reader_Manager.filereader().getconfigure().getusername();
		inputValue(pom.login().getusename(), username);

		String password = File_Reader_Manager.filereader().getconfigure().getpassword();
		inputValue(pom.login().getPassword(), password);

		clickonevent(pom.login().getLogin());

		String location = File_Reader_Manager.filereader().getconfigure().getlocation();
		inputValue(pom.getSearch_Hotel().getLocation(), location);

		String hotel = File_Reader_Manager.filereader().getconfigure().gethotel();
		inputValue(pom.getSearch_Hotel().getHotels(), hotel);

		String room_type = File_Reader_Manager.filereader().getconfigure().getroom_type();
		inputValue(pom.getSearch_Hotel().getRoom_type(), room_type);

		String Norooms = File_Reader_Manager.filereader().getconfigure().getnumofrooms();
		inputValue(pom.getSearch_Hotel().getNumber_of_rooms(), Norooms);

		String checkin = File_Reader_Manager.filereader().getconfigure().getdate_checkin();
		inputValue(pom.getSearch_Hotel().getDatein(), checkin);

		String checkout = File_Reader_Manager.filereader().getconfigure().getdatecheckout();
		inputValue(pom.getSearch_Hotel().getDateout(), checkout);

		String adult = File_Reader_Manager.filereader().getconfigure().getadults();
		inputValue(pom.getSearch_Hotel().getAdult_room(), adult);

		String children = File_Reader_Manager.filereader().getconfigure().getchildren();
		inputValue(pom.getSearch_Hotel().getChild_room(), children);

		clickonevent(pom.getSearch_Hotel().getSearch());

		clickonevent(pom.getselect_hotel().getCheckbox());

		clickonevent(pom.getselect_hotel().getcontinu());

		String firstname = File_Reader_Manager.filereader().getconfigure().getFirstname();

		inputValue(pom.getbook_hotel().getFirstname(), firstname);

		String lastname = File_Reader_Manager.filereader().getconfigure().getLastname();
		inputValue(pom.getbook_hotel().getLastname(), lastname);

		String address = File_Reader_Manager.filereader().getconfigure().getaddress();
		inputValue(pom.getbook_hotel().getAddress(), address);

		String creditcard = File_Reader_Manager.filereader().getconfigure().getcreditcard();
		inputValue(pom.getbook_hotel().getCc_num(), creditcard);

		String cardtype = File_Reader_Manager.filereader().getconfigure().getcardtype();
		inputValue(pom.getbook_hotel().getCredit_type(), cardtype);

		String month = File_Reader_Manager.filereader().getconfigure().getexpirymonth();
		inputValue(pom.getbook_hotel().getMonth(), month);

		String year = File_Reader_Manager.filereader().getconfigure().getexpiryyear();
		inputValue(pom.getbook_hotel().getYear(), year);
				
		String cvv = File_Reader_Manager.filereader().getconfigure().getcvv();
		inputValue(pom.getbook_hotel().getCvv_num(), cvv);

		clickonevent(pom.getbook_hotel().book_now());
		
		
		clickonevent(pom.getbook_confirmation().getItinerary());
//		
		clickonevent(pom.booked_itinerary().getCheck());
//		
		clickonevent(pom.booked_itinerary().getLogout());
	}

}

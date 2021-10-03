package org.helper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {

	public static Properties p;

	public  Configuration_Reader() throws Throwable {

		File f = new File("E:\\selinium-workspace\\Adactin_Pjt\\src\\main\\java\\org\\properties\\configuration.properties");

		FileInputStream fis = new FileInputStream(f);
		p = new Properties();
		p.load(fis);
	}

	public String browser()
	{
		String browser=p.getProperty("browser");
		return browser;
	}
	public String geturl() {
		String url = p.getProperty("url");
		return url;

	}

	public String getusername() {

		String username = p.getProperty("username");
		return username;
	}

	public String getpassword() {

		String password = p.getProperty("password");
		return password;
	}

	public String getlocation() {
		String location = p.getProperty("Location");
		return location;
	}

	public String gethotel() {

		String hotel = p.getProperty("Hotel");
		return hotel;

	}

	public String getroom_type() {
		String room_type = p.getProperty("Room-Type");
		return room_type;
	}

	public String getnumofrooms() {

		String Nrooms = p.getProperty("number_of_Rooms");
		return Nrooms;
	}
	public String getdate_checkin() {

		String date_checkin = p.getProperty("date_checkin");
		return date_checkin;
	}
	public String getdatecheckout() {

		String date_checkout = p.getProperty("date_checkout");
		return date_checkout;
	}

	public String getadults() {
		String adult = p.getProperty("adults");
		return adult;
	}
	public String getchildren() {
		String child= p.getProperty("children");
        return child;		
	}
	public String getFirstname() {
		String fname = p.getProperty("first_name");
		return fname;
	}
	public String getLastname() {
		String lname = p.getProperty("last_name");
		return lname;
	}
	public String getaddress() {
		String addr = p.getProperty("address");
		return addr;
	}

	public String getcreditcard() {
		String credit = p.getProperty("credit_card");
		return credit;
	}

	public String getcardtype() {
		String c_type = p.getProperty("card_type");
		return c_type;
	}

	public String getexpirymonth() {
		String month = p.getProperty("expiry_month");
		return month;
	}

	public String getexpiryyear() {
		String year = p.getProperty("expiry_year");
		return year;
	}

	public String getcvv() {
		String cvv = p.getProperty("cvv_no");
		return cvv;
	}

}

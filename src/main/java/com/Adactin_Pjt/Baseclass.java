package com.Adactin_Pjt;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.Alert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

public class Baseclass {
	public static WebDriver driver;

//	 browser launch

	public static WebDriver browser(String type) {
		if (type.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "\\driver_new\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (type.equalsIgnoreCase("firefox")) {

			System.setProperty("webdriver.gecko.driver",
					System.getProperty("use.dir") + "\\driver_new\\geckodriver.exe");
			driver = new FirefoxDriver();

		} else {

			System.out.println("wrong driver");

		}
		driver.manage().window().maximize();
		return driver;
	}

//	geturl

	public static void geturl(String url) {
		driver.get(url);
	}
//	implicit wait

	public static void waittime(int i) {
		driver.manage().timeouts().implicitlyWait(i, TimeUnit.SECONDS);
	}

//	sleep

	public static void pagesleep(int i) throws InterruptedException {
		Thread.sleep(i);
	}
//	sendkeys

	public static void inputValue(WebElement element, String value) {
		
		element.sendKeys(value);
	}

// clear

	public static void clearvalues(WebElement getquantity) {

		getquantity.clear();
	}

// mouse click(actions)

	public static void MoveMouseAction(WebElement element, String type) {
		Actions a = new Actions(driver);

		if (type.equalsIgnoreCase("click")) {
			a.click().build().perform();
		} else if (type.equalsIgnoreCase("move")) {
			a.moveToElement(element).perform();

		} else if (type.equalsIgnoreCase("rightclick")) {
			a.contextClick(element).perform();

		} else if (type.equalsIgnoreCase("doubleclick")) {
			a.doubleClick(element).perform();
		}
	}

//	simple click

	public static void clickonevent(WebElement getsubmit) {

		getsubmit.click();
	}

//	drop down

	public static void dropdown(WebElement element, String type, String Value) {

		Select s = new Select(element);

		if (type.equalsIgnoreCase("index")) {

			int val = Integer.parseInt(Value);
			s.selectByIndex(val);

		} else if (type.equalsIgnoreCase("value")) {

			s.selectByValue(Value);
		} else if (type.equalsIgnoreCase("visible text")) {

			s.selectByVisibleText(Value);
		}

	}

//  take screenshot

	public static void takescreen(String path) throws IOException {

		TakesScreenshot ss = (TakesScreenshot) driver;
		File src = ss.getScreenshotAs(OutputType.FILE);
		File dec = new File(path);
		FileUtils.copyFile(src, dec);
	}

//	alert

	public static void alert(String msg) {

		Alert a = driver.switchTo().alert();

		if (msg.equalsIgnoreCase("accept")) {
			a.accept();
		} else if (msg.equalsIgnoreCase("dismiss")) {
			a.dismiss();
		}
	}

//	 robot
	public static void robot(WebElement element, String type) throws AWTException {

		Robot r = new Robot();

		if (type.equalsIgnoreCase("up")) {
			r.keyPress(KeyEvent.VK_UP);
			r.keyRelease(KeyEvent.VK_UP);
		}
		if (type.equalsIgnoreCase("down")) {
			r.keyPress(KeyEvent.VK_DOWN);
			r.keyRelease(KeyEvent.VK_DOWN);
		}
		if (type.equalsIgnoreCase("left")) {
			r.keyPress(KeyEvent.VK_LEFT);
			r.keyRelease(KeyEvent.VK_LEFT);
		}
		if (type.equalsIgnoreCase("right")) {
			r.keyPress(KeyEvent.VK_RIGHT);
			r.keyRelease(KeyEvent.VK_RIGHT);
		}

	}

//  Java script executor

	public static void scroll(String type) {
		JavascriptExecutor js = (JavascriptExecutor) driver;
		if (type.equalsIgnoreCase("up")) {
			js.executeScript("window.scrollBy(0, -500);");
		} else if (type.equalsIgnoreCase("down")) {
			js.executeScript("window.scrollBy(0, 1000);");
		}
	}

// sheet methods
	public static String value;

	public static String particular_data(String path, String sheet, int row, int cell) throws Throwable {

		File f = new File(path);
		FileInputStream input = new FileInputStream(f);
		Workbook w = new XSSFWorkbook(input);
		Sheet s = w.getSheet(sheet);
		Row r = s.getRow(row);
		Cell c = r.getCell(cell);
		CellType cellType = c.getCellType();
		if(cellType.equals(CellType.STRING)) {
			value = c.getStringCellValue();
		}
		else if(cellType.equals(CellType.NUMERIC)){
			double numeric = c.getNumericCellValue();
			
			value = Double.toString(numeric);
			
		}
		
		return value;
	}

}

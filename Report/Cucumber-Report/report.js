$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Adctin hotel booking page",
  "description": "",
  "id": "adctin-hotel-booking-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "adctin-hotel-booking-page;login-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Enter the UserName In UserName Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter the Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click On The Login button and it navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Launch_The_Application()"
});
formatter.result({
  "duration": 5103703100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_UserName_In_UserName_Field()"
});
formatter.result({
  "duration": 550334200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Password_In_Password_Field()"
});
formatter.result({
  "duration": 265387700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_On_The_Login_button_and_it_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2923434800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search Hotel Page",
  "description": "",
  "id": "adctin-hotel-booking-page;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User Select the Location",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User Select the Hotels",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User Select the Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User Select the Number of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Enter the  Checkin Date",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Enter the Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Selects the adults per Room",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Selects the childrens Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Click on the search button And it Navigates the Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Select_the_Location()"
});
formatter.result({
  "duration": 265939300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_the_Hotels()"
});
formatter.result({
  "duration": 370578800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_the_Room_Type()"
});
formatter.result({
  "duration": 224303500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Select_the_Number_of_Rooms()"
});
formatter.result({
  "duration": 177083600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Checkin_Date()"
});
formatter.result({
  "duration": 241506600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Checkout_Date()"
});
formatter.result({
  "duration": 257784800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Selects_the_adults_per_Room()"
});
formatter.result({
  "duration": 193901500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Selects_the_childrens_Per_Room()"
});
formatter.result({
  "duration": 211201900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Def.user_Click_on_the_search_button_And_it_Navigates_the_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1294004700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Select Hotel Page",
  "description": "",
  "id": "adctin-hotel-booking-page;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User Click the Radio Button to Select  Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "User Click the Continue Button And it Navigates To The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Click_the_Radio_Button_to_Select_Hotel()"
});
formatter.result({
  "duration": 149651200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027radiobutton_2\u0027]\"}\n  (Session info: chrome\u003d94.0.4606.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.0\u0027, revision: \u0027924c4067df\u0027, time: \u00272017-11-30T11:20:39.408Z\u0027\nSystem info: host: \u0027DESKTOP-NOOM76U\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.41 (333e85df3c9b6..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59354}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 98dbe858ffbc9ae5db450ba4ac72f862\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027radiobutton_2\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.Adactin_Pjt.Baseclass.clickonevent(Baseclass.java:106)\r\n\tat com.cucumber.stepdefinition.Step_Def.user_Click_the_Radio_Button_to_Select_Hotel(Step_Def.java:107)\r\n\tat ✽.When User Click the Radio Button to Select  Hotel(src/test/java/com/adactin/feature/Adactin.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Def.user_Click_the_Continue_Button_And_it_Navigates_To_The_Book_Hotel_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Book A Hotel",
  "description": "",
  "id": "adctin-hotel-booking-page;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User Enter the Firstname in Firstname field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "User Enter the Lastname in LastName field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Enter the Credit Card No in Creit Card No field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Credit Card Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Select the Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Select the Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter the Cvv Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Click onn the BookNow Button and it Navigates the Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Firstname_in_Firstname_field()"
});
formatter.result({
  "duration": 68727100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027first_name\u0027]\"}\n  (Session info: chrome\u003d94.0.4606.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.0\u0027, revision: \u0027924c4067df\u0027, time: \u00272017-11-30T11:20:39.408Z\u0027\nSystem info: host: \u0027DESKTOP-NOOM76U\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.41 (333e85df3c9b6..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59354}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 98dbe858ffbc9ae5db450ba4ac72f862\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027first_name\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.Adactin_Pjt.Baseclass.inputValue(Baseclass.java:74)\r\n\tat com.cucumber.stepdefinition.Step_Def.user_Enter_the_Firstname_in_Firstname_field(Step_Def.java:121)\r\n\tat ✽.When User Enter the Firstname in Firstname field(src/test/java/com/adactin/feature/Adactin.feature:30)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Lastname_in_LastName_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Credit_Card_No_in_Creit_Card_No_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Credit_Card_Card_Type()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Select_the_Expiry_Month()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Select_the_Expiry_Year()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Enter_the_Cvv_Number()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Step_Def.user_Click_onn_the_BookNow_Button_and_it_Navigates_the_Booking_Confirmation_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Booking Confirmation Page",
  "description": "",
  "id": "adctin-hotel-booking-page;booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 39,
      "name": "@regressiontest"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "User Click on the MyItinerary Button for Cancel the Selection Hotel",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "user Click the Logout Button for Exit the Page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Def.user_Click_on_the_MyItinerary_Button_for_Cancel_the_Selection_Hotel()"
});
formatter.result({
  "duration": 53631600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//input[@type\u003d\u0027button\u0027])[2]\"}\n  (Session info: chrome\u003d94.0.4606.61)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.8.0\u0027, revision: \u0027924c4067df\u0027, time: \u00272017-11-30T11:20:39.408Z\u0027\nSystem info: host: \u0027DESKTOP-NOOM76U\u0027, ip: \u0027192.168.43.224\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.41 (333e85df3c9b6..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:59354}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 98dbe858ffbc9ae5db450ba4ac72f862\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027button\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.Adactin_Pjt.Baseclass.clickonevent(Baseclass.java:106)\r\n\tat com.cucumber.stepdefinition.Step_Def.user_Click_on_the_MyItinerary_Button_for_Cancel_the_Selection_Hotel(Step_Def.java:174)\r\n\tat ✽.Then User Click on the MyItinerary Button for Cancel the Selection Hotel(src/test/java/com/adactin/feature/Adactin.feature:42)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Step_Def.user_Click_the_Logout_Button_for_Exit_the_Page()"
});
formatter.result({
  "status": "skipped"
});
});
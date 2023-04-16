package utils;
 import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
public class ListenerHelper {
	private static WebDriver driver;
	
  @Before public void beforeSetup() {
	  
  }

  @After public void afterTest() {
	  driver.close();
  }
}

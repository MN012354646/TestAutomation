 package actions;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
public class BrowserActions {
	
private static WebDriver driver;
Properties obj;
FileInputStream objfile; 
Map<String, String> commLocaters = new HashMap<String, String>();
	
 	 public void clickButtonByTextContains(String text) throws IOException {
   		  driver.findElement(By.xpath(getObjects().get("containsText").replace("%s", text.toString()))).click();
 	 }

 	public void setTextByTextContains(String text, String value) throws IOException {
   		driver.findElement(By.xpath(getObjects().get("containsId").replace("%s", text.toString()))).sendKeys(value);
 	 }
 
 	
 	public Boolean isDisplaytByTextContains(String text) throws IOException {
		Boolean display = false;
		display = driver.findElement(By.xpath(getObjects().get("containsText").replace("%s",text.toString()))).isDisplayed();
	return display;
	 }
 	
	public Boolean isDisplaytByTextContainsDatafile(String text) throws IOException {
 		Boolean display = false;
 		System.out.print(By.xpath(getObjects().get("containsText").replace("%s","'"+text+"'")));
 		display = driver.findElement(By.xpath(getObjects().get("containsText").replace("%s","'"+text+"'"))).isDisplayed();
		return display;
 	 }
 	public void openBrowser() throws IOException {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"\\driver\\chromedriver.exe");
		driver = new ChromeDriver(); 
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.get("https://reqres.in/.");
	}
	public Map<String, String> getObjects() throws IOException {
		objfile = new FileInputStream(System.getProperty("user.dir")+"\\Objects\\CommenObjects.properties");
		obj = new Properties();
		obj.load(objfile);
		for (Object key: obj.keySet()) {
            commLocaters.put(key.toString(), obj.getProperty(key.toString()));
        }
		return commLocaters;
	}
 
    public static void main(String[] args) throws InterruptedException, IOException {
		BrowserActions browserActions=new BrowserActions();
		browserActions.openBrowser();
 		}
}

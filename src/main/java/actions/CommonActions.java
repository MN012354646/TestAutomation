package actions;

import java.io.IOException;

import org.openqa.selenium.By;


public class CommonActions {
	BrowserActions actions=new BrowserActions();
 	public void clickButtonByTextContains(String text) throws IOException {  
 		actions.clickButtonByTextContains(text);
 	 }
 	
 	public void setText(String text, String value) throws IOException {  
 		actions.setTextByTextContains(value, text);
 	 }
 	public Boolean homePageLabelsVerifications(String text) throws IOException {  
 		return actions.isDisplaytByTextContains(text);
 	 }
}

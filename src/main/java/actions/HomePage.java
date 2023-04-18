package actions;

import java.io.IOException;

public class HomePage {
	BrowserActions actions=new BrowserActions();
 	public Boolean homePageLabelsVerifications(String text) throws IOException {  
 		return actions.isDisplaytByTextContainsDatafile(text);
 	 }
}

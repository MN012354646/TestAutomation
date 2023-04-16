package steps;
import java.io.IOException;
import actions.CommonActions;
import actions.BrowserActions;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import utils.DataFile;

public class CommenSteps {

	CommonActions actions=new CommonActions();
	BrowserActions open =new BrowserActions();
	DataFile file=new DataFile();
	@Given("member is on home page")
    public void login() throws IOException {
		open.openBrowser();
    }
	@And("navigated to (.*) page successfully")
    public void homePage(String user) {
		
    }	
	@And("enter (.*) into (.*) textbox")
    public void enterText(String value, String text) throws IOException {
		actions.setText(value, text);
    }	
	
	@And("click on (.*) button")
    public void clickButton(String text) throws IOException {
		actions.clickButtonByTextContains(text);
    }
	@And("click on (.*) link")
    public void clickLink(String text) throws IOException {
		actions.clickButtonByTextContains(text);
    }
	@And("(.*) text is displayed on the page")
    public void isTextDisplayed(String text) {
 		 
    }		
}

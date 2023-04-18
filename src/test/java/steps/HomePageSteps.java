package steps;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import actions.HomePage;
import cucumber.api.java.en.And;
import utils.DataFile;

public class HomePageSteps {
	DataFile file=new DataFile();
	HomePage homePage=new HomePage();
	List<String> list=new ArrayList<String>();
	
	@And("home page label verification")
    public void labels() throws IOException {
		list=file.dataFile();
		String text;
		for(int i=1; i<list.size();i++) {
			text = list.get(i);
		    System.out.println(homePage.homePageLabelsVerifications(text));
		}
		list.clear();
    }
}

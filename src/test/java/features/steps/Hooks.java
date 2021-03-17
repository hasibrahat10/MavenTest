package features.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import pages.BasePage;

public class Hooks extends BasePage {
    @Before
    public void setUP() {
        setDriver();
    }

    @After
    public void tearDown() {
        closeBrowser();
    }

}

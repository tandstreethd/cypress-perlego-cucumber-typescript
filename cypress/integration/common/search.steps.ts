import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { PerlegoPO } from "../page-objects/perlego.po";


cy.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  
  When("the user navigates to the search page an account", () => {
    PerlegoPO.search().open();
  });


  When('the user searches for {string}', (searchTerm) => {
    PerlegoPO.search().navBar().enterSearch(searchTerm);
  
  })

  When('the user randomly selects a main filter', () => {
    cy.wait(2000);
    PerlegoPO.search().searchFilter().randomSelectMainFilterOption();
  
  })

  When('the user randomly selects a sub filter', () => {
    cy.wait(2000);
    PerlegoPO.search().searchFilter().randomSelectSubFilter();
  
  })

  Then('the user should see at least 5 pages of search results', () => {
    cy.wait(2000);
    PerlegoPO.search().searchResult().checkSearchResultCount(5);
  })
  

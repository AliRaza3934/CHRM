import {Given,When,Then, And} from "cypress-cucumber-preprocessor/steps";

Given("open init login page",()=>{
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")})

When("provide a valide user name and password",()=>{
 cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(2) > div > div:nth-child(2) > input').type('Admin')
 cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div:nth-child(3) > div > div:nth-child(2) > input').type('admin123')

})

Then("click on submit button",()=>{
    cy.get('#app > div.orangehrm-login-layout > div > div.orangehrm-login-container > div > div.orangehrm-login-slot > div.orangehrm-login-form > form > div.oxd-form-actions.orangehrm-login-action > button').click()
})

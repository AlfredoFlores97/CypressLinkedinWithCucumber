import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage"

let loginPage = new LoginPage();

Given("I type standard_user on the Username credential input", () => {
  loginPage.typeStandardUser();
});

Given("I type Locked_Out_User on the Username credential input", () => {
  loginPage.typeLockedOutUser();
});

Given("I type secret_sauce on the password credential input", () => {
  loginPage.typeSecretSaucePassword();
});

Given("I type {string} on the Username credential input", (userName) => {
  loginPage.typeUserName(userName);
});

Given("I type {string} on the password credential input", (password) => {
  loginPage.typePassword(password);
});

Given("I type on the credential input {string} the text value {string}", (input, text) => {
  loginPage.typeOnInputByDataTest(input, text);
});
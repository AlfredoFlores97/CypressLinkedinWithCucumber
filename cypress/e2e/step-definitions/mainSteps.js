import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage";

const mainPage = new MainPage();

Given("I check modal consent settigns user and close it", () => {
    mainPage.checkConsentSettings();
});

Given("I check modal app and close it", () => {
    mainPage.closeModalApp();
})

Given("I type on the input with {string} {string} the text value {string}", (att, value, text) => {
    mainPage.typeOnInputByAtt(att, value, text);
});

Given("I check the input with {string} {string} have {string} state", (att, value, checkState) => {
    mainPage.checkInputByAtt(att, value, checkState);
});

Given("I click on the input with {string} {string}", (att, value) => {
    mainPage.clickOnInputByAtt(att, value);
});

Given("I check button with href {string} exist on page and click it", (name) => {
    mainPage.checkButtonExistAndClick(name);
});

Given("I click in button with id {string}", (id) => {
    mainPage.clickButtonWithId(id);
});

Given("I chek input with id {string} exist in page", (id) => {
    mainPage.checkInputByIdExist(id);
});

Given("I chek input with id {string} not exist in page", (id) => {
    mainPage.checkInputByIdNotExist(id);
});

Given("I chek input with id {string} have {string} atribute", (id, atribute) => {
    mainPage.checkInputByIdHaveState(id, atribute);
});

Given("I enter on the input with {string} {string}", (att, value) => {
    mainPage.enterOnInputByAtt(att, value);
});
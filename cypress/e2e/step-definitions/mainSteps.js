import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { MainPage } from "../pages/mainPage";

const mainPage = new MainPage();

Given("I check modal consent settigns user and close it", () => {
    mainPage.checkConsentSettings();
});

Given("I check modal app and close it", () => {
    mainPage.closeModalApp();
})

Given("I type on the input with id {string} the text value {string}", (input, text) => {
    mainPage.typeOnInputById(input, text);
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
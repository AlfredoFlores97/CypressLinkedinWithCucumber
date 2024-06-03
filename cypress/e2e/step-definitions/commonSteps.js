import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { CommonPage } from "../pages/commonPage";

let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
    commonPage.visitLink(url);
});

Given("I check url equals {string}", (url) => {
    commonPage.checkUrl(url);
});

Given("I catch uncaught exception", () => {
    commonPage.catchUncaughtException();
});

Given("I check text {string} exist in page", (text) => {
    commonPage.checkTextExistInDom(text);
});

Given("I check text {string} not exist in page", (text) => {
    commonPage.checkTextNotExistInDom(text);
});
import { CommonPage } from "./commonPage";
export class MainPage extends CommonPage {

    checkConsentSettings() {
        cy.get('.artdeco-global-alert').should('be.exist');
        cy.get('[action-type="ACCEPT"]').should('be.exist');
        cy.get('[action-type="DENY"]').should('be.exist');
        cy.get('[action-type="DENY"]').click();
        cy.get('.artdeco-global-alert').should('not.be.exist');
        cy.get('[action-type="DENY"]').should('not.be.exist');
        cy.get('[action-type="ACCEPT"]').should('not.be.exist');
    }

    closeModalApp() {
        cy.get('.cta-modal').should('be.exist').and('be.visible');
        cy.get('.cta-modal__dismiss-btn').should('be.exist').and('be.visible').click();
        cy.get('.cta-modal').should('be.exist').and('not.be.visible');
        cy.get('.cta-modal__dismiss-btn').should('be.exist').and('not.be.visible');
    }

    typeOnInputByAtt(att, value, text) {
        const textType = Cypress.env(text) ? Cypress.env(text) : text
        cy.get(`[${att}=${value}]`).should('be.empty').type(textType).should('have.value', textType);
    }
    
    checkInputByAtt(att, value, stateCheck) {
        cy.get(`[${att}=${value}]`).should(stateCheck);
    }

    clickOnInputByAtt(att, value) {
        cy.get(`[${att}=${value}]`).click();
    }

    clickButtonWithId(id) {
        cy.get(`[data-id=${id}]`).should('be.exist').click();
    }
    
    checkButtonExistAndClick(href) {
        cy.get(`a[href="${href}"]`).should('be.visible').click();
    }

    checkInputByIdExist(id) {
        cy.get(`[id=${id}]`).should('be.exist');
    }
    
    checkInputByIdNotExist(id) {
        cy.get(`[id=${id}]`).should('not.be.exist');
    }

    checkInputByIdHaveState(id, state) {
        cy.get(`[id=${id}]`).should(state);
    }
    
    enterOnInputByAtt(att, value) {
        cy.get(`[${att}=${value}]`).type("{enter}");
    }
}
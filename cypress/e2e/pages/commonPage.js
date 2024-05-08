export class CommonPage {

    visitLink(url) {
        cy.visit(url);
    }

    checkUrl(url) {
        cy.url().should('eq', url)
    }

    catchUncaughtException() {
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    }

    checkTextNotExistInDom(text) {
        cy.contains(text).should('not.exist');
    }

    checkTextExistInDom(text) {
        cy.contains(text).should('exist').and('be.visible');
    }
}
    
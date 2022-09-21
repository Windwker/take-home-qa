export class BasePage {
  constructor () {
  }

  checkCurrentUrlIsTheExpected (url: string): void {
    cy.url().should('eq', url)
  }

  checkPageWasFullyLoaded (): void { // the cy.visit() already performs this action. It ensure the onLoad event is triggered before heading to next test step
    cy.get('.mi-div-menu-nav').should('be.visible')
  }
}

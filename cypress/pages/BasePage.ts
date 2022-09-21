export class BasePage {
  constructor () {
  }

  checkCurrentUrlIsTheExpected (url: string): void {
    cy.url().should('eq', url)
  }

  checkPageWasFullyLoaded (): void {
    // TODO: WIP
  }
}

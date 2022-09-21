export class BasePage {
    constructor() {
    }

    checkCurrentUrlIsTheExpected(url: string) {
        cy.url().should("eq",url)
    }

    checkPageWasFullyLoaded() {
        //TODO: WIP
    }
}


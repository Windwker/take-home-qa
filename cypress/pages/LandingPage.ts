import {BasePage} from "./BasePage";

export class LandingPage extends BasePage {
    constructor() {
        super();
    }
    getMeThere() {
        cy.visit('');
    }

    scrollToBottom() {
        cy.get(".mi-sections.footer").scrollIntoView();
    }

    closeTheBanner() {
        cy.get(".ico-close").click();
    }

    expandSection(section: any) {
        const possibleOptions: any = {
            Anxiety: "Anxiety",
        }
        if (!possibleOptions[section]) {
            throw new Error("Invalid section!");
        }
        cy.get("div.faq1_component").contains(possibleOptions[section]).click();
    }

    isTheBannerClosed() {
        cy.get('.ico-close').should('not.be.visible')
    }

    checkDiagnosisDescription(elements : string[]) {
        const options = elements[0].split(", ")
        options.forEach(el=> cy.get('.mi-p-22.small-margin')
            .contains(el).should('be.visible'))
    }

    goToLocationsSection() {
        cy.get(".w-nav-link").contains("Locations").click();
    }
}
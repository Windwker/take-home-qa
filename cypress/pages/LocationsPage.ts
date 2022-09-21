import {BasePage} from "./BasePage";

export class LocationsPage extends BasePage {
    constructor() {
        super();
    }

    sortLocations(value: string) {
        cy.get('#field').select(value);
    }

    selectLocation(location: string) {
        cy.get(".caps").contains(location).click();
    }


}
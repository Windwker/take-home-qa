import { BasePage } from './BasePage'

export class LocationsPage extends BasePage {
  constructor () {
    super()
  }

  sortLocations (value: string): void {
    cy.get('#field').select(value)
  }

  selectLocation (location: string): void {
    cy.get('.caps').contains(location).click()
  }
}

import { BasePage } from './BasePage'

export class LandingPage extends BasePage {
  constructor () {
    super()
  }

  getMeThere (): void {
    cy.visit('')
  }

  scrollToBottom (): void {
    cy.get('.mi-sections.footer').scrollIntoView()
  }

  closeTheBanner (): void {
    cy.get('.ico-close').click()
  }

  expandSection (section: any): void {
    const possibleOptions: any = {
      Anxiety: 'Anxiety'
    }
    if (!(possibleOptions[section])) {
      throw new Error('Invalid section!')
    }
    cy.get('div.faq1_component').contains(possibleOptions[section]).click()
  }

  isTheBannerClosed (): void {
    cy.get('.ico-close').should('not.be.visible')
  }

  checkDiagnosisDescription (elements: string[]): void {
    const options = elements[0].split(', ')
    options.forEach(el => cy.get('.mi-p-22.small-margin')
      .contains(el).should('be.visible'))
  }

  goToLocationsSection (): void {
    cy.get('.w-nav-link').contains('Locations').click()
  }
}

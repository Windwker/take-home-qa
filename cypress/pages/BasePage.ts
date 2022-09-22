export class BasePage {
  device: any = undefined
  constructor (device: string) {
    console.log(device)
    const devices: any = {
      mobile: {
        width: 390,
        height: 844
      },
      desktop: {
        width: 1920,
        height: 1080
      }
    }

    this.device = device
    if (!devices[device]) {
      throw new Error('Invalid option!')
    }
    cy.viewport(devices[device].width, devices[device].height)
  }

  checkCurrentUrlIsTheExpected (url: string): void {
    cy.url().should('eq', url)
  }

  getDevice (): string {
    return this.device
  }
}

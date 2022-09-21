import { DataTable, Given, Then, When } from '@badeball/cypress-cucumber-preprocessor'
import { LocationsPage } from '../../pages/LocationsPage'
import { LandingPage } from '../../pages/LandingPage'

let landingPage: LandingPage
let locationsPage: LocationsPage

Given(/^the user attempts to access to the Minded landing page$/, function () {
  landingPage = new LandingPage()
  landingPage.getMeThere()
})

When(/^the user scrolls to the bottom$/, function () {
  landingPage.scrollToBottom()
})
When(/^the user closes the banner$/, function () {
  landingPage.closeTheBanner()
})
Then(/^the user should see that the banner is closed$/, function () {
  landingPage.isTheBannerClosed()
})

Then(/^the user should see the following description$/, function (datatable: DataTable) {
  const options = datatable.raw()[1]
  landingPage.checkDiagnosisDescription(options)
})
When(/^the user expands (.*) section$/, function (section: string) {
  landingPage.expandSection(section)
})
When(/^the user access to the location section$/, function () {
  landingPage.goToLocationsSection()
  locationsPage = new LocationsPage()
})
When(/^the user applies the order (.*) to the location list$/, function (order: string) {
  locationsPage.sortLocations(order)
})
When(/^the user selects the location (.*)$/, function (location: string) {
  locationsPage.selectLocation(location)
})
Then(/^the user is redirected to the selected location page (.*)$/, function (url: string) {
  locationsPage.checkCurrentUrlIsTheExpected(url)
})
Then(/^the user should see that the Minded landing page loaded successfully$/, function () {
  landingPage.checkPageWasFullyLoaded()
})

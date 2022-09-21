Feature: Take home QA Interview Tests

  @production
  Scenario: Verify the user can access to Minded landing page
    Given the user attempts to access to the Minded landing page
    Then the user should see that the Minded landing page loaded successfully

  @development
  Scenario: Verify the user can successfully close the banner
    Given the user attempts to access to the Minded landing page
    When the user scrolls to the bottom
    And the user closes the banner
    Then the user should see that the banner is closed

  @staging
  Scenario Outline: Verify the user can read successfully the diagnosis description
    Given the user attempts to access to the Minded landing page
    When the user expands <section> section
    Then the user should see the following description
      | description   |
      | <description> |

    Examples:
      | section | description                                                                                                 |
      | Anxiety | Generalized anxiety disorder, Panic disorder, Obsessive-compulsive disorder, Post-traumatic stress disorder |

  @development
  Scenario Outline: Verify the user can re-order successfully the state list from current locations section
    Given the user attempts to access to the Minded landing page
    When the user access to the location section
    And the user applies the order <order> to the location list
    And the user selects the location <location>
    Then the user is redirected to the selected location page <url>
    Examples:
      | order      | location | url                                      |
      | Name (Z-A) | Texas    | https://www.tryminded.com/location/texas |


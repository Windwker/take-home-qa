Feature: Take home QA Interview Tests

  @production
  Scenario Outline: Verify the user can access to Minded landing page
    Given the user attempts to access to the Minded landing page using <device>
    Then the user should see that the Minded landing page loaded successfully
    Examples:
      | device  |
      | mobile  |
      | desktop |

  @development
  Scenario Outline: Verify the user can successfully close the banner
    Given the user attempts to access to the Minded landing page using <device>
    When the user scrolls to the bottom
    And the user closes the banner
    Then the user should see that the banner is closed
    Examples:
      | device  |
      | mobile  |
      | desktop |


  @staging
  Scenario Outline: Verify the user can read successfully the diagnosis description
    Given the user attempts to access to the Minded landing page using <device>
    When the user expands <section> section
    Then the user should see the following description
      | description   |
      | <description> |

    Examples:
      | section | description                                                                                                 | device  |
      | Anxiety | Generalized anxiety disorder, Panic disorder, Obsessive-compulsive disorder, Post-traumatic stress disorder | mobile  |
      | Anxiety | Generalized anxiety disorder, Panic disorder, Obsessive-compulsive disorder, Post-traumatic stress disorder | desktop |


  @development
  Scenario Outline: Verify the user can re-order successfully the state list from current locations section
    Given the user attempts to access to the Minded landing page using <device>
    When the user access to the location section
    And the user applies the order <order> to the location list
    And the user selects the location <location>
    Then the user is redirected to the selected location page <url>
    Examples:
      | order      | location | url                                      | device  |
      | Name (Z-A) | Texas    | https://www.tryminded.com/location/texas | mobile  |
      | Name (Z-A) | Texas    | https://www.tryminded.com/location/texas | desktop |


# Nightwatch Testing Suite for Drift Management Platform

Nightwatch test runner and test suite for Drift's Management platform where users manage
their sales/customer success campaigns.

## Installation

1. Install Node.js (https://nodejs.org/en/)

2. Install Nightwatch: `npm install [-g] nightwatch`
  - Add the global flag `-g` to make `nightwatch` runner available globally in your system

3. Set up selenium server: 
  - The selenium server is one of the most common WebDriver implementations. Selenium is a Java application which various testing frameworks, in this case Nightwatch, use to connect to the various browsers. 

  To download Selenium: http://selenium-release.storage.googleapis.com/index.html

  Place in the same directory as nightwatch bin


4. Download Chromedriver:
  - Chromedriver is a standalone server which implements WebDriver that provided the capability to navigate Chromium.

  https://sites.google.com/a/chromium.org/chromedriver/downloads

  Place in the same directory as nightwatch bin and selenium driver

5. If you haven't already, set up a Drift Account (free)
https://app.drift.com/getstarted

## Usage

To run the whole test suite use  command:
`EMAIL="your Drift login email" PASSWORD="your Drift login password" nightwatch tests/testInboxes.js`

To run a single test file use command:
`EMAIL="your Drift login email" PASSWORD="your Drift login password" nightwatch tests/filename.js`

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

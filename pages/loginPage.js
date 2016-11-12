const loginCommands = {
  login(email, pass) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .waitForElementVisible('@loginButton')
      .click('@loginButton');
  }
};

export default {
  url: 'https://start.drift.com',
  commands: [loginCommands],
  elements: {
    emailInput: {
      selector: 'input[type=email]'
    },
    passInput: {
      selector: 'input[type=password]'
    },
    loginButton: {
      selector: 'button[type=submit]'
    }
  }
};

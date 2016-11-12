export default {
  'User Clicks on Dashboard Tabs': (client) => {
    const loginPage = client.page.loginPage();
    const dashboardPage = client.page.dashboardPage();
    const sidebar = dashboardPage.section.sidebar;

    loginPage
      .navigate('https://start.drift.com')
      .login("morales.sua@gmail.com", "driftdrift");

    dashboardPage.expect.section('@sidebar').to.be.visible.before(10000);

    sidebar.click('@dashboardTab');
    client.assert.urlContains('/dashboard');

    sidebar.click('@conversationsTab');
    client.assert.urlContains('/inboxes');

    sidebar.click('@contactsTab');
    client.assert.urlContains('/users');

    sidebar.click('@campaignsTab');
    client.assert.urlContains('/campaigns');

    //slideout sidebar
    sidebar.click('@dashboardTab');
    client.assert.urlContains('/dashboard');

    sidebar.click('@settingsTab');
    client.assert.urlContains('/settings');
    // clear settings screen
    client.expect.element('#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div.CloseButton---1CD0A').to.be.visible;
    client.click('#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div.CloseButton---1CD0A');

    sidebar.expect.element('@upgradeButtonContainer').to.be.visible;
    sidebar.expect.element('@agentStatusContainer').to.be.visible;

    sidebar.click('@agentStatusContainer');
    client.expect.element('@agentStatusDropdown').to.be.visible;


    client.end();
  }
};

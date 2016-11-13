export default {
  before(client) {
    const loginPage = client.page.loginPage();

    loginPage
      .navigate()
      .login(process.env.EMAIL, process.env.PASSWORD)
  },
  after(client) {
    client.end();
  },
  'User Logs in': (client) => {
    const dashboardPage = client.page.dashboardPage();

    dashboardPage.expect.section('@sidebar').to.be.visible;
    dashboardPage.expect.section('@openConversationsCard').to.be.visible;
    dashboardPage.expect.section('@contactsCard').to.be.visible;
    dashboardPage.expect.section('@recentCampaignsCard').to.be.visible;
    dashboardPage.expect.section('@driftWidget').to.be.visible;

  }
};

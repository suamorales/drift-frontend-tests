export default {
  'User Logs in': (client) => {
    const loginPage = client.page.loginPage();
    const dashboardPage = client.page.dashboardPage();

    loginPage
      .navigate('https://start.drift.com')
      .login("morales.sua@gmail.com", "driftdrift");

    dashboardPage.expect.section('@sidebar').to.be.visible;
    dashboardPage.expect.section('@openConversationsCard').to.be.visible;
    dashboardPage.expect.section('@contactsCard').to.be.visible;
    dashboardPage.expect.section('@recentCampaignsCard').to.be.visible;
    dashboardPage.expect.section('@driftWidget').to.be.visible;

    client.end();
  }
};

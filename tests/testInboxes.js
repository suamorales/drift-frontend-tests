export default {
before(client) {
    const loginPage = client.page.loginPage();
    const dashboardPage = client.page.dashboardPage();

    loginPage
      .navigate()
      .login(process.env.EMAIL, process.env.PASSWORD)
    
    dashboardPage.expect.section('@sidebar').to.be.visible;
  },

  after(client) {
    client.end();
  },

  'User Navigates to Inboxe': (client) => {
    const inboxesPage = client.page.inboxesPage();
    inboxesPage.navigate();

    inboxesPage.expect.section('@conversationListWrapper').to.be.visible;
    // inboxesPage.expect.section('@messageSectionWrapper').to.be.visible;
    // inboxesPage.expect.section('@textAreaDropZone').to.be.visible;
    //inboxesPage.expect.section('@textAreaDropZone').to.be.visible;
  }
};

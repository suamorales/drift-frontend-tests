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

  'User Navigates to Inboxes. All sections should be visible': (client) => {
    const inboxesPage = client.page.inboxesPage();
    inboxesPage.navigate();

    inboxesPage.expect.section('@conversationListWrapper').to.be.visible;
    inboxesPage.expect.section('@messageSectionWrapper').to.be.visible;
    inboxesPage.expect.section('@textAreaDropZone').to.be.visible;

    client.setValue('#textAreaComponent', 'Drift_test');
    
    // Add element to inboxesPage.js
    //send button
    client.click('#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.Conversation > div.text-area-drop-zone > div > div.text-area > div.Wrapper---3YQMA.composer-actions.flex-space-between > div:nth-child(2) > div:nth-child(4) > div > div.dsg-Body.color-blue')
    
    // conversationSummary
    inboxesPage.assert.containsText('#conversation-list > div.ConversationListItem.selected.open > div.conversation-summaries > div','Drift_test');
  }
};

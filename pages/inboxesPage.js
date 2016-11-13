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
  url: 'https://app.drift.com/inboxes',
  commands: [loginCommands],
  sections: {
    conversationListWrapper: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD',
      filterContainter: {
        selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD > div.ViewSelectorDropdown---3YSqV > div > span > div',
        filterCount: {
          selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD > div.ViewSelectorDropdown---3YSqV > div > span > div > div.view-count'
        },
        filterTitle: {
          selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD > div.ViewSelectorDropdown---3YSqV > div > span > div > span'
        },
        filterDropdownArrow: {
          selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD > div.ViewSelectorDropdown---3YSqV > div > span > div > i'
        },
        filterMenu: {
          selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.ConversationListWrapper---1FLXD > div.ViewSelectorDropdown---3YSqV > div > div'
        }
      },
      conversationListItem: {
        selector: '#conversation-list > div.ConversationListItem',
        listItemIdentifier: {
          selector: '#conversation-list > div.ConversationListItem.selected.open > div.user-and-timestamp > div.identifier'
        },
        listItemTimeStamp: {
          selector: '#conversation-list > div.ConversationListItem.selected.open > div.user-and-timestamp > div.timestamp'
        },
        listItemTag: {
          selector: '#conversation-list > div.ConversationListItem.selected.open > div.TagList > div'
        }
      }
    },
    messageSectionWrapper: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.Conversation > div.message-section-wrapper'
    },
    textAreaDropZone: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div:nth-child(1) > div > div.Conversation > div.text-area-drop-zone'
    }
  }
};

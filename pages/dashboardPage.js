export default {
  url: 'https://app.drift.com/dashboard',
  commands: [],
  sections: {
    sidebar: {
      selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA',
      elements: {
        driftLogo: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > a'
        },
        driftStatusIcon: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > div > div',
          statusPopover: {
            selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > div > div.Popover---1ZMKr.dsg-Card',
            statusSection: {
              selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > div > div.Popover---1ZMKr.dsg-Card > div'
            },
            manualOfflineSection: {
              selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > div > div.Popover---1ZMKr.dsg-Card > div.section.flex-space-between'
            },
            onCallSection: {
              selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.flex-start > div > div.Popover---1ZMKr.dsg-Card > div:nth-child(3)'
            }
          }
        },
        dashboardTab: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a.Section---GKOMd'
        },
        conversationsTab: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(3)'
        },
        contactsTab: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(4)'
        },
        campaignsTab: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(5)'
        },
        settingsTab: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(6)'
        },
        upgradeButtonContainer: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(8)',
          upgradeButton: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > a:nth-child(8) > div > div'
        },
        agentStatusContainer: {
          selector: '#app > div > div.AppContainer---haZ5V > div.Sidebar---31fWA > div.AgentStatusContainer---1YfM4',
          agentStatusDropdown: {
            selector: 'body > div.tether-element.tether-enabled.tether-element-attached-bottom.tether-element-attached-left.tether-target-attached-bottom.tether-target-attached-right'
          }
        }
      }
    },
    openConversationsCard: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div.Dashboard---XWFFT > div > div:nth-child(1)',
      elements: {
      }
    },
    contactsCard: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div.Dashboard---XWFFT > div > div:nth-child(2)',
      elements: {
      }
    },
    recentCampaignsCard: {
      selector: '#app > div > div.AppContainer---haZ5V > div.App---3HNzd > div.Dashboard---XWFFT > div > div:nth-child(3)',
      elements: {
      }
    },
    driftWidget: {
      selector: '#drift-widget-container',
      elements: {
      }
    }
  }
};

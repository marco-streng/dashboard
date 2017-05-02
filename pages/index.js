import Dashboard from '../components/dashboard'

// Widgets
import DateTime from '../components/widgets/datetime'
import PageSpeedScore from '../components/widgets/psi'
import JiraIssueCount from '../components/widgets/jira-issue-count'
import BitbucketPullrequestsCount from '../components/widgets/bitbucket-pullrequest-count'

// Theme
import lightTheme from '../styles/light-theme'
// import darkTheme from '../styles/dark-theme'

export default () => (
  <Dashboard theme={lightTheme}>
    <DateTime />

    <PageSpeedScore url='https://github.com/' />

    <BitbucketPullrequestsCount
      url='https://api.bitbucket.org/'
    />

    <JiraIssueCount
      title='JIRA Issue Count'
      url='https://crossorigin.me/https://jira.atlassian.com/'
      query='type=Bug AND project="Bitbucket Server" AND resolution=Unresolved ORDER BY priority DESC,created DESC'
    />
  </Dashboard>
)

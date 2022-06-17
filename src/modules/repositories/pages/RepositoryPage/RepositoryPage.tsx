import { Page } from 'modules/layout'
import { OpenIssuesSection } from 'modules/issues'
import { RepositoryInfoSection } from '../../components'

function RepositoryPage() {
  return (
    <Page>
      <RepositoryInfoSection />
      <OpenIssuesSection />
    </Page>
  )
}

export default RepositoryPage

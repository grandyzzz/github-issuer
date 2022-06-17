import { Container, Page, Divider } from 'modules/layout'
import { UserRepositoriesSection } from 'modules/repositories'

import { UsersSection } from '../../components'

function UsersPage() {
  return (
    <Page>
      <UsersSection />
      <Container>
        <Divider />
      </Container>
      <UserRepositoriesSection />
    </Page>
  )
}

export default UsersPage

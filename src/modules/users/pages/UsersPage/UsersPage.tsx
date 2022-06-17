import { Container, Page, Divider } from 'modules/layout'
import { UserRepositoriesSection } from 'modules/repositories'
import { Text } from 'modules/ui'

import { UsersSection } from '../../components'

function UsersPage() {
  return (
    <Page>
      <Text className="mt-5" variant="heading2" color="gray" center>
        Results
      </Text>
      <UsersSection />
      <Container>
        <Divider />
      </Container>
      <UserRepositoriesSection />
    </Page>
  )
}

export default UsersPage

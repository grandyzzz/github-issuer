import { Container, Section } from 'modules/layout'
import { Text } from 'modules/ui'
import UserRepositoriesList from '../UserRepositoriesList'

function UserRepositoriesSection() {
  return (
    <Section>
      <Container>
        <Text variant="heading2">Users Repositories</Text>
        <UserRepositoriesList />
      </Container>
    </Section>
  )
}

export default UserRepositoriesSection

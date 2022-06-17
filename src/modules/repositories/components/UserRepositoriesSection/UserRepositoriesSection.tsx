import { useSelector } from 'react-redux'
import { Container, Section } from 'modules/layout'
import type { RootState } from 'modules/core'
import { Text } from 'modules/ui'
import UserRepositoriesList from '../UserRepositoriesList'

function UserRepositoriesSection() {
  const userLogin = useSelector(
    (state: RootState) => state.users.selectedUser?.login
  )

  if (!userLogin) return null

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

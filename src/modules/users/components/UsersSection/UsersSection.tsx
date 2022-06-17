import { Container, Section } from 'modules/layout'
import { Text } from 'modules/ui'
import { UsersContainer } from '../../layout'
import UsersSlider from '../UsersSlider'
import { useSelector } from 'react-redux'
import type { RootState } from 'modules/core'
import { User, useSearchUsersQuery } from '../../../graphql/codegen'

function UsersSection() {
  const searchValue = useSelector((state: RootState) => state.users.searchValue)
  const { loading, ...result } = useSearchUsersQuery({
    variables: {
      query: 'type:user ' + searchValue,
    },
  })

  const users = (result?.data?.search?.nodes as User[]) || []

  if (users.length === 0 && !loading)
    return (
      <Container>
        <Text variant="heading2" color="gray">
          No users found
        </Text>
      </Container>
    )

  if (users.length === 0) return null

  return (
    <Section>
      <Text className="mt-5" variant="heading2" color="gray" center>
        Results
      </Text>
      <Container>
        <Text variant="heading2">Users</Text>
      </Container>
      <UsersContainer>
        <UsersSlider users={users} />
      </UsersContainer>
    </Section>
  )
}

export default UsersSection

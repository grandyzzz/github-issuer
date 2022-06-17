import { Container, Section } from 'modules/layout'
import { Text } from 'modules/ui'
import { UsersContainer } from '../../layout'
import UsersSlider from '../UsersSlider'

function UsersSection() {
  return (
    <Section>
      <Container>
        <Text variant="heading2">Users</Text>
      </Container>
      <UsersContainer>
        <UsersSlider />
      </UsersContainer>
    </Section>
  )
}

export default UsersSection

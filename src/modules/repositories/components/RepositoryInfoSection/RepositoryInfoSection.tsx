import { Container, Section } from 'modules/layout'
import type { StatItem } from 'modules/ui'
import { StatsText, Text } from 'modules/ui'

const data: StatItem[] = [
  ['Stars', 1527],
  ['Watching', 127],
]

function RepositoryInfoSection() {
  return (
    <Section>
      <Container>
        <div className="w-full flex items-center justify-between">
          <Text variant="heading">Super Secret Repo</Text>
          <StatsText data={data} color="gray" />
        </div>
      </Container>
    </Section>
  )
}

export default RepositoryInfoSection

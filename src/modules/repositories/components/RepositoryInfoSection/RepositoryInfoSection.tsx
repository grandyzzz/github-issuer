import { Container, Section } from 'modules/layout'
import type { StatItem } from 'modules/ui'
import { StatsText, Text } from 'modules/ui'
import { useParams } from 'react-router-dom'
import { Repository, useRepositoryByIdQuery } from 'modules/graphql/codegen'

function RepositoryInfoSection() {
  const { id } = useParams()
  const result = useRepositoryByIdQuery({
    variables: {
      nodeId: id || '',
    },
    skip: !id,
  })

  const repository = result.data?.node as Repository
  const statsData: StatItem[] = [
    ['Stars', repository?.stargazerCount || 0],
    ['Watching', repository?.watchers?.totalCount || 0],
  ]

  return (
    <Section>
      <Container>
        <div className="w-full flex items-center justify-between">
          <Text variant="heading">{repository?.name}</Text>
          <StatsText data={statsData} color="gray" />
        </div>
      </Container>
    </Section>
  )
}

export default RepositoryInfoSection

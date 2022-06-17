import { Link } from 'react-router-dom'
import { StatItem, StatsText, Text } from 'modules/ui'
import type { Repository } from 'modules/graphql/codegen'

interface RepositoryListItemProps {
  className?: string
  repository: Repository
}

function RepositoryListItem({
  repository: { id, name, watchers, stargazerCount },
}: RepositoryListItemProps) {
  const statsData: StatItem[] = [
    ['Stars', stargazerCount],
    ['Watching', watchers.totalCount],
  ]

  return (
    <Link to={`/repositories/${id}`}>
      <article className="w-full h-14 px-5 flex items-center justify-between transition-colors rounded hover:bg-gray-100">
        <Text variant="heading2">{name}</Text>
        <StatsText data={statsData} color="gray" />
      </article>
    </Link>
  )
}

export default RepositoryListItem

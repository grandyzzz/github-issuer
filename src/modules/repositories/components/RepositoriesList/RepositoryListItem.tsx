import { Link } from 'react-router-dom'
import type { Repository } from './RepositoriesList'
import { StatItem, StatsText, Text } from '../../../ui'

interface RepositoryListItemProps {
  className?: string
  repository: Repository
}

function RepositoryListItem({
  repository: { id, title, watchers, stars },
}: RepositoryListItemProps) {
  const statsData: StatItem[] = [
    ['Stars', stars],
    ['Watching', watchers],
  ]

  return (
    <Link to={`/repositories/${id}`}>
      <article className="w-full h-14 px-5 flex items-center justify-between transition-colors rounded hover:bg-gray-100">
        <Text variant="heading2">{title}</Text>
        <StatsText data={statsData} color="gray" />
      </article>
    </Link>
  )
}

export default RepositoryListItem

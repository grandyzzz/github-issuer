import cn from 'classnames'
import RepositoryListItem from './RepositoryListItem'

export interface Repository {
  id: string
  title: string
  stars: number
  watchers: number
}

export interface RepositoriesListProps {
  className?: string
  repositories: Repository[]
}

export function RepositoriesList({
  className,
  repositories,
}: RepositoriesListProps) {
  return (
    <div className={cn(className)}>
      {repositories.map((repository) => (
        <RepositoryListItem key={repository.id} repository={repository} />
      ))}
    </div>
  )
}

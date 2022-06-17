import cn from 'classnames'
import RepositoryListItem from './RepositoryListItem'
import type { Repository } from 'modules/graphql/codegen'

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

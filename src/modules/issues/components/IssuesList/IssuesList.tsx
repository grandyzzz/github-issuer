import cn from 'classnames'
import type { Issue } from 'modules/graphql/codegen'
import IssueListItem from './IssueListItem'

interface IssuesListProps {
  className?: string
  issues: Issue[]
}

export function IssuesList({ className, issues }: IssuesListProps) {
  return (
    <div className={cn(className, 'w-full')}>
      {issues.map((issue) => (
        <IssueListItem key={issue.id} issue={issue} />
      ))}
    </div>
  )
}

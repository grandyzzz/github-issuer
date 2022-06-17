import cn from 'classnames'
import IssueListItem from './IssueListItem'

export interface Issue {
  id: string
  title: string
  metadata: string
}

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

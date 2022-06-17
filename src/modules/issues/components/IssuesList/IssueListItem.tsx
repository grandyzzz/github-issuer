import { Text } from 'modules/ui'
import type { Issue } from './IssuesList'

interface IssueListItemProps {
  issue: Issue
}

const IssueListItem = ({ issue }: IssueListItemProps) => {
  return (
    <article className="w-full py-5 border-b border-solid border-gray-300 first:border-t">
      <Text variant="bodyBold">{issue.title}</Text>
      <Text color="gray">{issue.metadata}</Text>
    </article>
  )
}

export default IssueListItem

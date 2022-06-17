import { Text } from 'modules/ui'
import type { Issue } from 'modules/graphql/codegen'
import { buildDescription } from '../../utils'

interface IssueListItemProps {
  issue: Issue
}

const IssueListItem = ({ issue }: IssueListItemProps) => {
  return (
    <article className="w-full py-5 border-b border-solid border-gray-300 first:border-t">
      <Text variant="bodyBold">{issue.title}</Text>
      <Text color="gray">{buildDescription(issue)}</Text>
    </article>
  )
}

export default IssueListItem

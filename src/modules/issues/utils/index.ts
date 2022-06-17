import type { Issue, User } from 'modules/graphql/codegen'
import { timeAgo } from 'utils'

/** Expected result: #33 opened 14 days ago by Joe Bloggs */
export const buildDescription = (issue: Issue) => {
  const author = issue.author as User
  return `#${issue.number} opened ${timeAgo(issue.createdAt)} by ${
    author?.name || 'unknown'
  }`
}

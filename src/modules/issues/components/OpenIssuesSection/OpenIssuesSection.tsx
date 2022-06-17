import { useModal } from 'hooks'
import { Container, Section } from 'modules/layout'
import { Button, Text } from 'modules/ui'
import { IssuesList } from '../IssuesList'
import CreateIssueModal from '../CreateIssueModal'
import {
  Issue,
  IssueOrderField,
  IssueState,
  OrderDirection,
  Repository,
  useRepositoryIssuesQuery,
} from 'modules/graphql/codegen'
import { useParams } from 'react-router-dom'

function OpenIssuesSection() {
  const { id } = useParams()
  const { isOpened, toggleModal } = useModal()
  const { refetch, loading, ...result } = useRepositoryIssuesQuery({
    variables: {
      nodeId: id || '',
      states: [IssueState.Open],
      orderBy: {
        field: IssueOrderField.CreatedAt,
        direction: OrderDirection.Desc,
      },
    },
    skip: !id,
  })

  const repository = result.data?.node as Repository
  const issues = (repository?.issues?.nodes as Issue[]) || []

  if (issues.length === 0 && !loading)
    return (
      <Container>
        <Text variant="heading2" color="gray">
          No opened issues found
        </Text>
      </Container>
    )

  if (issues.length === 0) return null

  return (
    <Section>
      <Container>
        <div className="w-full flex items-center justify-between">
          <Text variant="heading2">Open Issues</Text>
          <Button
            onClick={toggleModal}
            className="max-w-[200px]"
            size="small"
            fullWidth
          >
            Create Issue
          </Button>
        </div>
        <IssuesList className="mt-5" issues={issues} />
      </Container>
      <CreateIssueModal
        opened={isOpened}
        onClose={toggleModal}
        onCreate={refetch}
      />
    </Section>
  )
}

export default OpenIssuesSection

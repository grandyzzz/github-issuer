import { useModal } from 'hooks'
import { Container, Section } from 'modules/layout'
import { Button, Text } from 'modules/ui'
import { Issue, IssuesList } from '../IssuesList'
import CreateIssueModal from '../CreateIssueModal'

const issues: Issue[] = [
  {
    id: '1',
    title: 'Update Readme.md',
    metadata: '#33 opened 14 days ago by Konstantin Luferenko',
  },
  {
    id: '2',
    title: 'Fix Server.js',
    metadata: '#32 opened 19 days ago by Konstantin Luferenko',
  },
  {
    id: '3',
    title: 'Create Profile View',
    metadata: '#31 opened 20 days ago by Konstantin Luferenko',
  },
]

function OpenIssuesSection() {
  const { isOpened, toggleModal } = useModal()

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
        onCreate={() => {}}
      />
    </Section>
  )
}

export default OpenIssuesSection

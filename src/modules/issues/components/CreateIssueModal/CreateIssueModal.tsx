import { Button, Modal, ModalProps, Text } from 'modules/ui'
import { TextArea, TextField, useForm } from 'modules/form'

interface CreateIssueModalProps extends ModalProps {
  onCreate(): void
}

function CreateIssueModal({
  opened,
  onClose,
  onCreate,
}: CreateIssueModalProps) {
  const { values, ...form } = useForm({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: handleSubmit,
  })

  function handleSubmit() {
    onClose()
    onCreate()
  }

  return (
    <Modal className="max-w-xl" opened={opened} onClose={onClose}>
      <Text variant="heading" component="h2">
        Create New Issue
      </Text>
      <form onSubmit={form.handleSubmit}>
        <TextField
          className="mt-10"
          name="title"
          value={values.title}
          placeholder="Title"
          onChange={form.handleChange}
          required
        />
        <TextArea
          className="mt-10"
          name="description"
          value={values.description}
          placeholder="Description"
          onChange={form.handleChange}
          required
        />
        <div className="w-full flex items-center justify-end mt-10">
          <Button onClick={onClose} className="mr-3" variant="text">
            Cancel
          </Button>
          <Button type="submit">Create</Button>
        </div>
      </form>
    </Modal>
  )
}

export default CreateIssueModal

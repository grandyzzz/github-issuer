import { DataMap, useForm } from '../../hooks'
import TextField from '../TextField'
import { Button } from 'modules/ui'

interface SearchFieldProps {
  className?: string
  value: string
  onSubmit: (value: DataMap) => void
}

function SearchField({ value, onSubmit }: SearchFieldProps) {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      search: value,
    },
    onSubmit,
  })

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <TextField
        className="max-w-xl"
        type="search"
        inputClassName="border-r-0 rounded-r-none"
        value={values.search}
        size="large"
        placeholder={'Search'}
        onChange={handleChange}
        name="search"
      />
      <Button className="border-l-0 rounded-l-none" size="large" type="submit">
        Search
      </Button>
    </form>
  )
}

export default SearchField

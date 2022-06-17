import cn from 'classnames'
import { Button } from 'modules/ui'
import { DataMap, useForm } from '../../hooks'
import TextField from '../TextField'

interface SearchFieldProps {
  className?: string
  name?: string
  value?: string
  placeholder?: string
  onSubmit: (value: DataMap) => void
}

function SearchField({
  className,
  name,
  value,
  placeholder,
  onSubmit,
}: SearchFieldProps) {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      search: value,
    },
    onSubmit,
  })

  return (
    <form className={cn(className, 'w-full flex')} onSubmit={handleSubmit}>
      <TextField
        name={name}
        type="search"
        inputClassName="border-r-0 rounded-r-none"
        value={values.search}
        size="large"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <Button
        className="border-l-0 rounded-l-none"
        color="accent"
        size="large"
        type="submit"
      >
        Search
      </Button>
    </form>
  )
}

export default SearchField

import { ChangeEvent, FormEvent, useState } from 'react'

export interface DataMap {
  [key: string]: any
}

interface FormProps {
  onSubmit: (values: DataMap) => void
  initialValues?: DataMap
  validate?: (value: DataMap) => boolean | string
}

export function useForm({ onSubmit, initialValues, validate }: FormProps) {
  const [values, setValues] = useState(initialValues || {})

  const handleChange = ({ target: { name, value } }: ChangeEvent<any>) => {
    setValues({ ...values, [name]: value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(values)
  }

  return {
    values,
    handleChange,
    handleSubmit,
  }
}

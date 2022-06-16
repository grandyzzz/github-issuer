import type { ChangeEvent } from 'react'

interface TextAreaProps {
  className?: string
  name: string
  value: string
  onChange: (e: ChangeEvent<any>) => void
  placeholder?: string
  label?: string
  required?: boolean
}

function Textarea({
  className,
  name,
  value,
  onChange,
  placeholder,
  label,
  required,
}: TextAreaProps) {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
        id={name}
        className="w-full p-2 border border-gray-300 rounded-lg outline-none resize-none"
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        rows={5}
      />
    </div>
  )
}

export default Textarea

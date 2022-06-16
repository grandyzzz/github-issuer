import cn from 'classnames'
import type { ChangeEvent } from 'react'

interface TextFieldProps {
  className?: string
  inputClassName?: string
  label?: string
  name?: string
  value: string
  type?: string
  placeholder?: string
  size?: 'medium' | 'large'
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function TextField({
  className,
  inputClassName,
  label,
  name,
  value,
  type = 'text',
  size = 'medium',
  placeholder,
  onChange,
}: TextFieldProps) {
  const inputClasses = cn(
    inputClassName,
    'w-full border border-gray-300 rounded-lg outline-none',
    {
      'h-10 px-2': size === 'medium',
      'h-12 text-xl px-4': size === 'large',
    }
  )
  return (
    <div className={cn(className, 'w-full')}>
      {label && (
        <label className="mb-2 block" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className={inputClasses}
        id={name}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default TextField

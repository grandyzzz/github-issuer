import type { ReactNode } from 'react'
import cn from 'classnames'

export type ButtonColors = 'accent' | 'primary' | string

const containedStylesMap: { [P in ButtonColors]: string } = {
  accent: 'bg-blue-500 text-white hover:bg-blue-700',
  primary: 'bg-indigo-500 text-white hover:bg-indigo-700',
}
const textStylesMap: { [P in ButtonColors]: string } = {
  accent: 'text-blue-500 hover:text-blue-700',
  primary: 'text-indigo-500 hover:text-indigo-700',
}

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  color?: ButtonColors
  variant?: 'contained' | 'text'
  type?: 'submit' | 'button'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
}

function Button({
  children,
  className,
  size = 'medium',
  variant = 'contained',
  type = 'button',
  color = 'primary',
  disabled = false,
  fullWidth,
  onClick,
}: ButtonProps) {
  const buttonClassName = cn(
    className,
    'flex items-center justify-center transition-colors font-bold rounded',
    {
      'w-full': fullWidth,
      'h-8 px-4': size === 'small',
      'h-10 px-6': size === 'medium',
      'h-12 px-6': size === 'large',
      [containedStylesMap[color]]: variant === 'contained',
      [textStylesMap[color]]: variant === 'text',
    }
  )

  return (
    <button
      className={buttonClassName}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button

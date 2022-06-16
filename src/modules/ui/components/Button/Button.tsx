import type { ReactNode } from 'react'
import cn from 'classnames'

interface ButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  size?: 'small' | 'medium' | 'large'
  color?: string
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
  fullWidth,
  onClick,
}: ButtonProps) {
  const buttonClassName = cn(
    className,
    'flex items-center justify-center transition-colors font-bold px-4 rounded',
    {
      'w-full': fullWidth,
      'h-8': size === 'small',
      'h-10': size === 'medium',
      'h-12 px-6': size === 'large',
      'bg-blue-500 text-white hover:bg-blue-700': variant === 'contained',
      'text-blue-500 hover:text-blue-700': variant === 'text',
    }
  )

  return (
    <button className={buttonClassName} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button

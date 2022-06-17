import type { ReactNode } from 'react'
import cn from 'classnames'

interface SectionProps {
  children: ReactNode
  className?: string
}

export const Section = ({ children, className }: SectionProps) => (
  <section className={cn(className, 'w-full py-5')}>{children}</section>
)

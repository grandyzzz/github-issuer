import type { ReactNode } from 'react'

interface UsersContainerProps {
  children: ReactNode
}

export const UsersContainer = ({ children }: UsersContainerProps) => (
  <div className="container max-w-4xl px-0 overflow-hidden">{children}</div>
)

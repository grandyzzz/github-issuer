import type { ReactNode } from 'react'
import Container from '../Container'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <Container></Container>
      {children}
    </div>
  )
}

export default Layout

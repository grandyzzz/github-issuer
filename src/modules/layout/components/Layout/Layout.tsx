import type { ReactNode } from 'react'

import Container from '../Container'
import { UsersSearchField } from 'modules/users'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full">
      <Container>
        <UsersSearchField />
      </Container>
      {children}
    </div>
  )
}

export default Layout

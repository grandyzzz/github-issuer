import type { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'modules/graphql/components'
import { getAccessToken } from 'modules/auth/utils'
import { Redux } from '../modules/redux'

interface CoreProps {
  children: ReactNode
}

function Core({ children }: CoreProps) {
  return (
    <ApolloProvider getAccessToken={getAccessToken}>
      <Redux>
        <Router>{children}</Router>
      </Redux>
    </ApolloProvider>
  )
}

export default Core

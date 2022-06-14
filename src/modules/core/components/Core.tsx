import type { ReactNode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'modules/graphql/components'
import { getAccessToken } from 'modules/auth/utils'

interface CoreProps {
  children: ReactNode
}

function Core({ children }: CoreProps) {
  return (
    <ApolloProvider getAccessToken={getAccessToken}>
      <Router>{children}</Router>
    </ApolloProvider>
  )
}

export default Core

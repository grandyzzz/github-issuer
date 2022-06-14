import type { ReactNode } from 'react'
import { ApolloProvider as GraphQLApolloProvider } from '@apollo/client'

import { useApolloClient } from '../../hooks/useApolloClient'

export interface ApolloProviderProps {
  children: ReactNode | ReactNode[]
  getAccessToken: () => Promise<string | null>
}

export const ApolloProvider = ({
  children,
  getAccessToken,
}: ApolloProviderProps) => {
  const client = useApolloClient(getAccessToken)

  if (client === null) {
    return null
  }

  return (
    <GraphQLApolloProvider client={client}>{children}</GraphQLApolloProvider>
  )
}

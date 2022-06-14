import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import type { NormalizedCacheObject } from '@apollo/client'
import { useEffect, useState } from 'react'

export type ApolloClientWithCache = ApolloClient<NormalizedCacheObject>

export function useApolloClient(
  obtainValidAccessToken: () => Promise<string | null>
) {
  const [client, setClient] = useState<ApolloClientWithCache | null>(null)

  useEffect(() => {
    const link = createHttpLink({
      uri: 'https://api.github.com/graphql', // TODO: add it to config
      async fetch(url, init) {
        const accessToken = await obtainValidAccessToken()

        const headers = new Headers(init?.headers)

        if (accessToken) {
          headers.set('Authorization', `Bearer ${accessToken}`)
        }

        return fetch(url, { ...init, headers })
      },
    })

    const client = new ApolloClient({
      cache: new InMemoryCache(),
      link,
    })

    setClient(client)
  }, [obtainValidAccessToken])

  return client
}

import { hash } from 'ohash'
import { print } from 'graphql'

interface UseCreateGraphqlQueryArgs {
  query: string
  options: AsyncDataOptions
}

export function useCreateGraphqlQuery({ query, options }:UseCreateGraphqlQueryArgs) {
  const { clients } = useApollo()

  const variables = undefined
  const clientId = 'default'

  const fn = () => clients![clientId]?.query({ query, variables, fetchPolicy: 'no-cache' }).then(r => r.data)
  const key = hash({ query: print(query), variables, clientId })

  const { execute, data, error, pending: loading } = useAsyncData(key, fn, options)

  return { data, error, loading, execute }
}

// @ts-ignore
import { AllUsers } from '~/services/apollo/default/queries/users.graphql'
import { useCreateGraphqlQuery } from '~/features/api'
import type { AsyncDataOptions } from '#app'

interface Arguments {
  options: AsyncDataOptions<any>
}

export default function useApiGraphqlQuery({ options }: Arguments) {
  return useCreateGraphqlQuery({ query: AllUsers, options })
}

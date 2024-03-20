// @ts-ignore
import { AllUsers } from '~/services/apollo/default/queries/users.graphql'
import { useCreateGraphqlQuery } from '~/services/api'
import type { AsyncDataOptions } from '#app'

interface UseApiGetAllUsersArgs {
  options: AsyncDataOptions<any>
}

export default function useApiGetAllUsers({ options }: UseApiGetAllUsersArgs) {
  return useCreateGraphqlQuery({ query: AllUsers, options })
}

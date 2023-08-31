// @ts-ignore
import { AllUsers } from '~/services/apollo/default/queries/users.graphql'

async function useApiGetAllUsers() {
  const { data, error, pending: loading } = await useAsyncQuery(AllUsers)

  return { data, error, loading }
}

export default useApiGetAllUsers
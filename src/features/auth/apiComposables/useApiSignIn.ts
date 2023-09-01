import { useCreateGraphqlMutation } from '~/features/api'
// @ts-ignore
import { AuthSignIn } from '~/services/apollo/default/mutations/auth.graphql'

export default function useApiSignIn() {
  return useCreateGraphqlMutation({ document: AuthSignIn })
}

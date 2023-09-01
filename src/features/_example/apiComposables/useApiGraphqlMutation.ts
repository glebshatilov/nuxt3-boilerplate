// @ts-ignore
import { AuthSignIn } from '~/services/apollo/default/mutations/auth.graphql'
import { useCreateGraphqlMutation } from '~/features/api'

// interface SignInVariables {
//   email: string
//   password: string
// }

export default function useApiGraphqlMutation() {
  return useCreateGraphqlMutation({ document: AuthSignIn })
}

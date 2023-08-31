// @ts-ignore
import { AuthSignIn } from '~/services/apollo/default/mutations/auth.graphql'

interface SignInVariables {
  email: string
  password: string
}

function useApiSignIn() {
  const { mutate, error, loading } = useMutation(AuthSignIn)

  const signInHandler = async(variables: SignInVariables) => {
    const response = await mutate(variables)

    return response?.data
  }

  return { signInHandler, error, loading }
}

export default useApiSignIn
import { useCreateRestMutation, createRestMutationFunction } from '~/services/api'

interface SignInVariables {
  email: string
  password: string
}

export const fnApiRestMutation = (variables: SignInVariables) => {
  return createRestMutationFunction('/api/test', variables)
}

export default function useApiRestMutation() {
  return useCreateRestMutation({ fn: fnApiRestMutation })
}

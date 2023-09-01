import { useMutation as useVueQueryMutation } from '@tanstack/vue-query'

interface UseCreateRestMutationArgs {
  fn: (variables: TVariables) => Promise<TData>
}

export function useCreateRestMutation({ fn }:UseCreateRestMutationArgs) {
  const { mutateAsync, error, isLoading: loading } = useVueQueryMutation({ mutationFn: fn })

  return { mutate: mutateAsync, error, loading }
}

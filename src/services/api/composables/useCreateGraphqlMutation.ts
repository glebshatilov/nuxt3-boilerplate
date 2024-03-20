interface UseCreateGraphqlMutationArgs {
  document: string
}

export function useCreateGraphqlMutation({ document }:UseCreateGraphqlMutationArgs) {
  const { mutate, error, loading } = useMutation(document)

  return { mutate, error, loading }
}

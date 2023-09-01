interface UseCreateRestQueryArgs {
  fn: (variables: TVariables) => Promise<TData>
  options: AsyncDataOptions
}

export function useCreateRestQuery({ fn, options }:UseCreateRestQueryArgs) {
  const { execute, data, error, pending: loading } = useAsyncData(fn, options)

  return { data, error, loading, execute }
}

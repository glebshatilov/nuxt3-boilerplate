export function createRestMutationFunction(url: string, variables: any) {
  return $fetch(url, { method: 'POST', body: variables })
}

export function createRestQueryFunction(url: string, variables: any) {
  return $fetch(url, { query: variables })
}

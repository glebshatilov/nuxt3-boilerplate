import { useCreateRestQuery, createRestQueryFunction } from '~/features/api'
import type { AsyncDataOptions } from '#app'

interface Arguments {
  options: AsyncDataOptions
}

export const fnApiRestQuery = () => {
  return createRestQueryFunction('/api/test', { haha: 'qwerty' })
}
export default function useApiRestQuery({ options }: Arguments) {
  return useCreateRestQuery({ fn: fnApiRestQuery, options })
}

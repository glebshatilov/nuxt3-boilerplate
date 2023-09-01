<script setup lang="ts">
import useApiRestMutation from '../../apiComposables/useApiRestMutation.js'

const { mutate, error, loading } = useApiRestMutation()

const variables = {
  email: 'test@test.test',
  password: 'test'
}

const data = ref()

const onClick = async () => {
  const response = await mutate(variables)

  console.log('useApiRestMutation response', response)
  data.value = response
}
</script>

<template>
  <div>
    <h2>Rest Mutation example</h2>
    <button @click="onClick">
      Call mutation
    </button>
    <div v-if="loading">
      Loading...
    </div>
    <div v-if="error">
      EROROROROR: {{error}}
    </div>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

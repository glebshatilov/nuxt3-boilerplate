<script setup lang="ts">
import useApiGraphqlMutation from '../../apiComposables/useApiGraphqlMutation.js'

const { mutate, error, loading } = useApiGraphqlMutation()

const variables = {
  email: 'test@test.test',
  password: 'test'
}

const data = ref()

const onClick = async () => {
  const response = await mutate(variables)

  console.log('useApiGraphqlMutation response', response)
  data.value = response
}
</script>

<template>
  <div>
    <h2>Graphql Mutation example</h2>
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

<script setup lang="ts">
import { fnApiRestMutation } from '../../apiComposables/useApiRestMutation.js'

const variables = {
  email: 'test@test.test',
  password: 'test'
}

const data = ref()

const onClick = async(): void => {
  const response = await fnApiRestMutation(variables)

  console.log('fnApiRestMutation response', response)
  data.value = response
}
</script>

<template>
  <div>
    <h2>Rest Mutation Fn example</h2>
    <button @click="onClick">
      Call mutation
    </button>
    <div v-if="data">
      {{ data }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>

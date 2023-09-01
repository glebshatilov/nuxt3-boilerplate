<script setup lang="ts">
import useApiGraphqlQuery from '../../apiComposables/useApiGraphqlQuery.js'

const { data, loading, execute, error } = useApiGraphqlQuery({ options: { immediate: false }})

const onClick = async () => {
  console.log('onClick')
  await execute()
}
</script>

<template>
  <div>
    <h2>Graphql Query example</h2>
    <button @click="onClick">
      Get data
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

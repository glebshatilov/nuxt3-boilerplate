<script setup lang="ts">
import useApiRestQuery from '../../apiComposables/useApiRestQuery.js'

const { data, loading, execute, error } = useApiRestQuery({ options: { immediate: false }})

const onClick = async () => {
  console.log('onClick')
  await execute()
}
</script>

<template>
  <div>
    <h1>Rest Query example</h1>
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

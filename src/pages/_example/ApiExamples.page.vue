<script setup lang="ts">
import { GraphqlQuery, GraphqlMutation, RestMutation, RestQuery, RestMutationFn } from '~/features/_example'
</script>

<template>
  <div class="api-examples-page">
    <GraphqlQuery />
    <GraphqlMutation />
    <RestQuery />
    <RestMutation />
    <RestMutationFn />
  </div>
</template>

<style lang="scss">
.api-examples-page {
  button {
    border-radius: 50px;
    padding: 10px 20px;
    color: black;
  }
}
</style>

<script setup lang="ts">
import GraphqlQuery from '~/features/_example/components/GraphqlQuery/GraphqlQuery.vue'
import GraphqlMutation from '~/features/_example/components/GraphqlMutation/GraphqlMutation.vue'
import RestMutation from '~/features/_example/components/RestMutation/RestMutation.vue'
import RestQuery from '~/features/_example/components/RestQuery/RestQuery.vue'
import RestMutationFn from '~/features/_example/components/RestMutationFn/RestMutationFn.vue'
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

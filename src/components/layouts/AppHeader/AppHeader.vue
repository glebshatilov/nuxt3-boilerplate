<script setup lang="ts">
import AuthForm from '~/features/auth/components/AuthForm/AuthForm.vue'
</script>

<template>
  <div class="app-header">
    <ul>
      <NuxtLink to="/">
        Index page
      </NuxtLink>
      <NuxtLink to="/api-examples">
        API examples
      </NuxtLink>
      <NuxtLink to="/users">
        AllUsers page
      </NuxtLink>
      <NuxtLink to="/edit">
        Edit page
      </NuxtLink>
    </ul>
    <AuthForm />
  </div>
</template>

<style lang="scss">
.app-header {
  background-color: gray;
  padding: 20px;

   ul {
     margin: 0;

     a:not(:first-child) {
       margin-left: 10px;
     }
   }
}
</style>

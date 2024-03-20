<script setup lang="ts">
import AuthForm from '~/features/auth/components/AuthForm/AuthForm.vue'
import HeaderSearch from './components/HeaderSearch/HeaderSearch.vue'
import HeaderNav from './components/HeaderNav/HeaderNav.vue'
import AsSpace from '~/components/ui/AsSpace/AsSpace.vue'
</script>

<template>
  <div class="header">
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
    <AsSpace
      class="header__right"
      align="center"
    >
      <HeaderSearch />
      <HeaderNav />
    </AsSpace>
    <AuthForm />
  </div>
</template>

<style lang="scss">
.header {
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

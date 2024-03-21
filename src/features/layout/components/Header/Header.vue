<script setup lang="ts">
import { AuthForm } from '~/features/auth'
import HeaderSearch from './components/HeaderSearch'
import HeaderNav from './components/HeaderNav'
import AsSpace from '~/components/ui/AsSpace'
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

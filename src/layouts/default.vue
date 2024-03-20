<script setup lang="ts">
import { Header, Footer } from '~/features/layout'
</script>

<template>
  <div class="default-layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style scoped>

</style>

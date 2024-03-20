<script setup lang="ts">
import Header from '~/features/layout/Header/Header.vue'
import Footer from '~/features/layout/Footer/Footer.vue'
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

<script setup lang="ts">
interface Props {
  fullWidth?: boolean
}

defineProps<Props>()
</script>

<template>
  <div
    class="as-container"
    :class="{
      'as-container--full-width': fullWidth
    }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
.as-container {
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  max-width: $over-desktop;

  &--full-width {
    width: 100%;
  }
}
</style>

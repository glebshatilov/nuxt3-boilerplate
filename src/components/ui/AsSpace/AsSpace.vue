<script setup lang="ts">
interface Props {
  as?: string
  gap?: 'none' | 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge'
  direction?: 'horizontal' | 'vertical'
  justify?: '' | 'center' | 'start' | 'end' | 'space-between' | 'space-around'
  align?: '' | 'baseline' | 'start' | 'end' | 'center'
  wrap?: boolean
  fullWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  gap: 'medium',
  direction: 'horizontal',
  justify: '',
  align: ''
})
</script>

<template>
  <component
    :is="as"
    class="as-space"
    :class="[
      `as-space--gap--${gap}`,
      `as-space--direction--${direction}`,
      {
        'as-space--wrap': wrap,
        'as-space--full-width': fullWidth,
        [`as-space--align--${align}`]: align,
        [`as-space--justify--${justify}`]: justify
      }
    ]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.as-space {
  display: flex;

  &--direction-vertical {
    flex-direction: column;
  }

  &--wrap {
    flex-wrap: wrap;
  }

  &--full-width {
    width: 100%;
  }

  &--gap--none {
    gap: 0;
  }

  &--gap--xxsmall {
    gap: var(--as-space-xxsmall);
  }

  &--gap--xsmall {
    gap: var(--as-space-xsmall);
  }

  &--gap--small {
    gap: var(--as-space-small);
  }

  &--gap--medium {
    gap: var(--as-space-medium);
  }

  &--gap--large {
    gap: var(--as-space-large);
  }

  &--gap--xlarge {
    gap: var(--as-space-xlarge);
  }

  &--gap--xxlarge {
    gap: var(--as-space-xxlarge);
  }

  &--gap--xxxlarge {
    gap: var(--as-space-xxxlarge);
  }

  &--align--baseline {
    align-items: baseline;
  }

  &--align--stretch {
    align-items: stretch;
  }

  &--align--start {
    align-items: start;
  }

  &--align--end {
    align-items: end;
  }

  &--align--center {
    align-items: center;
  }

  &--justify--center {
    justify-content: center;
  }

  &--justify--start {
    justify-content: start;
  }

  &--justify--end {
    justify-content: end;
  }

  &--justify--space-between {
    justify-content: space-between;
  }

  &--justify--space-around {
    justify-content: space-around;
  }

  &--justify--stretch {
    justify-content: stretch;
  }
}
</style>

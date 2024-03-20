<script setup lang="ts">
interface Props {
  as?: 'button' | 'a'
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  loading?: boolean
  square?: boolean
  rounded?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  as: 'button'
})
</script>

<template>
  <component
    :is="as"
    type="button"
    class="as-button"
    :class="[
      `as-button--variant--${variant}`,
      `as-button--size--${size}`,
      {
        'as-button--rounded': rounded,
        'as-button--loading': loading,
        'as-button--square': square
      }
    ]"
    :disabled="disabled"
  >
    <span class="as-button__content">
      <span class="as-button__text">
        <slot />
      </span>
    </span>
  </component>
</template>

<style scoped lang="scss">
.as-button {
  font-family: var(--as-font-family-base);
  font-size: 14px;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: -webkit-max-content;
  width: max-content;
  padding: 0 16px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  text-decoration: none;
  border: 1px solid transparent;
  box-shadow: 0 0 0 2px transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: var(--as-border-radius-small);
  transition: background-color 0.2s;
  background: none;
  position: relative;

  &:hover {
    border-color: transparent;
  }

  &:focus-visible {
    outline: var(--as-border-focus);
  }

  &--variant--primary {
    background-color: var(--as-color-primary);
    color: var(--as-color-text-on-color);

    &:hover {
      background-color: var(--as-color-primary-hover);
    }

    &:active {
      background-color: var(--as-color-primary-active);
    }
  }

  &--variant--secondary {
    background-color: var(--as-color-secondary);
    color: var(--as-color-text-on-color);

    &:hover {
      background-color: var(--as-color-secondary-hover);
    }

    &:active {
      background-color: var(--as-color-secondary-active);
    }
  }

  &--variant--tertiary {
    color: #46626b;
    border: 1px solid #46626b;

    &:hover {
      background-color: #e6f1f5;
    }

    &:active {
      background-color: #738f99;
    }
  }

  &--variant--ghost {
    color: var(--as-color-text-secondary);

    &:hover {
      color: var(--as-color-text-tertiary);
    }

    &:active {
      color: var(--as-color-text-tertiary);
    }
  }

  &:disabled {
    background-color: var(--as-color-background-control-disabled);
    border-color: var(--as-color-background-control-disabled);
    color: var(--as-color-text-tertiary);
    pointer-events: none;
    cursor: default;
  }

  &--block {
    width: 100%;
  }

  &--loading {
    pointer-events: none;
    cursor: default;

    .as-button__content {
      visibility: hidden;
    }
  }

  &--square {
    padding: 0;
  }

  &--rounded {
    border-radius: var(--as-border-radius-round);
  }

  &--size--small {
    height: var(--as-control-height-small);

    &.as-button--square {
      width: var(--as-control-height-small);
    }
  }

  &--size--medium {
    height: var(--as-control-height-medium);

    &.as-button--square {
      width: var(--as-control-height-medium);
    }
  }

  &--size--large {
    height: var(--as-control-height-large);

    &.as-button--square {
      width: var(--as-control-height-large);
    }
  }

  &__loader {
    position: absolute;
  }

  &__content {
    flex-shrink: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  &__before,
  &__after,
  &__icon {
    display: flex;
  }

  .as-button__after:not(:first-child),
  .as-button__before:not(:last-child) + .as-button__text {
    margin-left: var(--as-spacing-small);
  }
}

</style>

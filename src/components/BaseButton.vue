<template>
  <button :class="classNames" class="base-button" :type="type" v-bind="$attrs">
    <template v-if="loading">
      Loading...
    </template>
    <slot v-else />
  </button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'BaseButton',

  props: {
    type: {
      type: String,
      default: 'button',
    },
    loading: Boolean,
  },

  setup(props) {
    const classNames = computed(() => {
      return {
        'is-loading': props.loading,
      };
    });

    return {
      classNames,
    };
  },
};
</script>

<style>
.base-button {
  background: var(--color-4);
  box-shadow: none;
  border: none;
  padding: 10px 20px;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: var(--color-3);
  cursor: pointer;
  transition: all 0.3s;
}
.base-button.is-loading {
  pointer-events: none;
  opacity: 0.7;
  user-select: none;
}
</style>

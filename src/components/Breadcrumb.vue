<template>
  <nav :class="classNames" class="breadcrumb">
    <ul>
      <slot />
    </ul>
  </nav>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'Breadcrumb',

  props: {
    items: {
      type: Array,
      default: () => [],
    },
    isRight: Boolean,
  },

  setup(props) {
    const classNames = computed(() => ({
      'breadcrumb--right': props.isRight,
    }));

    return {
      classNames,
    };
  },
};
</script>

<style>
.breadcrumb {
  color: var(--color-2);
  font-size: 18px;
}
.breadcrumb ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 0;
}
.breadcrumb ul li {
  align-items: center;
  display: flex;
  font-size: 15px;
  font-weight: 500;
}
.breadcrumb ul li .breadcrumb-link {
  color: var(--color-1);
  padding: 0;
  text-decoration: none;
  text-transform: capitalize;
}
.breadcrumb ul li .breadcrumb-link.active-breadcrumb {
  color: var(--color-3);
}
.breadcrumb ul li:not(:last-child) {
  padding-bottom: 18px;
}
.breadcrumb ul li:not(:first-child)::before {
  background-color: var(--color-3);
  opacity: 0.8;
  content: '';
  height: 2px;
  width: 50px;
  margin: 0 14px;
  display: none;
}
.active-breadcrumb {
  color: var(--color-3) !important;
}
@media (min-width: 768px) {
  .breadcrumb ul {
    flex-direction: row;
  }
  .breadcrumb ul li:not(:first-child)::before {
    display: block;
  }
  .breadcrumb ul li {
    padding-bottom: 0 !important;
    font-size: 18px;
  }
  .breadcrumb--right ul {
    justify-content: flex-end !important;
  }
}
</style>

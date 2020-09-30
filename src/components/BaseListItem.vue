<template>
  <li class="base-list-item">
    <span :class="{ 'text-bold': bold }" v-html="title" />
    <slot />
  </li>
</template>

<script>
export default {
  name: 'BaseListItem',

  props: {
    title: {
      type: String,
      default: '',
    },
    bold: Boolean,
  },
};
</script>

<style>
.base-list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  font-size: 16px;
  color: var(--color-3);
}
.base-list-item span {
  font-weight: 600;
  flex-basis: 50%;
  text-transform: capitalize;
  text-align: left;
}
.base-list-item .text-bold {
  font-weight: bold;
}
</style>

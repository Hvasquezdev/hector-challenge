<template>
  <ul class="base-list">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'BaseList',
};
</script>

<style>
.base-list > *:not(:last-child) {
  margin-bottom: 15px;
}
</style>

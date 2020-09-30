<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
};
</script>

<style>
.base-card {
  padding: 25px 20px;
  background-color: var(--color-5);
}
</style>

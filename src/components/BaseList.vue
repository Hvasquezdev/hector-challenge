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
.base-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: right;
  font-size: 16px;
  color: var(--color-3);
}
.base-list li span {
  font-weight: 600;
  flex-basis: 50%;
  text-transform: capitalize;
  text-align: left;
}
.base-list li .text-bold {
  font-weight: bold;
}
.base-list li:not(:last-child) {
  margin-bottom: 15px;
}
</style>

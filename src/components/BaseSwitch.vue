<template>
  <div class="base-switch">
    <button :class="{ 'is-active': value }" @click="onToggle(true)">
      Yes
    </button>
    <button :class="{ 'is-active': !value }" @click="onToggle(false)">
      No
    </button>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',

  props: {
    value: Boolean,
  },

  setup(props, { emit }) {
    const onToggle = (val) => {
      emit('toggle', val);
    };

    return {
      onToggle,
    };
  },
};
</script>

<style>
.base-switch {
  display: flex;
  align-items: center;
}
.base-switch button {
  border: none;
  box-shadow: none;
  background: var(--color-7);
  opacity: 0.7;
  padding: 10px;
  color: #fff;
  width: 35px;
  height: 35px;
  font-size: 14px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}
.base-switch button.is-active {
  opacity: 1;
}
</style>

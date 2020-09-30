<template>
  <div class="counter-wrapper">
    <button class="action-button" @click="decrement">
      -
    </button>
    <span class="counter-val">
      {{ value }}
    </span>
    <button class="action-button" @click="increment">
      +
    </button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',

  props: {
    value: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { emit }) {
    const increment = () => emit('input', props.value + 1);
    const decrement = () => props.value > 0 && emit('input', props.value - 1);

    return {
      increment,
      decrement,
    };
  },
};
</script>

<style>
.counter-wrapper {
  display: flex;
  align-items: center;
}
.counter-wrapper .counter-val {
  width: 35px;
  height: 35px;
  font-size: 18px;
  color: var(--color-3);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-4);
}
.counter-wrapper .action-button {
  border: none;
  box-shadow: none;
  background: var(--color-7);
  padding: 10px;
  color: #fff;
  width: 35px;
  height: 35px;
  font-size: 18px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

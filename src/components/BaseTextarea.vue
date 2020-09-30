<template>
  <textarea
    class="base-textarea"
    :value="modelValue"
    :name="name"
    :placeholder="placeholder"
    :rows="rows"
    @input="onInput"
  ></textarea>
</template>

<script>
export default {
  name: 'BaseTextarea',

  props: {
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    rows: {
      type: [String, Number],
      default: 7,
    },
  },

  setup(props, { emit }) {
    const onInput = (event) => {
      emit('update:modelValue', event.target.value);
    };

    return {
      onInput,
    };
  },
};
</script>

<style>
.base-textarea {
  width: 100%;
  border: none;
  outline: none;
  background-color: var(--color-4);
  color: var(--color-3);
  padding: 15px;
  font-size: 16px;
}
</style>

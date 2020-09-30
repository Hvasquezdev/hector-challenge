<template>
  <details-card>
    <template #footer>
      <base-button :loading="loading" @click="onSubmit">
        {{ message }}
      </base-button>
    </template>
  </details-card>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue';
import DetailsCard from '@/components/DetailsCard';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'ConfirmationPage',

  components: {
    DetailsCard,
    BaseButton,
  },

  setup() {
    const message = ref('Confirm your reservation');
    const loading = ref(false);
    let timeOut = null;

    const onSubmit = () => {
      if (loading.value) {
        return;
      }

      loading.value = true;

      timeOut = setTimeout(() => {
        loading.value = false;
        message.value = 'success! thanks for your reservation';
        clearTimeout(timeOut);
      }, 2000);
    };

    onBeforeUnmount(() => {
      loading.value = false;
      message.value = 'Confirm your reservation';
      clearTimeout(timeOut);
    })

    return {
      message,
      loading,
      onSubmit
    }
  }
};
</script>

<style>
.extension-title {
  font-weight: bold;
  color: var(--color-3);
  font-size: 16px;
  margin-bottom: 15px;
}
</style>

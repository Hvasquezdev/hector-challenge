<template>
  <details-card>
    <template #extension>
      <h2 class="extension-title">
        Say hello to your host
      </h2>

      <base-textarea v-model="message" placeholder="Message" />
    </template>

    <template #footer>
      <base-button @click="onSubmit">
        Continue
      </base-button>
    </template>
  </details-card>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import DetailsCard from '@/components/DetailsCard';
import BaseTextarea from '@/components/BaseTextarea';
import BaseButton from '@/components/BaseButton';

export default {
  name: 'ReviewPage',

  components: {
    DetailsCard,
    BaseTextarea,
    BaseButton,
  },

  setup() {
    const { push } = useRouter();
    const { commit } = useStore(); 
    const message = ref(null);

    const onSubmit = () => {
      if (message.value) {
        commit('SET_MESSAGE', message.value);
      }

      push('/confirmation');
    };

    return {
      message,
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

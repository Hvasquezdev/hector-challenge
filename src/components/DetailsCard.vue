<template>
  <base-card class="details-card">
    <h1 class="title">
      Review trip details and adjust options if needed
    </h1>

    <base-list>
      <li><span class="text-bold">Dates:</span> {{ dates }}</li>
      <li>
        <span class="text-bold">Guests:</span> {{ reservation_details.adults }}
      </li>
      <li>
        <span class="text-bold">Trip duration:</span> {{ tripDuration }} Nights
      </li>
      <li>
        <span class="text-bold">Base price:</span> ${{ reservation.base_price }}
      </li>
      <li v-if="reservation_details.message">
        <span class="text-bold">Message:</span> {{ reservation_details.message }}
      </li>
    </base-list>

    <div class="card-extension" v-if="$slots.extension">
      <slot name="extension" />
    </div>

    <footer class="card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </base-card>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { getDaysDiff } from '@/composables/useDates';
import BaseCard from '@/components/BaseCard';
import BaseList from '@/components/BaseList';

export default {
  name: 'DetailsCard',

  components: {
    BaseCard,
    BaseList,
  },

  setup() {
    const { state } = useStore();
    const reservation = ref(state.reservation);
    const reservation_details = ref(state.reservation_details);

    // Should return a string with the parsed dates
    const dates = computed(() => {
      const checkin = reservation_details.value.checkin;
      const checkout = reservation_details.value.checkout;

      if (!checkin || !checkout) {
        return 'Select a checkin and checkout dates';
      }

      return `${new Date(checkin).toDateString()} to ${new Date(
        checkout
      ).toDateString()}`;
    });

    // Total night count
    const tripDuration = computed(() =>
      getDaysDiff(
        reservation_details.value.checkin,
        reservation_details.value.checkout
      )
    );

    return {
      reservation,
      reservation_details,
      tripDuration,
      dates,
    };
  },
};
</script>

<style>
.details-card .title {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-3);
  margin-bottom: 20px;
}
.details-card .card-extension {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--color-1);
  margin-bottom: 10px;
}
.details-card .card-footer {
  margin-top: 10px;
}
</style>

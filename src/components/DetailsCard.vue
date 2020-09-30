<template>
  <base-card class="details-card">
    <h1 class="title">
      Review trip details and adjust options if needed
    </h1>

    <base-list>
      <base-list-item title="Dates:" bold>
        {{ dates }}
      </base-list-item>
      <base-list-item title="Guests:" bold>
        {{ reservation_details.adults }}
      </base-list-item>
      <base-list-item title="Trip duration:" bold>
        {{ tripDuration }} Nights
      </base-list-item>
      <base-list-item title="Base price:" bold>
        ${{ reservation.base_price }}
      </base-list-item>
      <base-list-item v-if="reservation_details.message" title="Message:" bold>
        {{ reservation_details.message }}
      </base-list-item>
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
import BaseListItem from '@/components/BaseListItem';

export default {
  name: 'DetailsCard',

  components: {
    BaseCard,
    BaseList,
    BaseListItem,
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

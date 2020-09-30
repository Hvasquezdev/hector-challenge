<template>
  <base-card class="editor-card">
    <header class="card-header">
      <div class="header-content">
        <h2 class="title">
          {{ reservation.name }}
        </h2>
        <p>
          {{ reservation.description }}
        </p>
        <rate-stars />
      </div>

      <img
        :src="reservation.image_url"
        :alt="reservation.name"
        width="75"
        height="75"
      />
    </header>

    <breadcrumb class="card-date">
      <li>
        <div class="input-wrapper">
          <label for="checkin">Checkin:</label>
          <input
            type="date"
            id="checkin"
            v-model="checkin"
            name="checkin-start"
          />
        </div>
      </li>
      <li>
        <div class="input-wrapper">
          <label for="checkout">Checkout:</label>
          <input type="date" id="checkout" v-model="checkout" name="checkout" />
        </div>
      </li>
    </breadcrumb>

    <base-list>
      <li>
        <span class="text-bold">How many guests?</span>
        <counter-button v-if="is_review" :value="adults" @input="(val) => (adults = val)" />
        <template v-else>{{ adults }}</template>
      </li>
      <li>
        <span class="text-bold">How many childrens?</span>
        <counter-button v-if="is_review" :value="children" @input="(val) => (children = val)" />
          <template v-else>{{ children }}</template>
      </li>
      <li>
        <span class="text-bold">Do you have pets?</span>
        <base-switch v-if="is_review" :value="pets" @toggle="(val) => (pets = val)" />
        <template v-else>{{ pets ? 'Yes' : 'No' }}</template>
      </li>
    </base-list>

    <div class="payment-details">
      <h2 class="title">
        Your reservations details:
      </h2>

      <base-list>
        <li>
          <span>Stay duration:</span>
          {{ daysDiff }} Nights
        </li>
        <li>
          <span>Nights cost:</span>
          ${{ reservation.base_price }}
        </li>
        <li>
          <span>Discount:</span>
          ${{ reservation.weekly_discount }}
        </li>
        <li>
          <span>Cleaning fees:</span>
          ${{ reservation.cleaning_fee }}
        </li>
        <li>
          <span>Your total:</span>
          ${{ total }}
        </li>
      </base-list>
    </div>
  </base-card>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import { getDaysDiff } from '@/composables/useDates';
import BaseCard from '@/components/BaseCard';
import CounterButton from '@/components/CounterButton';
import Breadcrumb from '@/components/Breadcrumb';
import BaseSwitch from '@/components/BaseSwitch';
import RateStars from '@/components/RateStars';
import BaseList from '@/components/BaseList';

export default {
  name: 'DetailsCard',

  components: {
    BaseCard,
    CounterButton,
    Breadcrumb,
    BaseSwitch,
    RateStars,
    BaseList,
  },

  setup() {
    const { state, commit } = useStore();
    const { name } = useRoute();
    const reservation = ref(state.reservation);
    const reservation_details = ref(state.reservation_details);

    const is_review = computed(() => name === 'review');

    // Update reservation details model
    const checkout = computed({
      get: () => reservation_details.value.checkout,
      set: (val) => commit('SET_CHECKOUT', val),
    });
    const checkin = computed({
      get: () => reservation_details.value.checkin,
      set: (val) => commit('SET_CHECKIN', val),
    });
    const adults = computed({
      get: () => reservation_details.value.adults,
      set: (val) => commit('SET_ADULTS', val),
    });
    const children = computed({
      get: () => reservation_details.value.children,
      set: (val) => commit('SET_CHILDRENS', val),
    });
    const pets = computed({
      get: () => reservation_details.value.pets,
      set: (val) => commit('SET_PETS', val),
    });

    // Calculate total ammount and difference between selected days
    const daysDiff = computed(() => getDaysDiff(checkin.value, checkout.value));
    const total = computed(() => {
      const basePrice = reservation.value.base_price;
      const cleaningFee = reservation.value.cleaning_fee;
      const discount = reservation.value.weekly_discount;

      return (daysDiff.value * basePrice + cleaningFee - discount).toFixed(2);
    });

    return {
      is_review,
      reservation,
      checkin,
      checkout,
      adults,
      children,
      pets,
      daysDiff,
      total,
    };
  },
};
</script>

<style>
.editor-card .card-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-1);
  margin-bottom: 20px;
}
.editor-card .card-header ul {
  margin-right: 15px;
  padding: 0;
}
.editor-card .card-header .title {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-3);
}
.editor-card .card-header .header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.editor-card .card-header .header-content > *:not(:last-child) {
  margin-bottom: 5px;
}
.editor-card .card-date {
  margin-bottom: 20px;
  background-color: var(--color-4);
  padding: 15px 20px;
}
.editor-card .card-date ul li .input-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--color-3);
}
.editor-card .card-date ul li label {
  font-size: 18px;
  margin-bottom: 10px;
}
.editor-card .card-date ul li input {
  background: transparent;
  border: 1px solid var(--color-2);
  border-radius: 3px;
  padding: 5px;
}

.editor-card .payment-details .title {
  font-size: 18px;
  font-weight: bold;
  color: var(--color-3);
  margin: 20px 0;
  display: flex;
  align-items: center;
}
.editor-card .payment-details .title::before {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--color-1);
  order: 2;
  margin-left: 10px;
}
</style>

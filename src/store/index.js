import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      reservation: {
        id: '28eed9aa-c27d-4217-ab21-ad65ead3a2aa',
        owner_id: '59f6d752-97cf-414e-a794-42794ac7511a',
        name: 'Warner',
        slug: 'revolutionize-warner',
        description: 'Maecenas ut massa quis augue luctus tincidunt.',
        adults: 10,
        children: 2,
        is_pets_allowed: true,
        base_price: 95.38,
        cleaning_fee: 4.33,
        image_url: 'http://dummyimage.com/241x240.jpg/ff4444/ffffff',
        weekly_discount: 0.13,
        monthly_discount: 0.23,
        special_prices: [
          {
            date: '2019-10-12',
            base_price: 40.51,
          },
          {
            date: '2019-10-13',
            base_price: 80,
          },
        ],
      },

      reservation_details: {
        checkin: null,
        checkout: null,
        adults: 2,
        children: 1,
        pets: false,
        message: null
      },
    };
  },

  mutations: {
    SET_CHECKIN(state, val) {
      state.reservation_details.checkin = val;
    },
    SET_CHECKOUT(state, val) {
      state.reservation_details.checkout = val;
    },
    SET_ADULTS(state, val) {
      state.reservation_details.adults = val;
    },
    SET_CHILDRENS(state, val) {
      state.reservation_details.children = val;
    },
    SET_PETS(state, val) {
      state.reservation_details.pets = val;
    },
    SET_MESSAGE(state, val) {
      state.reservation_details.message = val;
    }
  },
});

export default store;

<template>
  <nav class="navbar">
    <div class="nav-left">
      <breadcrumb>
        <template v-if="items.length">
          <li v-for="(item, index) in items" :key="index">
            <router-link
              :to="item.url"
              class="breadcrumb-link"
              exact
              exact-active-class="active-breadcrumb"
            >
              {{ item.text }}
            </router-link>
          </li>
        </template>
      </breadcrumb>
    </div>
    <div class="nav-right">
      <button class="user-btn">
        H
      </button>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';
import Breadcrumb from '@/components/Breadcrumb';

export default {
  name: 'TheNavbar',

  components: {
    Breadcrumb,
  },

  setup() {
    const items = ref([
      {
        text: 'Review',
        url: '/',
      },
      {
        text: 'Confirmation',
        url: '/confirmation',
      },
    ]);

    return {
      items,
    };
  },
};
</script>

<style>
.navbar {
  background-color: var(--color-5);
  padding: 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .user-btn {
  padding: 0;
  box-shadow: 0;
  cursor: pointer;
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-6);
  color: #fff;
}
</style>

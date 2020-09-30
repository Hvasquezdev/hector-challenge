<template>
  <div class="app">
    <the-navbar />

    <main class="app-wrapper">
      <router-view />
      <editor-card />
    </main>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import EditorCard from '@/components/EditorCard';

export default {
  name: 'App',

  components: {
    TheNavbar,
    EditorCard,
  },
};
</script>

<style>
.app {
  --color-1: #9f9f9f;
  --color-2: #686868;
  --color-3: #363636;
  --color-4: #d4d4d4;
  --color-5: #f3f3f3;
  --color-6: #78d773;
  --color-7: #b9b8b8;

  font-family: 'Nunito', sans-serif;
}
.app-wrapper {
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  max-width: 1260px;
  margin: 0 auto;
}
</style>

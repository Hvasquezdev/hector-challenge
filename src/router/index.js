import { createRouter, createWebHistory } from 'vue-router';

// Lazy loaded routes
const Review = () => import('@/views/Index.vue');
const Confirmation = () => import('@/views/confirmation.vue');

const routes = [
  {
    path: '/',
    name: 'review',
    component: Review,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

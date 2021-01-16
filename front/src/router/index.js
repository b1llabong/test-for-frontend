import { createWebHistory, createRouter } from "vue-router";
import VerificationProfiles from '../components/VerificationProfiles.vue'

const routes = [
  {
    path: "/",
    redirect: "/verification-profile"
  },
  {
    path: "/verification-profile",
    name: "VerificationProfiles",
    component: VerificationProfiles,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
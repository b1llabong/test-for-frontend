<template>
  <div class="container p-0 pt-2 m-auto">
    <popup v-if="isShowPopup"></popup>
    <div v-if="profiles.length" class="row profile-container">
      <profile
        class="col p-0"
        v-for="profile in profiles"
        :key="profile.photo_id"
        :profile="profile"
      ></profile>
    </div>
    <div v-else>Заявок нет</div>
  </div>
</template>

<script>
import Profile from "./Profile.vue";
import Popup from "./Popup.vue";
import { mapActions } from "vuex";

export default {
  components: { Profile, Popup },
  name: "VerificationProfiles",
  created: async function () {
    this.getProfiles();
  },
  methods: {
    ...mapActions(["getProfiles"]),
  },
  computed: {
    profiles() {
      return this.$store.state.profiles;
    },
    isShowPopup() {
      return this.$store.state.isShowPopup;
    },
  },
};
</script>

<style scoped>
@media (max-width: 400px) {
  .profile-container {
    margin: 0 !important;
  }
}
</style>
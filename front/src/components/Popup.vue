<template>
  <transition @click="hidePopup">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <img class="photo" :src="profile.photo_prev" alt="photo" />
          <img class="photo" :src="profile.selfie_prev" alt="selfie" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Popup",
  methods: {
    ...mapActions(["hidePopup"]),
    hideScaledPopup() {
      this.hidePopup();
    },
  },
  computed: {
    profile() {
      return this.$store.state.popupData;
    },
  },
};
</script>

<style scoped>
.photo {
  max-width: 375px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  max-width: 900px;
  margin: 0px auto;
  padding: 30px 0;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
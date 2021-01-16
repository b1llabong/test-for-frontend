<template>
  <div class="border card-container pb-4 mb-2 mr-2">
    <div class="d-flex flex-row justify-content-between image-container">
      <div class="bg-light">
        <div class="title-photo py-1">Фото профиля</div>
        <img class="profile-photo" :src="profile.photo_prev" alt="photo" />
      </div>
      <div class="bg-light">
        <div class="title-photo py-1">Селфи</div>
        <img class="profile-photo" :src="profile.selfie_prev" alt="selfie" />
      </div>
    </div>
    <div
      class="d-flex flex-row justify-content-between my-3 p-1 request-container align-items-center"
    >
      <div class="request-text">
        <i class="far fa-clock"></i>
        Заявка, {{ new Date(profile.created_at).toLocaleString("ru-RU").slice(0, -3) }}
      </div>
      <div class="d-flex flex-row">
        <div class="btn-group">
          <button
            type="button"
            @click="verify"
            class="btn btn-verify btn-large"
          >
            <span class="icon-large">
              <i class="fas fa-user-shield"></i>
            </span>
          </button>
          <button
            type="button"
            @click="reject"
            class="btn btn-reject btn-large"
          >
            <span class="icon-large">
              <i class="far fa-window-close"></i>
            </span>
          </button>
        </div>
        <button
          type="button"
          @click="showScaledPopup"
          class="btn btn-scale ml-2 btn-large"
        >
          <span class="icon-large">
            <i class="far fa-eye"></i>
          </span>
        </button>
      </div>
    </div>
    <div class="d-flex flex-row justify-content-between p-1">
      <div class="d-flex flex-row">
        <div class="avatar">
          <img :src="profile.user.avatar" class="mr-3" alt="..." />
        </div>
        <div class="ml-2 text-left">
          <div class="user-name">
            {{ profile.user.name }}
            <span class="user-years">({{ profile.user.years }})</span>
          </div>
          <div class="user-location-text">{{ profile.user.city }}</div>
        </div>
      </div>
      <div class="mt-auto">
        <div class="btn-group btn-group-ban pr-0">
          <button
            type="button"
            @click="blockAccount"
            class="btn btn-sm btn-ban-account"
          >
            <span class="icon-small">
              <i class="fas fa-portrait"></i>
              <i class="fas fa-ban ml-1"></i>
            </span>
          </button>
          <button
            type="button"
            @click="blockDevice"
            class="btn btn-sm btn-ban-device"
          >
            <span class="icon-small">
              <i class="fas fa-mobile-alt"></i>
              <i class="fas fa-ban ml-1"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Profile",
  props: ["profile"],
  data() {
    return {
      data: {
        photo_id: this.profile.photo_id,
        user_id: this.profile.user.user_id,
      },
    };
  },
  methods: {
    ...mapActions([
      "verifyProfile",
      "rejectProfile",
      "blockUserAccount",
      "blockUserDevice",
      "showPopup",
    ]),
    verify() {
      this.verifyProfile(this.data);
    },
    reject() {
      this.rejectProfile(this.data);
    },
    blockAccount() {
      this.blockUserAccount(this.data);
    },
    blockDevice() {
      this.blockUserDevice(this.data);
    },
    showScaledPopup() {
      this.showPopup(this.profile);
    },
  },
  created() {},
};
</script>

<style scoped>
.btn-verify {
  background-color: #6dbb4a !important;
}
.btn-reject {
  background-color: #e48800 !important;
}
.btn-scale {
  background-color: #41cac0 !important;
}
.btn-ban-account {
  background-color: #e48800 !important;
}
.btn-ban-device {
  background-color: #ec6459 !important;
}
.card-container {
  background-color: #f1f2f7;
  max-width: 380px !important;
}
.profile-photo {
  max-height: 270px;
  max-width: 186px;
}
.image-container {
  height: 270px;
}
.user-name {
  color: #667fa0;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
}
.user-years {
  color: #aaa;
  font-size: 12px;
  font-weight: normal;
}
.user-location-text {
  color: #797979;
  font-size: 12px;
}
.icon-large {
  color: white;
  font-size: 14px;
}
.icon-small {
  color: white;
  font-size: 12px;
}
.avatar {
  width: 50px;
  height: 55px;
  overflow: hidden;
}
.avatar img {
  max-height: 100%;
  transform: translate(-15%, 0);
}
.btn-sm {
  display: flex !important;
  align-items: center;
  padding: 0 5px !important;
  height: 22px;
}
.btn-large {
  display: flex !important;
  align-items: center;
  justify-content: center;
  max-height: 30px;
  max-width: 35px;
}
.title-photo {
  color: gray;
  font-size: 14px;
}
.request-container {
  max-height: 30px;
}
.request-text {
  color: #e48800;
  font-size: 12px;
}
.btn-group-ban {
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
}
</style>
import { createStore } from "vuex";
import api from "../utils/api";

const store = createStore({
  state: {
    profiles: [],
    isShowPopup: false,
    popupData: {}
  },
  mutations: {
    GET_PROFILES(state, profiles) {
      state.profiles = profiles;
    },
    SHOW_POPUP(state, data) {
      state.isShowPopup = true;
      state.popupData = data;
    },
    HIDE_POPUP(state) {
      state.isShowPopup = false;
    }
  },
  actions: {
    async getProfiles({ commit }) {
      let profiles = await api.getData();
      commit('GET_PROFILES', profiles.data);
    },
    async verifyProfile({ commit }, data) {
      let response = await api.verify(data);
      if (response.status === "ok") {
        this.dispatch('getProfiles');
      }
    },
    async rejectProfile({ commit }, data) {
      let response = await api.reject(data);
      if (response.status === "ok") {
        this.dispatch('getProfiles');
      }
    },
    async blockUserAccount({ commit }, data) {
      let response = await api.blockAccount(data);
      if (response.status === "ok") {
        this.dispatch('getProfiles');
      }
    },
    async blockUserDevice({ commit }, data) {
      let response = await api.blockDevice(data);
      if (response.status === "ok") {
        this.dispatch('getProfiles');
      }
    },
    showPopup({ commit }, data) {
      commit('SHOW_POPUP', data);
    },
    hidePopup({ commit }) {
      commit('HIDE_POPUP');
    }
  }

});

export default store;
import { defineStore } from "pinia"
import EventService from '../services/EventService.js'

export const useUserStore = defineStore("user", {
  state() {
    return {
      user: "Marcin Berger"
    }
  },
  getters: {
    firstName() {
      return this.user.split(" ")[0] // NOTE: `this` refers to state
    }
  }
});

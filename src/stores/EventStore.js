import { defineStore } from "pinia"
import EventService from '../services/EventService.js'

export const useEventStore = defineStore("event", {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents() {
      return this.events.length
    }
  },
  actions: {
    addEvent(event) {
      this.events.push(event);
    }
  }
});

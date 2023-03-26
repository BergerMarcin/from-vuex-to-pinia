import { defineStore } from "pinia"
import EventService from '../services/EventService.js'

/* Pinia store module for Event
   Option API */
export const useEventStore = defineStore("event", {
  state() {
    return {
      events: [],
      event: {}
    }
  },
  getters: {
    numberOfEvents() {
      return this.events.length // NOTE: `this` refers to state
    }
  },
  actions: {
    // NOTE: Actions' names as a CRUD-action
    createEvent(event) {
      return EventService.postEvent(event)
        .then(() => this.events.push(event))
        .catch(err => {
          throw err
        })
    },
    readEvents() {
      return EventService.getEvents()
        .then(resp => this.events = resp.data)
        .catch(err => {
          throw err
        })
    },
    readEvent(id) {
      const existingEvent = this.events.find(event => event.id === id)
      if (existingEvent) {
        this.event = existingEvent;
        return Promise.resolve()
      } else {
        return EventService.getEvent(id)
          .then(resp => this.event = resp.data)
          .catch(err => {
            throw err
          })
      }
    }
  }
});

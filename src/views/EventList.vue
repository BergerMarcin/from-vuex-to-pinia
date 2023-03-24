<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from "../stores/EventStore"

export default {
  components: {
    EventCard
  },
  setup() {
    return {
      eventStore: useEventStore()
    }
  },
  created() {
    this.$store.dispatch('fetchEvents').catch(error => {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    })
  },
  computed: {
    allEvents() {
      return this.$store.state.events
    }
  }
}
</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in allEvents" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

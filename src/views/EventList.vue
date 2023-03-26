<script>
import EventCard from '../components/EventCard.vue'
import { useEventStore } from "../stores/EventStore"
import { useUserStore } from "../stores/UserStore"

export default {
  components: {
    EventCard
  },
  setup() {
    return {
      eventStore: useEventStore(),
      userStore: useUserStore()
    }
  },
  created() {
    this.eventStore.readEvents().catch(error =>
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error }
        })
    )
  },
  computed: {
    allEvents() {
      return this.eventStore.events;
    }
  }
}
</script>

<template>
  <h1>{{ userStore.firstName }}, your {{ eventStore.numberOfEvents }} events for Good!</h1>
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

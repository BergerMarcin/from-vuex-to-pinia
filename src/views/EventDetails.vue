<script>
import { useEventStore } from "../stores/EventStore"

export default {
  props: ['id'],
  setup() {
    return {
      eventStore: useEventStore()
    }
  },
  created() {
    this.eventStore.readEvent(this.id)
      .catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error }
        })
      })
  },
  computed: {
    event() {
      return this.eventStore.event
    }
  }
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import { useEventStore } from "../stores/EventStore"
import { mapStores } from "pinia";

/* Option API */
export default {
  props: ['id'],
  computed: {
    ...mapStores(useEventStore) //NOTE: ...mapStores(useEventStore) creates component-global-variable of name `event` (unique store name) + word `Store`
  },
  created() {
    this.eventStore.readEvent(this.id) //NOTE: eventStore is available but WebStorm does not understand it
      .catch(error => {
        this.$router.push({
          name: 'ErrorDisplay',
          params: { error }
        })
      })
  }
}
</script>

//NOTE: eventStore is available but WebStorm does not understand it
<template>
  <div v-if="eventStore.event">
    <h1>{{ eventStore.event.title }}</h1>
    <p>{{ eventStore.event.time }} on {{ eventStore.event.date }} @ {{ eventStore.event.location }}</p>
    <p>{{ eventStore.event.description }}</p>
  </div>
</template>

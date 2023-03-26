import { ref, computed } from "vue"
import { defineStore } from "pinia"

/* Pinia store module for User
   Composition API */
export const useUserStore = defineStore("user", () => {
  // states
  const user = ref("Marcin Berger")

  // actions
  const changeUser = (newUser) => { user.value = newUser }  // NOTE: action not used in components

  // getters
  const firstName = computed(() => {
    return user.value.split(" ")[0] // NOTE: You can get reactive variable directly (so `this` is not needed)
  })

  return { user, changeUser, firstName }
});

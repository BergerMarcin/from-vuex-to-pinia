<script setup>
import { storeToRefs } from "pinia"
import { useUserStore } from "../stores/UserStore"

const userStore = useUserStore()
const { user } = storeToRefs(userStore); //NOTE: storeToRefs keep reactivity for 100%
</script>

<template>
  <h1>Hello {{ user }}!</h1>
  <div class="form-container">
    <form>
      <label for="update-user">Your name:</label>
      <input v-model="user" placeholder="write your first and last name" type="text"/>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
const state = reactive({ username: 'Juan' })

//you need to pass all reactive object or getter function
watch(() => state.username, (newValue, oldValue) => {
  console.log(newValue)
  console.log(oldValue)
})
</script>

<template>
  <h4>Another example</h4>
  <p>This is the username: {{ state.username }}</p>
  <button @click="state.username = 'Alexa'">Change the username</button>
</template>

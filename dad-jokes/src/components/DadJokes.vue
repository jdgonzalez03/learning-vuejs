<script setup>
import { useFetch } from '@/shared/useFetch.js'
import { computed } from 'vue'

const BASE_URL = 'https://icanhazdadjoke.com/'
const OPTIONS_URL = {
  headers: {
    Accept: 'application/json'
  }
}
const {data: jokeData, error, fetchData} = useFetch(BASE_URL, OPTIONS_URL)
const joke = computed(() => jokeData?.value?.joke || 'Loading joke...')

const handleJoke = () => {
  fetchData()
}
</script>

<template>
  <header>
    <h1>Dad Jokes</h1>
  </header>
  <main>
    <p v-if="!error">{{ joke }}</p>
    <p v-else>Error: {{ error.message }}</p>
    <button @click="handleJoke">Give me another dad joke!</button>
  </main>
</template>

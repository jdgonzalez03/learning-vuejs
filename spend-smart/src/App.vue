<script setup>
import SplashScreen from './components/SplashScreen.vue'
import { defineAsyncComponent } from 'vue'

const Home = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/HomePage.vue'))
    }, 2500)
  })
})
</script>
<template>
  <Suspense>
    <template #default>
      <Home />
    </template>
    <template #fallback>
      <SplashScreen  />
    </template>
  </Suspense>
</template>

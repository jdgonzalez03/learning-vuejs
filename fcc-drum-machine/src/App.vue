<script setup>
import DrumMachine from '@/components/DrumMachine.vue'
</script>

<template>
  <main>
    <DrumMachine />
  </main>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  width: 100%;
  height: 100%;
}
</style>

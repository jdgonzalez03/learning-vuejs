<script setup>
  import { RouterView } from 'vue-router';
</script>

<template>
  <h1>Session</h1>
  <RouterView />
  <br>
  <RouterView name="register" />
</template>
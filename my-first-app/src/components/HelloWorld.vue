<script setup>
import AnotherComponent from './AnotherComponent.vue'
</script>

<template>
  <h1>Hello, World! <strong>(I'm a parent)</strong></h1>
  <AnotherComponent />
</template>


<!-- Local style -->
<style scoped>
h1 {
  color: blue;
}
</style>

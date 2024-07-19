<script setup>
  import { ref } from 'vue'
  let count = ref(0)

  const incrementeCounter = () => count.value++;
  const decrementCounter = () => count.value--;
  const resetCounter = () => count.value = 0;


</script>

<template>
  <h4>The count is {{count}}</h4>
  <button v-on:click="incrementeCounter">Increment</button>
  <button v-on:click="decrementCounter">Decrement</button>
  <button @:click="resetCounter">Reset</button>
</template>
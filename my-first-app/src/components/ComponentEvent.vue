<script setup>
</script>

<template>
  <h4>Incrmente the count outside of this component</h4>
  <button @click="$emit('incrementCounter')"> + </button>
</template>
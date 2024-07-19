<script setup>
  const props = defineProps(['name']);
</script>

<template>
  <p>Esta es una prop: {{ props.name }}</p>
</template>
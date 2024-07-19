<script setup>
  import { ref } from 'vue'

  let isVisible = ref(false)


</script>

<template>
  <p v-if="isVisible">This paragraph will be show or hide in function of value of isVisible</p>

  <p v-else>The another paragraph is hide because the value of "isVisible" is: {{isVisible}}</p>

  <button @click="isVisible = !isVisible">Change the visibility</button>
</template>
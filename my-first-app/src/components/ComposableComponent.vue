<script setup>
  import { ref } from 'vue';
  import { useMouse } from '../shared/useMouse';
  import { useFetch } from '../shared/useFetch';

  const url = ref('...')

  const { x, y } = useMouse()
  const { data, error} = useFetch(url)



</script>

<template>
  <p>Mouse position is at: {{ x }}, {{ y }}</p>
  <h4>Another example using (useFetch my own composable)</h4>

  <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
  <div v-else-if="data">
    Data loaded:
    <pre>{{ data }}</pre>
  </div>
  <div v-else>Loading...</div>
</template>
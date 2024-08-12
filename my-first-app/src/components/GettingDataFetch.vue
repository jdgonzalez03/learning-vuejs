<script setup>
  import { ref } from 'vue';
  const data = ref(null)


  const fetchData = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => data.value = json)
      .catch(error => console.error(`Error fetching data: ${error}`))
  }
</script>

<template>
  <h4>Using fetch with VueJS</h4>
  <button @click="fetchData">Get data from API</button>
  <div>
    <h4>Data:</h4>
    <pre>{{data}}</pre>
  </div>
</template>
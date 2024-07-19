<script setup>
  import { ref } from 'vue'

  const formData = ref({username:"", email:"", password:""})
</script>

<template>
  <form @submit.prevent>
    <input type="text" placeholder="Please enter yoru user" v-model="formData.username">
    <input type="email" placeholder="Please enter your email" v-model="formData.email">

    <input type="password" placeholder="Please enter your password" v-model="formData.password">

    <button type="submit">Submit</button>
  </form>

  <h4>Your data</h4>
  <ul v-for="(value, key) in formData" :key="value" >
    <li>{{key}}: {{value}}</li>
  </ul>

</template>
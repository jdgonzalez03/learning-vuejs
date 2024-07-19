<script setup>
defineProps({
    firstName: {
      type: String,
      required: true,
      default: 'Anonymous'
    },
    lastName: String,
    friends: Array,
    userInfo: Object
  })
</script>

<template>
  <p>This is my firstName: {{firstName}}</p>
  <p>This is my lastName: {{lastName}}</p>


  <p>{{ friends }}</p>
  <p>{{ userInfo }}</p>

  <h4>Iterating the friends</h4>
  <ul v-for="(friend, index) in friends" :key="index">
    <li>{{ friend }}</li>
  </ul>
  
  <h4>Iterating the userInfo</h4>

  <ul v-for="(info, i) in userInfo" :key="i">
    <li>{{ info }}</li>
  </ul>
</template>
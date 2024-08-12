<script setup>
  import {ref} from 'vue'
  import ComponentOne from './ComponentOne.vue';
  import ComponentTwo from './ComponentTwo.vue';
  import ComponentThree from './ComponentThree.vue';

  const currentTab = ref('ComponentOne')

  const tabs ={
    ComponentOne,
    ComponentTwo,
    ComponentThree
  }

</script>

<template>
  <p>Main component</p>

  <button @click="currentTab = 'ComponentOne'">What is HTML?</button>
  <button @click="currentTab = 'ComponentTwo'">What is CSS?</button>
  <button @click="currentTab = 'ComponentThree'">What is JS?</button>

  <!-- Dynamic -->
  <component :is="tabs[currentTab]" />
</template>
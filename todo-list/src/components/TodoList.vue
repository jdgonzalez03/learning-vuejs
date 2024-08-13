<script setup>
import { ref } from 'vue'

const newTask = ref(null)
const tasks = ref([])

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}

const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>
<template>
  <h1>Todo List</h1>
  <div>
    <input type="text" v-model="newTask" @keyup.enter="addTask" placeholder="Enter a new task" />
    <button @click="addTask">Add new task</button>
  </div>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      {{ task }}
      <button @click="removeTask(index)">Remove task</button>
    </li>
  </ul>
</template>

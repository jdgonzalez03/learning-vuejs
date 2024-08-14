<script setup>
import { ref, reactive } from 'vue'
import NavBar from './NavBar.vue'
import { useUniqueId } from '../shared/useUniqueId'

const todos = ref([
  {
    id: 0,
    title: 'Learn VueJS',
    description: 'Watch videos and read the docs',
    completed: false
  }
])

const newTask = reactive({
  id: null,
  title: '',
  description: '',
  computed: false
})

const addTask = () => {
  newTask.id = useUniqueId()
  todos.value.push({ ...newTask })
  console.log(newTask.id)

  //Reset values
  newTask.id = null
  newTask.title = ''
  newTask.description = ''
  newTask.completed = false
}

const findTodo = (id) => {
  return todos.value.findIndex((todo) => todo.id === id)
}

const removeTask = (id) => {
  const index = findTodo(id)
  todos.value.splice(index,1)
}
</script>
<template>
  <NavBar />

  <!-- Form to add new task -->
  <div class="container d-flex justify-content-center mt-4">
    <form class="row g-3"  @submit.prevent="addTask">
      <div class="col-auto d-flex align-items-center">
        <label for="inputTitle" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="inputTitle"
          placeholder="Learn Vue 3"
          v-model="newTask.title"
        />
      </div>
      <div class="col d-flex align-items-center">
        <label for="inputDescription" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="inputDescription"
          placeholder="Read Docs"
          v-model="newTask.description"
        />
      </div>
      <div class="col-auto d-flex align-items-center">
        <button type="submit" class="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  </div>

  <!-- Table to render the tasks -->
  <div class="container mt-4">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Todo</th>
          <th scope="col">Description</th>
          <th scope="col">Complete</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <th scope="row">{{ todo.title }}</th>
          <td>{{ todo.description }}</td>
          <td>
            <input class="form-check-input" type="checkbox" :checked="todo.completed" />
          </td>
          <td>
            <button @click="removeTask(todo.id)" class="btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
label {
  margin: 12px;
}

#inputDescription {
  width: 20em;
}

.btn-primary {
  min-width: 100px;
}
</style>

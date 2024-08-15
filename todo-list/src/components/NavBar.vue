<script setup>
  import { ref } from 'vue';

  const emit = defineEmits(['apply-filters'])

  const todoFiltered = ref('')
  const filter = ref('all')



  const handleSearch = (event) => {
    event.preventDefault()
    emit('apply-filters', { filter: filter.value, todoFiltered : todoFiltered.value })
  }

</script>

<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">VueJS Todo List</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-0 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
        </ul>
        <form class="d-flex" role="search" @submit.prevent="handleSearch">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="filtersTodo" id="inputAllTodo" checked value="all" v-model="filter">
            <label class="form-check-label" for="inputAllTodo">
              All
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="filtersTodo" id="inputCompletedTodo" value="completed" v-model="filter">
            <label class="form-check-label" for="inputCompletedTodo">
              Completed
            </label>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="radio" name="filtersTodo" id="inputUncompletedtodo" value="uncompleted" v-model="filter">
            <label class="form-check-label" for="inputUncompletedtodo">
              Uncompleted
            </label>
          </div>
        
        
          <input class="form-control me-2" type="search" placeholder="Keywords" aria-label="Search" v-model="todoFiltered">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

</template>

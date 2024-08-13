<script setup>
  import Navbar from './Navbar.vue';
</script>
<template>
  <Navbar />

  <div class="container d-flex justify-content-center mt-4">
    <form class="row g-3">
      <div class="col-auto d-flex align-items-center">
        <label for="inputTitle" class="form-label">Title</label>
          <input type="text" class="form-control" id="inputTitle" placeholder="Learn Vue 3">
      </div>
      <div class="col-auto d-flex align-items-center">
        <label for="inputDescription" class="form-label">Description</label>
        <input type="text" class="form-control" id="inputDescription" placeholder="Read Docs">
      </div>
      <div class="col-auto d-flex align-items-center">
        <button type="submit" class="btn btn-primary">Add new task</button>
  
      </div>
    </form>
  </div>
  

</template>

<style scoped>
  label{
    margin: 12px;
  }

  
</style>

